import React from 'react';
import { translate } from 'react-i18next';


const Footer = ({ t }) => (
  <div>
    I'm the FOOTER: {t('pureComponent')}
  </div>
);

Footer.propTypes = {
};

export default translate('common')(Footer);
