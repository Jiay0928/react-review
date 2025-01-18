import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';

type LoginProps = {
    numOfPlayers: number; // Type for numOfPlayers
    setNumOfPlayers: React.Dispatch<React.SetStateAction<number>>; // Type for setNumOfPlayers
  };

const Login: React.FC<LoginProps> = ({numOfPlayers, setNumOfPlayers}) =>  {
  const navigate = useNavigate();
  

  return (
    <div className='LoginLayout'>
        <label>
          Number Of Players: <input   onChange={(e) => {
            const v = parseInt(e.target.value)
            setNumOfPlayers(v)

          }}/>
        </label>
        <button style={{width: "120px", height: "20px"}} onClick={() => {
            if (numOfPlayers === 1 || numOfPlayers === 2){
                navigate('/play');
            }       
        }}>Start!</button>
    </div>

  )
}
export default Login; 
