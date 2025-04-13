---
title: Draft Texte
---
|  |
| --- |
| Draft Texte |
| Emplacement du menu |
| Annotation → Texte |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| T E |
| Introduit dans la version |
| 0.7 |
| Voir aussi |
| [Draft Étiquette](/Draft_Label/fr "Draft Label/fr"), [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") |
|  |

## Description

La commande ![](/images/Draft_Text.svg) **Draft Texte** crée un texte de plusieurs lignes à un endroit donné.

Pour créer un élément de texte avec une flèche, utilisez plutôt la commande [Draft Étiquette](/Draft_Label/fr "Draft Label/fr").

![](/images/Draft_Text_example.png)

Un seul point est nécessaire pour positionner le texte

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr") et [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Text.svg) Texte.
   * Sélectionnez l'option **Annotation → ![](/images/Draft_Text.svg) Texte** du menu.
   * Utilisez le raccourci clavier : T puis E.
2. Le panneau de tâches **Text** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Choisissez un point dans la [Vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
4. Saisissez le texte souhaité, appuyez sur Entrée pour commencer une nouvelle ligne.
5. Appuyez deux fois sur Entrée ou sur le bouton ![](/images/Button_valid.svg) Insérer du texte pour terminer la commande.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrez les valeurs de X, Y et Z et appuyez sur Entrée après chacune, ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur G ou cliquez sur la case **Global** pour basculer en mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur N ou cliquez sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir terminé, ce qui vous permet de continuer à créer des textes. Le raccourci ne fonctionne pas dans le deuxième panneau de tâches. Cette option n'est pas disponible dans le premier panneau de tâches dans FreeCAD version 0.19 et antérieure.
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour interrompre la commande.

## Remarques

* Un Draft Texte peut être édité en double-cliquant dessus dans l'arborescence.
* Les Draft Textes créés ou sauvegardés avec la [version 0.21 de FreeCAD](/Release_notes_0.21/fr "Release notes 0.21/fr") ne sont pas rétrocompatibles.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Texte est dérivé d'un objet [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Les propriétés suivantes sont supplémentaires, sauf indication contraire :

### Données

Base

* Données**Placement** (`Placement`) : spécifie la position du texte dans la [Vue 3D](/3D_view/fr "3D view/fr"). Voir [Placement](/Placement/fr "Placement/fr").
* Données**Text** (`StringList`) : spécifie le contenu du texte. Chaque élément de la liste représente une nouvelle ligne de texte.

### Vue

Annotation

* Vue**Annotation Style** (`Enumeration`) : spécifie le style d'annotation appliqué au texte. Voir [Draft Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr").
* Vue**Scale Multiplier** (`Float`) : spécifie le facteur d'échelle général appliqué au texte.

Display Options

* Vue**Display Mode** (`Enumeration`) : spécifie comment le texte est affiché. S'il s'agit de `World`, le texte sera affiché sur un plan défini par sa Données**Placement**. S'il s'agit de `Screen`, le texte sera toujours tourné vers l'écran. Il s'agit d'une propriété héritée. Les options mentionnées sont les options renommées ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")).

Graphics

* Vue**Line Color** (`Color`) : non utilisé.
* Vue**Line Width** (`Float`) : non utilisé.

Text

* Vue**Font Name** (`Font`) : spécifie la police utilisée pour dessiner le texte. Il peut s'agir d'un nom de police, tel que `Arial`, d'un style par défaut tel que `sans`, `serif` ou `mono`, d'une famille telle que `Arial,Helvetica,sans`, ou d'un nom avec un style tel que `Arial:Bold`. Si la police donnée n'est pas trouvée sur le système, une police par défaut est utilisée à la place.
* Vue**Font Size** (`Length`) : spécifie la taille des lettres. Le texte peut être invisible dans la [vue 3D](/3D_view/fr "3D view/fr") si cette valeur est très petite.
* Vue**Justification** (`Enumeration`) : spécifie l'alignement du texte : `Left`, `Center` ou `Right`.
* Vue**Line Spacing** (`Float`) : spécifie le facteur appliqué à la hauteur de ligne par défaut du texte.
* Vue**Text Color** (`Color`) : spécifie la couleur du texte.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un Draft Texte, utilisez la méthode `make_text` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeText`.

```
text = make_text(string, placement=None, screen=False)

```

* Crée un objet `text`, au `placement` qui peut être un `FreeCAD.Placement` mais aussi une `FreeCAD.Rotation` ou un `FreeCAD.Vector`.
* `string` est une chaîne de caractères ou une liste de chaînes de caractères. Si c'est une liste, chaque élément est affiché sur sa propre ligne.
* Si `screen` est `True`, le texte fait toujours face à la caméra, sinon il est affiché dans un plan défini par Données**Placement**.

Les propriétés d'affichage de `text` peuvent être modifiées en écrasant ses attributs, par exemple en changeant `ViewObject.FontSize` avec la nouvelle taille en millimètres.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

t1 = "This is a sample text"
p1 = App.Vector(0, 0, 0)

t2 = ["First line", "second line"]
p2 = App.Vector(1000, 1000, 0)

text1 = Draft.make_text(t1, p1)
text2 = Draft.make_text(t2, p2)
text1.ViewObject.FontSize = 200
text2.ViewObject.FontSize = 200

zaxis = App.Vector(0, 0, 1)

t3 = ["Upside", "down"]
p3 = App.Vector(-1000, -500, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 180))
text3 = Draft.make_text(t3, place3)
text3.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/fr&oldid=1514038>"