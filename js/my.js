function square(){
  let a = document.sq.sq_a.value;
  console.log(a);
  let b = document.sq.sq_b.value;
  console.log(b);
  let c = document.sq.sq_c.value;
  console.log(c);
  let sol = document.getElementById("sq_sol");
  let d = b * b - 4 * a * c;
  let result;
  if(d < 0){
    result = "корней нет";
  }else if(d == 0){
    result = "два одинаковых корня:<br>x<sub>1</sub> = x<sub>2</sub> = "
    result += -b / (2 * a);
    result += ".";
  }else{
    result = "два разных корня:<br>x<sub>1</sub> = ";
    result += -b / (2 * a) - Math.sqrt(d) / (2 * a);
    result += ", x<sub>2</sub> = ";
    result += -b / (2 * a) + Math.sqrt(d) / (2 * a);
    result += ".";
  }
  console.log(result);
  sol.innerHTML = result;
}