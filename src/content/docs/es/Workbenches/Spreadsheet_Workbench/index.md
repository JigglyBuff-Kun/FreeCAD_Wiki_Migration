---
title: Entorno de trabajo Hoja de cálculo
---

![](/images/Workbench_Spreadsheet.svg)

El icono del Entorno de trabajo Hoja de cálculo

## Introducción

El ![](/images/Workbench_Spreadsheet.svg) Entorno de trabajo de hojas de cálculo permite crear y editar hojas de cálculo, utilizar datos de la hoja de cálculo como parámetros en un modelo, rellenar la hoja de cálculo con datos recuperados de un modelo, realizar cálculos y exportar los datos a otras aplicaciones de hojas de cálculo como LibreOffice o Microsoft Excel.

![](/images/Spreadsheet_screenshot.jpg)

Una hoja de cálculo con determinadas celdas rellenas de texto y cantidades

## Herramientas

- ![](/images/Spreadsheet_CreateSheet.svg) [Crear hoja](/Spreadsheet_CreateSheet/es "Spreadsheet CreateSheet/es"): crea una nueva hoja de cálculo.

- ![](/images/Spreadsheet_Import.svg) [Importar](/Spreadsheet_Import/es "Spreadsheet Import/es"): importa un archivo CSV a una hoja de cálculo.

- ![](/images/Spreadsheet_Export.svg) [Exportar](/Spreadsheet_Export/es "Spreadsheet Export/es"): exporta un archivo CSV desde una hoja de cálculo.

- ![](/images/Spreadsheet_MergeCells.svg) [Unir celdas](/Spreadsheet_MergeCells/es "Spreadsheet MergeCells/es"): une las celdas seleccionadas.

- ![](/images/Spreadsheet_SplitCell.svg) [Dividir celda](/Spreadsheet_SplitCell/es "Spreadsheet SplitCell/es"): divide celdas previamente unidas.

- ![](/images/Spreadsheet_AlignLeft.svg) [Alinear a la izquierda](/Spreadsheet_AlignLeft/es "Spreadsheet AlignLeft/es"): alinea el contenido de las celdas seleccionadas a la izquierda.

- ![](/images/Spreadsheet_AlignCenter.svg) [Alinear al centro](/Spreadsheet_AlignCenter/es "Spreadsheet AlignCenter/es"): alinea el contenido de las celdas seleccionadas al centro horizontalmente.

- ![](/images/Spreadsheet_AlignRight.svg) [Alinear a la derecha](/Spreadsheet_AlignRight/es "Spreadsheet AlignRight/es"): alinea el contenido de las celdas seleccionadas a la derecha.

- ![](/images/Spreadsheet_AlignTop.svg) [Alinear arriba](/Spreadsheet_AlignTop/es "Spreadsheet AlignTop/es"): alinea el contenido de las celdas seleccionadas hacia arriba.

- ![](/images/Spreadsheet_AlignVCenter.svg) [Centrar verticalmente](/Spreadsheet_AlignVCenter/es "Spreadsheet AlignVCenter/es"): alinea el contenido de las celdas seleccionadas al centro vertical.

- ![](/images/Spreadsheet_AlignBottom.svg) [Alinear abajo](/Spreadsheet_AlignBottom/es "Spreadsheet AlignBottom/es"): alinea el contenido de las celdas seleccionadas hacia abajo.

- ![](/images/Spreadsheet_StyleBold.svg) [Estilo negrita](/Spreadsheet_StyleBold/es "Spreadsheet StyleBold/es"): establece el contenido de las celdas seleccionadas a negrita.

- ![](/images/Spreadsheet_StyleItalic.svg) [Estilo cursiva](/Spreadsheet_StyleItalic/es "Spreadsheet StyleItalic/es"): establece el contenido de las celdas seleccionadas a cursiva.

- ![](/images/Spreadsheet_StyleUnderline.svg) [Estilo subrayado](/Spreadsheet_StyleUnderline/es "Spreadsheet StyleUnderline/es"): establece el contenido de las celdas seleccionadas a subrayar.

- ![](/images/Spreadsheet_SetAlias.svg) [Establecer alias](/Spreadsheet_SetAlias/es "Spreadsheet SetAlias/es"): establece el alias para una celda seleccionada.

* Negro y Blanco establecen los colores de primer plano y de fondo de las celdas seleccionadas.

## Preferencias

