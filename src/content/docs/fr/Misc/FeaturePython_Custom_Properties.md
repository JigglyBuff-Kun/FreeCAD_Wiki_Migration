---
title: Propriétés personnalisées de FeaturePython
---
## Introduction

Voir aussi : [Documentation API générée automatiquement (documentation C++)](https://freecad.github.io/SourceDoc/dd/dc2/namespaceApp.html).

Les propriétés sont les véritables blocs de construction des objets FeaturePython. Grâce à elles, l'utilisateur pourra interagir et modifier votre objet. Après avoir créé un nouvel objet FeaturePython dans votre document :

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "Box")

```

Vous pouvez obtenir une liste des propriétés disponibles en émettant :

```
obj.supportedProperties()

```

## Créer un objet FeaturePython et lui ajouter une propriété

Ce code créera un objet avec le nom interne `InternalObjectName` (automatiquement renommé en `InternalObjectName001` et ainsi de suite, si un objet nommé `InternalObjectName` existe déjà) et lui affectera l'étiquette personnalisée `User-friendly label`. Cette étiquette sera affichée dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"). Les [Expressions](/Expressions/fr "Expressions/fr") peuvent faire référence à cet objet par son étiquette en utilisant `<<User-friendly label>>`.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"

```

Pour ajouter une propriété à cet objet, utilisez la forme longue de `addProperty` comme indiqué ci-dessous. FreeCAD divisera automatiquement `ThePropertyName` et l'affichera avec des espaces (`The Property Name`) dans l'[Onglet Données de la vue Propriété](/Property_editor/fr#Vue_et_Propri.C3.A9t.C3.A9s_des_donn.C3.A9es "Property editor/fr").

```
obj.addProperty("App::PropertyBool", "ThePropertyName", "Subsection", "Description for tooltip")

```

`App::PropertyBool` est le type de la propriété. Les différents types sont décrits plus en détail ci-dessous.

Vous pouvez également utiliser la forme courte qui omet les deux derniers arguments. La sous-section a par défaut la valeur `Base` et l'infobulle n'est pas affichée avec ce formulaire.

```
obj.addProperty("App::PropertyBool", "ThePropertyName")

```

Pour obtenir ou définir la propriété, utilisez `obj.ThePropertyName` :

```
# set
obj.ThePropertyName = True
# get
thePropertyValue = obj.ThePropertyName

```

Si le type de la propriété est [App::PropertyEnumeration](#App::PropertyEnumeration), le setter a un comportement spécial : la définition d'une liste de chaînes définit les cas autorisés par l'énumération, la définition d'une chaîne sélectionne l'un de ces cas. Pour définir la liste des cas possibles et définir le cas actuel, utilisez :

```
# allowed cases
obj.ThePropertyName = ["aaa", "bbb", "ccc"]
# set
obj.ThePropertyName = "bbb"

```

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'argument `enum_vals` de la fonction `addProperty` peut également être utilisé pour définir les cas d'énumération.

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : la signature complète de la fonction est :

```
obj.addProperty(type: string, name: string, group="", doc="", attr=0, read_only=False, hidden=False, enum_vals=[])

```

* `type` : type de propriété.
* `name` : nom de la propriété.
* `group` : sous-section de la propriété.
* `doc` : infobulle.
* `attr` : attribut, voir [Objets créés par script](/Scripted_objects/fr#Attributs_des_propriétés "Scripted objects/fr").
* `read_only` : voir idem.
* `hidden` : voir idem.
* `enum_vals` : valeurs d'énumération (liste de chaînes), uniquement pertinentes si le type est [App::PropertyEnumeration](#App::PropertyEnumeration).

## App::PropertyAcceleration

Une propriété [Template:TODOacceleration](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyAcceleration", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyAmountOfSubstance

## App::PropertyAngle

Une propriété d'angle. Elle peut contenir une valeur `angle`. Vous pouvez utiliser la variable "Value" pour obtenir une variable flottante. Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyAngle", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 180
obj.ThePropertyName # returns 180.0 deg
obj.ThePropertyName.Value # returns 180.0

```

## App::PropertyArea

Une propriété [Template:TODOarea](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyArea", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyBool

Une propriété booléenne. Elle peut contenir `True` et `False`. Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyBool", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = True
obj.ThePropertyName = False
obj.ThePropertyName # returns False

```

## App::PropertyBoolList

Une propriété contenant une liste de booléens. Elle peut contenir une liste Python de booléens, par exemple `[True, False, True]`. Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyBoolList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [True, False, True]
obj.ThePropertyName    # returns [True, False, True]
obj.ThePropertyName[1] # returns False

```

## App::PropertyColor

Une propriété de couleur. Elle peut contenir un tuple de quatre valeurs `float`. Chaque élément peut prendre des valeurs comprises entre 0.0 et 1.0. Vous pouvez définir les valeurs rouge, verte et bleue. Vous pouvez également définir la transparence des étapes. Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyColor", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (0.0, 1.0, 0.5, 0.8) # (Red, Green, Blue, Transparency)
obj.ThePropertyName # returns (0.0, 1.0, 0.5, 0.8)

```

## App::PropertyColorList

Une propriété [Template:TODOcolor](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")List. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyColorList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyCurrentDensity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyDensity

## App::PropertyDirection

Identique à [App::PropertyVectorDistance](#App::PropertyVectorDistance).

## App::PropertyDissipationRate

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyDistance

Une propriété de distance. Elle peut contenir une valeur `distance` positive, négative ou nulle. Utilisez le paramètre "Value" de la propriété pour obtenir la valeur sous forme de nombre flottant. La valeur est toujours en mm, mais dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), elle est présentée avec les unités des préférences. Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

[App::PropertyLength](#App::PropertyLength) est une propriété similaire qui ne peut pas contenir de valeur négative.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyDistance", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 500
obj.ThePropertyName # returns "500.0 mm"
obj.ThePropertyName.Value # returns 500.0

```

## App::PropertyDynamicViscosity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricalCapacitance

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricalConductance

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricalConductivity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricalInductance

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricalResistance

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricCharge

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricCurrent

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyElectricPotential

## App::PropertyEnumeration

Une propriété de type énumération. Les éléments autorisés sont définis en donnant à la propriété la valeur d'une liste. Ensuite, elle peut contenir des éléments de la liste donnée. La liste des éléments autorisés peut être modifiée en donnant à nouveau à la propriété la valeur d'une liste. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyEnumeration", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = ["Foo", "Bar", "Baz"]  # set allowed items
obj.ThePropertyName = "Foo"                  # choose single item
obj.ThePropertyName = ["Foo", "Bar", "Quux"] # change allowed items
obj.ThePropertyName = "Quux"                 # choose single item
obj.ThePropertyName # returns "Quux"

```

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'argument `enum_vals` de la fonction `addProperty` peut également être utilisé pour définir les cas d'énumération. Voir [au-dessus](#Créer_un_objet_FeaturePython_et_lui_ajouter_une_propriété).

[introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : il est possible de regrouper des énumérations affichées dans l'interface graphique à l'aide d'une interface de sous-menu. Pour grouper, utilisez le caractère `|` comme séparateur, par exemple :

```
obj.ThePropertyName = [
    "Group 1 | Item A", 
    "Group 1 | Item B", 
    "Group 2 | Another item", 
    "Group 2 | Last item"
] # set allowed items
obj.ThePropertyName = "Group 1 | Item A" # choose single item

```

L'interface graphique affichera ceci comme une structure de menu :

* Groupe 1
  + Elément A
  + Elément B
* Groupe 2
  + Autre élément
  + Dernier élément

## App::PropertyExpressionEngine

Une propriété [Template:TODOexpression](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Engine. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyExpressionEngine", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyFile

Une propriété de nom de fichier. Elle peut contenir une chaîne de caractères indiquant le chemin d'accès à un nom de fichier [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") :(autorise-t-elle les chemins relatifs ou absolus ou les deux ?). Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFile", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyFileIncluded

Une propriété de nom de fichier qui inclut également le fichier lui-même dans le document. Le fichier n'est pas chargé en mémoire, il est copié de l'archive du document dans le répertoire transitoire du document. Là, il est accessible en lecture. Vous pouvez obtenir le chemin d'accès transitoire par `getDocTransientPath()`. Comme valeur, la propriété accepte une chaîne contenant le chemin d'accès au fichier d'origine. La propriété renvoie le chemin du fichier temporaire dans le répertoire transitoire. Pour plus de détails, voir cet [exemple de l'atelier Arch](https://github.com/FreeCAD/FreeCAD/blob/adfdbf7cd76fe78c7f818623e019454337ed1bcd/src/Mod/Arch/ArchBuildingPart.py#L595-L597).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFileIncluded", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = "D:/file.txt"
obj.ThePropertyName # returns the path to the temporary file

```

## App::PropertyFloat

Une propriété de flottant. Elle peut contenir une valeur `float`. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFloat", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 15.7
obj.ThePropertyName # returns 15.7

```

## App::PropertyFloatConstraint

Une propriété de contrainte flottante. Elle peut contenir une valeur `float`. En utilisant cette propriété, vous pouvez définir les valeurs de début et de fin. Vous pouvez également définir un intervalle de pas. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFloatConstraint", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (50.0, 0.0, 100.0, 1.0) # (Default, Start, Finish, Step)
obj.ThePropertyName # returns 50.0

```

## App::PropertyFloatList

Une propriété de liste de valeurs flottantes. Elle peut contenir une liste de valeurs `float`. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFloatList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [12.7, 5.8, 28.6, 17.22] # It can also be an empty list.
obj.ThePropertyName # returns [12.7, 5.8, 28.6, 17.22]

```

## App::PropertyFont

Une propriété [Template:TODOfont](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFont", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyForce

Une propriété [Template:TODOforce](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyForce", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyFrequency

Une propriété [Template:TODOfrequency](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyFrequency", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyHeatFlux

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyInteger

Une propriété entière. Elle peut contenir une valeur entière comprise entre -2147483646 et 2147483647 inclus. Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Créer_un_objet_FeaturePython_et_lui_ajouter_une_propriété).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyInteger", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 25
obj.ThePropertyName # returns 25

```

## App::PropertyIntegerConstraint

Une propriété de contrainte entière. Avec cette propriété, vous pouvez définir une valeur par défaut, une valeur minimale, une valeur maximale et une taille de pas. Toutes les valeurs doivent être des entiers et peuvent être comprises entre -2147483646 et 2147483647 inclus. Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Créer_un_objet_FeaturePython_et_lui_ajouter_une_propriété).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyIntegerConstraint", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (50, 0, 100, 1) # (Default, Minimum, Maximum, Step size)
obj.ThePropertyName # returns 50

```

## App::PropertyIntegerList

Une propriété de liste d'entiers. Elle peut contenir une liste de valeurs `integer`. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyIntegerList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [12, 5, 28, 17] # It can also be an empty list.
obj.ThePropertyName # returns [12, 5, 28, 17]

```

## App::PropertyIntegerSet

Une propriété [Template:TODOinteger](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Set. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyIntegerSet", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyInverseArea

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyInverseLength

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyInverseVolume

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyKinematicViscosity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyLength

Une propriété de longueur. Elle peut contenir une valeur `length` positive ou nulle. Utilisez le paramètre "Value" de la propriété pour obtenir la valeur sous forme de nombre flottant. La valeur est toujours en mm mais dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), elle est présentée avec les unités des préférences. Pour plus de détails, voir la section [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

[App::PropertyDistance](#App::PropertyDistance) est une propriété similaire qui peut aussi contenir une valeur négative.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLength", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = 500
obj.ThePropertyName # returns "500.0 mm"
obj.ThePropertyName.Value # returns 500.0

```

## App::PropertyLink

Une propriété de lien. Elle peut contenir un lien vers un objet. Lorsque vous appelez cette propriété, elle renvoie l'objet lié. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
link_obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName")
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLink", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = link_obj
obj.ThePropertyName # returns link_obj

```

## App::PropertyLinkChild

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Child. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkGlobal

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Global. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkHidden

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Hidden. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkList

Une propriété de liste de liens. Elle peut contenir une liste d'objets liés. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
link_obj0 = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName0")
link_obj1 = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName1")
link_obj2 = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "LinkObjectName2")

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [link_obj0, link_obj1, link_obj2]
obj.ThePropertyName # returns [link_obj0, link_obj1, link_obj2]

```

## App::PropertyLinkListChild

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")ListChild. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkListChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkListGlobal

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")ListGlobal. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkListGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkListHidden

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")ListHidden. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkListHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSub

Un LinkSub est une liste de deux éléments : le premier est une référence à un [objet de document](/App_DocumentObject/fr "App DocumentObject/fr"), le second une chaîne de caractères ou une liste de chaînes de caractères indiquant le(s) nom(s) interne(s) du (des) sous-élément(s). Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
doc = FreeCAD.ActiveDocument
box = doc.addObject("Part::Box", "Box")

obj = doc.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSub", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [box, ["Vertex1", "Vertex2"]]

doc.recompute()

```

## App::PropertyLinkSubChild

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")SubChild. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubGlobal

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")SubGlobal. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubHidden

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")SubHidden. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubList

Une LinkSubList est une liste de tuples. Chaque tuple contient deux éléments : le premier est une référence à un [objet de document](/App_DocumentObject/fr "App DocumentObject/fr"), le second une chaîne de caractères ou une liste de chaînes de caractères indiquant le(s) nom(s) interne(s) du (des) sous-élément(s). Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
doc = FreeCAD.ActiveDocument
box = doc.addObject("Part::Box", "Box")
cyl = doc.addObject("Part::Cylinder", "Cylinder")

obj = doc.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [(box, ["Vertex1", "Vertex2"]), (cyl, "Edge1")]

doc.recompute()

```

## App::PropertyLinkSubListChild

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")SubListChild. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubListChild", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubListGlobal

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")SubListGlobal. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubListGlobal", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLinkSubListHidden

Une propriété [Template:TODOlink](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")SubListHidden. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyLinkSubListHidden", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyLuminousIntensity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyMagneticFieldStrength

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyMagneticFlux

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyMagneticFluxDensity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyMagnetization

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyMap

Une propriété [Template:TODOmap](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMap", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyMass

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyMaterial

Une propriété de matériau. Elle peut contenir un objet matériau de FreeCAD. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import FreeCAD
material=FreeCAD.Material()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMaterial", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = material
obj.ThePropertyName # returns material

```

## App::PropertyMaterialList

Une propriété de liste de matériaux. Elle peut contenir une liste de matériaux. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import FreeCAD
material0 = FreeCAD.Material()
material1 = FreeCAD.Material()
material2 = FreeCAD.Material()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMaterialList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [material0, material1, material2] # It can also be an empty list.
obj.ThePropertyName # returns [material0, material1, material2]

```

## App::PropertyMatrix

Une propriété [Template:TODOmatrix](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyMatrix", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPath

Une propriété de chemin. Elle peut contenir une chaîne de caractères représentant un chemin d'accès à un dossier [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") :(autorise-t-elle également les chemins d'accès aux fichiers ? autorise-t-elle les chemins relatifs ou absolus, ou les deux ?) Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPath", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPercent

Une propriété [Template:TODOpercent](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPercent", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPersistentObject

Une propriété [Template:TODOpersistent](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Object. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPersistentObject", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPlacement

Une propriété de placement. Elle peut contenir un objet `placement`. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import FreeCAD
placement = FreeCAD.Placement()
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPlacement", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = placement
obj.ThePropertyName # returns placement

```

## App::PropertyPlacementLink

Une propriété [Template:TODOplacement](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Link. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPlacementLink", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPlacementList

Une propriété de liste de placement. Elle peut contenir une liste de `placements`. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import FreeCAD
placement0 = FreeCAD.Placement()
placement1 = FreeCAD.Placement()
placement2 = FreeCAD.Placement()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPlacementList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [placement0, placement1, placement2]
obj.ThePropertyName # returns [placement0, placement1, placement2]

```

## App::PropertyPosition

Identique à [App::PropertyVectorDistance](#App::PropertyVectorDistance).

## App::PropertyPower

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyPrecision

Une propriété [Template:TODOprecision](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPrecision", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPressure

Une propriété [Template:TODOpressure](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPressure", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyPythonObject

Une propriété [Template:TODOpython](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Object. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyPythonObject", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyQuantity

Une propriété [Template:TODOquantity](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyQuantity", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyQuantityConstraint

Une propriété [Template:TODOquantity](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Constraint. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyQuantityConstraint", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyRotation

## App::PropertyShearModulus

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertySpecificEnergy

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertySpecificHeat

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertySpeed

Une propriété [Template:TODOspeed](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertySpeed", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyStiffness

## App::PropertyStress

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyString

Une propriété [Template:TODOstring](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyString", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyStringList

Une propriété [Template:TODOstring](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")List. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyStringList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyTemperature

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyThermalConductivity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyThermalExpansionCoefficient

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyThermalTransferCoefficient

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyTime

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyUltimateTensileStrength

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyUUID

Une propriété [Template:TODOu](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")UID. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyUUID", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyVacuumPermittivity

Une propriété [Template:TODOvacuum](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Permittivity. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVacuumPermittivity", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyVector

Une propriété vectorielle. Elle peut contenir un objet `vector` de FreeCAD. La valeur peut être définie en fournissant un vecteur ou un tuple. Pour plus de détails, voir la section [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import FreeCAD
vector = FreeCAD.Vector(0, -2, 5)

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVector", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = vector
obj.ThePropertyName # returns Vector(0, -2, 5)
obj.ThePropertyName = (1, 2, 3)
obj.ThePropertyName # returns Vector(1, 2, 3)
obj.ThePropertyName.x # returns 1.0
obj.ThePropertyName.y # returns 2.0
obj.ThePropertyName.z # returns 3.0
obj.ThePropertyName.z = 6
obj.ThePropertyName # returns Vector(1, 2, 6)
obj.ThePropertyName.Length # returns 6.4031242374328485
obj.ThePropertyName.Length = 2 * obj.ThePropertyName.Length
obj.ThePropertyName # Vector (2.0, 4.0, 12.0)

```

## App::PropertyVectorDistance

Une propriété vectorielle qui est presque identique à [App::PropertyVector](#App::PropertyVector). La seule différence est que dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), les paramètres "x", "y" et "z" de cette propriété sont présentés avec des unités des préférences. Mais en interne, toutes les valeurs sont sans unité et donc en mm.

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVectorDistance", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = (1, 2, 3)
obj.ThePropertyName # returns Vector(1, 2, 3)
obj.ThePropertyName.x # returns 1

```

## App::PropertyVectorList

Une propriété de liste de vecteurs. Elle peut contenir une liste de `vectors`. La valeur peut être définie en fournissant une liste de vecteurs et/ou de tuples. Pour plus de détails, voir la section [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import FreeCAD
v0 = FreeCAD.Vector(0, 10, 0)
v1 = FreeCAD.Vector(0, 10, 0)
v2 = FreeCAD.Vector(30, -10, 0)
v3 = FreeCAD.Vector(0, -10, 0)

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython","InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVectorList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [v0, v1, v2, v3]
obj.ThePropertyName # returns [Vector(0, 10, 0), Vector(0, 10, 0), Vector(30, -10, 0), Vector(0, -10, 0)]
obj.ThePropertyName = [v0, (1, 2, 3), v2, (4, 5, 6)]
obj.ThePropertyName # returns [Vector (0, 10, 0), Vector (1, 2, 3), Vector (30, -10, 0), Vector (4, 5, 6)]

```

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyVelocity

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyVolume

Une propriété [Template:TODOvolume](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyVolume", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyVolumeFlowRate

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyVolumetricThermalExpansionCoefficient

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyWork

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyXLink

Une propriété [Template:TODOx](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Link. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLink", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyXLinkList

Une propriété [Template:TODOx](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")LinkList. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLinkList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyXLinkSub

Une propriété [Template:TODOx](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")LinkSub. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLinkSub", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyXLinkSubList

Une propriété [Template:TODOx](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")LinkSubList. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("App::PropertyXLinkSubList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## App::PropertyYieldStrength

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## App::PropertyYoungsModulus

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## Mesh::PropertyCurvatureList

Une propriété [Template:TODOcurvature](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")List. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Mesh::PropertyCurvatureList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Mesh::PropertyMeshKernel

Une propriété de noyau de maillage. Elle peut contenir un objet `mesh`. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import Mesh
mesh = Mesh.Mesh()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Mesh::PropertyMeshKernel", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = mesh
obj.ThePropertyName # returns mesh

```

## Mesh::PropertyNormalList

Une propriété [Template:TODOnormal](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")List. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Mesh::PropertyNormalList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Part::PropertyFilletEdges

Une propriété [Template:TODOfillet](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Edges. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyFilletEdges", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Part::PropertyGeometryList

Une propriété [Template:TODOgeometry](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")List. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyGeometryList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Part::PropertyPartShape

Une propriété de forme de pièce. Elle peut contenir un objet `shape`. Pour plus de détails, voir la section sur [Création d'un objet FeaturePython et ajout d'une propriété à celui-ci](#Creating).

```
import Part
part = Part.Shape()

obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyPartShape", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = part
obj.ThePropertyName # returns part

```

## Part::PropertyShapeHistory

Une propriété [Template:TODOshape](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")History. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Part::PropertyShapeHistory", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Path::PropertyPath

Une propriété [Template:TODOpath](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Path::PropertyPath", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Path::PropertyTool

Une propriété [Template:TODOtool](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Path::PropertyTool", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Path::PropertyTooltable

Une propriété [Template:TODOtooltable](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Path::PropertyTooltable", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Sketcher::PropertyConstraintList

Une propriété [Template:TODOconstraint](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")List. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Sketcher::PropertyConstraintList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertyColumnWidths

Une propriété [Template:TODOcolumn](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Widths. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertyColumnWidths", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertyRowHeights

Une propriété [Template:TODOrow](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Heights. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertyRowHeights", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertySheet

Une propriété [Template:TODOsheet](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)"). Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section sur [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertySheet", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## Spreadsheet::PropertySpreadsheetQuantity

Une propriété [Template:TODOspreadsheet](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")Quantity. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("Spreadsheet::PropertySpreadsheetQuantity", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyCenterLineList

Une propriété [Template:TODOcenter](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")LineList. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyCenterLineList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyCosmeticEdgeList

Une propriété [Template:TODOcosmetic](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")EdgeList. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyCosmeticEdgeList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyCosmeticVertexList

Une propriété [Template:TODOcosmetic](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")VertexList. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyCosmeticVertexList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

## TechDraw::PropertyGeomFormatList

Une propriété [Template:TODOgeom](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)")FormatList. Elle peut contenir des [Template:TODO](/index.php?title=Template:TODO&action=edit&redlink=1 "Template:TODO (page does not exist)") "types et/ou valeurs autorisés". Pour plus de détails, voir la section [Créer un objet FeaturePython et lui ajouter une propriété](#Creating).

```
obj = FreeCAD.ActiveDocument.addObject("App::FeaturePython", "InternalObjectName")
obj.Label = "User-friendly label"
obj.addProperty("TechDraw::PropertyGeomFormatList", "ThePropertyName", "Subsection", "Description for tooltip")
obj.ThePropertyName = [[:Template:TODO]]"example value for setter"
obj.ThePropertyName # returns [[:Template:TODO]]"example value for getter"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FeaturePython_Custom_Properties/fr&oldid=1499164>"