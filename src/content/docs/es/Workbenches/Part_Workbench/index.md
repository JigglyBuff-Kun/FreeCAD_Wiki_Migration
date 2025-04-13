---
title: Modulo Pieza
---

![](/images/Workbench_Part.svg)

El icono del Ambiente de trabajo Pieza

## Introducción

Las sólidas capacidades de modelado de FreeCAD se basan en la [OpenCASCADE](/OpenCASCADE/es "OpenCASCADE/es") (OCCT), un sistema CAD de calidad profesional que presenta una creación y manipulación avanzada de geometría 3D. El ![](/images/Workbench_Part.svg) Ambiente de trabajo pieza es una capa que se encuentra en la parte superior de las bibliotecas de la OCCT, que da al usuario acceso a las primitivas y funciones geométricas de la OCCT. Esencialmente todas las funciones de dibujo 2D y 3D en cada ambiente de trabajo (![](/images/Workbench_Draft.svg) [Borrador](/Draft_Workbench/es "Draft Workbench/es"), ![](/images/Workbench_Sketcher.svg) [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es"), ![](/images/Workbench_PartDesign.svg) [DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es"), etc.), se basan en estas funciones expuestas por el ambiente de trabajo DiseñoPieza. Por lo tanto, el Ambiente de trabajo DiseñoPieza se considera el componente central de las capacidades de modelado de FreeCAD.

The Part Workbench can also create objects that are not solids, such as faces, shells, and objects with only edges or vertices. It also provides a variety of general purpose tools for geometry manipulation, geometry validation, and making copies.

The ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") uses an alternative workflow for creating solids. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/Part_Workbench_Example.jpg)

## Herramientas

### Solids toolbar

- ![](/images/Part_Box.svg) [Caja](/Part_Box/es "Part Box/es"): Crea una caja.

- ![](/images/Part_Cylinder.svg) [Cilindro](/Part_Cylinder/es "Part Cylinder/es"): Crea un cilindro.

- ![](/images/Part_Sphere.svg) [Esfera](/Part_Sphere/es "Part Sphere/es"): Crea una esfera.

- ![](/images/Part_Cone.svg) [Cono](/Part_Cone/es "Part Cone/es"): Crea un cono.

- ![](/images/Part_Torus.svg) [Torus](/Part_Torus "Part Torus"): Creates a torus.

- ![](/images/Part_Tube.svg) [Tube](/Part_Tube "Part Tube"): Creates a tube.

- ![](/images/Part_Primitives.svg) [Create primitives...](/Part_Primitives "Part Primitives"): A tool to create one of the following primitives:

- ![](/images/Part_Plane.svg) [Plane](/Part_Plane "Part Plane"): Creates a plane.

- ![](/images/Part_Box.svg) [Box](/Part_Box "Part Box"): Creates a box. This object can also be created with the [Box](/Part_Box "Part Box") tool.

- ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder "Part Cylinder"): Creates a cylinder. This object can also be created with the [Cylinder](/Part_Cylinder "Part Cylinder") tool.

- ![](/images/Part_Cone.svg) [Cone](/Part_Cone "Part Cone"): Creates a cone. This object can also be created with the [Cone](/Part_Cone "Part Cone") tool.

- ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere"): Creates a sphere. This object can also be created with the [Sphere](/Part_Sphere "Part Sphere") tool.

- ![](/images/Part_Ellipsoid.svg) [Ellipsoid](/Part_Ellipsoid "Part Ellipsoid"): Creates a ellipsoid.

- ![](/images/Part_Torus.svg) [Torus](/Part_Torus "Part Torus"): Creates a torus. This object can also be created with the [Torus](/Part_Torus "Part Torus") tool.

- ![](/images/Part_Prism.svg) [Prism](/Part_Prism "Part Prism"): Creates a prism.

- ![](/images/Part_Wedge.svg) [Wedge](/Part_Wedge "Part Wedge"): Creates a wedge.

- ![](/images/Part_Helix.svg) [Helix](/Part_Helix "Part Helix"): Creates a helix.

- ![](/images/Part_Spiral.svg) [Spiral](/Part_Spiral "Part Spiral"): Creates a spiral.

- ![](/images/Part_Circle.svg) [Circle](/Part_Circle "Part Circle"): Creates a circular arc.

- ![](/images/Part_Ellipse.svg) [Ellipse](/Part_Ellipse "Part Ellipse"): Creates an elliptical arc.

- ![](/images/Part_Point.svg) [Point](/Part_Point "Part Point"): Creates a point.

