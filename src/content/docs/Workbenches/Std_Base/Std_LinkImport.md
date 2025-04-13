---
title: Std LinkImport
---

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std LinkImport                                                                                                                                                                  |
| Menu location                                                                                                                                                                   |
| None                                                                                                                                                                            |
| Workbenches                                                                                                                                                                     |
| All                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                |
| _None_                                                                                                                                                                          |
| Introduced in version                                                                                                                                                           |
| 0.19                                                                                                                                                                            |
| See also                                                                                                                                                                        |
| [Std LinkMake](/Std_LinkMake "Std LinkMake"), [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative"), [Std LinkImportAll](/Std_LinkImportAll "Std LinkImportAll") |
|                                                                                                                                                                                 |

## Description

![](/src/assets/images/Std_LinkImport.svg) [Std LinkImport](/Std_LinkImport "Std LinkImport") imports the Data**Linked Object** from a Link into the current document, and then changes the attachment to this object.

This operation is helpful when working with [assemblies](/Assembly "Assembly") in order to organize re-usable models that may be located in other documents.

Use ![](/src/assets/images/Std_LinkImportAll.svg) [Std LinkImportAll](/Std_LinkImportAll "Std LinkImportAll") to import all linked objects.

## Usage

1. Make sure you have a "source" document with an original object, say, a ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), and a second "target" document with a Link to that object.
2. Open the target document and select the Link to the object; its Data**Linked Object** should show something like `source#Part`.
3. Press ![](/src/assets/images/Std_LinkImport.svg) [Import link](/Std_LinkImport "Std LinkImport").

A copy of the original ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") must now be inside the current "target" document. The Data**Linked Object** property of the Link must now show `Part`, indicating that the Link no longer points to `Part` in "source", but to `Part` in the current document ("target").

![](/src/assets/images/Std_Link_tree_import_1_example.png) ![](/src/assets/images/Std_Link_tree_import_2_example.png)

Left: a Link points to the object in the "source" document. Right: the original object was imported (copied) into the "target" document, and the existing Link was changed to point to this copy, so it no longer points to the object in "source".

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImport/en&oldid=1097824>"
