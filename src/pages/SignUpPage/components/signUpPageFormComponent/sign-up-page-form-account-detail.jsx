function SignUpPageFormAccountDetail () {
    return (
        <>
            <p className='SignUpPageFormMainFormTitles'>Account Details</p>

            <div className='SignUpPageFormMainFormTwoInputWrapper'>
              <div className='SignUpPageFormMainFormTwoInputIndividualWrapper'>
                <p>Display Name</p>
                <input type="text" placeholder='Example' name="displayName"/>
              </div>
              <div className='SignUpPageFormMainFormTwoInputIndividualWrapper'>
                <p>Username</p>
                <input type="text" placeholder='@example' name="username"/>
              </div>
            </div>

            <div className='SignUpPageFormMainFormOneInputWrapper'>
                <p>Your Role</p>

                <select name="role" >
                    <option value="" disabled selected>select</option>
                    <option value="studnet">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>

            <div className='SignUpPageFormMainFormOneInputWrapper'>
              <p>Email address</p>
              <input type="email" name="email" placeholder='example@gmail.com'/>
            </div>

            <div className='SignUpPageFormMainFormTwoInputWrapper'>
              <div className='SignUpPageFormMainFormTwoInputIndividualWrapper'>
                <p>Password</p>
                <input type="password" name="password" placeholder='********'/>
              </div>
              <div className='SignUpPageFormMainFormTwoInputIndividualWrapper'>
                <p>Confirm Password</p>
                <input type="password" name='confirmPassword' placeholder='********' />
              </div>
            </div>
            
        </>
    );
}

export default SignUpPageFormAccountDetail