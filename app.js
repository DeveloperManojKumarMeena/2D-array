 //Q. Best Of Approch X Pattern sum of a matrix
 let mat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]
 let sum = 0;
     let n = mat.length;

    for(let i = 0; i<n;i++){
        sum+=mat[i][i]

        if (i !== n - 1 - i) {
            sum += mat[i][n - 1 - i];
        }
    }
//    console.log(sum)
   //Time Complexity = O(n)

   //Q.Traversal of a 2d array?

   let Qarr = [[1,2,3],[4,5,6],[10,9]]
   let ans = Array.from({length:Qarr[0].length},()=>Array(Qarr.length))


   for(let i=0;i<ans.length;i++){
     
    for(let j=0;j<ans[i].length;j++){
        ans[i][j] = Qarr[j][i]
    }
   }
   console.log(ans)