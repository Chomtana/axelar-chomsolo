import { Interface } from 'ethers/lib/utils'
import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { keccak256 } from 'js-sha3'

const { makeInterfaceId } = require('@openzeppelin/test-helpers')

function computeInterfaceId(iface: Interface) {
  return makeInterfaceId.ERC165(Object.values(iface.functions).map((frag) => frag.format("sighash")));
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, fetchIfDifferent } = deployments
  const { owner } = await getNamedAccounts()

  const nameWrapper = await ethers.getContract('NameWrapper')
  const resolverContract = await ethers.getContract('PublicResolver')
  const controller = await ethers.getContract('ETHRegistrarController')
  const registrar = await ethers.getContract('BaseRegistrarImplementation')
  const root = await ethers.getContract('Root')

  const artifact = await deployments.getArtifact("NameWrapper");
  const interfaceId = computeInterfaceId(new Interface(artifact.abi));

  const tx2 = await resolverContract.connect(await ethers.getSigner(owner))
                                    .setInterface(ethers.utils.namehash('axl'), interfaceId, nameWrapper.address);
  console.log(
    `Setting NameWrapper interface ID ${interfaceId} on .axl resolver (tx: ${tx2.hash})...`
  )
  await tx2.wait()

  const tx3 = await resolverContract.connect(await ethers.getSigner(owner))
                                    .setInterface(ethers.utils.namehash('axl'), interfaceId, controller.address);
  console.log(
    `Setting ETHRegistrarController interface ID ${interfaceId} on .eth resolver (tx: ${tx3.hash})...`
  )
  await tx3.wait()

  const tx4 = await root
    .connect(await ethers.getSigner(owner))
    .setSubnodeOwner('0x' + keccak256('axl'), registrar.address)
  console.log(
    `Setting owner of eth node to registrar on root (tx: ${tx4.hash})...`,
  )
  await tx4.wait()
}

func.id = 'resolver-interface'
func.tags = ['resolver-interface']
func.dependencies = ['NameWrapper', 'PublicResolver', 'ETHRegistrarController', 'Root', 'BaseRegistrarImplementation']

export default func
