---
title: EM Segment FH
---
|  |
| --- |
| EM Segment FH |
| Emplacement du menu |
| EM → FHSegment |
| Ateliers |
| [EM](/EM_Workbench/fr "EM Workbench/fr") |
| Raccourci par défaut |
| E S |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [EM Noeud FH](/EM_FHNode/fr "EM FHNode/fr"), [EM Chemin FH](/EM_FHPath/fr "EM FHPath/fr") |
|  |

## Description

L'outil Segment FH insère un objet FastHenry de type Segment.

![](/images/EM_FHSegment_Example.png)

Segment FH FastHenry

## Utilisation

L'objet Segment FH peut être basé sur la position d'un objet ![](/images/Draft_Line.svg) [Draft Ligne](/Draft_Line/fr "Draft Line/fr") ou sur deux ![](/images/EM_FHNode.svg) [Noeuds FH](/EM_FHNode/fr "EM FHNode/fr") qui seront les points d'extrémité du Segment FH, ou bien, vous pouvez sélectionner l'emplacement 3D des deux points d'extrémité, où deux Noeuds FH supplémentaires seront créés.

1. Appuyez sur le bouton ![](/images/EM_FHSegment.svg) EM FHSegment ou appuyez sur les touches E puis S.
2. Cliquez sur un premier point de la vue 3D ou rentrez une coordonnée et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
3. Cliquez sur un deuxième point de la vue 3D ou rentrez une coordonnée et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.

Vous pouvez également le faire :

1. Sélectionnez deux objets ![](/images/EM_FHNode.svg) [Noeuds FH](/EM_FHNode/fr "EM FHNode/fr")
2. Appuyez sur le bouton ![](/images/EM_FHSegment.svg) EM FHSegment ou appuyez sur la touche E puis S.

Ou :

1. Sélectionnez un ou plusieurs objet(s) [Draft Ligne](/Draft_Line/fr "Draft Line/fr")
2. Appuyez sur le bouton ![](/images/EM_FHSegment.svg) EM FHSegment ou appuyez sur les touches E puis S. Autant d'objets Segment FH seront créés que les objets Draft Ligne.

### Remarques :

* Si vous créez un objet Segment FH basé sur un objet Draft Ligne, vous ne pouvez PAS déplacer librement le FHSegment ou les points finaux FHNodes. Le FHSegment sera toujours contraint à l'objet de base. Pour modifier la position du FHSegment ou de son point de fin, appliquez la modification à l'objet Draft Line sous-jacent (l'objet de base est masqué par défaut, vous pouvez l'afficher à nouveau en sélectionnant l'objet dans l'arborescence et en appuyant sur Espace.

* Si l'objet Segment FH n'a pas d'objet de base `baseobj`, sa position est contrôlée par les FHNodes de début et de fin. Vous ne pouvez pas modifier la position d'un segment FHS en modifiant son placement.

## Options

* Pour entrer les coordonnées manuellement, il suffit d'entrer les nombres, et frapper sur la touche Entrée entre chaque affectation de la composante X, Y et Z. Vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées pour insérer le point.
* Appuyez sur Échap ou le Fermer pour annuler et quitter l'opération.

## Propriétés

* Données**Base** : L'objet de base sur lequel ce composant est construit (une [Draft Ligne](/Draft_Line/fr "Draft Line/fr"))
* Données**NodeStart** : le début de [Noeud FH](/EM_FHNode/fr "EM FHNode/fr")
* Données**NodeEnd** : la fin de [Noeud FH](/EM_FHNode/fr "EM FHNode/fr")
* Données**Width** : la largeur du segment FH (paramètre de segment 'w' dans FastHenry)
* Données**Height** : la hauteur du segment FH (paramètre du segment 'h' dans FastHenry)
* Données**Sigma** : la conductivité segment FH (paramètre de segment 'sigma' dans FastHenry)
* Données**ww** : la direction de la section transversale du segment FH le long de la largeur (paramètre de segment 'wx', 'wy', 'wz' dans FastHenry)
* Données**nhinc** : le nombre de filaments dans le sens de la hauteur (paramètre de segment 'nhinc' dans FastHenry)
* Données**nwinc** : le nombre de filaments dans le sens de la largeur (paramètre de segment 'nwinc' dans FastHenry)
* Données**rh** : le rapport des filaments adjacents dans le sens de la hauteur (paramètre de segment 'rh' dans FastHenry)
* Données**rw** : le rapport des filaments adjacents dans le sens de la largeur (paramètre de segment 'rw' dans FastHenry)

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil FHSegment peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
segment = makeFHSegment(baseobj=None, nodeStart=None, nodeEnd=None, width=None, height=None, name='FHSegment')

```

* Crée un objet `FHSegment`.
* `baseobj` est l'objet Draft Ligne qui peut être utilisé comme base pour le FHSegment. Si `nodeStart` et `nodeEnd` sont spécifiés, ils ont priorité sur `baseobj`, et `baseobj` est ignoré.
* `nodeStart` est l'objet noeud de départ du segment [FHNode](/EM_FHNode/fr "EM FHNode/fr").
* `nodeEnd` est l'objet noeud de fin de segment [FHNode](/EM_FHNode/fr "EM FHNode/fr").
* `width` est la largeur du segment. La valeur par défaut est `EMFHSEGMENT_DEF_SEGWIDTH`.
* `height` est la hauteur du segment. La valeur par défaut est `EMFHSEGMENT_DEF_SEGHEIGHT`.
* `name` est le nom de l'objet.

Exemple :

```
import FreeCAD, EM

fhnode1 = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode2 = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhsegment = EM.makeFHSegment(nodeStart=fhnode1, nodeEnd=fhnode2)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHSegment/fr&oldid=1474968>"