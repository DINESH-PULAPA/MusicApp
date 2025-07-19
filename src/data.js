    import { v4 as uuidv4 } from "uuid";
    import song1 from "./songs/testsong.mp3";
    import hosahorey from "./songs/HOSHARE.mp3";
    import Animal from "./songs/Animal.mp3";
    import bujjigadu from "./songs/Bujjigadu.mp3";
    import RajiniSir from "./songs/RajiniSir.mp3";
    import Billa from "./songs/Billa.mp3";
    import sahoo from "./songs/SAHOO.mp3";


    function chillHop() {
      return [
        {
          name: "HOSHAHO REY",
          cover:
            "https://a10.gaanacdn.com/images/albums/40/244640/crop_480x480_244640.jpg",
          artist: "G.V. Prakash Kumar ",
          audio: `${hosahorey}`,
          color: ["#205950", "#2ab3bf"],
          id: uuidv4(),
          active: true,
        },
        {
          name: "Animal",
          cover:
            "https://sp.yimg.com/ib/th/id/OIP.l8Ro-SsUIcsi7ysY41h1DQHaKX?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
          artist: "Anantha Sriram",
          audio: `${Animal}`,
          color: ["#EF8EA9", "#ab417f"],
          id: uuidv4(),
          active: false,
        },
        {
          name: "Bujjigadu",
          cover:
            "https://tse4.mm.bing.net/th/id/OIP.5uNtW7dVr_2g4naVybCL6AHaEK?pid=Api&P=0&h=180",
          artist: "Sandeep Chowta",
          audio: `${bujjigadu}`,
          color: ["#CD607D", "#c94043"],
          id: uuidv4(),
          active: false,
        },
        {
          name: "Narashimha",
          cover:
            "https://tse3.mm.bing.net/th/id/OIP.F9-zGB-MSdPg_PnBjJR-9gHaEK?pid=Api&P=0&h=180",
          artist: "Siva Ganesh",
          audio: `${RajiniSir}`,
          color: ["#EF8EA9", "#ab417f"],
          id: uuidv4(),
          active: false,
        },
        {
          name: "Billa",
          cover:
            "https://tse3.mm.bing.net/th/id/OIP.TxyX6_LSTwA0OoAhjbqsbAHaEK?pid=Api&P=0&h=180",
          artist: "Mani Sharma",
          audio: `${Billa}`,
          color: ["#CD607D", "#c94043"],
          id: uuidv4(),
          active: false,
        },
        {
          name: "Sahoo",
          cover:
            "https://tse1.mm.bing.net/th/id/OIP.juWJWc-qekMhSFR0rENIHwHaEK?pid=Api&P=0&h=180",
          artist: "Badshah and Neeti Mohan",
          audio: `${sahoo}`,
          color: ["#205950", "#2ab3bf"],
          id: uuidv4(),
          active: false,
        },
        {
          name: "Summertime Sadness",
          cover:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=600&q=80",
          artist: "Lal Del Ray",
          audio: `${song1}`,
          color: ["#205950", "#2ab3bf"],
          id: uuidv4(),
          active: false,
        },
        //ADD MORE HERE
      ];
    }

    export default chillHop;
