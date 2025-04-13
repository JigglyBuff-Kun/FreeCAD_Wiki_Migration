---
title: Arch AjusteMaterial
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseBIM Materialinstead.
:::

|  |
| --- |
| Arch SetMaterial |
| Ubicación en el Menú |
| Arch → Set material... |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es"), [BIM](/BIM_Workbench/es "BIM Workbench/es") |
| Atajo de teclado por defecto |
| M T |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

Las herramientas Material permiten agregar [materials](/Material "Material") al documento activo y atribuir un material a un objeto [Arch](/Arch_Workbench/es "Arch Workbench/es"). Los materiales pueden tener todas las propiedades de un material determinado y controlar el color del objeto al que está unido. Los materiales se almacenan en una carpeta **Materiales** en el documento activo.

![](/images/Arch_materials_01.jpg)

## Como utilizar

1. Opcionalmente, seleccione uno o más objetos a los que desee atribuir un nuevo material
2. Presione el botón ![](/images/Arch_SetMaterial.png) Set Material
3. Cargue un material preestablecido, o cree uno nuevo completando los campos.
4. Presiona **OK**

## Opciones

* Al crear un nuevo material, un panel de tareas le permite establecer diferentes opciones:

![](/images/Arch_materials_02.jpg)

* **Elegir predefinido**: elija uno de los materiales preestablecidos, para usarlo tal cual, o para adaptarlo modificando los campos a continuación
* **Nombre**: elija un nombre para el material
* **Botón Editar**: Esto abre el material actual en [Material editor](/FEM_MaterialEditor "FEM MaterialEditor") de FreeCAD, lo que le permite editar muchas propiedades adicionales y agregar sus propias propiedades personalizadas
* **Descripción**: Una descripción más detallada del material
* **Color**: un color de pantalla para el material, que se aplicará a todos los objetos que usen ese material
* **Código**: un nombre y número de referencia de un sistema de especificación como [Masterformat](https://en.wikipedia.org/wiki/MasterFormat) o [Omniclass](http://www.omniclass.org/) .
* **Botón del navegador de códigos**: Aún no implementado: permitirá abrir la referencia en un navegador web
* **URL**: una URL donde se puede encontrar más información sobre el material
* **Botón URL**: abre la URL en un navegador web

## Relation to IFC

This roughly corresponds to [IfcMaterial](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmaterial.htm).

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SetMaterial/es&oldid=1467130>"