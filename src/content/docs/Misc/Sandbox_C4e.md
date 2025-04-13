---
title: Sandbox C4e
---
## All property types

Custom [scripted objects](/Scripted_objects "Scripted objects") can use any of the property types defined in the base system:

| Property Type |
| --- |
| `Bool` |
| `Float` |
| `FloatList` |
| `FloatConstraint` |
| `Angle` |
| `Distance` |
| `ExpressionEngine` |
| `Integer` |
| `IntegerConstraint` |
| `Percent` |
| `Enumeration` |
| `IntegerList` |
| `String` |
| `StringList` |
| `Length` |
| `Link` |
| `LinkList` |
| `LinkSubList` |
| `Matrix` |
| `Vector` |
| `VectorList` |
| `VectorDistance` |
| `Placement` |
| `PlacementLink` |
| `PythonObject` |
| `Color` |
| `ColorList` |
| `Material` |
| `Path` |
| `File` |
| `FileIncluded` |
| `PartShape` |
| `FilletContour` |
| `Circle` |

| Property Type |
| --- |
| `Bool` |
| `Float` |
| `FloatList` |
| `FloatConstraint` |
| `Angle` |
| `Distance` |
| `ExpressionEngine` |
| `Integer` |
| `IntegerConstraint` |
| `Percent` |
| `Enumeration` |
| `IntegerList` |
| `String` |
| `StringList` |
| `Length` |
| `Link` |
| `LinkList` |
| `LinkSubList` |
| `Matrix` |
| `Vector` |
| `VectorList` |
| `VectorDistance` |
| `Placement` |
| `PlacementLink` |
| `PythonObject` |
| `Color` |
| `ColorList` |
| `Material` |
| `Path` |
| `File` |
| `FileIncluded` |
| `PartShape` |
| `FilletContour` |
| `Circle` |

Internally, the property name is prefixed with `App::Property`:

```
App::PropertyBool
App::PropertyFloat
App::PropertyFloatList
...

```

Remember that these are property *types*. A single object may have many properties of the same type, but with different names.

For example:

```
obj.addProperty("App::PropertyFloat", "Length")
obj.addProperty("App::PropertyFloat", "Width")
obj.addProperty("App::PropertyFloat", "Height")

```

This indicates an object with three properties of type "Float", named "Length", "Width", and "Height", respectively.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sandbox:C4e&oldid=1166430>"