---
title: Shape
---
## Introduzione

In FreeCAD la parola "Shape" (Forma) viene normalmente utilizzata per riferirsi a una [Part TopoShape](/Part_TopoShape/it "Part TopoShape/it") (classe `Part::TopoShape`), un tipo di oggetto che fornisce ad un elemento la sua rappresentazione geometrica e parametrica 3D (cubo, piramide, sfera, cilindro, fusione, ecc.).

Essenzialmente tutti gli oggetti visualizzati nella [Vista 3D](/3D_view/it "3D view/it") hanno un [TopoShape](/Part_TopoShape/it "Part TopoShape/it"), ad eccezione delle "[Mesh](/Mesh/it "Mesh/it")", che hanno un [[Mesh\_MeshObject/it|MeshObject] ] (classe `Mesh::MeshObject`).

Vedere [Part TopoShape](/Part_TopoShape/it "Part TopoShape/it") per ulteriori informazioni su questo tipo di oggetto.

![](/images/Shape_and_mesh.svg)

Sinistra: forma parametrica definita dalle proprietà. A destra: [mesh](/Mesh/it "Mesh/it"), definita da vertici e superfici triangolari.

## Utilizzo

Le Shape (Forme) vengono normalmente create da funzioni interne del [Ambiente Part](/Part_Workbench/it "Part Workbench/it") e sono infine definite dal kernel [OpenCASCADE Technology](/OpenCASCADE/it "OpenCASCADE/it") (OCCT).

Una volta creata una Forma, può essere utilizzata e modificata da tutti gli [ambienti di lavoro](/Workbenches/it "Workbenches/it") creando [oggetti con script](/Scripted_objects/it "Scripted objects/it") attorno a quella Forma.

In sostanza, ci si aspetta che ogni oggetto derivato da una [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`) contenga e manipoli una Forma.

Qualsiasi forma OpenCascade ha una tassellatura principalmente per visualizzare la forma sullo schermo. Maggiori informazioni a riguardo possono essere trovate in questo [post del forum](https://forum.freecad.org/viewtopic.php?t=77521&start=10#p674947) e nel [/overview/html/occt\_user\_guides\_\_mesh.html documentazione OpenCascad Mesh](https://dev.opencascade.org/doc).

## Note

Nell'uso informale, una "Forma" può essere qualsiasi figura geometrica visibile nella [vista 3D](/3D_view/it "3D view/it"), e quindi il suo concetto può essere confuso con quello di "[Corpo](/Body/it "Body/it")" o "[Parte](/Part/it "Part/it")".

Tuttavia, quando è richiesta maggiore precisione, è necessario fare una distinzione.

* Un "[Corpo](/Body/it "Body/it")" (Body) è un oggetto derivato da una [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`), creato con l'[Ambiente PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") .
* Una "Forma" è un oggetto interno, incorporato nel "[Corpo](/Body/it "Body/it")".
* Una "[Parte](/Part/it "Part/it")" (Part) viene utilizzata per raggruppare diversi "[Corpi](/Body/it "Body/it")" per formare un [assieme](/Assembly/it "Assembly/it"). Una "Parte" possiede una raccolta di "Forme", ma non ha una propria "Forma".

Retrieved from "<http://wiki.freecad.org/index.php?title=Shape/it&oldid=1478127>"