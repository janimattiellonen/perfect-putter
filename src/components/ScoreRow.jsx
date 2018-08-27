import React from 'react';
import { Field } from 'formik';
import { Button, Checkbox } from 'react-bootstrap';

const ScoreRow = ({parentName, index, distance, score}) => {

  const getValue = () => score.score;

  return (
    <div className="foo">
      <Button>-</Button>
      <span className="bar">{distance}:</span>
      <span>{getValue()}</span>
      <Button>+</Button>

      <Checkbox>
        First in +2
      </Checkbox>

      <Checkbox>
        Last in +2
      </Checkbox>

      <Checkbox>
        All made +5
      </Checkbox>
    </div>
  );
};

export default ScoreRow;