import faker from "faker";

faker.seed(123);

function generateVideosData() {
  const DSA = [
    {
      id: "8hly31xKli0",
      thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
      title:
        "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
      videoLength: "5:22:00",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=8hly31xKli0",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "92S4zgXN17o",
      thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
      title: "Introduction to data structures",
      videoLength: "6:33",
      channel: "mycodeschool",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=92S4zgXN17o",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "z9bZufPHFLU",
      thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
      title:
        "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
      videoLength: "5:54",
      channel: "Apna College",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
      link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "F8xQ5joLlD0",
      thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
      title: "Introduction to foundation",
      videoLength: "10:07",
      channel: "Pepcoding",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const DevOps = [
    {
      id: "_Gpe1Zn-1fE",
      thumbnail: "https://i3.ytimg.com/vi/_Gpe1Zn-1fE/hqdefault.jpg",
      title: "What is DevOps? Easy way",
      videoLength: "9:05",
      channel: "Hitesh Choudhary",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnihtV8Mb0JZFkkAEf9KKN4m4WNNeHkxUb6Wuvc_5w=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=_Gpe1Zn-1fE",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "_I94-tJlovg",
      thumbnail: "https://i3.ytimg.com/vi/_I94-tJlovg/hqdefault.jpg",
      title: "What is DevOps? - In Simple English",
      videoLength: "7:06",
      channel: "Rackspace Technology",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjFFW-urVXeyl9vnyQ3tvHp4LsffPZLRjIQ9W3vkA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=_I94-tJlovg",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "S_0q75eD8Yc",
      thumbnail: "https://i3.ytimg.com/vi/S_0q75eD8Yc/hqdefault.jpg",
      title:
        "DevOps Tools Full Course in 11 Hours | DevOps Tools Tutorial | DevOps Training | Edureka",
      videoLength: "11:04:05",
      channel: "edureka!",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=S_0q75eD8Yc",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "scEDHsr3APg",
      thumbnail: "https://i3.ytimg.com/vi/scEDHsr3APg/hqdefault.jpg",
      title: "DevOps CI/CD Explained in 100 Seconds",
      videoLength: "1:55",
      channel: "Fireship",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjWfh0Ki7uJWaYNhpZyG8ataxCL9N5SscOhfZfGXg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=scEDHsr3APg",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const Cloud = [
    {
      id: "usYySG1nbfI",
      thumbnail: "https://i3.ytimg.com/vi/usYySG1nbfI/hqdefault.jpg",
      title:
        "Introduction to Cloud | Cloud Computing Tutorial for Beginners | Cloud Certifications | Edureka",
      videoLength: "28:36",
      channel: "edureka!",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=usYySG1nbfI",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "dH0yz-Osy54",
      thumbnail: "https://i3.ytimg.com/vi/dH0yz-Osy54/hqdefault.jpg",
      title: "What is Cloud Computing?",
      videoLength: "3:11",
      channel: "Amazon Web Services",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwniWUd8_hJwiiwcIjwA8k6qQ7vvYhIJEtnNEnY0bb1U=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=dH0yz-Osy54",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const React = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const JavaScript = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const CompetitiveProgramming = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const MachineLearning = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const DataScience = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const Blockchain = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const GameDevelopment = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];

  const SystemDesign = [
    // {
    //   id: "8hly31xKli0",
    //   thumbnail: "https://i3.ytimg.com/vi/8hly31xKli0/hqdefault.jpg",
    //   title:
    //     "Algorithms and Data Structures - Full Course for Beginners from Treehouse",
    //   videoLength: "5:22:00",
    //   channel: "freeCodeCamp.org",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=8hly31xKli0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "92S4zgXN17o",
    //   thumbnail: "https://i3.ytimg.com/vi/92S4zgXN17o/hqdefault.jpg",
    //   title: "Introduction to data structures",
    //   videoLength: "6:33",
    //   channel: "mycodeschool",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnjxmp9I5SL4FJUX1HWlg0k3jZVimZ6aNmuhPDJL=s88-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=92S4zgXN17o",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "z9bZufPHFLU",
    //   thumbnail: "https://img.youtube.com/vi/z9bZufPHFLU/mqdefault.jpg",
    //   title:
    //     "Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1",
    //   videoLength: "5:54",
    //   channel: "Apna College",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s176-c-k-c0x00ffffff-no-rj-mo",
    //   link: "https://www.youtube.com/watch?v=z9bZufPHFLU",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
    // {
    //   id: "F8xQ5joLlD0",
    //   thumbnail: "https://i3.ytimg.com/vi/F8xQ5joLlD0/hqdefault.jpg",
    //   title: "Introduction to foundation",
    //   videoLength: "10:07",
    //   channel: "Pepcoding",
    //   channelImg:
    //     "https://yt3.ggpht.com/ytc/AAUvwnhIfHbN8Ucj_OEERe0uOsOHFJh9Giw_XFDP6dm_=s176-c-k-c0x00ffffff-no-rj",
    //   link: "https://www.youtube.com/watch?v=F8xQ5joLlD0",
    //   liked: false,
    //   disliked: false,
    //   views: faker.datatype.number(999),
    //   monthsAgo: faker.datatype.number(12)
    // },
  ];
  return {
    DSA,
    DevOps,
    Cloud,
    React,
    JavaScript,
    CompetitiveProgramming,
    MachineLearning,
    DataScience,
    Blockchain,
    GameDevelopment,
    SystemDesign,
  };
}

export const categorywiseVideoData = generateVideosData();
