import React from 'react';

// eslint-disable-next-line
import dropdown_img from "../../images/dropdown.png";

function Dropdown() {
    return (
        <div class="inline-block relative ml-auto mr-[5px] mt-auto">
            {
            //<img class="max-h-full max-w-full object-cover" src={dropdown_img} alt="Dropdown"/>
            }
            <div class="hidden bg-[#123] min-w-[160px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1] px-4 py-3">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>...</p>
            </div>
        </div>
    );
}

export default Dropdown;