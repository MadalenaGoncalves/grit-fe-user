import React from 'react';
import { Link } from './../routes';
import i18n from './../i18n';
import { translate } from 'react-i18next';
import Page from 'components/Page';


class App extends React.Component {
  // static async getInitialProps ({query}) {
  //   // The page component receives the matched URL parameters merged into query
  //   // query.slug
  // }

  render() {
    const { t } = this.props;
    return (
      <Page>
        <div>--Header</div>

        <div>{t('upcomingWorkouts')}</div>

        <div>
          <Link route="signup"><a>{t('signup:try')}</a></Link>
        </div>

        <div>--Places</div>

        <div>--Customer quotes</div>

        <div>--Groups</div>

        <div>--Newsletter</div>
      </Page>
    );
  }
}

const Extended = translate(['home', 'signup'], { i18n, wait: process.browser })(App)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['home', 'signup'])
  return {}
}

export default Extended
