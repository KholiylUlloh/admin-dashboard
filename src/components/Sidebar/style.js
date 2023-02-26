import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  .outlet {
    background: #e5e5e5;
    flex: 2;
    height: 100vh;
    padding-left: 2px;
  }
`;

const SidebarWrap = styled.div`
  width: 300px;
  background: #ffffff;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 28px 24px 0px 0px;
  h1 {
    font-family: "SFProDisplay med";
    font-size: 16px;
    line-height: 19px;
    color: #2d3a45;
  }
  p {
    font-family: "SFProDisplay light";
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #2d3a45;
    margin-top: 4px;
  }
`;

const LogoImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LinksWrap = styled.div`
  padding: 64px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .active {
    background: #fcb600;
    border-radius: 0px 6px 6px 0px;
    color: #ffffff;
  }
  border-left: 4px solid #fcb600;
`;

const LinkWrap = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "SFProDisplay light";
  font-size: 15px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;
  padding: 6px 40px;
  width: 270px;
`;

const IconWrap = styled.div`
  background: #f6f6f6;
  border-radius: 6px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Wrap, SidebarWrap, LogoImg, LogoWrap, LinksWrap, LinkWrap, IconWrap };
