---
title: PartDesign Cavité
---
|  |
| --- |
| PartDesign Cavité |
| Emplacement du menu |
| PartDesign → Créer une fonction soustractive → Cavité |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") |
|  |

## Description

L'outil **Cavité** découpe des solides en extrudant une esquisse ou une face d'un solide le long d'une trajectoire droite.

![](/images/PartDesign_Pocket_example.svg)

*Le profil d'esquisse (A) a été appliqué sur la face de dessus du solide (B) ; le résultat après l'opération de cavité est montré à droite.*

## Utilisation

1. Sélectionnez une seule esquisse ou une ou plusieurs faces du corps.
2. Appuyez sur le bouton ![](/images/PartDesign_Pocket.svg) Cavité.
3. Définissez les paramètres de la cavité, voir les [Options](#Options) ci-dessous.
4. Appuyez sur le bouton OK.

## Options

Lors de la création d'une cavité, ou après avoir double-cliqué sur une cavité existante dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), le panneau de tâches **Paramètres de la cavité** s'affiche. Il propose les paramètres suivants :

![](/images/PartDesign_Pocket_Taskpanel.png)

### Type

Type offre cinq façons différentes de spécifier la dimension de la cavité :

#### Dimension

Entrez une valeur numérique pour la **dimension** de la cavité. Avec l'option **Symétrique au plan**, la cavité s'étendra à la moitié de la dimension donnée de chaque côté de l'esquisse ou de la face.

#### À travers tout

La cavité s'étendra jusqu'à la dernière face du support qu'elle rencontre dans sa direction. Avec l'option **Symétrique au plan**, la cavité traversera tous les matériaux dans les deux directions. Remarquez que pour des raisons techniques, *A travers tout* est en fait une cavité de 10 mètres de profondeur. Si vous avez besoin de cavités plus profondes, utilisez le type **Dimension**.

#### Au plus proche

La cavité sera prolongée jusqu'à la première face du support qu'elle rencontrera dans sa direction.

#### Jusqu'à une face

La cavité sera prolongée jusqu'à une face. Appuyez sur le bouton Sélectionner une face et sélectionnez une face ou un [plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr") du corps.

#### Deux dimensions

Cela permet d'entrer une deuxième dimension pour laquelle la cavité doit s'étendre dans la direction opposée. Les directions peuvent être inversées en cochant l'option **Inverser**.

#### Jusqu'à une forme

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : la cavité s'étend jusqu'à la forme sélectionnée. Vous pouvez appuyer sur le bouton Sélectionner une forme et sélectionnez une forme. Laissez la case Sélectionner toutes les faces activée ou désactivez-la, appuyez sur le bouton Sélectionner des faces et sélectionnez les faces jusqu'où la cavité doit aller.

### Décalage par rapport à la surface

Décalage par rapport à la face à laquelle la cavité se terminera. Cette option n'est disponible que si **Type** est soit **À travers tout**, **Au plus proche** ou **Jusqu'à une face**.

### Dimension

Définit la dimension de la cavité. Cette option n'est disponible que si **Type** est **Dimension** ou **Deux dimensions**. La dimension est mesurée suivant le vecteur de direction, ou suivant la normale de l'esquisse ou de la face. Les valeurs négatives ne sont pas possibles. Utilisez plutôt l'option **Inverser**.

### 2ème dimension

Définit la dimension de la cavité dans le sens opposé. Cette option n'est disponible que si **Type** est sur **Deux dimensions**.

### Symétrique au plan

Cochez cette option pour étendre la cavité de la moitié de la dimension donnée de chaque côté de l'esquisse ou de la face, si **Type** est sur **Dimension**, ou **À travers tout** si c'est **Type**.

### Inverser

Inverse la direction de la cavité.

### Direction

#### Direction/arête

Vous pouvez sélectionner la direction de la protrusion :

* **Normale à l'esquisse** ou **Normale à la face** : l'esquisse ou la face est extrudée dans la direction de sa normale. Si vous avez sélectionné plusieurs esquisses ou faces à extruder, c'est la normale de la première qui sera utilisée.
* **Sélectionner une référence...** : l'esquisse ou la face est extrudée dans la direction d'une ligne droite ou d'une [ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") sélectionnée du corps.
* **Direction personnalisée** : l'esquisse ou la face est extrudée dans la direction du vecteur spécifié.

#### Afficher la direction

Si cette case est cochée, la direction de la cavité sera affichée. Si la cavité utilise **Direction personnalisée**, elle peut être modifiée.

#### Dimension suivant la normale à l'esquisse

Si cette case est cochée, la dimension de la cavité est mesurée suivant la normale de l'esquisse ou de la face, sinon suivant la direction personnalisée.

### Angle de dépouille

Génère la cavité dans le sens de l'extrusion selon l'angle donné. Un angle positif signifie que le bord extérieur de la cavité s'élargit. Remarquez que les structures internes reçoivent l'angle d'inclinaison opposé. Ceci est fait pour faciliter la conception de moules et de pièces moulées. Cette option n'est disponible que si le **Type** est sur **Dimension** ou **Deux dimensions**.

### 2ème angle de dépouille

Génère la cavité dans le sens opposé de l'extrusion selon l'angle donné. Voir **Angle de dépouille**. Cette option n'est disponible que si **Type** est sur **Deux dimensions**.

## Propriétés

### Données

Part Design

* Données**Refine** (`Bool`) : vrai ou faux. Nettoie les arêtes résiduelles laissées après l'opération. Cette propriété est initialement définie en fonction des paramètres de l'utilisateur (dans **Préférences → PartDesign → Général → Paramètres des modèles**).

Pocket

* Données**Type** (`Enumeration`) : définit la manière dont la cavité sera extrudée, voir [Options](#Options).
* Données**Length** (`Length`) : définit la dimension de la cavité, voir [Options](#Options).
* Données**Length2** (`Length`) : deuxième dimension de la cavité si Données**Type** est **TwoLengths**, voir [Options](#Options).
* Données**Use Custom Vector** (`Bool`) : si cette option est cochée, la direction de la cavité ne sera pas le vecteur normal de l'esquisse mais le vecteur donné, voir [Options](#Options).
* Données**Direction** (`Vector`) : vecteur de la direction de la cavité si Données**Use Custom Vector** est utilisé.
* Données**Reference Axis** (`LinkSub`)
* Données**Along Sketch Normal** (`Bool`) : si *True*, la dimension de la cavité est mesurée suivant la normale de l'esquisse. Sinon, et si Données**Use Custom Vector** est utilisé, elle est mesurée suivant la direction personnalisée.
* Données**Up To Face** (`LinkSub`) : une face vers laquelle la cavité sera extrudée, voir [Options](#Options).
* Données**Offset** (`Length`)
* Données**Angle** (`Angle`)
* Données**Angle2** (`Angle`)

Sketch Based

* Données**Profile** (`LinkSub`)
* Données**Midplane** (`Bool`)
* Données**Reversed** (`Bool`)
* Données**Allow Multi Face** (`Bool`)

## Limitations

* Utilisez le type **Dimension** ou **À travers tout** dans la mesure du possible, car les autres types peuvent parfois causer problème lorsque la cavité est utilisée pour une répétition linéaire ou circulaire.
* La fonction cavité partage les mêmes [limitations](/PartDesign_Pad/fr#Limitations "PartDesign Pad/fr") que la fonction protrusion.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pocket/fr&oldid=1565231>"