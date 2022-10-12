# ENS

[![Build Status](https://travis-ci.org/ensdomains/ens-contracts.svg?branch=master)](https://travis-ci.org/ensdomains/ens-contracts)

For documentation of the ENS system, see [docs.ens.domains](https://docs.ens.domains/).

## Deployments

### ETH Goerli

starting
deploying "ENSRegistry" (tx: 0x22aca70edba822bfa1213dd11b191d094d756486a9f844a67f9a584c3a5d8ba8)...: deployed at 0x5611bFeAB50674a1A0D09d28a2372a8A2A727F95 with 743372 gas
deploying "Root" (tx: 0x57f18823844b138f9e648b5162a1ede665eb6b35a281dac34691f88db947b315)...: deployed at 0xE2d9138F2798581132794F5594d05094da516d26 with 665132 gas
Setting owner of root node to root contract (tx: 0x913ab47df04674862c4ab96952de8fba5374ba86a7187670eb0270cea8f3a005)...
Transferring root ownership to final owner (tx: 0xc1a9010ab285cf2246b34708bba81b83799557b377153e1cc54f5e4081ff8870)...
Setting final owner as controller on root contract (tx: 0x847e4e78cebb97d1a5a2985b89f7095e1aa6cff25b6afa5350e8383e06533447)...
deploying "BaseRegistrarImplementation" (tx: 0x58504e24503eacbc64fff375df5d52f32e4e2c1b33d1eeb03b59709e3a38b1f1)...: deployed at 0x0955066A09756DFffBC290BEb4fF85D3DF5a4336 with 2119237 gas
Adding owner as controller to registrar (tx: 0x043e62704b340ca01c0e7f8cbefebafa10375eb0a33d6496ab9ff6a4da6132d8)...
deploying "DummyOracle" (tx: 0x652c0fd67ba1eee6c27b2dd97b7dd27e4007ceccb3a80aae6f818fdacd56c09f)...: deployed at 0x6300cFbd36d7545Ab2933392925735217b84173d with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0xac0ef958d201ef3136dc97ac4d8aa8b39bd59aa828d0750cec403f127ec8615d)...: deployed at 0xF9B25b4106ff1d94720Dff402f66322c8a73e064 with 532591 gas
deploying "StaticMetadataService" (tx: 0xb47ac6dd2a1c4bf9411d54cf780cd934a7ee09e7e57438cd7445812d2f1e6ee4)...: deployed at 0x625f76EafB6c6b303485306aFAB76067F0e63BB3 with 240222 gas
deploying "NameWrapper" (tx: 0xbbea2e223fe9bd3904670381d55c9546e52066e2aca3f2250c9da36046cb76ef)...: deployed at 0xd032792b8d8B60bFc82fAa3AE5Fec62BECD67177 with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0x2e739e31ed21b67e77e65930170b3305ebd6714a24d8608651d2629c97dad808)...
deploying "ReverseRegistrar" (tx: 0x7fc00a1b8f27aa44fb4f9ba5d24cb593961571f07472f8dc544442a26a5737bb)...: deployed at 0xF6769c9aC171fe37041D2C05efb3496F293937DF with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x49c71d93c88a1f62401d981273d5d27d9801e5d4b094e8ed5d0b630126e08bfc)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x6dbca5f0e2c9cb4ba4b863a4489f44caae539e9f4cdaa1933b02d3c0e39afa5a)...
deploying "LegacyETHRegistrarController" (tx: 0xa97c0b5789b179a6d9b4e8d1af5bc13a6d7160e2ea6123bfe9f1609033e71a54)...: deployed at 0x57426e6Ae4677816927905aB0328c185DcE6C62C with 1854059 gas
Adding controller as controller on registrar (tx: 0xbfb547cc3ca533e4703eac1b2353e8ba6ba1a7f96079fd9c39ff216a9bd664fa)...
Setting controller of ReverseRegistrar to controller (tx: 0x064e0d5236788ab553a4badb282c46e223aa784369850ed1ef788abec183586e)...
Running unwrapped name registrations...
ETHRegistrarController address 0x22B20Ab1FC50f92E3CB384f237212257Fd56D640
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0xa2a1ff314f057ac7fb21a1f6be6e4b4cd9264de30289ef9acaa8069345a650fc)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0x88e80fabe670574575de183223f66296cdb8911009f385dc8bddee843600b658)...
PublicResolver address 0x7BB89F0Ba25c371E0B2dA2b50e0a513d512D1c3a
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0x06253abf7a71193d9c28a9d9297e6ad3a01f3b67129487048352e0f19b2014c9)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0x8c1a9cfe6c885b26a7afda0b238c0304d2b5f0dcbe8e929862aa08f2d76d49d7)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0xfa03385348bc3d054f523c30f1b03caf422449db946018479db4f24b4b0c098b)...
Setting owner of eth node to registrar on root (tx: 0x4f6ab21ea4c9f4df32fc317eba82c0e0af64dd44e8e82f678495a9f3711feee0)...

