---
title: Auswahlmethoden
---
## Überblick

Auswahlmethoden in FreeCAD ermöglichen das Auswählen von Objekten in der [FreeCAD-Oberfläche](/Interface/de "Interface/de"): z. B. [3D Ansicht](/3D_view/de "3D view/de"), [Baumansicht](/Tree_view/de "Tree view/de"), [Auswahlansicht](/Selection_view/de "Selection view/de") und anderen Dialogen. Einige Auswahlmethoden sind Arbeitsbereich-spezifisch und in der jeweiligen Arbeitsbereich-Dokumentation dokumentiert.

## 3D Ansicht

In der [3D Ansicht](/3D_view/de "3D view/de") gibt es verschiedene Möglichkeiten, Objekte auszuwählen.

### Einfache Auswahl

Die einfache Auswahl mit der Maus (standardmäßig Linksklick) und die Vorauswahl (Hover) werden auf der Seite [Mausnavigation](/Mouse_navigation/de "Mouse navigation/de") beschrieben.

### Wiederholte Klicks

Mit dem ersten Klick wird ein Unterelement (Punkt, Kante oder Fläche) des Objekts unter der Maus ausgewählt. Ein zweiter Klick wählt das gesamte Objekt aus.

Der dritte Klick erweitert die Auswahl auf das Containerobjekt [Körper](/PartDesign_Body/de "PartDesign Body/de"), [Standard Teil](/Std_Part/de "Std Part/de") und andere. Weitere Klicks erweitern die Auswahl in der Containerkette.

### Auswahl Befehle

* Um alle Objekte auszuwählen: [Std AllesAuswählen](/Std_SelectAll/de "Std SelectAll/de").
* Um mehrere Hauptobjekte in einem Kasten auszuwählen: [Std KastenAuswahl](/Std_BoxSelection/de "Std BoxSelection/de").
* Um mehrere Flächen zu auszuwählen: [Std KastenElementAuswahl](/Std_BoxElementSelection/de "Std BoxElementSelection/de") oder [Part KastenAuswahl](/Part_BoxSelection/de "Part BoxSelection/de").

## Auswahlansicht

In der [Auswahlansicht](/Selection_view/de "Selection view/de") werden die Namen der ausgewählten Objekte angezeigt, einschließlich ihres vollständigen Namens innerhalb eines Objekts, z. B. `Unnamed#Body.Box001.Face17`.

Sie erlaubt auch einige Aktionen wie [Std AnsichtAuswahlEinpassen](/index.php?title=Std_ViewFitSelection/se&action=edit&redlink=1 "Std ViewFitSelection/se (page does not exist)"), und das Senden des Objekts an die [Python Konsole](/Python_console/de "Python console/de").

### Objekt export

Dies sollte auf der [Auswahlansicht](/Selection_view/de "Selection view/de") Seite stehen.

Wähle ein beliebiges komplexes Objekt, z.B. einen [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") oder ein [Std Part](/Std_Part/de "Std Part/de"), markiere dann in der [Auswahlansicht](/Selection_view/de "Selection view/de") erneut das Objekt und drücke dann Strg + C auf der Tastatur, um den Dialog **Objektauswahl** zu öffnen. Dies ermöglicht das Kopieren des ausgewählten Objekts zusammen mit allen oder nur einigen der abhängigen Objekte dieses Objekts. Für ein [Std Part](/Std_Part/de "Std Part/de") zum Beispiel umfassen die möglichen Objekte, die ausgewählt werden können, das [Std Part](/Std_Part/de "Std Part/de") selbst, aber auch seinen Ursprung, seine drei Basisachsen (XYZ) und seine drei Basisebenen (XY, YZ, XZ).

Nachdem OK drücken, werden die ausgewählten Objekte in den Speicher kopiert und können dann in das Dokument eingefügt werden, um nur diese Objekte zu duplizieren.

![](/images/ObjectSelection.png)

Objektauswahldialog, der aus der [Auswahlansicht](/Selection_view/de "Selection view/de") heraus gestartet wird.

## Baumansicht

In der [Baumansicht](/Tree_view/de "Tree view/de") können Elemente eins nach dem anderen ausgewählt oder abgewählt werden, durch gedrückt halten der Strg Taste und durch klicken der Maus.

Eine Reihe von Elementen kann durch klicken auf das erste Element ausgewählt werden, durch gedrückt halten der Shift Taste und klicken auf das letzte Element.

Wenn Sie ein einzelnes Element auswählen, werden auch dessen Eigenschaften im [Eigenschaften-Editor](/Property_editor "Property editor") angezeigt.

Durch einen Doppelklick wird ein [Aufgabenfeld](/Task_panel "Task panel") mit zugehörigen Aktionen geöffnet. Stellen Sie sicher, dass Sie dieses Aufgabenfeld schließen, bevor Sie einen anderen Befehl ausführen oder zu einer anderen Workbench wechseln.

Weitere Methoden sind durch Öffnen des Kontextmenüs (Rechtsklick) verfügbar, je nach ausgewähltem Objekt oder aktiver Workbench; siehe die Informationen in der [Baumansicht](/Tree_view "Tree view").

## Skripterstellung

Die Auswahl von Objekten ist naturgemäß eine grafische Aufgabe und steht daher nur zur Verfügung, wenn die grafische Benutzeroberfläche geladen ist.

Diese Methoden können in [Makros](/Macros/de "Macros/de") oder von der [Python Konsole](/Python_console/de "Python console/de") aus verwendet werden:

```
import FreeCADGui as Gui

Gui.Selection.addSelection
Gui.Selection.addSelectionGate
Gui.Selection.Filter

```

Die Methode `addSelectionGate` verhindert, dass der Benutzer Objekte auswählt, die nicht im Auswahlstring angegeben sind. Ein ![](/images/Button_invalid.svg) Symbol erscheint, wenn sich der Mauszeiger über einem Objekt befindet, das nicht in der angegebenen Gruppe ist.

```
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Edge")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Face")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Vertex")

```

Zum Entfernen `SelectionGate()`:

```
Gui.Selection.removeSelectionGate()

```

Siehe die [Quellendokumentation](/Source_documentation/de "Source documentation/de") und [Std PythonHilfe](/Std_PythonHelp/de "Std PythonHelp/de") für weitere Hilfe zur Verwendung dieser Werkzeuge.

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_methods/de&oldid=1497129>"