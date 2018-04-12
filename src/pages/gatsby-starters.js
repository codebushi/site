import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import SubscribeForm from '../components/SubscribeForm'

const formProps = {
    action: 'https://hunterchang.us17.list-manage.com/subscribe/post?u=d8b54a1bbe98f0c81add64e56&amp;id=bbf0c0ef12',
    messages: {
        inputPlaceholder: "Email Address",
        btnLabel: "Subscribe",
        sending: "Working...",
        success: "Please check your email to complete the subscription process. Thank you!",
        error: "Please enter a valid email address."
    },
    styles: {
        sending: {
            fontSize: 14,
            color: "auto"
        },
        success: {
            fontSize: 14,
            color: "green"
        },
        error: {
            fontSize: 14,
            color: "red"
        }
    }
}

class GatsbyStarters extends React.Component {
    render() {

        return (
            <div>
                <Helmet>
                    <title>Gatsby.js Starters and Templates | Code Bushi</title>
                    <meta name="description" content="A collection of React.js website starters and templates for Gatsby.js" />
                </Helmet>

                <div className="banner banner--gatsby-starters">
                    <div className="banner__content text-center">
                        <div>
                            <h1 className="text-uppercase"><strong>Gatsby.js <br /> Starters and Templates</strong></h1>
                        </div>
                    </div>
                </div>

                <section className="section section--shaded py-5 text-center">
                    <div className="container">
                        <p className="lead mb-0">New to Gatsby? Check out the <a href="#getStarted">Getting Started</a> guide for a quick overview.</p>
                        <p className="lead mb-0">Here's also some great resources for <Link to="/learning-javascript-and-react/">learning JavaScript and React.js.</Link></p>
                    </div>
                </section>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Dimension</h2>
                                <p className="lead mb-4">A fully responsive, single page React.js website template. Built using Gatsby.js and designed by <a href="https://html5up.net/dimension">HTML5 UP</a>. Great for a quick profile or portfolio site.</p>
                                <p>
                                    <a href="http://gatsby-dimension.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/ChangoMan/gatsby-starter-dimension" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Img sizes={this.props.data.gatsbyDimension.sizes} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Forty</h2>
                                <p className="lead mb-4">A colorful website template featuring a landing page, two hero banner styles, and a generic page. Built using Gatsby.js and designed by <a href="https://html5up.net/forty">HTML5 UP</a>.</p>
                                <p>
                                    <a href="http://gatsby-forty.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/ChangoMan/gatsby-starter-forty" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <Img sizes={this.props.data.gatsbyForty.sizes} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Strata</h2>
                                <p className="lead mb-4">This super simple site features a lightbox style photo gallery. Fully responsive and perfect for displaying your work. Designed by <a href="https://html5up.net/strata">HTML5 UP</a>.</p>
                                <p>
                                    <a href="http://gatsby-strata.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/ChangoMan/gatsby-starter-strata" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Img sizes={this.props.data.gatsbyStrata.sizes} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Stellar</h2>
                                <p className="lead mb-4">A scroll friendly, responsive site. Supports single or multiple pages. Has smooth scrolling to the different sections of the page. Designed by <a href="https://html5up.net/stellar">HTML5 UP</a>.</p>
                                <p>
                                    <a href="http://gatsby-stellar.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/gatsby-starter-stellar" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <Img sizes={this.props.data.gatsbyStellar.sizes} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Photon</h2>
                                <p className="lead mb-4">Great single page site that can be a landing page or a portfolio website. Custom grid elements made with CSS Grid! Original design by <a href="https://html5up.net/photon">HTML5 UP</a>.</p>
                                <p>
                                    <a href="http://gatsby-photon.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/gatsby-starter-photon" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Img sizes={this.props.data.gatsbyPhoton.sizes} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid newsletter text-center" style={{padding: '40px 20px'}}>
                    <div className="container">
                        <p className="lead">Sign up and receive an email alert when the next Gatsby Starter is released!</p>
                        <SubscribeForm {...formProps}/>
                        <p className="mt-2 mb-0"><small><em>Your email will never be shared or used for spam!</em></small></p>
                    </div>
                </div>

                <section id="getStarted" className="section py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Getting Started with Gatsby</h2>
                        <p>To use <a href="https://www.gatsbyjs.org/">Gatsby.js</a>, make sure you have <a href="https://nodejs.org/en/download/">Node.js</a> and npm installed on your machine. Gatsby starters can be installed via the Gatsby CLI tool or by cloning a GitHub repository. Let's explore the CLI tool by first installing it.</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token comment"># Install the Gatsby CLI tool globally on your machine</span><br />
                                    <span className="token function">npm install</span> --global gatsby-cli
                                </code>
                            </pre>
                        </div>

                        <p>The convention for starting a new Gatsby site with the CLI is:</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token function">gatsby new</span> [SITE_DIRECTORY] [URL_OF_STARTER_GITHUB_REPO]
                                </code>
                            </pre>
                        </div>

                        <p>Let's try installing the Gatsby Dimension Starter:</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token function">gatsby new</span> gatsby-starter-dimension https://github.com/ChangoMan/gatsby-starter-dimension
                                </code>
                            </pre>
                        </div>

                        <p>This will create a new directory called <code className="language-text">gatsby-starter-dimension</code> and clone the repository into it. It will also automatically run <code className="language-text">npm install</code> in the directory for you. Now we just need to go into the new directory and boot up Gatsby.</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token function">cd</span> gatsby-starter-dimension<br /><br />
                                    <span className="token comment"># Start the dev site, browse to http://localhost:8000/</span><br />
                                    <span className="token function">gatsby develop</span>
                                </code>
                            </pre>
                        </div>

                        <p>If you don't want to use the Gatsby CLI tool, you can just clone the repository and manually run <code className="language-text">npm install</code> inside the folder, followed by <code className="language-text">gatsby develop</code>. Check out the official <a href="https://www.gatsbyjs.org/tutorial/">Gatsby Tutorials</a> for more information.</p>

                    </div>
                </section>

            </div>
        )
    }
}

export default GatsbyStarters

export const pageQuery = graphql`
    query GatsbyStartersQuery {
        gatsbyDimension: imageSharp(id: { regex: "/template-gatsby-dimension/" }) {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
        }
        gatsbyForty: imageSharp(id: { regex: "/template-gatsby-forty/" }) {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
        }
        gatsbyStrata: imageSharp(id: { regex: "/template-gatsby-strata/" }) {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
        }
        gatsbyStellar: imageSharp(id: { regex: "/template-gatsby-stellar/" }) {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
        }
        gatsbyPhoton: imageSharp(id: { regex: "/template-gatsby-photon/" }) {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
        }
    }
`