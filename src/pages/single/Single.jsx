import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import DUMMY_DATA from '../../dummydata/data'

const Single = () => {

    const item = DUMMY_DATA[0];

    return (
        <div className="single">
            <Sidebar />
            <div className="single-container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className={`${item.testPriority} priority`}>{item.testPriority}</div>
                        <div className="title">
                            <h1 className="title-text">Test Details</h1>
                        </div>
                        <div className="details">
                            <h4 className="item-title">{item.testName}</h4>
                            <div className="detail-item">
                                <span className="item-key">TestLink Id:</span>
                                <span className="item-value">{item.testLinkId}</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">General Workflow:</span>
                                <span className="item-value">{item.generalWorkflow}</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Specific Workflow:</span>
                                <span className="item-value">{item.specificWorkflow}</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Test Package:</span>
                                <span className="item-value">{item.testPackage}</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Test Class:</span>
                                <span className="item-value">{item.testClass}</span>
                            </div>
                            {item.setToIgnore &&
                                <div className="detail-item">
                                    <span className="item-key">Set To ignore:</span>
                                    <span className="item-value">{item.setToIgnore ? "Yes" : "No"}</span>
                                </div>
                            }
                            {item.partialCoverageOnly &&
                                <div className="detail-item">
                                    <span className="item-key">Partial Coverage Only:</span>
                                    <span className="item-value">{item.partialCoverageOnly ? "Yes" : "No"}</span>
                                </div>
                            }
                            {item.bugTicket &&
                                <div className="detail-item">
                                    <span className="item-key">Open Ticket(s):</span>
                                    <span className="item-value">{item.bugTicket}</span>
                                </div>
                            }
                            {item.comments &&
                                <div className="detail-item">
                                    <span className="item-key">Comments:</span>
                                    <span className="item-value">{item.comments}</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="Individual chart, doesn't make too much sense" />
                    </div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
};

export default Single;