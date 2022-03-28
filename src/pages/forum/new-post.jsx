import React, { useState, useEffect, useRef } from "react";
import Navigation from "@components/navigation/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Notli from "@components/user/notloggedin";
import useIdChara from "@hooks/fnctn/useIdChara";
import useIdPokemonTeam from "@hooks/fnctn/useIdPokemonTeam";
import useIdPokemonTeam2 from "@hooks/fnctn/useIdPokemonTeam2";
 
const Newpost = () => {
    const place = "Forum";
    let { replyto } = useParams();
    let userName = sessionStorage.getItem('username');
    let userToken = sessionStorage.getItem('token');

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [submitB, setSubmitB] = useState(true);
    const [charalist, setCharalist] = useState([]);
    const [currentTeam, setCurrentTeam] = useState([]);
    const [allTeams, setAllTeams] = useState([]);

    const [selectedOption, setSelectedOption] = useState(0);
    const [selectedOptionPoke, setSelectedOptionPoke] = useState(0);

    const [topicTitle, setTopicTitle] = useState('');
    const [last2Post, setLast2Post] = useState([]);

  const form= useRef(null);
  const url = process.env.API_URL;
  let navigate = useNavigate();


  const characterChanges=(val)=>{ 
    setSelectedOption(val);
    setSelectedOptionPoke(0);
    let separateTeams2=useIdPokemonTeam2(allTeams[val]);
    setCurrentTeam(separateTeams2);
    //console.log(separateTeams2);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
   setSubmitB(false);
    const formData=new FormData(form.current);
    if(formData.get('content')) {
        
    const data_thread={   
      username: userName,   
      token:userToken,
      post_character_id:formData.get('character'),
      post_team_id:formData.get('team'),
      thread_post:formData.get('content'),
      topic_id:replyto
      
    }
    const result = await axios
      .post(`${url}forums/newPost.php`, {
       data_thread:data_thread
      })
      .then((result) => {
     // console.log(result.data);
      //setSubmitB(true);
       navigate("/threads/"+replyto+"/last");
      });
      
}else {alert("Form must be filled.");
setSubmitB(true);}
  }


  const charainfo=async()=>{
    await axios
    .post(`${url}forums/getCharaTeamReply.php`, {
     username: userName,
    // username: 'Guest',
    token:userToken,
  //token:'I2yVT27_mOKxJAI-ShDcdWsKa'
    })
    .then((result) => {
      if(result.data){
      let separateCharacterTeams=useIdPokemonTeam(result.data);
      let separateTeams2=useIdPokemonTeam2(separateCharacterTeams[0]);
      
      setAllTeams(separateCharacterTeams);
      setCurrentTeam(separateTeams2); //setting array of teams
      setCharalist(useIdChara(result.data));//setting array of characters

      }
      setLoading(true);
     
      
    }).catch(err => console.log(err));;
  }
  const res2=async () => {await axios
  .post(`${url}forums/getLastPosts.php`, {
    id:replyto
  })
  .then((result) => {
    if(result.data){
   
    setTopicTitle('Post in '+result.data[0]['topic_title']);
    setLast2Post(result.data);
    setLoading2(true);
    }else {
      setTopicTitle("Couldn't load last two posts.");
      setLoading2(true);

    }
  }).catch(err => console.log(err));};

  useEffect(async () => {
    charainfo();
    res2();
  }, []); //Check if user has characters and teams

  return (
    <>
    {userName ?
    (loading ?(
    <>
      <Navigation place={place} />

      <main className="grid grid-cols-12">
        <div className="parentContainerBase col-span-12 flex flex-col gap-1">
          <h1 className="title">
            {loading2?
            topicTitle
          :'Loading last 2 posts...'}
           </h1>
          <div className="flex gap-1 sm:flex-row justify-center max-w-100 flex-col px-2 sm:px-20">
          <div className="flex justify-center p-4 basis-full sm:basis-1/2">
          <form action="/" className="flex flex-col max-w-100 w-full" ref={form}>
          <div>
            <label htmlFor="character">Character Host:</label>
            {charalist.length?
              <select name="character" onChange={e => characterChanges(e.target.value)}
              value={selectedOption}>               
               { charalist.map((e,i)=>
                <option value={i} key={e[0]}>{e[1]}</option>
                )}
            </select> 
            :
            <p>
            You have no characters created! Go to this link to create a character.
            </p>
            }
            
            </div>
            <div id="showTeams">
            {currentTeam.length?
            <>
            <label htmlFor="team">Team:</label>
            {currentTeam[0][0].pokemon?
            <>
               <select name="team">
            {currentTeam.map((r,i)=>
            <option value={i} key={i}>
            {r.map(e=>
                e.pokemon+' ')
              }
            </option>
            )}
               </select>
               <label htmlFor="text" className="block">Content:</label>
            <textarea name="content" className="w-full" placeholder="Your post content" required></textarea>
            
            <div className="flex justify-end px-1 py-2">
              {submitB ? 
              <button type="submit" className="btn bg-backgroundGradient btn-small" 
              onClick={handleSubmit}>Submit</button>
                :
                null}
                </div>
               </>
          :
          <p>
            You have no teams saved! Go to this link to create your team.
          </p>
          }
          
         
          </>
          :null
          }
          
          </div>
          
            
          </form>
          </div>
          
            <div className="lastthreepost">
              {loading2&&last2Post.length?
              <>
               <h2>Last Two Posts</h2>
               {last2Post.map(e=>
               <div className="singlepreviouspost"
               key={e.name.substring(0,4)+e.thread_post.substring(0,4)+e.lastpostTime.substring(0,4)}>
               { e.thread_post}
               <div className="text-xs text-right">
                 {e.username+' as '+e.name}
                 <br/>
                 {e.lastpostTime}
               </div>
               </div>
               
               )

               }
                </>
                :null
              }
               
            </div>


          </div>
        </div>
      </main>
    
      </>
        ): 
        <>
        <Navigation place={place}/>
        <div className="loading-container"><h1>Currently Loading...</h1></div>
        </>
        ):<Notli/>}
        
        </>
  );
};

export default Newpost;
