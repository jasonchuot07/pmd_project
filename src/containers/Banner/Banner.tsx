import styled from 'styled-components'
import bannerbg from '../../assets/bannerbg.png'

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    height: 39vw;
    background-image: url(${bannerbg});
    background-position: right center;
    background-size: auto 100%;
    text-align: left;
    background-repeat: no-repeat;
    background-color: rgb(183, 199, 201);
`

const InfoContainer = styled.div`
    width: 44%;
    margin-left: 8.33%;
`

const Title = styled.div`
    font-size: 5.5rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.88);
`

const Info = styled.div`
    color: rgba(0, 0, 0, 0.88);
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0px;
    font-size: 1.5rem;
    line-height: 1.5;
`

const Banner = () => {
  return (
    <BannerContainer>
        <InfoContainer>
            <Title>Savoir Faire</Title>
            <Info>
            it’s french. say it how it’s supposed to be said.
            </Info>
            <Info>
            it’ll make your mouth feel funny.
            </Info>
        </InfoContainer>
    </BannerContainer>
  )
}

export default Banner