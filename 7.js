//pengisian data array
let nama =
[
    "Ana", "Sulaiman", "Putri", "Gatot", "Adit", "Gico"
]

//keterangan
console.log("Data array nama : ");
//tampil data pada array nama
console.log(nama);
//tampil jumlah data yang ada pada array nama
console.log("Jumlah data nama : " + nama.length);

//pembatas array nama lama dan baru
console.log("---------------------------------------");

/*menghapus data pada array nama, 
2 sebagai start indeks yang dihapus,
1 sebagai jumlah data yang dihapus
*/
nama.splice(2,1)
//karena itu nama yang terhapus adalah Putri

//keterangan pembaruan
console.log("Data array nama saat ini : ");
//tampil data pada array nama setelah diperbarui
console.log(nama);
//tamil jumlah data pada array nama setelah diperbarui
console.log("Jumlah data nama saat ini : " + nama.length);