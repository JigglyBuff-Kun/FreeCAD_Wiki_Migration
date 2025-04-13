---
title: Draft Herabstufen
---
|  |
| --- |
| Draft Herabstufen |
| Menüeintrag |
| Änderung → Herabstufen Bearbeiten → Zurückstufen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| D N |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de"), [Part Schnitt](/Part_Cut/de "Part Cut/de") |
|  |

## Beschreibung

Der ![](/images/Draft_Downgrade.svg) **Entwurf Herabstufen** Befehl stuft ausgewählte Objekte herab. Das Ergebnis ist abhängig von der Anzahl der ausgewählten Objekte und deren Typ. Der Befehl kann zum Beispiel einen 3D Körper in einzelne Flächen und einen Draht in einzelne Kanten zerlegen. Wenn zwei Flächen ausgewählt sind, wird daraus ein [Part Schnitt](/Part_Cut/de "Part Cut/de") Objekt erzeugt. Beachte, dass nicht alle Objekte zerlegt werden können. Dieser Befehl ist das Gegenstück zum Befehl [Entwurf Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de").

![](/images/Draft_Downgrade_example.jpg)

Zwei überlappende Flächen werden zu einem Part Schnitt Objekt herabgestuft, das wiederum zu einer Fläche herabgestuft wird. Diese Fläche wird dann zu einem geschlossenen Draht herabgestuft, der schließlich zu separaten Kanten herabgestuft wird.

## Anwendung

1. Wahlweise ein oder mehrere Objekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Downgrade.svg) Draft Herabstufen.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Downgrade.svg) Herabstufen** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Modify → ![](/images/Draft_Downgrade.svg) Zurückstufen** auswählen.
   * Das Tastaturkürzel D dann N.
3. Wurde noch kein Objekt ausgewählt: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um Objekte herabzustufen, verwende die `downgrade` Methode des Entwurf Moduls.

```
downgrade_list = downgrade(objects, delete=False, force=None)

```

* `objects` enthält die Objekte, die herabgestuft werden sollen. Es ist entweder ein einzelnes Objekt oder eine Liste von Objekten.
* Wenn `delete` gleich `True` ist, werden die Quellobjekte gelöscht.
* `force` erzwingt eine bestimmte Art der Herabstufung durch den Aufruf einer bestimmten internen Funktion. Das kann sein: `"explode"`, `"shapify"`, `"subtr"`, `"splitFaces"`, `"cut2"`, `"getWire"`, `"splitWires"` oder `"splitCompounds"`.
* `downgrade_list` wird zurückgegeben. Es ist eine Liste, die zwei Listen enthält: eine Liste der neuen Objekte und eine Liste der zu löschenden Objekte. Wenn `delete` `True` ist, ist die zweite Liste leer.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=True)

compound = add_list1[0]
add_list2, delete_list2 = Draft.downgrade(compound, delete=False)
face = add_list2[0]
add_list3, delete_list3 = Draft.downgrade(face, delete=False)

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

add_list4, delete_list4 = Draft.downgrade(box, delete=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Downgrade/de&oldid=1500086>"