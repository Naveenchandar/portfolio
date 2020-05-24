import React from 'react';

function FooterPage() {
    const year = new Date().getFullYear();
    return (
        <div style={{ color: 'black', background: 'rgb(222, 226, 230)' }}>
            Copyright &copy; {year}, All Rights Reserved.
        </div>
    )
}

export default FooterPage;
