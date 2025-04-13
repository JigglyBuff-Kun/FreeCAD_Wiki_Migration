---
title: Draft PolareAnordnung
---
|  |
| --- |
| Draft PolareAnordnung |
| Menüeintrag |
| Änderung → Anordnungswerkzeuge → Polare Anordnung Bearbeiten → Polare Anordnung |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de"), [Draft KreisAnordnung](/Draft_CircularArray/de "Draft CircularArray/de"), [Draft PfadAnordnung](/Draft_PathArray/de "Draft PathArray/de"), [Draft PfadVerknüpfungsanordnung](/Draft_PathLinkArray/de "Draft PathLinkArray/de"), [Draft Punktanordnung](/Draft_PointArray/de "Draft PointArray/de"), [Draft PunktVerknüpfungsanordnung](/Draft_PointLinkArray/de "Draft PointLinkArray/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_PolarArray.svg) **Draft PolareAnordnung** erstellt eine Anordnung aus einem ausgewählten Objekt, indem er Kopien entlang einer Kreisumfangslinie positioniert. Der Befehl kann wahlweise auch eine Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array,) erstellen, die effizienter ist, als eine normale Anordnung.

Dieser Befehl kann für 2D-Objekte verwendet werden, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, aber auch für viele 3D-Objekte, die mit anderen Arbeitsbereichen wie [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erstellt wurden.

![](/images/Draft_PolarArray_example.png)

Draft PolareAnordnung

## Anwendung

Siehe auch: [Draft Fangen](/Draft_Snap/de "Draft Snap/de").

1. Wahlweise ein Objekt auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_PolarArray.svg) Polare Anordnung drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → Anordnungswerkzeuge → ![](/images/Draft_PolarArray.svg) Polare Anordnung** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_PolarArray.svg) Polare Anordnung** auswählen.
3. Der Aufgaben-Bereich **Polare Anordnung** wird geöffnet. Siehe [Optionen](#Optionen) für wietere Informationen.
4. Wurde noch kein Objekt ausgewählt: Ein Objekt auswählen.
5. Im Aufgaben-Bereich die erforderlichen Parameter eingeben.
6. Um den Befehl abzuschließen, gibt es folgende Möglichkeiten:
   * Einen Punkt für den **Drehmittelpunkt** in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Enter drücken.
   * Die Schaltfläche OK drücken.

## Optionen

* Den **Polarwinkel** eingeben, um den Gesamtwinkel der Anordnung festzulegen. Der positive Winkel wird gegen den Uhrzeigersinn angegeben.
* Die **Anzahl der Elemente** angeben; mindestens `2`. Der größte Wert, der im Aufgaben-Bereich eingegeben werden kann ist `99`, höhere Werte können aber durch Ändern der Daten-Eigenschaft**Number Polar** der Anordnung gesetzt werden.
* Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen (dies schließt auch den Befehl ab) oder dieKoordinaten für den for the **Drehmittelpunkt** eingeben. Die Rotationsachse wird durch diesen Punkt verlaufen. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") herauzubewegen, bevor die Koordinaten eingegeben werden.
* Die Schaltfläche **Punkt zurücksetzen** drücken, um den **Drehmittelpunkt** auf den Ursprung (zurück) zu setzen.
* Ist die Checkbox **Vereinigung** aktiviert, werden überlappende elemente in der Anordnung vereinigt.
* Ist die Checkbox **Verknüpfungsanordnung** aktiviert, wird eine Verknüpfungsanordnung anstelle einer normalen Anordnung erstellt. Eine Verknüpfungsanordnung ist effektiver, da ihre Elemente [App-Link](/App_Link/de "App Link/de")-Objekte sind.
* Esc drücken oder die Schaltfäche Cancel, um den Befehl abzubrechen.

## Hinweise

Siehe [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de#Hinweise "Draft OrthoArray/de").

* Die Standarddrehachse der Anordnung ist die positive Z-Achse. Dies kann durch Anpassen ihrer Daten-Eigenschaft**Axis** geändert werden.

## Eigenschaften

Siehe [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de#Eigenschaften "Draft OrthoArray/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

### Parametrische Anordnung

Zum Erstellen einer parametrischen polaren Anordnung wird die Methode `make_array` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeArray`. Die Methode `make_array` kann [Draft RechtwinkligeAnordnungen](/Draft_OrthoArray/de "Draft OrthoArray/de"), Draft PolareAnordnungen und [Draft KreisAnordnungen](/Draft_CircularArray/de "Draft CircularArray/de") erstellen. Für jede Anordnungsart stehen eine oder mehrere Wrapper-Methoden zur Verfügung.

Die Hauptmethode:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

Der Wrapper für polare Anordnungen ist:

```
array = make_polar_array(base_object,
                         number=5, angle=360, center=App.Vector(0, 0, 0),
                         use_link=True)

```

* `base_object` ist das Objekt, das angeordnet wird. Es kann auch das `Label` (Benennung) eines Objekts im Dokument sein.
* `number` ist die Anzahl der Elemente in dem Muster inklusive des Originalobjekts.
* `angle` ist der Winkeldes polaren Bogens in Grad.
* `center` ist der Vektor, der den Mittelpunkt des Musters festlegt.
* Ist `use_link` auf `True` gesetzt, sind die erstellten Elemente [App-Links](/App_Link "App Link") anstatt normale Kopien.
* `array` wird mit dem erstellten Anordnungsobjekt zurückgegeben.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)
center = App.Vector(-1600, 0, 0)

array = Draft.make_polar_array(tri, 8, 270, center)
doc.recompute()

```

### Nichtparametrische Anordnung

Zum Erstellen einer nichtparametrischen Anordnung wird die Methode `array` des Draft-Moduls verwendet. Diese Methode gibt `None` zurück.

```
array(objectslist, center, angle, number)

```

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)
center = App.Vector(-1600, 0, 0)

Draft.array(tri, center, 270, 8)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PolarArray/de&oldid=1558021>"