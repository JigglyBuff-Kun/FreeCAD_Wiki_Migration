---
title: SheetMetal Rebord
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| SheetMetal Rebord                                                |
| Emplacement du menu                                              |
| SheetMetal → Créer un rebord                                     |
| Ateliers                                                         |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut                                             |
| W                                                                |
| Introduit dans la version                                        |
| -                                                                |
| Voir aussi                                                       |
| _Aucun_                                                          |
|                                                                  |

## Description

La commande ![](/images/SheetMetal_AddWall.svg) **SheetMetal Rebord** crée des rebords sur les bords sélectionnés d'une plaque de base. En modifiant la propriété Données**angle** d'un rebord, on peut le transformer en bord rabattu.

Un **bord** est constitué d'un coude cylindrique à 90° et d'une bande plane (paroi).

![](/images/SheetMetal_AddWall-12.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-13.png)

Deux bords sélectionnés → deux bords

La réinitialisation de la propriété Données**angle** à environ 180° dans une deuxième étape créera un **bord rabattu** à la place.

![](/images/SheetMetal_AddWall-14.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-15.png)

Deux bords sélectionnés → deux bords rabattus

## Utilisation

1. Sélectionnez une ou plusieurs arêtes d'une tôle de base.
2. Il y a plusieurs façons de lancer la commande :
   - Pressez le bouton ![](/images/SheetMetal_AddWall.svg) Créer un rebord.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddWall.svg) Créer un rebord** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddWall.svg) Créer un rebord** dans le menu contextuel.
   - Utilisez le raccourci clavier : W.
3. Un objet **Bend** est créé et le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés du rebord** s'ouvre avec l'onglet **Général** sélectionné.

   : L'objet Bend consiste en un nouveau rebord à chaque bord sélectionné.

4. Vous pouvez appuyer sur le bouton Sélectionner pour ajouter d'autres arêtes.
   - Vous pouvez appuyer sur le bouton Effacer la sélection pour effacer la liste des arêtes sélectionnées (introduit dans la version 0.7.11 mais qui ne fonctionne pas correctement).
   - Appuyez sur le bouton Aperçu pour terminer la sélection et afficher les modifications.
5. Vous pouvez sélectionner un autre onglet et ajuster d'autres paramètres dans le panneau des tâches.
6. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
7. Ajustez les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Panneau des tâches

Un [panneau des tâches](/Task_panel/fr "Task panel/fr") avec quatre onglets a été introduit dans la version 0.6.00

Double-cliquez sur un objet Bend existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour ouvrir de nouveau le panneau des tâches et modifier les paramètres.

#### Général

![](/images/SheetMetal_AddWall-Task1.png)

- Sélectionner : modifie la quantité d'arêtes dans la propriété **base Object**.
- **Longueur** : définit la propriété **length**.
- ![](/images/Invert_On.svg) Inverser la paroi : active/désactive la propriété **invert**.
- **Mode longueur** : définit la propriété **Length Spec**.
- **Rayon de pliage** : définit la propriété **radius**.
- **Angle de pliage** : définit la propriété **angle**.
- ![](/images/FaceSelection_On.svg) Référence de la face : active/désactive la propriété **Angle Face Ref Mode**.

  : Si elle est activée, elle fait passer l'option **Angle de pliage** en mode lecture seule et affiche deux options supplémentaires :

  - **Référence** : attend qu'une face soit sélectionnée dans la vue 3D et la relie à la propriété **Angle Face Reference**.
  - **Angle relatif** : définit la propriété **Relative Angle To Ref** ainsi que la propriété **angle**.

- **Déplier** : Bascule la propriété **unfold**.

### Décalages

![](/images/SheetMetal_AddWall-Task2.png)

- **Espace A** : définit la propriété **gap1**.
- **Espace B** : définit la propriété **gap2**.
- **Extension A** : définit la propriété **extend1**.
- **Extension B** : active/désactive la propriété **extend2**.
- Bouton radio **Rectangle** et **Rond** : active/désactive la propriété **Relief Type**.
- **Largeur** : définit la propriété **reliefw**.
- **Profondeur** : active/désactive la propriété **reliefd**.

#### Onglet

![](/images/SheetMetal_AddWall-Task3.png)

- **Onglet automatique** : active/désactive la propriété **Auto Miter**.

  : Si coché :

  - **Espace minimum** : définit la propriété **minGap**.
  - **Distance maximale de l'extension** : définit la propriété **max Extend Dist**.

  : Si non coché :

  - **Angle 1** : définit la propriété **miteralgle1**.
  - **Angle 2** : définit la propriété **miteralgle2**.

#### Perforation

![](/images/SheetMetal_AddWall-Task4.png)

- **Perforer** : active/désactive la propriété **Perforate**.

  : Si coché :

  - **Angle** : définit la propriété **Perforation Angle**.
  - **Longueur initiale de la découpe** : définit la propriété **Perforation Initial Length**.
  - **Longueur maximale de la découpe** : définit la propriété **Perforation Max Length**.
  - **Longueur maximale de l'onglet** : définit la propriété **Nonperforation Max Length**.

## Remarques

