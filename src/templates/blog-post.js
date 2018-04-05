import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import ReactDisqusComments from "react-disqus-comments";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon } from 'react-share'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = this.props.data.site.siteMetadata.title

        const shareUrl = 'https://codebushi.com' + post.frontmatter.path

        return (
            <article className="post-single" style={{paddingTop:'4rem'}} itemScope itemType="http://schema.org/Article">
                <Helmet>
                    <title>{`${post.frontmatter.title} | Code Bushi`}</title>
                    <meta name="author" content="Hunter Chang" />
                    <meta name="description" content={post.frontmatter.description} />
                </Helmet>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">

                            <h1 className="post-title h2" itemProp="name headline">{post.frontmatter.title}</h1>
                            <p className="mb-4"><small itemProp="datePublished">{post.frontmatter.date}</small></p>
                            <Img className="mb-5" sizes={post.frontmatter.image.childImageSharp.sizes} />

                            {post.frontmatter.disclosure ? <p><em>(This post may contain affiliate links. Please read my <Link to="/disclosure">disclosure</Link> for more info)</em></p> : undefined}

                            <div className="pb-4" dangerouslySetInnerHTML={{ __html: post.html }} />

                            <hr />

                            <div className="d-flex justify-content-center">
                                <FacebookShareButton url={shareUrl} quote={post.frontmatter.title} className="mr-3">
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton url={shareUrl} title={post.frontmatter.title} className="mr-3">
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <RedditShareButton url={shareUrl} title={post.frontmatter.title} windowWidth={660} windowHeight={460}>
                                    <RedditIcon size={32} round />
                                </RedditShareButton>
                            </div>

                            <hr />

                            <div className="mb-5 mt-5">
                                <ReactDisqusComments
                                    shortname="hunter-chang"
                                    title={post.frontmatter.title}
                                    url={shareUrl}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <meta itemProp="author" content="Hunter Chang" />
            </article>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
                description
                disclosure
                image {
                    childImageSharp{
                        sizes(maxWidth: 920) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
`