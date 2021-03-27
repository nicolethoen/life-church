import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import Header from 'components/Header';
import './app.css'

function App() {
  return (
    <Root>
      <div className="lc-body">
        <Header />
        <div className="lc-content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </div>
    </Root>
  )
}

export default App
