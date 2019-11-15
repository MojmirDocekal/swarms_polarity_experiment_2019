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


["practice", aj, {s: {html: "<p><b>Kontext:</b> Hospodský Aleš dobře zná své pravidelné hosty. U stolu štamgastů sedí, jako obvykle, pět pánů, kteří se už léta dobře znají. Aleš říká Bedřichovi, novému číšníkovi, větu. </p><p><center><b>Věta:</b> <i>Ti pánové u stolu štamgastů dobře znají jeden druhého.</i></p></center><p>Vaším úkolem v experimentu bude na škále 1 (Věta je nepřijatelná a neodpovídá kontextu) až 5 (Věta je přijatelná a odpovídá kontextu) ohodnotit vhodnost Alešovy věty vůči původnímu kontextu. Alešova věta odpovídá kontextu a je to přijatelná česká věta; vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</p>"}, leftComment: "(Věta je přijatelná a odpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-ref", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Průměrně tu bývá denně asi 50 stánkařů. Dnes je na tržišti přesně 50 stánkařů. Aleš volá informaci o situaci na tržišti svému nadřízenému. A do telefonu říká následující větu. </p><p><center><b>Věta:</b> <i>Dneska se tržiště úplně hemží stánkaři.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item1-de", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Tržiště bývá plné stánkařů pravidelně každý pracovní den, jen o víkendu je stánkařů vždy tak polovina. Ale za minulý měsíc se tržiště zaplnilo stánkaři asi jen třikrát. Aleš překvapeně volá informaci o minulém měsíci svému nadřízenému. A do telefonu říká následující větu. </p><p><center><b>Věta:</b> <i>Minulý měsíc se tržiště málokdy úplně hemžilo stánkaři.</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item1-neg", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Průměrně bývá na tržišti kolem 50 stánkařů denně. Dnes je jich trochu míň, zhruba kolem 40. Aleš volá informaci o dnešním dni na tržišti svému nadřízenému a říká následující větu. </p><p><center><b>Věta:</b> <i>Dnes se tržiště úplně nehemží stánkaři. </i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

    [["first-item1-resc", 1], aj, {s: {html: "<p><b>Kontext:</b> Správce tržiště Aleš dobře zná všechny stánkaře, kteří tu kdy prodávali. Každý den je na tržišti. Jeho kamarád, Bedřich, stojí na věži radnice, odkud je na tržiště z dálky vidět a připadá mu, že tržiště je hodně plné, ale není si úplně jistý. Bedřich volá telefonem Alešovi a ptá se ho: </p><p><center><b>Věta:</b> <i>Nehemží se dneska tržiště úplně stánkaři?</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

["filler1-good", aj, {s: {html: "<p><b>Kontext:</b> Filler1-good-kontext: </p><p><center><b>Věta:</b> <i>Věta-filler-1-good</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],

["filler2-bad", aj, {s: {html: "<p><b>Kontext:</b> Filler2-good-kontext: </p><p><center><b>Věta:</b> <i>Věta-2-filler-2-bad</i></center></p>"}, leftComment: "(Věta je nepřijatelná a neodpovídá kontextu)", rightComment: "(Věta je přijatelná a odpovídá kontextu)"}],


];
