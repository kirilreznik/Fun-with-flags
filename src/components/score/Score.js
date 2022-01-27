import { ScoreText } from "./Score.styled";
const Score = (props) => {
  return <ScoreText variant="h3">SCORE:{props.score}</ScoreText>;
};

export default Score;
