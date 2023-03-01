import Page from '../components/Page';
import ProfileImage from '../assets/images/profile.jpg';

const AboutPage: React.FC = () => {
  return (
    <Page name='About'>
      <div className='col d-flex justify-content-center mt-5'>
        <div className='row'>
          <img
            src={ProfileImage}
            height={350}
            alt='Profile'
            className='profile-image'
          />
        </div>
      </div>
      <div className='col d-flex justify-content-center mt-5'>
        <div className='row'>
          <h1>Jose Anibal Ventura</h1>
        </div>
      </div>
      <div className='col d-flex justify-content-center'>
        <div className='row'>
          <h4>Email: 20210212@itla.edu.do</h4>
        </div>
      </div>
      <div className='col d-flex justify-content-center'>
        <div className='row'>
          <h4>Phone: 809-972-4459</h4>
        </div>
      </div>
    </Page>
  );
};

export default AboutPage;
