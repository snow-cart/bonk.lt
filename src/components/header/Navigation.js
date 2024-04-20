import React from 'react';

function Navigation() {
    return (
        <div class="flex flex-row">
            <a class="text-white no-underline mr-5 hover:underline" href="/">Home</a>
            <a class="text-white no-underline mr-5 hover:underline" href="/about">About</a>
            <a class="text-white no-underline mr-5 hover:underline" href="https://ftp.bonk.lt">FTP</a>
            <a class="text-white no-underline mr-5 hover:underline" href="/contacts">Contacts</a>
        </div>
    );
}

export default Navigation;