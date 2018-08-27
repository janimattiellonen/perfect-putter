import React from 'react';
import { Field } from 'formik';
import { Button, Checkbox, Col, Row } from 'react-bootstrap';

const ScoreRow = ({parentName, index, distance, score}) => {

  const getValue = () => score.score;

  return (
    <Row className="score-row">
      <Col xs={4}>
        <Button className="score-minus-btn score-btn btn-danger">-</Button>
        <div className="putts-made">
          <span className="distance-indicator">{distance}:</span>
          <span className="score">{getValue()}</span>
        </div>
        <Button className="score-plus-btn score-btn btn-danger">+</Button>
      </Col>

      <Col className="extra-points" xs={4} >
        <Checkbox>
          First in +2
        </Checkbox>

        <Checkbox>
          Last in +2
        </Checkbox>
      </Col>

      <Col className="extra-points" xs={2}>
        <Checkbox>
          All made +5
        </Checkbox>
      </Col>

      <Col className="total-distance-score" xs={2}>
        <span className="score">{getValue()}</span>
      </Col>
    </Row>
  );
};

export default ScoreRow;