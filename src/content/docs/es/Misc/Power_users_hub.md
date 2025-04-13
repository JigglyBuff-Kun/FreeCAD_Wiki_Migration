---
title: Centro usuarios avanzados
---
![](/images/Power_user_hub.png)

---

Este es el lugar para venir si eres un usuario experimentado y quieres aprender más sobre la personalización y ampliación de FreeCAD.

FreeCAD es extensible mediante código [Python](/Python/es "Python/es") que se ejecuta directamente en la [Consola de Python](/Python_console/es "Python console/es"), o que se carga desde los módulos al inicio. Esto significa que puedes modificar FreeCAD sin necesidad de recompilar el programa. Por ejemplo, puedes:

* **Crear y modificar geometría**: puedes crear un nuevo tipo de objeto, ya sea desde cero o adaptando un tipo existente.
* **Crear herramientas y comandos personalizados**: añade tu propio conjunto de herramientas que ejecutan tu código.
* **Modificar la interfaz**: crea barras de herramientas para colocar tus herramientas, crea ventanas especiales, paneles o interfaces para interactuar con tus herramientas.
* Modificar la representación del gráfico de la escena*: FreeCAD tiene procesos separados para construir la geometría y mostrarla en la pantalla. Tienes acceso completo a la forma en que el contenido de la escena se muestra en la pantalla, por lo tanto puedes modificar esa representación, interactuar con ella, o añadirle un comportamiento personalizado. También puedes añadir widgets de pantalla personalizados, como información, arrastradores, anclas o entidades temporales.*

Si quieres contribuir con contenido a estas páginas, solicita una cuenta wiki con permisos de editor [en el foro](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830), y lee las [WikiPáginas](/WikiPages/es "WikiPages/es") para conocer las directrices generales que debes seguir. Para otras formas de contribuir con el proyecto, vea la página [Ayuda a FreeCAD](/Help_FreeCAD/es "Help FreeCAD/es").

## Personalizando FreeCAD

* [Personalización de la interfaz](/Interface_Customization/es "Interface Customization/es"): Empezando por el principio: Barras de herramientas y atajos de teclado
* [Trabajando con Macros](/Macros/es "Macros/es"): Registrar fácilmente las tareas que se repiten con frecuencia o el código Python.
* [Recetas de macros](/Macros_recipes/es "Macros recipes/es")
* [Personalizar barras de herramientas](/Customize_Toolbars/es "Customize Toolbars/es")
* [Instalar más ambientes de trabajo](/Installing_more_workbenches/es "Installing more workbenches/es")

## Guionización en FreeCAD

### General

