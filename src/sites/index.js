import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";

import Error404 from './Error404';



function Site() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
    );
}

export default Site;