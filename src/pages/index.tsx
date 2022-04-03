import React, { useState } from "react"
import { StaticImage } from 'gatsby-plugin-image'
import {
  model,
  phrases,
  emph,
  modelContainer,
  aboutDescription,
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
    <div style={{position:"absolute", top:145, marginLeft: "auto", marginRight: "auto", width:730, left:0, right:0, textAlign: "center"}}>
      <div id="AboutImage" style={{ height:285}}>
        <div style={{ position : "absolute"}}>
        <StaticImage src="../images/watches.png" alt="Watches"></StaticImage>
        <h1 style={{ color:"white", position: "absolute", bottom:5, left:23 }}>Smart watch. Smart fitness.</h1>
        </div>
      </div>
      <div id={aboutDescription}>
        <p>Use your existing smartwatch to track your progress through complete and customized workouts while the app tracks your form.</p>
        <p style={{ marginBottom:0, paddingBottom:0}}>How it works:</p>
        <ol>
          <li><span className={emph}>Connect </span> your smartwatch to your smartphone </li>
          <li><span className={emph}>Download</span> the app on your phone and watch </li>
          <li><span className={emph}>Start </span> your workout </li>
        </ol>
      </div>
    </div>
  )
};

const Contact = () => {
  return (
    <div style={{position:"absolute", top:100, marginLeft: "auto", marginRight: "auto", width:"75%", left:0, right:0, textAlign: "center"}}></div>
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
