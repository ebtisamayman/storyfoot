import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Category = ({filterByCategory,allCategory}) => {
  const onFilter = (category) => {
    filterByCategory(category);
  }
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <button onClick={()=>onFilter('الكل')} className="bttn  mx-2">الكل</button>
          <button onClick={()=>onFilter('فطار')} className="bttn  mx-2">الإفطار</button>
          <button onClick={()=>onFilter('غداء')} className="bttn  mx-2" >الغداء</button>
          <button onClick={()=>onFilter('عشاء')} className="bttn  mx-2">العشاء</button>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
