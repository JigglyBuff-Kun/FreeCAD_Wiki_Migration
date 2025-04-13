---
title: Aelierul OpenSCAD
---

![](/images/Workbench_OpenSCAD.svg)

OpenSCAD workbench icon

## Introducere

Atelierul OpenSCAD este într-un stadiu timpuriu de dezvoltare. Se intenționează da el să ofere interoperabnilitate cu open source software [OpenSCAD](http://www.openscad.org/).

The ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") is intended to offer interoperability with the open source software [OpenSCAD](http://www.openscad.org/). This program is not distributed as part of FreeCAD, but should be installed to make full use of this workbench. OpenSCAD should not be confused with [OpenCASCADE](/OpenCASCADE "OpenCASCADE"), which is the geometrical kernel that FreeCAD uses to build geometry on screen. The OpenCASCADE libraries are always needed to use FreeCAD, while the OpenSCAD executable is entirely optional.

el conține un importator[importer](/OpenSCAD_CSG "OpenSCAD CSG") care permite deschiderea rezultatelor [.csg](/OpenSCAD_CSG "OpenSCAD CSG") output din OpenSCAD în FreeCAD.

Acest atelier de lucru conține funcții pentru modificarea arborescenței funcțiilor CSG și a modelelor de reparații.

![](/images/OpenSCADexamaple1.png)

## Dependencies

In FreeCAD 0.19, the Ply (Python-Lex-Yacc) module, which is used to import CSG files, was removed from the FreeCAD source code, as it is a third party library not developed by FreeCAD. As a result, you now need to install Ply before using the OpenSCAD Workbench. When using a pre-packaged, stable version of FreeCAD this dependency should be installed automatically in all platforms; in other cases, for example, when [compiling](/Compiling "Compiling") from source, you may have to install it from an online repository.

In openSUSE this is done by:

```
sudo zypper install python3-ply

```

In Debian/Ubuntu based systems this is done like the following:

```
sudo apt install python3-ply

```

The general installation in all platforms can be done from the Python package index.

```
pip3 install --user ply

```

## Limbajul OpenSCAD și formatul fișierului

Limbajul OpenSCAD permite utilizarea variabilelor și a buclelor. Vă permite să specificați submodulele pentru a reutiliza geometria și codul. Acest grad ridicat de flexibilitate face analiza foarte complexă. În prezent, modulul OpenSCAD din FreeCAD nu poate suporta limbajul OpenSCAD nativ.
În schimb, dacă este instalat OpenSCAD, acesta poate fi folosit pentru a converti intrarea într-un format de ieșire numit "CSG". Este un subset al limbajului OpenSCAD și poate fi folosit ca intrare în OpenSCAD pentru prelucrare ulterioară.
În timpul conversiei, toate comportamentele parametrice sunt pierdute - toate numele variabilelor sunt aruncate, buclele extinse și expresiile matematice evaluate.

## Tools

- ![](/images/OpenSCAD_ColorCodeShape.png) [Color Code Shape](/OpenSCAD_ColorCodeShape "OpenSCAD ColorCodeShape"): Schimbă culoarea formelor selectate sau a tuturor formelor bazate pe validitatea lor.
- ![](/images/OpenSCAD_ReplaceObject.png) [Replace Object](/OpenSCAD_ReplaceObject "OpenSCAD ReplaceObject"): În locuiește un obiect în arborescența funcțiilor.
- ![](/images/OpenSCAD_RemoveSubtree.png) [Remove Subtree](/OpenSCAD_RemoveSubtree "OpenSCAD RemoveSubtree"): Elimină obiectele selectate și toți copiii care nu sunt menționați de alte obiecte.
- ![](/images/OpenSCAD_RefineShapeFeature.png) [Refine Shape Feature](/OpenSCAD_RefineShapeFeature "OpenSCAD RefineShapeFeature"): Create Refine Shape Feature.
- ![](/images/OpenSCAD_IncreaseTolerance.png) [Increase Tolerance Feature](/OpenSCAD_IncreaseTolerance "OpenSCAD IncreaseTolerance"): Increases tolerance of edges/faces/vertex of selected object(s).
- ![](/images/OpenSCAD_Edgestofaces.png) [Convert Edges To Faces](/OpenSCAD_Edgestofaces "OpenSCAD Edgestofaces"): Convert edges to faces. Useful to prepare imported DXF geometry for extrusion.
- ![](/images/OpenSCAD_ExpandPlacements.png) [Expand Placements](/OpenSCAD_ExpandPlacements "OpenSCAD ExpandPlacements"): Expand all placements downwards the FeatureTree.
- ![](/images/OpenSCAD_ExplodeGroup.png) [Explode Group](/OpenSCAD_ExplodeGroup "OpenSCAD ExplodeGroup"): Explodes fused part primitives.
- ![](/images/OpenSCAD_AddOpenSCADElement.png) [Add OpenSCAD Element](/OpenSCAD_AddOpenSCADElement "OpenSCAD AddOpenSCADElement"): Add an OpenSCAD element by entering OpenSCAD code into the task panel.
- ![](/images/OpenSCAD_MeshBoolean.png) [Mesh Boolean](/OpenSCAD_MeshBoolean "OpenSCAD MeshBoolean"): Creează o nouă plasă din forme prin operațiuni booleene.
- ![](/images/OpenSCAD_Hull.png) [Hull](/OpenSCAD_Hull "OpenSCAD Hull"): Aplică o coajă la formele selectate.
- ![](/images/OpenSCAD_Minkowski.png) [Minkowski](/OpenSCAD_Minkowski "OpenSCAD Minkowski"): Aplică o sumă Minkowski formelor selectate.

## Preferințe

- ![](/images/Std_DlgParameter.png) [Preferences](/OpenSCAD_Preferences "OpenSCAD Preferences"): preferințe disponibile pentru instrumentele OpenSCAD.

## Limitations

## Limitări

OpenSCAD creează geometrie solidă constructivă, precum și importarea fișierelor tip plasă și extrudarea elementelor geometrice 2d (din fișierele dxf). FreeCAD vă permite să creați CSG și cu primitive. Kernelul geometriei FreeCAD (OCCT) funcționează utilizând o reprezentare a limitei.
Prin urmare, conversia de la CSG la BREP ar trebui, în teorie, să fie posibilă, în timp ce conversia de la BREP la CSG este, în general, nu.

OpenSCAD funcționează intern pe ochiuri de plasă. Unele operațiuni care sunt utile pentru ochiurile de plasă nu sunt semnificative pentru un model BREP și nu pot fi acceptate pe deplin. Printre acestea se numără cocii convexe, suma minkowski, alunecarea și subdivizarea. În prezent, executăm binarul OpenSCAD pentru a efectua operațiuni de cocă și minkwoski și a importa rezultatul. Aceasta înseamnă că geometria implicată va fi triangulată. În OpenSCAD este adesea folosită o scalare neuniformă, ceea ce nu implică probleme la utilizarea plaselor. În geometria kernelului, primitivele geometrice (linii, secțiuni circulare etc.) sunt convertite în BSpline înainte de a efectua astfel de deformări. Aceste linii BS sunt cunoscute că provoacă probleme în operațiile booleene ulterioare. O soluție automată nu este disponibilă momentan. Vă rugăm să nu ezitați să postați pe forum dacă întâmpinați astfel de probleme. Adesea, astfel de probleme pot fi rezolvate prin remodelarea pieselor mici. O deformare a unui cilindru poate fi înlocuită de o extrudare a unei elipse.

## Importing text

Importing OpenSCAD code with texts requires that the fonts that are used are properly installed on your system. You can verify this by opening OpenSCAD as a standalone tool and checking the list in **Help → Font List**. The list will also give you the correct font names. If a font does not appear in the list after installing, you may have to manually copy the font file to the appropriate system directory.

Importing texts is relatively slow. Behind the scenes FreeCAD uses a DXF file created by OpenSCAD. The more contours there are the slower the import.

It can be a good idea to first import a simple test case (replace `NameOfFont` with the correct font name):

```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};

```

The `script="Latn"` parameter can be left out here, but is required if the text string does not contain any letters, but only punctuation and/or numbers.

Please note that `use <FONT>;` statements in your source files are ignored when importing in FreeCAD. Under OpenSCAD the effect of a `use` statement is that the provided font file is temporarily added to the list of known fonts (although even there the statement does not work when a script is modified interactively).

## Hints

## Sugestii

Atunci când importați [DXF](/DXF "DXF") , setați precizia Proiectului la o valoare sensibilă, deoarece aceasta va afecta detectarea marginilor conectate.

Dacă FreeCAD se blochează atunci când importați CSG, este recomandat să activați "verificarea automată a modelului după operarea booleană" din **Menu → Edit → Preferences → Part Design → Model setting**.

## Tutorials

## Tutoriale

- [Import OpenSCAD code](/Import_OpenSCAD_code "Import OpenSCAD code")

## Links

## Legături

- [Open tickets tagged "Openscad" on the FreeCAD bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD)
- [Things tagged with "OpenSCAD" on Thingiverse](http://www.thingiverse.com/tag:openscad)

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Workbench/ro&oldid=1515595>"
