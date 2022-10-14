import { Typography, CardActions, Button, LinearProgress } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import React, { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import addressParse from "../utils/addressParse"
import { addDomain, bridgeDomain, CROSS_CHAIN_CONFIG, DomainCompleteData, getDomainData, getDomainExistsInChain, setDomainAddress, setSubnodeOwner } from "../utils/ens"
import WalletDialog from "./WalletDialog"

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function DomainCard({ domain, signer, refreshToken }) {
  const [data, setData] = useState<DomainCompleteData | undefined>();
  const [showWalletDialog, setShowWalletDialog] = useState<boolean>(false);
  const [bridgingTx, setBridgingTx] = useState<any>({});

  const refreshData = useCallback(async () => {
    setData(await getDomainData(domain));
  }, [domain])

  useEffect(() => {
    refreshData();
  }, [domain, refreshToken])

  if (!data) {
    return (
      <div>
        <LinearProgress></LinearProgress>
      </div>
    )
  }

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{ marginTop: 16 }}
      key={data.name}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data.name}
        </Typography>

        <Typography color="text.secondary" variant="body2">
          Expire: {new Date(data.expire).toLocaleString()}
        </Typography>

        {data.chains.map((chain) => (
          <div key={chain.chainId}>
            <Typography marginTop={1}>
              {chain.name}: &nbsp;

              {chain.enabled ? <>
                {chain.address}&nbsp;
                <a href="#" onClick={async () => {
                  const walletAddress = window.prompt('Please enter a new wallet address for domain ' + data.name + ' chain ' + chain.name);
                  if (walletAddress) {
                    toast.info('Please confirm transaction in your wallet');
                    await setDomainAddress(chain.chainId, signer, data.name, walletAddress);
                    refreshData();
                    toast.success('Domain wallet address changed')
                  }
                }}>Change</a>
              </> : <>
                <a
                  href={bridgingTx[chain.chainId] ? "https://testnet.axelarscan.io/gmp/" + bridgingTx[chain.chainId] : "#"}
                  target={bridgingTx[chain.chainId] ? "_blank" : ""}
                  onClick={async () => {
                    try {
                      if (bridgingTx[chain.chainId]) return;

                      const name = data.name.split('.').slice(0, -1).join('.');
                      const sourceChainId = await signer.getChainId();
  
                      if (!data.chains.find(x => x.chainId == sourceChainId)?.enabled) {
                        toast.warning('Please switch chain in your wallet to a chain that domain ' + data.name + ' is currently exists');
                        return;
                      }
  
                      toast.info('Please confirm transaction in your wallet');
                      const tx = await bridgeDomain(name, signer, sourceChainId, chain.chainId);
                      console.log(tx);
                      bridgingTx[chain.chainId] = tx.hash;
                      setBridgingTx({...bridgingTx});
  
                      while (!(await getDomainExistsInChain(chain.chainId, data.name))) {
                        await wait(5000);
                      }
  
                      toast.success('Domain successfully enabled on chain ' + chain.name);
                      refreshData();
                    } catch (err: any) {
                      console.error(err);
                      toast.error(err.data?.message || err.message || 'Something went wrong');
                    }
                  }}
                >
                  {bridgingTx[chain.chainId] ? "Bridging (Tx: " + bridgingTx[chain.chainId] + ")" : "Enable"}
                </a>
              </>}

            </Typography>

          </div>
        ))}
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={() => {
            toast.info('Cross-chain domain renew system to be implemented, contact Chomtana001@gmail.com for more info.')
          }}
        >
          Renew
        </Button>
        <Button
          size="small"
          onClick={async () => {
            const chainId = await signer.getChainId();

            try {
              const subdomain = window.prompt('Please enter subdomain name (sub.myname.axl enter only "sub")');

              if (subdomain) {
                if (subdomain.indexOf('.') != -1) {
                  toast.error('Subdomain can\'t contains "."');
                  return;
                }

                toast.info('Please confirm transaction in your wallet');
                await setSubnodeOwner(
                  chainId,
                  signer,
                  data.name,
                  subdomain,
                )

                addDomain(await signer.getAddress(), subdomain + '.' + data.name);
                toast.success('Subdomain ' + subdomain + '.' + data.name + ' has been added');

                refreshData();
              }
            } catch (err) {
              console.error(err);
              toast.error('Please enable ' + data.name + ' on chain ' + CROSS_CHAIN_CONFIG[chainId].name)
            }

          }}
        >
          Add Subdomain
        </Button>
        <Button
          size="small"
          onClick={async () => {
            const chainId = await signer.getChainId();
            let address = data.chains.find(x => x.chainId == chainId && x.enabled)?.address;
            if (!address) {
              // toast.warn('Please enable domain ' + data.name + ' on chain ' + CROSS_CHAIN_CONFIG[chainId].name)
              address = data.chains.find(x => x.enabled)?.address;
            }
            window.open('https://portfolio.nansen.ai/dashboard/' + address);
          }}
        >
          Portfolio
        </Button>
        <Button
          size="small"
          onClick={() => setShowWalletDialog(true)}
        >
          Wallet
        </Button>
      </CardActions>

      <WalletDialog
        domain={data.name}
        open={showWalletDialog}
        handleClose={() => setShowWalletDialog(false)}
        signer={signer}
      ></WalletDialog>
    </Card>
  )
}