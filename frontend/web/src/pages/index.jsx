import Layout from "./Layout.jsx";

import Welcome from "./Welcome";

import Mapa from "./Mapa";

import Degradacao from "./Degradacao";

import Separacao from "./Separacao";

import Sobre from "./Sobre";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Welcome: Welcome,
    
    Mapa: Mapa,
    
    Degradacao: Degradacao,
    
    Separacao: Separacao,
    
    Sobre: Sobre,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Welcome />} />
                
                
                <Route path="/Welcome" element={<Welcome />} />
                
                <Route path="/Mapa" element={<Mapa />} />
                
                <Route path="/Degradacao" element={<Degradacao />} />
                
                <Route path="/Separacao" element={<Separacao />} />
                
                <Route path="/Sobre" element={<Sobre />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}