## Moonbase

starting
deploying "ENSRegistry" (tx: 0x20aaf46c4f32cf3cfadd3c3439a15f3673bbe8ce06a8b6f4abef4fdcbead815e)...: deployed at 0x7D35D5Bc1Ad11a82a2ea68f629Bb4a4632fE5777 with 743372 gas
deploying "Root" (tx: 0xb2156e5969f2f6e4d046d9c8969e001b637ddb290e8467839e5d1aac9141d1ed)...: deployed at 0x3F0184acC8ac3f1c74dcCd78fA851B25AA3638c2 with 665132 gas
Setting owner of root node to root contract (tx: 0xf0e54bc5547a58bb88731444948e3a5e23ddad2a9c5460a954d76b45b0c677d2)...
Transferring root ownership to final owner (tx: 0x814f76634a4eb8ae9f8bc306075eca35e048a657d9ed0b5fbb2873c3f9866fe5)...
Setting final owner as controller on root contract (tx: 0xdf2cbac585d2a0a5bdda14e8c812214abf10c86a0e7fda72bf2958bf22301b31)...
deploying "BaseRegistrarImplementation" (tx: 0x1d8eb5d6ff5a4f30ff0d55772979773831bd8d40152f2485ff0bb9471251a0da)...: deployed at 0x092423a50857Ee9493a1b2eaD79DF2e6D0899c12 with 2119237 gas
Adding owner as controller to registrar (tx: 0x2b50a688b0a9c1d91e15762428ba617e45c290b74dc517eecc277ac9ad17d55e)...
deploying "DummyOracle" (tx: 0xe9ac1e1c53a72cb1f4a6d7cb11e20c3cddea6d9490fce740dd366e41c0db1057)...: deployed at 0xC1ab3d8bB321434C320837C32deA70dcfc6c85C2 with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x79e2faf59e48040e390b34e4377b5b618538448e44c43f99325e8af53d83c267)...: deployed at 0xbba7C056ac1E06fc08C451EeAA13893B0E8A1c34 with 532591 gas
deploying "StaticMetadataService" (tx: 0x9ce3b4875221a080a140be81464cb05883f638c195e2e648aee1ed992ce8d021)...: deployed at 0x9149CF9e73f67B259490ec533c635fCFf28D53eA with 240222 gas
deploying "NameWrapper" (tx: 0x9a709276af3d70c3c86ab3f340e9fb99a00e4657ed6bc953d55bdfe8feeabb82)...: deployed at 0xed5696b468900Ba43Fe5E3f78eE76D5c8570Ed0f with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0xed45fc49222f3190ad50ac0da5f6d875402fba024b61aee1e127a199af9e857b)...
deploying "ReverseRegistrar" (tx: 0x99936616cbb04c3467287499f2725c2a5d14ccebb1e0e7803e8ade30b04c8bde)...: deployed at 0xE6579A93488A6fa66FA4d3F8A35873d1aC730d46 with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x0c3c9740f02bafc028a7e170e9876b98b439905dc67ca02d3feffaf722891fa4)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x569f8e2660a2354dc53badd97d5ae44f26ca96133f576980a88e8523f192fecd)...
deploying "LegacyETHRegistrarController" (tx: 0x14d36c0b0fec9219544b3ce52b0bd2e2a01a623ca05d18c6fc294f13d44ee6d2)...: deployed at 0xdE78d43279b0C72FD533193f1b67DedF92c9F374 with 1854059 gas
Adding controller as controller on registrar (tx: 0x6e5b49249fa67eff275125c1d7b14b54776de577df4d257136f75c50dab655da)...
Setting controller of ReverseRegistrar to controller (tx: 0x46c021b3b085115c57f3711a8c1ef9f309ab3f0cc6254f8d4eb92fae6f2e7c1f)...
Running unwrapped name registrations...
ETHRegistrarController address 0x96277aA0f41Bf47cAb788cCE3b710a8b2542cEc3
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0x4bc155a01b4231b46eec9e2ceb99cf41290ef9a205f737bf1690f9de4e493c26)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0xdfc4756edeaa1a1c52cf9389f89fe362627087aa865b334e1ecc5472e763925b)...
PublicResolver address 0xE5a7fE5464513806ad89D589716C9764289cc4c2
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0xabc36b5f4cc2270465c36b5fdece2e581831bf80c95426ec9869ded1751daa9b)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0xddb5464220b27539bd643fc32ee5006688e6b615447e1eddecdc8716087aa6ab)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0x7c668e472d45c561f743d147af5edc7b389a23f40ff94d835a7908e74e757a94)...
Setting owner of eth node to registrar on root (tx: 0xa9bfdf94c1284bfb93f69d48675901188b0815ff92b64689a1e15fc24e16ff81)...

