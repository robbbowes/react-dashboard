import './navbar.scss'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import PublicIcon from '@mui/icons-material/Public'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const Navbar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <PublicIcon className="icon" />
                        <span className="language">EN-GB</span>
                    </div>
                    <div
                        className="item"
                        onClick={() => dispatch({ type: 'TOGGLE' })}
                    >
                        {darkMode ? (
                            <LightModeOutlinedIcon className="icon" />
                        ) : (
                            <DarkModeOutlinedIcon className="icon" />
                        )}
                    </div>
                    <div className="item">
                        <NotificationsOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>

                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
                            alt="User avatar"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
