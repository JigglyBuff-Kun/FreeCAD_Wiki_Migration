---
title: PartDesign Engrenage à développante
---
|  |
| --- |
| PartDesign Engrenage à développante |
| Emplacement du menu |
| PartDesign → Créer un engrenage à développante... |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
|  |

## Description

Cet outil permet de créer un profil 2D d'une roue d'engrenage à développante ou un arbre cannelé. Ce profil 2D est paramétrable entièrement et peut être extrudé avec la fonction [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") ou [PartDesign Hélice additive](/PartDesign_AdditiveHelix/fr "PartDesign AdditiveHelix/fr").

Pour des informations plus détaillées, voir également [Engrenage](https://fr.wikipedia.org/wiki/Engrenage) et [fonction involute](https://fr.wikipedia.org/wiki/Involute)

![](/images/PartDesign_Involute_Gear_01.png)

## Utilisation

### Créer le profil

1. Activez le bon corps.
2. Allez dans le menu **PartDesign → ![](/images/PartDesign_InvoluteGear.svg) Créer un engrenage à développante...**.
3. Définissez les paramètres de l'engrenage à développante.
4. Cliquez sur OK.
5. S'il n'y avait pas de corps actif : faites glisser et déposez l'engrenage dans un corps pour appliquer d'autres fonctions comme une protrusion.

### Créer un engrenage droit

1. Sélectionnez le profil d'engrenage dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Appuyez sur le bouton ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").
3. Réglez la longueur de la protrusion Données**Length** à la largeur de la face souhaitée pour l'engrenage.
4. Cliquez sur OK.

### Créer un engrenage hélicoïdal

1. Sélectionnez le profil d'engrenage dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Appuyez sur le bouton ![](/images/PartDesign_AdditiveHelix.svg) [PartDesign Hélice additive](/PartDesign_AdditiveHelix/fr "PartDesign AdditiveHelix/fr").
3. Choisissez comme axe la normale du profil de l'engrenage, c'est-à-dire l'**Axe normal de l'esquisse**. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr"). (Dans les versions antérieures, l'axe **Base Z** pouvait être utilisé tant que le plan du profil n'avait pas été modifié).
4. Choisissez un mode **Hauteur-Tours**.
5. Réglez la hauteur Données**Height** à la largeur de la face souhaitée de l'engrenage.
6. Pour définir l'angle de l'hélice souhaité, il faut une [expression](/Expressions/fr "Expressions/fr") pour les tours Données**Turns**.
   1. Cliquez sur l'icône bleue ![](/images/Bound-expression.svg) à droite du champ de saisie.
   2. Saisissez la formule suivante : `Height * tan(25°) / (InvoluteGear.NumberOfTeeth * InvoluteGear.Modules * pi)`, où `25°` est un exemple d'angle d'hélice souhaité (également appelé valeur bêta) et `InvoluteGear` est le nom Données**Name** du profil.
   3. Cliquez sur OK pour fermer l'éditeur de formule.
   4. Cliquez sur OK pour fermer le panneau des tâches.

Conseil : pour faire de l'angle d'hélice un paramètre accessible, utilisez une *propriété dynamique* :

1. Sélectionnez le profil.
2. Dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), sélectionnez l'option **Ajouter une propriétés** dans le menu contextuel.
3. Dans la fenêtre de dialogue **Ajouter une propriété** :
   1. Choisissez `App::PropertyAngle` comme Type.
   2. Définissez `Gear` comme Groupe.
   3. Définissez `HelicalAngle` comme Nom (sans espace).
   4. Cliquez sur OK.
   5. Maintenant une nouvelle propriété Données**Helical Angle** (espace ajouté automatiquement), avec une valeur initiale de `0.0°`, devient disponible.
4. Attribuez l'angle hélicoïdal souhaité à la nouvelle propriété.
5. Dans la formule de la propriété Données**Turns** de l'Hélice additive, vous pouvez maintenant faire référence à `InvoluteGear.HelicalAngle` au lieu de la valeur codée en dur de `25°`, en supposant que `InvoluteGear` est la Données**Name** du profil.

### Créer un moyeu pour un arbre cannelé en développante

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

1. Activez le corps.
2. Créez un profil d'engrenage à développante interne avec le nombre requis de rainures et adaptez les valeurs de l'angle de pression, du coefficient de l'addendum, du dedendum et du congé. Voir également le tableau dans les [Remarques](#Remarques) ci-dessous pour les valeurs réalisables. Par exemple :
   * Données**External Gear** : faux
   * Données**Number Of Teeth** : 12
   * Données**Pressure Angle** : 37.5°
   * Données**Addendum Coefficient** : 0.45
   * Données**Dedendum Coefficient** : 0.7
   * Données**Root Fillet Coefficient** : 0.3
3. Sélectionnez le profil d'engrenage dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
4. Appuyez sur le bouton ![](/images/PartDesign_Pocket.svg) **Cavité**.
5. Définissez Données**Type** de la cavité à **A travers tout**.
6. Vérifiez l'option Données**Symmetric To Plane** de la cavité.
7. Cliquez sur OK.

## Propriétés

* Données**Addendum Coefficient** : hauteur de la dent depuis le cercle primitif jusqu'à sa pointe, normalisée par le module. La valeur par défaut est de 1,0 pour le système standard de pleine profondeur. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

* Données**Dedendum Coefficient** : hauteur de la dent depuis le cercle primitif jusqu'à sa racine, normalisée par le module. La valeur par défaut est 1,25 pour le système standard de pleine profondeur. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

* Données**External Gear** : vrai ou faux

* Données**High Precision** : vrai ou faux

* Données**Modules** : diamètre primitif divisé par le nombre de dents. (Remarque : le terme technique correct est "Module", mais ce nom est déjà utilisé par les modules internes de FreeCAD et ne peut donc pas être utilisé ici).

* Données**Number Of Teeth** : définit le nombre de dents désirées.

* Données**Pressure Angle** : angle aigu entre la ligne d'action et une normale à la ligne reliant les centres d'engrenage. La valeur par défaut est de 20 degrés. Voir [Involute gear](https://en.wikipedia.org/wiki/Involute_gear).

* Données**Profile Shift Coefficient** : distance par laquelle le profil de référence est décalé vers l'extérieur, normalisé par le module. La valeur par défaut est zéro. Le décalage du profil peut être positif ou négatif. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

* Données**Root Fillet Coefficient** : rayon du congé à la racine de la dent, normalisé par le module. La valeur par défaut est 0,38 comme défini par le rack ISO. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## Remarques

* Pour que deux engrenages puissent s'engrener, ils doivent partager le même module et le même angle de pression. Des [expressions](/Expressions/fr "Expressions/fr") peuvent aider à assurer la cohérence. Leur entraxe doit être `(NumberOfTeeth + OtherGear.NumberOfTeeth) * Modules / 2`. (c'est-à-dire dans le cas où le décalage du profil de la somme est nul). Soustraire le nombre de dents dans le cas d'un engrenage intérieur.

* Lorsque l'on utilise une [equisse](/Sketch/fr "Sketch/fr") pour positionner certains engrenages, ceux-ci peuvent être représentés à l'aide de leurs cercles primitif et d'une [contrainte de tangente](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr") entre ces cercles. Leurs diamètres peuvent être définis par l'[expression](/Expressions/fr "Expressions/fr") suivante : `SomeGear.NumberOfTeeth * SomeGear.Modules` (en supposant qu'il n'y ait pas de changement de profil et que "SomeGear" soit Données**Name** de l'objet de profil d'engrenage correspondant).

* Lorsque vous utilisez une [esquisse](/Sketch/fr "Sketch/fr") pour créer des fonctions supplémentaires (découpes, rayons...) sur un engrenage, des cercles de référence à la pointe ou à la racine des dents peuvent aider à positionner ces fonctions. Le diamètre du cercle addendum peut être défini par l'[expression](/Expressions/fr "Expressions/fr") suivante : `(SomeGear.NumberOfTeeth + 2 * (SomeGear.AddendumCoefficient + SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules` et le cercle racine respectivement par `(SomeGear.NumberOfTeeth - 2 * (SomeGear.DedendumCoefficient - SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules`.

* Le décalage de profil peut être utilisé pour éviter les contre-dépouilles sur les engrenages ayant un petit nombre de dents. Une autre application consiste à ajuster l'entraxe de deux engrenages ayant un nombre donné de dents et un module.

* Lors de la vérification visuelle d'un engrenage ou des interférences, une valeur beaucoup plus faible de Vue**Deviation** est utile, par exemple 0,05 au lieu de la valeur par défaut 0,5. Sinon, la représentation dans la [vue 3D](/3D_view/fr "3D view/fr") peut être trop grossière.

* Pour les engrenages standard, l'angle de pression le plus courant est de 20°, suivi de 14,5°. D'autres applications, notamment les [arbres cannelés (en)](https://en.wikipedia.org/wiki/Spline_(mechanical)), utilisent des angles plus élevés.

* Le système standard de pleine profondeur utilise un coefficient de tête de 1,0 et un coefficient de pied de 1,25, ce qui donne un jeu de 0,25 (la différence entre la tête d'un engrenage et le pied de l'autre). La longueur réelle des dents est la somme des deux coefficients, multipliée par le module.

* Une réduction de la longueur des dents peut être nécessaire pour éviter la contre-dépouille ou pour renforcer les dents (voir [stub teeth](https://khkgears.net/new/gear_knowledge/gear-nomenclature/stub-teeth.html)). Pour les engrenages internes, il peut être nécessaire de raccourcir la denture (ici pointant vers l'intérieur) pour éviter certaines interférences ou des flancs non-involutifs, si cela est indiqué en combinaison avec des dents plus longues du pignon.

* Pour les arbres et les moyeux cannelés, la norme ISO 4156 définit les paramètres suivants :

:   | Angle de pression | 30° (racine plate) | 30° (racine avec congé) | 37,5° | 45° |
    | --- | --- | --- | --- | --- |
    | Coefficient addendum | 0,5 | 0,5 | 0,45 | 0,4 |
    | Coefficient dedendum | 0,75 | 0,9 | 0,7 | 0,6 |
    | Coefficient du congé à la racine | 0.2 | 0.4 | 0.3 | 0.25 |

## Limitations

* Il n'est actuellement pas possible de régler l'épaisseur de la dent. La dent et l'espace entre les dents sont répartis de manière égale sur le cercle de référence. Une façon de contrôler encore le jeu est d'ajuster l'entraxe d'un engrenage. Un autre moyen est d'appliquer une quantité infime de décalage négatif du profil. Par exemple : pour un coefficient de jeu circonférentiel typique de 0,04, augmentez l'entraxe de `(0.04 * Modules / 2) / tan(PressureAngle)` ou décalez le profil de l'engrenage (de préférence le plus grand) d'un coefficient de `-(0.04 / 2) / tan(PressureAngle))`.

* Il n'y a actuellement pas de [undercut (contre-dépouille)](https://www.tec-science.com/mechanical-power-transmission/involute-gear/undercut/) dans le profil de l'engrenage généré. Cela signifie que les engrenages avec un faible nombre de dents peuvent interférer avec les dents de l'engrenage correspondant. La limite inférieure dépend de l'angle de pression Données**Pressure Angle** et se situe autour de 17 dents pour 20° et 32 pour 14.5°. La plupart des applications pratiques tolèrent une contre-dépouille manquante pour des engrenages un peu plus petits que cette limite théorique, qui suppose un accouplement avec une crémaillère et une longueur de denture standard.

## Tutoriels

Vidéo : [How to make gears in FreeCAD](https://www.youtube.com/watch?v=8VNhTrnFMfE)

## En relation

* [Atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_InvoluteGear/fr&oldid=1561003>"