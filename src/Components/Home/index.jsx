import React, { useEffect, useState } from 'react';
import logo from '../../assets/Logo.png';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch("https://alkye-test-422384984803.us-central1.run.app/myapp/list/");
      const answer = await response.json();
      setData(answer);
    };
    fetchingData();
  }, []);

  const handleClick = (id) => {
    navigate(`/content/${id}`);
  };

  return (
    <div className='container'>
      <div className='container-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1>Alkye</h1>
        <div className='heading-text'>The easiest test you will ever do</div>
      </div>
      <div className='image-container'>
        {data.map((result) => (
          <div className='pics-container' key={result.id}>
            <div className='image-sub-container' onClick={() => handleClick(result.id)}>
              <img
                src={result?.image_url}
                alt={result?.title}
                className='images'
              />
              <div className='image-title'>{result.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
