// Header.js
import React from 'react';


import Dropdown from './header/Dropdown';
import Navigation from './header/Navigation';
import Title from './header/Title';

function Header() {
    return (
        <div class="bg-[#333] text-white pl-5 pr-2.5 pb-2.5">
            
            <div class="flex flex-row">
                <Title/>
                <Dropdown/>
            </div>

            <Navigation/>

        </div>
    );
}

export default Header;