## Fantom

starting
deploying "ENSRegistry" (tx: 0x0641c9aa694b89f92a55fdc4317989a7956149f991b176684f418d9afbfccc6c)...: deployed at 0x2699581BB0d22aa9E848467858e14F4401A1E446 with 743372 gas
deploying "Root" (tx: 0xa0052f035031531cbe2c6c38a6017d49c94db307885c995732e470e155e170a6)...: deployed at 0x9a6392EA34F813811cc7f82CA9c4bC54960F06c4 with 665132 gas
Setting owner of root node to root contract (tx: 0xd046ad4b1b894246cc756fe8c4d7ddbd1803605ac1fb09647522c40c9d5bbcb2)...
Transferring root ownership to final owner (tx: 0x5be16a58d0686be8457ac26af3bd3488c4bc58eaecba104a8fe006cb859c91a6)...
Setting final owner as controller on root contract (tx: 0xd39b0d11cdb3da873402b6f49b58cf85b7fa316330875597b081c0b1acd21edb)...
deploying "BaseRegistrarImplementation" (tx: 0xee5ef441ef0b91e73debf144e958e380ccaee03a36aa77c98ca0ea7f0ae84db9)...: deployed at 0x25B6B8aB6e65Eb2cDBfDAc4a4eaf0922bC9dA75e with 2119237 gas
Adding owner as controller to registrar (tx: 0x45b6df752edfc3075bb92d0ba2eff3eef0a485d814c97f057119b890ceb59307)...
deploying "DummyOracle" (tx: 0x4fc9193859b88e50207adac78a42c1b15014539289831ea2ccb34e9050759ac7)...: deployed at 0xC0baE6312A0F35c1cE937fFa32d0FcCEe4E15c04 with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x8e8a045c0726388eeb0592b87848fbe262f753282a33f81ea50d2e5668ede047)...: deployed at 0x17A1fd0846E66E97b3a1d9bF702d8b6B38c1FA6a with 532591 gas
deploying "StaticMetadataService" (tx: 0xcbde8497bd6c793045768a2aa6d0eae986cef4eb20c06367b815a71f8a250479)...: deployed at 0xbddF39556E6C9F58b4C747BEe6080E1a7fEF1A0c with 240222 gas
deploying "NameWrapper" (tx: 0x369000f458149dcc108bd3c9a773f9ac215bda462d63ff6da81eceedbc050b86)...: deployed at 0xFD2d987Cb5ef7dC5DBD86955fd4f0482c5B5a7Fc with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0x9419ad284b5f0c01f1c3fd2e450a3e603ad38eb37ff0c880311b44824162e036)...
deploying "ReverseRegistrar" (tx: 0x0353a64c154a392bdb0ceb3533b6eab64093c98a2bf9b8e957f3d89ec7f24ada)...: deployed at 0x252aC4833bbC965A30D983AF147FCaE803d2A2bc with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x56fecb3cb001b9896c864e5055831b033f34ee91fc6663150300b76ae80083ff)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x3a5d7da4adb9997191cef6c30c07ac537b2e490e744c1a01cdfe3389eb18c801)...
deploying "LegacyETHRegistrarController" (tx: 0xf4fefd8ed1f9b207009df614d1a29e4587253fea0a50ab7e3a9b73b28e27a6a8)...: deployed at 0x7a04Ea1F1707e2Ef3db4AD0fB24DCe4692a770cc with 1854059 gas
Adding controller as controller on registrar (tx: 0x3b31a8b82aa00458e9010850ca0676acb3f2b3616b4c13019a44cd57a7b30f19)...
Setting controller of ReverseRegistrar to controller (tx: 0xa6f7c99341bc75d8bf9ae1ec3e2a2d94e83283736be2635e40e4f9d754967c41)...
Running unwrapped name registrations...
ETHRegistrarController address 0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0x03d451155fac6ed444baa21f335446dded21e07bb8ba64cd338d5d397a30605d)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0x77f1b39237549c88859a8c7ea71d8453f85e70d837a4e644ab29bf190a04173f)...
PublicResolver address 0x844cCDa95040f1Cd3E887BDc15C2B6eB376de77e
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0xa9699d11b2832d5a7a2ecbd4927c8205ec6955aaa0f555a12e7975adc52af66d)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0xa297e219dccecf67abb6fc5498a8e10fce4a5730d94b2864478332d42c40abf3)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0x51c7811d027db4771672ee98d5ba517ea25328d515e4c4f57f7dc1efd79b7eac)...
Setting owner of eth node to registrar on root (tx: 0xe7c5f9ebaf1e1b7bf2209c471d489c9a6e795b3250d7cd15417a42144b2dc5f0)...

