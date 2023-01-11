import './sidebar.scss'
import React from 'react'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined'
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined'
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined'
import BugReportIcon from '@mui/icons-material/BugReport'
import SnoozeOutlinedIcon from '@mui/icons-material/SnoozeOutlined'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined'
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">Test Tracker</span>
                </Link>
            </div>

            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <AnalyticsIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title">RESULTS</p>
                    <Link to="/all" style={{ textDecoration: 'none' }}>
                        <li>
                            <FormatListNumberedIcon className="icon" />
                            <span>All Results</span>
                        </li>
                    </Link>

                    <p className="title">MAINTENANCE</p>
                    <Link to="/high" style={{ textDecoration: 'none' }}>
                        <li>
                            <LooksOneOutlinedIcon className="icon" />
                            <span>High</span>
                        </li>
                    </Link>
                    <Link to="/medium" style={{ textDecoration: 'none' }}>
                        <li>
                            <LooksTwoOutlinedIcon className="icon" />
                            <span>Medium</span>
                        </li>
                    </Link>
                    <Link to="/low" style={{ textDecoration: 'none' }}>
                        <li>
                            <Looks3OutlinedIcon className="icon" />
                            <span>Low</span>
                        </li>
                    </Link>
                    <Link to="/smoke" style={{ textDecoration: 'none' }}>
                        <li>
                            <RouteOutlinedIcon className="icon" />
                            <span>Smoke</span>
                        </li>
                    </Link>

                    <p className="title">ISSUES</p>
                    <Link to="/failures" style={{ textDecoration: 'none' }}>
                        <li>
                            <DangerousOutlinedIcon className="icon" />
                            <span>Failures</span>
                        </li>
                    </Link>
                    <Link to="/bugs" style={{ textDecoration: 'none' }}>
                        <li>
                            <BugReportIcon className="icon" />
                            <span>Bugs</span>
                        </li>
                    </Link>
                    <Link to="/ignored" style={{ textDecoration: 'none' }}>
                        <li>
                            <SnoozeOutlinedIcon className="icon" />
                            <span>Ignored</span>
                        </li>
                    </Link>

                    <p className="title">DATA</p>
                    <Link to="/upload" style={{ textDecoration: 'none' }}>
                        <li>
                            <UploadFileOutlinedIcon className="icon" />
                            <span>Upload Results</span>
                        </li>
                    </Link>
                    <Link to="/map" style={{ textDecoration: 'none' }}>
                        <li>
                            <SourceOutlinedIcon className="icon" />
                            <span>Test Map</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar
