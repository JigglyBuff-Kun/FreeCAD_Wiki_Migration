---
title: Std GrafoDependencia
---
|  |
| --- |
| Std GrafoDependencia |
| Ubicación en el Menú |
| Hierramientas → Grafo Dependencia... |
| Entornos de trabajo |
| Todo |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

El comando **Std GrafoDependencia** muestra las dependencias entre los objetos del documento activo en un "gráfico de dependencias". A diferencia de la [Vista de árbol](/Tree_view/es "Tree view/es"), los objetos se enumeran en orden cronológico inverso, con el primer objeto creado en la parte inferior.

Puede ser útil para analizar un documento de FreeCAD y localizar bifurcaciones en un árbol. El diseño del gráfico de dependencia dependerá del ambiente de trabajo que se haya utilizado para crear los objetos en el documento. Por ejemplo, un modelo hecho exclusivamente en el ambiente de trabajo [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") puede mostrar un gráfico de dependencia lineal con una sola rama vertical. Un modelo hecho con operaciones [Pieza](/Part_Workbench/es "Part Workbench/es") tendrá muchas ramas, pero para una sola parte se unirán en la parte superior después de las operaciones [Booleano](/Part_Boolean/es "Part Boolean/es"). Si no lo hacen, significa que son objetos separados.

El gráfico de dependencias es una mera herramienta de visualización, por lo que no puede editarse. Se actualiza automáticamente si se realizan cambios en el modelo.

![](/images/Std_DependencyGraph_example.svg)

Ejemplo de un gráfico de dependencia con un cuerpo de DiseñoPiezas a la izquierda y un objeto creado con operaciones de Pieza a la derecha

## Instalación

Para utilizar el comando es necesario instalar un software de terceros llamado [Graphviz](http://graphviz.org/). Si no lo tienes preinstalado o está instalado en una ubicación no convencional, FreeCAD mostrará el siguiente diálogo:

![](/images/FreeCAD-0.17-missing-Graphviz-error-dialogue.png)

The saved path can be changed in the [Parameter Editor](/Std_DlgParameter "Std DlgParameter") under **BaseApp → Preferences → Paths → Graphviz**.

### Windows

Descarga el instalador **graphviz-2.xx** de la página [Graphviz Download page](https://graphviz.org/download/#windows) y ejecútalo para instalarlo. Algunas versiones anteriores parecen tener problemas para mostrar el gráfico; se sabe que la versión 2.38 y las más recientes son fiables. Puedes encontrar todas las versiones de graphviz en [Gitlab](https://gitlab.com/graphviz/graphviz/-/releases).

### Mac/OSX

Puedes instalar graphviz usando [Homebrew](https://brew.sh/). (Mientras instalas Homebrew, no te pongas nervioso, si MacOS te pide que instales actualizaciones, por ejemplo, para las herramientas de línea de comandos de Xcode. Estas actualizaciones se realizan posteriormente por el proceso de instalación).

```
brew install graphviz

```

Esto instala los binarios de graphviz en /usr/local/bin. FreeCAD buscará allí por sí mismo. Si el programa no se encuentra allí se le pide que introduzca la ruta. Desgraciadamente no podemos navegar directamente hasta allí desde el diálogo de archivos que aparece desde **Herramientas → Gráfico dependencia...**.
Cuando te sale el diálogo de selección de archivos tienes dos posibilidades: Puedes utilizar la combinación de teclas Cmd+Shift+. que te mostrará todos los elementos ocultos. O bien utilizar las teclas Cmd+Shift+G para obtener un campo de entrada para la ruta. Entrar

```
/usr/local/bin

```

or:

```
/opt/homebrew/bin

```

y confirmar el campo de entrada y el diálogo de selección de archivos.

En caso de que los binarios de Graphviz estén instalados en una ubicación no estándar, intente encontrar el programa con el comando

```
type dot

```

El resultado será algo así como

```
dot is /usr/local/bin/dot

```

Y por lo tanto puedes decirle a FreeCAD que busque en ese directorio.

If you don't have macOS Big Sur (11) (or higher) Homebrew might not work, but you can use [MacPorts](https://www.macports.org/index.php) instead. Just download the [appropriate version for your OS](https://www.macports.org/install.php). Once the installation is complete, enter this command in the [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)):

```
sudo port install graphviz

```

Enter your password and wait while the dependencies are downloaded and installed (it can take some time).

The Graphviz binaries may be under /usr/local/bin or /opt/local/bin/dot. FreeCAD may automatically find the Graphviz program with the file dialog that comes up from **Tools → Dependency graph...**, if not enter this command:

```
type dot

```

It will output something like:

```
dot is /opt/local/bin/dot

```

And you can tell FreeCAD to look in that directory as explained before.

It is also possible to make the opt directory visible with this command:

```
defaults write com.apple.finder AppleShowAllFiles YES;

```

then:

```
killall Finder /System/Library/CoreServices/Finder.app;

```

Therefore you can tell FreeCAD to follow this path. It has been successfully tested on macOS 10.13 (High Sierra).

### Linux

En la mayoría de las distribuciones de Linux (Debian/Ubuntu, Fedora, OpenSUSE), basta con instalar el paquete Graphviz desde los repositorios. Sin embargo, al igual que en Mac/OSX, en los casos en los que los binarios de Graphviz están instalados en una ubicación no estándar, intente encontrar el programa con el comando:

```
type dot

```

El resultado puede ser algo así como

```
dot is /usr/local/bin/dot

```

Y por tanto puedes indicar a FreeCAD que busque en ese directorio.

## Utilización

1. Seleccione la opción **Hierramentas → ![](/images/Std_DependencyGraph.svg) Gráfico dependencia...** en el menú.
2. Se abre una nueva pestaña titulada **Gráfico dependencia** en la [Área de vista principal](/Main_view_area/es "Main view area/es").
3. Utilice la rueda de desplazamiento del ratón para acercarse o alejarse.
4. Utiliza los deslizadores de la parte inferior y de la derecha de la pantalla para desplazar la vista. Alternativamente ([introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")) mantenga pulsado el botón izquierdo del ratón y mueva el ratón.

## Guardar

Puede guardar un gráfico dependencia:

1. Asegúrese de que la ficha del gráfico dependencia está en primer plano.
2. Seleccione la opción **Archivo → [Guardar](/Std_Save/es "Std Save/es")** o **Archivo → [Guardar como](/Std_SaveAs "Std SaveAs")** del menú.
3. Introduzca un nombre de archivo y seleccione el tipo de archivo (\*.png, \*.bmp, \*.gif, \*.jpg, \*.svg o \*.pdf).
4. Pulse el botón Guardar.

## Principios generales

* El gráfico muestra los objetos en orden cronológico inverso.
* La dirección de las flechas que muestran las dependencias debe apuntar siempre hacia abajo, desde el objeto hijo hacia el objeto padre. Una flecha apuntando hacia arriba indica una dependencia cíclica, un problema que necesita ser resuelto.
* Un croquis que contenga enlaces a [geometría externa](/Sketcher_External/es "Sketcher External/es") tendrá un número con un sufijo 'x' junto a la flecha que lo enlaza con su padre, mostrando el número de geometrías externas enlazadas en el croquis.
* Los objetos pueden tener dependencias de múltiples padres. Por ejemplo, para un modelo construido en [DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es"), un Cajera puede estar vinculado a su croquis y a la característica Pastilla que le precede.
* Las dependencias no permitidas (por ejemplo, entre una operación [Borrador](/Draft_Workbench/es "Draft Workbench/es")/[Pieza](/Part_Workbench/es "Part Workbench/es") y un elemento dentro de un cuerpo de DiseñoPieza) se mostrarán con una flecha roja. Este tipo de enlace suele mostrar un error "Los enlaces salen del ámbito permitido" en la [Vista de informe](/Report_view/es "Report view/es").
* Un [Contenedor de parte](/Std_Part/es "Std Part/es") y [Cuerpo DiseñoPieza](/PartDesign_Body/es "PartDesign Body/es") encierran su contenido dentro de un marco con un fondo de color aleatorio. Su Origen también encierra su contenido (planos y ejes estándar) en un marco.
* Un [Grupos](/Std_Group/es "Std Group/es") se muestra como un único elemento vinculado a su contenido.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DependencyGraph/es&oldid=1536845>"