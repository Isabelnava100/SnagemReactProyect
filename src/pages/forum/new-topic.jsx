import React, { useState, useRef,useContext,useEffect } from "react";
import Navigation from "@components/navigation/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppContext from "@context/AppContext";
import useIdChara from "@hooks/fnctn/useIdChara";
import useIdPokemonTeam from "@hooks/fnctn/useIdPokemonTeam";
import useIdPokemonTeam2 from "@hooks/fnctn/useIdPokemonTeam2";
import Notli from "@components/user/notloggedin";

const place = "Forum";

//slr shortcut for this:
const Newtopic = () => {
  const [submitB, setSubmitB] = useState(true);
  const {state:{allRoles}}=useContext(AppContext);
  let counter=0;

  const form= useRef(null);
  const url = process.env.API_URL;
  let navigate = useNavigate();

  let userName = sessionStorage.getItem('username');
  let userToken = sessionStorage.getItem('token');
  let arr = [];
  let roles = allRoles[0];

  roles?
  roles
    .filter((e) => e.username === userName)
    .map((myrole) =>
      !arr.includes(myrole.roles_name)
        ? arr.push(myrole.roles_name.toLowerCase())
        : null
    )
    :null

  const [loading, setLoading] = useState(false);
  const [charalist, setCharalist] = useState([]);
  const [currentTeam, setCurrentTeam] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedOptionPoke, setSelectedOptionPoke] = useState(0);


  let links =   [
    { title: "Main", value: "1", roles: "user" },
    { title: "Side", value: "2", roles: "user" },
    { title: "Master Mission", value: "3", roles: "master admin" },
    { title: "Quests", value: "4", roles: "user admin" },
    { title: "Events", value: "7", roles: "admin" },
    { title: "Private", value: "8", roles: "user" },
   ]
  ;
  
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
    
    if(formData.get('content')&&formData.get('content')) {
    const data_topic={
      topic_title:formData.get('title'),
      forum:formData.get('location'),   
      topic_description:formData.get('description'),   
    }
    const data_thread={     
      post_character_id:formData.get('character'),
      post_team_id:formData.get('team'),
      thread_post:formData.get('content')
    }
    const data_forum = {      
      id:formData.get('location')
    }
    const result = await axios
      .post(`${url}forums/newTopic.php`, {
         username: userName,
         token:userToken,
       data_topic:data_topic,
       data_thread:data_thread,
       data_forum:data_forum
      })
      .then((result) => {
        
        const idtopic=result.data;
      //  console.log(idtopic); setSubmitB(true);
        navigate("/threads/"+idtopic);
      });
    }else {alert("Form must be filled.");
    setSubmitB(true);}
  }

  useEffect(async () => {
    const res1=await axios
      .post(`${url}forums/getCharaTeamReply.php`, {
       username: userName,
    //   username: 'Guest',
      token:userToken,
   // token:'I2yVT27_mOKxJAI-ShDcdWsKa'
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
        
      });
  }, []); //Check if user has characters and teams

  return (
    <>
    {userName ?
    (loading ?(
    <>
      <Navigation place={place} />

      <main className="grid grid-cols-12">
        <div className="parentContainerBase col-span-12 flex flex-col gap-1">
          <h1 className="title">Make a New Topic</h1>
          <div className="flex justify-center">
          <form action="/" className="flex flex-col max-w-100" ref={form}>
            <div>
            <label htmlFor="title">Topic Title:</label>
            <input type="text" name="title" placeholder="Subject Name" required/>
           
            <label htmlFor="location">Location:</label>
            <select name="location">
            {links.map((e,i) => (

          arr.some((v => e.roles.includes(v)))? (
                <option key={e.value+i} value={e.value}>
                {e.title}
               </option>
                ) : null
              
          ))}
        
              
          </select>
          </div>
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
            
            {currentTeam.length?
            <>
            <label htmlFor="team">Team:</label>
            {currentTeam[0][0].pokemon?
            <><div id="showTeams">
               <select name="team">
            {currentTeam.map((r,i)=>
            <option value={i} key={i}>
            {r.map(e=>
                e.pokemon+' ')
              }
            </option>
            )}
               </select></div>
               
               <label htmlFor="description">Short Description:</label>
            <input type="text" name="description" placeholder="Short Description" required/>
            <label htmlFor="text">First Post Content:</label>
            <textarea name="content" placeholder="First post content" required></textarea>
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
          
          </form>
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

export default Newtopic;
