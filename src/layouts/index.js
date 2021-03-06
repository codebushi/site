import React from 'react'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import '../assets/scss/main.scss'

class Template extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showNav: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            showNav: !this.state.showNav
        });
    }

    render() {

        const { location, children } = this.props

        let bodyClass = '';
        let toggleClass = '';
        let isHomepage = true;

        if (location.pathname === '/') {
            bodyClass = ' body-home';
            // isHomepage = true;
        }

        if (this.state.showNav) {
            toggleClass = ' show-nav'
        }

        return (
            <div className={'body' + bodyClass + toggleClass} itemScope itemType="http://schema.org/WebSite">
                <link itemProp="url" href="https://codebushi.com/"/>
                <div itemScope itemType="http://schema.org/WebPage">
                    <Header handleToggleNav={this.toggleNav} toggleClass={toggleClass} isHomepage={isHomepage} />
                    <Navigation handleToggleNav={this.toggleNav} data={this.props.data} />
                    <main itemScope itemProp="mainContentOfPage">
                        {children()}
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func,
    location: React.PropTypes.object
}

export default Template

export const navQuery = graphql`
    query NavQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`