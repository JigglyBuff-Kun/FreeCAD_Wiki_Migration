---
title: Ambiente de trabajo MEF
---

![](/images/Workbench_FEM.svg)

El icono del Ambiente de trabajo MEF

## Introducción

El Ambiente de trabajo MEF provee un moderno [Método de los elementos finitos](https://es.wikipedia.org/wiki/M%C3%A9todo_de_los_elementos_finitos) flujo de Análisis de Elementos Finitos (AEF) para FreeCAD. Principalmente estoy significa que todas las herramientas para hacer un Analisis de Elementos Finitos estan combinadas en una (GUI) Interface Grafica de Usuario.

![](/images/FemWorkbench.jpg)

## Flujo de Trabajo

Los pasos para realizar un análisis de elementos finitos son:

1. Preprocesamiento: configurar el problema de análisis.
   1. Modelar la geometría: crear la geometría con FreeCAD, o importarla desde otra aplicación.
   2. Crear un análisis.
      1. Añadiendo restricciones de simulación como cargas y soportes fijos al modelo geométrico.
      2. Añadiendo materiales a las partes del modelo geométrico.
      3. Creando una malla de elementos finitos para el modelo geométrico, o importándola desde una aplicación diferente.
2. Solucionar: ejecutar un solucionador externo desde FreeCAD.
3. Solving: ejecutando un solver externo desde FreeCAD.
4. Postproceso: visualizando los resultados del análisis desde dentro de FreeCAD, o exportando los resultados para que puedan ser postprocesados con otra aplicación.

El Ambiente de trabajo MEF puede utilizarse en Linux, Windows y Mac OSX. Dado que el ambiente de trabajo hace uso de solucionadores externos, la cantidad de configuración manual dependerá del sistema operativo que esté utilizando. Ver [Instalación de MEF](/FEM_Install/es "FEM Install/es") para instrucciones sobre la configuración de las herramientas externas.

![](/images/FEM_Workbench_workflow.svg)

Flujo de trabajo del ambiente de trabajo MEF; el ambiente de trabajo llama a dos programas externos para realizar el mallado de un objeto sólido, y realizar la solución real del problema de elementos finitos

## Menú: Modelo

- ![](/images/FEM_Analysis.svg) [Contenedor Análisis](/index.php?title=FEM_Analysis/es&action=edit&redlink=1 "FEM Analysis/es (page does not exist)"): Crea un nuevo contenedor para un análisis mecánico. Si se selecciona un sólido en la vista de árbol antes de hacer clic en él, se abrirá a continuación el diálogo de malla.

### Materiales

- ![](/images/FEM_MaterialSolid.svg) [Material para sólidos](/FEM_MaterialSolid/es "FEM MaterialSolid/es"): Permite seleccionar un material de la base de datos.

- ![](/images/FEM_MaterialFluid.svg) [Material para liquidos](/index.php?title=FEM_MaterialFluid/es&action=edit&redlink=1 "FEM MaterialFluid/es (page does not exist)"): Permite seleccionar un material de la base de datos.

- ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Material mecánico no lineal](/index.php?title=FEM_MaterialMechanicalNonlinear/es&action=edit&redlink=1 "FEM MaterialMechanicalNonlinear/es (page does not exist)"): Permite seleccionar un material de la base de datos.

- ![](/images/FEM_MaterialReinforced.svg) [Material reforzado (hormigón)](/index.php?title=FEM_MaterialReinforced/es&action=edit&redlink=1 "FEM MaterialReinforced/es (page does not exist)"): Le permite seleccionar materiales reforzados compuestos por una matriz y una armadura de la base de datos.

- ![](/images/FEM_MaterialEditor.svg) [Editor de materiales](/index.php?title=FEM_MaterialEditor/es&action=edit&redlink=1 "FEM MaterialEditor/es (page does not exist)"): Te permite abrir el editor de materiales para editarlos.

### Geometría Elementos

