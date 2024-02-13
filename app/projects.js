'use client'
import { useState } from "react";
export default function MyProjects() {
    const [showProjectDesc, setShowProjectDesc] = useState(false);
    let onHoverProjects = (e)=>{
        console.log('viiviviivivivi');
        // e.target.classList.add('expand-div');
        // setShowProjectDesc(!showProjectDesc);
        // setShowProjectDesc(true);

      }
      let onRemoveHoverProjects = (e)=>{
        console.log('viiviviivivivi');
        // e.target.classList.remove('expand-div');
        // setShowProjectDesc(!showProjectDesc);
        // setShowProjectDesc(false);

      }
    
    return (
     <div className="d-flex f-d-r al-center jus-content-center my-projects-div"
      onMouseEnter={(e) => onHoverProjects(e)}
      onMouseLeave={(e) => onRemoveHoverProjects(e)}
      >
        <div>
        </div>
        <div className="m-all-10">
            <div>
        <h2 className="fs-15">My Main Projects</h2>
                
            </div>
        <ul className="project-list m-l-20">
            <li>
                <p className="f-w-8">VIEW SIMILAR WIDGET IN PRODUCT PAGE OF ZIVAME</p>
                <p className={`m-all-20`}>
                    <ul className="project-list m-l-20">
                        <li>
                        Developed a view similar widget for Zivame's product page, Utilized React JS for the client-side implementation and integrated Node JS APIs for data retrieval.
                        Thereby improving engagement and potentially increasing sales.
                        </li>
                    </ul>
                </p>
            </li>
            <li>
                <p className="f-w-8">GrowthBook Integration for A/B Testing in React JS and Node JS</p>
                <ul className="project-list m-l-20">
                        <li>
                            Implemented GrowthBook, a robust A/B testing and experimentation platform, into the website infrastructure(Rect JS and Node JS).
                            Analyzed test results meticulously through Gtag and Moengage.
                            Successfully conducted A/B testing and experimentation campaigns, contributing to data-driven improvements in website performance and user experience.
                        </li>
                    </ul>
            </li>
            <li>
                <p className="f-w-8">Survey page of zivame in React JS</p>
                <ul className="project-list m-l-20">
                        <li>
                        Implemented survey page of zivame in React JS on client and NODE on server API's with two trigger points
                        email and order detail page respectively. 
                        By this widget user can submit their feedback related to their recent delivered order.
                        </li>
                    </ul>
            </li>
            <li>
                <p className="f-w-8">Bank downtime widget with Firebase in jQuery and Node</p>
                <ul className="project-list m-l-20">
                        <li>
                        Implemented bank downtime widget to notify users on about the downtime of the particular bank or upi after 
                        selecting payment methods like upi, crads, bank etc., on check out page of zivame. Results in reducing 
                        the order failure by  notifying the user about bank downtime prior.

                        </li>
                    </ul>
            </li>
           
        </ul>
        

        </div>
        
     </div>
    
    );
  }
  