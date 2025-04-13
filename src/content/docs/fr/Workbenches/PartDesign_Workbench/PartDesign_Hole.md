---
title: PartDesign Perçage
---
|  |
| --- |
| PartDesign Perçage |
| Emplacement du menu |
| PartDesign → Créer une fonction soustractive → Perçage |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") |
|  |

## Description

La fonction **Perçage** crée un ou plusieurs trous à partir des cercles et des arcs d'une esquisse sélectionnée. Si des arcs sont présents, ils doivent faire partie de contours fermés. Toutes les entités autres que des arcs ou des cercles sont ignorées mais elles doivent tout de même former des contours fermés. De nombreux paramètres peuvent être définis, tels que le filetage et la taille, l'ajustement, le type de trou (fraise, lamage, droit) etc...

Les centres des cercles et des arcs sont utilisés pour positionner les trous, mais veuillez noter que leurs rayons ne sont pas pris en compte. Les trous générés seront identiques même si les rayons varient.

![](/images/Countersunk_and_counterbored_holes_cross-section1.png)

Coupe longitudinale d'un trou fraisé (à gauche) et d'un trou chambré (à droite).

## Utilisation

1. Appuyez sur le bouton ![](/images/PartDesign_Hole.svg) **Perçage**.
2. Si une esquisse inutilisée existante est trouvée, elle sera automatiquement utilisée. Si plus d'une esquisse est trouvée, un panneau **Sélectionner une fonction** apparaît pour faire une sélection. Il est également possible de sélectionner une esquisse avant de lancer la commande Perçage.
3. Définir les paramètres du perçage, voir la section [Options](#Options).
4. Appuyez sur OK.

## Options

![](/images/PartDesign_Hole_parameters.png)

En fonction des options spécifiées, certains champs seront activés ou resteront désactivés.

* **Profil** :

:   Si la valeur est *Aucun*, aucune information sur le filetage n'est définie et le diamètre doit être défini manuellement.
:   Lorsqu'il est défini sur un [standard](https://en.wikipedia.org/wiki/List_of_thread_standards) pris en charge, le diamètre et les autres paramètres peuvent être définis automatiquement.

* **Fileté** : *uniquement disponible si le profil n'est pas Aucun*

:   Si cette option est cochée, le diamètre fourni sera la taille du perçage recommandée pour le post-traitement à l'aide d'un [taraudage](https://fr.wikipedia.org/wiki/Taraudage).
:   Si la case n'est pas cochée, le diamètre est défini en fonction du *Jeu* pour passer à travers un filetage sans contact.

* **Représenter le filetage** : *uniquement disponible si Fileté est sélectionné*

:   Si cette option est cochée, un filetage est modélisé. Cela consomme beaucoup de puissance de calcul et n'est généralement pas utilisé pour les modèles, sauf à des fins d'affichage ou parfois pour des impressions 3D. S'il est utilisé, il est conseillé de le vérifier comme l'une des dernières actions a effectuer sur le modèle, car il augmentera le temps de recalcul de manière significative.

* **Direction** : *uniquement disponible si Fileté est sélectionné*

:   Définit la direction du filetage, pas à droite ou pas à gauche.

* **Taille** : *uniquement disponible si Fileté est sélectionné*

:   Définit la taille du filetage. Nécessite que *Profil* ne soit pas *Aucun*

* **Jeu** : *uniquement disponible si Fileté n'est pas sélectionné*

:   Détermine la distance entre le sommet du filetage et le bord du trou. Cela peut être compris comme le degré de *serrage* d'un boulon.
:   Pour les filetages ISO, les diamètres sont conformes à la norme ISO 273.
:   Pour l'UTS, ils sont calculés à l'aide d'une règle empirique car il n'existe pas de norme.

* **Classe** : définit la classe de tolérance.
* **Diamètre** : définit le diamètre du trou, si *Profil* est à *Aucun*.
* **Profondeur** : profondeur du trou par rapport au plan de l'esquisse.

:   *Dimension* : active un champ pour entrer une valeur.
:   *À travers tout* : permet de percer le trou à travers tout le corps.
:   Pour réduire la taille du fichier, n'utilisez pas *À travers tout* si *Représenter le filetage* est coché, spécifiez plutôt une profondeur minimale.

### Découpe du trou

* **Type de découpe du trou** : définit le type de trou à réaliser : *Aucun* signifie pas de découpe, les autres types sont les différentes normes pour les vis et les types génériques *Lamage*, *Fraisage* et ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) *Contre-perçage*. Les modèles ISO et DIN 7984 apparaissent si *Profil* reçoit une sélection ISO ou DIN.
* **Diamètre** : définit le diamètre supérieur (au plan d'esquisse) pour la découpe du trou.
* **Profondeur** : la profondeur est définie différemment selon le **Type de découpe du trou** :
  + Pour un *Lamage*, il s'agit de la profondeur du trou découpé, mesurée à partir du plan de l'esquisse.
  + Pour un *Fraisage*, c'est la profondeur du sommet de la tête de la vis sous le plan de l'esquisse.
  + Pour un *Contre-perçage*, il s'agit de la profondeur de la partie cylindrique de la découpe du trou.
* **Angle de fraisage** : angle de la découpe du trou conique. Applicable uniquement pour les fraisages, contre-perçages, profils ISO 2009, ISO 7046, ISO 10642.

### Pointe du perçage

* **Pointe du perçage** : définit l'extrémité du trou si *Profondeur* est réglé sur *Dimension*.
  + **Plat** produit un fond plat.
  + **En angle** définit une pointe conique.

:   **Tenir compte de la profondeur** soustraira la hauteur conique de la *Dimension*. Ainsi, si par exemple la *Dimension* est de 7.00 et que l'option n'est pas utilisée, la partie cylindrique du trou sera 7.00 et la profondeur nécessaire pour la partie conique est ajoutée à la profondeur du trou. Si l'option est utilisée, la profondeur totale du trou, pointe conique comprise, sera de 7.00.

### Divers

* **Conique** : définit un angle de conicité pour le trou. La valeur est calculée à partir de la normale du plan de l'esquisse.

:   Un angle de 90 degrés donne un trou droit.
:   Moins de 90 génère un rayon de trou plus petit à la fin, plus grand au début.
:   Plus de 90 degrés génère un rayon de trou plus grand à la fin, plus petit au début.

* **Inversé** : inverse la direction d'extrusion du trou. La direction par défaut est la direction d'application de l'esquisse de perçage avec son ancrage.

## Propriétés

La plupart des propriétés des Données sont les mêmes que celles indiquées dans [Options](#Options).

* Données**Label** : nom donné à l'objet, ce nom peut être changé à la convenance.
* Données**Refine** : vrai ou faux. Si la valeur est "true" (vraie), nettoie le solide des bords résiduels laissés par les fonctions. Voir ![](/images/Part_RefineShape.svg) [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") pour plus de détails.

## Limitations

* Par défaut, la fonction de perçage est extrudée en dessous du plan de l'esquisse. Si le solide se trouve sur le plan XY et que l'esquisse du trou est attachée au plan XY, la fonction essaiera d'extruder à partir du solide et ne produira aucun résultat. Dans ce cas, l'option *Inversé* doit être sélectionnée. Autre possibilité, l'esquisse peut être appliquée sur la face inférieure du solide.

## Définitions des types de coupes

Les types de coupes (types de vis) sont définis dans des fichiers [json](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation). Il existe un ensemble de fichiers distribués avec FreeCAD, mais les utilisateurs peuvent créer leurs propres définitions. Les fichiers sont à rechercher dans `<UserAppDataDir>/PartDesign/Hole`. `UserAppDataDir` peut être trouvé en tapant `App.getUserAppDataDir()` dans la [console Python](/Python_console/fr "Python console/fr").

Le fichier doit contenir :

* **name** : le nom de la définition. Il doit être unique car il sera utilisé comme identifiant dans l'interface utilisateur de FreeCAD et comme index interne.
* **cut\_type** : `countersink` ou `counterbore`.
* **thread\_type** : `metric` ou `metricfine`.
* **angle** : l'angle d'un chanfrein (pas nécessaire pour un alésage).
* **data** : une liste des dimensions, composée de :
  + **thread** : nom du filetage connu de FreeCAD.
  + **diameter** : le diamètre de la découpe.
  + **depth** : la profondeur du chambrage (non nécessaire pour le fraisage).

Exemple :

```
{
    "name": "DIN 7984",
    "cut_type": "counterbore",
    "thread_type": "metric",
    "data": [
        { "thread": "M2",   "diameter":  4.3, "depth":  1.6 },
        { "thread": "M2.5", "diameter":  5.0, "depth":  2.0 },
        …
    ]
}

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Hole/fr&oldid=1561350>"