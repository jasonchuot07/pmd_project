import { useQuery, gql } from '@apollo/client'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Post from '../../components/Post/Post'
import { FetchPosts } from '../../hooks/usePosts'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import {offsetLimitPagination} from '@apollo/client/utilities';
import { InView } from 'react-intersection-observer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export 

const BlogsContainer = () => {
    const [page, setPage] = useState(1)
    const {fdata, floading, ferror} = FetchPosts()
    

    const GET_POSTS = gql`
      query {
        retrievePageArticles(page: page) {
          id
          author
          createdAt
          score
          updatedAt
          title
          text
          type
          url
        }
      }
    `
    const {data, loading, error} = useQuery(GET_POSTS)
    if (floading) {
        return <div>Loading...</div>;
      }
    
      if (ferror) {
        return <div>{ferror.message}</div>;
    }
    
    return (
        <Container>
          {fdata && fdata.firstPageArticles.map((page:any, i:any) => (
            <Post key={page.title} title={page.title} text={page.text} url={page.url} />
          ))}
          {data && data.retrievePageArticles.map((page:any, i:any) => (
            <Post key={page.title} title={page.title} text={page.text} url={page.url} />
          ))}
        </Container>
    )
}

export default BlogsContainer