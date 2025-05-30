---
title: Arch Fenêtre
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Fenêtre |
| Emplacement du menu |
| 3D/BIM → Fenêtre |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| W I |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Fenêtre** crée un objet de base pour toutes sortes d'objets "intégrables", comme les fenêtres et portes.
Il est conçu pour être indépendant ou devenir "hôte" à l'intérieur d'un autre composant comme un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"), un élément d'une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") ou d'un [Arch Toit](/Arch_Roof/fr "Arch Roof/fr"). Il a sa propre forme géométrique, qui peut être fait de plusieurs composants (généralement un cadre et des panneaux intérieurs) et définit également un volume à soustraire aux objets hôtes, afin de créer une ouverture.

Les fenêtres sont basées sur des objets 2D fermés comme des [Draft Rectangles](/Draft_Rectangle/fr "Draft Rectangle/fr") ou des [esquisses](/Sketcher_Workbench/fr "Sketcher Workbench/fr") utilisés pour définir les composantes internes. L'objet 2D de base peut donc contenir plusieurs polylignes fermées, qui peuvent être combinés pour constituer des panneaux pleins (une seule polyligne) ou cadres (plusieurs polylignes).

L'outil Arch Fenêtre comporte également plusieurs [préréglages](#Préréglages). Ils permettent à l'utilisateur de créer des types communs de fenêtres et de portes avec certains paramètres modifiables, sans qu'il soit nécessaire de créer manuellement les objets et composants 2D de base.

Toutes les informations applicables à une fenêtre s'appliquent également à une [porte](/Arch_Door/fr "Arch Door/fr"), puisqu'il s'agit du même objet sous-jacent.

![](/images/Arch_Window_example2.jpg)

Fenêtre complexe en cours de construction à partir d'une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). Lorsque vous entrez en mode édition de la fenêtre, vous pouvez créer différents composants, définir leur épaisseur puis sélectionner et affecter des lignes de l'esquisse à ceux-ci.

## Utilisation

### Utilisation des préréglages

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Arch_Window.svg) Fenêtre.
   * Sélectionnez l'option **3D/BIM → ![](/images/Arch_Window.svg) Fenêtre** du menu.
   * Utilisez le raccourci clavier : W puis I.
2. Sélectionnez l'un des paramètres dans la liste.
3. Remplissez les paramètres souhaités.
4. Dans la [vue 3D](/3D_view/fr "3D view/fr"), déplacez la fenêtre à l'endroit où vous souhaitez la placer. Si vous déplacez le pointeur sur un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"), le contour de la fenêtre devrait s'aligner sur la face de cet objet.
5. Cliquez sur la [vue 3D](/3D_view/fr "3D view/fr") avec la souris ou appuyez trois fois sur la touche Entrée pour confirmer les coordonnées X, Y et Z de l'emplacement.

#### Préréglages supplémentaires

En plus des préréglages par défaut, l'outil Fenêtre peut également utiliser des préréglages personnalisés. Un préréglage personnalisé est un fichier FreeCAD contenant une seule fenêtre basée sur une esquisse paramétrique qui a deux contraintes nommées : `Width` et `Height`. Les préréglages personnalisés peuvent être placés aux endroits suivants :

L'outil Fenêtre recherchera toujours cette paire d'emplacements :

$ROOT\_DIR/Arch/Doors/Custom/  
$ROOT\_DIR/Arch/Windows/Custom/

Si vous installez l'[atelier Parts Library](/Parts_Library_Workbench/fr "Parts Library Workbench/fr") à partir du [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"), l'outil Fenêtre recherchera également dans cette bibliothèque d'autres préréglages à cette paire d'emplacements :

$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Doors/Custom/  
$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Windows/Custom/