## Polygon
starting
deploying "ENSRegistry" (tx: 0xcf5f145c1adc35452d240cf91c65693e73ab96f783463b1f8302a14a9f450cb1)...: deployed at 0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A with 743372 gas
deploying "Root" (tx: 0x3408bbe3fbb6966e850add6e9ef019aaa3aca0c24c46b7fbd31247778275064e)...: deployed at 0x7a73Df5f34471562abF632603D0Cc67092920fD4 with 665132 gas
Setting owner of root node to root contract (tx: 0xcefcc9d5b6b4ed83bb49e915629f706923cf75ef9d11ae5ab566c5d486210af7)...
Transferring root ownership to final owner (tx: 0xe30d553d24296871e5a52fb3b625756bab4dcbd17b48ea41d9730aedbbd34333)...
Setting final owner as controller on root contract (tx: 0x2f1be25e1c9c0ee88d44bda0c2cdb98c926191700435887821f8869e23f127d0)...
deploying "BaseRegistrarImplementation" (tx: 0x8ee1f754f8b0cb8e1d8c5bec4b8591748de935f3b1ffc9c6e632bc442a7d1aa2)...: deployed at 0x7D35D5Bc1Ad11a82a2ea68f629Bb4a4632fE5777 with 2119237 gas
Adding owner as controller to registrar (tx: 0x4fbbbe1ee520613131a5fed9817f5bb18a1d1d658b3cdb87ff3e9f99e8591487)...
deploying "DummyOracle" (tx: 0x938da424b40f7f33cc29550ac2dea527bcd4759b884bccc30a66811d726bbcd9)...: deployed at 0x06a9E59c99E7340Ab1aA152D78AF153Ea9b69Def with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x879f66190722b259d0659e9528079ab1ef99a8989a9c988e60034a80cea425cd)...: deployed at 0xe4b95BcD24d220c1A17E0B8a060c7c18e7B8A551 with 532591 gas
deploying "StaticMetadataService" (tx: 0x6e8cd38d77e87f2bbb61d6b8eae0e33287f8a2f6884edc469f01886e8b6fe363)...: deployed at 0xcd311f15553A1F6300c454F1330F365103885F10 with 240222 gas
deploying "NameWrapper" (tx: 0xe3f6e18a6cf3f340bf53f5267b75436eff924987406c111bfd5465dda4f2a09a)...: deployed at 0xc488722f8a675B6b49DcB3D209B650d7185B75Df with 5274613 gas
Adding NameWrapper as controller on registrar (tx: 0x7a6757576212ab47c10a3534f427a5bced68af726e71e0eb59be4bc5283b8801)...
deploying "ReverseRegistrar" (tx: 0x4d0b3fe36aa5dc005cf33ddd2ed66d76b6b2d0f3910cac6386c2f0d80ffd4e56)...: deployed at 0xD103493B6566A89D8a886eFD203D9b94d9d3f94C with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0xcd634d9ba438768db047070a7097081c80719d7aa0987fe292bc08882a209093)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x106ad59fe458ddb7835841147b81ac3eaf9ad3012232d8693ad52336d94624e1)...
deploying "LegacyETHRegistrarController" (tx: 0x55be90900d86d85dfec59b10430006a39605f165d269af523ab6667d9b009b23)...: deployed at 0x9149CF9e73f67B259490ec533c635fCFf28D53eA with 1854059 gas
Adding controller as controller on registrar (tx: 0x6cb286474132e14118243e96bc2b6b70a74e58437b83ce00ca7d8799feb647bd)...
Setting controller of ReverseRegistrar to controller (tx: 0xb6fdd2abb92d42762273407bb8ec3fa0f8c4030ede4fb818a07a1e0cfc54029f)...
Running unwrapped name registrations...
ETHRegistrarController address 0xE6579A93488A6fa66FA4d3F8A35873d1aC730d46
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0x15f228f183e84647be2b6ff838fc66681660155457f0e592f87e41fb554da595)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0x9e7f275764382b376c1960b62021fd5feef92146bc00c46f2fde49653206d545)...
PublicResolver address 0xdE78d43279b0C72FD533193f1b67DedF92c9F374
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0xdf9647311cd210ff8585b4fbb11e286d938a40e147121ada4a33c43cd8860a03)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0x72b898ec305a47c0cbe6daf4fe7538aa64768eff248a6266834fd5fb7a842e1f)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0x3424462d7c3b3cffcffed9071502dc769fd84d269a47f9b7b87fdc7a33399576)...
Setting owner of eth node to registrar on root (tx: 0x81b3bc0c0c7eb0e82a01107b9aef7d136500a22bcad57a701ad78cab4755fae6)...

