---
title: Modelado BIM
---

El modelado de información de construcción significa (BIM, engl.: Building Information Modelling)
[[1]](https://es.wikipedia.org/wiki/Modelado_de_informaci%C3%B3n_de_construcci%C3%B3n). La definición exacta de lo que es varía, pero podemos decir simplemente que es la forma en que se modelan hoy en día los edificios y otras grandes estructuras como puentes, túneles, etc. Los modelos BIM suelen basarse en modelos 3D, y además incluyen una serie de capas de información adicionales, como información sobre materiales, relaciones con otros objetos o modelos, o instrucciones especiales para la construcción o el mantenimiento. Esta información adicional permite todo tipo de análisis avanzados del modelo, como la resistencia estructural, la estimación de costes y tiempos de construcción o el cálculo del consumo energético.

El [Ambiente de trabajo Arquitectura](/Arch_Workbench/es "Arch Workbench/es") de FreeCAD implementa una serie de herramientas y facilidades para el modelado BIM. Aunque tiene un propósito diferente, está hecho para trabajar en estrecha integración con el resto de FreeCAD: Cualquier cosa hecha con cualquier otro banco de trabajo de FreeCAD puede convertirse en un objeto Arch, o ser utilizado como base para un objeto Arch.

Como en el [Ambiente de trabajo Disegno Piezas](/PartDesign_Workbench/es "PartDesign Workbench/es"), los objetos producidos por el Arch Workbench están destinados a ser construidos en el mundo real. Por lo tanto, necesitan ser **sólidos'**. Las herramientas de Arch normalmente se encargan de ello automáticamente, y también proporcionan herramientas de utilidad para ayudarte a comprobar la validez de los objetos.

En este capítulo veremos cómo modelar este pequeño edificio:

![](/images/FreeCAD_BIMHouse.png)

- Crear un nuevo documento, y cambiar al [Ambiente de trabajo Arquitectura](/Arch_Workbench/es "Arch Workbench/es").
- Abra el menú **Edición → Preferencias → Borrador → Rejilla y Ajuste** y establezca:
  - **Líneas principales cada** `10`.
  - **Espaciado de la cuadrícula** `1000mm` para tener una cuadrícula basada en un metro, lo cual es conveniente para el tamaño de nuestro edificio.
  - **Tamaño de la cuadrícula** `100 líneas`.
- En la barra de herramientas de **snapping** asegúrese de que el ![](/images/Draft_Snap_Grid.svg) [grid snap](/Draft_Snap_Grid "Draft Snap Grid") esté habilitado, para que podamos usar la rejilla tanto como sea posible.
- Si no ves los ejes entonces haz clic en el ![](/images/Draft_Snap_Grid.svg) [alternar rejilla de borrador](/index.php?title=Draft_Snap_Grid/es&action=edit&redlink=1 "Draft Snap Grid/es (page does not exist)").
- Establece el [Plano trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es") en el plano **XY**
- Aleja el zoom y desplázalo para que puedas ver el área desde (0,0) hasta (4,3). Ver el [Mouse Model](/Mouse_Model "Mouse Model") para las instrucciones.
- Dibuja cuatro líneas con la herramienta ![](/images/Draft_Line.svg) [Borrador línea](/Draft_Line/es "Draft Line/es"). Puedes introducir las coordenadas manualmente, o simplemente elegir los puntos de la cuadrícula con el ratón:
  - Del punto (0,0) al punto (0,3)
  - Del punto (0,3) al punto (4,3)
  - Del punto (4,3) al punto (4,0)
  - Del punto (4,0) al punto (0,0)

NOTA: Debido a un error en la versión 0.18, asegúrese de hacer las líneas en este orden y esta dirección.

![](/images/Exercise_arch_03.jpg)

Observa que hemos dibujado siempre en la misma dirección (en el sentido de las agujas del reloj). Esto no es necesario, pero asegurará que las paredes que construiremos a continuación tengan todas la misma dirección izquierda y derecha. También podrías pensar que aquí podríamos haber dibujado simplemente un rectángulo, lo cual es cierto. Pero las cuatro líneas nos permitirán ilustrar mejor cómo añadir un objeto dentro de otro.

- Once you have created the lines check their start and end points and adjust if necessary to get them exactly correct.

![](/images/Manual-BIM_Modeling_-_Adjusting_Lines.png)

- Select all four lines, then press the ![](/images/Arch_Wall.svg) [Wall](/Arch_Wall "Arch Wall") button.
- Set the walls' **Height** to 3m (default).
- Set **Alignment** property to **left**. Setting the Alignment property to the left ensures that the walls you create will be positioned to the left side of the lines you drew. In FreeCAD’s BIM Workbench, walls are typically generated based on a reference line, and the left or right alignment dictates which side of the line the wall will be placed.

If you didn’t draw the lines in the same order as instructed (clockwise), the orientation of some walls may be flipped, meaning they could be positioned on the opposite side of the line (to the right instead of the left). In that case, you would need to adjust the alignment to the right for those specific walls to ensure they all align consistently. Once this is set correctly, you'll have four walls that intersect at the corners, positioned on the inside of the baseline, forming the desired layout.

![](/images/Exercise_arch_04.jpg)

After creating walls, the next step is to join them so they intersect properly. This is necessary when walls don't connect cleanly at their intersections. To do this, you select one wall as the "host" and add the other walls as "additions", merging their geometry with the host. All objects in the BIM Workbench can have multiple additions (which add geometry) or subtractions (which remove geometry). These relationships can be managed anytime by double-clicking the object in the tree, allowing for flexible adjustments to ensure the walls and other architectural elements integrate smoothly.

- Select the four walls with Ctrl pressed, the last one being the wall that you chose to become the host
- Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button. The four walls have now been turned into one:

![](/images/Exercise_arch_05.jpg)

The individual walls are however still accessible, by expanding the wall in the tree view.

- Let's now place a door by pressing on the ![](/images/BIM_Door.svg) [Door](/BIM_Door "BIM Door") tool.
- Begin by selecting the wall. While this step isn't required, it's a useful habit to develop. If an object is selected before starting an operation, the operation will automatically apply to that entity by default.
- Set the ![](/images/View-axonometric.svg) [Working Plane](/Draft_SelectPlane "Draft SelectPlane") to **auto** so we are not restricted to the ground plane
- Press the ![](/images/BIM_Door.svg) [Door](/BIM_Door "BIM Door") button.
- In the door creation panel, select the **Glass door** preset, and set its **Width** to 1 m and its **Height** to 2.1m. You will notice that you can choose between various door types and set up their parameters as you wish. In FreeCAD a door is derived by an [window](/Arch_Window "Arch Window") operation.
- Make sure the ![](/images/Draft_Snap_Near.svg) [Snap near](/Draft_Snap_Near "Draft Snap Near") option is turned on, so we can snap on faces
- Place your door roughly on the middle of the front face of the wall:

![](/images/FreeCAD_BIMDoor.png)

- We can now set the precise location by expanding the wall and the window objects in the tree view and changing the **Placement** property of the base sketch of our door. Set its position to **x = 0.5 m, y = 0, z = 0**. Our door is now exactly where we want it:

![](/images/FreeCAD_BIMDoorPos.png)

- Let's place a window next to our door. Select the wall, press the ![](/images/Arch_Window.svg) [Window](/Arch_Window "Arch Window") tool, select the **Open 2-pane** preset, and place a **1m x 1m** window in the same face as the door. Set the placement of the underlying sketch to position **x = 0, y = 0, z = 1.1m**, so the upper line of the window is aligned to the top of the door.

![](/images/FreeCAD_BIMWindow.png)

Windows are always based on sketches. You can easily create custom windows by first drawing a sketch on a face, then turning that sketch into a window by selecting it and clicking the window button. Afterward, you can define the window's parameters—such as which parts of the sketch should be extruded and by how much—by double-clicking the window in the tree view. Now, let's move on to creating a slab:

- Set the [Working Plane](/Draft_SelectPlane "Draft SelectPlane") to **XY** plane
- Create a ![](/images/Draft_Rectangle.svg) [rectangle](/Draft_Rectangle "Draft Rectangle") with a **length** of 5m, a height of **4m**, and place it at position x:-0.5m, y:-0.7m, z:0.
- Select the rectangle
- Click the ![](/images/BIM_Slab.svg) [Slab](/BIM_Slab "BIM Slab") tool to create a slab from the rectangle
- Keep the default values of 0.2m for the **height** property and set the normal **direction** to (0,0,-1), so the extrusion goes downward. While we could have moved the object 0.2m downward instead, it's a good practice to keep extruded objects aligned with their base profile to maintain consistency and accuracy in the model.
- Set the **Ifc Type** property of the slab to **slab**. This is not necessary in FreeCAD, but is important for IFC export, as it will ensure that the object is exported with the correct IFC type.

![](/images/FreeCAD_BIMSlab.png)

- Let's put a roof over our heads now. We can easily do it by using the ![](/images/Arch_Roof.svg) [Roof](/Arch_Roof "Arch Roof") tool.
- Press the ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane") option to enable the drafting on all planes.
- By choosing one of the top faces of our house press the ![](/images/Draft_SelectPlane.svg) [Select plane](/Draft_SelectPlane "Draft SelectPlane") button. The working plane is now set to that face.
- Create a ![](/images/Draft_Rectangle.svg) [rectangle](/Draft_Rectangle "Draft Rectangle"), snapping to two opposite points of the walls:
- On the **data** tab of the roof set the **Runs** parameter to 1600.
- If you wish to change the color of the roof you can do so on the view tab

![](/images/FreeCAD_BIMHouseg.png)

With that, our model is now complete. The next step is to organize it properly to ensure it exports correctly to the IFC format. IFC files require all building elements to be grouped within a **building** object, and optionally, within a specific **story**. Additionally, all buildings must be located on a **site**. However, FreeCAD's IFC exporter will automatically generate a default site if one isn't present, so we don't need to add it manually. It's important to properly structure the model to comply with IFC standards, ensuring smooth collaboration and compatibility with other BIM software. Proper organization will also help avoid any data loss or errors during the export process.

- Select the walls, the slab, and the roof.
- Press the ![](/images/Arch_Floor.svg) [Floor](/Arch_Floor "Arch Floor") button
- Select the floor we just created
- Press the ![](/images/Arch_Building.svg) [Building](/Arch_Building "Arch Building") button

Our model is now ready to export:

![](/images/FreeCAD_BIMExport.png)

The [IFC format](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) is one of the most precious assets in a free BIM world, because it allows the exchange of data between any application and actor of the construction world, in an open manner (the format is open, free and maintained by an independent consortium). Exporting your BIM models as IFC ensures that anyone can see and analyze them, no matter the application used.

- Select the top object you want to export, that is, the Building object.
- Select menu **File -> Export -> Industry Foundation Classes** and save your file.
- The resulting IFC file can now be opened in a wide range of applications and viewers (the image below shows the file opened in the free [IfcPlusPlus](http://www.ifcquery.com/) viewer). Checking the exported file in such a viewer application before distributing it to other people is important to check that all the data contained in the file is correct. FreeCAD itself can also be used to re-open the resulting IFC file.

![](/images/FreeCAD_BIMIFC.png)

We can use the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") to create a drawing of our building. The process is similar to what was shown in the previous section, so we won't go into too much detail here. Simply create a new view by using the ![](/images/TechDraw_PageDefault.svg) [insert Default Page](/TechDraw_PageDefault "TechDraw PageDefault") option, then select the view you want to display in the drawing and add dimensions where necessary. This will allow us to create a professional 2D representation of the 3D model for documentation or presentation purposes.

![](/images/FreeCAD_BIMHouseDrawing.png)

Our page is now ready, and we can export it to SVG or DXF formats, or print it. The SVG format allows you to open the file using illustration applications such as [Inkscape](http://www.inkscape.org), with which you can quickly enhance technical drawings and turn them into much nicer presentation drawings. It offers many more possibilities than the DXF format.

## Descargas

- The file produced during this exercise: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/house.FCStd>
- The IFC file exported from the above file: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/house.ifc>
- The SVG file exported from the above file: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/house.svg>

## Relacionados

- [Ambiente de trabajo BIM](/BIM_Workbench/es "BIM Workbench/es")
- [Ambiente de trabajo Arquitectura](/Arch_Workbench/es "Arch Workbench/es")
- [El Borrador plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es")
- [Los ajustes Borrador Atrapar](/Draft_Snap/es "Draft Snap/es")
- [El sistema de expresiones](/Expressions/es "Expressions/es")
- [El formato IFC](https://es.wikipedia.org/wiki/Industry_Foundation_Classes)
- [IfcOpenShell](http://ifcopenshell.org)
- [IfcPlusPlus](http://www.ifcquery.com)
- [Inkscape](http://www.inkscape.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:BIM_modeling/es&oldid=1522226>"
