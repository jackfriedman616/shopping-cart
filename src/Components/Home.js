import '../styles/home.css';
import { Link } from "react-router-dom";
import { transformSync } from '@babel/core';

const Home = () => {
  return (
    <div className='home-container' style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + 'https://www.shutterstock.com/image-vector/chattogram-bangladesh-april-24-2023-260nw-2292992631.jpg'})`, //replace placeholder image file
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