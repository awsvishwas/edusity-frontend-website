import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program1icon from '../../assets/program-icon-1.png'
import program2icon from '../../assets/program-icon-2.png'
import program3icon from '../../assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={program1icon} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={program2icon} alt="" />
                <p>Masters Degree</p>
            </div>
            </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={program3icon} alt="" />
                <p>Post Graduation Degree</p>
            </div>
            </div>
      
    </div>
  )
}

export default Programs