- ![](/images/Preferences-spreadsheet.svg) [Preferencias](/Spreadsheet_Preferences "Spreadsheet Preferences"): las preferencias para el entorno de trabajo Spreadsheet. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Eliminar celdas puede ser peligroso

Note que eliminar celdas con datos puede romper la hoja de cálculo y tu modelo si este se basa en la hoja de cálculo. No será advertido previamente si esto sucede.

## Inserte elimine filas y columnas

Filas y columnas pueden ser insertadas o eliminadas haciendo clic derecho en un encabezado de fila o columna y seleccionando la opción apropiada en el menú contextual. Es posible seleccionar primero varias filas o columnas. Ya sea manteniendo presionado la tecla Ctrl al seleccionar los encabezados, o manteniendo presionado el botón del mouse izquierdo y arrastrando.

## Editar celdas

El contenido de una celda se puede editar seleccionando la celda e ingresando un valor en el cuadro de entrada **Content** en la parte superior de la ventana. Para editar una celda en el lugar, selecciónela y presione F2, o haga doble clic en ella.

## Eliminar celdas

Para eliminar una o más celdas selecciónelas y presione Supr. Esto eliminará sus contenidos, sus propiedades y sus alias. Para eliminar solo el contenido de una celda, se debe editar.

## Cortar y copiar-pegar celdas

Las operaciones de cortar y copiar-pegar se pueden usar en las celdas de hojas de cálculo. Puede usar los atajos normales para estas operaciones: Ctrl X, Ctrl C y Ctrl V respectivamente. Para seleccionar múltiples celdas, mantenga presionada la tecla Ctrl mientras selecciona, o mantenga presionado el botón del mouse izquierdo y arrastre para seleccionar un rango de celda rectangular.

Las operaciones de cortar y copiar almacenan contenidos, propiedades y alias de las celdas en el portapapeles. La operación de pegar escribe los datos de tal manera que el contenido de la celda superior izquierda de los datos almacenados aparezcan en la celda activa. Otro contenido almacenado se coloca en relación con esa celda. Las fórmulas se actualizan en consecuencia. Los alias se pegan únicamente si son únicos.

## Propiedades de la celda

Las propiedades de una celda de la hoja de cálculo pueden ser editadas haciendo clic derecho en la celda y seleccionando **Propiedades...** del menú contextual. El siguiente cuadro de diálogo aparece:

![](/images/SpreadsheetCellPropDialog.png)

Como se indica en las pestañas, se pueden modificar las siguientes propiedades:

