---
title: Install on Mac
---
FreeCAD kan installeras på Mac OS X i ett steg genom att använda Installeraren. Denna sida beskriver användandet och funktionerna i FreeCAD installeraren. Den inkluderar också avinstallations instruktioner.

If you would like to download a development version, which may be unstable, see the [Weekly builds download](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds) page.

You can also use a package manager such as HomeBrew to keep your software updated. Instructions to install HomeBrew can be seen [here](https://brew.sh/). When HomeBrew installed you can simply install FreeCAD through your bash terminal with

```
brew install --cask freecad

```

and to use the latest version available on HomeBrew you may run

```
brew install freecad

```

If there are any issues with the HomeBrew Cask or Formula you may report them to [here](https://github.com/FreeCAD/homebrew-freecad).

This page describes the usage and features of the FreeCAD installer. It also includes uninstallation instructions. Head to [Getting started](/Getting_started "Getting started") once installation is complete.

### Enkel Installation

FreeCAD installeraren erbjuds som ett Installationspaket(.mpkg) bifogad i en diskavbildningsfil.

The FreeCAD installer is provided as a app package (.app) enclosed in a disk image file.

Du kan ladda ned den senaste installeraren från [Nedladdningssidan](/Download "Download"). Efter att du laddat ned filen, montera diskavbildningen, kör sedan **Install FreeCAD** paketet.

![](/images/Mac_installer_1.png)

Installeraren kommer att presentera en **Customize Installation** skärm som listar de paket som kommer att installeras. Om du vet att du redan har något av dessa paket, så kan du välja bort dem genom att använda kryssrutorna. Om du inte är säker, lämna alla rutor markerade.

### Avinstallation

Det finns för närvarande ingen avinstallerare för FreeCAD. För att helt ta bort FreeCAD och alla installerade komponenter, dra följande filer och mappar till papperskorgen:

* I /Applications:
  + FreeCAD

Det är allt. Eventuellt så kommer FreeCAD att finnas tillgängligt som ett applikationspaket så att allt detta trubbel kommer att försvinna.

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Mac/sv&oldid=1297710>"