## Avalanche
starting
deploying "ENSRegistry" (tx: 0x4770c42d1843e2cda4352059056f64be4315ffd76fdaa7afebfd7c75a775299f)...: deployed at 0x2699581BB0d22aa9E848467858e14F4401A1E446 with 743372 gas
deploying "Root" (tx: 0xc3d23660ac3c8a8e74c28791be65c05bdbf625300c84b6d9b7212079b061ce91)...: deployed at 0x9a6392EA34F813811cc7f82CA9c4bC54960F06c4 with 665132 gas
Setting owner of root node to root contract (tx: 0x3652e2eec03ea6e9d8638746c3a852f2548fbaf75cb1c8cdca2beed9b467ac75)...
Transferring root ownership to final owner (tx: 0xb2fb61273160cee11a220057d002c83f162502aa9e6a647abd3aa676b47aabfb)...
Setting final owner as controller on root contract (tx: 0x7626ba3828ad53a7e1a5d4447402cc5f99b7971603acda24c8113b3e41d5d20a)...
deploying "BaseRegistrarImplementation" (tx: 0xf27fe97d50217ed1335c9576c0668b8cda9e52a0a13ab31fa3849afa0ecdaa53)...: deployed at 0x25B6B8aB6e65Eb2cDBfDAc4a4eaf0922bC9dA75e with 2119237 gas
Adding owner as controller to registrar (tx: 0xd0b4ed8fd80327a6c13f865e0223c14d8198827cb7922d931793da2dbbd7fa9b)...
deploying "DummyOracle" (tx: 0x4942fb822fbe7ce3d16261a28ad398220b945816e78a98a202aea0e8b2de6244)...: deployed at 0xC0baE6312A0F35c1cE937fFa32d0FcCEe4E15c04 with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0xc5dc7ed005e5d736166f05456486421be6b40365ad6329a47db7f4021b96e3ef)...: deployed at 0x17A1fd0846E66E97b3a1d9bF702d8b6B38c1FA6a with 532591 gas
deploying "StaticMetadataService" (tx: 0x17f5b5a562d396aaeaca4e97e4dd9acb6069780e22e7cfdf7acddc58c63df455)...: deployed at 0xbddF39556E6C9F58b4C747BEe6080E1a7fEF1A0c with 240222 gas
deploying "NameWrapper" (tx: 0x8a78ac654ad2c082f2513f4544557a5bc7c914de22810a762d2bf1689cf71f87)...: deployed at 0xFD2d987Cb5ef7dC5DBD86955fd4f0482c5B5a7Fc with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0xbbb7b25478d165d94bbd8560aa86fe92ce8372652afcd0d611e33fd31ee5b6cc)...
deploying "ReverseRegistrar" (tx: 0xcbee55d0cee101db749f2f22612081419ebfd648dc3c5bcde71b26c12156788c)...: deployed at 0x252aC4833bbC965A30D983AF147FCaE803d2A2bc with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x946e6e36b0baf39640aac61b6ca95b49ab1755545248ee30ba0ebee712409f2d)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x31f1877e7dbbab80f19271e67300d11839d3d5eeaad8cdd02591830510b69b15)...
deploying "LegacyETHRegistrarController" (tx: 0xd07ae8f73101f1cc03b28b06a10bafbaf91e716bb09a927482aff3f4696cde3b)...: deployed at 0x7a04Ea1F1707e2Ef3db4AD0fB24DCe4692a770cc with 1854059 gas
Adding controller as controller on registrar (tx: 0x0aee574dee64418cd4913eccc8508ccc6575675b569c126c572f890696673555)...
Setting controller of ReverseRegistrar to controller (tx: 0xf4138545ebf950254dff072303295c4c2d5c7818316ad7e79ad6a3e05f4bd41b)...
Running unwrapped name registrations...
ETHRegistrarController address 0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0x74c6aae9ad3ff1e361359a51acde0fc9030ea7c41af6f108ea0a5c17321bab48)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0xd932fb9ab43d7c8bb5c60069b751857a616d9dfd6d799d34d013adc71b4ff5a8)...
PublicResolver address 0x844cCDa95040f1Cd3E887BDc15C2B6eB376de77e
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0x659a3b8163b765bd9c552a04f5eeeb6818ffc5d43d61858c251352e4ebe0f2c3)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0x37fa5f3be6b34e72dc6905ffefc66008743d5f11e58403bc6cbb8eb1f7ae8ab0)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0x8e2b92d3d92a5abfd01dd7886243e5632dd707db0407b7bc44255fc25b006c3d)...
Setting owner of eth node to registrar on root (tx: 0xc7a1f1970387e6a99144d4b2b34277419422d5686ffbf88b83ba0109360f19ef)...

