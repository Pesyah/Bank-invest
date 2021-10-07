
import { useState } from 'react';
import RegForm from './components/organizms//RegForm/RegForm'
import DefaultPage from './components/pages/DefaultPage/DefaultPage.jsx';
import users from './Data/Users/Users';

function App() {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem('Auth'))||false)
  const [btnName, setBtnName] = useState('Войти')
  
  const [login, setLogin] =useState('')
  const [password, setPassword] =useState('')
  const [arrUsers, setArrUsers] =useState(users)

  function registration(){
    setAuth(true)
    setBtnName('Войти')
    localStorage.setItem('Auth', JSON.stringify(isAuth))
   
  }

  function submit(){
    
    for(let i of arrUsers){
      if(i.login===login&&i.password===password){
        setAuth(false)
        setBtnName('Выйти')
        localStorage.setItem('Auth', JSON.stringify(isAuth))
      }
    }
  }
  return (

    isAuth ? 
      <RegForm 
      login={(e)=> setLogin(e.target.value)}
      password={(e)=> setPassword(e.target.value)}
      name='отправить' 
      onClick={submit}/> 
    :
      <DefaultPage 
      name = {btnName}
      onClick={registration}/>
  );
}

export default App;
