import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="high" />
                    <Widget type="medium" />
                    <Widget type="low" />
                    <Widget type="smoke" />
                </div>
            </div>
        </div>
    );
};

export default Home;