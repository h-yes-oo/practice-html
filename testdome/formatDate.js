function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let [m, d, y] = userDate.split("/");
  let res = "";
  res += y;
  if(m.length < 2){
      m = '0' + m
  }
  res += m;
  if(d.length < 2){
      d= '0' + d
  }
  res += d;
  console.log(res);
  return(res);
}

console.log(formatDate("12/31/2014"));
console.log(formatDate("4/7/2014"));
