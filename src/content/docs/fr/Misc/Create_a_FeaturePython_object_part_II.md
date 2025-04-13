---
title: Créer un objet FeaturePython partie II
---
## Introduction

Sur la page [Créer un objet FeaturePython partie I](/Create_a_FeaturePython_object_part_I/fr "Create a FeaturePython object part I/fr"), nous nous sommes concentrés sur les aspects internes d'une classe Python construite autour d'un objet FeaturePython, en particulier un objet `App::FeaturePython`. Nous avons créé l'objet, défini certaines propriétés et ajouté un rappel d'événement au niveau du document qui permet à notre objet de répondre à un recalcul de document avec la méthode `execute()`. Mais notre objet n'a toujours pas de présence dans la [Vue 3D](/3D_view/fr "3D view/fr"). Remédions à cela en ajoutant une boîte.

## Ajout d'une boîte

Tout d'abord, en haut du fichier box.py, sous l'importation existante, ajoutez:

```
import Part

```

Puis dans `execute()` supprimez l'instruction `print()` et ajoutez la ligne suivante à sa place:

```
Part.show(Part.makeBox(obj.Length, obj.Width, obj.Height))

```

![](/images/App_featurepython_box.png)

Ces commandes exécutent des méthodes Python fournies avec FreeCAD par défaut.

* La méthode `Part.makeBox()` génère une nouvelle forme de boîte.
* L'appel englobant à `Part.show()` ajoute la forme à l'arborescence du document et la rend visible.

Supprimez tous les objets existants, rechargez le module boîte et créez un nouvel objet boîte en utilisant `box.create()`. Remarquez comment une boîte apparaît immédiatement à l'écran. C'est parce que nous forçons le document à recalculer à la fin de `box.create()` qui à son tour déclenche la méthode `execute()` de notre classe `box`.

À première vue, le résultat peut sembler correct mais il y a quelques problèmes. Le plus évident est que la boîte est représentée par un objet entièrement différent de notre objet FeaturePython. `Part.show()` crée simplement un objet boîte séparé et l'ajoute au document. Pire encore, si vous modifiez les dimensions de l'objet FeaturePython, une autre forme de boîte est créée et l'ancienne est laissée en place. Et si vous avez ouvert la [Vue rapport](/Report_view/fr "Report view/fr"), vous avez peut-être remarqué une erreur indiquant "Appel récursif de recalcul pour le document Sans nom". Cela a à voir avec l'utilisation de la méthode `Part.show()` dans un objet FeaturePython.

