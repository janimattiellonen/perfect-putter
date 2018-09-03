import React from 'react';
import { Field } from 'formik';
import { Button, Checkbox, Col, Row } from 'react-bootstrap';

import scoreService from '../score-service';

const ScoreRow = ({ distance, index, parentName, round, score, setAllMade }) => {

  const getValue = () => score.score;

  const getAllMadeLabelValue = () => {
    switch (distance) {
      case 10:
        return 5;

      case 15:
        return 10;

      case 20:
        return 15;

      case 25:
        return 20;

      case 30:
        return 25;
    }
  };

  return (
    <Row className="score-row">
      <Col xs={4}>
        <Button className="score-minus-btn score-btn btn-danger">-</Button>
        <div className="putts-made">
          <span className="distance-indicator">{distance}:</span>
          <span className="score">{score}</span>
        </div>
        <Button className="score-plus-btn score-btn btn-danger">+</Button>
      </Col>

      <Col className="extra-points" xs={4} >
        <Field 
          type="checkbox" 
          name={`scores[${index}]firstTwoMade`} 
        />
        <span>First in +{scoreService.calculateScoreForFirstMade(distance)}</span><br />

        <Field 
          type="checkbox" 
          name={`scores[${index}]lastTwoMade`} 
        />
        <span>Last in +{scoreService.calculateScoreForLastMade(distance)}</span><br/>
      </Col>

      <Col className="extra-points" xs={2}>
        <Field 
          type="checkbox" 
          name={`scores[${index}]allMade`} 
          onClick={() => setAllMade(round, distance)} 
        />
        <span>All made +{scoreService.calculateScoreForAllMade(distance)}</span><br />
      </Col>

      <Col className="total-distance-score" xs={2}>
        <span className="score">{getValue()}</span>
      </Col>
    </Row>
  );
};

export default ScoreRow;