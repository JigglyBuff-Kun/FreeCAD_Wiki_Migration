---
title: Part Feature
---
## Introduction

![](/images/Part_3D_object.svg)

Un objet Part Feature (Part Fonction), ou formellement un `Part::Feature`, est une [forme topologique](/Part_TopoShape/fr "Part TopoShape/fr") qui peut être affiché dans la [Vue 3D](/3D_view/fr "3D view/fr").

Part Feature est la classe parente de la plupart des objets 2D (Draft, Sketcher) et 3D (Part, PartDesign), à l'exception des maillages, qui sont normalement basés sur [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr") ou [FEM FemMeshObject](/FEM_Mesh/fr "FEM Mesh/fr") pour les objets FEM.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux dans Freecad

## Utilisation

Part Feature est un objet interne. Par conséquent, il ne peut pas être créé à partir de l'interface graphique, uniquement à partir de la [Console Python](/Python_console/fr "Python console/fr"), comme décrit dans la section [Script](#Script).

L'objet `Part::Feature` est défini dans l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") mais peut être utilisé comme classe de base pour les [objets scriptés](/Scripted_objects/fr "Scripted objects/fr") dans tous les [ateliers](/Workbenches/fr "Workbenches/fr") générant des formes géométriques 2D et 3D. En fait, tous les objets produits dans l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") sont des instances d'un `Part::Feature`.

