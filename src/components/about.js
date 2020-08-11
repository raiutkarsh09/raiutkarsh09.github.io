import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
import {Link} from "gatsby"

const About = () =>{
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
    }
  `)


    return (
        <div className="about" id="about-jump">
            <div className="container">
                <div className="inner-about">
                    <div className="content">
                       <h3>Wanna Know about me?</h3>
                       <p>A machine learning enthusiast ,A photographer and a free time video post producer with the backbone of currently pursuing Chemical engineering at National Institute of Technology, Hamirpur(HP). Codes brainstorm me sometimes tho. .</p>
                       <div className="btn-row">
                           <Link to="/#contact-jump">Contact Me.</Link>
                       </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <Img fluid={data.img1.childImageSharp.fluid} />
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
            
        </div>
    )
}
export default About