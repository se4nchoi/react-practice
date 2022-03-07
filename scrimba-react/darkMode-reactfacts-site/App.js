import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    // top-level state management (SST)
    const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleMode={toggleMode}
            />
            <Main 
                darkMode={darkMode}                
            />
        </div>
    )
}