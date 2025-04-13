---
title: Utilidad de construcción de FreeCAD
---
La **Utilidad de construcción de FreeCAD** (FreeCAD build tool o **fcbt**) es un archivo de guión en Python ubicado en

```
trunc/src/Tools/fcbt.py

```

Se puede utilizar para simplificar algunas tareas frecuentes de construcción, distribución y extensión de FreeCAD.

## Utilización

Con [Python](http://en.wikipedia.org/wiki/Python_(programming_language) "wikipedia:Python (programming language)") correctamente instalado, *fcbt* se puede invocar por el comando

```
python fbct.py

```

Muestra un menú, donde puedes seleccionar la tarea para el que lo quieres utilizar:

```
FreeCAD Build Tool
 Usage:
    fcbt <command name> [command parameter]
 possible commands are:
  - DistSrc         (DS)   Build a source Distr. of the current source tree
  - DistBin         (DB)   Build a binary Distr. of the current source tree
  - DistSetup       (DI)   Build a Setup Distr. of the current source tree
  - DistSetup       (DUI)  Build a User Setup Distr. of the current source tree
  - DistAll         (DA)   Run all three above modules
  - NextBuildNumber (NBN)  Increase the Build Number of this Version
  - CreateModule    (CM)   Insert a new FreeCAD Module (Workbench) in the module directory
 
 For help on the modules type:
   fcbt <command name> ?

```

Introduce el nombre abreviado del comando que quieres utilizar. Por ejemplo escribe "CM" para [crear un módulo](/Module_Creation/es "Module Creation/es").

### DistSrc

El comando "DS" **crea un distribución de código fuente** del árbol de código fuente actual.

### DistBin

El comando "DB" **crea una distribución binaria** del árbol de código fuente actual.

### DistSetup

El comando "DI" **crea una distribución de setup** del árbol de código fuente actual.

### DistSetup

El comando "DUI" **crea una distribución de setup de usuario** del árbol de código fuente actual.

### DistAll

El comando "DA" executes "DS", "DB" y "DI" en secuencia.

### NextBuildNumber

El comando "NBN" **incrementa el número de la construcción** para crear una nueva versión de FreeCAD.

### CreateModule

El comando "CM" [crea un nuevo módulo de aplicación](/Module_Creation/es "Module Creation/es").

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Build_Tool/es&oldid=947338>"