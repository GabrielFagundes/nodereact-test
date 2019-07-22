import React from 'react'
import PageHeader from './PageHeader'
import PageContent from './PageContent';
import Menu from '../menu/Menu';

const PageContainer = ({ children }) => (
  <div className="page">
    <Menu />
    <PageHeader />
    <PageContent children={children} />
  </div>
)

export default PageContainer;