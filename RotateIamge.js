let matrix = [[1,2,3],[4,5,6],[7,8,9]];
/*
Q. Rotate Image in plance 
leetcode Q.no.48
*/

for(let i =0; i<matrix.length;i++){
    for(let j=i;j<matrix.length;j++){
        let temp = matrix[i][j]
        matrix[i][j]=matrix[j][i]
        matrix[j][i]=temp
    }
    
}
for(let i =0;i<matrix.length;i++){
    let k =0 , j=matrix.length-1;
    while(k<j){
        let temp = matrix[i][k]
        matrix[i][k]=matrix[i][j]
        matrix[i][j]=temp
        k++
        j--
    }
}
console.log(matrix)