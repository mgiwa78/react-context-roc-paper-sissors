import styled, { css } from "styled-components/macro";

export const Btn = styled.button`
  background-color: white;
  color: hsl(229, 25%, 31%);

  ${({ type }) => {
    return type === "fill"
      ? css`
          background-color: white;
          color: hsl(229, 25%, 31%);
          border: none;
          width: 200px;
          height: 50px;
          font-size: 15px;
          font-weight: 550;
          border-radius: 10px;
          margin-top: 10px;
        `
      : css`
          background-color: transparent;
          color: white;
          border: solid 2px white;
          width: 100px;
          height: 35px;
          font-size: 13px;
          font-weight: 300;
          border-radius: 5px;
          margin-top: 25px;
        `;
  }}

  text-transform: uppercase;
  font-weight: 550;
`;
