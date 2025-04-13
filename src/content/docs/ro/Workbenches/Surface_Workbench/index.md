---
title: Atelierul de suprafețe
---

![](/images/Workbench_Surface.svg)

Surface workbench icon

## Introducere

Atelierul**Surface**oferă instrumente pentru crearea și modificarea suprafețelor. Are o funcționalitate foarte asemănătoare cu [Part Shape builder](/Part_Shapebuilder/ro "Part Shapebuilder/ro") _Face from edges_, dar este parametrică și oferă opțiuni suplimentare. Funcționalile sale sunt:

- Creați suprafețe de la margini
- Aliniați curbura de la fațetele vecine
- Constrângeți suprafețele la curbe sau vârfuri suplimentare.
- Extindeți fațetele (trebuie să aflați cum!)
- O plasă poate fi utilizată ca șablon pentru a crea curbe spline pe suprafața sa.

Some of the features provided are:

- Creation of surfaces from boundary edges.
- Alignment of the curvature from neighboring faces.
- Constraining of surfaces to additional curves and vertices.
- Extension of faces.
- A mesh can be used as a template to create spline curves on its surface.

![](/images/Surface_example.png)

## Usage

Scopul atelierului de lucru de suprafață este de a crea fațete cu forme care nu sunt disponibile cu uneltele standard din celelalte ateliere. Kernelul Open Cascade CAD oferă ca exemplu un colț rotunjit al unei casete dreptunghiulare cu diferite raze la marginile sale. Un alt exemplu este prezentat aici. Este o formă de jucărie din plastic, creată cu atelierul de lucru de suprafață.

![](/images/Toy_Duck.png)

Surface created with sketches placed in datum planes with the tools of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")

Atelierul suprafețe este integrat cu alte atelierele FreeCAD. Exemplul de mai sus a fost creat din [sketches](/Sketcher_Workbench/ro "Sketcher Workbench/ro") plasat pe [datum planes](/PartDesign_Plane/ro "PartDesign Plane/ro") în [PartDesign workbench](/PartDesign_Workbench/ro "PartDesign Workbench/ro"). Desegnul poate fi în întregime parametri, cânt toate planurile și scițele de referință sunt definite în acest sens.

Versiunea actuală a FreeCAD (v0.17) nu permite plasarea unor suprațfete în corpul din atelierul PartDesign . Dar suprafețele pot fi plasat în interiorul unei piese [Part](/Std_Part/ro "Std Part/ro") împreună cu corpul care deține toate plaenel și schițele de referință. Piesa non parametrică [Part Shape builder](/Part_Shapebuilder/ro "Part Shapebuilder/ro") trebuie încă utilizată pentru a crea o [shell](/Glossary/ro#Shell "Glossary/ro") și un solid regular [solid](/Glossary/ro#Solid "Glossary/ro") dincol de suprafețe.

## Instrumentul Surface

- ![](/images/Filling.svg) [Filling...](/Surface_Filling/ro "Surface Filling/ro"): umple o serie de curbe de graniță cu o suprafață. Suprafața poate fi modificată prin adăugarea curbelor de constrângeri și a vârfurilor. Suprafața își schimbă forma astfel încât suprafața să treacă prin elementele de constrângere adăugate.
- ![](/images/BSplineSurf.svg) [Fill boundary curves](/Surface_GeomFillSurface/ro "Surface GeomFillSurface/ro"):

creează o suprafață de la două, trei sau patru margini de graniță. Sunt disponibile trei moduri diferite de umplere: Stretch, Coons, Curved.

- ![](/images/Surface_GeomFillSurface.svg) [Fill boundary curves](/Surface_GeomFillSurface "Surface GeomFillSurface"): creates a surface from two, three or four boundary edges.

- ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections "Surface Sections"): creates a surface from edges that represent transversal sections of surface.

- ![](/images/Surface_ExtendFace.svg) [Extend face](/Surface_ExtendFace "Surface ExtendFace"): extrapolates the surface at the boundaries with its local U parameter and V parameter.

- ![](/images/Surface_CurveOnMesh.svg) [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh"): creates approximated spline segments on top of a selected [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Surface_BlendCurve.svg) [Blend Curve](/Surface_BlendCurve "Surface BlendCurve"): creates a Bezier curve between two edges, with desired continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/ro&oldid=1406805>"
