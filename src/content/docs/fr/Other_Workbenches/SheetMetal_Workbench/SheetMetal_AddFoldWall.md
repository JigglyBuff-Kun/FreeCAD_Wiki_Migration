---
title: SheetMetal Plier une tôle
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| SheetMetal Plier une tôle                                        |
| Emplacement du menu                                              |
| SheetMetal → Plier une tôle                                      |
| Ateliers                                                         |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut                                             |
| C F                                                              |
| Introduit dans la version                                        |
| -                                                                |
| Voir aussi                                                       |
| _Aucun_                                                          |
|                                                                  |

## Description

La commande ![](/images/SheetMetal_AddFoldWall.svg) **SheetMetal Plier une tôle** plie une tôle (brute) selon une ligne choisie.

Elle peut être utilisée avec une plaque prédécoupée pour

- créer une zone de pliage perforée
- laisser des sections planes dans la zone de pliage et au-delà, par exemple des languettes. (nécessite des espaces dans la ligne de pliage)

![](/images/SheetMetal_AddFoldWall-13.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

Plaque prédécoupée et ligne de pliage avec deux espaces → zone de pliage perforée avec une géométrie encore plane

## Utilisation

1. Sélectionnez le côté à plier.
2. Maintenez la touche Ctrl (ou la touche Commande sur macOS).
3. Sélectionnez la face coplanaire de l'![](/images/Workbench_Sketcher.svg) [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") (c'est-à-dire située sur le même plan) contenant la **ligne de pliage (segments)** (de préférence à partir de la [vue en arborescence](/Tree_view/fr "Tree view/fr")).
4. Relâchez la touche Ctrl (ou la touche Commande).
5. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_AddFoldWall.svg) Plier une tôle.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddFoldWall.svg) Plier une tôle** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddFoldWall.svg) Plier une tôle** dans le menu contextuel.
   - Utilisez le raccourci clavier : C Puis F.
6. Un objet **Fold** sera créé et le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés de la ligne de pliage** s'ouvre.
7. Vous pouvez appuyer sur le bouton Objet de base et sélectionnez une face différente.
8. Vous pouvez appuyer sur le bouton Ligne de pliage et sélectionnez une autre esquisse.
9. Vous pouvez ajuster les paramètres dans panneau des tâches.
10. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
11. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

