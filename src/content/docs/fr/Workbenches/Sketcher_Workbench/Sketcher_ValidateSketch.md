---
title: Sketcher Valider une esquisse
---
|  |
| --- |
| Sketcher Valider une esquisse |
| Emplacement du menu |
| Esquisse → Valider une esquisse... |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ValidateSketch.svg) Sketcher Valider une esquisse permet d'analyser et de réparer une esquisse qui n'est plus modifiable ou d'ajouter des [contraintes de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") manquantes à une esquisse créée à partir de géométrie importée, par exemple de fichiers DXF. Il peut aussi être utile pour localiser une coïncidence manquante à une esquisse native qui génère une erreur en tentant d'appliquer une fonction PartDesign à celle-ci.

![](/images/Sketcher_ValidateSketch_taskpanel.png)

Le panneau des tâches Validation de l'esquisse

## Utilisation

1. Cet outil ne peut pas être utilisé lorsqu'une esquisse est en mode édition. Pour quitter le mode édition, voir [Sketcher Quitter l'esquisse](/Sketcher_LeaveSketch/fr "Sketcher LeaveSketch/fr").
2. Sélectionnez une esquisse.
3. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le ![](/images/Sketcher_ValidateSketch.svg) Valider l'esquisse....
   * Sélectionnez le bouton **Esquisse → ![](/images/Sketcher_ValidateSketch.svg) Valider l'esquisse...** du menu.
4. Le panneau de tâches **Validation de l'esquisse** s'ouvre. Voir [Options](#Options) pour plus d'informations.
5. Appuyez sur le bouton Fermer pour terminer.

## Options

### Coincidences manquantes

Trouve les coïncidences manquantes pour les sommets qui se chevauchent et les ajoute. Appuyez sur le bouton Rechercher. Une fenêtre de dialogue apparaîtra pour indiquer combien de coïncidences manquantes ont été trouvées. Elles seront affichées dans la vue 3D sous forme de croix jaunes. Appuyez sur OK pour fermer la fenêtre de dialogue, puis appuyez sur le bouton Réparer pour ajouter les coïncidences manquantes.

Si nécessaire, définissez une valeur de tolérance supérieure dans le champ déroulant.

Appuyez sur Surligner les sommets posant problème pour mettre en évidence les sommets qui sont en dehors de cette tolérance.

Cette tolérance est utilisée par le processus Rechercher/Réparer.

Laissez la case "Ignorer les géométries de construction" cochée pour ignorer la géométrie de construction dans l'analyse.

### Contraintes non valides

Vérifie les contraintes mal faites.

Par exemple, s'il y a une contrainte Cercle-Ligne-Tangente mais qu'elle fait référence à deux lignes, elle est considérée comme non valable.

(Cela se produit parfois en raison du [problème de dénomination topologique](/Topological_naming_problem/fr "Topological naming problem/fr"), c'est-à-dire que la géométrie externe change de type).

Effectue également d'autres contrôles, par exemple pour les liens vides.

### Géométrie dégénérée

Une géométrie dégénérée peut résulter des actions du solveur dans une esquisse.

Par exemple, si une ligne est obligée de se raccourcir pour devenir presque un point.

Autres exemples : une ligne de longueur zéro ou un cercle/arc de rayon zéro.

### Géométrie externe inversée

Une géométrie externe inversée peut se produire parce que le traitement de la géométrie inversée a été modifié autour de la révision 0.15.

Ce processus peut être utile si les esquisses à géométrie externe ne peuvent être résolues en raison de ces changements.

### Contrainte de verrouillage d'orientation

Les contraintes tangentes et perpendiculaires sont mises en œuvre (via-point).

En interne, elles fonctionnent en contraignant l'angle entre les vecteurs tangents. Avec une contrainte de tangente par exemple, l'angle peut être de 0 ou 180 degrés (vecteurs co-dirigés ou opposés). L'angle réel est mémorisé dans les données de contrainte ("l'orientation de la contrainte est verrouillée"), cela protège contre le retournement. Mais l'angle peut être effacé ("déverrouillage d'orientation de la contrainte") ou mis à jour. Ces outils font exactement cela.

Le mécanisme de verrouillage fonctionne généralement bien et cet outil ne devrait pas être nécessaire. **Il ne doit être utilisé qu'après avoir effectué une sauvegarde du document ouvert.**

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ValidateSketch/fr&oldid=1495602>"