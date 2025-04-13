---
title: Sketcher Copie carbone
---
|  |
| --- |
| Sketcher Copie carbone |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Créer une copie carbone |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G W |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_CarbonCopy.svg) Sketcher Copie carbone copie toutes les géométries et contraintes d'une autre esquisse dans l'esquisse active.

Les contraintes dimensionnelles qui existaient avant la fonction de copie restent liées aux contraintes dimensionnelles de l'esquisse d'origine via les [expressions](/Expressions/fr "Expressions/fr").

## Utilisation

1. Assurez-vous d'être en mode édition d'une [esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") existant. Cette esquisse est la cible de l'opération.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_CarbonCopy.svg) Créer une copie carbone.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_CarbonCopy.svg) Créer une copie carbone** dans le menu.
   * Utilisez le raccourci clavier : G puis W.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Choisissez une arête dans une autre esquisse. Cette esquisse est la source de l'opération. Voir [Remarques](#Remarques).
5. Les éléments géométriques ainsi que les contraintes sont copiés dans l'esquisse active.
6. Cet outil fonctionne toujours en mode continu : vous pouvez copier d'autres esquisses.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

* Dans l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), il est possible de sélectionner l'esquisse à copier au carbone depuis l'extérieur du [Body](/PartDesign_Body/fr "PartDesign Body/fr") de l'esquisse active, mais uniquement si la touche Ctrl est maintenue enfoncée pendant la sélection.
* L'esquisse à copier doit être parallèle à l'esquisse active. Si ce n'est pas le cas, les touches Ctrl et Alt doivent être maintenues enfoncées pendant la sélection. Cela fonctionne également pour les esquisses situées en dehors du corps actif.
* Si le [mode de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") est actif, la géométrie copiée est créée en tant que géométrie de construction.
* L'esquisse complète est copiée, il n'est pas possible de n'en sélectionner qu'une partie. Mais après la copie, vous pouvez supprimer les éléments non désirés.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CarbonCopy/fr&oldid=1521494>"