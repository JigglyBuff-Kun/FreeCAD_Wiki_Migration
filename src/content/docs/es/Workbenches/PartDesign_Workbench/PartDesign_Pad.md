---
title: DiseñoPieza Pastilla
---
|  |
| --- |
| DiseñoPieza Pastilla |
| Ubicación en el Menú |
| DiseñoPieza → Crear una característica aditiva → Pastilla |
| Entornos de trabajo |
| [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [DiseñoPiezas Cajera](/PartDesign_Pocket/es "PartDesign Pocket/es") |
|  |

## Descripción

La ![](/images/PartDesign_Pad.svg) DiseñoPieza Pastilla herramienta extrae un boceto en un sólido en una dirección normal al plano del boceto. A partir de version 0.17 y superiores las caras en el sólido también pueden ser utilizadas.

![](/images/PartDesign_Pad_example.svg)

"Boceto (A) mostrado a la izquierda; resultado final después de la operación de la pastilla (B) a la derecha".

## Utilización

1. Seleccione el boceto que se va acolchada. **Nota:** A partir de version 0.17 y superiores se puede utilizar alternativamente una cara del sólido existente.
2. Pulse el ![](/images/PartDesign_Pad.svg) **Pastilla**.
3. Establezca los parámetros del Pastilla, vea las [Opciones](#Opciones) más abajo.
4. Haga clic en OK.

## Opciones

Al crear un pastilla, la vista Combo cambia automáticamente al panel Tareas, mostrando el diálogo **Parámetros del pastilla**.

![](/images/Pad_parameters_cropped_es.png)

### Tipo

El tipo ofrece cinco formas diferentes de especificar la longitud a la que se extruirá la pastilla.

### Dimension

Introduce un valor numérico para la longitud del saliente. La dirección por defecto para la extrusión es saliendo del soporte, pero se puede cambiar seleccionando la opción **Invertir**. Las extrusiones se realizan normales [normales](http://en.wikipedia.org/wiki/Surface_normal) al plano de definición del croquis.

Con la opción **Simétrico al plano** el saliente se extenderá la mitad de la dimensión indicada hacia cada lado del plano de croquis.

No es posible indicar dimensiones negativas. Utiliza en cambio la opción **invertir**.

#### Hasta el último

La pastilla se extruirá hasta la última cara del soporte en la dirección de extrusión. Si no hay soporte, aparecerá un mensaje de error.

#### Hasta el primero

La pastilla se extruirá hasta la primera cara del soporte en la dirección de extrusión. Si no existe soporte, se mostrará un mensaje de error.

#### Hasta la cara

La pastilla se extruirá hasta una cara del soporte que puede seleccionarse designándola. Si no existe soporte, no se aceptará ninguna selección.

#### Dos dimensiones

Permite introducir una segunda longitud en la cual el saliente debería extenderse en la dirección opuesta (dentro del soporte). De nuevo se puede cambiar seleccionado la opción **invertir**.

#### Up to shape

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The pad will extend up to the selected shape. Optionally press the Select shape button and select a shape. Leave the Select all faces checkbox enabled or disable it, press the Select faces button and select the faces up to which the pad should be created.

### Relleno a la cara

Relleno desde la cara en la que terminará la pastilla. Esta opción sólo está disponible cuando **Tipo** es **Al último**, **Al primero** o **Hasta la cara**.

### Longitud

Define la longitud de la pastilla. Se pueden utilizar múltiples unidades independientemente de las preferencias de unidades del usuario (m, cm, mm, nm, ft o ', in o ").

### 2nd length

Defines the length of the pad in the opposite direction. This option is only available if **Type** is **Two dimensions**.

### Simétrico al plano

Marque la casilla para extender la mitad de la longitud dada a cada lado del plano de croquis.

### Invertido

Invierte la dirección de la pastilla.

### Direction

#### Direction/edge

You can select the direction of the extrusion:

* **Sketch normal** or **Face normal:** The sketch or face is extruded in the direction of its normal. If you have selected several sketches or faces to be extruded, the normal of the first one will be used.
* **Select reference...:** The sketch or face is extruded in the direction of a straight edge or a [datum line](/PartDesign_Line "PartDesign Line") selected from the Body.
* **Custom direction:** The sketch or face is extruded in the direction of the specified vector.

### Usar dirección personalizada

[introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")
Si está marcada, la dirección de la pastilla no será el vector normal del croquis sino el vector dado. Sin embargo, la longitud de la pastilla se establece de acuerdo con la dirección del vector normal.

### Longitud a lo largo de la normal del boceto

Si está marcada, la longitud de la pastilla se mide a lo largo de la normal del boceto, de lo contrario a lo largo de la dirección personalizada. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

### Taper angle

Tapers the pad in the extrusion direction by the given angle. A positive angle means the outer pad border gets wider. Note that inner structures receive the opposite taper angle. This is done to facilitate the design of molds and molded parts. This option is only available if **Type** is **Dimension** or **Two dimensions**.

### 2nd taper angle

Tapers the pad in the opposite extrusion direction by the given angle. See **Taper angle**. This option is only available if **Type** is **Two dimensions**.

## Propiedades

### Data

Pad

* Datos**Type** (`Enumeration`): Defines how the pad will be extruded, see [Options](#Options).
* Datos**Length** (`Length`): Defines the length of the pad, see [Options](#Options).
* Datos**Length2** (`Length`): Second pad length in case the Datos**Type** is **TwoLengths**, see [Options](#Options).
* Datos**Use Custom Vector** (`Bool`): If checked, the pad direction will not be the normal vector of the sketch but the given vector, see [Options](#Options).
* Datos**Direction** (`Vector`): Vector of the pad direction if Datos**Use Custom Vector** is used.
* Datos**Reference Axis** (`LinkSub`)
* Datos**Along Sketch Normal** (`Bool`): If *true*, the pad length is measured along the sketch normal. Otherwise and if Datos**Use Custom Vector** is used, it is measured along the custom direction.
* Datos**Up To Face** (`LinkSub`): A face the pad will extrude up to, see [Options](#Options).
* Datos**Offset** (`Length`): Offset from face in which the pad will end. This is only taken into account if the Datos**Type** option **UpToLast**, **UpToFirst** or **UpToFace** is used.
* Datos**Taper Angle** (`Angle`)
* Datos**Taper Angle2** (`Angle`)

Part Design

* Datos**Refine** (`Bool`): True or false. Cleans up residual edges left after the operation. This property is initially set according to the user's settings (found in **Preferences → Part Design → General → Model settings**).

Sketch Based

* Datos**Profile** (`LinkSub`)
* Datos**Midplane** (`Bool`)
* Datos**Reversed** (`Bool`)
* Datos**Allow Multi Face** (`Bool`)

## Limitaciones

* Al igual que todas las características de Diseño piezas, Pastilla crea un sólido, por lo tanto, el boceto debe incluir un perfil cerrado o fallará con un error "No se pudo validar la cara rota". Puede haber múltiples perfiles cerrados dentro de uno más grande, siempre que ninguno se cruce entre sí (por ejemplo, un rectángulo con dos círculos en su interior).
* El algoritmo utilizado para  *'Al primero'*  y  *'Al último'*  es:
  + Crea una línea a través del centro de gravedad del boceto
  + Encuentra todas las caras del soporte cortadas por esta línea
  + Elija la cara donde el punto de intersección está más cerca / más alejado del boceto

:   Esto significa que la cara que se encuentra puede no ser siempre la que esperaba. Si se encuentra con este problema, utilice el tipo  *'Up to face'*  en su lugar y elija la cara que desee.
:   Para el caso muy especial de extrusión a una superficie cóncava, donde el boceto es más grande que esta superficie, la extrusión fallará. Este es un error no resuelto.

* version 0.16 y abajo No hay limpieza automática, por ejemplo, de superficies planas adyacentes en una sola superficie. Puedes arreglar esto manualmente en el ![](/images/Workbench_Part.svg) [Ambiente de trabajo Piezas](/Part_Workbench/es "Part Workbench/es") con ![](/images/Part_RefineShape.svg) [Piezas AfinarForma](/index.php?title=Part_RefineShape/es&action=edit&redlink=1 "Part RefineShape/es (page does not exist)") (que crea un sólido no paramétrico no vinculado) o con el ![](/images/OpenSCAD_RefineShapeFeature.svg) [OpenSCAD FunciónRefinarForma](/OpenSCAD_RefineShapeFeature/es "OpenSCAD RefineShapeFeature/es") del ![](/images/Workbench_OpenSCAD.svg) [Ambiente de Trabajo de OpenSCAD](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es") que crea una característica paramétrica.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pad/es&oldid=1485417>"