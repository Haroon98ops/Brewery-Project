import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useSelector } from "react-redux";

const BreweryCard = () => {
  const navigate = useNavigate();
  const { brewData } = useSelector((state) => state);

  const gotoDetails = (item) => {
    navigate(`/details/${item.id}`);
  };
  return (
    <div className="main-card-flex">
      {!!brewData &&
        brewData.map((item) => (
          <Card className="card-main">
            <CardBody className="card-body">
              <CardTitle
                className="class-name"
                tag="h5"
                onClick={() => gotoDetails(item)}
              >
                <u>{item.name}</u>
              </CardTitle>
              <CardSubtitle className="card-city">{item.city}</CardSubtitle>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default BreweryCard;
