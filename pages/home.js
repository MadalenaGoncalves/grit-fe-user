import React from 'react'
import { Link } from './../routes';
import { translate } from 'react-i18next';
import i18n from './../i18n';
import SignupPage from 'pages/signup';

const HomePage = ({ t }) => (
  <div>
    {/* <section>--Header</section> */}

    <section>{t('upcomingWorkouts')}</section>

    <section>
      <Link route="signup"><a>{t('signup:try')}</a></Link>
    </section>

    {/* <section>--Places</section>
    <section>--Customer quotes</section>
    <section>--Groups</section>
    <section>--Newsletter</section> */}
  </div>
)

const Extended = translate(['home', 'common'], { i18n, wait: process.browser })(HomePage)
Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['home', 'common'])
  return {}
}

export default Extended
