import { createRoot } from "react-dom/client";
import React from 'react';
//import SidebarView1 from "./views/sidebarView1";
import SidebarView from "./views/sidebarView";

createRoot(document.getElementById('root'))
    .render(
        <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            <SidebarView />

            {/* Main Content */}
            <div style={{ marginLeft: '50px', padding: '20px' }}>
                hello world!
            </div>
        </div>
    );  
