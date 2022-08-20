import styled from "styled-components";

export const TimeInput = styled.input.attrs(() => ({
  type: "tel",
  maxLength: 2,
}))`
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  max-width: 87px;
  background: transparent;
  border: 0px;
  margin: 16px 0;
  &:focus {
    outline: none;
  }
`;
export const EventDescriptionInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Add your event description here",
  maxLength: 15,
}))`
  padding: 0px 20px;
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  background: transparent;
  border: 0px;
  margin: 16px 0;
  &:focus {
    outline: none;
  }
`;
