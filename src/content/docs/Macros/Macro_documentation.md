---
title: documentation
---

## Description

All macros should be properly documented in the same way [Gui Commands](/Gui_Command "Gui Command") are documented.

They should have an individual wiki page, and should be listed in one of the categories in [Macros recipes](/Macros_recipes "Macros recipes").

The [Macros recipes](/Macros_recipes "Macros recipes") page has a good selection of macros created by experienced users, and many of them can be directly installed from the [Addon Manager](/Std_AddonMgr "Std AddonMgr").

See [GuiCommand model](/GuiCommand_model "GuiCommand model") and macro pages like [Macro Loft](/Macro_Loft "Macro Loft") and [Macro Site From Contours](/Macro_Site_From_Contours "Macro Site From Contours") to see how macros should be documented. At least two sections should be included, a _Description_ section with general usage information, and a _Script_ section to hold the actual macro code. Other sections may be included as needed to explain with more detail the usage of the macro.

If a macro provides a well defined functionality, and is well documented, it could be included eventually as part of a new or an existing [workbench](/Workbenches "Workbenches").

## New macro page

The original page must be written in English. After one of the administrators has marked it for translation, it can be translated into another language.

Create a new page for the macro starting with the word `Macro_` followed by the name of the macro, for example, `Macro_Excellent_Modification`. To link to the page use: `[[Macro_Excellent_Modification|Macro Excellent Modification]]`.

In the new page you should use [Template:Macro](/Template:Macro "Template:Macro") at the top, with a minimum of information:

```
{{Macro
|Name=Macro Excellent Modification
|Description=This macro does excellent things on existing shapes
|Author=your username
|Date=2018-11-30
}}

```

You can add a custom icon if it doesn't have the same name as the macro; you can also add other fields of information.

```
{{Macro
|Name=Macro Excellent Modification
|Icon=Macro_custom_icon.svg
|Description=This macro does excellent things on existing shapes
|Author=your username
|Date=2018-11-30
|Version=3.14516
|SeeAlso=[[Macro_Regular_Modification|Macro Regular Modification]]
}}

```

When translating the page, use a localized template. You need to specify the name with the two letter language code (`/fr`, `/it`, `/de`), and you need to indicate the icon explicitly

```
{{Macro/fr
|Name=Macro Excellent Modification translated
|Icon=Macro_Excellent_Modification.svg
|Description=(Translated description)
|Author=your username
|Date=2018-11-30
}}

```

or use the `Translate` field

```
{{Macro/fr
|Name=Macro Excellent Modification
|Translate=Macro Excellent Modification translated
|Description=(Translated description)
|Author=your username
|Date=2018-11-30
}}

```

