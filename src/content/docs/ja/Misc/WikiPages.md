---
title: Wikiページ
---
このページでは、FreeCAD wikiドキュメンテーションを記述・更新する際の共通のガイドラインを示します。これは、[Help:Editing](/Help:Editing "Help:Editing")を補足するもので、複数の議論やブレインストーミングの結果の要約したものです。

## 始める前に

* FreeCAD wikiドキュメンテーションは、[Wikipedia](https://en.wikipedia.org/wiki/Main_Page)と同じソフトウェアである[MediaWiki](https://www.mediawiki.org/wiki/MediaWiki)を使っています。もしWikipediaに貢献したことがあれば、FreeCAD wikiの編集は簡単に感じるはずです。
* Wikipediaとは異なり、FreeCAD wikiはスパム防止のために書き込みを制限しています。編集するためには、[フォーラム](http://forum.freecadweb.org/viewtopic.php?f=21&t=6830)でアカウントの申請をする必要があります。
* もしwikiソフトウェアを使ったことがないのであれば、[Help:Editing](/Help:Editing "Help:Editing")を読んで、使用されているマークアップに慣れておいてください。
* Wikiソフトウェアの高度な使い方は、[MediaWiki Help:Contents](https://www.mediawiki.org/wiki/Help:Contents)を参照してください。MediaWikiのすべての機能がFreeCAD wikiで有効になっているわけではありませんが、多くは有効です。
* ドキュメンテーションを読みやすいように維持するために、複雑な機能は使わないでください。簡潔さを維持してください（Keep it simple）。
* あなたのコードを試すためにサンドボックスを使ってください。例えば[FreeCADDocu:Sandbox](/FreeCADDocu:Sandbox "FreeCADDocu:Sandbox")やあなたの名前を付けた[Sandbox:Yourname](/index.php?title=Sandbox:Yourname&action=edit&redlink=1 "Sandbox:Yourname (page does not exist)")を使えます。サンドボックスページは、wikiコードの末尾に`[[Category:Sandbox]]`を記述することで、サンドボックスのカテゴリーに置く必要があります。
* 翻訳について留意してください。FreeCAD wikiは、複数の言語でページを用意するための、自動化された翻訳支援機能を使っています。すべてのページごと、複数言語版を用意することができます。多くのページで、`<translate>...</translate>`タグや`<!--T:8-->`のようなタグが使われているのを見ることがあると思います。後者は翻訳単位と呼ばれ、翻訳支援システムによって作成されます。手動では作らないでください。これよって、見出しとパラグラフを翻訳版にリンクすることができます。翻訳版へのリンクを破壊してしまうので、これらのタグは変更しないでください。ただし、タグを一緒にするのであれば、パラグラフの表現を変更したり位置を移動することは問題ありません。もし見出しやパラグラフを削除する場合は、それに属するタグも一緒に削除しなければなりません。既存の見出しやパラグラフの変更は、翻訳にも影響することに留意してください。編集は意味のあるものでなければなりません。システムはあなたの編集の後で自動的にタグを追加するので、新しい見出しやパラグラフを追加するのは問題ありません。さらなる詳細は、[ローカライゼーション](/Localisation/ja "Localisation/ja")およびMediaWikiの[Mediawiki:Extension:Translate page](https://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example)を参照してください。

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

## 構造

[ユーザー向けハブ](/User_hub/ja "User hub/ja")には[目次](/Online_Help_Toc/ja "Online Help Toc/ja")があります。目次は、FreeCADからアクセスできるオフラインのヘルプ、およびオフィラインPDFドキュメントのために、自動的に作成されます。

[目次](/Online_Help_Toc "Online Help Toc")に従ってページを適切な順序でリンクするために、[Template:Docnav](/Template:Docnav "Template:Docnav")テンプレートを使っています。すべてのテンプレートについては、<#Templates>を参照してください。

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
| [PropertyView](/Template:PropertyView "Template:PropertyView") | ビュー**Color** | Use it to indicate a View property in the [property editor](/Property_editor "Property editor"). Examples of View properties include *Line Color*, *Line Width*, *Point Color*, *Point Size*, etc. |
| [PropertyData](/Template:PropertyData "Template:PropertyData") | データ**Position** | Use it to indicate a Data property in the [property editor](/Property_editor "Property editor"). Data properties are different for different types of objects. |
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

## 翻訳

前提として、wikiの基準となるページは英語であり、英語のページを最初に作成しなければなりません。もしページの内容を変更したり追加したい場合、最初に英語のページを編集し、更新が完了した後に、変更点を翻訳ページに反映させてください。

FreeCAD wikiは、ページ間の翻訳管理を容易にするための翻訳拡張機能をサポートしています。詳細は[wikiのローカライゼーションと翻訳](/Localisation#Translating_the_wiki "Localisation")を参照してください。

その他の有用な情報：

* [ISO言語コード](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) から翻訳を作成したい言語の2文字のコードを確認できます。
* [Google翻訳](http://translate.google.com/)は翻訳の手助けなります。
* [Deepl translator](https://www.deepl.com/translator)も翻訳の手助けになります。

## 翻訳者へのヒント

### GUIコマンドの翻訳方法

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

翻訳したもの：

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

### naviの翻訳方法

```
{{FEM_Tools_navi}}

```

翻訳したもの：

```
{{FEM_Tools_navi/fr}}

```

### リンクの翻訳方法

```
[[Part_Workbench|Part Workbench]]

```

翻訳したもの：

```
[[Part_Workbench/fr|Atelier Part]]

```

### Docnavの翻訳方法

```
{{Docnav
|[[About_FreeCAD|About FreeCAD]]
|[[Installing_on_Windows|Installing on Windows]]
}}

```

翻訳したもの：

```
{{Docnav/fr
|[[About_FreeCAD/fr|À propos de FreeCAD]]
|[[Installing_on_Windows/fr|Installation sous Windows]]
}}

```

アイコンがある場合の例：

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

翻訳したもの：

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

### 他の言語

* [イタリア語](/Italian_Translation "Italian Translation")
* [フランス語](/French_Translation "French Translation")
* [ドイツ語](/German_Translation "German Translation")
* [ポーランド語](/Polish_Translation "Polish Translation")
* [スペイン語](/Spanish_Translation "Spanish Translation")
* [日本語](/Japanese_Translation "Japanese Translation")

Retrieved from "<http://wiki.freecad.org/index.php?title=WikiPages/ja&oldid=1544146>"