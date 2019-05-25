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
    //    Jawaban soal 5
    
    document.getElementById("tampil").innerHTML=ganti_kata("purwakarta",'a','o');

    function ganti_kata(words,chr1, chr2){
        var str ="";
        var i=0;
        while(words[i]!='' && words[i] != null){
            if(words[i]===chr1){
                str+=chr2;
                 console.log(str);
            }
            else
            {
                str+=words[i];
            }

            i++;
        }
        return str;
    }
</script>
</body>
</html>