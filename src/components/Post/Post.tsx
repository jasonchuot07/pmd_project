import bg from '../../assets/hair-growth-products.jpeg'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 80%;
    margin-top: 4rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid rgb(238, 226, 215);;
`

const ImageContainer = styled.div`
    width: 35%;
`

const ContentContainer = styled.div`
    width: 65%;
    text-align: left;
    padding-left: 2rem;
`

const Title = styled.div`
    font-size: 1.8rem;
    font-weight: 600;
`
const Subtitle = styled.div`
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
`
const ReadMore = styled.a`
    color: black;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: 700;
    padding-bottom: 2px;
    border-bottom: 2px solid black;
    text-decoration: none;
`

const Post = ({title, text, url, id, createdAt, author}:any) => {
    const Img = styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
    `
    return (
        <Container>
            <ImageContainer>
                <Img src={bg} alt="" />
            </ImageContainer>
            <ContentContainer>
                <Title>{title}</Title>
                <Subtitle>{text}</Subtitle>
                <ReadMore href={url}>
                    READ THIS ARTICLE
                </ReadMore>
            </ContentContainer>
        </Container>
  )
}

export default Post