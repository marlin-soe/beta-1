import SignUpPageAdditionalInfoIndividual from "./sign-up-page-additional-info-individual";
import './sign-up-page-additional-info.css'

const titles = ['🧠 Smarter Study Materials At Your Fingertips', '🌎 A Community That Learns Together', '🎥 Engaging Lessons From Expert Teachers']
const statements = [`Concise, exam-ready notes for every subject
                    Organized past papers with mark schemes & reports
                    Smart filters to find what you need fast
                    Always updated to match the latest IGCSE syllabus`,

                    `Subject forums and active discussion threads
                    Find study buddies from around the world
                    Ask, answer, and support one another
                    Stay motivated with challenges and leaderboards`, 

                    `Dynamic video lessons taught by real IGCSE experts
                    Live sessions with questions, polls, and explanations
                    Topic quizzes to test your knowledge instantly
                    Flexible learning — your time, your pace`]


function SignUpPAgeAdditionalInfo () {
    return (
        <div className='SignUpPageAdditionalInfoWrapper'>   
            <div className='SignUpPageTitleWrapper'>
                <p>Increase your productivity with</p>
                <p>WebsiteName</p>
            </div>
            <SignUpPageAdditionalInfoIndividual title={titles[0]} statement={statements[0]}/>
            <SignUpPageAdditionalInfoIndividual title={titles[1]} statement={statements[1]}/>
            <SignUpPageAdditionalInfoIndividual title={titles[2]} statement={statements[2]}/>
            <div className="SignUpPageAdditionalCopyrightWrapper">
                <p>
                    &copy; {new Date().getFullYear()} IGCSE Website &nbsp; &nbsp; 
                    <a href="/privacy">Privacy</a> &nbsp;·&nbsp; 
                    <a href="/terms">Terms</a>
                </p>
            </div>
        </div>
    );
}

export default SignUpPAgeAdditionalInfo