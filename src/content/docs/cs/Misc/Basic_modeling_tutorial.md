---
title: Basic modeling tutorial
---
|  |
| --- |
| Tutorial |
| Topic |
| Introduction to modelling |
| Level |
| Beginner |
| Time to complete |
| 15 minutes |
| Authors |
|  |
| FreeCAD version |
|  |
| Example files |
|  |
| See also |
| *None* |
|  |

## Introduction

Tento Výukový program základního modelování Vám ukáže jak vymodelovat ocelový úhelník. Měli byste vědět že FreeCAD je modulární při konstruování a jako mnoho jiných CAD programů má vždy více než jednu možnost jak věci dělat. Zde si projdeme dvě metody.

This tutorial was written with version 0.15 of FreeCAD.

## Než začneme

Mějte na mysli, že FreeCAD je stále v ranné fázi vývoje a proto nemůže být zatím tak produktivní jako jiné CAD aplikace a určitě se setkáte s chybami nebo si vyzkoušíte pády aplikace. FreeCAD už má možnost ukládat záložní soubory. Počet těchto záložních souborů může být specifikován v dialogovém okně předvoleb. Neváhejte použít 2 až 3 záložní soubory dokud nebudete umět s FreeCADem dobře pracovat.

Rozdělanou práci ukládejte často a občas ji uložte pod jiným jménem, získáte tak "bezpečnou" kopii, abyste se mohli vrátit k použitelné verzi Vašeho modelu a byli tak připraveni na možnost, že některé příkazy nevrátí očekávané výsledky.

## Úvod do modelovacích technik

