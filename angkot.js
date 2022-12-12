function Angkot(namaSupir, trayek, penumpang, kas) {
  this.namaSupir = namaSupir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
};

var angkot1 = new Angkot('Joko', ['Tembalang', 'Banyumanik'], [], 0);
var angkot2 = new Angkot('Boni', ['Gayamsai', 'Kaligawe'], [], 0);