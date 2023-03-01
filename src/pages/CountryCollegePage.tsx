import { useState } from 'react';
import Page from '../components/Page';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

const CountryCollegePage: React.FC = () => {
  const [country, setCountry] = useState('');
  const [result, setResult] = useState([]);

  const getUniversities = async (country: string) => {
    await fetch(`http://universities.hipolabs.com/search?country=${country}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUniversities(country);
  };

  return (
    <Page name='Country Colleges'>
      <p className='mt-1 mx-2'>
        Enter the name of a country (English) and get the list of universities.
      </p>

      <form className='mx-5 mt-4' onSubmit={onFormSubmit}>
        <div className='form-group'>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            className='form-control'
            id='country'
            placeholder='Enter a country (english)'
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
        <br />
        <button type='submit' className='btn btn-primary'>
          Get Universities
        </button>
      </form>

      {result && (
        <div className='mx-4 mt-4'>
          {result.map((item: any, index) => (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardSubtitle>{item.domains[0]}</IonCardSubtitle>
                <IonCardTitle>{item.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{item.web_pages[0]}</IonCardContent>
            </IonCard>
          ))}
        </div>
      )}
    </Page>
  );
};

export default CountryCollegePage;
