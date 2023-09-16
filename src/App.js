import { Routes, Route } from 'react-router-dom';

import { HashRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

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
    <HashRouter>
      <Routes>
            <Route path="/" element={<TubePage stationdata={stationdata} />} />
        </Routes>
    </HashRouter>
  );
}

export default App;