- Color: Color del texto y del fondo
- Alineación: Alineación horizontal y vertical del texto
- Estilo: Estilo del texto: negrita, cursiva, subrayado
- Unidades: Muestra las unidades para esta celda. Por favor, lea la sección [Unidades](#Unidades) más abajo.
- Alias: Define un [alias](/Spreadsheet_SetAlias/es "Spreadsheet SetAlias/es") para esta celda. Este alias se puede utilizar en las fórmulas de las celdas y también en las [expresiones](/Expressions/es "Expressions/es") generales; consulte la sección [Datos de la hoja de cálculo en las expresiones](#Datos_de_hoja_en_expresiónes) para obtener más información.

## Expresiones de la celda

Una celda de la hoja de cálculo puede contener un número, un texto o una expresión. Las expresiones deben comenzar con un signo igual '='.

Las expresiones de celdas pueden contener números, funciones, referencias a otras celdas y referencias a propiedades del modelo (Pero vea [Limitaciones actuales](#Limitaciones_actuales) más abajo). Una celda puede ser referenciada por su dirección (columna con letra MAYÚSCULA + número de fila, ejemplo: B4) o por su [alias](/Spreadsheet_SetAlias/es "Spreadsheet SetAlias/es").

**Nota:** Las expresiones de celda son tratadas por FreeCAD como código de programación. Por lo tanto, cuando editas una celda el contenido podría ver que no sigue su configuración de visualización:

- El separador decimal es siempre un punto. Pero comas pueden ser usadas al ingresar valores.
- El número de decimales mostrados puede diferir de tu configuración de [ajustes de preferencias](/Preferences_Editor/es#Unidades "Preferences Editor/es").

Las referencias a objetos en el modelo se explican en [Referencias a datos CAD](#Referencias_a_datos_CAD) más abajo. El uso de los valores de las celdas de la hoja de cálculo para definir las propiedades del modelo se explica en [Datos de la hoja de cálculo en las expresiones](#Hoja_de_datos_en_expresiones) más adelante. Para más información sobre las expresiones y las funciones disponibles, véase [Expresiones](/Expressions/es "Expressions/es").

## Interacción entre las hojas de cálculo y el modelo CAD

Los datos en las celdas de una hoja de cálculo pueden usarse en expresiones de parámetros del modelo CAD. Por lo tanto, una hoja de cálculo puede usarse como fuente de valores de parámetros utilizados en todo un modelo, recolectando efectivamente los valores en un solo lugar. Cuando los valores se cambian en la hoja de cálculo, se propagan por todo el modelo.

De manera similar, las propiedades de los objetos del modelo CAD pueden usarse en expresiones en celdas de hoja de cálculo. Esto permite el uso de propiedades de objetos como volumen o área en la hoja de cálculo. Si se cambia el nombre de un objeto en el modelo CAD, el cambio se propagará automáticamente a cualquier referencia en expresiones de hoja de cálculo utilizando el nombre al que se cambió.

Se puede usar más de una hoja de cálculo en un documento. Una hoja de cálculo puede ser identificada usando su nombre o su etiqueta.

FreeCAD asignará automáticamente un nombre único a una hoja de cálculo cuando se cree. Estos nombres siguen el patrón `Spreadsheet`, `Spreadsheet001`, `Spreadsheet002` y así sucesivamente. El nombre no se puede cambiar y no es visible en las propiedades de la hoja de cálculo. Se puede utilizar para hacer referencia a la hoja de cálculo en una [Expresión](/Expressions/es "Expressions/es") (consulte [Datos de la hoja de cálculo en expresiones](#Spreadsheet_data_in_expressions) a continuación).

La etiqueta de una hoja de cálculo se establece automáticamente con el nombre de la hoja de cálculo al momento de su creación. A diferencia del nombre, la etiqueta se puede cambiar, por ejemplo en el panel de propiedades o usando la acción Cambiar nombre del menú contextual. Por defecto, FreeCAD no acepta etiquetas duplicadas, pero existe una [preferencia](/Preferences_Editor#Document "Preferences Editor") para anular esto. No se puede hacer referencia a las hojas de cálculo con etiquetas duplicadas en el mismo documento por su etiqueta.

FreeCAD comprueba si hay dependencias cíclicas. Consulte [Limitaciones actuales](/Spreadsheet_Workbench#Current_limitations "Spreadsheet Workbench").

### Referencias a los datos CAD

Como se indicó anteriormente, se pueden hacer referencia a datos del modelo CAD en expresiones de hoja de cálculo.

La siguiente tabla muestra algunos ejemplos suponiendo que el modelo tiene una característica denominada "MyCube":

| Datos CAD                                                   | Celda en la hoja de cálculo    | Resultado                     |
| ----------------------------------------------------------- | ------------------------------ | ----------------------------- |
| Longitud paramétrica de un cubo del entorno de trabajo Part | `=MyCube.Length`               | Longitud con unidades mm      |
| Volumen del cubo                                            | `=MyCube.Shape.Volume`         | Volumen en mm³ sin unidades   |
| Tipo de forma de cubo                                       | `=MyCube.Shape.ShapeType`      | Cadena de texto: Solid        |
| Etiqueta del cubo                                           | `=MyCube.Label`                | Cadena: MyCube                |
| Coordenada X del centro de masa del cubo                    | `=MyCube.Shape.CenterOfMass.x` | Coordenada en mm sin unidades |

### Datos de la hoja de cálculo en expresiones

Para utilizar datos de hojas de cálculo en otras partes de FreeCAD, normalmente creará una [Expresión](/Expressions/es "Expressions/es") que haga referencia a la hoja de cálculo y a la celda que contiene los datos que desea utilizar. Puede identificar hojas de cálculo por nombre o por etiqueta, y puede identificar las celdas por dirección o alias. El autocompletado está disponible para todas las formas de referencias.

|                     | Hoja de cálculo por nombre | Hoja de cálculo por etiqueta |
| ------------------- | -------------------------- | ---------------------------- |
| Celda por dirección | `=Spreadsheet042.B5`       | `=<<MySpreadsheet>>.B5`      |
| Celda por alias     | `=Spreadsheet042.MyAlias`  | `=<<MySpreadsheet>>.MyAlias` |

La forma recomendada de hacer referencia a los datos de una hoja de cálculo es utilizar la etiqueta de la hoja de cálculo y el nombre del alias de la celda. Para obtener una explicación más detallada de los pros y los contras de los modos de referencia, consulte la sección ampliada a continuación.

El uso de la etiqueta de la hoja de cálculo tiene la ventaja de que se puede cambiar libremente para describir el contenido de la hoja de cálculo. También es más fácil identificar la hoja de cálculo que se está utilizando ya que el texto de la expresión coincide con la etiqueta que se muestra en las vistas de modelo y propiedades. Si decide cambiar la etiqueta de una hoja de cálculo, se actualizarán las referencias existentes al contenido de la hoja de cálculo, por lo que no romperá sus expresiones al cambiar el nombre de la hoja de cálculo. El nombre interno de la hoja de cálculo no está disponible en ningún lugar excepto en el editor de expresiones, por lo que si usa el nombre interno y luego decide cambiar el nombre de las hojas de cálculo, es posible que le resulte difícil rastrear los datos de la expresión hasta su origen.

Tenga en cuenta que cuando crea una nueva hoja de cálculo, el nombre y la etiqueta son los mismos, por lo que es fácil utilizar accidentalmente el nombre de la hoja de cálculo en lugar de la etiqueta. Una forma sencilla de evitar esto es darle a la hoja de cálculo un nombre significativo antes de comenzar a usarla en expresiones.

Si bien puede usar el número de fila y columna en una expresión para hacer referencia a una celda, la mejor práctica es darle a la celda un nombre de alias y usarlo. Consulta [Propiedades de celda](#Cell_properties) sobre cómo configurar el alias. Por ejemplo, si los datos de la celda B1 contenían el parámetro de longitud de un objeto, un nombre de alias de `MyObject_Length` permitiría hacer referencia al valor como `<<MyParams>>.MyObject_Length` en lugar de `Hoja de cálculo.B1`. Además de ser mucho más fáciles de leer y comprender, los nombres de alias también son mucho más fáciles de cambiar si decides ajustar la estructura de tu hoja de cálculo. Usar un alias también tiene la ventaja de que es más fácil ver qué celdas se usan para controlar otras partes del documento. Tenga en cuenta que FreeCAD ajustará automáticamente las referencias posicionales en las expresiones si inserta o elimina filas y columnas en la hoja de cálculo, por lo que incluso si usa números de filas y columnas en una expresión, puede insertar filas y columnas sin romper las referencias a las celdas circundantes. .

### Modelos complejos y recálculos

La edición de una hoja de cálculo activará un nuevo cálculo del modelo 3D, incluso si los cambios no afectan el modelo. Para un modelo complejo, un nuevo cálculo puede llevar mucho tiempo y, por supuesto, tener que esperar después de cada edición es bastante molesto.

Hay tres soluciones para hacer frente a esto:

1. Omitir temporalmente los recálculos:
   - En la [Vista de árbol](/Tree_view/es "Tree view/es"), haga clic derecho en el documento ![](/images/Document.svg) que contiene la hoja de cálculo.
   - Seleccione la opción **Omitir recálculos** en el menú contextual.
   - Esta solución tiene una gran desventaja. Los nuevos valores ingresados ​​en la hoja de cálculo no se mostrarán hasta que se vuelva a calcular el documento. En su lugar se muestra `#PENDING`.
   - Puede volver a calcular manualmente, usando el comando [Std Refresh](/index.php?title=Std_Refresh/es&action=edit&redlink=1 "Std Refresh/es (page does not exist)"), o desactivar **Omitir recálculos** cuando haya terminado de editar.
2. Use una macro para omitir automáticamente los recálculos mientras edita una hoja de cálculo:
   - Descargue y ejecute [skipSheet.FCMacro](https://forum.freecadweb.org/viewtopic.php?f=8&t=48600#p419301).
   - Esta solución ahorra algunos pasos en comparación con la primera solución, pero también tiene la desventaja mencionada.
3. Coloque la hoja de cálculo en un [archivo de FreeCAD](/File_Format_FCStd/es "File Format FCStd/es") separado:
   - Puede hacer referencia a datos de hoja de cálculo desde un archivo externo .FCStd con esta sintaxis: `=NameOfFile#<<MySpreadsheet>>.MyAlias`.
   - La ventaja de tener la hoja de cálculo en otro archivo en lugar de desactivar los recálculos es que la hoja de cálculo en sí se vuelve a calcular.
   - La desventaja es que el modelo no volverá a calcular automáticamente después de realizar cambios en la hoja de cálculo.
   - En el escenario en el que abre por primera vez el archivo de la 'hoja de cálculo', cambia uno o más valores y luego abre el archivo del 'modelo', no habrá ninguna indicación de que sea necesario volver a calcular el modelo. Pero si ambos archivos están abiertos, el icono [Std Refresh](/index.php?title=Std_Refresh/es&action=edit&redlink=1 "Std Refresh/es (page does not exist)") se actualizará correctamente para el archivo del 'modelo' después de los cambios en el archivo de la 'hoja de cálculo'.

## Unidades

La hoja de cálculo tiene una noción de dimensión (unidades) asociada con los valores de las celdas. Un número ingresado sin una unidad asociada no tiene dimensión. La unidad debe ingresarse inmediatamente después del valor numérico, sin espacios intermedios. Si un número tiene una unidad asociada, esa unidad se utilizará en todos los cálculos. Por ejemplo, la multiplicación de dos longitudes con la unidad mm da un área con la unidad mm².

Si una celda contiene un valor que representa una dimensión, se debe ingresar con su unidad asociada. Si bien en muchos casos simples uno puede arreglárselas con un valor adimensional, no es prudente no ingresar la unidad. Si se ingresa un valor que representa una dimensión sin su unidad asociada, hay algunas secuencias de operaciones que hacen que FreeCAD se queje de unidades incompatibles en una expresión cuando parece que la expresión debería ser válida. (Esto se puede entender mejor consultando [este hilo](https://forum.freecadweb.org/viewtopic.php?f=3&t=34713&p=292455#p292438) en los foros de FreeCAD).

Puede cambiar las unidades mostradas para un valor de celda usando el [diálogo de propiedades de celda](#Cell_properties). Esto no cambia el valor contenido en la celda; solo convierte el valor existente para su visualización. El valor utilizado para los cálculos no cambia y los resultados de las fórmulas que utilizan el valor no cambian. Por ejemplo, una celda que contiene el valor "5,08 cm" se puede mostrar como "2 pulgadas" cambiando el valor de la pestaña de unidades a "pulgadas".

Un número adimensional no se puede cambiar a un número con una unidad mediante el cuadro de diálogo de propiedades de la celda. Se puede introducir una cadena de unidad y esa cadena se mostrará; pero la celda todavía contiene un número adimensional. Para cambiar un valor sin dimensiones a un valor con una dimensión, se debe volver a ingresar el valor en sí con su unidad asociada.

En ocasiones puede resultar conveniente eliminar una dimensión de una expresión. Esto se puede hacer multiplicando por 1 con una unidad recíproca.

## Importación y exportación

### Formato CSV

Las hojas de cálculo de FreeCAD se pueden importar y exportar al formato [​​CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas), que también puede leerse y escribirse en la mayoría de las otras aplicaciones de hojas de cálculo, como Microsoft Excel o LibreOffice Calc. Consulte [Importar hoja de cálculo](/Spreadsheet_Import/es "Spreadsheet Import/es") y [Exportar hoja de cálculo](/Spreadsheet_Export/es "Spreadsheet Export/es") para obtener más información.

### Formato XLSX

Las hojas de cálculo en formato XLSX de Excel se pueden importar con el comando [Std Import](/Std_Import/es "Std Import/es") o el comando [Std Open](/Std_Open/es "Std Open/es"). Se admiten las siguientes funciones:

- Todas las funciones que también están disponibles en la hoja de cálculo de FreeCAD. Otras funciones dan un error en la celda correspondiente después de la importación.
- Alias ​​de nombres para celdas.
- Más de una hoja en la hoja de cálculo de Excel. En este caso se crea una hoja de cálculo de FreeCAD para cada hoja de Excel.

Otras funciones no se importan a la hoja de cálculo de FreeCAD.

## Impresión

Para manejar la configuración de página necesaria para la impresión, las hojas de cálculo de FreeCAD se imprimen insertándolas en una [TechDraw Spreadsheet View](/index.php?title=TechDraw_SpreadsheetView/es&action=edit&redlink=1 "TechDraw SpreadsheetView/es (page does not exist)").

## Limitaciones actuales

FreeCAD comprueba si hay dependencias cíclicas cuando vuelve a calcular. Por diseño, esa verificación se detiene en el nivel del objeto de la hoja de cálculo. Como consecuencia, no debería tener una hoja de cálculo que contenga celdas cuyos valores se utilicen para especificar parámetros del modelo y celdas cuyos valores utilicen resultados del modelo. Por ejemplo, no puede tener celdas que especifiquen el largo, ancho y alto de un objeto, y otra celda que haga referencia al volumen total de la forma resultante. Esta restricción se puede superar teniendo dos hojas de cálculo: una utilizada como fuente de datos para los parámetros de entrada del modelo y la otra para cálculos basados ​​en los datos geométricos resultantes.

## Enlazamiento de celdas

[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Es posible enlazar el contenido de unas celdas a otras celdas en la hoja de cálculo. Esto puede ser útil cuando se trata de tablas grandes o para obtener contenido de celda de otra hoja de cálculo.

### Crear enlaces

Para enlazar, por ejemplo, el rango de celdas A3-C4 al rango de celdas B1-D2:

1. Seleccione el rango de celdas A3-C4.
2. Clic derecho y seleccione **Enlazar...** del menú contextual.
3. El diálogo **Enlazar celdas e hoja de cálculo** se abre.
4. Establezca el rango B1-D2 para **A las celdas**:
   ![](/images/Spreadsheet_binding-dialog.png)
5. Presione Aceptar.
6. Las celdas enlazadas tienen un borde azul para resaltar el enlace.
7. Si ahora ingresa algo en la celda C1, lo mismo aparecerá inmediatamente en la celda B3.

![](/images/Spreadsheet_binding-result.png)

La hoja de cálculo ahora puede verse así

### Cambiar enlaces

1. Haga clic derecho en una celda enlazada (no es necesario resaltar todo el rango enlazado) y seleccione **Enlazar...** en el menú contextual.
2. Se abre el cuadro de diálogo **Enlazar celdas de hoja de cálculo**.
3. Cambie una o más opciones. Tenga en cuenta que **celdas enlazadas**, el rango de celdas enlazadas, no se puede cambiar.
4. Presione Aceptar.

### Eliminar enlaces

1. Haga clic derecho en una celda enlazada (no es necesario resaltar todo el rango enlazado) y seleccione **Enlazar...** en el menú contextual.
2. Se abre el cuadro de diálogo **Enlazar celdas de hoja de cálculo**.
3. Presione Desenlazar.

## Notas

- La opción **Ocultar dependencia de enlace** se puede utilizar para evitar problemas con dependencias cíclicas entre hojas de cálculo. Seleccionarlo es necesario cuando, por ejemplo, las celdas de _Hoja de cálculo A_ están vinculadas a la _Hoja de cálculo B_, mientras que las celdas de la _Hoja de cálculo B_, a su vez, están vinculadas a otras celdas de la _Hoja de cálculo B_. A*. Esta opción debe usarse con precaución:*
  - Ocultar dependencias puede ser peligroso porque las dependencias rotas pueden dañar su archivo FreeCAD. Por ejemplo, cuando eliminas una hoja de cálculo no se te advertirá sobre dependencias ocultas.
  - Cuando abre un documento con una hoja de cálculo que contiene una dependencia oculta, la hoja de cálculo se marcará para volver a calcularse. Esto se debe a que una dependencia cíclica no se puede volver a calcular automáticamente. Para volver a calcular se debe utilizar la herramienta [Std Refresh](/Std_Refresh "Std Refresh").
- El enlace de celda tiene una verificación de rango y le advierte sobre rangos que no coinciden. Por ejemplo, unir 1x3 celdas a 3x2 celdas no puede funcionar porque se desconoce qué 3 celdas de las 6 celdas originales deben usarse.
- No puede cambiar el rango de celdas de un enlace existente. Primero debes desvincular las celdas y luego crear una nueva vinculación.
- El color del marco que indica el enlace aún no

se puede cambiar.

## Tablas de configuración

[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Puedes usar hojas de cálculo para crear tablas de configuración con conjuntos de parámetros predefinidos para tu modelo, y después cambiar dinamicamente que configuración usar. Vea [este post del foro](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183) si quiere saber más sobre el funcionamiento interno de esta característica.

## Scripting

```
import Spreadsheet
sheet = App.ActiveDocument.addObject("Spreadsheet::Sheet", "MySpreadsheet")
sheet.Label = "Dimensions"

sheet.set("A1", "10mm")
sheet.recompute()
sheet.get("A1")

sheet.setAlias("B1", "Diameter")
sheet.set("Diameter", "20mm")
sheet.recompute()
sheet.get("Diameter")

# sheet.get() results in an error if the cell is empty.
# sheet.getContents() can be used to check the cell first.
if sheet.getContents("C1"):
    print(sheet.get("C1"))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_Workbench/es&oldid=1506727>"
