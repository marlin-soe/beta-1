function SignUpPageFormVerification () {
    return (
        <>
            
            <div className='SignUpPageFormMainFormVerificationTitleWrapper'>
                <p>Verification</p>
                <p>A verification code has been send to your email address,</p>
                <p>exampleemail@gmail.com</p>

            </div>
            
            <div className="SignUpPageFormMainFormVerificationInputWrapper">
                <form action="">
                    <div className="SignUpPageFormMainFormVerificationInputCodeWrapper">
                        {[...Array(5)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`veriCode${index + 1}`}
                            maxLength={1}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            }}
                            className="verification-input"
                        />
                        ))}
                    </div>
                </form>
                <div className="SignUpPageFormMainFormVerificationMessageWrapper">
                    <p>Resend code in (41s)</p>
                    <p>Can’t receive SMS? Try another method</p>

                </div>
            </div>
        </>
    );
}

export default SignUpPageFormVerification