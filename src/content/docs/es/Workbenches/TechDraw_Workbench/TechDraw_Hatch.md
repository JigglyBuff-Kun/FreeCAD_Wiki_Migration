---
title: DibujoTécnico Achurado
---
|  |
| --- |
| DibujoTécnico Achurado |
| Ubicación en el Menú |
| DibujoTécnico → Achurar un plano usando un archivo de imagen |
| Entornos de trabajo |
| [DibujoTécnico](/TechDraw_Workbench/es "TechDraw Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [DibujoTécnico Aplicar la achurado geométrica a la plano](/index.php?title=TechDraw_GeometricHatch/es&action=edit&redlink=1 "TechDraw GeometricHatch/es (page does not exist)"), [DibujoTécnico Achurado](/index.php?title=TechDraw_Hatching/es&action=edit&redlink=1 "TechDraw Hatching/es (page does not exist)") |
|  |

## Descripción

La herramienta Achurado rellena una región cerrada en una Vista con un patrón de achurado, que pueden ser archivos [SVG](/SVG/es "SVG/es") o [bitmap](/index.php?title=Bitmap/es&action=edit&redlink=1 "Bitmap/es (page does not exist)"). Por el contrario el ![](/images/TechDraw_GeometricHatch.svg) [Achurado geométrico](/index.php?title=TechDraw_GeometricHatch/es&action=edit&redlink=1 "TechDraw GeometricHatch/es (page does not exist)") utiliza un archivo de patrones PAT específico, vea [Achurado](/index.php?title=TechDraw_Hatching/es&action=edit&redlink=1 "TechDraw Hatching/es (page does not exist)") para más detalles.

![](/images/TechDraw_Hatch_example.png)

SVG achurado patrón en una cara

## Utilización

1. Seleccione una región cerrada en una Vista.
2. Pulse el ![](/images/TechDraw_Hatch.svg) Achurar un plano usando un archivo de imagen
3. Se abrirá un diálogo en el que podrá seleccionar el archivo de patrón, la escala y el color.

## Notas

* For a solid color fill select solid.svg as the **Pattern File**.
* Hatching objects are vulnerable to the "[topological naming problem](/Topological_naming_problem "Topological naming problem")". See [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension") for more information. It is recommended that hatching be one of the last steps in your drawing process.
* Sample [SVG](/SVG "SVG") patterns are available locally in:

:   ```
    $INSTALL_DIR/data/Mod/TechDraw/Patterns

    ```
:   Where `$INSTALL_DIR` is the directory where FreeCAD was installed, for example:
:   ```
    /usr/share/freecad/data/Mod/TechDraw/Patterns

    ```

y también en [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns).

## Propiedades

* Datos**Source**: The View and Face to receive the hatch pattern.
* Datos**Hatch Pattern**: Full path and filename to an SVG pattern file.
* Vista**Hatch Color**: Hatch pattern will be displayed in this color.
* Vista**Hatch Scale**: Hatch pattern size modifier.

## Guión

*Ver también:* [DibujoTécnico API](/index.php?title=TechDraw_API/es&action=edit&redlink=1 "TechDraw API/es (page does not exist)") y [FreeCAD Fundamentos de Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

La herramienta Achurado se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de [Python](/Python/es "Python/es") utilizando las siguientes funciones:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawHatch", "Hatch")
hatch.Source = (view1, ["Face0"])
hatch.HatchPattern = hatchFileSpec
page.addView(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatch/es&oldid=1486085>"