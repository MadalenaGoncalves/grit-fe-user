import React from 'react';
import { translate } from 'react-i18next';

const SignupPage = ({ t }) => (
  <div>
    {t('signup')}
  </div>
);

// SignupPage.propTypes = {
//
// };

const SignupPageT = translate('signup')(SignupPage);
export default SignupPageT
