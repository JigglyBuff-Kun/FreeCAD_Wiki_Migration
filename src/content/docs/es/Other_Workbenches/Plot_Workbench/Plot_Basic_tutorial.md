---
title: Plot Basic tutorial
---
|  |
| --- |
| Tutorial |
| Tema |
| Plot Workbench |
| Nivel |
| Beginner |
| Tiempo para completar |
|  |
| Autores |
|  |
| Versión de FreeCAD |
|  |
| Archivos de ejemplos |
|  |
| Ver también |
| *None* |
|  |

En este tutorial vamos a aprender a crear gráficos usando el módulo de graficado y la consola Python. Puedes aprender más sobre el [módulo de graficado aquí](/Plot_Workbench/es "Plot Workbench/es").

![](/images/Plot_Trigonometric_Example.png)

![Ejemplo de gráfico](/images/Plot_Trigonometric_Example.png)

Ejemplo de gráfico

Ejemplo de gráfico.

En la imagen anterior puedes ver una muestra del gráfico que pretendemos generar. Mediante este tutorial aprenderás:

* A crear un documento de gráfico mediante la consola de Python.
* A graficar series de datos mediante la consola de Python.
* A mostrar la malla.
* A mostrar la legenda.
* A configurar los títulos de las series usando [LaTeX](http://www.latex-project.org).
* A configurar los títulos de los ejes usando [LaTeX](http://www.latex-project.org).
* A configurar la apariencia de las series.
* A guardar el gráfico como archivo de imagen.

## Plotting data

## Graficar

El módulo de graficado no necesita de ningún documento de FreeCAD para poder comenzar a trabajar, simplemente despliega la consola de Python, o genera los [macros](/Macros/es "Macros/es") oportunos y comienza a trabajar.

### Creating plot document

### Crear un documento de gráfico

Los gráficos son documentos especiales dentro de FreeCAD, y pueden ser creados bien manualmente, bien automáticamente cuando se pretende trazar graficos y todavía no existe un documento activo. Crear manualmente los gráficos tiene dos ventajas:

* Puedes elegir la etiqueta de la ventana.
* Puedes controlar facilmente en que documento se trazan los gráficos.

Para crear un documento de gráfico nuevo simplemente lanza los siguientes comandos desde la terminal:

```
try:
    from FreeCAD.Plot import Plot
except ImportError:
    from freecad.plot import Plot

Plot.figure("TrigonometricTest")

```

Esto creará un nuevo documento llamado **TrigonometricTest**. Éste nuevo documento ya contiene unos ejes. Cada documento de gráfico debe tener al menos un set de ejes que no se podrá borrar a menos que se entre en profundidad en la interfaz matplotlib.

### Drawing functions

### Trazar curvas

Usted podría haber comenzado su trabajo en este punto, pues cuando se solicita al módulo de graficado que traze una curva sin existir un documento apropiado, el módulo genera uno nuevo, no obstante todos los consiguientes trazados se incluirán en el mismo documento hasta que se cree uno nuevo. Por esta razón es buena idea siempre tener controlado el número de documentos.

Lo primero que necesitamos para trazar las curvas es generar los datos:

```
import math
t = range(0,101)
t = [tt/100.0 for tt in t]
s = [math.sin(2.0*math.pi*tt) for tt in t]
c = [math.cos(2.0*math.pi*tt) for tt in t]

```

Lo que creará tres vectores (con 101 puntos):

* *t* = Tiempo en segundos.
* *s* = Función seno.
* *c* = Función coseno.

Para trazar las curvas correspondientes tan sólo será necesario lanzar los siguientes comandos:

```
Plot.plot(t,s)
Plot.plot(t,c)

```

Lo que graficará los datos. El comando **plot** admite que se le pase el título de la serie como tercer argumento, no obstante como vamos a editar manualmente esos datos optaremos por no emplear esta propiedad.

## Configuración del gráfico

### Showing grid and legend

### Mostrar la malla y la legenda

Cambie al [módulo de graficado](/Plot_Workbench "Plot Workbench") mediante el menú Ver/Escenario. Cuando haya cargado el módulo podrá emplear la herramienta de mostrado/ocultado de la malla para mostrar la malla.

![](/images/Plot_Grid.svg)

![Icono de la herramienta para mostrar/ocultar la malla](/images/Plot_Grid.png)

Icono de la herramienta para mostrar/ocultar la malla

Icono de la herramienta para mostrar/ocultar la malla.

Volviendo a presionar sobre el botón se vuelve a ocultar la malla. De la misma forma usted puede mostrar la legenda mediante la herramienta correspondiente.

![](/images/Plot_Legend.svg)

![Icono de la herramienta para mostrar/ocultar la legenda](/images/Plot_Legend.png)

Icono de la herramienta para mostrar/ocultar la legenda

Icono de la herramienta para mostrar/ocultar la legenda.

Como observará la legenda está vacía debido a que las series no tienen asignado un título todavía. En el [módulo de graficado](/Plot_Workbench "Plot Workbench") las series sin título asignado no son consideradas por la legenda, permitiendo crear líneas auxiliares dentro del gráfico.

### Setting series label

### Establecer los títulos de las series

Con la herrameitna de edición de series usted puede editar algunos parámetros de las curvas trazadas.

![](/images/Plot_Series.svg)

![Icono de la herramienta de edición de series](/images/Plot_Series.png)

Icono de la herramienta de edición de series

Icono de la herramienta de edición de series.

Comenzaremos seleccionando la primera serie, para la cuál desmarcaremos la casilla **No label**, lo que hará que aparezca la serie en la legenda, y nos permitirá establecer el siguiente título:

```
$y = \sin \left( 2 \pi t \right)$

```

Al estar [LaTeX](http://www.latex-project.org) soportado por [matplotlib](http://matplotlib.org) usted siempre podrá establecer los titulos y etiqutas haciendo uso de él. Establezca el siguiente título para la función coseno:

```
$y = \cos \left( 2 \pi t \right)$

```

### Setting series style

### Configurar la apariencia de las series

Usted puede, con la misma herramienta, cambiar algunas propiedades del aspecto visual de sus curvas. Intente configurarlas como las de la imagen de ejemplo cambiando el color y el estilo de la línea.

### Setting axes labels

### Configurar los títulos de los ejes

Con la herramienta de configuración de títulos usted puede establecer las etiquetas asociadas con cada set de ejes.

![](/images/Plot_Labels.svg)

![Icono de la herramienta de configuración de títulos](/images/Plot_Labels.png)

Icono de la herramienta de configuración de títulos

Icono de la herramienta de configuración de títulos.

Establezca los siguientes títulos:

* Title = Trigonometric functions example
* X Label = $t$
* Y Label = $y = \mathrm{f} \left( t \right)$

Cambie también sus tamaños a 20.

## Saving plot

## Guardando la imagen

Con la herramienta de salvado usted podrá guardar su trabajo en diferentes formatos.

![](/images/Plot_Save.svg)

![Icono de la herramienta de guardado](/images/Plot_Save.png)

Icono de la herramienta de guardado

Icono de la herramienta de guardado.

Lo primero de todo seleccione el archivo donde desea guardar la imagen. Puede usted ayudarse del selector de archivo que se despliega cuando se presiona el botón a la derecha del editor de ruta.

También puede seleccionar el tamaño de la imagen de salida en pulgadas, por ejemplo puede elegir 11.7x8.3 correspondiente a un **DIN A4**. El parámetro DPI (puntos por pulgada) permite controlar la resolución de la imagen, por ejemplo 100 dpi creará una imagen de 1170x830 pixels.

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Basic_tutorial/es&oldid=1251512>"