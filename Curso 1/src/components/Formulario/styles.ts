import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 32px;
  width: 100%;
  margin-top: 80px;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #4b69fd;
  }
`;

export const InputContainer = styled.div`
  width: 50% !important;
  margin: 0 auto;

  button {
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    height: 82px;
    width: 30%;
    box-sizing: border-box;
    border: 2px solid black;
    font-size: 20px;
    color: #000000;
    box-shadow: 2px 2px 0px 1px #000000;
    cursor: pointer;
    background-color: #c4c4c4;
  }

  button:hover {
    opacity: 0.8;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  input {
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    width: 70%;
    height: 82px;
    box-sizing: border-box;
    padding-left: 32px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: 0px 2px 0px 1px #000000;
    min-width: 350px;
  }

  input:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    width: 100% !important;

    input {
      display: block;
      border-radius: 45px;
      box-shadow: 0px 2px 0px 1px #000000;
      margin-bottom: 18px;
      margin: 30px auto 30px;
    }
    button {
      display: block;
      margin-top: 16px;
      margin: 0 auto;
      width: 220px;
      border-radius: 45px;
    }
  }
`;

export const Alert = styled.p`
  color: #842029;
  background-color: #f8d7da;
  padding: 16px;
  border: 1px solid #f5c2c7;
  border-radius: 8px;
  @media screen and (max-width: 800px) {
    margin: 48px 0;
  }
`;
