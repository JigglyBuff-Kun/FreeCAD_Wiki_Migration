---
title: Composto Plus
---

|                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Compound Plus                                                                                                                                                                                                                     |
| Descrizione                                                                                                                                                                                                                             |
| Utilità che combina diversi comandi di Draft. Versione macro: 00.02 Ultima modifica: 2018-01-24 Versione FreeCAD: <= 0.17 Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Compound_Plus.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                  |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Compound_Plus.png)                                                                                                                                                     |
| Link                                                                                                                                                                                                                                    |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                |
| Versione macro                                                                                                                                                                                                                          |
| 00.02                                                                                                                                                                                                                                   |
| Data ultima modifica                                                                                                                                                                                                                    |
| 2018-01-24                                                                                                                                                                                                                              |
| Versioni di FreeCAD                                                                                                                                                                                                                     |
| <= 0.17                                                                                                                                                                                                                                 |
| Scorciatoia                                                                                                                                                                                                                             |
| _Nessuna_                                                                                                                                                                                                                               |
| Vedere anche                                                                                                                                                                                                                            |
| _Nessuno_                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                         |

## Descrizione

Macro utility che riunisce numerosi comandi di Draft per lavorare con gli oggetti 2D. Ad esempio, lavorare con gli oggetti dei file DXF.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro>">raw code</a>

## Uso

![Macro_Compound_Plus_00](/images/Macro_Compound_Plus_00.png)

- Compound I Type I [1 + 1 = 1] : Crea un composto unico di tutti gli oggetti selezionati, senza lo storico.
- Compound II Type II [1 + 1 = A (1 + 1)] : Crea un composto di tutti gli oggetti selezionati con lo storico di tutti gli oggetti. Stessa funzione di "**Menu > Part > Crea composto**".
- Opzioni per le linee:
  - Line colour : Assegna un colore agli oggetti.
  - Width line : Assegna uno spessore di linea.
- Convert (A) = Converte i testi ![](/images/Draft_Text.png) in forme ![](/images/Draft_ShapeString.png) (Lo spessore del testo convertito è rispettato, ma il risultato visivo può non essere rispettato, vedere le proprietà della Vista Combinata per conferma)
- 8.00  : Gives a thickness of the character and font Family.
- Convert Edge : Questo comando converte una polilinea in una linea con le coordinate. (Es: un composto declassato non ha le coordinate, questa funzione crea una linea con le coordinate)

### Option color

If it ![](/images/CheckBoxFalse.svg) checked the colour to object to work are coloured (edge, vertex)

- ![](/images/Workbench_Image.svg) Color  : Gives a colour to object. (Default Red 255, 0, 0)

### Tools

- LineEdit : display (Iindex of Font / Number of font) the path and name of the font.

* ![](/images/Draft_Text.svg) Convert Text (A) : convert the text ![](/images/Draft_Text.svg) in a shape string ![](/images/Draft_ShapeString.svg) (The height of the text converted is respected but the visual result may not be respected, see the Combo view property for confirm). (A) is Automatic value height of text.

  - 0,00 Auto ![](/images/SpinBox.svg) : If the spinbox is egual 0.0 the heigth of the VALUE of the text is respected, if other of 0.0 the ![](/images/Draft_Text.svg) Convert Text (A) change to ![](/images/Draft_Text.svg) Convert Text (M) manual.

* ![](/images/Draft_Line.svg) Convert Wire (A) : This command convert the wire in one line with coordinates. (ex: one compound downgraded does not have coordinates, this function create a line with the coordinate as Draft line and reproduce the DXF wire in a Draft object are detected: Line, Arc, Circle, Ellipse, BSplineCurve.
  - 0,00 Auto ![](/images/SpinBox.svg) : Gives a thickness of the wire. If the spinbox is egual 0.0 the heigth of the VALUE of the text is respected, if other of 0.0 the ![](/images/Draft_Line.svg) Convert Wire (A) change to Convert Wire (M) manual.
* ![](/images/CheckBoxFalse.svg) ![](/images/Draft_BezCurve.svg) BezierCurve : By default the BezierCurve detected is ![](/images/Draft_BezCurve.svg), if it is checked the BezierCurve is Cubic ![](/images/Draft_CubicBezCurve.svg) and the button change ![](/images/CheckBoxTrue.svg) ![](/images/Draft_CubicBezCurve.svg) Cubic BezierCurve

* ![](/images/RadioButtonTrue.svg) ![](/images/Std_DrawStyleFlatLines.svg) FlatLines : The objects created is FlatLines.
* ![](/images/RadioButtonFalse.svg) ![](/images/Std_DrawStyleWireFrame.svg) Wireframe : The objects created is Wireframe.
* ![](/images/RadioButtonFalse.svg) ![](/images/Std_DrawStylePoints.svg) Points : The objects created is Points.
* ![](/images/Draft_Upgrade.svg) UpGrade : UpGrade
* ![](/images/Draft_Downgrade.svg) DownGrade : DownGrade

- Per Compound I e Convert Edge

Questa sezione lavora solo con i menu Compound I, Convert (A) e Convert Edge

- None : Tutti gli oggetti originali restano così come sono.
- Hidden original line(s) : Nasconde le linee originali.
- Delete original line(s) : Elimina le linee originali.
- Reset : Reset della macro
- DownGrade : Declassa gli oggetti, allo stesso modo di ![](/images/Draft_Downgrade.png).
- Quit : Esce dalla macro

### Force on a form : Line

If the object line, arc or circle is not reconized (as form in a volume 3D object), this section force the creation of Line, Arc or Circle.

no verification is done, this section tray to create a requested shape 2D (Draft) based on the data provided

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_Line.svg) Lines : Tray to create a Line.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Arc.svg) Arc : Tray to create a Arc.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Circle.svg) Circle : Tray to create a Circle.
- ![](/images/Draft_Line.svg) Force on : Line : Button Force

### Command

- ProgressBar
- Reset : Reset the macro
- Quit : Quit the macro, bye
- Help : Display the wiki page in the FreeCAD browser

## Script

L'icona per la barra degli strumenti ![](/images/Macro_Compound_Plus.png) da copiare nella stessa cartella della macro

[Come personalizzare la barra degli strumenti](/Customize_Toolbars/it "Customize Toolbars/it"), [Come installare le macro](/How_to_install_macros/it "How to install macros/it")

Lo script in github [Macro_Compound_Plus.FCMacro](https://gist.github.com/mario52a/7be361a8c489deec918f664fdcfc4394)

## Link

Le mie macro su [Github](https://gist.github.com/mario52a)

## Versioni

- 24/01/2018 ver 00.02 : sup "import PyQt4"
- 21/11/2016 ver 00.01 :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Compound_Plus/it&oldid=1505480>"
