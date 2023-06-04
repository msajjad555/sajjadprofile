import React from 'react'
import '../Services/Services.css'
const Specials = () => {
    const skills=[

       'MongoDB','ReactJs','Redux','JavaScript','Nodejs','ExpressJs',
       'HTML','CSS','Bootstrap','MUI','Template Engines','Joomla', 'Wordpress',
       'RESTful API', 'SEO (OnSite,OffSite)','GitHub','Putty','AWS'
        
    ]
    const darkMode={
        backgorund:'red'
    }
  return (
   <>
   <div className="conatiner">
    <div className="row d-flex">
        <div className="awesome" id='skills'>
    <span style={{ color: darkMode ? "purple" : "" }}>My Skills</span>
        </div>
      
{skills.map((item)=>(
 <>
 
 <div className="col-lg-2 m-1 p-0">
 <button className='btn btn-warning w-100 text-dark'>{item}</button>
 </div>
 
    </>

))}

    
   </div>
   </div>
   
   </>
  )
}

export default Specials