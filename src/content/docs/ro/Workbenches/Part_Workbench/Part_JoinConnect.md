---
title: Part JoinConnect
---
|  |
| --- |
| Part JoinConnect |
| Menu location |
| Part → Join → Connect objects |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.16 |
| See also |
| [Part JoinEmbed](/Part_JoinEmbed "Part JoinEmbed"), [Part JoinCutout](/Part_JoinCutout "Part JoinCutout"), [Part Boolean](/Part_Boolean "Part Boolean"), [Part Thickness](/Part_Thickness "Part Thickness") |
|  |

## Description

## Descriere

Instrument de conectare pentru îmbinarea inerioarelor a două obiecte goale-tip perete (de ex. Conducte). Poate asocia, de asemenea, cu cochiliile și filamente/polilinii.

![](/images/JoinFeatures_Connect.png)

## Usage

## Cum se folosește

1. Select objects to be connected.   
    The order of selection is not important, since the action of the tool is symmetric. It is enough to select one sub-shape of each object (e.g., faces). You can also select a compound containing all the shapes to be connected, e.g. [Draft Array](/Draft_Array "Draft Array").
2. Invoke the Part JoinConnect command.

## Properties

Connect

## Proprietăți

Connect

* Date**Objects**: List of objects to be connected. Generally, at least two objects are needed, but a single compound containing the shapes to connect will do as well. (as of FreeCAD v0.17.8053, this property is not displayed in property editor, and can only be accessed via Python).
* Date**Refine**: Sets whether to apply [Refine](/Part_RefineShape "Part RefineShape") operation or not, to the final shape. The default value is determined by a 'Automatically refine shape after boolean operation' checkbox in PartDesign preferences.
* Date**Tolerance**: "fuzziness" value. This is an extra tolerance to apply when searching for intersections, in addition to tolerances stored in the input shapes.

## Example

## Exemplu

1. Create a pipe by applying [thickness](/Part_Thickness "Part Thickness") to a [cylinder](/Part_Cylinder "Part Cylinder"):   
   ![](/images/JoinFeatures_Example_step1.png)
2. Create another, smaller diameter pipe, and [place](/Placement "Placement") it so that it pierces the wall of the first pipe:   
   ![](/images/JoinFeatures_Example_step2.png)
3. Select the first pipe and the second pipe, and click the 'Connect objects' option from the Join tools dropdown toolbar button.   
   ![](/images/JoinFeatures_Example_step3_Connect.png)
4. Use some cross-section tool ([Clipping plane](/Std_ToggleClipPlane "Std ToggleClipPlane"), [Arch Section Plane](/Arch_SectionPlane "Arch SectionPlane"), [Arch Cut Plane](/Arch_CutPlane "Arch CutPlane")) to reveal internals. On the picture below, Arch Section Plane is used.  
   ![](/images/JoinFeatures_Example_step4_Connect.png)

## Algorithm

## Algoritm

Algoritmii din spatele instrumentelor de conectare sunt relativ de simple, iar înțelegerea acestora este importantă pentru utilizarea corectă a instrumentelor. Algoritmul Connect, în special, este un pic mai complex decât alții, însă în general este suficient să ne gândim la acesta ca la o variantă simetrică [Embed algorithm](/Part_JoinEmbed#Algorithm "Part JoinEmbed")

1. Each object is split into pieces by intersections with other objects. (see [Part BooleanFragments](/Part_BooleanFragments "Part BooleanFragments"))

2. From the pieces of an object, only the largest one is kept; all the rest are thrown away.

3. Intersection pieces that touch at least two objects are added to result. Then, the pieces are joined together to form the result of Connect.

### Notes

### Note

* Dacă la etapa 1 fiecare obiect rămâne într-o singură bucată, rezultatul Connect va fi echivalent cu [union](/Part_Fuse/ro "Part Fuse/ro") de obiecte.
* Now, all compounds supplied are exploded prior to connecting. This means that self-intersecting compounds, which are invalid for all other Boolean operations, are valid for Connect. (This may be changed in the future.)
* The "largest" piece is the one that has largest mass. That is, for solids, volumes are compared; for shells and faces, areas are compared, and so on.
* Since FreeCAD v0.17.8053, and if OCC version is 6.9.0 and above, Connect is almost as fast as all other Boolean operations. For older versions, Connect is approximately 5 times slower than a regular Boolean operation, and works only on solids.

## Script

Instrumentul Join poate fi folosit în [macros](/Macros "Macros") și din consola python utilizând următoarea funcție:

```
BOPTools.JoinFeatures.makeConnect(name)

```

* Creates an empty Connect feature. The 'Objects' property must be assigned explicitly, afterwards.
* Returns the newly created object.

Connect can also be applied to plain shapes, without the need to have a document object, via:

```
Part.BOPTools.JoinAPI.connect(list_of_shapes, tolerance = 0.0)

```

This can be useful for making custom Python scripted features.

Exempluː

```
import Part
j = Part.BOPTools.JoinFeatures.makeConnect(name= 'Connect')
j.Objects = FreeCADGui.Selection.getSelection()

```

The tool itself is implemented in Python, see /Mod/Part/BOPTools/JoinFeatures.py under where FreeCAD is installed.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinConnect/ro&oldid=1496776>"