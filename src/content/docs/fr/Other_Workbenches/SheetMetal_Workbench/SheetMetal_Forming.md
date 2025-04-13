---
title: SheetMetal Emboutir
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| SheetMetal Emboutir                                              |
| Emplacement du menu                                              |
| SheetMetal → Emboutir                                            |
| Ateliers                                                         |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut                                             |
| M F                                                              |
| Introduit dans la version                                        |
| -                                                                |
| Voir aussi                                                       |
| _Aucun_                                                          |
|                                                                  |

## Description

La commande ![](/images/SheetMetal_Forming.svg) **SheetMetal Emboutir** crée une forme emboutie dans une tôle à l'aide d'un objet distinct.

La face arrière du solide définissant la forme, et la face à emboutir sont utilisées pour positionner et orienter le solide, c'est-à-dire que leurs systèmes de coordonnées locales auront la même origine et la même orientation par défaut. L'angle autour de l'axe Z et les décalages dans les directions X, Y et Z peuvent être modifiés en changeant leurs valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

Une esquisse peut être ajoutée pour multiplier et distribuer la forme emboutie selon des motifs réguliers ou irréguliers (en utilisant les points centraux de cercles ou d'arcs).

Une petite sélection de fonctions qui peuvent être créées :

![](/images/SheetMetal_Forming-08.png)
![](/images/SheetMetal_Forming-09.png)  
![](/images/SheetMetal_Forming-10.png)
![](/images/SheetMetal_Forming-11.png)

Fossettes, persiennes, découpes dessinées, ponts

## Utilisation

Assurez-vous que le corps contenant l'objet à emboutir est le corps actif. Si nécessaire, double-cliquez dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

### Fossette

1. Sélectionnez la face de l'objet SheetMetal à embosser.
2. Maintenez la touche Ctrl (ou la touche Command sur macOS) enfoncée.
3. Ajoutez la **face inférieure** (face arrière) du solide définissant la forme à la sélection.
4. Relâchez la touche Ctrl (ou la touche Command).
5. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_Forming.svg) Emboutir.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_Forming.svg) Emboutir** dans le menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_Forming.svg) Emboutir** dans le menu contextuel.
   - Utilisez le raccourci clavier : M puis F.
6. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés de l'emboutissage** s'ouvre (introduit dans la version 0.5.00).
7. Vous pouvez sélectionner de nouvelles faces/arêtes.
   - Appuyez sur le bouton Mettre à jour pour terminer la sélection et afficher les modifications.
8. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
9. Un objet **WallForming** sera créé au centre de la face sélectionnée à emboutir.
10. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Persienne

1. Sélectionnez la face de l'objet SheetMetal à emboutir.
2. Maintenez la touche Ctrl (ou la touche Commande sur macOS).
3. Ajoutez à la sélection la **face inférieure** (face arrière) du solide définissant la forme.
4. Ajoutez à la sélection une **face latérale** adjointe à la face inférieure pour indiquer la position de la coupe.
5. Relâchez la touche Ctrl (ou la touche Commande).
6. Lancez la commande et suivez les étapes décrites ci-dessus.

### Pont

1. Sélectionnez la face de l'objet SheetMetal à emboutir.
2. Maintenez la touche Ctrl (ou la touche Commande sur macOS).
3. Ajoutez à la sélection la **face inférieure** (face arrière) du solide définissant la forme.
4. Ajoutez à la sélection une **face latérale** adjacente à la face inférieure pour indiquer la position de la première coupe.
5. Ajoutez à la sélection la **face latérale opposée** adjointe à la face inférieure pour indiquer la position de la deuxième coupe.
6. Relâchez la touche Ctrl (ou la touche Commande).
7. Lancez la commande et suivez les étapes décrites ci-dessus.

### Découpe dessinée

1. Sélectionnez la face de l'objet SheetMetal à emboutir.
2. Maintenez la touche Ctrl (ou la touche Commande sur macOS).
3. Ajoutez à la sélection la **face inférieure** (face arrière) du solide définissant la forme.
4. Ajoutez à la sélection la **face supérieure** opposée à la face inférieure pour marquer la zone à découper.
5. Relâchez la touche Ctrl (ou la touche Commande).
6. Lancez la commande et suivez les étapes décrites ci-dessus.

### Multiplication et motif

Pour multiplier et modeler la fonction emboutie, une **esquisse** contenant des cercles et des arcs peut être ajoutée à la propriété Données**Sketch** de l'objet **WallForming**. Cette esquisse doit être **coplanaire** avec la face à emboutir.

Les centres des cercles ou des arcs sont utilisés pour fournir des positions où placer les instances de la caractéristique en relief. Ils n'influencent pas l'orientation des instances.

L'orientation dépend toujours de l'orientation de la première face sélectionnée.

### Ajouter des congés

