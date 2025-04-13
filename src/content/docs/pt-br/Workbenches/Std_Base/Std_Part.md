---
title: Std Part (Parte - Padrão)
---
|  |
| --- |
| Std Part |
| Menu location |
| Nenhum |
| Workbenches |
| Todas |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [Grupo Std](/Std_Group/pt-br "Std Group/pt-br"), [Corpo PartDesign](/PartDesign_Body/pt-br "PartDesign Body/pt-br") |
|  |

## Descrição

![](/images/Std_Part.svg) Parte Std (também chamada internamente de [Parte App](/index.php?title=App_Part/pt-br&action=edit&redlink=1 "App Part/pt-br (page does not exist)")) é um contêiner usado para organizar e agrupar objetos. Ele permite que esses objetos sejam movimentados juntos como uma única unidade na [vista 3D](/3D_view/pt-br "3D view/pt-br").

O elemento \*\*Parte Std\*\* foi desenvolvido como um bloco básico para criar [montagens](/Assembly/pt-br "Assembly/pt-br") mecânicas. Ele é especialmente útil para organizar objetos que possuem uma [Forma Topológica (TopoShape) de Parte](/Part_TopoShape/pt-br "Part TopoShape/pt-br"), como [Primitivas de Parte](/Part_Primitives/pt-br "Part Primitives/pt-br"), [Corpos PartDesign](/PartDesign_Body/pt-br "PartDesign Body/pt-br") e outras [Funcionalidades de Parte](/Part_Feature/pt-br "Part Feature/pt-br").

