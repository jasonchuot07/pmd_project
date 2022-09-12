import { useQuery, gql } from '@apollo/client'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Post from '../../components/Post/Post'
import { FetchPosts } from '../../hooks/usePosts'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import {offsetLimitPagination} from '@apollo/client/utilities';
import { InView } from 'react-intersection-observer'

export const client = new ApolloClient({
    uri: 'https://gql-technical-assignment.herokuapp.com/graphql',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            firstPageArticles: offsetLimitPagination()
          }
        }
      }
    }),
})

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BlogsContainer = () => {

    const [fullyLoaded, setFullyLoaded] = useState(false);
    

    const PAGE_QUERY = gql`
        query firstPageArticles($offset: Int!, $limit: Int!) {
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
    `
    const {data, loading, error, fetchMore, variables, networkStatus} = useQuery(PAGE_QUERY, {
        client
    })

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>{error.message}</div>;
    }
    
    return (
        <Container>
            {data && data.retrievePageArticles.map((page:any, i:any) => (
                <Post key={page.title} title={page.title} text={page.text} url={page.url} />
            ))}

        {!fullyLoaded && (
          <InView
            onChange={async (inView) => {
              if (inView) {
                const result = await fetchMore({
                  variables: {
                    page: 1
                  }
                });
                setFullyLoaded(!result.data.retrievePageArticles.length);
              }
            }}
          />
        )}
            
        </Container>
    )
}

export default BlogsContainer