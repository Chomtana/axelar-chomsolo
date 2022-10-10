import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addDomain, commitDomain, getDomainAvailability, registerDomain } from "../utils/ens";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

enum DomainRegistrationState {
  IDLE,
  CHECKING,
  COMMIT,
  REGISTER,
}

export default function RegisterDomainDialog({ open, handleClose, signer, refreshData }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("1");
  const [state, setState] = useState<DomainRegistrationState>(DomainRegistrationState.IDLE)

  const handleCreate = useCallback(async (domainName: string) => {
    if (domainName != name) {
      setName(domainName);
    }

    try {
      const secret = "0x" + Math.floor(Math.random() * 1000000000).toString(16);

      setState(DomainRegistrationState.CHECKING);

      const availability = await getDomainAvailability(domainName);

      if (!availability) {
        throw new Error("Domain " + domainName + " is not available");
      }

      const chainId = await signer.getChainId();

      setState(DomainRegistrationState.COMMIT);
      const commitment = await commitDomain(chainId, signer, name, parseInt(duration) * 31536000, secret);
      await wait(10000);
      setState(DomainRegistrationState.REGISTER);
      await registerDomain(chainId, signer, commitment.params);
      await addDomain(await signer.getAddress(), domainName);
      toast.success("Domain " + domainName + " successfully registered");
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
    <Dialog open={open} onClose={handleCloseWrapper}>
      <DialogTitle>Create new account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Domain name
        </DialogContentText>
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

        <DialogContentText>
          Duration (Year)
        </DialogContentText>
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
        <Button onClick={handleClose} disabled={state != DomainRegistrationState.IDLE}>Cancel</Button>
        <Button onClick={() => handleCreate(name)} disabled={state != DomainRegistrationState.IDLE}>Create</Button>
      </DialogActions>
    </Dialog>
  )

}