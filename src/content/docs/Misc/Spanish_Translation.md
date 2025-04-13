---
title: Spanish Translation
---
Cualquier parecido con [la página de traducción alemana](/German_Translation "German Translation") es pura coincidencia.

Esta guía de traducción al español pretende ser una guía para elegir los mejores términos en nuestro idioma para conseguir una traducción consistente en los diferentes subproyectos que conforman el ecosistema de FreeCAD.

Cada recomendación debe ser validada en el foro en español.: *[Traducción de FreeCAD](https://forum.freecad.org/viewtopic.php?t=81981)*, que es el lugar apropiado para el intercambio. Se debe establecer la conexión entre la publicación de validación y esta página. Siempre traduce Workbench como **Entorno de trabajo**.

Para poder crear traducciones consistentes necesitamos algunas **reglas** que aquellos que estén dispuestos a discutir en el foro acuerden o ya hayan acordado además de necesitar una **Ayuda de traducción** de los términos utilizados en el programa para poder crear traducciones comprensibles, precisas y técnicamente correctas.

La traducción de la interfaz de FreeCAD se realiza en la plataforma Crowdin, [en este enlace](https://crowdin.com/project/freecad/es-ES) se realiza la traducción a español de España (es-ES) y [en este enlace](https://crowdin.com/project/freecad/es-AR) se realiza la traducción a español de Argentina (es-AR).

## Reglas

### Introducción

¿Te ha pasado? Buscas ayuda en la wiki versión en español, encuentras la página correcta, lees un poco, te sorprendes con términos y declaraciones sin sentido y lees el original en inglés para ver de que trata y nada ue ver o buscas algún comando por su nombre en español y resulta que es diferente la traducción en la wiki respecto a la existente en el programa.

Ese no puede ser el objetivo de una traducción.

El cambio entre las diferentes traducciones es molesto, ¿no?

Cómo se puede mejorar la calidad de la traducción reemplazando declaraciones técnicamente correctas con, en el mejor de los casos, descripciones simples para que uno "se acerque más al original en inglés" es un misterio para algunos usuarios y traductores activos en el foro. De la discusión en el foro sobre la calidad de las traducciones surge el deseo de establecer reglas para la traducción tanto de la interfaz de usuario de FreeCAD como de las páginas wiki.

Al mejorar las publicaciones, la referencia a una regla suele ser más comprensible que explicaciones como "una completa tontería" o "peor que antes". Si las reglas están numeradas consecutivamente, un comentario puede ser significativamente más corto. Por ejemplo, "Las combinaciones de palabras se escriben juntas" se convierte en "Se aplica la regla X".

Las reglas acordadas en el foro se enumeran aquí.

### Reglamento

#### General

**R0**: Regla número 0

:   Descripción de la regla 0.

#### Wiki

**Rn**: Regla número n.

:   Descripción de la regla n.

## Ayuda para traducción

Contiene:

* Traducciones de las entradas del menú ordenadas por área de trabajo, con sugerencias de cambios si es necesario.
* Esto tiene como objetivo, entre otras cosas, facilitar la comparación con las entradas de Crowdin (eliminando la necesidad de cambiar constantemente la configuración de idioma FC entre inglés y español).
* Explicaciones de términos técnicos con los que no todo el mundo está familiarizado

Así se complementa (¡Este sitio se nutre de la participación!):

* Si un término/expresión no está disponible, se debe agregar. Si no hay objeciones, no es necesario hacer nada más.
* Si hay objeciones, se deben discutir en el foro para acordar cómo proceder (editar, eliminar...).

### Términos más comunes

#### Interfaz de usuario de FreeCAD ([Interfaz](/Interface/es#Introducción "Interface/es"))

Los términos presentados en esta tabla fueron tomados de la página de la wiki de FreeCAD [Interfaz](/Interface/es#Introducción "Interface/es").

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Interface |  | **Interfaz** | Ventana principal de FreeCAD |
| Main view area | Window area | **Área de visualización principal** |  |
| 3D view | Window area | **Vista 3D** |  |
| Combo view | Window area | **Vista combinada** |  |
| Tree view | Window area | **Vista de árbol** |  |
| Task panel | Window area | **Panel de tareas** |  |
| Property editor | Window area | **Editor de propiedades** |  |
| Selection view | Window area | **Vista de selección** |  |
| Report view | Window area | **Vista de informe** |  |
| Python console | Window area | **Consola de Python** |  |
| Status bar | Window area | **Barra de estado** |  |
| Toolbar area | Window area | **Barra de herramientas** |  |
| Workbench selector | Window area | **Selector de entorno de trabajo** |  |
| Standard menu | Window area | **Menú estándar** |  |

En el [menú estándar](/Standard_Menu/es "Standard Menu/es") es posible acceder a los menús utilizando un acceso directo con la tecla Alt seguido de la letra correspondiente al menú. Los [entornos de trabajo externos](/External_workbenches/es "External workbenches/es") también puede agregar uno o varios menús a la interfaz de FreeCAD pudiendo optar con también agregar atajos. Cuando se traduzcan las cadenas de texto que corresponden a estos menús se requiere utilizar `&` antes de la letra que se desea utilizar como atajo, ejemplo: `&Editar`. La tabla de abajo lleva registro de los atajos usados en cada menú. Note que no hay problema si los atajos en español son diferentes a los que atajos originales en inglés. Tampoco hay problema si se repiten los atajos, presionar Alt + LETRA una vez nos llevará al primer menú, soltando las teclas y volviendo a presionar Alt + LETRA nos llevará al siguiente menú.

[**Archivo**](/Std_File_Menu/es "Std File Menu/es"), [**Editar**](/Std_Edit_Menu/es "Std Edit Menu/es"), [**Ver**](/Std_View_Menu/es "Std View Menu/es"), [**Herramientas**](/Std_Tools_Menu/es "Std Tools Menu/es"), [**Macro**](/Std_Macro_Menu/es "Std Macro Menu/es"), [**Windows**](/Std_Windows_Menu/es "Std Windows Menu/es"), [**Ayuda**](/Std_Help_Menu/es "Std Help Menu/es") es

Atajos para menús

| Fuente del menú | Menú en inglés | Atajo en inglés | Menú en español | Atajo en español |
| --- | --- | --- | --- | --- |
| FreeCAD | File | F | Archivo | A |
| FreeCAD | Edit | E | Editar | E |
| FreeCAD | View | V | Ver | V |
| FreeCAD | Tools | T | Herramientas | H |
| FreeCAD | Macro | M | Macros | M |
| FreeCAD | Windows | W | Ventanas | N |
| FreeCAD | Help | H | Ayuda | U |
| Assembly3 | Assembly3 | A | Assembly3 | A |
| Assembly4 | Assembly | A | Ensamblaje | S |
| Assembly4 | Constraints | C | Constraints | C |
| Reinforcement | Reinforcement |  | Refuerzos |  |
| Sheet Metal | Sheet Metal | S | Chapa metálica | T |
| Fasteners | Fasteners |  | Elementos de sujeción |  |

#### Sección Wiki [Std Base](/Std_Base/es "Std Base/es")

Colección de funciones y herramientas disponibles para todos los entornos de trabajo.

Los términos presentados en esta tabla fueron tomados de la página de la wiki de FreeCAD [Std Base](/Std_Base/es "Std Base/es").

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Std Base | Workbench name |  |  |
| *File menu* |  |  |  |
| File | Menu header |  |  |
| New | Command |  |  |
| *Edit menu* |  |  |  |
| Edit | Menu header |  |  |
| Undo | Command |  |  |
| *View menu* |  |  |  |
| View | Menu header |  |  |
| Create new view | Command |  |  |
| Standard views | Generic term |  |  |
| Fit all | Command |  |  |
| Fit selection | Command |  |  |
| Axonometric | Generic term |  |  |
| Isometric | Command |  |  |
| Dimetric | Command |  |  |
| Trimetric | Command |  |  |
|  |  |  |  |
| Home | Command |  |  |
| Front | Command |  |  |
| Top | Command |  |  |
| Right | Command |  |  |
| Rear | Command |  |  |
| Bottom | Command |  |  |
| Left | Command |  |  |
| Rotate left | Command |  |  |
| Rotate right | Command |  |  |
| Freeze display | Generic term |  |  |
| Save views... | Command |  |  |
| Load views... | Command |  |  |
| Freeze view | Command |  |  |
| Clear views | Command |  |  |
| Draw style | Generic term |  |  |
| As is | Command |  |  |
| Points | Command |  |  |
| Wireframe | Command |  |  |
| Hidden line | Command |  |  |
| No shading | Command |  |  |
| Shaded | Command |  |  |
| Flat lines | Command |  |  |
|  |  |  |  |
| Bounding box | Command |  |  |
| Stereo | Generic term |  |  |
| Stereo red/cyan | Command |  |  |
| Stereo quad buffer | Command |  |  |
| Stereo interleaved Rows | Command |  |  |
| Stereo interleaved Columns | Command |  |  |
| Stereo Off | Command |  |  |
| Issue camera position | Command |  |  |
| Zoom | Generic term |  |  |
| Zoom in | Command |  |  |
| Zoom out | Command |  |  |
| Box zoom | Command |  |  |
| Document window | Generic term |  |  |
| Docked | Command |  |  |
| Undocked | Command |  |  |
| Full screen | Command |  |  |
|  |  |  |  |
| Toggle axis cross | Command |  |  |
| Clipping plane | Command |  |  |
| Persistent section cut | Command |  |  |
| Texture mapping... | Command |  |  |
| Visibility | Generic term |  |  |
| Workbench | Generic term |  |  |
| Toolbars | Generic term |  |  |
| File | Command, toggle |  |  |
| Workbench | Command, toggle |  |  |
| Macro | Command, toggle |  |  |
| View | Command, toggle |  |  |
| Structure | Command, toggle |  |  |
| Panels | Generic term |  |  |
| Report view | Command, toggle |  |  |
| Selection view | Command, toggle |  |  |
| Combo view | Command, toggle |  |  |
| Python comsole | Command, toggle |  |  |
| TreeView actions | Generic term |  |  |
|  |  |  |  |
| Status bar | Command, toggle |  |  |
| Tools | Menu header |  |  |
| Edit parameters... | Command |  |  |
| *Macro menu* |  |  |  |
| Macro | Menu header |  |  |
| Macro recording... | Command |  |  |
| Stop macro recording | Command |  |  |
| Macros... | Command |  |  |
| Recent macros | Command |  |  |
| Execute macro | Command |  |  |
| Attach to remote debugger... | Command |  |  |
| Debug macro | Command |  |  |
| Stop debugging | Command |  |  |
| Step over | Command |  |  |
| Step into | Command |  |  |
| Toggle breakpoint | Command |  |  |
| *Windows menu* |  |  |  |
| Windows | Menu header |  |  |
| Next | Command |  |  |
| *Help menu* |  |  |  |
| Help | Menu header |  |  |
| Help | Command |  |  |
| *Additional tools panel* |  |  |  |
| Structure | Panel header |  |  |
| Create part | Command |  |  |
| Create Group | Command |  |  |
| Make link | Command |  |  |
| Link actions | Generic term |  |  |
| Make sub-link | Command |  |  |
| Replace with link | Command |  |  |
| Unlink | Command |  |  |
| Import link | Command |  |  |
| Import all links | Command |  |  |

### Entornos de trabajo base

#### [Arch](/Arch_Workbench/es "Arch Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Arch | Workbench name |  |  |
| Arch | Menu header |  |  |
| Utilities | Generic term |  |  |
| Component | Command |  |  |
|  |  |  |  |
| Wall | Command |  |  |
| Structure tools | Generic term |  |  |
| Axis tools | Generic term |  |  |
| Panel tools | Generic term |  |  |
| Material tools | Generic term |  |  |
| Pipe tools | Generic term |  |  |
| Draft | Menu header |  |  |
| Creation | Generic term |  |  |
| Annotation | Generic term |  |  |
| Modification | Generic term |  |  |
| Utilities | Generic term |  |  |

#### [Assembly](/Assembly_Workbench "Assembly Workbench")

Revisar que las traducciones entre entornos de trabajo de ensamblaje sean congruentes entre sí.

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Assembly | Workbench name | Ensamblaje | Nombre propio, no recomendado traducir |
| Assembly | Menu header | Ensamblaje | Nombre propio, no recomendado traducir |
| Create Assembly | Command |  |  |
| Insert Link | Command |  |  |
| Solve Assembly | Command |  |  |
| Toggle grounded | Command |  |  |
| Create Fixed Joint | Command |  |  |
| Create Revolute Joint | Command |  |  |
| Create Cylindrical Joint | Command |  |  |
| Create Slider Joint | Command |  |  |
| Create Ball Joint | Command |  |  |
| Create Distance Joint | Command |  |  |

#### [CAM](/Path_Workbench/es "Path Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Path | Workbench name |  |  |
| Path | Menu header |  |  |
| Job | Command |  |  |
| Path Dressup | Generic term |  |  |
| Supplemental Commands | Generic term |  |  |
| Path Modification | Generic term |  |  |
| Utils | Generic term |  |  |
| PropertyBag | Command |  |  |

#### [FEM](/FEM_Workbench/es "FEM Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| FEM | Workbench name |  |  |
| Model | Menu header |  |  |
| Analysis container | Command |  |  |
| Materials | Generic term |  |  |
| Material for solid | Command |  |  |
| Material for fluid | Command |  |  |
| Nonlinear mechanical material | Command |  |  |
| Reinforced material (concrete) | Command |  |  |
| Material editor | Command |  |  |
| Element Geometry | Generic term |  |  |
| Beam cross section | Command |  |  |
| Beam rotation | Command |  |  |
| Shell plate thickness | Command |  |  |
| Fluid section for 1D flow | Command |  |  |
| Electromagnetic Constraints | Generic term |  |  |
| Constraint electrostatic potential | Command |  |  |
| Constraint current density | Command |  |  |
| Constraint magnetization | Command |  |  |
| Fluid Constraints | Generic term |  |  |
| Constraint initial flow velocity | Command |  |  |
| Constraint initial pressure | Command |  |  |
| Constraint flow velocity | Command |  |  |
| Geometrical Constraints | Generic term |  |  |
| Constraint plane rotation | Command |  |  |
| Constraint section print | Command |  |  |
| Constraint transform | Command |  |  |
| Mechanical Constraints | Generic term |  |  |
| Constraint fixed | Command |  |  |
| Constraint displacement | Command |  |  |
| Constraint contact. | Command |  |  |
| Constraint tie | Command |  |  |
| Constraint spring | Command |  |  |
| Constraint force | Command |  |  |
| Constraint pressure | Command |  |  |
| Constraint centrif | Command |  |  |
| Constraint self weight | Command |  |  |
| Thermal Constraints | Generic term |  |  |
| Constraint initial temperature | Command |  |  |
| Constraint heatflux | Command |  |  |
| Constraint temperature | Command |  |  |
| Constraint body heat source | Command |  |  |
| Overwrite Constants | Generic term |  |  |
| Constant vacuum permittivity | Command |  |  |
| Mesh | Menu header |  |  |
| FEM mesh from shape by Netgen | Command |  |  |
| FEM mesh from shape by Gmsh | Command |  |  |
| FEM mesh boundary layer | Command |  |  |
| FEM mesh region | Command |  |  |
| FEM mesh group | Command |  |  |
| Nodes set | Command |  |  |
| FEM mesh to mesh | Command |  |  |
| Solve | Menu header |  |  |
| Solver CalculiX Standard | Command |  |  |
| Solver Elmer | Command |  |  |
| Solver Mystran | Command |  |  |
| Solver Z88 | Command |  |  |
| Mechanical equations | Generic term |  |  |
| Elasticity equation | Command |  |  |
| Deformation equation | Command |  |  |
| Electromagnetic equations | Generic term |  |  |
| Electrostatic equation | Command |  |  |
| Electricforce equation | Command |  |  |
| Magnetodynamic equation | Command |  |  |
| Magnetodynamic 2D equation | Command |  |  |
|  |  |  |  |
| Flow equation | Command |  |  |
| Flux equation | Command |  |  |
| Heat equation | Command |  |  |
| Solver job control | Command |  |  |
| Run solver calculations | Command |  |  |
| Results | Menu header |  |  |
| Purge results | Command |  |  |
| Show result | Command |  |  |
| Apply changes to pipeline | Command |  |  |
| Post pipeline from result | Command |  |  |
| Warp filter | Command |  |  |
| Scalar clip filter | Command |  |  |
| Function cut filter | Command |  |  |
| Region clip filter | Command |  |  |
| Contours filter | Command |  |  |
| Line clip filter | Command |  |  |
| Stress linearization plot | Command |  |  |
| Data at point clip filter | Command |  |  |
| Filter functions | Generic term |  |  |
| Plane | Command |  |  |
| Sphere | Command |  |  |
| Cylinder | Command |  |  |
| Box | Command |  |  |
| Utilities | Menu header |  |  |
| Clipping plane on face | Command |  |  |
| Remove all clipping planes | Command |  |  |
| Open FEM examples | Command |  |  |

#### [Inspection](/Inspection_Workbench/es "Inspection Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Inspection | Workbench name |  |  |
| Inspection | Menu header |  |  |
| Visual inspection... | Command | Inspección visual... |  |
| Inspection | Command | Inspección |  |

#### [Mesh](/Mesh_Workbench/es "Mesh Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Mesh | Workbench name |  |  |
| Meshes | Menu header |  |  |
| Import mesh... | Command... | Importar malla |  |
| Export mesh... | Command | Exportar malla... |  |
| Create mesh from shape... | Command | Crear malla desde forma... |  |
| Refinement... | Command | Refinamiento... |  |

#### [OpenSCAD](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| OpenSCAD | Workbench name |  |  |
| OpenSCAD | Menu header |  |  |
| Replace Object | Command |  |  |
| Remove Object and their children | Command |  |  |
| Refine Shape Feature | Command |  |  |
| Mirror Mesh Feature... | Command |  |  |
| Scale Mesh Feature... | Command |  |  |
| Resize Mesh Feature... | Command |  |  |
| Increase Tolerance Feature | Command |  |  |
| Convert Edges To Faces | Command |  |  |
| Expand Placements | Command |  |  |
| Explode Group | Command |  |  |
|  |  |  |  |
| Color Code Shape | Command |  |  |
| Add OpenSCAD Element | Command |  |  |
| Mesh Boolean | Command |  |  |
| Hull | Command |  |  |
| Minkowski | Command |  |  |

#### [Part](/Part_Workbench/es "Part Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Part | Workbench name |  |  |
| Part | Menu header |  |  |
| Import CAD... | Command |  |  |
| Export CAD... | Command |  |  |
| Box selection | Command |  |  |
| Primitives | Generic term |  |  |
| Cube | Command |  |  |
| Cylinder | Command |  |  |
| Sphere | Command |  |  |
| Cone | Command |  |  |
| Torus | Command |  |  |
| Create tube | Command |  |  |
|  |  |  |  |
| Create primitives... | Command |  |  |
| Plane | Menu item |  |  |
| Box | Menu item |  |  |
| Cylinder | Menu item |  |  |
| Cone | Menu item |  |  |
| Sphere | Menu item |  |  |
| Ellipsoid | Menu item |  |  |
| Torus | Menu item |  |  |
| Prism | Menu item |  |  |
| Wedge | Menu item |  |  |
| Helix | Menu item |  |  |
| Spiral | Menu item |  |  |
| Circle | Menu item |  |  |
| Ellipse | Menu item |  |  |
| Point | Menu item |  |  |
| Line | Menu item |  |  |
| Regular polygon | Menu item |  |  |
|  |  |  |  |
| Shape builder... | Command |  |  |
| Create shape from mesh... | Command |  |  |
| Create points object from mesh... | Command |  |  |
| Convert to solid | Command |  |  |
| Reverse shapes | Command |  |  |
| Create a copy | Generic term |  |  |
| Create a simple copy | Command |  |  |
| Create a transformed copy | Command |  |  |
| Create shape element copy | Command |  |  |
| Refine shape | Command |  |  |
|  |  |  |  |
| Check geometry | Command |  |  |
| Defeaturing | Command |  |  |
| Boolean | Generic term |  |  |
| Boolean... | Command |  |  |
| Cut | Command |  |  |
| Union | Command |  |  |
| Intersection | Command |  |  |
| Join | Generic term |  |  |
| Connect objects | Command |  |  |
| Embed object | Command |  |  |
| Cutout for object | Command |  |  |
| Split | Generic term |  |  |
| Boolean fragments | Command |  |  |
| Slice apart | Command |  |  |
| Slice to compound | Command |  |  |
| Boolean XOR | Command |  |  |
| Compound | Generic term |  |  |
| Make compound | Command |  |  |
| Explode compound | Command |  |  |
| Compound filter | Command |  |  |
|  |  |  |  |
| Extrude... | Command |  |  |
| Revolve... | Command |  |  |
| Mirroring... | Command |  |  |
| Fillet... | Command |  |  |
| Chamfer... | Command |  |  |
| Make face from wires | Command |  |  |
| Create ruled surface | Command |  |  |
| Loft... | Command |  |  |
| Sweep... | Command |  |  |
| Section | Command |  |  |
| Cross-sections... | Command |  |  |
| 3D Offset... | Command |  |  |
| 2D Offset... | Command |  |  |
| Thickness... | Command |  |  |
| Create projection on surface... | Command |  |  |
| Attachment... | Command |  |  |

#### [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Part Design | Workbench name |  |  |
| Part Design | Menu header |  |  |
| Create body | Command |  |  |
| Create a datum | Generic term |  |  |
| Create a datum point | Command |  |  |
| Create a datum line | Command |  |  |
| Create a datum plane | Command |  |  |
|  |  |  |  |
| Create a local coordinate system | Command |  |  |
| Create a shape binder | Command |  |  |
| Create a sub-object(s) shape binder | Command |  |  |
| Create a clone | Command |  |  |
| Create an additive feature | Generic term |  |  |
| Pad | Command |  |  |
| Revolution | Command |  |  |
| Additive loft | Command |  |  |
| Additive pipe | Command |  |  |
| Additive helix | Command |  |  |
| Create an additive primitive | Generic term |  |  |
| Additive Box | Command |  |  |
| Additive Cylinder | Command |  |  |
| Additive Sphere | Command |  |  |
| Additive Cone | Command |  |  |
| Additive Ellipsoid | Command |  |  |
| Additive Torus | Command |  |  |
| Additive Prism | Command |  |  |
| Additive Wedge | Command |  |  |
| Create a subtractive feature | Generic term |  |  |
| Pocket | Command |  |  |
| Hole | Command |  |  |
| Groove | Command |  |  |
| Subtractive loft | Command |  |  |
| Subtractive pipe | Command |  |  |
| Subtractive helix | Command |  |  |
| Create a subtractive primitive | Generic term |  |  |
| Subtractive Box | Command |  |  |
| Subtractive Cylinder | Command |  |  |
| Subtractive Sphere | Command |  |  |
| Subtractive Cone | Command |  |  |
| Subtractive Ellipsoid | Command |  |  |
| Subtractive Torus | Command |  |  |
| Subtractive Prism | Command |  |  |
| Subtractive Wedge | Command |  |  |
| Apply a pattern | Generic term |  |  |
| Mirrored | Command |  |  |
| Linear pattern | Command |  |  |
| Polar pattern | Command |  |  |
| Create MultiTransform | Command |  |  |
| Apply a dress-up feature | Generic term |  |  |
| Fillet | Command |  |  |
| Chamfer | Command |  |  |
| Draft | Command |  |  |
| Thickness | Command |  |  |
|  |  |  |  |
| Boolean operation | Command |  |  |
| Migrate | Command |  |  |
| Sprocket... | Command |  |  |
| Sprocket parameter | Task panel header |  |  |
| Number of teeth | Task panel label |  |  |
| Sprocket Reference | Task panel label |  |  |
| Chain Pitch | Task panel label |  |  |
| Roller Diameter | Task panel label |  |  |
| Thickness | Task panel label |  |  |
| Involute gear... | Command |  |  |
| Involute parameter | Task panel header |  |  |
| Number of teeth | Task panel label |  |  |
| Module | Task panel label |  |  |
| Pressure angle | Task panel label |  |  |
| High precision | Task panel label |  |  |
| External gear | Task panel label |  |  |
| Shaft design wizard... | Command |  |  |
| *Sketcher Menu* |  |  |  |
| Sketch | Menu header |  |  |
| Create sketch | Command |  |  |
| Edit sketch | Command |  |  |
| Leave sketch | Command |  |  |
| View sketch | Command |  |  |
| Map sketch to face... | Command |  |  |
| Reorient sketch... | Command |  |  |
| Validate sketch... | Command |  |  |

#### [Points](/Points_Workbench/es "Points Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Points | Workbench name |  |  |
| Points | Menu header |  |  |
| Convert to points... | Command | Convertir a puntos... |  |
| Structured point cloud | Command | Nube de puntos estructurada |  |
| Import points... | Command | Importar puntos... |  |
| Export points... | Command | Exportar puntos... |  |
| Cut point cloud | Command | Cortar nube de puntos |  |
| Merge point clouds | Command | Combinar nube de puntos | ¿Combinar/Fusionar/Unir? |

#### [Reverse Engineering](/Reverse_Engineering_Workbench/es "Reverse Engineering Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Reverse Engineering | Workbench name |  |  |
| Reverse Engineering | Menu header |  |  |
| Surface Reconstruction | Generic term |  |  |
| Poisson... | Command |  |  |
| Structured point clouds... | Command |  |  |
| Segmentation | Generic term |  |  |
| Refinement... | Command |  |  |
| Curvature plot | Command |  |  |
| Curvature info | Command |  |  |
| Mesh segmentation... | Command |  |  |
| Manual segmentation... | Command |  |  |
| From components | Command |  |  |
| Wire from mesh boundary... | Command |  |  |
| Approximation | Generic term |  |  |
| Plane... | Command |  |  |
| Cylinder | Command |  |  |
| Sphere | Command |  |  |
| Polinomial surface | Command |  |  |
| Approximate B-spline surface... | Command |  |  |

#### [Robot](/Robot_Workbench/es "Robot Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Robot | Workbench name |  |  |
| Robot | Menu header |  |  |
| Insert Robots | Generic term |  |  |
| Kuka IR210 | Command |  |  |
| Kuka IR125 | Command |  |  |
| Kuka IR500 | Command |  |  |
| Kuka IR16 | Command |  |  |
| Add tool | Command |  |  |
|  |  |  |  |
| Place Robot... | Command |  |  |
|  |  |  |  |
| Create trajectory | Command |  |  |
| Insert in trajectory | Command |  |  |
| Insert in trajectory | Command |  |  |
| Edge to Trajectory... | Command |  |  |
|  |  |  |  |
| Dress-up trajectory... | Command |  |  |
| Trajectory compound... | Command |  |  |
|  |  |  |  |
| Set the home position | Command |  |  |
| Move to Home | Command |  |  |
| Set default orientation | Command |  |  |
| Set default values | Command |  |  |
| Simulate trajectory | Command |  |  |
| Export trajectory | Generic term |  |  |
| Kuka compact subroutine... | Command |  |  |
| Kuka full subroutine... | Command |  |  |

#### [Sketcher](/Sketcher_Workbench/es "Sketcher Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Sketcher | Workbench name |  |  |
| Sketch | Menu header |  |  |
| New sketch | Command |  |  |
| Edit sketch | Command |  |  |
| Leave sketch | Command |  |  |
| View sketch | Command |  |  |
| View section | Command |  |  |
| Map sketch to face... | Command |  |  |
| Reorient sketch... | Command |  |  |
| Validate sketch... | Command |  |  |
| Merge sketches | Command |  |  |
| Mirror sketch | Command |  |  |
| Stop operation | Command |  |  |
| Sketcher geometries | Generic term |  |  |
| Create point | Command |  |  |
| Create line | Command |  |  |
| Create arc by center | Command |  |  |
| Create arc by three points | Command |  |  |
| Create circle | Command |  |  |
| Create circle by three points | Command |  |  |
| Create ellipse by center | Command |  |  |
| Create ellipse by three points | Command |  |  |
| Create an arc of ellipse | Command |  |  |
| Create an arc of hyperbola | Command |  |  |
| Create an arc of parabola | Command |  |  |
| Create B-spline | Command |  |  |
| Create periodic B-spline | Command |  |  |
| B-spline by knots | Command |  |  |
| Periodic B-spline by knots | Command |  |  |
|  |  |  |  |
| Create polyline | Command |  |  |
| Create rectangle | Command |  |  |
| Create centered rectangle | Command |  |  |
| Create rounded rectangle | Command |  |  |
| Create equilateral triangle | Command |  |  |
| Create square | Command |  |  |
| Create pentagon | Command |  |  |
| Create hexagon | Command |  |  |
| Create heptagon | Command |  |  |
| Create octagon | Command |  |  |
| Create regular polygon | Command |  |  |
| Create slot | Command |  |  |
|  |  |  |  |
| Create fillet | Command |  |  |
| Create corner-preserving fillet | Command |  |  |
| Trim edge | Command |  |  |
| Extend edge | Command |  |  |
| Split edge | Command |  |  |
| External geometry | Command |  |  |
| Carbon copy | Command |  |  |
| Toggle construction geometry | Command |  |  |
| Sketcher constraints | Generic term |  |  |
| Constrain coinzident | Command |  |  |
| Constrain point onto object | Command |  |  |
| Constrain vertically | Command |  |  |
| Constrain horizontally | Command |  |  |
| Constrain parallel | Command |  |  |
| Constrain perpendicular | Command |  |  |
| Constrain tangent | Command |  |  |
| Constrain equal | Command |  |  |
| Constrain symmetrical | Command |  |  |
| Constrain block | Command |  |  |
|  |  |  |  |
| Constrain lock | Command |  |  |
| Constrain horizontal distance | Command |  |  |
| Constrain vertical distance | Command |  |  |
| Constrain distance | Command |  |  |
| Constrain radius or weight | Command |  |  |
| Constrain diameter | Command |  |  |
| Constrain auto radius/diameter | Command |  |  |
| Constrain angle | Command |  |  |
| Constrain refraction (Snell's law) | Command |  |  |
| Constrain internal alignment | Command |  |  |
|  |  |  |  |
| Toggle driving/reference constraint | Command |  |  |
| Aktivate/deactivate constraint | Command |  |  |
| Sketcher tools | Generic term |  |  |
| Select unconstrained DoF | Command |  |  |
| Select associated constraints | Command |  |  |
| Select associated geometry | Command |  |  |
| Select redundant constraints | Command |  |  |
| Select conflicting constraints | Command |  |  |
| Show/hide internal geometry | Command |  |  |
|  |  |  |  |
| Select origin | Command |  |  |
| Select vertical axis | Command |  |  |
| Select horizontal axis | Command |  |  |
|  |  |  |  |
| Symmetry | Command |  |  |
| Clone | Command |  |  |
| Copy | Command |  |  |
| Move | Command |  |  |
| Rectangular Array | Command |  |  |
| Remove axes alignment | Command |  |  |
|  |  |  |  |
| Delete all geometry | Command |  |  |
| Delete all constraints | Command |  |  |
| Sketcher B-spline tools | Generic term |  |  |
| Sketcher vitual space | Generic term |  |  |

#### [Spreadsheet](/Spreadsheet_Workbench/es "Spreadsheet Workbench/es")

Dado que las hojas de cálculo son algo común no tenemos que inventarnos las traducciones y podemos basarnos en otras ya hechas. En este caso se toma como ejemplo la traducción al español del programa LibreOffice Calc para los comandos de alineación.

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Spreadsheet | Workbench name |  |  |
| Spreadsheet | Menu header |  |  |
| Spreadsheet | Noun | Hoja de cálculo | A diferencia de las entradas anteriores aquí se usa como sustantivo en oraciones |
| Create spreadsheet | Command | Crear hoja de cálculo |  |
| Import spreadsheet | Command | Importar hoja de cálculo |  |
| Export spreadsheet | Command | Exportar hoja de cálculo |  |
| Merge cells | Command | Combinar celdas |  |
| Split cell | Command | Dividir celda |  |
| Alignment | Generic term | Alineación | ¿Alineación o alineamiento? Por el momento se usa alineación. |
| Align left | Command | Alinear a la izquierda | Tomado de LibreOffice |
| Align center | Command | Alinear al centro | Tomado de LibreOffice |
| Align right | Command | Alinear a la derecha | Tomado de LibreOffice |
| Align top | Command | Alinear arriba | Tomado de LibreOffice |
| Align vertical center | Command | Centrar verticalmente | Tomado de LibreOffice |
| Align bottom | Command | Alinear abajo | Tomado de LibreOffice |
| Styles | Generic term | Estilos |  |
| Bold text | Command | Texto en negrita |  |
| Italic text | Command | Texto en cursiva | ¿cursiva o itálica? |
| Underline text | Command | Texto subrayado |  |
|  |  |  |  |
| Set alias | Command | Establecer alias |  |
| Vista de tabla |  |  |  |
| Alias | Command | Alias |  |
| Content | Command |  |  |
| Ventana de propiedades |  |  |  |
| Cell properties | Window header | Propiedades de la celda |  |
| Color | Menu item | Color |  |
| Text | Description | Texto |  |
| Background | Description | Fondo |  |
|  |  |  |  |
| Alignment | Menu item | Alineación |  |
| Horizontal | Header | Horizontal |  |
| Left | Radio button | Izquierda |  |
| Center | Radio button | Centro |  |
| Right | Radio button | Derecha |  |
| Vertical | Header | Vertical |  |
| Top | Radio button | Arriba |  |
| Center | Radio button | Centro |  |
| Bottom | Radio button | Abajo |  |
|  |  |  |  |
| Style | Menu item | Estilo |  |
| Bold | Check box | Negrita |  |
| Italic | Check box | Cursiva |  |
| Underline | Check box | Subrayado |  |
|  |  |  |  |
| Display unit | Menu item | Mostrar unidad |  |
| Unit string | Description | Cadena de unidad |  |
|  |  |  |  |
| Alias | Menu item | Alias |  |
| Alias for this cell | Description | Alias para esta celda |  |
| Ajustes |  |  |  |
| Spreadsheet | Page name | Spreadsheet | No se ha cambiado |
| Import/Export Settings | Generic term | Opciones para Importar/Exportar |  |
| Delimiter Character | Description | Carácter delimitador |  |
| Quote Character | Description | Carácter de comilla |  |
| Escape Character | Description | Carácter de escape |  |

#### [Start](/Start_Workbench/es "Start Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Start | Workbench name |  |  |
| Start | Menu header |  |  |

#### [Surface](/Surface_Workbench/es "Surface Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Surface | Workbench name |  |  |
| Surface | Menu header |  |  |
| Filling... | Command |  |  |
| Fill boundary curves | Command |  |  |
| Sections... | Command |  |  |
| Extend face | Command |  |  |
| Curve on mesh... | Command |  |  |

#### [TechDraw](/TechDraw_Workbench/es "TechDraw Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| TechDraw | Workbench name |  |  |
| TechDraw | Menu header |  |  |
| Insert Default Page | Command |  |  |
| Insert Page using Template | Command |  |  |
| Redraw Page | Command |  |  |
| Insert View | Command |  |  |
| Insert Active View (3D View) | Command |  |  |
| Insert Projection Group | Command |  |  |
| Insert Section View | Command |  |  |
| Insert Detail View | Command |  |  |
| Insert Draft Workbench Object | Command |  |  |
| Insert Arch Workbench Object | Command |  |  |
| Insert Spreadsheet View | Command |  |  |
| Insert Clip Group | Command |  |  |
| Add View to Clip Group | Command |  |  |
| Remove View from Clip Group | Command |  |  |
| Move View | Command |  |  |
| Share View | Command |  |  |
| Dimensions | Generic term |  |  |
| Insert Length Dimension | Command |  |  |
| Insert Horizontal Dimension | Command |  |  |
| Insert Vertical Dimension | Command |  |  |
| Insert Radius Dimension | Command |  |  |
| Insert Diameter Dimension | Command |  |  |
| Insert Angle Dimension | Command |  |  |
| Insert 3-Point Angle Dimension | Command |  |  |
| Insert Horizontal Extent Dimension | Command |  |  |
| Insert Vertical Extent Dimension | Command |  |  |
| Link Dimension to 3D Geometry | Command |  |  |
| Insert Landmark Dimension - EXPERIMENTAL | Command |  |  |
| Extensions: Attrubutes/Modifications | Generic term |  |  |
| Select Line Attributes, Cascade Spacing and Delta Distance | Command |  |  |
| Change Line Attributes | Command |  |  |
| Extend Line | Command |  |  |
| Shorten Line | Command |  |  |
| Lock/Unlock View | Command |  |  |
| Position Section View | Command |  |  |
| Position Horizontal Chain Dimensions | Command |  |  |
| Position Vertical Chain Dimensions | Command |  |  |
| Position Oblique Chain Dimensions | Command |  |  |
| Cascade Horizontal Coordinate Dimensions | Command |  |  |
| Cascade Vertical Coordinate Dimensions | Command |  |  |
| Cascade Oblique Coordinate Dimensions | Command |  |  |
| Calculate the area of selected faces | Command |  |  |
| Customize Format Label | Command |  |  |
| Extensions: Centerlines/Threading | Generic term |  |  |
| Add Circle Centerlines | Command |  |  |
| Add Bolt Circle Centerlines | Command |  |  |
| Add Cosmetic Thread Hole Side View | Command |  |  |
| Add Cosmetic Thread Hole Bottom View | Command |  |  |
| Add Cosmetic Thread Bolt Side View | Command |  |  |
| Add Cosmetic Thread Bolt Bottom View | Command |  |  |
| Add Cosmetic Intersection Vertex(es) | Command |  |  |
| Add Cosmetic Circle | Command |  |  |
| Add Cosmetic Arc | Command |  |  |
| Add Cosmetic Circle 3 Points | Command |  |  |
| Add Cosmetic Parallel Line | Command |  |  |
| Add Cosmetic Perpendicular Line | Command |  |  |
| Extensions: Dimensions | Generic term |  |  |
| Create Horizontal Chain Dimension | Command |  |  |
| Create Vertical Chain Dimension | Command |  |  |
| Create Oblique Chain Dimension | Command |  |  |
| Create Horizontal Coordinate Dimension | Command |  |  |
| Create Vertical Coordinate Dimension | Command |  |  |
| Create Oblique Coordinate Dimension | Command |  |  |
| Create Horizontal Chamfer Dimension | Command |  |  |
| Create Vertical Chamfer Dimension | Command |  |  |
| Create Arc Length Dimension | Command |  |  |
| Insert '⌀' Prefix | Command |  |  |
| Insert '□' Prefix | Command |  |  |
| Remove Prefix | Command |  |  |
| Increase Decimal Places | Command |  |  |
| Decrease Decimal Places | Command |  |  |
|  |  |  |  |
| Export Page as SVG | Command |  |  |
| Export Page as DXF | Command |  |  |
| Hatch a Face using Image File | Command |  |  |
| Apply Geometric Hatch to Face | Command |  |  |
| Insert SVG Symbol | Command |  |  |
| Insert Bitmap Image | Command |  |  |
| Turn View Frames On/Off | Command |  |  |
| Annotations | Generic term |  |  |
| Insert Annotation | Command |  |  |
| Insert Rich Text Annotation | Command |  |  |
| Insert Balloon Annotation | Command |  |  |
| Add Lines | Generic term |  |  |
| Add Leaderline to View | Command |  |  |
| Add Centerline to Faces | Command |  |  |
| Add Centerline between 2 Lines | Command |  |  |
| Add Centerline between 2 Points | Command |  |  |
| Add Cosmetic Line Through 2 Points | Command |  |  |
| Add Vertices | Generic term |  |  |
| Add Cosmetic Vertex | Command |  |  |
| Add Midpoint Vertices | Command |  |  |
| Add Quadrant Vertices | Command |  |  |
|  |  |  |  |
| Remove Cosmetic Object | Command |  |  |
| Change Appearance of Lines | Command |  |  |
| Show/hide Invisible Edges | Command |  |  |
| Add Welding Information to Leaderline | Command |  |  |
| Project shape... | Command |  |  |

#### [Web](/Web_Workbench/es "Web Workbench/es")

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Web | Workbench name |  |  |
| Web | Menu header |  |  |

### Entornos de trabajo externos

#### [A2plus](/A2plus_Workbench "A2plus Workbench")

La traducción del entorno de trabajo **A2plus** se realiza en [su repositorio de GitHub](https://github.com/kbwbe/A2plus).
Revisar que las traducciones entre entornos de trabajo de ensamblaje sean congruentes entre sí.

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| A2plus | Workbench name |  |  |
| A2plus | Menu header |  |

#### [Assembly3](/Assembly3_Workbench "Assembly3 Workbench")

La traducción del entorno de trabajo **Assembly3** se realiza en [su repositorio de GitHub](https://github.com/realthunder/FreeCAD_assembly3).
Revisar que las traducciones entre entornos de trabajo de ensamblaje sean congruentes entre sí.

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Assembly3 | Workbench name |  |  |
| Assembly3 | Menu header |  |  |
| Create assembly | Command |  |  |
| Group objects | Command |  |  |
| Create element | Command |  |  |
| Import from STEP | Generic term |  |  |
| Import from STEP | Command |  |  |
| Import as multi-document | Command |  |  |
|  |  |  |  |
| Solve constraints | Command |  |  |
| Quick solve | Command |  |  |
| Move part | Command |  |  |
| Axial move part | Command |  |  |
| Quick move | Command |  |  |
| Lock mover | Command |  |  |
| Toggle part visibility | Command |  |  |
| Trace part move | Command |  |  |
| Auto recompute | Command |  |  |
| Smart recompute | Command |  |  |
| Auto fix element | Command |  |  |
| Element style | Generic term |  |  |
| Auto element visibility | Command |  |  |
| Show element coordinate system | Command |  |  |
| Workplan and origin | Generic term |  |  |
| Add workplane | Command |  |  |
| Add XZ workplane | Command |  |  |
| Add ZY workplane | Command |  |  |
| Add placement | Command |  |  |
| Add Origin | Command |  |  |
|  |  |  |  |
| Go to relation | Command |  |  |
| Select linked object | Command |  |  |
| Select linked final | Command |  |  |
| Move item up | Command |  |  |
| Move item down | Command |  |  |
| Multiply constraint | Command |  |

#### [Assembly4](/Assembly4_Workbench "Assembly4 Workbench")

La traducción del entorno de trabajo **Assembly4** se realiza en [su repositorio de GitHub](https://github.com/Zolko-123/FreeCAD_Assembly4).
Revisar que las traducciones entre entornos de trabajo de ensamblaje sean congruentes entre sí.

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Assembly4 | Workbench name |  |  |
| Assembly4 | Menu header |  |

#### [BIM](/BIM_Workbench "BIM Workbench")

La traducción del entorno de trabajo **BIM** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

**Se busca experto en el área, progreso 54%.**

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| BIM | Workbench name | **BIM** |  |
| BIM | Menu header |  |

#### CfdOF

La traducción del entorno de trabajo **CfdOF** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| CfdOF | Workbench name |  |

#### [Fasteners](/Fasteners_Workbench "Fasteners Workbench")

La traducción del entorno de trabajo **Fasteners** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Fasteners | Workbench name | **Elementos de sujeción** | ¿debería de traducirse? |
| Fasteners | Menu header | Elementos de sujeción | ¿debería de traducirse? |
| Fasteners | Noun | Elementos de sujeción | Usado como sustantivo en oraciones. No usar "sujetadores". |
| Screw | Noun | Tornillo |  |
| Bolt | Noun | Perno |  |
| Washer | Noun | Arandela |  |
| Nut | Noun | Tuerca |  |
| Threaded Rod | Noun | Barra roscada |  |
| Press Nut | Noun | Tuerca de presión |  |
| Standoff | Noun | Pilar | En busca de otro término |
| Spacer | Noun | Espaciador |  |
| Stud | Noun | Ancla |  |
| Screw Tap | Noun | Machuelo |  |
| Screw Die | Noun | Terraja | No se crea una terraja |
| Insert | Noun | Inserto | Del tipo de latón para piezas plásticas |
| Retaining Ring | Noun | Anillo retenedor |  |
| T-slot | Noun | Ranura en T |  |
| Hex head | Noun | Cabeza hexagonal |  |
| Hexagon socket | Noun | Zócalo hexagonal | Allen |
| Hexalobular socket | Noun | Zócalo hexalobular | Torx |
| Hexagon bolt | Noun | Perno hexagonal |  |
| Flange | Noun | Brida |  |
| Cap nut | Noun | Tuerca bellota |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |
|  | Noun |  |  |

#### [FCGear](/FCGear_Workbench "FCGear Workbench")

La traducción del entorno de trabajo **FCGear** se realiza en [[su repositorio de GitHub](https://github.com/looooo/freecad.gears).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| FCGear | Workbench name |  |  |
| FCGear | Menu header |  |

#### FreeGrid

La traducción del entorno de trabajo **Freegrid** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| FreeGrid | Workbench name |  |  |
| FreeGrid | Menu header |  |

#### [KiCadStepUp](/KicadStepUp_Workbench "KicadStepUp Workbench")

La traducción del entorno de trabajo **KiCadStepUp** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| KiCadStepUp | Workbench name |  |  |
|  |  |  |

#### [MOOC](/MOOC_Workbench "MOOC Workbench")

La traducción del entorno de trabajo **MOOC** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32160/en-es?view=comfortable).

**Se busca usuario interesado, progreso 0%.**

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| MOOC | Workbench name |  |  |
| MOOC | Menu header |  |

#### Movie

La traducción del entorno de trabajo **Movie** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32174/en-es?view=comfortable).

**Entorno nuevo, progreso 0%.**

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Movie | Workbench name |  |  |
| Movie | Menu header |  |

#### PieMenu

La traducción del entorno de trabajo **PieMenu** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| PieMenu | Workbench name |  |

#### Plot

La traducción del entorno de trabajo **Plot** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Plot | Workbench name |  |

#### [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench")

La traducción del entorno de trabajo **Reinforcement** se realiza en [(FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32161/en-es?view=comfortable).

**Se busca experto en el área, progreso 0%.**

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Reinforcement | Workbench name |  |  |
| Reinforcement | Menu header |  |

#### [Render](/Render_Workbench "Render Workbench")

La traducción del entorno de trabajo **Render** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32158/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Render | Workbench name |  |  |
| Render | Menu header |  |  |
| Projects | Generic term |  |  |
| Appleseed Project | Command |  |  |
| [File:Blender.svg](/index.php?title=Special:Upload&wpDestFile=Blender.svg "File:Blender.svg") Cycles Project | Command |  |  |
| Luxcore Project | Command |  |  |
| Ospray Project | Command |  |  |
| Pbrt Project | Command |  |  |
| Povray Project | Command |  |  |
|  |  |  |  |
| Camera | Command |  |  |
| Lights | Generic term |  |  |
| Point Light | Command |  |  |
| Area Light | Command |  |  |
| Sunsky Light | Command |  |  |
| Image Light | Command |  |  |
|  |  |  |  |
| Rendering View | Command |  |  |
| Materials | Generic term |  |  |
| Create Material | Command |  |  |
| Edit Material Rendering Settings | Command |  |  |
| Apply Material | Command |  |  |
|  |  |  |  |
| Render | Command |  |

#### [Rocket](/Rocket_Workbench "Rocket Workbench")

La traducción del entorno de trabajo **Rocket** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32156/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Rocket | Workbench name |  |  |
| Rocket | Menu header |  |

#### [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench")

La traducción del entorno de trabajo **SheetMetal** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

**Se busca revisor, progreso 100%.**

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Sheet Metal | Workbench name |  | ? |
| Sheet Metal | Menu header |  | ? |
| Make Base Wall | Command | Crear pared base |  |
| Make Wall | Command | Crear pared |  |
| Extend Face | Command | Extender cara |  |
| Fold a Wall | Command | Plegar una pared |  |
| Unfold | Command | Desplegar |  |
| Unattended Unfold | Command | Despliegue desatendido | ? |
| Add Corner Relief | Command | Añadir alivio de esquino |  |
| Make Relief | Command | Crear alivio |  |
| Make Junction | Command | Crear unión |  |
| Make Bend | Command | Crear doblez |  |
| Sketch On Sheet metal | Command | Boceto en chapa metálica |  |
| Make Forming in Wall | Command | Crear formado en pared |  |

#### Ship

La traducción del entorno de trabajo **Ship** se realiza en [Crowdin (FreeCAD-addons)](https://crowdin.com/editor/freecad-addons/32152/en-es?view=comfortable).

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Ship | Workbench name |  |

## Términos técnicos

### Del inglés

| Expresión en inglés | Función | Expresión en español | Comentarios |
| --- | --- | --- | --- |
| Constraint | Noun | Restricción |  |
| Topological naming problem | Noun | Problema de denominación topológica |  |

### Del español

| Ausdruck | Beschreibung |
| --- | --- |
| Dibujo |
| cota | Los objetos/piezas de trabajo tienen dimensiones como longitud, anchura, altura y espesor de pared. Se ingresan como dimensiones en un dibujo. |

## Estadísticas de traducción

### Traducciones en los últimos 30 días

### Traducciones en el último año y medio

### Participación de traductores en el último año y medio

### Revisión de traducción en el último año y medio

Retrieved from "<http://wiki.freecad.org/index.php?title=Spanish_Translation&oldid=1477753>"