import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FormatListNumberedRtlOutlinedIcon from '@mui/icons-material/FormatListNumberedRtlOutlined';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import React from "react"
import { Link } from 'react-router-dom'

interface WidgetProps {
    type: string
}

interface Data {
    title: string,
    icon: JSX.Element
}

const Widget = ({ type }: WidgetProps) => {

    let data: Data;

    // temporary
    const amount = 100;
    const percentage = 87;

    switch (type) {
        case "all":
            data = {
                title: "ALL",
                icon: <FormatListNumberedRtlOutlinedIcon className="icon" style={{ color: "blue", backgroundColor: "rgba(0, 0, 255, 0.2)" }} />
            }
            break;
        case "high":
            data = {
                title: "HIGH",
                icon: <LooksOneOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />
            }
            break;
        case "medium":
            data = {
                title: "MEDIUM",
                icon: <LooksTwoOutlinedIcon className="icon" style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)" }} />
            }
            break;
        case "low":
            data = {
                title: "LOW",
                icon: <Looks3OutlinedIcon className="icon" style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} />
            }
            break;
        case "smoke":
            data = {
                title: "SMOKE",
                icon: <RouteOutlinedIcon className="icon" style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} />
            }
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}</span>
                <Link to={`/tests/${type}`} style={{ textDecoration: 'none' }}>
                    <span className="link">View all</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {percentage}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;