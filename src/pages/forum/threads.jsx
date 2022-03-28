import React, { useState, useEffect,useContext } from "react";
import ReactPaginate from "react-paginate";
import moment from "moment";
import axios from "axios";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@components/navigation/header";
import AppContext from "@context/AppContext";
import useUniqueBy from "@hooks/fnctn/useUniqueBy";
import usePokemonSprite from "@hooks/fnctn/usePokemonSprite";

const Topicthread = () => {
  const place = "Forum";
  let { id, page } = useParams();
  let navigate = useNavigate();

  const url = process.env.API_URL;
 const {state:{allRoles}}=useContext(AppContext);
 const [allposts, setAllposts] = useState([]);
 const [allteams, setTeams] = useState([]);
  const [currentposts, setCurrentPosts] = useState([]);
  const [paginationView, setPaginationView] = useState(false);
  const [basicReply, setBasicReply] = useState(null);
  const [nameTopic, setNameTopic] = useState("Loading...");
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [forcePage, setForcePage] = useState(-1);

  const itemsPerPage = 2;


  const getTeam=async()=>{
    !allteams.length?
        await axios
        .post(`${url}forums/perThread.php`, {
          topicID: id,
        })
        .then((getTeam) => {  
            setTeams(getTeam.data);
        }).catch(err => console.log(err))
        :null
  }

  const getAllData=async()=>{
    await axios
    .post(`${url}forums/threads.php`, {
      topicID: id,
    })
    .then((result) => {
      //console.log(result.data);
      if (result.data === null) {
        alert('Error accessing this thread. You may lack the proper permissions.');
        navigate("/forum/main");
      } else {
        
        result.data[0]['open']===1?
        setBasicReply(id) : setBasicReply(null)
        
        setAllposts(result.data);
        const lastpg = Math.ceil(result.data.length / itemsPerPage);
        setPaginationView(lastpg===1 ? false:true);
        setPageCount(lastpg);
        setNameTopic(result.data[0].topic_title);
        const endOffset = itemOffset + itemsPerPage;
        setCurrentPosts(result.data.slice(itemOffset, endOffset));
        if (!page) {page=1;}
          if (page === "last") {
            setItemOffset(
              Math.ceil(result.data.length / itemsPerPage) * itemsPerPage -
                itemsPerPage
            );
            setForcePage(lastpg - 1);
          } else {
            const checkpagenum = page > lastpg ? 0 : page - 1;
            setItemOffset(checkpagenum * itemsPerPage);
            setForcePage(checkpagenum);
            
          }
         //set page to last or else
      } //check if thread exists
    }).catch(err => console.log(err));;
    
  }

  useEffect(async () => {
    if (!allposts.length) {
      getAllData();
      //get the data once
    } else {
      const endOffset = itemOffset + itemsPerPage;
      const lastpg = Math.ceil(allposts.length / itemsPerPage);
      
      setCurrentPosts(allposts.slice(itemOffset, endOffset));
      setPaginationView(lastpg===1 ? false:true);
      setPageCount(lastpg);
    }
    getTeam();
  }, [itemOffset, itemsPerPage]); //change to data depending on page

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allposts.length;
    setItemOffset(newOffset);
  }; //change page


  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((posts,index) => (
            <div key={posts.thread_id}>
             <hr className="style-two" />
              <div className="single-forum-post-container">
                <div className="forum-post-user-container">
                 {allteams.length&&allteams?                 
                  useUniqueBy(allteams).map((character)=>
                  character.thread_id===posts.thread_id?character.name
                  :'' )  :''} 
                  <img
                    src="https://via.placeholder.com/150"
                    className="w-24 hidden sm:block"
                    alt="name of character icon"
                  />

                  <span className="sm:block hidden">
                    Post by: {posts.lastpostUser}
                  </span>
                  <div className="sm:flex hidden gap-2 text-xs mt-1 flex-wrap">
                  {
                  allRoles[0].length? 
                  allRoles[0].filter((e)=>e.id_userid==posts.userID&&e.public_roles==1).map(
                    (myrole) => (
                      <div className="roleContainerperChara"
                      key={"contChara"+myrole.id_roles_users}>
                      <div className={"eachRoleButton rolebg-"+myrole.roles_name}
                      key={"rolebutton"+myrole.id_roles_users}>
                      {myrole.roles_name}
                        </div>
                         <div className="hoverRoleDesc">
                         {myrole.alt_description}
                           </div>
                           </div>
                    )   )
                  :null
                  }
                  
                  </div>

                  
                </div>                               

                <div className="forum-post-text-container">
                <div className="forum-post-footer-time">
                      {moment(new Date(posts.lastpostTime)).format(
                        "hh:mm a - MMMM DD, YYYY"
                      )}
                    </div>
                  <div className="forum-long-text">{posts.thread_post}</div>
                  <div className="forum-post-footer">
                    <div className="forum-post-footer-team">
                    {allteams.length&&allteams?                 
                  allteams.map((character)=>
                  character.thread_id===posts.thread_id?
                  <img src={usePokemonSprite(character.pokemon)}
                  className='forum-team-pokemon-sprites'
                  alt={character.pokemon} 
                  key={character.thread_id+character.pokemon} />
                  :''
                  )  :''} 
                    </div>
                   
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  } //show all posts


  /*when closing a topic:

move topic to archived
change topic_id in thread
update forums if needed




      lastpostAuthor:userName, 

      t_author:userName, 

upload wip to github */

  return (
    <>
     <Navigation place={place} />
    
      <main className="grid grid-cols-12">
        <div className="parentContainerBase col-span-12 flex flex-col gap-1">
          <a name="roleplay" />
          <h1 className="title">{nameTopic}</h1>

           {basicReply ? 
             <div className="flex justify-end mx-5 mb-2">
                <Link
                  to={"/postNew/"+basicReply}
                  className="btn btn-medium hover:bg-secondary bg-backgroundGradient"
                >
                  Make a Reply
                </Link>
              </div>
              :
              null}
          
              {paginationView ? 
              <ReactPaginate
              containerClassName="flex mx-5 flex-wrap"
              pageLinkClassName="btn-forum-pages"
              nextLinkClassName="btn-forum-pages"
              previousLinkClassName="btn-forum-pages"
              activeLinkClassName="border-2"
              disabledLinkClassName="cursor-default opacity-10"
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              forcePage={forcePage}
            />
              :null}
          
          <Items currentItems={currentposts} />

          <hr className="style-two" />
          
        {basicReply ? 
          <div className="flex justify-end mx-5 mb-2">
            <Link
              to={"/postNew/"+basicReply}
              className="btn btn-medium hover:bg-secondary bg-backgroundGradient"
            >
              Make a Reply
            </Link>
          </div>
          :
          null}
          
        </div>
      </main>
    </>
  );

};

export default Topicthread;
