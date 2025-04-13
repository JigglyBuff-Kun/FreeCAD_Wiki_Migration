---
title: Draft Text
---
|  |
| --- |
| Draft\_Text |
| Ubicación en el Menú |
| Croquis → Texto |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| T E |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

La herramienta Texto inserta una parte de un texto en un punto dado en el documento actual. Toma el [tamaño de texto y color](/Draft_Linestyle/es "Draft Linestyle/es") previamente establecidos en la pestaña de tareas.

To create a text element with an arrow use the [Draft Label](/Draft_Label "Draft Label") command instead.

![](/images/Draft_Text_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray") and [Draft Snap](/Draft_Snap "Draft Snap").

## Utilización

1. Presiona el botón ![](/images/Draft_Text.png) Texto, o presiona las teclas T y E
2. Designa un punto en la vista 3D, o escribe unas coordenadas
3. Introduce el texto deseado, presionando ENTER entre cada línea
4. Presiona ENTER dos veces para terminar la operación.

## Opciones

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Presionando CTRL se realizará un [ajuste](/Draft_Snap/es "Draft Snap/es") del punto a las ubicaciones de ajuste disponibles.
* Para introducir coordenadas manualmente, simplemente introduce los números, presiona ENTER entre cada componente X, Y y Z.
* Presionando ESC se cancela la operación.
* Cuando editando el texto, se presiona ENTER o DOWN ARROW permite introducir o editar una nueva línea de texto.
* Presionando UP ARROW permite editar una línea de texto previa.
* Presionando ENTER **dos veces** (hasta dejar la última línea vacía) se añade el texto al documento y se cierra el editor.

## Notes

* A Draft Text can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view").
* Draft Texts created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Propiedades

* Datos**Position**: El punto base del bloque de texto
* Datos**Label Text**: El contenido del bloque de texto
* Vista**Display Mode**: Especifica si el texto está alineado con los ejes de la escena o si siempre mira hacia la cámara
* Vista**Font Size**: El tamaño de las letras
* Vista**Justification**: Especifica si el texto está alineado a la izquierda, derecha o centrado del punto base.
* Vista**Line Spacing**: Especifica el espacio entre líneas de texto
* Vista**Rotation**: Especifica una rotación a ser aplicada al texto
* Vista**Rotation Axis**: Especifica el eje a utilizar para la rotación
* Vista**Font Name**: La fuente a utilizar para dibujar el texto. Puede ser un nombre de una fuente, como "Arial", un estilo por defecto como "sans", "serif" o "mono", o una familia como "Arial,Helvetica,sans" o un nombre con un estilo como "Arial:Bold". Si la fuente indicada no se encuentra en el sistema, se utilizará en su lugar una genérica.

See also: [Property editor](/Property_editor "Property editor").

A Draft Text object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated.

### Data

Base

* Datos**Placement** (`Placement`): specifies the position of the text in the [3D view](/3D_view "3D view"). See [Placement](/Placement "Placement").
* Datos**Text** (`StringList`): specifies the contents of the text. Each item in the list represents a new text line.

### View

Annotation

* Vista**Annotation Style** (`Enumeration`): specifies the annotation style applied to the text. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Vista**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the text.

Display Options

* Vista**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by its Datos**Placement**. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Vista**Line Color** (`Color`): not used.
* Vista**Line Width** (`Float`): not used.

Text

* Vista**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
* Vista**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
* Vista**Justification** (`Enumeration`): specifies if the alignment of the text: `Left`, `Center` or `Right`.
* Vista**Line Spacing** (`Float`): specifies the factor applied to the default line height of the text.
* Vista**Text Color** (`Color`): specifies the color of the text.

## Scripting

## Archivos de guión

La herramienta Texto puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

To create a Draft Text use the `make_text` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeText` method.

```
text = make_text(string, placement=None, screen=False)

```

* Crea un objeto texto, en el punto indicado si se proporciona un vector, conteniendo la cadena de texto o las cadenas dadas en la lista, una cadena de texto por línea.
* Se utilizan el color, altura de texto y fuente actuales de Boceto. Si screenmode es True, el texto siempre mira en la dirección de la vista, en otro casi permanece en el plano XY.
* Devuelve el objeto recién creado.

The view properties of `text` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Ejemplo:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/es&oldid=1513377>"