---
title: PáginasWiki
---
Esta página es una extensión de la página [Ayuda:Edición](/Help:Editing "Help:Editing") y da pautas comunes para escribir y actualizar la documentación del wiki de FreeCAD. Resume varias discusiones y sesiones de brainstorming

## Antes de empezar

* Esta documentación wiki está basada en [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), el mismo software que utiliza [Wikipedia](https://es.wikipedia.org/wiki/Main_Page). Si has contribuido a la Wikipedia, editar las páginas del wiki de FreeCAD debería ser fácil.
* A diferencia de Wikipedia, el wiki de FreeCAD está protegido contra la escritura para evitar el spam. Debes solicitar una cuenta [en el foro](http://forum.freecadweb.org/viewtopic.php?f=21&t=6830).
* Si nunca has usado el software wiki antes, por favor lee [Ayuda:Edición](/Help:Editing "Help:Editing") para familiarizarte con el marcado que se usa.
* Para el uso avanzado del software wiki, vea [Ayuda de MediaWiki:Contenido](https://www.mediawiki.org/wiki/Help:Contents). No todas las características de MediaWiki están disponibles en este wiki de FreeCAD, pero muchas sí.
* Nos gusta mantener la documentación fácil de leer, así que evita usar características complejas. Mantén la sencillez.
* Usa un sandbox para probar tu código, por ejemplo, [FreeCADDocu:Sandbox](/FreeCADDocu:Sandbox "FreeCADDocu:Sandbox") o una página particular con tu nombre [Sandbox:Yourname](/index.php?title=Sandbox:Yourname&action=edit&redlink=1 "Sandbox:Yourname (page does not exist)"). Las páginas Sandbox deben de ser colocads en la categoría Sandbox. Esto se logra al agregar `[[Category:Sandbox]]` al final del código de la wiki.
* Por favor, ten en cuenta las traducciones. El wiki de FreeCAD utiliza soporte de traducción automática para proporcionar páginas en muchos idiomas. Para cada página pueden existir múltiples versiones lingüísticas. En muchas páginas verás etiquetas como `<translate>...</translate>` y muchas etiquetas simples como `<!--T:8-->`. Estas últimas son llamadas unidades de traducción y son creadas por el sistema de traducción, no debería de crearlas manualmente. Vinculan los títulos y los párrafos a sus versiones traducidas. No debería cambiarlos, ya que eso destruiría esos enlaces. Sin embargo, puede mover los párrafos o cambiar la redacción siempre que las etiquetas permanezcan con ellos. Si elimina un epígrafe o un párrafo, debe eliminar también la etiqueta que le corresponde. Tenga en cuenta que los cambios en los títulos y párrafos existentes afectan a las traducciones actuales. Sus cambios deben valer la pena. No se preocupe cuando añada nuevo material porque el sistema añadirá nuevas etiquetas automáticamente después de sus ediciones. Para más información, consulte [Localización](/Localisation/es "Localisation/es") y la página original [Mediawiki:Extensión:Traducir](https://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example).

## Directrices generales

### Descripciones concisas

Cuando describas FreeCAD intenta ser conciso y directo y evita las repeticiones. Describe lo que FreeCAD *hace*, no lo que FreeCAD *no hace*. Evita también expresiones coloquiales como "un par". Utilice "algunos" cuando se trate de un número indeterminado, o especifique la cantidad correcta.

Mala descripción
:   [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/de "PartDesign Workbench/de"): el Ambiente de trabajo DiseñoPieza es un ambiente de trabajo para el diseño de piezas que pretende proporcionar herramientas para el modelado de piezas sólidas complejas.

Buena descripción
:   [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/de "PartDesign Workbench/de"): tiene como objetivo proporcionar herramientas para el modelado de piezas sólidas complejas.

### Información centralizada

Evite duplicar la misma información en diferentes lugares. Inserte la información en una nueva página, y enlace a esta página desde otras páginas que requieran esta información.

No utilices la transclusión de páginas ([Ayuda:Edición#Plantillas y páginas transcluidas](/Help:Editing#Templates_and_transcluding_pages "Help:Editing")), ya que esto dificulta la traducción del wiki. Utiliza sólo las plantillas descritas en [#Plantillas](#Templates).

### Estilismo

Las plantillas se utilizan para dar estilo a las páginas de ayuda. Proporcionan a la documentación un aspecto consistente. Hay una plantilla para los comandos del menú, **Archivo → Guardar**, una plantilla para dar estilo a las teclas a pulsar, Shift, para mostrar un valor booleano, `true`, etc. Por favor, familiarícese con la sección [#Plantillas](#Templates) antes de escribir páginas de ayuda.

### Banderas temporales

Si está trabajando en una página grande, es aconsejable marcar la página como trabajo en curso o como inacabada. Esto asegura que los administradores del wiki no marquen su página como lista para ser traducida mientras usted todavía la está cambiando.

Para marcar una página, añada `{{Page in progress}}` o `{{UnfinishedDocu}}` como primera línea. Con `{{UnfinishedDocu}}` invitas a otros a unirse a ti para terminar la página, mientras que `{{Page in progress}}` indica que tú mismo harás el trabajo y que los demás deben darte algo de tiempo.

Una vez terminado el trabajo, no olvides retirar las banderas.

## Ejemplos

Para familiarizarse rápidamente con la estructura y el estilo del wiki de FreeCAD mira la página del modelo: [Modelo de GuiCommando](/GuiCommand_model/es "GuiCommand model/es").

## Estructura

El [El centro de usuarios](/User_hub/es "User hub/es") proporciona un [Índice de contenidos](/Online_Help_Toc/es "Online Help Toc/es"). Esto se utiliza como referencia principal para construir automáticamente la ayuda offline que puedes alcanzar desde FreeCAD, así como la documentación offline en PDF.

La [Plantilla:Docnav](/Template:Docnav/es "Template:Docnav/es") se utiliza para enlazar secuencialmente las páginas, siguiendo a la estructura del [Índice de contenidos](/Online_Help_Toc/es "Online Help Toc/es"). Ver <#Plantillas> para una lista de todas las plantillas.

### Nombres de páginas

Los nombres de las páginas deben ser cortos, y deben capitalización de título: todas las palabras deben comenzar con letra mayúscula a menos que sean artículos, preposiciones, conjunciones u otras partículas gramaticales (f.e. 'of', 'on', 'in', 'a', 'an', 'and').

Mal Nombre de página
:   Construction of AeroCompany airplanes

Buen nombre de página
:   Construction of AeroCompany Airplanes

Los nombres de las páginas de los ambientes de trabajo de nivel superior deben tener este formato `XYZ Workbench`, donde `XYZ` es el nombre del ambiente de trabajo, por ejemplo [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es"). Y los nombres de las páginas que describen los comandos (o herramientas) pertenecientes a un banco de trabajo deben tener este formato `XYZ Command`, por ejemplo [DiseñoPieza Alcolchado](/PartDesign_Pad/es "PartDesign Pad/es"). Ten en cuenta que debes utilizar el nombre del comando tal y como aparece en el código fuente.

### Rúbricas

Los títulos de los párrafos deben ser cortos y usar mayúsculas y minúsculas: todas las palabras, excepto la primera y los nombres propios, deben estar en minúsculas. No debe utilizar encabezados `H1` (`= Heading =`) en el marcado de su wiki desde el título de la página ya que se agrega automáticamente como el encabezado principal `H1`.

### Enlaces

Debe utilizar el nombre del enlace original para los enlaces siempre que sea posible. Esto aclara la página a la que se hace referencia en la documentación impresa o fuera de línea. Evite palabras sin significado para el enlace.

Mal enlace
:   For more information on drafting 2D objects click [here](/Draft_Workbench "Draft Workbench").

Buen enlace
:   For more information on drafting 2D objects refer to the [Draft Workbench](/Draft_Workbench "Draft Workbench").

El formato preferido para un enlace es:

`[[Name_of_Page|Name of Page]]`

Traducido:

`[[Name_of_Page/es|Nombre de la Página]]`

Tenga en cuenta que para la parte anterior al carácter `|`, el enlace real, mayúsculas y minúsculas, es relevante. Si el nombre de su página es `Name_of_page`, el enlace fallará si escribe `Name_of_Page` (P mayúscula). Antes del carácter `|`, todos los espacios deben reemplazarse por guiones bajos (`_`). Esto es para ayudar a los traductores que utilizan software de traducción; sin los guiones bajos, el software traduciría el enlace, lo cual no es deseable.

Para vincular a un determinado párrafo, agregue un signo `#` y sus encabezados al nombre de la página. Ejemplo:

`[[WikiPages#Links|WikiPages]]`

Traducido:

`[[WikiPages/es#Enlaces|WikiPages]]`

Dentro de la misma página puede omitir el nombre de la página. Ejemplo:

`[[#Links|Links]]`

Para vincular a la parte superior de la página puede utilizar:

`</translate>{{Top}}<translate>`

This template should automatically display the correct text depending on the language of the page. A link to the top of the page is especially useful for long pages as it allows the user to quickly jump back to the table of content. You can put it at the end of each paragraph. Make sure there is an empty line before and after the template.

Image link
:   [![Optional text that is shown when you hover the image](/images/Draft_Wire.svg)](/Draft_Wire "Optional text that is shown when you hover the image ")

To use an image as a link:

`[[Image:Draft_Wire.svg|24px|Optional text that is shown when you hover the image|link=Draft_Wire]]`

Image link + text link
:   ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire")

If you leave out the optional text the link itself will be shown when the image is hovered, which is preferable, and you should also add a text link after the image link:

`[[Image:Draft_Wire.svg|24px|link=Draft_Wire]] [[Draft_Wire|Draft Wire]]`

### Páginas del ambiente de trabajo

A top level workbench page should start with:

* A description of what the workbench is used for.
* An image to illustrate the description.

See [#Screen capture](#Screen_capture) for conventions on including images.

### Páginas de comandos

Command pages describing workbench tools should not be too long, they should only explain what a command can do and what it can't, and how to use it. You should keep pictures and examples to a minimum. Tutorials can expand on how to use the tool and provide step-by-step details.

Please refer to the [GuiCommand model](/GuiCommand_model "GuiCommand model") page for more details.

### Tutoriales

A well written tutorial should teach how to achieve certain practical results quickly. It shouldn't be too long, but should include sufficient step-by-step instructions and images to guide the user. As FreeCAD evolves, tutorials may become obsolete, so it is important to mention the FreeCAD version used in, or required for, a tutorial.

For examples visit the [Tutorials](/Tutorials "Tutorials") page.

## Plantillas

Styling of the FreeCAD wiki pages is achieved through the use of templates ([Help:Editing#Templates\_and\_transcluding\_pages](/Help:Editing#Templates_and_transcluding_pages "Help:Editing")). They ensure a standardized look and feel across all pages, and also make it possible to re-style the wiki. You can see the complete list of defined templates by accessing [Special:PrefixIndex/Template:](/Special:PrefixIndex/Template: "Special:PrefixIndex/Template:"). But please only use the templates listed in the tables below. Only in very special cases should you use HTML tags directly.

Click on the template link to see the usage instructions for a template, and to see its implementation. Templates are a powerful feature of the MediaWiki software. You should be an experienced wiki user if you wish to propose additions and modifications to existing templates. If implemented incorrectly, templates make it difficult to translate pages into other languages, so their use should be limited to text formatting, page transclusion should be avoided. See [MediaWiki Help:Templates](https://www.mediawiki.org/wiki/Help:Templates) to learn more.

### Plantillas sencillas

These templates accept a simple text parameter, and format it with a particular style.

| Template | Appearance | Description |
| --- | --- | --- |
| [Top](/Template:Top "Template:Top") | [Inicio](#top) | Use it to add a link to the top of the page. |
| [Emphasis](/Template:Emphasis "Template:Emphasis") | *emphasis* | Use it to emphasize a piece of text. |
| [KEY](/Template:KEY "Template:KEY") | Alt | Use it to indicate a keyboard key that needs to be pressed. |
| [ASCII](/Template:ASCII "Template:ASCII") |  | Use it to indicate a ascii key in a image (.svg) that needs to be pressed. You must give the character desired or the number of the code ascii of the character. |
| [Button](/Template:Button "Template:Button") | Cancel | Use it to indicate a button in the graphical user interface that needs to be pressed. |
| [RadioButton](/Template:RadioButton "Template:RadioButton") | Option | Use it to indicate a radio button in the graphical user interface that needs to be  Selected or  Not. |
| [CheckBox](/Template:CheckBox "Template:CheckBox") | Option | Use it to indicate a checkbox in the graphical user interface that needs to be  Checked or  Not. |
| [SpinBox](/Template:SpinBox "Template:SpinBox") | 1.50 | Use it to indicate a spinbox in the graphical user interface that needs to be modified. |
| [ComboBox](/Template:ComboBox "Template:ComboBox") | Menu 1 | Use it to indicate a combobox in the graphical user interface that needs to be modified. |
| [LineEdit](/Template:LineEdit "Template:LineEdit") | Metal Nickel (Ni) | Use it to indicate a LineEdit in the graphical user interface that needs to be modified. |
| [FALSE](/Template:FALSE "Template:FALSE"), [false](/Template:False "Template:False") | `false`, `false` | Use it to indicate a False Boolean value, for example, as a property in the [property editor](/Property_editor "Property editor"). This is a shortcut. Since it is a value, prefer Template [Value](/Template:Value "Template:Value") `false` |
| [TRUE](/Template:TRUE "Template:TRUE"), [true](/Template:True "Template:True") | `true`, `true` | Use it to indicate a True Boolean value, for example, as a property in the [property editor](/Property_editor "Property editor"). This is a shortcut. Since it is a value, prefer Template [Value](/Template:Value "Template:Value") `true` |
| [MenuCommand](/Template:MenuCommand "Template:MenuCommand") | **File → Save** | Use it to indicate the location of a command inside a particular menu. |
| [FileName](/Template:FileName "Template:FileName") | File name | Use it to indicate a name of a file or directory. |
| [SystemInput](/Template:SystemInput "Template:SystemInput") | Type this text | Use it to indicate user typed input text. |
| [SystemOutput](/Template:SystemOutput "Template:SystemOutput") | Output text | Use it to indicate text output from the system. |
| [Incode](/Template:Incode "Template:Incode") | `import FreeCAD` | Use it to include in-line source code with a monospace font. It should fit in one line. |
| [PropertyView](/Template:PropertyView "Template:PropertyView") | Vista**Color** | Use it to indicate a View property in the [property editor](/Property_editor "Property editor"). Examples of View properties include *Line Color*, *Line Width*, *Point Color*, *Point Size*, etc. |
| [PropertyData](/Template:PropertyData "Template:PropertyData") | Datos**Position** | Use it to indicate a Data property in the [property editor](/Property_editor "Property editor"). Data properties are different for different types of objects. |
| [Properties Title](/Template:Properties_Title "Template:Properties Title") / [TitleProperty](/Template:TitleProperty "Template:TitleProperty") | Base | Use it to indicate the title of a property group in the [property editor](/Property_editor "Property editor"). The title will not be included in the automatic table of contents. |
| [Obsolete](/Template:Obsolete "Template:Obsolete") | [obsolete in 0.19](/Release_notes_0.19 "Release notes 0.19") | Use it to indicate that a feature became obsolete in the specified FreeCAD version. |
| [VersionNoteObsolete](/Template:Obsolete "Template:Obsolete") | [obsolete in 0.19](/Release_notes_0.19 "Release notes 0.19") | Idem (superscript variant). |
| [Version](/Template:Version "Template:Version") | [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18") | Use it to indicate that a feature was introduces in the specified FreeCAD version. |
| [VersionNote](/Template:Version "Template:Version") | [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18") | Idem (superscript variant). |
| [VersionMinus](/Template:VersionMinus "Template:VersionMinus") | 0.16 and below | Use it to indicate that a feature is available in the specified FreeCAD version and earlier versions. |
| [VersionNoteMinus](/Template:VersionMinus "Template:VersionMinus") | 0.16 and below | Idem (superscript variant). |
| [VersionPlus](/Template:VersionPlus "Template:VersionPlus") | 0.17 and above | Use it to indicate that a feature is available in the specified FreeCAD version and later versions. |
| [VersionNotePlus](/Template:VersionPlus "Template:VersionPlus") | 0.17 and above | Idem (superscript variant). |
| [ColoredText](/Template:ColoredText "Template:ColoredText") | Colored Text | Use this template to color the background, text, or background and text. ([ColoredText](/Template:ColoredText "Template:ColoredText") page for more examples) |
| [ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") | Colored Paragraph | Use this template to color the background, text, or background and text of an entire paragraph. ([ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") page for more examples) |

### Plantillas complejas

These templates require more input parameters, or produce a block of text with a particular format.

| Template | Appearance | Description |
| --- | --- | --- |
| [Prettytable](/Template:Prettytable "Template:Prettytable") | This table | Use it to format tables such as this one. Additional table properties can be added. |
| [Caption](/Template:Caption "Template:Caption") | Some caption for an image | Use it to add an explanation below an image. It can be left aligned or center aligned. |
| [Clear](/Template:Clear "Template:Clear") |  | Use it to clear columns. Follow the definition of the template for a detailed explanation. It is often used to stop text from flowing next to unrelated images. |
| [Code](/Template:Code "Template:Code") | ``` import FreeCAD  ``` | Use it to include multi-line code examples with a monospace font. The default language is Python, but other languages can be specified. [Python](/Python "Python") code should adhere to the general recommendations established by [PEP8: Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/). In particular, parentheses should immediately follow the function name, and a space should follow a comma. This makes the code more readable. |
| [CodeDownload](/Template:CodeDownload "Template:CodeDownload") | [Some label](https://wiki.freecad.org/Main_Page) | Use it to create a link on a [macro](/Macros "Macros") page. |
| [Codeextralink](/Template:Codeextralink "Template:Codeextralink") | Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). *Link for optional manual installation: [Macro](https://wiki.freecad.org/Main_Page)*  ```   # This code is copied instead of the original macro code # to guide the user to the online download page. # Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki # or if the RAW code URL is somewhere else in the wiki.  from PySide import QtGui, QtCore  diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,     "Information",     "This macro must be downloaded from this link\n"     "\n"     "https://wiki.freecad.org/Main_Page" + "\n"     "\n"     "Quit this window to access the download page")  diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint) diag.setWindowModality(QtCore.Qt.ApplicationModal) diag.exec_()  import webbrowser  webbrowser.open("https://wiki.freecad.org/Main_Page")  ```  <class="rawcodeurl"><a href="<https://wiki.freecad.org/Main_Page>">raw code</a> | Use it if the code of a [macro](/Macros "Macros") is too large to be hosted on the Wiki. The code can then be hosted somewhere else, and the raw link to it specified with this template. The [Addon Manager](/Std_AddonMgr "Std AddonMgr") will use this link. |
| [Fake heading](/Template:Fake_heading "Template:Fake heading") | Heading | Use it to create a heading that will not be automatically included in the table of contents. |
| [GuiCommand](/Template:GuiCommand "Template:GuiCommand") | See [GuiCommand model](/GuiCommand_model "GuiCommand model") | Use it to create a box with useful information to document workbench commands (tools). |
| [TutorialInfo](/Template:TutorialInfo "Template:TutorialInfo") | See for example [Basic modeling tutorial](/Basic_modeling_tutorial "Basic modeling tutorial") | Use it to create a box with useful information to document [tutorials](/Tutorials "Tutorials"). |
| [Macro](/Template:Macro "Template:Macro") | See for example [Macro FlattenWire](/Macro_FlattenWire "Macro FlattenWire") | Use it to create a box with useful information to document [macros](/Macros "Macros"). |
| [Docnav](/Template:Docnav "Template:Docnav") |  | Use it to create a bar with arrows and appropriate links, which is useful for putting pages in a particular sequence. |
| [VeryImportantMessage](/Template:VeryImportantMessage "Template:VeryImportantMessage") | :::caution Important Message ::: | Use it to create a highlighted box with a very important message. Use sparingly, only to indicate major problems in the functionality of the software, discontinuation of tools, and similar. |
| [Page in progress](/Template:Page_in_progress "Template:Page in progress") | :::caution This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days. ::: | Use this for pages that are still in progress or that are currently being reworked. Don't forget to remove this when the page is ready. |
| [UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") | :::caution This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute. ::: | Use it to create a highlighted box indicating an unfinished documentation page. |
| [Softredirect](/Template:Softredirect "Template:Softredirect") |  | Use it instead of the normal redirect, when you are redirecting to a special page (such as Media: or Category:), in which cases the normal redirect is disabled. |
| [Quote](/Template:Quote "Template:Quote") | Cry "Havoc" and let slip the dogs of war.  —William Shakespeare, *Julius Caesar*, act III, scene I | Use it to create a box of text with a literal quote and reference. |
| [Userdocnavi](/Template:Userdocnavi "Template:Userdocnavi"), [Powerdocnavi](/Template:Powerdocnavi "Template:Powerdocnavi") |  | Use them to create navigation boxes for the user documentation, the power user documentation, and the developer documentation. This allows quickly jumping between different sections of the documentation. They also place the corresponding page in the proper category. |

## Gráficos

Images and screenshots are necessary to produce a complete documentation of FreeCAD. They are particularly useful to illustrate examples and tutorials. Images should be shown in their original size, so they present sufficient detail and are readable if they include text. [Bitmap](/Bitmap "Bitmap") images should not be resized.

Avoid animated pictures (GIF) in the general help pages. Animations and videos should be reserved for tutorials not intended to be used as offline PDF documentation.

Images can be uploaded through the [Special:Upload](/Special:Upload "Special:Upload") page.

### Nombre

Give meaningful names to your images. If you have an image that showcases the characteristics of a particular command, you should use the name of that command with `_example` at the end. For example for the command [Draft Offset](/Draft_Offset "Draft Offset") the image should be called `Draft_Offset_example.png`.

### Captura de pantalla

Recommended sizes for screen captures are:

* Native 400x200 (or width=400 and height<=200), for [command reference](/GuiCommand_model "GuiCommand model") pages, to allow the picture to fit in the left part of the page, and for other standard snapshots.
* Native 600x400 (or width=600 and height<=400), for [command reference](/GuiCommand_model "GuiCommand model") pages, when you really need a bigger picture, and still allow the picture to fit in the left part of the page, and for other standard snapshots.
* Native 1024x768 (or width=1024 and height<=768), only for full screen images.
* Smaller sizes are possible when showing details.
* Avoid images with larger resolutions, as they won't be very portable to other kinds of displays or the printed PDF documentation.

You shouldn't depend on a custom configuration of your desktop or operating system when you create screenshots and you should use the visual defaults of the FreeCAD interface whenever possible.

To create a screenshots you can use the options provided by your operating system, or one of these macros: ![](/images/Snip.png) [Macro Snip](/Macro_Snip "Macro Snip") and ![](/images/Macro_Screen_Wiki.png) [Macro Screen Wiki](/Macro_Screen_Wiki "Macro Screen Wiki").

### Texto

To ease documentation translations, try to avoid screenshots that contain texts. If you cannot avoid this, consider taking separate screenshots of the interface and the [3D view](/3D_view "3D view"). The image of the 3D view can be reused in every translation, while a translator can take a screenshot of the localized interface if necessary.

### Iconos y gráficos

Refer to the [Artwork](/Artwork "Artwork") page for all artwork and icons that have been created for FreeCAD, and which can also be used in documentation pages. If you would like to contribute icons, please read the [Artwork Guidelines](/Artwork_Guidelines "Artwork Guidelines").

## Traducciones

As per general consensus, the reference page in the wiki is the English page, which should be created first. If you want to change or add content to a page, you should do it to the English page first, and only once the update is completed, port the modification to the translated page.

The FreeCAD wiki supports a translation extension that allows managing translations between pages easier; for details, see [Localisation Translating the wiki](/Localisation#Translating_the_wiki "Localisation").

Other useful resources are:

* [ISO language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) to identify the two-letter code for a particular language that you want to translate to.
* [Google Translate](http://translate.google.com/) for help with translations.
* [Deepl translator](https://www.deepl.com/translator) for help with translations.

## Algunos consejos para los traductores

### Traducir GuiCommando

```
{{GuiCommand
|Name=FEM EquationFlux
|MenuLocation=Solve → Flux equation
|Workbenches=[[FEM_Workbench|FEM]]
|Shortcut={{KEY|F}} {{KEY|S}}
|Version=0.17
|SeeAlso=[[FEM_tutorial|FEM tutorial]]
}}

```

Translated:

```
{{GuiCommand/fr
|Name=FEM EquationFlux
|Name/fr=FEM Équation d'écoulement
|MenuLocation=Solveur → Équation de flux
|Workbenches=[[FEM_Workbench/fr|Atelier FEM]]
|Shortcut={{KEY|F}} {{KEY|S}}
|Version=0.17
|SeeAlso=[[FEM_tutorial/fr|FEM Tutoriel]]
}}

```

### Traducir navi

```
{{FEM_Tools_navi}}

```

Translated:

```
{{FEM_Tools_navi/fr}}

```

### Traducir enlace

```
[[Part_Workbench|Part Workbench]]

```

Translated:

```
[[Part_Workbench/fr|Atelier Part]]

```

### Traducir Docnav

```
{{Docnav
|[[About_FreeCAD|About FreeCAD]]
|[[Installing_on_Windows|Installing on Windows]]
}}

```

Translated:

```
{{Docnav/fr
|[[About_FreeCAD/fr|À propos de FreeCAD]]
|[[Installing_on_Windows/fr|Installation sous Windows]]
}}

```

Example with icons:

```
{{Docnav
|[[Std_Save|Save]]
|[[Std_SaveCopy|SaveCopy]]
|[[Std_File_Menu|Std File Menu]]
|IconL=Std_Save.svg
|IconR=Std_SaveCopy.svg
|IconC=Freecad.svg
}}

```

Translated:

```
{{Docnav/fr
|[[Std_Save/fr|Enregistrer]]
|[[Std_SaveCopy/fr|Enregistrer une copie]]
|[[Std_File_Menu/fr|Menu fichier]]
|IconL=Std_Save.svg
|IconR=Std_SaveCopy.svg
|IconC=Freecad.svg
}}

```

## Crear, renombrar y borrar páginas

### Create pages

Before creating a new page you should first check if a similar page already exists. If that is the case it is usually better to edit that existing page instead. When in doubt please open a topic in the [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21) first.

To create a new page do one of the following:

* Visit the URL with the desired page name, for example: `https://wiki.freecadweb.org/My_New_Page`, and click on 'create this page'.
* Do a wiki search for the page name, and click on the red text in 'Create the page "My New Page" on this wiki!'.

### Cambiar el nombre de las páginas

Since FreeCAD is a project under permanent development, it is sometimes necessary to revise the content of the wiki. If the names of commands are changed in the source code, the wiki pages documenting them have to be renamed as well. This can only be done by wiki administrators. To inform them, open a topic in the [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21) and list the necessary renaming operation in this form:

```
old name         new name
Old_page_name_1  New_page_name_1
Old_page_name_2  New_page_name_2
...

```

### Eliminar archivos y páginas

In case you need to delete a file, go to its page (`https://www.freecadweb.org/wiki/File:***.***`) and edit it. No matter if the page is blank or not, add this as the first element: `{{Delete}}` and directly below it describe why the page should be deleted. Additionally, open a topic in the [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21).

For pages the procedure is the same.

## Debate

The [Development/Wiki subforum](http://forum.freecadweb.org/viewforum.php?f=21) in the [FreeCAD forum](https://forum.freecadweb.org) provides a dedicated space for discussing wiki topics, the wiki appearance and anything else related to the wiki. Direct your questions and suggestions there.

## Terminología - política de nomenclatura

### Inglés

See [Glossary](/Glossary "Glossary").

### Otros idiomas

* [Italiano](/Italian_Translation "Italian Translation")
* [Français](/French_Translation "French Translation")
* [Deutsch](/German_Translation "German Translation")
* [Polish](/Polish_Translation "Polish Translation")
* [Spanish](/Spanish_Translation "Spanish Translation")
* [Japanese](/Japanese_Translation "Japanese Translation")

Retrieved from "<http://wiki.freecad.org/index.php?title=WikiPages/es&oldid=1540459>"