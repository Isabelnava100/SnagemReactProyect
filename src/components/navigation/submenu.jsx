import React,{useState,memo} from "react";
import { Link } from "react-router-dom";

const Submenu = memo((props) => {
  const loginUser = sessionStorage.getItem("username")?sessionStorage.getItem("username"):'Guest';
  const location = props.place;
  const roles = props.roles;

  let links = {
    // Homepage: [
    //   {
    //     thename: "about us",
    //     url: "/aboutus",
    //     hash: "#test",
    //     roles: "guest user admin",
    //   },
    //   { thename: "about us2", url: "/aboutus2", hash: "", roles: "user admin" },
    // ],
    // Marketplace: [
    //   { thename: "shop 1", url: "/shop1", hash: "#test", roles: "guest user admin" },
    //   { thename: "shop 2", url: "/shop2", hash: "", roles: "guest user admin" },
    // ],
    Forum: [
      {
        thename: "Make a New Topic",
        url: "/forumNew",
        hash: "",
        roles: "user admin",
      },
      { thename: "Main Forums", url: "/forum/main", hash: "", roles: "guest user admin" },
      { thename: "Side RP", url: "/forum/side", hash: "", roles: "guest user admin" },
      {
        thename: "Master Missions",
        url: "/forum/mm",
        hash: "",
        roles: "master admin",
      },
      { thename: "Quests", url: "/forum/quests", hash: "", roles: "guest user admin" },
      { thename: "Events", url: "/forum/events", hash: "", roles: "guest user admin" },
      {
        thename: "Private",
        url: "/forum/private",
        hash: "",
        roles: "user admin",
      },
      {
        thename: "Archived",
        url: "/forum/archived",
        hash: "",
        roles: "admin",
      },
      {
        thename: "noone",
        url: "/forum/archived",
        hash: "",
        roles: "noone",
      },
    ],
  };
  const filtered = links[location];
  const arr = [];
  
  roles?
  (roles
    .filter((e) => e.username === loginUser)
    .map((myrole) =>
      !arr.includes(myrole.roles_name)
        ? arr.push(myrole.roles_name.toLowerCase())
        : null
    ))   :null

    //console.log(roles);

  return (
    <>
      {filtered&&arr.length ? (
        <div className="small-nav-cont">
          {(filtered).map((key, i) => (
             arr.some((v => key.roles.includes(v)))? (
              <Link
                      to={{
                        pathname: key.url,
                        hash: key.hash,
                      }}
                      key={i+key}
                      className="small-nav"
                    >
                      {key.thename} 
                    </Link>
              ) : null
            //   arr.map((x,y) =>
            //  filtered[key].roles.includes(x)&&i===y ? (
            //       <Link
            //         to={{
            //           pathname: filtered[key].url,
            //           hash: filtered[key].hash,
            //         }}
            //         key={i+x}
            //         className="small-nav"
            //       >
            //         {filtered[key].thename} 
            //       </Link>
            //     ) :  null
            //   )
          ))}
        </div>
      ) : null}
    </>
  );
});

export default Submenu;
