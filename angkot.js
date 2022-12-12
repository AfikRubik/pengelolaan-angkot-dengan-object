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
  this.hapusPenumpang = function(namaPenumpang, kas) {
    if (this.penumpang.length == 0) {
      return 'Penumpang masih kosong';
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (namaPenumpang == this.penumpang[i]) {
          this.penumpang.splice(i, 1);
          this.kas += kas;
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          return 'Penumpang tidak ditemukan';
        }
      }
    }
  }
};

var angkot1 = new Angkot('Joko', ['Tembalang', 'Banyumanik'], [], 0);
var angkot2 = new Angkot('Boni', ['Gayamsari', 'Kaligawe'], [], 0);