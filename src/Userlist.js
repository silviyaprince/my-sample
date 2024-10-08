import { Profilepic } from "./Profilepic";

export function Userlist() {
  const user = [
    {
      pic: "https://cdn.pixabay.com/photo/2023/03/27/12/38/plant-7880652_1280.png",
      name: "usha",
    },
    {
      pic: "https://cdn.pixabay.com/photo/2023/03/27/12/38/plant-7880652_1280.png",
      name: "usharani",
    },
    {
      pic: "https://cdn.pixabay.com/photo/2023/03/27/12/38/plant-7880652_1280.png",
      name: "ushapathy",
    },
  ];
  return (
    <div>
      {user.map((usr) => (
        <Profilepic pic={usr.pic} name={usr.name} />
      ))}
    </div>
  );
}
