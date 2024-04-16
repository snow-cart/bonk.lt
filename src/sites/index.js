import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";

import {
    ContentWrapper
} from '../styles/Styles';


function Site() {
    return (
        <ContentWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </ContentWrapper>
    );
}

export default Site;