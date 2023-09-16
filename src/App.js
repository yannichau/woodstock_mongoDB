import { useState, useEffect } from 'react';
import axios from "axios";

import TubePage from './pages/Tube';


function App() {
  const [stationdata, setStationData] = useState(null);

  useEffect(() => {
    const fetchStations = async () => {
      const res = await axios.get("https://ytc-web.herokuapp.com/api/stationposts");
      setStationData(res.data);
      console.log("stationdata");
      console.log(res.data);
    }
    fetchStations();
  }, []);

  return (
    <TubePage stationdata={stationdata} />
  );
}

export default App;