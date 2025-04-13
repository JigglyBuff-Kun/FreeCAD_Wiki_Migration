---
title: Skizzen-Beschränkungen aus Kalkulationstabellen
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Generisches Makro-Symbol Erstellen Sie Ihr persönliches Symbol mit demselben Namen des Makros](/File:Text-x-python.png "Generisches Makro-Symbol Erstellen Sie Ihr persönliches Symbol mit demselben Namen des Makros") Skizzen-Beschränkungen aus Kalkulationstabellen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Makro, das mit einem einfachen Klick in die Zelle einer Kalkulationstabelle eine Längen-Beschränkung zu einer Linie, einem Kreis, oder zwischen zwei Punkten, mit einem Alias oder einer Adresse (bspw. C2) hinzufügt. Änderungen an der Kalkulationstabelle ändern die Beschränkung. Das Makro erzeugt die Alias. Wähle eine Linie, zwei Punkte oder eine Beschränkung, klicke auf eine Tabellenzelle und führe das Makro aus. Es können Linien, Punkte am Ende der Line, Punkte, Kreise oder Bögen von Kreisen ausgewählt werden. Versionsmakro : 02.02 Datum der letzten Änderung : 2025-03-30 FreeCAD version : Alle Herunterladen : [ToolBar icon](https://wiki.freecad.org/images/d/dc/Macro_Sketch_Constraint_From_Spreadsheet.svg) Autor: 2cv001 |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [2cv001](/index.php?title=User:2cv001&action=edit&redlink=1 "User:2cv001 (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [ToolBar icon](https://wiki.freecad.org/images/d/dc/Macro_Sketch_Constraint_From_Spreadsheet.svg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 02.02                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2025-03-30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Alle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Beschreibung

**Kontaktiere mich bei Problemen im FreeCAD-Forum.**

Makro, das mit einem einfachen Klick in die Zelle einer Kalkulationstabelle eine Längen-Beschränkung zu einer Linie, einem Kreis, oder zwischen zwei Punkten, mit einem Alias oder einer Adresse (bspw. C2) hinzufügt. Änderungen an der Kalkulationstabelle ändern die Beschränkung. Das Makro erzeugt die Alias.

Wähle eine Linie, zwei Punkte oder eine Beschränkung, klicke auf eine Tabellenzelle und führe das Makro aus. Es können Linien, Punkte am Ende der Line, Punkte, Kreise oder Bögen von Kreisen ausgewählt werden.

![](/src/assets/images/SketchConstraintFromSpreadsheet1.gif)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro)_

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
    "https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro>">raw code</a>

## Anwendung

### Automatische Objekt-Erzeugung

Wenn das Makro ausgeführt wird bevor eine Kalkulationstabelle, ein Körper oder eine Skizze erstellt wurde, schlägt das Makro vor eine zu erstellen. Anschließend wird die Skizze im Bearbeitungsmodus und die Kalkulationstabelle geöffnet, so dass sie ausgefüllt werden kann.

![](/src/assets/images/SketchConstraintFromSpreadsheet7.gif)

### Automatische Alias-Erzeugung

Es ist nicht verpflichtend, aber besser, Alias in der Kalkulationstabelle zu nutzen. Das Makro kann Alias aus Texten der Zellen erzeugen.  
Zwei Modi:

- Manueller Modus, bei dem die Zellen mit dem Alias-Text selbst ausgewählt werden müssen und der Automatikmodus.
- und der Automaktikmodus:

#### Automatik-Modus

Ein automatischer Modus, in dem Alias automatisch unter Verwendung eines durch eine Zelle definierten Textbereichs erstellt wird. Der Bereich umfasst die Zelle und die darunterliegenden Zellen. Diese Texte stimmen mit dem Alias-Namen überein. Der Alias rechts des Textes erzeugt. Die benannte Zelle (hier A3) kann in diesem Dialog geändert werden:

![Alias automatic creation](/src/assets/images/SketchConstraintFromSpreadsheet2302.png)

![Alias automatic creation](/src/assets/images/SketchConstraintFromSpreadsheet2303.png)
![Alias automatic creation](/src/assets/images/SketchConstraintFromSpreadsheet2304.gif)

#### Manueller Modus

Um den manuellen Modus zu nutzen, aktiviere die Option "Automatischer Alias".

![Alias creation](/src/assets/images/SketchConstraintFromSpreadsheet2301.png)

![Alias creation](/src/assets/images/SketchConstraintFromSpreadsheet8.gif)

### Beschränkungen erzeugen

1. Wähle:

- eine Linie,
- zwei Punkte (Ende einer Linie, Zentrum des Kreises, etc.)
- oder eine Längenbeschränkung.

