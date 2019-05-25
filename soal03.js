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
    //    Jawaban soal 3

    document.getElementById("tampil").innerHTML= count_vowels('hmm');


    function count_vowels(str) {
    var vowelsCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}
</script>
</body>
</html>