![](/images/SheetMetal_AddFoldWall-15.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

La ou les lignes de pliage situées au milieu de la perforation → pour que le pliage soit centré de la même manière, la propriété Données**Position** doit être définie sur `middle`

### Panneau des tâches

Un panneau de tâches a été introduit dans la version 0.5.00

Double-cliquez sur un objet Fold existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour ouvrir de nouveau le panneau des tâches et modifier les paramètres.

![](/images/SheetMetal_AddFoldWall-Task.png)

- Objet de base : associe une esquisse différente à la propriété **base Object**.
- Ligne de pliage : associe une esquisse différente à la propriété **Bend Line**.
- **Inverser la direction** : active/désactive la propriété **Invert Bend**.
- **Déplier** : active/désactive la propriété **Unfold**.
- **Rayon de courbure** : définit la propriété **radius**.
- **Angle de pliage** : définit la propriété **angle**.

### Remarques

- La ligne de pliage doit être **coplanaire** à la face sélectionnée.

- Les segments de la ligne de pliage doivent être **colinéaires** les uns par rapport aux autres.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal Fold est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**Bend Line** (`Link`) : liste des lignes de référence de pliage. Liens vers les objets de la ligne de pliage.
- Données**Position** (`Enumeration`) : position de la ligne de pliage.

  : `intersection of planes` (introduit dans la version 0.4.12), `DEvant` (valeur par défaut), `Milieu`, `Arrière`.

- Données**angle** (`Angle`) : angle de pliage. Angle par défaut : `90,00°`.
- Données**base Object** (`LinkSub`) : objet de base. Lien vers la face planaire à plier.
- Données**invert** (`Bool`) : inverser la direction du pliage. Valeur par défaut : `false`.
- Données**invertbend** (`Bool`) : inverser la direction de pliage du solide. Valeur par défaut : `false`.

  : `true` permute le côté de la ligne à plier.

- Données**kfactor** (`FloatConstraint`) : position de l'axe neutre. Valeur par défaut : `0,50`.
- Données**radius** (`Length`) : rayon de pliage . Valeur par défaut : `1,00 mm`.
- Données**unfold** (`Bool`) : pliage déplié. Valeur par défaut : `false`.

## Exemple

![](/images/SheetMetal_AddFoldWall-01.png)

Un simple clip

### Préparation

Ce clip est fait d'un blanc qui reçoit trois plis et donc nous avons besoin de quatre schémas préparés à l'avance :

: - un pour le contour plus la fente (vierge)
: - un pour le pliage de la pointe
: - un pour le pliage vers le haut
: - un pour le pliage vers le bas

La façon la plus simple de garantir qu'une face de la découpe et toutes les lignes de pliage sont coplanaires est de créer toutes les esquisses sur le même plan - le **XY_Plane** dans ce cas.

Les lignes de pliage pourraient être créées avec d'autres outils, mais bon, nous avons une ![](/images/Workbench_Sketcher.svg)[esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") !

![](/images/SheetMetal_AddFoldWall-21.png)
![](/images/SheetMetal_AddFoldWall-20.png)

Esquisses sur leur plan commun et leur représentation dans l'arbre de conception

### Déroulement des tâches

1. Créer une ébauche

   1. Sélectionnez l'esquisse de contour
   2. Appuyez sur le bouton ![](/images/SheetMetal_AddBase.svg)[Tôle de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr")  
      ou utilisez le raccourci clavier : C puis B  
       ![](/images/SheetMetal_AddFoldWall-02.png) ![](/images/SheetMetal_AddFoldWall-03.png)

      (L'ébauche est générée dans la direction z et il faut donc la retourner  
      à chaque fois, pour sélectionner la face inférieure qui se trouve sur le plan de l'esquisse)

      .

2. Plier la pointe
   1. Sélectionner la **face inférieure** de l'ébauche.
   2. Sélectionnez l'**esquisse** nommée **_Tip Fold line_** (de préférence à partir de l'arborescence)  
      (et n'oubliez pas la touche contrôle/commande ).
   3. Appuyez sur le ![](/images/SheetMetal_AddFoldWall.svg) Plier une tôle bouton  
      ou utilisez le raccourci clavier : C puis F.  
      ![](/images/SheetMetal_AddFoldWall-10.png) ![](/images/SheetMetal_AddFoldWall-04.png) ![](/images/SheetMetal_AddFoldWall-05.png)
   4. Le pli doit être à 90° vers le bas et donc certaines valeurs dans la fenêtre des propriétés doivent être définies par exemple :
      - la valeur **angle** à 60°
      - la valeur **inverser** à true pour un pliage vers le haut
      .
3. Créer le pli vers le bas
   1. Sélectionnez la **face inférieure** de l'ébauche.
   2. Et ensuite l'**esquisse** nommée **_Down-Fold line_**.
   3. Appuyez sur le ![](/images/SheetMetal_AddFoldWall.svg) Plier une tôle bouton  
      ou utilisez le raccourci clavier : C puis F.  
      ![](/images/SheetMetal_AddFoldWall-11.png) ![](/images/SheetMetal_AddFoldWall-06.png) ![](/images/SheetMetal_AddFoldWall-07.png)
   4. Réglez la valeur _angle_ à 92°.
   5. Si la mauvaise section de la pièce a bougé, réglez la valeur **invertbend** sur true
      .
   6. Pour créer le pliage vers le haut
   7. sélectionnez la **face inférieure** de la pièce brute.
   8. puis le **sketch** nommé **_Up-Fold line_**.
   9. Appuyez sur le bouton ![](/images/SheetMetal_AddFoldWall.svg) Plier une tôle  
      ou utilisez le raccourci clavier : C puis F.  
      ![](/images/SheetMetal_AddFoldWall-12.png) ![](/images/SheetMetal_AddFoldWall-08.png) ![](/images/SheetMetal_AddFoldWall-09.png)
   10. Définissez la valeur **angle** à 80°.
   11. Si le pli est vers le bas définir la valeur **invert** à true.
   12. Si nécessaire, mettez la valeur **invertbend** à true.

C'est fait!

Remarque : dans la vie réelle, le pliage vers le haut doit être effectué avant le pliage vers le bas. Seul le monde virtuel de la CAO nous permet de plier à travers un matériau solide. De cette façon, l'orientation de la section statique ne change pas.  
Toutes les esquisses se trouvent sur le même plan pour éviter les esquisses attachées aux faces mobiles.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddFoldWall/fr&oldid=1545951>"