![](/src/assets/images/SelectPoints.png)

2. Klicke auf die Zelle einer Kalkulationstabelle, mit oder ohne Alias, die einen numerischen Wert beinhaltet:

![](/src/assets/images/Capture1.png)

3. Führe das Makro aus.

4. Wähle die gewünschte Art der Beschränkung:

![](/src/assets/images/Choose_type_of_constraint.png)

Wenn die Zelle einen Alias hat, wird die Längen-Eigenschaft der Beschränkung in etwa zu 'Spreadsheet.Alias'. Andernfalls in etwa zu 'Spreadsheet.D4'.

![](/src/assets/images/If_the_spreadsheet_has_an_alias.png)

5. Wenn die Beschränkungen einen Konflikt hervorruft und die Option "Konflikterkennung" aktiviert ist, schlägt das Makro vor die neue Beschränkung zu löschen:

![](/src/assets/images/SketchConstraintFromSpreadsheet3.gif)

Wenn eine bestehende Beschränkung ausgewählt wird, kann der Wert durch den Wert einer Kalkulationstabelle ersetzt werden:

![](/src/assets/images/SketchConstraintFromSpreadsheet2.gif)
![](/src/assets/images/SketchConstraintFromSpreadsheet4.gif)

Das Makro kann auch mit externer Geometrie einer anderen Skizze umgehen:

![](/src/assets/images/SketchConstraintFromSpreadsheet9.gif)

Um die Dinge noch weiter zu verfeinern, wenn z. B. eine Linie eher horizontal als vertikal ist, liegt der Fokus beim Öffnen des Dialogfelds auf der Schaltfläche für die Anwendung einer horizontalen Beschränkung. Wenn die Linie nicht horizontal, sondern vertikal ist, liegt der Fokus auf der Schaltfläche für die vertikalen Beschränkung. Drücke in beiden Fällen einfach die Eingabetaste, wenn die Wahl zufriedenstellend ist.

![](/src/assets/images/SketchConstraintFromSpreadsheet5.gif)

Das Makro funktioniert auch für Objekteigenschften. Wird z.B. auf die Eigenschaft Length einer Aufpolsterung geklickt und anschließend auf eine Zelle mit dem gewünschten Wert, wird die Eigenschaft Length der Aufpolsterung automatisch angepasst.

![](/src/assets/images/SketchConstraintFromSpreadsheetchangePropertyPad.gif)

You can use formulas.

Principle: The macro transforms the alias before inserting it into the parameter or dimension expression. It replaces keywords with operations for everything following the character string `f` (f for function).

Example of usage:

![](/src/assets/images/SketchConstraintFromSpreadsheetcformulaMult.gif)

If your alias is: radius_f\_\_mul_2_plu_1  
The expression will be:  
`<<datas>>.radius_f__mul_2_plu_1 * 2 + 1`  
Thus, if you have, for instance, the value 5 in the cell, the parameter or dimension will take the value 5 \* 2 + 1, which equals 11.

A snippet of the code showing possible operations and formulas to use:

```
formulaSeparator = '_f_'
dicoFormula = {
    '_div_':'/',
    '_mul_':'*',
    '_plu_':'+',
    '_mor_':'+',
    '_les_':'-',
    '_moi_':'-',
    '_pg_':'(',
    '_lp_':'(',
    '_pd_': ')',
    '_rp_': ')',
}

```

## Verweise

- [Diskussion im Forum (Französisch)](https://forum.freecad.org/viewtopic.php?t=75972)
- [Diskussion im Forum (Englisch)](https://forum.freecad.org/viewtopic.php?style=5&t=76990)
- [Macrorezepte](/Macros_recipes/de "Macros recipes/de")
- [Wie man Makros installiert](/How_to_install_macros/de "How to install macros/de")
- [Anpassung der Werkzeugleisten](/Customize_Toolbars/de "Customize Toolbars/de")

## Danksagung

Vielen Dank an openBrain, mario52 und onekk für ihre Hilfe mit dem Quelltext!  
Danke an Syres für das Testen, die Überprüfungen und Hilfe im Quelltext.  
Danke an Roy043 und David69 für die für die verschiedenen Überprüfungen und Verbesserungen des Wikis.  
Danke an L'ami René für Überprüfungen und Ideen.

## Skript

ToolBar Icon ![](/src/assets/images/Macro_Sketch_Constraint_From_Spreadsheet.svg)

### Code

ver 02.02 2025/03/30 by 2cv001 **Macro_Sketch_Constraint_From_Spreadsheet.FCMacro**

#### Herunterladen

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro)

[Download latest version of the macro](https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Sketch_Constraint_From_Spreadsheet/de&oldid=1570120>"
