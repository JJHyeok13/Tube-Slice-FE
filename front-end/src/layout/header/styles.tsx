import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IoSettingsOutline } from 'react-icons/io5';
import { BiSolidDownArrow } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

const styles = {
  Container: styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    //box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;

    box-shadow:
    //0 4px 4px rgba(205, 205, 205, 0.25),
      0 8px 20px rgba(151, 151, 151, 0.2);
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;

    background-color: #ffffff;
    transition: top 0.3s ease-in-out;
  `,
  HeaderWrapper: styled.div`
    width: 100%;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  `,
  StyledLink: styled(Link)`
    font-family: 'SF_HambakSnow';
    font-size: 32px;
    font-weight: 800;
    color: #0075ff;
    margin-left: 30px;
  `,
  RightWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
  `,
  Nickname: styled.div`
    font-weight: 400;
  `,
  Name: styled.span`
    font-weight: 600;
    color: #0075ff;
  `,
  OpenOptionButton: styled(BiSolidDownArrow)`
    margin-left: 16px;
    cursor: pointer;
  `,
  CloseOptionButton: styled(MdCancel)`
    margin-left: 16px;
    cursor: pointer;
  `,
  Button: styled.div`
    background-color: #0075ff;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    margin-left: 16px;
    padding: 4px 10px;
    cursor: pointer;
  `,
  SettingButton: styled(IoSettingsOutline)`
    margin-left: 16px;
    cursor: pointer;
  `,
  ModalBackdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
  `,
};

export default styles;
