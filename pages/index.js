import React from 'react';
import { translate } from 'react-i18next';
import i18n from './../i18n';
import { Link } from './../routes';
import Page from 'components/Page';
import SignupPage from 'pages/signup';

class App extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <Page>
        <div>
          {/* <section>--Header</section> */}

          <section>{t('upcomingWorkouts')}</section>

          <section>
            <Link route="signup"><a>{t('signup:try')}</a></Link>
          </section>
          <section>
            <Link route="login"><a> ### LogIn ### </a></Link>
          </section>

          {/* <section>--Places</section>
          <section>--Customer quotes</section>
          <section>--Groups</section>
          <section>--Newsletter</section> */}
        </div>
      </Page>
    );
  }
}


const ns = ['home', 'signup'];
const Extended = translate(ns, { i18n, wait: process.browser })(App)
Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ns)
  return {}
}

export default Extended
