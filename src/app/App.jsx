import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Editor, RenderPage } from '../editor'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/editor/store/:storeId'
            element={<Editor headerPath="/store" />}
          />
          <Route
            path='/store/:storeId'
            element={<RenderPage headerPath="/store" />}
          />
          <Route
            path='/editor/store/:storeId/item/:itemId'
            element={<Editor headerPath="/item" />}
          />
          <Route
            path='/store/:storeId/item/:itemId'
            element={<RenderPage headerPath="/item" />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
