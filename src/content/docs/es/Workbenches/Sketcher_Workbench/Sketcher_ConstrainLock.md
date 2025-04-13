---
title: Constraint Lock
---
|  |
| --- |
| Sketcher ConstrainLock |
| Ubicación en el Menú |
| Croquizador → Restricciones del Croquizador → Bloquear |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es"), [Diseño de Piezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Croquizador RestringirBloque](/Sketcher_ConstrainBlock/es "Sketcher ConstrainBlock/es") |
|  |

"Crea una restricción de bloqueo sobre el elemento seleccionado"

## Descripción

Esta restricción trata de *restringir completamente* cualquier elemento seleccionado.

The ![](/images/Sketcher_ConstrainLock.svg) [Sketcher ConstrainLock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") tool applies [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") and [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") constraints to points. If a single point is selected the constraints reference the origin of the sketch. If two or more points are selected the constraints reference the last point in the selection.

Debido a que FreeCAD aún está en desarrollo - esta herramienta presenta un comportamiento extraño cuando se intenta 'bloquear' cualquier cosa que no sea un punto. Por ejemplo (para V0.12 R4802), cuando se bloquea una circunferencia por su contorno y no por su *punto* central, aparece una restricción horizontal y una vertical en el letrero de diálogo pero no en la ventana gráfica.

## Funcionamiento

1. En primer lugar es necesario resaltar una entidad que quieras restringir. Por las razones mencionadas anteriormente es preferible sólo destacar un *punto*.  
   ![](/images/LockConstraint1.png)
2. El destacado de un elemento de dibujo se logra moviendo el ratón sobre el elemento y pulsando el botón izquierdo del ratón.
   Un elemento destacado cambiará su color a verde.  
   ![](/images/LockConstraint2.png)
3. Una vez que un elemento está destacado, pulsar con el botón izquierdo del ratón en la restricción de *bloquear* sirve para bloquear el elemento destacado en su ubicación. Esto normalmente se manifiesta como dos restricciones: Una distancia horizontal desde el origen de coordenadas del dibujo, y una restricción vertical desde el origen del sistema de coordenadas. Estas se establecen por defecto para las coordenadas actuales del punto.  
   ![](/images/LockConstraint3.png)
4. Las restricciones Vertical y Horizontal que forman el bloqueo se pueden editar haciendo doble clic en la restricción apropiada para ser editada ya sea en el dibujo o en la pestaña de restricciones del panel. Esto abrirá un letrero de diálogo para editar la restricción. Pulsar en la componente horizontal de la restricción produce:  
   ![](/images/LockConstraint4.png).
5. Introduce el valor deseado en el letrero de diálogo y pulsa OK.  
   ![](/images/LockConstraint5.png)
6. El nuevo valor de la restricción se aplica al dibujo.  
   ![](/images/LockConstraint6.png)
7. La restricción vertical se puede editar de forma similar para restringir el punto a la ubicación deseada.  
   ![](/images/LockConstraint7.png)

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/Sketcher_ConstrainLock.svg) [Constrain lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the context menu.
   * Use the keyboard shortcut: K then L.
3. The cursor changes to a cross with the tool icon.
4. Select a single point.
5. Two constraints are added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select one or more points.
2. Invoke the tool as explained above.
3. Depending on the selection two or more constraints are added.

## Notes

* There is no automatic prompt to edit the constraint values. If required values can be [edited manually](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainLock/es&oldid=1413820>"