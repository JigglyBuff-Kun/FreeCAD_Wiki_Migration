---
title: BIM Propriétés IFC
---
|  |
| --- |
| BIM Propriétés IFC |
| Emplacement du menu |
| Gestion → Gérer les propriétés IFC... |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Propriétés IFC** vous permet de modifier les propriétés IFC d'un objet sélectionné, de nombreux objets sélectionnés ou de tous les objets du document. Les propriétés IFC sont des informations attachées à des objets individuels. Ils ne peuvent être rattachés qu'à des [objets BIM](/BIM_Workbench/fr "BIM Workbench/fr") donc tout objet non-BIM doit d'abord être converti en objet BIM en utilisant l'outil [Arch Composant](/Arch_Component/fr "Arch Component/fr") avant de pouvoir recevoir des Propriétés IFC.

![](/images/BIM_ifcproperties_screenshot.png)

Gestionnaire de propriétés IFC

Les propriétés IFC peuvent être personnalisées, c'est-à-dire que vous pouvez définir votre propre nom et valeur pour elles, ou suivre un schéma prédéfini défini par la norme IFC. Ces propriétés sont définies dans **Property sets** et sont généralement disponibles pour les types IFC les plus courants. Par exemple, le jeu de propriétés **Pset\_BeamCommon** est conçu pour être attaché aux poutres. Les jeux de propriétés prédéfinis contiennent généralement des propriétés habituelles définies par le schéma IFC pour un type particulier. Par exemple, Pset\_WallCommon, qui doit être attaché aux murs, contient des propriétés qui définissent si le mur est porteur ou est extérieur ou intérieur.

Vous pouvez créer vos propres propriétés et jeux de propriétés et les attribuer à n'importe quel objet. Il n'y a aucune exigence dans le schéma IFC pour ajouter des Psets prédéfinis pour les types courants ou toute restriction pour ajouter des propriétés personnalisées. Il s'agit d'une décision laissée aux utilisateurs. Habituellement, lorsque vous travaillez en équipe, ces choses sont décidées en même temps que d'autres exigences BIM pour vous assurer que tous les modèles BIM produits répondent aux mêmes exigences.

### Définir vos propres jeux de propriétés

L'ensemble des propriétés prédéfinies disponibles est stocké dans le répertoire des ressources de FreeCAD, que l'on peut trouver en entrant ce nom dans la [console Python](/Python_console/fr "Python console/fr") :

```
FreeCAD.getResourceDir()

```

L'ensemble des propriétés prédéfinies se trouve dans /Mod/BIM/Presets/pset\_definitions.csv.

Dans le fichier CSV, chaque ligne représente un ensemble de propriétés différent, commençant par le nom de l'ensemble et un nombre quelconque de paires Name;Type, définissant un nom de propriété et son type. Par exemple:

```
Pset_FreeCAD;Name;IfcLabel;Version;IfcReal

```

Cela définirait un ensemble de propriétés nommé "FreeCAD" (le préfixe "Pset\_" n'est pas obligatoire mais est une pratique courante) qui contient deux propriétés: une appelée "Name" qui est un IfcLabel (un morceau de texte) et une autre appelée "Version" qui est un IfcReal (une valeur numérique avec des décimales).

Vous pouvez ajouter un fichier csv personnalisé contenant vos propres ensembles de propriétés. Ce fichier doit être nommé CustomPsets.csv et être placé dans $USERAPPDATA/BIM.

Le dossier $USERAPPDATA/BIM dépend de votre plate-forme/système d'exploitation :

* Sous Windows, c'est généralement : %APPDATA%/FreeCAD
* Sous Linux, il s'agit généralement de : %APPDATA%/FreeCAD : $HOME/.FreeCAD
* Sous macOS, il s'agit généralement de : $HOME/Library/Preferences/FreeCAD

Il peut également être trouvé en entrant ceci dans la console Python :

```
FreeCAD.getUserAppDataDir()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_IfcProperties/fr&oldid=1520980>"