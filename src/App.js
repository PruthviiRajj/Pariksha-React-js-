import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Navbar from './NavbarChakra';
import Home from './Home';
import Test from './test';
import Submit from './submit';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/main.css';

const pageTransition = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
};

const App = () => {
    const location = useLocation();

    return (
        <ChakraProvider>
            <ColorModeScript />
            <div className="app-container fade-in">
                <Toaster position="top-right" />
                <Navbar />
                <main className="main-content container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                        >
                            <Routes location={location}>
                                <Route path="/" element={<Home />} />
                                <Route path="/test/:id" element={<Test />} />
                                <Route path="/submit" element={<Submit />} />
                            </Routes>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </ChakraProvider>
    );
};

export default App;