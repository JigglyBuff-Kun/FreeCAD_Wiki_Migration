---
title: Std LinkMakeRelative (Criação de vínculo relativo - Padrão)
---
|  |
| --- |
| Std LinkMakeRelative |
| Menu location |
| None |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [Std Part](/Std_Part "Std Part"), [Std Group](/Std_Group "Std Group"), [Std LinkMake](/Std_LinkMake "Std LinkMake") |
|  |

## Descrição

![](/images/Std_LinkMakeRelative.svg) [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative") creates an [App Link](/App_Link "App Link") (`App::Link` class), just like ![](/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake"), but it operates on selected subelements first, and sets the Dados**Link Transform** to `true`.

## Utilização

With selection:

1. Select a subelement in the [3D view](/3D_view "3D view"), this means a vertex, edge, or face, or any combination of these. These subelements must belong to a single object.
2. Press the ![](/images/Std_LinkMakeRelative.svg) [Make sub-link](/Std_LinkMakeRelative "Std LinkMakeRelative") button. The produced object has the same icon as the original object, but has two arrow overlays indicating it is a relative Link.

Without selection:

* If no object is selected, this command does nothing.
* If an object is selected in the [tree view](/Tree_view "Tree view") only, but no subelement is selected in the [3D view](/3D_view "3D view"), the command does nothing either.

![](/images/Std_Link_tree_sublink_example.png) ![](/images/Std_Link_sublink_example.png)

Original body, and three Links created from the subelements of it, including edges and faces.

## Propriedades

This command creates a new [App Link](/App_Link "App Link"); its properties are described in ![](/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake").

In particular, Dados**Link Transform** is set to `true`, so Dados**Placement** becomes hidden, and instead Dados**Link Placement** controls the position of the Link with respect to the position of Dados**Linked Object**.

## Scripting

See [Std LinkMake](/Std_LinkMake "Std LinkMake") for the general information.

An App Link is created with the `addObject()` method of the document. To define a relative link, its `setLink` method is used to pick the source object, and one or more of its subelements. Then the `LinkTransform` attribute is set to `True`.

```
import FreeCAD as App

doc = App.newDocument()
body = App.ActiveDocument.addObject("Part::Box", "Box")

obj = App.ActiveDocument.addObject("App::Link", "Link")
obj.setLink(body, '', ['Edge1', 'Edge6', 'Edge7', 'Edge10', 'Face2', 'Face3'])
obj.LinkTransform = True
obj.LinkPlacement.Base = App.Vector(20, 20, 0)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMakeRelative/pt-br&oldid=1097790>"