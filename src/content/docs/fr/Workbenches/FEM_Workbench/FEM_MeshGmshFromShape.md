---
title: FEM Mailler avec Gmsh
---
|  |
| --- |
| FEM Mailler avec Gmsh |
| Emplacement du menu |
| Maillage → Mailler avec le mailleur Gmsh |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| Tous |

## Description

Pour une analyse par éléments finis, la géométrie doit être discrétisée en un [maillage de l'atelier FEM](/FEM_Mesh/fr "FEM Mesh/fr"). Cette commande utilise le logiciel [Gmsh](https://fr.wikipedia.org/wiki/Gmsh) (qui doit être installé sur le système) pour générer le maillage.

En fonction de votre système d'exploitation et de votre paquetage d'installation, Gmsh peut être fourni avec FreeCAD ou pas. Pour plus d'informations voir [FEM Installation des composants requis](/FEM_Install/fr#Générateur_de_maillage_FEM "FEM Install/fr").

## Utilisation

1. Sélectionnez la forme que vous souhaitez analyser. Pour un volume FEM, il doit s'agir d'un solide ou d'un composé de solides (compsolid). Un composé de solides est nécessaire si votre pièce est composée de plusieurs matériaux. (Un composé de solides peut être créé avec la commande [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr")).
2. Activez l'outil par l'un des moyens suivants :
   * Appuyez sur le bouton ![](/images/FEM_MeshGmshFromShape.svg) Mailler avec le mailleur Gmsh.
   * Sélectionnez l'option **Maillage → ![](/images/FEM_MeshGmshFromShape.svg) Mailler avec le mailleur Gmsh** du menu.
3. Vous pouvez également modifier la taille minimale et maximale des éléments (le paramètre par défaut crée souvent des maillages trop grossiers). Vous pouvez également modifier la dimension de l'élément (mais le paramètre par défaut *À partir d'une forme* est normalement suffisant) et l'ordre.
4. Vous pouvez également modifier la taille minimale et maximale des éléments (le paramètre par défaut crée souvent des maillages trop grossiers). Vous pouvez également modifier la dimension de l'élément (mais le paramètre par défaut *From shape* est normalement suffisant) et l'ordre.
5. Cliquez sur le bouton Appliquer et attendez que le maillage soit terminée. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : vous pouvez appuyer sur le bouton Annuler pour annuler le maillage.
6. Cliquez sur le bouton OK pour fermer la tâche. Vous devriez maintenant voir un nouvel objet FEMMeshGmsh dans votre conteneur d'analyse actif. Vous pouvez également cliquer sur le bouton Annuler pour annuler les modifications ou la création de l'objet de maillage.

Une fois que le maillage a été créé, vous pouvez modifier ses propriétés à l'aide de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Après avoir modifié une propriété, vous devez rouvrir la fenêtre de dialogue Gmsh et cliquer sur le bouton Appliquer. (Vous pouvez laisser la fenêtre de dialogue ouverte pendant la modification des propriétés).

Le bouton Version du mailleur Gmsh vous permet de vérifier les détails du binaire Gmsh utilisé.

## Propriétés

