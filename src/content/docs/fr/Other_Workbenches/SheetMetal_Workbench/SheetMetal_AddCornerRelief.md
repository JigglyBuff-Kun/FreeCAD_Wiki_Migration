---
title: SheetMetal Grugeage
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| SheetMetal Grugeage                                              |
| Emplacement du menu                                              |
| SheetMetal → Créer un grugeage à un coin                         |
| Ateliers                                                         |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut                                             |
| C R                                                              |
| Introduit dans la version                                        |
| -                                                                |
| Voir aussi                                                       |
| _Aucun_                                                          |
|                                                                  |

## Description

La commande ![](/images/SheetMetal_AddCornerRelief.svg) **SheetMetal Grugeage** ajoute un grugeage à un coin. Un grugeage est généralement créé dans les coins où deux pliures se rencontrent, mais la commande peut également créer un grugeage dans un coin ouvert.

La commande ne peut créer qu'un seul grugeage à la fois.

![](/images/SheetMetal_AddCornerRelief-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-02.png)

Coin par défaut de deux pliures → Coin avec un grugeage

![](/images/SheetMetal_AddCornerRelief-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-04.png)

Coin par défaut de deux pliures → Coin ouvert avec un grugeage

## Utilisation

1. Sélectionnez deux arêtes d'un coin.
2. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_AddCornerRelief.svg) Créer un grugeage à un coin.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddCornerRelief.svg) Créer un grugeage à un coin** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddCornerRelief.svg) Créer un grugeage à un coin** dans le menu contextuel.
   - Utilisez le raccourci clavier : C puis R.
3. Un objet **CornerRelief** est créé et le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés du grugeage** s'ouvre (introduit dans la version 0.5.00).

   : Un nouveau grugeage est ajouté à l'angle sélectionné.

4. Vous pouvez appuyer sur le bouton Sélectionner pour resélectionner les arêtes.
   - Appuyez sur le bouton Aperçu pour terminer la sélection et afficher les modifications.
5. Vous pouvez également re-sélectionner l'un des boutons **Type de grugeage** :
   - Le bouton **Circulaire** crée une découpe ronde du grugeage.
   - La bouton **Carré** crée une découpe en grugeage carrée.
   - Le bouton **Esquisse** crée une découpe basée sur une esquisse.
     1. Appuyez sur le bouton Esquisse pour sélectionner l'esquisse.
     2. Vous pouvez ajuster les paramètres **Décalage en X** et **Décalage en Y**.
6. Vous pouvez activer/désactiver les boutons **Taille du grugeage** :
   - Sélectionnez **Absolu** et entrez la **Taille du grugeage** en mm.
   - Sélectionnez **Relatif** et entrez le **Facteur d'échelle**.
7. Vous pouvez ajuster le **Facteur K**.
8. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
9. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Panneau des tâches

Un panneau de tâches a été introduit dans la version 0.5.00

Double-cliquez sur un objet CornerRelief existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour ouvrir de nouveau le panneau des tâches et modifier les paramètres.

![](/images/SheetMetal_AddCornerRelief-Task.png)

- Sélection de base : relie les arêtes sélectionnées à la propriété **base Object**.
- Les boutons **Circulaire**, **Carré** et **Esquisse** en combinaison avec les boutons **Absolu** et **Relatif** définissent la propriété **Relief Sketch**.
- Si le bouton **Esquisse** est sélectionné, les options suivantes sont affichées :
  1. Esquisse : relie une esquisse à la propriété **Sketch**.
  2. **Décalage en X** : définit la propriété **XOffset**.
  3. **Décalage en Y** : définit la propriété **YOffset**.
- Si le bouton **Absolu** est sélectionné :

  : **Taille du grugeage** : définit la propriété **Size**.

Si le bouton **Relatif** est sélectionné :

- : '“'Facteur d'échelle”_: définit la propriété **Size Ratio**._
- **Facteur K** : définit la propriété **kfactor**.

## Formes de grugeage

La forme d'un grugeage de coin peut être modifiée en changeant les valeurs de ses propriétés :

La valeur de la propriété Données**ReliefSketch** peut être choisie parmi une liste : `Circle` (par défaut), `Circle-Scaled`, `Square`, `Square-Scaled`, `Sketch`.

- `Circle` et `Square` utilisent la valeur de la propriété Données**Size** pour mettre le grugeage à l'échelle.
- `Circle-Scaled` et `Square-Scaled` utilisent la valeur de la propriété Données**Size Ratio** pour mettre le grugeage à l'échelle.
- `Sketch` active l'utilisation de l'esquisse listée dans la propriété Données**Sketch** pour définir la forme du grugeage.

![](/images/SheetMetal_AddCornerRelief-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-07.png)

Grugeage circulaire (paramètres par défaut) → Grugeage carré (paramètres par défaut) → Grugeage basé sur une esquisse

## Un regard plus attentif sur les tailles de grugeage

Pour avoir une idée de comment et où le grugeage est placé, nous déplions un coin par défaut sans grugeage.

![](/images/SheetMetal_AddCornerRelief-08.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-09.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-10.png)

Coin par défaut de deux pliures → Coin du solide déplié → Coin vu de dessus.

L'étape suivante consiste à ouvrir l'esquisse de dépliage, à créer un cercle à travers 3 points et à ajouter une dimension de rayon.  
Maintenant, nous ajoutons un grugeage d'angle, créons le solide de dépliage correspondant et ouvrons à nouveau la première esquisse de dépliage.  
L'ajout d'un cercle concentrique de 3 mm de rayon révèle que nous avons trouvé comment le cercle interne est positionné car le nouveau cercle s'insère parfaitement dans la découpe du solide de dépliage du grugeage.

![](/images/SheetMetal_AddCornerRelief-11.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-12.png)

Coin par défaut avec esquisse dépliée → Coin avec grugeage par défaut et la même esquisse dépliée

Si vous essayez de définir la propriété Données**Size** à une valeur inférieure à la valeur déterminée de 1,67 mm, vous obtiendrez une erreur ; toute valeur supérieure devrait fonctionner correctement.

En passant à Circle-Scaled et en créant un autre solide non plié, on constate que 1,67 mm est également la base de la propriété Données**Size Ratio**.

## Remarques

- Le facteur k définit l'emplacement de l'axe neutre dans l'épaisseur d'une tôle, conformément à la norme ANSI.
- La sélection accepte plus de deux arêtes, mais seules les deux premières sont prises en compte.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal CornerRelief est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**ReliefSketch** (`Enumeration`) : type de grugeage d'angle. `Circle` (par défaut), `Circle-Scaled`, `Square`, `Square-Scaled`, `Sketch`.
- Données**Size** (`Length`) : taille de la forme. Valeur par défaut : `3,00 mm`.
- Données**Size Ratio** (`Float`) : rapport de taille de la forme. Valeur par défaut : `1,50`.
- Données**base Object** (`LinkSub`) : objet de base. Liens vers la paire d'arêtes définissant la position de la contre-dépouille d'angle.
- Données**kfactor** (`FloatConstraint`) : position de l'axe neutre. Valeur par défaut : `0,50`.

Parameters1

- Données**Sketch** (`Link`) : esquisse du grugeage.
- Données**XOffset** (`Distance`) : espace par rapport au premier côté. Valeur par défaut : `0,00 mm`.
- Données**YOffset** (`Distance`) : espace par rapport au deuxième côté. Valeur par défaut : `0,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCornerRelief/fr&oldid=1545955>"
