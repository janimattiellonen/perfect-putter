import React from 'react';
import { Field } from 'formik';

const ScoreRow = ({parentName, index, distance}) => (
  <div>
    <span>{distance}:</span>
    <Field name={`${parentName}.${index}.distance`} />
  </div>
);

export default ScoreRow;