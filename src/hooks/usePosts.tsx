import { gql, useQuery } from "@apollo/client";

export const GET_POSTS = gql`
    query {
        firstPageArticles{
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

export const FetchPosts = () => {
    const {error, loading, data } = useQuery(GET_POSTS)
    return {ferror: error, floading:loading, fdata:data}
}