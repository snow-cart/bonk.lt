import React from 'react';

function Navigation() {
    return (
        <nav className="flex flex-row">
            <a className="text-white no-underline mr-5 hover:underline" href="/">Home</a>
            <a className="text-white no-underline mr-5 hover:underline" href="/about">About</a>
            <a className="text-white no-underline mr-5 hover:underline" href="https://ftp.bonk.lt">FTP</a>
            <a className="text-white no-underline mr-5 hover:underline" href="/contacts">Contacts</a>
            <a className="text-white no-underline mr-5 hover:underline" href="/navigation">Navigation</a>
        </nav>
    );
}

export default Navigation;