import React from 'react';
import { shallow } from 'enzyme';
import SwitchButton from '../switch-button';

describe('<SwitchButton />', () => {
  it('should accept className', () => {
    const wrapper = shallow(<SwitchButton className="foobar" />);

    expect(wrapper.hasClass('foobar')).toBe(true);
  });
});
