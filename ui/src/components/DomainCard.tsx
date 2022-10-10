import { Typography, CardActions, Button, LinearProgress } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import React, { useCallback, useEffect, useState } from "react"
import addressParse from "../utils/addressParse"
import { DomainCompleteData, getDomainData } from "../utils/ens"

export default function DomainCard({ domain, refreshToken }) {
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

        <Typography marginTop={1}>
          {data.chains.map((chain) => (
            <div>
              {chain.chainId} {chain.address}
            </div>
          ))}
        </Typography>
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