- Use [Special:Upload](/Special:Upload "Special:Upload") to upload the custom icon in [SVG](/SVG "SVG") or PNG formats. It should have the same name as the macro.
- Otherwise it will default to `Icon=Text-x-python.svg` [![](https://upload.wikimedia.org/wikipedia/commons/8/82/Text-x-python.svg)](/File:Text-x-python.svg).
- For the macro used in the Python console by FreeCAD use `Icon=Text_console_python.png` ![](/images/Text_console_python.png).
- For the example video macro use this skeleton of the icon ![](/images/Text_Video_Movie.png) and fill the screen for obtain ex: ![](/images/Macro_crank_simul.png) and save the new icon with the same name of your macro.

[Template:Macro](/Template:Macro "Template:Macro") will put the information on using and installing the macros in every page.

![](/images/Macro_Recipes_MacroHowToInstall.png)

[How to install macros](/How_to_install_macros "How to install macros") and [customize toolbars](/Customize_Toolbars "Customize Toolbars") links in the infobox on each macro page

### Adding the macro documentation

- Just like a [Gui Command](/Gui_Command "Gui Command"), explain what the macro does, its inputs, outputs, options, and limitations, if any.
- Include a personalized icon in [SVG](/SVG "SVG") or PNG format for your macro so that other users can include it in a custom toolbar.
- Add one or more images to clarify the usage of your tool.
- If the macro performs a complex task, consider adding an animated GIF to showcase its capabilities. The GIF image should have a maximum size of 500 x 500 pixels; if the GIF is bigger, the animation may not work. Do not resize the GIF as the wiki will not play resized GIFs.
- Mention related macros and workbenches that complement the function of this tool.
- Mention the version of FreeCAD used to create the macro. This information can be gathered from **Help → About FreeCAD → Copy to clipboard**.

: When this information is pasted, it looks like this

```
OS: Ubuntu 18.04.1 LTS
Word size of OS: 64-bit
Word size of FreeCAD: 64-bit
Version: 0.18.15302 (Git)
Build type: Release
Branch: master
Hash: 2e03d2f298677b8212c22cbbc3cb20b7c80eabb5
Python version: 2.7.15rc1
Qt version: 4.8.7
Coin version: 4.0.0a
OCC version: 7.3.0
Locale: English/UnitedStates (en_US)

```

Consider adding this information in a comment block inside the code of the macro.

### Adding the macro code

Inside the _Script_ section, use [Template:MacroCode](/Template:MacroCode "Template:MacroCode") to place the code of the macro in the page. This will create a block of text that uses monospace font, which will preserve the whitespace that is essential for [Python](/Python "Python").

If the block of code contains the characters `{{ }}` (double closing brace and opening brace) or `|` (vertical bar), the `<nowiki> ... </nowiki>` tags can be added explicitly to allow displaying these special symbols.

This [Template:MacroCode](/Template:MacroCode "Template:MacroCode") essentially generates a block of HTML tags `<pre> ... </pre>`, so these can be used directly instead of using the template. The [Addon Manager](/Std_AddonMgr "Std AddonMgr") will search for the biggest such block and use it for the body of the macro.

```
{{MacroCode|code=

«Your code should be here»

}}

```

Or if it includes the vertical bar `|`.

```
{{MacroCode|code=
<nowiki>

«Your code should be here»

</nowiki>
}}

```

Or

```
<pre>

«Your code should be here»

</pre>

```

Add header information before your actual code.

```
__Title__="Title_Of_macro"
__Author__ = "User_Name"
__Version__ = "00.11"
__Date__    = "2015-07-25"
__Comment__ = "This is the comment of the macro"
__Web__ = "http://forum.freecadweb.org/viewtopic.php?f=3&t=7384"
__Wiki__ = "http://www.freecadweb.org/wiki/index.php?title=Macro_Title_Of_macro"
__Icon__  = "/usr/lib/freecad/Mod/plugins/icons/Title_Of_macro"
__IconW__  = "C:/Documents and Settings/YourUserName/Application Data/FreeCAD"
__Help__ = "start the macro and follow the instructions"
__Status__ = "stable"
__Requires__ = "freecad 0.14.3706"
__Communication__ = "http://www.freecadweb.org/wiki/index.php?title=User:User_Name"

«Your code should be here»

```

Starting with FreeCAD 0.17, this information is used by the [Addon Manager](/Std_AddonMgr "Std AddonMgr"), which downloads the macro from the [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros) repository.

### Adding macro code outside of the wiki

If your macro is too big that it exceeds 64 KB, it won't be able to be hosted on the wiki. In this case, use [Template:Codeextralink](/Template:Codeextralink "Template:Codeextralink") with a link to the raw web address of the code.

For example:

```
{{Codeextralink|https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro}}

```

It will be displayed as:

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro>">raw code</a>

This template must be placed at the beginning of the macro page, in the _Description_ section. It must be the first block of code in the page so that the [Addon Manager](/Std_AddonMgr "Std AddonMgr") ![](/images/Std_AddonMgr.svg) can automatically detect it and import it. See [Macro CirclePlus](/Macro_CirclePlus "Macro CirclePlus") for an example of the usage.

**PS:** In case upgrade in GitHub the path of the RAW code is modified not forgotten modify the link in the Codeextralink template.

## Adding the new macro to the wiki repository

Use [Template:MacroLink](/Template:MacroLink "Template:MacroLink") to include a line in the appropriate category in [Macros recipes](/Macros_recipes "Macros recipes"); create a new category if needed.

```
* {{MacroLink|Macro_Excellent_Modification|Macro Excellent Modification}}: the macro described in a short sentence.

```

- The first argument is the name of the macro page in the wiki.
- The second argument is the displayed text, which may be different from the page name. This will create a link to the first argument, showing the second argument as the text.
- A short description of the macro comes after the colon.

You can also use the optional parameter `Icon=` to specify the image file that will be placed at the start of the line. The icon should be an [SVG](/SVG "SVG") or a PNG file, and should have the same name as your macro. If this parameter is not given it will use the default icon for a [Python](/Python "Python") script [![](https://upload.wikimedia.org/wikipedia/commons/8/82/Text-x-python.svg)](/File:Text-x-python.svg).

```
* {{MacroLink|Icon=Macro_Excellent_Modification.svg|Macro_Excellent_Modification|Macro Excellent Modification}}: the macro described in a short sentence.

```

To localize this template, use the appropriate language link in the first argument.

```
* {{MacroLink|Macro_Excellent_Modification/fr|Macro Excellent Modification}}: (translated description)

```

## Adding the new macro to the central repository

To make a macro installable from the [Addon Manager](/Std_AddonMgr "Std AddonMgr") it should be included in the central [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros) repository.

In order to include the macro there, first it must be reviewed by the FreeCAD community in the [Python scripting and macros](https://forum.freecadweb.org/viewforum.php?f=22) subforum. Once this is done, the FreeCAD-macros repository should be forked, the new macro should be included in a branch, and then the branch should be pushed and merged into the upstream repository.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_documentation/en&oldid=1247231>"
