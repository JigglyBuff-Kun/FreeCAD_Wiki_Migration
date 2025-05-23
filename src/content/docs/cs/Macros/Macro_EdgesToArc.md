---
title: EdgesToArc (Hrany do oblouku)
---
|  |
| --- |
| EdgesToArc |
| Popis |
| Pokud je to možné nahradí vybrané hrany kružnicovým obloukem. Užitečné pro obnovu oblouků rozpadlých do krátkých přímek.  Version macro : 1.0 Date last modification : 2014-01-02 Autor: Jreinhardt |
| Autor |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)") |
| Download |
| *None* |
| Odkazy |
| [Makro recepty|](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze |
| 1.0 |
| Datum poslední úpravy |
| 2014-01-02 |
| Verze FreeCAD |
| *None* |
| Výchozí zástupce |
| *None* |
| Viz též |
| [Macro SuperWire](/Macro_SuperWire/cs "Macro SuperWire/cs") |
|  |
|  |

## Description

Občas někdo narazí na drát (lomenou čáru), který je obsažen v oblouku vytvořeném z malých přímých segmentů. Často se to stává při práci se soubory z jiných programů. Toto makro umožňuje relativně snadno konvertovat takový oblouk složený z přímek zpět do kružnicového oblouku. Snižuje to velikost souboru a soubor to dělá mnohem snadněji zpracovatelným,

Pro použití tohoto makra musíte rozlámat drát do jednotlivých hran použitím funkce ![](/images/Draft_Downgrade.png) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade"). Potom jen vyberete segmenty, které chcete nahradit kružnicovým obloukem a spustíte makro. Potřebujete minimálně 2 segmenty.

Makro zkontroluje jestli segmenty leží na obecné kružnici a pokud ne, samo se ukončí. Jinak vytvoří oblouk a odstraní segmenty.

Kvůli malým nepřesnostem ve výpočtu, může funkce ![](/images/Draft_Upgrade.png) [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") někdy skončit chybně a vrátit oblouk zpět do drátu. V takovém případě poskytne lepší výsledek mnohem robustnější makro [Macro\_SuperWire](/Macro_SuperWire "Macro SuperWire").

## Script

ToolBar Icon ![](/images/Macro_EdgesToArc.png)

**Macro\_EdgesToArc.FCMacro**

```
import Draft
import FreeCADGui, FreeCAD
from FreeCAD import Base, Console
from math import atan2, pi, fabs

#This macro replaces a number of edges approximating a circular arc by a proper circular arc.
#It might be necessary to use the superwire macro to recombine the edges back to a wire, because of small errors in the calculations.

sel = FreeCADGui.Selection.getSelection()
if len(sel) < 2:
    Console.PrintError("Too few edges are selected\n")
edges = [s.Shape for s in sel]

start_vertices = []
end_vertices = []
for edge in edges:
    start_vertices.append(edge.Vertexes[0].Point)
    end_vertices.append(edge.Vertexes[1].Point)
vertices = start_vertices + end_vertices

start,end,middle = None,None,None

#find start and end points
for edge in edges:
    is_start = True
    is_end = True
    for point in end_vertices:
        if edge.Vertexes[0].Point.distanceToPoint(point) < 1e-8:
            is_start = False

    for point in start_vertices:
        if edge.Vertexes[1].Point.distanceToPoint(point) < 1e-8:
            is_end = False
    if is_start:
        start = edge.Vertexes[0].Point
    if is_end:
        end = edge.Vertexes[1].Point

#find middle point, at least not too far away from the middle

for v in vertices:
    ratio = v.distanceToPoint(start)/v.distanceToPoint(end)
    if ratio > 0.5 and ratio < 2.:
        middle = v
        break

if middle is None:
    Console.PrintError("Could not find suitable middle point\n")

arc = Part.ArcOfCircle(start,middle,end)

#Check circularity
circular = True
for v in vertices:
    if fabs(v.distanceToPoint(arc.Center) - arc.Radius) > 1e-6:
        Console.PrintError("Edges do not approximate a circular arc\n")
        circular = False
        break

if circular:
        Part.show(arc.toShape())
        for shape in sel:
            FreeCAD.ActiveDocument.removeObject(shape.Name)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_EdgesToArc/cs&oldid=1066741>"