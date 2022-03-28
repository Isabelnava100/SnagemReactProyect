import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";

const place = "Forum";

const Forumtopic = (props) => {
  const url = process.env.API_URL;
  const [allTopics, setAllTopics] = useState([]);
  const [currentTopics, setCurrentTopics] = useState([]);
  const [paginationView, setPaginationView] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;


  function Items({ currentItems }) {
    return (
      <>
        {currentItems ? (
        <table className="table-auto">
          <thead className="table-header-group">
            <tr>
              <th>Topics</th>
              <th>Last Post</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(topics => (
            <tr className="table-row" key={topics.topics_id}>
              <td>
                <Link to={"/threads/" + topics.topics_id}>
                  <h3>{topics.topic_title}</h3>
                  <span>{topics.topic_description}</span>
                </Link>
              </td>
              <td>
                <Link to={"/threads/" + topics.topics_id + "/last"}>
                  {moment(new Date(topics.lastpostTime)).format(
                    "hh:mm a - MMMM DD, YYYY"
                  )}
                  <br /> by {topics.lastpostUser}
                </Link>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      ) : "No topics created."}
      </>
    );
  } //show


  useEffect(async () => {
    
      const result = await axios
        .post(`${url}forums/topics.php`, {
          forumName: props.where,
        })
        .then((result) => {
          //console.log(result.data);
          if (result.data === null) {
            
            setAllTopics([]);
            setPaginationView(false);
            setCurrentTopics([]);
          } else {

            const lastpg = Math.ceil(result.data.length / itemsPerPage);
            const endOffset = itemOffset + itemsPerPage;

            setAllTopics(result.data);
            setPaginationView(lastpg===1 ? false:true);
            setPageCount(lastpg);

            setCurrentTopics(result.data.slice(itemOffset, endOffset));
            
            
          } //check if thread exists
        });
      //get the data once
    
  }, [itemOffset, itemsPerPage, props.where]); //change to data depending on page


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allTopics.length;  
    setItemOffset(newOffset);
  }; //change page
  return (
    <>
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
            />
              :null}
          
          <Items currentItems={currentTopics} />
    </>
  );
};

export default Forumtopic;
