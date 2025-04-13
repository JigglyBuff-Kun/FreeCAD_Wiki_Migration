---
title: PartDesign Șanfren
---

|                                                                      |
| -------------------------------------------------------------------- |
| PartDesign Chamfer                                                   |
| Menu location                                                        |
| Part Design → Chamfer                                                |
| Workbenches                                                          |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), Complete |
| Default shortcut                                                     |
| _None_                                                               |
| Introduced in version                                                |
| -                                                                    |
| See also                                                             |
| [Chamfer Part](/Part_Chamfer "Part Chamfer")                         |
|                                                                      |

### Descriere

## Introducere

Acest instrument utilizează [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") pe muchiile selecționate ale unui obiect. Un element nou **Chamfer** (urmat de un număr secvențial dacă nu este primul element [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") creat în document) este adăugat în arborescența proiectului.

![Pièce chanfreinée](/images/PartDesign_Chamfer_fr_01.png)

Pièce chanfreinée

The ![](/images/PartDesign_Chamfer.svg) **PartDesign Chamfer** tool creates chamfers on the selected edges of an object. It adds a **Chamfer** object to the document with its corresponding representation in the [Tree view](/Tree_view "Tree view").

|                                                                                                                                                                                      |                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| Sélection des arêtes avant de démarrer la commande. Réglage de la dimension du chanfrein dans les paramètres de chanfrein. Un élément Chamfer est ajouté dans l'arborescence Projet. | Usage PartDesign Chamfer VS. Part Chamfer |

## Utilizare

