---
title: Draft Heal/es
---
|  |
| --- |
| Draft Heal |
| Ubicación en el Menú |
| Draft → Utilities → Heal |
| Entornos de trabajo |
| [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench "Arch Workbench") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

Debido a la rápida evolución de FreeCAD, algunas definiciones de objetos pueden cambiar con el tiempo y entre versiones, lo que hace que algunos objetos de borrador encontrados en archivos anteriores no se carguen correctamente o contengan errores cuando se abren con una versión más reciente de FreeCAD. Este comando intenta reparar esos objetos defectuosos recreando uno nuevo desde cero, y luego copiando el contenido de las propiedades del anterior al nuevo. Puede ejecutarse con los objetos seleccionados, en cuyo caso solo mirará los objetos seleccionados o sin ningún objeto seleccionado. Todos los objetos del documento actual serán escaneados en busca de errores. Si no se encuentra ningún error, este comando no hará nada.

## Usage

1. Optionally select one or more problematic objects. If no objects are selected the entire document will be processed.
2. Select the **Utilities → ![](/images/Draft_Heal.svg) Heal** option from the menu.
3. If no errors are found the command will do nothing.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Heal/es&oldid=1338316>"