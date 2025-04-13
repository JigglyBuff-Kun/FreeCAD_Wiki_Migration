---
title: Draft Réseau orthogonal
---
|  |
| --- |
| Draft Réseau orthogonal |
| Emplacement du menu |
| Draft : Modification → Outils pour les réseaux → Réseau orthogonal  BIM : Modification → Réseau orthogonal |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr"), [Draft Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr"), [Draft Réseau selon une courbe](/Draft_PathArray/fr "Draft PathArray/fr"), [Draft Réseau lié selon une courbe](/Draft_PathLinkArray/fr "Draft PathLinkArray/fr"), [Draft Réseau de points](/Draft_PointArray/fr "Draft PointArray/fr"), [Draft Réseau lié selon des points](/Draft_PointLinkArray/fr "Draft PointLinkArray/fr") |
|  |

## Description

La commande ![](/images/Draft_OrthoArray.svg) **Draft Réseau orthogonal** crée un réseau orthogonal (3 axes) à partir d'un objet sélectionné. La commande peut éventuellement créer un réseau de liens [Link](/App_Link/fr "App Link/fr"), plus efficace qu'un réseau normal.

Cette commande peut être utilisée sur des objets 2D créés avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi sur de nombreux objets 3D tels que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").

![](/images/Draft_Array_example.png)

Un Draft réseau orthogonal

## Utilisation

1. Sélectionnez un objet.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_OrthoArray.svg) Réseau orthogonal.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionnez l'option **Modification → Outils pour les réseaux → ![](/images/Draft_OrthoArray.svg) Réseau orthogonal** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Modification → ![](/images/Draft_OrthoArray.svg) Réseau orthogonal** du menu.
3. Le panneau de tâches **Réseau orthogonal** s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Si vous n'avez pas encore sélectionné d'objet : sélectionnez un objet.
5. Saisissez les paramètres requis dans le panneau des tâches.
6. Pour terminer la commande, effectuez l'une des opérations suivantes :
   * Cliquez dans la [vue 3D](/3D_view/fr "3D view/fr").
   * Appuyez sur Entrée.
   * Appuyez sur le bouton OK.

## Options

* Entrez le **Nombre d'éléments** pour les directions X, Y et Z. Ce nombre doit être au moins `1` pour chaque direction. Ce nombre doit être au moins `1` pour chaque direction.
* Entrez dans le champ **Intervalles en X** pour spécifier le déplacement des éléments dans la direction X. Pour un réseau rectangulaire, les intervalles Y et Z doivent être spécifiés. Pour un réseau rectangulaire, les valeurs Y et Z doivent être `0`.
* Entrez dans le champ **Intervalles en Y** pour spécifier le déplacement des éléments dans la direction Y. Pour un tableau rectangulaire, les valeurs X et Z doivent être `0`. Pour un réseau rectangulaire, les valeurs X et Z doivent être `0`.
* Entrez dans le champ **Intervalles en Z** pour spécifier le déplacement des éléments dans la direction Z. Pour un tableau rectangulaire, les valeurs X et Z doivent être `0`. Pour un réseau rectangulaire, les valeurs X et Y doivent être `0`.
* Appuyez sur le bouton **Réinitialiser X, Y ou Z** pour réinitialiser le déplacement dans la direction donnée aux valeurs par défaut.
* Si la case **Union** est cochée, les éléments qui se chevauchent dans le réseau sont fusionnés.
* Si la case **Lier un réseau** est cochée, un réseau de liens est créé au lieu d'un réseau normal. Un réseau de liens est plus efficace car ses éléments sont des objets [App Link](/App_Link/fr "App Link/fr").
* Appuyez sur Échap ou sur le bouton Annuler pour annuler la commande en cours.

## Remarques

* Un Draft Réseau orthogonal peut être transformé en un [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr") ou un [Draft Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr") en modifiant sa propriété Données**Array Type**.
* Un réseau de liens ne peut pas être transformé en un réseau normal ou vice versa. Le type de réseau doit être décidé au moment de la création.
* Les réseaux de liens fusionnés ne sont pas affichés correctement ; dans la vue 3D, leurs éléments apparaissent toujours non fusionnés.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

