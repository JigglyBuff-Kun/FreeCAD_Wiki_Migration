---
title: Ambiente de trabajo OpenSCAD
---

![](/images/Workbench_OpenSCAD.svg)

El icono del Ambiente de trabajo OpenSCAD

## Introducción

El ![](/images/Workbench_OpenSCAD.svg) Ambiente de trabajo OpenSCAD tiene como objetivo ofrecer interoperabilidad con el software de código abierto [OpenSCAD](http://www.openscad.org/). Este programa no se distribuye como parte de FreeCAD, pero debe ser instalado para hacer uso completo de este banco de trabajo. No se debe confundir OpenSCAD con [OpenCASCADE](/OpenCASCADE/es "OpenCASCADE/es"), que es el núcleo geométrico que FreeCAD utiliza para construir la geometría en la pantalla. Las bibliotecas de OpenCASCADE siempre son necesarias para usar FreeCAD, mientras que el ejecutable de OpenSCAD es totalmente opcional.

Contiene un [importador](/OpenSCAD_CSG/es "OpenSCAD CSG/es") que permite abrir los archivos CSG de OpenSCAD en FreeCAD, y un exportador para producir un árbol basado en CSG. La geometría que no esté basada en operaciones CSG será exportada como una malla.

Este ambiente de trabajo contiene funciones para modificar el árbol de características CSG y reparar modelos. También contiene herramientas de propósito general que no requieren la instalación de OpenSCAD; se pueden utilizar junto con otros ambientes de trabajo. Por ejemplo, el [ambiente de trabajo Mesh](/Mesh_Workbench/es "Mesh Workbench/es") utiliza internamente las funciones de OpenSCAD para realizar operaciones con [meshes](/index.php?title=Mesh/es&action=edit&redlink=1 "Mesh/es (page does not exist)"), ya que son bastante robustas.

![](/images/OpenSCADexamaple1.png)

## Dependencias

En FreeCAD 0.19, el módulo Ply (Python-Lex-Yacc), que se utiliza para importar archivos CSG, fue eliminado del código fuente de FreeCAD, ya que es una biblioteca de terceros no desarrollada por FreeCAD. Como resultado, ahora es necesario instalar Ply antes de utilizar el ambiente de trabajo OpenSCAD. Cuando se utiliza una versión estable y pre-empaquetada de FreeCAD esta dependencia debería instalarse automáticamente en todas las plataformas; en otros casos, por ejemplo, cuando se [compila](/Compiling/es "Compiling/es") desde el código fuente, puede que tengas que instalarlo desde un repositorio online.

En openSUSE esto se hace mediante:

```
sudo zypper install python3-ply

```

En los sistemas basados en Debian/Ubuntu esto se hace de la siguiente manera:

```
sudo apt install python3-ply

```

La instalación general en todas las plataformas se puede hacer desde el índice de paquetes de Python.

```
pip3 install --user ply

```

## OpenSCAD lenguaje y formato de archivo

El lenguaje de OpenSCAD permite la utilización de variables y bucles. Permite especificar submódulos para reutilizar geometría y código. Esta alto grado de flexibilidad hace el análisis sintáctico muy complejo. Actualmente el módulo OpenSCAD en FreeCAD no puede manejar el lenguaje de OpenSCAD de forma nativa.
En cambio si OpenSCAD está instalado, se puede utilizar para convertir la entrada en un formato de salida denominado 'CSG'. Es un subconjunto del lenguaje OpenSCAD y se puede utilizar como la entrada de OpenSCAD para su procesamiento posterior.
Durante la conversión todo el comportamiento paramétrico se pierde. Todos los nombres de variables serán desechados, los bucles expandidos y las expresiones matemáticas evaluadas.

## Herramientas

- ![](/images/OpenSCAD_ColorCodeShape.svg) [ColorCodeShape](/OpenSCAD_ColorCodeShape/es "OpenSCAD ColorCodeShape/es"): Cambia el color de la selección o todas las formas basadas en su validez
- ![](/images/OpenSCAD_ReplaceObject.svg) [Reemplazar objeto](/OpenSCAD_ReplaceObject/es "OpenSCAD ReplaceObject/es"): Reemplaza una objeto en el árbol de operaciones. Por favor, selecciona los objetos antiguos, nuevos y padres
- ![](/images/OpenSCAD_RemoveSubtree.svg) [Eliminar sub-árbol](/OpenSCAD_RemoveSubtree/es "OpenSCAD RemoveSubtree/es"): Elimina los objetos seleccionados y todos sus descendientes que no estén referenciados desde otros objetos
- ![](/images/OpenSCAD_RefineShapeFeature.svg) [Refinar operación de forma](/OpenSCAD_RefineShapeFeature/es "OpenSCAD RefineShapeFeature/es"): Crea una operación de forma refinada
- ![](/images/OpenSCAD_MirrorMeshFeature.svg) [Elemento de malla espejo](/index.php?title=OpenSCAD_MirrorMeshFeature/es&action=edit&redlink=1 "OpenSCAD MirrorMeshFeature/es (page does not exist)"): Crear característica de malla de espejo.
- ![](/images/OpenSCAD_ScaleMeshFeature.svg) [Escalar la característica de malla](/index.php?title=OpenSCAD_ScaleMeshFeature/es&action=edit&redlink=1 "OpenSCAD ScaleMeshFeature/es (page does not exist)"): Escala una característica de malla.
- ![](/images/OpenSCAD_ResizeMeshFeature.svg) [Redimensionar elemento de malla](/index.php?title=OpenSCAD_ResizeMeshFeature/es&action=edit&redlink=1 "OpenSCAD ResizeMeshFeature/es (page does not exist)"): Cambia el tamaño de una característica de malla.

![](/images/OpenSCAD_IncreaseToleranceFeature.svg)
[Función de aumento de la tolerancia](/OpenSCAD_IncreaseToleranceFeature/es "OpenSCAD IncreaseToleranceFeature/es"): Aumenta la tolerancia de bordes/caras/vértice de objeto(s) seleccionado(s).

- ![](/images/OpenSCAD_Edgestofaces.svg) [Aristas a caras](/OpenSCAD_Edgestofaces/es "OpenSCAD Edgestofaces/es"): Convierte aristas a caras. Útil para preparar geometría DXF importada para su extrusión.
- ![](/images/OpenSCAD_ExpandPlacements.svg) [Expandir ubicación](/OpenSCAD_ExpandPlacements/es "OpenSCAD ExpandPlacements/es"): Expande todas las ubicaciones por debajo del árbol de operaciones
- ![](/images/OpenSCAD_ExplodeGroup.svg) [Explotar grupo](/OpenSCAD_ExplodeGroup "OpenSCAD ExplodeGroup"): explota las partes primitivas fusionadas.
- ![](/images/OpenSCAD_AddOpenSCADElement.svg) [Añadir elementos OpenSCAD](/OpenSCAD_AddOpenSCADElement/es "OpenSCAD AddOpenSCADElement/es"): Añade un elemento OpenSCAD introduciendo código OpenSCAD en el panel de tareas y ejecutando el binario de OpenSCAD (requiere de OpenSCAD)
- ![](/images/OpenSCAD_MeshBoolean.svg) [Mesh Booleana](/OpenSCAD_MeshBoolean "OpenSCAD MeshBoolean"): Crea un nuevo objeto de malla mediante una operación booleana a partir de formas.
- ![](/images/OpenSCAD_Hull.svg) [Casco](/index.php?title=OpenSCAD_Hull/es&action=edit&redlink=1 "OpenSCAD Hull/es (page does not exist)"): Aplica un casco a las formas seleccionadas.
- ![](/images/OpenSCAD_Minkowski.svg) [Minkowski](/index.php?title=OpenSCAD_Minkowski/es&action=edit&redlink=1 "OpenSCAD Minkowski/es (page does not exist)"): Aplica una suma de minkowski a las formas seleccionadas.

## Preferencias

- ![](/images/Std_DlgParameter.svg) [Preferencias](/OpenSCAD_Preferences/es "OpenSCAD Preferences/es"): Preferencias disponibles para las herramientas de OpenSCAD.

## Limitations

## Limitaciones

OpenSCAD crea geometría sólida constructiva, así como importa archivos de malla y extruye geometría 2D desde archivos [DXF](/DXF/es "DXF/es"). FreeCAD permite crear CSG con primitivas también.

```
El núcleo de geometría de FreeCAD (OCCT) funciona trabajando sobre una representación de los limites.

```

Por tanto la conversión de CSG a BREP en teoría debería ser posible. Mientras que una conversión de BREP a CSG es, en general, imposible.

OpenSCAD funciona internamente sobre mallas. Algunas operaciones que son útiles en mallas no son significativas en un modelo BREP y no pueden ser totalmente compatibles. Entre estos se encuentran el convex hull, minkowski sum, glide y subdiv. Actualmente ejecutamos el binario OpenSCAD para realizar operaciones de hull y minkwoski e importar el resultado. Esto significa que la geometría involucrada será triangulada. En OpenSCAD, a menudo se usa una escala no uniforme, que no impone ningún problema cuando se usan mallas. En nuestra geometría, las primitivas geométricas del núcleo (líneas, secciones circulares, etc.) se convierten a BSpline antes de realizar tales deformaciones. Esas líneas de BS son conocidas por causar problemas en operaciones booleanas posteriores. Una solución automática no está disponible en este momento. Por favor, siéntase libre de publicar en el foro si encuentra tales problemas. A menudo, tales problemas se pueden resolver remodelando piezas pequeñas. Una deformación de un cilindro puede sustituirse por una extrusión de una elipsis.

## Importing text

Importing OpenSCAD code with texts requires that the fonts that are used are properly installed on your system. You can verify this by opening OpenSCAD as a standalone tool and checking the list in **Help → Font List**. The list will also give you the correct font names. If a font does not appear in the list after installing, you may have to manually copy the font file to the appropriate system directory.

Importing texts is relatively slow. Behind the scenes FreeCAD uses a DXF file created by OpenSCAD. The more contours there are the slower the import.

It can be a good idea to first import a simple test case (replace `NameOfFont` with the correct font name):

```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};

```

The `script="Latn"` parameter can be left out here, but is required if the text string does not contain any letters, but only punctuation and/or numbers.

Please note that `use <FONT>;` statements in your source files are ignored when importing in FreeCAD. Under OpenSCAD the effect of a `use` statement is that the provided font file is temporarily added to the list of known fonts (although even there the statement does not work when a script is modified interactively).

## Pistas

Cuando se importa [DXF](/DXF/es "DXF/es") establecer la precisión Borrador a una cantidad sensible para que afecte a la detección de aristas conectadas.

Si FreeCAD se cuelga importando CSG, es muy recomendable activar _automáticamente comprobar el modelo después de una operación booleana_ en **Menú → Editar → Preferencias → DiseñoPiezas → Configuración del modelo**

## Tutoriales

- [Importar código OpenSCAD](/Import_OpenSCAD_code/es "Import OpenSCAD code/es")

## Enlaces

- Repositorio de código fuente de OpenSCAD en [GitHub](https://github.com/openscad/openscad)
- [Open tickets tagged "Openscad" on the FreeCAD bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD)
- [Elementos etiquetados con "Openscad" en Thingiverse](http://www.thingiverse.com/tag:openscad)

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Workbench/es&oldid=1515587>"
