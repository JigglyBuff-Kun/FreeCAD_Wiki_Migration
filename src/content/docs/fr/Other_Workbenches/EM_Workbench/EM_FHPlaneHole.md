---
title: EM Trou FH
---

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EM Trou FH                                                                                                                                                                              |
| Emplacement du menu                                                                                                                                                                     |
| EM → FHPlaneHole                                                                                                                                                                        |
| Ateliers                                                                                                                                                                                |
| [EM](/EM_Workbench/fr "EM Workbench/fr")                                                                                                                                                |
| Raccourci par défaut                                                                                                                                                                    |
| E H                                                                                                                                                                                     |
| Introduit dans la version                                                                                                                                                               |
| 0.17                                                                                                                                                                                    |
| Voir aussi                                                                                                                                                                              |
| [EM Plan FH](/EM_FHPlane/fr "EM FHPlane/fr"), [EM Noeud FH](/EM_FHNode/fr "EM FHNode/fr"), [EM Bascule noeud trou FH](/EM_FHPlaneAddRemoveNodeHole/fr "EM FHPlaneAddRemoveNodeHole/fr") |
|                                                                                                                                                                                         |

## Description

L'outil Trou FH insère un objet de type trou de plan qui représente un trou de plan conducteur uniforme de FastHenry.

![](/images/EM_point_FHPlaneHole_Example.png)

Trou FH de type point FastHenry

![](/images/EM_rect_FHPlaneHole_Example.png)

Trou FH de type rectangle FastHenry

![](/images/EM_circle_FHPlaneHole_Example.png)

Trou FH de type cercle FastHenry

## Utilisation

L'objet Trou FH peut être basé sur la position d'un objet [Draft Point](/Draft_Point/fr "Draft Point/fr") ou vous pouvez sélectionner l'emplacement 3D du Trou de plan FH.

1. Appuyez sur la touche ![](/images/EM_FHPlaneHole.svg) EM FHPlaneHole ou appuyez sur la touche E puis H.
2. Cliquez sur un point de la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez les coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.

Vous pouvez également le faire :