První (a základní) technika modelování těles je [Constructive Solid Geometry (CSG)](http://en.wikipedia.org/wiki/Constructive_solid_geometry). Pracujete se základními tvary jako jsou kostky, válce, koule a kužely a konstruujete z nich požadované tvary jejich kombinací, odečítáním jednoho tvaru od druhého nebo jejich protínáním. Tyto nástroje jsou součástí [Pracovní plochy Díl](/Part_Workbench/cs "Part Workbench/cs"). Můžete také uplatnit transformace tvarů, jako jsou zaoblení nebo úkosy hran. Tyto nástroje jsou také v [Pracovní ploše Díl](/Part_Workbench/cs "Part Workbench/cs").

Potom jsou zde také další pokročilé nástroje. Začnete kreslením 2D profilů, které potom vysunete nebo obtočíte.

Takže začněme tak, že si vyzkoušíme udělat nějaké železné nohy ke stolu pomocí těchto dvou metod.

## 1.metoda - Konstrukční geometrie těles

* Začněte na [pracovní ploše Díl](/Part_Workbench/cs "Part Workbench/cs") (menu **Pohled > Pracovní plocha > Díl**)
* Klikněte na tlačítko ![](/images/Part_Box.png) [Box](/Part_Box/cs "Part Box/cs") pro vytvoření boxu (kostky)
* Změnte jho rozměry tak, že jej vyberete buď ve 3D prostoru nebo kliknutím na něj v záložce Projektu vlevo, potom
* klikněte na záložku Data dole v okně Projektu a změňte hodnoty výšky, délky a šířky na 750mm, 50 a 50 *(viz. Obr. 1.1)*
* Stejným způsobem vytvořte druhý box, ale s hodnotami 750, 40 a 40mm. Ve výchozím postavení bude tento box překrývat ten první. *(viz. Obr. 1.2)*
* Teď odečtete druhý box od prvního. Vyberte ten první (nazvaný Box), potom druhý (nazvaný Box001), pozor, pořadí výběru je důležitét! (ujistěte se, že oba tvary jsou vybrány v okně stromu projektu. Pamatujte si jednu věc: v navigačním módu Invertor - Vynálezce, nefunguje kombinace Ctrl + klik pro vícenásobný výběr. [Switch](/Mouse_Model "Mouse Model") to either CAD or Blender selection.)
* On the Part Workbench toolbar, click on the ![](/images/Part_Cut.png) [Cut](/Part_Cut "Part Cut") tool.

![](/images/Tutorial-normand01.jpg)

Obr. 1.1 První box

![](/images/Tutorial-normand02.jpg)

Obr. 1.2 Druhý box na prvním, připraven k odečtení

![](/images/Tutorial-normand03.jpg)

Obr. 1.3 Po odečtení

Nyní máte Váš první železný úhelník *(Obr. 1.3)*. všimněte si, že v okně stromu projektu vlevo byly oba boxy přepsány objektem "Cut". Ve skutečnosti nezmizely, ale jsou seskupeny pod objektem Cut. Klikněte na + před nimi a uvidíte, že oba boxy jsou stále zde, ale zbarveny šedě *(Obr. 1.4)*. Když kliknete na některý z nich a stisknete klávesu mezerník, tak se ukáže. Mezerník přepíná viditelnost vybraných objektů. *(Obr. 1.5)*

Nechcete úhelník orientovaný takto? Potřebujete pouze změnit umístění boxu Box001. Vyberte jej, mezerníkem zviditelněte a v záložce Data klikněte na + před Umístěním a potom rozbalte parametr Pozice a změňte jeho souřadnice X a Y. Stiskněte ENTER, opět skryjte Box001 a orientace Vašeho úhelníku je nyní jiná. *(Obr. 1.5)* Můžete změnit i rozměry tvaru a objekt Cut bude aktualizován.

![](/images/Tutorial-normand04.jpg)

Obr. 1.4 Operace odečtení ponechá její původní objekty (boxy)

![](/images/Tutorial-normand05.jpg)

Obr. 1.5 Stále ještě můžete objekty zviditelnit

Mimochodem, můžeme přidat zaoblení, tak bude úhelník více realistický. Použijeme nástroj ![](/images/Part_Fillet.png) [Zaoblení](/Part_Fillet/cs "Part Fillet/cs"). *(Obr. 1.6)*

![](/images/Tutorial-normand06.jpg)

Obr. 1.6 Zaoblené hrany

## 2.metoda - Vysunutí profilu

Tato metoda vyžaduje začít kreslení 2D profilu. Musíte aktivovat [pracovní plocha 2D Kreslení](/Draft_Workbench/cs "Draft Workbench/cs") (menu **Pohled > Pracovní plocha > 2D Kreslení**).

Dále potřebujeme nastavit [pracovní rovinu](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Podle verze FreeCADu máte přímo pod nástrojovým pruhem vpravo tlačítko "None". Klikněte na ně a vlevo se objeví hned za "aktivní příkaz": Vyberte rovinu Odstup, potom textové pole a několik dalších tlačítek. Předpokládejme, že chcete začít profil v půdorysu, stiskněte XY. Tlačítko "None" nyní bude ukazovat "Top" jako aktivní rovinu.
[Podívejte se na poznámku.](#DraftPlaneButton)

Vyberte nástroj ![](/images/Draft_Wire.png) [Drát (lomená čára)](/Draft_Wire/cs "Draft Wire/cs"), potom začněte kreslit tvar použitím textových polí pro pozice X a Y. Mělo by být zakliknuto políčko "Relativně" i políčko "Vyplněno".

* 1. bod: 0,0
* 2. bod: 50,0
* 3. bod: 0,10
* 4. bod: -40,0
* 5. bod: 0,40
* 6. bod: -10,0
* 7. bod nebudeme zadávat, lepší je kliknout na tlačítko "Uzavřít" pro uzavření profilu. Teď bychom měli mít profil, označený "Drát" v záložce okna stromu projektu:

![](/images/Tutorial-normand07.jpg)

Obr. 1.7 Základní drát

Na numerické klávesnici stiskněte nulu a nasatvíte axonometrický pohled.

Aktivujte [pracovní plochu Díl](/Part_Workbench/cs "Part Workbench/cs").

Klikněte na nástroj ![](/images/Part_Extrude.png) [Vysunout](/Part_Extrude/cs "Part Extrude/cs").

Na záložce Úkoly vlevo vyberte objekt **Drát**. Potom zadejte požadovanou délku, třeba 750mm. Směr ponechte na Z. Klikněte na Použít. Nyní bychom měli mít **Vysunutý** objekt v záložce stromu projektu *(Obr. 1.8)*

![](/images/Tutorial-normand08.jpg)

Obr. 1.8 Vysunutý objekt

U této metody mám drobné varování ve srovnání s první: pro úpravu tvaru musíte upravit Drát a to není tak jednoduché jako u předešlé metody.

A je ještě několik dalších způsobů jak to udělat! Doufám, že tyto dva příklady Vám pomohou začít. Určitě cestou narazíte na pár zádrhelů (I já jsem narazil, když jsem se učil FreeCAD a to mám zkušenosti s 3D CAD aplikacemi), ale neváhejte se zeptat na [FreeCAD fóru](http://forum.freecadweb.org)!

Poznámka k tlačítku Pracovní rovina Kreslení:

Označení na tlačítku Vašeho FreeCADu může být jiné v závislosti na verzi a také na tom co jste dělali předtím. Označení tlačítka může být: "top", "front", "side", "None" nebo Vektor reprezentovaný jako d(0.0,0.0,1.0). Také může být prázdný, Například:

![](/images/DraftPlaneNone.png)

Výběr roviny None

![](/images/DraftPlaneTop.png)

Výběr roviny Top

![](/images/DraftPlaneView.png)

Výběr roviny View

Instrukce uvedené výše budou fungovat bez ohledu na to co je tlačítku.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_modeling_tutorial/cs&oldid=1251484>"