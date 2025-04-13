---
title: Splash screen
---
## Description

La **pantalla de bienvenida** es una imagen que aparece durante el inicio de FreeCAD. Puedes desactivar la pantalla de bienvenida en el menú Preferencias de FreeCAD eliminando la opción "Activar la pantalla de bienvenida al inicio".

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The splash screen image is picked randomly from multiple images including user models and selected add-on workbenches.

## Custom splash screen

To use a custom splash screen, you have to place an image named splash\_image.png in one of the following directories depending on the operating system:

* **Linux:** $XDG\_DATA\_HOME/FreeCAD/Gui/images/ (normally this corresponds to ~/.local/share/FreeCAD/Gui/images/)
* **Windows:** %APPDATA%\FreeCAD\Gui\images\ (normally C:\Users\username\AppData\Roaming\FreeCAD\Gui\images\)
* **MacOS:** ~/Library/Application Support/FreeCAD/Gui/images/

The directory can be found using the `App.getUserAppDataDir()` command in the [Python console](/Python_console "Python console"). The `Gui` and `images` folders may have to be created first. The same custom splash screen will be used for all versions of FreeCAD on a given computer.

Retrieved from "<http://wiki.freecad.org/index.php?title=Splash_screen/es&oldid=1487887>"