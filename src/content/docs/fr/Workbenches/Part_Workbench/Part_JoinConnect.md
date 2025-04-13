---
title: Part Connecter
---
|  |
| --- |
| Part Connecter des objets |
| Emplacement du menu |
| Part → Joindre → Connecter des objets |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.16 |
| Voir aussi |
| [Part Intégrer](/Part_JoinEmbed/fr "Part JoinEmbed/fr"), [Part Découper](/Part_JoinCutout/fr "Part JoinCutout/fr"), [Part Opération booléenne](/Part_Boolean/fr "Part Boolean/fr"), [Part Évider](/Part_Thickness/fr "Part Thickness/fr") |
|  |

## Description

L'outil ![](/images/Part_JoinConnect.svg) **Part Connecter** connecte deux objets creux (par exemple deux tuyaux). Il peut aussi joindre des coques et des polylignes.

![](/images/JoinFeatures_Connect.png)

## Utilisation

1. Sélectionnez les objets à connecter. L'ordre de sélection n'est pas important, puisque l'action de l'outil est symétrique. Il suffit de sélectionner une sous-forme de chaque objet (par exemple, les faces). Vous pouvez également sélectionner un composé contenant toutes les formes à connecter, par exemple un [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le ![](/images/Part_JoinConnect.svg) Connecter des objets.
   * Sélectionnez l'option **Part → Joindre → ![](/images/Part_JoinConnect.svg) Connecter des objets** du menu.
3. Un objet paramétrique Connect est créé. Les objets originaux sont masqués et le résultat de la connexion est affiché dans la [vue 3D](/3D_view/fr "3D view/fr").

## Propriétés

Connect

* Données**Objects** : liste les objets a connecter. En général deux objets suffisent, un compound d'objets fonctionne (Depuis V0.17, cette propriété n'est pas affichée dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") mais seulement disponible via [Python](#Script)).
* Données**Refine** : [affiner](/Part_RefineShape/fr "Part RefineShape/fr") ou non la forme finale. Par défaut cette valeur est déterminée par la case *Affiner les modèles automatiquement après une opération booléenne* dans les [PartDesign Préférences](/PartDesign_Preferences/fr "PartDesign Preferences/fr").
* Données**Tolerance** : valeur de "flou". Il s'agit d'une tolérance supplémentaire à appliquer lors de la recherche d'intersections, en plus des tolérances stockées dans les formes d'entrée.

## Exemple

1. Créer une conduite en appliquant un [Part évidement](/Part_Thickness/fr "Part Thickness/fr") sur un [Part cylindre](/Part_Cylinder/fr "Part Cylinder/fr") :   
   ![](/images/JoinFeatures_Example_step1.png)
2. Créer un autre tuyau plus petit, et le [Part placer](/Placement/fr "Placement/fr") pour qu'il perce le premier tuyau :   
   ![](/images/JoinFeatures_Example_step2.png)
3. Sélectionner le premier tuyau puis le second, et cliquer sur l'option 'Connecter des objets' du menu déroulant Joindre des objets à paroi.  
   ![](/images/JoinFeatures_Example_step3_Connect.png)
4. Utiliser divers outils de plan de coupe ([Std Couper selon des plans](/Std_ToggleClipPlane/fr "Std ToggleClipPlane/fr"), [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr"), [Arch Couper selon un plan](/Arch_CutPlane/fr "Arch CutPlane/fr")) pour voir l'intérieur. Dans l'image ci-dessous, un Arch Plan de coupe est utilisé.  
   ![](/images/JoinFeatures_Example_step4_Connect.png)

## Algorithme

Les algorithmes derrière les outils Joindre sont très simples, et les comprendre est important pour utiliser les outils correctement. L'algorithme de Connecter, en particulier, est plus complexe que les autres, mais il suffit généralement d'y penser comme d'une variante symétrique de l'[algorithme intégré](/Part_JoinEmbed/fr#Algorithme "Part JoinEmbed/fr").

1. Chaque objet est coupé à l'intersection avec l'autre (voir [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr")).

2. Parmi les morceaux d'un objet, seul le plus grand est conservé ; tout le reste est jeté.

3. Les pièces d'intersection qui touchent au moins deux objets sont ajoutées au résultat. Ensuite, les pièces sont jointes pour former le résultat de Connecter.

### Remarques

* Si, à l'étape 1, chaque objet reste en un seul morceau, le résultat de Connecter sera équivalent à la [Part Union](/Part_Fuse/fr "Part Fuse/fr") des objets.
* Actuellement, tous les composés fournis sont explosés avant la connexion. Cela signifie que les composés à intersection automatique, qui ne sont pas valides pour toutes les autres opérations booléennes, sont valables pour Connecter. (Cela pourra être changé à l'avenir.)
* La "plus grande" pièce est celle qui a la plus grande masse. C'est-à-dire que pour les solides, les volumes sont comparés; pour les coques et les faces, les zones sont comparées, etc.
* Depuis FreeCAD v0.17.8053, et si la version OCC est la version 6.9.0 et ultérieure, Connecter est presque aussi rapide que toutes les autres opérations booléennes. Pour les versions plus anciennes, Connecter est environ 5 fois plus lent qu'une opération booléenne normale et ne fonctionne que sur les solides.

## Script

L'outil Joindre peut être utilisé dans des [macros](/Macros/fr "Macros/fr") à partir de la [console Python](/Python_console/fr "Python console/fr") en utilisant la fonction suivante :

```
BOPTools.JoinFeatures.makeConnect(name)

```

* Crée une fonction Connect vide. La propriété 'Objets' doit être attribuée explicitement par la suite.
* Renvoie l'objet nouvellement créé.

Connecter peut également être appliqué à des formes simples, sans avoir besoin d'un objet document, via :

```
Part.BOPTools.JoinAPI.connect(list_of_shapes, tolerance = 0.0)

```

Cela peut être utile pour créer des fonctionnalités de script personnalisées Python.

Exemple :

```
import Part
j = Part.BOPTools.JoinFeatures.makeConnect(name= 'Connect')
j.Objects = FreeCADGui.Selection.getSelection()

```

L'outil lui-même est implémenté en Python, voir /Mod/Part/BOPTools/JoinFeatures.py ([Github lien](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/JoinFeatures.py)) là où FreeCAD est installé.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinConnect/fr&oldid=1514571>"