---
title: EM Équivalence FH
---
|  |
| --- |
| EM Équivalence FH |
| Emplacement du menu |
| EM → FHEquiv |
| Ateliers |
| [EM](/EM_Workbench/fr "EM Workbench/fr") |
| Raccourci par défaut |
| E E |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [EM Noeud FH](/EM_FHNode/fr "EM FHNode/fr"), [EM Segment FH](/EM_FHSegment/fr "EM FHSegment/fr"), [EM Chemin Fh](/EM_FHPath/fr "EM FHPath/fr"), [EM Plan FH](/EM_FHPlane/fr "EM FHPlane/fr"), [EM Port FH](/EM_FHPort/fr "EM FHPort/fr") |
|  |

## Description

L'outil Équivalence FH court-circuite deux objets Noeud FH.

![](/images/EM_FHEquiv_Example.png)

Équivalence FH FastHenry

## Utilisation

L'objet Équivalence FH est basé sur les deux Noeuds FH existants qu'il court-circuitera.

1. Sélectionnez deux ![](/images/EM_FHNode.svg) [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") objets
2. Appuyez sur le bouton ![](/images/EM_FHEquiv.svg) EM FHEquiv ou appuyez sur les touches E puis E.

### Remarques

* Si vous devez court-circuiter plusieurs nœuds, créez simplement plusieurs nœuds FHEquiv. Vous n'avez pas besoin d'un maillage complet de nœuds FHEquiv, car bien sûr, si nœud1 est court-circuité avec nœud2, et nœud2 est court-circuité avec nœud3, le nœud1 sera en court-circuit avec nœud3.

## Propriétés

* Données**Node1** : le premier [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") à court-circuiter
* Données**Node2** : le deuxième [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") à court-circuiter

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Équivalence FH peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
equiv = makeFHEquiv(node1=None,node2=None,name='FHEquiv')

```

* Crée un objet `FHEquiv`.
* `node1` est le premier objet [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") à court-circuiter.
* `node2` est le deuxième objet [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") à court-circuiter.
  + `name` est le nom de l'objet

Exemple :

```
import FreeCAD, EM

fhnode1 = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode2 = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhequiv = EM.makeFHEquiv(fhnode1, fhnode2)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHEquiv/fr&oldid=1335344>"