- ![](/images/Part_Line.svg) [Line](/Part_Line "Part Line"): Creates a line.

- ![](/images/Part_RegularPolygon.svg) [Regular polygon](/Part_RegularPolygon "Part RegularPolygon"): Creates a regular polygon.

- ![](/images/Part_Builder.svg) [Shape builder...](/Part_Builder "Part Builder"): Creates shapes from various primitives.

### Part tools toolbar

- ![](/images/Sketcher_NewSketch.svg) [Create sketch](/Sketcher_NewSketch "Sketcher NewSketch"): Creates a new sketch and opens the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") to edit it.

- ![](/images/Part_Extrude.svg) [Extrusión](/Part_Extrude/es "Part Extrude/es"): Extruye caras planas.

- ![](/images/Part_Revolve.svg) [Revolve](/Part_Revolve "Part Revolve"): Creates a solid by revolving an object (not a solid) around an axis.

- ![](/images/Part_Mirror.svg) [Mirror](/Part_Mirror "Part Mirror"): Mirrors the selected object across a mirror plane.

- ![](/images/Part_Scale.svg) [Scale](/Part_Scale "Part Scale"): Scales one or more shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Part_Fillet.svg) [Fillet](/Part_Fillet "Part Fillet"): Fillets (rounds) edges of an object.

- ![](/images/Part_Chamfer.svg) [Chamfer](/Part_Chamfer "Part Chamfer"): Chamfers edges of an object.

- ![](/images/Part_MakeFace.svg) [Hacer cara a partir de alambres](/index.php?title=Part_MakeFace/es&action=edit&redlink=1 "Part MakeFace/es (page does not exist)"): Hace una cara a partir de un conjunto de hilos (contornos).

- ![](/images/Part_RuledSurface.svg) [Superficie reglada](/index.php?title=Part_RuledSurface/es&action=edit&redlink=1 "Part RuledSurface/es (page does not exist)"): Crea una superficie reglada.

- ![](/images/Part_Loft.svg) [Loft](/Part_Loft "Part Loft"): Lofts from one profile to another.

- ![](/images/Part_Sweep.svg) [Sweep](/Part_Sweep "Part Sweep"): Sweeps one or more profiles along a path.

- ![](/images/Part_Section.svg) [Sección](/Part_Section/es "Part Section/es"): Crea una sección por la intersección de un objeto con un plano de sección.

- ![](/images/Part_CrossSections.svg) [Secciones transversales...](/Part_CrossSections/es "Part CrossSections/es"): Crea una o más secciones transversales a través de un objeto.

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Relleno:

- ![](/images/Part_Offset.svg) [3D Relleno](/index.php?title=Part_Offset/es&action=edit&redlink=1 "Part Offset/es (page does not exist)"): Construye una forma paralela a cierta distancia de un original.

- ![](/images/Part_Offset2D.svg) [2D Relleno](/index.php?title=Part_Offset2D/es&action=edit&redlink=1 "Part Offset2D/es (page does not exist)"): Construye un cable paralelo a cierta distancia de un original, o amplía/contrae una cara plana.

- ![](/images/Part_Thickness.svg) [Espesor](/Part_Thickness/es "Part Thickness/es"): Ahueca un sólido.

- ![](/images/Part_ProjectionOnSurface.svg) [Proyección sobre superficie](/Part_ProjectionOnSurface/es "Part ProjectionOnSurface/es"): Proyecta un logo, texto o cualquier cara, cable, borde a una superficie.

- ![](/images/Part_FaceColors.svg) [Establecer colores](/index.php?title=Part_FaceColors/es&action=edit&redlink=1 "Part FaceColors/es (page does not exist)"): Asigna colores a las caras individuales de los objetos.

### Booleano

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Compuesto:

- ![](/images/Part_Compound.svg) [Hacer compuesto](/Part_Compound/es "Part Compound/es"): Crea un compuesto a partir de los objetos seleccionados.

- ![](/images/Part_ExplodeCompound.svg) [Explotar compuesto](/Part_ExplodeCompound/es "Part ExplodeCompound/es"): Divide los compuestos.

- ![](/images/Part_CompoundFilter.svg) [Filtro compuesto](/Part_CompoundFilter/es "Part CompoundFilter/es"): Extrae las partes individuales de los compuestos.

- ![](/images/Part_Booleans.svg) [Operaciones Booleanas](/Part_Boolean/es "Part Boolean/es"): Realiza operaciones booleanas sobre objetos.

