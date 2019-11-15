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
                               leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],

          ["intro", "Form", {continueMessage: "Pro vstup do experimentu klikněte zde", html: { include: "example_intro.html" }}],


["practice", aj, {s: {html: "<p><b>Kontext:</b> Hospodský Aleš dobře zná své pravidelné hosty. U stolu štamgastů sedí, jako obvykle, pět pánů, kteří se už léta dobře znají. Aleš říká Bedřichovi, novému číšníkovi, větu. </p><p><center><b>Věta:</b> <i>Ti pánové u stolu štamgastů dobře znají jeden druhého.</i></p></center><p>Vaším úkolem v experimentu bude na škále 1 (Věta je nepřijatelná a neodpovídá kontextu) až 5 (Věta je přijatelná a odpovídá kontextu) ohodnotit vhodnost Alešovy věty vůči původnímu kontextu. Alešova věta odpovídá kontextu a je to přijatelná česká věta; vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-ref", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Průměrně tu bývá denně asi 50 stánkařů. Dnes je na tržišti přesně 50 stánkařů. Aleš volá informaci o situaci na tržišti svému nadřízenému. A do telefonu říká následující větu. </p><p><center><b>Věta:</b> <i>Dneska se tržiště úplně hemží stánkaři.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item1-de", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Tržiště bývá plné stánkařů pravidelně každý pracovní den, jen o víkendu je stánkařů vždy tak polovina. Ale za minulý měsíc se tržiště zaplnilo stánkaři asi jen třikrát. Aleš překvapeně volá informaci o minulém měsíci svému nadřízenému. A do telefonu říká následující větu. </p><p><center><b>Věta:</b> <i>Minulý měsíc se tržiště málokdy úplně hemžilo stánkaři.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item1-neg", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Průměrně bývá na tržišti kolem 50 stánkařů denně. Dnes je jich trochu míň, zhruba kolem 40. Aleš volá informaci o dnešním dni na tržišti svému nadřízenému a říká následující větu. </p><p><center><b>Věta:</b> <i>Dnes se tržiště úplně nehemží stánkaři. </i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item1-resc", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Každý den je na tržišti. Jeho kamarád, Bedřich, stojí na věži radnice, odkud je na tržiště z dálky vidět a připadá mu, že tržiště je hodně plné, ale není si úplně jistý. Bedřich volá telefonem Alešovi a ptá se ho: </p><p><center><b>Věta:</b> <i>Nehemží se dneska tržiště úplně stánkaři?</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],
             
 [["first-item2-ref", 2], aj, {s: {html: "<p><b>Kontext:</b> Včelař Aleš má ve včelíně kolem 13 000 včel. Ráno šel zkontrolovat své včely a když se vrátil, oznámil šťastně manželce následující větu. </p><p><center><b>Věta:</b> <i>Dneska se včelín úplně rojí včelami.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}], 
             
     [["first-item2-de", 2], aj, {s: {html: "<p><b>Kontext:</b> Včelař Aleš má ve včelíně kolem 13 000 včel. Když na jaře začnou kvést květiny, včely vyletí ze včelínu a celý den létají po loukách a sbírají pyl. Aleš se díky tomu může věnovat opravě včelínu, což vysvětlil manželce následující větou. </p><p><center><b>Věta:</b> <i>V létě se včelín málokdy úplně rojí včelami.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],
             
     [["first-item2-neg", 2], aj, {s: {html: "<p><b>Kontext:</b> Včelař Aleš měl ve včelíně kolem 13 000 včel. Minulý týden ale přibližně 4 000 včel prodal. Aleš už se těší na narození nových a smutně manželce oznámil. </p><p><center><b>Věta:</b> <i>Teď se včelín úplně nerojí včelami. </i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item2-resc", 2], aj, {s: {html: "<p><b>Kontext:</b> Manželka včelaře Aleše pozoruje zdálky jeho včelín a zdá se jí, že je kolem něj plno hmyzu, ale není si úplně jistá. Volá Alešovi, který stojí hned vedle včelína, mobilem, protože je zvědavá, a ptá se: </p><p><center><b>Věta:</b> <i>Nerojí se teď včelín úplně včelami?</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

[["first-item3-ref", 3], aj, {s: {html: "<p><b>Kontext:</b> Městský tuningový klub pořádá každý víkend na louce u bývalých kasáren sraz pro upravené vozy. Průměrně se srazu účastní kolem 70 aut. Tento víkend dorazilo na sraz přesně 70 aut. Pomocník Aleš, který vybíral vstupné na sraz, volal svému nadřízenému a do telefonu mu oznámil následující větu. </p><p><center><b>Věta:</b> <i>Tento víkend se louka úplně blýská vytuněnými auty.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}], 
             
     [["first-item3-de", 3], aj, {s: {html: "<p><b>Kontext:</b> Městský tuningový klub pořádá každý víkend na louce u bývalých kasáren sraz pro upravené vozy. Průměrně se srazu účastní kolem 70 aut. V zimních měsících ovšem účast tuningářů klesne. Pomocník Aleš, který vybíral vstupné na sraz, volal zklamaně svému nadřízenému a do telefonu mu oznámil následující větu. </p><p><center><b>Věta:</b> <i>V zimě se louka málokdy úplně blýskala vytuněnými auty.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],
             
     [["first-item3-neg", 3], aj, {s: {html: "<p><b>Kontext:</b> Městský tuningový klub pořádá každý víkend na louce u bývalých kasáren sraz pro upravené vozy. Průměrně se srazu účastní kolem 70 aut. Tento víkend dorazilo na sraz o něco méně nadšenců tuningu, asi 50 aut. Aleš, který pomáhá s organizací srazu, volal svému nadřízenému následující větu. </p><p><center><b>Věta:</b> <i>Tento víkend se louka úplně neblýská vytuněnými auty. </i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item3-resc", 3], aj, {s: {html: "<p><b>Kontext:</b> Městský tuningový klub pořádá každý víkend na louce u bývalých kasáren sraz pro upravené vozy. Průměrně se srazu účastní kolem 70 aut. Tento víkend jich dorazilo zase kolem 70. Pomocník Aleš, který vybírá vstupné na sraz, právě vyřizuje telefon od svého nadřízeného. Ten ze své vily asi kilometr od louky pozoruje sraz, ale není si úplně jistý a ptá se Aleše: </p><p><center><b>Věta:</b> <i>Neblýská se tento víkend louka úplně auty?</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}], 
             
[["first-item4-ref", 4], aj, {s: {html: "<p><b>Kontext:</b> Rybář Aleš si rád vyjíždí na loďce na rybník, kde chytá do sítě ryby. Průměrně chytne kolem 10 ryb. Tentokrát chytil přesně 10 ryb. Po návratu domů oznámil manželce radostnou zprávu. </p><p><center><b>Věta:</b> <i>Síť se úplně mrskala rybami.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}], 
             
     [["first-item4-de", 4], aj, {s: {html: "<p><b>Kontext:</b> Rybář Aleš si rád vyjíždí na loďce na rybník, kde chytá do sítě ryby. Průměrně chytne kolem 10 ryb. Tento měsíce neměl štěstí a podařilo se mu chytit několik ryb jen párkrát. Zklamaně oznámil manželce následující větu. </p><p><center><b>Věta:</b> <i>Tento měsíc se síť málokdy úplně mrskala rybami.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],
             
     [["first-item4-neg", 4], aj, {s: {html: "<p><b>Kontext:</b> Rybář Aleš si rád vyjíždí na loďce na rybník, kde chytá do sítě ryby. Průměrně chytne kolem 10 ryb. Dnes neměl takové štěstí a podařilo se mu chytit jen 7 ryb. Po návratu domů oznámil zklamaně manželce následující větu. </p><p><center><b>Věta:</b> <i>Dnes se síť úplně nemrskala rybami. </i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item4-resc", 4], aj, {s: {html: "<p><b>Kontext:</b> Rybář Aleš si rád vyjíždí na loďce na rybník, kde chytá do sítě ryby. Průměrně chytne kolem 10 ryb. Tentokrát chytil najednou do sítě 10 ryb. Jeho kamarád Bedřich to pozoruje ze vzdáleného břehu a zvědavost mu nedá. Volá Alešovi na mobil a ptá se. </p><p><center><b>Věta:</b> <i>Nemrská se ti dnes síť úplně rybami?</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],             
             
[["first-item5-ref", 5], aj, {s: {html: "<p><b>Kontext:</b> Veřejný pracovník Aleš má na starosti vynášení košů v městském parku. Aleš je velmi pracovitý a během každé směny se mu podaří vynést všechny koše. V létě si vzal Aleš dovolenou a zaskakoval za něho líný pracovník Bartoš, který stihl vynést sotva čtvrtinu košů. Po návratu z dovolené si Alešovi stěžoval jeho nadřízený na práci Bartoše. Nadřízený Alešovi řekl následující větu. </p><p><center><b>Věta:</b> <i>Odpadkové koše úplně bzučely včelami.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}], 
             
     [["first-item5-de", 5], aj, {s: {html: "<p><b>Kontext:</b> Veřejný pracovník Aleš má na starosti vynášení košů v městském parku. Aleš je velmi pracovitý a během každé směny se mu podaří vynést všechny koše. V létě místo něho každé pondělí a úterý vynáší koše líný pracovník Bartoš, který stihne vynést sotva čtvrtinu košů. Návštěvníci parku oznámili nadřízenému veřejných pracovníků následující větu. </p><p><center><b>Věta:</b> <i>V létě odpadkové koše málokdy úplně bzučely včelami.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],
             
     [["first-item5-neg", 5], aj, {s: {html: "<p><b>Kontext:</b> Veřejný pracovník Bartoš má na starosti vynášení košů v městském parku. Bartoš je velmi líný a stihne za směnu vynést sotva čtvrtinu košů. Dnes byl nadřízeným přinucen si ke konci směny vyměnit místo s pracovitým Alešem, kterému se podaří během směny vynést všechny koše. Aleš už nestihl místo Bartoše vynést všechny koše, ale udělal víc práce, než by zvládl Bartoš. Návštěvník parku překvapeně telefonoval nadřízenému veřejných pracovníků následující informaci. </p><p><center><b>Věta:</b> <i>Dnes odpadkové koše úplně nebzučí včelami. </i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item5-resc", 5], aj, {s: {html: "<p><b>Kontext:</b> Veřejný pracovník Aleš má na starosti vynášení košů v městském parku. Aleš je velmi pracovitý a během každé směny se mu podaří vynést všechny koše. V létě si vzal Aleš dovolenou a zaskakoval za něho líný pracovník Bartoš, který stihl vynést sotva čtvrtinu košů. Nadřízený veřejných pracovníků jde Bartoše zkontrolovat a už z dálky vidí, jak je kolem košů plno hmyzu. Rozzlobeně volá Bartošovi mobilem a ptá se: </p><p><center><b>Věta:</b> <i>Nebzučí dnes odpadkové koše úplně včelami?</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],             
             

["filler1-good", aj, {s: {html: "<p><b>Kontext:</b> Filler1-good-kontext: </p><p><center><b>Věta:</b> <i>Věta-filler-1-good</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

["filler2-bad", aj, {s: {html: "<p><b>Kontext:</b> Filler2-good-kontext: </p><p><center><b>Věta:</b> <i>Věta-2-filler-2-bad</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],


];
