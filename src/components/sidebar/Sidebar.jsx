import './sidebar.scss'

import AnalyticsIcon from '@mui/icons-material/Analytics';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import BugReportIcon from '@mui/icons-material/BugReport';
import SnoozeOutlinedIcon from '@mui/icons-material/SnoozeOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Test Tracker</span>
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
                        <span>All Results</span>
                    </li>
                    <p className="title">MAINTENANCE</p>
                    <li>
                        <LooksOneOutlinedIcon className="icon" />
                        <span>High</span>
                    </li>
                    <li>
                        <LooksTwoOutlinedIcon className="icon" />
                        <span>Medium</span>
                    </li>
                    <li>
                        <Looks3OutlinedIcon className="icon" />
                        <span>Low</span>
                    </li>
                    <li>
                        <RouteOutlinedIcon className="icon" />
                        <span>Smoke</span>
                    </li>
                    <p className="title">ISSUES</p>
                    <li>
                        <DangerousOutlinedIcon className="icon" />
                        <span>Failures</span>
                    </li>
                    <li>
                        <BugReportIcon className="icon" />
                        <span>Bugs</span>
                    </li>
                    <li>
                        <SnoozeOutlinedIcon className="icon" />
                        <span>Ignored</span>
                    </li>
                    <p className="title">DATA</p>
                    <li>
                        <UploadFileOutlinedIcon className="icon" />
                        <span>Upload Results</span>
                    </li>
                    <li>
                        <SourceOutlinedIcon className="icon" />
                        <span>Test Map</span>
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