import "./home.css"
import {Link} from "react-router-dom";

const Home = () =>{

    return (
        <div className="home" >
            <h1>Usurious</h1>
            <p>Welcome to my usurious store, where prices are not only high, but they also keep rising and will force you into tremendous debt!</p>
            <div className="home-container">
                <img className="home-img" src="https://thebigsmoke.com.au/wp-content/uploads/2lb8cn.jpg" alt="GiveMeMoney" />
                <div className="middle">
                    <Link className="btn btn-info btn-lg text" to="/catalog">
                        Go to the catalog!
                    </Link>
                </div>
                
            </div>
        </div>
    );

};


export default Home;