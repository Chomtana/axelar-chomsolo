import { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
} from "@mui/material";
import { Container } from "@mui/system";
import { useSigner } from "./hooks/useSigner";
import { useConnectWallet } from "./store/web3Modal/connectWallet";
import RegisterDomainDialog from "./components/RegisterDomainDialog";
import addressParse from "./utils/addressParse";
import DepositDialog from "./components/DepositDialog";
import WithdrawDialog from "./components/WithdrawDialog";
import TransferDialog from "./components/TransferDialog";
import DomainCard from "./components/DomainCard";
import { getDomainsList } from "./utils/ens";

function App() {
  const signer = useSigner();
  const { connectWallet, web3, address, networkId, connected } =
    useConnectWallet();

  const [refreshToken, setRefreshToken] = useState(Math.random())
  const [domains, setDomains] = useState<string[]>([]);

  const [showRegisterDomainDialog, setShowRegisterDomainDialog] = useState(false);
  const [showDepositDialog, setShowDepositDialog] = useState<string | null>(
    null
  );
  const [showWithdrawDialog, setShowWithdrawDialog] = useState<string | null>(
    null
  );
  const [showTransferDialog, setShowTransferDialog] = useState<string | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  const refreshData = useCallback(async () => {
    setLoading(true);
    setDomains(await getDomainsList(address));
    setLoading(false);
    setRefreshToken(Math.random());
  }, [address]);

  useEffect(() => {
    if (address) {
      if (networkId == 5) {
        refreshData();
      } else {
        if (window.ethereum) {
          window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x5" }],
          });
        }
      }
    }
  }, [address, networkId]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Axelar Domains
          </Typography>
          <ConnectWalletButton></ConnectWalletButton>
        </Toolbar>
      </AppBar>

      <Container
        fixed
        style={{
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        {connected && signer && address && networkId == 5 ? (
          loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1 }}
                align="center"
              >
                My Domains
              </Typography>

              {domains.map((domain) => (
                <DomainCard domain={domain} signer={signer} refreshToken={refreshToken} ></DomainCard>
              ))}

              <div style={{ marginTop: 16 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => setShowRegisterDomainDialog(true)}
                >
                  + Register new domain
                </Button>
              </div>
            </div>
          )
        ) : (
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Please connect your wallet to Goerli testnet network.
          </Typography>
        )}
      </Container>

      <RegisterDomainDialog
        open={showRegisterDomainDialog}
        handleClose={() => setShowRegisterDomainDialog(false)}
        signer={signer}
        refreshData={refreshData}
      ></RegisterDomainDialog>

      <DepositDialog
        open={Boolean(showDepositDialog)}
        handleClose={() => setShowDepositDialog(null)}
        signer={signer}
        refreshData={refreshData}
        bankAddress={showDepositDialog}
      ></DepositDialog>

      <WithdrawDialog
        open={Boolean(showWithdrawDialog)}
        handleClose={() => setShowWithdrawDialog(null)}
        signer={signer}
        refreshData={refreshData}
        bankAddress={showWithdrawDialog}
      ></WithdrawDialog>

      <TransferDialog
        open={Boolean(showTransferDialog)}
        handleClose={() => setShowTransferDialog(null)}
        signer={signer}
        refreshData={refreshData}
        bankAddress={showTransferDialog}
      ></TransferDialog>
    </Box>
  );
}

export default App;
