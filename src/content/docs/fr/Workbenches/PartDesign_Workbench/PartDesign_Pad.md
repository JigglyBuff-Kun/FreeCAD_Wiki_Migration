---
title: PartDesign Protrusion
---
|  |
| --- |
| PartDesign Protrusion |
| Emplacement du menu |
| PartDesign → Créer une fonction additive → Protrusion |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") |
|  |

## Description

L'outil **Protrusion** extrude une esquisse ou une face d'un solide le long d'une trajectoire droite.

![](/images/PartDesign_Pad_example.svg)

*L'esquisse (A) est montrée à gauche ; le solide résultant de l'opération de protrusion (B) est à droite.*

## Utilisation

1. Sélectionnez une seule esquisse ou une ou plusieurs faces du corps.
2. Cliquez sur le bouton ![](/images/PartDesign_Pad.svg) Protrusion.
3. Définiz les paramètres de protrusion, voir [Options](#Options) ci-dessous.
4. Appuyez sur le bouton OK.

## Options

Lors de la création d'une protrusion, ou après avoir double-cliqué sur une protrusion existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), le panneau de tâches **Paramètres de protrusion** s'affiche. Il propose les paramètres suivants :

![](/images/PartDesign_Pad_Taskpanel.png)

### Type

Type offre cinq façons différentes de spécifier la dimension de la protrusion :

#### Dimension

Entrez une valeur numérique pour la **Dimmension** de la protrusion. Avec l'option **Symétrique au plan**, la protrusion s'étend sur la moitié de la dimension donnée de part et d'autre l'esquisse ou de la face.

#### À la dernière

La protrusion sera prolongée jusqu'à la dernière face du support qu'elle rencontre dans sa direction. S'il n'y a pas de support, un message d'erreur apparaît.

#### Au plus proche

La protrusion sera prolongée jusqu'à la première face rencontrée dans sa direction. S'il n'y a aucun support rencontré, un message d'erreur apparaîtra.

#### Jusqu'à une face

La protrusion sera prolongée jusqu'à une face. Appuyez sur le bouton Sélectionner une face et sélectionnez une face ou un [plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr") du corps.

#### Deux dimensions

Cela permet d'entrer une deuxième dimension pour laquelle la protrusion doit s'étendre dans la direction opposée. Les directions peuvent être inversées en cochant l'option **Inverser**.

#### Jusqu'à une forme

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : la protrusion s'étend jusqu'à la forme sélectionnée. Vous pouvez appuyer sur le bouton Sélectionner une forme et sélectionnez une forme. Laissez la case Sélectionner toutes les faces activée ou désactivez-la, appuyez sur le bouton Sélectionner des faces et sélectionnez les faces jusqu'où la protrusion doit aller.

### Décalage par rapport à la face

Décalage par rapport à la face à laquelle la protrusion se terminera. Cette option n'est disponible que si **Type** est soit **À la dernière**, **Au plus proche** ou **Jusqu'à une face**.

### Dimension

Définit la dimension de la protrusion. Cette option n'est disponible que si **Type** est **Dimension** ou **Deux dimensions**. La dimension est mesurée suivant le vecteur de la direction, ou suivant la normale de l'esquisse ou de la face. Les valeurs négatives ne sont pas possibles. Utilisez plutôt l'option **Inverser**.

### 2ème dimension

Définit la dimension de la protrusion dans le sens opposé. Cette option n'est disponible que si **Type** est sur **Deux dimensions**.

### Symétrique au plan

Cochez cette option pour extruder la moitié de la dimension donnée de chaque côté de l'esquisse ou de la face. Cette option n'est disponible que si **Type** est sur **Dimension**.

### Inverser

Inverse la direction de la protrusion.

### Direction

#### Direction/arête

Vous pouvez sélectionner la direction de la protrusion :

* **Normale à l'esquisse** ou **Normale à la face** : l'esquisse ou la face est extrudée dans la direction de sa normale. Si vous avez sélectionné plusieurs esquisses ou faces à extruder, c'est la normale de la première qui sera utilisée.
* **Sélectionner une référence...** : l'esquisse ou la face est extrudée dans la direction d'une ligne droite ou d'une [ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") sélectionnée du corps.
* **Direction personnalisée** : l'esquisse ou la face est extrudée dans la direction du vecteur spécifié.

#### Afficher la direction

Si cette case est cochée, la direction du pad sera affichée. Si la protrusion utilise une **direction personnalisée**, elle peut être modifiée.

#### Dimension suivant la normale à l'esquisse

Si cette case est cochée, la dimension de la protrusion est mesurée suivant la normale de l'esquisse ou de la face, sinon suivant la direction personnalisée.

### Angle de dépouille

Génère la protrusion dans le sens de l'extrusion selon l'angle donné. Un angle positif signifie que le bord extérieur de la protrusion s'élargit. Remarquez que les structures internes reçoivent l'angle d'inclinaison opposé. Ceci est fait pour faciliter la conception de moules et de pièces moulées. Cette option n'est disponible que si le **Type** est sur **Dimension** ou **Deux dimensions**.

### 2ème angle de dépouille

Génère la protrusion dans le sens opposé de l'extrusion selon l'angle donné. Voir **Angle de dépouille**. Cette option n'est disponible que si **Type** est sur **Deux dimensions**.

## Propriétés

### Données

Pad

* Données**Type** (`Enumeration`) : définit la manière dont la protrusion sera extrudée, voir [Options](#Options).
* Données**Length** (`Length`) : définit la dimension de la protrusion, voir [Options](#Options).
* Données**Length2** (`Length`) : deuxième dimension de la protrusion si le Données**Type** est **TwoLengths**, voir [Options](#Options).
* Données**Use Custom Vector** (`Bool`) : si cette case est cochée, la direction de la protrusion ne sera pas le vecteur normal de l'esquisse mais le vecteur donné, voir [Options](#Options).
* Données**Direction** (`Vector`) : vecteur de la direction de la protrusion si Données**Use Custom Vector** est utilisé.
* Données**Reference Axis** (`LinkSub`)
* Données**Along Sketch Normal** (`Bool`) : si *true*, la dimension de la protrusion est mesurée suivant la normale de l'esquisse. Sinon, et si Données**Use Custom Vector** est utilisé, elle est mesurée suivant la direction personnalisée.
* Données**Up To Face** (`LinkSub`) : une face jusqu'à laquelle la protrusion sera extrudée, voir [Options](#Options).
* Données**Offset** (`Length`) : décale par rapport à la face dans laquelle la protrusion se terminera. Ceci n'est pris en compte que si l'option Données**Type** **UpToLast**, **UpToFirst** ou **UpToFace** est utilisée.
* Données**Taper Angle** (`Angle`)
* Données**Taper Angle2** (`Angle`)

Part Design

* Données**Refine** (`Bool`) : vrai ou faux. Nettoie les arêtes résiduelles laissées après l'opération. Cette propriété est initialement définie en fonction des paramètres de l'utilisateur (dans **Préférences → PartDesign → Général → Paramètres des modèles**).

Sketch Based

* Données**Profile** (`LinkSub`)
* Données**Midplane** (`Bool`)
* Données**Reversed** (`Bool`)
* Données**Allow Multi Face** (`Bool`)

## Limitations

* Comme toutes les fonctions de PartDesign, la Protrusion crée un solide. L'esquisse doit donc inclure un profil fermé, sinon elle échouera avec l'erreur *Failed to validate broken face*.
* Les esquisses contenant des [B-splines](/B-Splines/fr "B-Splines/fr") ne peuvent souvent pas être dépouillées correctement. C'est une limitation du noyau [OpenCASCADE](/OpenCASCADE/fr "OpenCASCADE/fr") utilisé par FreeCAD.
* Pour des angles plus grands, l'action de dépouiller échouera si la face finale a moins d'arêtes que la face/esquisse de départ.
* L'algorithme utilisé pour **Au plus proche** et **À la dernière** est le suivant :
  + Créer une ligne passant par le centre de gravité de l'esquisse.
  + Trouver toutes les faces du support coupées par cette ligne
  + Choisir la face dont le point d'intersection est le plus proche ou le plus éloigné de l'esquisse.

:   Cela signifie que la face trouvée ne sera pas toujours celle que vous attendiez. Si vous rencontrez ce problème, utilisez plutôt le type **Jusqu'à la face**, et choisissez la face que vous voulez.
:   Pour le cas très spécial de l'extrusion vers une surface concave, où l'esquisse est plus grande que cette surface, l'extrusion échouera. Il s'agit d'un bogue non résolu.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pad/fr&oldid=1565204>"