- ![](/images/FEM_ElementGeometry1D.svg) [Corte transversal de viga](/index.php?title=FEM_ElementGeometry1D/es&action=edit&redlink=1 "FEM ElementGeometry1D/es (page does not exist)"):

- ![](/images/FEM_ElementRotation1D.svg) [Rotación de viga](/index.php?title=FEM_ElementRotation1D/es&action=edit&redlink=1 "FEM ElementRotation1D/es (page does not exist)"):

- ![](/images/FEM_ElementGeometry2D.svg) [Espesor de caja de placa](/index.php?title=FEM_ElementGeometry2D/es&action=edit&redlink=1 "FEM ElementGeometry2D/es (page does not exist)"):

- ![](/images/FEM_ElementFluid1D.svg) [Sección de fluido para flujo 1D](/index.php?title=FEM_ElementFluid1D/es&action=edit&redlink=1 "FEM ElementFluid1D/es (page does not exist)"): Crea un elemento de sección de fluido FEM para redes neumáticas e hidráulicas.

### Electromagnetic boundary conditions

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Restricción Potencial electrostático](/index.php?title=FEM_ConstraintElectrostaticPotential/es&action=edit&redlink=1 "FEM ConstraintElectrostaticPotential/es (page does not exist)"):

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity"): Used to define a current density. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintMagnetization.svg) [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization"): Used to define a magnetization. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity"): Used to define electric charge density load. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### Restricciones Fluido

- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Restricción de velocidad inicial de flujo](/index.php?title=FEM_ConstraintInitialFlowVelocity/es&action=edit&redlink=1 "FEM ConstraintInitialFlowVelocity/es (page does not exist)"): Utilizada para definir una velocidad de flujo inicial para el dominio.

