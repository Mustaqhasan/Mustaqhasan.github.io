import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip'


const GitCalender = () => {
  return (
    <div  className='calender'>
      <h3>Github Calender</h3>
      <GitHubCalendar username="Mustaqhasan" style={{width:"60%",margin:"auto"}}
        blockSize={20} fontSize={20}
      >
       <ReactTooltip delayShow={20} html anchorId="my-element" />
      </GitHubCalendar>
    </div>
  )
}

export default GitCalender
