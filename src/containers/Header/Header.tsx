import { useState } from 'react'
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
    outline: none;
    cursor: pointer;
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
    &:active, &:hover {
        background-color: #ddd
    }
`

const DropdownMenu = styled.div`
    display: flex;
    margin: 0;
    justify-content: space-between;
    background-color: white;
    position: absolute;
    width: 100%;
    z-index: 1000;
    left: 0;
`

const MenuContainer = styled.div`
    margin: 3rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const ColumnTitle = styled.div`
    color: rgb(117, 117, 117);
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
`
const ColumnSubTitle = styled.div`
    font-size: 1.15rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 12px;
    &:hover {
        color: #ce945e;
    }
`
const RX = styled.span`
    ::after {
        display: inline;
        content: "RX";
        position: relative;
        top: -2px;
        margin-left: 0.375rem;
        padding: 0.1875rem 0.25rem 0.125rem 0.1875rem;
        font-size: 0.5625rem;
        line-height: 1;
        color: rgb(255, 255, 255);
        background-color: rgba(0, 0, 0, 0.19);
        border-radius: 4px;
    }
    
`
const ColumnText = styled.div`
    font-size: 0.9rem;
    margin-bottom: 7px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: #ce945e;
    }
`

const ColumnTextSub = styled.div`
    display: block;
    font-size: 0.75rem;
    color: rgb(117, 117, 117);
`

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div style={{position: 'relative'}}>
            <HeaderContainer>
                <HeaderLogo>hims</HeaderLogo>
                <HeaderMenuContainer>
                    <TreatmmentBtn onClick={() => setMenuOpen(!menuOpen)}>
                        Treatments
                        <i className="fa-solid fa-chevron-down" style={{marginLeft: '7px'}}></i>
                    </TreatmmentBtn>
                    <i className="fa-solid fa-bars"></i>
                </HeaderMenuContainer>
            </HeaderContainer>
            <DropdownMenu style={{opacity: menuOpen === true ? 1 : 0}}>
                <MenuContainer>
                    <div>
                        <ColumnTitle>Sexual Health</ColumnTitle>
                        <ColumnSubTitle>See all sexual health</ColumnSubTitle>
                        <ColumnText>Erectile Dysfunction</ColumnText>
                        <ColumnText>Premature ejaculation</ColumnText>
                        <ColumnText>Genital herpes</ColumnText>
                    </div>
                    <div>
                        <ColumnTitle>Hair</ColumnTitle>
                        <ColumnSubTitle>See all hair</ColumnSubTitle>
                        <ColumnText>Hair loss</ColumnText>
                        <ColumnText>Hair care</ColumnText>
                    </div>
                    <div>
                        <ColumnTitle>Skin</ColumnTitle>
                        <ColumnSubTitle>See all skin</ColumnSubTitle>
                        <ColumnText>Anti-aging</ColumnText>
                        <ColumnText>Acne</ColumnText>
                        <ColumnText>Skin care</ColumnText>
                    </div>
                    <div>
                        <ColumnTitle>Mental Health</ColumnTitle>
                        <ColumnSubTitle>See all mental health</ColumnSubTitle>
                        <ColumnText>Therapy</ColumnText>
                        <ColumnText>Medication</ColumnText>
                        <ColumnText>Support groups</ColumnText>
                    </div>
                    <div>
                        <ColumnTitle>Everyday Health</ColumnTitle>
                        <ColumnSubTitle>Primary care</ColumnSubTitle>
                        <ColumnText>Supplements</ColumnText>
                        <ColumnText>Infections</ColumnText>
                        <ColumnText>Allergies</ColumnText>
                        <ColumnText>Cold sores</ColumnText>
                    </div>
                    <div>
                        <ColumnTitle>Top Treatments</ColumnTitle>
                        <ColumnSubTitle>
                            Viagra ® <RX></RX>
                            <ColumnTextSub>for erectile dysfunction</ColumnTextSub>
                        </ColumnSubTitle>
                        <ColumnSubTitle>
                            Generic for Viagra ® <RX></RX>
                            <ColumnTextSub>for erectile dysfunction</ColumnTextSub>
                        </ColumnSubTitle>
                        <ColumnSubTitle>
                            Cialis ® <RX></RX>
                            <ColumnTextSub>for erectile dysfunction</ColumnTextSub>
                        </ColumnSubTitle>
                        <ColumnSubTitle>
                            Generic for Cialis
                            <ColumnTextSub>for erectile dysfunction</ColumnTextSub>
                        </ColumnSubTitle>
                        <ColumnSubTitle>
                            Topical Finasteride
                            <ColumnTextSub>for hair loss</ColumnTextSub>
                        </ColumnSubTitle>
                        <ColumnSubTitle>
                            Finasteride
                            <ColumnTextSub>for hair loss</ColumnTextSub>
                        </ColumnSubTitle>
                        <ColumnSubTitle>
                            Minoxidil Foam
                            <ColumnTextSub>for hair loss</ColumnTextSub>
                        </ColumnSubTitle>
                    </div>
                </MenuContainer>
            </DropdownMenu>
        </div>
    )
}

export default Header