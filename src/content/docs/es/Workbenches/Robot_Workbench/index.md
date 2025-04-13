---
title: Ambiente de trabajo Robot
---

:::caution
El Ambiente de trabajo Robot no se mantiene. Si tienes experiencia en el tema y estás interesado en mantenerlo, por favor declara tu intención en la sección de desarrolladores delForo de FreeCAD.La razón por la que este ambiente de trabajo está todavía en el código fuente maestro es porque este ambiente de trabajo está programado en C++. Si este ambiente de trabajo pudiera ser programado en Python, entonces podría convertirse en unAmbiente de trabajo externoy podría ser movido a un repositorio separado.
:::

## Introducción

![](/images/Workbench_Robot.svg)

El icono del Ambiente de trabajo Robot

El ![](/images/Workbench_Robot.svg) Ambiente de trabajo de robots es una herramienta para simular un [Robot de 6 ejes industrial](/Robot_6-Axis/es "Robot 6-Axis/es") estándar, como [Kuka](http://kuka.com/).

Puede realizar las siguientes tareas:

- Configurar un entorno de simulación con un robot y piezas de trabajo.
- Crear y rellenar trayectorias de movimiento.
- Descomponer las características de una pieza CAD en una trayectoria.
- Simular el movimiento del robot y la distancia de alcance.
- Exportar la trayectoria a un archivo de programa de robot.

Para empezar, prueba el [Tutorial de robots](/Robot_tutorial/es "Robot tutorial/es"), y mira la interfaz de programación en el archivo de ejemplo [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py).

![](/images/Robot_Workbench_example.jpg)

## Herramientas

Aquí están los principales comandos que puedes utilizar para crear la configuración de un robot.

### Robots

Las herramientas para crear y manejar los robots de 6 ejes

- ![](/images/Robot_CreateRobot.svg) [Crea un robot](/Robot_CreateRobot/es "Robot CreateRobot/es"): Inserta un nuevo robot en la escena
- ![](/images/Robot_Simulate.svg) [Simula una trayectoria](/Robot_Simulate/es "Robot Simulate/es"): Abre el letrero de diálogo de simulación y te permite simular
- ![](/images/Robot_Export.svg) [Exportar una trayectoria](/Robot_Export/es "Robot Export/es"): Exporta un archivo del programa del robot
- ![](/images/Robot_SetHomePos.svg) [Establece la posición de inicio](/Robot_SetHomePos/es "Robot SetHomePos/es"): Establece la posición de inicio para un robot
- ![](/images/Robot_RestoreHomePos.svg) [Restablece la posición de inicio](/Robot_RestoreHomePos/es "Robot RestoreHomePos/es"): Mueve el robot a su posición de inicio

### Trayectorias

Herramientas para crear y manipular trayectorias. Existen dos tipos, las paramétricas y las no paramétricas.

#### Trayectorias no paramétricas

- ![](/images/Robot_CreateTrajectory.svg) [Crea una trayectoria](/Robot_CreateTrajectory/es "Robot CreateTrajectory/es"): Inserta una nuevo objeto de trayectoria vacía en la escena
- ![](/images/Robot_SetDefaultOrientation.svg) [Establece la orientación por defecto](/Robot_SetDefaultOrientation/es "Robot SetDefaultOrientation/es"): Establece la orientación en los puntos de paso creados por defecto
- ![](/images/Robot_SetDefaultValues.svg) [Establece los parámetros de velocidad por defecto](/Robot_SetDefaultValues/es "Robot SetDefaultValues/es"): Establece los valores por defecto para la creación de los puntos de paso
- ![](/images/Robot_InsertWaypoint.svg) [Inserta un punto de paso](/Robot_InsertWaypoint/es "Robot InsertWaypoint/es"): Inserta un punto de paso desde la posición actual del robot en una trayectoria
- ![](/images/Robot_InsertWaypointPre.svg) [Inserta un punto de paso](/Robot_InsertWaypointPre/es "Robot InsertWaypointPre/es"): Inserta un punto de paso desde las posición actual del ratón en una trayectoria

#### Trayectorias Paramétricas

- ![](/images/Robot_Edge2Trac.svg) [Create a trajectory out of edges](/Robot_Edge2Trac/es "Robot Edge2Trac/es"): Inserta un nuevo objeto que descompone los bordes en una trayectoria
- ![](/images/Robot_TrajectoryDressUp.svg) [Dress-up a trajectory](/Robot_TrajectoryDressUp/es "Robot TrajectoryDressUp/es"): Le permite sobreescribir una o más propiedades de una trayectoria
- ![](/images/Robot_TrajectoryCompound.svg) [Trajectory compound](/Robot_TrajectoryCompound/es "Robot TrajectoryCompound/es"): crea un compuesto a partir de algunas trayectorias individuales

## Archivos de guión

Ver el [Ejemplo de la API del Robot](/Robot_API_example/es "Robot API example/es") para ver una descripción de las funciones utilizadas para modelar los desplazamientos del robot.

## Tutorials

- [Robot de 6 ejes](/Robot_6-Axis/es "Robot 6-Axis/es")
- [VRML Preparation for Robot Simulation](/VRML_Preparation_for_Robot_Simulation/es "VRML Preparation for Robot Simulation/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/es&oldid=918288>"
