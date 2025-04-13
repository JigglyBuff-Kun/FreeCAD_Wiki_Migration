---
title: SheetMetal Découper des trous
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| SheetMetal Découper des trous |
| Emplacement du menu |
| SheetMetal → Découper des trous |
| Ateliers |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut |
| M S |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/SheetMetal_SketchOnSheet.svg) SheetMetal Découper des trous découpe des trous sur des parois pliées d'un objet en tôle. Pour la disposition des trous, une ![](/images/Workbench_Sketcher.svg) [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") est utilisée.

Contrairement à la commande ![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") où les trous sont simplement découpés suivant la normale à l'esquisse (axe z local), cet outil agit comme s'il dépliait l'objet en tôle, découpait les trous et repliait l'objet.

## Utilisation

1. Sélectionnez une **face plane**.
2. Ajoutez une ![](/images/Workbench_Sketcher.svg) [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") coplanaire (c'est-à-dire située sur le même plan) à la sélection pour la **disposition des trous** (de préférence à partir de la [vue en arborescence](/Tree_view/fr "Tree view/fr")).
3. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/SheetMetal_SketchOnSheet.svg) Découper des trous.
   * Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Découper des trous** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Découper des trous** dans le menu contextuel.
   * Utilisez le raccourci clavier : M puis S.
4. Un objet **SketchOnSheet** sera créé, composé de trous partant du plan sélectionné et suivant les pliages et les parois.
5. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Remarques

* L'esquisse peut contenir plus d'un contour.
* Tout contour doit au moins toucher la face planaire, sinon il ne fera pas de trou du tout.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal SketchOnSheet est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

* Données**Sketch** (`Link`) : esquisse sur tôle. Lien vers l'esquisse de la disposition des trous/découpe.
* Données**base Object** (`LinkSub`) : objet de base. Lien vers la face plane où commence la découpe.
* Données**kfactor** (`FloatConstraint`) : espace par rapport au côté gauche. Valeur par défaut : `0,50`.

## Exemple

![](/images/SheetMetal_SketchOnSheet-05.png)

Un simple bidule

### Préparation

Ce bidule est constitué d'un objet en tôle pliée auquel on a ajouté des trous.  
Et donc il faut préparer à l'avance une esquisse de contour ouvert pour la tôle et une esquisse pour la disposition des trous.  
Une ligne droite de la première esquisse doit être coplanaire à l'autre plan de l'esquisse, cela permettra d'obtenir une esquisse et une face coplanaires utilisées dans les étapes suivantes.

![](/images/SheetMetal_SketchOnSheet-01.png)

Seulement un contour et une disposition des trous

### Déroulement des tâches

1. 1. Créez un objet en tôle pliée
   2. Sélectionnez l'esquisse **contour**  
      ![](/images/SheetMetal_SketchOnSheet-02.png)
   3. Appuyez sur le bouton ![](/images/SheetMetal_AddBase.svg) [Créer une paroi/tôle](/SheetMetal_AddBase/fr "SheetMetal AddBase/fr")  ou utilisez le raccourci clavier : C puis F.  
      ![](/images/SheetMetal_SketchOnSheet-03.png)
   4. Découpez des trous
   5. Sélectionnez la **face plane**.
   6. Sélectionnez l'esquisse **disposition des trous**  
      ![](/images/SheetMetal_SketchOnSheet-04.png)
   7. Appuyez sur le bouton ![](/images/SheetMetal_SketchOnSheet.svg) Découper des trous ou utilisez le raccourci clavier : M puis S.  
      ![](/images/SheetMetal_SketchOnSheet-05.png)  
         
       C'est fait!
2. Quelques conseils
   1. Vérifier si l'épaisseur de l'objet plié est construite sur le côté droit.  
      ![](/images/SheetMetal_SketchOnSheet-06.png)   
         
      Le contour jaune doit se trouver sur la face supérieure du pli inférieur (comme indiqué).  
      Pour inverser la direction, définissez la valeur de la propriété **Bend Side** (Outside <-> Inside).
   2. **Les formes de trous** ne touchant pas la face plane utilisée ne découperont pas de trous dans l'objet plié.  
       ![](/images/SheetMetal_SketchOnSheet-07.png)  
      Le rectangle inférieur qui touche à peine ladite face découpe un trou alors que la forme de fente supérieure ne le fait pas.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_SketchOnSheet/fr&oldid=1544998>"