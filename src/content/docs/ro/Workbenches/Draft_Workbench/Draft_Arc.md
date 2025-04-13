---
title: Draft Arc de Cerc
---
|  |
| --- |
| Arc de Cerc |
| poziția meniului |
| Draft → Arc |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| A R |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Circle](/Draft_Circle/ro "Draft Circle/ro") |
|  |

## Descriere

Instrumentul Arc crează un arc în planul curent [work plan](/Draft_SelectPlane/ro "Draft SelectPlane/ro") introducând patru puncte, centrul, raza, primul punct și ultimul punct sau prin alegerea de tangente sau orice combinație a acestora. Este nevoie de [linewidth and color](/Draft_Linestyle/ro "Draft Linestyle/ro") setată anterior pe fila Activități. Acest instrument funcționează la fel ca instrumentul [Draft Circle](/Draft_Circle/ro "Draft Circle/ro"), dar adaugă unghiuri de început și de sfârșit.

The ![](/images/Draft_Arc.svg) **Draft Arc** command creates a circular arc on the current [working plane](/Draft_SelectPlane "Draft SelectPlane") from a center, a radius, a start angle and an aperture angle. The radius and the angles can be defined by picking points.

A Draft Arc is in fact a [Draft Circle](/Draft_Circle "Draft Circle") with a Date**First Angle** that is not the same as its Date**Last Angle**.

![](/images/Draft_Arc_example.jpg)

![](/images/Draft_Arc_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Cum se folosește

1. Apăsați butonul ![](/images/Draft_Arc.png) Draft Arc button, or press A sau apăsați tastele A apoi R
2. Faceți clic pe un prim punct din vizualizarea 3D sau tastați un coordinate
3. Faceți clic pe un al doilea punct din vizualizarea 3D sau introduceți o valoare de rază
4. Faceți clic pe un al treilea punct din vizualizarea 3D sau introduceți un unghi de pornire
5. Faceți clic pe un al patrulea punct din vizualizarea 3D sau introduceți un unghi final

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opțiuni

* Utilizarea primară a instrumentului arc este prin alegerea a patru puncte: centrul, un punct pe circumferință, definind raza, un al treilea punct care definește începutul arcului, iar al patrulea definește sfârșitul.
* Prin apăsarea tastei ALT, puteți selecta o tangentă în locul punctului de selectare, pentru a defini cercul de bază al arcului. Prin urmare, puteți construi mai multe tipuri de cercuri selectând una, două sau trei tangente.
* Direcția arcului depinde de mișcarea pe care o faceți cu mouse-ul. Dacă începeți să vă mișcați în sensul acelor de ceasornic după introducerea celui de-al treilea punct, arcul va merge în sensul acelor de ceasornic. Pentru a merge în sens invers acelor de ceasornic, pur și simplu mișcați mouse-ul înapoi peste cel de-al treilea punct, până când arcul începe să tragă în cealaltă direcție.
* Pentru a introduce manual coordonatele, pur și simplu introduceți numerele, apoi apăsați ENTER între fiecare componentă X, Y și Z.
* Apăsați tasta T sau faceți clic pe caseta de selectare pentru a bifa/debifa butonul **Continue**. Dacă modul continuat este activat, instrumentul Arc va reporni după ce dați cel de-al patrulea punct, permițându-vă să desenați un alt arc fără să apăsați din nou butonul Arc.
* Apăsați CTRL în timp ce desenați pentru a forța [snapping](/Draft_Snap/ro "Draft Snap/ro") punctul dvs. către cea mai apropiată locație, independent de distanța.
* Apăsați SHIFT în timp ce desenați [constrain](/Draft_Constrain/ro "Draft Constrain/ro") punctul dvs. orizontal sau vertical în raport cu centrul.
* Apăsați butonul ESC sau butonul **Anulare** pentru a întrerupe comanda curentă.
* Arcul poate fi transformat într-un cerc după creare, prin stabilirea aceleiași valori la propriul său unghi și proprietăți ultimul unghi.

## Notes

* A Draft Arc can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

## Proprietăți

* DATE**Radius**: Raza arcului de cerc
* DATE**First Angle**: Unghiul primului punct al arcului de cerc
* DATE**Last Angle**: Unghiul ultimului punct al arcului de cerc

## Scripting

## Scripturi

Instrumentul Circle poate fi de asemenea utilizat pentru a crea arce în [macros](/Macros/ro "Macros/ro") și din consola Python utilizând următoarea funcție, oferindu-i argumente suplimentare:

To create a Draft Arc use the `make_circle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeCircle` method.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

arc1 = Draft.make_circle(200, startangle=0, endangle=90)
arc2 = Draft.make_circle(500, startangle=20, endangle=160)
arc3 = Draft.make_circle(750, startangle=-30, endangle=-150)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc/ro&oldid=1472891>"