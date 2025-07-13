import '../../App.css'
import './Subjects.css'
import TrueRightSideBar from '../../right-side-bar/true-right-side-bar'
import TrueSideBar from '../../side-bar/true-side-bar'
import SubjectButton from '../../universal-access/subject-button'



function Homepage() {

  return (
    <>
      <div className='mainWrapper'>
        <TrueSideBar/>
        <div className="mainContent">

          <div className='mainSubjectsWrapper'>
            <p>Edexcel IGCSE Revision Notes</p>
            <div className='SubjectsTwpIndividualWrapper'>
              <SubjectButton subjectName="Physics" notePublisher="@marlin" freeUse={true} />
              <SubjectButton subjectName="Chemistry" notePublisher="@marlin" freeUse={false} />

            </div>
            <div className='SubjectsTwpIndividualWrapper'>
              <SubjectButton subjectName="Biology" notePublisher="@marlin" freeUse={true} />
              <SubjectButton subjectName="Further Pure Math" notePublisher="@marlin" freeUse={false} />
            </div>
            <div className='SubjectsTwpIndividualWrapper'>
              <SubjectButton subjectName="Math B" notePublisher="@marlin" freeUse={true} />
              <SubjectButton subjectName="Computer Science" notePublisher="@marlin" freeUse={false} />
            </div>
          </div>

          
          

        </div>
        <TrueRightSideBar/>
        
      </div>
      <div className="unsupportedMessage">
        <p>This website is currently optimized for desktop viewing.</p>
        <p>For the best experience, please access it using a laptop or desktop computer. Mobile and tablet support will be available soon.</p>
      </div>
    </>
  )
}

export default Homepage
