---
title: Wiki Object Properties List Generator Version basique
---

|                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Generic macro icon](/File:Text-x-python.png "Generic macro icon") Wiki List Generator of Object Properties                                                                                                                      |
| Description                                                                                                                                                                                                                      |
| Cette macro génère la liste des propriétés de l'objet sélectionné. Liste présentée au format wiki dans la vue du rapport Python. Version macro : 0.1 Date dernière modification : 2021-09 Auteur: Evgeniy                        |
| Auteur                                                                                                                                                                                                                           |
| [Evgeniy](/User:Evgeniy "User:Evgeniy")                                                                                                                                                                                          |
| Téléchargement                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                            |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                    |
| 0.1                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                            |
| 2021-09                                                                                                                                                                                                                          |
| Version(s) FreeCAD                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                           |
| Voir aussi                                                                                                                                                                                                                       |
| [Macro Wiki Object Properties List Generator](/Macro_Wiki_Object_Properties_List_Generator/fr "Macro Wiki Object Properties List Generator/fr")                                                                                  |
|                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                  |

## Description

Cette simple macro génère la liste des propriétés de l'objet sélectionné. La liste des paramètres est imprimée dans la [Vue rapport](/Report_view/fr "Report view/fr") de FreeCAD. Cet exemple est de nature plus pédagogique et n'est pas applicable pour une utilisation sans édition après génération, puisqu'il inclut absolument tous les paramètres de l'objet. Les listes de propriétés qui sont publiées dans ce wiki ne contiennent, en règle générale, que des paramètres uniques. Les paramètres hérités des objets parents ne sont pas publiés.

## Utilisation

- Préparation :
  - Copiez le code de la macro de cette page et placez-le dans un nouveau fichier \*.FCMacro.
  - Enregistrez le fichier FCMacro. Et placez-le dans le dossier Macros de FreeCAD.
  - Désactiver la case à cocher **Inclure un timecode pour chaque entrée** dans Préférences -> Général -> Fenêtre de sortie (onglet).
- Première utilisation :
  - Sélectionnez (ou créez et sélectionnez) l'objet dont vous avez besoin dans l'arborescence.
  - Sélectionnez l'élément Macro -> Macros... dans le menu principal.
  - Dans la fenêtre ouverte, trouvez le fichier \*.FCMacro que vous avez sauvegardé et appuyez sur le bouton **Lancer**.
- Comment l'utiliser à nouveau :
  - Pour exécuter rapidement cette macro à nouveau, vous pouvez utiliser le raccourci clavier **Shift+Ctrl+1** (sous Windows) qui lancera la dernière macro exécutée.

## Recommendations

Ne supprimez pas les espaces entre les lignes. Cela est nécessaire pour simplifier la traduction. Chaque ligne séparée par un espace sera considérée comme une partie distincte pour la traduction. Lorsque vous créez des textes, n'oubliez jamais que les grands fragments monolithiques de texte sont difficiles à traduire pour les traducteurs.

## Exemples d'utilisation

- Par exemple, ouvrez l'atelier Arch
- Créez un objet Structure.
- Sélectionnez l'objet Structure créé.
- Exécutez la macro.
- Copiez le texte de la vue du rapport et collez-le dans une page wiki et vérifiez le résultat.

## Résultats de l'utilisation

Les résultats peuvent ressembler à ceci :

## Properties

### View

- Vue**Proxy** (`PythonObject`):

Component

- Vue**UseMaterialColor** (`Bool`): Use the material color as this object's shape color, if available

Display Options

- Vue**BoundingBox** (`Bool`): Display object bounding box

- Vue**DisplayMode** (`Enumeration`): Set the display mode

- Vue**ShowInTree** (`Bool`): Show the object in the tree view

- Vue**Visibility** (`Bool`): Show the object in the 3d view

Nodes

- Vue**NodeColor** (`Color`): The color of the nodes line

- Vue**NodeLine** (`Float`): The width of the nodes line

- Vue**NodeSize** (`Float`): The size of the node points

- Vue**NodeType** (`Enumeration`): The type of structural node

- Vue**ShowNodes** (`Bool`): If the nodes are visible or not

Object Style

- Vue**AngularDeflection** (`Angle`): Specify how finely to generate the mesh for rendering on screen or when exporting.

The default value is 28.5 degrees, or 0.5 radians. The smaller the value
the smoother the appearance in the 3D view, and the finer the mesh that will be exported.

- Vue**Deviation** (`FloatConstraint`): Sets the accuracy of the polygonal representation of the model

in the 3D view (tessellation). Lower values indicate better quality.
The value is in percent of object's size.

- Vue**DiffuseColor** (`ColorList`): Object diffuse color.

- Vue**DrawStyle** (`Enumeration`): Defines the style of the edges in the 3D view.

- Vue**Lighting** (`Enumeration`): Set object lighting.

- Vue**LineColor** (`Color`): Set object line color.

- Vue**LineColorArray** (`ColorList`): Object line color array.

- Vue**LineMaterial** (`Material`): Object line material.

- Vue**LineWidth** (`FloatConstraint`): Set object line width.

- Vue**PointColor** (`Color`): Set object point color

