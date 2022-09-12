import React from 'react'
import styled from 'styled-components'

const HeaderLogo = styled.div`
    font-size: 1.85rem;
    padding-left: 0.625rem;
    padding-bottom: 0.1rem;
    margin: 0.44rem 0rem;
    font-weight: bold;
`
const HeaderContainer = styled.div`
    align-items: center;
    padding: 0rem 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
`

const HeaderMenuContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 1rem;
`

const TreatmmentBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3rem;
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.15);
    color: rgba(0, 0, 0, 0.88);
    background-color: #ffffff;
    height: 34px;
    border: none;
    font-size: 0.9rem;
    font-weight: bold;
    margin: 1px;
    padding: 4px 0.75rem 0px 0.9rem;
    margin-right: 2rem;
`

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLogo>hims</HeaderLogo>
        <HeaderMenuContainer>
            <TreatmmentBtn>
                Treatments
                <i className="fa-solid fa-chevron-down" style={{marginLeft: '7px'}}></i>
            </TreatmmentBtn>
            <i className="fa-solid fa-bars"></i>
        </HeaderMenuContainer>
    </HeaderContainer>
  )
}

export default Header