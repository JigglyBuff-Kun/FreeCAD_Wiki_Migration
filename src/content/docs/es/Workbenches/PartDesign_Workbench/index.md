---
title: Ambiente de trabajo DiseñoPiezas
---

![](/images/Workbench_PartDesign.svg)

El icono del Ambiente de trabajo PartDesign

## Introducción

El ![](/images/Workbench_PartDesign.svg) Ambiente de trabajo de diseño de piezas proporciona herramientas avanzadas para modelar piezas sólidas complejas. Se centra principalmente en la creación de piezas mecánicas que pueden ser fabricadas y ensambladas en un producto terminado. Sin embargo, los sólidos creados pueden ser utilizados en general para cualquier otro propósito como [diseño arquitectónico](/Arch_Workbench/es "Arch Workbench/es"), [análisis de elementos finitos](/FEM_Workbench/es "FEM Workbench/es"), o [mecanizado e impresión 3D](/Path_Workbench/es "Path Workbench/es").

Mientras que el ![](/images/Workbench_Part.svg) [Ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es") se basa en una metodología de [geometría sólida constructiva](/Constructive_solid_geometry/es "Constructive solid geometry/es") (CSG) para la construcción de formas, el Ambiente de trabajo DisegnoPiezas utiliza una metodología paramétrica, de edición de características, lo que significa que un sólido básico se transforma secuencialmente añadiendo características encima hasta obtener la forma final. Consulte la página [edición de características](/Feature_editing/es "Feature editing/es") para obtener una explicación más completa de este proceso y, a continuación, consulte [Creación de una pieza sencilla con DisegnoPiezas](/Creating_a_simple_part_with_PartDesign/es "Creating a simple part with PartDesign/es") para empezar a crear sólidos.

See the [feature editing](/Feature_editing "Feature editing") page for a more complete explanation of this process, and then see [Creating a simple component with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") to get started with creating solids.

Una discusión más detallada sobre el ambiente de trabajo Piezas frente al ambiente de trabajo de DiseñoPiezas se puede encontrar aquí: [Piezas y DiseñoPiezas](/Part_and_PartDesign/es "Part and PartDesign/es").

![](/images/PartDesign_Workbench_Example.jpg)

## Herramientas

Las herramientas de Diseño de Piezas están ubicadas en el menú **Diseño de Piezas** y la barra de herramientas de Diseño de Piezas que aparece cuando se carga el Ambiente de Trabajo de Diseño de Piezas.

### DiseñoPiezas herramientas de ayuda

- ![](/images/PartDesign_Body.svg) [Crear Cuerpo](/PartDesign_Body/es "PartDesign Body/es"): Crea un [cuerpo](/index.php?title=Body/es&action=edit&redlink=1 "Body/es (page does not exist)") objeto en el documento activo y lo activa.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create Sketch:

- ![](/images/PartDesign_NewSketch.svg) [Crear croquis](/PartDesign_NewSketch/es "PartDesign NewSketch/es"): crea un nuevo croquis on la cara o plano seleccionados. Si no se selecciona una cara o un plano, el usuario deberá seleccionar un plano del dialogo de tareas. El interfaz alterna al [Ambiente de Trabajo de croquis](/Sketcher_Workbench/es "Sketcher Workbench/es") mientras el croquis esté en modo edición.

- ![](/images/Sketcher_MapSketch.svg) [Fijar croquis a cara](/Sketcher_MapSketch/es "Sketcher MapSketch/es"): Fija el croquis a un plano previamente selecionado o a una cara del cuerpo activo.

- ![](/images/Sketcher_EditSketch.svg) [Editar Croquis](/Sketcher_EditSketch/es "Sketcher EditSketch/es"): Editar el croquis seleccionado.

- ![](/images/Sketcher_ValidateSketch.svg) [Validate sketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch"): verifies the tolerance of different points and adjusts them.

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/PartDesign_ShapeBinder.svg) [Create a shape binder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"): creates a shape binder referencing geometry from a single parent object.

- ![](/images/PartDesign_SubShapeBinder.svg) [Crear un aglutinante de forma de subobjeto](/index.php?title=PartDesign_SubShapeBinder/es&action=edit&redlink=1 "PartDesign SubShapeBinder/es (page does not exist)"): crea un aglutinante de forma a un subelemento, como una arista o una cara de otro cuerpo, conservando la posición relativa de ese elemento. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/PartDesign_Clone.svg) [Crear un clón](/PartDesign_Clone/es "PartDesign Clone/es"): crea un clon del cuerpo seleccionado.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a datum (1.0 and below):

- ![](/images/PartDesign_Plane.svg) [Crear un plano de referencia](/PartDesign_Plane/es "PartDesign Plane/es"): crea un plano de referencia en el cuerpo activo.

- ![](/images/PartDesign_Line.svg) [Crear una línea de referencia](/PartDesign_Line/es "PartDesign Line/es"): crea una línea de referencia en el cuerpo activo.

- ![](/images/PartDesign_Point.svg) [Crear un punto de referencia](/PartDesign_Point/es "PartDesign Point/es"): crea un punto de referencia en el cuerpo activo.

- ![](/images/PartDesign_CoordinateSystem.svg) [Crear un sistema de coordenadas local](/index.php?title=PartDesign_CoordinateSystem/es&action=edit&redlink=1 "PartDesign CoordinateSystem/es (page does not exist)"): crea un sistema de coordenadas local unido a la geometría datum en el cuerpo activo.

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### Herramientas de modelado

#### Herramientas aditivas

Son herramientas para crear operaciones base o para añadir material a un cuerpo sólido preexistente.

- ![](/images/PartDesign_Pad.svg) [Pastilla](/PartDesign_Pad/es "PartDesign Pad/es"): extruye un sólido a partir del croquis seleccionado.

- ![](/images/PartDesign_Revolution.svg) [Revolución](/PartDesign_Revolution/es "PartDesign Revolution/es"): crea un sólido de revolución alrededor de un eje a partir de un croquis. El croquis debe contener un perfil cerrado.

- ![](/images/PartDesign_AdditiveLoft.svg) [Solevación aditiva](/PartDesign_AdditiveLoft/es "PartDesign AdditiveLoft/es"): crea un sólido solevando un perfil y adaptándolo a al menos a una segunda sección definida por un segundo perfil.

- ![](/images/PartDesign_AdditivePipe.svg) [Barrido aditivo](/PartDesign_AdditivePipe/es "PartDesign AdditivePipe/es"): crea un sólido barriendo uno o varios croquis a lo largo de una trayectoria abierta o cerrada.

- ![](/images/PartDesign_AdditiveHelix.svg) [Hélice aditiva](/PartDesign_AdditiveHelix/es "PartDesign AdditiveHelix/es"): crea un sólido barriendo un boceto a lo largo de una hélice. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create an additive primitive:

- ![](/images/PartDesign_Additive_Box.svg) [Cubo aditivo](/PartDesign_AdditiveBox/es "PartDesign AdditiveBox/es"): crea un cubo aditivo.

- ![](/images/PartDesign_AdditiveCylinder.svg) [Cilindro aditivo](/PartDesign_AdditiveCylinder/es "PartDesign AdditiveCylinder/es"): crea un cilindro aditivo.

- ![](/images/PartDesign_AdditiveSphere.svg) [Esfera aditiva](/PartDesign_AdditiveSphere/es "PartDesign AdditiveSphere/es"): crea una esfera aditiva.

- ![](/images/PartDesign_Additive_Cone.svg) [Cono aditivo](/PartDesign_AdditiveCone/es "PartDesign AdditiveCone/es"): crea un cono aditivo.

- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Elipsoide aditivo](/PartDesign_AdditiveEllipsoid/es "PartDesign AdditiveEllipsoid/es"): crea un elipsoide aditivo.

- ![](/images/PartDesign_AdditiveTorus.svg) [Toro aditivo](/PartDesign_AdditiveTorus/es "PartDesign AdditiveTorus/es"): crea un toro aditivo.

- ![](/images/PartDesign_AdditivePrism.svg) [Prisma aditivo](/PartDesign_AdditivePrism/es "PartDesign AdditivePrism/es"): crea un prisma aditivo.

- ![](/images/PartDesign_AdditiveWedge.svg) [Cuña aditiva](/PartDesign_AdditiveWedge/es "PartDesign AdditiveWedge/es"): crea una cuña aditiva.

#### Herramientas sustractivas

Son herramientas para sustraer material de un cuerpo existente.

- ![](/images/PartDesign_Pocket.svg) [Cajera](/PartDesign_Pocket/es "PartDesign Pocket/es"): crea un cajera a partir de un croquis seleccionado.

- ![](/images/PartDesign_Hole.svg) [Agujero](/PartDesign_Hole/es "PartDesign Hole/es"): crea un agujero a partir de un croquis seleccionado. Este croquis puede contener varios círculos.

- ![](/images/PartDesign_Groove.svg) [Ranura](/PartDesign_Groove/es "PartDesign Groove/es"): crea una ranura de revolución alrededor de un eje.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Solevación sustractiva](/index.php?title=PartDesign_SubtractiveLoft/es&action=edit&redlink=1 "PartDesign SubtractiveLoft/es (page does not exist)"): crea un sólido solevando un perfil y adaptándolo a al menos a una segunda sección definida por un segundo perfil y sustrae dicho sólido del cuerpo activo.

