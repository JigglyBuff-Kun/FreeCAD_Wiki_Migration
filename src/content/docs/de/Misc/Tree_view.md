---
title: Baumansicht
---
## Einleitung

Die Baumansicht wird im oberen Bereich des Fensters **Modell** angezeigt (wenn die [Combo-Ansicht](/Combo_view/de "Combo view/de") aktiviert ist) oder als ein eigenständiges Fenster. Sie zeigt alle benutzerdefinierten Objekte, die Teil eines FreeCAD-Dokuments sind. Die Baumansicht ist eine Darstellung der [Dokumentstruktur](/Document_structure/de "Document structure/de") und zeigt an, welche Informationen auf die Festplatte gespeichert werden.

Diese Objekte müssen nicht unbedingt geometrische Formen sein, die in der [3D-Ansicht](/3D_view/de "3D view/de") sichtbar sind, sondern können auch unterstützende Datenobjekte sein, die mit irgendeinem der [Arbeitsbereiche](/Workbenches/de "Workbenches/de") erstellt wurden.

![](/images/FreeCAD_Tree_view.png)

Die Baumansicht mit verschiedenen Elementen im Dokument.

## Arbeiten mit der Baumansicht

Immer wenn ein neues Objekt erstellt wird, wird es standardmäßig am Ende der Liste in der Baumansicht hinzugefügt. Die Baumansicht erlaubt die Verwaltung der Objekte, um sie übersichtlich zu halten; sie ermöglicht das Erstellen von [Gruppen](/Std_Group/de "Std Group/de"), das Verschieben von Objekten in Gruppen, das Verschieben von Gruppen in andere Gruppen, das Umbenennen von Objekten, das Kopieren von Objekten, das Löschen von Objekten und die Verwendung von Optionen ihres [Kontextmenüs](#Kontextmenü).

Viele Vorgänge erzeugen Objekte, die von einem zuvor existierenden Objekt abhängig sind. In diesem Fall zeigt die Baumansicht diese Beziehung, indem sie das ältere Objekt innerhalb des neuen Objekts aufnimmt. Das Aus- und Einklappen der Objekte in der Baumansicht zeigt die parametrische Historie dieses Objekts. Objekte, die sich (eingerückt) unter anderen befinden, sind älter, während Objekte, die sich nicht eingerückt darunter (außerhalb) befinden, neuer sind und von den älteren Objekten abgeleitet werden. Modifikationen an den älteren Objekten setzen sich über die parametrischen Operationen bis zu den neuesten fort und erzeugen ein neues Ergebnis.

![](/images/FreeCAD_Tree_view_parametric_history.png)

Das oberste Objekt wird durch parametrische Operationen an Objekten erzeugt, die ihrerseits durch frühere Operationen erzeugt wurden.  
Wird der Baum vollständig erweitert, erhält man die ursprünglichen Elemente, die zur Erzeugung der Teilkörper verwendet wurden.

### Spalten der Baumansicht

Die Baumansicht zeigt immer eine Spalte mit den Symbolen und Benennungen (Labels) der Objekte an. Wahlweise können noch zwei zusätzliche Spalten angezeigt werden. Zum Aktivieren dieser Spalten wird mit Rechtsklick in der Baumansicht das Kontextmenü geöffnet und die Menüoption **Baumeinstellungen** ausgewählt und dann **Spalte Beschreibung anzeigen** ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) und/oder **Show internal name** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")). Spaltenüberschriften werden hinzugefügt, wenn mehr als eine Spalte angezeigt wird. Es ist zu beachten, dass der interne Name von Objekten nicht geändert werden kann.

### Objektbenennung bearbeiten

Ein Objekt in der ersten Spalte auswählen und F2 (unter Windows und Linux) oder Enter (unter macOS) drücken, um seine Eigenschaft Daten-Eigenschaft**Label** zu bearbeiten. Diese Eigenschaft kann auch über die Option **Umbenennen** des Kontextmenüs oder im [Eigenschafteneditor](/Property_editor "Property editor") bearbeitet werden.

### Objektbeschreibung bearbeiten

Ein Objekt kann wahlweise eine Beschreibung besitzen. Diese Informationen sind in seiner Eigenschaft Daten-Eigenschaft**Label2** gespeichert. Wird die Spalte Beschreibung angezeigt, kann diese Eigenschaft bearbeitet werde, indem das Objekt in dieser Spalte ausgewählt und F2 (unter Windows und Linux) oder Enter (unter macOS) gedrückt wird. Diese Eigenschaft kann auch im [Eigenschafteneditor](/Property_editor "Property editor") geändert werden.

### Kontextmenü

Die Optionen im Kntextmenü der Baumansicht hängen von den ausgewählten Objekten und des gerade aktiven Arbeitsbereiches ab. Um dieses Menü anzuzeigen, klickt man mit der rechten Maustaste auf den Hintergrund der Liste oder es werden mehrere Objekte der Liste ausgewählt und dann eins von ihnen mit der rechten Maustaste angeklickt.

### Umschalttasten

Die üblichen können in der Baumansicht verwendet werden. Die Umschalttasten können auch kombiniert werden.

* Ctrl: diese Taste gedrückt halten, um mehrere Objekte auszuwählen.
* Shift: diese Taste gedrückt halten, um alle Objekte zwischen einem zuvor ausgewählten Objekt und dem nächsten ausgewählten Objekt auszuwählen.

