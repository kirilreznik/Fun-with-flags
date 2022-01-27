import React, { useContext } from "react";
import AppContext from "../../context/app-context";
import { useNavigate } from "react-router";
import { Button, Input } from "@mui/material";
const SubmitForm = () => {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const handleSubmit = (e) => {
    const newEntry = { name: e.target.name.value, score: state.score };
    e.preventDefault();
    const leaders = [...state.leaderBoard];
    console.log(leaders);
    leaders.push(newEntry);
    console.log(leaders);
    localStorage.setItem("leaders", JSON.stringify(leaders));
    navigate("/leaderboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Please enter your name"
      ></Input>
      <Button type="submit">OK</Button>
    </form>
  );
};

export default SubmitForm;
