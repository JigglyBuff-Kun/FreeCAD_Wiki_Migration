---
title: FEM Coupe transversale d'un élément 1D
---
|  |
| --- |
| FEM Coupe transversale d'un élément 1D |
| Emplacement du menu |
| Modèle → Géométrie de l'élement → Coupe transversale d'un élément 1D |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| C B |
| Introduit dans la version |
| - |
| Voir aussi |
| [Tutoriel FEM](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX, Mystran, Z88 |

## Description

**Coupe transversale d'un élément 1D** est utilisé pour définir les sections transversales d'éléments de type poutre. Pour l'instant, les types de sections transversales suivantes disponibles sections : rectangulaire, circulaire et tube.

Les sections transversales de poutres-caissons et elliptiques sont également disponibles. version 1.1 et suivantes

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ElementGeometry1D.svg) Coupe transversale d'un élément 1D.
   * Sélectionnez l'option **Modèle → Géométrie de l'élément → ![](/images/FEM_ElementGeometry1D.svg) Coupe transversale d'un élément 1D** du menu.
2. Choisissez le type de section transversale et spécifiez les dimensions nécessaires :
   * Rectangulaire : largeur et hauteur,
   * Circulaire : diamètre,
   * Tube : diamètre extérieur et épaisseur,
   * Elliptique : longueur de l'axe 1 et longueur de l'axe 2. version 1.1 et suivantes
   * Poutre-caisson : hauteur, largeur, épaisseurs T1 - T4. version 1.1 et suivantes
3. Vous pouvez appuyer sur le bouton Ajouter dans le panneau des tâches, puis cliquer sur l'arête à laquelle vous voulez donner une section transversale prescrite. Si la sélection de l'arête est libre, toutes les arêtes restantes (dont la section transversale n'est pas définie par d'autres objets Coupe transversale d'un élément 1D) seront automatiquement attribuées.

![](/images/FEM_Beam_sections.PNG)

Type de section de poutre, axes locaux utilisés par CalculiX et dimensions spécifiées dans l'atelier FEM de FreeCAD

## Propriétés

* Données**Section Type** : spécifie le type de section de la poutre (*Rectangulaire*, *Circulaire*, *Tube*, version 1.1 et suivantes : *Elliptique* et *Boîte*)
* Données**Box Height** : hauteur de la section de la poutre-caisson, utilisée si Données**Section Type** est *Box*. version 1.1 et suivantes
* Données**Box T1** : épaisseur T1 de la section de la poutre-caisson, utilisé si Données**Section Type** est *Box*. version 1.1 et suivantes
* Données**Box T2** : épaisseur T2 de la section de la poutre-caisson, utilisée si Données**Section Type** est *Box*. version 1.1 et suivantes
* Données**Box T3** : épaisseur T3 de la section de la poutre-caisson, utilisée si Données**Section Type** est *Box*. version 1.1 et suivantes
* Données**Box T4** : épaisseur T4 de la section de la poutre-caisson, utilisée si Données**Section Type** est *Box*. version 1.1 et suivantes
* Données**Box Width** : largeur de la section de la poutre-caisson, utilisée si Données**Section Type** est *Box*. version 1.1 et suivantes
* Données**Circ Diameter** : diamètre de la section circulaire, utilisé si Données**Section Type** est *Circular*
* Données**Axis 1 Length** : longueur de l'axe 1 de la section elliptique, utilisé si Données**Section Type** est *Elliptical*. version 1.1 et suivantes
* Données**Axis 2 Length** : longueur de l'axe 2 de la section elliptique, utilisée si Données**Section Type** est *Elliptical*. version 1.1 et suivantes
* Données**Pipe Diameter** : diamètre extérieur de la section de tube, utilisé si Données**Section Type** est *Pipe*
* Données**Pipe Thickness** : épaisseur de la section de tube, utilisée si Données**Section Type** est *Pipe*
* Données**Rect Height** : hauteur de la section rectangulaire, utilisée si Données**Section Type** est *Rectangular*
* Données**Rect Width** : hauteur de la section rectangulaire, utilisée si Données**Type de section** est *Rectangular*

## Limitations

* version 1.0 et précédentes : les autres types de sections transversales disponibles dans CalculiX (elliptique, boîte et générale) ne sont pas pris en charge pour l'instant. Il est possible de modifier le fichier d'entrée pour les utiliser.
* version 1.1 et suivantes: la section générale des poutres n'est pas prise en charge pour le moment. Il est possible de modifier le fichier d'entrée pour l'utiliser.

## Remarques

* Pour visualiser les résultats du solveur CalculiX sur le maillage étendu à la section transversale prescrite, la propriété `Beam Shell Result Output 3D` du [FEM Solveur CalculiX standard](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") doit être définie à `True`.
* Certaines sections nécessitent des types d'éléments spécifiques :
  + section circulaire : éléments de 2ème ordre
  + section de tube : éléments du 2ème ordre avec intégration réduite ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'intégration réduite est activée par défaut pour les éléments de type poutre et peut être commutée en utilisant la propriété *Beam Reduced Integration* du [solveur CalculiX](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr")).
  + section elliptique : éléments du 2ème ordre. version 1.1 et suivantes
  + section poutre-caisson : éléments du 2ème ordre avec intégration réduite (comme expliqué ci-dessus). version 1.1 et suivantes
* Cette fonction utilise le [jeu de paramètres \*BEAM SECTION de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html). La direction de l'axe local 1 est automatiquement déterminée par l'atelier FEM de FreeCAD et inscrite comme vecteur de direction dans la deuxième ligne des données de ce mot-clé.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry1D/fr&oldid=1530803>"