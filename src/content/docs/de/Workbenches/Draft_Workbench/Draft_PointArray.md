---
title: Draft PunktAnordnung
---
|  |
| --- |
| Draft PunktAnordnung |
| Menüeintrag |
| Änderung → Anordnungwerkzeuge → Punkt-Anordnung Bearbeiten → Punkt-Anordnung |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.18 |
| Siehe auch |
| [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de"), [Draft PolareAnordnung](/Draft_PolarArray/de "Draft PolarArray/de"), [Draft KreisAnordnung](/Draft_CircularArray/de "Draft CircularArray/de"), [Draft PfadAnordnung](/Draft_PathArray/de "Draft PathArray/de"), [Draft PfadVerknüpfungsanordnung](/Draft_PathLinkArray/de "Draft PathLinkArray/de"), [Draft PunktVerknüpfungsanordnung](/Draft_PointLinkArray/de "Draft PointLinkArray/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_PointArray.svg) **Draft Punkt-Anordnung** erstellt eine regelmäßige Anordnung aus einem ausgewählten Basisobjekt, indem er Kopien auf den Punkten eines Punktobjekts positioniert. Der Befehl [Draft PunktVerknüpfungsanordnung](/Draft_PointLinkArray/de "Draft PointLinkArray/de") erstellt alternativ eine effizientere Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array). Außer der Art der Anordnung die erstellt wird, normale Anordnung oder Verknüpfungsanordnung, ist der Befehl [Draft PunktVerknüpfungsanordnung](/Draft_PointLinkArray/de "Draft PointLinkArray/de") identisch mit diesem Befehl.

Das Basisobjekt kann ein 2D-Objekt sein, das mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench "Sketcher Workbench") erstellt wurde, aber auch ein 3D-Objekt, das mit den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erstellt wurde.

Das Punktobjekt kann ein beliebiges Objekt mit einer Form und Knotenpunkten sein (einschließlich einem [Std Part](/Std_Part/de "Std Part/de"), das ein oder mehrere solcher Objekte enthält), ein [Netz-Objekt](/Mesh_Workbench/de "Mesh Workbench/de") oder eine [Punktwolke](/Points_Workbench/de "Points Workbench/de"). Doppelte Punkte im Punktobjekt werden herausgefiltert.

![](/images/Draft_PointArray_Example.png)

Draft Punkt-Anordnung

## Anwendung

