import React from 'react';
import { translate } from 'react-i18next';
import i18n from './../i18n';
import { Link } from './../routes';
import Page from 'components/Page';

const SignupPage = ({ t }) => (
  <Page>
    <div>
      one translation: {t('signup')}
    </div>
    <div>
      a common translation: {t('common:extendedComponent')}
    </div>
    <div>
      an uncommon translation: {t('login:testing')}
    </div>

  </Page>
);

const ns = ['signup', 'login'];
const Extended = translate(ns, { i18n, wait: process.browser })(SignupPage)
Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ns)
  return {}
}

export default Extended
