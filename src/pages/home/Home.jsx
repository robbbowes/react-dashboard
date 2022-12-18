import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss'

const Home = () => {

    // temporary 
    const featuredChart = "High";

    return (
        <div className='home'>
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className="widgets">
                    <Widget type="all" />
                    <Widget type="high" />
                    <Widget type="medium" />
                    <Widget type="low" />
                    <Widget type="smoke" />
                </div>
                <div className="charts">
                    <Featured featured={featuredChart} />
                    <Chart />
                </div>
                {/* <div className="list-container">
                    <div className="list-title">Table title</div>
                    <DataTable />
                </div> */}
            </div>
        </div>
    );
};

export default Home;