1. Passez à l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
2. Sélectionnez une arête sur la face supérieure de l'objet SheetMetal pour recevoir un congé.
3. Activez le ![](/images/PartDesign_Fillet.svg) [PartDesign Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr") en utilisant une des commandes :
   - par le bouton ![](/images/PartDesign_Fillet.svg) [PartDesign Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr")
   - par le menu déroulant **PartDesign → Appliquer une fonction d'habillage → ![](/images/PartDesign_Fillet.svg) Congé**
4. Mettez la propriété Données**Refine** de l'objet Fillet sur `true`.  
   (C'est assez **important** pour le prochain congé).
5. Sélectionnez un bord sur la face inférieure de l'objet SheetMetal pour recevoir un congé.
6. Activez le ![](/images/PartDesign_Fillet.svg) [PartDesign Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr") (voir ci-dessus)

## Remarques

La géométrie emboutie n'est pas limitée aux parois planes et aux connexions cylindriques, de sorte qu'après l'application d'une telle géométrie à un objet SheetMetal **l'objet n'est plus dépliable**.

L'emboutissage peut être désactivé (en définissant la propriété Données**Suppress Feature** sur `true`) pour déplier l'objet mais les congés suivants perdent leurs arêtes de définition et affichent une erreur lorsque l'emboutissage est réactivé.

L'emboutissage et les congés doivent être les dernières étapes de la création d'un objet SheetMetal.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal WallForming est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**Suppress Feature** (`Bool`) : supprimer la fonction d'emboutissage. La valeur par défaut est `false`.
- Données**angle** (`Angle`) : angle de position de l'outil. Angle par défaut : `0,00°`.
- Données**base Object** (`LinkSub`) : objet de base. Lien vers la face planaire à emboutir.
- Données**offset** (`VectorDistance`) : décaler par rapport au centre de la face. Valeur par défaut : `[0,00 mm, 0,00 mm, 0,00 mm]`.
- Données**thickness** (`Distance`) : épaisseur de la tôle. Épaisseur de Données (hidden)**Base Feature**.
- Données**tool Object** (`LinkSub`) : outil d'emboutissage. Lien vers la face plane utilisée pour positionner l'outil d'emboutissage.

Parameters1

- Données**Sketch** (`Link`) : pointer l'esquisse sur la tôle. Lien vers l'esquisse contenant des informations sur la manière de multiplier et de distribuer les instances de l'outil d'emboutissage. (Les points centraux des cercles et des arcs sont utilisés pour créer et positionner ces instances).

## Exemple

![](/images/SheetMetal_Forming-01.png) ![](/images/SheetMetal_Forming-02.png)

Un bol hexagonal avec centre embouti

### Préparation

Ce bol est fait d'un objet en tôle pliée avec une forme emboutie, les deux doivent être préparés à l'avance.

Il n'est pas nécessaire de travailler avec des esquisses coplanaires ici.

![](/images/SheetMetal_Forming-03.png)

Bol en tôle et objet embouti

### Déroulement des tâches

1. Sélectionnez la paroi de l'objet SheetMetal à emboutir.
2. Sélectionnez la **face arrière** du solide définissant la forme  
   (Rappelez-vous que l'objet à emboutir **et** le solide définissant la forme doivent tous deux être sélectionnés. Activez la méthode de sélection multiple appropriée à votre système d'exploitation : Control/Command.)  
   ![](/images/SheetMetal_Forming-04.png)
3. Appuyez sur le bouton ![](/images/SheetMetal_Forming.svg) Emboutir  
   ou utilisez le raccourci clavier : M puis F.  
    ![](/images/SheetMetal_Forming-05.png)
4. Filetter les arêtes vives :
   - Retournez le bol et sélectionnez une ou plusieurs arêtes pour les plus petits rayons intérieurs.
   - Appuyez sur le bouton ![](/images/PartDesign_Fillet.svg) [PartDesign Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr")  
     ![](/images/SheetMetal_Forming-12.png) \*_-->'_- ![](/images/SheetMetal_Forming-02.png)
   - Retournez à nouveau le bol et sélectionnez une ou plusieurs arêtes pour les plus grands rayons extérieurs.
   - Appuyez sur le bouton ![](/images/PartDesign_Fillet.svg) [PartDesign Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr")  
     ![](/images/SheetMetal_Forming-13.png) \*_-->'_- ![](/images/SheetMetal_Forming-01.png)
     Fait!
5. Modifier l'orientation et la position (doit être fait avant la mise en congés).
   - Activez l'objet ![](/images/SheetMetal_Forming.svg) WallForming dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   - Définissez la valeur de la propriété Données**angle** à par exemple 45°  
      ![](/images/SheetMetal_Forming-14.png)
   - Définir la valeur de la propriété Données**offset, x** à par exemple supérieure à 0  
      ![](/images/SheetMetal_Forming-06.png)  
     Ici, il est clair que cela n'a pas de sens de déplacer la géométrie en relief en dehors du mur sélectionné.
   - Définir la valeur de la propriété Données**offset, z** à une valeur par exemple supérieure à 0 n'est pas mieux :  
      ![](/images/SheetMetal_Forming-07.png)  
     Au moins, le FreeCAD ne plante pas quand une pièce a deux corps....
   1. Quelques conseils
   2. La hauteur du solide de définition détermine la profondeur de la forme emboutie.  
      Cela signifie que changer le paramètre **offset, z** pour modifier la profondeur ne donnera pas les résultats escomptés.
   3. La géométrie emboutie est constituée d'un objet coque c'est-à-dire qu'elle a une épaisseur constante.  
      Et donc le solide de définition doit être décalable, sinon l'outil échouera à créer l'emboutissage.
   4. Si les bords extérieurs sont filetés en premier, cela peut déchirer l'objet en plusieurs morceaux lorsque les rayons sont définis trop grands.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Forming/fr&oldid=1545963>"
