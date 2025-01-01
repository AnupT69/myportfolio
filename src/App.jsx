import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Skills from "./Components/Skills";

import './index.css';
function App(){
    return(
        // <main className="text-gray-400 bg-gray-900 body-font">
        <main className="text-gray-400 bg-gray-900 body-font">
            {/* <Navbar></Navbar> */}
            <About></About>
            {/* <Projects></Projects> */}
            <Skills></Skills>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
        </main>
    )
}

export default App;