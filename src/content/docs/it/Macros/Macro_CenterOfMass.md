---
title: CenterOfMass
---

|                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Centro di massa                                                                                                                                                                                                          |
| Descrizione                                                                                                                                                                                                              |
| Fornisce il centro di massa degli oggetti selezionati. Versione macro: 0.5.0 Ultima modifica: 2022-04-06 Autore: chupins, s-quirin                                                                                       |
| Autore                                                                                                                                                                                                                   |
| [chupins, s-quirin](/index.php?title=User:Chupins,_s-quirin&action=edit&redlink=1 "User:Chupins, s-quirin (page does not exist)")                                                                                        |
| Download                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                   |
| Link                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it") |
| Versione macro                                                                                                                                                                                                           |
| 0.5.0                                                                                                                                                                                                                    |
| Data ultima modifica                                                                                                                                                                                                     |
| 2022-04-06                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                   |
| Scorciatoia                                                                                                                                                                                                              |
| _Nessuna_                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                             |
| _Nessuno_                                                                                                                                                                                                                |
|                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                          |

## Descrizione

Fornisce la massa totale e la posizione del centro di massa risultante da più oggetti selezionati. È possibile scegliere diverse densità per ciascun oggetto.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro>">raw code</a>

![](/images/CenterOfMass_exemple.png)

## Utilizzo

Selezionare gli oggetti

### Available Options

- Color the solids according to density.
- Display the location of the center of mass.
- Export and import _masses_, _materials_ and _densities_ (even if it's not a .csv file from the macro, but columns must be named accordingly).
- Save densities in the document (remove them again when setting material to default ![](/images/ComboBox.svg)).
- You can change some preferences at **Tools → Edit parameters → Preferences → Macros**.

## Script

Scarica la macro da GitHub:

[Macro CenterOfMass.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Information/CenterOfMass.FCMacro)

Scaricare e incollare i file icona in una sottodirectory denominata CenterOfMass nella directory delle macro:

![](/images/Macro_CenterOfMass.svg)

## Link

La discussione nel forum [Macro to compute center of mass](https://forum.freecadweb.org/viewtopic.php?f=24&t=31883)

## Versione

Version / Date of merge

0.8.3 / 2025-01-23:

- Fix: [Several fixes (PR#191)](https://github.com/FreeCAD/FreeCAD-macros/pull/191), FreeCAD 0.19 no longer supported

  0.8.0 / 2025-01-06: Thanks to farahats9 for the contribution

- New: Show Volume and Surface area
- New: Calculate Moments of Inertia
- Fix: Macro now works with the Assembly example in FreeCAD 1.0
- Fix: Automatically select material for solids if it is already assigned by the new material system
- Minor UI changes

  0.7.6 / 2024-08-01: Prepare for major FreeCAD release

- Fix: Make 0.22.0dev AssemblyExample work
- Fix: BOM Import containing custom material
- Fix: Support the new material cards
- Fix: Changed or missing icons, version checks

  0.7.3 / 2023-09-11:

- New: Added buttons for Copy to clipboard
- New: Scalable Vector Graphics icon
- Fix: Compatibility for FreeCAD versions and web

  0.7.0 / 2023-02-13:

- New: Searchbar for solids
- New: Reworked import function to improve external bill of materials (BOM) import with better input tolerance. Caption "weight" has to be changed to "mass" if you want to import mass from an old file export of the macro.
- New: Mass can be set zero to exclude solid from calculation and visualization
- Fix: Behaviour of default value spin and "Apply to all"
- Fix: Preserve original solids color when "New" button pressed

  0.6.0 / 2022-08-27:

- New: Masses are editable (a highly requested feature)
- New: Highlights the solid you are working on
- New: No duplicate entries when container and content selected concurrently
- New: Pie charts show density relation in combo box
- New: Legibility of text on colored combo box with WCAG21 1.4.6 Contrast (Enhanced) conformity
- Fix: A Part used as a container for meshes (e.g. .stl's) is recognized correctly
- Fix: Fixes for error and language handling, material editing, combo box and GUI size adjustment

  0.5.8 / 2022-05-31:

- Reinserted: Bounding Box
- New: Setting to color spheres
- New: Setting to change color maps
- Rearranged GUI: Update calculation added, Total density added
- Fix: Message Boxes could not be used when not running FreeCAD on primary screen in a multimonitor setup
- Fix: More than one Mesh was not calculated correctly

  0.5.0 / 2022-04-07: complete rewrite by s-quirin (SyProLei project at Saarland University)

- New: Code base, Requirement raised to Qt5.12+ and Python3 (FreeCAD 0.19).
- New: Show mass of each solid.
- New: Start window docked or floating (can be set in Parameter Editor).
- New: Selection matches up tree view or is sorted by name (can be set in Parameter Editor).
- New: Option to save densities in document.
- Improved: FreeCAD alike Gui look and feel.
- Improved: Scaled color palette (from green to red) to colorify shapes.
- Improved: Visualising the displacement of centre of mass to the geometry.
- Improved: Internal tracking of units.
- Fix: Handling of groups and group objects.
- Fix: Handling of App::Link.
- Fix: Replaced deprecated Qt class.

  0.4.1 / 2019-05-25: Add default density button, sphere cursor, change window behavior, correct a container part issue.

  0.1.2 / 2018-11-10:

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_CenterOfMass/it&oldid=1537946>"