1. Das Objekt auswählen, das angeordnet werden soll.
2. Das Punkt-Objekt zur Auswahl hinzufügen.
3. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_PointArray.svg) Punkt-Anordnung drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → Anordnungswerkzeuge → ![](/images/Draft_PointArray.svg) Punkt-Anordnung** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_PointArray.svg) Punkt-Anordnung** auswählen.
4. Die Anordnung wird erstellt.
5. Wahlweise die [Eigenschaften](#Eigenschaften) der Anordnung im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

## Hinweise

* Vereinigte Verknüpfungsanordnung werden nicht richtig dargestellt, in der 3D-Ansicht sind ihre Elemente scheinbar nicht vereinigt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Punkt-Anordnung (PointArray-Objekt) ist von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften (mit Ausnahme einiger Ansicht-Eigenschaften, die nicht an die Verknüpfungsanordnungen vererbt werden). Außerdem sind, wenn nicht anders angegeben, die folgenden zusätzlichen Eigenschaften vorhanden:

### Daten

Link

Die Eigenschaften dieser Gruppe stehen nur für Verknüpfungsanordnungen zur Verfügung. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de") für weitere Informationen.

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

Draft

* Daten-Eigenschaft**Always Sync Placement** (`Bool`)

Objects

* Daten-Eigenschaft**Base** (`Link`): gibt das Objekt an, das in der Anordnung dupliziert werden soll.
* Daten-Eigenschaft**Count** (`Integer`): (nur Lesezugriff) gibt die Anzahl der Elemente in der Anordnung an. Diese Zahl wird durch die Anzahl der Punkte im Daten-Eigenschaft**Point Object** bestimmt.
* Daten-Eigenschaft**Expand Array** (`Bool`): gibt an, ob die Anordnung in der [Baumansicht](/Tree_view/de "Tree view/de") erweitert werden soll, um die Auswahl der einzelnen Elemente zu ermöglichen. Nur für Verknüpfungsanordnung verfügbar.
* Daten-Eigenschaft**Extra Placement** (`Placement`): gibt für jedes Element in der Anordnung eine zusätzliche [Positionierung](/Placement/de "Placement/de"), Verschiebung und Drehung an.
* Daten-Eigenschaft**Fuse** (`Bool`): gibt an, ob die Kopien vereinigt werden sollen, wenn sie einander berühren oder nicht. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Placement List** (`PlacementList`): die Positionierungen der einzelnen Elemente. Erscheint in der Gruppe Link der Verknüpfungsanordnungen. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
* Daten-Eigenschaft**Point Object** (`Link`): gibt das Objekt an, dessen Punkte zur Positionierung der Elemente in der Anordnung verwendet werden.

### Ansicht

Link

Die Eigenschaften dieser Gruppe, mit Ausnahme der ererbten Eigenschaften, stehen nur für Verknüpfungsanordnungen zur Verfügung. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de") für weitere Informationen.

* Ansicht-Eigenschaft**Draw Style** (`Enumeration`)
* Ansicht-Eigenschaft**Line Width** (`FloatConstraint`)
* Ansicht-Eigenschaft**Override Material** (`Bool`)
* Ansicht-Eigenschaft**Point Size** (`FloatConstraint`)
* Ansicht-Eigenschaft**Selectable** (`Bool`): das ist eine übernommene Eigenschaft, die in der Auswahlgruppe für andere Anordnungen erscheint.
* Ansicht-Eigenschaft**Shape Material** (`Material`)

Basis

Die Eigenschaften dieser Gruppe, mit Ausnahme der ererbten Eigenschaften, stehen nur für Verknüpfungsanordnungen zur Verfügung. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de") für weitere Informationen.

* Ansicht (Hidden)**Child View Provider** (`PersistentObject`)
* Ansicht (Hidden)**Material List** (`MaterialList`)
* Ansicht (Hidden)**Override Color List** (`ColorList`)
* Ansicht (Hidden)**Override Material List** (`BoolList`)
* Ansicht (Hidden)**Proxy** (`PythonObject`): das ist eine geerbte Eigenschaft.

Display Options

Die Eigenschaften in dieser Gruppe sind ererbte Eigenschaften. Siehe auch [Part Formelement](/Part_Feature/de#Eigenschaften "Part Feature/de").

* Ansicht-Eigenschaft**Bounding Box** (`Bool`): diese Eigenschaft wird bei Verknüpfungsanordnungen nicht vererbt.
* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): kann für Verknüpfungsanordnungen `Link` oder `ChildView` sein. Für andere Anordnung kann es: `Flat Lines`, `Shaded`, `Wireframe` oder `Points` sein.
* Ansicht-Eigenschaft**Show In Tree** (`Bool`)
* Ansicht-Eigenschaft**Visibility** (`Bool`)

Draft

* Ansicht-Eigenschaft**Pattern** (`Enumeration`): nicht verwendet.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): nicht verwendet.

Object style

Die Eigenschaften dieser Gruppe werden nicht an Verknüpfungsanordnungen vererbt.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen einer Punkt-Anordnung wird die Methode  `make_point_array` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makePointArray`.

```
point_array = make_point_array(base_object, point_object, extra=None, use_link=True)

```

* `base_object` ist das anzuordnende Objekt. Es kann auch die `Label` (-Zeichenkette) eines Objekts im aktuellen Dokument sein.
* `point_object` ist das Objekt, das die Punkte enthält. Es kann auch die `Label` (-Zeichenkette) eines Objekts im aktuellen Dokument sein. Es sollte eine Eigenschaft `Geometry`, `Links` oder `Components` haben, die Punkte enthält.
* `extra` ist ein `App.Placement`, ein `App.Vector` oder eine `App.Rotation`, die jedes Element verschiebt.
* Wenn `use_link` auf `True` gesetzt ist, sind die erstellten Elemente [App-Links](/App_Link/de "App Link/de") anstelle von regulären Kopien.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon = Draft.make_polygon(3, radius=500.0)

p1 = Draft.make_point(App.Vector(1500, 0, 0))
p2 = Draft.make_point(App.Vector(2500, 0, 0))
p3 = Draft.make_point(App.Vector(2000, 1000, 0))

compound = doc.addObject("Part::Compound", "Compound")
compound.Links = [p1, p2, p3]

point_array = Draft.make_point_array(polygon, compound)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PointArray/de&oldid=1558007>"