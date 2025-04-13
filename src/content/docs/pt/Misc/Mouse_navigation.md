---
title: Estilos de Navegação
---
## Overview

Os **estilos de navegação** do FreeCAD consistem nos comandos usados para navegar visualmente no espaço 3D e interagir com os objetos mostrados. O FreeCAD suporta múltiplos estilos de navegação. O predefinido é o chamado [Navegação CAD](#CAD_navigation), e é muito simples e prático, mas o FreeCAD também disponibiliza estilos de navegação alternativos, que pode escolher de acordo com as suas preferências. O estilo escolhido fica activado para todas as Bancadas de trabalho.

Para mais informação sobre selecção de objectos ver [Métodos de selecção](/index.php?title=Selection_methods/pt&action=edit&redlink=1 "Selection methods/pt (page does not exist)").

Para mais informação sobre manipulação de objectos ver [Std TransformManip](/index.php?title=Std_TransformManip/pt&action=edit&redlink=1 "Std TransformManip/pt (page does not exist)").

## Seleccionar uma forma de navegação

1. Escolher de entre os seguintes passos:
   * Clicar no ![](/images/NavigationCAD_dark.svg) botão na [Barra de estado](/index.php?title=Status_bar/pt&action=edit&redlink=1 "Status bar/pt (page does not exist)").
   * Clicar com o lado direito do rato numa zona vazia na [Vista 3D](/index.php?title=3D_view/pt&action=edit&redlink=1 "3D view/pt (page does not exist)"), e seleccionar **Navigation styles** a partir do Menu de contexto.
   * Usar o [Editor de preferências](/Preferences_Editor/pt#Navigation "Preferences Editor/pt"). No menu seleccione **Edit → Preferences** e depois **Display → Navigation → 3D Navigation**.
2. Seleccione um dos estilos da lista.
3. Opcionalmente mudar o **Orbit style**: clicar no ![](/images/NavigationCAD_dark.svg) botão na [Barra de estado](/index.php?title=Status_bar/pt&action=edit&redlink=1 "Status bar/pt (page does not exist)") e depois escolher **Settings → Orbit style**. Ver [Editor de preferências](/Preferences_Editor/pt#Navigation "Preferences Editor/pt").
4. Opcionalmente mudar o **Rotation mode**. Ver [Editor de preferências](/Preferences_Editor/pt#Navigation "Preferences Editor/pt").
5. Se o **CAD** estilo de navegação está seleccionado: opcionalmente mudar a **Enable animation** definição. Ver [Editor de preferências](/Preferences_Editor/pt#Navigation "Preferences Editor/pt").

## Estilos de navegação disponíveis

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Navegação Blender

Este estilo de navegação foi adoptado depois do [Blender](https://www.blender.org).

| Seleccionar | Zoom | Rodar vista | Pan | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the middle mouse button, then move the pointer. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, and then move the pointer. | |

### Navegação CAD

Este é o estilo de navegação predefinido. Permite ao utilizador um controlo simples da visualização e não requer o uso do teclado excepto para fazer múltiplas seleções.

| Seleccionar | Zoom | Rodar vista primeiro método | Rodar vista Método alternativo | Pan |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. Se soltar os botões do rato antes de parar o movimento do mesmo a vista 3D continua a girar, caso essa função esteja activada. | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. Com este método o botão do meio do rato pode ser solto depois do botão direito estar pressionado.  Utilizadores que usem o rato com a mão direita podem achar este método mais fácil que o primeiro. | {{{Pan\_text}}} |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | {{{Zoom\_mode\_text}}} | {{{Rotate\_view\_mode\_text}}} |  | {{{Pan\_mode\_text}}} |

|Pan\_text=Hold the middle mouse button, then move the pointer.

|Zoom\_mode\_text=Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer.

|Rotate\_view\_mode\_text=Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer.

|Pan\_mode\_text=Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer.
}}

### Navegação por Gestos

Este estilo foi adequado ao uso com um ecrã táctil e caneta.
No entanto pode também ser usado com um rato, e é recomendado para usar num MAC com trackpad.

| Select | Zoom | Rodar vista | Pan | | Inclinar vista |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Press the left mouse button over an object you want to select. | Use a roda do rato para aproximar ou afastar (zoom in/out). | Mantenha pressionado o botão esquerdo do rato e mova o cursor. Na [Bancada de trabalho de esboço](/Sketcher_Workbench/pt "Sketcher Workbench/pt") e outros modos de edição, este comportamento está desactivado. Mantenha premida a tecla Alt quando pressiona o botão do rato para entrar no modo de rotação. | Hold the right mouse button, then move the pointer. | | Mantenha os botões esquerdo e direito do rato pressionados e mova o cursor para os lados. |
|  |  |  |  |  |  |
| Tap to select. | Arraste dois dedos juntando-os ou afastando-os. | Drag with one finger to rotate. Mantenha pressionada a tecla Alt se estiver na [Bancada de trabalho de Esboço](/Sketcher_Workbench/pt "Sketcher Workbench/pt"). | Drag with two fingers. Como alternativa, toque e segure, depois arraste. Isto simula o Pan com o lado direito do rato. | | Rotate the imaginary line formed by two touch points. Na versão v0.18 este método está desactivado por defeito. Para o activar vá ao **Edit → Preferences → Display**, e desmarque a caixa "Disable touchscreen tilt gesture". |

### Navegação por Gestos no Maya

Na navegação por gestos no Maya, o Pan, o Zoom e rodação da vista requerem as teclas Alt em simultâneo com um botão do rato, como tal é preciso um rato com 3 botões. Também é possível usar gestos, que esta forma de navegar foi desenvolvida sobre o estilo [Navegação por Gestos](#Gesture_navigation/pt)

In Maya-Gesture Navigation, all view movements are activated pressing ALT and a mouse button, so that it will be needed to have a 3 button mouse in order to correctly use this navigation mode. Alternately it's possible to use gestures as this mode was been developed over the normal Gesture Navigation mode.

| Select | Zoom | | Rotate view | Pan | {{{Tilt\_view\_name}}} |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Press the left mouse button over an object you want to select. | Hold Alt and the right mouse button, then move the pointer. Alternatively, use the mouse wheel to zoom in and out. | | Hold Alt and the left mouse button, then move the pointer. | Hold Alt and the middle mouse button, then move the pointer. | {{{Tilt\_view\_text}}} |

|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

Alternatively, hold Alt and the right mouse button, then move the pointer.

|Rotate\_view\_text=Hold Alt and the left mouse button, then move the pointer.

|Pan\_text=Hold Alt and the middle mouse button, then move the pointer.

|Tilt\_view\_text=Hold Alt and both left and right mouse buttons, and then move the pointer sideways.
}}

### OpenCascade navigation

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

| Select | Zoom | | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Ctrl and the left mouse button, then move the pointer. | | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. Alternatively, hold Ctrl and the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl. | |

### OpenInventor navigation

### Navegação Inventor

Na Navegação Inventor, criada a partir do [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor) (não confundir com Autodesk Inventor), não existe seleção apenas com o rato. Para poder selecionar objetos, é necessário pressionar a tecla CTRL.

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| {{{Shift}}}+ |  |  |  |  |
| Hold Ctrl, then press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then press and hold the left mouse button, then move the pointer. | | Hold the left mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

This style is not based on Autodesk Inventor.

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Hold Shift, then press the left mouse button over an object you want to select. Hold Ctrl instead to select multiple objects. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then press and hold the left mouse button, then move the pointer. | | Hold the left mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

### OpenSCAD navigation

The OpenSCAD navigation style was modeled after [OpenSCAD](https://openscad.org/).

| Select | Zoom | | | Rotate view | | Pan |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. 0.21 and below Hold Ctrl and Shift when pressing the mouse button to drag an object in a sketch in edit mode. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then move the pointer.  Or hold Shift and the right mouse button, then move the pointer. | | | Hold the left mouse button, then move the pointer. Alternatively, and when a sketch is in edit mode, hold the middle mouse button, then press and hold the right mouse button, then move the pointer. | | Hold the right mouse button, then move the pointer. |

### Revit navigation

The Revit navigation style was modeled after [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| Select | Zoom | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold the middle mouse button, then press and hold the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, then move the pointer. | |

### SolidWorks navigation

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

The SolidWorks navigation style was modeled after [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Shift and the middle mouse button, then move the pointer.  Clicking the middle mouse button re-centers the view on the location of the cursor. | | Hold the middle mouse button, then move the pointer. | Hold Ctrl and the middle mouse button, then move the pointer. |

### TinkerCAD navigation

The TinkerCAD navigation style was modeled after [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Select | Zoom | Rotate view | Pan |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Press the right mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

### Navegação Touchpad

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

Na Navegação Touchpad, não pode fazer "pan", nem zoom, nem rodar a vista, apenas com o rato (ou touchpad).

| Select | Zoom | Rotate view | | Pan |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| Press the left mouse button over an object you want to select. | Use PageUp and PageDown to zoom in and out. | Hold Alt, then move the pointer. | | Hold Shift, then move the pointer. |

|Ctrl=Ctrl
|Shift=Shift
|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Hold Ctrl and Shift, then move the pointer.

|Rotate\_view\_text=Hold Alt, then move the pointer.

Alternatively, hold Shift and the left button, then move the pointer.

|Pan\_text=Hold Shift, then move the pointer.
}}

## Suporte de Hardware

O FreeCAD também suporta alguns [3D input devices](/3D_input_devices "3D input devices").

## Recommended navigation for macOS

On MacBooks with a trackpad the Gesture navigation works very well, but the gestures have a special meaning:

* Zoom: drag with two fingers.
* Rotate: drag with three fingers.
* Pan: Ctrl + three fingers.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/pt&oldid=1552140>"