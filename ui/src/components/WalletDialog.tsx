import { useCallback, useEffect, useState } from "react";
import {
  BankAccountData, getAllBankAccounts, getBankTokenContract
} from "../utils/bank";
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
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Container } from "@mui/system";
import { useConnectWallet } from "../store/web3Modal/connectWallet";
import addressParse from "../utils/addressParse";
import CloseIcon from '@mui/icons-material/Close';
import { toast } from "react-toastify";
import { ethers } from "ethers";

export interface DialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function WalletDialog({ open, handleClose, signer, domain }) {
  const { connectWallet, web3, address, networkId, connected } =
    useConnectWallet();

  const [bankAccounts, setBankAccounts] = useState<BankAccountData[]>([]);

  const [loading, setLoading] = useState(true);

  const refreshData = useCallback(async () => {
    if (domain && open) {
      setLoading(true);
      setBankAccounts(await getAllBankAccounts(domain));
      setLoading(false);
    }
  }, [domain, open]);

  useEffect(() => {
    refreshData();
  }, [domain, open])

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <BootstrapDialogTitle onClose={handleClose}>{domain}</BootstrapDialogTitle>
      <DialogContent dividers>
        {connected && signer && address ? (
          loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              {bankAccounts.map((bankAccount) => (
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ marginTop: 16 }}
                  key={bankAccount.name}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {bankAccount.name}
                    </Typography>

                    <Typography color="text.secondary" variant="body2">
                      {addressParse(bankAccount.address)}
                    </Typography>

                    <Typography marginTop={1}>
                      {bankAccount.tokens.map((token) => (
                        <div>
                          {token.balance} {token.symbol}
                        </div>
                      ))}
                    </Typography>

                    <div style={{ marginTop: 10 }}>
                      <div>
                        <a
                          href={
                            "https://goerli.etherscan.io/address/" +
                            bankAccount.address
                          }
                          target="_blank"
                        >
                          View on Etherscan
                        </a>
                      </div>

                      <div>
                        <a
                          href={
                            "https://apeboard.finance/dashboard/" +
                            bankAccount.address
                          }
                          target="_blank"
                        >
                          View on Apeboard
                        </a>
                      </div>
                    </div>
                  </CardContent>

                  <CardActions>
                    <Button
                      size="small"
                      onClick={async () => {
                        try {
                          if (networkId != bankAccount.chainId) {
                            toast.warn('Please swith chain in your Metamask to ' + bankAccount.name);
                            return;
                          }
  
                          const symbol = window.prompt('Please enter token symbol (WAXL / WBNB / WAVAX)');
                          const tokenContract = getBankTokenContract(symbol || '', bankAccount.chainId);
  
                          if (tokenContract) {
                            const destination = window.prompt('Please enter destination wallet address');
                            const amount = window.prompt('Please enter token amount to transfer') || '';
                            await (await tokenContract.transfer(destination, ethers.utils.parseEther(amount))).wait();
                            toast.success('Transfer success');
                          } else {
                            throw new Error('Invalid token symbol');
                          }
                        } catch (err: any) {
                          console.error(err);
                          toast.error(err.data?.message || err.message || 'Something went wrong');
                        }
                      }}
                    >
                      Transfer
                    </Button>
                    <Button
                      size="small"
                      onClick={async () => {
                        
                      }}
                    >
                      Bridge
                    </Button>
                  </CardActions>
                </Card>
              ))}

              <Typography marginTop={2}>Note: All tokens displayed are axelar wrapped</Typography>
            </div>
          )
        ) : (
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Please close this dialog and connect your wallet again.
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
