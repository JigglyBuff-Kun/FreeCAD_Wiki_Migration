---
title: BIM Diff
---

|                                       |
| ------------------------------------- |
| BIM Diff                              |
| Menu location                         |
| Utils → IFC Diff                      |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The **BIM Diff** tool takes two open FreeCAD documents, and produces a visual diff between them.

"diff" in programming refers to a utility application that takes two text documents and highlights the lines that are different between them. It usually marks in red the lines that have been removed and in green the lines that have been added. Its main purpose is to quickly grasp what has changed in two different versions of the same document.

This tool does the same thing, but graphically. It opens a new document, shows the contents of file B, but highlights:

![](/images/BIM_Diff_example.jpg)

This tool is primarily suited for IFC files, as it uses the IFC Global ID to make sure one object in one file is still the same in the other file. However, it will also work with two non-IFC FreeCAD files.

## Usage

1. Open a document in FreeCAD.
2. Open a second document in FreeCAD, that you wish to compare with the first one.
3. Select the **Utils → ![](/images/BIM_Diff.svg) IFC Diff** option from the menu.

## Options

- in **red** all elements of file A that are not present anymore in B
- in **green** all elements that are in B but weren't present in A
- in **yellow** all elements that were in A and are still in B, but their geometry has changed
- in **orange** all elements that were in A and are still in B, their geometry is still the same, but other properties has changed

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Diff/en&oldid=1498821>"
