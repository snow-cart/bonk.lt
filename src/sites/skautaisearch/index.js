import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Admin from "./Admin";

import Error404 from '../Error404';

function Skautaisearch() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
    );
}

export default Skautaisearch;