import { useEffect, useState } from 'react';
import Page from '../components/Page';

const WeatherPage: React.FC = () => {
  const [result, setResult]: any = useState({});

  const getWeather = async () => {
    await fetch(
      `http://api.weatherapi.com/v1/current.json?key=6c4da4e947fb4dd290511134230103&q=Dominican%20Republic&aqi=no`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <Page name='Weather DR'>
      <p className='mt-1 mx-2'>Actual weather on Dominican Republic</p>

      <div className='mx-5 mt-4 text-center'>
        <img
          width='100'
          src={result.current.condition.icon}
          alt='weather icon'
        />
        <p className='fs-3'>{`${result.current.condition.text}`}</p>
        <p className='fs-3'>{`${result.current.feelslike_c}`} °C</p>
      </div>
    </Page>
  );
};

export default WeatherPage;
