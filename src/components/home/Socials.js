import { SocialIcon } from "react-social-icons";
import React from "react";

const Socials = () => {
  return (
    <div className="poop">
      <SocialIcon  url = 'https://www.linkedin.com/in/michael-wu-a445481a9/' bgColor='wheat' style = {{height: 25, width:25 ,margin: 5}}/>
      <SocialIcon  url = 'https://github.com/michael11wu' bgColor='wheat' style = {{height: 25, width:25, margin: 5}}/>
      <SocialIcon  url = 'mailto:wu000414@umn.edu' bgColor='wheat' style = {{height: 25, width:25, margin: 5}}/>
    </div>
    
  )
}

export default Socials;