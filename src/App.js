import WoodstockTravels from './travel/Woodstock';
import { useEffect, useState } from "react";
import axios from "axios";

import {
  TransformWrapper,
  TransformComponent,
  useControls
} from "react-zoom-pan-pinch";

import LoadingGif from './components/LoadingGIF';
import { ReactComponent as MapSVG } from './travel/original_map.svg';
import { useMediaQuery } from 'react-responsive';

function App() {

  const [loaded, setLoaded] = useState(false);
  const [stationdata, setStationData] = useState([]);
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` }); // Phones and VerticalTablet

  const isSmallPhone = useMediaQuery({ query: `(max-height: 700px)` }); // Mini and regular iPhones
  const isBigPhone = useMediaQuery({ query: `(max-height: 1000px)` }); // Plus sized iPhones
  const isVerticalTablet = useMediaQuery({ query: `(min-height: 1000px)` }); // Plus sized iPhones

  var scale = 1
  var initX = 0
  var initY = 0

  if (isMobile) {
    if (isSmallPhone) {
      scale = 5
      initX = -700
      initY = -1400
    } else if (isBigPhone) {
      scale = 5
      initX = -900
      initY = -1700
    } else if (isVerticalTablet) {
      scale = 3
      initX = -1100
      initY = -1100
    }
  }

  useEffect(() => {
    const fetchStations = async () => {
      // const res = await axios.get("https://yanni-test-localwp.local/wp-json/wp/v2/woodpost?per_page=100&_embed&_fields=featured_media_src_url,featured_media,excerpt,title,acf");
      const res = await axios.get("//yannichau.i234.me/wp-json/wp/v2/woodpost?per_page=100&_embed&_fields=featured_media_src_url,featured_media,excerpt,title,acf");
      setLoaded(true);
      setStationData(res.data);
      console.log("stationdata");
      console.log(res.data);

      console.log('small')
      console.log(isSmallPhone)
      console.log('big')
      console.log(isBigPhone)
    }
    fetchStations();
  }, []);

  return (
    <>
      <a href="https://yannichau.i234.me/">
        <button
          class="btn btn-secondary m-3 p-3 fixed-bottom"
          style={{ borderRadius: 10, width: 200 }}
        >
          <i class="bi bi-arrow-left"></i> yannichau.i234.me
        </button>
      </a>
      <TransformWrapper
        initialScale={scale}
        initialPositionX={initX}
        initialPositionY={initY}
      >
        {/* <Controls /> */}
        <TransformComponent>
          {loaded ? (
            <WoodstockTravels postdata={stationdata} />
          ) : (
            <>
              <MapSVG class="scrolling-wrapper" />
            </>
          )
          }
        </TransformComponent>
      </TransformWrapper>
      <>
        {
          loaded ? <></> :
            <div class="position-absolute top-50 start-50 translate-middle alert alert-warning m-3 p-3" role="alert">
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
              <br></br>
              Loading from database......guess where Woodstock has travelled to?
            </div>
        }
      </>
    </>
  );
}

export default App;