### Tastaturkürzel

Folgende Tastaturkürzel stehen zur Verfügung, wenn der Fokus auf der Baumansicht liegt:

* Ctrl+F: Öffnet ein Suchfeld am unteren Rand der Baumansicht, das ermöglicht Objekte durch Angabe ihres internen Namens oder ihres Labels zu suchen und zu erreichen.
* Aktionen zum Aus- und Einklappen mit Kombinationen aus Alt+Pfeil-Tasten: [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
  + Alt+Left: Klappt ausgewählte Elemente ein.
  + Alt+Right: Klappt ausgewählte Elemente aus.
  + Alt+Up: Klappt ausgewählte Elemente aus mit eingeklappten Unterelementen in der nächsten Ebene (Tiefer verknüpfte Unterelemente bleiben unverändert).
  + Alt+Down: Klappt ausgewählte Elemente aus mit ebenfalls ausgeklappten Unterelementen in der nächsten Ebene (Tiefer verknüpfte Unterelemente bleiben unverändert).

## Überlagerungssymbole

Ein oder mehrere Überlagerungssymbole können über dem Standardsymbol eines Objekts in der Strukturansicht angezeigt werden. Die verfügbaren Überlagerungssymbole und ihre Bedeutung sind nachfolgend aufgeführt.

### Weißes Häkchen auf blauem Hintergrund

Dies zeigt an, dass das Objekt [neuberechnet](/Std_Refresh/de "Std Refresh/de") werden muss, aufgrund von Änderungen am Modell oder weil der Benutzer das Objekt im Kontextmenü der Baumansicht zur Neuberechnung markiert hat. In den meisten Fällen werden Neuberechnungen automatisch ausgelöst, aber manchmal werden sie aus Leistungsgründen verzögert.

### Weißes Ausrufezeichen auf rotem Hintergrund

Dies zeigt an, dass das Objekt einen Fehler hat, der behoben werden muss. Nach der Neuberechnung des gesamten Dokuments wird eine QuickInfo angezeigt, die den Fehler beschreibt, wenn Sie mit der Maus über das Objekt in der Baumansicht fahren. Hinweis: Alle anderen Objekte, die von einem Objekt in einem solchen Fehlerzustand abhängen, werden nicht korrekt neu berechnet, so dass sie möglicherweise noch einen alten Zustand aufweisen.

### Lila Kettenglieder

Dies wird typischerweise für [Skizzen](/Sketch/de "Sketch/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")-Grundkörper, wie Quader, Zylinder usw. sowie [Bezugselemente](/Datum/de "Datum/de") angezeigt. Es zeigt an, dass das Objekt nirgends befestigt ist. Es hat keinen Befestigungsversatz und bezieht seine Position und Ausrichtung ausschließlich von seiner Eigenschaft [Positionierung](/Placement/de "Placement/de") (Placement).

Es gibt ein [Grundlegendes Anfügungs Tutorium](/Basic_Attachment_Tutorial/de "Basic Attachment Tutorial/de"), das erklärt, wie man mit solchen Objekten umgeht.

### Gelbes X

Dies wird nur für [Skizzen](/Sketch/de "Sketch/de") verwendet und zeigt an, dass die Skizze nicht vollständig bestimmt ist. Ist die Skizze im [Bearbeitungsmodus](/Sketcher_EditSketch/de "Sketcher EditSketch/de"), wird die Anzahl der verbleibenden (nicht bestimmten) Freiheitsgrade in den [Meldungen des Gleichungslösers](/Sketcher_Dialog/de#Meldungen_des_Gleichungslösers "Sketcher Dialog/de") angezeigt.

### Weißer Pfeil auf grünem Hintergrund

Dies bezeichnet die sogenannte [Spitze](/PartDesign_Body/de#Spitze "PartDesign Body/de") eines Körpers. Er ist in der Regel das letzte Merkmal in einem [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") und repräsentiert den gesamten Körper nach außen, z. B. wenn der Körper exportiert oder in [Part booleschen](/Part_Boolean/de "Part Boolean/de") Operationen verwendet wird. Die Spitze kann vom Benutzer geändert werden.

### Roter umgekehrter Schrägstrich

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Dieser zeigt ein unterdrücktes [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")-Formelement an.

### Weißer nach oben geschwungener Pfeil

Dies zeigt ein [verknüpftes](/Std_LinkMake/de "Std LinkMake/de") Objekt an.

### Zwei weiße nach oben geschwungene Pfeile

Dies zeigt ein [verknüpftes](/Std_LinkMake/de "Std LinkMake/de") Objekt an, das aus einem externen Dokument geladen wurde.

### Auge-Symbol

Dies zeigt an, dass das Objekt in der Baumansicht ausgeblendet ist, wenn die Kontextmenü-Option **In der Baumansicht ausgeblendete Elemente anzeigen** deaktiviert ist.

### Zyanfarbener Eiskristall

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Dieser zeigt ein [eingefrorenes](/Std_ToggleFreeze/de "Std ToggleFreeze/de") Objekt an, das nicht neu berechnet wird, wenn sich seine übergeordneten Objekte ändern.

## Einstellungen

Siehe [Combo-Ansicht](/Combo_view/de#Einstellungen "Combo view/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tree_view/de&oldid=1495152>"