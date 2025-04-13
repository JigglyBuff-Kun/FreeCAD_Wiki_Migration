---
title: Módulos extra de python
---
## Overview

## Vista general

En esta página se enumeran varios módulos adicionales de python u otras piezas de software que pueden descargarse libremente de Internet, y que añaden funcionalidad a su instalación de FreeCAD.

## PySide

## PySide (anteriormente PyQt4)

* página web (PySide): <http://qt-project.org/wiki/PySide>
* licencia: LGPL
* opcional, pero necesario para varios módulos: Borrador, Arco, Barco, Gráfica, OpenSCAD, Hoja de cálculo

PySide (antes PyQt) es requerido por varios módulos de FreeCAD para acceder a la interfaz Qt de FreeCAD. Ya está incluido en la versión de Windows de FreeCAD, y suele ser instalado automáticamente por FreeCAD en Linux, cuando se instala desde los repositorios oficiales. Si esos módulos (Draft, Arch, etc.) se activan después de que se instale FreeCAD, significa que PySide (antes PyQt) ya está ahí, y no es necesario hacer nada más.

**Nota:** FreeCAD se alejó progresivamente de PyQt después de la versión 0.13, a favor de [PySide](http://qt-project.org/wiki/PySide), que hace exactamente el mismo trabajo pero tiene una licencia (LGPL) más compatible con FreeCAD.

### Instalación

#### Linux

#### Linux

La vía más simple para instalar PySide es a través del administrador de paquetes de su distribución. En los sistemas Debian/Ubuntu, el nombre del paquete es generalmente *python-PySide*, mientras que en los sistemas basados en RPM se llama *pyside*. Las dependencias necesarias (Qt y SIP) serán atendidas automáticamente.

#### Windows

#### Windows

El programa puede ser descargado de <http://qt-project.org/wiki/Category:LanguageBindings::PySide::Downloads> . Necesitarás instalar las librerías Qt y SIP antes de instalar PySide (para ser documentado).

#### MacOS

#### MacOSX

PyQt en Mac puede ser instalado vía homebrew o puerto. Ver [Instalar dependencias](/Compile_on_MacOS/es#Install_Dependencies "Compile on MacOS/es") para más información.

### Usage

### Uso

Una vez instalado, puede comprobar que todo funciona escribiendo en la consola python de FreeCAD:

```
import PySide

```

Para acceder a la interfaz de FreeCAD, escriba :

```
from PySide import QtCore,QtGui
FreeCADWindow = FreeCADGui.getMainWindow()

```

Now you can start to explore the interface with the dir() command. You can add new elements, like a custom widget, with commands like:

```
FreeCADWindow.addDockWidget(QtCore.Qt.RghtDockWidgetArea,my_custom_widget)

```

Working with Unicode:

```
text = text.encode('utf-8')

```

Working with QFileDialog and OpenFileName:

```
path = FreeCAD.ConfigGet("AppHomePath")
#path = FreeCAD.ConfigGet("UserAppData")
OpenName, Filter = PySide.QtGui.QFileDialog.getOpenFileName(None, "Read a txt file", path, "*.txt")

```

Working with QFileDialog and SaveFileName:

```
path = FreeCAD.ConfigGet("AppHomePath")
#path = FreeCAD.ConfigGet("UserAppData")
SaveName, Filter = PySide.QtGui.QFileDialog.getSaveFileName(None, "Save a file txt", path, "*.txt")

```

### Additional documentation

* [Qt official documentation site](https://doc.qt.io/qt.html#qtforpython)

## Pivy

* homepage: <https://www.coin3d.org/>
* license: BSD
* optional, but needed by several modules of FreeCAD: Draft, BIM

Pivy is a needed by several modules to access the 3D view of FreeCAD. On windows, Pivy is already bundled inside the FreeCAD installer, and on Linux it is usually automatically installed when you install FreeCAD from an official repository. On macOS, unfortunately, you will need to compile pivy yourself.

### Instalación

#### Prerequisites

#### Requisitos previos

Creo que antes de compilar Pivy querrás tener Coin y SoQt instalados.

Para construirlo en Mac es suficiente instalar el [paquete binario de Coin3](http://www.coin3d.org/lib/plonesoftwarecenter_view). Intentar instalar Coin desde MacPorts es problemático: añadir un montón de paquetes de X Windows y finalmente se cuelga con un error de script.

Para Fedora encontré un RPM con Coin3.

SoQt compilado desde [código fuente](http://www.coin3d.org/lib/soqt/releases/1.5.0) funciona bien en Mac y Linux.

#### Debian & Ubuntu

#### Debian & Ubuntu

Empezando con Debian Squeeze y Ubuntu Lucid, pivy está disponible directamente desde los repositorios oficiales, ahorrándonos un montón de dificultades. Mientras tanto, puedes descargar uno de los paquetes que hemos creado (para Debian y Ubuntu karmic) disponibles en la página de [Descargas](/Download/es "Download/es"), o compilarlo tu mismo.

El mejor modo de compilar pivy siomplemente es aprovechar el paquete de código fuente de Debian para pivy y crear un paquete con debuild. Es el mismo código fuente desde la web oficial de pivy, pero la gente de Debian han creado varios parches adicionales. También se compila bien en Ubuntu karmic: <http://packages.debian.org/squeeze/python-pivy>, descarga los archivos .orig.gz y .diff.gz, luego descomprimelos, y aplica .diff al código fuente: ve a las carpetas del código fuente descomprimido de pivy, y aplica el parche .diff:

```
patch -p1 < ../pivy_0.5.0~svn765-2.diff

```

luego

```
debuild

```

para tener pivy correctamente construido en un paquete oficial de instalación. A continuación, simplemente instala el paquete con gdebi.

#### Other Linux distributions

#### Otras distribuciones Linux

Primero consigue la última versión del código fuente de [los repositorios del proyecto](http://pivy.coin3d.org/mercurial/):

Information to be added.

En marzo de 2012, la última versión es Pivy-0.5

Luego necesitas una herramienta llamada SWIG para generar el código C++ para la vinculación de Python. Pivy-0.5 informa que sólo ha sido comprobado con SWIG 1.3.31, 1.3.33, 1.3.35, y 1.3.40. Así que puedes descargar el código fuente en un tarball para una de dichas versiones anteriores desde <http://www.swig.org>. Luego descomprimelo y desde la línea de comandos haz lo siguiente (como root):

```
./configure
make
make install (or checkinstall if you use it)

```

Esto tardará unos segundos en construirse.

Como alternativa, puedes tratar de construir con un SWIG más reciente. En marzo de 2012, una versión típica del repositorio es la 2.0.4. Pivy tiene un problema menor de compilación con SWIG 2.0.4 en Mac OS (mira más abajo) pero parece construirse bien en Fedora Core 15.

Después de eso ve al archivo que va a los recursos de pivy y ejecuta

```
python setup.py build

```

lo que creará los archivos fuente. Ten en cuenta que la construcción puede producir miles de advertencias, pero afortunadamente no hay errores.

Es posible que esto esté obsoleto, pero puedes llegar a un error de compilación donde una constante de tipo caracter (char) no puede ser convertida en una 'char\*'. Para solucionarlo sólo necesitas escribir una constante antes de las líneas apropiadas. Hay 6 líneas que corregir.

Después de eso, instalar por publicación (como root):

```
python setup.py install (or checkinstall python setup.py install)

```

Eso es todo, pivy está instalado.

#### MacOS

#### Mac OS

Estas instrucciones puede que no estén completas. Algo parecido funciona para OS 10.7 en marzo de 2012. He utilizado MacPorts para los repositorios, pero también deberían funcionar otras opciones.

Para Linux, consigue la última vcersión del código fuente:

```
hg clone http://hg.sim.no/Pivy/default Pivy

```

Si no tienes hg, puedes conseguirlo desde MacPorts:

```
port install mercurial

```

Luego, como se indica arriba, necesitas SWIG. Debería ser cuestión de hacer:

```
port install swig

```

He encontrado que también necesitaba:

```
port install swig-python

```

En marzo de 2012, la versión de SWIG en MacPorts es la 2.0.4. Como se ha indicado arriba para Linux, podría ser mejor que descargaras una versión más antigua. SWIG 2.0.4 parece tener un error que detiene la construcción de Pivy. Mira el primer mensaje en este enlace: <https://sourceforge.net/mailarchive/message.php?msg_id=28114815>

Esto se puede corregir editando las dos ubicaciones de código fuente para añadir: \*arg4, \*arg5 en lugar de arg4, arg5. Ahora Pivy debería construirse:

```
python setup.py build
sudo python setup.py install

```

#### Windows

#### Windows

Asumiendo que utilizas Visual Studio 2005 o superior deberías abrir una ventana de comandos con 'Visual Studio 2005 Command prompt' desde el menú Herramientas. Si el interprete aún no está en el sistema, haz

```
set PATH=path_to_python_3.x;%PATH%

```

Para tener pivy funcionando deberías conseguir las últimas fuentes desde los repositorios del proyect:

Information to be added.

Luego necesitas una herramienta denominada SWIG para generar el ódigo C++ para la vinculación con Python. Es recomendable utilizar la versión 1.3.25 de SWIG, no la última versión, porque de momento pivy sólo funciona correctamente con con la versión with 1.3.25. Descarga los binarios para 1.3.25 desde <http://www.swig.org>. Luego descomprimelo y desde la línea de comandos añádelo al sistema path

```
set PATH=path_to_swig_1.3.25;%PATH%

```

y establece COINDIR a la ruta aproviada

```
set COINDIR=path_to_coin

```

En Windows el archivo de configuración de pivyespera SoWin en lugar de SoQt por defecto. No he encontrado una manera obvia para construirlo con SoQt, así que he modificado el arhivo setup.py directamente.
En la línea 200 simplemente elimina la parte 'sowin' : ('gui.\_sowin', 'sowin-config', 'pivy.gui.') (no elimines los paréntesis de cierre).

Después de esto ve a las fuentes de pivy y ejecuta

```
python setup.py build

```

lo cual crea los archivos de fuente. Puedes llegar a un error de compilación de 'Varios archivos de cabecera no se han encontrado'. En este caso ajusta la variable INCLUDE

```
set INCLUDE=%INCLUDE%;path_to_coin_include_dir

```

y si las cabeceras de SoQt no están en el mismo sitio que las cabeceras de Coin también

```
set INCLUDE=%INCLUDE%;path_to_soqt_include_dir

```

y finalmente las cabeceras de Qt

```
set INCLUDE=%INCLUDE%;path_to_pyside\include\Qt

```

Si estas utilizando la versión Express Edition de Visual Studio puedes tener una excepción de error de clave de Python.
En este caso tendrás que modificar unas cuantas cosas en msvccompiler.py situado en la instalación de Python.

Ve a la línea 122 y reemplaza la línea

```
vsbase = r"Software\Microsoft\VisualStudio\%0.1f" % version

```

con

```
vsbase = r"Software\Microsoft\VCExpress\%0.1f" % version

```

Luego prueba de nuevo.
Si te da un segundo error como

```
error: Python was built with Visual Studio 2003;...

```

debes reemplazar también la línea 128

```
self.set_macro("FrameworkSDKDir", net, "sdkinstallrootv1.1")

```

con

```
self.set_macro("FrameworkSDKDir", net, "sdkinstallrootv2.0")

```

Intenta de nuevo. Si tienes un nuevo error como

```
error: Python was built with Visual Studio version 8.0, and extensions need to be built with the same version of the compiler, but it isn't installed.

```

entonces deberías comprobar las variables de entorno DISTUTILS\_USE\_SDK y MSSDK con

```
echo %DISTUTILS_USE_SDK%
echo %MSSDK%

```

If not yet set then just set it e.g. to 1

```
set DISTUTILS_USE_SDK=1
set MSSDK=1

```

Ahora, debes encontrar un error de compilación donde una constante de tipo char no se puede convertir en char. Para solucionarlo necesitas escribir una constante antes de las líneas apropiadas. Hay 6 líneas que corregir.
Después copia el directorio de pivy generado a un lugar donde el interprete de Python de FreeCAD lo pueda encontrar.

### Usage

### Utilización

To check if Pivy is correctly installed:

```
import pivy

```

Para tener Pivy acceso a la escena gráfica de FreeCAD haz lo siguiente:

```
from pivy import coin
App.newDocument() # Open a document and a view
view = Gui.ActiveDocument.ActiveView
FCSceneGraph = view.getSceneGraph() # returns a pivy Python object that holds a SoSeparator, the main "container" of the Coin scenegraph
FCSceneGraph.addChild(coin.SoCube()) # add a box to scene

```

Ahora puedes explorar FCSceneGraph con el comando dir().

### Additonal Documentation

### Documentación

Desafortunadamente la documentación sobre pivy es casi inexistente en la redt. Pero podrías encontrar la documentación de Coin útil, ya que pivy simplemente traduce las funciones de Coin, los nodos y métodos en Python, todo mantiene el mismo nombre y propiedades, teniendo en cuenta la diferencia de sintaxis entre C y Python:

* <http://doc.coin3d.org/Coin/classes.html> - Referencia del API de Coin3D

* <http://www-evasion.imag.fr/~Francois.Faure/doc/inventorMentor/sgi_html/index.html> - The Inventor Mentor - La "biblia" del lenguaje de descripción de escena de Inventor.

También puedes echar un vistazo al archivo Draft.py en el directorio de FreeCAD Mod/Draft, ya que hace un uso importante de pivy.

## pyCollada

* homepage: <https://pycollada.github.io>
* license: BSD
* optional, needed to enable import and export of Collada (.DAE) files

[pyCollada](http://pycollada.github.com) es una biblioteca de Python que permite a los programas leer y escribir [archivos de Collada (\*.DAE)](http://en.wikipedia.org/wiki/COLLADA). Cuando pyCollada está instalado en tu sistema, FreeCAD ([introducido en la versión 0.13](/Release_notes_0.13/es "Release notes 0.13/es")) lo detectará y añadirá opciones de importación y exportación para manejar la apertura y guardado en el formato de archivos de Collada.

### Installation

#### Linux

```
sudo apt-get install python3-collada

```

Puedes comprobar si pycollada fue instalada correctamente emitiendo en una consola de python:

```
import collada

```

Si no devuelve nada (no hay mensaje de error), entonces todo está bien.

#### Linux AppImages and Snaps

Paste this code in the [Python console](/Python_console "Python console"):

```
import addonmanager_utilities as utils
import subprocess
import os

if hasattr(utils, "get_python_exe"):
    # For v0.21:
    python_exe = utils.get_python_exe()
else:
    # For v0.22/v1.0:
    from freecad.utils import get_python_exe

python_exe = get_python_exe()
vendor_path = utils.get_pip_target_directory()
if not os.path.exists(vendor_path):
    os.makedirs(vendor_path)

subprocess.run(
    [
        python_exe,
        "-m",
        "pip",
        "install",
        "--disable-pip-version-check",
        "--target",
        vendor_path,
        "pycollada",
    ],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    timeout=120,
    check=True,
)

```

#### Windows

En Windows desde 0.15 pycollada está incluida tanto en la versión de FreeCAD como en las construcciones de los desarrolladores, por lo que no son necesarios pasos adicionales.

#### Mac OS

Si estás usando la versión Homebrew de FreeCAD puedes instalar pycollada en tu sistema Python usando pip.

Si necesitas instalar pip:

```
$ sudo easy_install pip

```

Instalar pycollada:

```
$ sudo pip install pycollada

```

Si está usando una versión binaria de FreeCAD, puede decirle a pip que instale pycollada en los paquetes del sitio dentro de FreeCAD.app:

```
$ pip install --target="/Applications/FreeCAD.app/Contents/lib/python3.x/site-packages" pycollada

```

o después de descargar el código de la pycollada

```
$ export PYTHONPATH=/Applications/FreeCAD\ 0.16.6706.app/Contents/lib/python3.x/site-packages:$PYTHONPATH
$ python setup.py install --prefix=/Applications/FreeCAD\ 0.2x.yyyy.app/Contents

```

## IfcOpenShell

* página web: <http://www.ifcopenshell.org>
* licencia: LGPL
* opcional, necesario para ampliar las capacidades de importación de los archivos IFC

IFCOpenShell is a library currently in development, that allows to import (and soon export) [Industry foundation Classes (\*.IFC)](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) files. IFC is an extension to the STEP format, and is becoming the standard in [BIM](http://en.wikipedia.org/wiki/Building_information_modeling) workflows. When ifcopenshell is correctly installed on your system, the FreeCAD [BIM Workbench](/BIM_Workbench "BIM Workbench") will detect it and use it to import IFC files, instead of its built-in rudimentary importer. Since ifcopenshell is based on OpenCasCade, like FreeCAD, the quality of the import is very high, producing high-quality solid geometry.

### Installation

#### Linux

Installation instructions can be found [here](https://docs.ifcopenshell.org/ifcopenshell-python/installation.html).

You can check that ifcopenshell was correctly installed by issuing in a Python console:

```
import ifcopenshell

```

If it returns nothing (no error message), then all is OK

#### Windows and macOS

IfcOpenShell is included in both the FreeCAD release and developer builds so no additional steps are necessary.

### Links

### Enlaces

Tutorial [Importación/Exportación IFC - compilación de IfcOpenShell](/Import/Export_IFC_-_compiling_IfcOpenShell/es "Import/Export IFC - compiling IfcOpenShell/es")

## LazyLoader

LazyLoader is a Python module that allows deferred loading, while still importing at the top of the script. This is useful if you are importing another module that is slow, and it is used several times throughout the script. Using LazyLoader can improve workbench startup times, but the module will still need to be loaded on first use.

### Installation

### Instalación

LazyLoader está incluido en FreeCAD v0.19

### Usage

### Uso

Necesitarás importar LazyLoader, y luego cambiar la importación de cualquier módulo que quieras que sea aplazado.

```
from lazy_loader.lazy_loader import LazyLoader
Part = LazyLoader('Part', globals(), 'Part')

```

La variable Part es como se nombra el módulo en su guión. Puedes replicar "importar Part como P" cambiando la variable.

```
P = LazyLoader('Part', globals(), 'Part')

```

You can also import a module from a package.

```
utils = LazyLoader('PathScripts', globals(), 'PathScripts.PathUtils')

```

You can't import individual functions, just entire modules.

### Links

### Enlaces

* Fuente original: <https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/util/lazy_loader.py>
* Explicación más detallada: <https://wil.yegelwel.com/lazily-importing-python-modules/>
* Código dentro del código fuente de FreeCAD: <https://github.com/FreeCAD/FreeCAD/tree/master/src/3rdParty/lazy_loader>
* Discusión en el foro: <https://forum.freecadweb.org/viewtopic.php?f=10&t=45298>

Retrieved from "<http://wiki.freecad.org/index.php?title=Extra_python_modules/es&oldid=1460932>"