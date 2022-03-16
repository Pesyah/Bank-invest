import RegForm from './components/organizms//RegForm/RegForm'
import DefaultPage from './components/pages/DefaultPage/DefaultPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './actions/user';

function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      dispatch(auth())
    }
  }, [])

  return (
    isAuth ? 
    <>
    <DefaultPage/>
    </>
    :
      <RegForm/> 
  );
}

export default App;
