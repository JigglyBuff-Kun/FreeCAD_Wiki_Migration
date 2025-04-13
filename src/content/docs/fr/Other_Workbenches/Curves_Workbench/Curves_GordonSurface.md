---
title: Curves Surface de Gordon
---
|  |
| --- |
| Curves Surface de Gordon |
| Emplacement du menu |
| Surfaces → Gordon surface |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

![](/images/Curves_GordonSurface.svg) Surface de Gordon crée une surface qui enveloppe un réseau de courbes. Cet outil fait partie des [ateliers externes](/External_workbenches/fr "External workbenches/fr") appelé [Curves](/Curves_Workbench/fr "Curves Workbench/fr").

![](/images/GordonSurf-1.png)

## Utilisation

1. Une surface de Gordon nécessite un réseau de lignes ou de courbes qui créent un réseau de support pour la surface.
   * La surface sera "tendue" entre et au-dessus de ces lignes.
2. Dans l'exemple ci-dessus, les lignes bleues (ou nervures) représentent la forme de la surface en différents points le long de la surface.
   * On peut les considérer comme des sections transversales le long de la surface, ou comme des supports sur lesquels la surface va « s'étendre ».
3. Les lignes jaunes représentent l'extension et la forme de la surface entre les sections transversales ("nervures") définies par les lignes bleues.
4. Ces lignes (bleues et jaunes) peuvent être créées dans des esquisses.
   * Les esquisses contenant les nervures bleues ont généralement un décalage de placement.
     + Chaque "nervure" est dans une esquisse séparée.
   * Les esquisses contenant les lignes d'extension/forme (jaunes) référenceront généralement la géométrie externe à partir des esquisses de "nervure" pour un positionnement précis.
5. Celles-ci doivent être créées avant l'étape suivante.
6. Basculez vers ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench/fr "Curves Workbench/fr") (installez à partir du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") est nécessaire s'il n'est pas déjà installé)
7. Sélectionnez maintenant toutes les lignes qui définiront la surface.
8. L'ordre de sélection définit l'ordre de raccord ou d'extension.
9. Utilisez la sélection multiple pour sélectionner toutes les lignes définissant la surface. (Faites un clic gauche tout en maintenant la touche Ctrl enfoncée.)
10. Sélectionnez d'abord les nervures, dans l'ordre. (Dans l'exemple ci-dessus, sélectionnez les lignes bleues de gauche à droite ou de droite à gauche.)
11. Continuez à maintenir la touche Ctrl enfoncée et sélectionnez les lignes d'extension. (Lignes jaunes dans l'exemple ci-dessus.)
12. Pour lancer la commande, effectuez l'une des opérations suivantes :
    * Appuyez sur le bouton ![](/images/Curves_GordonSurface.svg)
    * Utilisez la commande **Surfaces → Gordon surface**

## Propriétés

* Données**Placement** : peut être utilisé pour ajuster le placement de la surface Gordon résultante. Voir : [Placement](/Placement/fr "Placement/fr")
  + Remarque : les propriétés Placement n'ajuste pas le placement des courbes/lignes utilisées pour créer la surface, uniquement la surface.
* Données**Label** : étiquette (nom) spécifiée par l'utilisateur pour la surface, par défaut : Gordon.
* Données**Output** : définit le type de sortie, par défaut : Surface, options : Surface, Wireframe.
* Données**Gordon>Max Ctrl Pts** : par défaut : 80
* Données**Gordon>Sources** : lignes sélectionnées par l'utilisateur qui sont utilisées pour créer la surface de Gordon.
* Données**Gordon>Tol3D** : tolérance 3D, par défaut : 0.01.
* Données**Wireframe>Samples U** : nombre d'échantillons dans la direction U, par défaut : 16.
  + Cette valeur est utilisée pour déterminer la densité du maillage lorsque la propriété Output est définie sur Wireframe.
* Données**Wireframe>Samples V** : nombre d'échantillons dans la direction V, par défaut : 16.
  + Cette valeur est utilisée pour déterminer la densité du maillage lorsque la propriété Output est définie sur Wireframe.
  + Surface de Gordon en mode fil de fer, U=16, V=16

![](/images/GordonSurf-wireframe.png)

## Remarques

* Les courbes de chaque groupe (nervures et rails) doivent toucher toutes les courbes de l'autre groupe.
* En d'autres termes, elles doivent former une grille ou un motif de réseau comme indiqué ici :

![](/images/Grid.png)

* En général, la normale à la surface sur la surface de Gordon résultante sera déterminée par la direction des nervures.

Dans cet exemple, la surface à gauche, les rails ont été dessinés de +Y à -Y et la normale de surface résultante est en +Z
  
Sur la droite, les nervures sont dessinées de -Y à +Y, ce qui donne la normale à la surface orientée en -Z.

![](/images/Normals_shown.png)

* [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr") peut être utilisé pour créer un solide à partir de la surface.

* [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") peut également créer un solide à partir de la surface. Faire glisser la surface dans un corps crée une [fonction de base](/PartDesign_Body/fr#Fonction_de_base "PartDesign Body/fr") qui peut ensuite être protusée.

## Limitations

A faire

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_GordonSurface/fr&oldid=1564742>"