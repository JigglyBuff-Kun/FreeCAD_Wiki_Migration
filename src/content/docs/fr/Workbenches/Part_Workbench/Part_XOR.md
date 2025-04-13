---
title: Part OU exclusif
---

|                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Part OU exclusif                                                                                                                                                                                                                                                         |
| Emplacement du menu                                                                                                                                                                                                                                                      |
| Part → Scinder → OU exclusif                                                                                                                                                                                                                                             |
| Ateliers                                                                                                                                                                                                                                                                 |
| [Part](/Part_Workbench/fr "Part Workbench/fr")                                                                                                                                                                                                                           |
| Raccourci par défaut                                                                                                                                                                                                                                                     |
| _Aucun_                                                                                                                                                                                                                                                                  |
| Introduit dans la version                                                                                                                                                                                                                                                |
| 0.17                                                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                                               |
| [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr"), [Part Scinder](/Part_Slice/fr "Part Slice/fr"), [Part Jointure](/Part_CompJoinFeatures/fr "Part CompJoinFeatures/fr"), [Part Opérations booléennes](/Part_Boolean/fr "Part Boolean/fr") |
|                                                                                                                                                                                                                                                                          |

## Description

La commande ![](/images/Part_XOR.svg) **Part XOR** supprime la géométrie partagée par un nombre pair d'objets et laisse un espace vide entre les objets concernés. Pour deux objets, elle représente une version symétrique de [Part Soustraction](/Part_Cut/fr "Part Cut/fr").

![](/images/Part_XOR-01.png) ![](/images/Button_right.svg)
![](/images/Part_XOR-02.png)

Trois objets se chevauchant → Objet résultant

## Utilisation

1. Sélectionnez deux objets ou plus. Il est également possible de sélectionner un [Part Composé](/Part_Compound/fr "Part Compound/fr") contenant deux objets ou plus.
2. Il existe plusieurs façons de lancer la commande :
   - Sélectionnez l'option **Part → Scinder → ![](/images/Part_XOR.svg) OU exclusif** du menu.
   - Appuyez sur le bouton ![](/images/Part_XOR.svg) OU exclusif.

## Remarques

- Les espaces vides sont difficiles à détecter si les objets sélectionnés n'ont pas de faces coplanaires. Pour vérifier le résultat du OU exclusif, on peut alors utiliser [Std Couper selon des plans](/Std_ToggleClipPlane/fr "Std ToggleClipPlane/fr").

## Propriétés

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_XOR/fr&oldid=1471326>"