Selecționați una, sau mai multe muchii ale unui obiect apoi porniți instrumentul fie prin click pe iconiță [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") din bara de instrumente, fie din meniu **Affichage → Atelier → Part Design**.  
Pentru un lanț de muchii tangente una pe alta, este necesară selectarea numai a uneia dintre margini. [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"), se va propaga automat în lungul lanțului .  
Pentru a-l modifica [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") după crearea sa, double-cliquer pe intrarea sa în **Vue Combinée → Projet →** pe **Chamfer** pentru a modifica, sau faceți click butonul dreapta, și selecționați **Modifier le chanfrein**.

## Opțiuni

### Vizualizarea combinată → Sarcini

![](/images/PartDesign_Chamfer_fr_05.png)

### Paramètres du chanfrein

TÂCHES **Size** : Réglez la dimension du [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"), en saisissant une valeur, ou en cliquant sur les flèches haut et bas. Un aperçu en temps réel est affiché dans la fenêtre 3D.  
Cliquez sur OK pour valider.

Șanfrenul va avea întodeauna unghiul la 45°.

Lățimea maximă a șanfrenului trebuie să fie inferior celei mai micii fațetee

## Proprietăți

### Vue combinée → Chamfer → Vue

![](/images/PartDesign_Chamfer_fr_03.png)

### **Base**

- VUE**Bounding Box** : Permet de visualiser l'occupation, et, les dimensions hors tout, de l'objet dans l'espace. Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Control Point** : Valeur `false`, ou `true` (Défaut, `false`).

- VUE**Deviation** :

- VUE**Display Mode** : Mode d'affichage de la forme, **Flat lines, Shaded, Wireframe, Points\*- ![](/images/Vue_DisplayModePartDesign_fr_00.png). (Défaut, **Flat lines\*\*).

- VUE**Draw Style** : Type de ligne, **Solid, Dashed, Dotted, Dashdot\*- ![](/images/Vue_DrawStyle_fr_00.png). (Défaut, **Solid\*\*).

- VUE**Lighting** : Éclairage **One side, Two side\*- ![](/images/Vue_Lighting_fr_00.png). (Défaut, **Two side\*\*).

- VUE**Line Color** : Donne la couleur de la ligne (bords) (Défaut, **25, 25, 25**).

- VUE**Line Width** : Donne l'épaisseur de la ligne (bords) (Défaut, **2**).

- VUE**Point Color** : Donne la couleur des points (extrémités de la forme) (Defaut, **25, 25, 25**).

- VUE**Point Size** : Donne la dimension des points (Défaut, **2**).

- VUE**Selectable** : Autorise la sélection de la forme. Valeur `false`, ou `true` (Defaut, `true`).

- VUE**Shape Color** : Donne la couleur de la forme (Défaut, **204, 204, 204**).

- VUE**Transparency** : Règle le degrés de transparence de la forme, de **0** à **100** (Defaut, **0**).

- VUE**Visibility** : Détermine la visibilité de la forme (comme la barre ESPACE). Valeur `false`, ou `true` (Défaut, `true`).

### Vue combinée → Chamfer → Données

![](/images/PartDesign_Chamfer_fr_04.png)

Base

DONNÉES**Label** : Nom de l'objet (modifiable à volonté).

DONNÉES**Placement** : [(**0,00 0,00 1,00**);**0,00**;(**0,00 0,00 0,00**)], donne l'ensemble des données **Axis, Angle**, et, **Position** ci dessous.  
Si vous sélectionnez, le titre **Placement** ![Options Placement](/images/Tache_Placement_01_fr_00.png), un bouton avec trois petits points s'affiche, en cliquant sur ce bouton **...** , vous avez accès à la fenêtre d'options **[Tâche Placement](/Tasks_Placement/fr "Tasks Placement/fr")**.

- DONNÉES**Angle** : Angle de rotation par rapport aux coordonnées **X, Y, Z**
- DONNÉES**Axis** : Sélection de l'axe(s) de rotation de travail **X, Y**, ou **Z**.  
  Par exemple : nous déterminons un DONNÉES**Angle** de **15°**, nous spécifions une valeur de **1,0 pour x** et **2,0 pour y**, cette configuration, aura pour effet, une rotation finale de la pièce qui sera de, " **15° dans l'axe x** " et " **30° dans l'axe y** ". (Défaut, **Z = 1 = actif**)
- DONNÉES**Position** : Déplacement des coordonnées **X, Y, Z**, par rapport aux points d'origine **0, 0, 0**.

DONNÉES**Size** :Projet Donne la valeur au [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr")

## Exemple

- ![Sélectionnez l'arête, ou les arêtes à Chanfreiner, cliquez sur le bouton Chanfrein entrez votre dimension, puis validez avec le bouton OK,](/images/PartDesign_Chamfer_fr_06.png)

  Sélectionnez l'arête, ou les arêtes à [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfreiner](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"), cliquez sur le bouton [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") entrez votre dimension, puis validez avec le bouton OK,

- ![le résultat final.](/images/PartDesign_Chamfer_fr_01.png)

  le résultat final.

- ![Une nouvelle icône s'ajoute à l'arborescence du projet, cette icône est totalement indépendante, et, est un objet supplémentaire. Vous pouvez modifier le chanfrein en double cliquant dessus, ou faites clic droit sur l'icône et cliquez sur Modifier le chanfrein, ou encore dans Vue combinée → Chamfer → Données → Size.](/images/PartDesign_Chamfer_fr_07.png)

  Une nouvelle icône s'ajoute à l'arborescence du projet, cette icône est totalement indépendante, et, est un objet supplémentaire.  
  Vous pouvez modifier le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") en double cliquant dessus, ou faites clic droit sur l'icône et cliquez sur **Modifier le chanfrein**, ou encore dans [Vue combinée → Chamfer → Données → Size](#Vue_combinée_→_Projet_→_Données).

## Comparaison Chanfrein Conception de Pièce et Chanfrein Pièce

**Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ne doit pas être confondu avec son équivalent de l'atelier Part [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr")**.  
Bien qu'ils partagent la même icône, ces outils sont différents, et s'utilisent différemment.

### Voici quelques différences :

- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") est _paramétrique_. Après l'application d'un [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"), sa dimension peut être modifié ; ce n'est pas le cas du [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr").
- Les arêtes doivent être sélectionnées avant de démarrer le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"). Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr"), quant à lui, peut être lancé, puis, suivi de la sélection du solide, et, enfin des arêtes.
- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ajoute une entrée distincte dans l'arborescence Projet. Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr") devient le parent de l'objet auquel il a été appliqué.
- Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") affiche un aperçu en temps réel de l'application du chanfrein avant la validation de la fonction.
- Le [![text-top=Chanfrein](/images/Part_Chamfer.png)](/Part_Chamfer/fr "text-top=Chanfrein ") [Chanfrein Part](/Part_Chamfer/fr "Part Chamfer/fr") supporte les dimensions variables (avec une dimension de départ, et, une dimension d'arrivée). Le [![text-top=Chanfrein](/images/PartDesign_Chamfer.png)](/PartDesign_Chamfer/fr "text-top=Chanfrein ") [Chanfrein PartDesign](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") ne le permet pas.

### Add a chamfer

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the Body to chamfer.
2. There are several ways to select edges to chamfer:
   - Select one or more edges of the Body individually.
   - Select one or more faces of the Body to select all their edges.
   - Select a feature (usually the last feature) of the Body to select all its edges.
3. For a chain of tangentially connected edges only a single edge needs to be selected, the chamfer will propagate along the chain.
4. There are several ways to invoke the tool:
   - Press the ![](/images/PartDesign_Chamfer.svg) [Chamfer](/PartDesign_Chamfer "PartDesign Chamfer") button.
   - Select the **Part Design → Apply a dress-up feature → ![](/images/PartDesign_Chamfer.svg) Chamfer** option from the menu.
5. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
6. The **Chamfer parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button to finish.

### Edit a chamfer

1. Do one of the following:
   - Double-click the Chamfer object in the [Tree view](/Tree_view "Tree view")
   - Right-click the Chamfer object in the [Tree view](/Tree_view "Tree view") and select **Edit Chamfer** from the context menu.
2. The **Chamfer parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

- To add edges do one of the following:
  - Press the Add button to start selecting edges and/or faces in the [3D view](/3D_view "3D view").
  - To select all remaining edges do the following:
    1. If required press the Add button.
    2. Use the Ctrl+Shift+A keyboard shortcut, or right-click the list and select **Add all edges** from the context menu.
- To remove edges do one of the following:
  - Press the Remove button to start deselecting edges and/or faces in the [3D view](/3D_view "3D view"). Selected elements are highlighted in purple.
  - Select one or more elements in the list and press the Del key, or right-click the list and select **Remove** from the context menu.
- Specify a chamfer **Type**:
  - **Equal distance**: One distance is used to place both chamfer edges.
  - **Two distances**: Two distances are used to place the chamfer edges.
  - **Distance and angle**: A distance is used to place one chamfer edge, the placement of the other chamfer edge is defined by the angle of the chamfer.
- Press the ![](/images/PartDesign_Flip_Direction.svg) Flip direction button to flip the direction of the chamfer (deactivated for **Equal distance**).
- Set the **Size** of the chamfer.
- Set the **Size2** of the chamfer (only available if **Two distances** is selected).
- Set the **Angle** of the chamfer (only available if **Distance and angle** is selected).
- Check the **Use all edges** checkbox to select all edges of the previous feature. This deactivates the selection list and the related buttons.

## Notes

- PartDesign Chamfer should not be confused with [Part Chamfer](/Part_Chamfer "Part Chamfer"). Unless you know what you are doing, [Part Chamfer](/Part_Chamfer "Part Chamfer") should not be used on a PartDesign Body. See [Part and PartDesign](/Part_and_PartDesign "Part and PartDesign").
- Chamfers cannot completely consume the adjacent faces.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Chamfer object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Date**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if Date**Use All Edges** is `true`.
- Date**Support Transform** (`Bool`): If `true` the chamfered shape of the additive/subtractive parent feature will be used when the chamfer object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the chamfer itself will be used. The default is `false`.
- Date (hidden)**Add Sub Shape** (`PartShape`)
- Date (hidden)**Base Feature** (`Link`): Link to the parent feature.
- Date (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Chamfer

- Date**Chamfer Type** (`Enumeration`): The chamfer type: `Equal distance` (default), `Two distances` or `Distance and Angle`.
- Date**Size** (`QuantityConstraint`): The first chamfer distance. The default is `1 mm`.
- Date**Size2** (`QuantityConstraint`): The second chamfer distance. Only used if Date**Chamfer Type** is `Two distances`. The default is `1 mm`.
- Date**Angle** (`Angle`): The chamfer angle. Only used if Date**Chamfer Type** is `Distance and Angle`. The default is `45 °`.
- Date**Flip Direction** (`Bool`): If `true` the direction of the chamfer is flipped. Not used if Date**Chamfer Type** is `Equal distance`. The default is `false`.
- Date**Use All Edges** (`Bool`): If `true` all edges of the feature are chamfered, and the edges specified by Date**Base** are ignored. The default is `false`.

Part Design

- Date**Refine** (`Bool`): If `true` redundant edges are removed from the result of the operation. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

## Known issues

See [PartDesign Fillet](/PartDesign_Fillet#Known_issues "PartDesign Fillet").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Chamfer/ro&oldid=1515537>"
