import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaUnlockAlt } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import MyMapComponent from "./GoogleMap";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedBrew } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "FIND_CURRENT_BREW", payload: id });
  }, []);
  return (
    <div className="bg">
      <div className="header-list">
        <FaUnlockAlt className="lock" />
        <AiFillBank className="home" />
        <AiFillDatabase className="circle" />
        <h1 className="heading-brewery">Brewery Data | GoogleMap |</h1>
        <SiGooglemaps className="GM" />
      </div>
      <Card className="cord">
        <CardBody className="body">
          <CardTitle className="id">
            <u>ID:</u> <p className="col"> {selectedBrew.id}</p>{" "}
          </CardTitle>
          <CardSubtitle className="name ">
            <u>Name:</u> <p className="col">{selectedBrew?.name}</p>
          </CardSubtitle>
          <CardTitle className="res">
            <u>City:</u> <p className="col">{selectedBrew.city}</p>
          </CardTitle>
          <CardTitle className="res">
            <u>Postal-Code:</u>{" "}
            <p className="col">{selectedBrew?.postal_code}</p>
          </CardTitle>
          <CardTitle className="res">
            <u>Phone:</u> <p className="col">{selectedBrew?.phone}</p>
          </CardTitle>
        </CardBody>
      </Card>
      {Object.keys(selectedBrew).length > 0 &&
        (console.log("result", selectedBrew),
        (
          <div className="goo">
            <MyMapComponent
              isMarkerShown
              lat={selectedBrew?.latitude}
              lon={selectedBrew?.longitude}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        ))}
    </div>
  );
};

export default Details;
