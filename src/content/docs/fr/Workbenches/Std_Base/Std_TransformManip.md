---
title: Std Transformer
---
|  |
| --- |
| Std Transformer |
| Emplacement du menu |
| Édition → Transformer |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Mode d'édition](/Std_UserEditMode/fr "Std UserEditMode/fr") |
|  |

## Description

La commande **Std Transformer** permet d'appliquer des incréments de rotation et de translation à un objet sélectionné. Cela peut se faire soit en déplaçant le manipulateur de manière interative dans la vue 3D, soit, [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr"), en entrant des valeurs précises dans le panneau des tâches, soit dans le système de coordonnées (local) du manipulateur, soit dans le système de coordonnées global.

![](/images/Std_Transform_Manip_Example_1.1.png)

## Utilisation

1. Sélectionner un objet avec une propriété Données**Placement**. Voir [Remarques](#Remarques).
2. Il y a plusieurs façons de lancer la commande :
   * Sélectionner l'option **Editer → ![](/images/Std_TransformManip.svg) Transformer** du menu.
   * Sélectionner l'option **![](/images/Std_TransformManip.svg) Transformer** dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Si le [mode d'édition](/Std_UserEditMode/fr "Std UserEditMode/fr") est réglé sur **![](/images/Std_UserEditModeTransform.svg) Transformer**, vous pouvez également double-cliquer sur l'objet dans la vue en arborescence.
3. Le panneau de tâches **Transformer** s'ouvre.
4. Vous pouvez ajuster les paramètres d'aimantation : il s'agit des valeurs d'aimantation aux incréments lors d'un déplacement dans la vue 3D, que ce soit pour la rotation ou la translation.
5. Faites une ou plusieurs des choses suivantes :
   * Appuyer et maintenir le bouton gauche de la souris sur une flèche d'axe et déplacer l'objet selon cet axe.
   * Appuyer et maintenir le bouton gauche de la souris sur un plan et déplacer l'objet selon ce plan.
   * Appuyer et maintenir le bouton gauche de la souris sur une sphère et déplacer l'objet pour le faire pivoter autour de cet axe.
