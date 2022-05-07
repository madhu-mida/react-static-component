import React from "react";
import { MdDashboard, MdWidgets, MdOutlineStarPurple500 } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Menu = () => {
    return (
        <div className='side-menu'>
            <div className="menu-list">
                <MdDashboard style={{ marginBottom: '1rem' }} /><p>Dashboard</p>
            </div>

            <div className="menu-list">
                <MdWidgets style={{ marginBottom: '1rem' }} /><p>Widget</p>
            </div>
            <div className="menu-list">
                <MdOutlineStarPurple500 style={{ marginBottom: '1rem' }} /><p>Reviews</p>
            </div>
            <div className="menu-list">
                <BsFillPersonFill style={{ marginBottom: '1rem' }} /><p>Customers</p>
            </div>
            <div className="menu-list">
                <RiCharacterRecognitionLine style={{ marginBottom: '1rem' }} /><p>Online Analysis</p>
            </div>
            <div className="menu-list">
                <IoMdSettings style={{ marginBottom: '1rem' }} /><p>Settings</p>
            </div>


        </div>
    );
}

export default Menu;