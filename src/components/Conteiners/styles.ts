import styled, { keyframes } from "styled-components";

export const PageConteiner = styled.div`
  padding: 40px 17px 0px;
  width: calc(100% - 34px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-height: calc(90vh - 40px);
`;

export const ScrollConteiner = styled.div`
  flex: 1;
  width: calc(100% + 6px);
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 0 0 12px;
  padding: 0 6px 0 0;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border: 1px solid #333;
    background: #1d1d1d;
  }
`;
export const Conteiner = styled.div.attrs(
  ({ color = "#1D1D1D", radius }: { color: string; radius: number }) => ({
    color,
    radius,
  })
)`
  background: ${({ color }) => color};
  border-radius: ${({ radius }) => radius}px;
  width: 100%;
  transition: background 1s;
`;

export const ConteinerRadius26 = styled(Conteiner).attrs(
  ({
    margin = "0px",
    color = "#1D1D1D",
  }: {
    margin: string;
    color: string;
  }) => ({
    color: color,
    radius: 26,
    margin,
  })
)`
  padding: 12px;
  width: calc(100% - 24px);
  margin: ${({ margin }) => margin};
`;
export const ConteinerRadius17 = styled.div.attrs(
  ({
    color = "#0E0E0E",
    width = "fit-content",
  }: {
    color: string;
    width: string;
  }) => ({
    color,
    width,
  })
)`
  background: ${({ color }) => color};
  border-radius: 17px;
  width: ${({ width }) => width};
  display flex;
  justify-content: center;
  align-items: center;
`;
