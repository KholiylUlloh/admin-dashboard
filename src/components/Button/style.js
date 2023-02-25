import styled from "styled-components";

const Button = styled.button`
  background: #20d472;
  border-radius:${({rounded}) => rounded ? rounded : '18px'};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  width: ${({ width }) => (width ? width : "90px")};
  padding: ${({p}) => `${p}px`};
  padding-top: ${({pt}) => `${pt}px`};
  padding-bottom: ${({pb}) => `${pb}px`};
  padding-left: ${({pl}) => `${pl}px`};
  padding-right: ${({pr}) => `${pr}px`};
  color: #FFFFFF;
`;


export {Button}