---
title: Part Îndepărtare/JoinCutout
---
|  |
| --- |
| Part JoinCutout |
| Menu location |
| Part → Join → Cutout for Object |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.16 |
| See also |
| [Part JoinConnect](/Part_JoinConnect "Part JoinConnect"), [Part JoinEmbed](/Part_JoinEmbed "Part JoinEmbed"), [Part Boolean](/Part_Boolean "Part Boolean"), [Part Thickness](/Part_Thickness "Part Thickness") |
|  |

## Descriere

Coutout tool creates a cutout in a walled object (e.g., a pipe) to fit another walled object.

The ![](/images/Part_JoinCutout.svg) **Part JoinCutout** tool creates a cutout in a walled object (e.g. a pipe) to fit another walled object.

![](/images/JoinFeatures_Cutout.png)

## Usage

## How to use

1. Select the base object first, then the object to define the cutout.   
    The order of selection is important. It is enough to select one sub-shape of each object (e.g., faces).
2. Invoke the Part JoinCutout command.

## Properties

Base

## Properties

Base

* Date**Base**: Reference to base object (the one to make the cutout in). The object should be a single solid.
* Date**Tool**: Reference to tool object (the object that is to fit into the cutout). The object can be a single solid, or a [valid compound](/Part_MakeCompound "Part MakeCompound") of solids.
* Date**Mode**: The mode of operation, equals 'Cutout' (Changing that will transform the tool into another Part\_JoinXXX). The value of 'bypass' can be used to temporarily disable the long computations (a compound of Base and Tool will be created, which is a fast operation).
* Date**Refine**: Sets whether to apply [Refine](/Part_RefineShape "Part RefineShape") operation or not, to the final shape. The default value is determined by a 'Automatically refine shape after boolean operation' checkbox in PartDesign preferences. When Mode property is 'bypass', Refine is ignored (never applied).

## Example

## Examplu

1. Create a pipe by applying [thickness](/Part_Thickness "Part Thickness") to a [cylinder](/Part_Cylinder "Part Cylinder"):   
   ![](/images/JoinFeatures_Example_step1.png)
2. Create another, smaller diameter pipe, and [place](/Placement "Placement") it so that it pierces the wall of the first pipe:   
   ![](/images/JoinFeatures_Example_step2.png)
3. Select the first pipe, then the second pipe (order of selection is important), and click the 'Cutout for object' option from the Join tools dropdown toolbar button.   
   ![](/images/JoinFeatures_Example_step3_Cutout.png)

## Algorithm

## Algoritm

Algoritmii din spatele instrumentelor de conectare sunt destul de simple, iar înțelegerea acestora este importantă pentru utilizarea corectă a instrumentelor.

1. Base object is [boolean-cut](/Part_Cut "Part Cut") with Tool object. The resulting shape is a set ([compound](/Part_MakeCompound "Part MakeCompound")) of non-intersecting solids (typically, two).

2. The resulting compound is filtered: only the largest solid is kept.

3. If Refine property is true, the resulting shape is [refined](/Part_RefineShape "Part RefineShape").
  
  
![](/images/JoinFeatures-Algo-Cutout.png)

### Notes

### Notă

* Dacă după pasul 1, obiectul rămâne într-o singură bucată, rezultatul Cutout va fi echivalent cu [boolean cut](/Part_Cut "Part Cut") al Base with Tool.
* Now, the tool will produce unexpected result, if a compound is supplied as Base. This may be changed in the future.
* Because the largest piece is determined by comparing volumes of pieces, the tool can only work with solids. This may be changed in the future.

## Programare-Script

Instrumentul Join poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând umătoarea funcție:

```
JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout')

```

* Creates an empty Cutout feature (or other Join feature, depending on mode passed). The properties Base and Tool must be assigned explicitly, afterwards.
* Returns the newly created object.

Exempluː

```
import JoinFeatures
j = JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout' )
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tool = FreeCADGui.Selection.getSelection()[1]

```

Instrumentul propriu-zis este implementat în Python, vezi /Mod/Part/JoinFeatures.py unde este instalat FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinCutout/ro&oldid=1496821>"