import React from 'react';
import { translate } from 'react-i18next';
import i18n from './../i18n';
import { Link } from './../routes';
import Page from 'components/Page';

const LoginPage = ({ t }) => (
  <Page>
    <div>
      one translation in the LOGIN page: {t('testing')}
    </div>
  </Page>
);

const ns = ['login'];
const Extended = translate(ns, { i18n, wait: process.browser })(LoginPage)
Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ns)
  return {}
}

export default Extended
