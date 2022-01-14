import { Box } from "@material-ui/core";
const background = require("../../assets/site-background.jpg");
const BackgroundBox = (props) => {
  return (
    <Box
      style={{
        borderRadius: "20px",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "90%",
        height: "85vh",
        opacity: props.opacity,
        position: "relative",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></Box>
  );
};

export default BackgroundBox;
