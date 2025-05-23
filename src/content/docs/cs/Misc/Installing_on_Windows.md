---
title: Instalace na Windows
---
## Standard Installation

The easiest way to install the latest stable version of FreeCAD is to use the installer, see the [Download](/Download "Download") page.

Chcete-li stáhnout buď 64-bitovou verzi nebo nestabilní vývojovou verzi podívejte se na stránku [Download](/Download "Download").

Po stažení souboru .msi (Microsoft Installer) jenom na něj dvojklikněte a spusťte instalační proces.

Dále jsou další informace o technických volbách. Jestli se Vám zdají strašidelné, žádný problém! Většina uživatelů Windows nebude k instalaci FreeCADu potřebovat nic víc než nainstalovat .msi a  **[začít](/Getting_started/cs "Getting started/cs")**!

## Installation for all users of the Windows system

By default FreeCAD will be installed for the user that executes the installer. If this user only has user permissions, the default installation path is:

:   C:\Users\<username>\AppData\Local\Programs\FreeCAD X.YY

If the installer is executed by an admin user, or you execute it as admin, you can choose if FreeCAD should be installed for all users of the system or just for you. The default is for all users.

If installed for all users, the default installation path is:

:   C:\Program Files\FreeCAD X.YY

## Silent Installation

To install FreeCAD silently, you can execute the installer from the command line:

```
FreeCAD-~.exe /S

```

Default settings will be used for all options. A custom installation path can be specified in this manner:

```
FreeCAD-~.exe /S /D=A path to FreeCAD with spaces

```

By default, even with silent installations, there will be a short popup when the installer is checked for corruption. This so-called cyclic redundancy check only takes a few seconds at most. To disable this corruption check:

```
FreeCAD-~.exe /S /NCRC

```

Note that this `/NCRC` flag is **not recommended** since the corruption check assures that the installer was e.g. completely downloaded.

## Chocolatey

Using the [Chocolatey](https://chocolatey.org/install) package manager is currently not recommended as that repository is no longer kept up-to-date.

### Odinstalace

Pomocí

To uninstall FreeCAD it is preferable to use the Windows tools for uninstalling software. Alternatively you can execute the uninstaller directly. This is the file:

:   Uninstall-FreeCAD.exe

You can find it in the folder where FreeCAD is installed.

The uninstaller can also be executed silently using the command line:

```
Uninstall-FreeCAD.exe /S

```

Note that (silent) uninstallation will fail if there is a running instance of FreeCAD, even if that instance is not the version being uninstalled.

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Windows/cs&oldid=1358863>"