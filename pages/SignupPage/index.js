import React from 'react';
import { translate } from 'react-i18next';
import i18n from 'i18n';

const SignupPage = ({ t }) => (
  <div>
    {t('signup')}
  </div>
);

// SignupPage.propTypes = {
//
// };

export default translate('signup', { i18n } )(SignupPage);
// export default translate('signup')(SignupPage);
