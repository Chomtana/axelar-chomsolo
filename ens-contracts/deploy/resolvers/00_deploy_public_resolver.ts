import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre
  const { deploy, fetchIfDifferent } = deployments
  const { deployer } = await getNamedAccounts()

  const registry = await ethers.getContract('ENSRegistry')
  const nameWrapper = await ethers.getContract('NameWrapper')
  const controller = await ethers.getContract('ETHRegistrarController')
  const reverseRegistrar = await ethers.getContract('ReverseRegistrar')

  const deployArgs = {
    from: deployer,
    args: [
      registry.address,
      nameWrapper.address,
      controller.address,
      reverseRegistrar.address,
    ],
    log: true,
  };
  const publicResolver = await deploy('PublicResolver', deployArgs)
  if(!publicResolver.newlyDeployed) return;

  console.log('PublicResolver address', publicResolver.address)

  const tx = await reverseRegistrar.setDefaultResolver(publicResolver.address, {
    from: deployer,
  })
  console.log(
    `Setting default resolver on ReverseRegistrar to PublicResolver (tx: ${tx.hash})...`,
  )
  await tx.wait()
}

func.id = 'resolver'
func.tags = ['resolvers', 'PublicResolver']
func.dependencies = ['registry', 'ETHRegistrarController', 'NameWrapper', 'ReverseRegistrar']

export default func
