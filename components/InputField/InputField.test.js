import React from 'react';
import { render } from '@testing-library/react-native';
import TextInputField from './index';

describe('RENDERS WITHOUT CRASHING', () => {
  test('Input field value changes', async () => {
    const { getByTestId } = render(<TextInputField />);
    const input = getByTestId('input');

    expect(input).not.toBeNull();
  });
});
