import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// TODO: add more tests. 
// -Not sure how to create these tests, since App is not an object-
// When logged in, show logged in view
// On login error, show error message 