La commande Draft Réseau orthogonal, la commande [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr") et la commande [Draft Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr") créent le même objet. Cet objet est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés (à l'exception de certaines propriétés Vue qui ne sont pas héritées par les réseaux liens Link). Les propriétés suivantes sont supplémentaires, sauf indication contraire :

### Données

Link

Les propriétés de ce groupe ne sont disponibles que pour les réseaux de liens. Voir [Std Créer un lien](/Std_LinkMake/fr#Propri.C3.A9t.C3.A9s "Std LinkMake/fr") pour plus d'informations.

* Données**Scale** (`Float`)
* Données (Hidden)**Scale Vector** (`Vector`)
* Données**Scale List** (`VectorList`)
* Données (Hidden)**Visibility List** (`BoolList`)
* Données (Hidden)**Placement List** (`PlacementList`)
* Données (Hidden)**Element List** (`LinkList`)
* Données (Hidden)**\_ Link Touched** (`Bool`)
* Données (Hidden)**\_ Child Cache** (`LinkList`)
* Données (Hidden)**\_ Link Owner** (`Integer`)
* Données (Hidden)**Colored Elements** (`LinkSubHidden`)
* Données**Link Copy On Change** (`Enumeration`)
* Données**Link Transform** (`Bool`)

Circular array

Les propriétés de ce groupe sont cachées pour les réseaux orthogonaux et les réseaux polaires.

* Données**Number Circles** (`Integer`) : spécifie le nombre de couches circulaires. Doit être au moins `2`.
* Données**Radial Distance** (`Distance`) : spécifie la distance entre les couches circulaires.
* Données**Symmetry** (`Integer`) : spécifie le nombre de lignes de symétrie. Ce nombre modifie la répartition des éléments dans le réseau.
* Données**Tangential Distance** (`Distance`) : spécifie la distance entre les éléments d'une même couche circulaire. Elle doit être supérieure à zéro.

Draft

* Données**Always Sync Placement** (`Bool`)

Objects

* Données**Array Type** (`Enumeration`) : spécifie le type de réseau, qui peut être `ortho`, `polar` ou `circular`.
* Données**Axis Reference** (`LinkGlobal`) : spécifie l'objet et le bord à utiliser à la place des propriétés Données**Axis** et Données**Center**. Non utilisé pour les réseaux orthogonaux.
* Données**Base** (`Link`) : spécifie l'objet à dupliquer dans le réseau.
* Données**Count** (`Integer`) : (en lecture seule) spécifie le nombre total d'éléments dans le réseau.
* Données**Expand Array** (`Bool`) : spécifie s'il faut développer le réseau dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour permettre la sélection de chaque élément. Disponible uniquement pour les réseaux de liens.
* Données**Fuse** (`Bool`) : spécifie si les éléments qui se chevauchent dans le réseau sont fusionnés ou non.
* Données**Placement List** (`PlacementList`) : placement de chaque élément. Apparaît dans le groupe Link pour les réseaux de liens. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

Orthogonal array

Les propriétés de ce groupe sont masquées pour les réseaux circulaires et les réseaux polaires.

* Données**Interval X** (`VectorDistance`) : spécifie l'intervalle entre les éléments dans la direction X.
* Données**Interval Y** (`VectorDistance`) : spécifie l'intervalle entre les éléments dans la direction Y.
* Données**Interval Z** (`VectorDistance`) : spécifie l'intervalle entre les éléments dans la direction Z.
* Données**Number X** (`Integer`) : spécifie le nombre d'éléments dans la direction X. Doit être au moins `1`.
* Données**Number Y** (`Integer`) : spécifie le nombre d'éléments dans la direction Y. Doit avoir au moins la valeur `1`.
* Données**Number Z** (`Integer`) : spécifie le nombre d'éléments dans la direction Z. Doit être au moins égal à `1`.

Polar array

Les propriétés de ce groupe sont masquées pour les réseaux circulaires et les réseaux orthogonaux.

* Données**Angle** (`Angle`) : spécifie l'ouverture de l'arc de cercle. Utilisez `360°` pour un cercle complet.
* Données**Interval Axis** (`VectorDistance`) : spécifie l'intervalle entre les éléments dans la direction Données**Axis**.
* Données**Number Polar** (`Integer`) : spécifie le nombre d'éléments dans la direction polaire.

Polar/circular array

Les propriétés de ce groupe sont cachées pour les réseaux orthogonaux.

* Données**Axis** (`Vector`) : spécifie la direction de l'axe du réseau.
* Données**Center** (`VectorDistance`) : spécifie le point central du réseau. L'axe du réseau passe par ce point. Pour les réseaux circulaires, il s'agit d'un décalage par rapport à Données**Placement** de l'objet Données**Base**.

### Vue

Link

Les propriétés de ce groupe, à l'exception de la propriété héritée, ne sont disponibles que pour les réseaux liens (Link). Voir [Std Créer un lien](/Std_LinkMake/fr#Propri.C3.A9t.C3.A9s "Std LinkMake/fr") pour plus d'informations.

* Vue**Draw Style** (`Enumeration`)
* Vue**Line Width** (`FloatConstraint`)
* Vue**Override Material** (`Bool`)
* Vue**Point Size** (`FloatConstraint`)
* Vue**Selectable** (`Bool`) : il s'agit d'une propriété héritée qui apparaît dans le groupe Sélection pour d'autres réseaux.
* Vue**Shape Material** (`Material`)

Base

Les propriétés de ce groupe, à l'exception de la propriété héritée, ne sont disponibles que pour les réseaux liens (Link). Voir [Std Créer un lien](/Std_LinkMake/fr#Propri.C3.A9t.C3.A9s "Std LinkMake/fr") pour plus d'informations.

* Vue (Hidden)**Child View Provider** (`PersistentObject`)
* Vue (Hidden)**Material List** (`MaterialList`)
* Vue (Hidden)**Override Color List** (`ColorList`)
* Vue (Hidden)**Override Material List** (`BoolList`)
* Vue (Hidden)**Proxy** (`PythonObject`): il s'agit d'une propriété héritée.

Display Options

Les propriétés de ce groupe sont des propriétés héritées. Voir [Part Feature](/Part_Feature/fr#Propri.C3.A9t.C3.A9s "Part Feature/fr") pour plus d'informations.

* Vue**Bounding Box** (`Bool`) : cette propriété n'est pas héritée par les réseaux de liens (Link).
* Vue**Display Mode** (`Enumeration`) : pour les réseaux de liens, il peut s'agir de `Link` ou `ChildView`. Pour les autres réseaux, il peut s'agir de : `Flat Lines`, `Shaded`, `Wireframe` ou `Points`
* Vue**Show In Tree** (`Bool`)
* Vue**Visibility** (`Bool`)

Draft

* Vue**Pattern** (`Enumeration`) : non utilisé.
* Vue**Pattern Size** (`Float`) : non utilisé.

Object style

Les propriétés de ce groupe ne sont pas héritées par les réseaux de liens.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

### Réseau paramétrique

Pour créer un réseau orthogonal paramétrique, utilisez la méthode `make_array` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) de l'atelier Draft. Cette méthode remplace la méthode dépréciée `makeArray`. La méthode `make_array` peut créer des Draft Réseaux orthogonaux, [Draft Réseaux polaires](/Draft_PolarArray/fr "Draft PolarArray/fr") et [Draft Réseaux circulaires](/Draft_CircularArray/fr "Draft CircularArray/fr"). Pour chaque type de réseau, un ou plusieurs wrappers sont disponibles.

La méthode principale :

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

Les wrappers pour les réseaux orthogonaux sont :

```
array = make_ortho_array(base_object,
                         v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0), v_z=App.Vector(0, 0, 10),
                         n_x=2, n_y=2, n_z=1,
                         use_link=True)

```

```
array = make_ortho_array2d(base_object,
                           v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0),
                           n_x=2, n_y=2,
                           use_link=True)

```

Les wrappers pour les réseaux rectangulaires sont :

```
array = make_rect_array(base_object,
                        d_x=10, d_y=10, d_z=10,
                        n_x=2, n_y=2, n_z=1,
                        use_link=True)

```

```
array = make_rect_array2d(base_object,
                          d_x=10, d_y=10,
                          n_x=2, n_y=2,
                          use_link=True)

```

* `base_object` est l'objet à mettre en réseau. Il peut également s'agir du `Label` (chaîne de caractères) d'un objet du document courant. (chaîne de caractères) d'un objet dans le document actuel.
* `v_x`, `v_y`, et `v_z` sont les vecteurs entre les points de base des éléments dans les directions respectives.
* `d_x`, `d_y`, et `d_z` sont les distances entre les points de base des éléments dans les directions respectives.
* `n_x`, `n_y`, et `n_z` sont les nombres d'éléments dans les directions respectives.
* Si `use_link` est `True`, les éléments créés sont des [App Links](/App_Link/fr "App Link/fr") au lieu de copies ordinaires.
* `array` est restitué avec l'objet réseau créé.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

array = Draft.make_ortho_array2d(rect, v_x, v_y, 3, 4)
doc.recompute()

```

### Réseau non paramétrique

Pour créer un réseau orthogonal non-paramétrique, utilisez la méthode `array` de l'atelier Draft. Cette méthode renvoie `None`.

```
array(objectslist, xvector, yvector, xnum, ynum)
array(objectslist, xvector, yvector, zvector, xnum, ynum, znum)

```

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

Draft.array(rect, v_x, v_y, 3, 4)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OrthoArray/fr&oldid=1558046>"