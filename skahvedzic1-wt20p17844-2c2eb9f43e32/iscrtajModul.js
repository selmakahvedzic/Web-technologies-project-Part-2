let Tabela = (function () {

  var iscrtajRaspored = function (div, dani, satPocetak, satKraj) {

    if (satPocetak >= satKraj || satPocetak < 0 || satPocetak >= 24 || satKraj < 0 || satKraj >= 24 || satPocetak % 1 !== 0 || satPocetak % 1 !== 0) {
      let error = "Greška";
      div.innerHTML = error;
      return;
    }


    var tijelo = document.getElementsByTagName("body")[0];
    var tabela = document.createElement("table");
    var tijeloTabele = document.createElement("tbody");


    var sati1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


    for (var i = 0; i < dani.length + 1; i++) {
      var red = document.createElement("tr");
      for (var j = 0; j <= 2 * (satKraj - satPocetak); j++) {
        var celija = document.createElement("td");
        if (j == 0 && i > 0) {
          var tekst = document.createTextNode(dani[i - 1]);
        }
        else if (i == 0 && j % 2 != 0 && satPocetak % 2 == 0) {
          celija.colSpan = 3;
          if (j < (satKraj - satPocetak) / 2) {
            var tekst = document.createTextNode(sati1[j] + satPocetak - 1 + ":00");
          } else if (j > ((satKraj - satPocetak) / 2) && j < (satKraj - satPocetak)) {
            var tekst = document.createTextNode(sati1[j] + satPocetak + ":00");
          }
        } else if (i == 0 && j > 0 && j % 2 == 0 && satPocetak % 2 != 0) {
          celija.colSpan = 3;
          if (j < (satKraj - satPocetak) / 2) {
            var tekst = document.createTextNode(sati1[j] + satPocetak - 1 + ":00");
          } else if (j > ((satKraj - satPocetak) / 2) && j < (satKraj - satPocetak)) {
            var tekst = document.createTextNode(sati1[j] + satPocetak + ":00");
          }
        } else {
          var tekst = document.createTextNode(" ");
        }

        celija.appendChild(tekst);
        red.appendChild(celija);
      }

      tijeloTabele.appendChild(red);
    }

    tabela.appendChild(tijeloTabele);
    tijelo.appendChild(tabela);

  }



  var dodajAktivnost = function (raspored, naziv, tip, vrijemePocetak, vrijemeKraj, dan) {



    if (raspored === null || typeof raspored === 'undefined' || raspored.length <= 0) {
      alert('Greška - raspored nije kreiran');
      return;
    }


    if (vrijemePocetak >= vrijemeKraj || vrijemePocetak < 0 || vrijemePocetak >= 24 || vrijemeKraj < 0 || vrijemeKraj >= 24 ||
      (vrijemePocetak % 1 != 0 && vrijemePocetak % 1 != 0.5) || (vrijemeKraj % 1 != 0 && vrijemeKraj % 1 != 0.5)) {
      alert("Greška - u rasporedu ne postoji dan ili vrijeme u kojem pokušavate dodati termin");
      return;
    }


    var cells = document.getElementsByTagName("td");
    var redovi = document.getElementsByTagName("tr");
    var day = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'];



    //Prvo nađemo indeks kolone u koju ubacujemo 
    for (var d = 0; d < day.length; d++) {
      if (dan == day[d]) {
        var pom = d;
      }
    }



    //Sad idemo kroz redove i u red sa indeksom i==pom+1 ubacujemo u kolone šta treba
    for (var i = 1; i < redovi.length; i++) {
      if (i == pom + 1) {
        var red = redovi[i];
        for (var j = 0; j < cells.length; j++) {
          if (j == (2 * (vrijemePocetak - 8) + 1)) {
            var cell = red.cells[j];
            //Provjerimo da li već ima nešto u ćeliji
            if (cell.colSpan > 1) {
              alert("Greška - u rasporedu ne postoji dan ili vrijeme u kojem pokušavate dodati termin");
            }
            cell.colSpan = 2 * (vrijemeKraj - vrijemePocetak);
            if ((vrijemeKraj - vrijemePocetak) % 1 == 0) {
              cell.style.borderRight = 'solid thin';
            }
            cell.innerText = naziv + "\n" + tip + "\n" + cell.innerText;
            cell.style.backgroundColor = "rgb(222,230,239)";
          }

        }
      }
    }



    for (var i = 1; i < redovi.length; i++) {
      if (i == pom + 1) {
        var red = redovi[i];
        for (var j = 0; j < cells.length; j++) {
          for (var k = 2 * (vrijemePocetak - 7); k < 2 * (vrijemeKraj - 7) - 1; k++) {
            var cell = red.cells[k];
            cell.style.display = 'none';

          }
        }
      }
    }
  }

  return {
    iscrtajRaspored: iscrtajRaspored,
    dodajAktivnost: dodajAktivnost
  }

}());
