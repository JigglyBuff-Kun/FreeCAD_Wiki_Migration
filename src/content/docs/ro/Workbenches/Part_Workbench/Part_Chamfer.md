---
title: Part Șanfren
---

|                                                          |
| -------------------------------------------------------- |
| Part Chamfer                                             |
| poziția meniului                                         |
| Part → Chamfer                                           |
| Ateliere                                                 |
| [Part](/Part_Workbench/ro "Part Workbench/ro"), Complete |
| scurtătură                                               |
| _Nici unul_                                              |
| Prezentat în versiune                                    |
| -                                                        |
| A se vedea, de asemenea,                                 |
| _Nici unul_                                              |
|                                                          |

## Description

## Descriere

Șanfrenarea marginii sau a marginilor selectate ale unui obiect. O casetă de dialog vă permite să alegeți marginea (marginile) la care să lucrați și să modificați diferitele setări ale șanfrenului.

![Chamfer example](/images/Chamfer-example.png)

## Usage

## Cum se utilizează

1. Apăsați butonul ![](/images/Part_Chamfer.svg) din aelierul [Part Workbench](/Part_Workbench "Part Workbench"). Alternativ, puteți selecta **Part → Chamfer**.
2. Selectați forma care urmează să se șanfrenată din fereastra de dialog.
3. Selectați margini care urmează să fie șanfrenate, bifând caseta corespunzătoare în fereastra de precizie sau selectându-le direct pe model.
4. Editați parametrii chamfer.
5. Apăsați OK pentru a închide caseta de dialog și a aplica șanfrenul.

## Utilisation

