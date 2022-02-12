import React from 'react';
import * as ReactDOM from 'react-dom';
import { Select } from '../src/Select';

describe('Select', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
