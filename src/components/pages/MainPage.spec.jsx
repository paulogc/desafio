import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';
import GameContainer from '../game/GameContainer';

describe('<MainPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainPage />);
  });

  it('should render GameContainer component', () => {
    expect(wrapper.find(GameContainer)).toHaveLength(1);
  });
});
