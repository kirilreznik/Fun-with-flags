import { Box } from "@material-ui/core";
const background = require("../../assets/site-background.jpg");
const BackgroundBox = () => {
  return (
    <Box
      style={{
        borderRadius: "20px",
        backgroundImage: `url(${background})`,
        backgroundColor: "purple",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "90vh",
        opacity: "0.4",
        position: "absolute",
        width: "90%",
        marginLeft: "5rem",
      }}
    ></Box>
  );
};

export default BackgroundBox;
