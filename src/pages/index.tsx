import React, { useState } from "react"
import { StaticImage } from 'gatsby-plugin-image'
import {
  model,
  phrases,
  emph,
  modelContainer,
} from  "./styles.module.scss"
import Layout from "../components/layout";

const Home = () => {
  return (
  <div style={{zIndex: "0"}}> 
    <div id={modelContainer}>
      <StaticImage id={model} src="../images/model.png" alt="Phone model"></StaticImage>
    </div>
    <div id={phrases}>
      <p>
        <span className={emph}>Injury free fitness</span><br></br>
        Your personal trainer that corrects your form and tracks your workout
      </p>
    </div>
  </div>
  )
}

const About = () => {
  return (
    <div style={{position:"absolute", top:100, marginLeft: "auto", marginRight: "auto", width:"75%", left:0, right:0, textAlign: "center"}}><h1>About us!</h1></div>
  )
};

const Contact = () => {
  return (
    <div style={{position:"absolute", top:100, marginLeft: "auto", marginRight: "auto", width:"75%", left:0, right:0, textAlign: "center"}}><h1>Contact us!</h1></div>
  )
};

const Content = ({page}:{page:string}) => {
  if (page=="Home")
    return (<Home></Home>)
  else if (page=="About")
    return (<About></About>)
  else if (page=="Contact")
    return (<Contact></Contact>)
  else 
    return (<Home></Home>)
}

// markup
const IndexPage = () => {
  const [page, setPage] = useState("Home");
  return (
    <main>
      <Layout page={page} updatePage={setPage}>
        <Content page={page}></Content>
      </Layout>
    </main>
  )
}

export default IndexPage
