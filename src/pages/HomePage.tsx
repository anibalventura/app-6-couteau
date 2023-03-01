import Page from '../components/Page';
import Toolbox from '../assets/images/toolbox.png';

const HomePage: React.FC = () => {
  return (
    <Page name='Home'>
      <div className='col d-flex justify-content-center mt-5'>
        <div className='row'>
          <img
            src={Toolbox}
            height={350}
            alt='Profile'
            className='profile-image'
          />
        </div>
      </div>
      <div className='col d-flex justify-content-center mt-5'>
        <div className='row'>
          <h1>Couteau</h1>
        </div>
      </div>
      <div className='col d-flex justify-content-center'>
        <div className='row'>
          <h5>Homework # 6 - Ionic App</h5>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
