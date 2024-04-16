import React from 'react';
import { Link } from "react-router-dom";

const SideNavigationBar: React.FC = () => (
   <div className={"Side-Navigation-Bar"}>
       <div className={"Side-Navigation-Item"}>
           <Link to="/">Home</Link>
       </div>
       <div className={"Side-Navigation-Item"}>
           <Link to="/Projects">Projects</Link>
       </div>
       <div className={"Side-Navigation-Item"}>
           <Link to="/Contact">Contact</Link>
       </div>
       <div className={"Side-Navigation-Item"}>
           <Link to="/Resume">Resume</Link>
       </div>
   </div>
);

export default SideNavigationBar;