- Vue**PointColorArray** (`ColorList`): Object point color array.

- Vue**PointMaterial** (`Material`): Object point material.

- Vue**PointSize** (`FloatConstraint`): Set object point size.

- Vue**ShapeColor** (`Color`): Set shape color

- Vue**ShapeMaterial** (`Material`): Shape material

- Vue**Transparency** (`Percent`): Set object transparency

Selection

- Vue**OnTopWhenSelected** (`Enumeration`): Enabled: Display the object on top of any other object when selected

Object: On top only if the whole object is selected
Element: On top only if some sub-element of the object is selected

- Vue**Selectable** (`Bool`): Set if the object is selectable in the 3d view

- Vue**SelectionStyle** (`Enumeration`): Set the object selection style

### Data

- Données**Placement** (`Placement`):

- Données**Proxy** (`PythonObject`):

- Données**Shape** (`Part::PropertyPartShape`):

- Données**Visibility** (`Bool`):

Base

- Données (Hidden)**ExpressionEngine** (`ExpressionEngine`): Property expressions

- Données**Label** (`String`): User name of the object (UTF8)

- Données (Hidden)**Label2** (`String`): User description of the object (UTF8)

Component

- Données**Additions** (`LinkList`): Other shapes that are appended to this object

- Données**Axis** (`Link`): An optional axis or axis system on which this object should be duplicated

- Données**Base** (`Link`): The base object this component is built upon

- Données**CloneOf** (`Link`): The object this component is cloning

- Données**HiRes** (`Link`): An optional higher-resolution mesh or shape for this object

- Données**HorizontalArea** (`Area`): The area of the projection of this object onto the XY plane

- Données**Material** (`Link`): A material for this object

- Données**MoveBase** (`Bool`): Specifies if moving this object moves its base instead

- Données**MoveWithHost** (`Bool`): Specifies if this object must move together when its host is moved

- Données**PerimeterLength** (`Length`): The perimeter length of the horizontal area

- Données**StandardCode** (`String`): An optional standard (OmniClass, etc...) code for this component

- Données**Subtractions** (`LinkList`): Other shapes that are subtracted from this object

- Données**VerticalArea** (`Area`): The area of all vertical faces of this object

IFC

- Données**IfcData** (`Map`): IFC data

- Données**IfcProperties** (`Map`): IFC properties of this object

- Données**IfcType** (`Enumeration`): The type of this object

IFC Attributes

- Données**Description** (`String`): Description of IFC attributes are not yet implemented

- Données**GlobalId** (`String`): Description of IFC attributes are not yet implemented

- Données**ObjectType** (`String`): Description of IFC attributes are not yet implemented

- Données**PredefinedType** (`Enumeration`): Description of IFC attributes are not yet implemented

- Données**Tag** (`String`): Description of IFC attributes are not yet implemented

Structure

- Données**FaceMaker** (`Enumeration`): The facemaker type to use to build the profile of this object

- Données**Height** (`Length`): The height or extrusion depth of this element. Keep 0 for automatic

- Données**Length** (`Length`): The length of this element, if not based on a profile

- Données**Nodes** (`VectorList`): The structural nodes of this element

- Données**NodesOffset** (`Distance`): Offset distance between the centerline and the nodes line

- Données**Normal** (`Vector`): The normal extrusion direction of this object (keep (0,0,0) for automatic normal)

- Données**Profile** (`String`): A description of the standard profile this element is based upon

- Données**Tool** (`Link`): An optional extrusion path for this element

- Données**Width** (`Length`): The width of this element, if not based on a profile

## Script

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 <Evgeniy> LG
from FreeCAD import Qt

def print_obj_properties(obj,typ):
   prop={}
   i=1
   for pr in obj.PropertiesList:
      tp = obj.getTypeIdOfProperty(pr) or ""
      atr = obj.getTypeOfProperty(pr) or ("")
      # Wiki template supports only Hidden type of property. But it can be as: Hidden,Output,Readonly etc...
      if atr != "" and atr[0] == "Hidden":
         atr = "|"+atr[0]
      else:
         atr = ""
      prop[str(i)] = pr,obj.getGroupOfProperty(pr),tp.replace("App::Property",""),obj.getDocumentationOfProperty(pr),atr
      i+=1
   sorted_prop = sorted(prop.items(), key=lambda x: x[1][1])

   title=""
   for pr in sorted_prop:
      if title != pr[1][1]:
         title = pr[1][1]
         print("\n"+"{{TitleProperty{"+title+"}}")
      print("\n"+"* {{Property"+typ+"{"+pr[1][0]+"{"+pr[1][2]+pr[1][4]+"}}: "+pr[1][3])

print("\n"+"==Properties==")
print("\n"+"===View===")
obj = Gui.activeDocument().ActiveObject
print_obj_properties(obj,"View")
print("\n"+"===Data===")
obj = FreeCAD.activeDocument().ActiveObject
print_obj_properties(obj,"Data")

```

## Liens

La discussion sur le forum : <https://forum.freecadweb.org/viewtopic.php?f=21&t=61998>

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Wiki_Object_Properties_List_Generator_Basic_Version/fr&oldid=1273927>"
