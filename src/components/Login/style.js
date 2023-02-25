import styled from "styled-components";
import wallpaper from "../../assets/images/3390.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

Wrapper.Right = styled.div`
  flex: 3;
  background: url(${wallpaper});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

Wrapper.Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 505.4px;
  .login_titles {
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
  .login_titles h1 {
    font-family: "SFProDisplay med";
    font-size: 24px;
    line-height: 14px;
    color: #2d3a45;
  }
  .login_titles p {
    font-family: "SFProDisplay light";
    font-size: 16px;
    line-height: 20px;
    color: #8d9ba8;
  }
  .input_wrap {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: #ffffff;
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
    border-radius: 6px;
    padding: 7px 7px;
    margin-top: 38px;
  }
  button {
    background: #2d3a45;
    mix-blend-mode: normal;
    opacity: 0.8;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 6px;
    padding: 28px 95px;
    outline-style: none;
    border: none;
    font-family: "SFProDisplay med";
    font-size: 18px;
    line-height: 14px;
    color: #ffffff;
    margin-top: 26px;
    margin-left: 10px;
    cursor: pointer;
  }
  input {
    padding: 20px 27px;
    border: none;
    outline: none;
    font-family: "SFProDisplay med";
    font-size: 18px;
    line-height: 14px;
    mix-blend-mode: normal;
    color: #2f2f2f;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-left: 3px solid white;
  }
  input::placeholder {
    color: #2f2f2f;
    opacity: 0.3;
  }
  input:focus {
    border-left: 3px solid #fcb600;
  }

  hr {
    margin: 10px 0px;
  }
  span {
    color: red;
    margin-top: 10px;
    font-family: "SFProDisplay light";
  }
`;

export { Wrapper };
