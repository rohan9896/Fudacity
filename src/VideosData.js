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
    {
      id: "dn9cSRImmVA",
      thumbnail: "https://img.youtube.com/vi/dn9cSRImmVA/mqdefault.jpg",
      title:
        "Google Cloud Platform Full Course | Google Cloud Platform Tutorial | Cloud Computing | Simplilearn",
      videoLength: "3:42:19",
      channel: "Simplilearn",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnhJqtFsDmOEb6Hr30-AtA9e_K2-rJE1J-IbfaB0WQ=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=dn9cSRImmVA",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "NKEFWyqJ5XA",
      thumbnail: "https://i3.ytimg.com/vi/NKEFWyqJ5XA/hqdefault.jpg",
      title:
        "Microsoft Azure Fundamentals Certification Course (AZ-900) - Pass the exam in 3 hours!",
      videoLength: "3:10:25",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=NKEFWyqJ5XA",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "a9__D53WsUs",
      thumbnail: "https://i3.ytimg.com/vi/a9__D53WsUs/hqdefault.jpg",
      title:
        "Microsoft Azure Fundamentals Certification Course (AZ-900) - Pass the exam in 3 hours!",
      videoLength: "3:11",
      channel: "Amazon Web Services",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwniWUd8_hJwiiwcIjwA8k6qQ7vvYhIJEtnNEnY0bb1U=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=a9__D53WsUs",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const React = [
    {
      id: "KUJsaM-hAjs",
      thumbnail: "https://i3.ytimg.com/vi/KUJsaM-hAjs/hqdefault.jpg",
      title: "First React App: Introduction to ReactJS library",
      videoLength: "2:37:25",
      channel: "Tanay Pratap",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=KUJsaM-hAjs",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "4UZrsTqkcW4",
      thumbnail: "https://i3.ytimg.com/vi/4UZrsTqkcW4/hqdefault.jpg",
      title:
        "Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks",
      videoLength: "10:07:52",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "RGKi6LSPDLU",
      thumbnail: "https://img.youtube.com/vi/RGKi6LSPDLU/mqdefault.jpg",
      title: "React Tutorial in Hindi 🔥🔥",
      videoLength: "2:12:56",
      channel: "CodeWithHarry",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=RGKi6LSPDLU",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "-cMqr9HpZ-Y",
      thumbnail: "https://i3.ytimg.com/vi/-cMqr9HpZ-Y/hqdefault.jpg",
      title: "React JS Tutorial for Beginners - Full Course in 12 Hours [2021]",
      videoLength: "11:32:50",
      channel: "Clever Programmer",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=-cMqr9HpZ-Y",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "15YB__vYpuA",
      thumbnail: "https://i3.ytimg.com/vi/15YB__vYpuA/hqdefault.jpg",
      title: "React Crash Course 2020 - Learn React in 1 video + Projects 🔥",
      videoLength: "10:07",
      channel: "codedamn",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjJzxp8COuChc2Iccn41G1sBr9DRbFpR3jeo9shvw=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=15YB__vYpuA",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "hQAHSlTtcmY",
      thumbnail: "https://i3.ytimg.com/vi/hQAHSlTtcmY/hqdefault.jpg",
      title: "Learn React In 30 Minutes",
      videoLength: "27:15",
      channel: "Web Dev Simplified",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=hQAHSlTtcmY",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "-MlNBTSg_Ww",
      thumbnail: "https://i3.ytimg.com/vi/-MlNBTSg_Ww/hqdefault.jpg",
      title: "React.js Hooks Crash Course",
      videoLength: "1:02:53",
      channel: "Academind",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnhuAGr98acrEv0S1Q3Ikz0giWPmHmM1J3h6pANWCg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=-MlNBTSg_Ww",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "6ThXsUwLWvc",
      thumbnail: "https://i3.ytimg.com/vi/6ThXsUwLWvc/hqdefault.jpg",
      title: "Learn Custom Hooks In 10 Minutes",
      videoLength: "9:37",
      channel: "Web Dev Simplified",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=6ThXsUwLWvc",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const JavaScript = [
    {
      id: "pN6jk0uUrD8",
      thumbnail: "https://i3.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg",
      title:
        "Namaste JavaScript 🙏 Course - JS Video Tutorials by Akshay Saini",
      videoLength: "2:13",
      channel: "Akshay Saini",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnin7zykyU20uPntBE42IfNsj9SAL7tKeE7eiNuUYA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=pN6jk0uUrD8",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "PkZNo7MFNFg",
      thumbnail: "https://i3.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
      title: "Learn JavaScript - Full Course for Beginners",
      videoLength: "3:26:42",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "papg2tsoFzg",
      thumbnail: "https://img.youtube.com/vi/papg2tsoFzg/mqdefault.jpg",
      title: "Welcome to Javascript Course",
      videoLength: "4:37",
      channel: "Hitesh Choudhary",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnihtV8Mb0JZFkkAEf9KKN4m4WNNeHkxUb6Wuvc_5w=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=papg2tsoFzg",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "3PHXvlpOkf4",
      thumbnail: "https://i3.ytimg.com/vi/3PHXvlpOkf4/hqdefault.jpg",
      title: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
      videoLength: "8:23:56",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=3PHXvlpOkf4",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "y17RuWkWdn8",
      thumbnail: "https://i3.ytimg.com/vi/y17RuWkWdn8/hqdefault.jpg",
      title: "Learn DOM Manipulation In 18 Minutes",
      videoLength: "18:36",
      channel: "Web Dev Simplified",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=y17RuWkWdn8",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const CompetitiveProgramming = [
    {
      id: "oBt53YbR9Kk",
      thumbnail: "https://i3.ytimg.com/vi/oBt53YbR9Kk/hqdefault.jpg",
      title:
        "Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges",
      videoLength: "5:10:01",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "0JUN9aDxVmI",
      thumbnail: "https://i3.ytimg.com/vi/0JUN9aDxVmI/hqdefault.jpg",
      title: "Advanced Algorithms (COMPSCI 224), Lecture 1",
      videoLength: "1:28:18",
      channel: "Harvard University",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjm1z7VHY8eqbD4SMOuHfJYreKBPAXS6Aow-4Fy-g=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=0JUN9aDxVmI",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "dTUw2NPZeCc",
      thumbnail: "https://img.youtube.com/vi/dTUw2NPZeCc/mqdefault.jpg",
      title:
        "Recursion And Backtracking || Indian Programming Camp 2020 - Beginner Track || Sanket Singh",
      videoLength: "2:05:56",
      channel: "Learn Competitive Programming with CodeChef",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwngdEFBTnLN2cpEtTvdYYLgroIt3TdBaSRcCn22k=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=dTUw2NPZeCc",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const MachineLearning = [
    {
      id: "PPLop4L2eGk",
      thumbnail: "https://i3.ytimg.com/vi/PPLop4L2eGk/hqdefault.jpg",
      title:
        "Lecture 1.1 — What Is Machine Learning — [ Machine Learning | Andrew Ng ]",
      videoLength: "7:14",
      channel: "Artificial Intelligence - All in One",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjfplcXkvzCy4EdpNNGt0DOYW95Q42k_8oavgKGIQ=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=PPLop4L2eGk",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "_PwhiWxHK8o",
      thumbnail: "https://i3.ytimg.com/vi/_PwhiWxHK8o/hqdefault.jpg",
      title: "Introduction to data structures",
      videoLength: "49:33",
      channel: "MIT OpenCourseWare",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwniz0cQuf5DkaTMFcOleJYHcLL2eepERIVkj7wX5=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=_PwhiWxHK8o",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const DataScience = [
    {
      id: "ua-CiDNNj30",
      thumbnail: "https://i3.ytimg.com/vi/ua-CiDNNj30/hqdefault.jpg",
      title: "Learn Data Science Tutorial - Full Course for Beginners",
      videoLength: "5:11",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=ua-CiDNNj30",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "-ETQ97mXXF0",
      thumbnail: "https://i3.ytimg.com/vi/-ETQ97mXXF0/hqdefault.jpg",
      title:
        "Data Science Full Course - Learn Data Science in 10 Hours | Data Science For Beginners | Edureka",
      videoLength: "10:23:56",
      channel: "edureka!",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=-ETQ97mXXF0",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "JwSS70SZdyM",
      thumbnail: "https://img.youtube.com/vi/JwSS70SZdyM/mqdefault.jpg",
      title:
        "Build 12 Data Science Apps with Python and Streamlit - Full Course",
      videoLength: "3:11:52",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=JwSS70SZdyM",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const Blockchain = [
    {
      id: "coQ5dg8wM2o",
      thumbnail: "https://i3.ytimg.com/vi/coQ5dg8wM2o/hqdefault.jpg",
      title:
        "Build Your First Blockchain App Using Ethereum Smart Contracts and Solidity",
      videoLength: "1:31:06",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=coQ5dg8wM2o",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "QphJEO9ZX6s",
      thumbnail: "https://i3.ytimg.com/vi/QphJEO9ZX6s/hqdefault.jpg",
      title: "Blockchain Explained",
      videoLength: "10:22",
      channel: "IBM Cloud",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjJxjM2eZs5x8bfWRzgPdv_j9K7HiMCvKa6GD2iCQ=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=QphJEO9ZX6s",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const GameDevelopment = [
    {
      id: "LsNW4FPHuZE",
      thumbnail: "https://i3.ytimg.com/vi/LsNW4FPHuZE/hqdefault.jpg",
      title: "Learn Unreal Engine (with C++) - Full Course for Beginners",
      videoLength: "4:42:42",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=LsNW4FPHuZE",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "yo40OaolRs8",
      thumbnail: "https://i3.ytimg.com/vi/yo40OaolRs8/hqdefault.jpg",
      title: "Introduction to data structures",
      videoLength: "26:34",
      channel: "Ourcade",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnjHs8GjKkQiXp5hrtBPTjIExB8tMFz1jR6Iwnd8=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=yo40OaolRs8",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "gB1F9G0JXOo",
      thumbnail: "https://img.youtube.com/vi/gB1F9G0JXOo/mqdefault.jpg",
      title: "Learn Unity - Beginner's Game Development Tutorial",
      videoLength: "7:24:39",
      channel: "freeCodeCamp.org",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
  ];

  const SystemDesign = [
    {
      id: "xpDnVSmNFX0",
      thumbnail: "https://i3.ytimg.com/vi/xpDnVSmNFX0/hqdefault.jpg",
      title: "System Design Basics: Horizontal vs. Vertical Scaling",
      videoLength: "7:55",
      channel: "Gaurav Sen",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnhWmEk39x7vc36Hg24eonJONbos32C4R4ZC-mbpJFM=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=xpDnVSmNFX0",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "FSR1s2b-l_I",
      thumbnail: "https://i3.ytimg.com/vi/FSR1s2b-l_I/hqdefault.jpg",
      title:
        "Introduction to System Design | System Design Tutorials | Part 1 | 2020",
      videoLength: "4:48",
      channel: "sudoCODE",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwngldeV3OR8fHcLL4EPjEO8ic1Qdfvzk9MacvFAc=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=FSR1s2b-l_I",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
    {
      id: "HvSsGjxy7so",
      thumbnail: "https://img.youtube.com/vi/HvSsGjxy7so/mqdefault.jpg",
      title:
        "Developing Food Ordering App in 1 hour | Machine Coding Frontend Interview",
      videoLength: "33:39",
      channel: "Akshay Saini",
      channelImg:
        "https://yt3.ggpht.com/ytc/AAUvwnin7zykyU20uPntBE42IfNsj9SAL7tKeE7eiNuUYA=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=HvSsGjxy7so",
      liked: false,
      disliked: false,
      views: faker.datatype.number(999),
      monthsAgo: faker.datatype.number(12),
    },
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