[En haut](#top)

## Correction du code

Pour résoudre ces problèmes, nous devons apporter un certain nombre de changements. Jusqu'à présent, nous avons utilisé un objet `App::FeaturePython` qui n'est en fait pas destiné à avoir une représentation visuelle dans la vue 3D. Nous devons utiliser un objet `Part::FeaturePython` à la place. Dans `create()` modifiez la ligne suivante:

```
obj = App.ActiveDocument.addObject('App::FeaturePython', obj_name)

```

par:

```
obj = App.ActiveDocument.addObject('Part::FeaturePython', obj_name)

```

Pour se débarrasser de l'objet box séparé, nous devons affecter le résultat de la méthode `makeBox()` à la propriété `Shape` de notre objet `Part::FeaturePython`. Modifiez cette ligne dans `execute()`:

```
Part.show(Part.makeBox(obj.Length, obj.Width, obj.Height))

```

en:

```
obj.Shape = Part.makeBox(obj.Length, obj.Width, obj.Height)

```

![](/images/Part_featurepython_no_vp.png)

Enregistrez vos modifications, revenez à FreeCAD, supprimez tous les objets existants, rechargez le module de boîte et créez un nouvel objet boîte. Le nouveau résultat est quelque peu décevant. Il n'y a plus d'objet supplémentaire dans l'arborescence, et l'icône dans l'arborescence a changé, mais notre boîte dans la vue 3D a également disparu (c'est pourquoi l'icône est grise). Qu'est ce qui c'est passé? Bien que nous ayons correctement créé notre forme de boîte et l'avons assignée à un objet `Part::FeaturePython`, pour le faire apparaître réellement dans la vue 3D, nous devons attribuer un [ViewProvider](/Viewprovider/fr "Viewprovider/fr").

[En haut](#top)

## Écrire un ViewProvider

Un fournisseur de vue (View Provider) est le composant d'un objet qui lui permet d'avoir une représentation visuelle dans la vue 3D. FreeCAD utilise une structure d'application conçue pour séparer les données (le "modèle") de sa représentation visuelle (la "vue"). Si vous avez passé du temps à travailler avec FreeCAD en Python, vous en êtes probablement déjà conscient grâce à l'utilisation des deux modules Python de base: `FreeCAD` et `FreeCADGui` (souvent sous les alias { {incode|App}} et `Gui` respectivement).

Notre objet FeaturePython nécessite également ces éléments. Jusqu'à présent, nous nous sommes concentrés uniquement sur la partie "modèle" du code, il est maintenant temps d'écrire la partie "vue". Heureusement, la plupart des ViewProviders sont simples et nécessitent peu d'efforts pour écrire, du moins pour commencer. Voici un exemple de ViewProvider emprunté et légèrement modifié à [[1]](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/TemplatePyMod/FeaturePython.py):

```
class ViewProviderBox:

    def __init__(self, obj):
        """
        Set this object to the proxy object of the actual view provider
        """

        obj.Proxy = self

    def attach(self, obj):
        """
        Setup the scene sub-graph of the view provider, this method is mandatory
        """
        return

    def updateData(self, fp, prop):
        """
        If a property of the handled feature has changed we have the chance to handle this here
        """
        return

    def getDisplayModes(self,obj):
        """
        Return a list of display modes.
        """
        return []

    def getDefaultDisplayMode(self):
        """
        Return the name of the default display mode. It must be defined in getDisplayModes.
        """
        return "Shaded"

    def setDisplayMode(self,mode):
        """
        Map the display mode defined in attach with those defined in getDisplayModes.
        Since they have the same names nothing needs to be done.
        This method is optional.
        """
        return mode

    def onChanged(self, vp, prop):
        """
        Print the name of the property that has changed
        """

        App.Console.PrintMessage("Change property: " + str(prop) + "\n")

    def getIcon(self):
        """
        Return the icon in XMP format which will appear in the tree view. This method is optional and if not defined a default icon is shown.
        """

        return """
            /* XPM */
            static const char * ViewProviderBox_xpm[] = {
            "16 16 6 1",
            "    c None",
            ".   c #141010",
            "+   c #615BD2",
            "@   c #C39D55",
            "#   c #000000",
            "$   c #57C355",
            "        ........",
            "   ......++..+..",
            "   .@@@@.++..++.",
            "   .@@@@.++..++.",
            "   .@@  .++++++.",
            "  ..@@  .++..++.",
            "###@@@@ .++..++.",
            "##$.@@$#.++++++.",
            "#$#$.$$$........",
            "#$$#######      ",
            "#$$#$$$$$#      ",
            "#$$#$$$$$#      ",
            "#$$#$$$$$#      ",
            " #$#$$$$$#      ",
            "  ##$$$$$#      ",
            "   #######      "};
            """

    def dumps(self):
        """
        Called during document saving.
        """
        return None

    def loads(self,state):
        """
        Called during document restore.
        """
        return None

```

Dans le code ci-dessus, nous définissons une icône XMP pour cet objet. La conception des icônes dépasse le cadre de ce tutoriel mais la conception de base peut être gérée à l'aide d'outils open source tels que [GIMP](https://www.gimp.org), [Krita](https://krita.org/en/) et [ <https://inkscape.org/> Inkscape]. La méthode `getIcon()` est facultative, FreeCAD utilisera une icône par défaut si cette méthode n'est pas fournie.

Ajoutez le code ViewProvider à la fin de box.py et dans la méthode `create()` insérez la ligne suivante au-dessus de l'instruction `recompute()`:

```
ViewProviderBox(obj.ViewObject)

```

Cela instancie la classe ViewProvider personnalisée et lui transmet le ViewObject intégré de FeaturePython. Lorsque la classe ViewProvider s'initialise, elle enregistre une référence à elle-même dans l'attribut `ViewObject.Proxy` de FeaturePython. De cette façon, lorsque FreeCAD a besoin de rendre notre boîte visuellement, il peut trouver la classe ViewProvider pour le faire.

Maintenant, enregistrez les modifications et revenez à FreeCAD. Importez ou rechargez le module box et appelez `box.create()`. Vous devriez maintenant voir deux choses:

* L'icône de l'objet boîte a changé.
* Et, plus important encore, il y a une boîte dans la vue 3D. Si vous ne le voyez pas, appuyez sur le bouton ![](/images/Std_ViewFitAll.svg) [Std Tout afficher](/Std_ViewFitAll/fr "Std ViewFitAll/fr"). Vous pouvez même modifier les dimensions de la boîte en modifiant les valeurs dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Essayez!

[En haut](#top)

## Piégeage d'événements

Nous avons déjà discuté du piégeage d'événements. Presque toutes les méthodes d'une classe FeaturePython servent de rappel accessible à l'objet FeaturePython (qui obtient l'accès à notre instance de classe via l'attribut `Proxy`, si vous vous en souvenez).

Voici une liste des rappels pouvant être implémentés dans l'objet FeaturePython de base:

FeaturePython basic callbacks

|  |  |  |
| --- | --- | --- |
| `execute(self, obj)` | Appelé pendant le recalcul du document | N'appelez pas `recompute()` depuis cette méthode (ou toute méthode appelée depuis `execute()`) car cela provoque un recalcul imbriqué. |
| `onBeforeChange(self, obj, prop)` | Appelé avant la modification d'une valeur de propriété | `prop` est le nom de la propriété à modifier, pas l'objet de propriété lui-même. Les modifications de propriété ne peuvent pas être annulées. Les valeurs de propriétés précédentes/suivantes ne sont pas disponibles simultanément pour la comparaison. |
| `onChanged(self, obj, prop)` | Appelé après la modification d'une propriété | `prop` est le nom de la propriété à modifier, pas l'objet de propriété lui-même. |
| `onDocumentRestored(self, obj)` | Appelé après la restauration d'un document ou la copie d'un objet FeaturePython. | Parfois, les références à l'objet FeaturePython de la classe ou à la classe de l'objet FeaturePython peuvent être interrompues, car la méthode class `__init __()` n'est pas appelée lors de la reconstruction de l'objet. L'ajout de `self.Object = obj` ou `obj.Proxy = self` résout souvent ces problèmes. |

Pour une référence complète des méthodes FeaturePython disponibles, voir [Méthodes FeaturePython](/FeaturePython_methods/fr "FeaturePython methods/fr").

En outre, il existe deux rappels dans la classe ViewProvider qui peuvent parfois s'avérer utiles:

ViewProvider basic callbacks

|  |  |  |
| --- | --- | --- |
| `updateData(self, obj, prop)` | Appelé après la modification d'une propriété de données (modèle) | `obj` est une référence à l'instance de classe FeaturePython et non à l'instance ViewProvider. `prop` est le nom de la propriété à modifier, pas l'objet de propriété lui-même. |
| `onChanged(self, vobj, prop)` | Appelé après la modification d'une propriété de vue | `vobj` est une référence à l'instance ViewProvider. `prop` est le nom de la propriété de vue qui a été modifiée. |

Il n'est pas rare de rencontrer une situation où les rappels Python ne sont pas déclenchés comme ils le devraient. Les débutants dans ce domaine peuvent être assurés que le système de rappel FeaturePython n'est pas fragile ou cassé. Invariablement, lorsque les rappels ne s'exécutent pas, c'est parce qu'une référence est perdue ou indéfinie dans le code sous-jacent. Si, cependant, les rappels semblent interrompre sans explication, fournir des références d'objet/proxy dans le rappel `onDocumentRestored()` (comme indiqué dans le premier tableau ci-dessus) peut atténuer ces problèmes. Tant que vous n'êtes pas à l'aise avec le système de rappel, il peut être utile d'ajouter des instructions d'impression dans chaque rappel pour imprimer des messages sur la console pendant le développement.

[En haut](#top)

## Le code terminé

```
import FreeCAD as App
import Part

def create(obj_name):
    """
    Object creation method
    """

    obj = App.ActiveDocument.addObject('Part::FeaturePython', obj_name)

    box(obj)

    ViewProviderBox(obj.ViewObject)

    App.ActiveDocument.recompute()

    return obj

class box():

    def __init__(self, obj):
        """
        Default constructor
        """

        self.Type = 'box'

        obj.Proxy = self

        obj.addProperty('App::PropertyString', 'Description', 'Base', 'Box description').Description = ""
        obj.addProperty('App::PropertyLength', 'Length', 'Dimensions', 'Box length').Length = 10.0
        obj.addProperty('App::PropertyLength', 'Width', 'Dimensions', 'Box width').Width = '10 mm'
        obj.addProperty('App::PropertyLength', 'Height', 'Dimensions', 'Box height').Height = '1 cm'

    def execute(self, obj):
        """
        Called on document recompute
        """

        obj.Shape = Part.makeBox(obj.Length, obj.Width, obj.Height)

class ViewProviderBox:

    def __init__(self, obj):
        """
        Set this object to the proxy object of the actual view provider
        """

        obj.Proxy = self

    def attach(self, obj):
        """
        Setup the scene sub-graph of the view provider, this method is mandatory
        """
        return

    def updateData(self, fp, prop):
        """
        If a property of the handled feature has changed we have the chance to handle this here
        """
        return

    def getDisplayModes(self,obj):
        """
        Return a list of display modes.
        """
        return []

    def getDefaultDisplayMode(self):
        """
        Return the name of the default display mode. It must be defined in getDisplayModes.
        """
        return "Shaded"

    def setDisplayMode(self,mode):
        """
        Map the display mode defined in attach with those defined in getDisplayModes.
        Since they have the same names nothing needs to be done.
        This method is optional.
        """
        return mode

    def onChanged(self, vp, prop):
        """
        Print the name of the property that has changed
        """

        App.Console.PrintMessage("Change property: " + str(prop) + "\n")

    def getIcon(self):
        """
        Return the icon in XMP format which will appear in the tree view. This method is optional and if not defined a default icon is shown.
        """

        return """
            /* XPM */
            static const char * ViewProviderBox_xpm[] = {
            "16 16 6 1",
            "    c None",
            ".   c #141010",
            "+   c #615BD2",
            "@   c #C39D55",
            "#   c #000000",
            "$   c #57C355",
            "        ........",
            "   ......++..+..",
            "   .@@@@.++..++.",
            "   .@@@@.++..++.",
            "   .@@  .++++++.",
            "  ..@@  .++..++.",
            "###@@@@ .++..++.",
            "##$.@@$#.++++++.",
            "#$#$.$$$........",
            "#$$#######      ",
            "#$$#$$$$$#      ",
            "#$$#$$$$$#      ",
            "#$$#$$$$$#      ",
            " #$#$$$$$#      ",
            "  ##$$$$$#      ",
            "   #######      "};
            """

    def dumps(self):
        """
        Called during document saving.
        """
        return None

    def loads(self,state):
        """
        Called during document restore.
        """
        return None

```

[En haut](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Create_a_FeaturePython_object_part_II/fr&oldid=1359013>"