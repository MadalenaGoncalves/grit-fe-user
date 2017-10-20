import React from 'react';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Page = (props) => (
  <div>
    <Sidebar />
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

Page.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Page;
