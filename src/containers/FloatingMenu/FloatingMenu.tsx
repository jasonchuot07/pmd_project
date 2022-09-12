import styled from 'styled-components'
import {pages} from '../../pages/pages'
import { useLocation } from 'react-router-dom'
const Menu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: sticky;
    top: 0;
    background-color: #F9F6F3;
    box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.11);
`

const Link = styled.a`
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.44);
    font-weight: 600;
    cursor: pointer;
    &:focus, &:active {
        text-decoration: underline;
    }
    &:hover {
        color: rgba(0, 0, 0, 0.33);
    }
`
const ActiveLink = styled.a`
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    cursor: pointer;
    &:focus, &:active {
        text-decoration: underline;
    }
    &:hover {
        color: rgba(0, 0, 0, 0.33);
    }
`

const FloatingMenu = () => {
    const location = useLocation();
    console.log(location.pathname);
    const extractedPath = location.pathname.slice(6,location.pathname.length)
    console.log(extractedPath);
    return (
        <Menu>
            {pages.map((page,i) => (
                <div key={i}>
                    {page.url === extractedPath ? <ActiveLink href={`/blog/${page.url}`}>{page.name}</ActiveLink> : <Link href={`/blog/${page.url}`}>{page.name}</Link>}
                </div>
            ))}
        </Menu>
    )
}

export default FloatingMenu