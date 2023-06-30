import cn from 'classnames'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import routesConfig from '@routes/routesConfig'
import Header from '../../components/header/Header'

import style from './App.module.css'








const App = () => {


  return (

    <Router>
      <div className={style.wrapper}>
        <Header />
        
        <Routes>
          {routesConfig.map((route, index) => {
            
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.component />}
              />
            )
          })}
        </Routes>
      </div>

    </Router >


  );
}

export default App;