6. Vous pouvez ajuster l'emplacement du [manipulateur](#Manipulateur), du [système de coordonnées](#Système_de_coordonnées), saisir des incréments précis relatifs (local) ou absolus (global), ou [déplacer l'objet vers un objet cible](#Utilitaires). [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr"). Voir la section [Options](#Options) suivante pour plus d'informations.
7. Faites l'une des choses suivantes :
   * Appuyer sur le bouton OK pour confirmer et terminer la commande.
   * Appuyer sur le bouton Annuler pour annuler les transformations appliquées et terminer la commande. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Options

Il existe de nouvelles options [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") pour l'outil. Par défaut, les options fonctionnent de la même manière que dans la version version 1.0 et précédentes.

![](/images/Std_Transform_Manip_relnotes_1.1.gif)

Vous pouvez définir les options suivantes :

### Manipulateur

Cette section contrôle l'emplacement et l'orientation du manipulateur interactif (gizmo ou poignées d'axe), ainsi que son comportement dans la vue 3D. L'objet est toujours transformé autour du système de coordonnées en cours du manipulateur.

### Mode

Cette option permet d'ajuster l'emplacement et l'orientation du manipulateur et, par conséquent, l'origine de la transformation.

* **Origine de l'objet** (par défaut) : place le manipulateur à l'origine de l'objet à transformer.
* **Centre d'inertie/centroïde** : place le manipulateur au centroïde (centre géométrique) de l'objet à transformer, qui n'est égal au centre de masse que si le matériau est identique et également réparti, ou n'est pas pris en compte.
* **Personnalisé** : le manipulateur peut être aimanté à n'importe quel élément du document, sans se limiter à l'objet à transformer (faces, arêtes, sommets, points d'appui). Le choix *Personnalisé* requiert une valeur de l'utilisateur, pour placer le manipulateur à un endroit personnalisé. Le survol d'éléments dans le document permet de prévisualiser le nouvel emplacement et l'orientation du manipulateur, un clic sur la sélection permet d'aimanter le manipulateur à cette position.
  + **Référence** (visible uniquement en mode *Personnalisé*) : affiche l'élément sur lequel le manipulateur (origine de la transformation) est placé. Il affiche *Sélectionner la face, l'arête ou le sommet...* si l'outil attend une valeur (sélection) de la part de l'utilisateur.
  + Choisir une référence/Annuler. (uniquement visible en mode *Personnalisé*) : si un emplacement personnalisé du manipulateur est défini, Choisir la référence permet à l'utilisateur de modifier l'emplacement du manipulateur et de l'aimanter à un autre élément du document. L'objet peut être transformé, l'emplacement du manipulateur modifié et transformé à nouveau, le tout en une seule tâche active. Annuler s'affiche lorsque l'outil de transformation attend une entrée de l'utilisateur pour un nouvel emplacement du manipulateur (sélection dans la vue 3D) et annule le placement d'un emplacement du manipulateur personnalisé.

### Aimantation

Les incréments d'aimantation sont des valeurs permettant de contrôler uniquement le comportement de déplacement interactif dans la vue 3D. L'objet à transformer s'aimante aux incréments suivants :

* **Translation** : valeur de la longueur. Incrément d'aimantation pour une translation de l'objet dans la vue 3D, soit selon un axe, soit selon un plan.
* **Rotation** : valeur de l'angle. Incrément d'aimantation pour une rotation de l'objet dans la vue 3D autour d'un axe.

Si l'incrément d'aimantation est mis à 0, l'aimantation est désactivée lorsque l'on déplace l'objet dans la vue 3D.

### Système de coordonnées

Cette liste déroulante définit le système de coordonnées pour les saisies manuelles dans le panneau des tâches. Le système de coordonnées n'a aucun effet lors de la transformation de l'objet uniquement par d&placement dans la vue 3D (sauf si l'on choisit *Global* et que l'on coche la case *Aligner la rotation du manipulateur sur le système de coordonnées sélectionné*).

Les étiquettes des axes sont également affichées au niveau du manipulateur dans la vue 3D, tandis que **U, V, W** est le système de coordonnées local à l'emplacement en cours du manipulateur, et **X, Y, Z** est le système de coordonnées global (égal à la valeur de placement dans l'éditeur de propriétés, si le manipulateur est à l'origine de l'objet).

* **Local** (par défaut) : l'emplacement et l'orientation en cours du manipulateur définissent l'origine de la transformation pour les valeurs suivantes dans la fenêtre des tâches en **U, V, W**. La valeur est égale à la différence entre la position en cours du manipulateur par rapport à ses axes.
* **Global** : le panneau des tâches affiche les valeurs de la position et de la rotation globales dans le système de coordonnées global **X, Y, Z** et permet de modifier ces valeurs. Si le mode du manipulateur est réglé sur *Origine de l'objet*, les valeurs sont les mêmes que dans la propriété de placement de l'objet à transformer.
  + **Aligner la rotation du manipulateur sur le système de coordonnées sélectionné** (par défaut *FAUX*, disponible uniquement si le système de coordonnées n'est pas le système local) : modifie l'orientation du manipulateur pour qu'elle corresponde aux axes globaux **X, Y, Z**. L'emplacement du manipulateur n'est pas modifié par cette case à cocher, seule la rotation de l'axe du manipulateur l'est. Cela permet de faire glisser l'objet dans les directions des axes globaux (X,Y,Z), même si l'origine de l'objet est dans une orientation différente.

### Translation

Valeur de la longueur pour changer la translation de l'objet autour du manipulateur en cours (origine de la transformation).

* **U, V, W** (par défaut, dans le système de coordonnées *local*) : permet de saisir, ou affiche en cas de déplacement dans la vue 3D, la différence par rapport à l'emplacement précédent du manipulateur dans le système de coordonnées local (= emplacement du manipulateur). Les valeurs de translation en U, V, W sont conservées, tant que la rotation du manipulateur (orientation des axes) n'est pas modifiée (soit en déplaçant dans la vue 3D, soit en saisissant des valeurs de rotation dans le panneau des tâches), que le manipulateur est réaligné sur un autre emplacement personnalisé, ou que la fonction *Déplacer vers un autre objet* a été utilisée. Dans ces cas, les valeurs sont mises à zéro dans l'interface utilisateur de le panneau des tâches, sans modifier la translation réelle de l'objet.
* **X, Y, Z** (dans le système de coordonnées **global**) : permet de saisir, ou affiche en cas de déplacement dans la vue 3D, les valeurs de placement de la position en cours du manipulateur dans le système de coordonnées global X, Y, Z. Si le mode du manipulateur est *Origine de l'objet*, les valeurs correspondent aux valeurs de placement de l'objet à transformer qui sont également visibles dans la vue des propriétés.

### Rotation

Valeur de l'angle pour changer la rotation de l'objet autour de l'objet en cours (origine de la transformation).

* **U, V, W** (par défaut, dans le système de coordonnées *local*) : permet de saisir, ou affiche en cas de déplacement dans la vue 3D, la différence par rapport à l'emplacement précédent du manipulateur dans le système de coordonnées local (= emplacement du manipulateur). Les valeurs de translation en U, V, W sont conservées, tant que la rotation du manipulateur (orientation des axes) n'est pas modifiée (soit en déplaçant dans la vue 3D, soit en saisissant des valeurs de rotation dans le panneau des tâches), que le manipulateur est réaligné sur un autre emplacement personnalisé, ou que la fonction *Déplacer vers un autre objet* a été utilisée. Dans ces cas, les valeurs sont mises à zéro dans l'interface utilisateur de le panneau des tâches, sans modifier la translation réelle de l'objet.
* **X, Y, Z** (dans le système de coordonnées **global**) : permet de saisir, ou affiche en cas de déplacement dans la vue 3D, les valeurs de placement de la position en cours du manipulateur dans le système de coordonnées global X, Y, Z. Si le mode du manipulateur est *Origine de l'objet*, les valeurs correspondent aux valeurs de placement de l'objet à transformer qui sont également visibles dans la vue des propriétés.

### Utilitaires

Actions rapides pour transformer l'objet sélectionné.

* Déplacer vers un autre objet : permet de sélectionner interactivement un emplacement cible dans la vue 3D (n'importe quel élément du document) où l'objet à transformer est placé (translation et rotation), à l'emplacement en cours du manipulateur. Le bouton devient Annuler si l'outil attend une saisie (sélection 3D) de l'utilisateur. **Annuler** interrompt alors la sélection d'une cible mais ne ferme pas l'outil de transformation.
* Inverser : inverse l'orientation de l'objet à transformer de 180 degrés autour des axes X et Z. Ceci est utile si, après *Déplacer vers un autre objet*, l'objet à transformer intersecte l'objet cible, car les coordonnées de l'emplacement de la cible sont retournées de 180 degrés.

## Remarques

* Dès que vous tournez/déplacez l'objet dans la [vue 3D](/3D_view/fr "3D view/fr"), les changements sont appliqués.
* Certains objets ayant une propriété Données**Placement**, comme les esquisses, ne peuvent pas être manipulés, de même que les objets attachés à d'autres objets.
* Il n'y a pas de bouton Annuler dans version 0.21 et précédentes. Dans ces versions vous pouvez appuyer sur le bouton OK et utiliser le ![](/images/Std_Undo.svg) [Annuler](/Std_Undo/fr "Std Undo/fr") pour annuler les modifications après coup.

## Exemples

### Choisir un manipulateur personnalisé

Si le manipulateur n'est pas en vue ou à un endroit non désiré, il peut être mis soit au centre d'inertie, soit sur n'importe quel élément du document (non limité à l'objet à transformer) :

1. Lancez l'outil **Transformer**
2. Choisissez **Manipulateur → Mode → Personnalisé**
3. Sélectionnez un élément dans la vue 3D
4. Transformez autour de l'origine du manipulateur en faisant glisser dans la vue 3D, ou en changeant les valeurs dans le panneau des tâches.

Animation de démonstration (cliquez sur l'image si l'animation ne démarre pas) :

![](/images/Std_Transform_Manip_Pick_Custom_Dragger_1.1.gif)

### Déplacer l'objet vers l'origine globale

Cela permet de positionner les corps et les fichiers STEP importés par rapport à des fonctions spéciales (par exemple des trous) dans le document :

1. Lancez l'outil **Transformer**
2. Choisissez **Manipulateur → Mode → Personnalisé**
3. Sélectionnez l'élément à positionner dans la vue 3D
4. Changez le **Système de coordonnées** à **Global**
5. Saisissez la nouvelle position, par exemple 0,0,0 pour centrer l'objet à transformer à l'emplacement du manipulateur sur l'origine globale.

Animation de démonstration (cliquez sur l'image si l'animation ne démarre pas) :

![](/images/Std_Transform_Manip_Move_Feature_to_Global_Origin_1.1.gif)

### Aligner sur l'objet cible

Si un objet doit être transformé pour être placé à un emplacement cible (référence) :

1. Lancez l'outil **Transformer**
2. Choisissez **Manipulateur → Mode → Personnalisé**
3. Sélectionnez l'élément de référence dans la vue 3D
4. Cliquez sur **Utilitaires → Déplacer vers un autre objet**
5. Sélectionnez l'emplacement cible (emplacement sur lequel l'objet à transformer est aligné, à la position en cours du manipulateur)
6. Facultatif : cliquez sur **Inverser** pour changer l'orientation, si les objets s'intersectent.

Animation de démonstration (cliquez sur l'image si l'animation ne démarre pas) :

![](/images/Std_Transform_Manip_Align_to_Target_Object_1.1.gif)

### Déplacer dans le système de coordonnées global si l'objet n'est pas aligné

Si un objet (importé ou transformé) n'est pas aligné sur le système de coordonnées global du document X, Y, Z mais qu'il doit être déplacé (rotation ou translation) autour des axes globaux du document :

1. Lancez l'outil **Transformer**
2. Facultatif : changez l'emplacement du manipulateur **Mode'**
3. Sélectionnez l'élément de référence dans la vue 3D
4. Changez le **Système de coordonnées** à **Global**
5. Cochez l'option **Aligner la rotation du manipulateur sur le système de coordonnées sélectionné**
6. Les étiquettes du manipulateur passent de U, V, W à X, Y, Z et sont maintenant alignées sur le système de coordonnées global.

Animation de démonstration (cliquez sur l'image si l'animation ne démarre pas) :

![](/images/Std_Transform_Manip_Drag_in_Document_CS_1.1.gif)

### Déplacer des objets BIM dans des directions personnalisées

Par exemple, pour déplacer une porte BIM le long d'un élément mur oblique :

1. Lancez l'outil **Transformer**
2. Choisissez **Manipulateur → Mode → Personnalisé**
3. Sélectionnez un élément qui est orienté dans la direction de la cible
4. Transformez autour de l'origine de ce manipulateur soit en la déplaçant dans la vue 3D, soit en changeant les valeurs dans la panneau des tâches.

Animation de démonstration (cliquez sur l'image si l'animation ne démarre pas) :

![](/images/Std_Transform_Manip_BIM_Door_1.1.gif)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_TransformManip/fr&oldid=1534953>"