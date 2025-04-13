---
title: Draft Surligner des sous éléments
---
|  |
| --- |
| Draft Surligner des sous éléments |
| Emplacement du menu |
| Modification → Surligner des sous éléments |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr") |
| Raccourci par défaut |
| H S |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Draft Déplacer](/Draft_Move/fr "Draft Move/fr"), [Draft Rotation](/Draft_Rotate/fr "Draft Rotate/fr"), [Draft Échelle](/Draft_Scale/fr "Draft Scale/fr") |
|  |

## Description

La commande ![](/images/Draft_SubelementHighlight.svg) **Draft Surligner des sous éléments** met temporairement en évidence des objets sélectionnés ou des objets de base d'objets sélectionnés. Elle est destinée à être utilisée avec le mode sous-élément des commandes [Draft Déplacer](/Draft_Move/fr "Draft Move/fr"), [Draft Pivoter](/Draft_Rotate/fr "Draft Rotate/fr") ou [Draft Mettre à l'échelle](/Draft_Scale/fr "Draft Scale/fr"). Actuellement, le mode sous-élément ne fonctionne correctement que pour les [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et les [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").

![](/images/Draft_SubelementHighlight_example.png)

Un Arch mur dont la base, une Draft Polyligne, a été mis en évidence.

## Utilisation

1. Vous pouvez sélectionner une ou plusieurs [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr"), ou des objets dont les objets Données**Base** sont des [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou des [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_SubelementHighlight.svg) Surligner des sous éléments.
   * Sélectionnez l'option **Modification → ![](/images/Draft_SubelementHighlight.svg) Surligner des sous-éléments** du menu.
   * Utilisez le raccourci clavier : H puis S.
3. Si vous n'avez pas encore sélectionné d'objet : sélectionnez un objet dans la [vue 3D](/3D_view/fr "3D view/fr").
4. Les objets sélectionnés sont rendus visibles (si nécessaire), leur Vue**Line Color** et Vue**Point Color** deviennent rouges et leur Vue**Point Size** devient `10`.
5. Il est conseillé de désélectionner maintenant la sélection existante, par exemple en cliquant sur un point aléatoire dans la [vue 3D](/3D_view/fr "3D view/fr").
6. Sélectionnez un ou plusieurs sous-éléments, arêtes ou points, des objets qui ont été marqués en rouge.
7. Invoquez [Draft Déplacer](/Draft_Move/fr "Draft Move/fr"), [Draft Pivoter](/Draft_Rotate/fr "Draft Rotate/fr") ou [Draft Mettre à l'échelle](/Draft_Scale/fr "Draft Scale/fr").
8. Basculez le mode sous-élément dans le panneau des tâches de cette commande en cochant la case **Modifier les sous-éléments**.
9. Modifiez les sous-éléments sélectionnés et terminez la commande Draft Modifier.
10. Appuyez sur Échap pour annuler les modifications visuelles temporaires des objets.

## Remarques

* Si des objets ont été mis en évidence avec cette commande, les modifications visuelles temporaires doivent être annulées avant d'enregistrer et de rouvrir le fichier.
* Les objets surlignés ne doivent pas être copiés si le mode sous-élément est désactivé. Les modifications visuelles temporaires ne peuvent pas être annulées pour les copies créées de cette manière.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SubelementHighlight/fr&oldid=1474771>"