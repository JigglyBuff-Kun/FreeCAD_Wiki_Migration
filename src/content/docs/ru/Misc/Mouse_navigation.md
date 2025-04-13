---
title: Навигация в 3D пространстве
---
## Обзор

Каждый **стиль навигации** определяет собой методы для навигации в трёхмерном пространстве, а так же методы взаимодействия с трехмерными объектами (перемещение, вращение и т.п.). FreeCAD поддерживает несколько стилей навигации и управления. По умолчанию установлен [CAD стиль навигации](#Навигация_CAD), он очень простой и практичный, но FreeCAD так же предлагает альтернативные стили навигации, которые вы можете выбрать по своим предпочтениям. Назначенный пользователем стиль навигации будет использоваться для всех верстаков.

Дополнительные сведения о способах выбора объектов см. в разделе [Методы выбора объектов](/Selection_methods/ru "Selection methods/ru").

Дополнительные сведения о способах преобразования объектов см. на странице описания команды [Преобразование](/Std_TransformManip/ru "Std TransformManip/ru").

## Выбор стиля навигации

1. Выполните одно из следующих действий:
   * Нажмите на кнопку ![](/images/NavigationCAD_dark.svg) в [Строке состояния](/Status_bar/ru "Status bar/ru").
   * Щелкните правой кнопкой мыши в пустую область в [3D Виде](/3D_view/ru "3D view/ru"), и выберите **Стили навигации** в контекстном меню.
   * Откройте [Редактор настроек](/Preferences_Editor/ru#Navigation "Preferences Editor/ru") через пункт главного меню **Редактировать → Настройки...** В нем выберите раздел **Отображение →** вкладку **Навигация →** пункт **Трехмерная навигация**.
2. Выберите стиль из списка.
3. При необходимости укажите стиль **Ващения**: нажмите на кнопку ![](/images/NavigationCAD_dark.svg) в [Строке состояния](/Status_bar/ru "Status bar/ru") и выберите в контекстом меню пункт **Настройки → Вращение**. Подробности см. в описании [Редактора настроек](/Preferences_Editor/ru#Navigation "Preferences Editor/ru").
4. При необходимости укажите **Режим вращения**. Подробности см. в описании [Редактора настроек](/Preferences_Editor#Navigation "Preferences Editor").
5. Если выбран стиль навигации **CAD**: при необходимости укажите параметр настроек **Включить анимацию**. Подробности см. в описании [Редактора настроек](/Preferences_Editor#Navigation "Preferences Editor").

## Доступные стили навигации

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Навигация Blender

Стиль навигации Blender основан на модели управления используемой в редакторе [Blender](https://www.blender.org).

| Выбор | Масштабирование | Вращение | Перемещение | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the middle mouse button, then move the pointer. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, and then move the pointer. | |

### Навигация CAD

Это стиль навигации по умолчанию и позволяет пользователю простейшее управление видом, не требуя использования клавиатуры, кроме как для множественного выделения.

| Выбор | Масштабирование | Вращение обычное | Вращение альтернативным методом | Перемещение |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. Если кнопки будут отпущены до того, как вы остановите движение мыши, Вид продолжит вращение, в случае если включен [поворотный просмотр объекта](/Spinning/ru "Spinning/ru"). | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. При этом методе средняя кнопка мыши может быть отпущена после того как правая кнопка осталась нажатой.  Пользователи, использующие мышь правой рукой могут счесть этот метод проще исходного. | {{{Pan\_text}}} |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | {{{Zoom\_mode\_text}}} | {{{Rotate\_view\_mode\_text}}} |  | {{{Pan\_mode\_text}}} |

|Pan\_text=Hold the middle mouse button, then move the pointer.

|Zoom\_mode\_text=Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer.

|Rotate\_view\_mode\_text=Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer.

|Pan\_mode\_text=Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer.
}}

### Навигация Gesture (Жестами)

Этот стиль был разработан специально для работы с сенсорным экраном с помощью стилуса или жестами. Тем не менее он также может применяться при управлении мышью, кроме того данный стиль управления рекомендуется использовать при управлении трекпадом в Mac.

| Выбор | Масштабирование | Вращение | Перемещение | | Наклонить вид |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Press the left mouse button over an object you want to select. | Используйте колёсико мыши для масштабирования. | Удерживайте левую кнопку мыши и тяните указатель. В режиме [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") и некоторых других это действие заблокировано. Удерживайте Alt при нажатии кнопки мыши для перехода в режим вращения. | Hold the right mouse button, then move the pointer. | | Удерживайте левую и правую кнопку мыши и тяните указатель в сторону. |
|  |  |  |  |  |  |
| Tap to select. | Сдвиньте пальцы для масштабирования (т.е. потяните два пальца к/от друг друга). | Drag with one finger to rotate. Удерживайте вдобавок Alt в режиме [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru"). | Drag with two fingers. Или, коснитесь экрана одним пальцем, удерживайте его некоторое время, а потом перемещайте в нужном направлении. Это равносильно перемещению с помощью правой кнопки мыши. | | Rotate the imaginary line formed by two touch points. Начиная с версии v0.18 этот метод по умолчанию отключён. Для разрешения **Правка → Настройки → Отображение**, и снимите метку "Отключить жест наклона для сенсорного экрана". |

### Навигация Maya-Gesture (Жестами в стиле Maya)

В стиле навигации MayaGesture, перемещение, масштабирование и вращение Вида выполняется при зажатой клавише ALT и нажатии одной из трех кнопок мыши, поэтому этот стиль навигации полноценно можно использовать только с трехкнопочной мышью. В данном стиле также можно использовать жесты из [обычного стиля навигации жестами](/Mouse_Model#Gesture_Navigation/ru "Mouse Model"), так как этот стиль был разработан на его основе.

| Выбор | Масштабирование | | Вращение | Перемещение | {{{Tilt\_view\_name}}} |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Alt and the right mouse button, then move the pointer. | | Hold Alt and the left mouse button, then move the pointer. | Hold Alt and the middle mouse button, then move the pointer. | Hold Alt and both left and right mouse buttons, and then move the pointer sideways. |

### Навигация OpenCascade

Стиль навигации OpenCascade основан на модели управления используемой в [OpenCascade](https://www.opencascade.com/).

| Выбор | Масштабирование | | Вращение | | Перемещение | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Или, удерживая Ctrl и левую кнопку мыши, перемещайте указатель. | | Удерживая Ctrl и правую кнопку мыши, перемещайте указатель. | | Удерживая среднюю кнопку мыши, перемещайте указатель. | |

|Rotate\_view\_text=Hold the middle mouse button, then press and hold the right mouse button, then move the pointer.

Alternatively, hold Ctrl and the right mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl.
}}

### Навигация OpenInventor

Стиль навигации OpenInventor основан на модели управления используемой в редакторе [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor). Для выбора объектов, необходимо удерживать нажатой клавишу Shift или Ctrl.

Данный стиль управления отличен от того, что применен в Autodesk Inventor.

| Выбор | Масштабирование | | Вращение | Перемещение |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Hold Shift, then press the left mouse button over an object you want to select. Вместо этого удерживайте нажатой клавишу Ctrl, чтобы выбрать несколько объектов. | Use the mouse wheel to zoom in and out. Или, зажмите и удерживайте среднюю и левую кнопку мыши, затем перемещайте указатель. | | Удерживая левую кнопку мыши, перемещайте указатель. | Удерживая среднюю кнопку мыши, перемещайте указатель. |

|Rotate\_view\_text=Hold the left mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer.
}}

### Навигация OpenSCAD

Стиль навигации OpenSCAD основан на модели управления используемой в редакторе [OpenSCAD](https://openscad.org/).

| Выбор | Масштабирование | | | Вращение | | Перемещение |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Нажмите левую кнопку мыши над объектом, который хотите выбрать. | Удерживая среднюю кнопку мыши, перемещайте указатель. Или, удерживая Shift и правую кнопку мыши, перемещайте указатель. | | | Удерживайте левую кнопку мыши и перемещайте указатель. | | Удерживайте правую кнопку мыши и перемещайте указатель. |

|Shift=Shift

|Select\_text=Press the left mouse button over an object you want to select.

0.21 and below Hold Ctrl and Shift when pressing the mouse button to drag an object in a sketch in edit mode.

|Zoom\_text=Use the mouse wheel to zoom in and out.

Alternatively, hold the middle mouse button, then move the pointer.

Or hold Shift and the right mouse button, then move the pointer.

|Rotate\_view\_text=Hold the left mouse button, then move the pointer.

Alternatively, and when a sketch is in edit mode, hold the middle mouse button, then press and hold the right mouse button, then move the pointer.

|Pan\_text=Hold the right mouse button, then move the pointer.
}}

### Навигация Revit

Стиль навигации Revit основан на модели управления используемой в редакторе [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| Выбор | Масштабирование | Вращение | | Перемещение | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. | Используйте для приближения и отдаления колёсико мыши. | Hold Shift and the middle mouse button, then move the pointer. Или, удерживая среднюю кнопку мыши, нажмите и удерживайте правую кнопку, затем перемещайте указатель. | | Удерживая среднюю кнопку мыши, перемещайте указатель. | |

|Pan\_text=Hold the middle mouse button, then move the pointer.

Или, удерживая левую и правую кнопку мыши, перемещайте указатель.

### SolidWorks navigation

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

The SolidWorks navigation style was modeled after [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Shift and the middle mouse button, then move the pointer.  Clicking the middle mouse button re-centers the view on the location of the cursor. | | Hold the middle mouse button, then move the pointer. | Hold Ctrl and the middle mouse button, then move the pointer. |

### Навигация TinkerCAD

Стиль навигации TinkerCAD основан на модели управления используемой в редакторе [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Выбор | Масштабирование | Вращение | Перемещение |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Нажмите левую кнопку мыши над объектом, который хотите выбрать. | Используйте колёсико мыши для приближения и отдаления. | Удерживая правую кнопку мыши, перемещайте указатель. | Удерживая среднюю кнопку мыши, перемещайте указатель. |

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

|Rotate\_view\_text=Press the right mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer.
}}

### Навигация Touchpad

В режиме навигации тачпадом, перемещение, масштабирование и вращение Вида требует использования вместе с тачпадом модифицирующих клавиш.

| Выбор | Масштабирование | Вращение | | Перемещение |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| Нажмите левую кнопку над объектом, который хотите выбрать. | Используйте PageUp и PageDown для приближения или отдаления. | Удерживайте клавишу Alt и перемещайте указатель. | | Удерживайте Shift и двигайте объект. |

|Ctrl=Ctrl
|Shift=Shift
|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Hold Ctrl and Shift, then move the pointer.

|Rotate\_view\_text=Hold Alt, then move the pointer.

Alternatively, hold Shift and the left button, then move the pointer.

|Pan\_text=Hold Shift, then move the pointer.
}}

## Поддержка оборудования

В FreeCAD так же поддерживает некоторые [устройства 3D ввода](/3D_input_devices/ru "3D input devices/ru").

## Рекомендуемый стиль управления для MacOS

На MacBook с трекпадом навигация жестами работает хорошо, но жесты имеют особое значение:

* Масштабирование: касание и перемещение двумя пальцами.
* Вращение: касание и перемещение тремя пальцами.
* Перемещение: Ctrl + касание и перемещение тремя пальцами.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/ru&oldid=1552150>"