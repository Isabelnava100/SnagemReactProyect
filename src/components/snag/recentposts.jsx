import React, {useState, useEffect} from 'react'; //imr
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const Recentposts = (props) => {
  
 
    return (
        <div className='col-span-3 sm:col-span-2 recentpostsD'>
        <h3 className='font-quantico text-xl'>Your SNAG</h3>        

        <label htmlFor='LastPost' className='divSnagProfile'> 
        Your Topics</label>
<input type="checkbox" id="LastPost" className="profile"/>

<span id="lastpostbox">
{props.lasttopic ?
          <div className=''>
            <Link to={'/threads/'+props.lasttopic.topics_id}>
              <h4 className='underline italic'>{props.lasttopic.topic_title}</h4></Link>
             
              <span className="singlepreviouspostProfile"
               key={props.lasttopic.topics_id+2}>
               <span  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.lasttopic.thread_post)}}>
               </span>
               
               <span className="text-xs text-right">
                 {props.lasttopic.lasttopicTime}
               </span>
               </span>
             
          </div>
        : <p>You have not made any topics recently, get started today!</p>
        }
</span>

        <p className='text-xs italic mt-5'>Also your mentions go here...</p>
      
      </div>
    )
}

export default Recentposts;