- ![](/images/Part_Cut.svg) [Cut](/Part_Cut "Part Cut"): Cuts one object from another.

- ![](/images/Part_Fuse.svg) [Union](/Part_Fuse "Part Fuse"): Fuses two or more objects.

- ![](/images/Part_Common.svg) [Común](/Part_Common/es "Part Common/es"): Extrae la parte común (intersección) de dos objetos.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Unión:

- ![](/images/Part_JoinConnect.svg) [Conectar](/index.php?title=Part_JoinConnect/es&action=edit&redlink=1 "Part JoinConnect/es (page does not exist)"): Conecta los interiores de los objetos huecos.

- ![](/images/Part_JoinEmbed.svg) [Incrustar](/index.php?title=Part_JoinEmbed/es&action=edit&redlink=1 "Part JoinEmbed/es (page does not exist)"): Incrusta un objeto hueco en otro objeto hueco.

- ![](/images/Part_JoinCutout.svg) [Recorte](/index.php?title=Part_JoinCutout/es&action=edit&redlink=1 "Part JoinCutout/es (page does not exist)"): Crea un recorte en una pared de un objeto para otro objeto hueco.

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) División:

- ![](/images/Part_BooleanFragments.svg) [Fragmentos booleanos](/index.php?title=Part_BooleanFragments/es&action=edit&redlink=1 "Part BooleanFragments/es (page does not exist)"): Crea todas las piezas obtenidas de las operaciones booleanas.

- ![](/images/Part_SliceApart.svg) [Recorta una pieza](/index.php?title=Part_SliceApart/es&action=edit&redlink=1 "Part SliceApart/es (page does not exist)"): Rebana y divide un objeto intersectándolo con otros objetos.

- ![](/images/Part_Slice.svg) [Corte](/index.php?title=Part_Slice/es&action=edit&redlink=1 "Part Slice/es (page does not exist)"): Corta un objeto intersectándolo con otros objetos.

- ![](/images/Part_XOR.svg) [XOR](/index.php?title=Part_XOR/es&action=edit&redlink=1 "Part XOR/es (page does not exist)"): Elimina el espacio compartido por un número par de objetos (versión simétrica de [Cortar](/Part_Cut/es "Part Cut/es")).

- ![](/images/Part_CheckGeometry.svg) [Comprobar geometría](/Part_CheckGeometry/es "Part CheckGeometry/es"): Comprueba la geometría de los objetos seleccionados en busca de errores.

- ![](/images/Part_Defeaturing.svg) [Derrotar](/index.php?title=Part_Defeaturing/es&action=edit&redlink=1 "Part Defeaturing/es (page does not exist)"): Elimina las características de un objeto.

### Otras herramientas

- ![](/images/Part_Import.svg) [Importar](/index.php?title=Part_Import/es&action=edit&redlink=1 "Part Import/es (page does not exist)"): Importa desde archivos \*.IGES, \*.STEP o \*.BREP.

- ![](/images/Part_Export.svg) [Exportar](/index.php?title=Part_Export/es&action=edit&redlink=1 "Part Export/es (page does not exist)"): Exporta a archivos \*.IGES, \*.STEP o \*.BREP.

- ![](/images/Part_BoxSelection.svg) [CajaSelección](/index.php?title=Part_BoxSelection/es&action=edit&redlink=1 "Part BoxSelection/es (page does not exist)"): Selecciona las caras de un área rectangular.

- ![](/images/Part_ShapeFromMesh.svg) [Forma a partir malla](/index.php?title=Part_ShapeFromMesh/es&action=edit&redlink=1 "Part ShapeFromMesh/es (page does not exist)"): Crea un objeto de forma a partir de un objeto de malla.

- ![](/images/Part_PointsFromMesh.svg) [Puntos desde malla](/index.php?title=Part_PointsFromMesh/es&action=edit&redlink=1 "Part PointsFromMesh/es (page does not exist)"): Crea un objeto de forma hecho de puntos a partir de un objeto de malla.

- ![](/images/Part_MakeSolid.svg) [Convertir en sólido](/index.php?title=Part_MakeSolid/es&action=edit&redlink=1 "Part MakeSolid/es (page does not exist)"): Convierte un objeto de forma en un objeto sólido.

- ![](/images/Part_ReverseShape.svg) [Invertir formas](/index.php?title=Part_ReverseShape/es&action=edit&redlink=1 "Part ReverseShape/es (page does not exist)"): Invierte las normales de todas las caras de los objetos seleccionados.

