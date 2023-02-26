import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const AddWrap = styled.div`
  padding: 22px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-family: "SFProDisplay med";
  font-size: 14px;
  line-height: 16px;
  color: #2d3a45;
  background-color: #ffffff;
`;

const SortBar = styled.div`
  padding: 16px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SFProDisplay light";
  font-size: 14px;
  line-height: 16px;
  color: #2d3a45;
  background-color: #ffffff;
`;
export { Wrap, AddWrap, SortBar };
