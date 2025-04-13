---
title: Centro de desarrolladores
---

![](/images/Crystal_Clear_app_tutorials.png)

---

Este es el lugar al que acudir si quieres contribuir al desarrollo del software FreeCAD.

Estas páginas están en una etapa inicial de desarrollo. Si no encuentras la información que estas buscando, o si has encontrado información útil que no tenemos vinculada, entonces por favor deja un comentario en la [foro](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) y alguien la verá (o, si eres lo suficientemente atrevido, por qué no editar esta página directamente!).

## Documentación para desarrolladores

La documentación para desarrolladores comprende las siguientes secciones:

### Compilando FreeCAD

- [Gestión del código fuente](/Source_code_management/es "Source code management/es")
- [Encontrar asistencia](/Tracker/es "Tracker/es") cuando tienes un problema o crees que has encontrado un error
- [Compilación en Windows](/Compile_on_Windows/es "Compile on Windows/es")
- [Compilación en Unix](/Compile_on_Linux/es "Compile on Linux/es")
- [Compilación en OS X](/Compile_on_MacOS/es "Compile on MacOS/es")
- [Detalles de la Licencia](/License/es "License/es") sobre las licencias de FreeCAD
- [Bibliotecas de terceros](/Third_Party_Libraries/es "Third Party Libraries/es")
- [Herramientas de terceros](/Third_Party_Tools/es "Third Party Tools/es")
- [Inicio y configuración](/Start_up_and_Configuration/es "Start up and Configuration/es")
- [Documentación del código fuente](/Source_documentation/es "Source documentation/es")

### Empaquetado

[Empaquetado](/Packaging/es "Packaging/es") consiste en tomar los binarios compilados y los archivos fuente en Python de FreeCAD, y distribuirlos para su uso en un sistema particular.

- [Linux Empaquetado](/Linux_packaging/es "Linux packaging/es")
  - [Debian desarrollo](/Debian_development/es "Debian development/es")
  - [Debian Inestable](/Debian_Unstable/es "Debian Unstable/es")
  - [Git edificarpaquete](/Git_buildpackage/es "Git buildpackage/es")
- [Windows Empaquetado](/Windows_packaging/es "Windows packaging/es")
- [MacOS Empaquetado](/index.php?title=MacOS_packaging/es&action=edit&redlink=1 "MacOS packaging/es (page does not exist)")

### Edificar Herramientas Apoyo

- Las [Herramientas de soporte a la construcción](/FreeCAD_Build_Tool/es "FreeCAD Build Tool/es")
  - [Añadiendo un módulo de aplicación](/Workbench_creation/es "Workbench creation/es") a FreeCAD
- [Depurando](/Debugging/es "Debugging/es") FreeCAD
- [Probando](/Testing/es "Testing/es") FreeCAD
- [Compilación (Aceleración)](</Compiling_(Speeding_up)/es> "Compiling (Speeding up)/es") FreeCAD
- [Integración continua](/Continuous_Integration/es "Continuous Integration/es")

### Modificando FreeCAD

- Entender [El código fuente de FreeCAD](/The_FreeCAD_source_code/es "The FreeCAD source code/es")
- [Subir parches](/Tracker/es#Subir_parches "Tracker/es")
- Añadir [Características](/Gui_Command/es "Gui Command/es") a FreeCAD o a un ambiente de trabajo
- [Branding](/Branding/es "Branding/es") o _cómo dar a FreeCAD un aspecto único_
- [Obra](/Artwork/es "Artwork/es") que hemos hecho para FreeCAD, que puedes reutilizar libremente
- [Directrices de trabajo](/Artwork_Guidelines/es "Artwork Guidelines/es") estándares para los iconos
- [Traducción de FreeCAD](/Localisation/es "Localisation/es")
- [Módulos extra de python](/Extra_python_modules/es "Extra python modules/es"), o _cómo extender la funcionalidad de python dentro de FreeCAD_
- [Verano de Código de Google](/index.php?title=Google_Summer_of_Code/es&action=edit&redlink=1 "Google Summer of Code/es (page does not exist)") participar a través del programa de apoyo a los estudiantes de Google
- [Ajuste de precisión](/index.php?title=Fine-tuning/es&action=edit&redlink=1 "Fine-tuning/es (page does not exist)") muestra diferentes opciones y cambios de parámetros que pueden superar los problemas
- [Envolver una clase C++ en Python](/index.php?title=Wrapping_a_Cplusplus_class_in_Python/es&action=edit&redlink=1 "Wrapping a Cplusplus class in Python/es (page does not exist)") muestra cómo crear la envoltura de Python para una clase C++

- [Traducir un ambiente de trabajo externo](/Translating_an_external_workbench/es "Translating an external workbench/es")

### Guía del desarrollador Módulos

[Guía de desarrollo de FreeCAD Mod](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): Este es un libro electrónico que se está escribiendo en github, por favor haz un fork y envía un pull request para contribuir.

Capítulos:

- Visión general y arquitectura del software
- Estructura del código fuente
- Módulo base y aplicación
- Módulo Gui
- Envoltura de Python
- Diseño modular
- Análisis del código fuente del módulo Fem (mixto C++ y Python)
- Desarrollo del módulo CFD (Python puro)
- Prueba y depuración del módulo
- Contribuir con código con git

La última vista previa en pdf se puede descargar desde [carpeta pdf](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf) de este git repo

### Internos

#### Documentación de OpenCascade

OpenCascade es una plataforma de desarrollo de software para el modelado de superficies y sólidos en 3D, el intercambio de datos CAD y la visualización, principalmente en forma de bibliotecas C++.

- [Tutoriales de Roman Lygin's](http://opencascade.wikidot.com/romansarticles)
- [Documentación completa en línea](https://dev.opencascade.org/cdoc/overview/html/index.html)
- [Manual de referencia](https://dev.opencascade.org/doc/refman/html/index.html)
- [La wiki de openCascade](http://opencascade.wikidot.com)(actualmente contiene ?? spam chino)

#### Formato de archivo

[Formato Archivo FCStd](/File_Format_FCStd/es "File Format FCStd/es"). Los archivos creados con FreeCAD son archivos `.zip` que incluyen la geometría [BREP](https://en.wikipedia.org/wiki/Boundary_representation) , así como los datos XML que describen el documento.

#### Solucionador de Croquizador

- [Folleto de arquitectura de Croquizador Solucionador](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (hilo del foro), [fuente](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) en GitHub.
- [PlaneGCS solucionador](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) en el código fuente de FreeCAD; los archivos importantes son [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) y [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Varias mejoras recientes de Croquizador](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

El solucionador croquizador no es perfecto, ya que hay algunos problemas con la precisión numérica cuando se utilizan valores grandes, ver [Aventura de arreglar el solucionador croquizador para bocetos grandes](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

El desarrollo de una nueva arquitectura del solucionador podría mejorar la forma en que se utiliza el solucionador tanto en el [Ambuente de trabajo Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es"), como para el montaje de cuerpos 3D. Véase [Reimplementación del solucionador de restricciones](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Hoja de ruta

FreeCAD, es utilizable en ciertas áreas, está al principio de un largo camino dentro de la corriente del CAD. Aún queda mucho que hacer para alcanzar un estado en el que podamos competir con el software comercial.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Comunidad

- [IRC channel](irc://chat.freenode.net/freecad) ,sincronizado con [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Foro de desarrollo](https://forum.freecadweb.org/viewforum.php?f=6)

- [Mapa de desarrollo](/Development_roadmap/es "Development roadmap/es")

## Agradecimientos

[Contribuidores](/Contributors/es "Contributors/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/es&oldid=1392838>"
