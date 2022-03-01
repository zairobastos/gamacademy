import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 5px 0px 10px 0px;
    input {
      width: 100%;
      padding: 2px 4px;
      border-radius: 4px;
      border: none;
    }
  }
`;
