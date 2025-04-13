---
title: PartDesign Verrundung
---
|  |
| --- |
| PartDesign Verrundung |
| Menüeintrag |
| Part Design → Modifikationen → Verrundung |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [PartDesign Fase](/PartDesign_Chamfer/de "PartDesign Chamfer/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/PartDesign_Fillet.svg) **PartDesign Verrundung** erzeugt Rundungen (Ab-, Verrundungen) an den ausgewählten Kanten eines Objekts. Es fügt dem Dokument ein **Fillet**-Objekt und den dazugehörigen Repräsentanten in der [Baumansicht](/Tree_view/de "Tree view/de") hinzu.

## Anwendung

### Eine Verrundung hinzufügen

1. Falls nötig, wird der zu verrundende Körper [aktiviert](/PartDesign_Body/de#Activer_Status "PartDesign Body/de").
2. Es gibt mehrere Möglichkeiten, die Kanten zum Verrunden auszuwählen:
   * Eine oder mehrere einzelne Kanten des Körpers auswählen.
   * Eine oder mehrere Flächen des Körpers auswählen, um alle ihrer Kanten auszuwählen.
   * Ein Formelement (normalerweise das letzte) des Körpers auswählen, um alle seiner Kanten auszuwählen.
3. Um eine Reihe tangential verbundener Kanten auszuwählen, muss nur eine einzige Kante ausgewählt werden, die Verrundung folgt dann dem kompletten Kantenzug.
4. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_Fillet.svg) Verrundung drücken.
   * Den Menüeintrag **Part Design → Modifikationen → ![](/images/PartDesign_Fillet.svg) Verrundung** auswählen.
5. Wenn kein Körper aktiv ist und sich zwei oder mehr Körper im Dokument befinden, offnet sich der Dialog **Active Body Required** und fordert zur Aktivierung eines Körpers auf. Ist nur ein einziger Körper vorhanden, wird er automatisch ausgewählt.
6. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Fillet parameters** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
7. Zum Fertigstellen die OK-Schaltfläche drücken.

### Eine Verrundung bearbeiten

1. Eine der folgenden Möglichkeiten startet die Bearbeitung:
   * Das Fillet-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken.
   * Das Fillet-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") mit der rechten Maustaste anklicken und **Fillet bearbeiten** aus dem Kontextmenü auswählen.
2. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Fillet parameters** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Zum Fertigstellen die OK-Schaltfläche drücken.

## Optionen

* Zum Hinzufügen von Kanten hat man folgende Möglichkeiten:
  + Die Schaltfläche Hinzufügen drücken, um die Auswahl weiterer Kanten und/oder Flächen in der [3D-Ansicht](/3D_view/de "3D view/de") zu starten.
  + Zur Auswahl aller übrigen Kanten hat man folgende Möglichkeiten:
    1. Wenn nötig, Schaltfläche Hinzufügen drücken.
    2. Tastaturkürzel Ctrl+Shift+A anwenden, oder mit der rechten Maustaste in die Liste klicken und **Alle Kanten verwenden** aus dem Kontextmenü auswählen.
* Zum Entfernen von Kanten hat man folgende Möglichkeiten:
  + Die Schaltfläche Entfernen drücken, um das Entfernen der Kanten und/oder Flächen in der [3D-Ansicht](/3D_view/de "3D view/de") zu starten. Ausgewählte Elemente werden in violett hervorgehoben.
  + Ein oder mehrere Elemente in der Liste auswählen und die Del-Taste drücken, oder mit der rechten Maustaste in die Liste klicken und **Entfernen** aus dem Kontextmenü auswählen.
* Den **Radius** der Verrundung angeben.
* Die Checkbox **Alle Kanten verwenden** aktivieren, um alle Kanten des vorherigen Formelements auszuwählen. Dies deaktiviert die Auswahlliste und die dazugehörigen Schaltflächen.

## Hinweise

* PartDesign Verrundung sollte nicht mit [Part Verrundung](/Part_Fillet/de "Part Fillet/de") verwechselt werden. Solange man nicht weiß, was man macht, sollte [Part Verrundung](/Part_Fillet/de "Part Fillet/de") nicht auf einen PartDesign-Body angewendet werden. Siehe [Part und PartDesign](/Part_and_PartDesign/de "Part and PartDesign/de").
* Rundungen können (dürfen?) die angrenzenden Flächen nicht komplett vereinnahmen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein PartDesign-Fillet-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if Daten-Eigenschaft**Use All Edges** is `true`.
* Daten-Eigenschaft**Support Transform** (`Bool`): If `true` the filleted shape of the additive/subtractive parent feature will be used when the fillet object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the fillet itself will be used. The default is `false`.
* Daten-Eigenschaft (versteckt)**Add Sub Shape** (`PartShape`)
* Daten-Eigenschaft (versteckt)**Base Feature** (`Link`): Link to the parent feature.
* Daten-Eigenschaft (versteckt)**\_ Body** (`LinkHidden`): Link to the parent body.

Fillet

* Daten-Eigenschaft**Radius** (`QuantityConstraint`): Der Rundungsradius. Standardwert: `1 mm`.
* Daten-Eigenschaft**Use All Edges** (`Bool`): Wenn `true`, werden alle Kanten des Objekts verrundet, und die unter der Daten-Eigenschaft**Base** angegebenen Kanen werden ignoriert. Standardwert: `false`.

Part Design

* Daten-Eigenschaft**Refine** (`Bool`): Wenn auf `true` gesetzt, werden überflüssige Kanten aus dem Ergebnis der Operation entfernt. Der voreingestellte Wert wird durch die Einstellung **Modell nach skizzenbasierter Operation automatisch aufbereiten** bestimmt. Siehe [PartDesign Einstellungen](/PartDesign_Preferences/de#Allgemein "PartDesign Preferences/de").

## Bekannte Probleme

Verrundungen, Fasen und andere Funktionen, die mit Volumenkörpern arbeiten, hängen vom zugrundeliegenden [OpenCASCADE](/OpenCASCADE "OpenCASCADE") Technology (OCCT) Kernel ab, den FreeCAD verwendet. Der OCCT Kernel hat gelegentlich Schwierigkeiten, fluchtende (gleich laufende) scharfen Kanten zu verarbeiten, wenn sich zwei Seiten treffen. Ist dies der Fall, kann FreeCAD ohne Erklärung abstürzen.

Wenn FreeCAD vom Terminal aus gestartet wird, kann es nach einem Absturz ein Protokoll wie dieses ausgeben:

```
#1  0x7fff63d660ba in BRep_Tool::Curve(TopoDS_Edge const&, TopLoc_Location&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x2a
#2  0x7fff63d69546 in BRep_Tool::Curve(TopoDS_Edge const&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x46
#3  0x7fff71f4fef5 in ChFi3d_Builder::PerformIntersectionAtEnd(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x3b05
#4  0x7fff71f58307 in ChFi3d_Builder::PerformOneCorner(int, bool) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x1097
#5  0x7fff71ef6218 in ChFi3d_Builder::PerformFilletOnVertex(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x4e8
#6  0x7fff71ef71d1 in ChFi3d_Builder::Compute() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0xe31
#7  0x7fff720ad7c3 in BRepFilletAPI_MakeChamfer::Build() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x33
#8  0x7fff723be48e in PartDesign::Chamfer::execute() from /usr/lib/freecad-daily/lib/_PartDesign.so+0x60e
...

```

Diese Ausgabe verweist auf Funktionen aus OCCT Bibliotheken. Wenn diese Art von Absturz auftritt, muss das Problem möglicherweise an OCCT berichtet und dort behoben werden und nicht an FreeCAD.

Siehe die Forenbeiträge für weitere Informationen:

* [Fehler Fase größer als 2 mm verursacht Freecad Abstürze](https://forum.freecadweb.org/viewtopic.php?p=263818#p263818)
* [Segmentfehler bei der Verwendung von Part Design Verrundung](https://forum.freecadweb.org/viewtopic.php?p=264827#p264827)

### Topologische Benennung

Kantennummern sind nicht vollständig stabil, daher ist es ratsam, dass die Hauptkonstruktionsarbeiten am Volumenkörper abgeschlossen sind, bevor Funktionen wie Verrundung und Fase anwendet werden, da sich sonst die Namen der Kanten ändern könnten und die abgerundeten Kanten könnten ungültig werden. Wenn die Daten-Eigenschaft**Use All Edges** (Alle Kanten verwenden) auf `true` gesetzt wird, ist man etwas davor geschützt, da in so einem Falle alle Kanten des Grundobjekts verwendet werden und es keine Abhängigkeit von einer individuellen Benennung gibt.

Mehr kann man unter [Problem der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de") nachlesen.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Fillet/de&oldid=1515811>"