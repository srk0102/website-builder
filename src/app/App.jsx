import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Editor, RenderPage } from '../editor'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/editor/store/:id'
            element={<Editor headerPath="/store" />}
          />
          <Route
            path='/store/:id'
            element={<RenderPage/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
