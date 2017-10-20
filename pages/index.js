import React from 'react';
import Page from 'components/Page';
import HomePage from 'pages/HomePage';
import { I18nextProvider } from 'react-i18next';
import i18n from './../i18n';


class App extends React.Component {

  render() {
    return (
      <I18nextProvider i18n={i18n} initialLanguage='de'>
        <Page>
          <HomePage />
          {/* <Route to='/' component='HomePage' />
          <Route to='/signup' component='SignupPage' />
          <Route to='/login' component='LoginPage' />
          <Route to='/profile' component='ProfilePage' />
          <Route to='/workout' component='EventDetailPage' /> */}
        </Page>
      </I18nextProvider>
    );
  }
}

export default App;
