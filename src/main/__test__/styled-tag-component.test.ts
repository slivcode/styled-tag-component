import { StyledTagComponent } from '../styled-tag-component';
import { mount, shallow } from 'enzyme';
import { createElement } from 'react';

describe('[StyledTagComponent] suite', () => {
	let R = (f) => f();
	test('innerRef is called', () => {
		let E = StyledTagComponent({});
		let f = jest.fn();
		mount(createElement(E, { innerRef: f }));
		expect(f).toBeCalled();
	});
	test('no class attribute if no cn', () => {
		let E = StyledTagComponent({});
		let $ = shallow(createElement(E));
		expect($.html()).not.toMatch('class');
	});
	test('style', () => {
		let E = StyledTagComponent<{ isActive }>({
			ep: ['isActive'],
			style: ({ isActive }) => ({
				color: [
					[isActive, 'red'],
					[true, 'blue'],
				],
				background: 'red',
			}),
		});
		let $ = shallow(createElement(E, { isActive: true }, 'style'));
		expect($.html()).toMatchSnapshot();
		$.setProps({ isActive: false });
		expect($.html()).toMatchSnapshot();
	});
	test('className', () => {
		let E = StyledTagComponent<{ isActive }>({
			ep: ['isActive'],
			cn: ({ isActive }) => [
				[true, 'base'],
				[isActive, 'active'],
			],
		});
		let $ = shallow(createElement(E, { isActive: true }));
		expect($.html()).toMatchSnapshot();
		$.setProps({ isActive: false });
		expect($.html()).toMatchSnapshot();
	});
	test('tagName', () => {
		let E = StyledTagComponent({
			tag: 'div',
		});
		expect(shallow(createElement(E)).html()).toMatchSnapshot();
		let L = StyledTagComponent({
			tag: 'li',
		});
		expect(shallow(createElement(L)).html()).toMatchSnapshot();
	});
	test('ifNull', () => {
		let E = StyledTagComponent<{ isHidden }>({
			ep: ['isHidden'],
			nullIf: ({ isHidden }) => isHidden,
		});
		let $ = shallow(createElement(E));
		expect($.html()).toMatchSnapshot();
		$.setProps({ isHidden: true });
		expect($.html()).toMatchSnapshot();
	});
});