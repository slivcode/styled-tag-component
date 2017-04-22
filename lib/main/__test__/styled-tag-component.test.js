"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_tag_component_1 = require("../styled-tag-component");
var enzyme_1 = require("enzyme");
var react_1 = require("react");
describe('[StyledTagComponent] suite', function () {
    var R = function (f) { return f(); };
    test('innerRef is called', function () {
        var E = styled_tag_component_1.StyledTagComponent({});
        var f = jest.fn();
        enzyme_1.mount(react_1.createElement(E, { innerRef: f }));
        expect(f).toBeCalled();
    });
    test('no class attribute if no cn', function () {
        var E = styled_tag_component_1.StyledTagComponent({});
        var $ = enzyme_1.shallow(react_1.createElement(E));
        expect($.html()).not.toMatch('class');
    });
    test('style', function () {
        var E = styled_tag_component_1.StyledTagComponent({
            ep: ['isActive'],
            style: function (_a) {
                var isActive = _a.isActive;
                return ({
                    color: [
                        [isActive, 'red'],
                        [true, 'blue'],
                    ],
                    background: 'red',
                });
            },
        });
        var $ = enzyme_1.shallow(react_1.createElement(E, { isActive: true }, 'style'));
        expect($.html()).toMatchSnapshot();
        $.setProps({ isActive: false });
        expect($.html()).toMatchSnapshot();
    });
    test('className', function () {
        var E = styled_tag_component_1.StyledTagComponent({
            ep: ['isActive'],
            cn: function (_a) {
                var isActive = _a.isActive;
                return [
                    [true, 'base'],
                    [isActive, 'active'],
                ];
            },
        });
        var $ = enzyme_1.shallow(react_1.createElement(E, { isActive: true }));
        expect($.html()).toMatchSnapshot();
        $.setProps({ isActive: false });
        expect($.html()).toMatchSnapshot();
    });
    test('tagName', function () {
        var E = styled_tag_component_1.StyledTagComponent({
            tag: 'div',
        });
        expect(enzyme_1.shallow(react_1.createElement(E)).html()).toMatchSnapshot();
        var L = styled_tag_component_1.StyledTagComponent({
            tag: 'li',
        });
        expect(enzyme_1.shallow(react_1.createElement(L)).html()).toMatchSnapshot();
    });
    test('ifNull', function () {
        var E = styled_tag_component_1.StyledTagComponent({
            ep: ['isHidden'],
            nullIf: function (_a) {
                var isHidden = _a.isHidden;
                return isHidden;
            },
        });
        var $ = enzyme_1.shallow(react_1.createElement(E));
        expect($.html()).toMatchSnapshot();
        $.setProps({ isHidden: true });
        expect($.html()).toMatchSnapshot();
    });
});
