---
title: Arch Treillis
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Treillis |
| Emplacement du menu |
| 3D/BIM → Treillis |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Treillis** crée un objet [Treillis](https://fr.wikipedia.org/wiki/Treillis_(assemblage)) à partir d'un objet linéaire sélectionné (positionnez une [Draft Ligne](/Draft_Line/fr "Draft Line/fr") ou [Sketcher Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr")) ou à partir de zéro, si aucun objet n'est sélectionné lors du lancement de la commande.

![](/images/Arch_Truss_example.png)

## Utilisation

### Création à partir d'un objet sélectionné

1. Utilisez l'atelier de votre choix pour créer une seule ligne
2. Sélectionnez cette ligne
3. Appuyez sur le bouton ![](/images/Arch_Truss.svg) Treillis
4. Ajustez les propriétés du treillis à votre convenance

### Création à partir de zéro

1. Assurez-vous que rien n'est sélectionné
2. Appuyez sur le bouton ![](/images/Arch_Truss.svg) Treillis
3. Cliquez dans la vue 3D pour définir un premier point ou entrez manuellement les coordonnées X, Y et Z
4. Cliquez dans la vue 3D pour définir un deuxième point ou entrez manuellement les coordonnées X, Y et Z
5. Ajustez les propriétés du treillis à votre convenance

## Propriétés

### Données

* Données**TrussAngle** : angle du treillis
* Données**SlantType** : type d'inclinaison du treillis
* Données**Normal** : direction normale du treillis
* Données**HeightStart** : hauteur du treillis à la position de départ
* Données**HeightEnd** : hauteur du treillis à la position finale
* Données**StrutStartOffset** : décalage de démarrage facultatif pour la jambe de force supérieure
* Données**StrutEndOffset** : décalage de fin facultatif pour la jambe supérieure
* Données**StrutHeight** : hauteur des principaux éléments supérieur et inférieur du treillis
* Données**StrutWidth** : largeur des principaux éléments supérieur et inférieur du treillis
* Données**RodType** : type de l'élément central du treillis
* Données**RodDirection** : direction des membrures
* Données**RodSize** : diamètre ou côté des membrures
* Données**RodSections** : nombre de sections des membrures
* Données**RodEnd** : si le treillis a une membrure à son extrémité ou non
* Données**RodMode** : comment dessiner les membrures

## Script

L'outil Treillis peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Truss = makeFence([baseobj])

```

Exemple :

```
import FreeCAD
import Draft
import Arch

p1 = FreeCAD.Vector(0,0,0)
p2 = FreeCAD.Vector(2000,0,0)
baseline = Draft.makeLine(p1,p2)
truss = Arch.makeTruss(baseline)
truss.HeightStart = 200
truss.HeightEnd = 400
# adjust other needed properties

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/fr&oldid=1438635>"