- ![](/images/PartDesign_SubtractivePipe.svg) [Barrido sustractivo](/PartDesign_SubtractivePipe/es "PartDesign SubtractivePipe/es"): crea un sólido barriendo uno o más croquis a lo largo de una trayectoria abierta o cerrada y sustrayendo el sólido resultante del cuerpo activo.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Hélice sustractiva](/index.php?title=PartDesign_SubtractiveHelix/es&action=edit&redlink=1 "PartDesign SubtractiveHelix/es (page does not exist)"): crea una forma sólida barriendo un boceto a lo largo de una hélice y la sustrae del cuerpo activo. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a subtractive primitive:

- ![](/images/PartDesign_SubtractiveBox.svg) [Cubo sustractivo](/PartDesign_SubtractiveBox/es "PartDesign SubtractiveBox/es"): añade un cubo sustractivo al cuerpo actual.

- ![](/images/PartDesign_SubtractiveCylinder.svg) [Cilindro sustractivo](/PartDesign_SubtractiveCylinder/es "PartDesign SubtractiveCylinder/es"): añade un cilindro sustractivo al cuerpo activo.

- ![](/images/PartDesign_SubtractiveSphere.svg) [Esfera sustractiva](/PartDesign_SubtractiveSphere/es "PartDesign SubtractiveSphere/es"): añade una esfera sustractiva al cuerpo activo.

