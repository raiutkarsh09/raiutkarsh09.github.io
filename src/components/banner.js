import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"

const Banner = () =>{
    const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "img2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "img3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left"><Img fluid={data.img2.childImageSharp.fluid} /></div>
                    <div className="main-text" data-text="Utkarsh Rai">Utkarsh Rai</div>
                    <div className="main-image"><Img fluid={data.img1.childImageSharp.fluid} /></div>
                    <div className="side-image right"><Img fluid={data.img3.childImageSharp.fluid} /></div>                
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>
            <div className="fixed-misc">A Chemical Engineer Trying to Figure Out Codes</div>
        </div>
    )
}
export default Banner