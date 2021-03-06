import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './style/reset.scss'
import './style/app.scss'
import './style/mobileApp.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
