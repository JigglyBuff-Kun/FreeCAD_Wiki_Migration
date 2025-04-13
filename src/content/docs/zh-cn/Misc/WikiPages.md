---
title: WikiPages/zh-cn
---
本页面是 [帮助:编辑](/Help:Editing "Help:Editing") 的拓展，内容为编写和更新本文档的方针，也总结了一些讨论和头脑风暴的内容。

## 在开始之前

* 本WIKI基于 [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), 与 [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)所使用的软件相同. 如果你以前编写过 Wikipedia, 那么编写FreeCAD文档应该很容易。
* 于 Wikipedia 不同, FreeCAD wiki 出于防止破坏和滥用的原因而禁用了匿名编辑。你需要 [在这篇帖子里面](http://forum.freecadweb.org/viewtopic.php?f=21&t=6830) 申请账号。
* 如果你以前没用用过 WIKI 相关的软件, 请参照 [Help:Editing](/Help:Editing "Help:Editing") 来认识编写此 WIKI 所用到的标记语言。
* 关于WIKI软件的高级用法, 参见 [MediaWiki Help:Contents](https://www.mediawiki.org/wiki/Help:Contents). 并非所有的 Mediawiki 功能都可以在本 Wiki 中使用，但是大部分都可以。
* 我们希望保持此文档的易读性，所以请避免使用过于复杂的功能，让文档保持简洁。
* 使用沙盒测试你的编辑内容, 比如说, [FreeCADDocu:Sandbox](/FreeCADDocu:Sandbox "FreeCADDocu:Sandbox") 或者特定的带有你的用户名的页面 [Sandbox:Yourname](/index.php?title=Sandbox:Yourname&action=edit&redlink=1 "Sandbox:Yourname (page does not exist)")。沙盒页面应当放在沙盒分类下。 分类可以通过在文档末尾加入`[[Category:Sandbox]]` 实现。
* 请注意翻译标签。FreeCAD wiki 使用自动化翻译工具提供多语言版本的页面。所有页面都可能有多个语言版本存在。在许多页面源码里面你都可能会看到在 `<translate>...</translate>` 中类似 `<!--T:8-->`标签的内容. 这种被称为翻译单元的标记标签是由翻译系统自动创建的，所以你不应当手动创建这些内容。翻译标签链接着原文和翻译。所以你也不需要手动编辑这些内容，因为因为手动编辑可能会破坏已有的翻译链接。如果要移动段落或者内容，只要不修改标签，内容就不会发生改变。如果你要删除整个标题或者段落，那么也请同时删除属于那个部分的标签。请注意，对章节或者标题做出的修改时，其翻译也会随之变化；你的编辑内容应当值得去更新翻译。不用担心新内容的翻译标签，因为系统会在编辑后自动自动添加翻译标签。更多信息，参见 [Localisation](/Localisation "Localisation") 以及 [Mediawiki:Extension:Translate page](https://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example)。

## General guidelines

### Concise descriptions

When describing FreeCAD try to be concise and to the point and avoid repetition. Describe what FreeCAD *does*, not what FreeCAD *does not do*. Also avoid colloquial expressions such as 'a couple'. Use 'some' when dealing with an indeterminate number, or specify the correct quantity.

Bad description
:   [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"): the PartDesign Workbench is a workbench for part design that aims to provide tools for modelling complex solid parts.

Good description
:   [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"): aims to provide tools for modelling complex solid parts.

### Centralized information

Avoid duplicating the same information in different places. Insert the information in a new page, and link to this page from other pages that require this information.

Do not use transclusion of pages ([Help:Editing#Templates and transcluding pages](/Help:Editing#Templates_and_transcluding_pages "Help:Editing")), as this makes the wiki difficult to translate. Use only the templates described below in <#Templates>.

### Styling

Templates are used to style the help pages. They give the documentation a consistent look and feel. There is a template for menu commands, **File → Save**, a template to style keys to be pressed, Shift, to show a Boolean value, `true`, etc. Please get familiar with the <#Templates> section before writing help pages.

### Temporary flags

If you are working on a large page it is advisable to mark the page either as a work in progress or as unfinished. This assures that wiki admins don't mark your page as ready for translation while you are still changing it.

To flag a page add either `{{Page in progress}}` or `{{UnfinishedDocu}}` as the first line. With `{{UnfinishedDocu}}` you invite others to join you in finishing the page, while `{{Page in progress}}` indicates that you will do the work yourself and others should give you some time.

Once the work is done, please don't forget to remove the flags!

## Examples

To quickly get familiar with the structure and style of the FreeCAD wiki look at the model page: [GuiCommand model](/GuiCommand_model "GuiCommand model").

## Structure

The [User hub](/User_hub "User hub") provides a [Table of Contents](/Online_Help_Toc "Online Help Toc"). This is used as the main reference for automatically building the offline help you can reach from FreeCAD, as well as the offline PDF documentation.

The [Template:Docnav](/Template:Docnav "Template:Docnav") is used to sequentially link pages, following the structure of the [Table of Contents](/Online_Help_Toc "Online Help Toc"). See <#Templates> for a list of all templates.

### Page names

Page names should be short and they should use title case: every word should begin with a capital letter, unless they are articles, prepositions, conjunctions, or other grammatical particles (f.e. 'of', 'on', 'in', 'a', 'an', 'and').

Bad page name
:   Construction of AeroCompany airplanes

Good page name
:   Construction of AeroCompany Airplanes

The names of top level workbench pages must have this format: `XYZ Workbench`, where `XYZ` is the name of the workbench, for example [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). And the names of pages describing the commands (or tools) belonging to a workbench must have this format: `XYZ Command`, for example [PartDesign Pad](/PartDesign_Pad "PartDesign Pad"). Note that you should use the command name as it occurs in the source code.

### Headings

Paragraph headings should be short and use sentence case: all words except the first one and proper names, should be in lowercase. You should not use `H1` headings (`= Heading =`) in your wiki markup since the page title is automatically added as the main `H1` heading.

### Links

You should use the original link name for links whenever possible. This clarifies the referenced page in printed or offline documentation. Please avoid non-meaningful words for the link.

Bad link
:   For more information on drafting 2D objects click [here](/Draft_Workbench "Draft Workbench").

Good link
:   For more information on drafting 2D objects refer to the [Draft Workbench](/Draft_Workbench "Draft Workbench").

The preferred format for a link is:

`[[Name_of_Page|Name of Page]]`

Translated:

`[[Name_of_Page/fr|Nom de la Page]]`

Note that for the part before the `|` character, the actual link, case is relevant. If your page name is `Name_of_page` the link will fail if you type `Name_of_Page` (upper case P). Before the `|` character all spaces should be replaced by underscores (`_`). This is to assist translators using translation software, without the underscores the link would be translated by the software which is undesirable.

To link to a certain paragraph add a `#` sign and its headings to the page name. Example:

`[[WikiPages#Links|WikiPages]]`

Translated:

`[[WikiPages/fr#Liens|WikiPages]]`

Within the same page you can omit the page name. Example:

`[[#Links|Links]]`

To link to the top of the page you can use:

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

### Workbench pages

A top level workbench page should start with:

* A description of what the workbench is used for.
* An image to illustrate the description.

See [#Screen capture](#Screen_capture) for conventions on including images.

### Command pages

Command pages describing workbench tools should not be too long, they should only explain what a command can do and what it can't, and how to use it. You should keep pictures and examples to a minimum. Tutorials can expand on how to use the tool and provide step-by-step details.

Please refer to the [GuiCommand model](/GuiCommand_model "GuiCommand model") page for more details.

### Tutorials

A well written tutorial should teach how to achieve certain practical results quickly. It shouldn't be too long, but should include sufficient step-by-step instructions and images to guide the user. As FreeCAD evolves, tutorials may become obsolete, so it is important to mention the FreeCAD version used in, or required for, a tutorial.

For examples visit the [Tutorials](/Tutorials "Tutorials") page.

## Templates

Styling of the FreeCAD wiki pages is achieved through the use of templates ([Help:Editing#Templates\_and\_transcluding\_pages](/Help:Editing#Templates_and_transcluding_pages "Help:Editing")). They ensure a standardized look and feel across all pages, and also make it possible to re-style the wiki. You can see the complete list of defined templates by accessing [Special:PrefixIndex/Template:](/Special:PrefixIndex/Template: "Special:PrefixIndex/Template:"). But please only use the templates listed in the tables below. Only in very special cases should you use HTML tags directly.

Click on the template link to see the usage instructions for a template, and to see its implementation. Templates are a powerful feature of the MediaWiki software. You should be an experienced wiki user if you wish to propose additions and modifications to existing templates. If implemented incorrectly, templates make it difficult to translate pages into other languages, so their use should be limited to text formatting, page transclusion should be avoided. See [MediaWiki Help:Templates](https://www.mediawiki.org/wiki/Help:Templates) to learn more.

### Simple templates

These templates accept a simple text parameter, and format it with a particular style.

| Template | Appearance | Description |
| --- | --- | --- |
| [Top](/Template:Top "Template:Top") | [Top](#top) | Use it to add a link to the top of the page. |
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
| [PropertyView](/Template:PropertyView "Template:PropertyView") | 视图**Color** | Use it to indicate a View property in the [property editor](/Property_editor "Property editor"). Examples of View properties include *Line Color*, *Line Width*, *Point Color*, *Point Size*, etc. |
| [PropertyData](/Template:PropertyData "Template:PropertyData") | 数据**Position** | Use it to indicate a Data property in the [property editor](/Property_editor "Property editor"). Data properties are different for different types of objects. |
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

### Complex templates

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

## Graphics

Images and screenshots are necessary to produce a complete documentation of FreeCAD. They are particularly useful to illustrate examples and tutorials. Images should be shown in their original size, so they present sufficient detail and are readable if they include text. [Bitmap](/Bitmap "Bitmap") images should not be resized.

Avoid animated pictures (GIF) in the general help pages. Animations and videos should be reserved for tutorials not intended to be used as offline PDF documentation.

Images can be uploaded through the [Special:Upload](/Special:Upload "Special:Upload") page.

### Name

Give meaningful names to your images. If you have an image that showcases the characteristics of a particular command, you should use the name of that command with `_example` at the end. For example for the command [Draft Offset](/Draft_Offset "Draft Offset") the image should be called `Draft_Offset_example.png`.

### Screen capture

Recommended sizes for screen captures are:

* Native 400x200 (or width=400 and height<=200), for [command reference](/GuiCommand_model "GuiCommand model") pages, to allow the picture to fit in the left part of the page, and for other standard snapshots.
* Native 600x400 (or width=600 and height<=400), for [command reference](/GuiCommand_model "GuiCommand model") pages, when you really need a bigger picture, and still allow the picture to fit in the left part of the page, and for other standard snapshots.
* Native 1024x768 (or width=1024 and height<=768), only for full screen images.
* Smaller sizes are possible when showing details.
* Avoid images with larger resolutions, as they won't be very portable to other kinds of displays or the printed PDF documentation.

You shouldn't depend on a custom configuration of your desktop or operating system when you create screenshots and you should use the visual defaults of the FreeCAD interface whenever possible.

To create a screenshots you can use the options provided by your operating system, or one of these macros: ![](/images/Snip.png) [Macro Snip](/Macro_Snip "Macro Snip") and ![](/images/Macro_Screen_Wiki.png) [Macro Screen Wiki](/Macro_Screen_Wiki "Macro Screen Wiki").

### Text

To ease documentation translations, try to avoid screenshots that contain texts. If you cannot avoid this, consider taking separate screenshots of the interface and the [3D view](/3D_view "3D view"). The image of the 3D view can be reused in every translation, while a translator can take a screenshot of the localized interface if necessary.

### Icons and graphics

Refer to the [Artwork](/Artwork "Artwork") page for all artwork and icons that have been created for FreeCAD, and which can also be used in documentation pages. If you would like to contribute icons, please read the [Artwork Guidelines](/Artwork_Guidelines "Artwork Guidelines").

## Translations

As per general consensus, the reference page in the wiki is the English page, which should be created first. If you want to change or add content to a page, you should do it to the English page first, and only once the update is completed, port the modification to the translated page.

The FreeCAD wiki supports a translation extension that allows managing translations between pages easier; for details, see [Localisation Translating the wiki](/Localisation#Translating_the_wiki "Localisation").

Other useful resources are:

* [ISO language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) to identify the two-letter code for a particular language that you want to translate to.
* [Google Translate](http://translate.google.com/) for help with translations.
* [Deepl translator](https://www.deepl.com/translator) for help with translations.

## Some tips for translators

### Translate GuiCommand

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

### Translate navi

```
{{FEM_Tools_navi}}

```

Translated:

```
{{FEM_Tools_navi/fr}}

```

### Translate link

```
[[Part_Workbench|Part Workbench]]

```

Translated:

```
[[Part_Workbench/fr|Atelier Part]]

```

### Translate Docnav

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

## Create, rename and delete pages

### Create pages

Before creating a new page you should first check if a similar page already exists. If that is the case it is usually better to edit that existing page instead. When in doubt please open a topic in the [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21) first.

To create a new page do one of the following:

* Visit the URL with the desired page name, for example: `https://wiki.freecadweb.org/My_New_Page`, and click on 'create this page'.
* Do a wiki search for the page name, and click on the red text in 'Create the page "My New Page" on this wiki!'.

### Rename pages

Since FreeCAD is a project under permanent development, it is sometimes necessary to revise the content of the wiki. If the names of commands are changed in the source code, the wiki pages documenting them have to be renamed as well. This can only be done by wiki administrators. To inform them, open a topic in the [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21) and list the necessary renaming operation in this form:

```
old name         new name
Old_page_name_1  New_page_name_1
Old_page_name_2  New_page_name_2
...

```

### Delete files and pages

In case you need to delete a file, go to its page (`https://www.freecadweb.org/wiki/File:***.***`) and edit it. No matter if the page is blank or not, add this as the first element: `{{Delete}}` and directly below it describe why the page should be deleted. Additionally, open a topic in the [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21).

For pages the procedure is the same.

## Discussion

The [Development/Wiki subforum](http://forum.freecadweb.org/viewforum.php?f=21) in the [FreeCAD forum](https://forum.freecadweb.org) provides a dedicated space for discussing wiki topics, the wiki appearance and anything else related to the wiki. Direct your questions and suggestions there.

## Terminology - naming policy

### English

See [Glossary](/Glossary "Glossary").

### Other languages

* [Italiano](/Italian_Translation "Italian Translation")
* [Français](/French_Translation "French Translation")
* [Deutsch](/German_Translation "German Translation")
* [Polish](/Polish_Translation "Polish Translation")
* [Spanish](/Spanish_Translation "Spanish Translation")
* [Japanese](/Japanese_Translation "Japanese Translation")

Retrieved from "<http://wiki.freecad.org/index.php?title=WikiPages/zh-cn&oldid=1559454>"