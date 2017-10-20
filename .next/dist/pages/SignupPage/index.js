'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactI18next = require('react-i18next');

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/madalenagoncalves/workspace/gritspot/user/grit-fe-user/pages/SignupPage/index.js';


var SignupPage = function SignupPage(_ref) {
  var t = _ref.t;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, t('signup'));
};

// SignupPage.propTypes = {
//
// };

exports.default = (0, _reactI18next.translate)('signup', { i18n: _i18n2.default })(SignupPage);
// export default translate('signup')(SignupPage);