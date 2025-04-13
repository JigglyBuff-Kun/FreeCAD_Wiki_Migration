---
title: Elipsă 2D
---
|  |
| --- |
| Elipsă 2D |
| poziția meniului |
| Draft → Ellipse |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| E L |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Circle](/Draft_Circle/ro "Draft Circle/ro") |
|  |

## Descriere

Instrumentul Ellipse creează o eliptsă în planul curent [work plane](/Draft_SelectPlane/ro "Draft SelectPlane/ro") introducând două puncte, definind colțul unei casete rectangulare în care se va potrivi elipsa. Este nevoie de [linewidth and color](/Draft_Linestyle/ro "Draft Linestyle/ro") setată anterior pe fila Activități.

A Draft Ellipse can be turned into an elliptical arc by setting its Date**First Angle** and Date**Last Angle** properties to different values.

![](/images/Draft_ellipse_example.jpg)

![](/images/Draft_ellipse_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Cum se utilizează

1. Apăsați butonul ![](/images/Draft_Ellipse.png) Draft Ellipse sau apăsați E apoi tastele L
2. Faceți clic pe un prim punct din vizualizarea 3D sau tastați un coordinate
3. Faceți clic pe un al doilea punct din vizualizarea 3D sau tastați un coordinate

## Opţiuni

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Pentru a introduce manual coordonatele, pur și simplu introduceți numerele, apoi apăsați ENTER between each X, Y and Z component.
* Apăsați Tsau click pe caseta de validare pentru a bifa/debifa butonul **Continue** . Dacă modul Continuu este activat, instrumentul Ellipse se va reporni după ce dați cel de-al doilea punct, permițându-vă să desenați o altă elipsă fără să apăsați din nou butonul Ellipse.
* Apăsați CTRL în timp ce desenați pentru a forța punctul [snapping](/Draft_Snap/ro "Draft Snap/ro") punctul dvs. către cea mai apropiată locație, independent de distanță.
* Apăsați SHIFT în timp ce atrageți la [constrain](/Draft_Constrain/ro "Draft Constrain/ro") al doilea punct pe orizontală sau pe verticală în raport cu primul.
* Apăsați I apoi butonul **Filled** pentru a avea elipsa umplută cu o fațetă după ce a fost închisă
* Apăsați ESC sau butonul **Cancel** pentru a abandona comanda.
* Ellipses, atunci când în modul de afișare "Flat Lines", poate afișa un model de hașură, prin setarea proprietății "Pattern" de mai jos.

## Notes

* A Draft Ellipse can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Ellipse](/Part_Ellipse "Part Ellipse") instead of a Draft Ellipse.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft Ellipse object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* DATE**Major Radius**: Semiaxa majoră a eleipseiaza majoră a elipsei
* DATE**Minor Radius**: Semiaxa minoră a elipsei
* DATE**Make Face**: Umple elipsa cu o fațetă
* VEDERE**Pattern**: Specificați modelul de hașură pentru a umple elipsa cu el
* VEDERE**Pattern Size**: specificați modelul și mărimea hașurii

### View

Draft

See also [Draft Pattern](/index.php?title=Draft_Pattern/ro&action=edit&redlink=1 "Draft Pattern/ro (page does not exist)") page.

## Scripting

## Script-Programare

Instrumentul Ellipse poate fi folosit în [macros](/Macros/ro "Macros/ro") și din consola python utilizând următoarea funcție:

To create a Draft Ellipse use the `make_ellipse` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeEllipse` method.

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

* Creează un obiect elipsă cu o semiaxă/rază majoră și semiaxă/minoră dată.
* Dacă este dată o destinație de plasare, aceasta este utilizată.
* Dacă facemode este False, elipsa este arătată ca un cadru de sârmă, altfel ca o fațetă.
* Returnează obiectul nou creat.

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/ro&oldid=1472941>"