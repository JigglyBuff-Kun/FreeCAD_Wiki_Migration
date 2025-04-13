---
title: Part Coupes
---
|  |
| --- |
| Part Coupes |
| Emplacement du menu |
| Part → Créer des coupes... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Section](/Part_Section/fr "Part Section/fr") |
|  |

## Description

L'utilitaire **Coupes** crée une ou plusieurs coupes transversales à travers la forme sélectionnée, parallèlement à l'un des plans globaux par défaut (XY, XZ ou YZ).

## Utilisation

1. Sélectionnez une forme.
2. Cliquez sur le bouton ![](/images/Part_CrossSections.svg) **Créer des coupes...**.
3. Définissez le plan guide.
4. Définissez la position (hauteur de la coupe transversale).
5. Vous pouvez cocher **Sections** pour créer plus d'une section transversale :
   * Cochez *Des deux côtés* pour répartir les sections transversales de chaque côté de l'emplacement du plan guide.
   * Définissez le nombre.
6. Cliquez sur OK.

## Remarques

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être utilisés comme objets sources. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* L'objet résultant n'est pas paramétrique, c'est-à-dire qu'il n'est pas lié à la forme originale.
* Un seul objet est créé, même pour plusieurs coupes.

## Exemple

![Sélectionner un objet](/images/SectionCross1.png)

![Fenêtre de dialogue](/images/SectionCross2.png)

![Résultat](/images/SectionCross3.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CrossSections/fr&oldid=1469853>"