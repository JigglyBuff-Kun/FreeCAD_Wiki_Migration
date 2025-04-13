---
title: Instalar em Windows
---
## Standard Installation

The easiest way to install the latest stable version of FreeCAD is to use the installer, see the [Download](/Download "Download") page.

Se quiser fazer a transferência da versão 64 bits ou a versão de desenvolvimento instável, veja a página dos [Transferências](/index.php?title=Download/pt&action=edit&redlink=1 "Download/pt (page does not exist)").

Depois de transferir o ficheiro .msi (instalador da Microsoft), faça duplo-clique para iniciar o processo de instalação.

Em baixo encontra mais informação sobre opções técnicas. Se lhe parecer complicado, não se preocupe! A maioria dos utilizadores Windows não precisam de mais do que o ficheiro de instalação .msi para instalar o FreeCAD e  **[Começar](/Getting_started/pt "Getting started/pt")**.

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

### Desinstalação

Com

To uninstall FreeCAD it is preferable to use the Windows tools for uninstalling software. Alternatively you can execute the uninstaller directly. This is the file:

:   Uninstall-FreeCAD.exe

You can find it in the folder where FreeCAD is installed.

The uninstaller can also be executed silently using the command line:

```
Uninstall-FreeCAD.exe /S

```

Note that (silent) uninstallation will fail if there is a running instance of FreeCAD, even if that instance is not the version being uninstalled.

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Windows/pt&oldid=1358875>"