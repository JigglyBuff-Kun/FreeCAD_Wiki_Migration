---
title: FEM Conteneur d'analyse
---
|  |
| --- |
| FEM Conteneur d'analyse |
| Emplacement du menu |
| Modèle → Conteneur d'analyse |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| S A |
| Introduit dans la version |
| - |
| Voir aussi |
| [Tutoriel FEM](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

La commande **Conteneur d'analyse** crée un conteneur pour contenir tous les objets d'une analyse par éléments finis. Ce conteneur est obligatoire. Au moins un des objets suivants (en dehors du maillage) est nécessaire pour une analyse mécanique :

* [Matériau pour solide](/FEM_MaterialSolid/fr "FEM MaterialSolid/fr"),
* [Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr"), [Condition limite de déplacement](/FEM_ConstraintDisplacement/fr "FEM ConstraintDisplacement/fr") ou [Contrainte de corps rigide](/FEM_ConstraintRigidBody/fr "FEM ConstraintRigidBody/fr").

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_Analysis.svg) Conteneur d'analyse.
   * Sélectionnez l'option **Modèle → ![](/images/FEM_Analysis.svg) Conteneur d'analyse** du menu.
   * Utilisez le raccourci clavier : S puis A.
2. Un nouveau conteneur Analysis est créé et défini comme actif.
3. D'autres objets peuvent être ajoutés ou retirés du conteneur Analysis par glisser-déposer.
4. Pour ajouter de nouveaux objets FEM au document, Analysis doit être actif. Un double-clic sur le conteneur Analysis active l'analyse.

## Propriétés

* Données**OutpuDir** : spécifie le répertoire de travail pour l'analyse

## Script

la plupart du code ici est déprécié dans la 0.17.

* nouvelle analyse

```
MechanicalAnalysis.makeMechanicalAnalysis( name )

```

* ajouter un objet à analyser

```
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [ (object) ]

```

* effacer un objet du conteneur

```
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove( documentobject )
 App.ActiveDocument.MechanicalAnalysis.Member = member

```

Exemples :

```
import MechanicalAnalysis
analysis = MechanicalAnalysis.makeMechanicalAnalysis("MechanicalAnalysis")
FemGui.setActiveAnalysis(analysis)

addobj = App.ActiveDocument.getObject("MechanicalMaterial")
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [addobj]

removeobj = App.ActiveDocument.getObject("MechanicalMaterial")
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove(removeobj)
App.ActiveDocument.MechanicalAnalysis.Member = member

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Analysis/fr&oldid=1569612>"