---
title: FreeGrid StorageBox/es
---
|  |
| --- |
| FreeGrid StorageBox |
| Menu location |
| FreeeGrid → Storage box |
| Workbenches |
| [FreeGrid](/FreeGrid_Workbench "FreeGrid Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descripción

The [FreeGrid StorageBox](/FreeGrid_StorageBox "FreeGrid StorageBox") tool creates a storage box.

This tool is part of the [FreeGrid Workbench](/FreeGrid_Workbench "FreeGrid Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Uso

1. There are several ways to invoke the tool:
   * Press the ![](/images/FreeGrid_StorageBox.svg) [Storage box](/FreeGrid_StorageBox "FreeGrid StorageBox") button.
   * Select the **FreeGrid → ![](/images/FreeGrid_StorageBox.svg) Storage box** option from the menu.
2. A storage box is created with properties based on the current preferences.
3. Optionally select the object and change its properties in the [Property editor](/Property_editor "Property editor").

## Propiedades

A FreeGrid StorageBox object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Características de caja

* Datos**CajaAgarre** (`Bool`): Por defecto `True`. Agregar área de agarre/etiqueta en la parte trasera de la caja.
* Datos**CajaAgarreProfundidad** (`Length`): Por defecto `12.0 mm`. Profundidad del agarre.
* Datos**CajaFrenteAbierto** (`Bool`): Por defecto `False`. Dejar el frente de la caja abierto.
* Datos**CajaRampa** (`Bool`): Por defecto `True`. Agregar una curvatura al interior de la caja.
* Datos**SoportePiso** (`Bool`): Por defecto `True`. Agregar soporte de piso integral.

Divisiones internas

* Datos**AlturaDeDivisión** (`Percent`): Por defecto `100`. Altura de los divisores internos relativos a la caja.
* Datos**DivisionesX** (`IntegerConstraint`): Por defecto `1`. Número de divisiones a lo largo del eje X.
* Datos**DivisionesY** (`IntegerConstraint`): Por defecto `1`. Número de divisiones a lo largo del eje Y.

Soporte para imán

* Datos**ImánDiámetro** (`Length`): Por defecto `6.0 mm`. Diámetro de los imanes.
* Datos**ImánAltura** (`Length`): Por defecto `2.0 mm`. Altura de los imanes.
* Datos**OpciónImán** (`Enumeration`): Por defecto `allIntersections`. Opciones para agregar imanes.

Posición en la rejilla

* Datos**PosiciónX** (`IntegerConstraint`): Por defecto `0`. Posición del objeto en la rejilla a lo largo del eje X. Comienza en cero.
* Datos**PosiciónY** (`IntegerConstraint`): Por defecto `0`. Posición del objeto en la rejilla a lo largo del eje Y. Comienza en cero.

Tamaño

* Datos**Profundidad** (`IntegerConstraint`): Por defecto `1`. Número de unidades de 50 mm en la dirección Y del objeto.
* Datos**Altura** (`Length`): Por defecto `50.0 mm`. Altura del objeto.
* Datos**Ancho** (`IntegerConstraint`): Por defecto `1`. Número de unidades de 50 mm en la dirección X del objeto.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeGrid_StorageBox/es&oldid=1535658>"