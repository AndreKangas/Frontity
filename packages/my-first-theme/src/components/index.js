import React from "react"

//  connect -  enables a component in our theme to access data stored in the state, or functions available in actions
// <Global>, css, as well as styled - exported by the Emotion library
// Head component - add tags to the HTML <head> element.
import { connect, Global, css, styled, Head } from "frontity"

//  outputs an <a> element into the resulting HTML, but without forcing a page reload
import Link from "@frontity/components/link"

//   renders the first child component that returns true as the value of its when prop.
//  'switch' statement
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Loading from "./loading"
import Error from "./error"
import externalCss from "../scss/css/styles.css";


const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)

    return (
        <>

            {/* styles that apply site-wide */}
            {/* Global has an attribute, styles, which in turn takes a css function as it's value */}
            <Global styles={css(externalCss)}/>
            <Head>
                <title>My First Frontity Theme</title>
                <meta 
                    name="description"
                    content="Based on the Frontity step by step tutorial" />
            </Head>

            {/* isPostType gets passed to a function that we add to our CSS that conditionally checks the boolean value passed in */}
            <Header isPostType={data.isPostType} isPage={data.isPage}>
                <HeaderContent>
                    <h1>Frontity Workshop</h1>

                    {/* check the value of isUrlVisible and either display the URL or not */}
                    { state.theme.isUrlVisible ? (
                        <>
                            Current URL: {state.router.link}{" "}
                            <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
                        </>
                        ) : (
                            <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
                        ) 
                    }
                    <nav>
                        <Link link="/">Home</Link>
                        <Link link="/destinations">Destinations</Link>
                        <Link link="/about-us">About Us</Link>
                    </nav>
                </HeaderContent>
            </Header>
            
            <hr />
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <Page when={data.isPage} />
                    <Post when={data.isPost} />
                    <Page when={data.isDestinations} />
                    <Error when={data.isError} />
                </Switch>
            </Main>
        </>
    )
}

export default connect(Root)


//  CSS-in-JS
//  It's also possible with separate scc script
const Header = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;

    //cannot use if...then...else in JavaScript embedded within a template literal.
    border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};
    
    h1 {
        color: #4a4a4a;
    }
`

const HeaderContent = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto;
`

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