1. Sélectionnez un ou plusieurs [Draft Point](/Draft_Point/fr "Draft Point/fr") objet(s)
2. Appuyez sur le bouton ![](/images/EM_FHPlaneHole.svg) [/fr|EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") ou appuyez sur les touches E puis H. Autant de Trou FH seront créés que les objets Draft Point, aux mêmes coordonnées que les Draft Points.

### Remarques

- ![](/images/EM_FHPlaneHole.svg) Les objets FHPlaneHole n'ont aucune signification s'ils ne font pas partie d'un ![](/images/EM_FHPlane.svg) [Plan FH](/EM_FHPlane/fr "EM FHPlane/fr"). Pour adopter un Trou FH dans un Plan FH, utilisez la commande ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [EM Bascule noeud trou FH](/EM_FHPlaneAddRemoveNodeHole/fr "EM FHPlaneAddRemoveNodeHole/fr") ou sélectionnez le Trou FH lors de la création de [Plan FH](/EM_FHPlane/fr "EM FHPlane/fr"). Pour supprimer un Trou FH d'un Plan FH, vous pouvez utiliser la commande [EM Bascule noeud trou FH](/EM_FHPlaneAddRemoveNodeHole/fr "EM FHPlaneAddRemoveNodeHole/fr").

* Les objets Trou FH (FHPlaneHole) représentent des trous plans FastHenry et suivent donc les mêmes règles que les trous plans conducteurs uniformes. En particulier, des trous sont créés en supprimant les nœuds plans internes du réseau de nœuds plans, avant de construire le maillage de segment. Vous pouvez activer la vue des nœuds internes de Plan FH en activant la propriété [Plan FH](/EM_FHPlane/fr "EM FHPlane/fr") Données**ShowNodes**. Il existe trois types de FHPlaneHoles et peuvent être sélectionnés en modifiant la propriété Données**Type** FHPlaneNode.

1. Trou de point : supprime le nœud interne de Plan FH unique plus près de la position du trou FH. Le point de Plan FH est représenté comme un seul sommet (petit point), pour aider à visualiser sa position ; voir l'image FastHenry Point du Plan FH ci-dessus.
2. Trou rectangle : supprime tous les nœuds internes de Plan FH qui se trouvent à l'intérieur ainsi qu'à proximité de la zone définie par le point de base du FHPlaneNode et les propriétés Données**Length** et Données**Width**. Cela signifie que non seulement les nœuds internes strictement dans la zone rectangulaire définie par le FHPlaneHole sont supprimés, mais aussi les nœuds internes à l'extérieur du rectangle, mais à l'intérieur de la moitié de la distance nœud interne - nœud. Le Rectangle du Plan FH est montré comme un rectangle 2D, pour aider à visualiser sa position et sa zone; voir l'image FastHenry Rect FHPlaneHole ci-dessus.
3. Trou de cercle : supprime tous les nœuds internes FHPlane qui se trouvent à l'intérieur ainsi qu'à proximité de la zone définie par le point de base du FHPlaneNode et la propriété Données**Radius**. Cela signifie que non seulement les nœuds internes strictement dans la zone circulaire définie par le FHPlaneHole sont supprimés, mais également les nœuds internes à l'extérieur du cercle, mais à moins de la moitié de la distance nœud interne - nœud. Le Circle FHPlaneHole est montré comme un cercle 2D, pour aider à visualiser sa position et sa zone; voir l'image FastHenry Circle FHPlaneHole ci-dessus. Notez que si la discrétisation FHPlane spécifiée par les propriétés FHPlane Données**seg1** et Données**seg1** est grossière, la forme du trou circulaire ne peut pas ressembler à un cercle. C'est normal, et c'est ainsi que FastHenry gère les trous circulaires, et non un défaut de l'établi électromagnétique pour FastHenry.

## Options

- Pour entrer les coordonnées manuellement, il suffit d'entrer les nombres, et frapper sur la touche Entrée entre chaque affectation de la composante X, Y et Z. Vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées pour insérer le point.
- Appuyez sur Échap ou le Fermer pour annuler et quitter l'opération.

## Propriétés

- Données**X** : coordonnée X du Trou FH
- Données**Y** : coordonnée Y du Trou FH
- Données**Z** : coordonnée Z du Trou FH
- Données**Length** : longueur du trou rectangulaire (le long de x à partir du point de base du Trou FH)
- Données**Width** : largeur du trou rectangulaire (le long de y à partir du point de base du Trou FH)
- Données**Radius** : rayon du trou circulaire
- Données**Type** : type de trou de plan FastHenry. Peut être « Point », « Rect » ou « Circle ».

## Script

_Voir aussi :_ [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Trou FH peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante:

```
hole = makeFHPlaneHole(baseobj=None, X=0.0, Y=0.0, Z=0.0, holetype=None, length=None, width=None, radius=None, name='FHPlaneHole')

```

- Crée un objet `FHPlaneHole`.
- `baseobj` est l'objet Draft Point dont la position peut être utilisée comme base pour le FHPlaneHole. Il a la priorité sur `X`, `Y`, `Z`. Si aucun `baseobj` n'est donné, `X`, `Y`, `Z` sont utilisés comme coordonnées.
- `X` coordonnée x du trou, dans le système de coordonnées absolu.
- `Y` coordonnée y du trou, dans le système de coordonnées absolu.
- `Z` coordonnée z du trou, dans le système de coordonnées absolu.
- `holetype` est le type de trou. Les valeurs autorisées sont : « Point », « Rect », « Circle »
- `length` est la longueur du trou (le long de la dimension x), dans le cas d'un trou rectangulaire « Rect ».
- `width` est la largeur du trou (le long de la dimension y), dans le cas d'un trou rectangulaire « Rect ».
- `radius` est le rayon du trou, dans le cas d'un trou circulaire « Circle ».
- `name` est le nom de l'objet

Le placement du Trou FH peut être modifié en modifiant sa propriété `Placement` ou en modifiant individuellement les propriétés `X`,`Y`,`Z`. La modification de `X`,`Y`,`Z` modifie la position du nœud dans le système de coordonnées relatif du `Placement`.

En outre, la classe \_FHPlaneHole expose ces méthodes. La classe \_FHPlaneHole est accessible via le Proxy de l'objet FHPlaneHole (par exemple fhhole.Proxy).

```
pos = getAbsCoord()

```

- Obtenez un `FreeCAD.Vector` contenant les coordonnées du trou dans le système de référence absolu

```
pos = getRelCoord()

```

- Obtenez un `FreeCAD.Vector` contenant les coordonnées du trou par rapport au placement du Trou FH

```
pos = setRelCoord(rel_coord, placement=None)

```

- Définit la position du trou par rapport au placement
- `rel_coord` est un FreeCAD.Vector contenant les coordonnées du trou par rapport au placement du Trou FH
- `placement` est un nouveau placement du Trou FH. Si `None`, l'emplacement n'est pas modifié

```
pos = setAbsCoord(abs_coord, placement=None)

```

- Définit la position absolue du trou, en tenant compte du placement de l'objet et en cas de forçage d'un nouveau placement
- `abs_coord` est un FreeCAD.Vector contenant les coordonnées des trous dans le système de référence absolu
- `placement` est un nouveau placement du Trou FH. Si `None`, l'emplacement n'est pas modifié

Exemple :

```
import FreeCAD, EM

fhhole = EM.makeFHPlaneHole(X=1.0,Y=1.0,Z=0.0,holetype="Rect",length=1.0,width=2.0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHPlaneHole/fr&oldid=1474970>"
