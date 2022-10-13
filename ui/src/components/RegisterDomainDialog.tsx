import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addDomain, approveWAXL, commitDomain, COMMIT_TIME, CROSS_CHAIN_CONFIG, ENS_ADDRESS, getDomainAvailability, registerDomain } from "../utils/ens";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

enum DomainRegistrationState {
  IDLE,
  CHECKING,
  APPROVE,
  COMMIT,
  WAITING,
  REGISTER,
}

function calculatePrice(domain) {
  const name = domain.split('.')[0];

  switch (name.length) {
    case 1: return 50;
    case 2: return 10;
    case 3: return 5;
    case 4: return 3;
    default: return 1;
  }
}

export default function RegisterDomainDialog({ open, handleClose, signer, chainId, refreshData }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("1");
  const [state, setState] = useState<DomainRegistrationState>(DomainRegistrationState.IDLE)

  const handleCreate = useCallback(async () => {
    const parts = name.split('.');

    if (parts.length > 2 || (parts.length == 2 && parts[1] != 'axl')) {
      toast.error("Only .axl domains is supported");
      return;
    }

    const justName = parts[0];

    try {
      const secret = "0x" + Math.floor(Math.random() * 1000000000).toString(16).padStart(64, '0');

      setState(DomainRegistrationState.CHECKING);

      const availability = await getDomainAvailability(name);

      if (!availability) {
        throw new Error("Domain " + name + " is not available");
      }

      setState(DomainRegistrationState.APPROVE);
      await approveWAXL(chainId, signer, ENS_ADDRESS[chainId].ETHRegistrarController);

      setState(DomainRegistrationState.COMMIT);
      const commitment = await commitDomain(chainId, signer, justName, parseInt(duration) * 31536000, secret);
      setState(DomainRegistrationState.WAITING);
      await wait(COMMIT_TIME * 1000);
      setState(DomainRegistrationState.REGISTER);
      await registerDomain(chainId, signer, commitment.params);
      await addDomain(await signer.getAddress(), name);
      toast.success("Domain " + name + " successfully registered");
    } catch (err: any) {
      console.error(err);
      toast.error(err.error?.message || err.message);
    } finally {
      refreshData();
      handleClose();
      setState(DomainRegistrationState.IDLE);
    }
  }, [signer, chainId, name]);

  const handleCloseWrapper = useCallback(async () => {
    if (state == DomainRegistrationState.IDLE) {
      handleClose();
    }
  }, [handleClose, state]);

  useEffect(() => {
    if (!open) {
      setName("")
      setDuration("1")
    }
  }, [open])

  return (
    <Dialog open={open} onClose={handleCloseWrapper} fullWidth={true}>
      <DialogTitle>Register new domain</DialogTitle>
      <DialogContent>
        {(state == DomainRegistrationState.IDLE || state == DomainRegistrationState.CHECKING) ? (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Domain Name"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              disabled={state != DomainRegistrationState.IDLE}
              onChange={e => setName(e.target.value)}
            />

            <TextField
              autoFocus
              margin="dense"
              id="duration"
              label="Duration (Year)"
              type="number"
              fullWidth
              variant="standard"
              value={duration}
              disabled={state != DomainRegistrationState.IDLE}
              onChange={e => setDuration(e.target.value)}
            />

            <div style={{ marginTop: 10 }}>
              {name && <Typography>Price: {calculatePrice(name) * parseInt(duration)} AXL</Typography>}
              <Typography>Connected network: {CROSS_CHAIN_CONFIG[chainId]?.name}</Typography>
            </div>
          </>
        ) : (
          <div>
            <Typography variant="h6">Registering a name requires you to complete 4 steps</Typography>

            <ol>
              <li style={{ opacity: state == DomainRegistrationState.APPROVE ? 1 : 0.4 }}><b>Approve AXL:</b> Your wallet will open and you will be asked to confirm the approval of AXL to the registrar contract.</li>
              <li style={{ opacity: state == DomainRegistrationState.COMMIT ? 1 : 0.4 }}><b>Request to register:</b> Your wallet will re-open and you will be asked to confirm the registration. If the registration is not processed within 7 days of the first, you will need to start again from step 1.</li>
              <li style={{ opacity: state == DomainRegistrationState.WAITING ? 1 : 0.4 }}><b>Wait for 15 seconds:</b> The waiting period is required to ensure another person hasn't tried to register the same name and protect you after your request.</li>
              <li style={{ opacity: state == DomainRegistrationState.REGISTER ? 1 : 0.4 }}><b>Complete Registration:</b> Your wallet will re-open to let you complete the domain registration.</li>
            </ol>
          </div>
        )}

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={state != DomainRegistrationState.IDLE} color="secondary">Cancel</Button>
        <Button onClick={handleCreate} disabled={state != DomainRegistrationState.IDLE}>Register</Button>
      </DialogActions>
    </Dialog>
  )

}