Démarrez l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") qui se trouve dans " **Boîte déroulante des ateliers → Part ![Part](/images/Workbench_Part.png) → [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr")** depuis la barre d'outils, ou le menu. Vous pouvez sélectionner l'objet au préalable.  
Si la forme n'a pas été sélectionnée au préalable, sélectionnez-la dans la **liste déroulante** du panneau des Tâches.  
Sélectionnez le type de congé (Chanfrein), soit rayon constant (par défaut), ou rayon variable.  
Sélectionnez les arêtes, soit dans la vue 3D, ou en les cochant, dans la liste du panneau des Tâches.  
Réglez la valeur du rayon, puis cliquez OK pour valider.

## Options

## Opțiuni

![Dialog-chamfer](/images/Dialog-chamfer.png)

- Când selectați marginile modelului, aveți opțiunea de a selecta marginea sau fațeta. Selectând fațeta veți selecta toate marginile fațetei respective.
- Fascicul de lungime variabilă de lungime variabilă cu lungime constantă.
  - O șanfrenă cu o lungime constantă va crea un șanfren cu muchii echidistant față de marginea originală la distanța specificată.

Un șanfren de lungime variabilă va avea marginile care pot fi setate la distanțe diferite de marginea originală, permițându-vă să creați un șanfren la un unghi variabil.

## Options

### Vue combinée → Tâche

![Tâche options chanfrein](/images/Part_Chamfer_fr_05.png)

Tâche options chanfrein

### Chanfrein des arêtes

Forme

- TÂCHES **Forme sélectionnée** : Si une forme a été sélectionnée, elle est automatiquement affichée. Si aucune forme n'est sélectionnée, vous pouvez sélectionner votre forme dans cette boîte déroulante. Cette boîte déroulante ![](/images/Tache_PartFillet_Fillet_fr_00.png), liste toutes les formes qui peuvent être utilisées par l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"), vous pouvez sélectionner votre forme dans cette liste, (ou avant de sélectionner l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"), directement dans la fenêtre 3D, et, elle sera automatiquement affichée). (Défaut, **Aucune sélection**).

Paramètres de congé

- Tous  : Sélectionne toutes les arêtes de la forme sélectionnée.
- Aucun  : Décoche toutes les arêtes de la forme sélectionnée.  
   Chaque arête peut être cochée séparément.
- TÂCHES **Type de congé** : Cette option, vous permet de choisir le type de chanfrein a effectuer, ![](/images/Tache_PartFillet_Rayon_fr_00.png), **Rayon constant**, ou **Rayon variable**. (Défaut, **Rayon constant**).

Sur cette exemple l'option est réglée sur **[Rayon constant](#Chanfrein_symétrique)**, et, un seul réglage de rayon est possible.

- TÂCHES **Rayon** : Réglage du paramètre rayon, ici un seul rayon, pour un **Rayon constant**, pour un [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") **symétrique**.

![Tâche options Chanfrein](/images/Part_Chamfer_fr_06.png)

Tâche options Chanfrein

Sur cette exemple l'option est réglée sur **[Rayon variable](#Chanfrein_asymétrique)**, et, deux réglages de rayons sont demandés.

- TÂCHES **Rayon** : Réglage des paramètres rayon, ici deux rayons sont a entrer, **Rayon initial**, et, **Rayon final**, pour avoir un **Rayon variable**, pour un [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") **asymétrique**. (Défaut, **Rayon constant**).

## Properties

## Proprietăți

![Part_Chamfer Properties](/images/Part_Chamfer-Properties.png)

Part_Chamfer Properties

## Propriétés

### Vue combinée → Propriétés Vue

![Propriétés Vue Chanfrein](/images/Part_Chamfer_fr_03.png)

Propriétés Vue Chanfrein

### **Base**

- VUE**Bounding Box** : Permet de visualiser l'occupation, et, les dimensions hors tout, de l'objet dans l'espace. Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Control Point** : Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Deviation** : (Défaut, **0.00**).

- VUE**Display Mode** : Mode d'affichage de la forme, **Flat lines, Shaded, Wireframe, Points\*- ![](/images/Vue_DisplayModePartDesign_fr_00.png). (Défaut, **Flat lines\*\*).

- VUE**Draw Style** : Type de ligne, **Solid, Dashed, Dotted, Dashdot\*- ![](/images/Vue_DrawStyle_fr_00.png). (Défaut, **Solid\*\*).

- VUE**Lighting** : Éclairage **One side, Two side\*- ![](/images/Vue_Lighting_fr_00.png). (Défaut, **Two side\*\*).

- VUE**Line Color** : Donne la couleur de la ligne (bords). (Défaut, **255, 255, 255**).

- VUE**Line Width** : Donne l'épaisseur de la ligne (bords). (Défaut, **2**).

- VUE**Point Color** : Donne la couleur des points (extrémités de la forme). (Defaut, **255, 255, 255**).

- VUE**Point Size** : Donne la dimension des points. (Défaut, **2.00**).

- VUE**Selectable** : Autorise la sélection de la forme. Valeur `false`, ou `true` (Défaut, `true`).

- VUE**Shape Color** : Donne la couleur de la forme. (Défaut, **204, 204, 204**).

- VUE**Transparency** : Règle le degrés de transparence de la forme, de **0** à **100**. (Defaut, **0**).

- VUE**Visibility** : Détermine la visibilité de la forme (comme la barre ESPACE). Valeur `false`, ou `true`. (Défaut, `true`).

### Vue combinée → Propriétés Données

![Propriétés Données](/images/Part_Chamfer_fr_04.png)

Propriétés Données

Base

- DONNÉES**Label** : Label donné à la forme, modifiable à volonté.
- DONNÉES**Placement** : [(**0,00 0,00 1,00**);**0,00**;(**0,00 0,00 0,00**)], donne l'ensemble des données **Angle, Axis**, et, **Position** ci dessous.  
  Si vous sélectionnez, le titre **Placement** ![Options Placement](/images/Tache_Placement_01_fr_00.png), un bouton avec trois petits points s'affiche, en cliquant sur ce bouton **...** , vous avez accès à la fenêtre d'options **[Tâche Placement](/Tasks_Placement/fr "Tasks Placement/fr")**.
- DONNÉES**Angle** : Angle de rotation par rapport aux coordonnées **X, Y, Z**. (Défaut, **0,00°**).
- DONNÉES**Axis** : Cette option spécifie l'axe des axes autour desquels la pièce de révolution créée doit être pivotée **PAS RÉVOLUTIONNÉE** (la valeur exacte du pivotement est défini par l'option **Angle** ci-dessus).

Cette option demande trois arguments, qui sont passés sous forme de nombres dans les cases de la boîte à outils, définissants les coordonnées **x, y ou z**, .  
La modification d'une valeur de plus d'un axes provoque la rotation avec l'angle de chaque axe.  
**Par exemple :** nous déterminons un angle de **15°**, nous spécifions une valeur de **1,0 pour x** et **2,0 pour y**, cette configuration, aura pour effet, une rotation finale de la pièce qui sera de, **" 15° dans l'axe x "** et **" 30° dans l'axe y "**.

: _ DONNÉES **X**  : Angle à donner dans la direction **X** . (Défaut, **0,00**).
_ DONNÉES **Y**  : Angle à donner dans la direction **Y** . (Défaut, **0,00**). \* DONNÉES **Z**  : Angle à donner dans la direction **Z** . (Défaut, **1,00**).

- DONNÉES**Position** : **[0,00 0,00 0,00]** récapitulation des coordonnées de position, par rapport coordonnée d'origine **0,00 0,00 0,00**.

: _ DONNÉES **X**  : Déplacement à donner dans la direction **X** .(Défaut, **0,00**).
_ DONNÉES **Y**  : Déplacement à donner dans la direction **Y** .(Défaut, **0,00**). \* DONNÉES **Z**  : Déplacement à donner dans la direction **Z** .(Défaut, **0,00**).

Base

Base

- Date**Base**: The shape onto which the chamfer is to be applied.
- Date**Placement**: Specifies the orientation and position of the shape in the 3D space.
- Date**Label**: Label given to the object. Change to suit your needs.

## Propriétés

### Vue combinée → Propriétés Vue

![Propriétés Vue Chanfrein](/images/Part_Chamfer_fr_03.png)

Propriétés Vue Chanfrein

### **Base**

- VUE**Bounding Box** : Permet de visualiser l'occupation, et, les dimensions hors tout, de l'objet dans l'espace. Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Control Point** : Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Deviation** : (Défaut, **0.00**).

- VUE**Display Mode** : Mode d'affichage de la forme, **Flat lines, Shaded, Wireframe, Points\*- ![](/images/Vue_DisplayModePartDesign_fr_00.png). (Défaut, **Flat lines\*\*).

- VUE**Draw Style** : Type de ligne, **Solid, Dashed, Dotted, Dashdot\*- ![](/images/Vue_DrawStyle_fr_00.png). (Défaut, **Solid\*\*).

- VUE**Lighting** : Éclairage **One side, Two side\*- ![](/images/Vue_Lighting_fr_00.png). (Défaut, **Two side\*\*).

- VUE**Line Color** : Donne la couleur de la ligne (bords). (Défaut, **255, 255, 255**).

- VUE**Line Width** : Donne l'épaisseur de la ligne (bords). (Défaut, **2**).

- VUE**Point Color** : Donne la couleur des points (extrémités de la forme). (Defaut, **255, 255, 255**).

- VUE**Point Size** : Donne la dimension des points. (Défaut, **2.00**).

- VUE**Selectable** : Autorise la sélection de la forme. Valeur `false`, ou `true` (Défaut, `true`).

- VUE**Shape Color** : Donne la couleur de la forme. (Défaut, **204, 204, 204**).

- VUE**Transparency** : Règle le degrés de transparence de la forme, de **0** à **100**. (Defaut, **0**).

- VUE**Visibility** : Détermine la visibilité de la forme (comme la barre ESPACE). Valeur `false`, ou `true`. (Défaut, `true`).

### Vue combinée → Propriétés Données

![Propriétés Données](/images/Part_Chamfer_fr_04.png)

Propriétés Données

Base

- DONNÉES**Label** : Label donné à la forme, modifiable à volonté.
- DONNÉES**Placement** : [(**0,00 0,00 1,00**);**0,00**;(**0,00 0,00 0,00**)], donne l'ensemble des données **Angle, Axis**, et, **Position** ci dessous.  
  Si vous sélectionnez, le titre **Placement** ![Options Placement](/images/Tache_Placement_01_fr_00.png), un bouton avec trois petits points s'affiche, en cliquant sur ce bouton **...** , vous avez accès à la fenêtre d'options **[Tâche Placement](/Tasks_Placement/fr "Tasks Placement/fr")**.
- DONNÉES**Angle** : Angle de rotation par rapport aux coordonnées **X, Y, Z**. (Défaut, **0,00°**).
- DONNÉES**Axis** : Cette option spécifie l'axe des axes autour desquels la pièce de révolution créée doit être pivotée **PAS RÉVOLUTIONNÉE** (la valeur exacte du pivotement est défini par l'option **Angle** ci-dessus).

Cette option demande trois arguments, qui sont passés sous forme de nombres dans les cases de la boîte à outils, définissants les coordonnées **x, y ou z**, .  
La modification d'une valeur de plus d'un axes provoque la rotation avec l'angle de chaque axe.  
**Par exemple :** nous déterminons un angle de **15°**, nous spécifions une valeur de **1,0 pour x** et **2,0 pour y**, cette configuration, aura pour effet, une rotation finale de la pièce qui sera de, **" 15° dans l'axe x "** et **" 30° dans l'axe y "**.

: _ DONNÉES **X**  : Angle à donner dans la direction **X** . (Défaut, **0,00**).
_ DONNÉES **Y**  : Angle à donner dans la direction **Y** . (Défaut, **0,00**). \* DONNÉES **Z**  : Angle à donner dans la direction **Z** . (Défaut, **1,00**).

- DONNÉES**Position** : **[0,00 0,00 0,00]** récapitulation des coordonnées de position, par rapport coordonnée d'origine **0,00 0,00 0,00**.

: _ DONNÉES **X**  : Déplacement à donner dans la direction **X** .(Défaut, **0,00**).
_ DONNÉES **Y**  : Déplacement à donner dans la direction **Y** .(Défaut, **0,00**). \* DONNÉES **Z**  : Déplacement à donner dans la direction **Z** .(Défaut, **0,00**).

## Limitations

Chamfer might do nothing if the result would touch or cross the next adjacent edge. So if you do not get the expected result, try with a smaller value. This is the same for ![](/images/Part_Fillet.svg) [Part Fillet](/Part_Fillet "Part Fillet").

Also note that the Chamfer feature is affected by the [Topological naming problem](/Topological_naming_problem "Topological naming problem") when the any change is done to a modeling step earlier in the chain that affects the number of facets or vertices. This could cause unpredictable result. Until that is resolved it is advised to apply Chamfer and ![](/images/Part_Fillet.svg) [Part Fillet](/Part_Fillet "Part Fillet") operations at the last steps in the chain.

## Scripting

## Script

Instrumentul Chamfer poate fi utilizat în [macros](/Macros "Macros") și din consolă python prin adăugarea unui obiect Chamfer în document.
Cet outil applique des [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfreins](/Part_Chamfer/fr "Part Chamfer/fr"), sur les arêtes sélectionnées d'un objet. Une boite de dialogue vous permet de choisir sur quels objets, et, sur quelles arêtes travailler.

![Chanfreins](/images/Part_Chamfer_fr_01.png)

## Utilisation

Démarrez l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") qui se trouve dans " **Boîte déroulante des ateliers → Part ![Part](/images/Workbench_Part.png) → [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr")** depuis la barre d'outils, ou le menu. Vous pouvez sélectionner l'objet au préalable.  
Si la forme n'a pas été sélectionnée au préalable, sélectionnez-la dans la **liste déroulante** du panneau des Tâches.  
Sélectionnez le type de congé (Chanfrein), soit rayon constant (par défaut), ou rayon variable.  
Sélectionnez les arêtes, soit dans la vue 3D, ou en les cochant, dans la liste du panneau des Tâches.  
Réglez la valeur du rayon, puis cliquez OK pour valider.

## Options

### Vue combinée → Tâche

![Tâche options chanfrein](/images/Part_Chamfer_fr_05.png)

Tâche options chanfrein

### Chanfrein des arêtes

Forme

- TÂCHES **Forme sélectionnée** : Si une forme a été sélectionnée, elle est automatiquement affichée. Si aucune forme n'est sélectionnée, vous pouvez sélectionner votre forme dans cette boîte déroulante. Cette boîte déroulante ![](/images/Tache_PartFillet_Fillet_fr_00.png), liste toutes les formes qui peuvent être utilisées par l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"), vous pouvez sélectionner votre forme dans cette liste, (ou avant de sélectionner l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"), directement dans la fenêtre 3D, et, elle sera automatiquement affichée). (Défaut, **Aucune sélection**).

Paramètres de congé

- Tous  : Sélectionne toutes les arêtes de la forme sélectionnée.
- Aucun  : Décoche toutes les arêtes de la forme sélectionnée.  
   Chaque arête peut être cochée séparément.
- TÂCHES **Type de congé** : Cette option, vous permet de choisir le type de chanfrein a effectuer, ![](/images/Tache_PartFillet_Rayon_fr_00.png), **Rayon constant**, ou **Rayon variable**. (Défaut, **Rayon constant**).

Sur cette exemple l'option est réglée sur **[Rayon constant](#Chanfrein_symétrique)**, et, un seul réglage de rayon est possible.

- TÂCHES **Rayon** : Réglage du paramètre rayon, ici un seul rayon, pour un **Rayon constant**, pour un [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") **symétrique**.

![Tâche options Chanfrein](/images/Part_Chamfer_fr_06.png)

Tâche options Chanfrein

Sur cette exemple l'option est réglée sur **[Rayon variable](#Chanfrein_asymétrique)**, et, deux réglages de rayons sont demandés.

- TÂCHES **Rayon** : Réglage des paramètres rayon, ici deux rayons sont a entrer, **Rayon initial**, et, **Rayon final**, pour avoir un **Rayon variable**, pour un [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") **asymétrique**. (Défaut, **Rayon constant**).

## Propriétés

### Vue combinée → Propriétés Vue

![Propriétés Vue Chanfrein](/images/Part_Chamfer_fr_03.png)

Propriétés Vue Chanfrein

### **Base**

- VUE**Bounding Box** : Permet de visualiser l'occupation, et, les dimensions hors tout, de l'objet dans l'espace. Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Control Point** : Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Deviation** : (Défaut, **0.00**).

- VUE**Display Mode** : Mode d'affichage de la forme, **Flat lines, Shaded, Wireframe, Points\*- ![](/images/Vue_DisplayModePartDesign_fr_00.png). (Défaut, **Flat lines\*\*).

- VUE**Draw Style** : Type de ligne, **Solid, Dashed, Dotted, Dashdot\*- ![](/images/Vue_DrawStyle_fr_00.png). (Défaut, **Solid\*\*).

- VUE**Lighting** : Éclairage **One side, Two side\*- ![](/images/Vue_Lighting_fr_00.png). (Défaut, **Two side\*\*).

- VUE**Line Color** : Donne la couleur de la ligne (bords). (Défaut, **255, 255, 255**).

- VUE**Line Width** : Donne l'épaisseur de la ligne (bords). (Défaut, **2**).

- VUE**Point Color** : Donne la couleur des points (extrémités de la forme). (Defaut, **255, 255, 255**).

- VUE**Point Size** : Donne la dimension des points. (Défaut, **2.00**).

- VUE**Selectable** : Autorise la sélection de la forme. Valeur `false`, ou `true` (Défaut, `true`).

- VUE**Shape Color** : Donne la couleur de la forme. (Défaut, **204, 204, 204**).

- VUE**Transparency** : Règle le degrés de transparence de la forme, de **0** à **100**. (Defaut, **0**).

- VUE**Visibility** : Détermine la visibilité de la forme (comme la barre ESPACE). Valeur `false`, ou `true`. (Défaut, `true`).

### Vue combinée → Propriétés Données

![Propriétés Données](/images/Part_Chamfer_fr_04.png)

Propriétés Données

Base

- DONNÉES**Label** : Label donné à la forme, modifiable à volonté.
- DONNÉES**Placement** : [(**0,00 0,00 1,00**);**0,00**;(**0,00 0,00 0,00**)], donne l'ensemble des données **Angle, Axis**, et, **Position** ci dessous.  
  Si vous sélectionnez, le titre **Placement** ![Options Placement](/images/Tache_Placement_01_fr_00.png), un bouton avec trois petits points s'affiche, en cliquant sur ce bouton **...** , vous avez accès à la fenêtre d'options **[Tâche Placement](/Tasks_Placement/fr "Tasks Placement/fr")**.
- DONNÉES**Angle** : Angle de rotation par rapport aux coordonnées **X, Y, Z**. (Défaut, **0,00°**).
- DONNÉES**Axis** : Cette option spécifie l'axe des axes autour desquels la pièce de révolution créée doit être pivotée **PAS RÉVOLUTIONNÉE** (la valeur exacte du pivotement est défini par l'option **Angle** ci-dessus).

Cette option demande trois arguments, qui sont passés sous forme de nombres dans les cases de la boîte à outils, définissants les coordonnées **x, y ou z**, .  
La modification d'une valeur de plus d'un axes provoque la rotation avec l'angle de chaque axe.  
**Par exemple :** nous déterminons un angle de **15°**, nous spécifions une valeur de **1,0 pour x** et **2,0 pour y**, cette configuration, aura pour effet, une rotation finale de la pièce qui sera de, **" 15° dans l'axe x "** et **" 30° dans l'axe y "**.

: _ DONNÉES **X**  : Angle à donner dans la direction **X** . (Défaut, **0,00**).
_ DONNÉES **Y**  : Angle à donner dans la direction **Y** . (Défaut, **0,00**). \* DONNÉES **Z**  : Angle à donner dans la direction **Z** . (Défaut, **1,00**).

- DONNÉES**Position** : **[0,00 0,00 0,00]** récapitulation des coordonnées de position, par rapport coordonnée d'origine **0,00 0,00 0,00**.

: _ DONNÉES **X**  : Déplacement à donner dans la direction **X** .(Défaut, **0,00**).
_ DONNÉES **Y**  : Déplacement à donner dans la direction **Y** .(Défaut, **0,00**). \* DONNÉES **Z**  : Déplacement à donner dans la direction **Z** .(Défaut, **0,00**).

## Exemple

### Chanfrein symétrique

- ![Sélectionnons une arête, sur la forme à modifier,](/images/Part_Fillet_fr_07.png)

  Sélectionnons une arête, sur la forme à modifier,

- ![une fois sélectionnée, la fenêtre de propriétés de la forme s'affiche.](/images/Part_Fillet_fr_08.png)

  une fois sélectionnée, la fenêtre de propriétés de la forme s'affiche.

- ![Sélectionnez l'outil chanfrein,](/images/Part_Chamfer_fr_09.png)

  Sélectionnez l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"),

- ![une nouvelle fenêtre s'affiche, la fenêtre des options du chanfrein, notre forme Box001 est affichée dans TÂCHES Forme sélectionnée, faisons glisser l’ascenseur,](/images/Part_Chamfer_fr_10.png)

  une nouvelle fenêtre s'affiche, la fenêtre des options du [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"), notre forme **Box001** est affichée dans TÂCHES **Forme sélectionnée**, faisons glisser l’ascenseur,

- ![pour voir notre arête cochée.](/images/Part_Chamfer_fr_11.png)

  pour voir notre arête cochée.

- ![Modifions notre rayon à 5 mm,](/images/Part_Chamfer_fr_12.png)

  Modifions notre rayon à **5 mm**,

- [![et réglons notre paramètre TÂCHES Type de congé sur Rayon constant. (Valeur, par défaut, Rayon constant).](/images/Part_Chamfer_fr_13.png)](/File:Part_Chamfer_fr_13.png  "et réglons notre paramètre TÂCHES Type de congé sur Rayon constant. (Valeur, par défaut, Rayon constant).")

  et réglons notre paramètre TÂCHES **Type de congé** sur **Rayon constant**. (Valeur, par défaut, **Rayon constant**).

- ![Validons avec OK , pour voir notre Chanfrein s'effectuer.](/images/Part_Chamfer_fr_14.png)

  Validons avec OK , pour voir notre [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") s'effectuer.

### Chanfrein asymétrique

- ![Sélectionnons notre deuxième arête à modifier.](/images/Part_Chamfer_fr_15.png)

  Sélectionnons notre deuxième arête à modifier.

- ![De nouveau notre TÂCHES Forme sélectionnée Box s'affiche, et, notre arête est cochée.](/images/Part_Chamfer_fr_16.png)

  De nouveau notre TÂCHES **Forme sélectionnée** **Box** s'affiche, et, notre arête est cochée.

- ![Réglons notre paramètre TÂCHES Type de congé sur Rayon variable.](/images/Part_Chamfer_fr_17.png)

  Réglons notre paramètre TÂCHES **Type de congé** sur **Rayon variable**.

- ![Une nouvelle fenêtre s'affiche, et, ici, il y a deux paramètres de rayons à entrer.](/images/Part_Chamfer_fr_18.png)

  Une nouvelle fenêtre s'affiche, et, ici, il y a deux paramètres de rayons à entrer.

- ![Entrons 5 mm, pour le rayon de départ,](/images/Part_Chamfer_fr_19.png)

  Entrons **5 mm**, pour le rayon de départ,

- ![et, 20 mm pour le rayon d'arrivée.](/images/Part_Chamfer_fr_20.png)

  et, **20 mm** pour le rayon d'arrivée.

- ![Validons avec OK , pour voir s’effectuer notre chanfrein variable.](/images/Part_Chamfer_fr_21.png)

  Validons avec OK , pour voir s’effectuer notre **chanfrein variable**.

- [![Une nouvelle icône par opération s'affiche dans la Vue combinée, renseignant l(es)'opération(s). Si vous cliquez sur la flèche, vous pouvez voir les formes d'origine, qui ont servi dans l'opération de Chanfrein. Les formes originales peuvent être effacées, pour ne conserver que le produit final.](/images/Part_Chamfer_fr_22.png)](/File:Part_Chamfer_fr_22.png  "Une nouvelle icône par opération s'affiche dans la Vue combinée, renseignant l(es)'opération(s). Si vous cliquez sur la flèche, vous pouvez voir les formes d'origine, qui ont servi dans l'opération de Chanfrein. Les formes originales peuvent être effacées, pour ne conserver que le produit final.")

  Une nouvelle icône par opération s'affiche dans la **Vue combinée**, renseignant l(es)'opération(s).  
  Si vous cliquez sur la flèche, vous pouvez voir les formes d'origine, qui ont servi dans l'opération de [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr").  
  Les formes originales peuvent être effacées, pour ne conserver que le produit final.

## Comparaison Chanfrein PartDesign [text-top=Chanfrein](/PartDesign_Chamfer/fr "text-top=Chanfrein"), et, Chanfrein Part [text-top=Chanfrein](/Part_Chamfer/fr "text-top=Chanfrein")

**Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ne doit pas être confondu avec son équivalent de l'atelier Part [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr")**.  
Bien qu'ils partagent la même icône, ces outils sont différents, et s'utilisent différemment.

### Voici quelques différences :

- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") est _paramétrique_. Après l'application d'un [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"), sa dimension peut être modifié ; ce n'est pas le cas du [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr").
- Les arêtes doivent être sélectionnées avant de démarrer le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"). Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr"), quant à lui, peut être lancé, puis, suivi de la sélection du solide, et, enfin des arêtes.
- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ajoute une entrée distincte dans l'arborescence Projet. Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr") devient le parent de l'objet auquel il a été appliqué.
- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") affiche un aperçu en temps réel de l'application du chanfrein avant la validation de la fonction.
- Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr") supporte les dimensions variables (avec une dimension de départ, et, une dimension d'arrivée). Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ne le permet pas.

**Exemplu de Script:**

## Exemple

### Chanfrein symétrique

- ![Sélectionnons une arête, sur la forme à modifier,](/images/Part_Fillet_fr_07.png)

  Sélectionnons une arête, sur la forme à modifier,

- ![une fois sélectionnée, la fenêtre de propriétés de la forme s'affiche.](/images/Part_Fillet_fr_08.png)

  une fois sélectionnée, la fenêtre de propriétés de la forme s'affiche.

- ![Sélectionnez l'outil chanfrein,](/images/Part_Chamfer_fr_09.png)

  Sélectionnez l'outil [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"),

- ![une nouvelle fenêtre s'affiche, la fenêtre des options du chanfrein, notre forme Box001 est affichée dans TÂCHES Forme sélectionnée, faisons glisser l’ascenseur,](/images/Part_Chamfer_fr_10.png)

  une nouvelle fenêtre s'affiche, la fenêtre des options du [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/Part_Chamfer/fr "Part Chamfer/fr"), notre forme **Box001** est affichée dans TÂCHES **Forme sélectionnée**, faisons glisser l’ascenseur,

- ![pour voir notre arête cochée.](/images/Part_Chamfer_fr_11.png)

  pour voir notre arête cochée.

- ![Modifions notre rayon à 5 mm,](/images/Part_Chamfer_fr_12.png)

  Modifions notre rayon à **5 mm**,

- [![et réglons notre paramètre TÂCHES Type de congé sur Rayon constant. (Valeur, par défaut, Rayon constant).](/images/Part_Chamfer_fr_13.png)](/File:Part_Chamfer_fr_13.png  "et réglons notre paramètre TÂCHES Type de congé sur Rayon constant. (Valeur, par défaut, Rayon constant).")

  et réglons notre paramètre TÂCHES **Type de congé** sur **Rayon constant**. (Valeur, par défaut, **Rayon constant**).

- ![Validons avec OK , pour voir notre Chanfrein s'effectuer.](/images/Part_Chamfer_fr_14.png)

  Validons avec OK , pour voir notre [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") s'effectuer.

### Chanfrein asymétrique

- ![Sélectionnons notre deuxième arête à modifier.](/images/Part_Chamfer_fr_15.png)

  Sélectionnons notre deuxième arête à modifier.

- ![De nouveau notre TÂCHES Forme sélectionnée Box s'affiche, et, notre arête est cochée.](/images/Part_Chamfer_fr_16.png)

  De nouveau notre TÂCHES **Forme sélectionnée** **Box** s'affiche, et, notre arête est cochée.

- ![Réglons notre paramètre TÂCHES Type de congé sur Rayon variable.](/images/Part_Chamfer_fr_17.png)

  Réglons notre paramètre TÂCHES **Type de congé** sur **Rayon variable**.

- ![Une nouvelle fenêtre s'affiche, et, ici, il y a deux paramètres de rayons à entrer.](/images/Part_Chamfer_fr_18.png)

  Une nouvelle fenêtre s'affiche, et, ici, il y a deux paramètres de rayons à entrer.

- ![Entrons 5 mm, pour le rayon de départ,](/images/Part_Chamfer_fr_19.png)

  Entrons **5 mm**, pour le rayon de départ,

- ![et, 20 mm pour le rayon d'arrivée.](/images/Part_Chamfer_fr_20.png)

  et, **20 mm** pour le rayon d'arrivée.

- ![Validons avec OK , pour voir s’effectuer notre chanfrein variable.](/images/Part_Chamfer_fr_21.png)

  Validons avec OK , pour voir s’effectuer notre **chanfrein variable**.

- [![Une nouvelle icône par opération s'affiche dans la Vue combinée, renseignant l(es)'opération(s). Si vous cliquez sur la flèche, vous pouvez voir les formes d'origine, qui ont servi dans l'opération de Chanfrein. Les formes originales peuvent être effacées, pour ne conserver que le produit final.](/images/Part_Chamfer_fr_22.png)](/File:Part_Chamfer_fr_22.png  "Une nouvelle icône par opération s'affiche dans la Vue combinée, renseignant l(es)'opération(s). Si vous cliquez sur la flèche, vous pouvez voir les formes d'origine, qui ont servi dans l'opération de Chanfrein. Les formes originales peuvent être effacées, pour ne conserver que le produit final.")

  Une nouvelle icône par opération s'affiche dans la **Vue combinée**, renseignant l(es)'opération(s).  
  Si vous cliquez sur la flèche, vous pouvez voir les formes d'origine, qui ont servi dans l'opération de [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr").  
  Les formes originales peuvent être effacées, pour ne conserver que le produit final.

## Comparaison Chanfrein PartDesign [text-top=Chanfrein](/PartDesign_Chamfer/fr "text-top=Chanfrein"), et, Chanfrein Part [text-top=Chanfrein](/Part_Chamfer/fr "text-top=Chanfrein")

**Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ne doit pas être confondu avec son équivalent de l'atelier Part [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr")**.  
Bien qu'ils partagent la même icône, ces outils sont différents, et s'utilisent différemment.

### Voici quelques différences :

- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") est _paramétrique_. Après l'application d'un [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"), sa dimension peut être modifié ; ce n'est pas le cas du [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr").
- Les arêtes doivent être sélectionnées avant de démarrer le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"). Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr"), quant à lui, peut être lancé, puis, suivi de la sélection du solide, et, enfin des arêtes.
- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ajoute une entrée distincte dans l'arborescence Projet. Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr") devient le parent de l'objet auquel il a été appliqué.
- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") affiche un aperçu en temps réel de l'application du chanfrein avant la validation de la fonction.
- Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr") supporte les dimensions variables (avec une dimension de départ, et, une dimension d'arrivée). Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ne le permet pas.

```
import Part
cube = FreeCAD.ActiveDocument.addObject("Part::Feature", "myCube")
cube.Shape = Part.makeBox(5, 5, 5)
chmfr = FreeCAD.ActiveDocument.addObject("Part::Chamfer", "myChamfer")
chmfr.Base = FreeCAD.ActiveDocument.myCube
myEdges = []
myEdges.append((1, 1.5, 1.25)) # (edge number, chamfer start length, chamfer end length)
myEdges.append((2, 1.5, 1.25))
myEdges.append((3, 1.5, 1.25))
myEdges.append((4, 1.5, 1.25))
myEdges.append((5, 1.5, 1.25))
myEdges.append((6, 1.5, 1.25))
myEdges.append((7, 1.5, 1.25))
myEdges.append((8, 1.5, 1.25))
myEdges.append((9, 1.5, 1.25))
myEdges.append((10, 1.5, 1.25))
myEdges.append((11, 1.5, 1.25))
myEdges.append((12, 1.5, 1.25))
chmfr.Edges = myEdges
FreeCADGui.ActiveDocument.myCube.Visibility = False
FreeCAD.ActiveDocument.recompute()

```

**Example Script Explanation:**

```
import Part
cube = FreeCAD.ActiveDocument.addObject("Part::Feature", "myCube")
cube.Shape = Part.makeBox(5, 5, 5)

```

- Creează un cub de 5 mm pentru noi cu marginile cotate la. Vedeți [Part_API](/Part_API "Part API") pentru o explicație a metodei makeBox.

```
chmfr = FreeCAD.ActiveDocument.addObject("Part::Chamfer", "myChamfer")

```

- Adaugă un obiect nou în documentul Chamfer (din modulul Part) cu etichetă"myChamfer".

```
chmfr.Base = FreeCAD.ActiveDocument.myCube

```

- Specifică faptul că forma de bază a obiectului chamfer ar trebui să fie "myCube".

```
myEdges = []
myEdges.append((1, 1.5, 1.25)) # (edge number, chamfer start length, chamfer end length)
myEdges.append((2, 1.5, 1.25))
myEdges.append((3, 1.5, 1.25))
myEdges.append((4, 1.5, 1.25))
myEdges.append((5, 1.5, 1.25))
myEdges.append((6, 1.5, 1.25))
myEdges.append((7, 1.5, 1.25))
myEdges.append((8, 1.5, 1.25))
myEdges.append((9, 1.5, 1.25))
myEdges.append((10, 1.5, 1.25))
myEdges.append((11, 1.5, 1.25))
myEdges.append((12, 1.5, 1.25))

```

- Creează o matrice goală "myEdges" și apoi adaugă matricele cu parametrii de șanfrare ale fiecărei margini.
- Sintaxa pentru fiecare element ar trebui să fie (marginea #, lungimea de start a șanfrenului, lungimea de final a șanfrenului)

```
chmfr.Edges = myEdges

```

- Setează atributul Edges al obiectului Chamfer egal cu matricea pe care tocmai am creat-o.

```
FreeCADGui.ActiveDocument.myCube.Visibility = False

```

- Această linie ascunde pur și simplu "myCube", astfel încât obiectul nou creat "myChamfer" este singurul vizibil.

```
FreeCAD.ActiveDocument.recompute()

```

- Recalculează toate componentele modificate de pe ecran și reîmprospătează afișajul.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Chamfer/ro&oldid=1222962>"
