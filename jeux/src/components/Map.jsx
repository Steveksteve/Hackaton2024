import React from 'react';
import { useNavigate } from 'react-router-dom';
import Africa from '../svgs/Africa.svg';
import Europe from '../svgs/Europe.svg';
import Australia from '../svgs/Oceanie.svg';
import Asia from '../svgs/Asia.svg';
import Namerica from '../svgs/N-america.svg';
import SouthAmerica from '../svgs/S-america.svg';


import '../Map.css';

const Map = () => {
  const navigate = useNavigate();

  const handleContinentClick = (continent) => {
    navigate(`/${continent}`);
  };

  return (
    <div className="map-container">
          <h2>D'où viendra votre prochain jeu ?</h2>
      <img
        src={Africa}
        alt="Africa"
        className="continent africa"
        onMouseEnter={(e) => e.target.classList.add('hover')}
        onMouseLeave={(e) => e.target.classList.remove('hover')}
        onClick={() => handleContinentClick('africa')}
      />
      <img
        src={Europe}
        alt="Europe"
        className="continent europe"
        onMouseEnter={(e) => e.target.classList.add('hover')}
        onMouseLeave={(e) => e.target.classList.remove('hover')}
        onClick={() => handleContinentClick('europe')}
      />
        <img
        src={Asia}
        alt="Asia"
        className="continent asia"
        onMouseEnter={(e) => e.target.classList.add('hover')}
        onMouseLeave={(e) => e.target.classList.remove('hover')}
        onClick={() => handleContinentClick('asia')}
      />
        <img
        src={Australia}
        alt="Australia"
        className="continent australia"
        onMouseEnter={(e) => e.target.classList.add('hover')}
        onMouseLeave={(e) => e.target.classList.remove('hover')}
        onClick={() => handleContinentClick('australia')}
      />
        <img
        src={Namerica}
        alt="North America"
        className="continent north-america"
        onMouseEnter={(e) => e.target.classList.add('hover')}
        onMouseLeave={(e) => e.target.classList.remove('hover')}
        onClick={() => handleContinentClick('north-america')}
      />
      <img
        src={SouthAmerica}
        alt="South America"
        className="continent south-america"
        onMouseEnter={(e) => e.target.classList.add('hover')}
        onMouseLeave={(e) => e.target.classList.remove('hover')}
        onClick={() => handleContinentClick('south-america')}
      />
        <img
        src={Australia}
        alt="Australia"
        className="continent south-america"
        onMouseEnter={(e) => e.target.classList.add('hover')}
        onMouseLeave={(e) => e.target.classList.remove('hover')}
        onClick={() => handleContinentClick('south-america')}
      />
      <div className='space' />
    </div>
  );
};

export default Map;
