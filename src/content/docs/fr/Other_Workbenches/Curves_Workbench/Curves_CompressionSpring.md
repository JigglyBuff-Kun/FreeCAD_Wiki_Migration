---
title: Curves Ressort de compression
---
|  |
| --- |
| Curves Ressort de compression |
| Emplacement du menu |
| Curves → Compression Spring |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Curves_CompressionSpring.svg) Curves Ressort de compression crée un ressort de compression.

## Utilisation

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_CompressionSpring.svg) Compression Spring.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_CompressionSpring.svg) Compression Spring** dumenu.
2. Un objet **CompSpring** est créé, ne montrant que la trajectoire (fil).
3. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour afficher la forme solide et ajuster les propriétés correspondantes (voir Propriétés ci-dessous).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **CompSpring** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Comp Spring

* Données**Diameter** (`Float`) : diamètre du ressort.
* Données**Length** (`Float`) : longueur du ressort.
* Données**Reverse Helix** (`Bool`) : pas à gauche si vrai.
* Données**Turns** (`Integer`) : nombre de tours.
* Données**Wire Diameter** (`Float`) : diamètre du fil du ressort.

Settings

* Données**Flatness** (`Integer`) : planéité des extrémités du ressort de 0 à 4.
* Données**Wire Output** (`Bool`) : permet d'obtenir une forme de fil.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CompressionSpring/fr&oldid=1566380>"