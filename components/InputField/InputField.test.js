import { fireEvent } from '@testing-library/react-native';
import TextInputField from './index';
import renderer from 'react-test-renderer';

describe('RENDERS WITHOUT CRASHING', () => {
  test('Input field value changes', () => {
    const mock = jest.fn();

    const { getByTestId } = renderer.create(
      <TextInputField onChangeText={mock} />
    );
    const input = getByTestId('input');
    const testValue = 'Hello World';

    fireEvent.changeText(input, testValue);

    expect(mock).toHaveBeenCalledWith(testValue);
  });
});
