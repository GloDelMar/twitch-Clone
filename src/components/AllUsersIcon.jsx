import React from "react"
import UserIcon from "./UserIcon";

export default function Menu() {
    const ImageIcon = [
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/bf1d52e3-b46b-4c07-9b4f-a1ab8c4e40f8-profile_image-70x70.png",
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/fd9bf69a-913f-4040-927e-cbdb21f40bd2-profile_image-70x70.png",
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/bbe9b7f7-8c58-4734-adab-52c2c791b9a6-profile_image-70x70.png",
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/58da019c-c362-44a7-9e61-a94a293bdd88-profile_image-70x70.png",
        
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/78528288-6216-4e21-872b-7f415b602a9a-profile_image-70x70.png",
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/3028ed95-b681-4f89-92b5-1c383d95acf3-profile_image-70x70.png",
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/a11e4019-6182-48eb-a68d-bbdbd7fc3664-profile_image-70x70.png"
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/f19b8d2d-8199-471e-9e35-3aa2ed91fc4a-profile_image-70x70.png"
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/9d8514ff-ddc6-4cf6-af00-a576f8fabb0a-profile_image-70x70.png"
      },
      {
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/f115fd78-7ed3-4e81-b907-23cc2e54917d-profile_image-70x70.png"
      }
    ];
    return (
                <div>
            {ImageIcon.map((chanel) => {
              return (
                <UserIcon
                  img={chanel.img}
                  key={`channel-${chanel.name}`}
                />
              );
            })}
          </div>
     
    );
  }