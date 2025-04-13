---
title: Pivy
---
## Introduction

[Pivy](http://pivy.coin3d.org/) es una biblioteca para enlazar Python con [Coin3d](http://www.coin3d.org), la biblioteca de renderizado-3D utilizada en FreeCAD. Cuando se importa en un intérprete de Python en ejecución, permite dialogar directamente con cualquier [escenas gráficas](/Scenegraph/es "Scenegraph/es") (scenegraphs) de Coin3d en ejecución, como las vistas 3D de FreeCAD, o incluso para crear otras nuevas. Pivy se incluye en la instalación estándar de FreeCAD.

When imported in a running Python interpreter, Pivy allows us to communicate directly with any running Coin [scenegraph](/Scenegraph "Scenegraph"), such as the [3D view](/3D_view "3D view"), or even to create new ones. Pivy is not required to compile FreeCAD, but it is required at runtime when running Python-based workbenches that create shapes on screen, like [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench"). Because of this, Pivy is normally installed when installing a distribution of FreeCAD.

La biblioteca de Coin se divide en varias partes, la propia Coin, para manipular escenas gráficas, y pasarelas a varios sistemas de interfaz gráfica de usuario (GUI), tales como Windows o, en nuestro caso, Qt. Esos módulos están también disponibles para Pivy, si están presentes en el sistema. El módulo Coin está siempre presente, y es lo que vamos a utilizar en todos los casos, y no tendrás que preocuparte de anclar nuestra pantalla 3D en ninguna interfaz, ya que FreeCAD ya lo ha hecho por si mismo. Todo lo que necesitamos hacer es esto:

```
from pivy import coin

```

## Acceso y modificación de la escena gráfica

Vimos en la Página de [escenas gráficas](/Scenegraph/es "Scenegraph/es") cómo se organiza una típica escena de Coin. Todo lo que aparece en una vista 3D de FreeCAD es una escena gráfica de Coin, organizada de la misma manera. Tenemos un nodo raíz, y todos los objetos en la pantalla son sus hijos.

FreeCAD tiene una sencilla forma de acceder al nodo raíz de una escenas gráficas en vista 3D:

```
sg = FreeCADGui.ActiveDocument.ActiveView.getSceneGraph()
print(sg)

```

Esto devolverá el nodo raíz:

```
<pivy.coin.SoSelection; proxy of <Swig Object of type 'SoSelection *' at 0x360cb60> >

```

Podemos inspeccionar los elementos secundarios inmediatos de nuestra escena:

```
for node in sg.getChildren():
    print(node)

```

Algunos de esos nodos, tales como SoSeparators o SoGroups, pueden tener sus propios hijos. La lista completa de los objetos de Coin disponibles se puede encontrar en la [documentación oficial de Coin](http://coin3d.bitbucket.org/Coin/classes.html).

Ahora vamos a tratar de añadir algo a nuestra escena gráfica. Vamos a añadir un bonito cubo rojo:

```
col = coin.SoBaseColor()
col.rgb = (1, 0, 0)
cub = coin.SoCube()
myCustomNode = coin.SoSeparator()
myCustomNode.addChild(col)
myCustomNode.addChild(cub)
sg.addChild(myCustomNode)

```

y aquí está nuestro (magnífico) cubo rojo. Ahora, vamos a probar esto:

```
col.rgb = (1, 1, 0)

```

¿Ves? todo se mantiene accesible y modificable sobre la marcha. No hay necesidad de volver a calcular o dibujar cualquier cosa, Coin se encarga de todo. Puedes agregar cosas a la escena gráfica, cambiar las propiedades, ocultar cosas, mostrar objetos temporales, cualquier cosa. Por supuesto, esto sólo afecta a la pantalla en la vista 3D. Esa pantalla se vuelve a calcular por FreeCAD al abrir el archivo, y cuando un objeto necesita recalcularse. Por lo tanto, si cambias el aspecto de un objeto FreeCAD existente, esos cambios se perderán si el objeto se vuelve a recalcular o cuando se vuelve a abrir el archivo.

Una de las claves para trabajar con escenas gráficas en los archivos de guión es poder tener acceso cuando sea necesario a ciertas propiedades de los nodos que has añadido. Por ejemplo, si quisieramos mover nuestro cubo, habríamos añadido un nodo SoTranslation a nuestro nodo de referencia, y se vería así:

```
col = coin.SoBaseColor()
col.rgb = (1, 0, 0)
trans = coin.SoTranslation()
trans.translation.setValue([0, 0, 0])
cub = coin.SoCube()
myCustomNode = coin.SoSeparator()
myCustomNode.addChild(col)
myCustomNode.addChild(trans)
myCustomNode.addChild(cub)
sg.addChild(myCustomNode)

```

Recuerda que en una escena gráfica de openInventor, el orden es importante. Un nodo afecta a lo que viene a continuación, por lo que puedes decir algo como: color rojo, cubo, color amarillo, esfera, y obtendrás un cubo rojo y una esfera amarilla. Si ahora añadimos la traslación a nuestro nodo de referencia existente, eso llegaría después del cubo, y no lo afectaría. Si lo hubieramos insertado cuando lo creamos, como aquí arriba, ahora podríamos hacer:

```
trans.translation.setValue([2, 0, 0])

```

Y nuestro cubo saltaría 2 unidades a la derecha.
Por último, para eliminar algo se hace con:

```
sg.removeChild(myCustomNode)

```

[Inicio](#top)

## La utilización de mecanismos de devolución de llamada

Un [callback mechanism](http://en.wikipedia.org/wiki/Callback_%28computer_science%29) (mecanismo de devolución de llamada) es un sistema que permite a una biblioteca que se está utilizando, como la biblioteca Coin, que le devuelva la llamada, es decir, que llame a una función específica de tu objeto de Python ejecutado actualmente. Esto es muy útil, porque de esa manera Coin puede avisarte si algún evento específico se produce en la escena. Coin pueden ver cosas muy diferentes, como la posición del ratón, clics en un botón del ratón, las teclas del teclado que son pulsadas y muchas otras cosas.

FreeCAD cuenta con una sencilla manera de utilizar devoluciones de llamada de este tipo:

```
from pivy import coin

class ButtonTest:
    def __init__(self):
        self.view = FreeCADGui.ActiveDocument.ActiveView
        self.callback = self.view.addEventCallbackPivy(coin.SoMouseButtonEvent.getClassTypeId(), self.getMouseClick) 

    def getMouseClick(self, event_cb):
        event = event_cb.getEvent()
        if event.getState() == coin.SoMouseButtonEvent.DOWN:
            print("Alert!!! A mouse button has been improperly clicked!!!")
            self.view.removeEventCallbackPivy(coin.SoMouseButtonEvent.getClassTypeId(), self.callback)

ButtonTest()

```

La devolución de llamada tiene que ser iniciada por un objeto, y ese objeto debe estar todavía en ejecución cuando la devolución de llamada se produzca.
Mira también una [lista completa](/Code_snippets/es#Observación_de_Eventos_del_ratón_en_el_visor_3D_a_través_de_Python "Code snippets/es") de los eventos posibles y sus parámetros, o la [documentación oficial de Coin](http://doc.coin3d.org/Coin/classes.html).

[Inicio](#top)

## Documentación

Lamentablemente Pivy aún no tiene una documentación formal, pero como es una traducción exacta de Coin, puedes utilizar con seguridad la documentación de Coin como referencia, y utilizar el estilo de Python en lugar del estilo de C++ (por ejemplo, SoFile::getClassTypeId() se escribiría en Pivy como: SoFile.getClassId() )

In C++:

```
SoFile::getClassTypeId()

```

In Pivy:

```
SoFile.getClassId()

```

* [Coin3D](https://github.com/coin3d) homepage.
* [Pivy](https://github.com/coin3d/pivy) homepage.
* [Coin3D wiki](https://github.com/coin3d/coin/wiki), at GitHub.
* [Coin3D wiki documentation](https://github.com/coin3d/coin/wiki/Documentation), at GitHub.
* [Coin3D Documentation](https://coin3d.github.io/Coin/html/), latest automatically generated Doxygen documentation.
* [(Open)Inventor Mentor](https://webdocs.cs.ualberta.ca/~graphics/books/mentor.pdf) - recommended.

### Older

These links provide reference documentation for Coin v3.x. The differences with v4.x are minimal, so they may still be useful.

* [Coin3D Documentation](https://coin3d.bitbucket.io/Coin/index.html), at BitBucket.
* [Coin3D Documentation](https://grey.colorado.edu/coin3d/index.html), at University of Colorado.
* [Open Inventor Reference Documentation](https://mevislabdownloads.mevis.de/docs/current/MeVis/ThirdParty/Documentation/Publish/OpenInventorReference/index.html), by MeVisLab.

[Inicio](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Pivy/es&oldid=1457033>"