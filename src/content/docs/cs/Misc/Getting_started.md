---
title: Začínáme
---
## Předmluva

FreeCAD je 3D CAD/CAE [parametrická modelovací aplikace](/About_FreeCAD/cs "About FreeCAD/cs"). Primárně je určena pro konstruování mechanických záležitostí, ale slouží i ve všech dalších případech kde je potřeba modelovat přesné 3D objekty a kontrolovat historii modelování.

FreeCAD je zatím v ranném stupni vývoje, takže, přestože již nabízí velký (a rostoucí) seznam [možností](/Feature_list/cs "Feature list/cs"), ještě je stále dost toho co chybí, zvlášť ve srovnání s komerčními řešeními a můžete zjistit, že není na takovém stupni aby se dal využívat v produkčním prostředí. Přesto je zde rychle rostoucí [komunita](http://forum.freecadweb.org/index.php) zapálených uživatelů a už teď můžete najít [mnoho příkladů](https://forum.freecadweb.org/viewforum.php?f=24) kvalitních projektů vyvinutých ve FreeCADu.

Jako všechny open-source projekty, projekt FreeCAD není jednosměrná práce vývojářů pro Vás. Mnoho závisí na jeho komunitě - jak roste, zlepšuje vlastnosti, stabilizuje ho (opravuje chyby). Proto nezapomínejte, když začínate s FreeCADem, jestliže se Vám líbí, můžete na něj mít přímý vliv a [pomáhat](/Help_FreeCAD/cs "Help FreeCAD/cs") projektu!

See also:

* [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
* [Which workbench should I choose?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Tutorials](/Tutorials "Tutorials")
* [Video tutorials](/Video_tutorials "Video tutorials")

## Instalace

Nejprve (jestliže už to někdo neudělal) stáhněte a nainstalujte FreeCAD. Podívejte se na stránku [Stahování](/Download/cs "Download/cs") na informace o aktuální verzi a aktualizacích a na stránku [Instalace](/Installing/cs "Installing/cs") na informace o tom, jak FreeCAD nainstalovat. K dispozici jsou už instalační balíčky pro Windows (.msi), Ubuntu & Debian (.deb) openSUSE (.rpm) a Mac OSX. Protože FreeCAD je open-source, jste-li odvážní a chcete se podívat na poslední novinky, které jsou právě ve vývoji, můžete si také stáhnout zdrojové kódy a [zkompilovat](/Compiling/cs "Compiling/cs") si FreeCAD sami.

## Prozkoumání FreeCADu

![](/images/FreeCAD_interface_base_divisions.svg)

![](/images/FreeCAD_interface.png)

1. 3D pohled, který zobrazuje obsah vašeho dokumentu
2. Pohled stromu, který zobrazuje hierarchii a konstrukční historii všech objektů v dokumentu
3. [Editor vlastností](/Property/cs "Property/cs"), který Vám umožňuje vidět a modifikovat vlastnosti vybraných objektů
4. Okno výstupů, kam FreeCAD tiskne zprávy, varování a chyby
5. Konzola Pythonu, kde jsou tištěny všechny příkazy prováděné FreeCADem a kam můžete vkládat kódy Pythonu
6. [Přepínač pracovních ploch](/Workbenches/cs "Workbenches/cs"), kde vybíráte aktivní pracovní plochu

Základní koncept pod interfacem FreeCADu je rozdělení do [pracovních ploch](/Workbenches/cs "Workbenches/cs"). Pracovní plocha je soubor nástrojů vhodných pro dané typy úloh, jako je práce se [sítěmi](/Mesh_Workbench/cs "Mesh Workbench/cs") nebo kreslení [2D objektů](/Draft_Workbench/cs "Draft Workbench/cs") nebo [náčrty](/Sketcher_Workbench/cs "Sketcher Workbench/cs"). Aktuální pracovní plochu můžete zapínat přepínčem pracovních ploch (6). Můžete [uživatelsky upravovat](/Interface_Customization/cs "Interface Customization/cs")  nástroje včleněné do pracovní plochy, přidávat nástroje z jiných pracovních ploch nebo dokonce sami vytvářet nástroje zvané [makra](/Macros/cs "Macros/cs"). Je zde i obecná pracovní plocha, která zahrnuje nejčastěji využívané nástroje z jinych pracovních ploch, zvaná **Kompletní pracovní plocha**.

Spouštíte-li FreeCAD poprvé, dostanete se do startovního centra:

![](/images/Start_center_0.19_screenshot.png)

Startovní centrum Vám umožňuje rychlý přechod do některé z nejužívanějších pracovních ploch, otevřít posledně používané soubory nebo se podívat na nejnovější novinky ze světa FreeCADu. V [přednastaveních](/Preferences_Editor/cs "Preferences Editor/cs") můžete změnit defaultní pracovní plochu.

## Navigace ve 3D prostoru

FreeCAD má dostupné čtyři [navigační módy myši](/Mouse_Model/cs "Mouse Model/cs") které mění způsob jak používáte Vaši myš v interakci s objekty ve 3D pohledu a s pohledem samotným. Jeden z módů je speciálně vytvořen pro [touchpady](/Mouse_Model/cs#Touchpad_Navigation "Mouse Model/cs"), kde není použito prostřední tlačítko. Následující tabulka popisuje defaultní mód, zvaný **CAD Navigation** (Rychle můžete změnit aktuální navigační mód pomocí pravého kliknutí myši na prázdnou oblast e 3D pohledu):

Máte také přednastaveno několik pohledů (pohled shora, pohled zepředu, atd.) dostupných v menu Pohled, na pruhu nástrojů pohledu a numerickými klávesami (1, 2, atd...), a také pravým kliknutím myši na objekt nebo do prázdné plochy 3D pohledu máte rychlý přístup k některým běžným operacím jako je nastavení jednotlivých pohledů nebo umístění objektu v pohledu stromu.

## První kroky s FreeCADem

Cílem FreeCADu je umožnit vytváření velmi přesných 3D modelů, při udržení pevné kontroly nad těmito modely (být schopen vracet se zpět v modelování a moci měnit parametry) a realizovat tyto modely (3D tisk, CNC obrábění nebo celá konstrukční pracoviště). To je důvod proč se velmi liší od některých jiných 3D aplikací vytvářených pro jiné cíle, jako je animovaný film nebo hry. Jeho křivka osvojování znalostí může být příkrá, zvláště je-li to Váš první kontakt se 3D modelováním. Jestli někde narazíte, nezapomeňte, že je zde přátelská komunita na [FreeCAD forum](http://forum.freecadweb.org/index.php), která Vám může rychle pomoci.

Se kterou pracovní plochou začnete závisí na typu práce, kterou chcete s FreeCADem dělat: Chete-li pracovat s mechanickými modely nebo obecněji s objekty s vyšší přesností, asi budete chtít zkusit [pracovní plochu Návrh dílu](/PartDesign_Workbench/cs "PartDesign Workbench/cs"). Budete-li pracovat ve 2D, pak přepněte do [pracovní plochy Kreslení](/Draft_Workbench/cs "Draft Workbench/cs") nebo [pracovní plochy Náčrt](/Sketcher_Workbench/cs "Sketcher Workbench/cs") potřebujete-li vazby. Chcete-li dělat BIM, spusťte [pracovní plochu Architektura](/Arch_Workbench/cs "Arch Workbench/cs"). Pracujete-li s návrhy lodí, je zde pro Vás speciální [pracovní plocha Loď](/Ship_Workbench/cs "Ship Workbench/cs"). A jestliže přicházíte ze světa OpenSCADu, zkuste [pracovní plochu OpenSCAD](/OpenSCAD_Workbench/cs "OpenSCAD Workbench/cs").

Pracovní plochy můžete přepínat kdykoliv a také můžete [uživatelsky nastavovat](/Interface_Customization/cs "Interface Customization/cs") Vaši oblíbenou pracovní plochu přidáním nástrojů z jiných pracovních ploch.

## Práce s pracovními plochami Návrh dílu a Náčrt

[Pracovní plocha Návrh dílu](/PartDesign_Workbench/cs "PartDesign Workbench/cs") je speciálně vytvořena pro stavbu komplexních objektů začínajících od jednoduchých tvarů a přidáváním nebo odebíráním částí (nazývané "vlastnosti") až po získání konečného objektu. Všechny vlastnosti aplikované během modelovacího procesu jsou uloženy v samostatném pohledu nazývaném [pohled stromu](/Document_structure/cs "Document structure/cs"), který také obsahuje další objekty Vašeho dokumentu. Objekt Návrh dílu si můžete představit jako výsledek posloupnosti operací, které jsou postupně aplikovány a vytvářejí tak jeden velký řetězec. V pohledu stromu vidíte výsledný objekt, ale můžete ho rozložit a získat všechny předchozí stavy a změnit jakýkoliv jejich parametr, což automaticky aktualizuje výsledný objekt.

Pracovní plocha Návrh dílu silně využívá jinou pracovní plochu - [pracovní plochu Náčrt](/Sketcher_Workbench/cs "Sketcher Workbench/cs"). Plocha náčrtu vám umožňuje kreslení 2D tvarů, které jsou definovány vazbami mezi 2D tvary. Například můžete nakreslit obdélník a nastavit vazbu délky na jednu z jeho stran. U této strany už pak dále dále nejde změnt rozměr (dokud jení vazba změněna).

Tyto 2D tvary vytvořené v Náčrtu jsou často používány v pracovní ploše Návrh dílu, např. vytvoření 3D objemu nebo kreslení oblastí na plochách Vašich objektů, které budou následně odebrány z hlavního objemu objektu. Toto je typický pracovní postup Návrhu dílu:

1. Vytvoření nového náčrtu
2. Nakreslení uzavřeného tvaru (ujistěte se, že všechny body jsou spojeny)
3. Uzavřete náčrt
4. Pomocí nástroje Blok (Pad) z něj vytvořte 3D těleso
5. Vyberte jeden povrch vysunutého objemu
6. Vytvořte druhý náčrt (tentokrát bude nakreslen na povrchu vybrané plochy)
7. Nakreslete uzavřený tvar
8. Uzavřete náčrt
9. Z druhéno náčrtu vytvořte Kapsu (Pocket) na prvním objektu

Výsledkem je takovýto objekt:

![](/images/Partdesign_example.jpg)

Kdykoliv můžete vybrat původní náčrty a modifikovat je nebo změnit parametry vysunutí operací Blok (Pad) a Kapsa (Pocket), což pak aktualizuje výsledný objekt.

## Práce s pracovními plochami Kreslení a Architektura

[Pracovní plocha Kreslení](/Draft_Workbench/cs "Draft Workbench/cs") a [pracovní plocha Architektura](/Arch_Workbench/cs "Arch Workbench/cs") se chovají trochu jinak než předešlé pracovní plochy, ačkoli dodržují stejná pravidla, která jsou společná celému FreeCADu. Ve zkratce, zatímco plochy Náčrt a Návrh dílu jsou primárně yrčeny k návrhu jednotlivých částí, plochy Kreslení a Architektura by měly usnadnit práci s několika jednoduššími objekty.

[pracovní plocha Kreslení](/Draft_Workbench/cs "Draft Workbench/cs") nabízí 2D nástroje trochu jednodušší, než jaké najdete v tradičních 2D CAD aplikacích jako je [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). Nicméně, kreslení ve 2D je mimo hlavní směr sféry FreeCADu, neočekávejte, že zde najdete plný rozsah nástrojů, které nabízejí tyto jednoúčelové aplikace. Většina nástrojů Kreslení nepracuje pouze ve 2D, ale také v plném 3D prostoru a využívají výhod pomocných systémů jako jsou [pracovní roviny](/Draft_SelectPlane/cs "Draft SelectPlane/cs") a [zachycování/uchopování objektů](/Draft_Snap/cs "Draft Snap/cs").

[Pracovní plocha Architektura](/Arch_Workbench/cs "Arch Workbench/cs") přidává do FreeCADu nástroj [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling), který umožňuje vytvářet stavební modely s parametrickými objekty. Pracovní plocha Architektura se opírá o další modely jako je Kreslení a Náčrt. Všechny nástroje Kreslení jsou přítomny i v pracovní ploše Architektura a většina nástrojů z Architektury používá pomocný kreslicí systém z Kreslení.

Typická práce s Architekturou a Kreslením může být:

1. Kreslení přímek pomocí nástroje Kreslní Přímka
2. Vyberte přímky a stiskněte tlačítko Zeď pro vytvoření zdi z těchto přímek
3. Spojte zdi jejich výběrem a stisknutím nástroje Přidat Zeď
4. Vytvořte objekt podlaží a přesuňte do něj zeď z pohledu stromu
5. Vytvořte objekt budova a přesuňte do něj podlaží z pohledu stromu
6. Kliknutím na nástroj Okno vytvořte okno, vyberte nastavení v jeko panelu a pak klikněte na plochu zdi
7. Přidejte rozměry prvním nastavením pracovní roviny, pokud je to potřeba a potom použijte nástroj Kóty

Dostanete toto:

![](/images/Arch_workflow_example.jpg)

Víc na stránce [Výukový program](/Tutorials/cs "Tutorials/cs").

## Skriptování

Any user can develop their own new features for FreeCAD and make them available to the FreeCAD community as an [addon](/Addon "Addon").

There are three types of addons:

* [Macros](/Macros "Macros"): short snippet of [Python](/Python "Python") code that provides a new tool or functionality in a single file ending with `.FCMacro`.
* [Workbenches](/External_workbenches "External workbenches"): collections of Python files that provide related [Gui Commands](/Gui_Command "Gui Command") (tools) centered around a particular topic.
* [Preference Packs](/Preference_Packs "Preference Packs"): distributable collections of user preferences.

## Scripting

A nakonec jedna z nejmocnějších vlastností FreeCADu je prostředí pro [skriptování](/Scripting/cs "Scripting/cs"). Z integrované konzoly Pythonu (nebo z jakéhokoliv externího skriptu Pythonu) můžete získat přístup k téměř všem částem FreeCADu, vytváření nebo modifikaci konstrukcí, modifikaci zobrazení objektů ve 3D scéně nebo přístup a možnost modifikace interface FreeCADu. Skriptování v Pythonu může také být použito v [makrech](/Macros/cs "Macros/cs"), které poskytují snadné metody pro vytváření uživatelských příkazů.

## Co je nového

* [Verze 0.11 Release notes](/Release_notes_0.11 "Release notes 0.11") : Co je nového ve verzi 0.11 FreeCADu
* [Verze 0.12 Release notes](/Release_notes_0.12 "Release notes 0.12") : Co je nového ve verzi 0.12 FreeCADu
* [Verze 0.13 Release notes](/Release_notes_0.13 "Release notes 0.13") : Co je nového ve verzi 0.13 FreeCADu
* [Verze 0.14 Release notes](/Release_notes_0.14 "Release notes 0.14") : Co je nového ve verzi 0.14 FreeCADu

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/cs&oldid=1459815>"