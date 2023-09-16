
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupItem(props) {
    return (
        <ListGroup.Item ><b>{props.title}</b> <br /> {props.info}</ListGroup.Item>
    );
}

export default ListGroupItem;