- Crear una copia:

- ![](/images/Part_SimpleCopy.svg) [Crear copia simple](/index.php?title=Part_SimpleCopy/es&action=edit&redlink=1 "Part SimpleCopy/es (page does not exist)"): Crea una copia simple de un objeto seleccionado.

- ![](/images/Part_TransformedCopy.svg) [Crear copia transformada](/index.php?title=Part_TransformedCopy/es&action=edit&redlink=1 "Part TransformedCopy/es (page does not exist)"): Crea una copia transformada de un objeto seleccionado.

- ![](/images/Part_ElementCopy.svg) [Crear copia de elemento de forma](/index.php?title=Part_ElementCopy/es&action=edit&redlink=1 "Part ElementCopy/es (page does not exist)"): Crea una copia de un elemento (vértice, arista, cara) de un objeto seleccionado.

- ![](/images/Part_RefineShape.svg) [Refinar forma](/index.php?title=Part_RefineShape/es&action=edit&redlink=1 "Part RefineShape/es (page does not exist)"): Limpia las caras eliminando las líneas innecesarias.

- ![](/images/Part_EditAttachment.svg) [Attachment](/index.php?title=Part_EditAttachment/es&action=edit&redlink=1 "Part EditAttachment/es (page does not exist)"): Adjunta un objeto a otro objeto.

## Obsolete tools

### Medida

The ![](/images/Std_Measure.svg) [Std Measure](/Std_Measure "Std Measure") tool replaces the tools listed below. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Part_Measure_Linear.svg) [Medida Lineal](/index.php?title=Part_Measure_Linear/es&action=edit&redlink=1 "Part Measure Linear/es (page does not exist)"): Crea una medida lineal.

- ![](/images/Part_Measure_Angular.svg) [Medida Angular](/index.php?title=Part_Measure_Angular/es&action=edit&redlink=1 "Part Measure Angular/es (page does not exist)"): Crea una medida angular.

- ![](/images/Part_Measure_Refresh.svg) [Actualización de medidas](/index.php?title=Part_Measure_Refresh/es&action=edit&redlink=1 "Part Measure Refresh/es (page does not exist)"): Actualiza todas las mediciones.

- ![](/images/Part_Measure_Clear_All.svg) [Borrar todo](/index.php?title=Part_Measure_Clear_All/es&action=edit&redlink=1 "Part Measure Clear All/es (page does not exist)"): Borra todas las mediciones.

- ![](/images/Part_Measure_Toggle_All.svg) [Alternar todo](/index.php?title=Part_Measure_Toggle_All/es&action=edit&redlink=1 "Part Measure Toggle All/es (page does not exist)"): Muestra u oculta todas las mediciones.

- ![](/images/Part_Measure_Toggle_3D.svg) [Alternar 3D](/index.php?title=Part_Measure_Toggle_3D/es&action=edit&redlink=1 "Part Measure Toggle 3D/es (page does not exist)"): Muestra u oculta las medidas 3D.

- ![](/images/Part_Measure_Toggle_Delta.svg) [Alternar Delta](/index.php?title=Part_Measure_Toggle_Delta/es&action=edit&redlink=1 "Part Measure Toggle Delta/es (page does not exist)"): Muestra u oculta las medidas delta.

## Preferencias

- ![](/images/Preferences-part_design.svg) [Preferencias](/index.php?title=PartDesign_Preferences/es&action=edit&redlink=1 "PartDesign Preferences/es (page does not exist)"): Preferencias disponibles para las Herramientas de Pieza (el ambiente de trabajo de Pieza también utiliza las Preferencias de PartDesign).
- ![](/images/Preferences-import-export.svg) [Preferencias de importación-exportación](/Import_Export_Preferences/es "Import Export Preferences/es"): Preferencias disponibles para importar desde y exportar a diferentes formatos de archivo.
- [Ajuste fino](/index.php?title=Fine-tuning/es&action=edit&redlink=1 "Fine-tuning/es (page does not exist)"): Algunos parámetros extra para afinar el comportamiento de la Parte.

## Guión

Ver [Guiones Pieza](/Part_scripting/es "Part scripting/es").

## Tutoriales

- [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ") : How to import STL/OBJ files in FreeCAD
- [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ") : How to export STL/OBJ files from FreeCAD
- [Whiffle Ball tutorial](/Whiffle_Ball_tutorial "Whiffle Ball tutorial") : How to use the Part Workbench

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/es&oldid=1500779>"
