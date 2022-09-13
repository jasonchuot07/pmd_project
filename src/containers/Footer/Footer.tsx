import styled from 'styled-components'

const FooterContainer = styled.div`
`
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-bottom: 4rem;
`
const FooterSubContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: black;
    color: white;
    padding: 3rem;
    position: relative;
`

const FooterHeader = styled.a`
    margin-bottom: 2rem;
`

const FooterInput = styled.input`
    padding: 1.25rem 1rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
`

const FooterTitle = styled.div`
    margin-bottom: 15px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const FooterSubtitle = styled.div`
    font-size: 0.8rem;
    color: #9e9e9e;
`

const FooterDescription = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column ;
    font-size: 11px;
    font-weight: bold;
    position: absolute;
    left: 8rem;
    bottom: 1rem;
    margin-bottom: 4rem;
    span {
        padding-bottom: 20px;
        margin-left: 15px;
    }
`

const FCardContainer = styled.div`
    display: flex;
    background-color: #444;
    border-radius: 15px;
    padding: 10px 15px;
    position: absolute;
    right: 8rem;
    bottom: 5rem;
`

const FCardAva = styled.div`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: 1rem;
`

const FCardInfoContainer = styled.div`
    
`

const FCardInfoTitle = styled.div`
    font-size: 20px;
`

const FCardInfoSub = styled.div`
    font-size: 14px;
`

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubContainer>
            <ColumnContainer>
                <FooterHeader>Get the latest from Hims</FooterHeader>
                <FooterInput placeholder="Email Address" />
            </ColumnContainer>
            <ColumnContainer>
                <FooterTitle>Popular</FooterTitle>
                <FooterTitle>Viagra ® </FooterTitle>
                <FooterTitle>
                    Sildenafil
                    <FooterSubtitle>Generic for Viagra®</FooterSubtitle>
                </FooterTitle>
                <FooterTitle>Cialis®</FooterTitle>
                <FooterTitle>
                    Tadalafil
                    <FooterSubtitle>Generic for Cialis®</FooterSubtitle>
                </FooterTitle>
                <FooterTitle>Minoxidil Solution</FooterTitle>
                <FooterTitle>Finasteride Pills</FooterTitle>
                <FooterTitle>Topical Finasteride</FooterTitle>
                <FooterTitle>Sertraline</FooterTitle>
                <FooterTitle>Sertraline for PE</FooterTitle>
                <FooterTitle>Premature Ejaculation Pills</FooterTitle>
            </ColumnContainer>
            <ColumnContainer>
                <FooterTitle>About Us</FooterTitle>
                <FooterTitle>How It Works</FooterTitle>
                <FooterTitle>Our Medical Experts</FooterTitle>
                <FooterTitle>
                    Savoir Faire
                    <FooterSubtitle>(It’s our blog)</FooterSubtitle>
                </FooterTitle>
                <FooterTitle>Medical Review</FooterTitle>
                <FooterTitle>Advocacy</FooterTitle>
                <FooterTitle>Purpose</FooterTitle>
                <FooterTitle>Reviews</FooterTitle>
                <FooterTitle>Investors</FooterTitle>
            </ColumnContainer>
            <ColumnContainer>
                <FooterTitle>Help Center</FooterTitle>
                <FooterTitle>
                    contact@forhims.com
                    <FooterSubtitle>(If you are a customer seeking support)</FooterSubtitle>
                </FooterTitle>
                <FooterTitle>
                    press@forhims.com
                    <FooterSubtitle>Important: FOR MEDIA ONLY. Do not use for customer service inquires. </FooterSubtitle>
                    <FooterSubtitle>press@forhims.com goes to a third party — never send personal, medical, or health information to this address. 
                        Support inquiries will not be addressed.</FooterSubtitle>
                </FooterTitle>
            </ColumnContainer>
            <ColumnContainer>
                <FooterTitle>Career</FooterTitle>
                <FooterTitle>Professionals</FooterTitle>
                <FooterTitle>Provider</FooterTitle>
            </ColumnContainer>
        </FooterSubContainer>
        <FooterSubContainer>
            <FooterDescription>
                <div>
                    <span>Terms & conditions</span>
                    <span>Privacy policy</span>
                    <span>Sitemap</span>
                    <span>CCPA: Do Not Sell My Personal Information</span>
                </div>
                <div style={{display: 'flex'}}>
                    © 2022 Hims & Hers Health, Inc. All rights reserved. HIMS, HERS, H, and HIMS & HERS are trademarks of Hims, Inc.
                </div>
            </FooterDescription>
            <FCardContainer>
                <FCardAva></FCardAva>
                <FCardInfoContainer>
                    <FCardInfoTitle>hers</FCardInfoTitle>
                    <FCardInfoSub>visit forhers.com</FCardInfoSub>
                </FCardInfoContainer>
            </FCardContainer>
            
        </FooterSubContainer>
    </FooterContainer>
  )
}

export default Footer