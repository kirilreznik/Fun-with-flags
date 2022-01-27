import React, { useContext } from "react";
import AppContext from "../../context/app-context";
import {
  DialogContentText,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
  Box,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function ErrorAlert() {
  const handleClose = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <Dialog
        align="center"
        open={state.error === "TRY AGAIN"}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align="center">{"Oooops"}</DialogTitle>
        <DialogContentText
          style={{ padding: "8px" }}
          id="alert-dialog-slide-description"
        >
          Watch out you only got {3 - state.strikes.length} strikes left
        </DialogContentText>
        <Box align="center">
          <DialogActions style={{ justifyContent: "center" }}>
            <Button onClick={handleClose}>Got it</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
