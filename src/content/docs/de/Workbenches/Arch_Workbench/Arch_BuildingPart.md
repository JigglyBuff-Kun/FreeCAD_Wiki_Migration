---
title: Arch Gebäudeteil
---
:::caution
DIESER BEFEHL IST VERALTETEr steht in1.0 und neuernicht zur Verfügung. Stattdessen kannArch Stockwerkverwendet werden.
:::

|  |
| --- |
| Arch Gebäudeteil |
| Menüeintrag |
| Arch → Gebäudeteil, 3D/BIM → Level |
| Arbeitsbereich |
| [Arch](/Arch_Workbench/de "Arch Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.18 |
| Siehe auch |
| [Arch Gebäude](/Arch_Building/de "Arch Building/de"), [Arch Grundstück](/Arch_Site/de "Arch Site/de") |
|  |

## Beschreibung

Der Gebäudeteil (BuildingPart-Objekt), der mit den Befehlen BIM-Stockwerk oder BIM-Gebäude erstellt wird, ersetzt die alten Objekte [Arch-Stockwerk](/Arch_Floor/de "Arch Floor/de") und [Arch-Gebäude](/Arch_Building/de "Arch Building/de") durch eine leistungsfähigere Version, die nicht nur für Geschosse/Etagen/Ebenen verwendet werden kann, sondern auch für alle möglichen Situationen, in denen verschiedene Arch- oder BIM-Objekte gruppiert werden sollen, um diese Gruppe als ein Objekt zu verwenden oder zu vervielfältigen.

## Anwendung

1. Wahlweise ein oder mehrere Objekte auswählen, die in dem neuen Gebäudeteil enthalten sein sollen.
2. Die Schaltfläche ![](/images/Arch_BuildingPart.svg) Arch Gebäudeteil drücken.

### Hinweise

Gebäudeteile haben eine eingebaute, implizite [Arch SchnittEbene](/Arch_SectionPlane/de "Arch SectionPlane/de").

Diese Ebene ist immer parallel zur GebäudeTeil Basisebene, aber du kannst den Versatz zwischen ihnen angeben. Daher arbeiten alle Werkzeuge, die mit einer Schnittebene arbeiten, wie z.B. [Entwurf Form2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de") und [TechDraw ArchAnsicht](/TechDraw_ArchView/de "TechDraw ArchView/de") auch mit GebäudeTeilen.

## Optionen

* Nach der Erstellung eines Gebäudeteils können weitere Objekte durch Ziehen und Ablegen in der Baumansicht hinzugefügt werden oder durch Verwenden des Werkzeugs ![](/images/Arch_Add.svg) [Arch Hinzufügen](/Arch_Add/de "Arch Add/de").
* Objekte können, durch Ziehen und Ablegen aus der Baumansicht heraus aus einem Gebäudeteil entfernt werden oder durch Verwenden des Werkzeugs ![](/images/Arch_Remove.svg) [Arch Entfernen](/Arch_Remove/de "Arch Remove/de").
* Mit einem Doppelklick auf den Gebäudeteil (BuildingPart-Objekt) in der Baumansicht wird die [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") auf seine Position gesetzt, und der Gebäudeteil wird aktiviert, was bedeutet daß neue Objekte automatisch zu ihm hinzugefügt werden.

Erneutes Doppelklicken auf den Gebäudeteil deaktiviert ihn und setzt die Arbeitsebene wieder auf die vorherige Position zurück (diese Option muss im Eigenschafteneditor unter Ansicht - Interaction - Double Click Activates auf true gesetzt werden, damit sie zur Verfügung steht).

* Das Gebäudeteil-Objekt kann in der 3D-Ansicht eine Markierung mit einer Benennung und einer Höhenangabe anzeigen.
* Wenn ein Gebäudeteil verschoben oder gedreht wird, werden alle abhängigen Objekte, die entweder die Daten-Eigenschaft**Move With Host** nicht besitzen oder bei denen diese aktiviert wurde, mit ihm zusammen verschoben bzw. gedreht.
* Gebäudeteile können [Draft Klone](/Draft_Clone/de "Draft Clone/de") sein.
* Gebäudeteile können jeden IFC-Typ annehmen. Ihre Eigenschaft **Ifc Type** bestimmt ihre Verwendung. Ist sie auf **Building Storey** gesetzt, verhält er sich wie ein Stockwerk. Ist sie auf **Building** gesetzt, verhält er sich wie ein Gebäude, und ist sie auf **Element Assembly** gesetzt, verhält er sich wie eine Baugruppe. Das Symbol ändert sich entsprechend dieser Einstellung, hat aber ansonsten keine weiteren Auswirkungen in FreeCAD. Der Export nach IFC als der eine oder andere Typ kann jedoch Auswirkungen auf andere BIM-Anwendungen haben.
* Gebäudeteile ermöglichen das Festlegen einer **Auto-group capture box**. Nachfolgende Draft- und Arch-Objekte oder alles was Draft.autogroup() verwendet, weden automatisch zum Gebäudeteil hinzugefügt, wenn sie sich vollständig innerhalb der Auswahl-Box befinden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Arch Gebäudeteil (BuildingPart-Objekt) wird von einem [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft**Group** (`LinkList`): Liste der referenzierten Objekte.
* Daten-Eigenschaft (versteckt)**\_ Group Touched** (`Bool`)

Building Part

* Daten**Area** (`Area`): The computed floor area of this floor.
* Daten**Height** (`Length`): The height of this object, and of its children objects. The children objects could be, for example, [Arch Walls](/Arch_Wall "Arch Wall"). Each wall's height must be set to `0` (zero), so the height property of the BuildingPart propagates to the objects inside of it.
* Daten**Level Offset** (`Length`): The level of the (0,0,0) point of this level. This value is added to the `Placement.Base.z` attribute of the BuildingPart, to indicate a vertical offset without actually moving the object. The resulting offset is displayed if Ansicht**Show Level** is `true`.
* Daten (Hidden)**Materials Table** (`Map`): A MaterialName:SolidIndexesList map that relates material names with solid indexes to be used when referencing this object from other files.
* Daten**Only Solids** (`Bool`): If true, only solids will be collected by this object when referenced from other files.
* Daten (Hidden)**Saved Inventor** (`FileIncluded`): This property stores an inventor representation for this object.
* Daten (Hidden)**Shape** (`PartShape`): The shape of this object.

Children

* Daten**Height Propagate** (`Bool`): If true, the height value propagates to contained objects. See the Daten**Height** property for additional conditions that apply.

IFC

* Daten-Eigenschaft (versteckt)**Ifc Data** (`Map`): IFC-Daten.
* Daten-Eigenschaft (versteckt)**Ifc Properties** (`Map`): IFC-Eigenschaften dieses Objekts.
* Daten-Eigenschaft**Ifc Type** (`Enumeration`): IFC-Typ dieses Objekts.

IFC Attributes

* Daten-Eigenschaft**Description** (`String`): Eine optionale Beschreibung für diese Komponente.
* Daten-Eigenschaft**Global Id** (`String`)
* Daten-Eigenschaft**Object Type** (`String`)
* Daten-Eigenschaft**Overall Height** (`Length`)
* Daten-Eigenschaft**Overall Width** (`Length`)
* Daten-Eigenschaft**Partitioning Type** (`Enumeration`)
* Daten-Eigenschaft**Predefined Type** (`Enumeration`)
* Daten-Eigenschaft**Tag** (`String`): Ein optionales Kennzeichen für diese Komponente.
* Daten-Eigenschaft**User Defined Partitioning Type** (`String`)

### Ansicht

Auto Group

* Ansicht**Autogroup Autosize** (`Bool`): Automatically set the capture box size from the Building Part contents. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* Ansicht**Autogroup Box** (`Bool`): Turns auto grouping (and the display of the capture box) on/off. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* Ansicht**Autogroup Margin** (`Length`): A margin to use when autosize is turned on. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* Ansicht**Autogroup Size** (`IntegerList`): The capture box for newly created objects expressed as [XMin,YMin,ZMin,XMax,YMax,ZMax]. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Building Part

* Ansicht (Hidden)**Diffuse Color** (`ColorList`): The individual face colors.
* Ansicht**Display Offset** (`Placement`): A transformation to apply to the level mark.
* Ansicht**Font Name** (`Font`): The font to be used for texts.
* Ansicht**Font Size** (`Length`): The font size of texts.
* Ansicht**Line Width** (`Float`): The line width of this object.
* Ansicht**Origin Offset** (`Bool`): If true, when activated, Display offset will affect the origin mark too.
* Ansicht**Override Unit** (`String`): An optional unit to express levels.
* Ansicht**Show Label** (`Bool`): If true, when activated, the object's label is displayed.
* Ansicht**Show Level** (`Bool`): If true, show the level.
* Ansicht**Show Unit** (`Bool`): If true, show the unit on the level tag.

Children

* Ansicht**Children Line Color** (`Color`): The line color to apply to the children of this Building Part.
* Ansicht**Children Line Width** (`Float`): The line width to apply to the children of this Building Part.
* Ansicht**Children Override** (`Bool`): If true, the objects contained in this Building Part will adopt these line, color and transparency settings.
* Ansicht**Children Shape Color** (`Color`): The shape color to apply to the children of this Building Part.
* Ansicht**Children Transparency** (`Percent`): The transparency to apply to the children of this Building Part.

Clip

* Ansicht**Auto Cut View** (`Bool`): Turn cutting on when activating this level.
* Ansicht**Cut Margin** (`Length`): The distance between the level plane and the cut line.
* Ansicht**Cut View** (`Bool`): Cut the view above this level.

Interactions

* Ansicht**Auto Working Plane** (`Bool`): If set to True, the working plane will be kept on Auto mode.
* Ansicht**Double Click Activates** (`Bool`): If True, double-clicking this object in the tree activates it.
* Ansicht**Restore View** (`Bool`): If set, the view stored in this object will be restored on double-click.
* Ansicht**Save Inventor** (`Bool`): If this is enabled, the inventor representation of this object will be saved in the FreeCAD file, allowing to reference it in other files in lightweight mode.
* Ansicht (Hidden)**Saved Inventor** (`FileIncluded`): A slot to save the inventor representation of this object, if enabled.
* Ansicht**Set Working Plane** (`Bool`): If true, when activated, the working plane will automatically adapt to this Building Part.
* Ansicht (Hidden)**View Data** (`FloatList`): Camera position data associated with this object.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Gebäudeteil kann sowohl in [Makros](/Macros/de "Macros/de") als auch von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
BuildingPart = makeBuildingPart(objectslist=None)

```

* Erzeugt ein `Building`-Objekt aus `objectslist`, einer Liste von Objekten.

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_BuildingPart/de&oldid=1542097>"