## BSC
starting
deploying "ENSRegistry" (tx: 0x65e2edc64465c24539d65b96ccbd46dc6dff28f9619229126ec47424d438443f)...: deployed at 0x2699581BB0d22aa9E848467858e14F4401A1E446 with 742072 gas
deploying "Root" (tx: 0x060b0ec5f12e70edbe5521754a99ea4bc05d43848043417cba876b53c4bf4f3e)...: deployed at 0x9a6392EA34F813811cc7f82CA9c4bC54960F06c4 with 662532 gas
Setting owner of root node to root contract (tx: 0x303263a4b967d814a3b06775d04090debfa359085cf49e16945140ac661006fa)...
Transferring root ownership to final owner (tx: 0x61a54a9d0768bda0a4a1c2c8acc25338c6f2e97d073db214359c98ecc46329be)...
Setting final owner as controller on root contract (tx: 0xa14c622e436f0a7ee2dedcfb859fe5c27f614c5768ac479a1a298dfa3dfffdbc)...
deploying "BaseRegistrarImplementation" (tx: 0xf8aa93a53641cfc49c02a86beea1788e78913d1bcd6f36a05700965f5af6e476)...: deployed at 0x25B6B8aB6e65Eb2cDBfDAc4a4eaf0922bC9dA75e with 2113337 gas
Adding owner as controller to registrar (tx: 0x382824d7942198644f30e9e6badd8abd7bda741492043e3ec0cce5ab84da158d)...
deploying "DummyOracle" (tx: 0x9b6fc136adeeb51207f1482463fd1477206567ae009fdcca4dff5ae4089784b9)...: deployed at 0xC0baE6312A0F35c1cE937fFa32d0FcCEe4E15c04 with 111909 gas
deploying "StablePriceOracleUSD" (tx: 0x2b132501de6865748bbe46122f38db0046cf0fe36817824e0373a755cf4121b9)...: deployed at 0x17A1fd0846E66E97b3a1d9bF702d8b6B38c1FA6a with 532591 gas
deploying "StaticMetadataService" (tx: 0x68249d61578a7e2ced04e1546d59135364639c9f995a6916ae104296818f2daa)...: deployed at 0xbddF39556E6C9F58b4C747BEe6080E1a7fEF1A0c with 234722 gas
deploying "NameWrapper" (tx: 0x8e57e75624bb58ecbf8beb7899024aaf0e0beeff35c8bfbdc3b125874b681be3)...: deployed at 0xFD2d987Cb5ef7dC5DBD86955fd4f0482c5B5a7Fc with 5265225 gas
Adding NameWrapper as controller on registrar (tx: 0x5aad1d0d89cd329632a976cd6bff4cc025eebe59097c2c2fb2bd74619d368c2c)...
deploying "ReverseRegistrar" (tx: 0x3497b2353f063e55706848c044cd142cdc7be65cfead296f85d5d77042c6b130)...: deployed at 0x252aC4833bbC965A30D983AF147FCaE803d2A2bc with 1007053 gas
Setting owner of .reverse to owner on root (tx: 0x86f83dc58a09af2a3c898bc324d1a1ae2c5a2bb08f198cbe29828820a256cff0)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x03fd5f01bcdfae2fb18eeeecedd062aa5ab132178e8aef7b67649dcf236240e9)...
deploying "LegacyETHRegistrarController" (tx: 0xadd4766ce2cfcd079e647f0afa09f0636195af1abf8ebcdba05b82d584683d7d)...: deployed at 0x7a04Ea1F1707e2Ef3db4AD0fB24DCe4692a770cc with 1845959 gas
Adding controller as controller on registrar (tx: 0xeb308896168ac3ec553aaa5a1bee3f7d531863c6bcc03568a4fb5b6c5a3d477e)...
Setting controller of ReverseRegistrar to controller (tx: 0x572ffbf00c8697036e318a006967cf5231dce9d6f3401158c44aad9ea2a91b83)...
Running unwrapped name registrations...
ETHRegistrarController address 0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0xb347a5e756274a1de0f4ca781460b2b5fcd05d064004782253200b4aa2f1fe3b)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0x9c3264e859bcf8c511dfca3bef823eccd3d53e1431feeb1bef3fbe7460e1c1fe)...
PublicResolver address 0x844cCDa95040f1Cd3E887BDc15C2B6eB376de77e
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0xb67b8095eabe2f76b15c299bec657496ae0d119a9704705428ac9f1bf2b93264)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0x9bc50a69732ce2cb07df3df4b36442455bbf8fae17f9d4876c508f215f6e8e9f)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0x7b54e182ce5ec0ec7e8859b18e6183cc7a65642a838958c76e8ea31f0ad9efe4)...
Setting owner of eth node to registrar on root (tx: 0x565a19bdb256d997abf9a5a81a5d1116a2b07924121beb2e29d0ade0820dbf34)...