* $ROOT\_DIR est le répertoire utilisateur où sont stockés les fichiers de configuration de FreeCAD, les macros, et les ateliers externes. Il peut être trouvé en entrant `FreeCAD.getUserAppDataDir()` dans la [console Python](/Python_console/fr "Python console/fr").
  + Sous Linux, il s'agit généralement de home/username/.local/share/FreeCAD/.
  + Sous Windows, il s'agit généralement du fichier C:\Users\username\Application Data\FreeCAD\
  + Sous Mac OSX, il s'agit généralement de /Users/username/Library/Preferences/FreeCAD/
* Le nom du sous-répertoire Custom n'est qu'une suggestion, n'importe quel nom peut être utilisé. Mais les fichiers doivent être placés dans un ou plusieurs sous-répertoires à l'intérieur des répertoires Doors ou Windows.

Les préréglages personnalisés seront disponibles dans le menu déroulant des préréglages de l'outil fenêtre. Les préréglages dans les bibliothèques seront également disponibles dans la fenêtre de dialogue Bibliothèque de pièces.

### Créer une fenêtre personnalisée

1. Sélectionnez une face ou un objet Arch où vous voulez insérer votre fenêtre.
2. Basculez vers l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
3. Créez une nouvelle esquisse.
4. Dessinez une ou plusieurs formes fermées (boucles). Faites bien attention à l'ordre de création de ces boucles, la numérotation des "polylignes" dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") ("Éléments de la fenêtre") en dépend.
5. Fermez l'esquisse.
6. Retournez à l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr")
7. Lancez l'outil comme décrit ci-dessus.
8. Pour ajuster les composants de la fenêtre et diverses propriétés, entrez dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") de la fenêtre en double-cliquant sur l'objet créé dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
9. Notez que, puisque les composants qui suivent un composant à charnière s'articulent également, tous les composants fixes, tels que les cadres extérieurs et les panneaux de verre fixes, doivent être définis avant tout composant à charnière. Un panneau de verre dans un cadre à charnière doit être défini après ce cadre et avant tout autre composant à charnière.

## Préréglages

Les préréglages suivants sont disponibles :

* ![Fenêtre fixe](/images/ParametersWindowFixed.svg)

  Fenêtre fixe
* ![Fenêtre à simple ouvrant](/images/ParametersWindowSimple.svg)

  Fenêtre à simple ouvrant
* ![Fenêtre à double ouvrant](/images/ParametersWindowDouble.svg)

  Fenêtre à double ouvrant
* ![Fenêtre à 2 vantaux](/images/ParametersWindowStash.svg)

  Fenêtre à 2 vantaux
* ![Fenêtre à 2 ouvertures coulissantes](/images/ParametersWindowDouble.svg)

  Fenêtre à 2 ouvertures coulissantes
* ![Porte simple](/images/ParametersDoorSimple.svg)

  Porte simple
* ![Porte en verre](/images/ParametersDoorGlass.svg)

  Porte en verre
* ![Fenêtre à 4 ouvertures coulissantes](/images/ParametersWindowDouble.svg)

  Fenêtre à 4 ouvertures coulissantes
* ![Fenêtre à auvent](/images/ParametersWindowSimple.svg)

  Fenêtre à auvent
