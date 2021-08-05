
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix != undefined){
    let rez = matrix.map((item,index)=>{
      if(index % 2 > 0){
        return item.sort((a,b)=>b - a)
      }else{
        return item.sort((a,b)=>a - b)
      }
    })
    return rez.flat()
  }
  return [];
}
