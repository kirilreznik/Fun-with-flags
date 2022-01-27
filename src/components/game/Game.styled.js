import { Container, Paper, Divider, Button } from "@mui/material";
import { styled } from "@mui/system";

export const GamePaper = styled(Paper)`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 220px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-top: 7rem;
  }
  @media (max-width: 400px) {
    margin-top: 3.5rem;
  }
`;

export const GameContainer = styled(Container)({
  textAlign: "center",
  opacity: "0.99",
  position: "relative",
  top: "20px",
  display: "flex",
});

export const GameDivider = styled(Divider)({
  marginBottom: "1rem",
  marginTop: "0.5rem",
  marginLeft: "20px",
  marginRight: "20px",
});
