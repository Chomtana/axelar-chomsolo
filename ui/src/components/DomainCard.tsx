import { Typography, CardActions, Button, LinearProgress } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import React, { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import addressParse from "../utils/addressParse"
import { DomainCompleteData, getDomainData, setDomainAddress } from "../utils/ens"

export default function DomainCard({ domain, signer, refreshToken }) {
  const [data, setData] = useState<DomainCompleteData | undefined>();

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
              {chain.chainId}&nbsp;

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