---
title: Std Part
---
|  |
| --- |
| Std Part |
| Emplacement du menu |
| Aucun |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Std Groupe](/Std_Group/fr "Std Group/fr"), [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") |
|  |

## Description

![](/images/Std_Part.svg) Std Part (appelé en interne [App Part](/App_Part/fr "App Part/fr")) est un conteneur à usage général qui regroupe un groupe d'objets de manière à ce qu'ils puissent être déplacés ensemble en tant qu'unité dans la [vue 3D](/3D_view/fr "3D view/fr").

L'élément Std Part a été développé pour être le bloc de construction de base pour créer des [assemblages](/Assembly/fr "Assembly/fr") mécaniques. En particulier, il est conçu pour organiser les objets qui ont une [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr"), comme des [Part Primitives](/Part_CreatePrimitives/fr "Part CreatePrimitives/fr"), des [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") et autres [Part Features](/Part_Feature/fr "Part Feature/fr"). Std Part génère un [objet Origin](#Origine) avec des axes X, Y et Z locaux et des plans standards, qui peuvent être utilisés comme référence pour positionner les objets contenus. De plus, des Std Parts peuvent être imbriquées dans d'autres Std Parts pour créer un grand assemblage à partir de sous-assemblages plus petits.

Bien qu'il soit principalement destiné aux corps solides, Std Part peut être utilisé pour gérer tout objet possédant une propriété de [Positionnement](/Placement/fr "Placement/fr"), elle peut donc également contenir des [Mesh Features](/Mesh_Feature/fr "Mesh Feature/fr"), des [Esquisses](/Sketch/fr "Sketch/fr") et d'autres objets dérivés de la classe [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr").

**Ne confondez pas** le ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") avec ![](/images/Std_Part.svg) Std Part. Le premier est un objet spécifique utilisé dans l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), destiné à modéliser un [solide contigu unique](/PartDesign_Body/fr#Solide_contigu_unique "PartDesign Body/fr") au moyen de [PartDesign Features](/PartDesign_Feature/fr "PartDesign Feature/fr"). En revanche, [Std Part](/Std_Part "Std Part") n'est pas utilisée pour la modélisation, juste pour arranger différents objets dans l'espace, avec l'intention de créer des [assemblages](/Assembly/fr "Assembly/fr").

L'outil ![](/images/Std_Part.svg) Std Part n'est pas défini par un atelier particulier mais par le système de base. Il se trouve donc dans la **structure toolbar** qui est disponible dans tous les [ateliers](/Workbenches/fr "Workbenches/fr"). Pour regrouper des objets arbitrairement sans tenir compte de leur position, utilisez ![](/images/Std_Group.svg) [Std Groupe](/Std_Group/fr "Std Group/fr"). Cet objet n'affecte pas les placements des éléments qu'il contient, c'est juste un dossier qui sert à garder la [vue en arborescence](/Tree_view/fr "Tree view/fr") organisée.

![](/images/Std_Part-tree.png)![](/images/Std_Part_example.png)

À gauche : éléments à l'intérieur d'un Std Part dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").  
À droite : les objets positionnés dans l'espace et référencés par rapport à l'origine de Std Part.

## Utilisation

1. Appuyez sur le bouton ![](/images/Std_Part.svg) Créer une pièce.
2. Une pièce vide est créée et devient automatiquement *[active](#Statut_actif)*.
3. Pour ajouter des objets à la pièce, sélectionnez-les dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), puis faites-les glisser et déposez-les sur la pièce.
4. Pour retirer des objets de la pièce, faites-les glisser hors de la pièce et déposez-les sur l'étiquette du document en haut de la [vue en arborescence](/Tree_view/fr "Tree view/fr").
5. Vous pouvez également ajouter et supprimer des objets en modifiant la propriété Données**Group** de la pièce.

## Remarques

* Un objet ne peut appartenir qu'à une seule pièce.
* Les opérations 3D comme les [Part Opérations booléennes](/Part_Boolean/fr "Part Boolean/fr") ne peuvent pas être appliquées aux pièces. Par exemple, vous ne pouvez pas sélectionner deux pièces et effectuer une [Part Union](/Part_Fuse/fr "Part Fuse/fr") ou une [Part Soustraction](/Part_Cut/fr "Part Cut/fr").

## Propriétés

Std Part, appelé en interne [App Part](/App_Part/fr "App Part/fr") (classe `App::Part`), est dérivé de [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr") (classe `App::GeoFeature`) et hérite de toutes ses propriétés. Il possède également plusieurs propriétés supplémentaires, notamment des propriétés qui l'aident à gérer les informations dans le contexte d'un assemblage, par exemple, Données**Type**, Données**Id**, Données**License**, Données**LicenseURL** et Données**Group**.

Ce sont les propriétés disponibles dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés masquées peuvent être affichées en utilisant la commande **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données**Type** (`String`) : une description pour cet objet. Par défaut, il s'agit d'une chaîne vide `""`.
* Données**Material** (`Link`) : le matériau de cet objet.
* Données (Hidden)**Meta** (`Map`) : avec des méta-informations supplémentaires. Par défaut, il est vide `{}`.
* Données**Id** (`String`) : une identification ou un numéro de pièce pour cet objet. Par défaut, il s'agit d'une chaîne vide `""`.
* Données (Hidden)**Uid** (`UUID`) : l'[identificateur unique et universel](https://fr.wikipedia.org/wiki/Universally_unique_identifier) (UUID) (numéro de 128 bits) de l'objet. Il est attribué au moment de la création.
* Données**License** (`String`) : champ permettant de spécifier la licence de cet objet. Par défaut, il s'agit d'une chaîne vide `""`.
* Données**LicenseURL** (`String`) : champ permettant de spécifier l'adresse web de la licence ou du contrat pour cet objet. Par défaut, il s'agit d'une chaîne vide `""`.
* Données**Color** (`Color`) : un tuple de quatre valeurs RGBA à virgule flottante `(r,g,b,a)` pour définir la couleur de l'objet ; par défaut, il s'agit de `(1.0, 1.0, 1.0, 1.0)`, qui s'affiche comme `[255,255,255]` sur la base 255, couleur blanche.
* Données**Placement** (`Placement`) : la position de l'objet dans la [Vue 3D](/3D_view/fr "3D view/fr"). L'emplacement est défini par un point `Base` (vecteur) et un `Rotation` (axe et angle). Voir [Placement](/Placement/fr "Placement/fr").
  + Données**Angle** : l'angle de rotation autour de Données**Axis**. Par défaut, il est `0°`. (zéro degré).
  + Données**Axis** : le vecteur unitaire qui définit l'axe de rotation du placement. Chaque composante est une valeur à virgule flottante comprise entre `0` et `1`. Si une valeur est supérieure à `1`, le vecteur est normalisé de manière à ce que sa magnitude soit `1`. Par défaut, il s'agit de l'axe Z positif, `(0, 0, 1)`.
  + Données**Position** : un vecteur contenant les coordonnées 3D du point de base. Par défaut, il s'agit de l'origine `(0, 0, 0)`.
* Données**Label** (`String`) : le nom modifiable par l'utilisateur de cet objet, il s'agit d'une chaîne UTF8 arbitraire.
* Données (Hidden)**Label2** (`String`) : une description plus longue, modifiable par l'utilisateur, de cet objet. Il s'agit d'une chaîne UTF8 arbitraire qui peut inclure des nouvelles lignes. Par défaut, il s'agit d'une chaîne vide `""`.
* Données (Hidden)**Expression Engine** (`ExpressionEngine`) : une liste d'expressions. Par défaut, elle est vide `[]`.
* Données (Hidden)**Visibility** (`Bool`) : affichage ou non l'objet.
* Données (Hidden)**Origin** (`Link`) : l'objet [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") qui sert de référence positionnelle pour tous les éléments énumérés dans Données**Group**.
* Données**Group** (`LinkList`) : une liste d'objets référencés. Par défaut, elle est vide `[]`.
* Données (Hidden)**\_Group Touched** (`Bool`) : indique si le groupe est touché ou non.

### Vue

Display Options

* Vue**Display Mode** (`Enumeration`) : `Group`.
* Vue**Show In Tree** (`Bool`) : si la valeur est `true`, l'objet apparaît dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sinon il est mis comme invisible.
* Vue**Visibility** (`Bool`) : si elle est `true`, l'objet apparaît dans la [vue 3D](/3D_view/fr "3D view/fr"), sinon il est invisible. Par défaut, cette propriété peut être activée ou désactivée en appuyant sur la barre Espace du clavier.

Selection

* Vue**On Top When Selected** (`Enumeration`) : `Disabled` (par défaut) (par défaut), `Enabled`, `Object`, `Element`.
* Vue**Selection Style** (`Enumeration`) : `Shape`. (par défaut), `BoundBox`. Si l'option est `Shape`, la forme entière (sommets, arêtes et faces) sera mise en évidence dans la [vue 3D](/3D_view/fr "3D view/fr"). Si elle est `BoundBox`, seule la boîte de délimitation sera mise en évidence.

## Explications détaillées

### Statut actif

Un document ouvert peut contenir plusieurs parties. Mais une seule pièce peut être active. La partie active est affichée dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") avec la couleur de fond spécifiée par la valeur **Contenant actif** dans l'[éditeur de préférences](/Preferences_Editor/fr#Couleurs "Preferences Editor/fr") (par défaut, bleu clair). Il sera également affiché avec du texte en gras.

Pour activer ou désactiver un Part :

* Double-cliquez dessus dans l'[arborescence](/Tree_view/fr "Tree view/fr") ou
* Ouvrez le menu contextuel (clic droit) et sélectionnez **Activer/désactiver l'objet**.

![](/images/Std_Part_active.png)

Document avec deux Std Parts, dont le second est actif.

### Origine

L'origine se compose des trois axes standard (X, Y, Z) et de trois plans standard (XY, XZ et YZ). Les [esquisses](/Sketch/fr "Sketch/fr") et d'autres objets peuvent être attachés à ces éléments lors de leur création.

![](/images/Part_Origin_tree.png) ![](/images/Part_Origin_view.png)

À gauche : Part Origin dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").  
À droite : représentation des éléments Origin dans la [vue 3D](/3D_view/fr "3D view/fr").

*Remarque* : L'origine est un [App Origin](/App_OriginGroupExtension/fr "App OriginGroupExtension/fr") objet (de classe `App::Origin`) tandis que les axes et les plans sont respectivement des objets de type `App::Line` et `App::Plane`. Chacun de ces éléments peut être masqué et non masqué individuellement avec la barre Espace. Cela est utile pour choisir la référence correcte lors de la création d'autres objets.

*Remarque 2 :* tous les éléments à l'intérieur du Part sont référencés à l'origine du Part, ce qui signifie que le Part peut être déplacé et tourné en référence au système de coordonnées global sans affecter le placement des éléments à l'intérieur.

### Gestion de la visibilité

La visibilité d'un Part remplace la visibilité de tout objet qu'elle contient. Si Part est masqué, les objets qu'il contient seront également masqués, même si leur propriété individuelle Vue**Visibility** est définie sur `true`. Si Part est visible, la Vue**Visibility** de chaque objet détermine si l'objet est affiché ou non.

![](/images/Part_Visibility_off.png) ![](/images/Part_Visibility_on.png)

La visibilité de Std Part détermine si les objets regroupés sous lui sont affichés dans la [vue 3D](/3D_view/fr "3D view/fr") ou non.  
À gauche : Part est masqué, donc aucun des objets ne sera affiché dans la [vue 3D](/3D_view/fr "3D view/fr").  
À droite : Part est visible, donc chaque objet contrôle sa propre visibilité.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Std Part ([App Part](/App_Part/fr "App Part/fr")) est créé avec la méthode `addObject()` du document. Une fois que Part existe, d'autres objets peuvent y être ajoutés avec les méthodes `addObject()` ou `addObjects()`.

```
import FreeCAD as App

doc = App.newDocument()
part = App.ActiveDocument.addObject("App::Part", "Part")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

part.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

Vous ne pouvez pas créer un `App::Part` scripté. Cependant, vous pouvez ajouter un comportement `App::Part` à un objet `Part::FeaturePython` scripté en utilisant le code suivant :

```
class MyGroup(object):
    def __init__(self, obj=None):
        self.Object = obj
        if obj:
            self.attach(obj)

    def dumps(self):
        return

    def loads(self, _state):
        return

    def attach(self, obj):
        obj.addExtension("App::OriginGroupExtensionPython")
        obj.Origin = FreeCAD.ActiveDocument.addObject("App::Origin", "Origin")

    def onDocumentRestored(self, obj):
        self.Object = obj

class ViewProviderMyGroup(object):
    def __init__(self, vobj=None):
        if vobj:
            vobj.Proxy = self
            self.attach(vobj)
        else:
            self.ViewObject = None

    def attach(self, vobj):
        vobj.addExtension("Gui::ViewProviderOriginGroupExtensionPython")
        self.ViewObject = vobj

    def dumps(self):
        return None

    def loads(self, _state):
        return None

App.ActiveDocument.addObject("Part::FeaturePython",
                             "Group",
                             MyGroup(),
                             ViewProviderMyGroup(),
                             True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/fr&oldid=1560991>"