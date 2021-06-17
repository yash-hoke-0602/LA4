import React from 'react';

function Footer(props) {
    return (
        <div style={{ marginLeft: "10%", marginTop:"20%" }}>
            <h3>Contact us:-</h3>
            <h5>Email:- {props.email}</h5>
            <h5>Name:- {props.name}</h5>
        </div>
    );
}

export default Footer;