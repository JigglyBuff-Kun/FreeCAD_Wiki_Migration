---
title: Sketcher Polyligne
---
|  |
| --- |
| Sketcher Polyligne |
| Emplacement du menu |
| Esquisse → Géométries d'esquisse → Créer une polyligne |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G M |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_CreatePolyline.svg) Sketcher Polyligne crée une série de segments de lignes et d'arcs reliés par leurs extrémités. L'outil dispose de plusieurs modes.

![](/images/Sketcher_PolylineExample1.png)

Polyligne commençant par une ligne, un arc tangent, un arc perpendiculaire puis une ligne tangente.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_CreatePolyline.svg) Créer une polyligne.
   * Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_CreatePolyline.svg) Créer une polyligne** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_CreatePolyline.svg) Créer une polyligne** du menu contextuel.
   * Utilisez le raccourci clavier : G puis M.
2. Le curseur se transforme en croix avec l'icône de l'outil.
3. Les modes de l'outil nécessitent un segment précédent. Effectuez l'une des opérations suivantes :
   * Choisissez deux points pour définir un segment de ligne.
   * Choisissez l'extrémité d'un segment de ligne ou d'arc existant (Les [contraintes automatiques](/Sketcher_Workbench/fr#Contraintes_automatiques "Sketcher Workbench/fr") doivent être activées).
4. Vous pourvez appuyer sur la touche M une ou plusieurs fois pour passer d'un mode à l'autre pour le segment suivant. Les modes disponibles sont les suivants :
   * Ligne perpendiculaire au segment précédent.
   * Ligne tangentielle au segment précédent (c'est le mode initial si le segment précédent est un arc).
   * Arc tangentiel au segment précédent.
   * Arc perpendiculaire (gauche) au segment précédent.
   * Arc perpendiculaire (droite) au segment précédent.
   * Ligne uniquement connectée au segment précédent.
5. Lorsque vous êtes dans l'un des modes d'arc, vous pouvez maintenir la touche Ctrl enfoncée pour aimanter l'arc par incrémentation de 45° par rapport au segment précédent.
6. Choisissez le dernier point du segment.
7. Vous pouvez répéter cette opération pour créer d'autres segments.
8. Pour terminer la saisie, effectuez l'une des opérations suivantes :
   * Accrochez au point de départ pour créer une polyligne fermée.
   * Cliquez avec le bouton droit de la souris ou appuyez sur Échap pour créer une polyligne ouverte.
9. Les segments de la polyligne ont été créés et les contraintes applicables ont été ajoutées.
10. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
    1. Il est possible de continuer à créer des polylignes.
    2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreatePolyline/fr&oldid=1411028>"