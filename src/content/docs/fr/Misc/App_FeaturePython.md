---
title: App FeaturePython
---
## Introduction

Un objet ![](/images/Feature.svg) App FeaturePython, ou officiellement `App::FeaturePython`, est une simple instance de [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr") dans [Python](/Python/fr "Python/fr").

Il s'agit d'un objet simple qui, par défaut, n'a pas beaucoup de propriétés, par exemple il n'a pas de [positionnement](/Placement/fr "Placement/fr") ou de [forme topologique](/Part_TopoShape/fr "Part TopoShape/fr"). En fonction des propriétés qui lui sont attribuées, il peut être utilisé pour gérer différents types de données.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux dans Freecad

## Utilisation

App FeaturePython est un objet interne. Il ne peut donc pas être créé à partir de l'interface graphique. Il est censé être sous-classé par des classes qui géreront différents types de données.

Par exemple, les éléments [Draft Text](/Draft_Text/fr "Draft Text/fr"), [Draft Dimension](/Draft_Dimension/fr "Draft Dimension/fr") et [Draft Proxy pour plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") de l'[Atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") sont des objets `App::FeaturePython` avec une icône personnalisée et des propriétés additionnelles. Ils contiennent des données mais pas une [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr") réelle.

Si l'objet désiré doit avoir un placement, une forme, un attachement ou d'autres propriétés complexes, il est préférable de créer une des classes plus complexes, par exemple, [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr"), [Part Feature](/Part_Feature/fr "Part Feature/fr")  ou [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr").

## Propriétés

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets scriptés peuvent avoir.

La classe App FeaturePython (classe `App::FeaturePython`) est dérivée de la classe de base [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr"). (classe `App::DocumentObject`) et hérite de toutes ses propriétés. Il possède également plusieurs propriétés supplémentaires.

Ce sont les propriétés disponibles dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés masquées peuvent être affichées en utilisant la commande **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données (caché)**Proxy** (`PythonObject`): une classe personnalisée associée à cet objet.
* Données**Label** (`String`): le nom modifiable par l'utilisateur de cet objet, c'est une chaîne UTF8 arbitraire.
* Données (caché)**Label2** (`String`): une description plus longue et modifiable par l'utilisateur de cet objet, c'est une chaîne UTF8 arbitraire qui peut inclure des retours à la ligne. Par défaut, c'est une chaîne vide `""`.
* Données (caché)**Expression Engine** (`ExpressionEngine`): une liste d'expressions. Par défaut vide `[]`.
* Données (caché)**Visibility** (`Bool`): affiche ou non l'objet.

### Vue

Base

* Vue (Hidden)**Proxy** (`PythonObject`) : une classe personnalisée de [viewprovider](/Viewprovider/fr "Viewprovider/fr") associée à cet objet.

Display Options

* Vue**Display Mode** (`Enumeration`): il est vide par défaut.
* Vue**Show In Tree** (`Bool`): la valeur par défaut est `true`, auquel cas l'objet apparaîtra dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") sinon l'objet sera masqué dans l'arborescence. Une fois qu'un objet de l'arborescence est invisible, vous pouvez le revoir en ouvrant le menu contextuel sur le nom du document (clic droit) et en sélectionnant ![](/images/CheckBoxTrue.svg) Show hidden items. Ensuite, l'élément masqué peut être choisi et Vue**Show In Tree** peut être rétabli à `true`.
* Vue**Visibility** (`Bool`): par défaut `true`, dans ce cas l'objet sera visible dans la [Vue 3D](/3D_view/fr "3D view/fr") s'il a une [Shape](/Part_TopoShape/fr "Part TopoShape/fr") sinon il sera invisible. Par défaut, cette propriété peut être activée et désactivée en sélectionnant l'objet et en appuyant sur la barre Espace du clavier.

Selection

* Vue**On Top When Selected** (`Enumeration`): il contrôle la manière dont la sélection s'effectue dans la [Vue 3D](/3D_view/fr "3D view/fr") si l'objet a une [Shapeet](/Part_TopoShape/fr "Part TopoShape/fr") s'il y a de nombreux objets partiellement couverts par d'autres. La valeur par défaut est `Disabled`, ce qui signifie qu'aucune mise en évidence spéciale ne se produira; `Enabled` signifie que l'objet apparaîtra au-dessus de tout autre objet lorsqu'il est sélectionné; `Object` signifie que l'objet n'apparaîtra en haut que si l'objet entier est sélectionné dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"); `Element` signifie que l'objet n'apparaîtra en haut que si un sous-élément (sommet, arête, face) est sélectionné dans la [Vue 3D](/3D_view/fr "3D view/fr").
* Vue**Selection Style** (`Enumeration`): il contrôle la façon dont l'objet est mis en évidence s'il a une [Shape](/Part_TopoShape/fr "Part TopoShape/fr"). Si c'est `Shape`, la forme entière (sommets, arêtes et faces) sera mise en surbrillance dans la [Vue 3D](/3D_view/fr "3D view/fr"); s'il s'agit de `BoundBox`, un cadre de délimitation apparaîtra autour de l'objet et sera mis en surbrillance.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Un App FeaturePython est créé avec la méthode `addObject()` du document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_FeaturePython/fr&oldid=1560977>"