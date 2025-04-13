---
title: OpenSCAD AddOpenSCADElement
---
|  |
| --- |
| Añadir un elemento OpenSCAD |
| Ubicación en el Menú |
| OpenSCAD -> Añadir un elemento OpenSCAD |
| Entornos de trabajo |
| [OpenSCAD](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

#### Descripción

Añade un elemento OpenSCAD introduciendo código OpenSCAD en el panel de tareas y ejecutando el binario de OpenSCAD binary (requiere de OpenSCAD)

Cuando se selecciona 'una malla', OpenSCAD renderiza una malla.

Cada vez que se presiona Añadir se ejecuta el código y se importan elementos.

Esta función no proporciona ningún control de sintaxis o errores proporcionado más allá de no ofrecer un resultado de OpenSCAD.
Si los elementos no especifican la ruta a utilizar <> e incluir<> las declaraciones podrían estar rotas.

Las bibliotecas deberían ser accesibles por defecto, mientras que a los ejemplos se podría acceder así

Libraries should be accessible as usual, whereas example can be reached as stated below.

```
include <../examples/example001.scad>;

```

incluiría el primer ejemplo conocido también como el icono de OpenSCAD

## Setup OpenSCAD within FreeCAD

**Note:** OpenSCAD needs to be installed on your computer before FreeCAD will have this functionality  
Install OpenSCAD in the appropriate manner for your operating system. See [the OpenSCAD web site](https://www.openscad.org/) for more information.

FreeCAD needs to be told where to find the OpenSCAD executable:

* Switch to the ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") via **View → Workbench → OpenSCAD**
* Open the preferences dialog **Edit → Preferences**
* Click on "OpenSCAD" on the left plane
* Click on the button labled ... in **General Settings → General OpenSCAD Settings → OpenSCAD executable** to browse the directory or enter the path (e.g. Ubuntu based Linux distributions `/usr/bin/openscad`) directly into the line input right to the button
* Close and restart FreeCAD

:   **Result:** A new OpenSCAD icon will appear on the tool bar, and in the OpenSCAD menu, in the FreeCAD OpenSCAD workbench.

Note: It is also possible to add another optional Parameter which controls the maximum sides of a polygon before it is considered a circle (fn).

Starting from 0.14 and above, FreeCAD will search for the OpenSCAD executable if the setting mentioned above is empty.

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_AddOpenSCADElement/es&oldid=1216578>"