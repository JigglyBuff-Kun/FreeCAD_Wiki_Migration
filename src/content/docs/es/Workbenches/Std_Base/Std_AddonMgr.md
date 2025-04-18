---
title: Std GestorComplementos
---
|  |
| --- |
| Std GestorComplementos |
| Ubicación en el Menú |
| Herramientas → Gestor Complementos |
| Entornos de trabajo |
| Todo |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Ambientes de trabajo externos](/External_workbenches/es "External workbenches/es"), [Macros](/Macros/es "Macros/es") |
|  |

## Descripción

El comando **Std AddonMgr** abre el gestor de complementos. Con el gestor de complementos puedes instalar y gestionar [Ambientes de trabajo externos](/External_workbenches/es "External workbenches/es"), [Macros](/Macros/es "Macros/es") y [paquetes de preferencias](/Preference_Packs "Preference Packs") proporcionados por la comunidad de FreeCAD. Por defecto los complementos disponibles son tomados de dos repositorios, [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) y de la página [Recetas de macros](/Macros_recipes/es "Macros recipes/es"). Si GitPython y git están instalados en su sistema, se cargarán macros adicionales desde [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/). Se pueden agregar repositorios personalizados en [Preferencias del administrador de complementos](/Preferences_Editor#Addon_Manager "Preferences Editor").

Debido a los cambios en la plataforma GitHub en el año 2020 el gestor de Addons ya no funciona si utilizas la versión 0.17 o anterior de FreeCAD. Necesitas actualizar a la versión [0.18.5](https://github.com/FreeCAD/FreeCAD/releases/tag/0.18.5) o más reciente. Alternativamente puedes instalar addons manualmente, ver [Notas](#Notas) abajo.

## Utilización

1. Seleccione la opción **Herramientas → ![](/images/Std_AddonMgr.svg) Gestor complementos** en el menú.
2. Si es la primera vez que utiliza el gestor complementos, se abrirá un cuadro de diálogo advirtiéndole de que los complementos del gestor de complementos no forman parte oficialmente de FreeCAD. Adjuste esas opciones a su gusto y pulse el botón OK para confirmar y continuar.
3. Se abre el cuadro de diálogo del Gestor complementos. Para más información ver [Opciones](#Opciones).
4. Si has instalado o actualizado un ambiente de trabajo se abrirá un nuevo cuadro de diálogo informando de que tienes que reiniciar FreeCAD para que los cambios surtan efecto.

## Opciones

![](/images/AddonManager_Main.png)

1. El administrador de complementos proporciona dos diseños de vista: "Condensada" y "Expandida". En la vista "Condensada", cada complemento ocupa una sola línea y su descripción se trunca para ajustarse al espacio disponible. La vista "Expandida" muestra detalles adicionales, incluido más texto de descripción, así como información del mantenedor, más detalles de instalación, etc.
2. Se admiten tres tipos diferentes de complementos: [entornos de trabajo](/External_workbenches "External workbenches"), [macros](/Macros "Macros") y [paquetes de preferencia](/Preference_Packs "Preference Packs"). Puede optar por mostrar solo un tipo o todos en una sola lista.
3. La lista se puede limitar para mostrar únicamente a los paquetes instalados, solo paquetes con actualizaciones disponibles o solo paquetes que aún no están instalados.
4. La lista se puede filtrar, buscando una palabra clave en el título, la descripción y las etiquetas (el desarrollador del complemento debe especificar la descripción y las etiquetas en los metadatos de su complemento). El filtro puede ser incluso una expresión regular, para un control detallado del término de búsqueda exacto.
5. La vista ampliada muestra la información de la versión disponible, la descripción, la información del mantenedor y la información de la versión de instalación, para los paquetes que proporcionan un archivo de [metadatos del paquete](/Package_Metadata "Package Metadata") (o para macros con metadatos incrustados).
6. Los datos adicionales se almacenan en caché localmente, con una frecuencia de actualización de caché variable establecida en las preferencias del usuario.
7. En cualquier momento, puede optar por actualizar manualmente su caché local para ver las últimas actualizaciones disponibles para cada complemento.
8. Las comprobaciones de actualización pueden configurarse para que sean automáticas o manuales mediante un clic de botón (configurado en las preferencias del usuario). Si GitPython y git están instalados en su sistema, la información de actualización se obtiene mediante git. De lo contrario, la información de actualización se obtiene de cualquier archivo de metadatos presente.

Al hacer clic en un complemento en esta vista, aparece la página Detalles del complemento:

![](/images/AddonManager_Details.png)

La página de detalles muestra botones que permiten instalar, desinstalar, actualizar y deshabilitar temporalmente un complemento. Para los complementos instalados, enumera la versión instalada actualmente y la fecha de instalación, y si esa es la versión más reciente disponible. A continuación se muestra una ventana de navegador web incrustada que muestra la página LÉAME (README) del complemento (para entornos de trabajo y paquetes de preferencias) o la página Wiki (para macros).

## Preferencias

Las preferencias para el administrador de complementos pueden ser encontradas en el [Editor de preferencias](/Preferences_Editor#Addon_Manager "Preferences Editor"). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Sorting by score

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The Addon Manager supports sorting by a number of different criteria. Most of these are downloaded directly from FreeCAD's servers (which caches them from GitHub and the FreeCAD Wiki) but one, "Score," is not provided by FreeCAD at all, and only appears as an option if the Score Source URL setting is provided in the Preferences.

The Score Source URL is a path to a remote JSON-formatted document listing addons and a "score" of some kind. Score can be calculated in any way the data provider likes, but should be an integer value, with higher scores being "better" in some sense. Any addon not listed is assigned a score of zero internally. The format of the file is a single JSON dictionary where the key is the addon URL (for workbenches and preference packs) or the name of the macro (for macros). See [this data source](https://gist.githubusercontent.com/chennes/e8f60e80f16e6ffbd057dd47ca36ad2a/raw/7b118cca8e84444c3379919bbd744b99e6ef6711/addon_score_for_testing.json) for an example (note the score there is simply the length of the addon's description, and is intended only for testing and demonstration purposes).

## Notas

* El uso de los complementos no está restringido a la versión de FreeCAD desde la que fueron instalados. También podrás utilizarlos en cualquier otra versión de FreeCAD, soportada por el complemento, que puedas tener en tu sistema.
* Los complementos disponibles en el gestor complementos no son parte del programa oficial de FreeCAD y no están soportados por el equipo de desarrollo de FreeCAD. Debes leer la información proporcionada cuidadosamente para asegurarte de que sabes lo que estás instalando.
* Los informes de errores y las peticiones de características deben hacerse directamente al creador del addon visitando el sitio web indicado. Muchos desarrolladores de complementos son usuarios habituales del [foro de FreeCAD](https://forum.freecadweb.org), y también pueden ser contactados allí.
* Si el paquete [GitPython](https://github.com/gitpython-developers/GitPython) está instalado en tu ordenador, el gestor complementos lo utilizará, haciendo que las descargas sean más rápidas.
* También puedes instalar complementos manualmente. Ver [Cómo instalar ambientes de trabajo adicionales](/How_to_install_additional_workbenches/es "How to install additional workbenches/es") y [Cómo instalar macros](/How_to_install_macros/es "How to install macros/es").

## Información para desarrolladores

Vea [Complemento](/Addon#Information_for_developers "Addon").

## Scripting

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Some features of the Addon manager are designed for access via FreeCAD's Python API. In particular an addon can be installed, updated, and removed via the Python interface. Most uses of this API require you to create an object with at least three attributes: `name`, `branch` and `url`. For example:

```
class MyAddonClass:
    def __init__(self):
        self.name = "TestAddon"
        self.url = "https://github.com/Me/MyTestAddon"
        self.branch = "main"
my_addon = MyAddonClass()

```

Your object `my_addon` is now ready for use with the Addon manager API.

### Commandline (non-GUI) use

If your code needs to install or update an addon synchronously (e.g. without a GUI) the code can be very simple:

```
from addonmanager_installer import AddonInstaller
installer = AddonInstaller(my_addon)
installer.run()

```

Note that this code blocks until complete, so you shouldn't run it on the main GUI thread. To the Addon manager, "install" and "update" are the same call: if this addon is already installed, and git is available, it will be updated via "git pull". If it is not installed, or was installed via a non-git installation method, it is downloaded from scratch (using git if available).

To uninstall, use:

```
from addonmanager_uninstaller import AddonUninstaller
uninstaller = AddonUninstaller(my_addon)
uninstaller.run()

```

### GUI use

If you plan on your code running in a GUI, or supporting running in the full version of FreeCAD, it's best to run your installation in a separate non-GUI thread, so the GUI remains responsive. To do this, first check to see if the GUI is running, and if it is, spawn a `QThread` (don't try to spawn a `QThread` if the GUI is not up: they require an active event loop to function).

```
from PySide import QtCore
from addonmanager_installer import AddonInstaller

worker_thread = QtCore.QThread()
installer = AddonInstaller(my_addon)
installer.moveToThread(worker_thread)
installer.success.connect(installation_succeeded)
installer.failure.connect(installation_failed)
installer.finished.connect(worker_thread.quit)
worker_thread.started.connect(installer.run)
worker_thread.start() # Returns immediately

```

Then define the functions `installation_succeeded` and `installation_failed` to be run in each case. For uninstallation you can use the same technique, though it is usually much faster and will not block the GUI for very long, so in general it's safe to use the uninstaller directly, as shown above.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_AddonMgr/es&oldid=1457296>"