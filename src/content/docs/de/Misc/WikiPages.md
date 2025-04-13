---
title: WikiSeiten
---
Diese Seite ist eine Erweiterung der Seite [Hilfe:Editieren](/Help:Editing "Help:Editing") und gibt allgemeine Richtlinien für das Schreiben und Aktualisieren der FreeCAD-Wiki-Dokumentation. Sie ist eine Zusammenfassung einiger Diskussionen und Sitzungen zur Ideenfindung

## Vor dem Beginn

* Diese Wiki-Dokumentation basiert auf [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), derselben Software, die auch [Wikipedia](https://de.wikipedia.org/wiki/Wikipedia:Hauptseite) nutzt. Wenn du bereits Beiträge zu Wikipedia geleistet hast, sollte das Bearbeiten von FreeCAD-Wiki-Seiten einfach sein.
* Im Gegensatz zu Wikipedia ist das FreeCAD-Wiki schreibgeschützt, um Spam zu vermeiden. Du kannst [im Forum](http://forum.freecadweb.org/viewtopic.php?f=21&t=6830) beantragen, dass ein Konto für dich angelegt wird.
* Wenn du noch nie Wiki-Software verwendet hast, gehe zu [Hilfe:Bearbeitung](/Help:Editing "Help:Editing"), um dich mit dem Markup vertraut zu machen, das zur Bearbeitung von Seiten verwendet wird.
* Für fortgeschrittene Anwendung der Wiki-Software siehe [MediaWiki Hilfe:Übersicht](https://www.mediawiki.org/wiki/Help:Contents/de). Nicht alle Funktionen von MediaWiki sind in diesem FreeCAD-Wiki verfügbar, aber viele von ihnen sind es.
* Wir möchten, dass die Dokumentation einfach zu lesen ist, vermeide also die Verwendung komplexer Funktionen. Halte es einfach.
* Verwende einen Sandkasten, um deinen Code zu testen, z.B. [FreeCADDocu:Sandbox](/FreeCADDocu:Sandbox "FreeCADDocu:Sandbox") oder eine bestimmte Seite mit deinem Namen [Sandbox:DeinName](/Sandbox:DeinName "Sandbox:DeinName"). Sandkasten-Seiten müssen der Sandbox-Kategorie gelistet werden. Dies geschieht durch hinzufügen von `[[Category:Sandbox]]` am Ende des Wiki-Codes.
* Bitte beachte die Übersetzungen. Das FreeCAD-Wiki verwendet eine automatische Übersetzungsunterstützung, um Seiten in vielen Sprachen bereitzustellen. Jede Seite kann in mehreren Sprachversionen existieren. Auf vielen Seiten sieht man (Bereichs-) Markierungen wie `<translate>...</translate>` und viele einzelne Markierungen wie `<!--T:8-->`. Letztere kennzeichnen sogenannte Übersetzungseinheiten (translation units) und werden durch das Übersetzungssystem erstellt; sie sollten nie manuell erstellt werden. Sie verbinden die Überschriften und Absätze mit ihren übersetzten Versionen. Du solltest sie nicht ändern, denn das würde diese Verweise zerstören. Es ist aber in Ordnung, Absätze zu verschieben oder den Wortlaut zu ändern, solange die zugehörigen Kennzeichen beibehalten werden. Wenn du eine Überschrift oder einen Absatz löschst, solltest du auch die zugehörigen Kennzeichen löschen. Bitte sei dir bewusst, dass sich das Ändern von existierenden Überschriften und Absätze auch auf bestehende Übersetzungen auswirkt. Das gilt nicht beim Hinzufügen von neuem Material, weil das System nach deinen Änderungen automatisch neue Kennzeichen hinzufügt. Mehr Informationen findest du unter [Lokalisierung](/Localisation/de "Localisation/de") und den Original-Seiten [Mediawiki:Extension:Translate page](https://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example).

## Allgemeine Richtlinien

### Präzise Beschreibungen

Bei der Beschreibung von FreeCAD sollte man präzise formulieren, auf den Punkt kommen und Wiederholungen vermeiden. Beschreibe, was FreeCAD *macht*, nicht was FreeCAD *nicht macht*. Umgangssprachliche Ausdrücken wie "ein paar" sollten vermieden werden; besser ist es, dass man "mehrere" verwendet, wenn es sich um eine unbestimmte Anzahl handelt, oder dass man die korrekte Menge angibt.

Schlechte Beschreibung
:   Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"): Der PartDesign-Arbeitsbereich ist ein Arbeitsbereich zur Teilekonstruktion, der darauf abzielt, Werkzeuge für die Modellierung komplexer Festkörperkörperteile bereitzustellen.

Gute Beschreibung
:   Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"): Zielt darauf ab, Werkzeuge für die Modellierung komplexer Festkörperteile bereitzustellen.

### Zentralisierte Informationen

Vermeide es, die gleichen Informationen an verschiedenen Orten zu duplizieren. Füge die Informationen in eine neue Seite ein und verweise von anderen Seiten, die diese Informationen benötigen, auf diese Seite.

Verwende keine [Transklusion](https://de.wikipedia.org/wiki/Transklusion) von (ganzen) Seiten ([Templates\_and\_transcluding\_pages](/Help:Editing#Templates_and_transcluding_pages "Help:Editing"), Vorlagen und Transklusion von Seiten, leider nur engl.), da dies die Übersetzung des Wikis erschwert. Verwende nur die unten unter [Vorlagen](#Vorlagen) beschriebenen Vorlagen (Templates).

### Gestaltung

Für die Gestaltung der Hilfeseiten werden Vorlagen (Templates) eingesetzt.
Sie sorgen für ein einheitliches Aussehen der Dokumentation und eine einheitliche Benutzerführung. Es gibt eine Vorlage für Menübefehle, wie **Datei → Speichern**, eine Vorlage zum Darstellen von zu drückenden Tasten, wie Shift, eine zum Anzeigen eines booleschen Wertes `true` usw. Bitte mache dich vor dem Schreiben von Hilfeseiten mit dem Abschnitt [Vorlagen](#Vorlagen) vertraut.

### Temporäre Hinweise

Wird an einer großen Seite gearbeitet, empfiehlt es sich, die Seite entweder als *in Arbeit* oder als *unfertig* zu kennzeichnen. Dadurch wird sichergestellt, dass die Wiki-Administratoren die Seite nicht als *fertig zur Übersetzung* markieren, während sie noch häufig geändert wird.

Um eine Seite zu kennzeichnen, kann entweder `{{Page in progress}}` (Seite in Bearbeitung) oder `{{UnfinishedDocu}}` (unfertige Dokumentation) als erste Zeile eingefügt werden. Mit `{{UnfinishedDocu}}` werden andere eingeladen, die Seite mit dir zusammen fertigzustellen, während `{{Page in progress}}` anzeigt, dass du die Arbeit selbst erledigen wirst und andere dir etwas Zeit geben sollen.

Wenn die Arbeit erledigt ist, vergiss bitte nicht, die Hinweise zu entfernen!

## Beispiele

Um dich schnell mit der Struktur und dem Stil des FreeCAD-Wikis vertraut zu machen, schaue dir die Modell-Seite an: [GuiBefehl Modell](/GuiCommand_model/de "GuiCommand model/de").

## Struktur

Das [Anwenderzentrum](/User_hub/de "User hub/de") enthält ein [Inhaltsverzeichnis](/Online_Help_Toc/de "Online Help Toc/de"). Dies wird als Hauptreferenz für die automatische Erstellung der Offline-Hilfe, die du von FreeCAD aus erreichen kannst, sowie der Offline-PDF-Dokumentation verwendet.

Die Vorlage [Template:Docnav](/Template:Docnav "Template:Docnav") dient dem sequentiellen Verknüpfen von Seiten, entsprechend der Struktur des der [Inhaltsverzeichnisses](/Online_Help_Toc/de "Online Help Toc/de"). Siehe Tabelle [Vorlagen](#Vorlagen) für eine Liste aller Vorlagen.

### Seitennamen

Seitennamen sollten kurz sein, und sie sollten "Title Case" verwenden: Jedes Wort sollte mit einem Großbuchstaben beginnen, es sei denn, es handelt sich um Artikel (articles), Verhältniswörter (prepositions), Bindewörter (conjunctions) oder Partikel (grammatical particles), wie z.B. "of", "on", "in", "a", "an", "and".

Schlechter Seitenname
:   Construction of AeroCompany airplanes

Guter Seitenname
:   Construction of AeroCompany Airplanes

Die Namen der Seiten für die obersten Ebene der Arbeitsbereiche muss das Format `XYZ Workbench` haben, wobei `XYZ` der Name des Arbeitsbereichs ist, zum Beispiel [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") (Übersetzt: Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")). Und die Namen der Seiten, die die Befehle (oder Werkzeuge) beschreiben, die zu einem Arbeitsbereich gehören, müssen dieses Format haben: `XYZ Command`, zum Beispiel [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") (Übersetzt: [PartDesign Block](/PartDesign_Pad/de "PartDesign Pad/de")). Dabei ist zu beachten, dass der Befehlsname so, wie er im Quellcode vorkommt, geschrieben wird.

### Überschriften

Absatzüberschriften sollten kurz sein und "Sentence Case" verwenden: Alle Wörter, außer dem ersten und Namen (proper names), sollten kleingeschrieben werden. Es sollten keine `H1`-Überschriften (`= Überschrift =`) als Wiki-Textauszeichnung verwendet werden, da der Seitentitel automatisch als Hauptüberschrift `H1` hinzugefügt wird.

### Verweise

Nach Möglichkeit sollte für einen Verweis der Name des ursprünglichen Verweises verwendet werden, um die referenzierte Seite in der gedruckten oder der netzunabhängigen Dokumentation deutlich hervorzuheben. Die Verwendung von nicht aussagekräftigen Wörtern für den Verweis sollte vermieden werden..

Schlechter Verweis
:   Für weitere Informationen zum Zeichnen von 2D-Objekten klicke [hier](/Draft_Workbench/de "Draft Workbench/de").

Guter Verweis
:   Weitere Informationen zum Zeichnen von 2D-Objekten finden sich im Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de").

Das bevorzugte Format für einen Verweis ist:

`[[Name_of_Page|Name of Page]]`

Übersetzt:

`[[Name_of_Page/de|Name der Seite]]`

Dabei ist zu beachten, dass der Teil vor dem `|`-Zeichen, der eigentliche Verweis ist, für den Groß- und Kleinschreibung relevant sind. Lautet der Seitenname `Name_of_page`, wird der Verweis fehlschlagen, wenn `Name_of_Page` (Großbuchstabe P) eingegeben wird. Vor dem Zeichen `|` sollten alle Leerzeichen durch Unterstriche (`_`) ersetzt werden. Dies dient der Unterstützung von Übersetzern, die eine Übersetzungssoftware verwenden. Ohne die Unterstriche würde der Verweis von der Software übersetzt werden, was nicht erwünscht ist.

Um zu einem bestimmten Abschnitt zu verweisen, wird ein `#`-Zeichen und die zugehörige Überschrift zum Seitennamen hinzugefügt. Beispiel:

`[[WikiPages#Links|WikiPages]]`

Übersetzt:

`[[WikiPages/de#Verweise|WikiSeiten]]`

Innerhalb derselben Seite kannst der Seitenname weggelassen werden. Beispiel:

`[[#Verweise|Verweise]]`

Um einen Verweis zum Anfang der Seite zu erstellen, lässt sich Folgendes verwenden:

`</translate>{{Top}}<translate>`

Diese Vorlage sollte, abhängig von der Sprache der Seite, automatisch den richtigen Text anzeigen. Ein Verweis zum Seitenanfang ist besonders nützlich für lange Seiten, da er dem Benutzer erlaubt, schnell zum Inhaltsverzeichnis zurückzuspringen. Er kann an das Ende eines jeden Absatzes gesetzt werden. Es ist zu beachten, dass sich vor und nach der Vorlage eine Leerzeile befindet.

Bildverweis
:   [![Optionaler Text, der beim Schweben über dem Bild angezeigt wird](/images/Draft_Wire.svg)](/Draft_Wire "Optionaler Text, der beim Schweben über dem Bild angezeigt wird ")

Um ein Bild als Verweis zu benutzen:

`[[Image:Draft_Wire.svg|24px|Optionaler Text, der beim Schweben über dem Bild angezeigt wird|link=Draft_Wire]]`

Bildverweis + Textverweis
:   ![](/images/Draft_Wire.svg) [Linienzug](/Draft_Wire/de "Draft Wire/de")

Wird der optionale Text weggelassen, wird der Verweis selbst beim Schweben über dem Bild angezeigt; dies ist vorzuziehen. Es sollte auch ein Textverweis nach dem Bildverweis hinzugefügt werden:

`[[Image:Draft_Wire.svg|24px|link=Draft_Wire]] [[Draft_Wire/de|Linienzug]]`

### Seiten der Arbeitsbereiche

Die oberste Seite eines Arbeitsbereichs sollte beginnen mit

* einer Beschreibung wofür der Arbeitsbereich eingesetzt wird.
* einer Abbildung, die die Beschreibung bildlich darstellt.

Siehe [Bildschirmaufnahme](#Bildschirmaufnahme) für Wissenswertes zum Einfügen von Bildern.

### Befehlsseiten

Die Befehlsseiten, die die Werkzeuge eines Arbeitsbereichs beschreiben, sollten nicht zu lang sein, sie sollten nur erklären, was ein Befehl tun kann und was nicht, und wie er eingesetzt wird. Bilder und Beispiele sollten auf ein Minimum reduziert bleiben; Anleitungen können weitere Einzelheiten zur Anwendung des Werkzeugs sowie detaillierte Schritt-für-Schritt-Beschreibungen liefern.

Auf der Seite [GuiGUIBefehl Modell](/GuiCommand_model/de "GuiCommand model/de") finden sich weitere Einzelheiten.

### Anleitungen

Eine gut geschriebene Anleitung (Tutorial) sollte den Benutzer lehren, bestimmte praktische Ergebnisse schnell zu erreichen.
Sie sollte nicht zu lang sein, aber sie sollte eine ausreichende Anzahl von Schritt-für-Schritt-Beschreibungen und Bildern enthalten, die dem Benutzer die Verwendung der verschiedenen Werkzeuge erklären.

Beispiele findet man auf der Seite [Tutorien](/Tutorials/de "Tutorials/de") (Anleitungen).

## Vorlagen

Das Gestalten der FreeCAD-Wiki-Seiten wird durch die Verwendung von Vorlagen (Templates) erreicht (Siehe [Help:Editing#Templates\_and\_transcluding\_pages](/Help:Editing#Templates_and_transcluding_pages "Help:Editing"), leider nur auf Englisch). Sie sorgen für ein einheitliches Erscheinungsbild aller Seiten und ermöglichen auch, das Wiki neu zu gestalten. Die komplette Liste der definierten Vorlagen findet man unter [Special:PrefixIndex/Template:](/Special:PrefixIndex/Template: "Special:PrefixIndex/Template:") (Alle Seiten (mit Präfix)). Aber bitte nur die in den Tabellen unten aufgeführten Vorlagen einsetzen. Nur in ganz besonderen Fällen sollten die HTML-Kennzeichen direkt verwendet werden.

Auf den Verweis zur Vorlage klicken, um die Gebrauchsanleitung für eine Vorlage anzusehen und zu sehen, wie sie aufgebaut ist. Vorlagen sind eine leistungsstarke Funktion der MediaWiki-Software; Du solltest ein erfahrener Wiki-Benutzer sein, wenn du Ergänzungen und Änderungen an bestehenden Vorlagen vorschlagen möchtest. Wenn Vorlagen falsch aufgebaut sind, erschweren sie die Übersetzung von Seiten in andere Sprachen; daher sollte ihr Einsatz auf Textformatierung beschränkt werden und die Transklusion von Seiten sollte vermieden werden. Siehe [MediaWiki Hilfe:Templates (Vorlagen)](https://www.mediawiki.org/wiki/Help:Templates/de)

### Einfache Vorlagen

Diese Vorlagen akzeptieren einen einfachen Textparameter und formatieren ihn in einem bestimmten Stil.

| Vorlage | Erscheinungsbild | Beschreibung |
| --- | --- | --- |
| [Top](/Template:Top "Template:Top") | [Anfang](#top) | Wird eingesetzt, um einen Verweis zum Anfang der Seite hinzuzufügen. |
| [Emphasis](/Template:Emphasis "Template:Emphasis") | *Hervorhebung* | Wird verwendet, um ein Textabschnitt hervorzuheben. |
| [KEY](/Template:KEY "Template:KEY") | Alt | Wird eingesetzt, um eine Taste anzugeben, die gedrückt werden soll. |
| [ASCII](/Template:ASCII "Template:ASCII") |  | Wird eingesetzt, um eine ASCII-Taste in einem Bild (.svg) anzugeben, die gedrückt werden soll. Das gewünschte Zeichen oder die Nummer des ASCII-Codes des Zeichens muss angegeben werden. |
| [Button](/Template:Button "Template:Button") | Abbrechen | Wird eingesetzt, um eine Schaltfläche der grafischen Benutzeroberfläche darzustellen, die gedrückt werden soll. |
| [RadioButton](/Template:RadioButton "Template:RadioButton") | Option | Wird eingesetzt, um einen Auswahlknopf der grafischen Benutzeroberfläche darzustellen, der  Aktiviert oder  Deaktiviert werden soll. |
| [CheckBox](/Template:CheckBox "Template:CheckBox") | Option | Wird eingesetzt, um ein Kontrollkästchen der grafischen Benutzeroberfläche darzustellen, das Aktiviert oder  Deaktiviert werden soll. |
| [SpinBox](/Template:SpinBox "Template:SpinBox") | 1.50 | Wird eingesetzt, um eine Spinbox der grafischen Benutzeroberfläche darzustellen, die geändert werden soll. |
| [ComboBox](/Template:ComboBox "Template:ComboBox") | Menu 1 | Wird eingesetzt, um eine ComboBox der grafischen Benutzeroberfläche darzustellen, die geändert werden soll. |
| [LineEdit](/Template:LineEdit "Template:LineEdit") | Metal Nickel (Ni) | Wird eingesetzt, um ein Texteingabefeld (LineEdit-Widget) der grafischen Benutzerschnittstelle darzustellen, das eine Eingabe erfordert. |
| [FALSE](/Template:FALSE "Template:FALSE"), [false](/Template:False "Template:False") | `false`, `false` | Wird eingesetzt, um den booleschen Wert falsch darzustellen, z.B. als Eigenschaft im [Eigenschafteneditor](/Property_editor/de "Property editor/de"). Dies ist eine Abkürzung. Da es sich um einen Wert handelt, sollte die Vorlage [Value](/Template:Value "Template:Value") `false` bevorzugt werden. |
| [TRUE](/Template:TRUE "Template:TRUE"), [true](/Template:True "Template:True") | `true`, `true` | Wird eingesetzt, um den booleschen Wert wahr darzustellen, z.B. als Eigenschaft im [Eigenschafteneditor](/Property_editor/de "Property editor/de"). Dies ist eine Abkürzung. Da es sich um einen Wert handelt, sollte die Vorlage [Value](/Template:Value "Template:Value") `true` bevorzugt werden. |
| [MenuCommand](/Template:MenuCommand "Template:MenuCommand") | **Datei → Speichern** | Wird eingesetzt, um die Lage eines Befehls innerhalb eines bestimmten Menüs anzugeben. |
| [FileName](/Template:FileName "Template:FileName") | Dateiname | Wird eingesetzt, um den Namen einer Datei oder eines Verzeichnisses anzugeben. |
| [SystemInput](/Template:SystemInput "Template:SystemInput") | Gib diesen Text ein | Wird eingesetzt, um einen vom Benutzer einzugebenden Text darzustellen. |
| [SystemOutput](/Template:SystemOutput "Template:SystemOutput") | Ausgabetext | Wird eingesetzt, um eine Textausgabe des Systems darzustellen. |
| [Incode](/Template:Incode "Template:Incode") | `import FreeCAD` | Wird eingesetzt, um Inline-Quellcode mit einer Monospace-Schriftart einzubinden. Er sollte in eine Zeile passen. |
| [PropertyView](/Template:PropertyView "Template:PropertyView") [PropertyView/de](/Template:PropertyView/de "Template:PropertyView/de") | Ansicht**Farbe** Ansicht-Eigenschaft**Farbe** | Wird eingesetzt, um eine Ansicht-Eigenschaft im [Eigenschafteneditor](/Property_editor/de "Property editor/de") darzustellen. Ansicht-Eigenschaften sind z.B. *Linienfarbe*, *Linienbreite*, *Punktfarbe*, *Punktgröße*, usw. |
| [PropertyData](/Template:PropertyData "Template:PropertyData") [PropertyData/de](/Template:PropertyData/de "Template:PropertyData/de") | Daten**Position** Daten-Eigenschaft**Position** | Wird eingesetzt, um eine Daten-Eigenschaft im [Eigenschafteneditor](/Property_editor/de "Property editor/de") darzustellen. Daten-Eigenschaften sind für verschiedene Objekttypen unterschiedlich. |
| [Properties Title](/Template:Properties_Title "Template:Properties Title") / [TitleProperty](/Template:TitleProperty "Template:TitleProperty") | Basis | Wird eingesetzt, um die Benennung einer Eigenschaftengruppe im [Eigenschafteneditor](/Property_editor/de "Property editor/de") darzustellen. Die Benennung wird nicht in das automatische Inhaltsverzeichnis aufgenommen. |
| [Obsolete](/Template:Obsolete "Template:Obsolete") | [veraltet seit 0.19](/Release_notes_0.19/de "Release notes 0.19/de") | Wird eingesetzt, um darzustellen, dass eine bestimmte Funktion ab einer bestimmten FreeCAD-Version veraltet ist. |
| [VersionNoteObsolete](/Template:Obsolete/de "Template:Obsolete/de") | [veraltet seit 0.19](/Release_notes_0.19/de "Release notes 0.19/de") | Wie vorher (hochgestellte Variante). |
| [Version/de](/Template:Version/de "Template:Version/de") | [eingeführt in 0.18](/Release_notes_0.18/de "Release notes 0.18/de") | Wird eingesetzt, um darzustellen, dass eine Funktion mit einer bestimmten FreeCAD-Version eingeführt wurde. |
| [VersionNote](/Template:VersionNote/de "Template:VersionNote/de") | [eingeführt in 0.18](/Release_notes_0.18/de "Release notes 0.18/de") | Wie vorher (hochgestellte Variante). |
| [VersionMinus](/Template:VersionMinus "Template:VersionMinus") | 0.16 und davor | Wird eingesetzt, um darzustellen, dass eine Funktion bis zu einer bestimmten FreeCAD-Version zur Verfügung stand. |
| [VersionNoteMinus](/Template:VersionNoteMinus/de "Template:VersionNoteMinus/de") | 0.16 und davor | Wie vorher (hochgestellte Variante). |
| [VersionPlus](/Template:VersionPlus "Template:VersionPlus") | 0.17 und neuer | Wird eingesetzt, um darzustellen, dass eine Funktion seit einer bestimmten FreeCAD Version zur Verfügung steht. |
| [VersionNotePlus](/Template:VersionNotePlus/de "Template:VersionNotePlus/de") | 0.17 und neuer | Wie vorher (hochgestellte Variante). |
| [ColoredText](/Template:ColoredText "Template:ColoredText") | Farbiger Text | Diese Vorlage wird eingesetzt, um den Hintergrund, den Text oder Hintergrund und Text einzufärben. (Die Seite [FarbigerText](/Template:ColoredText "Template:ColoredText") enthält weitere Beispiele) |
| [ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") | Farbiger Absatz | Diese Vorlage wird eingesetzt, um den Hintergrund, den Text oder Hintergrund und Text eines ganzen Absatzes einzufärben. (Die Seite [ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") enthält weitere Beispiele) |

### Komplexe Vorlagen

Diese Vorlagen erfordern mehr Eingabeparameter oder erzeugen einen Textblock mit einem bestimmten Format.

| Vorlage | Erscheinungsbild | Beschreibung |
| --- | --- | --- |
| [Prettytable](/Template:Prettytable "Template:Prettytable") | Diese Tabelle | Wird eingesetzt, um Tabellen wie diese zu formatieren. Es können zusätzliche Tabelleneigenschaften hinzugefügt werden. |
| [Caption](/Template:Caption "Template:Caption") | Erläuterung zu einer Abbildung | Wird eingesetzt, um eine Bildunterschriift hinzuzufügen. Sie kann linksbündig oder mittig ausgerichtet sein. |
| [Clear](/Template:Clear "Template:Clear") |  | Wird eingesetzt, um Spalten zu löschen. Die Definition der Vorlage enthält einen Verweis zu einer detaillierten Erklärung. Die Vorlage wird oft verwendet, um zu verhindern, dass ein Text Bilder umfließt, die in keinem Zusammenhang mit dem Text stehen. |
| [Code](/Template:Code "Template:Code") | ``` {{{1}}}  ``` | Wird eingesetzt, um mehrzeilige Code-Beispiele mit einer Monospace-Schriftart einzubinden. Die Standardsprache ist Python, es können aber auch andere Sprachen angegeben werden. [Python](/Python/de "Python/de")-Code sollte sich an die allgemeinen Empfehlungen halten, die im [PEP8: Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) (Stil-Leitfaden für Python-Code) aufgestellt wurden. Insbesondere sollten Klammern unmittelbar auf den Funktionsnamen folgen, und auf ein Komma sollte ein Leerzeichen folgen. Dies macht den Code besser lesbar. |
| [CodeDownload](/Template:CodeDownload "Template:CodeDownload") | [Eine Benennung](https://wiki.freecad.org/Main_Page) | Wird eingesetzt, um eine Verknüpfung zu einer [Makro](/Macros/de "Macros/de")-Seite zu erstellen. |
| [Codeextralink](/Template:Codeextralink "Template:Codeextralink") | Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). *Link for optional manual installation: [Macro](https://wiki.freecad.org/Main_Page)*  ```   # This code is copied instead of the original macro code # to guide the user to the online download page. # Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki # or if the RAW code URL is somewhere else in the wiki.  from PySide import QtGui, QtCore  diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,     "Information",     "This macro must be downloaded from this link\n"     "\n"     "https://wiki.freecad.org/Main_Page" + "\n"     "\n"     "Quit this window to access the download page")  diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint) diag.setWindowModality(QtCore.Qt.ApplicationModal) diag.exec_()  import webbrowser  webbrowser.open("https://wiki.freecad.org/Main_Page")  ```  <class="rawcodeurl"><a href="<https://wiki.freecad.org/Main_Page>">raw code</a> | Wird eingesetzt, wenn der Code eines [Makros](/Macros/de "Macros/de") zu umfangreich ist, um im Wiki bereitgestellt zu werden. Der Code kann dann woanders bereitgestellt werden und der nackte Verweis dorthin wird in dieser Vorlage angegeben. Der [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") verwendet diesen Verweis. |
| [Unechte Überschrift](/Template:Fake_heading "Template:Fake heading") | Heading | Wird eingesetzt, um eine Überschrift zu erstellen, die nicht automatisch in das für die Offline-Dokumentation verwendete Inhaltsverzeichnis aufgenommen wird. |
| [GuiCommand](/Template:GuiCommand "Template:GuiCommand") | Siehe [Gui-Befehl](/Gui_Command/de "Gui Command/de") und [GuiBefehl Modell](/GuiCommand_model/de "GuiCommand model/de") | Wird eingesetzt, um einen Kasten mit nützlichen Informationen für die Dokumentation von Befehlen (Werkzeugen) eines Arbeitsbereichs zu erstellen. |
| [TutorialInfo](/Template:TutorialInfo "Template:TutorialInfo") | Siehe als Beispiel [Basic modeling tutorial](/Basic_modeling_tutorial "Basic modeling tutorial") | Wird eingesetzt, um einen Kasten mit nützlichen Informationen für die Dokumentation von [Anleitungen](/Tutorials/de "Tutorials/de") zu erstellen. |
| [Macro](/Template:Macro "Template:Macro") | Siehe Beispiel [Makro FlattenWire](/Macro_FlattenWire/de "Macro FlattenWire/de") | Wird eingesetzt, um eine Box mit nützlichen Informationen für die Dokumentation von [Makros](/Macros/de "Macros/de") zu erstellen. |
| [Docnav](/Template:Docnav "Template:Docnav") |  | Wird eingesetzt, um eine Leiste mit Pfeilen und den entsprechenden Verweisen zu erstellen, was nützlich ist, um Seiten in eine bestimmte Reihenfolge zu bringen. |
| [VeryImportantMessage](/Template:VeryImportantMessage "Template:VeryImportantMessage") | :::caution Important Message ::: | Wird eingesetzt, um einen hervorgehobenen Kasten mit einer sehr wichtigen Nachricht zu erstellen. Die Vorlage solltes sparsam eingesetzt werden und nur um auf größere Probleme in der Funktionalität der Software, Abkündigungen von Werkzeugen und Ähnliches hinzuweisen. |
| [Page in progress](/Template:Page_in_progress "Template:Page in progress") | :::caution This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days. ::: | Wird eingesetzt auf Seiten, die noch in Arbeit sind oder gerade überarbeitet werden. Vergiss nicht, dies zu entfernen, wenn die Seite fertig ist. |
| [UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") | :::caution This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute. ::: | Wird eingesetzt, um ein hervorgehobenes Feld zu erstellen, das eine unfertige Dokumentationsseite anzeigt. |
| [Softredirect](/Template:Softredirect "Template:Softredirect") |  | Wird anstelle der normalen Umleitung (Redirect) eingesetzt, wenn auf eine spezielle Seite (z.B. Media: oder Category:) umgeleitet wird; in solchen Fällen ist die normale Umleitung deaktiviert. |
| [Quote](/Template:Quote "Template:Quote") | Rufe "Verwüstung" und lass die Hunde des Krieges los.  —William Shakespeare, *Julius Cäsar*, Akt III, Szene I | Wird eingesetzt, um einen Textkasten mit einem wörtlichen Zitat und einer Referenz zu erstellen. |
| [Userdocnavi](/Template:Userdocnavi "Template:Userdocnavi"), [Powerdocnavi](/Template:Powerdocnavi "Template:Powerdocnavi") |  | Werden eingesetzt, um Navigationsboxen für die jeweilige Dokumentation für Benutzer, erfahrene Nutzer und Entwickler zu erstellen. Dies ermöglicht ein schnelles Springen zwischen verschiedenen Abschnitten der Dokumentation. Außerdem ordnen sie die entsprechende Seite der richtigen Kategorie zu. |

## Grafiken

Abbildungen und Bildschirmaufnahmen sind wichtig, um eine vollständige Dokumentation von FreeCAD zu erstellen. Sie sind besonders nützlich, um Beispiele und Anleitungen zu illustrieren. Abbildungen sollten in ihrer Originalgröße angezeigt werden, damit sie genügend Details zeigen und lesbar sind, wenn sie Text enthalten. [Bitmap](/Bitmap/de "Bitmap/de")-Bilder sollten nicht in der Größe verändert werden.

Animierte Bilder (GIF) sollten in den allgemeinen Hilfeseiten vermieden werden. Animationen und Videos sollten Anleitungen vorbehalten bleiben, die nicht als Offline-PDF-Dokumentation verwendet werden sollen.

Abbildungen können über die Seite [Special:Upload](/Special:Upload "Special:Upload") hochgeladen werden.

### Namen

Abbildungen sollten einen aussagekräftigen Namen erhalten. Stellt das Bild Merkmale eines bestimmten Befehls dar, sollte der originale, englische Name des Befehls mit angehängtem `_example` verwendet werden.

* Für den Befehl [Draft Offset](/Draft_Offset "Draft Offset") sollte das Bild also `Draft_Offset_example.png` heißen.

### Bildschirmaufnahme

Empfohlene Größen für Bildschirmaufnahmen sind:

* Normale 400x200 (oder Breite = 400 und Höhe <= 200), für [GUI-Befehl](/Gui_Command/de "Gui Command/de")-Seiten, damit das Bild in den linken Teil der Seite passt, und für andere Standard-Schnappschüsse.
* Normale 600x400 (oder Breite = 600 und Höhe <= 400), für [GUI-Befehl](/Gui_Command/de "Gui Command/de")-Seiten, wenn wirklich ein größeres Bild benötigt wird und das Bild trotzdem in den linken Teil der Seite passen soll, und für andere Standard-Schnappschüsse.
* Normale 1024x768 (oder Breite=1024 und Höhe<=768), nur für Aufnahmen des kompletten Bildschirms.
* Für Darstellungen von Details sind kleinere Größen möglich.
* Abbildungen mit größeren Auflösungen sollten vermieden werden, da sie sich schlecht auf andere Arten der Darstellung oder in gedruckte PDF-Dokumentation übertragen lassen.

Es sollten von Desktop- oder Betriebssystemkonfiguration unabhängige Einstellungen für Bildschirmaufnahmen verwendet werden, wenn möglich, die visuellen Voreinstellungen der FreeCAD-Oberfläche.

Um eine Bildschirmaufnahme zu erstellen, können vom Betriebssystem bereitgestellte Werkzeuge verwendet werden oder eines dieser Makros: ![](/images/Snip.png) [Makro Snip](/Macro_Snip/de "Macro Snip/de") und ![](/images/Macro_Screen_Wiki.png) [Makro Bildschirm Wiki](/Macro_Screen_Wiki/de "Macro Screen Wiki/de").

### Text

Um die Übersetzung der Dokumentation zu erleichtern, solllten Bildschirmaufnahmen, die Text enthalten, vermieden werden. Ist dies nicht möglich, sollte man sich überlegen, separate Bilder von Benutzeroberfläche und [3D-Ansicht](/3D_view "3D view") zu machen. Das Bild der 3D-Ansicht kann in allen Übersetzungen weiterverwendet werden, während ein Übersetzer bei Bedarf eine Bildschirmaufnahme der lokalisierten Benutzeroberfläche machen kann.

### Symbole und Grafiken

Von der Seite [Grafik](/Artwork/de "Artwork/de") ausgehend findet man alle Illustrationen und Symbole, die für FreeCAD erstellt wurden, die auch in den Dokumentationsseiten eingesetzt werden können.
Wenn du Symbole beitragen möchtest, lies bitte die [Illustrationsrichtlinien](/Artwork_Guidelines/de "Artwork Guidelines/de").

## Übersetzungen

Gemäß der allgemeinen Übereinkunft ist die englische Seite die Referenzseite im Wiki und muß zuerst erstellt werden. Soll der Inhalt einer Seite geändert werden oder etwas hinzugefügt werden, muß dies zuerst auf der englischen Seite erfolgen und kann, sobald die Aktualisierung abgeschlossen ist, auf die übersetzte Seite übertragen werden.

Das FreeCAD-Wiki unterstützt eine Übersetzungserweiterung, die es ermöglicht, Übersetzungen zwischen Seiten einfacher zu verwalten; Für Einzelheiten siehe [FreeCAD-Wiki übersetzen](/Localisation/de#Übersetze_das_FreeCAD_Wiki "Localisation/de").

Weitere nützliche Quellen sind:

* [ISO language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes): Zusammenstellung der ISO-Sprachcodes mit zwei Buchstaben, um die zu übersetzende Sprache zu benennen/identifizieren.
* [Google Translate](http://translate.google.com/): zur Unterstützung beim Übersetzen.
* [Deepl translator](https://www.deepl.com/translator): zur Unterstützung beim Übersetzen.

## Einige Hinweise für Übersetzer

### GUI-Befehl übersetzen

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

Übersetzt:

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

### Navi übersetzen

```
{{FEM_Tools_navi}}

```

Übersetzt:

```
{{FEM_Tools_navi/fr}}

```

### Verweis übersetzen

```
[[Part_Workbench|Part Workbench]]

```

Übersetzt:

```
[[Part_Workbench/fr|Atelier Part]]

```

### Docnav übersetzen

```
{{Docnav
|[[About_FreeCAD|About FreeCAD]]
|[[Installing_on_Windows|Installing on Windows]]
}}

```

Übersetzt:

```
{{Docnav/fr
|[[About_FreeCAD/fr|À propos de FreeCAD]]
|[[Installing_on_Windows/fr|Installation sous Windows]]
}}

```

Beispiel mit Symbolen:

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

Übersetzt:

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

## Seiten erstellen, umbenennen und löschen

### Seiten erstellen

Vor dem Erstellen einer neuen Seiten sollte überprüft werden, ob bereits eine ähnliche Seite existiert. Sollte das der Fall sein, ist es meist besser, die vorhandene Seite zu ändern. Im Zweifel bitte zuerst ein neues Thema im [Wiki-Forum](https://forum.freecadweb.org/viewforum.php?f=21) öffnen.

Um eine neue Seite zu erstellen, hat man folgende Möglichkeiten:

* Die URL mit dem gewünschten Seitennamen aufrufen, z.B.: `https://wiki.freecadweb.org/Meine_Neue_Seite/de`, und auf 'Erstellen' klicken.
* Eine Wiki-Suche nach dem Seitennamen durchführen und auf den roten Text in 'Erstelle die Seite "Meine Neue Seite" in diesem Wiki.' klicken.

### Seiten umbenennen

Da FreeCAD ein Projekt ist, das ständig weiterentwickelt wird, ist es manchmal notwendig, den Inhalt des Wikis zu überarbeiten. Wenn die Namen von Befehlen im Quellcode geändert werden, müssen die Wiki-Seiten, die sie dokumentieren, ebenfalls umbenannt werden. Dies kann nur von den Wiki-Administratoren durchgeführt werden. Um diese zu informieren, eröffne ein Thema im [Wiki-Forum](https://forum.freecadweb.org/viewforum.php?f=21) und liste den notwendigen Umbenennungsvorgang in diesem Formular auf:

```
old name         new name
Old_page_name_1  New_page_name_1
Old_page_name_2  New_page_name_2
...

```

### Dateien und Seiten löschen

Soll eine Datei gelöscht werden, wechselt man auf ihre Seite (`https://www.freecadweb.org/wiki/File:***.***`) und bearbeitet sie. Unabhängig davon, ob die Seite leer ist oder nicht, wird `{{Delete}}` als erstes Element der Seite eingefügt und unmittelbar darunter beschrieben, warum die Seite gelöscht werden soll. Zusätzlich wird ein Thema im [Wiki-Forum](https://forum.freecadweb.org/viewforum.php?f=21) eröffnet.

Für Seiten ist das Verfahren dasselbe.

## Diskussion

Das Unterforum [Development/Wiki](http://forum.freecadweb.org/viewforum.php?f=21) im [FreeCAD-Forum](https://forum.freecadweb.org) bietet einen speziellen Raum für die Diskussion von Wiki-Themen, des Wiki-Erscheinungsbildes und alles andere im Zusammenhang mit dem Wiki. Dort kann man Fragen stellen und Vorschläge anbringen.

## Terminologie - Benennungspolitik

### Englisch

Siehe [Glossar](/Glossary "Glossary")

### Andere Sprachen

* [Italienisch](/Italian_Translation "Italian Translation")
* [Französisch](/French_Translation "French Translation")
* [Deutsch](/German_Translation "German Translation")
* [Polnisch](/Polish_Translation "Polish Translation")
* [Spanisch](/Spanish_Translation "Spanish Translation")
* [Japanisch](/Japanese_Translation "Japanese Translation")

Retrieved from "<http://wiki.freecad.org/index.php?title=WikiPages/de&oldid=1541058>"