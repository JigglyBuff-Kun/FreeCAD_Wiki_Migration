---
title: Release notes 0.11/es
---

Este es un sumario de los cambios más importantes y las nuevas características disponibles en la versión 0.11 de FreeCAD. La lista completa puede encontrarse [aquí](http://www.freecadweb.org/tracker/changelog_page.php).

![](/images/FreeCAD011.png)

Una captura de pantalla de la versión 0.11

### General

- El [proyecto de traducción de FreeCAD](http://crowdin.net/project/freecad) ha recibido una enorme ayuda de numerosas personas de todo el mundo y FreeCAD ahora está disponible por lo menos en 15 idiomas: Inglés, Alemán, Francés, Italiano, Sueco, Español, Portugués, Ruso, Ucraniano, Noruego, Afrikaans, Finlandés, Chino simplificado, Croata y Holandés. Y se está trabajando con muchos otros idiomas para las próximas versiones.

![](/images/Release011-translation.jpg)

- Varias mejoras se han añadido por todo FreeCAD, por ejemplo el árbol de jerarquía ahora permite amontonar objetos complejos, manteniendo todo el historial de geometría limpio y fácilmente accesible y modificable. Nuevas mejoras del API de Python también permiten a los objetos interactuar mejor con el árbol, definiendo su propio comportamiento, iconos, etc.

![](/images/Release011-dependency.jpg)

- El mecanismo de copiar/pegar ha sido mejorado considerablemente, permitiendo ahora copiar/pegar objetos entre documentos de forma sencilla.
- Se han añadido nuevas herramientas a las características del [Entorno de trabajo de Piezas](/Part_Workbench/es "Part Workbench/es") como la simetría y el redondeo y los chaflanes de lados.

### Croquizado y diseño de piezas

- El solucionador de restricciones del [Entorno de trabajo de croquizado](/Sketcher_Workbench/es "Sketcher Workbench/es") ha sido totalmente reescrito y las características del croquizador, aunque aún no está completo, ya disponen de una buena colección de herramientas como líneas, rectángulos y restricciones como puntos coincidentes, paralelismo, longitud fija, o las restricciones de horizontal y vertical.

- En adicción al croquizador, un nuevo entorno de trabajo de piezas permite construir rápidamente sólidos a partir de croquis. Por norma ahora en FreeCAD, todo es paramétrico, puedes deshacer cuando quieras para cambiar el croquis, y toda la geometría que depende de ella se adaptará automáticamente

![](/images/Release011-sketcher.jpg)

![](/images/Movie.png) Ejemplos: [Demo del croquizador](http://www.youtube.com/watch?v=hvXupH5bA0E) • [Demo del módulo de piezas](http://www.youtube.com/watch?v=7ih9Jp3OAwA)

### Simulación de movimiento de Robots

- El [Entorno de simulación de movimiento de Robots](/Robot_Workbench/es "Robot Workbench/es") ha sido ampliado con muchas herramientas y ahora es claramente funcional y permite manipular de forma sencilla el movimiento de robots industriales

![](/images/Release011-robot.jpg)

### Croquizado 2D

- Los ajustes se han optimizado y ahora permiten trabajar bastante rápido, incluso con objetos complejos
- La herramienta de "Recortar/Extender" puede llamarse ahora "Recortar/Extender/Extruir", ya que permite extruir rápidamente caras, ofreciendo un atajo a la herramienta de extrusión estándar de Piezas
- El workflow del croquizado a la hoja de dibujo también se ha mejorado, todo el entorno de trabajo de croquizado puede ahora colocarse en una página de dibujo, y ofrecen el mismo nivel de comodidad que los objetos estándar de las Piezas, ofreciendo la habilidad de cambiar su posición, girar y escalar en marcha. También ofrecen algunas características extra, como el relleno con patrones de sombreado

![](/images/Release011-draft-drawing.jpg)

- El entorno de croquizado también ofrece nuevas herramientas como polígonos regulares y BSplines
- Existe una nueva herramienta de edición, permitiendo editar la geometría de la mayoría de los objetos de los croquis

![](/images/Release011-draft.jpg)

- Las cotas ahora permiten editar y mover el texto, y los contornos pueden tener una flecha final, permitiendo utilizarlos como directrices
- Varios comandos como mover, rotar o la acotación ahora permiten realizar varias instancias sin abandonar la herramienta
- El entorno de trabajo de croquizado también incorpora una [API en Python](/Draft_API/es "Draft API/es").
- La importación de DXF ahora soporta atributos en los bloques

![](/images/Movie.png) Examples: [Draft module demo](http://www.youtube.com/watch?v=Q7cG-LQK8Ps)

### Imágenes

- El entorno de trabajo de imágenes ahora añade un objeto ImagePlane, que permite mostrar un archivo de imagen dentro de la escena 3D, esto puede utilizarse por ejemplo para construir geometría sobre elementos escaneados

### Documentación

- El [manual de FreeCAD](/Online_Help_Toc/es "Online Help Toc/es") ahora dispone de diversas traducciones bastante avanzadas. Comprueba la página principal!

Traducciones disponibles: [![](/images/Flag-en.jpg)](/Release_notes_0.11 "Release notes 0.11 ") [![](/images/b/b7/Flag-de.jpg)](/Release_notes_0.11/de "Release notes 0.11/de") [![](/images/Flag-fr.jpg)](/Release_notes_0.11/fr "Release notes 0.11/fr ") [![](/images/8/80/Flag-it.jpg)](/Release_notes_0.11/it "Release notes 0.11/it") [![](/images/Flag-pl.jpg)](/Release_notes_0.11/pl "Release notes 0.11/pl ") [![](/images/5/57/Flag-ru.jpg)](/Release_notes_0.11/ru "Release notes 0.11/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.11/es&oldid=1015971>"
