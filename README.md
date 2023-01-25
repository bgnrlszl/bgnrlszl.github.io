<h1>Jegyzőkönyv-készítő webform</h1>
<b> a <a href="https://ha1kss.wordpress.com/cf-kiiras/">Civitas Fidelissima verseny</a> résztvevői számára</b>
<br/>
<br/>
<b>Problémaleírás</b>
<ul>
  <li>A rádióamatőr sportban a versenyek értékelése jegyzőkönyvek alapján történik. Ezekbe az adóállomások operátorai feljegyzik a versenyben létesített összeköttetéseket</li>
  <li>A jegyzőkönyvek a <a href="https://www.fsarc.org/qsoparty/cabrillo.htm">Cabrillo</a> szabványban készülnek. Ez egy karaktermátrix, amelynek különböző karaktereit hasonlítja össze egyezőségre az értékelő program</li>
  <li>A Cabrillo formátumot a sok üres karakter miatt nehéz kezelni, főleg az idősebb operátoroknak okoz gondot. Ők eddig papíron adták be a jegyzőkönyvet, amiből a rendezők gyártottak szabványos formátumot</li>
  <li>A munka egyszerűsítéséért szükség volt egy olyan felületre, ahol egységes, de egyszerűbb formában beadhatóak a szükséges adatok, majd a program kiköpi a kész jegyzőkönyvet, ami letölthető (későbbiekben beküldhető)</li>
</ul>

<br/>
<br/>
<b>A program működése</b>
<ul>
  <li>A felhasználó kitölti az adatlap rovatait, beviszi a szövegdobozba a megfelelő adatokat, majd megnyomja a beküldés gombot</li>
  <li>A js tömbként felállít egy sornyi dummy karaktermátrixot, aminek egyes elemeit a bevitt karakterekre cseréli ki, majd kiírja</li> 
  <li>A js felállít egy sornyi minta karaktermátrixot, majd soronként bekéri a szövegdobozban szereplő szöveget. Ezt rovatokra bontja, ha szükséges, átalakítja, majd a emgadott szabályok szerint beküldi a dummy mátrixba, összeállítja sorrá, és soronként kiírja egy másik szövegdobozba</li>
  <li>A felhasználó egy második szövegdobozban visszakapja a szabványos formátumra átalakított jegyzőkönyvet, amit át tud nézni, esetleg javítani tud benne adattévesztéseket.</li>
  <li> Gombnyomásra a második szövegdoboz tartalma fájlba kiíródik, amit a felhasználó aztán email-ben beküldhet a verseny szervezőinek</li>
</ul>
<br/>
<i>Megjegyzés: a webform a tesztelést követően végül nem került használatba, időközben elkészült egy másik, szélesebb szolgáltatáskínálatú program a célra</i> 
