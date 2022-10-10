import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addDomain, approveWAXL, commitDomain, ENS_ADDRESS, getDomainAvailability, registerDomain } from "../utils/ens";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

enum DomainRegistrationState {
  IDLE,
  CHECKING,
  APPROVE,
  COMMIT,
  REGISTER,
}

export default function RegisterDomainDialog({ open, handleClose, signer, refreshData }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("1");
  const [state, setState] = useState<DomainRegistrationState>(DomainRegistrationState.IDLE)

  const handleCreate = useCallback(async () => {
    try {
      const secret = "0x" + Math.floor(Math.random() * 1000000000).toString(16).padStart(64, '0');

      setState(DomainRegistrationState.CHECKING);

      const availability = await getDomainAvailability(name);

      if (!availability) {
        throw new Error("Domain " + name + " is not available");
      }

      const chainId = await signer.getChainId();

      setState(DomainRegistrationState.APPROVE);
      await approveWAXL(chainId, signer, ENS_ADDRESS[chainId].ETHRegistrarController);

      setState(DomainRegistrationState.COMMIT);
      const commitment = await commitDomain(chainId, signer, name, parseInt(duration) * 31536000, secret);
      await wait(10000);
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
  }, [signer, name]);

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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={state != DomainRegistrationState.IDLE} color="secondary">Cancel</Button>
        <Button onClick={handleCreate} disabled={state != DomainRegistrationState.IDLE}>Register</Button>
      </DialogActions>
    </Dialog>
  )

}