- ![](/images/FEM_ConstraintInitialPressure.svg) [Initial pressure condition](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure"): Used to define an initial pressure for a body (volume). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Restricción de velocidad de flujo](/index.php?title=FEM_ConstraintFlowVelocity/es&action=edit&redlink=1 "FEM ConstraintFlowVelocity/es (page does not exist)"): Utilizada para definir una velocidad de flujo como condición de contorno en un borde (2D) o cara (3D).

### Restricciones Geométricas

- ![](/images/FEM_ConstraintPlaneRotation.svg) [Restricción de rotación de plano](/index.php?title=FEM_ConstraintPlaneRotation/es&action=edit&redlink=1 "FEM ConstraintPlaneRotation/es (page does not exist)"): Utilizada para definir una restricción de rotación de plano sobre una cara plana.

- ![](/images/FEM_ConstraintSectionPrint.svg) [Impresión de la sección de restricciones](/index.php?title=FEM_ConstraintSectionPrint/es&action=edit&redlink=1 "FEM ConstraintSectionPrint/es (page does not exist)"): [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/FEM_ConstraintTransform.svg) [Restricción de transformación](/index.php?title=FEM_ConstraintTransform/es&action=edit&redlink=1 "FEM ConstraintTransform/es (page does not exist)"): Utilizada para definir una restricción de transformación en una cara.

### Restricciónes Mecánicas

- ![](/images/FEM_ConstraintFixed.svg) [Restricción fija](/index.php?title=FEM_ConstraintFixed/es&action=edit&redlink=1 "FEM ConstraintFixed/es (page does not exist)"): Utilizada para definir una restricción fija de un punto/arista/cara.

- ![](/images/FEM_ConstraintRigidBody.svg) [Rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody"): Used to apply the CalculiX's rigid body constraint that constrains the motion of the nodes of a selected geometrical entity to the motion of a reference point positioned by the user. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_ConstraintDisplacement.svg) [Restricción de desplazamiento](/index.php?title=FEM_ConstraintDisplacement/es&action=edit&redlink=1 "FEM ConstraintDisplacement/es (page does not exist)"): Utilizada para definir una restricción desplazamiento de un punto/arista/cara(s).

- ![](/images/FEM_ConstraintContact.svg) [Restricción de contacto](/index.php?title=FEM_ConstraintContact/es&action=edit&redlink=1 "FEM ConstraintContact/es (page does not exist)"): Utilizada para definir una restricción de contacto entre dos caras.

- ![](/images/FEM_ConstraintTie.svg) [Empate de restricciones](/index.php?title=FEM_ConstraintTie/es&action=edit&redlink=1 "FEM ConstraintTie/es (page does not exist)"): [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring"): Used to define a spring. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_ConstraintForce.svg) [Restricción de fuerza](/index.php?title=FEM_ConstraintForce/es&action=edit&redlink=1 "FEM ConstraintForce/es (page does not exist)"): Utilizada para definir una fuerza en Newtons aplicada uniformemente a una cara seleccionada en una dirección definida.

- ![](/images/FEM_ConstraintPressure.svg) [Restricción de presión](/index.php?title=FEM_ConstraintPressure/es&action=edit&redlink=1 "FEM ConstraintPressure/es (page does not exist)"): Utilizada para definir una restricción de presión

- ![](/images/FEM_ConstraintCentrif.svg) [Centrifugal load](/FEM_ConstraintCentrif "FEM ConstraintCentrif"): Used to define a centrifugal force body load. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_ConstraintSelfWeight.svg) [Restricción de peso propio](/index.php?title=FEM_ConstraintSelfWeight/es&action=edit&redlink=1 "FEM ConstraintSelfWeight/es (page does not exist)"): Utilizado para definir una aceleración de gravedad actuando sobre un modelo.

### Restricciónes Térmicas

- ![](/images/FEM_ConstraintInitialTemperature.svg) [Restricción inicial de temperatura](/index.php?title=FEM_ConstraintInitialTemperature/es&action=edit&redlink=1 "FEM ConstraintInitialTemperature/es (page does not exist)"): Utilizado para definir una restricción inicial de temperatura de un cuerpo.

- ![](/images/FEM_ConstraintHeatflux.svg) [Restricción de flujo de calor](/index.php?title=FEM_ConstraintHeatflux/es&action=edit&redlink=1 "FEM ConstraintHeatflux/es (page does not exist)"): Utilizado para definir una restricción de flujo de calor sobre una(s) cara(s).

- ![](/images/FEM_ConstraintTemperature.svg) [Restricción de temperatura](/index.php?title=FEM_ConstraintTemperature/es&action=edit&redlink=1 "FEM ConstraintTemperature/es (page does not exist)"): Utilizado para definir una restricción de temperatura sobre un punto/arista/cara(s).

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Restricción de cuerpo de fuente de calor](/index.php?title=FEM_ConstraintBodyHeatSource/es&action=edit&redlink=1 "FEM ConstraintBodyHeatSource/es (page does not exist)"):

### Sobrescribir Constantes

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Permisividad constante del vacío](/index.php?title=FEM_ConstantVacuumPermittivity/es&action=edit&redlink=1 "FEM ConstantVacuumPermittivity/es (page does not exist)"): [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

## Menú de Malla

- ![](/images/FEM_MeshNetgenFromShape.svg) [Malla MEF a partir de forma por Netgen](/index.php?title=FEM_MeshNetgenFromShape/es&action=edit&redlink=1 "FEM MeshNetgenFromShape/es (page does not exist)"):

- ![](/images/FEM_MeshGmshFromShape.svg) [Malla MEF a partir de forma por Gmsh](/index.php?title=FEM_MeshGmshFromShape/es&action=edit&redlink=1 "FEM MeshGmshFromShape/es (page does not exist)"):

- ![](/images/FEM_MeshBoundaryLayer.svg) [Capa límite de la malla FEM](/index.php?title=FEM_MeshBoundaryLayer/es&action=edit&redlink=1 "FEM MeshBoundaryLayer/es (page does not exist)"):

Crea mallas anisotrópicas para realizar cálculos precisos cerca de los límites.

- ![](/images/FEM_MeshRegion.svg) [Region de malla MEF](/index.php?title=FEM_MeshRegion/es&action=edit&redlink=1 "FEM MeshRegion/es (page does not exist)"): Crea una(s) zona(s) localizada(s) para mallar, lo que optimiza el tiempo de análisis.

- ![](/images/FEM_MeshGroup.svg) [Grupo de malla MEF](/index.php?title=FEM_MeshGroup/es&action=edit&redlink=1 "FEM MeshGroup/es (page does not exist)"): Agrupa y etiqueta los elementos de una malla (vértice, arista, superficie), útil para exportar la malla a resolvedores externos.

- ![](/images/FEM_CreateElementsSet.svg) [Erase Elements](/FEM_CreateElementsSet "FEM CreateElementsSet"): Hides elements selected by a polygon from the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_FemMesh2Mesh.svg) [Malla MEF a malla](/index.php?title=FEM_FemMesh2Mesh/es&action=edit&redlink=1 "FEM FemMesh2Mesh/es (page does not exist)"): Convierte la superficie de una malla MEF a una malla.

