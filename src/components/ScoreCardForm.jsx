import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import ScoreRow from './ScoreRow';

const ScoreCardForm = () => (
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
                <ScoreRow parentName="scores" index={0} distance={10} />
                <ScoreRow parentName="scores" index={1} distance={15} />
                <ScoreRow parentName="scores" index={2} distance={20} />
                <ScoreRow parentName="scores" index={3} distance={25} />
                <ScoreRow parentName="scores" index={4} distance={30} />

                <button type="submit">
                  Submit
                </button>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default ScoreCardForm;