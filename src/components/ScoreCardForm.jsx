import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import ScoreRow from './ScoreRow';

const ScoreCardForm = ({ round, scoreCard, setAllMade }) => {
  const getScore = (distance) => {
    //console.log("AAA: " + JSON.stringify(scoreCard, null, 2));

   // console.log("ooo: " + JSON.stringify(scoreCard.get(String(1))));
    const foo = scoreCard.get(String(round)).get(distance.toString());

    //console.log("round: " + round +  ", foo: " + JSON.stringify(foo));
    console.log("score: " + foo.get('score'));
    return foo.get('score');
  };

  console.log("aa: " + JSON.stringify(scoreCard));

  const initialValues = {
    scores: [
      { puttsMade: 0, score: 0, firstMade: true, lastMade: false, allMade: false },
      { puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false },
      { puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false },
      { puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false },
      { puttsMade: 0, score: 0, firstMade: false, lastMade: false, allMade: false },
    ]
  };

  return(
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
      }}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="scores"
              render={arrayHelpers => (
                <div>
                  <ScoreRow setAllMade={setAllMade} parentName="scores" score={values.scores[0].score} index={0} distance={10} round={round} />
                  <ScoreRow setAllMade={setAllMade} parentName="scores" score={values.scores[1].score} index={1} distance={15} round={round} />
                  <ScoreRow setAllMade={setAllMade} parentName="scores" score={values.scores[2].score} index={2} distance={20} round={round} />
                  <ScoreRow setAllMade={setAllMade} parentName="scores" score={values.scores[3].score} index={3} distance={25} round={round} />
                  <ScoreRow setAllMade={setAllMade} parentName="scores" score={values.scores[4].score} index={4} distance={30} round={round} />
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