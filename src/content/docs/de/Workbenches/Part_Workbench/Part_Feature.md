---
title: Part Formelement
---

## Einleitung

![](/images/Part_3D_object.svg)

Ein Part Formelement-Objekt, oder formal ein `Part:: Feature`, ist ein einfaches Element mit einer [topologischen Form](/Part_TopoShape/de "Part TopoShape/de"), das in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt werden kann.

Das Part-Formelement ist die Elternklasse der meisten 2D-(Draft-, Sketcher-) und 3D- (Part-, PartDesign-) Objekte, mit Ausnahme von Polygonnetzen, die normalerweise auf dem[Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de") oder dem [FEM Polygonnetz](/FEM_Mesh/de "FEM Mesh/de")-Objekt für FEM-Objekte basieren.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten in FreeCAD

## Anwendung

Das Part-Formelement ist ein internes Objekt, kann also nicht von der grafischen Oberfläche aus erstellt werden, sondern nur von der [Python-Konsole](/Python_console/de "Python console/de") aus, wie im Abschnitt [Skripten](#Skripten) beschrieben.

Das `Part::Feature` wird im Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") definiert, kann aber als Basisklasse für [skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de") in allen [Arbeitsbereichen](/Workbenches/de "Workbenches/de") verwendet werden, die 2D- und 3D-Geometrieformen erstellen. Im Wesentlichen sind alle im Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") erstellten Objekte Instanzen eines `Part::Feature`s.

Das `Part::Feature` ist auch die Elternklasse des [PartDesign Körpers](/PartDesign_Body/de "PartDesign Body/de"), der [PartDesign Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") und der [Part Part2DObjekte](/Part_Part2DObject/de "Part Part2DObject/de"), die auf 2D-(planare) Formen spezialisiert ist.

Arbeitsbereiche können diesem Grundelement weitere Eigenschaften hinzufügen, um ein Objekt mit komplexem Verhalten zu erzeugen.

## Eigenschaften

Siehe [Eigenschaft](/Property/de "Property/de") für alle Eigenschaftstypen, die geskriptete Objekte haben können.

Das Part-Formelement (Klasse `Part::Feature`) wird von dem Grundelement [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de") (Klasse `App::GeoFeature`) abgeleitet, und erbt alle seine Eigenschaften. Es besitzt auch einige zusätzliche Eigenschaften. Hervorzuheben ist eine Daten-Eigenschaft**Shape**, die die [Part TopoForm](/Part_TopoShape/de "Part TopoShape/de") des Objekts speichert. Dies ist die Geometrie, die in der [3D-Ansicht](/3D_view/de "3D view/de") gezeigt wird. Andere Eigenschaften die dieses Objekt besitzt, sind solche die die Darstellung der [TopoForm](/Part_TopoShape/de "Part TopoShape/de") beeinflussen.

Diese sind die im [Eigenschafteneditor](/Property_editor/de "Property editor/de") vorhandenen Eigenschaften. Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Grundlage

- Daten (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).
- Daten (Hidden)**Shape** (`PartShape`): a [Part TopoShape](/Part_TopoShape "Part TopoShape") class associated with this object.
- Daten**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  - Daten**Angle**: the angle of rotation around the Daten**Axis**. By default, it is `0°` (zero degrees).
  - Daten**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  - Daten**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
- Daten**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
- Daten (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
- Daten (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
- Daten (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### Ansicht

Most objects in FreeCAD have what is called a "[viewprovider](/Viewprovider "Viewprovider")", which is a class that defines the visual appearance of the object in the [3D view](/3D_view "3D view"), and in the [Tree view](/Tree_view "Tree view"). The default viewprovider of Part Feature objects defines the following properties. Scripted objects that are derived from Part Feature will have access to these properties as well.

Base

- Ansicht (hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).

Anzeigeoptionen

- Ansicht**Bounding Box** (`Bool`): if it is `true`, the object will show the bounding box in the [3D view](/3D_view "3D view").
- Ansicht**Display Mode** (`Enumeration`): `Flat Lines` (regular visualization), `Shaded` (no edges), `Wireframe` (no faces), `Points` (only vertices).
- Ansicht**Show In Tree** (`Bool`): it defaults to `true`, in which case the object will appear in the [Tree view](/Tree_view "Tree view"); otherwise, the object will be hidden in the tree view. Once an object in the tree is invisible, you can see it again by opening the context menu over the name of the document (right-click), and selecting ![](/images/CheckBoxTrue.svg) Show hidden items. Then the hidden item can be chosen and Ansicht**Show In Tree** can be switched back to `true`.
- Ansicht**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar.

Objektstil

- Ansicht**Angular Deflection** (`Angle`): it is a companion to Ansicht**Deviation**. It is another way to specify how finely to generate the mesh for rendering on screen or when exporting. The default value is `28.5 degrees`, or `0.5 radians`. This is the maximum value, the smaller the value the smoother the appearance will be in the [3D view](/3D_view "3D view"), and the finer the mesh that will be exported.
- Ansicht**Deviation** (`FloatConstraint`): it is a companion to Ansicht**Angular Deflection**. It is another way to specify how finely to generate the mesh for rendering on screen or when exporting. The default value is `0.5%`. This is the maximum value, the smaller the value the smoother the appearance will be in the [3D view](/3D_view "3D view"), and the finer the mesh that will be exported.
- Ansicht (hidden)**Diffuse Color** (`ColorList`): it is a list of RGB tuples defining colors, similar to Ansicht**Shape Color**. It defaults to a list of one `[(0.8, 0.8, 0.8)]`.
- Ansicht**Draw Style** (`Enumeration`): `Solid` (default), `Dashed`, `Dotted`, `Dashdot`; defines the style of the edges in the [3D view](/3D_view "3D view").
- Ansicht**Lighting** (`Enumeration`): `Two side` (default), `One side`; the illumination comes from two sides or one side in the [3D view](/3D_view "3D view").
- Ansicht**Line Color** (`Color`): a tuple of three floating point RGB values `(r,g,b)` to define the color of the edges in the [3D view](/3D_view "3D view"); by default it is `(0.09, 0.09, 0.09)`, which is displayed as `[25,25,25]` on base 255, almost black .
- Ansicht (hidden)**Line Color Array** (`ColorList`): it is a list of RGB tuples defining colors, similar to Ansicht**Line Color**. It defaults to a list of one `[(0.09, 0.09, 0.09)]`.
- Ansicht (hidden)**Line Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with the edges in this object. By default it is empty.
- Ansicht**Line Width** (`FloatConstraint`): a float that determines the width in pixels of the edges in the [3D view](/3D_view "3D view"). It defaults to `2.0`.

- Ansicht**Point Color** (`Color`): similar to Ansicht**Line Color**, defines the color of the vertices.
- Ansicht (hidden)**Point Color Array** (`ColorList`): it is a list of RGB tuples defining colors, similar to Ansicht**Point Color**. It defaults to a list of one `[(0.09, 0.09, 0.09)]`.
- Ansicht (hidden)**Point Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with the vertices in this object. By default it is empty.
- Ansicht**Point Size** (`FloatConstraint`): similar to Ansicht**Line Width**, defines the size of the vertices.

- Ansicht**Shape Color** (`Color`): similar to Ansicht**Line Color**, defines the color of the faces. It defaults to `(0.8, 0.8, 0.8)`, which is displayed as `[204, 204, 204]` on base 255, a light gray.
- Ansicht (hidden)**Shape Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with this object. By default it is empty.
- Ansicht**Transparency** (`Percent`): an integer from `0` to `100` (a percentage) that determines the level of transparency of the faces in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible faces; the faces are invisible but they can still be picked as long as Ansicht**Selectable** is `true`.

Auswahl

- Ansicht**On Top When Selected** (`Enumeration`): it controls the way in which the selection occurs in the [3D view](/3D_view "3D view") if the object has a [Shape](/Part_TopoShape "Part TopoShape"), and there are many objects partially covered by others. It defaults to `Disabled`, meaning that no special highlighting will occur; `Enabled` means that the object will appear on top of any other object when selected; `Object` means that the object will appear on top only if the entire object is selected in the [Tree view](/Tree_view "Tree view"); `Element` means that the object will appear on top only if a subelement (vertex, edge, face) is selected in the [3D view](/3D_view "3D view").
- Ansicht**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.
- Ansicht**Selection Style** (`Enumeration`): it controls the way the object is highlighted. If it is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` a bounding box will appear surrounding the object and will be highlighted.

### Verdrehwinkel und Winkelabweichung

![](/images/View_property_Deviation.svg)

Parameter für Verdrehwinkel und Winkelabweichung: d < lineare Abweichung, α < Winkelabweichung.

Die Abweichung ist ein Wert in Prozent, der mit den Abmaßen in mm der Bounding-Box des Objekts zusammenhängt. Die Abweichung in mm kann wie folgt berechnet werden:

```
deviation_in_mm = (w + h + d)/3 * deviation/100

```

wobei `w`, `h`, `d` die Begrenzungsrahmen Abmessungen sind.

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Ein Part Formelement wird mit der `addObject()` Methode des Dokuments erstellt.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Feature", "Name")
obj.Label = "Custom label"

```

Für [Python](/Python/de "Python/de")-Subclassing sollte ein `Part::FeaturePython`-Objekt erstellt werden.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::FeaturePython", "Name")
obj.Label = "Custom label"

```

### Namen

See also: [Object name](/Object_name "Object name") for more information on the properties of the `Name`.

The `addObject` method has two basic string arguments.

- The first argument indicates the type of object, in this case, `"Part::FeaturePython"`.
- The second argument is a string that defines the `Name` attribute. If it is not provided, it defaults to the same name as the class, that is, `"Part__FeaturePython"`. The `Name` can only include simple alphanumeric characters, and the underscore, `[_0-9a-zA-Z]`. If other symbols are given, these will be converted to underscores; for example, `"A+B:C*"` is converted to `"A_B_C_"`.

### Beschriftung

If desired, the `Label` attribute can be changed to a more meaningful text.

- The `Label` can accept any UTF8 string, including accents and spaces. Since the [Tree view](/Tree_view "Tree view") displays the `Label`, it is a good practice to change the `Label` to a more descriptive string.
- By default the `Label` is unique, just like the `Name`. However, this behavior can be changed in the [preferences editor](/Preferences_Editor "Preferences Editor"), **Edit → Preferences → General → Document → Allow duplicate object labels in one document**. This means that in general the `Label` may be repeated in the same document; when testing for a specific element the user should rely on the `Name` rather than on the `Label`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Feature/de&oldid=1560870>"
