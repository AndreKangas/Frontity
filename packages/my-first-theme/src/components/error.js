import React from "react"
import { connect } from "frontity"

//  create a component to inform the user that the page can't be found
const Error = ({ state }) => {
    return (
        <>
            <h2>404 Error</h2>
            <p>
                The path <em>{state.router.link}</em> cannot be found.
            </p>
        </>
    )
}

export default connect(Error)