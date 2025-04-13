---
title: Draft Filament/Polilinie
---
|  |
| --- |
| Draft Wire |
| poziția meniului |
| Draft → Wire |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| P L |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Line](/Draft_Line/ro "Draft Line/ro"), [Draft BSpline](/Draft_BSpline/ro "Draft BSpline/ro") |
|  |

## Description

## Descriere

Unealta filament "Wire" creează o polilinie (o succesiune de segmente legate între ele) în [planul de lucru](/Draft_SelectPlane/ro "Draft SelectPlane/ro") curent. Preia valorile pentru [lăţimea și culoarea liniei](/Draft_Linestyle/ro "Draft Linestyle/ro") setate în prealabil pe tab-ul "Sarcini" (Tasks). Unealta "Wire" se comportă ca şi unealta [linie din CIornă](/Draft_Line/ro "Draft Line/ro"), cu deosebirea că va continua şi după trasarea între primele două puncte.

The corners of a Draft Wire can be filleted (rounded) or chamfered by changing its Date**Fillet Radius** or Date**Chamfer Size** respectively. It is also possible to subdivide the edges of a Draft Wire by changing its Date**Subdivisions** property.

![](/images/Draft_Polyline_example.jpg)

![](/images/Draft_Polyline_example.jpg)

## Create

### Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Cum se foloseşte

1. Apăsați tasta ![](/images/Draft_Wire.png) Draft Wire button, or press W then I sau apăsați W apoi tastele I
2. Faceți clic pe un prim punct din vizualizarea 3D sau tastați un coordinate
3. Faceți clic pe un punct suplimentar în vizualizarea 3D sau tastați un coordinate
4. Apăsați F sau C sau faceți dublu clic pe ultimul punct sau faceți clic pe primul punct pentru a termina sau a închide filamentul/polilinia. Dacă filamentul este închis, acesta va fi, de asemenea, o fațetă, chiar dacă acesta apare ca o rețea wireframe.

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opțiuni

* Dacă sunt selectate mai multe linii [Draft Lines](/Draft_Line/ro "Draft Line/ro") atunci când apăsați butonul **Draft Wire**, acestea vor fi transformate într-un fir și comanda va ieși. [introduced in 0.17/ro](/Release_notes_0.17/ro "Release notes 0.17/ro")
* Apăsați butonul F sau butonul ![](/images/Draft_FinishLine.png) **Finish** pentru a finalize firul și a-l lăsa deschis
* Apăsați butonul C or the ![](/images/Draft_CloseLine.png) **Close** terminați firul, dar închizându-l prin adăugarea unui ultim segment între ultimul punct și primul.
* Apăsați X, Y sau Z după un punct pentru a restrânge următorul punct de pe axa dată.
* Pentru a introduce manual coordonatele, pur și simplu introduceți numerele, apoi apăsați ENTER între fiecare componentă X, Y și Z.
* Apăsați tasta R sau faceți clic pe caseta de selectare pentru a bifa/debifa butonul **Relativ**. Dacă modul relativ este activ, coordonatele punctului următor sunt relative la ultimul. Dacă nu, ele sunt absolute, luate din punctul de origine (0,0,0).
* Apăsați tasta T sau faceți clic pe caseta de selectare pentru a bifa/debifa butonul **Continue**. Dacă funcția continuă este activată, instrumentul Wire se va reporni după ce terminați sau închideți-l, permițându-vă să desenați altul fără să apăsați din nou butonul Wire.
* Apăsați CTRL în timp ce desenați pentru a forța ancorarea [snapping](/Draft_Snap/ro "Draft Snap/ro") punctului dvs. către cea mai apropiată locație, independent de distanța.
* Apăsați pe SHIFT în timp ce desenați [constrain](/Draft_Constrain/ro "Draft Constrain/ro") următorul punct pe orizontală sau pe verticală în raport cu ultimul.
* Apăsați butonul W sau apăsați butonul ![](/images/Draft_Wipe.png) **Șterge** pentru a elimina segmentele existente și a porni firul de la ultima punct.
* Apăsați tasta CTRL + Z sau apăsați pe ![](/images/Draft_UndoLine.png) **Undo** pentru a anula ultimul punct.
* Apăsați butonul I sau butonul **Fillet** pentru a avea firul umplut cu o fațetă dacă este închis.
* Apăsați butonul ESC sau butonul **Cancel** pentru a întrerupe comanda curentă.
* Firele închise, atunci când sunt în modul de afișare "Flat Lines", pot afișa un model de hașură, prin setarea proprietății "Pattern" de mai jos.

## Join

### Usage

1. The end points of the [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires to be joined must be exactly coincident. If required first adjust points to ensure that this is the case.
2. Select two or more [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire") button.
   * Select the **Drafting → ![](/images/Draft_Wire.svg) Polyline** option from the menu.
   * Use the keyboard shortcut: P then L.

## Notes

* A Draft Wire can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* A Draft Wire can be converted to a [Draft BSpline](/Draft_BSpline "Draft BSpline") with the [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline") command.
* [Draft Lines](/Draft_Line "Draft Line") and Draft Wires can also be joined with the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") command.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Wire object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Date**Area** (`Area`): (read-only) specifies the area of the face of the wire. The value will be `0.0` if Date**Make Face** is `false` or the face cannot be created.
* Date**Base** (`Link`)
* Date**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the wire.
* Date**Closed** (`Bool`): specifies if the wire is closed or not. If the wire is initially open this value is `false`, setting it to `true` will draw a line segment to close the wire. If the wire is initially closed this value is `true`, setting it to `false` will remove the last line segment and make the wire open.
* Date**End** (`VectorDistance`): specifies the end point of the wire.
* Date**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the wire.
* Date**Length** (`Length`): (read-only) specifies the total length of the wire.
* Date**Make Face** (`Bool`): specifies if the wire makes a face or not. If it is `true` a face is created, otherwise only the edges are considered part of the object. This property only works if Date**Closed** is `true` and if the wire does not self-intersect.
* Date**Points** (`VectorList`): specifies the points of the wire in its local coordinate system.
* Date**Start** (`VectorDistance`): specifies the start point of the wire.
* Date**Subdivisions** (`Integer`): specifies the number of subdivisions for each edge of the wire. If it is `1` each edge will be divided into `2` equal segments. Subdivisions are applied before chamfers and fillets.
* Date**Tool** (`Link`)

### View

Draft

* Vizualizare**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the wire.
* Vizualizare**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the wire, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vizualizare**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the wire, so it can be used as an annotation line.
* Vizualizare**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed wire. This property only works if Date**Make Face** is `true` and if Vizualizare**Display Mode** is `Flat Lines`.
* Vizualizare**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Script-Programare

*A se vedea [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics/ro "FreeCAD Scripting Basics/ro") pentru mai multe informații*

Instrumentul Wire tool poate fi utilizat în [macros](/Macros/ro "Macros/ro") și de la consola Python utilizând următoarele funcții:

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Creează un obiect `Wire` din lista dată de vectori sau din lista de puncte date `pointslist`.
  + Dacă închis este Adevărat sau dacă primele și ultimul puncte sunt identice, firul este închis.
* Each point in the list is defined by its `FreeCAD.Vector`
  + Alternatively, the input can be a `Part.Wire`, from which points are extracted
  + Dacă `closed` este `True` (și firul este închis, (primul și ultimul punct sunt identice)), firul va forma o fațetă.
* Se va folosi versiunea curentă de linie și culoare[Draft Linestyle](/Draft_Linestyle "Draft Linestyle").
* Returnează obiectul nou creat.

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/ro&oldid=1472872>"