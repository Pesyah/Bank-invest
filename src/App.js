
import { useEffect, useState } from 'react';
import RegForm from './components/organizms//RegForm/RegForm'
import DefaultPage from './components/pages/DefaultPage/DefaultPage.jsx';
import coin from './img/coin.gif'
import Shop from './components/pages/Shop/Shop.jsx';
import users from './Data/Users/Users';
import ModalWindow from './components/molecules/ModalWndow/ModalWindow';

function App() {

  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem('Auth')) || false)
  const [login, setLogin] =useState('')
  const [password, setPassword] =useState('')
  const [arrUsers, setArrUsers] =useState(users)
  const [ModalActive, setModalActive] =useState(false)
  const [money, setMoney] = useState( JSON.parse(localStorage.getItem('money')) ||0)

  function registration(){
    setAuth(true)
    setBtnName('Войти')
    localStorage.setItem('Auth', JSON.stringify('true'))
  }

  function submit(){ // Функция проверяет введён ли верно лог и пас.
    
    for(let i of arrUsers){
      if(i.login===login&&i.password===password){
        setAuth(false)
        setBtnName('Выйти')
        localStorage.setItem('Auth', JSON.stringify(false))
      }
    }
  }
  return (

    JSON.parse(localStorage.getItem('Auth')) ?  // Надо входить?
      <RegForm 
      login={(e)=> setLogin(e.target.value)}
      password={(e)=> setPassword(e.target.value)}
      name='отправить' 
      onClick={submit}/> 
    : // Если входить не нужно, пользователь авторизован.
    <>
    <div className="count">
      <p className="count-p"><div className="money"></div><span>{money}</span></p>
      <button onClick={()=> setModalActive(true)}>ok</button>
    </div>
      <DefaultPage 
      name = {'Выйти'}
      onClick={registration}/>
      {/* <Shop money={money}/> */}
      <ModalWindow 
      title='Поздравляем!'
      subtitle='Вы заработали +1 монетку'
      src={coin}
      btnName='получить монетку'
      money = {money} 
      onClick1={()=>{setModalActive(false);setMoney(money+1); localStorage.setItem('money', money+1)}} 
      active = {ModalActive} onClick={()=>setModalActive(false)}/>
    
      </>
  );
}

export default App;
