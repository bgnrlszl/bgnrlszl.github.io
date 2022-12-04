/* Feladat:
bevitt adatok "kiköpése" más formátumban

++ bevitt szöveg: ++

call: ha1del
cat-1: ha
cat-2: om
cat-3: cw
score: 1500
email: ha1del.qth@gmail.com 
qso: 1210 0600 40m cw ha1at 599 cf 599 001
name (75c): Bognár László
address (75c)

++ kiadott szöveg: ++ 
START-OF-LOG: 2.0
CALLSIGN: ha1del
CONTEST: CQ-CF
CATEGORY: HAOMCW
CLAIMED-SCORE: 1500
QSO:  7000 CW 2022-12-10 0600 HC8N           59 700    W1AW           59 CT

QSO alakítás 

logrows { ["1210", "0600", "40m", "cw", "ha1at", "599", "cf", "599", "001"]}
cabrows { ["2023-12-10"; "0600", " 7000", "CW", "HA1AT     ", "599", "CF ", "599", "001"]}


lépések
- sorok száma

*/
let cat3 = ("cat3")
let callsign = ("hívójel")
let logrow = ["a", "b"]
let cabrow = (" ")
let logrows = ["logtest1", "logtest2"] 
let cabrows = []
let addrows = []
let idx = -1
let idx_callsign = 0
let logrows_idx = 1
let cabrows_idx = -1
let charrow = ["Q", "S", "O", ":", " ", " ", "S", "S", "0", "0", " ", "Ü", "M", " ", "2", "0", "2", "2", "-", "1", "2", "-", "N", "N", " ", "O", "O", "P", "P", " ", "H", "I", "V", "O", "J", "E", "L", " ", " ", " ", " ", " ", " ", " ", "R", "S", "T", " ", "S", "T", "X", " ", " ", " ", " ", "H", "I", "V", "O", "J", "E", "L", " ", " ", " ", " ", " ", " ", " ", "R", "S", "T", " ", "S", "R", "X"]

function button_click() {

    //űrlap bekérése
    callsign = document.getElementById("callsign").value
    callsign = callsign.toUpperCase() 
    
    cat1 = document.getElementById("cat1").value
    cat2 = document.getElementById("cat2").value
    cat3 = document.getElementById("cat3").value
    
    score = document.getElementById("score").value
    
    applicant = document.getElementById("applicant").value
    applicant = applicant.toUpperCase() 
    
    email = document.getElementById("email").value
    email = email.toUpperCase() 
    
    address = document.getElementById("address").value
    address = address.toUpperCase()
    addrows = address.split("\n")
    
    exch = document.getElementById("exch").value
    
    fixexch = document.getElementById ("fixexch").value 
    
    qso = document.getElementById("qso").value
    qso = qso.toUpperCase() 
    
    logrows = qso.split("\n")
    cabrows = []


    
    for (var i = 4; i < logrows.length ; i++) { 
        logrow = logrows[i].split(" ")
        charrow = ["Q", "S", "O", ":", " ", " ", "S", "S", "0", "0", " ", "Ü", "M", " ", "2", "0", "2", "2", "-", "1", "2", "-", "N", "N", " ", "O", "O", "P", "P", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
        if (logrow[0] == "") {
            break
        } else {
            //sáv átiratás
            if (logrow[2] == "80M") {
                charrow[6] = 3
                charrow[7] = 5
            } else if (logrow[2] = "40M"){
                charrow[6] = 7
                charrow[7] = 0
            }

            //üzemmód átiratás

            if (cat3 == "CW") {
                charrow[11] = "C"
                charrow[12] = "W"
            } else if (cat3 = "SSB") {
                charrow[11] = "P"
                charrow[12] = "H"
            }  

    
            //dátum és idő átiratás
            charrow[22] = logrow[0][2]
            charrow[23] = logrow[0][3] 
            charrow[25] = logrow[1][0]
            charrow[26] = logrow[1][1]
            charrow[27] = logrow[1][2] 
            charrow[28] = logrow[1][0]

            //adott hívójel átiratás
            for (var a = 0; a < callsign.length; a++) {
                charrow[30+a] = callsign[0+a];
            }

            //adott RST átiratás
            for (var a = 0; a < logrow[4].length; a++) {
                charrow[44+a] = logrow[4][0+a];
            }

            //adott sorszám átiratás
            for (var a = 0; a < logrow[5].length; a++) {
                charrow[48+a] = logrow[5][0+a];
            }
            
            //vett hívójel átiratás
            for (var a = 0; a < logrow[3].length; a++) {
                charrow[55+a] = logrow[3][0+a];
            }
        
            //vett RST átiratás
            for (var a = 0; a < logrow[6].length; a++) {
                charrow[69+a] = logrow[6][0+a];
            }
        
            //vett sorszám átiratás
            for (var a = 0; a < logrow[7].length; a++) {
            charrow[73+a] = logrow[7][0+a];
            }
        
            //átírt sor összeállítása és hozzáadása a kész QSO-listához
            cabrow = charrow.join("")
            cabrows.push(cabrow)
        }
    }

    //kiíratás a honlapra
    document.getElementById("cab").value=""
    document.getElementById("cab").value="START-OF-LOG: 2.0\nCALLSIGN: " + callsign + "\nCONTEST: CQ-CF\nCATEGORY: " + cat1 + cat2 + cat3 + "\nCLAIMED-SCORE: " + score + "\nNAME: " + applicant + "\nADDRESS: " + addrows[0] + "\nADDRESS: " + addrows[1] + "\nADDRESS: " + addrows[2] + "\n" + cabrows.join("\n") + "\nEND-OF-LOG:"
}
    //fájlba mentés
function button_click2() {

    var data = [document.getElementById("cab").value];
    var file = new File(data, "HIVOJEL.cbr", {type: 'text/plain'});
    var url = URL.createObjectURL(file);
    document.getElementById('link').href = url;
    document.getElementById("download_link").style = ""
}