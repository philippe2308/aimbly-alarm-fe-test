import React from "react";
import { BackGroundClock, Pointer, Center, Numbers } from "./styles";

const Clock = ({ currentDate }: { currentDate: Date }) => {
  const sec = currentDate.getSeconds() / 60;
  const min = currentDate.getMinutes() / 60 + sec / 60;
  const hour = (currentDate.getHours() % 12 || 12) / 12 + min / 12;
  return (
    <BackGroundClock>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <Numbers value={item}></Numbers>
      ))}
      <Pointer type="minute" percentRotation={min}></Pointer>
      <Pointer type="hour" percentRotation={hour}></Pointer>
      <Center></Center>
      <Pointer type="second" percentRotation={sec}></Pointer>
    </BackGroundClock>
  );
};
export default Clock;
