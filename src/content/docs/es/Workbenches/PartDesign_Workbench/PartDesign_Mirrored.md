---
title: PartDesign Simetría
---
|  |
| --- |
| PartDesign Simetría |
| Ubicación en el Menú |
| PartDesign → Apply a pattern → Simetría |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

La herramienta **Simetría** realiza una operación de simetría o espejo sobre un plano. A partir de la versión v0.17, se pueden hacer simetrías de múltiples operaciones.

![](/images/PartDesign_Mirrored_example.svg)

Arriba: Una operación de vaciado fue creada desde un boceto que contenía un círculo (A). Dicho vaciado fue usado posteriormente para crear una operación de Simetría. El eje vertical del boceto (B) se usó como eje de simetría. El resultado se muestra a la derecha. (C)

## Uso

### Create

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the correct Body.
2. Optionally select one or more features.
3. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_Mirrored.svg) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored") button.
   * Select the **Part Design → Apply a pattern → ![](/images/PartDesign_Mirrored.svg) Mirrored** option from the menu.
4. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
5. If no features were selected the **Select feature** [task panel](/Task_panel "Task panel") opens: select one or more (hold down the Ctrl key) from the list and press the OK button.
6. The **Mirrored parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button to finish.

### Edit

1. Do one of the following:
   * Double-click the Mirrored object in the [Tree view](/Tree_view "Tree view").
   * Right-click the Mirrored object in the [Tree view](/Tree_view "Tree view") and select **Edit Mirrored** from the context menu.
2. The **Mirrored parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Opciones

* Choose the mode:
  + **Transform body**: Transforms the whole base feature's shape (default). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  + **Transform tool shapes**: Transforms the individual tool shapes of selected features.
    - To add features:
      1. Press the Add feature button.
      2. Select a feature in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
      3. Repeat to add more features.
    - To remove features:
      1. Press the Remove feature button.
      2. Do one of the following:
         * Select a feature in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
         * Select a feature in the list and press the Del key.
         * Right-click a feature in the list and select **Remove** from the context menu.
      3. Repeat to remove more features.
    - If there are several features in the pattern, their order can be important. See [PartDesign PolarPattern](/PartDesign_PolarPattern#Ordering_features "PartDesign PolarPattern").
* Specify the mirror **Plane**:
  + **Vertical sketch axis**: The Y axis of the sketch (the plane passes through this reference and the Z axis of the sketch, only available for sketch-based features).
  + **Horizontal sketch axis**: The X axis of the sketch (idem).
  + **Construction line #**: A separate entry for each construction line in the sketch (idem).
  + **Base XY plane**: The XY plane of the Body.
  + **Base YZ plane**: The YZ plane of the Body.
  + **Base XZ plane**: The XZ plane of the Body.
  + **Select reference...**: Select a planar face in the [3D view](/3D_view "3D view").
* If the **Update view** checkbox is checked the view will update in real time.

## Limitaciones

See [PartDesign PolarPattern](/PartDesign_PolarPattern#Limitations "PartDesign PolarPattern").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Mirrored/es&oldid=1485301>"