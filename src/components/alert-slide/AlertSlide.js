import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
  Box,
} from "@mui/material";
import AppContext from "../../context/app-context";
import AlertImage from "./AlertSlide.styled";
import SubmitForm from "../submit-form/SubmitForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertSlide() {
  const handleClose = () => {
    dispatch({ type: "SET_STATUS_SUBMIT" });
  };
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <Dialog
        align="center"
        open={state.openAlert}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <AlertImage />
        {state.status === "submit" ? (
          <DialogTitle align="center">{<SubmitForm />}</DialogTitle>
        ) : (
          <DialogTitle align="center">{"GAME OVER"}</DialogTitle>
        )}
        <Box align="center">
          {state.status === "lost" && (
            <DialogActions style={{ justifyContent: "center" }}>
              <Button
                onClick={() => {
                  dispatch({ type: "CLEAR_STATE" });
                  dispatch({ type: "GET_OPTIONS" });
                  dispatch({ type: "SET_COUNTRY" });
                  dispatch({ type: "SET_STATUS_PLAYING" });
                }}
              >
                LETS TRY AGAIN
              </Button>
              <Button onClick={handleClose}>SUBMIT</Button>
            </DialogActions>
          )}
        </Box>
      </Dialog>
    </div>
  );
}
