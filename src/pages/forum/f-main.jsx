import React, { useState, useEffect,useContext } from "react";
import moment from "moment";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Navigation from "@components/navigation/header";
import Forumtopic from "@components/forum/topics";


const Forumain = () => {
  

  let { id } = useParams();
  const place = "Forum";
  const url = process.env.API_URL;

  const [allforums, setAllforums] = useState([]);
  const [forumname, setForumname] = useState("");
  const getForums = async()=>{
  await axios
  .post(`${url}forums/forums.php`, {
    forumParam: id,
  })
  .then((result) => {
    setAllforums(
      result.data.filter((entry) => {
        return entry.param !== id;
      })
    );
    setForumname(
      result.data.filter((entry) => {
        return entry.param === id;
      })[0].forum_title
    );
  
  }).catch(err => console.log(err));;
}

  useEffect(async () => {
    getForums();
  }, [id]);

  return (
    <>
      <Navigation place={place} />

      <main className="grid grid-cols-12">
        <div className="parentContainerBase col-span-12 flex flex-col gap-1">
          <a name="roleplay" />
          <h1 className="title">{forumname}</h1>

          <div className="flex justify-end mx-5">
            <Link
              to="/forumNew"
              className="btn btn-medium hover:bg-secondary bg-backgroundGradient"
            >
              Make a New Topic
            </Link>
          </div>

          <Forumtopic where={id} />

          <table className="table-auto">
            <thead className="table-header-group">
              <tr>
                <th>List of Forums</th>
                <th>Last Post</th>
              </tr>
            </thead>
            <tbody>
             
              {allforums.map((forum) => (
                <tr className="table-row" key={"forum_" + forum.param}>
                  <td>
                    <Link to={"/forum/" + forum.param}>
                      <h3>{forum.forum_title}</h3>
                      <span>{forum.forum_description}</span>
                    </Link>
                  </td>
                  <td>
                    {forum.lastpostTime ? (
                      <Link to={"/threads/" + forum.latest + "/last"}>
                        {moment(new Date(forum.lastpostTime)).format(
                          "hh:mm a - MMMM DD, YYYY"
                        )}
                        <br /> by {forum.lastpostUser}
                      </Link>
                    ) : (
                      "No posts."
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );

};

export default Forumain;
