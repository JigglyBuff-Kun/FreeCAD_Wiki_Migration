---
title: EM FHInputFile/de
---
|  |
| --- |
| EM FHInputFile |
| Menu location |
| EM → FHInputFile |
| Workbenches |
| [EM](/EM_Workbench "EM Workbench") |
| Default shortcut |
| E I |
| Introduced in version |
| 0.17 |
| See also |
| [EM FHSolver](/EM_FHSolver "EM FHSolver") |
|  |

## Beschreibung

The FHInputFile tool creates the input FastHenry file based on the Document EM workbench objects.

## Anwendung

To create a FastHenry input file:

1. Create one [EM FHSolver](/EM_FHSolver "EM FHSolver") object and other EM workbench objects representing the 3D geometry as required for your model.
2. Press the ![](/images/EM_FHInputFile.svg) [EM FHInputFile](/EM_FHInputFile "EM FHInputFile") button, or press E then I keys.

### Remarks

* In case a file with the same name in the given folder as specified in the [EM FHSolver](/EM_FHSolver "EM FHSolver") object already exists, you will be prompted to overwrite or not.

* The Document can also contain non-EM Workbench objects. They will be ignored when creating the FastHenry input file. So you can use any other kind of FreeCAD object as guide for your EM Workbench models.

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug FHInputFile kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
node = createFHInputFile(doc=None,filename=None,folder=None)

```

* Outputs a FastHenry input file based on the active document geometry.
* `doc` is the Document object that must contain at least one EM\_FHSolver object and the relevant geometry. If no `doc` is given, the active document is used, if any.
* `filename` is the filename to use. If not passed as an argument, the Daten**Filename** property of the FHSolver object contained in the document will be used. If the Daten**Folder** string in the FHSolver object is empty, the function builds a filename concatenating the document name with the default extension `EMFHSOLVER_DEF_FILENAME`.
* `folder` is the folder where the file will be stored. If not passed as an argument, the Daten**Folder** property of the FHSolver object contained in the document will be used. If the Daten**Folder** string in the FHSolver object is empty, the function defaults to the user's home path (e.g. in Windows "C:\Documents and Settings\username\My Documents", in Linux "/home/username")

Beispiel:

```
import FreeCAD, EM

fhsolver = EM.createFHInputFile()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHInputFile/de&oldid=1340563>"