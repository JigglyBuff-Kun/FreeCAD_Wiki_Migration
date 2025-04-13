---
title: Arch Struktur
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Struktur |
| Menüeintrag |
| Utils → Strukturwerkzeuge → Struktur |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Wand](/Arch_Wall/de "Arch Wall/de"), [Arch Bewehrung](/Arch_Rebar/de "Arch Rebar/de") |
|  |

## Beschreibung

Das Werkzeug Arch Struktur ermöglicht die Konstruktion von Strukturlementen wie Stützen oder Balken, indem Breite, Länge und Höhe angegeben werden, oder das Element aus einem 2D-Profil heraus erzeugt wird (Fläche, Kantenzug oder Skizze).

Falls kein Profil angegeben wurde, ist eine Anzahl von Voreinstellungen verfügbar, die eine schnelle Errichtung von Strukturelementen aus einem vordefinierten Standardprofil erlaubt.

![](/images/Arch_Structure_example.jpg)

Ein Träger basierend auf einem 2D-Profil; eine Stütze und ein Träger definiert durch Höhe, Länge und Breite, ohne ein Basisprofil; eine metallische Struktur basierend auf einer 2D-Oberfläche

.

## Anwendung

1. Eine 2D-Form (Draft-Objekt, Fläche oder Skizze) auswählen (optional).
2. Den Menüeintrag **Utils → Strukturwerkzeuge → ![](/images/Arch_Structure.svg) Struktur** auswählen oder das Tastaturkürzel S dann T
3. Die gewünschten Eigenschaften anpassen.

## Optionen

* Wenn keine Basis-2D-Objekte ausgewählt sind, besitzt das Struktur-Werkzeug zwei Zeichenmodi: Säule und Träger:
  + Im Säulenmodus ist ein Punkt in der Ansicht oder durch Eingabe von Koordinaten anzugeben. Das neue strukturelle Objekt wird an diesem Punkt positioniert.
  + Im Trägermodus sind zwei Punkte in der Ansicht oder durch Eingabe von Koordinaten anzugeben. Das neue strukturelle Objekt wird sich zwischen diesen beiden Punkt erstrecken.
* Drücken von Esc oder Cancel bricht den laufenden Befehl ab.
* Ein Doppelklick auf das Element in der Baumansicht wechselt in den Bearbeitungsmodus für das Objekt. In diesem Modus können dem Objekt Ergänzungen oder Aussparungen hinzugefügt werden.
* Im Bearbeitungsmodus ist es ebenfalls möglich, [Achsensysteme](/Arch_Axis/de "Arch Axis/de") zum Bauelement hinzuzufügen. Wird ein Achsensystem hinzugefügt, wird das Bauelement auf jede Achse kopiert. Werden zwei Achsensysteme hinzugefügt, wird das Bauelement auf jeden Achsenschnittpunkt kopiert.

## Eigenschaften

