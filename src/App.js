import { useState, useEffect } from 'react';
import axios from "axios";

import TubePage from './pages/Tube';


function App() {
  const [stationdata, setStationData] = useState(null);

  useEffect(() => {
    const fetchStations = async () => {
      // const res = await axios.get("https://yanni-test-localwp.local/wp-json/wp/v2/woodpost?per_page=100&_embed&_fields=featured_media_src_url,featured_media,excerpt,title,acf");
      const res = await axios.get("//yannichau.i234.me/wp-json/wp/v2/woodpost?per_page=100&_embed&_fields=featured_media_src_url,featured_media,excerpt,title,acf");
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