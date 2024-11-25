import React, { useState } from 'react';
import './sidebarView.css';

const SidebarView = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="layout">
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                {/* Toggle Button Container */}
                <div className="toggle-button-container">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {isSidebarOpen ? '❮' : '❯'}
                    </button>
                </div>

                {/* Sidebar Content */}
                {isSidebarOpen && (
                    <>
                        <div className="sidebar-section">
                            <button className="collapsible">My Physiotherapist</button>
                        </div>
                        <div className="sidebar-section">
                            <button className="collapsible">My Workout Plan</button>
                        </div>
                        <div className="sidebar-section">
                            <button className="collapsible">Search Exercise</button>
                        </div>
                        <div className="sidebar-section">
                            <button className="non-collapsible">Exercise Plan</button>
                        </div>
                        <div className="sidebar-section">
                            <button className="logout-button">Log Out</button>
                        </div>
                    </>
                )}
            </div>

           
        </div>
    );
};

export default SidebarView;
