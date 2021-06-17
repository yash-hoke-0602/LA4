import React from 'react';

function Header(props) {
    return (
        <div>
            <h2 style={{ marginLeft: "40%" }}>{props.title}</h2>  
        </div>
    );
}

export default Header;