## Menú: Solve

- ![](/images/FEM_SolverCalculixCxxtools.svg) [Herramientas del Solucionador CalculiX Estándar](/FEM_SolverCalculixCxxtools/es "FEM SolverCalculixCxxtools/es"): Crea un nuevo solucionador para este analisis. En la mayoria de los casos el solucionador es creado junto con el analisis.

- ![](/images/FEM_SolverElmer.svg) [Solucionador Elmer](/index.php?title=FEM_SolverElmer/es&action=edit&redlink=1 "FEM SolverElmer/es (page does not exist)"): Crea el controlador del Solucionador para Elmer. Es independiente de otros objetos solucionadores.

- ![](/images/FEM_SolverMystran.svg) [Solver Mystran](/FEM_SolverMystran "FEM SolverMystran"): Creates the solver controller for the MYSTRAN solver. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_SolverZ88.svg) [Solucionador Z88](/index.php?title=FEM_SolverZ88/es&action=edit&redlink=1 "FEM SolverZ88/es (page does not exist)"):

### Mechanical equations

- ![](/images/FEM_EquationElasticity.svg) [Ecuación de elasticidad](/index.php?title=FEM_EquationElasticity/es&action=edit&redlink=1 "FEM EquationElasticity/es (page does not exist)"):

- ![](/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform nonlinear mechanical analyses (deformations). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Electromagnetic equations

- ![](/images/FEM_EquationElectrostatic.svg) [Ecuación electrostatica](/index.php?title=FEM_EquationElectrostatic/es&action=edit&redlink=1 "FEM EquationElectrostatic/es (page does not exist)"):

- ![](/images/FEM_EquationElectricforce.svg) [Ecuación de la fuerza eléctrica](/index.php?title=FEM_EquationElectricforce/es&action=edit&redlink=1 "FEM EquationElectricforce/es (page does not exist)"): [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/FEM_EquationMagnetodynamic.svg) [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics in 2D. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate static current conduction. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/FEM_EquationFlow.svg) [Ecuación de flujo](/index.php?title=FEM_EquationFlow/es&action=edit&redlink=1 "FEM EquationFlow/es (page does not exist)"):

- ![](/images/FEM_EquationFlux.svg) [Ecuación de flujo](/index.php?title=FEM_EquationFlux/es&action=edit&redlink=1 "FEM EquationFlux/es (page does not exist)"):

- ![](/images/FEM_EquationHeat.svg) [Ecuación de calor](/index.php?title=FEM_EquationHeat/es&action=edit&redlink=1 "FEM EquationHeat/es (page does not exist)"):

- ![](/images/FEM_SolverControl.svg) [Control del trabajo del solucionador](/index.php?title=FEM_SolverControl/es&action=edit&redlink=1 "FEM SolverControl/es (page does not exist)"): Abre un nuevo menu para ajustar y iniciar el solucionador seleccionado.

- ![](/images/FEM_SolverRun.svg) [Ejecutar calculo de solucionador](/index.php?title=FEM_SolverRun/es&action=edit&redlink=1 "FEM SolverRun/es (page does not exist)"): Ejecuta el solucionador seleccionado del análisis activo.

## Menú de Resultados

- ![](/images/FEM_ResultsPurge.svg) [Purga de resultados](/index.php?title=FEM_ResultsPurge/es&action=edit&redlink=1 "FEM ResultsPurge/es (page does not exist)"): Elimina los resultados del análisis activos.

- ![](/images/FEM_ResultShow.svg) [Mostrar resultados](/index.php?title=FEM_ResultShow/es&action=edit&redlink=1 "FEM ResultShow/es (page does not exist)"): Used to display the result of an analysis.

- ![](/images/FEM_PostApplyChanges.svg) [Aplicar cambios a la canaliza](/index.php?title=FEM_PostApplyChanges/es&action=edit&redlink=1 "FEM PostApplyChanges/es (page does not exist)"):

- ![](/images/FEM_PostPipelineFromResult.svg) [Pos canaliza a resultado](/FEM_PostPipelineFromResult/es "FEM PostPipelineFromResult/es"):

- ![](/images/FEM_PostFilterWarp.svg) [Filtro de deformación](/index.php?title=FEM_PostFilterWarp/es&action=edit&redlink=1 "FEM PostFilterWarp/es (page does not exist)"):

- ![](/images/FEM_PostFilterClipScalar.svg) [Filtro de clip Escalar](/index.php?title=FEM_PostFilterClipScalar/es&action=edit&redlink=1 "FEM PostFilterClipScalar/es (page does not exist)")

- ![](/images/FEM_PostFilterCutFunction.svg) [Función Filtro de corte](/index.php?title=FEM_PostFilterCutFunction/es&action=edit&redlink=1 "FEM PostFilterCutFunction/es (page does not exist)"):

- ![](/images/FEM_PostFilterClipRegion.svg) [Filtro de clip de región](/index.php?title=FEM_PostFilterClipRegion/es&action=edit&redlink=1 "FEM PostFilterClipRegion/es (page does not exist)"):

- ![](/images/FEM_PostFilterContours.svg) [Contours filter](/FEM_PostFilterContours "FEM PostFilterContours"): Used to display iso-lines (for analyses in 2D) or iso-contours. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Filtro clip de línea](/index.php?title=FEM_PostFilterDataAlongLine/es&action=edit&redlink=1 "FEM PostFilterDataAlongLine/es (page does not exist)"):

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Gráfico de linealización de tensiones](/index.php?title=FEM_PostFilterLinearizedStresses/es&action=edit&redlink=1 "FEM PostFilterLinearizedStresses/es (page does not exist)"):

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Datos en el filtro de clip de punto](/index.php?title=FEM_PostFilterDataAtPoint/es&action=edit&redlink=1 "FEM PostFilterDataAtPoint/es (page does not exist)"):

