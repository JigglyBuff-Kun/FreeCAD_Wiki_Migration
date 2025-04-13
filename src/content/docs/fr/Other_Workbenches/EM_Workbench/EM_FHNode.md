---
title: EM Noeud FH
---
|  |
| --- |
| EM Noeud FH |
| Emplacement du menu |
| EM → FHNode |
| Ateliers |
| [EM](/EM_Workbench/fr "EM Workbench/fr") |
| Raccourci par défaut |
| E N |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [EM Segment FH](/EM_FHSegment/fr "EM FHSegment/fr"), [EM Chemin FH](/EM_FHPath/fr "EM FHPath/fr"), [EM Plan FH](/EM_FHPlane/fr "EM FHPlane/fr"), [EM Bascule noeud trou FH](/EM_FHPlaneAddRemoveNodeHole/fr "EM FHPlaneAddRemoveNodeHole/fr"), [EM Equivalence FH](/EM_FHEquiv/fr "EM FHEquiv/fr"), [EM Port FH](/EM_FHPort/fr "EM FHPort/fr") |
|  |

## Description

L'outil Noeud FH insère un objet FastHenry de type Nœud.

![](/images/EM_FHNode_Example.png)

Noeud FH FastHenry

## Utilisation

L'objet Noeud FH peut être basé sur la position d'un objet [Draft Point](/Draft_Point/fr "Draft Point/fr") ou vous pouvez sélectionner l'emplacement 3D du Noeud FH.

1. Appuyez sur la touche ![](/images/EM_FHNode.svg) EM FHNode ou appuyez sur la touche E puis N.
2. Cliquez sur un point de la vue 3D ou rentrez les coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.

Alternativement, vous pouvez également :

1. Sélectionnez un ou plusieurs objet(s) [Draft Point](/Draft_Point/fr "Draft Point/fr")
2. Appuyez sur le bouton ![](/images/EM_FHNode.svg) EM FHNode ou appuyez sur les touches E puis N. Autant de FHNodes seront créés que les objets Draft Points, aux mêmes coordonnées que les Draft Points.

## Options

* Pour saisir les coordonnées manuellement, entrez simplement les chiffres, puis appuyez sur Entrée entre chaque composante X, Y et Z. Vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées pour insérer le point.
* Cochez la case pour basculer le mode *continu*. Si le mode continu est activé, l'outil FHNode redémarrera après avoir placé un nœud, vous permettant d'en placer un autre sans appuyer à nouveau sur le bouton de l'outil.
* Appuyez sur Échap ou sur le bouton Fermer pour abandonner la commande en cours.

## Propriétés

* Données**X** : La coordonnée X du noeud.
* Données**Y** : La coordonnée Y du noeud.
* Données**Z** : La coordonnée Z du noeud.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil FHNode peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
node = makeFHNode(baseobj=None, X=0.0, Y=0.0, Z=0.0, color=None, size=None, name='FHNode')

```

* Crée un objet `FHNode`.
* `baseobj` est l'objet Draft Point dont la position peut être utilisée comme base pour le FHNode. Il a priorité sur `X`, `Y`, `Z`. Si aucun `baseobj` n'est donné, `X`, `Y`, `Z` sont utilisés comme coordonnées.
* `X` coordonnée x du nœud, dans le système de coordonnées absolu.
* `Y` coordonnée y du nœud, dans le système de coordonnées absolu.
* `Z` coordonnée z du nœud, dans le système de coordonnées absolu.
* `color` est la couleur du nœud, par exemple un tuple (1.0,0.0,0,0). La valeur par défaut est `EMFHNODE_DEF_NODECOLOR`.
* `size` est la taille du nœud. La valeur par défaut est `EMFHNODE_DEF_NODESIZE`.
* `name` est le nom de l'objet

Le placement du FHNode peut être modifié en modifiant sa propriété `Placement` ou en modifiant individuellement les propriétés `X`,`Y`,`Z`. La modification de `X`,`Y`,`Z` modifie la position du nœud dans le système de coordonnées relatif du `Placement`.

En outre, la classe \_FHNode expose ces méthodes. La classe \_FHNode est accessible via l'objet FHNode Proxy (par exemple fhnode.Proxy).

```
pos = getAbsCoord()

```

* Obtenez un `FreeCAD.Vector` contenant les coordonnées du nœud dans le système de référence absolu

```
pos = getRelCoord()

```

* Obtenez un `FreeCAD.Vector` contenant les coordonnées du nœud par rapport au placement FHNode

```
pos = setRelCoord(rel_coord, placement=None)

```

* Définit la position du nœud par rapport au placement
* `rel_coord` est un FreeCAD.Vector contenant les coordonnées du nœud par rapport au placement FHNode
* `placement` est un nouveau placement FHNode. Si `None`, l'emplacement n'est pas modifié

```
pos = setAbsCoord(abs_coord, placement=None)

```

* Définit la position absolue du nœud, en tenant compte du placement de l'objet et en cas de forçage d'un nouveau placement
* `abs_coord` est un FreeCAD.Vector contenant les coordonnées du nœud dans le système de référence absolu
* `placement` est un nouveau placement FHNode. Si `None`,l'emplacement n'est pas modifié

Exemple :

```
import FreeCAD, EM

fhnode = EM.makeFHNode(X=1.0,Y=2.0,Z=0.0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHNode/fr&oldid=1474975>"