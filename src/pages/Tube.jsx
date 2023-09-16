import WoodstockTravels from '../travel/Woodstock';
// import WoodstockMasonry from '../travel/Woodstock_Masonry';

import { useEffect, useState } from "react";
import LoadingGif from '../components/LoadingGIF';

function TubePage({ stationdata }) {

    const [loaded, setLoaded] = useState(false);
    const [stationPosts, setStationPosts] = useState([]);

    useEffect(() => {
        if (stationdata) {
            setLoaded(true);
            setStationPosts(stationdata);
        }
    }, [stationdata]);

    return (
        <div>
            {loaded ? (
                <div>
                    <WoodstockTravels postdata={stationPosts} />
                    {/* <div className="container mt-4 col-md-10">
                        <WoodstockMasonry postdata={stationPosts} />
                    </div> */}
                </div>
            ) : (
                <LoadingGif />
            )
            }
        </div>
    );
}

export default TubePage;