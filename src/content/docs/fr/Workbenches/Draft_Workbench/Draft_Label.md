---
title: Draft Étiquette
---
|  |
| --- |
| Draft Étiquette |
| Emplacement du menu |
| Annotation → Étiquette |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| D L |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Draft Texte](/Draft_Text/fr "Draft Text/fr"), [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") |
|  |

## Description

La commande ![](/images/Draft_Label.svg) **Draft Étiquette** crée un texte de plusieurs lignes avec une ligne d'attache à deux segments et une flèche.

Si un objet ou un sous-élément (face, arête ou sommet) est sélectionné au lancement de la commande, on peut faire en sorte que le texte affiche un ou deux attributs de l'élément sélectionné, notamment la position, la longueur, l'aire, le volume et le matériau. Le texte sera alors lié aux attributs et sera mis à jour si leurs valeurs changent.

Pour insérer un élément de texte sans flèche, utilisez plutôt la commande [Draft Texte](/Draft_Text/fr "Draft Text/fr").

![](/images/Draft_Label_example.jpg)

Différentes étiquettes avec différentes orientations, flèches et informations

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Sélectionnez éventuellement un objet ou un sous-élément (sommet, arête ou face) dont vous souhaitez afficher les attributs.
2. Il existe plusieurs façons d'invoquer la commande :
   * Appuyez sur le ![](/images/Draft_Label.svg) Étiquette.
   * Sélectionnez l'option **Annotation → ![](/images/Draft_Label.svg) Étiquette** dans le menu.
   * Utilisez le raccourci clavier : D puis L.
3. Le panneau de tâches **Étiquette** s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Si vous avez sélectionné un élément : sélectionnez une option dans la liste déroulante **Label type**. Voir [Types d'étiquettes](#Label_types) ci-dessous.
5. Choisissez le premier point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point. Ce point indique la cible (tête de flèche). Il peut se trouver n'importe où, il n'est pas nécessaire qu'il soit sur un élément.
6. Choisissez le deuxième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point. Ce point indique le début du segment horizontal ou vertical de l'attache.
7. Choisissez le troisième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point bouton. Ce point indique le point de base du texte.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut.

* Pour saisir manuellement des coordonnées, entrez les valeurs X, Y et Z et appuyez sur Entrée après chacune. Ou bien vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur R ou cliquez sur la case **Relative** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées sont relatives au dernier point, si disponible, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyez sur G ou cliquez sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour abandonner la commande.

## Types d'étiquettes

Les types d'étiquettes suivants sont disponibles :

* `Custom` : affiche le contenu de Données**Custom Text**.
* `Name` : affiche le nom interne de l'objet cible. Le nom interne est attribué lors de la création de l'objet et reste fixe pendant toute l'existence de l'objet.
* `Label` : affiche le libellé de l'objet cible. Le libellé d'un objet peut être modifié par l'utilisateur.
* `Position` : affiche les coordonnées du point de base de l'objet cible ou du sommet cible.
* `Length` : affiche la longueur de l'objet ou du sous-élément cible.
* `Area` : affiche la surface de l'objet ou du sous-élément cible.
* `Volume` : affiche le volume de l'objet cible.
* `Tag` : affiche l'attribut `Tag` de l'objet cible. Les objets créés avec l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") peuvent avoir cet attribut.
* `Material` : affiche le libellé du matériau de l'objet cible.
* `Label + Position` : affiche le libellé du matériau de l'objet cible.
* `Label + Length`
* `Label + Area`
* `Label + Volume`
* `Label + Material`

## Remarques

* La direction du deuxième segment de l'attache détermine l'alignement du texte. Si le segment est horizontal et pointe vers la droite, le texte est aligné sur la gauche et vice versa. Si le deuxième segment va verticalement vers le haut, le texte est aligné sur la gauche. S'il va verticalement vers le bas, le texte est aligné sur la droite.
* Les Draft Étiquettes créées ou enregistrées avec la [version 0.21 de FreeCAD](/Release_notes_0.21/fr "Release notes 0.21/fr") ne sont pas rétrocompatibles.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Etiquette est dérivé d'un objet [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Les propriétés suivantes sont supplémentaires, sauf indication contraire :

### Données

Base

* Données**Custom Text** (`StringList`) : spécifie le contenu du texte si Données**Label Type** est `Custom` (personnalisé). Chaque élément de la liste représente une nouvelle ligne de texte.
* Données**Label Type** (`Enumeration`) : spécifie le type d'information affiché par l'étiquette. Voir [Types d'étiquettes](#Types_d.27.C3.A9tiquettes).
* Données**Placement** (`Placement`) : spécifie la position du texte dans la [vue 3D](/3D_view/fr "3D view/fr") et, à moins que Données**Straight Direction** ne soit `Custom` (personnalisé), également du premier segment de l'attache, qui est le segment où le texte est rattaché. Voir [Placement](/Placement/fr "Placement/fr").
* Données**Text** (`StringList`) : (en lecture seule) spécifie le contenu du texte qui est effectivement affiché. Chaque élément de la liste représente une nouvelle ligne de texte.

Leader

* Données**Points** (`VectorList`) : spécifie les points de l'attache.
* Données**Straight Direction** (`Enumeration`) : spécifie la direction du premier segment de l'attache : `Custom`, `Horizontal` ou `Vertical`.
* Données**Straight Distance** (`Distance`) : spécifie la longueur du premier segment de l'attache. Utilisé uniquement si Données**Straight Direction** est `Horizontale` ou `Verticale`. Si la distance est positive, l'attache part du côté droit du texte et le texte s'aligne sur la droite. Sinon, l'attache part du côté gauche du texte et le texte s'aligne sur la gauche.

Target

* Données**Target** (`LinkSub`) : spécifie l'objet et le sous-élément facultatif auquel l'étiquette est liée.
* Données**Target Point** (`Vector`) : spécifie la position de la pointe de l'attache, qui est l'endroit où la flèche est attachée.

### Vue

Annotation

* Vue**Annotation Style** (`Enumeration`) : spécifie le style d'annotation appliqué à l'étiquette. Voir [Draft Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr").
* Vue**Scale Multiplier** (`Float`) : spécifie le facteur d'échelle général appliqué à l'étiquette.

Display Options

* Vue**Display Mode** (`Enumeration`) : spécifie comment le texte est affiché. S'il s'agit de `World`, le texte sera affiché sur un plan défini par la Données**Placement** de l'étiquette. S'il s'agit de `Screen`, le texte sera toujours tourné vers l'écran. Il s'agit d'une propriété héritée. Les options mentionnées sont les options renommées ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")).

Graphics

* Vue**Arrow Size** (`Length`) : spécifie la taille du symbole affiché à l'extrémité de l'attache.
* Vue**Arrow Type** (`Enumeration`) : spécifie le type de symbole affiché à l'extrémité de l'attache, qui peut être `Dot`, `Circle`, `Arrow`, `Tick` ou `Tick-2`.
* Vue**Frame** (`Enumeration`) : spécifie le type de cadre dessiné autour du texte. Les options pour le moment sont `None` ou `Rectangle`.
* Vue**Line** (`Bool`) : indique s'il faut afficher la ligne d'attache. S'il est `false`, seuls la flèche et le texte sont affichés.
* Vue**Line Color** (`Color`) : spécifie la couleur de l'attache et de la flèche. Également utilisée pour le cadre.
* Vue**Line Width** (`Float`) : spécifie la largeur de l'attache. Également utilisé pour le cadre.

Text

* Vue**Text Name** (`Font`) : spécifie la police utilisée pour dessiner le texte. Il peut s'agir d'un nom de police, tel que `Arial`, d'un style par défaut tel que `sans`, `serif` ou `mono`, d'une famille telle que `Arial,Helvetica,sans`, ou d'un nom avec un style tel que `Arial:Bold`. Si la police donnée n'est pas trouvée sur le système, une police par défaut est utilisée à la place. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Vue**Font Size** (`Length`) : spécifie la taille des lettres. Le texte peut être invisible dans la [vue 3D](/3D_view/fr "3D view/fr") si cette valeur est très petite. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Vue**Justification** (`Enumeration`) : spécifie l'alignement horizontal du texte : `Left`, `Center` ou `Right`. Utilisé uniquement si Données**Straight Direction** est `Custom` (personnalisée). Sinon, l'alignement horizontal est basé sur le signe (positif ou négatif) de Données**Straight Distance**.
* Vue**Line Spacing** (`Float`) : spécifie le facteur appliqué à la hauteur de ligne par défaut du texte.
* Vue**Max Chars** (`Integer`) : spécifie le nombre maximum de caractères sur chaque ligne du texte.
* Vue**Text Alignment** (`Enumeration`) : spécifie l'alignement vertical du texte : `Top`, `Middle` ou `Bottom`.
* Vue**Text Color** (`Color`) : spécifie la couleur du texte.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer une Draft Étiquette, utilisez la méthode `make_label` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeLabel`.

```
label = make_label(target_point=App.Vector(0, 0, 0),
                   placement=App.Vector(30, 30, 0),
                   target_object=None, subelements=None,
                   label_type="Custom", custom_text="Label",
                   direction="Horizontal", distance=-10,
                   points=None)

```

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
doc.recompute()

p1 = App.Vector(-200, 1000, 0)
place1 = App.Placement(App.Vector(-1000, 1300, 0), App.Rotation())

label1 = Draft.make_label(p1, place1, target_object=rectangle, distance=500, label_type="Label")
label1.ViewObject.FontSize= 200

p2 = App.Vector(-200, 0, 0)
place2 = App.Placement(App.Vector(-1000, -300, 0), App.Rotation())

label2 = Draft.make_label(p2, place2, target_object=rectangle, distance=500, label_type="Custom",
                          custom_text="Beware of the sharp edges")
label2.ViewObject.FontSize= 200

p3 = App.Vector(1000, 1200, 0)
place3 = App.Placement(App.Vector(2000, 1800, 0), App.Rotation())

label3 = Draft.make_label(p3, place3, target_object=rectangle, distance=-500, label_type="Area")
label3.ViewObject.FontSize= 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Label/fr&oldid=1513946>"