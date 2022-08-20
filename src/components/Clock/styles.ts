import styled, { keyframes } from "styled-components";

export const BackGroundClock = styled.div`
  background: #fff;
  height: 135px;
  width: 135px;
  border-radius: 50%;
  position: relative;
`;

const pointerData = (type: "second" | "minute" | "hour") => {
  switch (type) {
    case "second":
      return {
        height: "71px",
        background: "#FF8000",
        width: "1px",
        "border-radius": "1px",
        left: "calc(50% - 1px/2)",
        bottom: "calc(50% - 10px)",
        "transform-origin": "50% calc(100% - 10px);",
        "animation-duration": "60s",
      };
    case "minute":
      return {
        height: "65px",
        background: "#262626",
        width: "3px",
        "border-radius": "3px",
        left: "calc(50% - 3px/2)",
        "animation-duration": "3600s",
      };
    case "hour":
      return {
        height: "43px",
        background: "#262626",
        width: "3px",
        "border-radius": "3px",
        left: "calc(50% - 3px/2)",
        "animation-duration": "43200s",
      };
    default:
      return {
        height: "0px",
        background: "#FF8000",
        width: "0px",
        "border-radius": "0px",
      };
  }
};

const spin = (initDegRotation: number) => keyframes`
  0% {
    transform: rotate(${initDegRotation}deg);
  }
  100% {
    transform: rotate(${initDegRotation + 360}deg);
  }
`;
export const Pointer = styled.div.attrs(
  (props: { type: "second" | "minute" | "hour"; percentRotation: number }) =>
    props
)`
  bottom: 50%;
  transform-origin: bottom;
  ${(props) => pointerData(props.type)}
  position: absolute;

  animation-name: ${(props) => spin(props.percentRotation * 360)};

  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Center = styled.div`
  height: 6px;
  width: 6px;
  border: 2px solid #262626;
  background: #ff8000;
  position: absolute;
  left: calc(50% - 5px);
  top: calc(50% - 5px);
  border-radius: 50%;
`;

export const Numbers = styled.div.attrs((props: { value: number }) => props)`
  &:after {
    content: "${(props) => props.value}";
    font-size: 16px;
    transform-origin: 5px 10px;

    display: inline-block;
    transform: rotate(${(props) => -(props.value / 12) * 360}deg);
  }
  text-align: center;
  transform: translateX(-10px) translateY(-45px)
    rotateZ(${(props) => (props.value / 12) * 360}deg);
  transform-origin: 10px 65px;
  height: 20px;
  width: 20px;
  position: absolute;
  left: 50%;
  bottom: 50%;
`;
