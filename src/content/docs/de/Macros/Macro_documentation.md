---
title: Makrodokumentation
---

## Beschreibung

Alle Makros sollten ordentlich dokumentiert werden, und zwar auf die gleiche Weise wie [GUI-Befehle](/Gui_Command/de "Gui Command/de") dokumentiert werden.

```
Sie sollten eine eigene Wiki-Seite haben und in einer der Kategorien unter Makro-Rezepte aufgeführt sein.

```

Die Seite [Makro Rezepte](/index.php?title=Macros_ecipes/de&action=edit&redlink=1 "Macros ecipes/de (page does not exist)") enthält eine gute Auswahl von Makros, die von erfahrenen Benutzern erstellt wurden, und viele von ihnen können direkt mit dem [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden.

Siehe [GuiBefehl Modell](/GuiCommand_model/de "GuiCommand model/de") und Makroseiten wie [Makro Ausformung](/Macro_Loft/de "Macro Loft/de") und [Makro Bereich aus Konturen](/Macro_Site_From_Contours/de "Macro Site From Contours/de"), um zu sehen, wie Makros dokumentiert werden sollten. Es sollten mindestens zwei Abschnitte enthalten sein, ein Abschnitt _Beschreibung_ (Description) mit allgemeinen Informationen zur Verwendung und ein Abschnitt _Skript_, der den eigentlichen Makrocode enthält. Bei Bedarf können weitere Abschnitte hinzugefügt werden, um die Verwendung des Makros näher zu erläutern.

Wenn ein Makro eine gut definierte Funktionalität bietet und gut dokumentiert ist, könnte es schließlich als Teil einer neuen oder eines bestehenden [Arbeitsbereichs](/Workbenches/de "Workbenches/de") aufgenommen werden.

## Neue Makroseite

Die Originalseite muss in Englisch geschrieben sein. Nachdem ein Administrator sie zur Übersetzung markiert hat, kann sie in andere Sprachen übersetzt werden.

Erstelle eine neue Seite für das Makro, die mit dem Wort `Macro_` beginnt, gefolgt von dem Namen des Makros, zum Beispiel `Macro_Excellent_Modification`. Um die Seite zu verknüpfen, verwendet man: `[[Macro_Excellent_Modification/de|Makro Excellent Modification]]`.

Auf der neuen Seite solltest du oben [Template:Macro](/Template:Macro "Template:Macro") verwenden, mit einem Minimum an Informationen:

```
{{Macro
|Name=Macro Excellent Modification
|Description=This macro does excellent things on existing shapes
|Author=your username
|Date=2018-11-30
}}

```

Du kannst ein benutzerdefiniertes Symbol hinzufügen, wenn es nicht den gleichen Namen wie das Makro hat; du kannst auch andere Informationsfelder hinzufügen.

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

Wenn die Seite übersetzt wird, verwende eine lokalisierte Vorlage. Du musst den Namen mit dem aus zwei Buchstaben bestehenden Sprachcode angeben (`/fr`, `/it`, `/de`), und du musst das Symbol explizit angeben

```
{{Macro/fr
|Name=Macro Excellent Modification translated
|Icon=Macro_Excellent_Modification.svg
|Description=(Translated description)
|Author=your username
|Date=2018-11-30
}}

```

oder verwende das `Translate` Feld

```
{{Macro/fr
|Name=Macro Excellent Modification
|Translate=Macro Excellent Modification translated
|Description=(Translated description)
|Author=your username
|Date=2018-11-30
}}

```

- Verwende [Special:Upload](/Special:Upload "Special:Upload"), um das benutzerdefinierte Symbol in den [SVG](/SVG/de "SVG/de") oder PNG Formaten hochzuladen. Es sollte den gleichen Namen wie das Makro haben.
- Andernfalls wird es standardmäßig auf `Icon=Text-x-python.svg` [![](https://upload.wikimedia.org/wikipedia/commons/8/82/Text-x-python.svg)](/File:Text-x-python.svg) gesetzt.
- Für das von FreeCAD in der Python Konsole verwendete Makro verwende `Icon=Text_console_python.png` ![](/images/Text_console_python.png).
- Für das Beispielvideomakro verwende dieses Skelett des Symbols ![](/images/Text_Video_Movie.png) und fülle den Bildschirm aus, um z.B. folgendes zu erhalten: ![](/images/Macro_crank_simul.png) und speichern Sie neue Symbol mit dem gleichen Namen desein Makros.

[Template:Macro](/Template:Macro "Template:Macro") wird die Informationen zur Verwendung und Installation der Makros in jede Seite einfügen.

![](/images/Macro_Recipes_MacroHowToInstall.png)

Die Verweise [Wie Makros installiert werden](/How_to_install_macros/de "How to install macros/de") und [Werkzeugleisten anpassen](/Customize_Toolbars/de "Customize Toolbars/de") in der Infobox auf jeder Makroseite

### Hinzufügen der Makrodokumentation

- Wie bei einem [Gui Befehl](/Gui_Command/de "Gui Command/de"), erkläre was das Makro tut, seine Eingänge, Ausgänge, Optionen und Begrenzungen, falls vorhanden.
- Füge ein personalisiertes Symbol im Format [SVG](/SVG/de "SVG/de") oder PNG für dein Makro ein, damit andere Benutzer es in eine benutzerdefinierte Werkzeugleiste einfügen können.
- Füge ein oder mehrere Bilder hinzu, um die Verwendung deines Werkzeugs zu verdeutlichen.
- Wenn das Makro eine komplexe Aufgabe erfüllt, solltest du in Erwägung ziehen, ein animiertes GIF hinzuzufügen, um seine Fähigkeiten zu demonstrieren. Das GIF Bild sollte eine maximale Größe von 500 x 500 Pixel haben; wenn das GIF größer ist, funktioniert die Animation möglicherweise nicht. Ändere die Größe des GIFs nicht, da das Wiki GIFs mit geänderter Größe nicht abspielen wird.
- Erwähne verwandte Makros und Arbeitsbereiche, die die Funktion dieses Werkzeugs ergänzen.
- Erwähne die Version von FreeCAD, die zur Erstellung des Makros verwendet wurde. Diese Informationen können unter **Hilfe→ Über FreeCAD → In Zwischenablage kopieren** entnommen werden.

: Wenn diese Informationen eingefügt werden, sieht es folgendermaßen aus

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

Ziehe in Betracht, diese Informationen in einem Kommentarblock innerhalb des Codes des Makros hinzuzufügen.

### Hinzufügen des Makrocodes

Innerhalb des _Skript_ Abschnitts verwende [Template:MacroCode](/Template:MacroCode "Template:MacroCode"), um den Code des Makros in der Seite zu platzieren. Dadurch wird ein Textblock erstellt, der die Monospace Schriftart verwendet, wodurch der für [Python](/Python/de "Python/de") wichtige Weißraum erhalten bleibt.

Wenn der Codeblock die Zeichen `{{ }}` (doppelte schließende und öffnende Klammer) oder `|` (senkrechter Balken) enthält, können die `<nowiki> ... </nowiki>` Markierungen explizit hinzugefügt werden, um die Anzeige dieser speziellen Symbole zu ermöglichen.

Dieser[Template:MacroCode](/Template:MacroCode "Template:MacroCode") erzeugt im Wesentlichen einen Block von HTML Markierungen `<pre> ... </pre>`, so dass diese direkt anstelle der Vorlagen verwendet werden können. Der [Erweiterungsverwalter](/Std_AddonMgr/de "Std AddonMgr/de") sucht nach dem größten solcher Blöcke und verwendet ihn für den Körper des Makros.

```
{{MacroCode|code=

«Your code should be here»

}}

```

Oder wenn es den vertikalen Balken einschließt `|`.

```
{{MacroCode|code=
<nowiki>

«Your code should be here»

</nowiki>
}}

```

Oder

```
<pre>

«Your code should be here»

</pre>

```

Füge Kopfzeileninformationen vor deinem eigentlichen Code hinzu.

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

Beginnend mit FreeCAD 0.17 werden diese Informationen vom [Erweiterungsverwalter](/Std_AddonMgr/de "Std AddonMgr/de") verwendet, der das Makro aus dem [FreeCAD-Makros](https://github.com/FreeCAD/FreeCAD-macros) Repositorium herunterlädt.

### Hinzufügen von Makrocode außerhalb des Wikis

Wenn dein Makro zu groß ist, so dass es 64 KB überschreitet, kann es nicht im Wiki bereitgestellt werden. In diesem Fall verwende [Template:Codeextralink](/Template:Codeextralink "Template:Codeextralink") mit einem Verweis auf die raw Web Adresse des Codes.

Zum Beispiel:

```
{{Codeextralink|https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro}}

```

Es wird angezeigt als:

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

Diese Vorlage muss am Anfang der Makroseite im Abschnitt _Beschreibung_ platziert werden. Es muss der erste Codeblock in der Seite sein, damit der ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") sie automatisch erkennen und importieren kann. Siehe [Makro CirclePlus](/index.php?title=Macro_CirclePlus/de&action=edit&redlink=1 "Macro CirclePlus/de (page does not exist)") für ein Anwendungsbeispiel.

**PS:** Im Falle einer Aktualisierung in GitHub wird der Pfad des RAW Codes geändert, nicht vergessen, den Verweis in der Codeextralink Vorlage zu ändern.

## Hinzufügen des neuen Makros zum Wiki Repositorium

Verwende [Template:MacroLink](/Template:MacroLink "Template:MacroLink") , um eine Zeile in die entsprechende Kategorie in [Makro-Rezepte](/Macros_recipes/de "Macros recipes/de") einzuschließen; erstelle bei Bedarf eine neue Kategorie.

```
* {{MacroLink|Macro_Excellent_Modification|Macro Excellent Modification}}: the macro described in a short sentence.

```

- Das erste Argument ist der Name der Makroseite im Wiki.
- Das zweite Argument ist der angezeigte Text, der sich vom Seitennamen unterscheiden kann. Dadurch wird ein Verweis auf das erste Argument erstellt, der das zweite Argument als Text anzeigt.
- Nach dem Doppelpunkt folgt eine kurze Beschreibung des Makros.

Du kannst auch den optionalen Parameter `Icon=` verwenden, um die Bilddatei anzugeben, die am Anfang der Zeile platziert wird. Das Symbol sollte eine [SVG](/SVG/de "SVG/de") oder eine PNG Datei sein und den gleichen Namen wie dein Makro haben. Wenn dieser Parameter nicht angegeben wird, wird das Standardsymbol für ein [Python](/Python/de "Python/de") Skript [![](https://upload.wikimedia.org/wikipedia/commons/8/82/Text-x-python.svg)](/File:Text-x-python.svg) verwendet.

```
* {{MacroLink|Icon=Macro_Excellent_Modification.svg|Macro_Excellent_Modification|Macro Excellent Modification}}: the macro described in a short sentence.

```

Um diese Vorlage zu lokalisieren, verwende den entsprechenden Sprachverweis im ersten Argument.

```
* {{MacroLink|Macro_Excellent_Modification/fr|Macro Excellent Modification}}: (translated description)

```

## Hinzufügen des neuen Makros zum zentralen Repositorium

Um ein Makro aus dem [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installierbar zu machen, sollte es in das zentrale [FreeCAD-Makros](https://github.com/FreeCAD/FreeCAD-macros) -Repositorium aufgenommen werden.

Um das Makro dort aufzunehmen, muss es zunächst von der FreeCAD Gemeinschaft im [Python scripting and macros](https://forum.freecadweb.org/viewforum.php?f=22) Unterforum überprüft werden. Sobald dies geschehen ist, sollte das FreeCAD-Makro Repositorium abgezweigt werden, das neue Makro sollte in einen Zweig aufgenommen werden, und dann sollte der Zweig gepusht und in das Upstream- Repositorium zusammengeführt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_documentation/de&oldid=1256568>"
