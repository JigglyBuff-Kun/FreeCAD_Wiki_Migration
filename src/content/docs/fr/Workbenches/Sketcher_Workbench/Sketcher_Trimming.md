---
title: Sketcher Ajuster
---
|  |
| --- |
| Sketcher Ajuster |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Ajuster une arête |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G T |
| Introduit dans la version |
| 0.12 |
| Voir aussi |
| [Sketcher Diviser](/Sketcher_Split/fr "Sketcher Split/fr"), [Sketcher Prolonger](/Sketcher_Extend/fr "Sketcher Extend/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_Trimming.svg) Sketcher Ajuster ajuste une arête aux intersections les plus proches avec d'autres arêtes. Si l'arête sélectionnée ne croise pas d'autres arêtes, elle sera supprimée.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_Trimming.svg) Ajuster une arête.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_Trimming.svg) Ajuster une arête** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_Trimming.svg) Ajuster une arête** du menu contextuel.
   * Utilisez le raccourci clavier : G puis T.
2. S'il y a une précédente sélection, elle est effacée. L'outil n'accepte pas de présélection.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Il existe deux modes :
   * Ajustage par simple clic :
     1. Déplacez le curseur sur une partie de l'arête à ajuster.
     2. L'arête est mis en évidence et les points d'ajustage sont marqués par des cercles temporaires.
     3. Cliquez pour confirmer.
     4. L'arête est ajusté aux points marqués.
   * Maintenir et faire glisser l'ajustage : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Maintenir le bouton gauche de la souris enfoncé.
     2. Déplacez le curseur sur les parties des arêtes à ajuster.
     3. L'ajustage s'effectue immédiatement.
     4. Relâchez le bouton gauche de la souris.
5. Si une partie est ajustée, les contraintes existantes applicables sont transférées à la nouvelle arête résultante. Des [contraintes Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") sont ajoutées entre le(s) point(s) d'extrémité de l'arête ajustée et le(s) arête(s) découpé(s).
6. Cet outil fonctionne toujours en mode continu : il est possible de continuer à ajuster des arêtes.
7. Pour terminer, cliquez dans une zone vide de la [vue 3D](/3D_view/fr "3D view/fr"), cliquez avec le bouton droit de la souris, ou appuyez sur Échap ou démarrez un autre outil de création de géométrie ou de contrainte.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Trimming/fr&oldid=1415450>"