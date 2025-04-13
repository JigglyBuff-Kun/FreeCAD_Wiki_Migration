---
title: Geometria solida costruttiva
---
## Introduzione

[Geometria solida costruttiva](https://en.wikipedia.org/wiki/Constructive_solid_geometry) (**CSG**) è un paradigma di modellazione che viene utilizzato in molti sistemi CAD tradizionali. Essenzialmente consiste nell'usare oggetti solidi primitivi e fare operazioni booleane con essi, come fusione, sottrazione e intersezione, al fine di creare una forma finale.

In FreeCAD, questo metodo è per lo più utilizzato con l'ambiente ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it"), che ha la capacità di creare oggetti primitivi come ![](/images/Part_Box.svg) [parallelepipedi](/Part_Box/it "Part Box/it"), ![](/images/Part_Cylinder.svg) [cilindri](/Part_Cylinder/it "Part Cylinder/it"), e ![](/images/Part_Sphere.svg) [sfere](/Part_Sphere/it "Part Sphere/it") e di fonderli insieme, oppure di usarli per tagliare altri oggetti con strumenti come ![](/images/Part_Cut.svg) [Taglio](/Part_Cut/it "Part Cut/it").

![](/images/Part_Constructive_Solid_Geometry_workflow.svg)

Flusso di lavoro della geometria solida costruttiva (CSG); sulle primitive solide può essere fatto qualsiasi numero di operazioni per creare altri oggetti solidi e quindi fonderli o tagliarli fino a produrre la forma finale.

In alternativa ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") utilizza un approccio più moderno rispetto al semplice CSG; questo metodo è chiamato [Editazione delle funzioni](/Feature_editing/it "Feature editing/it"), che significa creare un solido di base e quindi aggiungere trasformazioni parametriche sequenziali per ottenere un corpo finale.

*Note:* Anche un [Corpo](/PartDesign_Body/it "PartDesign Body/it") creato con l'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") può essere usato in un'operazione booleana con altri oggetti.

## Esempio

![](/images/Part_CGS_workflow_example.svg)

Esempio di flusso di lavoro di geometria solida costruttiva (CSG): due parti primitive vengono fuse (union); viene calcolata l'intersezione di altre due parti primitive (common); infine si ricava la differenza (cut) tra le due forme precedenti.

## Tutorial

La pagina [Tutorial](/Tutorials/it "Tutorials/it") fornisce alcuni esempi che usano il metodo CSG per la creazione di solidi con l'ambiente ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it").

* [Modellazione tradizionale, il modo CSG](/Manual:Traditional_modeling,_the_CSG_way/it "Manual:Traditional modeling, the CSG way/it")
* [Tutorial Sfera traforata](/Whiffle_Ball_tutorial/it "Whiffle Ball tutorial/it")
* [Guida introduttiva alla modellazione 3D](/Basic_modeling_tutorial/it "Basic modeling tutorial/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Constructive_solid_geometry/it&oldid=1536690>"