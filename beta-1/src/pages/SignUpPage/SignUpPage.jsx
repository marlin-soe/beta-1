import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'
import SignUpPAgeAdditionalInfo from './components/sign-up-page-additional-info';
import SignUpPageForm from './components/sign-up-page-form';

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Do your signup logic here
    navigate('/home'); // Go to homepage after signup
  };

  return (
    <>
      <div className='SignUpPageWrapper'>

        <SignUpPAgeAdditionalInfo/>
        <SignUpPageForm/>


      </div>

      <div className="unsupportedMessage">
          <p>This website is currently optimized for desktop viewing.</p>
          <p>For the best experience, please access it using a laptop or desktop computer. Mobile and tablet support will be available soon.</p>
      </div>
    </>


  );
}

export default SignUpPage;

{/* <div style={{ padding: '50px' }}>
  <h2>Sign Up</h2>
  <button onClick={handleSignUp}>Sign Up and Go to Home</button>
</div> */}