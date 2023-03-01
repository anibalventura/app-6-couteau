import { useState } from 'react';
import Page from '../components/Page';

const GenderNamePage: React.FC = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const predictName = async (name: string) => {
    await fetch(`https://api.genderize.io/?name=${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.gender.toUpperCase());
      });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    predictName(name);
  };

  return (
    <Page name='Gender Name'>
      <p className='mt-1 mx-2'>Write a name and predict its gender.</p>

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
          Predict Gender
        </button>
      </form>

      {result && (
        <div className='mx-5 mt-4'>
          <h4>Result</h4>
          <p
            style={{
              backgroundColor: result === 'MALE' ? '#b3e6ff' : '#ffb3b3',
            }}
            className='fs-3 text-center p-5'
          >{`${result}`}</p>
        </div>
      )}
    </Page>
  );
};

export default GenderNamePage;
