---
title: Spreadsheet Alias
---
|  |
| --- |
| Spreadsheet Alias |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| [Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr") |
| Raccourci par défaut |
| Ctrl+Maj+A |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Spreadsheet_SetAlias.svg) **Spreadsheet Alias** ouvre une boîte de dialogue pour configurer un alias pour une cellule. Au lieu d'utiliser l'exact nom de la cellule tel que A2, B3 ou C4, un nom personnalisé peut être utilisé.

## Utilisation

1. Assurez-vous qu'il existe une [feuille de calcul](/Spreadsheet_CreateSheet/fr "Spreadsheet CreateSheet/fr") active.
2. Sélectionnez une cellule.
3. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Spreadsheet_SetAlias.svg) Alias.
   * Utilisez le raccourci clavier : Ctrl+Maj+A.
4. Saisissez un alias :
   * Seuls les caractères alphanumériques et les traits de soulignement (`A` à `Z`, `a` à `z`, `0` à `9` et `_`) sont autorisés.
   * Le premier caractère doit être une lettre.
   * L'utilisation de 1 ou 2 lettres majuscules suivies de 1 à 5 chiffres, par exemple `AB123`, n'est pas autorisée car elle est considérée comme une adresse de cellule.
   * Les séquences de caractères qui sont des unités ne sont pas autorisées. Par exemple, `W` est un alias invalide car il s'agit de l'unité de [Watt](https://fr.wikipedia.org/wiki/Watt). Comme FreeCAD supporte de nombreuses unités, il est préférable d'éviter les alias courts. Voir [Expressions](/Expressions/fr#Unit.C3.A9s "Expressions/fr").
   * L'utilisation des constantes mathématiques `pi` et `e` comme alias conduira à des erreurs et doit être évitée.
   * N'utilisez pas d'espaces dans les alias, cela créerait également des erreurs.

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_SetAlias/fr&oldid=1530019>"