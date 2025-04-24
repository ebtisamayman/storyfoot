import React from 'react';
import Row from 'react-bootstrap/Row';

const Header = () => {
  return (
    <Row className="header-container">
      <div className="col-sm-12 text-center">
        <div className="tittel">قائمة الطعام</div>
        <div className="justify-content-center d-flex">
          <p className="underline"></p>
        </div>
      </div>
    </Row>
  );
};

export default Header;
