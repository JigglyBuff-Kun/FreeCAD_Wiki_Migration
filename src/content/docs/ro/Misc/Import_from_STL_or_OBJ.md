---
title: Import din STL în OBJ
---
|  |
| --- |
| Tutorial |
| Topic |
| Import from STL or OBJ |
| Level |
| Beginner |
| Time to complete |
| 30 minutes |
| Authors |
| r-frank |
| FreeCAD version |
| 0.16.6703 |
| Example files |
|  |
| See also |
| *None* |
|  |

## Introduction

## Introducere

În acest tutorial, vom discuta cum să importați fișiere STL / OBJ în FreeCAD. Din moment ce ochiurile plaselor STL / OBJ sunt fără dimensiuni, FreeCAD va presupune la import că unitățile folosite în model sunt mm. Dacă nu este cazul, trebuie să vă scalați modelul, fie în aplicația în care a fost creată cu (înainte de a o exporta), fie trebuie să vă scalați modelul în FreeCAD după import și să-l convertiți într-un solid.

## Piesa de model

Pentru acest tutorial, puteți utiliza propriul fișier STL sau creați un fișier demo, făcând următoarele:

* Open FreeCAD
* Create a new document
* Switch to the mesh workbench
* Insert a torus by clicking on  Meshes → ![](/images/Mesh_BuildRegularSolid.svg) Regular solid... , choosing settings like:
  + Radius1: 10 mm
  + Radius2: 2 mm
  + Sampling: 50
* Click on  Create and then on  Close
* Save your file with  File →  Save to get a FreeCAD-File containing a mesh object

Pentru a importa un fișier STL sau OBJ în FreeCAD, creați un nou document FreeCAD și alegeți
 File →  Import from the top menu.

## Curățarea și repararea fișierului STL / OBJ pentru pregătirea importului

Practic, FreeCAD va importa orice fișier STL / OBJ.
Dar scopul nostru este să avem un solid care să poată fi măsurat și modificat (adăugând blocuri / gauri ...etc). Pentru o conversie reușită de la plasă la solid, trebuie să ne asigurăm că plasa este "impermeabilă" (nu are găuri) sau nu are alte erori.
  
Scopul FreeCAD nu este acela de a fi un modelator de plasă bun, el este conceput să fie un modelator de solide. FreeCAD are câteva funcții pentru operarea cu ochiuri de plasă într-un atelier Mesh și OpenSCAD Workshop (unele operații necesită instalarea și configurarea OpenSCAD în preferințele FreeCAD).
  
Unii utilizatori preferă să utilizeze software-ul terților pentru curățarea și repararea ochiurilor de plasă, de exemplu

* [Netfabb Basic](http://www.netfabb.com/downloadcenter.php?basic=1) (Windows/Linux/Mac) - free for personal use (automatic mesh repair available)
* [Meshlab](http://meshlab.sourceforge.net/) (Windows/Linux/Mac) - Open Source

În acest tutorial vom folosi bancul de lucru cu plasă în cadrul FreeCAD clean/repair/verify plasa din fișierul eșantion.

### Testarea automată și repararea

* Deschideți FreeCAD și fișierul eșantion FreeCAD care conține obiectul mesh
* Comutați pe Atelierul Mesh
* Asigurați-vă că obiectul mesh este selectat în vizualizarea arborescentă
* Selectați  Meshes →  Analyze →  Evaluate & Repair mesh... din meniul Top
* Asigurați-vă că meniul derulant din colțul din dreapta sus indică numele obiectului dvs. tip plasă
* Cu ultimul punct din lista "All above tests together" faceți clic pe  Analyze
* Textele de lângă casetele de bifare se vor modifica pentru a reflecta rezultatele diferitelor teste
* Dacă ar fi detectat erori, casetele de selectare corespunzătoare vor fi bifate și veți putea selecta  Repair
* Selectați  Close pentru a închide meniul

### Armonizarea normalelor

Armonizarea normalelor unui obiect de plasă se poate face prin

* Selectara obiectului dvs tip plasă în vederea arborescentă
* Selectați  Meshes → ![](/images/Mesh_HarmonizeNormals.png) Harmonize normals din meniul de sus.

Sfat:
Prin alegerea obiectului tip plasă din vizualizarea arborescentă, accesați fila vizualizare din vizualizarea proprietății și schimbând "Lighting" de la
"Two Side" la "One Side" Puteți identifica triunghiurile cu normale inversate.
În cazul în care normalele indică în interiorul plasei, triunghiul va fi afișat în negru.

### Închiderea găurilor

sau poate închide, de asemenea, ochii în obiectul mesh de

* Selectați obiectul dvs. tip plasă din vederea arborescentă
* Choose  Meshes →  Fill holes... from the top menu
* Specify maximum number of edges to be filled (3 is default)
* Since STL and OBJ are meshes consisting of triangles the default number of edges should be sufficient

Another method of manually closing holes in your mesh object would be

* Selecting your mesh object in the tree view
* Choose  Meshes → ![](/images/Mesh_FillInteractiveHole.png) Close hole from the top menu
* Select one of the edges of the hole in the mesh object in the 3D view
* Faceți clic dreapta în vizualizarea 3D și alegeți  Leave hole-filling mode pentru a ieși din comandă

## Conversia plasei în solid

* comutați pe Atelierul Part
* Asigurați-vă că obiectul mesh este în vizualizarea arborescentă, în caz contrar selectați-l
* Choose  Part → ![](/images/Part_ShapeFromMesh.png) Create shape from mesh ... from top menu
* Specify tolerance for sewing shape (0,1 is default)
* A new object will be created in the tree view (with blue shape icon, instead of green mesh icon)
* Select the newly created object in the tree view
* Choose  Part → ![](/images/Part_RefineShape.png) Refine shape from the top menu
* A new object will be created in the tree view and the previous one will be made invisible
* Select the newly created object in the tree view
* Choose  Part →  Convert to solid from the top menu
* A new object will be created in the tree view, bearing "(Solid)" in its name, to indicate it is a solid

Deoarece solidul creat nu are istorie si nici funcții editabile (ca o copie simplă în FreeCAD)
ați putea șterge toate obiectele anterioare din vizualizarea arborescentă.
Acest lucru va păstra dimensiunea redusă a fișierului dvs. ...

## Links

## Legături utile

* [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ")

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_from_STL_or_OBJ/ro&oldid=819773>"