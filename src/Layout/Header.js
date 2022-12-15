import React from 'react';

function Header(props) {
    return (
        <div>
            <nav className="cyan darken-1 ">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">React Shop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://magamed-ali.github.io/react-shop/" target="_blank">Repo</a></li>
                        <li><a href="https://magamed-ali.github.io/react-shop/" target="_blank">Repo</a></li>
                        <li><a href="https://magamed-ali.github.io/react-shop/" target="_blank">Repo</a></li>
                        <li><a href="https://magamed-ali.github.io/react-shop/" target="_blank">Repo</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;