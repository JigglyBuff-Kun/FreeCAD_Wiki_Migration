---
title: Architektura Zeď
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Zed' |
| Umístění Menu |
| Arch → Zed' |
| Pracovní stoly |
| [Architettura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| W A |
| Představen ve verzi |
| - |
| Viz také |
| [Struktura](/Arch_Structure/cs "Arch Structure/cs") |
|  |

## Popis

Tento nástroj staví objekt Zeď od začátku nebo na vrchní části jakéhokoliv objektu založeného na [tvaru](/Part_Workbench "Part Workbench") nebo [síti](/Mesh_Workbench "Mesh Workbench"). Zeď může být postavena i bez jakéhokoliv základního objektu, v takovém případě se chová jako trojrozměrné těleso, které má vlastnosti délka, šířka a výška. Pokud je postavena na vrchní části existujícího tvaru, může být založena na:

* **2D lineárním objektu**, jako jsou přímky, lomené čáry, úhly nebo náčrty, v takovém případě můžete měnit tloušťku, zarovnání (vlevo, vpravo nebo na střed) a výšku. Vlastnost délka nemá žádný vliv.
* **rovné ploše**, v takovém případě můžete měnit pouze výšku. Vlastnosti délka a šířka nemají žádný vliv. Je-li plocha svislá, bude se používat vlastnost šířka místo výšky, což umožňuje vytvořit zeď z jakoby prostorových objektů nebo hmotových studií.
* **tělese**, kdy vlastnosti délka šířka a výška nemají žádný vliv. Zeď jednoduše přebírá tvary podkladového tělesa.
* **síti**, v takovém případě musí být podkladová síť uzavřená bez mezer.

![](/images/Arch_Wall_example.jpg)

Walls built from a line, a wire, a face, a solid, and a sketch

Zdi také mohou být přidávány nebo odebírány. Přídavky jsou další objekty jejichž tvary jsou připojeny ke tvaru zdi, zatímco odebírání jsou tvary odebírané ze zdi. Přidávání a odebírání se dělá pomocí nástrojů [Přidat](/Arch_Add "Arch Add") and [Odebrat](/Arch_Remove "Arch Remove"). Přidávání a odebírání nemá žádný vliv na parametry zdi jako jsou výška a šířka, které mohou být dále měněny. Zeď může mít také automatickou výšku, a to v případě když je včleněna do výškově daného objektu jako je [podlaží](/Arch_Floor "Arch Floor"). Výška pak musí být nastavena na 0, zeď pak přebírá výšku specifikovanou v rodičovském objektu.

Pokud se má několik zdí protínat, musíte je umístit do [podlaží](/Arch_Floor "Arch Floor") aby se protínaly v jeho konstrukci.

## Použití

### Kreslení zdi z náčrtu

1. Stiskněte tlačítko ![](/images/Arch_Wall.png) [Zeď](/Arch_Wall "Arch Wall") nebo klávesy W a A
2. Klikněte na první bod v 3D pohledu nebo zadejte koordináty
3. Klikněte na druhý bod v 3D pohledu nebo zadejte koordináty

### Nakreslení zdi na vybraném objektu

1. Vyberte jeden nebo více geometrických objektů(Nakreslený objekt, nákres, atd.)
2. Stiskněte tlačítko [Zeď](/Arch_Wall "Arch Wall") nebo stiskněte klávesy W a A
3. Nastavte požadované vlastnosti jako je výška nebo šířka.

## Volby

* Výška, šířka a zarovnání zdi může být nastavena během kreslení pomocí zadávacího panelu
* Připojením zdi na existující zeď budou obě zdi spojeny do jedné. Způsob jakým budou obě zdi spojeny závisí na jejich vlastnostech: mají-li stejnou šířku, výšku a zarovnání a je-li povolena volba "spojit základní náčrty" ve volbách Architektury, výsledná zeď bude jeden objekt založený na náčrtu vytvořeného z několik segmentů. V ostatních případech bude druhá zeď přidána k první zdi jako přídavek.
* Po prvním bodu tiskněte klávesu X, Y nebo Z k určení druhého bodu v požadované ose.
* Pro zadání koordinátů ručně jednoduše vložte číslo a stiskněte klávesu ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu R nebo klikněte/odklikněte zaklikávací políčko **Relativně**. Je-li nastaven relativní mód, budou koordináty druhého bodu relativní k prvnímu bodu. Není-li nastaven, koordiánty jsou absolutní k základnímu bodu (0,0,0).
* Stiskněte klávesu SHIFT při [zadávání](/Draft_Constrain "Draft Constrain") druhého bodu horizontálně nebo vertikálně v relaci k prvnímu bodu.
* Stiskněte klávesu ESC nebo **Cancel** pro zrušení probíhajícího příkazu.
* Dvojklik na zeď v panelu stromu po jejím vytvoření Vám umožňuje přejít do editačního módu a modifikovat ji

## Uchopování

Uchopování pracuje trochu odlišně ve Zdech než v jiných objektech Architektury nebo Kreslení. Pokud má zeď podkladový objekt, bude vázána na základový objekt místo na konstrukci zdi, což Vám umožní snadněji vyrovant zdi k jejich základně. Nicméně, pokud specifikujete, že chcete uchopovat podle konstrukce zdi stisknutím klávesy CTRL bude uchopování přepnuto na objekt zdi.

![](/images/Arch_wall_snap.jpg)

![](/images/Arch_wall_snap.jpg)

## Vlastnosti

An Arch Wall object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Blocks

* Údaje**Block Height**: The height of each block.
* Údaje**Block Length**: The length of each block.
* Údaje**Count Broken**: The number of broken blocks (read-only).
* Údaje**Count Entire**: The number of entire blocks (read-only).
* Údaje**Joint**: The size of the joints, the empty space, between blocks.
* Údaje**Make Blocks**: Enables block generation.
* Údaje**Offset First**: The horizontal offset of the first and every uneven line of blocks.
* Údaje**Offset Second**: The horizontal offset of the second and every even line of blocks.

Component

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC Attributes

See [Arch Component](/Arch_Component#Properties "Arch Component").

Wall

:   ![](/images/Sketch_vs_Wall.jpg)

Objekt zdi dědí vlastnosti objektů [Modul Díl](/Part_Workbench "Part Workbench") a má ještě následující zvláštní vlastnosti:

* Údaje**Zarovnání**: Zarovnání zdi k její základně: Vlevo, vpravo nebo na střed
* Údaje**Základna**: Základový objekt, na kterém je postavena
* Údaje**Plocha**: Index plochy, která je použita ze základového objektu. Není-li hodnota nastavena nebo je 0, je použit celý objekt
* Údaje**Vynucená lomená čára**: Je-li True a zeď je založena na ploše, je využit pouze obvodová čára plochy a výsledkem je zeď ohraničující plochu
* Údaje**Délka**: Délka zdi (není využito pokud je zeď založena na objektu)
* Údaje**Šířka**: Šířka zdi (není využito pokud je zeď založena na ploše)
* Údaje**Výška**: Výška zdi (není využito pokud je zeď založena na tělese)
* Údaje**Normal**: Směr vysunutí pro zeď. Je-li nastaveno na (0,0,0) je vysunutí zdi automatické.

## Scripting

## Skriptování

Nástroj Zeď může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
Wall = makeWall(baseobj=None, length=None, width=None, height=None, align="Center", face=None, name="Wall")

```

* Vytvoří zeď založenou na zadaném objektu, což může být náčrt, nakreslený objekt, plocha nebo těleso. Zarovnání může být "Center","Left" or "Right". Není-li zadán žádný podkladový objekt, pak musíte použít číslené hodnoty pro délku, šířku a výšku. Face může být použito pro zadání indexu použité plochy podkladového objektu, na kterém je zeď stavěna, místo použití celého objektu.
* Vrací vytvořenou zeď nebo None když operace skončila neúspěšně.

Příklad:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
Draft.move(Wall2, FreeCAD.Vector(0, -1000, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Wall/cs&oldid=1548498>"