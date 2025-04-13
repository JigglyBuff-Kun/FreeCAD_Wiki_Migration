---
title: Draft Verschieben
---
|  |
| --- |
| Draft Verschieben |
| Menüeintrag |
| Änderung → Verschieben Bearbeiten → Verschieben |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| MV |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Draft UnterelementHervorheben](/Draft_SubelementHighlight/de "Draft SubelementHighlight/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Move.svg) **Draft-Verschieben** verschiebt oder kopiert die ausgewählten Objekt von einem Punkt zu einem anderen. Im Unterelemente-Modus verschiebt die Anweisung ausgewählte Punkte und Kanten oder kopiert ausgewählte Kanten von [Draft Linien](/Draft_Line/de "Draft Line/de") und [Draft Polylinien](/Draft_Wire/de "Draft Wire/de").

Die Anweisung kann auf 2D-Formen, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, angewendet werden, aber auch auf viele 3D-Objekte, wie jenen, die mit den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erzeugt wurden.

![](/images/Draft_Move_example.jpg)

Verschieben eines Objekts von einem Punkt zu einem anderen Punkt

## Anwendung

Siehe auch: [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wahlweise ein oder mehrere Objekte auswählen, oder ein oder mehrere Unterelemente einer [Draft Linie](/Draft_Line/de "Draft Line/de") oder eines [Draft Drahtes](/Draft_Wire/de "Draft Wire/de").
2. Es gibt mehrere Moglichkeiten den Befehl auszuführen:
   * Die Schaltfläche ![](/images/Draft_Move.svg) Verschieben drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Move.svg) Verschieben** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Move.svg) Verschieben** auswählen.
   * Die Tastenkombination: M dann V.
3. Wenn noch kein Objekt ausgewählt wurde: ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Der Aufgabenbereich **Verschieben** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
5. Wenn Unterelemente ausgewählt wurden: die Check-Box **Unterelemente ändern** aktivieren, um in den Unterelemente-Modus umzuschalten.
6. Den ersten Punkt, den Basispunkt, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und auf die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
7. Den zweiten Punkt, den Zielpunkt, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und auf die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Um Koordinaten manuell einzugeben, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben oder die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben gedrückt, sobald die gewünschten Werte eingegeben sind. Man sollte aber vorher den Mauszeiger aus der [3D-Ansicht](/3D_view "3D view") herausziehen.
* Zur Verwendung von Polarkoordinaten gibt man einen Wert für die **Länge** und einen Wert für den **Winkel** ein und bestätigt jeweils mit Enter.
* Die Check-Box **Winkel** aktivieren, um den Mauszeiger auf den angegebenen Winkel einzuschränken.
* L drücken, um den Fokus vom Eingabefeld **X** auf das Eingabefeld **Länge** und zurück zu setzen. Abhängig davon, auf welchem Eingabefeld der Fokus liegt ist das Häkchen in der Check-Box **Winkel** aktiviert oder nicht.
* R drücken oder die Check-Box **Relativ** anklicken, um den Relativ-Modus umzuschalten. Ist der Relativ-Modus aktiviert, beziehen sich die Koordinaten des zweiten Punktes auf den ersten. Andernfalls beziehen sie sich auf den Ursprung des Koordinatensystems.
* G drücken oder die Check-Box **Global** anklicken, um den Global-Modus umzuschalten. ist der Global-Modus aktiviert, beziehen sich die Koordinaten auf das globale Koordinatensystem. Andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* N drücken oder die Check-Box **Fortsetzen** anklicken, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet. Dieser Modus ist nur sinnvoll, wenn der Kopieren-Modus aktiviert. Abhängig von der Eigenschaft **Wähle ursprüngliche Objekte nach dem Kopieren aus** wird entweder das Ursprungsobjekt oder die zuletzt erstellte Kopie für die nächste Ausführung des Befehls ausgewählt. Siehe [Einstellungen](#Einstellungen).
* C drücken oder die Check-Box **Kopieren** anklicken, um den Kopieren-Modus umzuschalten. Ist der Kopiermodus aktiviert, erstellt der Befehl verschobene Kopien anstatt die Ursprungsobjekte zu verschieben.
* B drücken oder die Check-Box **Subelemente ändern** anklicken, um den Unterelemente-ändern-Modus umzuschalten. Ist dieser Unterelemente-ändern-Modus aktiviert, verwendet der Befehl die ausgewählten Unterelemente anstatt der ganzen Objekte. Die Unterelemente müssen [Draft Linien](/Draft_Line/de "Draft Line/de") oder [Draft Polylinien](/Draft_Wire/de "Draft Wire/de") sein.
* Sind sowohl der Kopieren-Modus als auch der Unterelemente-ändern-Modus aktiviert, und sind Kanten von [Draft Polylinien](/Draft_Wire "Draft Wire") ausgewählt, werden neue Linien aus diesen Kanten erstellt.
* Wird Alt gedrückt und gehalten, nachdem der Basispunkt angeklickt wurde, wird ebenfalls der Kopiermodus eingeschaltet. Wenn Alt gedrückt wird, können mehrere Zielpunkte angewählt werden. Alt loslassen, um den Befehl zu beenden und die erstellten Kopien anzuzeigen.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. ausgeschaltet.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Ein [angehängtes](/Part_EditAttachment/de "Part EditAttachment/de") Objekt kann nicht mit dem Befehl Draft-Verschieben verschoben werden. Um es trotzdem zu verschieben, muss entweder seine Daten-Eigenschaft**Support**-Objekt verschoben werden, oder seine Daten-Eigenschaft**Attachment Offset** angepasst werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Um den Fokus beim Öffnen des Aufgaben-Bereichs auf das Eigabefeld **Länge** zu legen: **Bearbeiten → Eigenschaften... → Draft → Allgemein → Fokusierung auf Länge statt auf X-Koordinate setzen** anzupassen. Beachte, dass der Zeiger in der [3D-Ansicht](/3D_view/de "3D view/de") bewegt werden muss, damit sich die Änderung auswirken können.
* Um die Origialobjekte nach dem Kopieren erneut auszuwählen: **Bearbeiten → Eigenschaften... → Draft → Allgemein → Wähle ursprüngliche Objekte nach dem Kopieren aus** einzustellen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Verschieben von Objekten wird die Methode `move` des Draft-Moduls verwendet.

```
moved_list = move(objectslist, vector, copy=False)

```

* `objectslist` enthält die zu verschiebenden Objekte. Es kann ein einzelnes Objekt oder es können mehrere Objekte sein.
* `vector` ist die Verschiebung.
* Wenn `copy` `True` ist, werden Kopien erstellt, anstatt die Originale der Objekte zu verschieben.
* `moved_list` gibt die verschobenen Originale oder die neuen Kopien aus. Es ist ein einzelnes Objekt oder eine Liste von Objekten, abhängig von `objectslist`.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon2, App.Vector(1000, -1000, 0))
Draft.move(polygon3, App.Vector(-500, -500, 0))

list1 = [polygon1, polygon2, polygon3]

vector = App.Vector(-2000, -2000, 0)
list2 = Draft.move(list1, vector, copy=True)
list3 = Draft.move(list1, -2*vector, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Move/de&oldid=1513882>"