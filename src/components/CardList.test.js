import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [{
    id: 1,
    name: 'John Snow',
    username: 'johnSnow',
    email: 'johnsnow@email.com'
  }];

  const wrapper = shallow(<CardList robots={ mockRobots } />);
  expect(wrapper).toMatchSnapshot();
});