var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("filler"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi jsou odeslány na server. Děkujeme za spolupráci! Nyní  můžete okno zavřít.]";

var ms = "Message";

var defaults = [
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu."
         },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5"],
                               presentAsScale: true,
                               leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],

          ["intro", "Form", {continueMessage: "Pro vstup do experimentu klikněte zde", html: { include: "example_intro.html" }}],


["practice", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách následující větu: </p><p><b>Ve městě Er žádný člověk není ve věku mezi 20 a 30 roky.</b></p><p> a komentuje to. </p> <p> Alešův komentář: 'Takže někteří obyvatelé města Er jsou ve věku 21 nebo 22 let.'</p><p>Vaším úkolem v experimentu bude na škále 1 (Alešův komentář je naprosto v rozporu s větou) až 5 (Alešův komentář je naprosto v souladu s větou) ohodnotit vhodnost Alešova komentáře vůči původní větě. Alešův komentář ukazuje, že původní větu špatně pochopil; vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  ["practice", aj, {s: {html: "<p>Kontext: Aleš zaslechl v ranních zprávách následující větu: </p><p><b>Každý ministr země Sol má dva vlastní tiskové mluvčí a žádný mluvčí není společný.</b></p><p> a komentuje to. </p> <p> Alešův komentář: 'Jestli má vláda v Sol 10 ministrů, tak má ta vláda dohromady 20 tiskových mluvčích.'</p><p>Znovu musíte ohodnoti na škále 1..5 vhodnost Alešova komentáře. V tomto příkladu Alešův komentář ukazuje, že původní větu pochopil naprosto správně; vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  ["practice", aj, {s: {html: "<p>Kontext: Aleš si přečetl v jednom starém románu následující větu: </p><p><b>Ti tři rytíři si koupili každý dva koně.</b></p><p> a komentuje to. </p> <p> Alešův komentář: 'Tak to měli ti rytíři dohromady sedm koní.'</p><p>Znovu musíte ohodnoti na škále 1..5 vhodnost Alešova komentáře. V tomto příkladu Alešův komentář ukazuje, že původní větu pochopil naprosto špatně; vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-at-most", 1], aj, {s: {html: "<p>Kontext: Aleš čte na obalu potravin následující větu: </p><p><b>Toto balení může obsahovat nanejvýš 100 gramů cukru.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  [["first-item1-no-more", 1], aj, {s: {html: "<p>Kontext: Aleš čte na obalu potravin následující větu: </p><p><b>Toto balení může obsahovat ne víc než 100 gramů cukru.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  [["first-item1-fewer", 1], aj, {s: {html: "<p>Kontext: Aleš čte na obalu potravin následující větu: </p><p><b>Toto balení může obsahovat méně než 100 gramů cukru.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item2-at-most", 2], aj, {s: {html: "<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: </p><p><b>Litr benzínu Ropák může obsahovat nanejvýš 0.5 gramu olova.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item2-no-more", 2], aj, {s: {html: "<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: </p><p><b>Litr benzínu Ropák může obsahovat ne víc než 0.5 gramu olova.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item2-fewer", 2], aj, {s: {html: "<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: </p><p><b>Litr benzínu Ropák může obsahovat méně než 0.5 gramu olova.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item3-at-most", 3], aj, {s: {html: "<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: </p><p><b>Řidič mopedu má dovoleno jet nanejvýš 70 km/h.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže řidiči rychlejších mopedů mohou na téhle rychlostní silnici jet i 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item1-no-more", 3],aj, {s: {html: "<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: </p><p><b>Řidič mopedu má dovoleno jet ne víc než 70 km/h.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže řidiči rychlejších mopedů mohou na téhle rychlostní silnici jet i 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item1-fewer", 3], aj, {s: {html: "<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: </p><p><b>Řidič mopedu má dovoleno jet méně než 70 km/h.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže řidiči rychlejších mopedů mohou na téhle rychlostní silnici jet i 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item4-at-most", 4], aj, {s: {html: "<p>Kontext: Aleš si čte vyhlášku odborů revizorů v městské hromadné dopravě, kde stojí následující věta:  </p><p><b>Revizor má dovoleno zkontrolovat nanejvýš 50 cestujících denně.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item4-no-more", 4], aj, {s: {html: "<p>Kontext: Aleš si čte vyhlášku odborů revizorů v městské hromadné dopravě, kde stojí následující věta:  </p><p><b>Revizor má dovoleno zkontrolovat ne víc než 50 cestujících denně.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item4-fewer", 4], aj, {s: {html: "<p>Kontext: Aleš si čte vyhlášku odborů revizorů v městské hromadné dopravě, kde stojí následující věta:  </p><p><b>Revizor má dovoleno zkontrolovat méně než 50 cestujících denně.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item5-at-most", 5], aj, {s: {html: "<p>Kontext: Aleš si čte studijní řád Miskatonické univerzity, kde vidí následující větu: </p><p><b>Bakalářská práce může mít nanejvýš 50 tisíc znaků.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže některé bakalářské práce na Miskatonické univerzitě mohou mít i 60 tisíc znaků.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item5-no-more", 5], aj, {s: {html: "<p>Kontext: Aleš si čte studijní řád Miskatonické univerzity, kde vidí následující větu: </p><p><b>Bakalářská práce může mít ne víc než 50 tisíc znaků.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže některé bakalářské práce na Miskatonické univerzitě mohou mít i 60 tisíc znaků.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item5-fewer", 5],  aj, {s: {html: "<p>Kontext: Aleš si čte studijní řád Miskatonické univerzity, kde vidí následující větu: </p><p><b>Bakalářská práce může mít méně než 50 tisíc znaků.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže některé bakalářské práce na Miskatonické univerzitě mohou mít i 60 tisíc znaků.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item6-at-most", 6], aj, {s: {html: "<p>Kontext: Aleš listuje v odborových vyhláškách pro  pomocný personál v mrakodrapu GD, kde vidí následující větu: </p><p><b>Uklízečka v GD má dovoleno za den uklidit nanejvýš 10 kanceláří.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže některé pilnější uklízečky v GD mohou za den uklidit i 12 kanceláří.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item6-no-more", 6], aj, {s: {html: "<p>Kontext: Aleš listuje v odborových vyhláškách pro  pomocný personál v mrakodrapu GD, kde vidí následující větu: </p><p><b>Uklízečka v GD má dovoleno za den uklidit ne víc než 10 kanceláří.</b></p><p>, a komentuje to.</p><p>Alešův komentář: 'Takže některé pilnější uklízečky v GD mohou za den uklidit i 12 kanceláří.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item6-fewer", 6], aj, {s: {html: "<p>Kontext: Aleš listuje v odborových vyhláškách pro pomocný personál v mrakodrapu GD, kde vidí následující větu: </p><p><b>Uklízečka v GD má dovoleno za den uklidit méně než 10 kanceláří.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže některé pilnější uklízečky v GD mohou za den uklidit i 12 kanceláří.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item7-at-most", 7], aj, {s: {html: "<p>Kontext: Aleš si čte v novinách předpověď počasí na zítra a vidí tam následující větu: </p><p><b>Zítra může napršet nanejvýš 10 mm srážek.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže zítra možná naprší i 20 mm.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item7-no-more", 7], aj, {s: {html: "<p>Kontext: Aleš si čte v novinách předpověď počasí na zítra a vidí tam následující větu: </p><p><b>Zítra může napršet ne víc než 10 mm srážek.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže zítra možná naprší i 20 mm.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item7-fewer", 7],  aj, {s: {html: "<p>Kontext: Aleš si čte v novinách předpověď počasí na zítra a vidí tam následující větu: </p><p><b>Zítra může napršet méně než 10 mm srážek.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže zítra možná naprší i 20 mm.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item8-at-most", 8], aj, {s: {html: "<p>Kontext: Aleš si čte instrukce týkající se jubilejního dálkového pochodu z města Er a vidí tam následující větu: </p><p><b>Účastníci jubilejního dálkového pochodu mohou ujít nanejvýš 40 km.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže někteří účastníci toho pochodu mohou ujít i 50 km.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item8-no-more", 8], aj, {s: {html: "<p>Kontext: Aleš si čte instrukce týkající se jubilejního dálkového pochodu z města Er a vidí tam následující větu: </p><p><b>Účastníci jubilejního dálkového pochodu mohou ujít ne víc než 40 km.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže někteří účastníci toho pochodu mohou ujít i 50 km.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item8-fewer", 8], aj, {s: {html: "<p>Kontext: Aleš si čte instrukce týkající se jubilejního dálkového pochodu z města Er a vidí tam následující větu: </p><p><b>Účastníci jubilejního dálkového pochodu mohou ujít méně než 40 km.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže někteří účastníci toho pochodu mohou ujít i 50 km.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item9-at-most", 9], aj, {s: {html: "<p>Kontext: Aleš si čte interní zprávu upravující personální politiku ve firmě EB, kde stojí následující věta: </p><p><b>Firma EB může tento rok propustit nanejvýš 100 zaměstnanců.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže tento rok v EB propustí možná i 110 zaměstnanců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item9-no-more", 9], aj, {s: {html: "<p>Kontext: Aleš si čte interní zprávu upravující personální politiku ve firmě EB, kde stojí následující věta: </p><p><b>Firma EB může tento rok propustit ne víc než 100 zaměstnanců.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže tento rok v EB propustí možná i 110 zaměstnanců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item9-fewer", 9], aj, {s: {html: "<p>Kontext: Aleš si čte interní zprávu upravující personální politiku ve firmě EB, kde stojí následující věta: </p><p><b>Firma EB může tento rok propustit méně než 100 zaměstnanců.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže tento rok v EB propustí možná i 110 zaměstnanců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler1-good", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách následující větu: </p><p><b>Tři současní čeští básníci napsali každý právě jednu knihu básní.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže ti tři básníci napsali tři knihy básní, co básník -- to knížka.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler2-bad", aj, {s: {html: "<p>Kontext: Aleš čte o na webových stránkách města Er následující větu: </p><p><b>Radnice města Er je vysoká 40 metrů a každá budova v městě Er je nižší než výška radnice.</b></p><p> a komentuje to. </p><p>Alešův komentář: 'Takže některé budovy v městě Er mají 45 metrů a víc.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler3-good", aj, {s: {html: "<p>Kontext: Aleš si čte v novinách o korunovaci královny a vidí tam následující větu: </p><p><b>Ne každý státník přiletěl letadlem.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže někteří státníci dorazili na korunovaci jinak než letadlem.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler4-bad", aj, {s: {html: "<p>Kontext: Aleš si právě v univerzitních novinách přečetl větu: </p><p><b>Každý student na filozofické fakultě přečetl maximálně 20 knih.</b></p><p> a komentuje to. </p><p>Alešův komentář: 'Takže každý student na filozofické fakultě přečetl 21 nebo víc knih.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler5-good", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách následující větu: </p><p><b>Průměrný obyvatel města Er vlastní 2.5 kočky.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže někteří obyvatelé v Er mají dvě kočky nebo míň, ale někteří mají tři kočky nebo víc.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler6-bad", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách, že </p><p><b> Průměrný obyvatel města Er si vloni nepřečetl ani jednu knížku.</b></p><p> a komentuje to. </p><p>Alešův komentář: 'Takže průměrný obyvatel města Er si vloni přečetl dvě a více knížek''</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler7-good", aj, {s: {html: "<p>Kontext: Aleš si čte statistickou zprávu o zemi Er a v ní je následující věta: </p><p><b>Každý obyvatel země Er vlastní maximálně 3 kola.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže žádný obyvatel země Er nevlastní 4 kola.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler8-bad", aj, {s: {html: "<p>Kontext: Aleš si čte na Wikipedii o vzdálené sluneční soustavě Solaris a vidí větu: </p><p><b>V soustavě Solaris má každá planeta maximálně 3 měsíce.</b></p><p> a komentuje to. </p><p>Alešův komentář: 'Takže některé planety v soustavě Solaris mají 4 nebo více měsíců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler9-good", aj, {s: {html: "<p>Kontext: Aleš si čte technickou zprávu o výtahu K, ve které je následující věta </p><p><b>Výtah K uveze i 5 pasažérů.</b></p><p> a komentuje to.</p><p>Alešův komentář: 'Takže výtah K rozhodně uveze 4 pasažéry.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],


];
