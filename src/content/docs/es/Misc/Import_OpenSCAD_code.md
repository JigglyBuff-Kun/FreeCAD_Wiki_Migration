---
title: Importar código OpenSCAD
---
|  |
| --- |
| Tutorial |
| Tema |
| Importar código OpenSCAD |
| Nivel |
| Principiante |
| Tiempo para completar |
| 30 minutos |
| Autores |
| r-frank |
| Versión de FreeCAD |
| 0.16.6704 |
| Archivos de ejemplos |
|  |
| Ver también |
| *None* |
|  |

## Introducción

OpenSCAD, al igual que FreeCAD, es un programa de CAD 3D de código abierto. Pero mientras FreeCAD utiliza un enfoque visual, OpenSCAD utiliza una interfaz de programación para realizar operaciones 3D. El banco de trabajo de OpenSCAD puede utilizarse para importar el código de objetos de OpenSCAD y para tener acceso a algunas de las operaciones de malla posibles con OpenSCAD.

## Instalación de OpenSCAD

* Los usuarios de Linux pueden instalar desde los repositorios de la distribución correspondiente, como Debian, openSUSE, Mint, Unbuntu, etc. o desde la página web [OpenSCAD página web](http://www.openscad.org/).
* Los usuarios de Mac pueden descargar los binarios desde [OpenSCAD página web](http://www.openscad.org/).
* Los usuarios de Windows pueden descargar el programa desde [OpenSCAD página web](http://www.openscad.org/). Dado que FreeCAD sólo necesita el ejecutable de OpenSCAD, los usuarios de Windows pueden instalar la versión portátil si lo desean.

## Configurar el ambiente de trabajo de OpenSCAD en FreeCAD

* Abre FreeCAD.
* Cambia a [OpenSCAD Ambiente de trabajo](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es").
* Elige Edición → Preferencias → OpenSCAD en el menú superior.
  + Apunta FreeCAD al ejecutable de OpenSCAD (sección: Ajustes generales de OpenSCAD).
  + Todos los demás valores de la página de configuración pueden dejarse por defecto.

## El modelo de muestra

Aquí usaremos el archivo example005.scad de los (antiguos) ejemplos de OpenSCAD, pero siéntase libre de usar cualquier archivo scad de su agrado.

![](/images/TutorialOpenSCAD_SampleFile.jpg)

## Importar el modelo en FreeCAD

* En FreeCAD sólo tienes que elegir  Archivo → Abrir y elige el archivo .scad que quieras importar.
* No es importante qué ambiente de trabajo está activado, el propio ambiente de trabajo de OpenSCAD sólo es necesario cuando se aplican características especiales a su modelo.
* FreeCAD importará el archivo OpenSCAD y construirá un árbol con primitivas y operaciones booleanas
* Tutorial terminado.

![](/images/TutorialOpenSCAD_ImportFile.jpg)

## Relacionados

* [FreeCAD Cómo Importar Exportar](/index.php?title=FreeCAD_Howto_Import_Export/es&action=edit&redlink=1 "FreeCAD Howto Import Export/es (page does not exist)")
* [Preferencias de importación y exportación](/Import_Export_Preferences/es "Import Export Preferences/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_OpenSCAD_code/es&oldid=1553106>"