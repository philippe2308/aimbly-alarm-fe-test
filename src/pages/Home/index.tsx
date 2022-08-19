import React from "react";
import { Clock } from "../../components";

const Home = () => {
  return (
    <>
      <Clock currentDate={new Date()}></Clock>
    </>
  );
};
export default Home;
