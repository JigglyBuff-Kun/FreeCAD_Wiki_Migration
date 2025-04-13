---
title: Hoja de cálculo EstablecerAlias
---
|  |
| --- |
| Spreadsheet SetAlias |
| Menu location |
| - |
| Workbenches |
| [Hoja de cálculo](/Spreadsheet_Workbench/es "Spreadsheet Workbench/es") |
| Default shortcut |
| Ctrl+Shift+A |
| Introduced in version |
| 0.17 |
| See also |
| *None* |
|  |

## Descripción

La herramienta ![](/images/Spreadsheet_SetAlias.svg) Hoja de cálculo EstablecerAlias abre un cuadro de diálogo para configurar un alias para una celda. En lugar de utilizar el nombre de celda exacto como A2, B3 o C4, se puede utilizar un nombre personalizado.

## Uso

1. Asegúrese de que haya una ![](/images/Spreadsheet_CreateSheet.svg) [hoja de cálculo](/Spreadsheet_CreateSheet/es "Spreadsheet CreateSheet/es") activa abierta para que el botón esté habilitado.
2. Seleccione una celda.
3. Presione el botón ![](/images/Spreadsheet_SetAlias.svg) Hoja de cálculo EstablecerAlias.
4. Ingrese un alias:
   * Solo caracteres alfanuméricos y guiones bajos (`A` a `Z`, `a` a `z`, `0` a `9` y `_`) están permitidos.
   * El primer carácter debe ser una letra.
   * No se permite el uso de 1 o 2 letras mayúsculas seguidas de 1 a 5 números, por ejemplo `AB123`, ya que se considera una dirección de celda.
   * No se permiten secuencias de caracteres que sean unidades. Por ejemplo, `W` es un alias no válido ya que es la unidad de [Watt](https://en.wikipedia.org/wiki/Watt). Dado que FreeCAD admite muchas unidades, es mejor evitar alias cortos. Consulte [Expresiones](/Expressions#Units "Expressions").
   * El uso de las constantes matemáticas `pi` y `e` como alias generará errores y debe evitarse.
   * No utilice espacios en los alias, ya que también provocarán errores.

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_SetAlias/es&oldid=1506902>"