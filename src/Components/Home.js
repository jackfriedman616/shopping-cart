import '../styles/home.css';
import { Link } from "react-router-dom";
import { transformSync } from '@babel/core';

const Home = () => {
  return (
    <div className='home-container' style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + 'https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_stores_Cambridge_CambridgeSLIDER_laptop.jpg'})`, 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom'
    }}>
      <div className="d-flex align-item-center justify-content-center">
        <Link to="/shop">
          <button>
            Explore the range
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>


    </div>
  );
}

export default Home;