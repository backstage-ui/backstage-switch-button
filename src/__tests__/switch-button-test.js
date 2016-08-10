import React from 'react';
import { shallow } from 'enzyme';
import SwitchButton from '../switch-button';

describe('<SwitchButton />', () => {
  it('should accept className', () => {
    const wrapper = shallow(<SwitchButton className="foobar" />);
    expect(wrapper.hasClass('foobar')).toBe(true);
  });

  it('should be checked', () => {
    const wrapper = shallow(<SwitchButton checked />);
    const input = wrapper.find("input");
    expect(input.prop("checked")).toBe(true);
  });

  it('should accept name', () => {
    const wrapper = shallow(<SwitchButton name="myname" />);
    const input = wrapper.find("input");
    expect(input.prop("name")).toBe("myname");
  });
});