Eine Arch-Struktur (Structure-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

* Daten-Eigenschaft**Tool**: Ein optionaler Extrusionspfad, der jede Art von Linienzug sein kann. Falls diese Eigenschaft leer ist, wird die Extrusion gerade sein und in der durch die Normal-Eigenschaft angegebenen Richtung erfolgen
* Daten-Eigenschaft**Normal**: Gibt die Richtung an, in der die Basisfläche diser Struktur extrudiert wird. Falls diese Eigenschaft auf dem Vorgabewert (0,0,0) bleibt, wird die Richtung automatisch auf die normale Richtung der Basisfläche gesetzt.
* Daten-Eigenschaft**Face Maker**: Art des zu benutzenden Algorithmus für die Oberflächenerstellung, der bei der Erzeugung des Profils verwendet wird. Auswahlmöglichkeiten:
  + `None`
  + `Simple`: Erstellt Flächen aus allen geschlossenen Linienzügen; Überlappungen werden ignoriert.
  + `Cheese`: Erstellt Flächen mit Löchern aber keine Flächen innerhalb der Löcher.
  + `Bullseye`: Erstellt Flächen mit Löchern einschließlich der Flächen innerhalb der Löcher (Inseln).
* Daten-Eigenschaft**Length**: Objektlänge (nur verwendet, wenn Objekt nicht auf einem Profil basiert)
* Daten-Eigenschaft**Width**: Objektbreite (nur verwendet, wenn Objekt nicht auf einem Profil basiert)
* Daten-Eigenschaft**Height**: Objekthöhe (Höhe des Bauelements oder Auszugslänge, wenn auf Profil basierend). Wenn keine Höhe angegeben ist und das Bauelement in einem [Boden/Geschoss](/Arch_Floor/de "Arch Floor/de")-Objekt mit definierter Höhe ist, übernimmt das Bauelement automatisch den Wert der Bodenhöhe.
* Daten-Eigenschaft**Nodes Offset**: Knotenabstand zwischen der (Mittel)achse (centerline) und den Knotenlinien.

### Ansicht

* Ansicht-Eigenschaft**Nodes Type**: Der Typ für Knotenpunkte dieses Objekts, linear oder area.
* Ansicht-Eigenschaft**Show Nodes**: Zeigt oder versteckt die Knotenpunkte.

## Voreinstellungen

Das Struktur-Werkzeug bietet auch eine Reihe von Voreinstellungen, die die schnelle Erstellung von standardisierten Metallprofilen oder vorgefertigten Betonelementen erlauben.

![](/images/Arch_presets_example.jpg)

Einige Voreinstellungen für Stahlstrukturen

Die Voreinstellungen erhält man durch Auswahl einer **Kategorie** aus dem "Optionen Struktur"-Panel. Verfügbare Kategorien sind **Precast concrete** oder eins der Industriestandard-Metallprofile wie etwa **HEA**, **HEB** pder **INP**. Für jede dieser Kategorien ist eine Anzahl von Voreinstellungen verfügbar. Sobald eine Voreinstellung ausgewählt wurde, können die individuellen Parameter wie **Länge**, **Breite** oder **Höhe** angepasst werden. Allerdings wird bei Metallprofilen die Profilgröße durch die Voreinstellungen vorgegeben und kann nicht geändert werden.

Mit der Schaltfläche **Switch L/H** können die Werte von Länge und Höhe vertauscht werden, so dass aus einer vertikalen Säule ein horizontaler Träger wird.

![](/images/Arch_precast_example.jpg)

Einige Voreinstellungen für vorgefertigte Betonstukturen

## Knotenpunkte

Bauelemente haben auch die Fähigkeit, Knotenpunkte anzuzeigen. Knotenpunkte sind eine Reihe von 3D-Punkten, die in einer *Nodes*-Eigenschaft gespeichert sind. Durch Umschalten der *Show Nodes*-Ansicht-Eigenschaft (on/off) kann man die Knotenpunkte eines Bauelements sehen:

![](/images/Arch_structural_nodes.jpg)

Sichtbarmachung von Knotenpunkten für eine Reihe von Bauelementen

* Knoten werden automatisch berechnet und aktualisiert, solange man sie nicht manuell ändert. Wenn Du das getan hast, werden sie nicht aktualisiert, wenn sich die Form des Struktur-Objekts ändert, außer Du benutzt das "Reset Nodes"-Werkzeug weiter unten.
* Arch-Strukturen können nicht nur lineare Knoten haben, sondern auch planare Knoten. Dafür müssen 1- mindestens drei Vektoren in der "Nodes"-Eigenschaft des Objekts vorhanden sein, 2- die "NodesType"-Eigenschaft des ViewObject auf "Area" gesetzt sein
* Wenn die Knotenberechnung automatisch erfolgt (Du sie nie manuell verändert hast) und die "Role"-Eigenschaft einer Struktur auf "Slab" gesetzt wird, wird daraus automatisch ein planarer Knoten (es gibt mehr als drei Vektoren und der NodesType wird auf "Area" gesetzt).
* Beim Ändern eines Bauelement-Objekts (Doppelklick) wird eine Reihe von Knotenwerkzeugen im Aufgaben-Reiter verfügbar:
  + Zurücksetzen der Knoten (reset nodes) auf automatische Berechnung, falls Du sie manuell verändert hast
  + Graphische Änderung der Knoten, arbeitet genau so wie [Draft Ändern](/Draft_Edit/de "Draft Edit/de")
  + Erweitern der Knoten des geänderten Objekts, bis es die Knoten eines anderen Objekts berührt
  + Sorgt für das Zusammenfallen (coincident) des Knotens dieses Objekts und eines anderen
  + Umschalten der Anzeige aller Knoten aller Bauelemente des Dokuments (on/off)

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Struktur kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
structure = makeStructure(baseobj=None, height=None)
structure = makeStructure(baseobj=None, length=None, width=None, height=None, name="Structure")

```

* Erstellt ein Objekt `struktur` aus dem gegebenen `baseobj`, das ein geschlossenes Profil ist, und der gegebenen Extrusions `height`.
  + Falls kein `baseobj` gegeben ist, kann man die numerischen Werte für `length`, `width` und `height` angeben, um eine Blockstruktur zu erstellen.
  + Das `baseobj` kann auch ein existierender Volumenkörper sein.

Beispiel:

```
import FreeCAD, Draft, Arch

rect = Draft.make_rectangle(200, 300)
structure1 = Arch.makeStructure(rect, height=2000)
FreeCAD.ActiveDocument.recompute()

structure2 = Arch.makeStructure(None, length=500, width=1000, height=3000)
Draft.move(structure2, FreeCAD.Vector(2000, 0, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Structure/de&oldid=1542012>"