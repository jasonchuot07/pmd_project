import styled from 'styled-components'
import BlogsContainer from '../BlogsContainer/BlogsContainer'
import FloatingMenu from '../FloatingMenu/FloatingMenu'

const Body = styled.div`
    background-color: #F9F6F3;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 8rem;
    padding-bottom: 8rem;
`

const Subtitle = styled.div`
    color: rgb(204, 131, 92);
    margin-bottom: 0px;
    font-weight: bold;
`

const Title = styled.a`
    margin-top: 3rem;
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.25;
    color: rgba(0, 0, 0, 0.88);
`

const PageBody = () => {
  return (
    <Body>
        <Subtitle>Discover more about mens health</Subtitle>
        <Title>Explore the Hims Journal</Title>
        <FloatingMenu />
        <BlogsContainer />
    </Body>
  )
}

export default PageBody