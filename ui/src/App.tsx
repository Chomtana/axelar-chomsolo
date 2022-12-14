import { useCallback, useEffect, useState } from "react";
import logo from "./axelardomains.svg";
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
import DomainCard from "./components/DomainCard";
import { ENS_ADDRESS, getDomainsList } from "./utils/ens";

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
      if (ENS_ADDRESS[networkId]) {
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
          <div style={{ flexGrow: 1 }}>
            <img src={logo} height={35} alt="Axelar Domains" style={{ filter: "invert(1)", marginTop: 4 }}></img>
          </div>
          
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Axelar Domains
          </Typography> */}
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
        {connected && signer && address && ENS_ADDRESS[networkId] ? (
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
                <div style={{ marginTop: 8, marginBottom: 8 }}>
                  <DomainCard domain={domain} signer={signer} refreshToken={refreshToken} ></DomainCard>
                </div>
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
            Please connect your wallet to supported testnet network.
          </Typography>
        )}
      </Container>

      <RegisterDomainDialog
        open={showRegisterDomainDialog}
        handleClose={() => setShowRegisterDomainDialog(false)}
        signer={signer}
        chainId={networkId}
        refreshData={refreshData}
      ></RegisterDomainDialog>
    </Box>
  );
}

export default App;
