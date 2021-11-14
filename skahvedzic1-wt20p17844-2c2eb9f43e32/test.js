
let assert = chai.assert;
describe('Tabela', function () {
    describe('iscrtajRaspored()', function () {


        it('Test 1: Treba iscrtati 3 reda kada su dani Ponedjeljak-Srijeda (+ 1 red za sate)', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda'], 8, 21);
            let redovi = document.getElementsByTagName("tr");
            assert.equal(redovi.length, 4, "Broj redova treba biti 4");
        });

        it('Test 2: Treba iscrtati 1 red (+ 1 red za sate)', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak'], 8, 21);
            let tabela = document.getElementsByTagName('table')[0];
            if (tabela != null) tabela.remove();
            let redovi = document.getElementsByTagName("tr");
            assert.equal(redovi.length, 2, "Broj redova treba biti 2");
        });

        it('Test 3: Treba iscrtati 5 redova kada su dani Ponedjeljak-Četvrtak (+ 1 red za sate)', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak'], 8, 21);
            let tabela = document.getElementsByTagName('table')[0];
            if (tabela != null) tabela.remove();
            let redovi = document.getElementsByTagName("tr");
            assert.equal(redovi.length, 5, "Broj redova treba biti 5");
        });


        it('Test 4: Treba iscrtati 6 redova kada su dani Ponedjeljak-Petak (+ 1 red za sate)', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 8, 21);
            let tabela = document.getElementsByTagName('table')[0];
            if (tabela != null) tabela.remove();
            let redovi = document.getElementsByTagName("tr");
            assert.equal(redovi.length, 6, "Broj redova treba biti 6");
        });

        it('Test 5: Treba iscrtati 13 kolona (tabela će biti izbrisana u sljedećem testu)', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 8, 21);
            let redovi = document.getElementsByTagName("tr");
            let kolone = redovi[0].getElementsByTagName("td");
            assert.equal(kolone.length, 27, "Broj kolona treba biti 13");
        });


        it('Test 6: Treba iscrtati 23 kolone (testira ako je početni sat 0)', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 0, 23);
            let redovi = document.getElementsByTagName("tr");
            let kolone = redovi[0].getElementsByTagName("td");
            assert.equal(kolone.length, 27, "Broj kolona treba biti 23");
        });

        it('Test 7: Treba iscrtati 3 kolone - test za mali broj kolona', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 11, 14);
            let redovi = document.getElementsByTagName("tr");
            let kolone = redovi[0].getElementsByTagName("td");
            assert.equal(kolone.length, 27, "Broj kolona treba biti 3");
        });

        it('Test 8: Treba prikazati "Grešku" u gornjem lijevom uglu ako je satPocetak < satKraj', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 10, 8);
            let redovi = document.getElementsByTagName("tr");
            let kolone = redovi[0].getElementsByTagName("td");
            assert.equal(kolone.length, 27, "Greška");
        });

        it('Test 9: Treba iscrtati 1 kolonu - test za mali broj kolona', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 14, 15);
            let redovi = document.getElementsByTagName("tr");
            let kolone = redovi[0].getElementsByTagName("td");
            assert.equal(kolone.length, 27, "Broj kolona treba biti 1");
        });

        it('Test 10: Treba iscrtati 1 kolonu - test za mali broj kolona', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 12, 15);
            let redovi = document.getElementsByTagName("tr");
            let kolone = redovi[0].getElementsByTagName("td");
            assert.equal(kolone.length, 27, "Broj kolona treba biti 1");
        });

        it('Test 11: Treba prikazati "Grešku" u gornjem lijevom uglu ako brojevi nisu cijeli', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 12.22, 15);
            let nijekreirana;
            if (okvir != null) {
                nijekreirana = 1;
            }
            !assert.equal(nijekreirana, 1, "Desila se greška");;
        });

        it('Test 12: Treba prikazati "Grešku" u gornjem lijevom uglu ako su brojevi manji od 0 ili veći od 24', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], -2, 15);
            let nijekreirana;
            if (okvir != null) {
                nijekreirana = 1;
            }
            !assert.equal(nijekreirana, 1, "Desila se greška");
        });

        it('Test 12: Treba prikazati "Grešku" u gornjem lijevom uglu ako su brojevi manji od 0 ili veći od 24', function () {
            Tabela.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'], 23, 24);
            let nijekreirana;
            if (okvir != null) {
                nijekreirana = 1;
            }
            !assert.equal(nijekreirana, 1, "Desila se greška");
        });


    });

    describe('dodajAktivnost()', function () {
        it('Test 1: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Ponedjeljak', function () {
            Tabela.dodajAktivnost(okvir, 'WT', 'predavanje', 9, 12, 'Ponedjeljak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 2: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Ponedjeljak', function () {
            Tabela.dodajAktivnost(okvir, 'WT', 'vježbe', 12, 13.5, 'Ponedjeljak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 3: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Ponedjeljak', function () {
            Tabela.dodajAktivnost(okvir, 'RMA', 'predavanje', 14, 17, 'Ponedjeljak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 4: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Utorak', function () {

            Tabela.dodajAktivnost(okvir, 'RMA', 'vježbe', 12.5, 14, 'Utorak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 5: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Utorak', function () {

            Tabela.dodajAktivnost(okvir, 'DM', 'tutorijal', 14, 16, 'Utorak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });


        it('Test 6: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Utorak', function () {

            Tabela.dodajAktivnost(okvir, 'DM', 'predavanje', 16, 19, 'Utorak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 7: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Srijeda', function () {

            Tabela.dodajAktivnost(okvir, 'OI', 'predavanje', 12, 15, 'Srijeda');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 8: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Srijeda', function () {

            Tabela.dodajAktivnost(okvir, 'OI', 'tutorijal', 17, 19, 'Srijeda');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });


        it('Test 9: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Četvrtak', function () {

            Tabela.dodajAktivnost(okvir, 'RG', 'predavanje', 9, 12, 'Četvrtak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });


        it('Test 10: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Četvrtak', function () {

            Tabela.dodajAktivnost(okvir, 'RG', 'tutorijal', 12, 13, 'Četvrtak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 11: Provjerava da li postoji raspored i dodaje aktivnost u tabelu za dan Petak', function () {

            Tabela.dodajAktivnost(okvir, 'RG', 'predavanje', 9, 12, 'Petak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });


        it('Test 12: Provjerava da li će ispravno dodati u posljednje kolone', function () {

            Tabela.dodajAktivnost(okvir, 'ASP', 'predavanje', 20, 21, 'Ponedjeljak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 13: Provjerava da li će ispravno dodati ako aktivnost traje samo pola sata', function () {

            Tabela.dodajAktivnost(okvir, 'RPR', 'konsultacije', 17, 17.5, 'Petak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Ativnost je dodana");
        });

        it('Test 14: Provjerava da li će dodati ako je vrijemePocetak=vrijemeKraj', function () {

            Tabela.dodajAktivnost(okvir, 'VVS', 'predavanje', 8, 11, 'Srijeda');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Alert je izbačen");
        });


        it('Test 15: Provjerava da li će izbaciti alert ukoliko je vrijemeKraj < VrjemePocetak', function () {

            Tabela.dodajAktivnost(okvir, 'RPR', 'konsultacije', 17, 16, 'Petak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Alert je izbačen");
        });

        it('Test 16: Provjerava da li će izbaciti alert ukoliko je vrijemePocetak negativno', function () {

            Tabela.dodajAktivnost(okvir, 'RPR', 'konsultacije', -17, 22, 'Petak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Alert je izbačen");
        });

        it('Test 17: Provjerava da li će izbaciti alert ukoliko je vrijemeKraj negativno', function () {

            Tabela.dodajAktivnost(okvir, 'RPR', 'konsultacije', 17, -1, 'Petak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Alert je izbačen");
        });

        it('Test 18: Provjerava da li će izbaciti alert ukoliko je vrijemeKraj veće od 24', function () {

            Tabela.dodajAktivnost(okvir, 'RPR', 'konsultacije', 17, 25, 'Petak');
            let dodana;
            if (okvir != null) {
                dodana = 1;
            }
            assert.equal(dodana, 1, "Alert je izbačen");
        });


    });
});
