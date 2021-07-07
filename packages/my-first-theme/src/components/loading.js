import React from "react"
// keyframes - a function used to define and use animations in your CSS.
import { styled, keyframes } from "frontity"

// <Loading> component doesn't need to access the state
const Loading = () => <Spinner />

export default Loading

// from { ... } to { ... };
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  border: 12px solid #eee;
  border-top: 12px solid steelblue;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`