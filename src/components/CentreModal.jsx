import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
// import { CloseButton } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';

import ListGroupItem from './ListGpItem';

function CentreModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Header>
      <Modal.Body>
        {props.content === null ?
          <></>
          :
          <ListGroup>
            <ListGroupItem title="Lines" info={props.content.Lines} />
            {props.content["Step free Info"] === "" ? <></> : <ListGroupItem title="Step free access" info={props.content["Step free Info"]} />}
            {props.content["Borough"] === "" ? <></> : <ListGroupItem title="Borough" info={props.content["Borough"]} />}
            {props.content["Zones"] === "" ? <></> : <ListGroupItem title="Zones" info={props.content["Zones"]} />}
            {props.content["Opening date"] === "" ? <></> : <ListGroupItem title="Opening date" info={props.content["Opening date"]} />}
            {props.content["ws_description"] === "" ? <></> :
              <ListGroupItem
                title="Woodstock has been here before!"
                info={
                  <div>
                    <p>{props.content["ws_description"]}</p>
                    {props.content["ws_image"] === ""
                      ? <></>
                      :
                      <Row className="justify-content-md-center">
                        <Col md={6} xs={10}>
                          <Image src={props.content["ws_image"]} fluid />
                        </Col>
                      </Row>
                    }
                  </div>
                }
              />}
          </ListGroup>
        }
      </Modal.Body>
    </Modal>
  );
}

export default CentreModal;