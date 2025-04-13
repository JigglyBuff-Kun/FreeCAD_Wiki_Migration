---
title: DiseñoPiezas AsistenteEje
---
|  |
| --- |
| DiseñoPiezas AsistenteEje |
| Ubicación en el Menú |
| *Ninguno* |
| Entornos de trabajo |
| [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

Esta herramienta permite crear un árbol a partir de una tabla de valores y analizar las fuerzas y los momentos. Puede iniciar el asistente desde el menú Diseño de la pieza **DiseñoPieza → ![](/images/PartDesign_WizardShaft.svg) Asistente Diseño Ejes...**.

## Usage

You can start the wizard from the Part Design menu **Part Design → ![](/images/PartDesign_WizardShaft.svg) Shaft design wizard...**.

El asistente se iniciará y mostrará una tabla por defecto, la parte eje correspondiente y los gráficos de fuerza/momento.

![](/images/WizardShaft_Part.jpg)

La parte superior de la ventana está ocupada por la tabloa. Está organizada en en columnas numeradas que se corresponden a segmentos del eje. Un segmento del eje se caracteriza por tener una longitud y diámetro determinados. La ventana principal muestra dos pestañas. Una es la ventana del archivo de pieza del eje (una operación de revolución), mostrada en la imagen superior. La segunda pestaña muestra un gráfico de las fuerzas de corte y los momentos creados por las cargas definidas en la tabla.

![](/images/Shaftwizard1.jpg)

## Prerequisites

## Prerrequisitos

El asistente diseño ejes depende de la biblioteca [matplotlib](http://matplotlib.org/) para crear y mostrar los gráficos de fuerza cortante y momento flector. En los sistemas basados en Debian/Ubuntu, está disponible a través del paquete python-matplotlib.

## Parameters

## Parámetros

Para cada segmento de eje, se pueden definir los siguientes parámetros

* Longitud del segmento
* Diámetro del segmento
* Tipo de carga. Observa que tienes que designar sobre la entrada deseada en el menú después de acceder a él, en otro caso no se seleccionará!
  + Ninguna: Sin cargas
  + Fija: El extremo del eje está fijo (por ejemplo soldado a otra pieza). Este tipo de carga sólo puede definirse para el primer o el último segmento.
  + Estática: Una carga estática en este segmento del eje
* Carga en el segmento del eje
* Ubicación en la que se aplica la carga al segmento. La ubicación se cuenta desde la arista izquierda del segmento

(Existen otras filas y tipos de cargas pero aún no se ha implantado dicha funcionalidad)

## Menus

## Menús

Para añadir un nuevo segmento de eje, pulsa con el botón derecho en un espacio en blanco a la derecha de la tabla, y selecciona "Añadir columna".

## Limitations

## Limitaciones

* No es posible tener segmentos adyacentes del eje con el mismo diámetro.

## Planned functionality

## Funcionalidad planeada

* Chaflanes y redondeos conducidos por la tabla sobre las aristas del eje
* Reconocer un asistente de eje creado previamente e iniciar los valores de la tabla a partir de él
* Cálculo de tensiones del eje
* Visualización de cargas sobre el eje (puede utilizar la misma funcionalidad que en el módulo de CAE)
* Definición de cargas como un Objeto de Documento (puede utilizar la misma funcionalidad que en el módulo de CAE)
* Base de datos de materiales
* Permitir cargas en la dirección Z así como en la dirección Y (requiere la definición de cargas como Objeto de Documento, en otro caso la tabla sería demasiado larga)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_WizardShaft/es&oldid=1273474>"