---
title: EM Port FH
---
|  |
| --- |
| EM Port FH |
| Emplacement du menu |
| EM → FHPort |
| Ateliers |
| [EM](/EM_Workbench/fr "EM Workbench/fr") |
| Raccourci par défaut |
| E P |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [EM Noeud FH](/EM_FHNode/fr "EM FHNode/fr"), [EM Segment FH](/EM_FHSegment/fr "EM FHSegment/fr"), [EM Chemin Fh](/EM_FHPath/fr "EM FHPath/fr"), [EM Plan FH](/EM_FHPlane/fr "EM FHPlane/fr"), [EM Equivalence FH](/EM_FHEquiv/fr "EM FHEquiv/fr") |
|  |

## Description

L'outil Port FH crée un port FastHenry entre deux objets Noeud FH.

![](/images/EM_FHPort_Example.png)

Port FH FastHenry

## Utilisation

L'objet Port FH est basé sur les deux Noeuds FH existants entre lesquels il créera un port FastHenry.

1. Sélectionnez deux ![](/images/EM_FHNode.svg) [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") objets
2. Appuyez sur le bouton ![](/images/EM_FHPort.svg) EM FHPort ou appuyez sur les touches E puis P.

### Remarques

* Le premier nœud que vous sélectionnez est le nœud positif du port et la flèche qui est la forme de l'objet Port FH, pointera dans cette direction.

## Propriétés

* Données**NodePos** : le [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") positif du port FastHenry
* Données**NodeNeg** : le [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") négatif du port FastHenry

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Port FH peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
port = makeFHPort(nodePos=None,nodeNeg=None,name='FHPort')

```

* Crée un objet `FHPort`.
* `nodePos` est l'objet [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") positif du port FastHenry.
* `nodeNeg` est l'objet [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") négatif objet du port FastHenry.
* `name` est le nom de l'objet.

Exemple :

```
import FreeCAD, EM

fhnode_p = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode_n = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhport = EM.makeFHPort(fhnode_p, fhnode_n)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHPort/fr&oldid=1335356>"