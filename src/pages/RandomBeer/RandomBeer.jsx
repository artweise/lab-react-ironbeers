import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import './style.css';

const RandomBeer = () => {
  const { beerId } = useParams();
  const [randomBeer, setRandomBeer] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');

        // setTimeout(() => {
        // console.log(response.data);
        setRandomBeer(response.data);
        // }, 2000);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [beerId]);
  return (
    <>
      <Header />
      <div>
        {!randomBeer && <h1 className='loading'>Loading ...</h1>}

        <div className='image-ctn'>
          <img src={randomBeer.image_url} alt='' />
        </div>
        <div className='title-ctn'>
          <h1 className='title'>{randomBeer.name}</h1>
          <h1 className='level'>{randomBeer.attenuation_level}</h1>
        </div>
        <div className='tagline-ctn'>
          <h4 className='tagline'>{randomBeer.tagline}</h4>
          <h5 className='first-brewed'>
            <b>{randomBeer.first_brewed}</b>
          </h5>
        </div>
        <div className='description'>
          <p>{randomBeer.description}</p>
          <h5>{randomBeer.contributed_by}</h5>
        </div>
      </div>
    </>
  );
};

export default RandomBeer;
