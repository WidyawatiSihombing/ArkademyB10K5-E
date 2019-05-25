<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <body>
        <p id="tampil"></p>

    </body>
    <script type="text/javascript">
//    Jawaban soal 2
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 3);
  document.getElementById("tampil").innerHTML= betweenDays(new Date(), tomorrow);

// date array
 function betweenDays(start, end) {

  var
    arr = new Array(),
    currentDate = new Date(start);

  while (currentDate <= end) {
    let current_datetime = new Date(currentDate)
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
    console.log(formatted_date)
    arr.push(formatted_date);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return arr;

}
</script>
</body>
</html>