import { SeriesInterface } from "../../../interfaces/ISeries";
import { UsersInterface } from "../../../interfaces/IUser";
import { CommentInterface } from "../../../interfaces/IComment";
import { EpisodesInterface } from "../../../interfaces/IEpisodes";

const apiUrl = "http://localhost:8080";
//Page Login
async function LoginByUsername(data: UsersInterface) {
    const requestOptions ={
     
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    let res = await fetch(`${apiUrl}/login`,requestOptions)
    .then((response) => response.json())
    .then((res)=>{
      if(res.data){
        return { status: true, message: res.data };
  
      }
      else{
        return { status: false, message: res.error };
      }
    });
    return res;
  }
export{
    LoginByUsername
}