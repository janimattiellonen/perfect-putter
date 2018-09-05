import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { List } from 'immutable';

import ScoreRow from './ScoreRow';

const ScoreCardForm = ({ round, scoreCard, setAllMade }) => {
  const getScore = (distance) => {
    //console.log("AAA: " + JSON.stringify(scoreCard, null, 2));

   // console.log("ooo: " + JSON.stringify(scoreCard.get(String(1))));
    const foo = scoreCard.get(String(round)).get(distance.toString());

    //console.log("round: " + round +  ", foo: " + JSON.stringify(foo));
    //console.log("score: " + foo.get('score'));
    return foo.get('score');
  };

 // console.log("aa: " + JSON.stringify(scoreCard));

  const initialValues2 = {
    scores: scoreCard.get("1").toList(),
  };

  console.log("ha: " + JSON.stringify(initialValues2, null, 2));

  const getDistance = (index) => {
    const map = {
      0: 10,
      1: 15,
      2: 20,
      3: 25,
      4: 30,
    };

    return map[index];
  }

  return(
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues2}
        onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
      }}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="scores"
              render={arrayHelpers => {
                console.log("abba: " + JSON.stringify(values, null, 2));
                return values.scores.map((score, index) => {
                  console.log("index: " + index + ", sep: " + JSON.stringify(score, null, 2));
                  return (
                    <ScoreRow setAllMade={setAllMade} parentName="scores" score={score} index={index} distance={getDistance(index)} round={round} />
                  );
                });
              }}
            />

            <div className="clearfix"></div>
            <button type="submit">
              Submit
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default ScoreCardForm;