---
title: PartDesign Barrido sustractivo
---
|  |
| --- |
| PartDesign Barrido sustractivo |
| Ubicación en el Menú |
| Part Design → Create a substractive feature → Tubo sustractivo |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [PartDesign Barrido aditivo](/PartDesign_AdditivePipe/es "PartDesign AdditivePipe/es"), [PartDesign Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft") |
|  |

## Descripción

El **Barrido sustractivo** crea un sólido sustractivo en el Body (cuerpo) activo, realizando un barrido de uno o más bocetos (también llamados secciones) a lo largo de una trayectoria abierta o cerrada. Esta forma es entonces sustraída del sólido existente. El barrido sustractivo se usa a menudo en conexión con [Part Hélice](/Part_Helix/es "Part Helix/es") y [PartDesign ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") para crear roscas; ver el [Thread for Screw Tutorial](/Thread_for_Screw_Tutorial "Thread for Screw Tutorial") para más detalles.

## Uso

1. Presionar el botón ![](/images/PartDesign_SubtractivePipe.svg) **Barrido sustractivo** .
2. En la ventana de diálogo **Seleccionar una característica** , seleccionar un boceto para ser usado como primera sección y pulsar OK.También se puede seleccionar pinchando con doble clic con el ratón.
   * También puede seleccionarse un único boceto antes de pulsar el botón de Barrido sustractivo.
3. En los **Parámetros del barrido** en **Perfil**, presionar el botón Objeto .
4. Seleccionar el boceto que se tiene que usar como trayectoria en la vista 3D. Pulsando con doble clic sobre una arista, se seleccionan simultáneamente todas las aristas consecutivas.
   * También se pueden seleccionar las aristas de una en una pulsando Añadir arista y seleccionando las aristas deseadas, así como eliminar aristas pulsando Quitar arista en la vista 3D
5. Para usar más de una sección, en el apartado **Transformación de la sección** seleccionar el Modo de transformación como *Multisección*; pulsar Añadir sección y seleccionar un boceto en la vista 3D. Repetir para cada sección adicional.
6. Seleccionar las opciones necesarias y confirmar con OK.

## Opciones

**Section Transformation**:

* Select **Constant** to use a single profile
* Select **Multisection** to use multiple profiles

**Section Orientation**:

* Standard
  + This keeps the cross section shape perpendicular to the path. This is the default setting.
* Fixed
  + Orientation set by first profile and constant throughout. This deactivates the alignment to the path normal vector. That means that the cross-section shape will not rotate with the path. Sweep along a circle to see the effect.
* Frenet
  + Create minimum possible twisting of profile. For more info, see [Frenet-Serret Formulas](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas)
* Auxiliary
  + Specify secondary path to guide pipe.
  + For each point *P* along the sweep path, there will be a corresponding point *Q* on the auxiliary path.
  + As the profile is swept, it will be transformed such that the *PQ* line is the normal of the sweep path.
  + If *Curvelinear equivalence* is set, then the *Q* points are scaled proportionally along the sweep path, regardless of is length.
* Binormal
  + Specify binormal vector in X, Y and Z

**Corner Transition**

* Transformed
* Right
* Rounded

## Propiedades

* DATOS**Label**: Nombre dado a la operación, que puede ser cambiado si es conveniente.
* DATOS**Refine**: True o false. Si se selecciona true, el sólido es limpiado de aristas residuales dejadas por las operaciones. Ver [Part RefineShape](/Part_RefineShape "Part RefineShape") para más detalles.
* DATOS**Sections**: Para seleccionar las secciones a usar.
* Datos**Spine Tangent**: True o false (por defecto). True extiende la trayectoria para incluir las aristas tangentes.
* DATOS**Auxiliary Spine Tangent**: True o false (por defecto). True extiende la trayectoria auxiliar para incluir las aristas tangentes.
* DATOS**Auxiliary Curvelinear**: True o false (por defecto). True calcula la normal entre puntos equidistantes de las dos trayectorias.
* DATOS**Mode**: Modo de perfil. Ver [Opciones](#Options).
* DATOS**Binormal**: Vector binormal para el correspondiente modo de orientación.
* DATOS**Transition**: Modo de transición. Las opciones son *Transformed*, *Right Corner* o *Round Corner*. *(Transformado, Esquinas rectas o Esquinas redondeadas respectivamente)*
* DATOS**Transformation**: *Constant* usa una única sección. *Multisection* usa dos o más secciones. *Linear*, *S-shape* and *Interpolation* no funcionan actualmente.

## Notes

* Los bocetos usados como secciones deben formar perfiles cerrados.
* No es posible usar un vértice como sección.
* Una sección no puede estar situada sobre el mismo plano que la que la precede.
* Para un mejor control de la forma del barrido, es recomendable que todas las secciones tengan el mismo número de segmentos. Por ejemplo, para un barrido entre un rectángulo y un círculo, el círculo debe ser dividido en 4 arcos conectados.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePipe/es&oldid=1308175>"