Pour créer une plaque de base, utilisez un contour 2D fermé, de préférence une ![](/images/Sketcher_NewSketch.svg) [Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") avec la commande ![](/images/SheetMetal_AddBase.svg) [Créer une paroi de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr") .

Il est également possible de créer une plaque de base (vierge) à l'aide des commandes de l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou de l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

Pour créer une ébauche avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") : :

1. Créez un solide en utilisant soit :
   - ![](/images/Part_Box.svg) [Part Cube](/Part_Box/fr "Part Box/fr").
   - ![](/images/Part_Extrude.svg) [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr") de :
     - Un ![](/images/Draft_Rectangle.svg) [Draft Rectangle](/Draft_Rectangle/fr "Draft Rectangle/fr").
     - Une ![](/images/Draft_Wire.svg) [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr").
     - Une ![](/images/Sketcher_NewSketch.svg) [Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").
2. Assurez-vous que l'une des dimensions de la boîte ou la distance d'extrusion est égale à l'épaisseur de la tôle.

Pour créer une ébauche avec l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") :

1. Créez un solide en utilisant soit :
   - Un ![](/images/PartDesign_AdditiveBox.svg) [Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr").
   - Une ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") d'une ![](/images/Sketcher_NewSketch.svg) [Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").
2. Assurez-vous que l'une des dimensions de la boîte ou la propriété Données**Length** du bloc est égale à l'épaisseur de la tôle.

Si vous commencez avec un ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), vous pouvez mélanger des caractéristiques de SheetMetal avec des caractéristiques PartDesign telles que ![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") ou ![](/images/PartDesign_Hole.svg) [PartDesign Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal Bend est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**Bend Type** (`Enumeration`) : type de pliage. `Material Outside` (par défaut), `Material Inside`, `Thickness Outside`, `Offset`.
- Données**Length Spec** (`Enumeration`) : type de spécification de longueur. `Leg` (par défaut), `Outer Sharp`, `Inner Sharp`, `Tangential`.
- Données**angle** (`Angle`) : angle de pliage. Angle par défaut : `90,00°`.
- Données**base Object** (`LinkSub`) : objet de base. Lien vers la face planaire devant recevoir un pliage.
- Données**extend1** (`Distance`) : extension du côté gauche. Valeur par défaut : `0,00 mm`.
- Données**extend2** (`Distance`) : extension du côté droit. Valeur par défaut : `0,00 mm`.
- Données**gap1** (`Distance`) : espace par rapport au côté gauche. Valeur par défaut : `0,00 mm`.
- Données**gap2** (`Distance`) : espace depuis le côté droit. Valeur par défaut : `0,00 mm`.
- Données**invert** (`Bool`) : inverser la direction du pliage. Valeur par défaut : `false`.
- Données**length** (`Length`) : longueur de la paroi. Valeur par défaut : `10,00 mm`.
- Données**radius** (`Length`) : rayon de courbure. Valeur par défaut : `1,00 mm`.
- Données**radius** (`Length`) : rayon de courbure. La valeur par défaut dépend de la propriété du rayon de l'élément parent :
  - Cette propriété n'existe pas : cette propriété est définie sur `1,00 mm`.
  - Cette propriété contient une valeur numérique : une expression liant cette propriété est insérée dans cette propriété.
  - Cette propriété contient une expression : l'expression est copiée dans cette propriété.

Parameters Ex

- Données**Angle Face Ref Mode** (`Bool`) : activer la référence à la face pour l'angle. Par défaut : `true`. introduit dans la version 0.7.11
- Données**Angle Face Referene** (`LinkSub`) : référence de la face pour l'angle. Par défaut : `true`. introduit dans la version 0.7.11
- Données**Auto Miter** (`Bool`) : activer l'onglet automatique. Par défaut : `true`.
- Données**Offset Face Ref Mode** (`Bool`) : activer la référence de la face pour le décalage. Par défaut : `true`. introduit dans la version 0.7.11
- Données **Offset Face Reference** (`LinkSub`) : référence de la face pour le décalage. Par défaut : `true`. introduit dans la version 0.7.11
- Données**Offset Type** (`Enumeration`) : Type de décalage. introduit dans la version 0.7.11

  : Valeurs : `Material Outside`, `Material Inside` (par défaut), `Thickness Outside`, `Offset`.

- Données**Offset Type Offset** (`Distance`) : fonctionne lorsque la référence de la face décalée est activée. Se décale d'une distance normale par rapport à la face de référence décalée. Par défaut : `0.00`. introduit dans la version 0.7.11
- Données**Relative Angle To Ref** (`Angle`) : angle relatif par rapport à la référence de la face. Par défaut : `0.00`. introduit dans la version 0.7.11
- Données**Suppl Angle Ref** (`Bool`) : référence angulaire supplémentaire. Par défaut : `true`. introduit dans la version 0.7.11
- Données**kfactor** (`FloatConstraint`) : emplacement de la ligne neutre. Attention : utilise les normes ANSI et non DIN.  
  Par défaut : `0,50`. Facteur K (également connu sous le nom de facteur neutre) pour le pli. Utilisé pour calculer la marge de pliage lors du dépliage.
- Données**max Extend Dist** (`Length`) : distance maximale d'extension de l'onglet automatique. Valeur par défaut : `5,00 mm`.
- Données**min Gap** (`Length`) : espace minimum de l'onglet automatique. Valeur par défaut : `0,20 mm`.
- Données**min Relief Gap** (`Length`) : espace minimum pour la contre-dépouille. Valeur par défaut : `1,00 mm`.
- Données**offset** (`Distance`) : décaler le pli. Valeur par défaut : `0,00 mm`.
- Données**unfold** (`Bool`) : montrer la vue dépliée du pliage en cours. Valeur par défaut : `false`, `true` déplie le pli.

Parameters Ex2

- Données**Sketch** (`Link`) : objet de l'esquisse.
- Données**sketchflip** (`Bool`) : retourner la direction de l'esquisse. Valeur par défaut : `false`.
- Données**sketchinvert** (`Bool`) : inverser le début de l'esquisse. Valeur par défaut : `false`.

Parameters Ex3

- Données**Length List** (`FloatList`) : longueur de la liste des parois. Valeur par défaut : `[10.00]`.
- Données**bend AList** (`FloatList`) : liste des angles de pliage. Valeur par défaut : `[90.00]`.

Parameters Miterangle

- Données**miterangle1** (`Angle`) : angle de l'onglet de pliage depuis le côté gauche. Angle par défaut : `0,00°`.
- Données**miterangle2** (`Angle`) : angle de l'onglet de pliage depuis le côté droit. Angle par défaut : `0,00°`.

Parameters Perforation

- Données**Nonperforation Max Length** (`Length`) : longueur maximale de la non-perforation. Valeur par défaut : `5 mm`.
- Données**Perforate** (`Bool`) : activer la perforation. Valeur par défaut : `false`.
- Données**Perforation Angle** (`Angle`) : angle de la perforation. Valeur par défaut : `0 °`.
- Données**Perforation initial Length** (`Length`) : longueur initiale de la perforation. Par défaut : `5 mm`.
- Données**Perforation Max Length** (`Length`) : longueur maximale de la perforation. Par défaut : `5 mm`.

Parameters Relief

- Données**Relief Factor** (`Float`) : facteur de contre-dépouille. Valeur par défaut : `0,70`.
- Données**Use Relief Factor** (`Bool`) : utiliser le facteur de contre-dépouille. Valeur par défaut : `false`.
- Données**relief Type** (`Enumeration`) : type de contre-dépouille. `Rectangle`. (par défaut), `Round`. Activé uniquement lorsqu'une valeur d'écart est définie.
- Données**reliefd** (`Length`) : profondeur de la contre-dépouille. Valeur par défaut : `1,00 mm`. Activé uniquement lorsqu'une valeur d'espace est définie.
- Données**reliefw** (`Length`) : largeur de la contre-dépouille. Valeur par défaut : `0,80 mm`. Activé uniquement lorsqu'une valeur d'espace est définie.

## Exemple

![](/images/SheetMetal_AddWall-01.png)

Un plateau tout simple

### Préparation

Ce plateau est constitué d'une ébauche rectangulaire à laquelle on a ajouté des parois sur les bords de son contour. Il faut donc préparer à l'avance un croquis de contour pour l'ébauche.

![](/images/SheetMetal_AddWall-02.png)

Un simple contour rectangulaire

### Déroulement des tâches

1. 1. Créer une ébauche
   2. Sélectionnez l'esquisse de contour  
      ![](/images/SheetMetal_AddWall-03.png)
   3. Appuyez sur le bouton ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr") ou utilisez le raccourci clavier : C puis F.  
       ![](/images/SheetMetal_AddWall-04.png)  
       (L'ébauche est générée dans la direction z
      .
2. Ajouter des murs aux bords du contour
   1. Sélectionnez les **bords du contour** du blanc  
      ![](/images/SheetMetal_AddWall-05.png).
   2. Appuyez sur le bouton ![](/images/SheetMetal_AddWall.svg) Make Wall ou utilisez le raccourci clavier : W.  
      ![](/images/SheetMetal_AddWall-06.png)
   3. Si le pli est à 90° vers le bas, mettez la valeur de la propriété **invert** à true pour inverser le sens (et **length** à une valeur plus faible pour les petits murs)  
      ![](/images/SheetMetal_AddWall-01.png).
3. Ajouter d'autres parois
   1. Sélectionnez les **bords extérieurs supérieurs** du plateau  
      ![](/images/SheetMetal_AddWall-08.png).
   2. Appuyez sur le bouton ![](/images/SheetMetal_AddWall.svg) Make Wall ou utilisez le raccourci clavier : W.  
      ![](/images/SheetMetal_AddWall-09.png)
   3. Les parois sont un peu trop longues et il faut donc mettre la propriété **longueur** à une valeur inférieure  
      ![](/images/SheetMetal_AddWall-10.png).
   4. Si vous aimez que les plis se mettent vers l'extérieur mettez la valeur **invert** à true  
      ![](/images/SheetMetal_AddWall-11.png).

C'est fait!

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddWall/fr&oldid=1548123>"
