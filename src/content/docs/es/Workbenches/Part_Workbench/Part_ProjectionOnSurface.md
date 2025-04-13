---
title: Pieza ProyecciónEnSuperficie
---

|                                                  |
| ------------------------------------------------ |
| Pieza ProyecciónEnSuperficie                     |
| Ubicación en el Menú                             |
| Pieza → Crear una proyección en la superficie... |
| Entornos de trabajo                              |
| [Pieza](/Part_Workbench/es "Part Workbench/es")  |
| Atajo de teclado por defecto                     |
| _Ninguno_                                        |
| Introducido en versión                           |
| 0.19                                             |
| Ver también                                      |
| _Ninguno_                                        |
|                                                  |

## Descripción

Pieza Proyección en superficie se utiliza para proyectar una [Forma](/index.php?title=Shape/es&action=edit&redlink=1 "Shape/es (page does not exist)") sobre una superficie desde otra [Forma](/index.php?title=Shape/es&action=edit&redlink=1 "Shape/es (page does not exist)"); puede utilizarse para proyectar un logo o un mensaje de texto (ver ![](/images/Draft_ShapeString.svg) [Borrador Forma Cuerda](/Draft_ShapeString/es "Draft ShapeString/es")) en superficies curvas para crear efectos interesantes.

Esta herramienta puede proyectar toda la cara, o sólo un alambre o borde de una [Forma](/index.php?title=Shape/es&action=edit&redlink=1 "Shape/es (page does not exist)"). El resultado puede ser una nueva cara o un alambre en la superficie, o incluso un sólido de proyección, que puede ser usado en un [corte booleano](/Part_Cut/es "Part Cut/es").

![](/images/Part_ProjectionOnSurface1.png) ![](/images/Part_ProjectionOnSurface2.png)

Proyección en una superficie curva

## Utilización

1. Make sure you have at least two objects in your document; the "source" object that you wish to project, and the "target" object where the projection will be made.
2. Click on ![](/images/Part_ProjectionOnSurface.svg) [Projection on surface](/Part_ProjectionOnSurface "Part ProjectionOnSurface") to launch a [task panel](/Task_panel "Task panel") with various options.
3. Click on Select projection surface, and then click on the "target" surface where the projection will be created.
4. Then click on the specific button to choose the type of subelement that you want to add to your projection object.
   - Add face: select a source face.
   - Add wire: select a source edge. The tool will extract the entire wire to which the edge belongs. For example, by choosing a single edge of a polygon, it will project the entire polygon.
   - Add edge: select a source edge. The tool will only project the selected edge.
   - Once a button is depressed, pick a subelement in the [3D view](/3D_view "3D view"). If you wish to deselect it, pick the same element again.
   - When you are satisfied with your selection, press the same Add... button to leave the selection mode.
5. Then click on the specific radiobutton to choose the type of projection shape to create.
   - ![](/images/RadioButtonTrue.svg) Show all: it will show all types of closed wires and edges on the target surface. If a "face" subelement was selected in the previous step, a preview of a solid object extruded from the projection will be shown, depending on the value of **Extrude height**.
   - ![](/images/RadioButtonTrue.svg) Show faces: it will show a preview of a filled face on the target surface. This will only work if you selected a "face" subelement in the previous step; if you selected a closed "wire", only the edges (no face) will be created as projection; if you selected "edges", only those edges will be created as projection.
   - ![](/images/RadioButtonTrue.svg) Show edges: it will show a preview of the edges on the target surface. This will work whether you added a "face", "wire", or "edge" subelement in the previous step; even if you added a filled "face", only the edges will be created as projection.
6. Press the OK to complete the operation and produce the new projection object.

Notes:

- The projection direction is automatically taken from the camera direction in the [3D view](/3D_view "3D view") at the moment the tool is launched.
- To change the direction, move the camera, and press Get current camera direction.
- Alternatively press the X:, Y:, or Z: buttons to set the projection direction to the main global axes, +X, -X, +Y, -Y, +Z, or -Z.
- However, do notice that changing the projection direction won't automatically update the projection preview; in order to do this, you must re-select the geometry by pressing the Add... buttons and picking the subelements again.

## Opciones

- **Extrude height**: it is the height of the solid shape that is created by extruding the projected face, from the target surface and along the negative of the projection direction. For example, if the projection direction is along +Y `(0, 1, 0)`, the extrusion will be created in the direction -Y `(0, -1, 0)`. This solid extrusion will only be created if the subelement selected was a closed face, by pressing the Add face button, and by choosing the ![](/images/RadioButtonTrue.svg) Show all option.
- **Solid depth**: it is the distance that the projection object is moved along the projection direction. Negative values will displace the object in the opposite direction; this allows creating a projection that is offset from the target surface.

## Limitaciones

The projection algorithm sometimes is not able to create a valid projection face. If this happens a solid extrusion won't be able to be created either.

If this happens:

- Check if your source face is valid; try running the ![](/images/Part_CheckGeometry.svg) [CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") tool for clues.
- Check if the projection direction is valid. Can the source face be realistically projected onto the target surface? Would a straight projection hit the surface? Adjust the camera so that the source face is in front of the target surface, and try again.
- Try to use the ![](/images/RadioButtonTrue.svg) Show edges option. Are the edges projected correctly? Try to create a face with the edges by hand.

The projection done in the Part workbench is not parametric. If you need a parametric workflow, please consult with the [`Projection` class](https://gist.github.com/CsatiZoltan/f4fd10bf20923143ba0e0678ea1d3d61), which is a Python scripted object, intended for programmatic use.

## Enlaces

- Hilo del foro: [Project faces onto bent surface](https://forum.freecadweb.org/viewtopic.php?f=9&t=33700)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ProjectionOnSurface/es&oldid=1466636>"
