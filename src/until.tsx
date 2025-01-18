const makeNextMove = (grid:string[][]) => {
    for (let i = 0; i < 3; i++){
        let countX = 0
        let countO = 0
        for (let j = 0; j < 3; j++){
            if (grid[i][j] === "X"){
                countX += 1
            }
            if (grid[i][j] === "O"){
                countO += 1
            }
        }
        if (countX == 2 || countO == 2){
            for (let j = 0; j < 3; j++){
                if (grid[i][j] === ""){
                    grid[i][j] = "X"
                    return
                }
                
            }
            
            
        }
    }
    for (let i = 0; i < 3; i++){
        let countX = 0
        let countO = 0
        for (let j = 0; j < 3; j++){
            if (grid[j][i] === "X"){
                countX += 1
            }
            if (grid[j][i] === "O"){
                countO += 1
            }
        }
        if (countX == 2 || countO == 2){
            for (let j = 0; j < 3; j++){
                if (grid[j][i] === ""){
                    grid[j][i] = "X"
                    return
                }
                
            }
            
            
        }
    }
    {
        let countX = 0
        let countO = 0
        for (let i = 0; i < 3; i++){
            if (grid[i][i] === "X"){
                countX += 1
            }
            if (grid[i][i] === "O"){
                countO += 1
            }
            
        }
        if (countX == 2 || countO == 2){
            for (let i = 0; i < 3; i++){
                if (grid[i][i] === ""){
                    grid[i][i] = "X"
                    return
                }
                
                
            }
            

        }
    }
    {
        let countX = 0
        let countO = 0
        for (let i = 0; i < 3; i++){
            if (grid[i][3-i-1] === "X"){
                countX += 1
            }
            if (grid[i][3-i-1] === "O"){
                countO += 1
            }
            
        }
        if (countX == 2 || countO == 2){
            for (let i = 0; i < 3; i++){
                if (grid[i][3-i-1] === ""){
                    grid[i][i] = "X"
                    return
                }
                
                
            }
            

        }
    }
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (grid[i][j] === ""){
                grid[i][j] = "X"
                return
            }
            
        }
    }
    

}
export {makeNextMove}