* Données**Algorithm2D** : algorithme permettant de créer des maillages 2D. Les différents algorithmes sont [expliqué ici](https://gmsh.info/doc/texinfo/gmsh.html#Choosing-the-right-unstructured-algorithm). Pour Delaunay, voir [triangulation de Delaunay](https://fr.wikipedia.org/wiki/Triangulation_de_Delaunay).
* Données**Algorithm3D** : algorithme de création de maillages 3D. Les différents algorithmes sont [expliqué ici](https://gmsh.info/doc/texinfo/gmsh.html#Choosing-the-right-unstructured-algorithm).
* Données**Characteristic Length Max** : taille maximale des éléments du maillage. Si elle est définie sur *0.0*, la taille sera définie automatiquement. Cette propriété peut également être modifiée dans le dialogue Gmsh dans le champ **Max element size**.
* Données**Characteristic Length Min** : taille minimale des éléments du maillage. Si elle est définie à *0.0*, la taille sera définie automatiquement. Cette propriété peut également être modifiée dans le dialogue Gmsh dans le champ **Min element size**.
* Données**Coherence Mesh** :
  + true (par défaut) ; les noeuds de maillage dupliqués seront supprimés.
  + false
* Données**Element Dimension** : dimension des éléments du maillage. Cette propriété peut également être modifiée dans le dialogue Gmsh dans le champ **Mesh element dimension**.
  + From Shape (par défaut) ; la dimension sera déterminée à partir de la dimension de l'objet maillé.
  + 1D
  + 2D
  + 3D
* Données**Element Order** : [ordre des éléments de maillage](https://www.comsol.de/support/knowledgebase/1270). Cette propriété peut également être modifiée dans le dialogue Gmsh dans le champ **Mesh order**. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
  + 1er
  + 2ème (par défaut)  
    **Remarque:** si vous utilisez le solveur [Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr"), vous pouvez obtenir cette erreur : *ERROR:: GetEdgeBasis: Can't handle but linear elements, sorry.*. Cela signifie que l'équation du solveur ne peut pas gérer les mailles de 2ème ordre. Utilisez alors des mailles de 1er ordre, ou consultez la page Wiki de FreeCAD sur l'équation du solveur pour connaître les options possibles pour gérer les mailles de 2ème ordre.
* Données**Geometrical Tolerance** : tolérance géométrique pour que le maillage corresponde aux bords de l'objet. La valeur par défaut *0.0* signifie que la valeur par défaut de 1e-8 de Gmsh est utilisée.
* Données**Groups Of Nodes** : tous les noeuds et pas seulement les éléments seront sauvegardés pour chaque groupe physique de maillage. Les groupes physiques sont des collections d'entités de maillage (points, courbes, surfaces et volumes). Ils sont identifiés par leur dimension et par un tag. Par exemple, un maillage de la même région de l'objet est étiqueté de la même façon en interne. Ainsi, toutes les surfaces de cette région formeront un seul groupe physique.
* Données**High Order Optimize** : si et comment les maillages de Données**Element Order** = *2nd* sont optimisés. L'optimisation se fait par une déformation des bordures des éléments.  
  [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr"). Gmsh supporte différents algorithmes d'optimisation. **Elastic** est un algorithme dans lequel les éléments du maillage sont traités comme une collection de solides viscoélastiques déformables. Les maillages de 1er ordre ne peuvent pas être optimisés car les bords des éléments sont linéaires et ne peuvent pas être déformés.
* Données**Mesh Size From Curvature** [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : nombre d'éléments de maillage par 

  2
  π
  {\displaystyle 2\pi }
  ![{\displaystyle 2\pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/73efd1f6493490b058097060a572606d2c550a06) fois le rayon de la courbure. Pour obtenir un maillage plus fin au niveau des petits coins ou des trous, cette valeur peut être augmentée pour de meilleurs résultats

![](/images/FEM_Gmsh-MeshSizeFromCurvature.png)

Effet de *Mesh Size From Curvature*; à gauche : réglé sur 12, à droite : désactivé

.

* Données**Optimize Netgen** : si le maillage sera optimisé à l'aide du générateur de maillage 3D [Netgen](https://github.com/NGSolve/netgen) pour améliorer la qualité des éléments tétraédriques. Remarque : comme Netgen ne peut créer que des éléments tétraédriques, cette option est ignorée pour les maillages dont la Données**Element Dimension** n'est pas *3D*.
* Données**Recombination Algorithm** [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : algorithme utilisé pour Données**Recombine 3D All** et également pour Données**Recombine All**. Pour plus d'informations, voir la section [Recombinaison d'éléments](#Recombinaison_d.27.C3.A9l.C3.A9ments) et pour les détails techniques, voir la [documentation Gmsh](https://www.gmsh.info/doc/texinfo/gmsh.html#t11).
* Données**Recombine 3D All** [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : applique un algorithme de recombinaison 3D à tous les volumes. Les tétraèdres seront recombinés en prismes, hexaèdres ou pyramides si possible.
* Données**Recombine All** : applique un algorithme de recombinaison à toutes les surfaces. Les triangles seront recombinés en quadrangles si possible.
* Données**Optimize Std** : optimise le maillage pour améliorer la qualité des éléments tétraédriques.
* Données**Second Order Linear** : option si les noeuds de second ordre (si Données**Element Order** réglé sur *2nd*) et/ou les points de raffinement du maillage sont créés par interpolation linéaire.
  + true ; l'interpolation linéaire est utilisée.
  + false (par défaut) ; l'interpolation curviligne est utilisée.
* Données**Subdivision Algorithm** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : permet la création d'éléments quadrilatéraux et hexaédriques par subdivision.
  + None : n'utilise aucun algorithme de subdivision
  + All Quadrangles : crée des éléments quadrilatéraux par subdivision
  + All Hexahedra : crée des éléments hexaédriques par subdivision
  + Barycentric : crée des éléments triangulaires par subdivision barycentrique

## Remarques

### Jacobiens non positifs

Lorsque vous obtenez une erreur de maillage à cause de Jacobiens non positifs, vous pouvez essayer les stratégies suivantes :

* Définissez Données**Second Order Linear** à *true* mais gardez Données**Element Order** à *2nd*.
* Définissez Données**Element Order** à *1st*.
* Utilisez une taille d'élément plus petite en réduisant Données**Characteristic Length Max**.
* Si le solveur ccxtools est utilisé et que le bouton d'exécution est utilisé (pas le panneau des tâches), les nœuds des éléments jacobiens non positifs seront verts.

### Croissance du maillage

Au niveau des bords et des petites entités géométriques, le maillage doit être plus petit que dans les zones sans bords. Ainsi, la taille des éléments du maillage augmente en s'éloignant des bords. La stratégie de croissance de Gmsh consiste à croître entre des bords de tailles différentes. La croissance échoue donc lorsqu'une zone a des bords de même taille, comme par exemple ce tube :

![](/images/FEM_Gmsh-MeshGrowth-failing.png)

Échec de la croissance du maillage car la zone cylindrique est entourée par les mêmes bords.

Pour permettre une croissance raisonnable du maillage, vous devez dans ce cas ajouter un bord à la zone. Dans l'exemple, il s'agit d'un cercle au milieu du cylindre. Le cercle est ajouté dans le cadre d'un composé [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr") (pour former un CompSolid), voir l'exemple de [the project file](https://forum.freecadweb.org/download/file.php?id=146255).

![](/images/FEM_Gmsh-MeshGrowth-success.png)

Croissance notable du maillage grâce à l'arête supplémentaire au milieu de la région cylindrique

### Recombinaison d'éléments

Les éléments peuvent être recombinés de deux manières, à la surface des objets de sorte que les triangles seront recombinés en quadrangles si possible et dans le volume des objets de sorte que les tétraèdres seront recombinés en prismes, hexaèdres ou pyramides si possible. En réfléchissant à la géométrie, il devient clair que le résultat de la recombinaison dépend fortement de la géométrie du corps et que la recombinaison d'un corps 3D uniquement à la surface conduira le plus souvent à des résultats étranges.

Pour illustrer cela, regardez l'image ci-dessous. Un corps cuboïde est maillé en utilisant les paramètres standards (tétraèdres, maillage de 2ème ordre). C'est la sous-image en haut à gauche. L'image en haut à droite montre le résultat, quand en plus les éléments sont recombinés seulement à la surface du corps. Le résultat est mauvais car les éléments de surface modifiés ne correspondent pas aux éléments de volume inchangés. Ainsi, Données**Recombine All** seul n'a généralement de sens que pour les maillages 2D.   
Si nous utilisons maintenant aussi Données**Recombine 3D All**, le résultat est meilleur, voir la sous-image en bas à gauche. Cependant, le résultat ne montre pas une grande différence par rapport au maillage sans recombinaisons. Puisque notre corps est un cuboïde, il est donc judicieux d'utiliser un algorithme de recombinaison qui essaie de créer des cuboïdes également. Et ce résultat est montré dans la sous-image en bas à droite.

L'algorithme de recombinaison *Simple* laissera quelques triangles dans le maillage au cas où la recombinaison conduirait à des quads de mauvaise forme. Dans ce cas, utilisez un algorithme *full-quad* de recombinaison qui effectuera automatiquement un maillage plus grossier suivi de la recombinaison, du lissage et de la subdivision. Voir le [sujet sur le forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=20351#p520392)

![](/images/FEM_Gmsh-Recombination.png)

Effet de la recombinaison des éléments du maillage.   
En haut à gauche : maillage standard.  
 En haut à droite : recombinaison uniquement en surface avec l'algorithme **Simple**.  
 En bas à gauche : recombinaison en surface et dans le volume avec l'algorithme **Simple**.  
 En bas à droite : recombinaison en surface et dans le volume avec l'algorithme **Simple full-quad**.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshGmshFromShape/fr&oldid=1531409>"