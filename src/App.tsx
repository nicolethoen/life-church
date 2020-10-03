import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import Header from 'components/Header';
import './app.css'

function App() {
  return (
    <Root>
      <Header />
      <div className="lc-content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
        <footer>
            <div>For more information, email <a href="mailto:lifechurch.ayer@gmail.com">lifechurch.ayer@gmail.com</a></div>
            <div>Daughter church of <a href="http://www.faithevfree.org">Faith Evangelical Free Church</a> in Acton, MA</div>
        </footer>
    </Root>
  )
}

export default App
