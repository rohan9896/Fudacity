import { v4 as uuid } from "uuid";

export const sideBar = [
  {
    name: "Home",
    id: uuid(),
    route: "/",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/ecomm/home.svg",
  },
  {
    name: "Liked",
    id: uuid(),
    route: "/liked",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/videoLib/like.svg",
  },
  {
    name: "Watch Later",
    id: uuid(),
    route: "/watch-later",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/videoLib/playlist.svg",
  },
  {
    name: "History",
    id: uuid(),
    route: "/history",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/videoLib/watch-later.svg",
  },
];
