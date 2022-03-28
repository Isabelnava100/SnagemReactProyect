
import axios from "axios";

  export const useLogOut = async () => {
    
    const url = process.env.API_URL;
    let userName = sessionStorage.getItem('username');

        const result = await axios
          .post(`${url}users/logout.php`, {
            username: userName
          })
          .then((result) => {    
         //     console.log(result.data);
              sessionStorage.clear(); 
          });
  
    return result;
  };