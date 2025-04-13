---
title: Instalación de más ambientes de trabajo
---
## Introducción

Desde la v0.17 es fácil añadir [ambientes de trabajo externos](/External_workbenches/es "External workbenches/es") utilizando el [Gestor de complementos](/Std_AddonMgr/es "Std AddonMgr/es"). Un usuario normal no necesita hacer más que usar esta herramienta.

Siga leyendo para obtener más información sobre la instalación de ambientes de trabajo.

## Descripción general

Los ambientes de trabajo no son más que colecciones de archivos que se colocan en una carpeta. Esta carpeta suele estar comprimida en un archivo zip. En la instalación, esta carpeta simplemente se descomprime y se copia en

```
$ROOT_DIR/Mod/

```

donde `$ROOT_DIR` es un directorio de nivel superior buscado por FreeCAD al iniciarse. Esto es esencialmente lo que hace el [Gestor de complementos](/Std_AddonMgr/es "Std AddonMgr/es").

Los directorios `Mod/` se escanean cada vez que se inicia FreeCAD, y los ambientes de trabajo disponibles se añaden automáticamente.

## Instalación de todo el sistema

Los ambientess de trabajo instalados de esta manera estarán disponibles para todos los usuarios. Dependiendo de su sistema, es posible que necesite privilegios de administrador para acceder al directorio de instalación.

Copie la carpeta del ambiente de trabajo en `$INSTALL_DIR/Mod/`, donde `$INSTALL_DIR` es el directorio de instalación de FreeCAD.

* En Linux suele ser `/usr/share/freecad/Mod/`
* En Windows suele ser `C:\\Program Files\FreeCAD\Mod`
* En macOS suele ser `/Applications/FreeCAD/Mod/`

## Instalación para un solo usuario

Los ambientes de trabajo instalados de esta manera estarán disponibles sólo para un usuario, pero no requerirán ningún privilegio de administrador.

Copiar la carpeta del ambiente de trabajo en `$USER_DIR/Mod/`, donde `$USER_DIR` es el directorio de FreeCAD para un `username` particular (puede encontrar este último escribiendo `App.getUserAppDataDir()` en la [consola de Python](/Python_console "Python console")).

* En Linux es normalmente `/home/username/.local/share/FreeCAD/Mod/` (0.20 and above) ó `/home/username/.FreeCAD/Mod/` (0.19 and below).
* En Windows es `%APPDATA%\FreeCAD\Mod`, que suele ser `C:\Users\username\Appdata\Roaming\FreeCAD\Mod`.
* En macOS suele ser `/Users/username/Library/Preferences/FreeCAD/Mod/`.

## Información adicional

Puedes encontrar información adicional sobre cómo crear un ambiente de trabajo personalizado en el [Centro de usuarios avanzados](/Power_users_hub/es "Power users hub/es") y en el [Centro de desarrolladores](/Developer_hub/es "Developer hub/es").

Consulta también una descripción detallada en la página [cómo instalar ambientes de trabajo adicionales](/How_to_install_additional_workbenches/es "How to install additional workbenches/es").

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_more_workbenches/es&oldid=1526205>"