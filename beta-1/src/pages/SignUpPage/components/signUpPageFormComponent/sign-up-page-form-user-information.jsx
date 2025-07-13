import React, { useRef, useState } from 'react';
import monkeyIcon from '../../../../assets/monkey.webp';


function SignUpPageFormPersonalInformation () {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <p className='SignUpPageFormMainFormTitles'> Personal Information</p>

            <div className='SignUpPageFormMainFormTwoInputWrapper'>
              <div className='SignUpPageFormMainFormTwoInputIndividualWrapper'>
                <p>Date of birth</p>
                <input type="date" name="birthDate" className='birthDate' placeholder='DD/MM/YYYY'/>
              </div>
              <div className='SignUpPageFormMainFormTwoInputIndividualWrapper'>
                <p>Gender</p>
                    <select name="gender" id="gender">
                        <option value="" disabled selected>select</option>
                        <option value="male">Male</option>
                        <option value="femal">Female</option>
                        <option value="none">Prefer not to say</option>
                    </select>
              </div>
            </div>

            <div className='SignUpPageFormMainFormOneInputWrapper'>
                <p>Current IGCSE exam board</p>

                <select name="examBoard" id="examBoard" >
                    <option value="" disabled selected>select</option>
                    <option value="cie">CIE</option>
                    <option value="edexcel">Edexcel</option>
                    <option value="otherExamboard">other</option>
                </select>
            </div>

            <div className="SignUpPageFormMainFormImageUploadWrapper">
                <p>Profile Picture</p>
                <div className='SignUpPageFormMainFormImageUploadImageContanerWrapper'>
                    <img 
                        src={selectedImage || monkeyIcon} 
                        alt="Profile" 
                    />

                </div>
                

                <div className="SignUpPageFormMainFormImageUploadButtonWrapper">
                    <button onClick={handleUploadClick} type="button">Upload</button>
                    <button type="button">Generate</button>
                </div>

                <input 
                    type="file" 
                    accept="image/*" 
                    style={{ display: 'none' }} 
                    ref={fileInputRef} 
                    onChange={handleFileChange}
                />
            </div>
        </>
    );
}

export default SignUpPageFormPersonalInformation