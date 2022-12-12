import styled from "styled-components";

export const Content = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 350px;
    height: 80px;
    font-size: 20px;
    box-shadow: 2px 2px 0px 1px #000000;
    border-radius: 45px;
    background-color: #fe652b;
    color: #fff;
    cursor: pointer;
    margin-right: 200px;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button:hover {
    background-color: #4b69fd;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      margin-top: 32px;
    }

    button {
      width: 220px;
      margin: 32px 0;
    }
  }
`;
