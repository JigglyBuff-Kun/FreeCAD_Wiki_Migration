---
title: Tela de abertura
---
## Description

A **tela de abertura** (splash screen) é uma imagem que aparece durante a inicialização do FreeCAD. Você pode desabilitar a tela de abertura no menu *Editar / Preferências* do FreeCAD removendo a opção "Mostrar a tela de splash ao iniciar".

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The splash screen image is picked randomly from multiple images including user models and selected add-on workbenches.

## Custom splash screen

To use a custom splash screen, you have to place an image named splash\_image.png in one of the following directories depending on the operating system:

* **Linux:** $XDG\_DATA\_HOME/FreeCAD/Gui/images/ (normally this corresponds to ~/.local/share/FreeCAD/Gui/images/)
* **Windows:** %APPDATA%\FreeCAD\Gui\images\ (normally C:\Users\username\AppData\Roaming\FreeCAD\Gui\images\)
* **MacOS:** ~/Library/Application Support/FreeCAD/Gui/images/

The directory can be found using the `App.getUserAppDataDir()` command in the [Python console](/Python_console "Python console"). The `Gui` and `images` folders may have to be created first. The same custom splash screen will be used for all versions of FreeCAD on a given computer.

Retrieved from "<http://wiki.freecad.org/index.php?title=Splash_screen/pt-br&oldid=1487886>"