### Filter functions

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Plane](/FEM_PostCreateFunctionPlane "FEM PostCreateFunctionPlane"): Cuts the result mesh with a plane.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Sphere](/FEM_PostCreateFunctionSphere "FEM PostCreateFunctionSphere"): Cuts the result mesh with a sphere.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Cylinder](/FEM_PostCreateFunctionCylinder "FEM PostCreateFunctionCylinder"): Cuts the result mesh with a cylinder. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Box](/FEM_PostCreateFunctionBox "FEM PostCreateFunctionBox"): Cuts the result mesh with a box. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Menú: Utilidades

- ![](/images/FEM_ClippingPlaneAdd.svg) [Plano de recorte en la cara](/index.php?title=FEM_ClippingPlaneAdd/es&action=edit&redlink=1 "FEM ClippingPlaneAdd/es (page does not exist)"):

- ![](/images/FEM_ClippingPlaneRemoveAll.svg) [Eliminar todos los planos de recorte](/index.php?title=FEM_ClippingPlaneRemoveAll/es&action=edit&redlink=1 "FEM ClippingPlaneRemoveAll/es (page does not exist)"):

- ![](/images/FEM_Examples.svg) [Abrir ejemplos MEF](/index.php?title=FEM_Examples/es&action=edit&redlink=1 "FEM Examples/es (page does not exist)"): Abre la interfaz gráfica de usuario para acceder a los ejemplos de MEF.

