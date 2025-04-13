---
title: Draft RechtwinkligeAnordnung
---
|  |
| --- |
| Draft RechtwinkligeAnordnung |
| Menüeintrag |
| Änderung → Anordnungswerkzeuge → Anordnung Bearbeiten → Anordnung |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Draft PolareAnordnung](/Draft_PolarArray/de "Draft PolarArray/de"), [Draft Kreisanordnung](/Draft_CircularArray/de "Draft CircularArray/de"), [Draft Pfadanordnung](/Draft_PathArray/de "Draft PathArray/de"), [Draft PathLinkArray](/Draft_PathLinkArray/de "Draft PathLinkArray/de"), [Draft PunktAnordnung](/Draft_PointArray/de "Draft PointArray/de"), [Draft PointLinkArray](/Draft_PointLinkArray/de "Draft PointLinkArray/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_OrthoArray.svg) **Draft RechtwinkligeAnordnung** erstellt eine (in 3 Achsen) rechtwinklige Anordnung von einem ausgewählten Objekt. Der Befehl kann wahlweise auch eine Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array) erstellen, die effizienter ist, als eine normale Anordnung.

Dieser Befehl kann für 2D-Objekte verwendet werden, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, aber auch für viele 3D-Objekte, die mit anderen Arbeitsbereichen wie [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erstellt wurden.

![](/images/Draft_Array_example.png)

Rechtwinklige Draft-Anordnung

## Anwendung

1. Wahlweise ein Objekt auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_OrthoArray.svg) [Anordnung](/Draft_OrthoArray "Draft OrthoArray") drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → Anordnungswerkzeuge → ![](/images/Draft_OrthoArray.svg) Anordnung** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_OrthoArray.svg) Anordnung** auswählen.
3. Der Aufgabenbereich **Rechtwinklige Anordnung** wird geöffnet. Siehe auch [Optionen](#Optionen).
4. Ein Objekt auswählen, wenn noch keins ausgewählt wurde.
5. Die erforderlichen Parameter im Aufgabenbereich eingeben.
6. Eine der folgenden Möglichkeiten zum Fertigstellen auswählen:
   * In die [3D-Ansicht](/3D_view/de "3D view/de") klicken.
   * Enter drücken.
   * Die Schaltfläche OK drücken.

## Optionen

* Die **Anzahl der Elemente** für die X-, Y- und Z-Richtung eingeben. Die Zahl muss mindestens `1` für jede Richtung sein.
* Das **X-Intervalle** eingeben, um die Verschiebung der Elemente in X-Richtung festzulegen. Für eine rechtwinklige Anordnung müssen die Werte für Y und Z `0` sein.
* Das **Y-Intervalle** eingeben, um die Verschiebung der Elemente in Y-Richtung festzulegen. Für eine rechtwinklige Anordnung müssen die Werte für X und Z `0` sein.
* Das **Z-Intervalle** eingeben, um die Verschiebung der Elemente in Z-Richtung festzulegen. Für eine rechtwinklige Anordnung müssen die Werte für X und Y `0` sein.
* Die Schaltfläche **X, Y oder Z zurücksetzen** anklicken, um die Verschiebung in der gegebenen Richtung auf die Vorgabewerten zurückzusetzen.
* Ist **Vereinigen** aktiviert, werden überlappende Elemente im Feld miteinander vereinigt.
* Ist **Verknüpfungsanordnung** aktiviert, wird eine Verknüpfungsanordnung anstelle einer normalen Anordnung erstellt. Eine Verknüpfungsanordnung ist effizienter, weil ihre Elemente Verknüpfungen ([App Link](/App_Link/de "App Link/de")-Objekte) sind.
* Die Esc-Taste oder die Schaltfläche Abbrechen drücken, um den Befehl abzubrechen.

## Hinweise

* Eine Draft RechtwinkligeAnordnung kann in eine [Draft PolareAnordnung](/Draft_PolarArray/de "Draft PolarArray/de") oder eine [Draft KreisAnordnung](/Draft_CircularArray/de "Draft CircularArray/de") umgewandelt werden, indem ihre Daten-Eigenschaft**Array Type** verändert wird.
* Eine Verknüpfungsanordnung (Link-Array) kann nicht in eine normale Anordnung oder zurück umgewandelt werden. Diese Auswahl der Anordnungsart muss zum Erstellungszeitpunkt erfolgen.
* Vereinigte Verknüpfungsanordnung werden nicht richtig dargestellt, in der 3D-Ansicht sind ihre Elemente scheinbar nicht vereinigt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Der Befehle Draft RechtwinkligeAnordnung, [Draft PolareAnordnung](/Draft_PolarArray/de "Draft PolarArray/de") und [Draft KreisAnordnung](/Draft_CircularArray/de "Draft CircularArray/de") erstellen dasselbe Objekt. Dieses Objekt ist von einem [Part-Formelement](/Part_Feature/de "Part Feature/de")-Objekt abgeleitet und erbt alle seine Eigenschaften (mit Ausnahme einiger Ansicht-Eigenschaften die nicht an die Verknüpfungsanordnungen vererbt werden). Außerdem sind, wenn nicht anders angegeben, die folgenden zusätzlichen Eigenschaften vorhanden:

### Daten

Link

Die Eigenschaften dieser Gruppe gibt es nur für Vernüpfungsanordnungen (Link-Arrays). Siehe auch [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de").

* Daten-Eigenschaft**Scale** (`Float`)
* Daten-Eigenschaft (versteckt)**Scale Vector** (`Vector`)
* Daten-Eigenschaft**Scale List** (`VectorList`)
* Daten-Eigenschaft (versteckt)**Visibility List** (`BoolList`)
* Daten-Eigenschaft (versteckt)**Placement List** (`PlacementList`)
* Daten-Eigenschaft (versteckt)**Element List** (`LinkList`)
* Daten-Eigenschaft (versteckt)**\_ Link Touched** (`Bool`)
* Daten-Eigenschaft (versteckt)**\_ Child Cache** (`LinkList`)
* Daten-Eigenschaft (versteckt)**\_ Link Owner** (`Integer`)
* Daten-Eigenschaft (versteckt)**Colored Elements** (`LinkSubHidden`)
* Daten-Eigenschaft**Link Copy On Change** (`Enumeration`)
* Daten-Eigenschaft**Link Transform** (`Bool`)

Circular array

Die Eigenschaften dieser Gruppe werden für rechtwinklige und polare Anordnungen ausgeblendet.

* Daten-Eigenschaft**Number Circles** (`Integer`): legt die Anzahl der Ringe (circular layers) fest. Muss mindestens `2` sein.
* Daten-Eigenschaft**Radial Distance** (`Distance`): legt den Abstand zwischen zwei Ringen fest.
* Daten-Eigenschaft**Symmetry** (`Integer`): legt die Anzahl der Symmetrielinien fest. Diese Zahl ändert die Verteilung der Elemente in der Anordnung.
* Daten-Eigenschaft**Tangential Distance** (`Distance`): Legt den Abstand zwischen Elementen im gleichen Ring fest. Muss größer als Null sein.

Draft

* Daten-Eigenschaft**Always Sync Placement** (`Bool`)

Objects

* Daten-Eigenschaft**Array Type** (`Enumeration`): legt die Art der Anordnung fest, diese kann `ortho`, `polar` oder `circular` sein.
* Daten-Eigenschaft**Axis Reference** (`LinkGlobal`): legt das Objekt und die Kante fest, die an Stelle der Eigenschaften Daten**Axis** und Daten-Eigenschaft**Center** verwendet werden. Wird bei rechtwinkligen Anordnungen nicht verwendet.
* Daten-Eigenschaft**Base** (`Link`): legt das Objekt fest, das in der Anordnung dupliziert wird.
* Daten-Eigenschaft**Count** (`Integer`): (schreibgeschützt) legt die Gesamtzahl der Elemente im Array fest.
* Daten-Eigenschaft**Expand Array** (`Bool`): legt fest, ob die Anordnung in der [Baumansicht](/Tree_view/de "Tree view/de") erweitert wird, um die Auswahl der einzelnen Elemente zu ermöglichen. Steht nur für Verknüpfungsanordnungen zur Verfügung.
* Daten-Eigenschaft**Fuse** (`Bool`): legt fest, ob überlappende Elemente in der Anordnung vereinigt werden oder nicht.
* Daten-Eigenschaft**Placement List** (`PlacementList`): Die Positionierungen der einzelnen Elemente. Erscheint in der Gruppe Link der Verknüpfungsanordnungen. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

Orthogonal array

Die Eigenschaften dieser Gruppe werden für Kreis-Anordnungen ausgeblendet.

* Daten-Eigenschaft**Interval X** (`VectorDistance`): legt das Intervall zwischen Elementen in X-Richtung fest.
* Daten-Eigenschaft**Interval Y** (`VectorDistance`): legt das Intervall zwischen Elementen in Y-Richtung fest.
* Daten-Eigenschaft**Interval Z** (`VectorDistance`): legt das Intervall zwischen Elementen in Z-Richtung fest.
* Daten-Eigenschaft**Number X** (`Integer`): legt die Anzahl der Elemente in X-Richtung fest. Muss mindestens `1` sein.
* Daten-Eigenschaft**Number Y** (`Integer`): legt die Anzahl der Elemente in Y-Richtung fest. Muss mindestens `1` sein.
* Daten-Eigenschaft**Number Z** (`Integer`): legt die Anzahl der Elemente in Z-Richtung fest. Muss mindestens `1` sein.

Polar array

Die Eigenschaften dieser Gruppe werden für Kreis-Anordnungen und rechtwinklige Anordnungen ausgeblendet.

* Daten-Eigenschaft**Angle** (`Angle`): legt den Öffnungswinkel des umlaufenden Bogens fest. Für einen Vollkreis `360°` verwenden.
* Daten-Eigenschaft**Interval Axis** (`VectorDistance`): legt das Intervall zwischen Elementen in Richtung der Daten-Eigenschaft**Axis** fest.
* Daten-Eigenschaft**Number Polar** (`Integer`): legt die Anzahl der Elemente in Umlaufrichtung fest.

Polar/circular array

Die Eigenschaften dieser Gruppe werden für rechtwinklige Anordnungen ausgeblendet.

* Daten-Eigenschaft**Axis** (`Vector`): legt die Richtung der Achse der Anordnung fest.
* Daten-Eigenschaft**Center** (`VectorDistance`): legt den Mittelpunkt der Anordnung fest. Die Achse der Anordnung geht durch diesen Punkt. Für umlaufende Anordnungen ist das ein Abstand der Daten-Eigenschaft**Placement** des Objektes in der Daten-Eigenschaft**Basis**.

### Ansicht

Link

Die Eigenschaften dieser Gruppe, mit Ausnahme der ererbten Eigenschaften, stehen nur für Verknüpfungsanordnungen zur Verfügung. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de") für weitere Informationen.

* Ansicht-Eigenschaft**Draw Style** (`Enumeration`)
* Ansicht-Eigenschaft**Line Width** (`FloatConstraint`)
* Ansicht-Eigenschaft**Override Material** (`Bool`)
* Ansicht-Eigenschaft**Point Size** (`FloatConstraint`)
* Ansicht-Eigenschaft**Selectable** (`Bool`): dies ist eine geerbte Eigenschaft, die in der Gruppe Selection für andere Anordnungen erscheint.
* Ansicht-Eigenschaft**Shape Material** (`Material`)

Basis

Die Eigenschaften dieser Gruppe, mit Ausnahme der ererbten Eigenschaften, stehen nur für Verknüpfungsanordnungen zur Verfügung. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de") für weitere Informationen.

* Ansicht-Eigenschaft (versteckt)**Child View Provider** (`PersistentObject`)
* Ansicht-Eigenschaft (versteckt)**Material List** (`MaterialList`)
* Ansicht-Eigenschaft (versteckt)**Override Color List** (`ColorList`)
* Ansicht-Eigenschaft (versteckt)**Override Material List** (`BoolList`)
* Ansicht-Eigenschaft (versteckt)**Proxy** (`PythonObject`): dies ist eine geerbte Eigenschaft.

Display Options

Die Eigenschaften in dieser Gruppe sind ererbte Eigenschaften. Siehe auch [Part Formelement](/Part_Feature/de#Eigenschaften "Part Feature/de").

* Ansicht-Eigenschaft**Bounding Box** (`Bool`): diese Eigenschaft wird nicht an Verknüpfungsanordnungen vererbt.
* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): für Verknüpfungsanordnungen sind `Link` oder `ChildView` möglich. Für andere Anordnungen stehen `Flat Lines`, `Shaded`, `Wireframe` oder `Points` zur Auswahl.
* Ansicht-Eigenschaft**Show In Tree** (`Bool`)
* Ansicht-Eigenschaft**Visibility** (`Bool`)

Draft

* Ansicht-Eigenschaft**Pattern** (`Enumeration`): nicht verwendet.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): nicht verwendet.

Object style

Die Eigenschaften dieser Gruppe werden nicht an Verknüpfungsanordnungen vererbt.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

### Parametrische Anordnung

Zum Erstellen einer parametrischen rechteckigen Anordnung wird die Methode `make_array` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeArray`. Die Methode `make_array` kann rechteckige Draft-Anordnungen, [Draft PolareAnordnungen](/Draft_PolarArray/de "Draft PolarArray/de") und [Draft KreisAnordnungen](/Draft_CircularArray/de "Draft CircularArray/de") erstellen. Für jede Anordnungsart stehen eine oder mehrere Wrapper-Methoden zur Verfügung.

Die Hauptmethode:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

Die Verbinder (wrapper) für orthogonale Anordnungen sind:

```
array = make_ortho_array(base_object,
                         v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0), v_z=App.Vector(0, 0, 10),
                         n_x=2, n_y=2, n_z=1,
                         use_link=True)

