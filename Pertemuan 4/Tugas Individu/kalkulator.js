function tambah(bil1,bil2) {
	var bil1 = document.getElementById('bil1').value;
	var bil2 = document.getElementById('bil2').value;
	var hasil = parseInt(bil1) + parseInt(bil2);
	if(!isNaN(hasil)) {
		document.getElementById('hasil').value = hasil;
	}
}