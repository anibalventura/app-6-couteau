import { useState } from 'react';
import Page from '../components/Page';
import OldPerson from '../assets/images/old.png';
import YoungPerson from '../assets/images/young.png';
import MiddleAgedPerson from '../assets/images/middle.png';

const AgeCalcPage: React.FC = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState({ age: 0, message: '', image: '' });

  const predictName = async (name: string) => {
    await fetch(`https://api.agify.io/?name=${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const age = data.age;
        if (age <= 18) {
          setResult({
            age: age,
            message: 'You are a young person',
            image: YoungPerson,
          });
        } else if (age > 18 && age <= 60) {
          setResult({
            age: age,
            message: 'You are a middle-aged person',
            image: MiddleAgedPerson,
          });
        } else {
          setResult({
            age: age,
            message: 'You are an old person',
            image: OldPerson,
          });
        }
      });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    predictName(name);
  };

  return (
    <Page name='Age Calculator'>
      <p className='mt-1 mx-2'>
        Enter a person's name and determine their age.
      </p>

      <form className='mx-5 mt-4' onSubmit={onFormSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='name'
            className='form-control'
            id='name'
            placeholder='Enter a name'
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <br />
        <button type='submit' className='btn btn-primary'>
          Determine Age
        </button>
      </form>

      {result.message && (
        <div className='mx-5 mt-4'>
          <h4>Result</h4>
          <p className='fs-3 text-center pt-2'>{`${result.age}`}</p>
          <p className='fs-5 text-center'>{result.message}</p>
          <img
            src={result.image}
            alt='Person'
            className='img-fluid mx-auto d-block'
          />
        </div>
      )}
    </Page>
  );
};

export default AgeCalcPage;
