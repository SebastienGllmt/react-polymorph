import React from 'react';

import { FormField } from '../source/components/FormField';
import { renderInSimpleTheme } from './helpers/theming';

const renderFormField = () => <div className="render-prop" />;

test('FormField renders correctly', () => {
  const component = renderInSimpleTheme(
    <FormField render={renderFormField} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('FormField renders with label', () => {
  const component = renderInSimpleTheme(
    <FormField
      label="Add a Label"
      render={renderFormField}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('FormField renders with an error', () => {
  const component = renderInSimpleTheme(
    <FormField
      error="Add an Error"
      render={renderFormField}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('FormField is disabled', () => {
  const component = renderInSimpleTheme(
    <FormField
      disabled
      render={({ disabled }) => <span>{disabled.toString()}</span>}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('FormField renders an input element', () => {
  const component = renderInSimpleTheme(
    <FormField
      render={() => <input className="render-prop" />}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
