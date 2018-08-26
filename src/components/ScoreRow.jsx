import React from 'react';
import { Field } from 'formik';
import { Button, Checkbox } from 'react-bootstrap';

const ScoreRow = ({parentName, index, distance}) => (
  <div className="foo">
    <Button>-</Button>
    <span className="bar">{distance}:</span>
    <Field name={`${parentName}.${index}.distance`} />
    <Button>+</Button>

    <Checkbox>
      First in +2
    </Checkbox>

    <Checkbox>
      Last in +2
    </Checkbox>
  </div>
);

export default ScoreRow;