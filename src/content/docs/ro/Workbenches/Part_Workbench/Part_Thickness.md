---
title: Part Grosimea
---
|  |
| --- |
| Part Thickness |
| Menu location |
| Part → Thickness |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Part Offset](/Part_Offset "Part Offset") |
|  |

## Description

## Descriere

Instrumentul **Thickness** funcționează pe forme solide și le trasnformă în obiecte goale tip cochilie, dând fiecărei fațete o grosime definită.
Pe unele solide vă permite să accelerați în mod semnificativ lucrarea și evitați extrudările și buzunarele.

## Usage

## Utilizare

1. Creați un solid
2. Selectați una sau mai multe fațete
3. Click pe instrumentul ![](/images/Part_Thickness.png) **Part Thickness**
4. Definiți parametrii (vedeți [Options](#Options))
5. Click pe OK pentru a confirma, creați operațiunea și eșiți din funcție
6. In tabelul Properties ajustați parametri dacă este necesar.

## Options

## Opțiuni

* Thickness: Grosimea peretelui obiectului rezultat, este setat la valoarea dorită
  + A positive value will offset the faces outward
  + A negative value will offset the faces inward
* Mode
  + Skin: Select this option if you want to get an item like a vase, headless but with the bottom
  + Pipe: Select this option if you want to get an object like a pipe, headless and bottomless. In this case it may be convenient to select the faces to be deleted before you start the tool. Helping with predefined views buttons or use the numeric keys.
  + RectoVerso:
* Join Type
  + Arc: removes the outer edges and create a fillet with a radius equal to the thickness defined
  + Tangent:
  + Intersection:
* Intersection:
* Self-intersection: Enables self-intersection
* Face / Done: Select the faces to be removed, then click Done
* Update view: Actualizează automat vizualizarea în timp real

## Notes

## Limitări

Uneori, pe o anumită formă produc rezultate bizare. Salvați munca înainte de a aplica grosimea pe obiecte complexe

## Links

## Legături

Un bun exemplu de cum se utilizează acest instrument găsiți pe forum: [Re: Help designing a simple enclosure](http://forum.freecadweb.org/viewtopic.php?f=3&t=3766&p=29741&hilit=enclosure#p29547)

## Exemple

**Hollow cylinder**

1. Create ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder "Part Cylinder") with radius 10mm and height 20mm
2. Select the top and bottom surface of the cylinder
3. Click on the ![](/images/Part_Thickness.svg) Thickness button (no need to change default settings) and press OK

Notes:

* For this shape, consider using ![](/images/Part_Tube.svg) [Tube](/Part_Tube "Part Tube") instead.
* Select the cylinder's top surface only to create a receptacle.

![](/images/ThicknessEsempio1.png)

![](/images/ThicknessEsempio2.png)

**Box-Enclosure**

![](/images/ThicknessEsempio3.png)

![](/images/ThicknessEsempio4.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Thickness/ro&oldid=1268326>"