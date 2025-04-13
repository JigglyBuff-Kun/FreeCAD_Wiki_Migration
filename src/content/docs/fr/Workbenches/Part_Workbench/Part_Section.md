---
title: Part Section
---
|  |
| --- |
| Part Section |
| Emplacement du menu |
| Part → Créer une section |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Coupes](/Part_CrossSections/fr "Part CrossSections/fr") |
|  |

## Description

La commande [![](/images/Part_Section.svg)](//fr "/fr ") **Part Section** crée une géométrie filaire aux intersections de deux objets. Le résultat est entièrement paramétrique.

* Une intersection de deux solides/faces donne lieu à une ou plusieurs lignes de section.
* L'intersection de deux lignes, ou d'une ligne et d'un solide/face, donne un ou plusieurs points.

![](/images/PartSection1_it.png)

Un cube sectionné avec un cylindre

## Utilisation

1. Sélectionnez deux objets.
2. Le premier objet sera la propriété Données**Base** de la section, mais l'ordre de sélection n'a aucune incidence sur le résultat.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/f/f7/Part_Section.svg) Créer une section.
   * Sélectionnez l'option **Part → [![](/images/f/f7/Part_Section.svg)](//fr "/fr") Créer une section** du menu.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet PartDesign Section est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Base** (`Link`) : lien vers le premier objet.
* Données**Tool** (`Link`) : lien vers le deuxième objet.

Boolean

* Données (hidden)**History** (`ShapeHistory`) : "historique de la forme".
* Données**Refine** (`Bool`) : "affiner la forme (nettoyer les arêtes redondantes) après cette opération booléenne". La valeur par défaut est déterminée par la préférence **Affiner les modèles automatiquement après une opération sur une esquisse**. Voir [PartDesign Préférences](/PartDesign_Preferences/fr#G.C3.A9n.C3.A9ral "PartDesign Preferences/fr").

Section

* Données**Approximation** (`Bool`) : approxime les arêtes générées.

## Liens

Pour créer des coupes depuis un plan de coupe, voir ![](/images/Part_CrossSections.svg) [Part Coupes](/Part_CrossSections/fr "Part CrossSections/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Section/fr&oldid=1514657>"