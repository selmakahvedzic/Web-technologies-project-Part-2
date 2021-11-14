
let okvir = document.getElementById("okvir");
iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 8, 21);
dodajAktivnost(okvir, 'WT', 'predavanje', 9, 12, 'Ponedjeljak');
dodajAktivnost(okvir, 'WT', 'vježbe', 12, 13.5, 'Ponedjeljak');
dodajAktivnost(okvir, 'RMA', 'predavanje', 14, 17, 'Ponedjeljak');
dodajAktivnost(okvir, 'RMA', 'vježbe', 12.5, 14, 'Utorak');
dodajAktivnost(okvir, 'DM', 'tutorijal', 14, 16, 'Utorak');
dodajAktivnost(okvir, 'DM', 'predavanje', 16, 19, 'Utorak');
dodajAktivnost(okvir, 'OI', 'predavanje', 12, 15, 'Srijeda');
dodajAktivnost(okvir, 'RMA', 'tutorijal', 17,19, 'Ponedjeljak'); // kad se poklapaju
dodajAktivnost(okvir, 'RG', 'predavanje', 12,12.22, 'Petak'); // kad brojevi nisu u dobrom formatu
dodajAktivnost(okvir, 'PJP', 'predavanje', 11,9, 'Petak'); // kad je vrijemePocetak>vrijemeKraj*/


/*let drugiokvir = document.getElementsByClassName("drugiokvir");
iscrtajRaspored(drugiokvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 6, 23);
dodajAktivnost(drugiokvir, 'WT', 'vježbe', 9, 10.5, 'Ponedjeljak');
dodajAktivnost(drugiokvir, 'PJP', 'vježbe', 11, 12.5, 'Ponedjeljak');
dodajAktivnost(drugiokvir, 'PWS', 'predavanje', 15, 16.5, 'Ponedjeljak');
dodajAktivnost(drugiokvir, 'PWS', 'vježbe', 17,18.5, 'Ponedjeljak');
dodajAktivnost(drugiokvir, 'RG', 'vježbe', 9, 11, 'Utorak');
dodajAktivnost(drugiokvir, 'OOI', 'predavanje', 12, 15, 'Utorak');
dodajAktivnost(drugiokvir, 'OIS', 'predavanje', 15, 17, 'Utorak');
dodajAktivnost(drugiokvir, 'OIS', 'vježbe', 17, 19, 'Utorak');
dodajAktivnost(drugiokvir, 'WT', 'predavanje', 9, 11, 'Srijeda');
dodajAktivnost(drugiokvir, 'OOI', 'vježbe', 12,13, 'Srijeda'); 
dodajAktivnost(drugiokvir, 'RG', 'predavanje', 9,11, 'Četvrtak');
dodajAktivnost(drugiokvir, 'RG', 'tutorijal', 12,13, 'Četvrtak');
dodajAktivnost(drugiokvir, 'PJP', 'predavanja', 9,12, 'Petak');*/
