---
title: PartDesign Révolution
---
|  |
| --- |
| PartDesign Révolution |
| Emplacement du menu |
| PartDesign → Créer une fonction additive → Révolution |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [PartDesign Rainure](/PartDesign_Groove/fr "PartDesign Groove/fr") |
|  |

## Description

L'outil **Révolution** produit un solide par révolution d'une esquisse ou d'un objet 2D sélectionné autour d'un axe donné.

![](/images/PartDesign_Revolution_example.svg)

Ci-dessus : l'esquisse (A) est révolutionnée de 270 degrés dans le sens antihoraire autour de l'axe (B) ; le solide résultant (C) est montré à droite.

## Utilisation

1. Sélectionnez une seule esquisse ou une ou plusieurs faces du corps.
2. Appuyez sur le bouton ![](/images/PartDesign_Revolution.svg) Révolution.
3. Définissez les paramètres de la révolution,voir [Options](#Options) ci-dessous.
4. Appuyez sur le bouton OK.

## Options

Lors de la création d'une révolution, ou après avoir double-cliqué sur une révolution existante dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), le panneau de tâches **Paramètres de la révolution** s'affiche. Il propose les paramètres suivants :

![](/images/Partdesign_revolution_parameters.png)

### Type

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Type offre cinq façons différentes de spécifier l'angle de la révolution :

#### Dimension

Entrez une valeur numérique pour l'**angle** de la révolution. Avec l'option **Symétrique au plan**, la révolution s'étendra à la moitié de l'angle donné de chaque côté de l'esquisse ou de la face.

#### À la dernière

La révolution sera prolongée jusqu'à la dernière face du support qu'il rencontre dans sa direction. S'il n'y a pas de support, un message d'erreur apparaît.

#### Au plus proche

La révolution sera prolongée jusqu'à la première face rencontrée dans sa direction. S'il n'y a aucun support rencontré, un message d'erreur apparaîtra.

#### Jusqu'à une face

La révolution sera prolongée jusqu'à une face. Appuyez sur le bouton Face et sélectionnez une face ou un [plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr") du corps.

#### Deux dimensions

Cela permet d'entrer un deuxième angle dans lequel la révolution doit s'étendre dans la direction opposée. Les directions peuvent être inversées en cochant l'option **Inverser**.

### Axe

Spécifie l'axe de la révolution :

* **Axe vertical de l'esquisse** : sélectionne l'axe vertical de l'esquisse.
* **Axe d'esquisse horizontal** : sélectionne l'axe horizontal de l'esquisse.
* **Ligne de construction** : sélectionne une ligne de construction de l'esquisse utilisée par la révolution. La liste déroulante contient une entrée pour chaque ligne de construction. La première ligne de construction sera étiquetée *Ligne de construction 1*.
* **Axe (X/Y/Z) de base** : sélectionne l'axe X, Y ou Z de l'origine du corps.
* **Sélectionner une référence...** : permet de sélectionner une ligne droite ou une [ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") du corps.

Remarquez que lors d'un changement d'axe, l'option **Inverser** peut être (dé)cochée automatiquement.

### Angle

Définit l'angle de la révolution. Cette option n'est disponible que si **Type** est sur **Dimension** ou **Deux dimensions**. Les angles supérieurs à 360° ne sont pas possibles. Les valeurs négatives ne le sont pas non plus, utilisez plutôt l'option **Inverser**.

### Symétrique au plan

Cochez cette option pour étendre la révolution de la moitié de l'angle donné de chaque côté de l'esquisse ou de la face. Cette option n'est disponible que si **Type** est sur **Dimension**.

### Inverser

Inverse la direction de la révolution.

### 2ème angle

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Définit l'angle de la révolution dans la direction opposée. Cette option n'est disponible que si **Type** est sur **Deux dimensions** et que **Angle** est inférieur à 360°.

## Propriétés

### Données

Part Design

* Données**Refine** (`Bool`)

Revolution

* Données**Type** (`Enumeration`)
* Données**Base** (`Vector`): (lecture seulement)
* Données**Axis** (`Vector`): (lecture seulement)
* Données**Angle** (`Angle`)
* Données**Up To Face** (`LinkSub`)
* Données**Angle2** (`Angle`)
* Données**Reference Axis** (`LinkSub`)

Sketch Based

* Données**Profile** (`LinkSub`)
* Données**Midplane** (`Bool`)
* Données**Reversed** (`Bool`)
* Données**Allow Multi Face** (`Bool`)

## Remarques

* Une ![](/images/PartDesign_ShapeBinder.svg) [PartDesign Forme liée](/PartDesign_ShapeBinder/fr "PartDesign ShapeBinder/fr") ne peut pas être utilisée pour le profil.
* Lors de l'utilisation d'une ![](/images/PartDesign_SubShapeBinder.svg) [PartDesign Sous forme liée](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr") pour le profil, la sélection de la liaison dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") échouera, mais la face de la liaison devra être sélectionnée dans la [vue 3D](/3D_view/fr "3D view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Revolution/fr&oldid=1557291>"