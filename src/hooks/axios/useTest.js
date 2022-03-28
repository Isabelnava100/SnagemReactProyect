
import axios from "axios";
const url = process.env.API_URL;
const userName = sessionStorage.getItem('username');

export const Test = async () => {
  
      const result = await axios
        .post(`${url}users/test.php`, {
          username: userName
        })
        .then((result) => {    
       //     console.log(result.data);
        });

  return result;
};