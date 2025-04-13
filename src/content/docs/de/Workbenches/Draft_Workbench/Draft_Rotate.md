---
title: Draft Drehen
---
|  |
| --- |
| Draft Drehen |
| Menüeintrag |
| Änderung → Drehen Bearbeiten → Drehen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| RO |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Draft UnterelementHervorheben](/Draft_SubelementHighlight/de "Draft SubelementHighlight/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Rotate.svg) **Draft Drehen** dreht oder kopiert ausgewählte Objekte um ein Zentrum in einem gegebenen Winkel. Die Drehachse steht senkrecht auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") und der Drehwinkel ist relativ zu dieser Ebene. Im Unterelemente-Modus dreht die Anweisung ausgewählte Punkte und Kanten oder Kopien von ausgewählten Kanten von [Draft Linien](/Draft_Line/de "Draft Line/de") und [Draft Linienzügen](/Draft_Wire/de "Draft Wire/de").

Der Befehl kann auf 2D-Formen angewendet werden, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, kann aber auch mit vielen Arten von 3D-Objekten benutzt werden, wie denen, die mit den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erzeugt wurden.

![](/images/Draft_Rotate_example.jpg)

Drehen eines Objekts um einen Drehpunkt

## Anwendung

Siehe auch: [Draft Fangen](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wahlweise ein oder mehrere Objekte auswählen oder Unterelemente von [Draft Linien](/Draft_Line/de "Draft Line/de") oder [Draft Drähten](/Draft_Wire/de "Draft Wire/de").
2. Es gibt mehrere Möglichkeiten den Befehl auszuführen:
   * Die Schaltfläche ![](/images/Draft_Rotate.svg) Drehen klicken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Rotate.svg) Drehen** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Rotate.svg) Drehen** auswählen.
   * Das Tastenkürzel R dann O.
3. Wenn noch kein Objekt ausgewählt wurde: ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Der Aufgaben-Bereich **Drehen** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
5. Wenn Unterelemente ausgewählt wurden: die Check-Box **Unterelemente ändern** aktivieren, um in den Unterelemente-Modus umzuschalten.
6. Den ersten Punkt, das Zentrum der Drehung, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben anklicken.
7. Den zweiten Punkt in the [3D-Ansicht](/3D_view/de "3D view/de") wählen oder einen **Basiswinkel** eingeben.
8. Den dritten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") wählen oder eine **Drehung** eingeben.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* N drücken oder die Checkbox **Fortsetzen** aktivieren, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet. Dieser Modus ist nur sinnvoll, wenn der Kopieren-Modus aktiviert ist. Abhängig von der Einstellung **Select base objects after copying** werden entweder die Originalobjekte für den nächsten Befehlsaufruf ausgewählt oder die zuletzt erstellten Kopien. Siehe [Einstellungen](#Einstellungen).
* C drücken oder die Checkbox **Kopieren** aktivieren, um den Kopieren-Modus umzuschalten. Ist der Kopieren-Modus aktiviert, werden gedrehte Kopien erstellt, anstatt die Originalobjekte zu drehen.
* B drücken oder die Checkbox **Unterelemente anpassen** aktivieren, um den Unterelemente-Modus umzuschalten. Ist der Unterelemente-Modus aktiviert, werden die ausgewählten Unterelemente anstatt der ganzen Objekte verwendet. Die Unterelemente müssen [Draft-Linien](/Draft_Line/de "Draft Line/de") oder [Draft-Polylinien](/Draft_Wire/de "Draft Wire/de") sein.
* Sind sowohl der Kopieren-Modus als auch der Unterelemente-Modus aktiviert und Kanten von [Draft-Polylinien](/Draft_Wire/de "Draft Wire/de") ausgewählt, werden neue Polylinien aus diesen Kanten erstellt.
* Wird ALT nach der Eingabe des **Basiswinkel**s gedrückt gehalten, wird ebenfalls der Kopieren-Modus umgeschaltet. Während ALT gedrückt gehalten wird, können mehrere Punkte für **Drehung** ausgewählt werden. Sobald ALT losgelassen wird, wird der Befehl abgeschlossen und die erstellten Kopien werden angezeigt.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl fertigzustellen.

## Hinweise

* Ein Objekt, das [angehängt](/Part_EditAttachment/de "Part EditAttachment/de") ist, kann nicht mit dem Befehl Drehen gedreht werden. Entweder wird sein Daten-Eigenschaft**Support**-Objekt gedreht, oder sein Daten-Eigenschaft**Attachment Offset** wird geändert, um es zu drehen.
* Das Basiswinkelkonzept kann irgendwie verwirrend sein, besonders, da es nur funktioniert, wenn Punkte ausgewählt werden und nicht, wenn der Winkel im Eingabefeld eingegeben wird. Eine Erklärung mit einem Beispiel, wie es funktioniert, findet man in diesem [Forum Beitrag](https://forum.freecad.org/viewtopic.php?p=736674#p736674).

## Einstellungen

Siehe auch: [Editor Einstellungen](/Preferences_Editor/de "Preferences Editor/de") und [Entwurf Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Auswählen der Originalobjekte nach dem Kopieren: **Bearbeiten → Einstellungen... → Draft → Allgemein → Wähle ursprüngliche Objekte nach dem Kopieren aus**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Verwende die `Drehen`-Methode des Entwurfmodules, um Objekte zu drehen.

```
rotated_list = rotate(objectslist, angle, center=Vector(0,0,0), axis=Vector(0,0,1), copy=False)

```

* `objectlist` enthält die zu drehenden Objekte. Dies ist entweder ein einzelnes Objekt oder es sind mehrere Objekte.
* `angle` is der Winkel der Drehung in Grad.
* `center` ist das Zentrum der Drehung.
* `axis` ist die Richtung der Drehachse.
* Wenn `copy` `True` ist, werden Kopien erstellt anstatt die originalen Objekte zu drehen.
* Eine `rotatedlist` wird mit den gedrehten Originalen oder mit den neuen Kopien gemeldet. Dies ist entweder ein einzelnes Objekt oder es sind mehrere Objekte, abhängig von `objectlist`.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=300)
Draft.move(polygon1, App.Vector(1000, 0, 0))

# Rotation around the origin
angle1 = 45
rot2 = Draft.rotate(polygon1, angle1, copy=True)
rot3 = Draft.rotate(polygon1, 2*angle1, copy=True)
rot4 = Draft.rotate(polygon1, 4*angle1, copy=True)

polygon2 = Draft.make_polygon(3, radius=1000)
polygon3 = Draft.make_polygon(5, radius=500)
Draft.move(polygon2, App.Vector(2000, 0, 0))
Draft.move(polygon3, App.Vector(2000, 0, 0))

# Rotation around another point
angle2 = 60
cen = App.Vector(3100, 0, 0)
list2 = [polygon2, polygon3]
rot_list2 = Draft.rotate(list2, angle2, center=cen, copy=True)
rot_list3 = Draft.rotate(list2, 2*angle2, center=cen, copy=True)
rot_list4 = Draft.rotate(list2, 4*angle2, center=cen, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rotate/de&oldid=1513880>"