- ![](/images/PartDesign_SubtractiveCone.svg) [Cono sustractivo](/PartDesign_SubtractiveCone/es "PartDesign SubtractiveCone/es"): añade un cono sustractivo al cuerpo actual.

- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Elipsoide sustractivo](/PartDesign_SubtractiveEllipsoid/es "PartDesign SubtractiveEllipsoid/es"): añade un elipsoide sustractivo al cuerpo activo.

- ![](/images/PartDesign_SubtractiveTorus.svg) [Toro sustractivo](/PartDesign_SubtractiveTorus/es "PartDesign SubtractiveTorus/es"): añade un toro sustractivo al cuerpo activo.

- ![](/images/PartDesign_SubtractivePrism.svg) [Prisma sustractivo](/PartDesign_SubtractivePrism/es "PartDesign SubtractivePrism/es"): añade un prisma sustractivo al cuerpo activo.

- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Cuña sustractiva](/PartDesign_SubtractiveWedge/es "PartDesign SubtractiveWedge/es"): añade una cuña sustractiva al cuerpo activo.

#### Operaciones booleanas

- ![](/images/PartDesign_Boolean.svg) [Operaciones booleanas](/index.php?title=PartDesign_Boolean/es&action=edit&redlink=1 "PartDesign Boolean/es (page does not exist)"): importa uno o más cuerpos o clones (de diseño de piezas) en el cuerpo activo y ejecuta una operación booleana.

#### Herramientas de alteración

Estas operaciones alteran las caras o aristas seleccionadas.

- ![](/images/PartDesign_Fillet.svg) [Redondeado](/PartDesign_Fillet/es "PartDesign Fillet/es"): Altera una arista del cuerpo activo redondeándola.

- ![](/images/PartDesign_Chamfer.svg) [Chaflán](/PartDesign_Chamfer/es "PartDesign Chamfer/es"): Altera una arista del cuerpo activo creando un chaflán.

- ![](/images/PartDesign_Draft.svg) [Corte inclinado](/PartDesign_Draft/es "PartDesign Draft/es"): altera un cara del cuerpo activo aplicándole un corte inclinado.

