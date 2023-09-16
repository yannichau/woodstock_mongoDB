import Image from 'react-bootstrap/Image';
import load_image from '../images/loading.gif';

function LoadingGif() {
    return (
        <div className="px-10 py-0 text-center">
            <Image src={load_image} alt="Photo" fluid />
            <div>Cute image courtesy of <a href="https://dribbble.com/shots/3790348-game-loading" style={{ color: "black", textDecoration: "none" }}>yuanzi0410</a>.</div>
        </div >
    );
}

export default LoadingGif;