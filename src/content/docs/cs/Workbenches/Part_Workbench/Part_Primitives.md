---
title: Díl Vytváření základních geometrických tvarů
---

|                                                                                                |
| ---------------------------------------------------------------------------------------------- |
| Part Primitives                                                                                |
| Menu location                                                                                  |
| Part → Create primitives...                                                                    |
| Workbenches                                                                                    |
| [Part](/Part_Workbench "Part Workbench"), [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") |
| Default shortcut                                                                               |
| _None_                                                                                         |
| Introduced in version                                                                          |
| -                                                                                              |
| See also                                                                                       |
| [Part Builder](/Part_Builder "Part Builder")                                                   |
|                                                                                                |

## Description

Nástroj pro vytváření různých parametrických geometrických tvarů,

![](/images/Part_Primitives_example.png)

The primitives that can be created with the command

## Usage

### Create

1. There are several ways to invoke the command:
   - Press the ![](/images/Part_Primitives.svg) [Create Primitives...](/Part_Primitives "Part Primitives") button.
   - Select the **Part → ![](/images/Part_Primitives.svg) Create Primitives...** option from the menu.
2. The **Geometric Primitives** task panel opens.
3. Select a primitive type from the dropdown list.
4. Specify the properties.
5. Press the Create button.
6. The primitive object is created.
7. Note that the task panel stays open.
8. Optionally create additional primitives.
9. Press the Close button to close the task panel and finish the command.

### Edit

1. Double-click the primitive object in the [Tree view](/Tree_view "Tree view").
2. The **Geometric Primitives** task panel opens.
3. Change one or more properties.
4. The object is dynamically updated in the [3D view](/3D_view "3D view").
5. Press the OK button.

The properties of a Part Primitive can also be changed in the [Property editor](/Property_editor "Property editor"), and its Údaje**Placement** can also be changed with the ![](/images/Std_TransformManip.svg) [Std TransformManip](/Std_TransformManip "Std TransformManip") command.

- V současnosti může tento nástroj parametricky vytvářet
  - [Rovinu](/Part_Plane/cs "Part Plane/cs")
  - [Box](/Part_Box/cs "Part Box/cs")
  - [Válec](/Part_Cylinder/cs "Part Cylinder/cs")
  - [Kužel](/Part_Cone/cs "Part Cone/cs")
  - [Kouli](/Part_Sphere/cs "Part Sphere/cs")
  - [Elipsoid](/Part_Ellipsoid/cs "Part Ellipsoid/cs")
  - [Torus (vypadá jako nafouknutá duše z kola)](/Part_Torus/cs "Part Torus/cs")
  - [Hranol](/Part_Prism/cs "Part Prism/cs") [introduced in 0.14](/Release_notes_0.14 "Release notes 0.14")\*:
  - [Klín](/Part_Wedge/cs "Part Wedge/cs")
  - [Šroubovice](/Part_Helix/cs "Part Helix/cs")
  - [Spirála](/Part_Spiral/cs "Part Spiral/cs") [introduced in 0.14](/Release_notes_0.14 "Release notes 0.14")\*:
  - [Kružnice](/Part_Circle/cs "Part Circle/cs")
  - [Elipsa](/Part_Ellipse/cs "Part Ellipse/cs")
  - [Přímka](/Part_Line/cs "Part Line/cs") (Hrana)
  - [Bod](/Part_Point/cs "Part Point/cs") (Vrchol)
  - [Pravidelný mnohoúhelník](/Part_RegularPolygon/cs "Part RegularPolygon/cs") [introduced in 0.14](/Release_notes_0.14 "Release notes 0.14")\*:

The following primitives can be created:

- ![](/images/Part_Plane.svg) [Plane](/Part_Plane "Part Plane"): Creates a plane.
- ![](/images/Part_Box.svg) [Box](/Part_Box "Part Box"): Creates a box. This object can also be created with the [Box](/Part_Box "Part Box") tool.
- ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder "Part Cylinder"): Creates a cylinder. This object can also be created with the [Cylinder](/Part_Cylinder "Part Cylinder") tool.
- ![](/images/Part_Cone.svg) [Cone](/Part_Cone "Part Cone"): Creates a cone. This object can also be created with the [Cone](/Part_Cone "Part Cone") tool.
- ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere"): Creates a sphere. This object can also be created with the [Sphere](/Part_Sphere "Part Sphere") tool.
- ![](/images/Part_Ellipsoid.svg) [Ellipsoid](/Part_Ellipsoid "Part Ellipsoid"): Creates a ellipsoid.
- ![](/images/Part_Torus.svg) [Torus](/Part_Torus "Part Torus"): Creates a torus. This object can also be created with the [Torus](/Part_Torus "Part Torus") tool.
- ![](/images/Part_Prism.svg) [Prism](/Part_Prism "Part Prism"): Creates a prism.
- ![](/images/Part_Wedge.svg) [Wedge](/Part_Wedge "Part Wedge"): Creates a wedge.
- ![](/images/Part_Helix.svg) [Helix](/Part_Helix "Part Helix"): Creates a helix.
- ![](/images/Part_Spiral.svg) [Spiral](/Part_Spiral "Part Spiral"): Creates a spiral.
- ![](/images/Part_Circle.svg) [Circle](/Part_Circle "Part Circle"): Creates a circular arc.
- ![](/images/Part_Ellipse.svg) [Ellipse](/Part_Ellipse "Part Ellipse"): Creates an elliptical arc.
- ![](/images/Part_Point.svg) [Point](/Part_Point "Part Point"): Creates a point.
- ![](/images/Part_Line.svg) [Line](/Part_Line "Part Line"): Creates a line.
- ![](/images/Part_RegularPolygon.svg) [Regular polygon](/Part_RegularPolygon "Part RegularPolygon"): Creates a regular polygon.

## Notes

- The Part Primitives command cannot create a ![](/images/Part_Tube.svg) [Part Tube](/Part_Tube "Part Tube").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/), [Part scripting](/Part_scripting "Part scripting") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

There is a Python script to test the creation of the primitives. It can be run from the [Python console](/Python_console "Python console"):

```
import parttests.part_test_objects as pto
pto.create_test_file("example_file")

```

This script is located in the installation directory of the program, and can be examined to see how the basic primitives are built:

```
$INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

It can be used as input for the program as well:

```
freecad $INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Primitives/cs&oldid=1466602>"
