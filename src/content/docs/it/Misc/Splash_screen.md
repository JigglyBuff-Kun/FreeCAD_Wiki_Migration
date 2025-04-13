---
title: Splash screen
---
## Descrizione

La schermata iniziale è un'immagine che appare durante l'avvio di FreeCAD. Si può disabilitare la schermata iniziale nell'[Editor delle Preferenze](/Preferences_Editor/it#Generale_2 "Preferences Editor/it") deselezionando l'opzione **Abilita la schermata iniziale all'avvio**.

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): l'immagine della schermata iniziale viene scelta casualmente da più immagini inclusi i modelli utente e gli ambienti di lavoro aggiuntivi selezionati.

## Schermata iniziale personalizzata

Per utilizzare una schermata iniziale personalizzata, si deve inserire un'immagine denominata splash\_image.png in una delle seguenti directory a seconda del sistema operativo:

* **Linux:** $XDG\_DATA\_HOME/FreeCAD/Gui/images/ (normalmente corrisponde a ~/.local/share/FreeCAD/Gui/images/)
* **Windows:** %APPDATA%\FreeCAD\Gui\images\ (normalmente C:\Users\username\AppData\Roaming\FreeCAD\Gui\images\ )
* **MacOS:** ~/Library/Application Support/FreeCAD/Gui/images/$XDG\_DATA\_HOME

La directory può essere trovata utilizzando il comando `App.getUserAppDataDir()` nella [console Python](/Python_console/it "Python console/it"). Potrebbe essere necessario creare prima le cartelle `Gui` e `images`. La stessa schermata iniziale personalizzata verrà utilizzata per tutte le versioni di FreeCAD su un determinato computer.

Retrieved from "<http://wiki.freecad.org/index.php?title=Splash_screen/it&oldid=1489627>"