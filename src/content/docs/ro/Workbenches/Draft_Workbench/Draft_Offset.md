---
title: Draft Offset
---
|  |
| --- |
| Draft Offset |
| poziția meniului |
| Draft → Offset |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| O S |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Part 2D Offset](/Part_Offset2D/ro "Part Offset2D/ro") |
|  |

## Descriere

Instrumentul Decalare deplasează obiectele selectate la o o distanță dată față de durentul paln [work plane](/Draft_SelectPlane "Draft SelectPlane"). Dacă nu este selectat niciun obiect, veți fi invitat să selectați unul.

![](/images/Draft_Offset_example.jpg)

Offsetting a Draft Wire

## Cum se folosește

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Selectați obiectele pe care doriți să le compensați
2. Apăsați butonul ![](/images/Draft_Offset.png) [Draft Offset](/Draft_Offset "Draft Offset") sau apăsați tasta O urmată apoi de tasta S
3. Faceți clic pe un punct din vizualizarea 3D sau tastați o distanță.

## Opţiuni

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Apăsați tasta T sau faceți clic pe caseta de selectare pentru a bifa/debifa butonul **Continue'**. Dacă funcția continuă este activată, instrumentul Offset se va reporni după ce îl terminați sau închideți, permițându-vă să decalați sau să copiați obiectele altfel fără să apăsați din nou butonul Offset.
* Apăsând butonul ALT sau C sau făcând clic pe butonul  **Copiere** va face o copie a obiectelor, în loc să le mutați. Dacă țineți apăsat ALT după ce faceți clic pe cel de-al doilea punct, veți putea plasa mai multe copii până când eliberați tasta ALT.
* Apăsați CTRL în timp ce desenați pentru a forța ancorarea [snapping](/Draft_Snap "Draft Snap") punctului dvs. către cea mai apropiată locație, independent de distanța.
* Apăsând pe SHIFT, [constrain](/Draft_Constrain "Draft Constrain") vă va fi segmentul curent, în loc să-l alegeți cel mai apropiat.
* Apăsați butonul  ESC sau butonul  **Anulare** pentru a întrerupe comanda curentă.

## Notes

* To create an offset version of a [Draft BSpline](/Draft_BSpline "Draft BSpline") its points are offset individually, and from the new points a new spline is calculated. This new spline is not parallel to the original spline. For an exact parallel offset of a [Draft BSpline](/Draft_BSpline "Draft BSpline") the [Part Offset2D](/Part_Offset2D "Part Offset2D") command should be used.
* The Draft Offset command cannot handle [Draft BezCurves](/Draft_BezCurve "Draft BezCurve"). Use the [Part Offset2D](/Part_Offset2D "Part Offset2D") command instead.

## Scripting

## Scrip-Programare

Instrumentul de Decalare poate fi folosit în [macros](/Macros "Macros") și din consola Python utilizând următoarea funcție:

```
offset_obj = offset(obj, delta, copy=False, bind=False, sym=False, occ=False)

```

* Se decalează/compensează filamentul dat prin aplicarea Vectorului dat la primul său vârf.
* Dacă copymode este True, un alt obiect este creat, altfel același obiect devine offset.
* Dacă bind este adevărat și cu condiția ca filamentul să fie deschis, firele originale și cele compensate vor fi legate de punctele lor finale, formând o fațetă.
* Dacă sym este True, decalajul se face pe ambele fețe, lățimea totală fiind lungimea vectorului dat.
* Returnează obiectul offset (sau copia lui dacă copymode este True).

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1500, 2000, 0)
p3 = App.Vector(4000, 0, 0)

wire = Draft.make_wire([p1, p2, p3])
doc.recompute()

vector = App.Vector(-200, 150, 0)
offset1 = Draft.offset(wire, vector, copy=True, bind=True, sym=True)
offset2 = Draft.offset(wire, 3*vector, copy=True)
offset3 = Draft.offset(wire, 6*vector, copy=True)
offset4 = Draft.offset(wire, 9*vector, copy=True)
offset5 = Draft.offset(wire, 1.5*vector, copy=True, occ=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Offset/ro&oldid=1473152>"