---
title: Architektura Střecha
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch Střecha                                   |
| Umístění Menu                                  |
| Arch → Střecha                                 |
| Pracovní stoly                                 |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce                               |
| R F                                            |
| Představen ve verzi                            |
| -                                              |
| Viz také                                       |
| _Nikdo_                                        |
|                                                |

## Popis

Nástroj Střecha umožňuje vytvořit šikmou střechu z vybraných drátů. Vytvořená střecha je parametrická a udržuje vztahy se základním objektem. Mějte na paměti, prosím, že tento nástroj je stále ještě ve vývoji a může zhavarovat u velmi komplexních tvarů. Vše je založeno na principu, že každá viditelná hrana je přidělena profilu střechy (sklon, šířka, přesah, tloušťka, atd)

**Note:** This tool is still in development, and might fail with very complex shapes.

![](/images/RoofExample.png)

![](/images/RoofExample.png)

## Použití

1. Vytvořte drát proti směru hodinových ručiček a vyberte jej.
   - ![](/images/CounterclockwiseWire.png)
2. Klikněte na ![](/images/Arch_Roof.png) [Arch Střecha](/Arch_Roof "Arch Roof") nebo stiskněte klávesy R a potom F
3. Standardní objekt střechy může mít podivný tvar. Je to proto, že nástoj nemá všechny potřebné informace.
4. Po vytvoření standardní střechy, dvojkliknete na tento objekt ve stromu pohledu, abyste získali editovací přístup k vlastnostem. Úhel musí být mezi 0 a 90 stupňů.
   - ![](/images/RoofTable.png)
5. Každá čára koresponduje se střešním panelem. Takže můžete nastavit požadované vlastnosti pro každý panel střechy.
6. Může Vám pomoci to, že můžete nastavit Úhel nebo Vnitřní šířku na 0 a definovat Relativní Id, což zajistí automatický výpočet pro vyhledání relativních dat k relativnímu Id.
7. Funguje to následovně:
   1. Je-li Úhel = 0 a Vnitřní šířka = 0 pak profil je identický k relativnímu profilu.
   2. Je-li Úhel = 0 pak úhel je vypočten tak, že výška je stejná jako u relativních profilu.
   3. Je-li Sklon = 0 pak Vnitřní šířka je vypočtena tak, že výška je stejná jako u relativních profilu.
8. A nakonec, nastavení úhlu na 90 stupňů vytvoří štít.
   - ![](/images/RoofProfil.png)

## Usage (solid base)

If your roof has a complex shape (e.g. contains pitched windows or other non-standard features) you can create a custom solid object using various other FreeCAD workbenches ([Part](/Part_Workbench "Part Workbench"), [Sketcher](/Sketcher_Workbench "Sketcher Workbench") etc.). And then use this solid as the Údaje**Base** object of your roof:

1. Select the solid base object.
2. Press the ![](/images/Arch_Roof.svg) [Arch Roof](/Arch_Roof "Arch Roof") button, or press R then F keys.

## Subtracting a roof

Roofs have an automatically generated subtraction volume ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") for roofs with a solid base). When a roof is [removed](/Arch_Remove "Arch Remove") from the walls of a building, both the roof itself as well as everything above it is subtracted from the walls.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): It is possible to override the automatic subtraction volume by setting the Údaje**Subvolume** property of the roof to a custom solid object.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Solid-based roof before (1st image) and after (2nd image) [removing](/Arch_Remove "Arch Remove") it from walls.  
The 3rd image shows the generated subtraction volume.

## Vlastnosti

An Arch Roof object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Roof

- Údaje**Úhly**: Seznam šikmých úhlů střešních panelů (úhel pro každou hranu v drátu).
- Údaje**Vnitřní šířky**: Seznam šířek střešních panelů (sklon pro každou hranu drátu).
- Údaje**IdRel**: Seznam relací Id úhlů sklonů střechy
- Údaje**Tloušťka**: Seznam tlouštěk střešních panelů (tloušťka pro každou hranu v drátu).
- Údaje**Přesah**: Seznam přesahů střešních panelů (přesah pro každou hranu v drátu).
- Údaje**Povrch**: Index povrchu, který má být použit u základního objektu #Ve skutečnosti není použit

## Scripting

## Skriptování

Nástroj Střecha může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

: Vytvoří střechu založenou na uzavřeném drátu. Můžete dodat seznam úhlů, vnitřních šířek, idrel (relativních Id), tlouštěk, přesahů pro každou hranu v drátu, který definuje tvar střechy. Standard pro úhel je 45 stupňů a seznam je automaticky zkompletován tak aby odpovídal počtu hran v drátu.

Příklad:

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/cs&oldid=1539741>"
