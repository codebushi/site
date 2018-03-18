import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
    <footer className="site-footer pt-2 pb-2" style={{borderTop: '1px solid #222'}} itemScope itemType="http://schema.org/WPFooter">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-lg-left">
                    <p className="mt-3"><Link to="/" className="u-link-white">&copy; 2018 Code Bushi</Link></p>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                    <p className="mt-md-3">
                        <a href="https://github.com/codebushi" title="Code Bushi's Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer