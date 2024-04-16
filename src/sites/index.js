import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";

import {
    GenericSite
} from '../styles/Styles';


function Site() {
    return (
        <GenericSite>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </GenericSite>
    );
}

export default Site;