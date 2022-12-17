import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = ({ featured }) => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">{featured} Results</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featured-chart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <p className="title">Total Tests</p>
                <p className="amount">345</p>
                <p className="description">Something else can maybe go here</p>
                <div className="summary">
                    <div className="item">
                        <div className="item-title">Pass</div>
                        <div className="item-result positive">
                            <KeyboardArrowUpIcon fontSize='small'/>
                            <div className="result-amount">456</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Bugs</div>
                        <div className="item-result negative">
                            <KeyboardArrowDownIcon fontSize='small'/>
                            <div className="result-amount">32</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Failed</div>
                        <div className="item-result positive">
                            <KeyboardArrowUpIcon fontSize='small'/>
                            <div className="result-amount">12</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Ignored</div>
                        <div className="item-result negative">
                            <KeyboardArrowDownIcon fontSize='small'/>
                            <div className="result-amount">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;