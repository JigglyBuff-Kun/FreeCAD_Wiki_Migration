---
title: Navegação com mouse
---
## Visão Geral

A navegação no FreeCAD consiste em uma combinação de comandos usados para navegar visualmente no seu espaço 3D e com isso interagir com os objetos exibidos. O FreeCAD suporta diversos estilos de navegação com o mouse. O estilo de navegação padrão é chamado de [Navegação CAD](#CAD_navigation), e ele é muito simples e prático, porém o FreeCAD também oferece outros estilos de navegação que podem ser usados com alternativa, caso você esteja habituado com algum outro programa. O estilo que escolher será usado para todos os bancadas de trabalho.

Para mais informações sobre a seleção de objetos, consulte [Métodos de seleção](/Selection_methods/pt-br "Selection methods/pt-br").

Para mais informações sobre manipulação de objetos, consulte o comando [**Transformar**](/Std_TransformManip/pt-br "Std TransformManip/pt-br").

## Selecionando um estilo de navegação

1. **Selecionando um estilo de navegação:**
   * Para acesso rápido clique no ![](/images/NavigationCAD_dark.svg) botão de seleção na [Barra de status](/Status_bar/pt-br "Status bar/pt-br").
   * Clique com o botão direito do mouse em uma área vazia da [visualização 3D](/3D_view "3D view") e selecione **Estilos de navegação** no Menu de Contexto.
2. **Para definir seu estilo de navegação nas [Preferências](/Preferences_Editor/pt-br#Navegação "Preferences Editor/pt-br") do Freecad:**
   * Vá na barra de menu, clique em **Editar → Preferências** e depois no icone '***Tela** → escolha a aba **Navegação** → Em **Navegação 3D'***. Então, clique na **seta para baixo** para abrir o menu de contexto e escolha a sua configuração preferida.![](/images/Preferences_Display_Tab_Navigation.png)
3. Se preferir, altere o **Estilo de órbita**: pressione o botão ![](/images/NavigationCAD_dark.svg) na [barra de status](/Status_bar "Status bar") e depois escolha **Configurações → Estilo de órbita**. Consulte o [Editor de Preferências](/Preferences_Editor#Navigation "Preferences Editor").
4. Caso deseje, altere o **Modo de rotação**. Consulte o [Editor de Preferências](/Preferences_Editor#Navigation "Preferences Editor").
5. Se o estilo de navegação **CAD** estiver selecionado: caso e deseje, pode **Habilitar a animação** alterando a configuração. Consulte o [Editor de Preferências](/Preferences_Editor#Navigation "Preferences Editor").

## Estilos de navegação disponíveis

Com todos os estilos de navegação, exceto ao selecionar objetos de um esboço no modo de edição, é necessário pressionar Ctrl para selecionar vários objetos.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Navegação do Blender

O estilo de navegação do Blender foi modelado com base no [Blender](https://www.blender.org).

| Selecionar | Zoom | Rotacionar | Pan(Movimento lateral) | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the middle mouse button, then move the pointer. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, and then move the pointer. | |

### Navegação CAD

Este é o estilo de navegação padrão. Permite um controle simples da visualização e não requer o uso de teclas do teclado, exceto para fazer seleções múltiplas.

| Selecionar | Zoom | Rotacionar visão Primeiro método | Rotacionar visão Método alternativo | Pan(Movimento lateral) |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. Se os botões forem soltos antes de você parar o movimento do mouse, a visualização continuará girando, se isso estiver habilitado. | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. Com este método, o botão central do mouse pode ser solto depois que o botão direito do mouse for pressionado.  Os usuários que usam o mouse com a mão direita podem achar este método mais fácil do que o primeiro método. | Mantenha pressionado o botão central do mouse e, em seguida, mova o cursor. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | {{{Zoom\_mode\_text}}} | {{{Rotate\_view\_mode\_text}}} |  | Movimentação panorâmica ou lateral: mantenha pressionada a tecla Ctrl, pressione o botão direito do mouse uma vez e, em seguida, mova o cursor. |

|Pan\_text=Hold the middle mouse button, then move the pointer.

|Zoom\_mode\_text=Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer.

|Rotate\_view\_mode\_text=Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer.

|Pan\_mode\_text=Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer.
}}

### Navegação por Gestos

Este estilo foi adaptado para uso com tela sensível ao toque e caneta. No entanto, também pode ser utilizado com um mouse e é recomendado para uso em um Mac com trackpad.

| Selecionar | Zoom | Rotacionar a visão | Pan (Movimento lateral) | | Inclinar a visão |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the left mouse button, then move the pointer. In [Sketcher](/Sketcher_Workbench "Sketcher Workbench") and other edit modes, this behavior is disabled. Hold Alt when pressing the mouse button to enter rotation mode. | Hold the right mouse button, then move the pointer. | | Mantenha pressionados os botões esquerdo e direito do mouse, depois mova o ponteiro lateralmente. |
|  |  |  |  |  |  |
| Tap to select. | Drag two fingers (pinch) closer or farther apart. | Drag with one finger to rotate. Pressione Alt ao usar o [Ambiente de Esboço](/Sketcher_Workbench "Sketcher Workbench"). | Drag with two fingers. Alternatively, tap and hold, then drag. This simulates the pan with the right mouse button. | | Rotate the imaginary line formed by two touch points. Este método está desabilitado por padrão. Para ativá-lo, vá para **Editar → Preferências → Exibição → Navegação**, e desmarque a caixa "Desativar gesto de inclinação na tela sensível ao toque". |

### Navegação por gestos no Maya

Na Navegação por Gestos no Maya, o movimento panorâmico, o zoom e a rotação da visualização exigem a tecla Alt em conjunto com um botão do mouse; portanto, é necessário um mouse de três botões. Também é possível usar gestos, pois este estilo foi desenvolvido com base no estilo de [navegação por gestos](#Gesture_navigation).

Na Navegação com o Maya-Gesture, o panorâmico, o zoom e a rotação da vista requerem a tecla Alt juntamente com um botão do mouse; portanto, é necessário um mouse de três botões. Também é possível usar gestos, pois este modo foi desenvolvido sobre o modo [Navegação por gestos](#Navegação_por_gestos).

| Selecionar | Zoom | | Rotacionar vista | Pan(movimento panorâmico) | {{{Tilt\_view\_name}}} |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Alt and the right mouse button, then move the pointer. | | Hold Alt and the left mouse button, then move the pointer. | Hold Alt and the middle mouse button, then move the pointer. | Hold Alt and both left and right mouse buttons, and then move the pointer sideways. |

### Navegação OpenCascade

O estilo de navegação OpenCascade foi modelado com base no [OpenCascade](https://www.opencascade.com/).

| Selecionar | Zoom | | Rotacionar vista | | Pan(movimento panorâmico) | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Como alternativa, mantenha pressionadas as teclas Ctrl e o botão esquerdo do mouse, depois mova o ponteiro. | | Mantenha pressionadas as teclas Ctrl e o botão direito do mouse, depois mova o ponteiro. | | Segure o botão do meio do mouse, depois mova o ponteiro. | |

|Rotate\_view\_text=Hold the middle mouse button, then press and hold the right mouse button, then move the pointer.

Alternatively, hold Ctrl and the right mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl.
}}

### Navegação OpenInventor

A navegação do OpenInventor (anteriormente conhecido como Inventor) foi modelada com base no [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor). Para selecionar objetos, é necessário manter pressionada a tecla Shift ou Ctrl.

Este estilo não é baseado no Autodesk Inventor.

| Selecionar | Zoom | | Rotacionar vista | Pan(movimento panorâmico) |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Hold Shift, then press the left mouse button over an object you want to select. Mantenha pressionada a tecla Ctrl em vez disso para selecionar vários objetos. | Use the mouse wheel to zoom in and out. Como alternativa, mantenha pressionado o botão central do mouse, em seguida, pressione e segure o botão esquerdo do mouse, depois mova o ponteiro. | | Mantenha pressionado o botão esquerdo do mouse, depois mova o ponteiro. | Mantenha pressionado o botão central do mouse e mova o ponteiro. |

|Rotate\_view\_text=Hold the left mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer.
}}

### Navegação OpenCascade

O estilo de navegação do OpenSCAD foi modelado com base no [OpenSCAD](https://openscad.org/).

| Select | Zoom | | | Rotate view | | Pan |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. Mantenha pressionadas as teclas Ctrl e Shift ao pressionar o botão do mouse para arrastar um objeto em um esboço no modo de edição. | Mantenha pressionado o botão central do mouse e mova o ponteiro. Como alternativa, mantenha pressionadas as teclas Shift e o botão direito do mouse, depois mova o ponteiro. | | | Mantenha pressionado o botão esquerdo do mouse e mova o ponteiro. | | Mantenha pressionado o botão direito do mouse e mova o ponteiro. |

|Zoom\_text=Use the mouse wheel to zoom in and out.

Alternatively, hold the middle mouse button, then move the pointer.

Or hold Shift and the right mouse button, then move the pointer.

|Rotate\_view\_text=Hold the left mouse button, then move the pointer.

Alternatively, and when a sketch is in edit mode, hold the middle mouse button, then press and hold the right mouse button, then move the pointer.

|Pan\_text=Hold the right mouse button, then move the pointer.
}}

### Navegação do Revit

O estilo de navegação do Revit foi modelado com base no [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| Selecionar | Zoom | Rotacionar vista | | Pan(movimento panorâmico) | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. | Use a rodinha do mouse para aumentar e diminuir o zoom. | Hold Shift and the middle mouse button, then move the pointer. Alternativamente, segure o botão central do mouse, depois pressione e segure o botão direito do mouse, depois mova o ponteiro. | | Segure o botão do meio do mouse, depois mova o ponteiro. | |

|Pan\_text=Hold the middle mouse button, then move the pointer.

Alternativamente, segure os botões esquerdo e direito do mouse, depois mova o ponteiro.

### SolidWorks navigation

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

The SolidWorks navigation style was modeled after [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Shift and the middle mouse button, then move the pointer.  Clicking the middle mouse button re-centers the view on the location of the cursor. | | Hold the middle mouse button, then move the pointer. | Hold Ctrl and the middle mouse button, then move the pointer. |

### Navegação do TinkerCAD

O estilo de navegação do TinkerCAD foi modelado com base no [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Select | Zoom | Rotate view | Pan |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Press the right mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

|Rotate\_view\_text=Press the right mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer.
}}

### Navegação Touchpad

Com o estilo de navegação do Touchpad, panorâmica, zoom e rotação da visualização exigem uma tecla modificadora junto com o touchpad. Este estilo também pode ser usado com um mouse.

Na Navegação com touchpad, panorâmico, zoom e rotacionar vista requerem o pressionamento de tecla com o touchpad.

| Selecionar | Zoom | Rotacionar vista | | Pan(movimento panorâmico) |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| Pressione o botão esquerdo do mouse sobre um objeto que você deseja selecionar. | Use PageUp e PageDown para aumentar e diminuir o zoom. | Segure Alt, depois mova o ponteiro. | | Segure Shift, depois mova o ponteiro. |

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

O FreeCAD também suporta alguns [dispositivos de entrada 3D](/3D_input_devices/pt-br "3D input devices/pt-br").

## Navegação recomendada para macOS

Nos MacBooks com trackpad, a navegação por gestos funciona muito bem, mas os gestos têm um significado especial:

* Zoom: arraste com dois dedos.
* Girar: arraste com três dedos.
* PAN (Panorâmica): Ctrl + três dedos.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/pt-br&oldid=1552132>"