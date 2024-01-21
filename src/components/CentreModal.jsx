import Modal from "react-bootstrap/Modal";
import SquircleBox from "./SquircleBox";

import ListGroupItem from './ListGpItem';
import Lines from "./Lines";

function CentreModal(props) {
  console.log(props)
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div class="gx-4 mb-4">
        {props.content === null ?
          <></>
          :
          <div class="container">
            <div class="row g-4 mt-2">
              <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h1><b>{props.title}</b></h1>
                <Lines lines={props.content.Lines} />
                <div class="mt-4">
                  {props.content["Step free Info"] === "" ? <></> : <SquircleBox title="Step free access ♿" content={props.content["Step free Info"]} appearance="teal" />}
                  {props.content["Borough"] === "" ? <></> : <SquircleBox title="Borough 🏫" content={props.content["Borough"]} appearance="bordered-grey" />}
                  {props.content["Zones"] === "" ? <></> : <SquircleBox title="Zones 🏁" content={props.content["Zones"]} appearance="dark" />}
                  {props.content["Opening date"] === "" ? <></> : <SquircleBox title="Opening date 🗓️" content={props.content["Opening date"]} appearance="bordered-white" />}
                </div>
                <div>
                  <br></br>
                  {props.content.ws_description ?
                    <ListGroupItem
                      title="Woodstock has been here before!"
                      info={
                        <div dangerouslySetInnerHTML={{ __html: props.content["ws_description"] }} />
                      }
                    />
                    : <></>
                  }
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-items-center d-flex justify-content-center">
                {props.content["ws_image"] === ""
                  ? <></>
                  :
                  <img src={props.content["ws_image"]} class="img-fluid" style={{ maxHeight: "600px", borderRadius: 10 }}></img>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </Modal>
  );
}

export default CentreModal;