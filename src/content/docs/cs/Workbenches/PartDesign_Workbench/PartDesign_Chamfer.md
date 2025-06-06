---
title: Návrh dílu Zaoblení
---
|  |
| --- |
| PartDesign Chamfer |
| Umístění Menu |
| Part Design → Chamfer |
| Pracovní stoly |
| [PartDesign](/PartDesign_Workbench/cs "PartDesign Workbench/cs"), Complete |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Chamfer Part](/Part_Chamfer/cs "Part Chamfer/cs") |
|  |

## Popis

The ![](/images/PartDesign_Chamfer.svg) **PartDesign Chamfer** tool creates chamfers on the selected edges of an object. It adds a **Chamfer** object to the document with its corresponding representation in the [Tree view](/Tree_view "Tree view").

|  |  |
| --- | --- |
| Výběr hran před spuštěním příkazu.    Nastavení zkosení.    Položka zkosení je přidána do stromu projektu. | Použití      Návrh dílu Zaoblení VS. Zaoblení dílu |

### Add a chamfer

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the Body to chamfer.
2. There are several ways to select edges to chamfer:
   * Select one or more edges of the Body individually.
   * Select one or more faces of the Body to select all their edges.
   * Select a feature (usually the last feature) of the Body to select all its edges.
3. For a chain of tangentially connected edges only a single edge needs to be selected, the chamfer will propagate along the chain.
4. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_Chamfer.svg) [Chamfer](/PartDesign_Chamfer "PartDesign Chamfer") button.
   * Select the **Part Design → Apply a dress-up feature → ![](/images/PartDesign_Chamfer.svg) Chamfer** option from the menu.
5. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
6. The **Chamfer parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button to finish.

### Edit a chamfer

1. Do one of the following:
   * Double-click the Chamfer object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Chamfer object in the [Tree view](/Tree_view "Tree view") and select **Edit Chamfer** from the context menu.
2. The **Chamfer parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

* To add edges do one of the following:
  + Press the Add button to start selecting edges and/or faces in the [3D view](/3D_view "3D view").
  + To select all remaining edges do the following:
    1. If required press the Add button.
    2. Use the Ctrl+Shift+A keyboard shortcut, or right-click the list and select **Add all edges** from the context menu.
* To remove edges do one of the following:
  + Press the Remove button to start deselecting edges and/or faces in the [3D view](/3D_view "3D view"). Selected elements are highlighted in purple.
  + Select one or more elements in the list and press the Del key, or right-click the list and select **Remove** from the context menu.
* Specify a chamfer **Type**:
  + **Equal distance**: One distance is used to place both chamfer edges.
  + **Two distances**: Two distances are used to place the chamfer edges.
  + **Distance and angle**: A distance is used to place one chamfer edge, the placement of the other chamfer edge is defined by the angle of the chamfer.
* Press the ![](/images/PartDesign_Flip_Direction.svg) Flip direction button to flip the direction of the chamfer (deactivated for **Equal distance**).
* Set the **Size** of the chamfer.
* Set the **Size2** of the chamfer (only available if **Two distances** is selected).
* Set the **Angle** of the chamfer (only available if **Distance and angle** is selected).
* Check the **Use all edges** checkbox to select all edges of the previous feature. This deactivates the selection list and the related buttons.

## Notes

* PartDesign Chamfer should not be confused with [Part Chamfer](/Part_Chamfer "Part Chamfer"). Unless you know what you are doing, [Part Chamfer](/Part_Chamfer "Part Chamfer") should not be used on a PartDesign Body. See [Part and PartDesign](/Part_and_PartDesign "Part and PartDesign").
* Chamfers cannot completely consume the adjacent faces.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Chamfer object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Údaje**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if Údaje**Use All Edges** is `true`.
* Údaje**Support Transform** (`Bool`): If `true` the chamfered shape of the additive/subtractive parent feature will be used when the chamfer object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the chamfer itself will be used. The default is `false`.
* Údaje (hidden)**Add Sub Shape** (`PartShape`)
* Údaje (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Údaje (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Chamfer

* Údaje**Chamfer Type** (`Enumeration`): The chamfer type: `Equal distance` (default), `Two distances` or `Distance and Angle`.
* Údaje**Size** (`QuantityConstraint`): The first chamfer distance. The default is `1 mm`.
* Údaje**Size2** (`QuantityConstraint`): The second chamfer distance. Only used if Údaje**Chamfer Type** is `Two distances`. The default is `1 mm`.
* Údaje**Angle** (`Angle`): The chamfer angle. Only used if Údaje**Chamfer Type** is `Distance and Angle`. The default is `45 °`.
* Údaje**Flip Direction** (`Bool`): If `true` the direction of the chamfer is flipped. Not used if Údaje**Chamfer Type** is `Equal distance`. The default is `false`.
* Údaje**Use All Edges** (`Bool`): If `true` all edges of the feature are chamfered, and the edges specified by Údaje**Base** are ignored. The default is `false`.

Part Design

* Údaje**Refine** (`Bool`): If `true` redundant edges are removed from the result of the operation. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

## Known issues

See [PartDesign Fillet](/PartDesign_Fillet#Known_issues "PartDesign Fillet").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Chamfer/cs&oldid=1515549>"