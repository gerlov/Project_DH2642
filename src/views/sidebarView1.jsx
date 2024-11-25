import React, { useState } from 'react';
import './sidebarView1.css';

const SidebarView1 = () => {
    const [isCollapsed, setIsCollapsed] = useState({
        physiotherapist: false,
        workoutPlan: false,
        searchExercise: false,
    });

    const toggleCollapse = (section) => {
        setIsCollapsed((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="sidebar">
            {/* Collapsible: My Physiotherapist */}
            <div className="sidebar-section">
                <button
                    className="collapsible"
                    onClick={() => toggleCollapse('physiotherapist')}
                >
                    My Physiotherapist
                    <span className={`arrow ${isCollapsed.physiotherapist ? 'right' : 'down'}`}></span>
                </button>
                {!isCollapsed.physiotherapist && (
                    <ul className="section-content">
                        <li>Title</li>
                        <li>Title</li>
                        <li>Title</li>
                    </ul>
                )}
            </div>

            {/* Collapsible: My Workout Plan */}
            <div className="sidebar-section">
                <button
                    className="collapsible"
                    onClick={() => toggleCollapse('workoutPlan')}
                >
                    My Workout Plan
                    <span className={`arrow ${isCollapsed.workoutPlan ? 'right' : 'down'}`}></span>
                </button>
                {!isCollapsed.workoutPlan && (
                    <ul className="section-content">
                        <li>Title</li>
                        <li>Title</li>
                        <li>Title</li>
                    </ul>
                )}
            </div>

            {/* Collapsible: Search Exercise */}
            <div className="sidebar-section">
                <button
                    className="collapsible"
                    onClick={() => toggleCollapse('searchExercise')}
                >
                    Search Exercise
                    <span className={`arrow ${isCollapsed.searchExercise ? 'right' : 'down'}`}></span>
                </button>
                {!isCollapsed.searchExercise && (
                    <ul className="section-content">
                        <li>Title</li>
                        <li>Title</li>
                        <li>Title</li>
                    </ul>
                )}
            </div>

            {/* Non-Collapsible: Exercise Plan */}
            <div className="sidebar-section">
                <button className="non-collapsible">Exercise Plan</button>
            </div>

            {/* Non-Collapsible: Log Out Button */}
            <div className="sidebar-section">
                <button className="logout-button">Log Out</button>
            </div>
        </div>
    );
};

export default SidebarView1;
