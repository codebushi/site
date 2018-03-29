import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import logo from '../assets/img/codebushi-icon-white.svg'

class BlogIndex extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges

        return (
            <div>

                <Helmet>
                    <title>{this.props.data.site.siteMetadata.title}</title>
                    <meta name="description" content={this.props.data.site.siteMetadata.description} />
                </Helmet>

                <div className="banner banner--home">
                    <div className="banner__content text-center">
                        <div className="pb-8">
                            <div className="container-fluid">
                                <div className="home-logo">
                                    <img src={logo} alt="Code Bushi" />
                                </div>
                                <h1 className="font-weight-light mb-3"><span className="u-font-secondary text-uppercase">Code</span> <span className="u-font-special">Bushi</span></h1>
                                <h2 className="mb-3 u-font-primary">Web development tips and resources to elevate your coding journey.</h2>
                            </div>
                        </div>
                        <div className="banner__arrow animation-fadeInOut">
                            <span className="fi-chevron-down h2"></span>
                        </div>
                    </div>
                </div>

                <div className="container">

                    {posts.map(post => {
                        if (post.node.path !== '/404/') {
                            const title = post.node.frontmatter.title || post.node.path
                            return (
                                <article className="post" key={post.node.frontmatter.path} itemScope itemType="http://schema.org/Article">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Link to={post.node.frontmatter.path} className="u-hover-fade">
                                                <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                                            </Link>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="post__title mt-4 mt-lg-0" itemProp="name headline">
                                                <Link to={post.node.frontmatter.path}>
                                                    {post.node.frontmatter.title}
                                                </Link>
                                            </h3>
                                            <p className="mb-4"><small itemProp="datePublished">{post.node.frontmatter.date}</small></p>
                                            <p className="post__excerpt" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                                        </div>
                                    </div>
                                    <meta itemProp="author" content="Hunter Chang" />
                                </article>
                            )
                        }
                    })}

                </div>

                <section className="section section--shaded py-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Img sizes={this.props.data.gatsbyTemplate.sizes} />
                            </div>
                            <div className="col-lg-6">
                                <div className="py-4 text-center">
                                    <h3 className="mb-4">Gatsby Starters and Templates</h3>
                                    <p className="mb-4">View our collection of website templates for Gatsby.js. Gatsby is a static site generator which uses modern web technologies such as React.js, Webpack, and GraphQL.</p>
                                    <p><Link to="/gatsby-starters/" className="btn btn-outline-secondary">View Templates</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section py-6">
                    <div className="container">
                        <h2 className="mb-4">About Code Bushi</h2>
                        <p className="lead">Code Bushi aims to provide web development resources, techniques, and trends to help guide your coding journey. Modern web development is constantly changing and it can be a struggle trying to keep up with the latest standards and best practices. With Code Bushi, I hope to highlight some interesting tools and resources for the modern web.</p>
                        <p className="lead">Code Bushi was started by me, <a href="https://hunterchang.com">Hunter Chang</a>, as a way to document and share my coding experiences. I've been a professional web developer and designer for over 8 years and I still love discovering and creating cool things on the web.</p>
                    </div>
                </section>

            </div>
        )
    }
}

BlogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                author
                description
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { featured: { eq: true } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        path
                        date(formatString: "MMMM DD, YYYY")
                        image {
                            childImageSharp{
                                sizes(maxWidth: 800) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
        gatsbyTemplate: imageSharp(id: { regex: "/gatsby-template/" }) {
            sizes(maxWidth: 690) {
              ...GatsbyImageSharpSizes
            }
        }
    }
`