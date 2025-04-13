---
title: Std LinkImportAll
---

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std LinkImportAll                                                                                                                                                      |
| Menu location                                                                                                                                                          |
| None                                                                                                                                                                   |
| Workbenches                                                                                                                                                            |
| All                                                                                                                                                                    |
| Default shortcut                                                                                                                                                       |
| _None_                                                                                                                                                                 |
| Introduced in version                                                                                                                                                  |
| 0.19                                                                                                                                                                   |
| See also                                                                                                                                                               |
| [Std LinkMake](/Std_LinkMake "Std LinkMake"), [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative"), [Std LinkImport](/Std_LinkImport "Std LinkImport") |
|                                                                                                                                                                        |

## Description

![](/src/assets/images/Std_LinkImportAll.svg) [Std LinkImportAll](/Std_LinkImportAll "Std LinkImportAll") imports all Data**Linked Object**s from Links into the current document, and then changes the attachment to point to these imported objects.

This command essentially runs ![](/src/assets/images/Std_LinkImport.svg) [Std LinkImport](/Std_LinkImport "Std LinkImport") for all Links in a document.

## Usage

1. Make sure you have a "source" document with original objects, and a second "target" document with Links to those objects.
2. Open the target document and press ![](/src/assets/images/Std_LinkImportAll.svg) [Import all links](/Std_LinkImportAll "Std LinkImportAll").

![](/src/assets/images/Std_Link_tree_import_all_1_example.png) ![](/src/assets/images/Std_Link_tree_import_all_2_example.png)

Left: various Links that point to objects in the "source" document. Right: the original objects were imported (copied) into the "target" document, and the existing Links were changed to point to these copies, so they no longer point to objects in "source".

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImportAll/en&oldid=1458374>"
