
import { useState } from 'react';
import RegForm from './components/organizms//RegForm/RegForm'
import DefaultPage from './components/pages/DefaultPage/DefaultPage.jsx';
import users from './Data/Users/Users';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('user'))
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem('Auth')) ? true : false)
  const [btnName, setBtnName] = useState('Выйти')
  const [login, setLogin] =useState('')
  const [password, setPassword] =useState('')

  function registration(){
    setAuth(false)
    setBtnName('Выйти')
    localStorage.setItem('Auth', JSON.stringify(false))
   
  }

  function submit(){
    for(let i of users){
      if(i.login===login&&i.password===password){
        setAuth(true)
        setBtnName('Выйти')
        setUsername(i.username)
        localStorage.setItem('user', i.username)
        localStorage.setItem('Auth', JSON.stringify(true))
      }
    }
  }
  return (
    isAuth ? 
    <>
    <DefaultPage 
    username = {username}
    name = {btnName}
    onClick={registration}/>
    </>
    :
      <RegForm 
      login={(e)=> setLogin(e.target.value)}
      password={(e)=> setPassword(e.target.value)}
      name='отправить' 
      onClick={submit}/> 
  );
}

export default App;
