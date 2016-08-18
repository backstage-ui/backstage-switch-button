/* global describe, it, expect */
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
    const input = wrapper.find('input');
    expect(input.prop('checked')).toBe(true);
  });

  it('should accept name', () => {
    const wrapper = shallow(<SwitchButton name="myname" />);
    const input = wrapper.find('input');
    expect(input.prop('name')).toBe('myname');
  });

  it('should accept label', () => {
    const wrapper = shallow(<SwitchButton label="mylabel" />);
    const label = wrapper.find('label');

    expect(label.text()).toBe('mylabel');
  });

  it('value default should be true', () => {
    const wrapper = shallow(<SwitchButton />);
    const input = wrapper.find('input');

    expect(input.prop('value')).toBe('true');
  });

  it('value should be customizable', () => {
    const wrapper = shallow(<SwitchButton value="myvalue" />);
    const input = wrapper.find('input');

    expect(input.prop('value')).toBe('myvalue');
  });
});
