---
title: Estructura del documento
---
![](/images/Screenshot_treeview.jpg)

Un *documento* FreeCAD contiene todos los objetos de la escena. Puede contener grupos y objetos hechos con cualquier *entorno de trabajo*. Por lo tanto, puedes cambiar entre los *entornos de trabajo*, y seguir trabajando en el mismo documento. El documento es lo que se guarda en el disco al guardar tu trabajo. También puedes abrir varios documentos al mismo tiempo en FreeCAD, y abrir varias vistas del mismo documento.

En el documento, los objetos se pueden mover e incorporar a grupos, y cada objeto tiene un nombre único, exclusivo. La gestión de grupos, objetos y nombres de objeto se hace principalmente en la vista de árbol. También se puede hacer, por supuesto, como todo en FreeCAD, desde el intérprete de Python. En la vista de árbol, se pueden crear grupos, mover objetos a grupos, eliminar objetos o grupos,... haciendo clic con el botón derecho del ratón en la vista en árbol o en un objeto, cambiar el nombre de los objetos haciendo doble clic sobre sus nombres,... o posiblemente otras operaciones, en función del *entorno de trabajo* en curso.

Los objetos dentro de un documento FreeCAD pueden ser de diferentes tipos. Cada *entorno de trabajo* puede crear sus propios tipos de objetos, por ejemplo, el [Entorno de trabajo de mallas](/Mesh_Workbench/es "Mesh Workbench/es") crea objetos de malla, el [Entorno de trabajo de piezas](/Part_Workbench/es "Part Workbench/es") crear objetos de piezas, el [Entorno de croquizado 2D](/Draft_Workbench/es "Draft Workbench/es") también crea objetos Pieza, etc

Si hay uno o más documentos abiertos en FreeCAD, siempre alguno de ellos, y sólo uno, será el *documento activo*. Ese es el documento que aparece en la vista 3D actual, el documento con el que se está trabajando actualmente.

## Aplicación e interfaz de usuario

Como casi todo lo demás en FreeCAD, la interfaz de usuario (*GUI*) del entorno de trabajo de piezas está separada de la aplicación base de piezas. Esto también es válido para los documentos. Los documentos también están hechos de dos partes: el documento de la aplicación, que contiene nuestros objetos, y el documento *Vista*, que contiene la representación en pantalla de nuestros objetos.

Piensa en ello como dos espacios, donde los objetos están definidos. Sus parámetros constructivos (¿es un cubo? ¿Un cono? ¿Qué tamaño? ...) se almacenan en el documento de aplicación, mientras que su representación gráfica (¿es dibujado con línea negra? ¿Con las caras azules? ...) se almacena en el documento Vista. ¿Por qué? Porque FreeCAD también puede ser utilizado sin interfaz gráfica, por ejemplo dentro de otros programas y, aún así, tenemos que ser capaces de manipular nuestros objetos, incluso si no se dibujan en la pantalla.

Otra cosa que está contenida en el *documento Vista* son las *vistas* 3D. Un documento puede tener varias vistas abiertas, así que puedes inspeccionar tu documento desde varios puntos de vista al mismo tiempo. Tal vez te gustaría ver una vista superior y una vista frontal de tu trabajo, al mismo tiempo. De ese modo, tendrías dos puntos de vista del mismo documento, ambos almacenados en el documento Vista. Crear puntos de vista nuevos o cerrar vistas se puede hacer desde el *menú* Vista o haciendo clic derecho en la *pestaña* de una vista.

## Archivos de guión

Los documentos se pueden crear fácilmente, acceder y modificar desde el intérprete de Python. Por ejemplo:

```
FreeCAD.ActiveDocument

```

devolverá el documento activo actual

```
FreeCAD.ActiveDocument.Blob

```

accedería a un objeto llamado "Blob" dentro de tu documento

```
FreeCADGui.ActiveDocument

```

devolvería el *documento vista* asociado al documento actual

```
FreeCADGui.ActiveDocument.Blob

```

accedería a la parte representación gráfica (*vista*) de nuestro objeto Blob

```
FreeCADGui.ActiveDocument.ActiveView

```

devolverá la vista actual

Retrieved from "<http://wiki.freecad.org/index.php?title=Document_structure/es&oldid=1536772>"