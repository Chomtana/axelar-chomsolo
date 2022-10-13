import { Typography, CardActions, Button, LinearProgress } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import React, { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import addressParse from "../utils/addressParse"
import { bridgeDomain, DomainCompleteData, getDomainData, getDomainExistsInChain, setDomainAddress } from "../utils/ens"

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function DomainCard({ domain, signer, refreshToken }) {
  const [data, setData] = useState<DomainCompleteData | undefined>();
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
  
                      toast.success('Domain successfully enabled to chain ' + chain.name);
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
        {/* <Button
          size="small"
          onClick={() => setShowDepositDialog(bankAccount.address)}
        >
          Renew
        </Button>
        <Button
          size="small"
          onClick={() => setShowWithdrawDialog(bankAccount.address)}
        >
          Portfolio
        </Button>
        <Button
          size="small"
          onClick={() => setShowTransferDialog(bankAccount.address)}
        >
          Connect
        </Button> */}
      </CardActions>
    </Card>
  )
}