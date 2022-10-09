import { Interface } from 'ethers/lib/utils';
import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const { makeInterfaceId } = require('@openzeppelin/test-helpers')
const axelarConfig = require('../../axelarConfig.json')

function computeInterfaceId(iface: Interface) {
  return makeInterfaceId.ERC165(Object.values(iface.functions).map((frag) => frag.format("sighash")));
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, fetchIfDifferent } = deployments
  const { deployer } = await getNamedAccounts()

  const registrar = await ethers.getContract('BaseRegistrarImplementation')
  const priceOracle = await ethers.getContract('StablePriceOracleUSD')
  const reverseRegistrar = await ethers.getContract('ReverseRegistrar')
  const nameWrapper = await ethers.getContract('NameWrapper')

  // console.log(axelarConfig)

  const deployArgs = {
    from: deployer,
    args: [
      registrar.address,
      priceOracle.address,
      6, // 6 seconds for testnet testing
      86400,
      reverseRegistrar.address,
      nameWrapper.address,
      axelarConfig.usdc[network.name],
      axelarConfig.axelarGateway[network.name],
      axelarConfig.axelarGasService[network.name],
    ],
    log: true,
  };
  const controller = await deploy('ETHRegistrarController', deployArgs)
  if(!controller.newlyDeployed) return;

  // Only attempt to make controller etc changes directly on testnets
  if(network.name === 'mainnet') return;

  const tx1 = await nameWrapper.setController(controller.address, {
    from: deployer,
  })
  console.log(
    `Adding ETHRegistrarController as a controller of NameWrapper (tx: ${tx1.hash})...`,
  )
  await tx1.wait()

  const tx2 = await reverseRegistrar.setController(controller.address, {
    from: deployer,
  })
  console.log(
    `Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: ${tx2.hash})...`,
  )
  await tx2.wait()

  const artifact = await deployments.getArtifact("IETHRegistrarController");
  const interfaceId = computeInterfaceId(new Interface(artifact.abi));
  const provider = await ethers.getDefaultProvider();
  // const resolver = await provider.getResolver("axl");
  // if(resolver === null) {
  //   console.log("No resolver set for .eth; not setting interface for ETH Registrar Controller");
  //   return;
  // }
  // const resolverContract = await ethers.getContractAt('PublicResolver', resolver.address);
  // const tx3 = await resolverContract.setInterface(ethers.utils.namehash('axl'), interfaceId, controller.address);
  // console.log(
  //   `Setting ETHRegistrarController interface ID ${interfaceId} on .eth resolver (tx: ${tx3.hash})...`
  // )
  // await tx3.wait()
}

func.tags = ['ethregistrar', 'ETHRegistrarController']
func.dependencies = [
  'ENSRegistry',
  'BaseRegistrarImplementation',
  'ExponentialPremiumPriceOracle',
  'ReverseRegistrar',
  'NameWrapper',
]

export default func
