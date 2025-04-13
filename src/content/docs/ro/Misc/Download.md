---
title: Download/descărcare
---
## Varianta curentă stabilă

Versiunea 0,17 inițială de FreeCAD (0.17.13509) a fost publicată în 2018-04-06. Multe rezolvări de bug-uri au fost publicate de atunci, cea mai recentă versiune bug fix "0.17.13541" a fost publicată în 2018-08-16. Este posibil să nu fie disponibilă pentru toate sistemele de operare în acest moment. Pentru a afla noutățile, consultați [release notes](/Release_notes_0.17 "Release notes 0.17").

Veți găsi SHA256 checksums (pentru a verifica integritatea descărcării) și versiunea portabilă pe Windows la [0.17 Release page on GitHub](https://github.com/FreeCAD/FreeCAD/releases/tag/0.17). (Versiunile mai vechi au fost "tunse". Disponibilitatea va reveni în viitor)

Previous versions can be downloaded from the [releases](https://github.com/FreeCAD/FreeCAD/releases) page.

|  |  |  |
| --- | --- | --- |
| [Install instructions](/Installing_on_Windows "Installing on Windows")  [64-bit installer](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-installer-1.exe)  [64-bit portable version (.7z)](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-py311.7z) | [Install instructions](/Installing_on_Mac "Installing on Mac")  [ARM (M-series) disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-arm64-py311.dmg)  [Intel disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-x86_64-py311.dmg) | [Install instructions](/Installing_on_Linux "Installing on Linux")  [x86\_64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-x86_64-py311.AppImage)  [aarch64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-aarch64-py311.AppImage) |

### Notes for Windows users

#### Note către utilizatorii de Windows

* The 32-Bit installer (x86) suportă următoarele versiune de Windows: 7/8/10.
* The 64-Bit installer (x64) suportă următoarele versiuni de Windows: 7/8/10.

### Notes for macOS users

#### Note pentru utilizatorii de Mac OS X

```
Versiunea minim acceptată este Mac OS X 10.11 "El Capitan".

```

#### Note către utilizatorii de GNU/Linux

FreeCAD poate fi instalat din depozitele oficiale ale majorității distribuțiilor Linux, dar versiunea pe care o oferă acestea poate fi destul de veche și poate să nu aibă multe caracteristici. În schimb, puteți descărca fișierul AppImage de la link-ul mai sus, marcați-l ca executabil și apoi executați-l fără nici o instalare. Vă rugăm să consultați pagina [Install on Linux](/Install_on_Linux "Install on Linux") pentru mai multe opțiuni de instalare, inclusiv cum să obțineți pachete actualizate pentru Ubuntu și derivatele sale.

Please see the [Installing on Linux](/Installing_on_Linux "Installing on Linux") page for more installation options, including daily packages for Ubuntu and derivatives.

A portable version that doesn't need installation can be achieved by starting FreeCAD with these commands:

```
cd path/to/directory_containing_AppImage/
chmod +x ./name_of_AppImage_file.AppImage
HOME="$PWD/Settings" FREECAD_USER_HOME="$PWD/Settings" ./name_of_AppImage_file.AppImage

```

More information about FreeCAD's environment variables can be found on [the configuration page](/Start_up_and_Configuration#Environment_variables "Start up and Configuration").

## Development versions

### Versiuni în dezvoltare

Dezvoltarea reeCAD-ului este întotdeauna activă! Doriți să verificați versiunea de dezvoltare 0.18? Pentru utilizatorii de Linux, verificați versiunea 0.18 [AppImage](/AppImage "AppImage").m Pentru MacOS, Windows și codul sursă, a se vedea pe pagina [FreeCAD releases](https://github.com/FreeCAD/FreeCAD/releases).

### Module și macro-uri suplimentare

Comunitatea FreeCAD oferă o multitudine de module și macrocomenzi suplimentare. Ele pot fi ușor accesate din interiorul FreeCAD folosind [Addon manager](/Std_AddonMgr "Std AddonMgr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Download/ro&oldid=1508820>"