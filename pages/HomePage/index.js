import React from 'react'
import { Link } from './../../routes';
import { translate } from 'react-i18next';
import Page from 'components/Page';
import SignupPage from 'pages/SignupPage';

const HomePage = ({ t }) => (
  <Page>
    {/* <div>--Header</div> */}

    <div>{t('upcomingWorkouts')}</div>

    <div>
      <Link route="signup"><a>{t('signup:try')}</a></Link>
      <div>SIGNUPPAGE SAYS: <SignupPage /></div>
    </div>

    {/* <div>--Places</div>

    <div>--Customer quotes</div>

    <div>--Groups</div>

    <div>--Newsletter</div> */}
  </Page>
)


export default translate(['home', 'signup'])(HomePage)
