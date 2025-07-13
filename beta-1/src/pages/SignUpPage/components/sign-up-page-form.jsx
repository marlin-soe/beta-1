import { useState } from 'react';
import './sign-up-page-form.css';
import SignUpPageFormAccountDetail from './signUpPageFormComponent/sign-up-page-form-account-detail';
import SignUpPageFormPersonalInformation from './signUpPageFormComponent/sign-up-page-form-user-information';
import SignUpPageFormVerification from './signUpPageFormComponent/sign-up-page-form-verification';

function SignUpPageForm() {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const roles = ['Student', 'Teacher'];

  return (
    <div className='SignUpPageFormWrapper'>
      <div className='SignUpPageFormTitleWrapper'> 
        <p>Get Start With WebsiteName</p>
        <p>Join the smartest IGCSE squad — study, share, and succeed together</p>
      </div>

      <div className='SignUpPageFormMainFormWrapper'>
        <form action="">
        {step === 1 && (
          <div className='SignUpPageFormMainFormAccountDetailWrapper'>
            <SignUpPageFormAccountDetail/>
            <button onClick={() => setStep(2)} className='UniversalProceedButton'>Proceed</button>

          </div>
        )}

        {step === 2 && (
          <div className='SignUpPageFormMainFormPersonalInformationWrapper'>
            <SignUpPageFormPersonalInformation/>
            <button onClick={() => setStep(3)} className='UniversalProceedButton'>Proceed</button>
          </div>
        )}

        {step === 3 && (
          <div className='SignUpPageFormMainFormVerificationWrapper'>
            <SignUpPageFormVerification/>
            <button className='UniversalProceedButton'>Sign Up</button>
            <div className='SignUpPageFormMainFormVerificationContditionPWrapper'>
              <p>By signing up, you are indicating that you have read and agree to our  </p>
              <p>terms of use & privacy policy</p>
            </div>
          </div>
        )}
        </form>
      </div>
      
    </div>
  );
}

export default SignUpPageForm
