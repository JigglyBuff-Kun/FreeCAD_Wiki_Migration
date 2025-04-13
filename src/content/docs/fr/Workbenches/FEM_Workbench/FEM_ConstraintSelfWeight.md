---
title: FEM Charge de gravité
---
|  |
| --- |
| FEM Charge de gravité |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Charge de gravité |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX, Elmer |

## Description

Cette commande définit une accélération gravitationnelle agissant sur l'ensemble du modèle dans la direction prescrite.

version 0.21 et précédentes : l'accélération a une valeur fixe de 9,81 m/s^2.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/FEM_ConstraintSelfWeight.svg) Charge de gravité.
   * Sélectionner l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintSelfWeight.svg) Charge de gravité** du menu.
2. Un objet **ConstraintSelfWeight** est créé.
3. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : vous pouvez modifier sa propriété Données**Gravity Acceleration**.
4. Vous pouvez modifier sa propriété Données**Gravity Direction**.

## Script

Nouvel objet :

```
import ObjectsFem
ObjectsFem.makeConstraintSelfWeight(name)

```

Ajoutez un objet à l'analyse nommée Analysis :

```
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [(object)]

```

Exemple :

```
import ObjectsFem
selfweight_obj = ObjectsFem.makeConstraintSelfWeight("MySelfWeightObject")
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [selfweight_obj]

```

## Solveur CalculiX

### Limitations

* version 0.21 et précédentes : vous devez modifier le fichier .inp pour modifier l'accélération de la gravité.
* Le poids propre est appliqué à l'élément Eall qui comprend le modèle entier.

### Modification du fichier d’entrée CalculiX

La constante d'accélération peut être éditée manuellement après avoir généré le fichier d'entrée de CalculiX.

Exemple de lignes dans le fichier .inp :

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

où 9810 est la magnitude de l'accélération de la pesanteur en [mm/s^2], et 0,0,-1 est le vecteur de direction. La valeur peut être définie comme un multiple de l'accélération standard de la pesanteur pour simuler une charge de 4g par exemple.

## Solveur Z88

* Pour le moment, non implémenté dans le solveur Z88.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSelfWeight/fr&oldid=1532975>"