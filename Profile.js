import {Card} from 'react-bootstrap';
import { getAuth } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import {useState} from 'react';
import InputControl from "./InputControl"
// import {useNavigate} from 'react-router-dom';

export default function Profile()  {
  // const navigate = useNavigate();
  // navigate("/");
const auth = getAuth();
const Cuser = auth.currentUser;
const [user, setUser] = useState();

// {
//   displayName: "User" 
// }  )

 const [value, setValue] = useState();
//   photoURL: "https://example.com/jane-q-user/profile.jpg"

//  })
      const handleuser =(e)=>{
        setValue(e.target.value);
    
      }

      const userhandler =(e)=>{
        setUser(e.target.value
        );
    
      }




    const handleSubmission = () => {
      
      
    
  
      updateProfile(Cuser,value,user).then(() => {
      // Profile updated!
      // if (user !== null) {
      //   user.providerData.forEach((profile) => {
      //     console.log("Sign-in provider: " + profile.providerId);
      //     console.log("  Provider-specific UID: " + profile.uid);
      //     console.log("  Name: " + profile.displayName);
      //     console.log("  Email: " + profile.email);
      //     console.log("  Photo URL: " + profile.photoURL);
      //   });
      
      // }
        alert('your profile pic updated!!')
      
      // ...
      }).catch((error) => {
      // An error occurred






        alert(" please updated your profile!!");
      
        return;
      
       
      })
      
    }
    return(
      <Card style={{backgroundColor:"cornsilk"}}>
     <form onSubmit={handleSubmission}>
<div>
<InputControl
          label="FullName"
          type='text'
          placeholder="Enter FullName"
          onChange={handleuser
          }
          value={value}
        />


<InputControl
          label="Pic Url"
          type='href'
          placeholder="Enter Url"
          onChange={userhandler
          }
          value={user}
required
        /><br></br>

          <button>Update</button>

</div>
      </form>   
      </Card>
    )
};
































