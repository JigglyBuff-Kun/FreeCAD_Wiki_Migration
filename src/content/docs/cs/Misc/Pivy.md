---
title: Pivy
---
## Introduction

[Pivy](/Pivy "Pivy") is a [Python](/Python "Python") binding library for [Coin](https://github.com/coin3d), the 3D-rendering library used in FreeCAD to display things in a [3D view](/3D_view "3D view"). Coin is an open source implementation of the "Open Inventor" specification to handle graphics. Therefore, in FreeCAD, the terms "Pivy", "Coin" or "Open Inventor" refer to the same thing essentially.

When imported in a running Python interpreter, Pivy allows us to communicate directly with any running Coin [scenegraph](/Scenegraph "Scenegraph"), such as the [3D view](/3D_view "3D view"), or even to create new ones. Pivy is not required to compile FreeCAD, but it is required at runtime when running Python-based workbenches that create shapes on screen, like [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench"). Because of this, Pivy is normally installed when installing a distribution of FreeCAD.

The Coin library is divided into several pieces, Coin itself for manipulating scenegraphs, and bindings for several GUI systems, such as Windows and Qt. If present on the system, those modules are available to Pivy as well. The Coin module is always present, and it is what we will use anyway, since we won't need to care about anchoring our 3D display in any interface, that is already done by FreeCAD. All we need to do is this:

```
from pivy import coin

```

## Scenegraph

We saw on the [Scenegraph](/Scenegraph "Scenegraph") page how a typical Coin scene is organized. Everything that appears in a [3D view](/3D_view "3D view") is a Coin scenegraph, organized in the same way. We have one root node, and all objects on the screen are its children.

FreeCAD has an easy way to access the root node of a 3D view scenegraph:

```
sg = FreeCADGui.ActiveDocument.ActiveView.getSceneGraph()
print(sg)

```

This will return the root node:

```
<pivy.coin.SoSelection; proxy of <Swig Object of type 'SoSelection *' at 0x360cb60> >

```

We can inspect the immediate children of our scene:

```
for node in sg.getChildren():
    print(node)

```

Some of those nodes, such as `SoSeparator` or `SoGroup` nodes, can have children themselves. The complete list of the available Coin objects can be found in the official Coin documentation.

Let's try to add something to our scenegraph now. We'll add a nice red cube:

```
col = coin.SoBaseColor()
col.rgb = (1, 0, 0)
cub = coin.SoCube()
myCustomNode = coin.SoSeparator()
myCustomNode.addChild(col)
myCustomNode.addChild(cub)
sg.addChild(myCustomNode)

```

Now, let's try this:

```
col.rgb = (1, 1, 0)

```

As you can see everything is still accessible and modifiable on-the-fly. No need to recompute or redraw anything, Coin takes care of everything. You can add stuff to your scenegraph, change properties, hide stuff, show temporary objects, anything. Of course, this only concerns the display in the 3D view. That display gets recomputed by FreeCAD on file open, and when an object needs recomputing. So, if you change the aspect of an existing FreeCAD object, those changes will be lost if the object gets recomputed or when you reopen the file.

As already mentioned, in an openInventor scenegraph the order is important. A node affects what comes next. For example, if we want to have the ability to move our cube we will need to add a `SoTranslation` node *before* the cube:

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

To move our cube we can now do:

```
trans.translation.setValue([2, 0, 0])

```

Finally, removing something is done with:

```
sg.removeChild(myCustomNode)

```

[Top](#top)

## Callbacks

A [callback mechanism](http://en.wikipedia.org/wiki/Callback_%28computer_science%29) is a system that permits a library, such as our Coin library, to call you back, that is, to call a certain function from your currently running Python object. That way Coin can notify you that some specific event occurred in the scene. Coin can watch very different things, such as mouse position, mouse button clicks, keyboard keys being pressed, and many more.

FreeCAD features an easy way to use such callbacks:

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

The callback has to be initiated from an object, because that object must still be running when the callback occurs.
See also a [complete list](/Code_snippets#Observe_mouse_events_in_the_3D_viewer_via_Python "Code snippets") of possible events and their parameters, or the official Coin documentation.

[Top](#top)

## Documentation

Unfortunately, Pivy doesn't have its own documentation. However, since it is an accurate wrapper of the Coin library, you can read the C++ reference for information. In this case, you need to translate the C++ class naming style to Python style.

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

[Top](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Pivy/cs&oldid=1457023>"