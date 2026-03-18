 let mat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]
 let sum = 0;
    let n = mat.length;

    for(let i = 0; i<n;i++){
        sum+=mat[i][i]

        if (i !== n - 1 - i) {
            sum += mat[i][n - 1 - i];
        }
    }
   console.log(sum)