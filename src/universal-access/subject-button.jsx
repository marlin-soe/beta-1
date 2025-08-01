import "./styling/subject-button.css"
import Logos from '../assets/flask-subject.svg'

function SubjectButton ({subjectName, notePublisher, freeUse}) {
    const subjectClassName = subjectName
        .toLowerCase()
        .replace(/\s+/g, '-')        // replace spaces with hyphens
        .replace(/[^a-z0-9\-]/g, ''); // remove any other special characters

    return (
        <>
            <div className={`SubjectButtonMainWrapper  ${subjectClassName}`}>
                <div className="SubjectButtonTopInfoWrapper">
                    <p>2025</p>
                    <p>{freeUse ? "free" : "premium"}</p>
                </div>
                <div className="SubjectButtonIconWrapper">
                    <img src={Logos} alt="" />
                </div>
                <hr />
                <div className="SubjectButtonBottonInfoWrapper">
                    <p>{subjectName}</p>
                    <p>Note Publisher: {notePublisher}</p>


                </div>

            </div>
        </>
    );
}

export default SubjectButton