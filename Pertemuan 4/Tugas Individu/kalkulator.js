function cek() {
	if(form.bil1.value == "" || form.bil2.value == ""){
		alert("DATA KOSONG"); //jika ada angka yang kosong
		exit;
	}
}

function tambah() {
	cek(); //panggil function cek
	a = eval(form.bil1.value);
	b = eval(form.bil2.value);
	c = a+b
	form.total.value = c;
}

function kurang() {
	cek();
	a = eval(form.bil1.value);
	b = eval(form.bil2.value);
	c = a-b
	form.total.value = c;
}

function kali() {
	cek();
	a = eval(form.bil1.value);
	b = eval(form.bil2.value);
	c = a*b
	form.total.value = c;
}

function bagi() {
	cek();
	a = eval(form.bil1.value);
	b = eval(form.bil2.value);
	c = a/b
	form.total.value = c;
}

function cancel() {
	form.bil1.value="";
	form.bil2.value="";
	form.total.value = "";
}