## npm package

This repo doubles as an npm package with the compiled JSON contracts

```js
import {
  BaseRegistrar,
  BaseRegistrarImplementation,
  BulkRenewal,
  ENS,
  ENSRegistry,
  ENSRegistryWithFallback,
  ETHRegistrarController,
  FIFSRegistrar,
  LinearPremiumPriceOracle,
  PriceOracle,
  PublicResolver,
  Resolver,
  ReverseRegistrar,
  StablePriceOracle,
  TestRegistrar
} from '@ensdomains/ens-contracts'
```

## Importing from solidity

```
// Registry
import '@ensdomains/ens-contracts/contracts/registry/ENS.sol';
import '@ensdomains/ens-contracts/contracts/registry/ENSRegistry.sol';
import '@ensdomains/ens-contracts/contracts/registry/ENSRegistryWithFallback.sol';
import '@ensdomains/ens-contracts/contracts/registry/ReverseRegistrar.sol';
import '@ensdomains/ens-contracts/contracts/registry/TestRegistrar.sol';
// EthRegistrar
import '@ensdomains/ens-contracts/contracts/ethregistrar/BaseRegistrar.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/BaseRegistrarImplementation.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/BulkRenewal.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/ETHRegistrarController.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/LinearPremiumPriceOracle.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/PriceOracle.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/StablePriceOracle.sol';
// Resolvers
import '@ensdomains/ens-contracts/contracts/resolvers/PublicResolver.sol';
import '@ensdomains/ens-contracts/contracts/resolvers/Resolver.sol';
```

##  Accessing to binary file.

If your environment does not have compiler, you can access to the raw hardhat artifacts files at `node_modules/@ensdomains/ens-contracts/artifacts/contracts/${modName}/${contractName}.sol/${contractName}.json`


## Contracts

## Registry

The ENS registry is the core contract that lies at the heart of ENS resolution. All ENS lookups start by querying the registry. The registry maintains a list of domains, recording the owner, resolver, and TTL for each, and allows the owner of a domain to make changes to that data. It also includes some generic registrars.

### ENS.sol

Interface of the ENS Registry.

### ENSRegistry

Implementation of the ENS Registry, the central contract used to look up resolvers and owners for domains.

