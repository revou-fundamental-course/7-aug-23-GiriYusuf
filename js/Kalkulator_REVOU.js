const ButtonLuas = document.querySelector('.popup-Luas');
const ButtonKeliling = document.querySelector('.popup-Keliling');
const popup1 = document.querySelector('.popup-1');
const popup2 = document.querySelector('.popup-2');
const iconClose1 = document.querySelector('.icon-close1');
const iconClose2 = document.querySelector('.icon-close2');

ButtonLuas.addEventListener('click',()=> {
      popup2.classList.remove('active-popup');
      popup1.classList.add('active-popup');
});

ButtonKeliling.addEventListener('click',()=> {
      popup1.classList.remove('active-popup');
      popup2.classList.add('active-popup');
});

iconClose1.addEventListener('click', ()=> {
      popup1.classList.remove('active-popup');
      document.getElementById("popup-L").reset()
      document.getElementById("hasil-luas").innerHTML = ""
});

iconClose2.addEventListener('click', ()=> {
      popup2.classList.remove('active-popup');
      document.getElementById("popup-K").reset()
      document.getElementById("hasil-keliling").innerHTML = ""
});


function hitungLuas() {
      var alas = document.getElementById("alas").value
      var tinggi = document.getElementById("tinggi").value
      var luas = 0.5 * alas * tinggi
      document.getElementById("hasil-luas").innerHTML = "Hasil nya adalah: " + luas 
}
  
function resetLuas() {
      document.getElementById("popup-L").reset()
      document.getElementById("hasil-luas").innerHTML = ""
}
 
function hitungKeliling() {
      var sisi1 = parseFloat(document.getElementById("A").value)
      var sisi2 = parseFloat(document.getElementById("B").value)
      var sisi3 = parseFloat(document.getElementById("C").value)
      var keliling = sisi1 + sisi2 + sisi3
      document.getElementById("hasil-keliling").innerHTML = "Hasil nya adalah: " + keliling
}

function resetKeliling() {
      document.getElementById("popup-K").reset()
      document.getElementById("hasil-keliling").innerHTML = ""
}