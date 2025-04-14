---
title: Asymptote
---

## Description

[Asymptote](https://asymptote.sourceforge.io/) is a vector language for 2D and 3D computer graphics. Asymptote code can be included in [LaTeX](https://www.latex-project.org/) documents or used to generate [PostScript](https://en.wikipedia.org/wiki/PostScript), [PDF](/PDF "PDF"), [SVG](/SVG "SVG"), [WebGL](https://www.khronos.org/webgl/), and [PRC](<https://en.wikipedia.org/wiki/PRC_(file_format)>) files. Interactive 3D PDF files created from Asymptote code require Acrobat Reader version 9 or higher.

Asymptote support was added in FreeCAD version 0.19.

## Exporting

1. Optionally assign colors to the faces of the object you want to export with the ![](/images/Part_ColorPerFace.svg) [Part ColorPerFace](/Part_ColorPerFace "Part ColorPerFace") command.
2. Change to the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").
3. Create a mesh from the object with the ![](/images/Mesh_FromPartShape.svg) [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") command.
4. Select the new mesh object.
5. Invoke the ![](/images/Mesh_Export.svg) [Mesh Export](/Mesh_Export "Mesh Export") command.
6. Select the \*.asy file format in the dialog box.
7. Enter a filename.
8. Press the Save button.

## Converting

You need the [Asymptote compiler](https://sourceforge.net/projects/asymptote/) to convert \*.asy files. To convert to PDF a [LaTeX](https://www.latex-project.org/get/) system is also required.

The compiler is a command line tool. To covert to PDF you can use this syntax:

```
PathToAsyExecutable/asy -f pdf AsymptoteFileName.asy

```

## Related

- [Import Export](/Import_Export "Import Export")

## Video tutorials

The following videos are in Spanish:

- [A way of generating interactive pdf-3D files. (1/3) (From FreeCAD, MeshLab and LaTeX)](https://www.youtube.com/watch?v=U0m3643Vb1Q)
- [A way of generating interactive pdf-3D files. (2/3) (From Asymptote and LaTex)](https://www.youtube.com/watch?v=PhVNvDZIerM)
- [A way of generating interactive pdf-3D files. (3/3) (From FreeCAD, Asymptote and LaTeX)](https://www.youtube.com/watch?v=Q_ufaCN2hb4)

Retrieved from "<http://wiki.freecad.org/index.php?title=Asymptote/en&oldid=1397972>"