* ![Ouverture introduit dans la version 1.0](/images/ParametersOpening.svg)

  Ouverture [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Création de composants

Les fenêtres peuvent comprendre 4 types d'éléments : les cadres, les panneaux pleins, les panneaux vitrés et les persiennes. Les panneaux et grilles sont constitués d'une polyligne fermée, obtenu par extrusion, tandis que les armatures sont faites de 2 polylignes fermées ou plus, où chacune est extrudée, puis les plus petites sont soustraites des plus grandes. Vous pouvez accéder, créer, modifier et supprimer des composants d'une fenêtre en mode d'édition (double-cliquez sur la fenêtre dans la vue 3D).
Les composants ont les propriétés suivantes :

* **Nom** : nom du composant
* **Type** : type de composant The type of component. Peut être "Cadre", "Panneau de verre", "Panneau plein" ou "Persiennes"
* **Polylignes** : liste de polylignes séparées par des virgules sur lesquelless le composant est basé
* **Épaisseur** : épaisseur de l'extrusion du composant.
* **Décalage en Z** : distance entre le composant et ses polylignes 2D de base.
* **Charnière** : permet de sélectionner un bord de l'objet 2D de base, puis de définir ce bord comme une charnière pour ce composant et ceux qui sont dans la liste
* **Mode d’ouverture** : si vous avez défini une charnière dans ce composant ou un autre dans la liste, le réglage du mode d'ouverture permettra à la fenêtre d'apparaître ouverte ou d'afficher les symboles 2D d'ouverture en plan ou en élévation.

![](/images/Arch_Window_options.jpg)

## Options

* L'objet Fenêtre partage les propriétés communes et le comportement de tous les objet [Arch Composants](/Arch_Component/fr "Arch Component/fr")
* Si l'option du panneau des tâches **Inclure automatiquement dans l'objet hôte** est décochée, la fenêtre ne sera pas insérée dans un objet hôte lors de sa création.
* Ajoutez une fenêtre sélectionnée à un [mur](/Arch_Wall/fr "Arch Wall/fr"), pressez sur le bouton ![](/images/Arch_Add.svg) [Ajouter](/Arch_Add/fr "Arch Add/fr").
* Supprimez la fenêtre sélectionnée du [mur](/Arch_Wall/fr "Arch Wall/fr"), pressez sur le bouton ![](/images/Arch_Remove.svg) [Supprimer](/Arch_Remove/fr "Arch Remove/fr").
* Lors de l'utilisation des préréglages, il est souvent commode de sélectionner le "Plus proche" de [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") pour coller une fenêtre sur une face existante.
* L'emplacement créé par une fenêtre sur objet hôte est déterminé par deux propriétés : Données**Hole Depth** (Profondeur de l'emplacement) et Données**Hole Wire** (Lignes de l'emplacement) ([introduit dans la version 0.17](/Release_notes_0.17/fr "Release notes 0.17/fr")). Le numéro d'emplacement de la ligne peut être sélectionné dans la vue 3D ou dans le panneau de tâches de la fenêtre en double-cliquant sur la fenêtre dans l'arborescence de la Vue combinée
* L'outil Fenêtre peut utiliser des [multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr"). La fenêtre cherchera dans le multi-matériaux attaché les couches de matériaux avec le même nom pour chacun des composants de la fenêtre et l'utiliser si le composant est trouvé. Par exemple, un composant appelé "OuterFrame" cherchera dans le multi-matériaux attaché, une couche de matériau appelée "OuterFrame". Si une telle couche de matériau est trouvée, son matériau sera attribué au composant OuterFrame. La valeur de l'épaisseur de la couche de matériau n'est pas prise en compte.

## Ouvertures

*Voir aussi :* [Tutoriel pour des fenêtres ouvertes](/Tutorial_for_open_windows/fr "Tutorial for open windows/fr")

Les portes et fenêtres peuvent apparaître partiellement ou entièrement ouvertes dans le modèle 3D ou peuvent afficher des symboles d'ouverture en plan et/ou en élévation. Par conséquent, elles apparaîtront également dans les vues 2D extraites générées par une [Draft Projection 2D d'une forme](/Draft_Shape2DView/fr "Draft Shape2DView/fr") ou l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"). Pour obtenir ceci, au moins un des composants de la fenêtre doit avoir une charnière et un mode d'ouverture défini (voir la section [Composants de construction](#Cr.C3.A9ation_de_composants) ci-dessus). Ensuite, en utilisant les propriétés Données**Opening**, Données**Symbol Plan** ou Données**Symbol Elevation**, vous pouvez configurer l'apparence de la fenêtre :

![](/images/Arch_window_openings.png)

Porte montrant le symbole du plan, le symbole de l'élévation et les propriétés d'ouverture en fonction

## Définition des types de fenêtres

Les fenêtres peuvent également tirer parti d'autres outils, notamment des processus de travail de [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), pour définir un type. Un type est un objet qui définit la forme de la fenêtre. Il est particulièrement bien adapté pour travailler avec [App Parts](/App_Part/fr "App Part/fr") :

