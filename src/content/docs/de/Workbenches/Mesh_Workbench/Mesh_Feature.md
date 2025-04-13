---
title: Mesh Formelement
---

## Einleitung

![](/src/assets/images/Mesh_Tree.svg)

Ein Mesh Feature-Objekt (Mesh Formelement) oder formal ein `Mesh::Feature` ist ein einfaches Element mit einem ihm zugeordneten [Mesh MeshObject](/Mesh_MeshObject/de "Mesh MeshObject/de") (Mesh-Objekt), das in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt werden kann.

Ein Mesh Formelement ähnelt konzeptionell einem [Part Formelement](/Part_Feature/de "Part Feature/de"); Ersteres ist das Basisobjekt für Elemente mit "Polygonnetz"-Information, während Letzteres das Basisobjekt für Elemente mit "geometrischer Form"-Information ist.

Bitte beachten, dass der Arbeitsbereich [FEM](/FEM_Workbench/de "FEM Workbench/de") ebenfalls Polygonnetze verwendet, aber in diesem Fall wird ein anderes Objekt verwendet, das [FEM FemMeshObject](/FEM_Mesh/de "FEM Mesh/de") genannt wird (`Fem::FemMeshObject`-Klasse). Dieses Objekt ist nicht von dem Mesh Formelement abgeleitet und hat andere Eigenschaften.

![](/src/assets/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten in FreeCAD.

## Anwendung

Fast alle Mesh-Objekte, die mit den im Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") verfügbaren Befehlen erzeugt werden, sind Mesh Formelemente. Die parametrischen Mesh-Objekte, die mit dem Befehl [Mesh RegelgeometrieErstellen](/Mesh_BuildRegularSolid/de "Mesh BuildRegularSolid/de") erzeugt werden, bilden die einzige Ausnahme. Ein Mesh Formelement kann auch über die [Python-Konsole](/Python_console/de "Python console/de") erstellt werden, wie im Abschnitt [Skripten](#Skripten) beschrieben.

Das `Mesh::Feature` wird im Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") definiert, kann aber als Basisklasse für [skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de") in allen [Arbeitsbereichen](/Workbenches/de "Workbenches/de"), die 2D- and 3D-Netze erstellen, verwendet werden.

Ein `Mesh::Feature` besitzt einfache Eigenschaften, wie eine [Positionierungund](/Placement/de "Placement/de") visuelle Eigenschaften, die die Darstellung seiner Kanten und Flächen bestimmen.

## Eigenschaften

Siehe [Eigenschaft](/Property/de "Property/de") für alle Arten von Eigenschaften, die skriptgenerierte Objekte besitzen können.

The [Mesh Feature](/Mesh_Feature "Mesh Feature") (`Mesh::Feature` class) is derived from the basic [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably a Daten**Mesh** property, which stores its [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject"). This is the geometry that is shown in the [3D view](/3D_view "3D view").

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Daten

Basis

- Daten (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).
- Daten**Mesh** (`MeshKernel`): a [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject") class associated with this object. It lists the number of `Points`, `Edges`, and `Faces` of the mesh.
- Daten**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  - Daten**Angle**: the angle of rotation around the Daten**Axis**. By default, it is `0°` (zero degrees).
  - Daten**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  - Daten**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
- Daten**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
- Daten (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
- Daten (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
- Daten (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### Ansicht

Base

- Ansicht (Hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).

Display Options

- Ansicht**Bounding Box** (`Bool`): if it is `true`, the object will show the bounding box in the [3D view](/3D_view "3D view").
- Ansicht**Display Mode** (`Enumeration`): `Shaded` (no edges), `Wireframe` (no faces), `Flat Lines` (regular visualization), `Points` (only vertices).
- Ansicht**Show In Tree** (`Bool`): if it is `true`, the object appears in the [Tree view](/Tree_view "Tree view"). Otherwise, it is set as invisible.
- Ansicht**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar.

Object Style

- Ansicht (Hidden)**Coloring** (`Bool`): it defaults to `false`.
- Ansicht**Crease Angle** (`FloatConstraint`):
- Ansicht**Lighting** (`Enumeration`): `One side` (default), `Two side`; the illumination comes from two sides or one side in the [3D view](/3D_view "3D view").
- Ansicht**Line Color** (`Color`): a tuple of three floating point RGB values `(r,g,b)` to define the color of the edges in the [3D view](/3D_view "3D view"); by default it is `(0.0, 0.0, 0.0)`, which is displayed as `[0,0,0]` on base 255, completely black .
- Ansicht**Line Transparency** (`Percent`): an integer from `0` to `100` (a percentage) that determines the level of transparency of the edges in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible edges; the edges are invisible but they can still be picked as long as Ansicht**Selectable** is `true`.
- Ansicht**Line Width** (`FloatConstraint`): a float that determines the width in pixels of the edges in the [3D view](/3D_view "3D view"). It defaults to `1.0`.
- Ansicht**Open Edges** (`Bool`): it defaults to `false`.
- Ansicht**Point Size** (`FloatConstraint`): similar to Ansicht**Line Width**, defines the size of the vertices.
- Ansicht**Shape Color** (`Color`): similar to Ansicht**Line Color**, defines the color of the faces. It defaults to `(0.8, 0.8, 0.8)`, which is displayed as `[204,204,204]` on base 255, a light gray.
- Ansicht (Hidden)**Shape Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with this object. By default it is empty.
- Ansicht**Transparency** (`Percent`): an integer from `0` to `100` (a percentage) that determines the level of transparency of the faces in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible faces; the faces are invisible but they can still be picked as long as Ansicht**Selectable** is `true`.

Selection

- Ansicht**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
- Ansicht**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.
- Ansicht**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. If the option is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` only the bounding box will be highlighted.

## Skripten

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Mesh Feature is created with the `addObject()` method of the document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::Feature", "Name")
obj.Label = "Custom label"

```

For [Python](/Python "Python") subclassing you should create the `Mesh::FeaturePython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Feature/de&oldid=1560727>"
