---
title: Vue en arborescence
---
## Introduction

La vue en arborescence apparaît dans la section supérieure du panneau **Modèle** (si la [vue combinée](/Combo_view/fr "Combo view/fr") est active) ou en tant que panneau indépendant. Elle montre tous les objets définis par l'utilisateur qui font partie d'un document FreeCAD. L'arborescence est une représentation de la [structure du document](/Document_structure/fr "Document structure/fr") et indique quelles informations sont sauvegardées sur le disque.

Ces objets ne doivent pas nécessairement être des formes géométriques visibles dans la [vue 3D](/3D_view/fr "3D view/fr") mais peuvent également prendre en charge des objets de données créés avec l'un des [ateliers](/Workbenches/fr "Workbenches/fr").

![](/images/FreeCAD_Tree_view.png)

La vue en arborescence montrant divers éléments du document.

## Travailler avec la vue en arborescence

Par défaut, chaque fois qu'un nouvel objet est créé, il est ajouté à la fin de la liste dans l'arborescence. L'arborescence permet de gérer les objets pour les garder organisés. Elle permet de créer des [groupes](/Std_Group/fr "Std Group/fr"), de déplacer des objets à l'intérieur de groupes, de déplacer des groupes à l'intérieur d'autres groupes, de réétiqueter des objets, de copier des objets, de supprimer des objets et en utilisant les options de son [menu contextuel](#Menu_contextuel).

De nombreuses opérations créent des objets qui dépendent d'un objet déjà existant. Dans ce cas, l'arborescence montre cette relation en absorbant l'objet plus ancien à l'intérieur du nouvel objet. Le développement et la réduction des objets dans l'arborescence montrent l'historique paramétrique de cet objet. Les objets qui sont plus profondément à l'intérieur des autres sont plus anciens, tandis que les objets qui sont à l'extérieur sont plus récents et sont dérivés des objets plus anciens. En modifiant les objets intérieurs, les opérations paramétriques se propagent jusqu'au sommet, générant un nouveau résultat.

![](/images/FreeCAD_Tree_view_parametric_history.png)

L'objet au sommet est créé en effectuant des opérations paramétriques sur des objets qui ont eux-mêmes été créés par des opérations précédentes.  
L'expansion complète de l'arborescence révèle les éléments d'origine qui ont été utilisés pour créer les solides partiels.

### Colonnes de la vue en arborescence

La vue en arborescence affiche toujours une seule colonne contenant les icônes et les étiquettes des objets. Deux colonnes supplémentaires peuvent être affichées en option. Pour activer ces colonnes, cliquez avec le bouton droit de la souris sur l'arborescence et, dans le menu contextuel, sélectionnez **Paramètres de l'arborescence**, puis **Afficher la description** ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et/ou **Afficher la colonne de description** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")). Des titres de colonnes sont ajoutés si plusieurs colonnes sont affichées. Notez que les noms internes des objets ne peuvent pas être modifiés.

### Modifier l'étiquette de l'objet

Sélectionnez un objet dans la première colonne et appuyez sur F2 (sous Windows et Linux) ou Entrée (sous macOS) pour modifier sa propriété Données**Label**. Cette propriété peut également être modifiée via l'option du menu contextuel **Renommer** ou dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Modifier la description de l'objet

Un objet peut éventuellement être accompagné d'une description. Cette information est enregistrée dans sa propriété Données**Label2**. Si la colonne de description est affichée, vous pouvez modifier cette propriété en sélectionnant un objet dans cette colonne et en appuyant sur F2 (sous Windows et Linux) ou Entrée (sous macOS). La propriété peut également être modifiée dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Menu contextuel

Les options du menu contextuel de l'arborescence dépendent de l'objet ou des objets sélectionnés et de l'atelier actif. Pour afficher ce menu, cliquez avec le bouton droit de la souris sur l'arrière-plan de la liste, cliquez avec le bouton droit de la souris sur un objet de la liste ou sélectionnez plusieurs objets dans la liste, puis cliquez avec le bouton droit de la souris sur l'un d'entre eux.

### Commandes du clavier

Les commandes habituelles du clavier peuvent être utilisées dans l'arborescence. Les commandes peuvent également être combinées.

* Ctrl : maintenez cette touche enfoncée pour sélectionner plusieurs objets.
* Alt : maintenez cette touche enfoncée pour sélectionner tous les objets situés entre un objet sélectionné précédemment et l'objet sélectionné suivant.

### Raccourcis clavier

Les raccourcis clavier suivants sont disponibles lorsque le curseur est sur la vue en arborescence :

* Ctrl+F : ouvre une boîte de recherche au bas de l'arbre, permettant de rechercher et d'atteindre des objets en utilisant leurs noms internes ou leurs étiquettes.
* Actions d'expansion et de réduction à l'aide des combinaisons Alt+Flèche : [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
  + Alt+Flèche gauche : réduit le(s) élément(s) sélectionné(s).
  + Alt+Flèche droit : développe le(s) élément(s) sélectionné(s).
  + Alt+Flèche haut : développe le ou les éléments sélectionnés avec tous leurs enfants de niveau 1 réduits (les enfants plus profonds restent inchangés).
  + Alt+Flèche bas : développe le ou les éléments sélectionnés avec tous leurs enfants de niveau 1 également développés (les enfants plus profonds restent inchangés).

## Icônes de superposition

Une ou plusieurs plus petites icônes de superposition peuvent être affichées au-dessus de l'icône par défaut d'un objet dans l'arborescence. Les icônes superposées disponibles et leur signification sont énumérées ci-dessous.

### Marque blanche sur fond bleu

Cela indique que l'objet doit être [recalculé](/Std_Refresh/fr "Std Refresh/fr") en raison de modifications apportées au modèle ou parce que l'utilisateur a marqué l'objet dans le menu contextuel de la vue en arborescence pour qu'il soit recalculé. Dans la plupart des cas, les recalculs sont déclenchés automatiquement, parfois ils sont retardés pour des raisons de performance.

### Point d'exclamation blanc sur fond rouge

Cela indique que l'objet présente une erreur qui doit être corrigée. Après avoir recalculé l'ensemble du document, une info-bulle décrivant l'erreur est affichée lorsque vous passez la souris sur l'objet dans l'arborescence. Remarque : tous les autres objets dépendant d'un objet dans un tel état d'erreur ne seront pas correctement recalculés, ils peuvent donc encore présenter un ancien état.

### Maillon de chaîne violet

Cela est généralement indiqué pour les [esquisses](/Sketch/fr "Sketch/fr"), les primitives de [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), telles que la boîte, le cylindre, etc. et un [datum](/Datum/fr "Datum/fr") géométrique. Elle indique que l'objet n'est pas attaché à quelque chose. Il n'a pas de décalage d'ancrage et obtient sa position et son alignement uniquement à partir de sa propriété [Placement](/Placement/fr "Placement/fr").

Il existe un [Tutoriel Les bases pour l'ancrage](/Basic_Attachment_Tutorial/fr "Basic Attachment Tutorial/fr") expliquant comment gérer ces objets.

### X jaune

Ceci n'est utilisé que pour des [esquisses](/Sketch/fr "Sketch/fr") et indique que l'esquisse n'est pas entièrement contrainte. Si l'esquisse est en [mode d'édition](/Sketcher_EditSketch/fr "Sketcher EditSketch/fr"), le nombre de degrés de liberté restants est indiqué dans les [messages du solveur](/Sketcher_Dialog/fr#Messages_du_solveur "Sketcher Dialog/fr").

### Flèche blanche sur fond vert

Ceci indique ce qu'on appelle le [Tip](/PartDesign_Body/fr#Tip_.28fonction_r.C3.A9sultante.29 "PartDesign Body/fr") d'un corps. C'est généralement la dernière fonction d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") et représente le corps entier pour le monde extérieur au corps, par exemple lorsque le corps est exporté ou utilisé dans des [Part opérations booléennes](/Part_Boolean/fr "Part Boolean/fr"). Le Tip peut être modifié par l'utilisateur.

### Barre oblique inverse rouge

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Cela indique qu'une fonction de [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") a été supprimée.

### Flèche blanche incurvée vers le haut

Ceci indique un objet [lié](/Std_LinkMake/fr "Std LinkMake/fr").

### Deux flèches blanches incurvées vers le haut

Ceci indique un objet [lié](/Std_LinkMake/fr "Std LinkMake/fr") chargé à partir d'un document externe.

### Symbole de l'oeil

Ceci indique que l'objet sera caché dans la vue en arborescence si l'option du menu contextuel **Afficher les éléments masqués dans la vue en arborescence** n'est pas cochée.

### Symbole de glace cyan

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Ceci indique un objet [figé](/Std_ToggleFreeze/fr "Std ToggleFreeze/fr") qui n'est pas recalculé lorsque ses parents changent.

## Préférences

Voir [Vue combinée](/Combo_view/fr#Préférences "Combo view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tree_view/fr&oldid=1516314>"