![](/images/Arch_window_type_example.png)

[Téléchargez le fichier d'exemple ci-dessus](https://github.com/FreeCAD/Examples/raw/master/Arch_Example_Files/Window_Type.FCStd)

### Exemple de processus de travail

* Créez un objet de cadre de fenêtre, un panneau de verre et tout autre composant de fenêtre dont vous avez besoin, à l'aide des outils de l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
* Par exemple, créez une esquisse rectangulaire de base pour votre fenêtre, puis une esquisse de profil pour le cadre et créez un [Part Balayage](/Part_Sweep/fr "Part Sweep/fr") pour balayer le profil autour de l'esquisse de base. Créez un [Part Décalage 2D](/Part_Offset2D/fr "Part Offset2D/fr") à partir de l'esquisse de base, puis une [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr") pour créer le panneau de verre.
* Assurez-vous que toutes ces pièces ont un nom unique et significatif (par exemple, "Cadre" ou "Panneau en verre").
* Créez un [App Part](/App_Part/fr "App Part/fr") et placez tous vos sous-composants dedans.
* Créez un volume à soustraire du mur, par exemple en extrudant l'esquisse de base. Ajoutez ce volume à App Part. Assurez-vous que le volume est désactivé.
* Vous pouvez ajouter 3 propriétés à votre App Part, en cliquant avec le bouton droit de la souris sur sa vue des propriétés et en sélectionnant « Ajouter une propriété ». Ajoutez les propriétés suivantes (toutes sont optionnelles, le groupe n'a pas d'importance) :
  + **Height** en tant que PropertyLength et le lier, par exemple, à une contrainte verticale de votre esquisse de base
  + **Width** en tant que PropertyLength et le lier, par exemple, à une contrainte horizontale de votre esquisse de base
  + **Subvolume** en tant que PropertyLink et le lier au volume à soustraire que nous avons créé ci-dessus
  + **Tag** en tant que PropertyString

Notre type de fenêtre est maintenant prêt. Nous pouvons créer des objets de fenêtre à partir de celui-ci, simplement en sélectionnant la partie d'application et en appuyant sur le bouton de la fenêtre. Les propriétés "Height", "Width", "Subvolume" et "Tag" de la fenêtre seront liées à la propriété correspondante de la partie d'application, si elle existe.

### Materiaux

Pour créer un matériau pour des fenêtres basées sur un type :

* Créer un [Arch Matériau multiple](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr").
* Créer une entrée dans le multi-matériau pour chaque composant de votre partie d'application. Par exemple, un "cadre", un "panneau de verre" comme nous l'avons utilisé ci-dessus. Assurez-vous d'utiliser exactement le même nom.
* Attribuer ce multi-matériau à chacune des fenêtres dérivées du même type.

Vous pouvez utiliser tout autre type de processus de travail que celui décrit ci-dessus, les points importants à retenir sont :

* L'objet type doit être un seul objet, quel que soit le type (App Part, PartDesign Body, Part Compound, ou même Arch Window)
* L'objet type doit avoir une propriété "Subvolume" (liée à la propriété Subvolume de la fenêtre) pour que les ouvertures des objets hôtes fonctionnent
* L'objet type doit avoir une propriété "Group" avec différents enfants portant le même nom que les éléments multi-matériaux pour que les multi-matériaux fonctionnent.

## Propriétés

Un objet Arch Window partage les propriétés communes et le comportement de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Window

* Données**Area** (`Area`) : surface de cette fenêtre.
* Données**Frame** (`Length`) : taille du cadre (épaisseur/profondeur) de cette fenêtre.
* Données**Height** (`Length`) : hauteur de cette fenêtre.
* Données**Height** (`Length`) : hauteur de cette fenêtre : la profondeur du trou créé par cette fenêtre dans son objet hôte.
* Données**Hole Wire** (`Integer`) : le numéro de la polyligne de l'objet de base utilisé pour créer un trou dans l'objet hôte de cette fenêtre. Cette valeur peut être définie graphiquement en double-cliquant sur la fenêtre dans l'arborescence. La valeur 0 permet à la fenêtre de choisir automatiquement la polyligne la plus grosse pour le trou.
* Données**Hosts** (`LinkList`) : les objets (par exemple, un mur) qui hébergent cette fenêtre.
* Données**Louvre Spacing** (`Length`) : si l'un des composants est défini sur "Louvres", cette propriété définit l'espacement entre les éléments de la grille.
* Données**Louvre Width** (`Length`) : si l'un des composants est défini sur "Louvres", cette propriété définit la taille des éléments de la grille.
* Données**Normal** (`Vector`) : la direction normale de cette fenêtre, définie (codée en dur) par l'outil Fenêtre en mode interactif. Remarques : la valeur (0,0,0) permet à la fenêtre de déduire automatiquement la direction normale, ce qui est utile lorsque l'utilisateur fait pivoter l'esquisse de base de la fenêtre, par exemple lorsque le mur d'accueil est tourné.
* Données**Offset** (`Length`) : taille de décalage (par rapport à l'esquisse de base) de cette fenêtre.
* Données**Opening** (`Percent`) : tous les composants dont le mode d'ouverture est défini, et à condition qu'une charnière soit définie dans ces composants ou dans un composant précédent de la liste, apparaîtront ouverts d'un pourcentage défini par cette valeur.
* Données**Subvolume** (`Link`) : objet facultatif qui définit un volume à soustraire des hôtes de cette fenêtre.
* Données**Symbol Elevation** (`Bool`) : affiche le symbole d'ouverture 2D en élévation.
* Données**Symbol Plan** (`Bool`) : affiche le symbole d'ouverture en 2D dans le plan.
* Données**Width** (`Length`) : largeur de cette fenêtre.
* Données (Hidden)**Window Parts** (`StringList`) : les composants de cette fenêtre (5 chaînes par composant).

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Fenêtre peut être utilisé à l'intérieur d'une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr"), en utilisant la fonction suivante :

```
Window = makeWindow(baseobj=None, width=None, height=None, parts=None, name="Window")

```

* Créer un objet `Window` basé sur `baseobj`, qui devrait être une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") fermée ou une [Sketcher Esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr")
* Si disponible, définir la largeur `width`, hauteur `height` et le nom `name` (label) de la fenêtre.
* Si `baseobj` n'est pas une forme fermée, l'outil ne pourra pas créer une figure solide correcte.

Exemple :

```
import FreeCAD, Draft, Arch

Rect1 = Draft.makeRectangle(length=900, height=3000)
Window = Arch.makeWindow(Rect1)
FreeCAD.ActiveDocument.recompute()

```

Vous pouvez également créer une fenêtre à partir d'un préréglage.

```
Window = makeWindowPreset(windowtype, width, height, h1, h2, h3, w1, w2, o1, o2, placement=None)

```

* Crée un objet `Window` basé sur `windowtype` qui devrait être l'un des noms définis dans `Arch.WindowPresets`.
* `width` et `height` définissent la taille totale de l'objet en millimètres.
* Les paramètres `h1`, `h2`, `h3` (décalages verticaux), `w1`, `w2` (largeurs), `o1` et `o2` (décalages horizontaux) spécifient des distances différentes en millimètres et dépendent du type de préréglage en cours de création.
* Si un `placement` est donné, il est utilisé.

Exemple :

```
import FreeCAD, Arch

base = FreeCAD.Vector(2000, 0, 0)
Axis = FreeCAD.Vector(1, 0, 0)
place=FreeCAD.Placement(base, FreeCAD.Rotation(Axis, 90))

Door = Arch.makeWindowPreset("Simple door",
                             width=900, height=2000,
                             h1=100, h2=100, h3=100, w1=200, w2=100, o1=0, o2=100,
                             placement=place)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Window/fr&oldid=1560971>"