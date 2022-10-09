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
        50_000000,
        10_000000,
        5_000000,
        3_000000,
        1_000000,
      ]
    ],
    log: true,
  })
}

func.id = 'price-oracle'
func.tags = ['ethregistrar', 'StablePriceOracleUSD', 'DummyOracle']
func.dependencies = ['registry']

export default func
