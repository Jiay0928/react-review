import { useState } from 'react'

import './App.css'
import { makeNextMove } from './until'
interface TictactoeProps {
    numOfPlayers: number;
  }
const Tictactoe : React.FC<TictactoeProps> = ({numOfPlayers})  => {
    const [player, setPlayer] = useState(0)
    const [grid, setGrid] = useState([["", "", ""], ["", "", ""], ["", "", ""]])
    const clickBoxFor2Players = (i:number, j:number) => {
      if (grid[i][j] == ""){
        const newGrid = [[...grid[0]],[...grid[1]], [...grid[2]] ]
        if (player == 0){
          newGrid[i][j] = "O"
          
        }else{
          newGrid[i][j] = "X"
        }
        setGrid(newGrid)
        setPlayer((oldState) => (1 - oldState))
      }
  
    }
    const clickBoxFor1Players = (i:number, j:number) => {
        if (grid[i][j] == ""){
          let newGrid = [[...grid[0]],[...grid[1]], [...grid[2]] ]
          if (player == 0){
            newGrid[i][j] = "O"
            
          }else{
            newGrid[i][j] = "X"
          }
          setGrid(newGrid)
          newGrid = [[...newGrid[0]],[...newGrid[1]], [...newGrid[2]] ]
          makeNextMove(newGrid)
          setTimeout(() => {setGrid(newGrid)}, 100)

          
        }
    
      }
  
    return (
      <>
        <table className='mytable'>
            <tbody>
              {grid.map((row, index) => (
                <tr key={index}>
                  {row.map((val, i) => (
                    <td key={`${index}+${i}`} onClick={() => {
                        if (numOfPlayers === 1){
                            clickBoxFor1Players(index, i)
                        }else{
                            clickBoxFor2Players(index, i)
                        }
                        }}>
                      {val}
                    </td>
                  ))}
                </tr>
  
              ))}
  
            </tbody>
        </table>
      </>
    )
  }

export default Tictactoe
  