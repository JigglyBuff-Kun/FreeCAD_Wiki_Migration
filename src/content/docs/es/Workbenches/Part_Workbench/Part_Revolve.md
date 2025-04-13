---
title: Part Revolve
---
|  |
| --- |
| Part\_Revolve |
| Ubicación en el Menú |
| Part → Revolve |
| Entornos de trabajo |
| [Pieza](/Part_Workbench/es "Part Workbench/es"), Completo |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

Revoluciona los objetos seleccionados alrededor de un eje dado. Los siguientes tipos de formas están permitidos, y crean las formas de salida indicadas:

| Forma de entrada | Forma de salida |
| --- | --- |
| Vértice | Arista |
| Arista | Cara |
| Contorno | Cáscara |
| Cara | Sólido |
| Cáscara | Sólido compuesto |

Los sólidos o sólidos compuestos no están permitidos como formas de entrada. Los componentes perpendiculares tampoco están permitidos. Las versiones futuras comprobarán el tipo actual de forma de los objetos compuestos.

![](/images/Dialog-revolve.jpg)

El argumento ángulo especifica lo lejos que se girará el objeto. Las coordenadas mueven el origen del eje de revolución relativamente al origen del sistema de coordenadas.

Si seleccionas un eje definido por el usuario, los números definen la dirección del eje de revolución con respecto al sistema de coordenadas: Si la coordenada Z es 0 y las X e Y no son cero, entonces el eje estará en el plano XY. Su ángulo es tal que su tangente es el ratio de las coordenadas X e Y.

## Notes

* [App Link](/App_Link "App Link") objects linked to the appropriate object types can also be used as shapes and to specify the axis. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* If the object to revolve intersects the rotation axis the operation will fail in most cases.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Revolve/es&oldid=1206661>"