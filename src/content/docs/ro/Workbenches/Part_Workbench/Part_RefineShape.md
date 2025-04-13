---
title: Part Rafinarea Formei
---
|  |
| --- |
| Part RefineShape |
| Menu location |
| Part → Create a copy → Refine Shape |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy"), [Part TransformedCopy](/Part_TransformedCopy "Part TransformedCopy"), [Part ElementCopy](/Part_ElementCopy "Part ElementCopy"), [OpenSCAD RefineShapeFeature](/OpenSCAD_RefineShapeFeature "OpenSCAD RefineShapeFeature") |
|  |

## Descriere

Curata liniile inutile. După o operație booleană, unele linii care definesc forma anterioară rămân vizibile, această unealtă creează o copie total curățată a originalului.

The ![](/images/Part_RefineShape.svg) **Part RefineShape** command creates parametric copies with a refined shape from selected objects. It removes unnecessary edges from planar and cylindrical faces.

![](/images/PartRefineShape_it.png)

![](/images/PartRefineShape_it.png)

## Utilizare

1. Selectați forma de curățat.
2. Click pe meniul Part → Refine shape .

* O copie a obiectului este creată și complet curățată, obiectul original este randat.
* Copia nou creată este independentă de original.

1. Select one or more objects.
2. Select the **Part → Create a copy → ![](/images/Part_RefineShape.svg) Refine shape** option from the menu.
3. For each object a cleaned, parametric copy is created
4. The original objects are hidden.

## Note

* funcția nu modifică forma existentă, dar returnează o nouă formă
* funcția este folosită în mod normal ca ultim pas în istoricul de modelare
* funcția poate ajuta la obținerea rotunjirilor dificile pentru de lucrat
* funcția este destinată să împiedice imprimantele 3D să printeze marginile nedorite
* funcția poate fi utilizată după transformarea unei rețele în formă pentru a curăța marginile reziduale pe fațetele plane.

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

* Date**Source** (`Link`): specifies the linked source shape.

## Script

Comanda Python pentru rafinarea formei este următoarea:

The Python command for refining a shape is the following:

```
shape.removeSplitter()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_RefineShape/ro&oldid=1466482>"