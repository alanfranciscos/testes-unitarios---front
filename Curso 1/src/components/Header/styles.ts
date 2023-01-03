import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 454px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: 800px) {
    position: absolute;
    z-index: 1;
    top: 60px;
  }
`;

export const Paricipante = styled.img`
  z-index: 1;
  margin-top: 237px;
  @media screen and (max-width: 800px) {
    position: absolute;
    top: -30px;
  }
`;
