---
title: Std Groupe
---
|  |
| --- |
| Std Groupe |
| Emplacement du menu |
| [Vue en arborescence](/Tree_view/fr "Tree view/fr") → Clic droit sur le nom du document → Créer un groupe |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Part](/Std_Part/fr "Std Part/fr"), [Draft Sélection groupée](/Draft_SelectGroup/fr "Draft SelectGroup/fr"), [Draft Ajouter au groupe](/Draft_AddToGroup/fr "Draft AddToGroup/fr") |
|  |

## Description

Std Groupe (appelé en interne [App DocumentObjectGroup](/App_DocumentObjectGroup/fr "App DocumentObjectGroup/fr")) est un conteneur à usage général qui vous permet de regrouper différents types d'objets dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), quel que soit leur type de données. Il est utilisé comme un simple dossier pour classer et organiser les objets dans votre modèle afin de conserver une structure logique. Les Std Groupes peuvent être imbriqués dans d'autres Std Groupes.

L'outil Std Groupe n'est pas défini par un atelier particulier mais par le système de base. Il se trouve donc dans la **barre d'outils de structure** qui est disponible dans tous les [ateliers](/Workbenches/fr "Workbenches/fr").

Pour regrouper des objets 3D en une seule unité, avec l'intention de créer des assemblages, utilisez plutôt [Std Part](/Std_Part/fr "Std Part/fr").

![](/images/Std_Group_example.png)

Divers éléments à l'intérieur de Std Groupes dans la vue en arborescence.

## Utilisation

1. Effectuez l'une des opérations suivantes :
   * Cliquez avec le bouton droit de la souris sur le nom du document dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et dans le menu contextuel, choisissez **Créer un groupe**.
   * Appuyez sur le ![](/images/Std_Group.svg) Créer un groupe.
2. Un groupe vide est créé.
3. Pour ajouter des objets au groupe, sélectionnez-les dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et faites un glisser/déposer dans le groupe.
4. Pour supprimer des objets du groupe, faites-les glisser hors du groupe et déposez-les sur l'étiquette du document en haut de [vue en arborescence](/Tree_view/fr "Tree view/fr").
5. Vous pouvez également ajouter et supprimer des objets en modifiant la propriété Données**Group** du groupe.

## Propriétés

Std Groupe, appelé en interne [App DocumentObjectGroup](/App_DocumentObjectGroup/fr "App DocumentObjectGroup/fr") (classe `App::DocumentObjectGroup`), est dérivé de l'objet de base [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr") (classe `App::DocumentObject`) et hérite de toutes ses propriétés.

Std Groupe a les mêmes propriétés que [App FeaturePython](/App_FeaturePython/fr#Propri.C3.A9t.C3.A9s "App FeaturePython/fr"), qui est l'instance la plus basique d'un [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr"). Il possède également les propriétés supplémentaires suivantes dans l'éditeur de propriétés de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés cachées peuvent être affichées à l'aide de la commande **Afficher les propriétés cachées** du menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données**Group** (`LinkList`) : liste d'objets référencés. Par défaut vide `[]`.
* Données (Hidden)**\_ Group Touched** (`Bool`) : indique si le groupe est touché ou non.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Std Groupe ([App DocumentObjectGroup](/App_DocumentObjectGroup/fr "App DocumentObjectGroup/fr")) est créé avec la méthode `addObject()` du document. Une fois qu'un groupe existe, d'autres objets peuvent y être ajoutés avec les méthodes `addObject()` ou `addObjects()`.

```
import FreeCAD as App

doc = App.newDocument()
group = App.ActiveDocument.addObject("App::DocumentObjectGroup", "Group")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

group.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

`App::DocumentObjectGroup` de base n'a pas d'objet Proxy, il ne peut donc pas être entièrement utilisé pour la sous-classification.

Pour la sous-classification en [Python](/Python/fr "Python/fr"), vous devez créer l'objet `App::DocumentObjectGroupPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObjectGroupPython", "Name")
obj.Label = "Custom label"

```

Par exemple, une [analyse FEM](/FEM_Analysis/fr "FEM Analysis/fr") est un objet `App::DocumentObjectGroupPython` avec une icône personnalisée et des propriétés supplémentaires.

## Liens

* [Cas d'utilisation dans le tutoriel Arch](/Arch_tutorial/fr#Organiser_votre_mod.C3.A8le "Arch tutorial/fr")
* [Structure du document](/Document_structure/fr "Document structure/fr")
* [Organisation de votre modèle](/Arch_tutorial/fr#Organiser_votre_mod.C3.A8le "Arch tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Group/fr&oldid=1560995>"