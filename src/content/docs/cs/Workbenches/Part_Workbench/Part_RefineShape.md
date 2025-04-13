---
title: Díl Vyčistit tvar
---
|  |
| --- |
| Díl Vyčistit tvar |
| Umístění Menu |
| Díl → Vyčistit tvar |
| Pracovní stoly |
| [Díl](/Part_Workbench/cs "Part Workbench/cs"), [OpenSCAD](/OpenSCAD_Workbench/cs "OpenSCAD Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Vyčistí zbytečné čáry. Po logických operacích zůstávají viditelné čáry, které definovaly původní tvary. Nástroj vytváří kopii vyčištěného objektu.

The ![](/images/Part_RefineShape.svg) **Part RefineShape** command creates parametric copies with a refined shape from selected objects. It removes unnecessary edges from planar and cylindrical faces.

![](/images/PartRefineShape_it.png)

Original with 11 faces (left), and refined copy with 7 faces (right).

## Použití

1. Vyberte tvar, který má být vyčištěn.
2. Klikněte na menu Díl → Vyčistit tvar.

* Je vytvořena kopie objektu a je kompletně vyčištěna, původní objekt je skryt.
* Nově vytvořená kopie je nezávislá na originálu.

1. Select one or more objects.
2. Select the **Part → Create a copy → ![](/images/Part_RefineShape.svg) Refine shape** option from the menu.
3. For each object a cleaned, parametric copy is created
4. The original objects are hidden.

## Notes

* This command can be used as the last step in a traditional [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") workflow.
* It may help to clean up the model before applying other features, such as [fillets](/Part_Fillet "Part Fillet").
* Cleaning up an object may prevent 3D printers from printing unwanted edges once the object is exported to a mesh format.
* This command can also be used after converting a mesh to a shape ([Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh")).
* By default this command creates parametric (linked) copies. There is [fine-tuning](/Fine-tuning "Fine-tuning") parameter to change this to non-parametric copies. More information about parametric/non-parametric copy behavior can be found in this [forum post](https://forum.freecad.org/viewtopic.php?t=42993).
* Some interesting information about what is happening with placement and how to access by Python can be found in this [forum post](https://forum.freecad.org/viewtopic.php?t=77568#p675456).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part RefineShape object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional property:

### Data

Refine

* Údaje**Source** (`Link`): specifies the linked source shape.

## Scripting

The Python command for refining a shape is the following:

```
shape.removeSplitter()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_RefineShape/cs&oldid=1466487>"