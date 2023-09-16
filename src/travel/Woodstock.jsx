import React, { useRef, useEffect, useState } from "react";
//import { SvgLoader, SvgProxy } from 'react-svgmt';
//import Alert from 'react-bootstrap/Alert';
import * as d3 from "d3";

import CentreModal from '../components/CentreModal';

import './Woodstock.css';

import stationData from './stations.json';
//import SvgOriginalMap from "./optimised_map";
import { ReactComponent as MapSVG } from './original_map.svg';
import woodstock_stn from './../images/woodstock_stn.webp';

function WoodstockTravels({ postdata }) {

    // const width = window.innerWidth;
    // const [isMobile, setMobile] = useState(false);

    const svgRef = useRef();
    // const [selectedStation, setSelectedStation] = useState("Hover over a station for details!");
    const [infoTip, setInfoTip] = useState(null);
    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        
        // FILTER FUNCTIONS
        const filter_stations = (input) => {
            var attr = d3.select(input)._groups[0][0].getAttributeNS('http://www.w3.org/1999/xlink', 'href');
            //list.push(d3.select(input)._groups[0][0].id);
            //console.log(list);
            return attr.includes("#st") || attr.includes("wheelchair") || attr.includes("base") || attr.includes("crutch") || attr.includes("int") || attr.includes("cap") || attr.includes("term") || attr.includes("hub");
        };

        /*
        if (width < 620) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        */

        var svg = d3.select(svgRef.current);
        
        // Append information to each station, and if applicable, post information
        svg.selectAll("use")
            .filter(function (d) {
                return filter_stations(this);
            })
            .each(function (d, i) {
                var station_name = d3.select(this)._groups[0][0].id;
                if (station_name !== "") {
                    for (const item of stationData) { // Loop all stations
                        //console.log(item);
                        if (item.ID === station_name) {
                            for (const post of postdata) {
                                if (post.station_ID === station_name) {
                                    item.ws_description = post.description;
                                    item.ws_image = post.image;
                                    console.log("printattribute")

                                    var x=0;
                                    var y=0;
                                    if (d3.select(this)._groups[0][0].attributes.x) {
                                        x = d3.select(this)._groups[0][0].attributes.x.value;
                                        y = d3.select(this)._groups[0][0].attributes.y.value;
                                    } else if (d3.select(this)._groups[0][0].attributes.transform) {
                                        var t_string = d3.select(this)._groups[0][0].attributes.transform.value;
                                        x = t_string.split('(')[1].split(',')[0];
                                        y = t_string.split('(')[1].split(',')[1].split(')')[0];
                                    } else {

                                    }
                                    
                                    // Redner a woodstock on stations with posts
                                    svg.append("svg:image")
                                        .attr("id", `ws_${item.ID}`)
                                        .attr('x', x)
                                        .attr('y', y)
                                        .attr('height', 40)
                                        .attr("transform", "translate(-15,-20)")
                                        .attr("xlink:href", woodstock_stn);

                                    svg.select(`image#ws_${item.ID}`)
                                        .datum(item)
                                        .on("mouseover", datum => {
                                            svg.select(`image#ws_${item.ID}`).attr('height', 60);
                                            if (datum.srcElement.id !== "") {
                                                var stationInfo = datum.srcElement.__data__;
                                                //setSelectedStation(datum.srcElement.id);
                                                setInfoTip(stationInfo);
                                                console.log(stationInfo);
                                            }
                                        })
                                        .on("click", datum => {
                                            if (datum.srcElement.id !== "") {
                                                //setSelectedStation(datum.srcElement.id);
                                                handleShow();
                                            }
                                        })
                                        .on("mouseout",function(){
                                            svg.select(`image#ws_${item.ID}`).attr('height', 40);
                                          })
                                        .style("cursor", "pointer");
                                        break;

                                }
                            }
                            svg.select(`#${station_name}`).datum(item);
                            break;
                        }
                    }
                }
            }
            );

        svg.selectAll("use")
            .filter(function (d) {
                return filter_stations(this);
            })
            .on("mouseover", datum => {
                //console.log("hovered feature id:" + datum.srcElement.id + ", baseVal:" + datum.srcElement.href.baseVal);
                if (datum.srcElement.id !== "") {
                    var stationInfo = datum.srcElement.__data__;
                    //console.log(stationInfo);
                    //setSelectedStation(datum.srcElement.id);
                    setInfoTip(stationInfo);
                }
            })
            .on("click", datum => {
                if (datum.srcElement.id !== "") {
                    console.log(datum.srcElement);
                    //setSelectedStation(datum.srcElement.id);
                    handleShow();
                }
            })
            .style("cursor", "pointer")

        svg.selectAll("#Bank_Monument_hub")
            .on("mouseover", datum => {
                if (datum.srcElement.id !== "") {
                    console.log("Hovered over bank monument hub")
                    //setSelectedStation(datum.srcElement.id);
                }
            })
            .on("click", datum => {
                if (datum.srcElement.id !== "") {
                    //setSelectedStation(datum.srcElement.id);
                    handleShow();
                }
            })
            .style("cursor", "pointer");

    }, [postdata]);


    return (
        <main>
            {/* {isMobile ?
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: "1%", top: "1%" }}>{selectedStation}</Alert>
                :
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: "1%", top: "1%", width: "300px" }}>{selectedStation}</Alert>
            } */}

            <div className="scrolling-wrapper">
                <MapSVG ref={svgRef} />
            </div >

            {infoTip === null ?
                <CentreModal
                    title="Station placeholder"
                    content={null}
                    show={show}
                    onHide={() => setShow(false)}
                />
                :
                <CentreModal
                    title={infoTip.Station}
                    content={infoTip}
                    show={show}
                    onHide={() => setShow(false)}
                />
            }
        </main>
    );
}

export default WoodstockTravels;