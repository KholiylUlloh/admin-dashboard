import React from "react";
import CustomButton from "../Button";
import { AddWrap, SortBar, Wrap } from "./style";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";

const Navbar = () => {
  return (
    <Wrap>
      <AddWrap>
        <CustomButton width={"36px"} height={"36px"}>
          <Plus />
        </CustomButton>
        Yangi buyurtma qo’shish
      </AddWrap>
      <SortBar>
        <div className="">

        </div>
      </SortBar>
    </Wrap>
  );
};

export default Navbar;
