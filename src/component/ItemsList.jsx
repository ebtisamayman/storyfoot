import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item, index) => {
          return (
            <Col sm="12" className="mb-3" key={index}>
              <Card className="d-flex flex-row" style={{ backgroundColor: "#f8f8f8" }}>
                <Card.Img variant="top" src={item.imgurl} alt="Item Image" />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>
                  <Card.Text className="py-3">
                    <div className="item-description">{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد أصناف</h3>
      )}
    </Row>
  );
};

export default ItemsList;
