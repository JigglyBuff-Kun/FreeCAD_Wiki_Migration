---
title: Draft "Текст"
---
|  |
| --- |
| Текст |
| Расположение в меню |
| Annotation → Текст |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| T E |
| Представлено в версии |
| 0.7 |
| См. также |
| [Метка](/Draft_Label/ru "Draft Label/ru"), [Фигура из текста](/Draft_ShapeString/ru "Draft ShapeString/ru") |
|  |

## Описание

Инструмент ![](/images/Draft_Text.svg) [Текст](/Draft_Text "Draft Text") позволяет добавить в документ многострочную текстовую область в указанную точку. Он использует предварительно выбранный [Draft Linestyle](/Draft_Linestyle/ru "Draft Linestyle/ru"), установленный в [Draft Tray](/Draft_Tray/ru "Draft Tray/ru").

To create a text element with an arrow use the [Draft Label](/Draft_Label "Draft Label") command instead.

![](/images/Draft_Text_example.png)

Для размещения текстового поля требуется одна точка

## Применение

See also: [Draft Tray](/Draft_Tray "Draft Tray") and [Draft Snap](/Draft_Snap "Draft Snap").

1. Нажмите кнопку ![](/images/Draft_Text.svg) Текст, или нажмите клавишу T, а затемE
2. Укажите точку на трёхмерном виде или задайте координаты и нажмите кнопку ![](/images/Draft_AddPoint.svg) add point.
3. Введите желаемый текст нажимая Enter между каждыми строками
4. Дважды нажмите Enter для завершения.

## Опции

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Для указания координат вручную, введите число и нажимайте ENTER для перехода между координатами X, Y и Z. Вы можете нажать кнопку ![](/images/Draft_AddPoint.svg) добавить точку, когда у вас есть нужные значения для вставки точки.
* Удерживайте Ctrl при размещении текста, чтобы принудительно установить [привязку](/Draft_Snap/ru "Draft Snap/ru") вашей точки в ближайшее место привязки, независимо от расстояния.
* Нажмите Enter или ↓ Стрелка вниз, чтобы ввести новую строку текста.
* Нажмите ↑ Стрелка вверх, чтобы отредактировать предыдущую строку текста.
* Дважды нажмите Enter или ↓ Стрелка вниз, чтобы завершить редактирование текста.
* Нажмите Esc или кнопку Close, чтобы прервать выполнение текущей команды.

## Примечания

* A Draft Text can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view").
* Draft Texts created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A Draft Text object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated.

### Данные

Основные

* Данные**Положение**: указывает базовую точку первой линии текстового блока.
* Данные**Текст**: указывает содержимое текстового блока как список строк, каждый элемент списка, разделённый запятыми, показывает новую строку

### Вид

Annotation

* Вид**Annotation Style** (`Enumeration`): specifies the annotation style applied to the text. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Вид**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the text.

Display Options

* Вид**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by its Данные**Placement**. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Вид**Line Color** (`Color`): not used.
* Вид**Line Width** (`Float`): not used.

Text

* Вид**Режим отображения**: если это «3D текст», текст будет выровнен по осям сцены, изначально лежащим в плоскости XY; если это «2D-текст», текст всегда будет смотреть в камеру.
* Вид**Шрифт**: указывает шрифт для отображения текста. Может быть название шрифта, например "Arial", название стиля, например, "sans", "serif" или "mono", название семейства, например, "Arial,Helvetica,sans", или название со стилем, например "Arial:Bold". Если указанный шрифт не найден в системе, то будет использован основной.
* Вид**Размер шрифта**: указывает размер символов текста. Если текстовый объект создается в древе проекта, но текст не отображается, увеличивайте размер текста, пока он не станет видим.
* Вид**Выравнивание**: указывает выравнивание текста налево, направо или по центру от базовой точки.
* Вид**Межстрочное расстояние**: указывает расстояние между строк текста.

## Программирование

*См. так же:* [Draft API](/Draft_API/ru "Draft API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Инструмент Текст может быть использован в [макросах](/Macros/ru "Macros/ru") и из консоли [Python](/Python/ru "Python/ru") следующими функциями:

```
text = make_text(string, placement=None, screen=False)

```

* Создать объект `Text` в `point`, определённой как `FreeCAD.Vector`.
* `stringlist` это строка, или список строк, если это список, каждый элемент показывается в отдельной строке.
* Если `screen` равен `True`, текст всегда ориентируется в направлении просмотра камеры, иначе выравнивается по осям сцены и лежит в плоскости XY.

The view properties of `text` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Пример:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

t1 = "This is a sample text"
p1 = App.Vector(0, 0, 0)

t2 = ["First line", "second line"]
p2 = App.Vector(1000, 1000, 0)

text1 = Draft.make_text(t1, p1)
text2 = Draft.make_text(t2, p2)
text1.ViewObject.FontSize = 200
text2.ViewObject.FontSize = 200

zaxis = App.Vector(0, 0, 1)

t3 = ["Upside", "down"]
p3 = App.Vector(-1000, -500, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 180))
text3 = Draft.make_text(t3, place3)
text3.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/ru&oldid=1513359>"