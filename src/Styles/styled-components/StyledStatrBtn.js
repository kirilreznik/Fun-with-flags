import { Button } from "@material-ui/core";
import { useContext } from "react";
import AppContext from "../../context/app-context";
const StyledStartBtn = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Button
      size="large"
      style={{ marginTop: "16rem", fontSize: "35px" }}
      onClick={() => {
        dispatch({ type: "SET_STATUS_PLAYING" });
      }}
    >
      Lets Have Fun with flags
    </Button>
  );
};
export default StyledStartBtn;
