import './sidebar.scss'

import AnalyticsIcon from '@mui/icons-material/Analytics';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import BugReportIcon from '@mui/icons-material/BugReport';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><AnalyticsIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">RESULTS</p>
                    <li>
                        <FormatListNumberedIcon className="icon" />
                        <span>All</span>
                    </li>
                    <li>
                        <LooksOneIcon className="icon" />
                        <span>High</span>
                    </li>
                    <li>
                        <LooksTwoIcon className="icon" />
                        <span>Medium</span>
                    </li>
                    <li>
                        <Looks3Icon className="icon" />
                        <span>Low</span>
                    </li>
                    <li>
                        <RotateRightIcon className="icon" />
                        <span>Smoke</span>
                    </li>
                    <p className="title">TICKETS</p>
                    <li>
                        <BugReportIcon className="icon" />
                        <span>Bugs</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;