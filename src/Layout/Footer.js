import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="page-footer cyan darken-1">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">React Shop</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;