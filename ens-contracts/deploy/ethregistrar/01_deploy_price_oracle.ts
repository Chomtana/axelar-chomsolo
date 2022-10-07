import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments, network } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  if (network.name === 'mainnet') {
    return true
  }

  const dummyOracle = await deploy('DummyOracle', {
    from: deployer,
    args: ['160000000000'],
    log: true,
  })

  await deploy('StablePriceOracleUSD', {
    from: deployer,
    args: [
      [
        10000,
        1000,
        100,
        30,
        10,
      ]
    ],
    log: true,
  })
}

func.id = 'price-oracle'
func.tags = ['ethregistrar', 'StablePriceOracleUSD', 'DummyOracle']
func.dependencies = ['registry']

export default func