### ENSRegistryWithFallback

The new impelmentation of the ENS Registry after [the 2020 ENS Registry Migration](https://docs.ens.domains/ens-migration-february-2020/technical-description#new-ens-deployment).

### FIFSRegistrar

Implementation of a simple first-in-first-served registrar, which issues (sub-)domains to the first account to request them.

### ReverseRegistrar

Implementation of the reverse registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD.


### TestRegistrar

Implementation of the `.test` registrar facilitates easy testing of ENS on the Ethereum test networks. Currently deployed on Ropsten network, it provides functionality to instantly claim a domain for test purposes, which expires 28 days after it was claimed.


## EthRegistrar

Implements an [ENS](https://ens.domains/) registrar intended for the .eth TLD.

These contracts were audited by ConsenSys dilligence; the audit report is available [here](https://github.com/ConsenSys/ens-audit-report-2019-02).

### BaseRegistrar

BaseRegistrar is the contract that owns the TLD in the ENS registry. This contract implements a minimal set of functionality:

 - The owner of the registrar may add and remove controllers.
 - Controllers may register new domains and extend the expiry of (renew) existing domains. They can not change the ownership or reduce the expiration time of existing domains.
 - Name owners may transfer ownership to another address.
 - Name owners may reclaim ownership in the ENS registry if they have lost it.
 - Owners of names in the interim registrar may transfer them to the new registrar, during the 1 year transition period. When they do so, their deposit is returned to them in its entirety.

This separation of concerns provides name owners strong guarantees over continued ownership of their existing names, while still permitting innovation and change in the way names are registered and renewed via the controller mechanism.

### EthRegistrarController

EthRegistrarController is the first implementation of a registration controller for the new registrar. This contract implements the following functionality:

 - The owner of the registrar may set a price oracle contract, which determines the cost of registrations and renewals based on the name and the desired registration or renewal duration.
 - The owner of the registrar may withdraw any collected funds to their account.
 - Users can register new names using a commit/reveal process and by paying the appropriate registration fee.
 - Users can renew a name by paying the appropriate fee. Any user may renew a domain, not just the name's owner.

The commit/reveal process is used to avoid frontrunning, and operates as follows:

 1. A user commits to a hash, the preimage of which contains the name to be registered and a secret value.
 2. After a minimum delay period and before the commitment expires, the user calls the register function with the name to register and the secret value from the commitment. If a valid commitment is found and the other preconditions are met, the name is registered.

The minimum delay and expiry for commitments exist to prevent miners or other users from effectively frontrunnig registrations.

### SimplePriceOracle

SimplePriceOracle is a trivial implementation of the pricing oracle for the EthRegistrarController that always returns a fixed price per domain per year, determined by the contract owner.

### StablePriceOracle

StablePriceOracle is a price oracle implementation that allows the contract owner to specify pricing based on the length of a name, and uses a fiat currency oracle to set a fixed price in fiat per name.

## Resolvers

Resolver implements a general-purpose ENS resolver that is suitable for most standard ENS use-cases. The public resolver permits updates to ENS records by the owner of the corresponding name.

PublicResolver includes the following profiles that implements different EIPs.

- ABIResolver = EIP 205 - ABI support (`ABI()`).
- AddrResolver = EIP 137 - Contract address interface. EIP 2304 - Multicoin support (`addr()`).
- ContentHashResolver = EIP 1577 - Content hash support (`contenthash()`).
- InterfaceResolver = EIP 165 - Interface Detection (`supportsInterface()`).
- NameResolver = EIP 181 - Reverse resolution (`name()`).
- PubkeyResolver = EIP 619 - SECP256k1 public keys (`pubkey()`).
- TextResolver = EIP 634 - Text records (`text()`).
- DNSResolver = Experimental support is available for hosting DNS domains on the Ethereum blockchain via ENS. [The more detail](https://veox-ens.readthedocs.io/en/latest/dns.html) is on the old ENS doc.

## Developer guide

### How to setup

```
git clone https://github.com/ensdomains/ens-contracts
cd ens-contracts
yarn
```

### How to run tests

```
yarn test
```

### How to publish

```
yarn pub
```

### Release flow

Smart contract development tends to take a long release cycle. To prevent unnecesarily dependency conflicts, please create a feature branch (`features/$BRNACH_NAME`) and raise a PR against the feature branch. The feature branch must be merged into master only after the smart contracts are deployed to the Ethereum mainnet.
