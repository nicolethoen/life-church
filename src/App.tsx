import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import logoSrc from 'assets/LifeChurchLogo.png';
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <div className="lc-logo">
          <Link to="/"><img src={logoSrc} height="100"/></Link>
      </div>
      <nav>
        <Link to="/">Order of service</Link>
        <Link to="/announcement-flyer">Announcement Flyer</Link>
        <Link to="/facebook-feed">Facebook page</Link>
        <Link to="/stone-soup">Support Stone Soup</Link>
      </nav>
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