A \*\*Parte Std\*\* inclui um [Objeto de Origem](#Origin/pt-br) com eixos locais X, Y e Z, além de planos padrão, que podem ser usados como referência para posicionar os objetos contidos. Além disso, é possível aninhar \*\*Partes Std\*\* dentro de outras \*\*Partes Std\*\*, permitindo criar uma montagem maior a partir de submontagens menores.

Embora seja principalmente destinado a corpos sólidos, a \*\*Parte Std\*\* pode ser usada para gerenciar qualquer objeto que possua a propriedade de [Posicionamento](/index.php?title=Placement/pt-br&action=edit&redlink=1 "Placement/pt-br (page does not exist)"). Isso significa que ela também pode conter [Elementos de Malha](/index.php?title=Mesh_Feature/pt-br&action=edit&redlink=1 "Mesh Feature/pt-br (page does not exist)"), [Esboços](/Sketch/pt-br "Sketch/pt-br") e outros objetos derivados da classe [App GeoFeature](/App_GeoFeature/pt-br "App GeoFeature/pt-br").

Não confunda o ![](/images/PartDesign_Body.svg) [Corpo PartDesign](/PartDesign_Body/pt-br "PartDesign Body/pt-br") com o ![](/images/Std_Part.svg) Parte Std.

O primeiro é um objeto específico usado na ![](/images/Workbench_PartDesign.svg) [Bancada PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"), destinado a modelar um [sólido único e contínuo](/PartDesign_Body#Single_contiguous_solid/pt-br "PartDesign Body") por meio de [Recursos PartDesign](/index.php?title=PartDesign_Feature/pt-br&action=edit&redlink=1 "PartDesign Feature/pt-br (page does not exist)"). Por outro lado, a \*\*Parte Std\*\* não é utilizada para modelagem, mas sim para organizar diferentes objetos no espaço, com o objetivo de criar [montagens](/Assembly/pt-br "Assembly/pt-br").

A ferramenta ![](/images/Std_Part.svg) Parte Std não é definida por uma bancada específica, mas sim pelo sistema base, portanto, ela está disponível na **barra de ferramentas de estrutura**, que pode ser encontrada em todas as [bancadas de trabalho](/Workbenches/pt-br "Workbenches/pt-br").

Para agrupar objetos de forma arbitrária, sem considerar sua posição, use ![](/images/Std_Group.svg) [Grupo Std](/Std_Group/pt-br "Std Group/pt-br"); este objeto não afeta o posicionamento dos elementos que contém, sendo essencialmente apenas uma pasta usada para manter a [Vista em Árvore](/Tree_view/pt-br "Tree view/pt-br") organizada.

![](/images/Std_Part-tree.png)![](/images/Std_Part_example.png)

Esquerda: elementos dentro de uma Parte Std na [Vista em Árvore](/Tree_view/pt-br "Tree view/pt-br"). Direita: objetos posicionados no espaço, referenciados à Origem da Parte Std.

## Usage

1. Press the ![](/images/Std_Part.svg) [Create part](/Std_Part "Std Part") button.
2. An empty Part is created and automatically becomes *[active](/Std_Part#Active_status "Std Part")*.
3. To add objects to the Part, select them in [Tree view](/Tree_view "Tree view"), and drag and drop them onto the Part.
4. To remove objects from the Part, drag them out of the Part, and onto the document label at the top of the [Tree view](/Tree_view "Tree view").
5. Objects can also be added and removed by editing the Dados**Group** property of the Part.

## Notes

* An object can only belong to a single Part.
* 3D operations like [Part Boolean](/Part_Boolean "Part Boolean") cannot be applied to Parts. For example, you cannot select two Parts, and perform a [Part Fuse](/Part_Fuse "Part Fuse") or [Part Cut](/Part_Cut "Part Cut").

## Properties

The [Std Part](/Std_Part "Std Part"), internally called [App Part](/App_Part "App Part") (`App::Part` class), is derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably properties that help it manage information in the context of an assembly, for example, Dados**Type**, Dados**Id**, Dados**License**, Dados**LicenseURL** and Dados**Group**.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Dados**Type** (`String`): a description for this object. By default, it is an empty string `""`.
* Dados**Material** (`Link`): the material for this object.
* Dados (Hidden)**Meta** (`Map`): map with additional meta information. By default, it is empty `{}`.
* Dados**Id** (`String`): an identification or part number for this object. By default, it is an empty string `""`.
* Dados (Hidden)**Uid** (`UUID`): the [universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) (UUID) (128-bit number) of the object. This is assigned at creation time.
* Dados**License** (`String`): a field to specify the license for this object. By default, it is an empty string `""`.
* Dados**LicenseURL** (`String`): a field to specify the web address to the license or contract for this object. By default, it is an empty string `""`.
* Dados**Color** (`Color`): a tuple of four floating point RGBA values `(r,g,b,a)` to define the color of the object; by default it is `(1.0, 1.0, 1.0, 1.0)`, which is displayed as `[255,255,255]` on base 255, white color.
* Dados**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  + Dados**Angle**: the angle of rotation around the Dados**Axis**. By default, it is `0°` (zero degrees).
  + Dados**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  + Dados**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
* Dados**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
* Dados (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
* Dados (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
* Dados (Hidden)**Visibility** (`Bool`): whether to display the object or not.
* Dados (Hidden)**Origin** (`Link`): the [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object that is the positional reference for all elements listed in Dados**Group**.
* Dados**Group** (`LinkList`): a list of referenced objects. By default, it is empty `[]`.
* Dados (Hidden)**\_ Group Touched** (`Bool`): whether the group is touched or not.

### View

Display Options

* Vista**Display Mode** (`Enumeration`): `Group`.
* Vista**Show In Tree** (`Bool`): if it is `true`, the object appears in the [Tree view](/Tree_view "Tree view"). Otherwise, it is set as invisible.
* Vista**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar in the keyboard.

Selection

* Vista**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
* Vista**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. If the option is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` only the bounding box will be highlighted.

## Detailed explanation

### Active status

An open document can contain multiple Parts. But only one Part can be active. The active Part is displayed in the [tree view](/Tree_view "Tree view") with the background color specified by the **Active container** value in the [preferences editor](/Preferences_Editor#Colors "Preferences Editor") (by default, light blue). It will also be shown with bold text.

To activate or de-activate a Part:

* Double click on it on the [Tree view](/Tree_view "Tree view"), or
* Open the context menu (right click) and select **Active object**.

![](/images/Std_Part_active.png)

Document with two Std Parts, of which the second one is active.

### Origin

The Origin consists of the three standard axes (X, Y, Z) and three standard planes (XY, XZ and YZ). [Sketches](/Sketch "Sketch") and other objects can be attached to these elements when creating them.

![](/images/Part_Origin_tree.png) ![](/images/Part_Origin_view.png)

Left: Part Origin in the [Tree view](/Tree_view "Tree view"). Right: representation of the Origin elements in the [3D view](/3D_view "3D view").

*Note:* the Origin is an [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object (`App::Origin` class), while the axes and planes are objects of type `App::Line` and `App::Plane` respectively. Each of these elements can be hidden and unhidden individually with the Space bar; this is useful to choose the correct reference when creating other objects.

*Note 2:* all elements inside the Part are referenced to the Part's Origin which means that the Part can be moved and rotated in reference to the global coordinate system without affecting the placement of the elements inside.

### Visibility Management

The Part's visibility supersedes the visibility of any object it contains. If the Part is hidden, the objects it contains will be hidden as well, even if their individual Vista**Visibility** property is set to `true`. If the Part is visible, then each object's Vista**Visibility** determines whether the object is shown or not.

![](/images/Part_Visibility_off.png) ![](/images/Part_Visibility_on.png)

The visibility of the Std Part determines whether the objects grouped under it are shown in the [3D view](/3D_view "3D view") or not. Left: the Part is hidden, so none of the objects will be shown in the [3D view](/3D_view "3D view"). Right: the Part is visible, so each object controls its own visibility.

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Std Part ([App Part](/App_Part "App Part")) is created with the `addObject()` method of the document. Once a Part exists, other objects can be added to it with the `addObject()` or `addObjects()` methods.

```
import FreeCAD as App

doc = App.newDocument()
part = App.ActiveDocument.addObject("App::Part", "Part")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

part.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

You cannot create a scripted `App::Part`. However, you can add `App::Part` behavior to a scripted `Part::FeaturePython` object by using the following code:

```
class MyGroup(object):
    def __init__(self, obj=None):
        self.Object = obj
        if obj:
            self.attach(obj)

    def dumps(self):
        return

    def loads(self, _state):
        return

    def attach(self, obj):
        obj.addExtension("App::OriginGroupExtensionPython")
        obj.Origin = FreeCAD.ActiveDocument.addObject("App::Origin", "Origin")

    def onDocumentRestored(self, obj):
        self.Object = obj

class ViewProviderMyGroup(object):
    def __init__(self, vobj=None):
        if vobj:
            vobj.Proxy = self
            self.attach(vobj)
        else:
            self.ViewObject = None

    def attach(self, vobj):
        vobj.addExtension("Gui::ViewProviderOriginGroupExtensionPython")
        self.ViewObject = vobj

    def dumps(self):
        return None

    def loads(self, _state):
        return None

App.ActiveDocument.addObject("Part::FeaturePython",
                             "Group",
                             MyGroup(),
                             ViewProviderMyGroup(),
                             True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/pt-br&oldid=1560683>"