import React from 'react';

const navBar = props => {
    return (
        <header>
            <nav>
                <div> </div>
                <div><a href='/'>THE LOGO</a> </div>
                <div>
                    <ul>
                        <li> <a href='/'> Menu </a></li>
                        <li> <a href='/'> Setting </a></li>
                        <li> <a href='/'> Feedback </a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default navBar;