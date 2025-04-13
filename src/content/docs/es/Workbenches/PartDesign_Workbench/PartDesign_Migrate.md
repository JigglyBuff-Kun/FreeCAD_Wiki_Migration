---
title: DiseñoPiezas Migración
---
:::caution
This tool is obsolete, it is not available in1.0 and above.
:::

|  |
| --- |
| DiseñoPiezas Migración |
| Ubicación en el Menú |
| Diseño Piezas → Migración |
| Entornos de trabajo |
| [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| *Ninguno* |
|  |

## Descripción

El ambiente de trabajo de DiseñoPiezas en FreeCAD v0.17 introduce nuevas herramientas y elementos que no son reconocidos por las versiones anteriores de FreeCAD (0.16 y anteriores). Los documentos de FreeCAD creados en versiones anteriores pueden seguir siendo abiertos y editados. Para beneficiarse de las nuevas características, deben ser migrados a través del menú DiseñoPiezas → Migrar.

[introducido en la versión 0.17](/Release_notes_0.17/es "Release notes 0.17/es")

## Utilización

1. Abrir un documento de FreeCAD que fue creado con FreeCAD version 0.16 y abajo
2. Cambiar al ![](/images/Workbench_PartDesign.svg) [DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es") ambiente de trabajo.
3. Ve al menú **Diseño Pieza** → **Migrar**.
4. Si la migración funciona, un ![](/images/Std_Part.svg) [Contenedor de piezas](/Std_Part/es "Std Part/es") se creará que contendrá uno o más ![](/images/PartDesign_Body.svg) [Cuerpos](/PartDesign_Body/es "PartDesign Body/es"), cada uno de los cuales albergará una cadena de características.

## Limitaciones

* Antes de iniciar el proceso de migración, compruebe si el modelo se construyó con las opciones de refinamiento automático activadas (en **Edición → Preferencias → Diseño Piezas → General**), y configure sus preferencias en consecuencia. Esto puede determinarse fácilmente alternando sucesivamente la visibilidad de las características en el árbol del modelo. Si no quedan aristas residuales entre características como Almohadillas y Bolsillos, las opciones de refinamiento automático se desactivaron.
* Si un documento que se va a migrar sólo contiene croquis y operaciones de DiseñoPieza , es probable que el proceso de migración tenga éxito. Algunas operaciones, como los chaflanes y los filetes, pueden requerir una reconstrucción.
* Si el documento a migrar tiene un flujo de trabajo mixto Pieza/Diseño de Pieza/Borrador, lo más probable es que la conversión falle o, en el mejor de los casos, produzca resultados inesperados, y sea necesario migrarlo manualmente.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Migrate/es&oldid=1458127>"