/*
Q.Give an M*N matrix,return all elements of the matrix in spiral order?
[
[1,2,3],
[4,5,6],
[7,8,9]
]
=> [1,2,3,6,9,8,7,4,5]
*/
let mat = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

let top = 0 , left = 0 ;
let bottom = mat.length-1, right = mat[0].length-1;

let ans = new Array;

while(top<=bottom && left<=right){
    for(let j=left;j<=right;j++){
        ans.push(mat[top][j])
    }
    top++
    for(let i = top; i<=bottom;i++){
        ans.push(mat[i][right])
    }
    right--
    for(let j=right;j>=left;j--){
        ans.push(mat[bottom][j])
    }
    bottom--
    for(let i = bottom; i>=top;i--){
        ans.push(mat[i][left])
    }
    left++
}
console.log(ans)
