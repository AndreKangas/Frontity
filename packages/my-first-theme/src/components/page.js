import React from "react"

//  Head component - add tags to the HTML <head> element.
import { connect, Head } from "frontity"

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    //  internal links in our page will update from the state and not force an HTTP request and hence a page reload
    const Html2React = libraries.html2react.Component

    return (
        <div>
            <Head>
                {/* the title and excerpt that is held in the state for that page */}
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <h2>{page.title.rendered}</h2>
            <Html2React html={page.content.rendered} />
        </div>
    )
}

export default connect(Page)