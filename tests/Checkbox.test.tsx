import React from 'react';
import * as ReactDOM from 'react-dom';
import { Checkbox } from '../src/Checkbox';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