`Part::Feature` est également la classe parente de [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), de [PartDesign Features](/PartDesign_Feature/fr "PartDesign Feature/fr") et de [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr"), qui est spécialisée pour les formes 2D (planes).

Des ateliers peuvent ajouter plus de propriétés à cet élément de base pour produire un objet au comportement complexe.

## Propriétés

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets scriptés peuvent avoir.

Part Feature (classe `Part::Feature`) est dérivée de [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr") (classe `App::GeoFeature`) et hérite de toutes ses propriétés. Elle possède également plusieurs propriétés supplémentaires. Notamment une propriété Données**Shape**, qui stocke la [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr") de l'objet. Il s'agit de la géométrie qui est affichée dans la [vue 3D](/3D_view/fr "3D view/fr"). Les autres propriétés de cet objet sont celles liées à l'apparence de sa [TopoShape](/Part_TopoShape/fr "Part TopoShape/fr").

Ce sont les propriétés disponibles dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés masquées peuvent être affichées en utilisant la commande **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données (Hidden)**Proxy** (`PythonObject`) : une classe personnalisée associée à cet objet. Ceci n'existe que pour la version en [Python](/Python/fr "Python/fr"). Voir [Script](#Script).
* Données (Hidden)**Shape** (`PartShape`) : une classe [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr") associée à cet objet.
* Données**Placement** (`Placement`) : la position de l'objet dans la [vue 3D](/3D_view/fr "3D view/fr"). Le placement est défini par un point `Base` (vecteur), et `Rotation` (axe et angle). Voir [Placement](/Placement/fr "Placement/fr").
  + Données**Angle** : l'angle de rotation autour de Données**Axis**. Par défaut, il est `0°`. (zéro degré).
  + Données**Axis** : le vecteur unitaire qui définit l'axe de rotation du placement. Chaque composante est une valeur à virgule flottante comprise entre `0` et `1`. Si une valeur est supérieure à `1`, le vecteur est normalisé de manière à ce que sa magnitude soit `1`. Par défaut, il s'agit de l'axe Z positif, `(0, 0, 1)`.
  + Données**Position** : un vecteur contenant les coordonnées 3D du point de base. Par défaut, il s'agit de l'origine `(0, 0, 0)`.
* Données**Label** (`String`) : le nom modifiable par l'utilisateur de cet objet, il s'agit d'une chaîne UTF8 arbitraire.
* Données (Hidden)**Label2** (`String`) : une description plus longue, modifiable par l'utilisateur, de cet objet. Il s'agit d'une chaîne UTF8 arbitraire qui peut inclure des nouvelles lignes. Par défaut, il s'agit d'une chaîne vide `""`.
* Données (Hidden)**Expression Engine** (`ExpressionEngine`) : une liste d'expressions. Par défaut, elle est vide `[]`.
* Données (Hidden)**Visibility** (`Bool`) : affichage ou non de l'objet.

### Vue

La plupart des objets dans FreeCAD ont ce qu'on appelle un "[viewprovider](/Viewprovider/fr "Viewprovider/fr")", c'est-à-dire une classe qui définit l'apparence visuelle de l'objet dans la [vue 3D](/3D_view/fr "3D view/fr") et dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Le viewprovider par défaut des objets Part Feature définit les propriétés suivantes. Les objets scriptés dérivés de Part Feature auront également accès à ces propriétés.

Base

* Vue (caché)**Proxy** (`PythonObject`): une classe [viewprovider](/Viewprovider/fr "Viewprovider/fr") personnalisée associée à cet objet. Cela n'existe que pour la version [Python](/Python/fr "Python/fr"). Voir [Script](#Script).

Options d'affichage

* Vue**Bounding Box** (`Bool`): si `true`, l'objet affichera le cadre de délimitation dans la [Vue 3D](/3D_view/fr "3D view/fr").
* Vue**Display Mode** (`Enumeration`): `Flat Lines` (visualisation régulière), `Shaded` (pas d'arêtes), `Wireframe` (pas de faces), `Points` (uniquement les sommets).
* Vue**Show In Tree** (`Bool`): la valeur par défaut est `true`, auquel cas l'objet apparaîtra dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") sinon, l'objet sera masqué dans l'arborescence. Une fois qu'un objet de l'arborescence est invisible, vous pouvez le revoir en ouvrant le menu contextuel sur le nom du document (clic droit) et en sélectionnant ![](/images/CheckBoxTrue.svg) Show hidden items. Ensuite, l'élément masqué peut être choisi et Vue**Show In Tree** peut être rétabli à `true`.
* Vue**Visibility** (`Bool`): si `true`, l'objet apparaît dans la [Vue 3D](/3D_view/fr "3D view/fr") sinon, il est invisible. Par défaut, cette propriété peut être activée et désactivée en appuyant sur la barre Espace.

Style de l'objet

* Vue**Angular Deflection** (`Angle`) : il accompagne Vue**Déviation**. C'est un autre moyen de spécifier la précision avec laquelle générer le maillage pour le rendu à l'écran ou lors de l'exportation. La valeur par défaut est `28.5 degrees` ou `0.5 radians`. Il s'agit de la valeur maximale, plus la valeur est petite, plus l'apparence sera lisse dans la [vue 3D](/3D_view/fr "3D view/fr") et plus le maillage exporté sera fin.
* Vue**Deviation** (`FloatConstraint`) : il accompagne Vue**Déviation angulaire**. C'est un autre moyen de spécifier la précision avec laquelle générer le maillage pour le rendu à l'écran ou lors de l'exportation. La valeur par défaut est `0.5%`. Il s'agit de la valeur maximale, plus la valeur est petite, plus l'apparence sera lisse dans la [vue 3D](/3D_view/fr "3D view/fr") et plus le maillage exporté sera fin.
* Vue (hidden)**Diffuse Color** (`ColorList`): c'est une liste de tuples RVB définissant les couleurs, similaire à Vue**Shape Color**. La valeur par défaut est la liste `[(0.8, 0.8, 0.8)]`.
* Vue**Draw Style** (`Enumeration`): `Solid` (default), `Dashed`, `Dotted`, `Dashdot` ; définit le style des bords dans la [vue 3D](/3D_view/fr "3D view/fr").
* Vue**Lighting** (`Enumeration`): `Two side` (par défaut), `One side` ; l'éclairage provient de deux côtés ou d'un seul côté dans la [vue 3D](/3D_view/fr "3D view/fr").
* Vue**Line Color** (`Color`) : un tuple de trois valeurs RVB à virgule flottante `(r,g,b)` pour définir la couleur des bords dans la [vue 3D](/3D_view/fr "3D view/fr") ; la valeur par défaut est `(0. 09, 0.09, 0.09)`, qui est affichée comme `[25,25,25]` sur la base 255,  presque noir .
* Vue (hidden)**Line Color Array** (`ColorList`) : il s'agit d'une liste de tuples RVB définissant les couleurs, similaire à Vue**Line Color**. Par défaut, il s'agit d'une liste de `[(0.09, 0.09, 0.09)]`.
* Vue (hidden)**Line Material** (`Material`) : un [App Material](/index.php?title=App_Material/fr&action=edit&redlink=1 "App Material/fr (page does not exist)") associé aux bords de cet objet. Par défaut, il est vide.
* Vue**Line Width** (`FloatConstraint`) : un flottant qui détermine la largeur en pixels des bords dans la [vue 3D](/3D_view/fr "3D view/fr"). La valeur par défaut est `2.0`.

* Vue**Point Color** (`Color`): similair à Vue**Line Color**, définit la couleur des sommets.
* Vue (caché)**Point Color Array** (`ColorList`): c'est une liste de tuples RVB définissant les couleurs, similaire à Vue**Point Color**. la valeur par défaut est la liste `[(0.09, 0.09, 0.09)]`.
* Vue (caché)**Point Material** (`Material`): un [App Material](/index.php?title=App_Material/fr&action=edit&redlink=1 "App Material/fr (page does not exist)") associé aux arêtes de cet objet. Par defaut c'est vide.
* Vue**Point Size** (`FloatConstraint`): similaire à Vue**Line Width**, définit la taille des sommets.

* Vue**Shape Color** (`Color`): similaire à Vue**Line Color**, définit la couleur des faces. Il est par défaut `(0.8, 0.8, 0.8)` qui est affiché comme `[204,204,204]` sur la base 255, a gris clair .
* Vue (hidden)**Shape Material** (`Material`): un [App Material](/index.php?title=App_Material/fr&action=edit&redlink=1 "App Material/fr (page does not exist)") associé aux arêtes de cet objet. Par defaut c'est vide.
* Vue**Transparency** (`Percent`): un entier de `0` à `100` (un pourcentage) qui détermine le niveau de transparence des faces dans la [Vue 3D](/3D_view/fr "3D view/fr"). Une valeur de `100` indique des faces complètement invisibles; les visages sont invisibles, mais ils peuvent toujours être sélectionnés tant que Vue**Selectable** est `true`.

Selection

* Vue**On Top When Selected** (`Enumeration`): contrôle la manière dont la sélection s'effectue dans la [Vue 3D](/3D_view/fr "3D view/fr"), si l'objet a une [Shape](/Part_TopoShape/fr "Part TopoShape/fr") et s'il y a beaucoup d'objets partiellement couverts par d'autres. La valeur par défaut est `Disabled`, ce qui signifie qu'aucune mise en évidence spéciale ne se produira; `Enabled` signifie que l'objet apparaîtra au-dessus de tout autre objet lorsqu'il est sélectionné; `Object` signifie que l'objet n'apparaîtra en haut que si l'objet entier est sélectionné dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"); `Element` signifie que l'objet n'apparaîtra en haut que si un sous-élément (sommet, arête, face) est sélectionné dans la [Vue 3D](/3D_view/fr "3D view/fr").
* Vue**Selectable** (`Bool`): s'il est `true`, l'objet peut être sélectionné avec le pointeur dans la [Vue 3D](/3D_view/fr "3D view/fr"). Sinon, l'objet ne peut pas être sélectionné tant que cette option n'est pas définie sur `true`.
* Vue**Selection Style** (`Enumeration`): il contrôle la façon dont l'objet est mis en évidence. Si c'est `Shape`, la forme entière (sommets, arêtes et faces) sera mise en surbrillance dans la [Vue 3D](/3D_view/fr "3D view/fr"); s'il s'agit de `BoundBox`, un cadre de délimitation apparaîtra autour de l'objet et sera mis en surbrillance.

### Déflexion angulaire et déviation

![](/images/View_property_Deviation.svg)

Déflexion angulaire et paramètres de déviation ; d < déflexion linéaire, α < déflexion angulaire.

L'écart est une valeur en pourcentage qui est liée aux dimensions en millimètres de la boîte englobante de l'objet. L'écart en millimètres peut être calculé comme suit:

```
deviation_in_mm = (w + h + d)/3 * deviation/100

```

où `w`, `h`, `d` sont les dimensions de la boîte englobante.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Une entité de pièce, Part Feature, est créée avec la méthode `addObject()` du document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Feature", "Name")
obj.Label = "Custom label"

```

Pour la sous-classification de [Python](/Python/fr "Python/fr"), vous devez créer l'objet `Part::FeaturePython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::FeaturePython", "Name")
obj.Label = "Custom label"

```

### Name (Nom)

Voir aussi : [Object name](/Object_name/fr "Object name/fr") pour plus d'informations sur les propriétés de `Name`.

La méthode `addObject` possède deux arguments de base de type chaîne.

* Le premier argument indique le type d'objet, dans ce cas, `"Part::FeaturePython"`.
* Le deuxième argument est une chaîne qui définit l'attribut `Name`. S'il n'est pas fourni, il utilise par défaut le même nom que la classe, c'est-à-dire `"Part__FeaturePython"`. `Name` ne peut contenir que des caractères alphanumériques simples et le trait de soulignement, `[_0-9a-zA-Z]`. Si d'autres symboles sont donnés, ils seront convertis en traits de soulignement; par exemple, `"A+B:C*"` est converti en `"A_B_C_"`.

### Label (Étiquette)

Si vous le souhaitez, l'attribut `Label` peut être remplacé par un texte plus significatif.

* `Label` peut accepter n'importe quelle chaîne UTF8, y compris les accents et les espaces. Puisque la [Vue en arborescence](/Tree_view/fr "Tree view/fr") affiche `Label`, il est recommandé de changer `Label` en une chaîne plus descriptive.
* Par défaut, `Label` est unique, tout comme `Name`. Ce comportement peut être modifié dans [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr"), **Édition → Préférences → Général → Document → Autoriser la duplication des étiquettes dans un document**. Cela signifie qu'en général, `Label` peut être répété dans le même document. Lors du test d'un élément spécifique, l'utilisateur doit s'appuyer sur `Name` plutôt que sur `Label`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Feature/fr&oldid=1560981>"