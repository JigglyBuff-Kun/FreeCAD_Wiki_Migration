---
title: Ekran powitalny
---
## Opis

**Ekran powitalny** to obraz, który jest prezentowany podczas uruchamiania programu FreeCAD. Możesz wyłączyć wyświetlanie ekran powitalnego w menu [Preferencji](/Preferences_Editor#General_2/pl "Preferences Editor") FreeCAD, wyłączając opcję **Włącz ekran powitalny podczas uruchamiania**.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Obraz ekranu powitalnego jest wybierany losowo spośród wielu obrazów, w tym modeli użytkownika i wybranych dodatkowych środowisk pracy.

## Własny ekran powitalny

Aby użyć niestandardowego ekranu powitalnego, należy umieścić obraz o nazwie splash\_image.png w jednym z następujących katalogów, w zależności od systemu operacyjnego:

* **Linux:** $XDG\_DATA\_HOME/FreeCAD/Gui/images/ *(zazwyczaj odpowiada to ~/.local/share/FreeCAD/Gui/images/)*,
* **MacOS:** ~/Library/Application Support/FreeCAD/Gui/images/,
* **Windows:** %APPDATA%\FreeCAD\Gui\images\ *(zazwyczaj C:\Users\username\AppData\Roaming\FreeCAD\Gui\images\)*.

Lokalizację katalogu można wyświetlić za pomocą polecenia `App.getUserAppDataDir()` w [konsoli Python](/Python_console/pl "Python console/pl"). Katalogi `Gui` i `images` trzeba utworzyć samodzielnie. Ten sam niestandardowy ekran powitalny będzie używany dla wszystkich wersji FreeCAD na danym komputerze.

Retrieved from "<http://wiki.freecad.org/index.php?title=Splash_screen/pl&oldid=1487958>"