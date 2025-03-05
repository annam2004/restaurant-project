import { Link, useLocation } from 'react-router-dom';
import restaurant_img from '../images/restaurant.jpg';
//import backgroundImage from '../images/banner2.jpg';
import backgroundImage from '../images/green-lemons.jpg';

function Hero() {

    const location = useLocation();
    const isReservationsPage = location.pathname === '/reservations';
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'rgb(40 49 42)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundBlendMode: 'overlay',
        height: '70vh',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (

        <section className="container-fluid" style={heroStyle}>
            <div className='container'>
                <div className='row hero-content'>
                    <div className="col-sm-12 col-md-7 pt-4">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Family-owned Mediterranean restaurant that focuses on traditional recipes served with a modern twist.</p>
                        <div className="pt-4 hero-btn">
                            <Link type="button" className={`btn btn-primary btn-lg btn-reserve ${location.pathname === '/reservations' ? 'active' : ''}`} to="/reservations">Reserve a table</Link>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 pt-4 hero-restaurant-img hidden sm:block ">
                        <img src={restaurant_img} alt="Restaurant Interior" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;