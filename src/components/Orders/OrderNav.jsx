import React from 'react'
import { AddWrap, HeaderWrap, SortBar } from './style'
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import CustomButton from '../Button';
import { NavLink } from 'react-router-dom';

const OrderNav = () => {
  return (
    <HeaderWrap>
        <AddWrap>
          <CustomButton width={"36px"} height={"36px"}>
            <Plus />
          </CustomButton>
          Yangi buyurtma qo’shish
        </AddWrap>
        <SortBar>
          <div className="options_wrap">
            <NavLink to={"/orders/new"} className="option">
              Yangi
            </NavLink>
            <NavLink to={"/orders/received"} className="option">
              Qabul qilingan
            </NavLink>
            <NavLink to={"/orders/sent"} className="option">
              Jo’natilgan
            </NavLink>
            <NavLink to={"/orders/closed"} className="option">
              Yopilgan
            </NavLink>
          </div>
        </SortBar>
      </HeaderWrap>
  )
}

export default OrderNav