---
title: Draft Dimension
---
|  |
| --- |
| Draft Dimension |
| Menu location |
| Annotation → Dimension |
| Workbenches |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr") |
| Default shortcut |
| D I |
| Introduced in version |
| 0.8 |
| See also |
| [Draft Inverser le texte de la dimension](/Draft_FlipDimension/fr "Draft FlipDimension/fr") |
|  |

## Description

La commande ![](/images/Draft_Dimension.svg) **Draft Dimension** crée une [dimension linéaire](#Dimension_linéaire), une [dimension radiale](#Dimension_radiale) ou une [dimension angulaire](#Dimension_angulaire).

Les dimensions linéaires basées sur les arêtes et les dimensions radiales sont paramétriques. Cela signifie qu'elles seront mises à jour si l'arête mesurée est modifiée. Les arêtes mesurées peuvent appartenir à des ébauches d'objets mais aussi à des corps solides. Les dimensions angulaires ne sont pas paramétriques.

Les Draft Dimensions peuvent être affichées sur une page de l'[atelier Techdraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") à l'aide des commandes [TechDraw Vue d'un objet Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr") ou [TechDraw Vue d'un objet Arch](/TechDraw_ArchView/fr "TechDraw ArchView/fr"). L'[atelier Techdraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") propose également ses propres commandes de cotation. Mais celles-ci créent des dimensions qui ne sont affichées que sur la page de dessin et non dans la [vue 3D](/3D_view/fr "3D view/fr").

![](/images/Screenshot_Draft_Dimension.jpg)

Dimension linéaire définie par trois points

## Utilisation

Voir aussi : [Draft La barre](/Draft_Tray/fr "Draft Tray/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

### Dimension linéaire

1. Sélectionnez une arête droite dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Dimension.svg) Dimension.
   * Sélectionnez l'option **Annotation → ![](/images/Draft_Dimension.svg) Dimension** dans le menu.
   * Utilisez les raccourcis clavier : D puis I.
3. Le panneau de tâches **Dimension** s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Si vous n'avez pas encore sélectionné d'arête, effectuez l'une des opérations suivantes :
   * Appuyez sur E ou sur le bouton ![](/images/View-select.svg) Sélectionnez une arête et sélectionnez une arête droite dans la [vue 3D](/3D_view/fr "3D view/fr").
   * Maintenez la touche Alt enfoncée, sélectionnez une arête droite dans la [vue 3D](/3D_view/fr "3D view/fr") et relâchez la touche Alt.
   * Définissez la distance mesurée en choisissant des points :
     + Choisissez un premier point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
     + Choisissez un deuxième point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
5. Pour positionner la ligne de la dimension, effectuez l'une des opérations suivantes :
   * Pour une dimension alignée :
     + Choisissez un point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
   * Pour une dimension horizontale :
     + Déplacez le pointeur au-dessus ou au-dessous de l'arête ou des points.
     + Maintenez la touche Maj enfoncée, déplacez le pointeur et choisissez un point dans la [vue 3D](/3D_view/fr "3D view/fr").
   * Pour une dimension verticale :
     + Déplacez le pointeur à gauche ou à droite de l'arête ou des points.
     + Maintenez la touche Maj enfoncée, déplacez le pointeur et choisissez un point dans la [vue 3D](/3D_view/fr "3D view/fr").

### Dimension radiale

1. Sélectionnez éventuellement une arête circulaire dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Lancez la commande comme expliqué ci-dessus.
3. Le panneau de tâches **Dimension** s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Si vous n'avez pas encore sélectionné d'arête, effectuez l'une des opérations suivantes :
   * Appuyez sur E ou sur le bouton ![](/images/View-select.svg) Sélectionnez une arête et sélectionnez une arête circulaire dans la [vue 3D](/3D_view/fr "3D view/fr").
   * Maintenez la touche Alt enfoncée, sélectionnez une arête circulaire dans la [vue 3D](/3D_view/fr "3D view/fr") et relâchez la touche Alt.
5. Pour positionner la ligne de la dimension, effectuez l'une des opérations suivantes :
   * Pour une dimension de diamètre :
     + Choisissez un point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
   * Pour une dimension radiale :
     + Maintenez la touche Maj et choisissez un point dans la [vue 3D](/3D_view/fr "3D view/fr").

### Dimension angulaire

1. Lancez la commande comme expliqué ci-dessus.
2. Le panneau de tâches **Dimension** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Faites l'une des choses suivantes :
   * Appuyez sur E ou sur le bouton ![](/images/View-select.svg) Sélectionnez une arête et sélectionnez une première arête droite dans la [vue 3D](/3D_view/fr "3D view/fr"). Répétez cette opération pour sélectionner une deuxième arête droite.
   * Maintenez la touche Alt enfoncée, sélectionnez deux arêtes droites dans la [vue 3D](/3D_view/fr "3D view/fr") et relâchez la touche Alt.
4. Pour positionner l'arc de la dimension, sélectionnez un point dans la [vue 3D](/3D_view/fr "3D view/fr").
5. L'angle affiché dépend des bords et du point choisi.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrez les valeurs X, Y et Z et appuyez sur Entrée après chacune. Ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur R ou cliquez sur la case **Relative** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées sont relatives au dernier point, si disponible, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyez sur G ou cliquez sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur N ou cliquez sur la case **Continuer** pour activer le mode continu. Ce mode ne fonctionne que pour les dimensions linéaires. Si le mode continu est activé, la commande redémarre après avoir terminé, ce qui vous permet de continuer à créer des dimensions. Toutes les dimensions suivantes commenceront à partir du point final de la dimension précédente, et utiliseront la même ligne de base que la première dimension. Notez que la sélection des bords n'est pas possible pour les dimensions suivantes.
* Appuyez sur S pour activer ou désactiver [Draft aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur Échap ou sur le bouton Fermer pour terminer la commande.

## Remarques

* Les Draft Dimensions linéaires et radiales peuvent être modifiées avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").
* Les Draft Dimensions créées ou enregistrées avec la [version 0.21 de FreeCAD](/Release_notes_0.21/fr "Release notes 0.21/fr") ne sont pas rétrocompatibles.

## Préférences

* [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") : lors de la création, le texte des dimensions est orienté automatiquement par rapport au [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours via leur propriété Vue**Flip Text**. Un paramètre de [réglage fin](/Fine-tuning/fr#Atelier_Draft "Fine-tuning/fr") est disponible pour désactiver ce comportement.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Dimension est dérivé d'un objet [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Les propriétés suivantes sont supplémentaires, sauf indication contraire :

### Données dimension linéaire et radiale

Dimension

* Données**Dimline** (`VectorDistance`) : spécifie le point par lequel passe la ligne de dimension.
* Données**Linked Geometry** (`LinkSubList`) : spécifie l'objet et son sous-élément, ou ses sous-éléments, auxquels la dimension est liée.
* Données**Normal** (`Vector`) : spécifie la normale du plan du texte.
* Données (hidden)**Support** (`Link`) : spécifie l'objet mesuré.

Linear/radial dimension

* Données**Direction** (`Vector`) : spécifie la direction de la mesure.
* Données**Distance** (`Length`) : (en lecture seule) spécifie la valeur de la mesure.
* Données**End** (`VectorDistance`) : spécifie le dernier point de la mesure.
* Données**Start** (`VectorDistance`) : spécifie le point de départ de la mesure.

Radial dimension

* Données**Diameter** (`Bool`) : spécifie si une dimension radiale est affichée comme une dimension de diamètre.

### Données dimension angulaire

Angular dimension

* Données**Angle** (`Angle`) : (en lecture seule) spécifie la valeur de la mesure.
* Données**Center** (`VectorDistance`) : spécifie le centre de la mesure.
* Données**First Angle** (`Angle`) : spécifie le début de l'angle de la mesure.
* Données**Last Angle** (`Angle`) : spécifie la fin de l'angle de la mesure.

Dimension

* Données**Dimline** (`VectorDistance`) : spécifie le point par lequel passe l'arc de dimension.
* Données (hidden)**Linked Geometry** (`LinkSubList`) : non utilisé.
* Données (hidden)**Normal** (`Vecteur`) : spécifie la normale du plan de la dimension.
* Données (hidden)**Support** (`Link`) : non utilisé.

### Vue

Annotation

* Vue**Annotation Style** (`Enumeration`) : spécifie le style d'annotation appliqué à la dimension. Voir [Draft Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr").
* Vue**Scale Multiplier** (`Float`) : spécifie le facteur d'échelle général appliqué à la dimension.

Display Options

* Vue**Display Mode** (`Enumeration`) : spécifie comment le texte est affiché. S'il s'agit de `World`, le texte sera affiché sur un plan défini par la Données**Normal** de la mesure. S'il s'agit de `Screen`, le texte sera toujours tourné vers l'écran. Il s'agit d'une propriété héritée. Les options mentionnées sont les options renommées ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")).

Graphics

* Vue**Arrow Size** (`Length`) : spécifie la taille des symboles affichés aux extrémités de la ligne ou de l'arc de dimension.
* Vue**Arrow Type** (`Enumeration`) : spécifie le type de symbole affiché aux extrémités de la ligne ou de l'arc de la dimension, qui peut être `Dot`, `Circle`, `Arrow`, `Tick` ou `Tick-2`.
* Vue**Dim Overshoot** (`Distance`) : spécifie la longueur supplémentaire ajoutée à la ligne de la dimension. Non utilisé pour les dimensions angulaires.
* Vue**Ext Lines** (`Distance`) : spécifie la longueur des lignes d'extension qui vont de la ligne de la dimension aux points mesurés. Utilisez `0` pour des lignes d'extension complètes. Une valeur négative définit l'écart entre les extrémités des lignes d'extension et les points mesurés. Une valeur positive définit la longueur maximale des lignes d'extension. Utilisé uniquement pour les dimensions linéaires.
* Vue**Ext Overshoot** (`Distance`) : spécifie la longueur supplémentaire des lignes d'extension au-delà de la ligne de la dimension. Non utilisé pour les dimensions angulaires.
* Vue**Flip Arrows** (`Bool`) : indique s'il faut inverser l'orientation des symboles aux extrémités de la ligne ou de l'arc de la dimension. Ne fonctionne que si les symboles sont des flèches.
* Vue**Line Color** (`Color`) : spécifie la couleur de la ligne ou de l'arc de la dimension, et des flèches.
* Vue**Line Width** (`Float`) : spécifie la largeur des lignes ou de l'arc appartenant à la dimension.
* Vue**Show Line** (`Bool`) : spécifie s'il faut afficher la ligne de la dimension. N'affecte pas l'affichage des lignes d'extension et des dépassements. Non utilisé pour les dimensions angulaires.

Text

* Vue**Flip Text** (`Bool`) : indique si l'orientation du texte doit être inversée.
* Vue**Font Name** (`Font`) : spécifie la police utilisée pour dessiner le texte. Il peut s'agir d'un nom de police, tel que `Arial`, d'un style par défaut tel que `sans`, `serif` ou `mono`, d'une famille telle que `Arial,Helvetica,sans` ou d'un nom avec un style tel que `Arial:Bold`. Si la police donnée n'est pas trouvée sur le système, une police par défaut est utilisée à la place.
* Vue**Font Size** (`Length`) : spécifie la taille des lettres. Le texte peut être invisible dans la [vue 3D](/3D_view/fr "3D view/fr") si cette valeur est très petite.
* Vue**Override** (`String`) : spécifie un texte personnalisé à afficher à la place de la mesure réelle. Utilisez la chaîne `$dim` à l'intérieur du texte pour inclure la mesure.
* Vue**Text Color** (`Color`) : spécifie la couleur du texte. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Vue**Text Position** (`VectorDistance`) : spécifie la position du texte en coordonnées absolues. `[0, 0, 0]` affichera le texte dans sa position par défaut près de la ligne ou de l'arc de dimension.
* Vue**Text Spacing** (`Length`) : spécifie l'espace entre le texte et la ligne ou l'arc de la dimension.

Units

* Vue**Decimals** (`Integer`) : spécifie le nombre de décimales à afficher pour la mesure.
* Vue**Show Unit** (`Bool`) : indique s'il faut afficher l'unité à côté de la valeur numérique de la mesure. Non utilisé pour les dimensions angulaires.
* Vue**Unit Override** (`String`) : spécifie l'unité dans laquelle exprimer la mesure, par exemple, `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` ou `arch` pour les unités arch. Laissez ce champ vide pour utiliser l'unité par défaut. Non utilisé pour les dimensions angulaires.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer une Draft Dimension, utilisez la méthode `make_dimension` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode dépréciée `makeDimension`.

```
dimension = make_dimension(p1, p2, p3=None, p4=None)

```

Il existe plusieurs façons de faire appel à cette méthode, en fonction des arguments qui lui sont passés :

```
dimension = make_dimension(p1, p2, p3=None)
dimension = make_dimension(object, i1, i2, p4=None)
dimension = make_dimension(object, i1, mode, p4=None)

```

* Crée un `dimension` linéaire en mesurant la distance entre les points `p1` et `p2`.
* Crée un `dimension` linéaire lié à `object`, mesurant la distance entre ses sommets indexés `i1` et `i2`.
* Crée un `dimension` circulaire lié à `object`, avec `i1` étant l'index du bord incurvé à mesurer et `mode` étant soit `"radius"` ou `"diameter"` pour spécifier le type de dimension.
  + `p3` lors du premier appel et `p4` dans les deux autres, spécifiez un point facultatif par lequel la ligne de la dimension doit passer.
  + Tous les points sont définis par leur `FreeCAD.Vector`.

Pour créer une dimension angulaire, utilisez la méthode suivante :

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* Crée une `dimension` angulaire à partir du point `center`, de la liste d'`angles` entre deux éléments et le point `p3` par lequel l'arc devrait passer.
  + Si `angle1 > angle2`, l'angle affiché est la différence `angle1 - angle2` sinon l'angle complémentaire est affiché `360 - (angle2 - angle1)`.
  + Les angles doivent être exprimés en radians. La fonction `math.radians()` peut être utilisée pour convertir des angles donnés en degrés.

Les propriétés de vue de `dimension` peuvent être modifiées en remplaçant ses attributs, par exemple en changeant `ViewObject.FontSize` avec la nouvelle taille en millimètres.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(-2500, 0, 0)
dimension1 = Draft.make_dimension(p1, p2, p3)
dimension1.ViewObject.FontSize = 200

polygon = Draft.make_polygon(3, radius=1000)
doc.recompute()

p4 = App.Vector(-2000, 1500, 0)
dimension2 = Draft.make_dimension(polygon, 1, 2, p4)
dimension2.ViewObject.FontSize = 200

center = App.Vector(2000, 0, 0)
p5 = App.Vector(3000, 1000, 0)
angle1 = 45
angle2 = 10
dimension3 = Draft.make_angular_dimension(center, [angle1, angle2], p5)
dimension3.ViewObject.FontSize = 200

dimension4 = Draft.make_angular_dimension(center, [angle2, angle1], p5*1.2)
dimension4.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/fr&oldid=1565058>"