import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  h1 {
    margin-top: 30px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  select {
    border-radius: 45px;
    width: 20%;
    height: 70px;
    box-sizing: border-box;
    padding-left: 32px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: 0px 2px 0px 1px #000000;
    min-width: 350px;

    margin-bottom: 10px;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 20%;
    text-align: center;

    @media screen and (max-width: 800px) {
      width: 80%;
    }
  }

  button {
    width: 227px;
    height: 80px;

    background: #fe652b;
    mix-blend-mode: normal;
    border: 2px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 37.5px;
  }
`;

export const Resultado = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;

    color: rgba(254, 101, 43, 0.99);
  }
`;
