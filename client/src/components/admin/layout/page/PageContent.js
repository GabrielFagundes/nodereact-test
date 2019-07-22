import React from 'react'

const PageContent = ({ children }) => (
  <div className="page-content">
    <div className="page-content-inner">
      {children}
    </div>
  </div>
)

export default PageContent