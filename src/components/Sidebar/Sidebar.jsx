import React from "react";
import {
  IconWrap,
  LinksWrap,
  LinkWrap,
  LogoImg,
  LogoWrap,
  SidebarWrap,
  Wrap,
} from "./style";
import { navigation } from "../utils/navigation";
import { Outlet } from "react-router-dom";


const Sidebar = () => {
  return (
    <Wrap>
      <SidebarWrap>
        <LogoWrap>
          <LogoImg />
          <div>
            <h1>Fast Food</h1>
            <p>Online maxsulot sotuvi</p>
          </div>
        </LogoWrap>
        <LinksWrap>
          {navigation.map((link) => {
            return (
              <LinkWrap
                key={link.id}
                to={`/${link.path}`}
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                <IconWrap>{link.icon}</IconWrap>
                {link.linkName}
              </LinkWrap>
            );
          })}
        </LinksWrap>
      </SidebarWrap>
      <div className="outlet">
        {/* <Outlet /> */}
      </div>
    </Wrap>
  );
};

export default Sidebar;
