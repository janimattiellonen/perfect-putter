import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import ScoreRow from './ScoreRow';

const ScoreCardForm = ({ scoreCard, round }) => {
  const getScore = (distance) => {
    console.log("ooo: " + JSON.stringify(scoreCard.rounds[1]));
    const foo = scoreCard.rounds[1].get(distance.toString());

    console.log("foo: " + JSON.stringify(foo));

    return foo;
  };

  console.log("aa: " + JSON.stringify(scoreCard));
  return(
    <div>
      <Formik
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
      }}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="scores"
              render={arrayHelpers => (
                <div>
                  <ScoreRow parentName="scores" score={getScore(10)} index={0} distance={10} />
                  <ScoreRow parentName="scores" score={getScore(15)} index={1} distance={15} />
                  <ScoreRow parentName="scores" score={getScore(20)} index={2} distance={20} />
                  <ScoreRow parentName="scores" score={getScore(25)} index={3} distance={25} />
                  <ScoreRow parentName="scores" score={getScore(30)} index={4} distance={30} />
                </div>
              )}
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