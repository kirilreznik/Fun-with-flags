import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import AppContext from "../context/app-context";
export default function TransitionAlerts() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={state.openAlert}>
        <Alert
          variant="filled"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch({ type: "CLOSE_ALERT" });
                window.location.reload();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
    </Box>
  );
}
