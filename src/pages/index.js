import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')

        return (
            <div>

                <Helmet>
                    <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
                    <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
                </Helmet>

                <div className="banner banner--home mb-0">
                    <div className="banner__content text-center">
                        <div className="pb-8">
                            <div style={{maxWidth:400, margin: '0 auto'}}>
                                <Img resolutions={this.props.data.logo.resolutions} />
                            </div>
                            <h1 className="font-weight-light mb-3"><span className="font-special text-uppercase">Code</span> <span className="font-special-two">Bushi</span></h1>
                            <h2 className="mb-3">Web development tips and resources to elevate your coding journey.</h2>
                            <h2 className="mb-3">- Coming Soon -</h2>
                        </div>
                        {/*<div className="banner__arrow animation-fadeInOut">
                            <span className="fi-chevron-down h2"></span>
                        </div>*/}
                    </div>
                </div>

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
        logo: imageSharp(id: { regex: "/logo-codebushi/" }) {
            resolutions(width: 400, height: 272) {
              ...GatsbyImageSharpResolutions
            }
        }
        gatsbyTemplate: imageSharp(id: { regex: "/gatsby-template/" }) {
            sizes(maxWidth: 690) {
              ...GatsbyImageSharpSizes
            }
        }
    }
`