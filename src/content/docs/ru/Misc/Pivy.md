---
title: Pivy
---
## Введение

Pivy - это библиотека привязок [Python](/Python/ru "Python/ru") для [Coin3D](https://github.com/coin3d), библиотеки 3D-рендеринга, используемой в FreeCAD для отображения вещей в [трёхмерный вид](/3D_view/ru "3D view/ru"). При импорте в работающий интерпретатор Python Pivy позволяет напрямую взаимодействовать с любым работающим [графом сцен](/Scenegraph/ru "Scenegraph/ru") Coin, таким, как [трёхмерный вид](/3D_view/ru "3D view/ru") FreeCAD, или даже создавать новые. Pivy не требуется для компиляции FreeCAD, но требуется во время выполнения при запуске основанных на Python верстаков, которые создают фигуры на экране, такие как [Draft](/Draft_Workbench/ru "Draft Workbench/ru") и [Arch](/Arch_Workbench/ru "Arch Workbench/ru"). Из-за этого Pivy обычно устанавливается при установке дистрибутива FreeCAD.

When imported in a running Python interpreter, Pivy allows us to communicate directly with any running Coin [scenegraph](/Scenegraph "Scenegraph"), such as the [3D view](/3D_view "3D view"), or even to create new ones. Pivy is not required to compile FreeCAD, but it is required at runtime when running Python-based workbenches that create shapes on screen, like [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench"). Because of this, Pivy is normally installed when installing a distribution of FreeCAD.

Библиотека Coin разделена на несколько частей, собственно Coin, для управления графами сцен и привязки к различным GUI системам, таким как Windows или Qt. Если эти модули присутствуют в системе, они также доступны для Pivy. Модуль Coin всегда присутствует, и это то что мы будем использовать в любом случае, поэтому мы не должны заботится о привязках нашего трёхмерного отображения к различным интерфейсам, что уже сделано в FreeCAD. Все что вам нужно, так это сделать это:

```
from pivy import coin

```

## Древо сцены

Мы видели на странице [Scenegraph](/Scenegraph/ru "Scenegraph/ru"), как организована типичная сцена Coin. Все что появляется в [трехмерный вид](/3D_view "3D view") - это граф сцен Coin, организованный так же. У нас есть один корневой узел, и все объекты на экране его потомки.

FreeCAD обладает простым способом получит доступ к корневому узлу(вершине) древа сцена 3D вида:

```
sg = FreeCADGui.ActiveDocument.ActiveView.getSceneGraph()
print(sg)

```

Это вернет корневой узел:

```
<pivy.coin.SoSelection; proxy of <Swig Object of type 'SoSelection *' at 0x360cb60> >

```

Мы сразу же можем просмотреть потомков, нашей сцены:

```
for node in sg.getChildren():
    print(node)

```

Некоторые из этих узлов, такие как ноды `SoSeparator` или `SoGroup`, также могут обладать потомками. Полный список доступных объектов Сoin можно найти в официальной документации Сoin.

Давайте, сейчас, попробуем добавить что-нибудь в наше древо сцены. Мы добавим милейший красный куб:

```
col = coin.SoBaseColor()
col.rgb = (1, 0, 0)
cub = coin.SoCube()
myCustomNode = coin.SoSeparator()
myCustomNode.addChild(col)
myCustomNode.addChild(cub)
sg.addChild(myCustomNode)

```

Теперь попробуем следующее:

```
col.rgb = (1, 1, 0)

```

Как видите, все по прежнему доступно и изменяемо на лету. Не нужно что-нибудь пересчитывать или перересовывать, Coin позаботится обо всем. Вы можете что-то в ваше древо сцен, изменить свойства, скрыть этот объект, показать временный объект, что угодно. Конечно это касается только отображения трехмерного вида. Это отображение получается при считывании FreeCAD-ом файла при открытии, и когда объект нужно перечитать. Так что, если вы изменили какой-нибудь аспект в существующем FreeCAD объекте,эти изменения будут потеряны, если объект перечитают, или же повторно откроют.

Как уже упоминалось, в графе сцен openInventor важен порядок. Каждый узел влияет на то, что будет дальше. Например, если мы хотим иметь возможность переместить наш куб, нам нужно добавить узел `SoTranslation` *перед* кубом:

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

Чтобы переместить наш куб, мы можем теперь сделать:

```
trans.translation.setValue([2, 0, 0])

```

Наконец удалим что-нибудь, введя:

```
sg.removeChild(myCustomNode)

```

[наверх](#top)

## Обратные вызовы

[Функция обратного вызова](http://ru.wikipedia.org/wiki/Callback_(программирование)) это система, позволяет библиотекам вроде нашей библиотеки Coin , возвращать вызов, то есть возможность вызова определенных функций с вашего запущенного объекта Python. Таким образом Coin может сообщить вам, что на сцене произошло конкретное событие. Coin может наблюдать за множеством различных вещей, таких как положение курсора, нажатия клавиши мыши, нажатые клавиши клавиатуры, и многое другое.

FreeCAD способен легко использовать такие функции обратного вызова:

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

Функция обратного вызова, должна быть инициализирована объектом, потому что объект должен по прежнему работать, когда случатся обратные вызовы. Смотри также [полный список](/Code_snippets#Observing_mouse_events_in_the_3D_viewer_via_Python "Code snippets") возможных событий и их параметров, или официальную документацию Coin.

[наверх](#top)

## Документация

К сожалению, Pivy не обладает собственной документацией. Однако, так как это оболочка библиотекиCoin, вы можете читать справку по C++. В этом случает Вам нужно лишь переводить стиль наименования классов C++ в стиль Python.

В C++:

```
SoFile::getClassTypeId()

```

В Pivy:

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

[наверх](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Pivy/ru&oldid=1457005>"