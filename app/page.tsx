import MyProfile from './myProfile'
// import MyProjects from './projects'
import MyExperience from './myExperience'
import MyEducation from './myEducation'
import MySkills from './mySkills';
import dynamic from 'next/dynamic';
export default function Home() {

  

  const MyProjectsClientComponent = dynamic(() => import('./projects'), {
    ssr: false // This ensures the component is only rendered on the client-side
  });
  
  return (
    <div className='m-all-10 d-flex f-d-column al-stretch jus-content-center c-white'>
          <div className='m-all-10 d-flex f-d-r al-center j-c-space-around first-container'>
              <div className='m-all-10 d-flex f-d-column al-center j-c-space-around p-all-10'>
                <MyProfile/>
                <MyExperience/>
                <MyEducation/>
              </div>
              <MyProjectsClientComponent/>
          </div>
          <div className='m-all-10 d-flex f-d-row al-fs j-c-space-around second-container'>
            <MySkills/>
          </div>
    </div>
  );
}
