import React from 'react';
import { translate } from 'react-i18next';


const Footer = ({ t }) => (
  <div>
    {t('pureComponent')}
  </div>
);

Footer.propTypes = {
};

export default translate('common')(Footer);
