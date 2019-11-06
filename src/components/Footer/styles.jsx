import styled from "styled-components";

export const Footer = styled.footer`
  background: ${props => props.theme.black};
  height: 32px;
  position: fixed;
  width: 100%;
  max-width: 100vw;
  bottom: 0;
  z-index: 100;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: ${props => props.theme.white};
    margin: 0 20px;
    @media (max-width: 500px) {
      font-size: 6px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