- ![](/images/PartDesign_Thickness.svg) [Vaciado de espesor](/PartDesign_Thickness/es "PartDesign Thickness/es"): altera el sólido eliminando las caras seleccionadas y creando un sólido definido por una superficie de un determinado espesor.

#### Herramientas de transformación

Son herramientas que permite transformar operaciones existentes. Permiten elegir las operaciones a ser transformadas.

- ![](/images/PartDesign_Mirrored.svg) [Reflexión o simetría](/PartDesign_Mirrored/es "PartDesign Mirrored/es"): refleja una o más operaciones con respecto a un plano o una cara generando su operación simétrica con respecto a dicho plano o cara.

- ![](/images/PartDesign_LinearPattern.svg) [Patrón de repetición lineal](/PartDesign_LinearPattern/es "PartDesign LinearPattern/es"): crea un patrón de repetición lineal basado en una o más operaciones.

- ![](/images/PartDesign_PolarPattern.svg) [Patrón de repetición polar](/PartDesign_PolarPattern/es "PartDesign PolarPattern/es"): crea un patrón de repetición polar de una o más operaciones.

- ![](/images/PartDesign_MultiTransform.svg) [Crear transformaciones múltiples](/PartDesign_MultiTransform/es "PartDesign MultiTransform/es"): crea un patrón de repetición combinando de forma sucesiva una serie de transformaciones.

#### Extras

Otras funcionalidades adicionales disponibles en el menú de diseño de piezas:

- ![](/images/PartDesign_Sprocket.svg) [Asistente de diseño de piñones](/PartDesign_Sprocket/es "PartDesign Sprocket/es"): crea un perfil de piñón que puede ser acolchado. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/PartDesign_InternalExternalGear.svg) [Asistente de diseño Engranajes de involuta](/PartDesign_InvoluteGear/es "PartDesign InvoluteGear/es"): crea un perfil de engranaje de involuta que puede ser acolchado.

- ![](/images/PartDesign_WizardShaft.svg) [Asistente de diseño de eje](/PartDesign_WizardShaft/es "PartDesign WizardShaft/es"): Genera un eje a partir de una serie de valores y permite analizar fuerzas y momentos de fuerza. El eje se genera mediante revolución de un croquis que puede ser editado a posteriori.

### Elementos del menú contextua

- [Suppressed](/index.php?title=PartDesign_Suppressed&action=edit&redlink=1 "PartDesign Suppressed (page does not exist)"): checkbox to disable a specific feature without deleting it. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/PartDesign_MoveTip.svg) [Establecer Punta](/PartDesign_MoveTip/es "PartDesign MoveTip/es"): redefine la punta, que es la característica expuesta fuera del Cuerpo.

- ![](/images/PartDesign_MoveFeature.svg) [Mover objeto a otro cuerpo](/index.php?title=PartDesign_MoveFeature/es&action=edit&redlink=1 "PartDesign MoveFeature/es (page does not exist)"): mueve el croquis, la geometría del dato o la característica seleccionada a otro Cuerpo.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Mover objeto después de otro objeto](/index.php?title=PartDesign_MoveFeatureInTree/es&action=edit&redlink=1 "PartDesign MoveFeatureInTree/es (page does not exist)"): permite reordenar el árbol de Cuerpos moviendo el croquis, la geometría datum o la característica seleccionada a otra posición en la lista de características.

#### Artículos compartidos con Ambiente de Trabajo Pieza

- ![](/images/Std_SetAppearance.svg) [Apariencia](/index.php?title=Std_SetAppearance/es&action=edit&redlink=1 "Std SetAppearance/es (page does not exist)"): determina la apariencia de toda la parte (transparencia del color, etc.).

- ![](/images/Part_FaceColors.svg) [Asignar colores](/index.php?title=Part_FaceColors/es&action=edit&redlink=1 "Part FaceColors/es (page does not exist)"): asigna colores a las caras de las partes.

### Obsolete tools

- ![](/images/PartDesign_Migrate.svg) [Migrate](/PartDesign_Migrate "PartDesign Migrate"): migrates files from FreeCAD versions below 0.17 to version 0.17. This tool is not available in 1.0 and above.

### Preferencias

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/es&oldid=1529327>"
