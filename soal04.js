<!DOCTYPE html>
<html>
<head>
	<title>Soal 4</title>
</head>
<body>
	<p id="tampil"></p>

</body>
<script type="text/javascript">
	var angka =prompt('Masukkan Bilangan Ganjil : ');
	if(angka%2!=0)
	cetak_gambar(angka)
	else
		alert("Inputan Harus bilangan Ganjil")
	function cetak_gambar(jlh){
		var data="";
		var i = 0,j=0;

		for(i=1;i<=jlh;i++){
			for(j=1;j<=jlh;j++){
				// if(i==1 || i==jlh || j==((jlh+1)/2))
				if(i==1 || i==jlh || j==Math.ceil(jlh/2))
					data+='x    ';
				else
				data+='=    ';
			console.log((jlh+1)/2)
			}
			data+='<br>';
		}
		document.getElementById("tampil").innerHTML=data;
	}
</script>
</html>