## Menú de contexto

- ![](/images/FEM_MeshClear.svg) [Limpiar malla MEF](/index.php?title=FEM_MeshClear/es&action=edit&redlink=1 "FEM MeshClear/es (page does not exist)"): Elimina el archivo de malla del archivo de FreeCAD. Útil para aligerar un archivo de FreeCAD.

- ![](/images/FEM_MeshDisplayInfo.svg) [Mostrar información de la malla MEF](/index.php?title=FEM_MeshDisplayInfo/es&action=edit&redlink=1 "FEM MeshDisplayInfo/es (page does not exist)"):

## Obsolete tools

- ![](/images/FEM_ConstraintFluidBoundary.svg) [Condición límite del fluido](/index.php?title=FEM_ConstraintFluidBoundary/es&action=edit&redlink=1 "FEM ConstraintFluidBoundary/es (page does not exist)"):

- ![](/images/FEM_ConstraintBearing.svg) [Restricción de rodamiento](/index.php?title=FEM_ConstraintBearing/es&action=edit&redlink=1 "FEM ConstraintBearing/es (page does not exist)"): Utilizado para definir una restricción de rodamiento.

- ![](/images/FEM_ConstraintGear.svg) [Restricción de engrane](/index.php?title=FEM_ConstraintGear/es&action=edit&redlink=1 "FEM ConstraintGear/es (page does not exist)"): Utilizado para definir una restricción de engrane.

- ![](/images/FEM_ConstraintPulley.svg) [Restricción de polea](/index.php?title=FEM_ConstraintPulley/es&action=edit&redlink=1 "FEM ConstraintPulley/es (page does not exist)"): Utilizado para definir una restricción de polea.

- ![](/images/FEM_SolverCalculiX.svg) [Solucionador CalculiX (experimental)](/index.php?title=FEM_SolverCalculiX/es&action=edit&redlink=1 "FEM SolverCalculiX/es (page does not exist)"):

- ![](/images/FEM_CreateNodesSet.svg) [Colocar nodos](/index.php?title=FEM_CreateNodesSet/es&action=edit&redlink=1 "FEM CreateNodesSet/es (page does not exist)"): Crea/define una colocacion de nodo en una malla MEF.

## Preferencias

- ![](/images/Std_DlgPreferences.svg) [Preferencias...](/index.php?title=FEM_Preferences/es&action=edit&redlink=1 "FEM Preferences/es (page does not exist)"): Preferencias disponibles en las herramientas MEF.

## Información

En las siguientes páginas se explican diferentes temas del ambiente de trabajo MEF.

[MEF Instalación](/FEM_Install/es "FEM Install/es"): una descripción detallada sobre cómo configurar los programas externos utilizados en el ambiente de trabajo.

[FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing"): tips regarding geometry preparation for FEM and meshing.

[Malla en MEF](/FEM_Mesh/es "FEM Mesh/es") más información sobre la obtención de una malla para el análisis de elementos finitos.

[Solucionador MEF](/FEM_Solver/es "FEM Solver/es"):
más información sobre los diferentes solvers disponibles en el banco de trabajo, y los que podrían utilizarse en el futuro.

[MEF CalculiX](/index.php?title=FEM_CalculiX/es&action=edit&redlink=1 "FEM CalculiX/es (page does not exist)"): más información sobre CalculiX, el solucionador por defecto utilizado en el ambiente de trabajo para el análisis estructural.

[Hormigón MEF](/FEM_Concrete "FEM Concrete") interesante información sobre el tema de la simulación de estructuras de hormigón.

## Tutorials

## Tutoriales

Tutorial 1: [MEF CalculiX Cantilever 3D](/FEM_CalculiX_Cantilever_3D/es "FEM CalculiX Cantilever 3D/es"); un análisis básico de los rayos de apoyo.

Tutorial 2: [Tutorial MEF](/FEM_tutorial/es "FEM tutorial/es"); un simple análisis de tensión de una estructura.

Tutorial 3: [Tutorial MEF en Python](/FEM_Tutorial_Python/es "FEM Tutorial Python/es"); establecer el ejemplo del voladizo completamente a través de la escritura en Python, incluyendo la malla.

Tutorial 4: [MEF cizalla de un bloque compuesto](/FEM_Shear_of_a_Composite_Block/es "FEM Shear of a Composite Block/es"); ver la deformación de un bloque que está compuesto por dos materiales.

Tutorial 5: [Análisis MEF transitorio](/index.php?title=Transient_FEM_analysis/es&action=edit&redlink=1 "Transient FEM analysis/es (page does not exist)")

Tutorial 6: [Post-proceso de los resultados de MEF con Paraview](/index.php?title=Post-Processing_of_FEM_Results_with_Paraview/es&action=edit&redlink=1 "Post-Processing of FEM Results with Paraview/es (page does not exist)")

Tutorial 7: [Ejemplo MEF Capacitancia Dos Bolas](/index.php?title=FEM_Example_Capacitance_Two_Balls/es&action=edit&redlink=1 "FEM Example Capacitance Two Balls/es (page does not exist)"); Tutorial GUI 6 de Elmer "Electrostática Capacitancia Dos Bolas" usando Ejemplos MEF.

Tutoriales de análisis termomecánico acoplado por [openSIM](https://opensimsa.github.io/training.html)

Video Tutorial 1 [Vídeo de MEF para principiantes](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (incluye enlace a YouTube)

Video Tutorial 2 [Vídeo de MEF para principiantes](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (incluye enlace a YouTube)

Más video Tutoriales [anisim Software de ingeniería de código abierto](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (en alemán)

## Extendiendo el Ambiente de trabajo MEF

The FEM Workbench is under constant development. An objective of the project is to find ways to easily interact with various FEM solvers, so that the end user can streamline the process of creating, meshing, simulating, and optimizing an engineering design problem, all within FreeCAD.

The following information is aimed at power users and developers who want to extend the FEM Workbench in different ways. Familiarity with C++ and Python is expected, and also some knowledge of the "document object" system used in FreeCAD is necessary; this information is available in the [Power users hub](/Power_users_hub "Power users hub") and the [Developer hub](/Developer_hub "Developer hub"). Please notice that since FreeCAD is under active development, some articles may be too old, and thus obsolete. The most up to date information is discussed in the [FreeCAD forums](https://forum.freecadweb.org/index.php), in the Development section. For FEM discussions, advice or assistance in extending the workbench, the reader should refer to the [FEM subforum](https://forum.freecadweb.org/viewforum.php?f=18).

Los siguientes artículos explican cómo se puede ampliar el banco de trabajo, por ejemplo, añadiendo nuevos tipos de condiciones de contorno (restricciones) o ecuaciones.

- [Extender modulo MEF](/Extend_FEM_Module/es "Extend FEM Module/es")
- [Tutorial de adición de restricciones MEF](/index.php?title=Add_FEM_Constraint_Tutorial/es&action=edit&redlink=1 "Add FEM Constraint Tutorial/es (page does not exist)")
- [Añadir el tutorial de la ecuación MEF](/index.php?title=Add_FEM_Equation_Tutorial/es&action=edit&redlink=1 "Add FEM Equation Tutorial/es (page does not exist)")

A developer's guide has been written to help power users in understanding the complex FreeCAD codebase and the interactions between the core elements and the individual workbenches. The book is hosted at github so multiple users can contribute to it and keep it updated.

- [Early preview of ebook: Module developer' guide to FreeCAD source](https://forum.freecadweb.org/viewtopic.php?t=17581) forum thread.
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) github repository.

## Extender la documentación de Ambiente de trabajo MEF

- Se puede encontrar más información sobre la ampliación o la falta de documentación de MEF en el foro: [Documentación MEF que falta en la Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/es&oldid=1568037>"