* [Introducción a Python](/Introduction_to_Python/es "Introduction to Python/es") - Ver también otros tutoriales de Python en la parte inferior de esta página
* [Tutorial guionización en FreeCAD](/Python_scripting_tutorial/es "Python scripting tutorial/es") - Una visión general a guionización Python en FreeCAD
* [Guionización básico en FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es"): Bien, lo básico...
* [Comandos de la interfaz gráfica de usuario](/Gui_Command/es "Gui Command/es") : Añadiendo comandos personalizados a la interfaz gráfica de usuario
* Utilizando [Unidades](/Units/es "Units/es") mezcladas en FreeCAD
* [Perfilando](/index.php?title=Profiling/es&action=edit&redlink=1 "Profiling/es (page does not exist)") el código Python

### Modulos

La funcionalidad de FreeCAD está separada en Módulos que tratan con tipos de datos y aplicaciones especiales. FreeCAD tiene módulos incorporados y módulos de extensión (plug-ins). Una vez que los módulos de extensión son instalados, están disponibles para ti tan fácilmente como los módulos incorporados. Los módulos descritos a continuación son los módulos por defecto, incluidos en cada instalación de FreeCAD.

* Los [Módulos incorporados](/Builtin_modules/es "Builtin modules/es") son los principales módulos de FreeCAD. Contienen herramientas para manipular configuraciones generales de FreeCAD, documentos y sus contenidos.
* [Creación de ambientes de trabajo](/Workbench_creation/es "Workbench creation/es") te muestra cómo crear tu propio ambientes de trabajo

#### Trabajando con Mallas

* [Guionización Mallas](/Mesh_Scripting/es "Mesh Scripting/es"): Cómo interactuar con el [Ambiente de trabajo Mallas](/Mesh_Workbench/es "Mesh Workbench/es")

#### Trabar con Piezas

* [El Ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es"): Cómo se utilizan las herramientas y la estructura de [Tecnología Open CASCADE](http://en.wikipedia.org/wiki/Open_CASCADE) en FreeCAD
* [Guionización topología de datos](/Topological_data_scripting/es "Topological data scripting/es"): Cómo interactuar con el módulo de Pieza
* [PythonOCC](/PythonOCC/es "PythonOCC/es"): Cómo dar rienda suelta a todo el poder de OpenCasCade
* [Malla a Pieza](/Mesh_to_Part/es "Mesh to Part/es"): Conversión entre tipos de objetos

### =Accediendo los gráficos de escena Coin

* [Los gráficos de escena de Coin/Inventor](/Scenegraph/es "Scenegraph/es"): Cómo funciona la escenografía FreeCAD
* [Pivy](/Pivy/es "Pivy/es"): Cómo acceder y modificar las escenografías

### Controlando el interfaz Qt

* [PySide](/PySide/es "PySide/es"): Cómo acceder la interfaz, y modificar su contenido
* [Utilizando la interfaz gráfica de usuario de FreeCAD](/Embedding_FreeCADGui/es "Embedding FreeCADGui/es") en otra aplicación Qt con PyQt

### Trabajando con objetos paramétricos

* [Objetos de guiónes](/Scripted_objects/es "Scripted objects/es"): cómo hacer objetos 100% desde guiónes en Python
  + [Objetos guiónes con adjunto](/index.php?title=Scripted_objects_with_attachment/es&action=edit&redlink=1 "Scripted objects with attachment/es (page does not exist)"): cómo hacer que los objetos de guión se puedan adjuntar a otros objetos.
  + [Scripted objects saving attributes](/index.php?title=Scripted_objects_saving_attributes/es&action=edit&redlink=1 "Scripted objects saving attributes/es (page does not exist)"): cómo guardar y restaurar atributos de la clase proxy con `__getstate__` y `__setstate__`.
  + [Migración de objetos guiónes](/index.php?title=Scripted_objects_migration/es&action=edit&redlink=1 "Scripted objects migration/es (page does not exist)"): cómo migrar objetos con guiónes antiguos a una nueva clase.

### Ejemplos

* [Pedazos de código](/Code_snippets/es "Code snippets/es") : Una colección de pedazos de código en Python para FreeCAD, para servir como utilidades en tus archivos de guión...
* [Función de dibujar líneas](/Line_drawing_function/es "Line drawing function/es"): Cómo construir una simple herramienta para dibujar líneas
* [Creación de letreros de diálogo](/Dialog_creation/es "Dialog creation/es"): Como crear letreros de diálogo con el diseñador de Qt, y utilizarlos en FreeCAD
* [FreeCAD embebido](/Embedding_FreeCAD/es "Embedding FreeCAD/es"): Cómo importar FreeCAD como un módulo de Python en otras aplicaciones
* El [módulo de croquizado](/Draft_Workbench/es "Draft Workbench/es") añade funciones básicas de dibujo 2D a FreeCAD. Está escrito enteramente en Python, así que puede ser un buen ejemplo si quieres escribir tus propios módulos.
* [Biblioteca de matemática vectorial de FreeCAD](/FreeCAD_vector_math_library/es "FreeCAD vector math library/es") : Un par de funciones practicas para manipular vectores en FreeCAD. Esta biblioteca está incluida en el módulo de croquizado.

## Funciones del API

La documentación completa de la API de FreeCAD se encuentra en <http://www.freecadweb.org/api/> . Contiene tanto las APIs de C++ como las de Python, y aún no está totalmente bien formateada, lo que puede ser confuso cuando se busca código sólo en python. Una versión más fácil de navegar se puede encontrar [aquí](/Category:API "Category:API"). Tenga en cuenta que puede estar incompleta, ya que se actualiza manualmente. Para una información más precisa, navega por los módulos directamente desde la consola de Python de FreeCAD.

Relacionado: [Exponer C++ a Python](/index.php?title=Exposing_C%2B%2B_to_Python/es&action=edit&redlink=1 "Exposing C++ to Python/es (page does not exist)")

## Modificación avanzada

* [Inicio y configuración](/Start_up_and_Configuration/es "Start up and Configuration/es"): Inicio y opciones del comando de inicio
* [Instalación en Windows](/Installing_on_Windows/es "Installing on Windows/es"): Utilizando el instalador de Windows
* [Compilando FreeCAD en Windows](/Compile_on_Windows/es "Compile on Windows/es") y [Compilando FreeCAD en Linux](/Compile_on_Linux/es "Compile on Linux/es")
* [Construcción de marca](/Branding/es "Branding/es"): Simples modificaciones que puedes hacer al código fuente para cambiar algunos aspectos de FreeCAD
* [Módulos extra en Python](/Extra_python_modules/es "Extra python modules/es") : Extiende el interprete de Python de FreeCAD con estos potentes módulos!

## Tutoriales de Python

Estos son unos buenos tutoriales genéricos, no específicos para FreeCAD, te pueden interesar si eres nuevo en Python.

**Python**

* [Tutorial Oficial de Python](https://docs.python.org/3/tutorial/index.html) - Un tutorial muy completo para descubrir Python
* [Non-programmer tutorial para Python](https://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python_3) - un excelente wikilibro
* [Python para novatos](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - Un gran tutorial que cubre todos los básicos

**PySide** - Cómo crear y manejar la interfaz Qt UI de FreeCAD desde python

* [PySide tutorial](http://zetcode.com/gui/pysidetutorial/) : Un tutorial independiente de la plataforma que muestra el uso de PySide con ejemplos
* [PySide/PyQt tutorial](http://www.pythoncentral.io/series/python-pyside-pyqt-tutorial/) : Un tutorial fácil de leer que cubre PySide y PyQt con ejemplos
* [Documentación de PySide](http://qt-project.org/wiki/PySideDocumentation) : del Proyecto Qt (la gente que lo escribió todo)
* [Uso de QtCreator en PySide](http://qt-project.org/wiki/QtCreator_and_PySide) : también del Proyecto Qt
* [PySide referencia](http://srinikom.github.io/pyside-docs/index.html) : un sinfín de detalles sobre las minucias de PySide y Qt, una fuente de referencia fiable
* [PySide fragmentos de código](http://nullege.com/codes/search?cq=PySide) : una base de datos de fragmentos de código de PySide en la que se puede buscar.

Las siguientes dos referencias son específicas de PyQt (no de PySide) pero pueden ofrecer alguna información de utilidad:

* [Basic PyQt tutorial](http://www.cs.usfca.edu/~afedosov/qttut/) : Un sencillo y corto tutorial basado en linux que explica cómo trabajar con PyQt y Qt Designer
* [Programación de aplicaciones Qt en python](http://vizzzion.org/?id=pyqt) : Un tutorial más profundo que cubre todo el proceso de trabajo con qt y python

**Pivy** - Cómo interactuar con las escenas 3D de FreeCAD

* [Pivy - Incorporación de un lenguaje guionización dinámico a una biblioteca de gráficos de escenas](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.947&rep=rep1&type=pdf) : Tesis que explica Pivy en detalle
* [Programación de gráficos 3D de alto nivel en Python](http://ftp.ntua.gr/mirror/python/pycon/dc2004/papers/47/) : Ejemplo de Pivy de Pycon 2004
* [Introducción de Pivy en studierstube](https://www.semanticscholar.org/paper/Integrating-Pivy-into-Studierstube-4.2-Gruber/08c9a89c8326c87f81c2d83428029fbfb6c2ae64) [(Mirror)](https://www.researchgate.net/publication/228737136_Integrating_Pivy_into_Studierstube_42) : Un artículo que no es realmente un tutorial, pero que ilustra bien cómo funciona Pivy (requiere una cuenta académica)

## Proyectos de la comunidad

En el [Portal de la Comunidad](/FreeCAD_Community_Portal/es "FreeCAD Community Portal/es"), puedes encontrar otros proyectos basados en FreeCAD dirigidos por la comunidad de usuarios de FreeCAD. Si estás empezando un nuevo proyecto de FreeCAD, ¡asegúrate de listarlo allí! También tenemos una página con cosas que puedes hacer si quieres [Ayudar a FreeCAD](/Help_FreeCAD/es "Help FreeCAD/es").

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/es&oldid=1463663>"