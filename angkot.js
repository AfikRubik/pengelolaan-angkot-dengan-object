function Angkot(namaSupir, trayek, penumpang, kas) {
  this.namaSupir = namaSupir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  this.tambahPenumpang = function(namaPenumpang) {
    if (this.penumpang.length < 4) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      return 'Penumpang sudah penuh';
    }
  };
};

var angkot1 = new Angkot('Joko', ['Tembalang', 'Banyumanik'], [], 0);
var angkot2 = new Angkot('Boni', ['Gayamsari', 'Kaligawe'], [], 0);