```

```
array = make_ortho_array2d(base_object,
                           v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0),
                           n_x=2, n_y=2,
                           use_link=True)

```

Die Verbinder (wrapper) für rechteckige Anordnungen sind:

```
array = make_rect_array(base_object,
                        d_x=10, d_y=10, d_z=10,
                        n_x=2, n_y=2, n_z=1,
                        use_link=True)

```

```
array = make_rect_array2d(base_object,
                          d_x=10, d_y=10,
                          n_x=2, n_y=2,
                          use_link=True)

```

* `base_object` ist das Objekt, das angeordnet werden soll. Es kann auch das `Label` (Zeichenkette) eines Objekts im aktuellen Dokument sein.
* `v_x`, `v_y` und `v_z` sind die Vektoren zwischen den Basispunkten der Elemente in den entsprechenden Richtungen.
* `d_x`, `d_y` und `d_z` sind die Abstände zwischen den Basispunkten der Elemente entlang den entsprechenden Richtungen.
* `n_x`, `n_y` und `n_z` ist die Anzahl der Elemente in den entsprechenden Richtungen.
* Wenn `use_link` auf `True` gesetzt ist, dann sind die erzeugten Elemente Verknüpfungen ([App Links](/App_Link/de "App Link/de")) statt normaler Kopien.
* `array` wird mit der erstellten Anordnung (Array-Objekt) zurück gegeben.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

array = Draft.make_ortho_array2d(rect, v_x, v_y, 3, 4)
doc.recompute()

```

### Feste Anordnung (nicht parametrisch)

Zum Erstellen einer nicht parametrischen Anordnung wird die Methode `array` des Draft-Moduls verwendet. Diese Methode gibt `None` zurück.

```
array(objectslist, xvector, yvector, xnum, ynum)
array(objectslist, xvector, yvector, zvector, xnum, ynum, znum)

```

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

Draft.array(rect, v_x, v_y, 3, 4)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OrthoArray/de&oldid=1558017>"