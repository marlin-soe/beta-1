import '../App.css'
import TrueRightSideBar from '../right-side-bar/true-right-side-bar'
import TrueSideBar from '../side-bar/true-side-bar'
import PostForm from '../universal-access/post-form'
import SubjectButton from '../universal-access/subject-button'
import UniversalSearchButton from '../universal-access/universal-search-button'

function Homepage() {

  return (
    <>
      <div className='mainWrapper'>
        <TrueSideBar/>
        <div className="mainContent">
          <UniversalSearchButton/>
          <PostForm/>
          

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
