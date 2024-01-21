
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupItem(props) {
    return (
        // <ListGroup.Item ><b>{props.title}</b> <br /> {props.info}</ListGroup.Item>
        <div>
            <h3>{props.title}</h3>
            <div>{props.info}</div>
            <br></br>
        </div>
    );
}

export default ListGroupItem;