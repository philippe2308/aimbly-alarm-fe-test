import styled from "styled-components";

export const ButtonAddEvent = styled.button`
  width: 100%;
  height: 58px;
  left: 17px;
  top: 413px;
  color: #fff;
  margin-top: 12px;
  background: #695dc7;
  border-radius: 26px;
`;
export const ButtonDeleteCard = styled.button.attrs(
  ({ color }: { color: string }) => ({ color })
)`
  background: ${({ color }) => color};
  border: 0px;
  border-radius: 17px;
  padding: 20px 14px;
  color: #c5c5c5;
`;
