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
var Biodata =getBiodata();
console.log('Biodata : '+Biodata);
function getBiodata() {
    var ObjctBiodata={};
    ObjctBiodata.name='Widyawati Sihombing';
    ObjctBiodata.addres='Jakarta';var hobbies='Reading';
    ObjctBiodata.is_married =false;
    ObjctBiodata.school = {highSchool:'SMA N 1 Lintong Nihuta',highSchool:'Politeknik Negeri Medan'};
    ObjctBiodata.skills = [{name:'TOEFL',score:'520'},{name:'maintenance and repair',score:'A'}];
   return JSON.stringify(ObjctBiodata);
}

</script>
</body>
</html>