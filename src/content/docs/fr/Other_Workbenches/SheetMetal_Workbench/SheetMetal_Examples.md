---
title: SheetMetal Exemples
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Introduction

L'![](/images/Sheetmetal_workbench_icon.svg) [atelier SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") (un [atelier externe](/External_workbenches/fr "External workbenches/fr") disponible via le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr")) est devenu assez puissant et mérite d'être documenté de manière appropriée.

Pour éviter de surcharger les pages d'outils avec des exemples, cette page a été ajoutée pour rassembler les pièces montrant et expliquant les caractéristiques spéciales de SheetMetal.

Phases planifiées pour générer du contenu :

1. Collecte d'images
2. Ajout de descriptions de flux de travail
3. Ajout de tutoriels plus détaillés

## Charnière

![](/images/SheetMetal_Example-01.png)

![](/images/SheetMetal_Example-01a.png)
![](/images/SheetMetal_Example-01b.png)
![](/images/SheetMetal_Example-01c.png)
![](/images/SheetMetal_Example-01d.png)

Processus de travail pour une charnière:
![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr"),
![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"),
![](/images/PartDesign_Hole.svg) [PartDesign Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr"),
![](/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr").

### Charnière étape par étape

1. Créez un profil (une ligne et un arc tangent), de préférence en utilisant l'![](/images/Workbench_Sketcher.svg)[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
2. Activez ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr") pour créer un objet BaseBend.
3. Modifiez les paramètres de l'objet BaseBend :
   - Définissez Données**Mid Plane** sur `true` pour que le profil s'étende symétriquement des deux côtés du plan de l'esquisse.
   - Donnez à Données**radius** et Données**thickness** les valeurs de votre choix.
4. Créez un contour découpé avec l'![](/images/Workbench_Sketcher.svg)[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
5. Utilisez ![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") pour couper la moitié du bout rond.
6. Créez un modèle de trou avec l'![](/images/Workbench_Sketcher.svg)[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")
7. Utilisez ![](/images/PartDesign_Hole.svg) [PartDesign Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr"). Évitez les options Chambrage et Fraisure pour que le corps reste dépliable.
8. Activez la commande ![](/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr") pour obtenir un objet déplié.
9. C'est fait !

## Clip papier

![](/images/SheetMetal_Example-02.png)

![](/images/SheetMetal_Example-02a.png)
![](/images/SheetMetal_Example-02b.png)
![](/images/SheetMetal_Example-02c.png)
![](/images/SheetMetal_Example-02d.png)

Processus de travail pour un clip papier:
![](/images/SheetMetal_AddBase.svg) [Tôle de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr"),
![](/images/SheetMetal_SketchOnSheet.svg) [Découper des trous](/SheetMetal_SketchOnSheet/fr "SheetMetal SketchOnSheet/fr"),
cloner, retourner et fusionner,
![](/images/SheetMetal_Unfold.svg) [Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr").

### Clip papier étape par étape

1. Créez un profil, de préférence en utilisant l'![](/images/Workbench_Sketcher.svg)[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") sur le plan XZ.  
   ![Esquisse du profil](/images/SheetMetal_Example-02e.png)
2. Activez ![](/images/SheetMetal_AddBase.svg) [Tôle de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr") pour créer un objet BaseBend.
3. Modifiez les paramètres de l'objet BaseBend dans le panneau des propriétés:  
    ![Objet BaseBend et esquisse en surbrillance](/images/SheetMetal_Example-02f.png).
   - Définissez Données**mid plane** sur `true` pour que le profil s'étende symétriquement des deux côtés du plan de l'esquisse.
   - Définissez Données**length** sur 32 mm.
   - Donnez à Données**radius** la valeur 2 mm.
   - Définissez Données**thickness** à 0,3 mm.
4. Sélectionnez la face entre les sections rondes et activez l'![](/images/Workbench_Sketcher.svg)[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").  
   ![Face pour supporter l'esquisse](/images/SheetMetal_Example-02g.png)
5. Pour cacher la partie recourbée, utilisez ![](/images/Sketcher_ViewSection.svg) [Sketcher Vue en coupe](/Sketcher_ViewSection/fr "Sketcher ViewSection/fr").
6. Créez le contour de la découpe.  
   ![Contour de la découpe](/images/SheetMetal_Example-02h.png) ![Contour découpé touchant légèrement la face sélectionnée](/images/SheetMetal_Example-02i.png)
7. Terminez l'esquisse en utilisant ![](/images/Sketcher_LeaveSketch.svg) [Sketcher Quitter l'esquisse](/Sketcher_LeaveSketch/fr "Sketcher LeaveSketch/fr").
8. Sélectionnez à nouveau la face et ajoutez l'esquisse de découpe à la sélection.  
   ![Face et esquisse sélectionnées](/images/SheetMetal_Example-02j.png)
9. Utilisez l'outil ![](/images/SheetMetal_SketchOnSheet.svg) [Découper des trous](/SheetMetal_SketchOnSheet/fr "SheetMetal SketchOnSheet/fr") pour découper autour de la partie recourbée.  
   ![Première moitié finie](/images/SheetMetal_Example-02b.png)
10. Un côté est terminé. Nous devons maintenant trouver un moyen d'inverser le corps.

_Options possibles pour la symétrie :_.

- La commande ![](/images/PartDesign_Mirrored.svg) [PartDesign Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr") échoue car elle ne peut pas gérer les caractéristiques SheetMetal pour une raison inconnue. Cela ne fonctionne donc pas.
- La commande ![](/images/Part_Mirror.svg) [Part Objet en miroir](/Part_Mirror/fr "Part Mirror/fr") crée une pièce miroir, mais celle-ci n'est plus dépliable. Cela ne fonctionne pas non plus.
- La seule solution qui peut fonctionner est d'utiliser un clone. Celui-ci ne peut toujours pas être symétrisé, mais il peut utiliser la symétrie axiale (le tourner de 180°).
- Un autre moyen qui fonctionne est d'utiliser un objet de liaison.

**Symétrie utilisant un clone :**

1. Sélectionnez le corps dans l'arborescence.
2. Utilisez ![](/images/PartDesign_Clone.svg) [PartDesign Clone](/PartDesign_Clone/fr "PartDesign Clone/fr"). Cela ajoute un nouveau corps contenant un objet clone.  
   Pour appliquer un retournement de 180°, réglez Données**Angle** sous la propriété Placement du corps ou du clone sur 180°. (L'axe Z est par défaut et devrait convenir si vous avez commencé sur le plan XZ comme décrit).  
   ![Moitié clonée](/images/SheetMetal_Example-02b.png) ![](/images/Button_right.svg) ![Moitié clonée inversée](/images/SheetMetal_Example-02l.png)
3. Avec le corps toujours actif, utilisez une ![](/images/PartDesign_Boolean.svg) [PartDesign Opération booléenne](/PartDesign_Boolean/fr "PartDesign Boolean/fr") pour ajouter le corps du clone et fusionner les deux moitiés.  
   ![Moitiés fusionnées](/images/SheetMetal_Example-02c.png)
4. Activez le ![](/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr") pour obtenir un objet déplié.  
   ![Clip et objet déplié](/images/SheetMetal_Example-02m.png) ![Objet déplié](/images/SheetMetal_Example-02d.png)
5. C'est fait !

**Symétrie utilisant un objet de liaison :**

1. Sélectionnez le corps dans l'arborescence.
2. Utilisez la commande ![](/images/Std_LinkMake.svg) [Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr"). Cela ajoute un nouvel objet lien.
3. Dupliquez l'objet lien en fixant la propriété Données**Element Count** à 2.
4. Pour appliquer un retournement de 180°, définissez Données**Angle** sous la propriété Placement de l'un ou l'autre des objets sous-liés sur 180°. (L'axe Z est la valeur par défaut et devrait convenir si vous avez commencé sur le plan XZ comme décrit).
5. Sélectionnez les deux objets sous-liés dans l'arborescence.
6. Activez la fonction ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse/fr "Part Fuse/fr") pour fusionner les deux moitiés.  
   ![Moitiés fusionnées](/images/SheetMetal_Example-02c.png)
7. Activez la commande ![](/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr") pour obtenir un objet déplié.

![Clip et objet déplié](/images/SheetMetal_Example-02m.png) ![Objet déplié](/images/SheetMetal_Example-02d.png)

1. C'est fait !

## Collier oméga

![](/images/SheetMetal_Example-03.png)

![](/images/SheetMetal_Example-03a.png)
![](/images/SheetMetal_Example-03b.png)
![](/images/SheetMetal_Example-03.png)
![](/images/SheetMetal_Example-03c.png)

Processus de travail pour un collier oméga:
![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr"),
![](/images/PartDesign_Hole.svg) [PartDesign Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr"),
![](/images/PartDesign_Fillet.svg) [PartDesign Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr"),
![](/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr").

## Bol hexagonal

![](/images/SheetMetal_Example-04.png)

![](/images/SheetMetal_Example-04a.png)
![](/images/SheetMetal_Example-04b.png)
![](/images/SheetMetal_Example-04.png)
![](/images/SheetMetal_Example-04c.png)

Processus de travail pour un bol hexagonal :
![](/images/SheetMetal_AddBase.svg) [Tôle de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr"),
![](/images/SheetMetal_AddWall.svg) [Rebord](/SheetMetal_AddWall/fr "SheetMetal AddWall/fr"),
6x ![](/images/SheetMetal_AddCornerRelief.svg) [Grugeage](/SheetMetal_AddCornerRelief/fr "SheetMetal AddCornerRelief/fr"),
![](/images/SheetMetal_Unfold.svg) [Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr").

![](/images/SheetMetal_Example-04d.png)

Lorsqu'un grugeage d'angle est ajouté (côté droit), il peut être nécessaire d'ajuster la valeur de la propriété _Taille_.

## Pince à crayon

![](/images/SheetMetal_Example-05.png)

![](/images/SheetMetal_Example-05a.png)
![](/images/SheetMetal_Example-05b.png)
![](/images/SheetMetal_Example-05c.png)
![](/images/SheetMetal_Example-05d.png)
![](/images/SheetMetal_Example-05.png)
![](/images/SheetMetal_Example-05e.png)

Processus de travail pour une pince à crayon :
![](/images/SheetMetal_AddBase.svg) [Tôle de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr"),
![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"),
3x ![](/images/SheetMetal_AddWall.svg) [Rebord](/SheetMetal_AddWall/fr "SheetMetal AddWall/fr"),
![](/images/SheetMetal_Unfold.svg) [Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr").

## Exemple de dépliage

![](/images/SheetMetal_Example-06.png)

![](/images/SheetMetal_Example-06a.png)
![](/images/SheetMetal_Example-06b.png)
![](/images/SheetMetal_Example-06c.png)
![](/images/SheetMetal_Example-06.png)
![](/images/SheetMetal_Example-06d.png)

Processus de travail pour déplier:
![](/images/SheetMetal_AddBase.svg) [Tôle de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr"),
![](/images/SheetMetal_AddWall.svg) [Rebord](/SheetMetal_AddWall/fr "SheetMetal AddWall/fr"),
![](/images/SheetMetal_Extrude.svg) [Prolonger une face](/SheetMetal_Extrude/fr "SheetMetal Extrude/fr"),
![](/images/SheetMetal_Extrude.svg) [Prolonger une face](/SheetMetal_Extrude/fr "SheetMetal Extrude/fr"),
![](/images/SheetMetal_Unfold.svg) [Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr").

Pour la deuxième utilisation de **Extend Face**, une Esquisse avec deux contours est utilisée pour la forme de l'extension(s) et avec la valeur de "use subtraction" réglée à true, elle fournit la forme pour les découpes aussi.

## Blindage d'USB

![](/images/SheetMetal_Example-07.png)

![](/images/SheetMetal_Example-07a.png)
![](/images/SheetMetal_Example-07b.png)
![](/images/SheetMetal_Example-07c.png)
![](/images/SheetMetal_Example-07d.png)
![](/images/SheetMetal_Example-07.png)
![](/images/SheetMetal_Example-07e.png)

Processus de travail pour un blindage d'USB:
![](/images/SheetMetal_AddBase.svg) [Tôle de base](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr"),
![](/images/SheetMetal_Extrude.svg) [Prolonger une face](/SheetMetal_Extrude/fr "SheetMetal Extrude/fr"),
![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"),
![](/images/SheetMetal_Extrude.svg) [Prolonger une face](/SheetMetal_Extrude/fr "SheetMetal Extrude/fr"),
![](/images/SheetMetal_AddWall.svg) [Rebord](/SheetMetal_AddWall/fr "SheetMetal AddWall/fr"),
![](/images/SheetMetal_Unfold.svg) [Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr").

(La forme de la languette n'est qu'une vision artistique de ce qui pourrait être caché à l'intérieur d'une vraie prise).

## Propriétés de SheetMetal

Cette section tente d'expliquer les propriétés de chaque objet SheetMetal à l'aide d'images simples, le cas échéant.

### Objet BaseBend

![](/images/SheetMetal_Example-08a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08b.png)

Esquisse sélectionnée +
![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr")
→ Objet BaseBend avec les paramètres par défaut

![](/images/SheetMetal_Example-08b.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08c.png)

Modification de Données**length** : Longueur par défaut → Longueur réduite

![](/images/SheetMetal_Example-08d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08h.png)

Bascule de Données**Mid Plane** de `false` à `true` : Extrusion dans une seule direction → Extrusion symétrique

![](/images/SheetMetal_Example-08d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08e.png)

Bascule de Données**Reverse** de `false` à `true` : Direction par défaut → Direction inversée

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08f.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08g.png)

Sélection de Données**Bend Side** : `Outside`. (par défaut) → `Inside` → `Milieu`

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08i.png)

Modification de Données**radius** : Rayon par défaut → Rayon agrandi.  
Cette propriété est le rayon intérieur des pliures créées aux sommets où deux arêtes de l'esquisse ont une transition non tangentielle.

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08j.png)

Modification de Données**thickness** : Épaisseur par défaut → Épaisseur agrandie

### Objet Bend

Un objet Bend est constitué d'ensembles comprenant chacun un pli cylindrique et une bande plane. Chaque paire s'étend à partir d'un bord sélectionné d'une tôle.

![](/images/SheetMetal_Example-09a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09b.png)

Bords sélectionnés +
![](/images/SheetMetal_AddWall.svg) [Rebord](/SheetMetal_AddWall/fr "SheetMetal AddWall/fr") → Plier les objets avec les paramètres par défaut  
(Deux objets pliés dans deux corps distincts.)

Modifiez Données**radius** pour faire varier le rayon intérieur de tous les plis fournis par un objet Bend. (Voir l'objet BaseBend ci-dessus)

Modifiez Données**length** pour faire varier la longueur de toutes les bandes planes s'étendant depuis les plis d'un objet Bend.

: Ne confondez pas Données**length** avec une longueur de bride qui est la somme de cette longueur, du rayon et de l'épaisseur (90° uniquement).

![](/images/SheetMetal_Example-09b.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09c.png)

Faire passer Données**invert** de `false` à `true` : Brides par défaut (objets Bend ) → Brides inversées

![](/images/SheetMetal_Example-09c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09e.png)

Editer Données**angle** : Angle par défaut (90°) → Angle agrandi → Angle diminué

Nous n'avons pas à nous soucier de la coupe des bords, car **Auto Miter** est activé par défaut.  
Si elle était désactivée, le résultat ressemblerait à ceci :

![](/images/SheetMetal_Example-09m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09f.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09g.png)

Faites passer Données**Auto Miter** de `true` à `false` : Angle par défaut (90°) → Angle agrandi → Angle diminué.  
(Auto Miter n'a aucun effet sur les brides simples)

Pour réaliser manuellement l'onglet d'un bord de bride, on utilise **miterangle1 _et_** *miterangle2* :

![](/images/SheetMetal_Example-09m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09n.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09o.png)

Modifiez Données**miterangle1** et Données**miterangle2** : Pas d'onglet (par défaut) → Bords à onglets différents, angle positif → Bords à onglets symétriques, angles négatifs

Les onglets n'affectent que les bandes planes, pas les plis.

: (Prise en compte de l'ensemble du bord et ne peut donc pas être utilisé pour chanfreiner les bords des brides)

Pour montrer les différents choix de **Type de pliage**, nous introduisons un cuboïde auxiliaire qui extrude du même contour que la tôle et a la même hauteur que l'objet Bend (sa longueur de bride).

![](/images/SheetMetal_Example-09h.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09i.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09j.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09k.png)

Sélectionnez Données**Bend Type** : `Material Outside` (par défaut) → `Material Inside` → `Thickness Outside` → `Offset`

- Extérieur : Le pli commence au bord sélectionné (l'ensemble de l'objet Bend se trouve à l'extérieur du cuboïde).
- Intérieur : Le côté extérieur du pli se termine sur la surface du cuboïde (l'ensemble de l'objet Bend se trouve à l'intérieur du cuboïde).
- Épaisseur extérieure : Le côté intérieur du pli se termine sur la surface du parallélépipède (seule la bande planaire dépasse de la surface du parallélépipède).
- Décalage : Selon la valeur de Données**offset**, le pli est déplacé vers l'extérieur à partir de sa position par défaut.

: Une extension est insérée pour les valeurs positives (bande en surbrillance).
: Les valeurs négatives permettent de déplacer le pli vers l'intérieur.

Si nous ne voulons pas utiliser toute la longueur d'un bord, nous pouvons utiliser **gap1** et **gap2**.

![](/images/SheetMetal_Example-09c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09l.png)

Modifiez Données**gap1** et Données**gap2** : Brides par défaut → Brides avec des valeurs différentes pour gap1 et gap2.

Si la longueur d'un espace atteint ou dépasse la valeur de Données**min Relief Gap**, un grugeage sera ajouté à cet espace.  
Les grugeages sont contrôlés par Données**relief Type**, Données**reliefd** (profondeur du grugeage), et Données**reliefw** (largeur du grugeage) qui ne sont activés que lorsqu'une valeur d'écart est définie.

![](/images/SheetMetal_Example-09p.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09q.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09r.png)

Modifiez Données**reliefd** et Données**reliefw** : Valeurs par défaut → Profondeur du grugeage agrandi → Profondeur et largeur du grugeage agrandies

![](/images/SheetMetal_Example-09r.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09s.png)

Faites passer Données**relief Type** de `Rectangle` à `Round` : Grugeage rectangulaire par défaut → Grugeage rond

L'option ronde ne sera appliquée que si la profondeur du grugeage est supérieure à la largeur du grugeage.

Faites passer Données**Use Relief Factor** de `false` (valeur par défaut) à `true` pour définir automatiquement les valeurs de Données**reliefd** et Données**reliefw**. Ces deux valeurs sont définies sur l'épaisseur (héritée) de l'objet multipliée par la valeur de Données**Relief Factor**.

: Dans ce cas, l'option ronde est inutile, puisque la profondeur du grugeage est aussi grande que la largeur du grugeage. (Voir ci-dessus)

Une nouvelle propriété Données**Length Spec** [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") nous permet de choisir comment mesurer la longueur de l'objet Bend :

![](/images/SheetMetal_Example-09t.png)

Vue latérale de quatre brides de 120° avec une longueur par défaut (10 mm) et différentes valeurs de Données**Length Spec** :  
 `Leg` (par défaut), `Outer Sharp`, `Inner Sharp`, `Tangential`

Lorsque l'option `Tangential` est sélectionnée, la propriété Données**length** est l'équivalent de la longueur de la bride.

`Outer Sharp` et `Tangential` sont identiques pour des angles de 90°.

### Objet Extend

Un objet Extend permet de déplier une plaque de tôle sur une ou plusieurs faces ou bords sélectionnés.

![](/images/SheetMetal_Example-10a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10b.png)

Faces et bords sélectionnés +
![](/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude/fr "SheetMetal Extrude/fr")
→ Un objet Extend avec des paramètres par défaut.

Un premier problème se pose ici : bien que la propriété Données**Refine** soit mise à `true`, deux des extensions affichent toujours leurs lignes de couture. Seule l'extension du dernier élément sélectionné sera affinée.

Pour affiner toutes les extensions, elles doivent être créées séparément :

![](/images/SheetMetal_Example-10c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10f.png)

3x faces ou arêtes sélectionnées +
![](/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude/fr "SheetMetal Extrude/fr")
→ Trois objets Extend complètement affinés et avec des paramètres par défaut.

Les propriétés modifiées s'appliquent à toutes les arêtes énumérées dans les Données**base Object** associées de l'objet Extension.

Modifiez Données**length** pour ajuster la longueur de l'extension.

![](/images/SheetMetal_Example-10h.png) ![](/images/SheetMetal_Example-10g.png)

Modifiez Données**gap1** et Données**gap2** pour réduire la largeur de l'extension.  
A gauche : objet Extension avec 3 bords. A droite : un des objets Extension avec un seul bord.

Liez une esquisse à la propriété Données**Sketch** pour former une extension. Les propriétés Données**length**, Données**gap1** et Données**gap2** seront ignorées une fois l'esquisse liée. (Cela ne semble pas fonctionner avec des tôles encore non pliées).

![](/images/SheetMetal_Example-10i.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10j.png)

Une esquisse sélectionnée reposant sur le bord à prolonger → Extension résultante

Il est évident que l'arête sélectionnée pour l'objet Extend n'a pas d'importance, la forme du bord est modifiée partout où la géométrie de l'esquisse ressort, la nouvelle forme peut même contenir des parties déconnectées du bord d'origine. Les multiples contours ne posent aucun problème, mais le bord n'est pas découpé.

Cet exemple montre que les concepteurs sont responsables de leur construction et ne devraient pas se fier aux résultats de leurs outils, qui n'ont pas de sens dans ce cas. L'esquisse rattachée à un côté du bord est également problématique en raison du problème toponymique, mais pour cela une solution est en vue.

Mais il y a de meilleurs cas d'utilisation pour cet outil impliquant des formes presque fermées comme l'un des exemples de la page [SheetMetal Extrude](/SheetMetal_Extrude/fr "SheetMetal Extrude/fr") :

![](/images/SheetMetal_Example-10k.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10l.png)

Un profil presque fermé → L'extension ajoutée par défaut est fusionnée avec le côté opposé, créant un profil fermé (un tube) qui n'est pas dépliable

![](/images/SheetMetal_Example-10l.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10m.png)

Liez une esquisse rectangulaire à la propriété Données**Sketch** : profil fermé → Profil avec extension rectangulaire, encore fusionné

![](/images/SheetMetal_Example-10m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10n.png)

Changez Données**Use Subtraction** à `true` pour fournir un espace (à peine visible) par défaut entre l'objet Extension et le côté opposé, puis augmentez Données**Offset** pour élargir l'espace:  
Profilé fusionné → Profilé avec extension emboîtée, ce résultat final est dépliable

### Objet Fold

Un objet Fold est le résultat d'une plaque de tôle pliée selon une ligne donnée.

Modifier la propriété Données**Position** pour contrôler la position du pli par rapport à la ligne de pliage.

![](/images/SheetMetal_Example-10o.png)

Coupe transversale du pliage : la ligne de pliage se trouve sur la face supérieure de l'ébauche (noire) avec un décalage de 10 mm par rapport au bord, sa position est indiquée par un pentagone. Elle définit également l'intersection virtuelle de l'ébauche et de la paroi pliée

.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Examples/fr&oldid=1565564>"
