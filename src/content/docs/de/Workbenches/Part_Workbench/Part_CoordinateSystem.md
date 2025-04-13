---
title: Part Bezugssystem
---
|  |
| --- |
| Part CoordinateSystem |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| Alel |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.1 |
| Siehe auch |
| [Part Bezugsebene](/Part_DatumPlane/de "Part DatumPlane/de"), [Part Bezugslinie](/Part_DatumLine/de "Part DatumLine/de"), [Part Bezugspunkt](/Part_DatumPoint/de "Part DatumPoint/de") |
|  |

## Beschreibung

Der Befehl **Part Bezugssystem** erstellt ein Bezugssystem (ein lokales Koordinatensystem - coordinate system object), das an andere Objekte befestigt werden kann. Ein Bezugssystem ist eines von mehreren [Bezugsobjekten](/Std_Base#Part_Datums/de "Std Base"). Ein Bezugsobjekt wird üblicherweise eingesetzt, um mehrere andere Objekte daran zu befestigen. Wenn sich die Position oder Ausrichtung eines Bezugsobjekts ändert, folgen alle befestigten Objekte dieser Änderung.

Ein Datum-Objekt kann ebenso eine geometrische Referenz für ein zukünftiges Merkmal oder eine Operation sein. Abhängig seines Typs kann es beispielsweise als ein Richtungsvektor, eine Rotationsachse oder eine Spiegelebene genutzt werden.

## Anwendung

1. Wahlweise den korrekten Behälter aktivieren, z.B. einen ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de"), ein ![](/images/Std_Part.svg) [Std Part-Objekt](/Std_Part "Std Part") (Baugruppe) oder eine ![](/images/Assembly_CreateAssembly.svg) [Baugruppe](/Assembly_CreateAssembly "Assembly CreateAssembly") (Assembly). Sind mehrere Behälter aktiv, wird das Bezugsobjekt zu dem aktiven Behälter hinzugefügt, der als erstes erstellt wurde.
2. Wahlweise die Geometrie auswählen, an die das Bezugselement befestigt werden soll.
3. Die Schaltfläche ![](/images/Part_CoordinateSystem.svg) Bezugssystem erstellen drücken.
4. Das Aufgaben-Fenster **Befestigen** wird geöffnet.
5. Wenn keine Geometrie ausgewählt ist: Wahlweise die Schaltfläche OK drücken, um den Befehl zu beenden, ohne das Bezugselement zu befestigen.
6. Für weitere Schritte siehe [Part EditAttachment](/Part_EditAttachment/de#Anwendung "Part EditAttachment/de"). Auf jener Seite ab Schritt 7 fortfahren, wenn Geometrie vorausgewählt wurde.

## Hinweise

* Ein Bezugsobjekt kann auch in einen Behälter verschoben werden, indem es in der [Baumansicht](/Tree_view/de "Tree view/de") auf dem Behälter abgelegt wird.
* Die Befestigung eines Bezugsobjekts kann geändert werden, indem seine Daten-Eigenschaft**Map Mode** bearbeitet wird. Siehe [Part Befestigen](/Part_EditAttachment/de#Anwendung "Part EditAttachment/de").
* Die [Part Bezugsebenen](/Part_DatumPlane "Part DatumPlane") und [Part Bezugslinien](/Part_DatumLine "Part DatumLine") sowie die Ebenen und Achsren des Part Bezugssystem-Objekts sind unendliche Objekte.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part CoordinateSystem-Objekt, formal ein `Part::LocalCoordinateSystem`-Objekt, ist von einem `App::LocalCoordinateSystem`-Objekt abgeleitet. Es erbt alle seine Eigenschaften, außer den unter Attachment gelisteten.

### Daten

Attachment

Das Objekt hat dieselben Befestigungseigenschaften wie ein [Part Part2DObject](/Part_Part2DObject/de#Daten "Part Part2DObject/de").

Basis

* Daten-Eigenschaft (versteckt)**Origin Features** (`LinkList`): Die Achsen, Ebenen und Ursprungspunkte, die von diesem Bezugssystem gesteuert werden.
* Daten-Eigenschaft**Placement** (`Placement`): Siehe [Part Formelement](/Part_Feature/de#Daten "Part Feature/de").
* Daten-Eigenschaft**Label** (`String`): Wie vorher.
* Daten-Eigenschaft (versteckt)**Label2** (`String`): Wie vorher.
* Daten-Eigenschaft (versteckt)**Expression Engine** (`ExpressionEngine`): Wie vorher.
* Daten-Eigenschaft (versteckt)**Visibility** (`Bool`): Wie vorher.
* Daten-Eigenschaft**Group** (`LinkList`):
* Daten-Eigenschaft (versteckt)**\_ Group Touched** (`Bool`):

### Ansicht

Display Options

* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): Siehe [Part Formelement](/Part_Feature/de#Ansicht "Part Feature/de").
* Ansicht-Eigenschaft**Show In Tree** (`Bool`): Wie vorher.
* Ansicht-Eigenschaft**Visibility** (`Bool`): Wie vorher.

Selection

* Ansicht-Eigenschaft**On Top When Selected** (`Enumeration`): Siehe [Part Formelement](/Part_Feature/de#ansicht "Part Feature/de").
* Ansicht-Eigenschaft**Selection Style** (`Enumeration`): Wie vorher.

## Skripten

```
import FreeCAD as App

doc = App.newDocument()

body = doc.addObject("PartDesign::Body", "Body")
lcs = doc.addObject("Part::LocalCoordinateSystem", "LCS")
lcs.Visibility = True
body.addObjects([lcs])

orig = body.Origin
plane = next(f for f in orig.OriginFeatures if f.Role == "XZ_Plane")
lcs.AttachmentSupport = [(orig, (plane.Name + ".", ))]
lcs.AttachmentOffset = App.Placement(App.Vector(), App.Vector(1, 0, 0), 45)
lcs.MapMode = "FlatFace"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CoordinateSystem/de&oldid=1550647>"