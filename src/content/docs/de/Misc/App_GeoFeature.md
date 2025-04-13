---
title: App GeoFeature
---
## Einleitung

![](/images/Feature.svg)

Ein App-GeoFeature-Objekt, oder formal ein `App::GeoFeature`, ist die Basisklasse der meisten Objekte, die geometrische Elemente in der [3D-Ansicht](/3D_view/de "3D view/de") anzeigen, da es eine Daten-Eigenschaft**Placement** enthält.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten in FreeCAD

## Anwendung

Das App GeoFeature ist ein internes Objekt; es kann daher nicht von der grafischen Oberfläche aus erstellt werden. Es ist generell nicht dafür vorgesehen, direkt eingesetzt zu werden, eher zum Ableiten einer Unterklasse für ein nacktes Objekt, das nur eine grundlegende Daten-Eigenschaft**Placement** enthält, die seine Position in der [3D-Ansicht](/3D_view/de "3D view/de") festlegt.

Einige der wichtigsten abgeleiteten Objekte sind folgende:

* Die Klasse [Part Feature](/Part_Feature/de "Part Feature/de") (Part-Formelement), übergeordnete Klasse der meisten Objekte mit 2D- und 3D- [TopoFormen](/Part_TopoShape/de "Part TopoShape/de").
* Die Klasse [Mesh Feature](/Mesh_Feature/de "Mesh Feature/de") (Mesh-Formelement), übergeordnete Klasse der meisten von [Netzobjekten](/Mesh_MeshObject/de "Mesh MeshObject/de") abgeleiteten Objekte; keine Festkörper.
* Die Klasse [Fem FemMeshObject](/FEM_Mesh/de "FEM Mesh/de") (FEM-Netzobjekt), übergeordnete Klasse der FEM-Netze, die mit dem Arbeitsbereich [FEM](/FEM_Workbench/de "FEM Workbench/de") erstellt wurden.
* Die Klasse [CAM Feature](/index.php?title=CAM_Feature/de&action=edit&redlink=1 "CAM Feature/de (page does not exist)") (CAM-Element), übergeordnete Klasse der Werkzeugbahnen (paths), die mit dem Arbeitsbereich [CAM](/CAM_Workbench/de "CAM Workbench/de") für CNC-Bearbeitungen erstellt wurden.
* Die Klasse [App Part](/App_Part/de "App Part/de") (App-Part), die [Std-Parts](/Std_Part/de "Std Part/de") definiert, die als Behälter von Körpern eingesetzt werden, um Baugruppen zusammenzustellen.

Wird dieses Objekt mit [Python](/Python/de "Python/de") erstellt, sollte anstatt eine Unterklasse von `App::GeoFeature` abzuleiten, eine Unterklasse von `App::GeometryPython` abgeleitet werden, da letztere einen Standard-Viewprovider enthält sowie `Proxy`-Attribute für das Objekt selbst und seinen Viewprovider. Siehe [Skripten](#Skripten).

## Eigenschaften eines App-GeoFeature-Objekts

Siehe [Objekteigenschaften](/Property/de "Property/de") für alle Arten von Eigenschaften, die skriptgenerierte Objekte besitzen können.

Das Objekt App GeoFeature (Klasse `App::GeoFeature`) ist von dem grundlegenden [App DocumentObject](/App_DocumentObject/de "App DocumentObject/de") (Klasse `App::DocumentObject`) abgeleitet und erbt alle seine Eigenschaften. Zusätzlich besitzt es eine Daten-Eigenschaft**Placement**, die seine Position in der [3D-Ansicht](/3D_view/de "3D view/de") bestimmt.

## Eigenschaften eines App-GeometryPython-Objekts

Siehe [Objekteigenschaften](/Property/de "Property/de") für alle Arten von Eigenschaften, die skriptgenerierte Objekte besitzen können.

Das Objekt App GeometryPython (Klasse `App::GeometryPython`) wird von einem App GeoFeature (Klasse `App::GeoFeature`) abgeleitet und erbt alle seine Eigenschaften. Es besitzt einige zusätzliche Eigenschaften.

Diese sind die im [Eigenschafteneditor](/Property_editor/de "Property editor/de") vorhandenen Eigenschaften. Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Basis

* Daten (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object.
* Daten**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  + Daten**Angle**: the angle of rotation around the Daten**Axis**. By default, it is `0°` (zero degrees).
  + Daten**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  + Daten**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
* Daten**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
* Daten (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
* Daten (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
* Daten (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### Ansicht

Basis

* Ansicht-Eigenschaft (versteckt)**Proxy** (`PythonObject`): eine spezielle, mit diesen Objekt vebundene, [Viewprovider](/Viewprovider/de "Viewprovider/de")-klasse.

Display Options

* Ansicht**Bounding Box** (`Bool`): if it is `true`, the object will show the bounding box in the [3D view](/3D_view "3D view").
* Ansicht**Display Mode** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
* Ansicht**Show In Tree** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
* Ansicht**Visibility** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

Object Style

* Ansicht**Shape Color** (`Color`): a tuple of three floating point RGB values `(r,g,b)` to define the color of the faces in the [3D view](/3D_view "3D view"); by default it is `(0.8, 0.8, 0.8)`, which is displayed as `[204, 204, 204]` on base 255, a  light gray .
* Ansicht (Hidden)**Shape Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with this object. By default it is empty.
* Ansicht**Transparency** (`Percent`): an integer from `0` to `100` that determines the level of transparency of the faces in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible faces; the faces are invisible but they can still be picked as long as Ansicht**Selectable** is `true`.

Selection

* Ansicht**On Top When Selected** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
* Ansicht**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.
* Ansicht**Selection Style** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für allgemeine Informationen zum Hinzufügen von Objekten zu einem Dokument.

Ein GeoFeature wird mit der Methode `addObject()` des Dokuments erstellt. Soll ein Objekt mit einer 2D- oder 3D- [Topoform](/Part_TopoShape "Part TopoShape") erstellt werden, ist es vielleicht besser, eine Unterklasse zu erstellen, die auf den Umgang mit Formen spezialisiert ist, z.B. [Part Fomelement](/Part_Feature/de "Part Feature/de") oder [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de").

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeoFeature", "Name")
obj.Label = "Custom label"

```

Für die Ableitung von [Python](/Python/de "Python/de")-Unterklassen sollte das `App::GeometryPython`-Objekt erstellt werden.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeometryPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_GeoFeature/de&oldid=1560872>"