---
title: Mesh
---
## Introduzione

In FreeCAD la parola "Mesh" viene normalmente utilizzata per riferirsi a un [Mesh MeshObject](/Mesh_MeshObject/it "Mesh MeshObject/it") (classe `Mesh::MeshObject`), un tipo di oggetto che definisce dati 3D ma non è un solido "[Shape](/Shape/it "Shape/it")".

Le mesh sono oggetti molto semplici, contenenti solo vertici (punti), bordi e facce triangolari. In generale, sono facili da creare, modificare, suddividere ed estendere e possono essere passati da un'applicazione all'altra senza alcuna perdita di dettagli. Inoltre, poiché le mesh contengono dati molto semplici, le applicazioni 3D come i software di animazione e i videogiochi possono gestirne quantità molto grandi (milioni di triangoli) senza utilizzare molte risorse di calcolo.

Tuttavia, nel campo dell'ingegneria le mesh presentano una grande limitazione: sono costituite solo da superfici e non hanno informazioni sulla "massa", quindi non si comportano come "solidi". Ciò significa che le operazioni basate sui solidi, come [addizione o sottrazione booleana](/Part_Boolean/it "Part Boolean/it"), sono difficili da eseguire sulle mesh. Inoltre, poiché sono definite da singoli punti, sono difficili da descrivere in modo parametrico.

Vedere [Mesh MeshObject](/Mesh_MeshObject/it "Mesh MeshObject/it") per ulteriori informazioni su questo tipo di oggetto e vedere [Mesh poligonale](https://en.wikipedia.org/wiki/Polygon_mesh) per informazioni generiche sui sistemi informatici.

![](/images/Shape_and_mesh.svg)

Sinistra: [forma](/Shape/it "Shape/it") parametrica definita dalle proprietà. A destra: mesh, definita da vertici e superfici triangolari.

## Utilizzo

Le mesh vengono normalmente create mediante funzioni interne dell'[Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it") o importando file in formato mesh, come STL e OBJ.

In sostanza, ci si aspetta che ogni oggetto derivato da una [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it") (classe `Mesh::Feature`) contenga e manipoli una Mesh.

Poiché FreeCAD è progettato principalmente per essere un modellatore di solidi, è più adatto a gestire [Forme](/Shape/it "Shape/it") solide. Può importare e visualizzare mesh nella [vista 3D](/3D_view/it "3D view/it") e l'[Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it") offre alcuni comandi per manipolarle direttamente. Ma in molti casi la Mesh deve prima essere convertita in una [Forma](/Shape/it "Shape/it") (vedere [Part ShapeFromMesh](/Part_ShapeFromMesh/it "Part ShapeFromMesh/it")), oppure la geometria deve essere ricreata utilizzando tecniche di modellazione solida dall'[Ambiente Part](/Part_Workbench/it "Part Workbench/it") o dall'[Ambiente PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").

## Mesh Elementi Finiti

In FreeCAD la parola "Mesh" può anche riferirsi a un oggetto specifico che verrà utilizzato nell'analisi degli elementi finiti (FEA).

Quando un oggetto con una [Forma](/Shape/it "Shape/it") solida viene utilizzato nell'[Ambiente FEM](/FEM_Workbench/it "FEM Workbench/it") verrà discretizzato in una mesh triangolare. In questo caso, l'oggetto risultante è una classe [FEM FemMeshObject](/FEM_Mesh/it "FEM Mesh/it") (`Fem::FemMeshObject`) e non è derivata da una [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it") ( `Mesh::Feature`).

Per ulteriori informazioni vedere [Ambiente FEM](/FEM_Workbench/it "FEM Workbench/it")  e [FEM Mesh](/FEM_Mesh/it "FEM Mesh/it").

## Ulteriori informazioni

* [Polygonal (mesh) geometry](https://forum.freecadweb.org/viewtopic.php?f=8&t=47493)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh/it&oldid=1334374>"