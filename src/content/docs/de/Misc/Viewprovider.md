---
title: Viewprovider
---
## Einleitung

Viewprovider sind Klassen, die festlegen, wie Objekte in der [Baumansicht](/Tree_view/de "Tree view/de") und der [3D-Ansicht](/3D_view/de "3D view/de") aussehen und wie sie mit bestimmten grafischen Aktionen, wie z.B [Auswahl](/Selection_methods/de "Selection methods/de") zusammenarbeiten.

Sie ergänzen die [skriptgenerierten Objekte](/Scripted_objects/de "Scripted objects/de"). Während die Basis-Klasse des skriptgenerierten Objekts seine *Daten-* [Eigenschaften](/Property/de "Property/de") festlegt, definiert der Viewprovider seine *Ansichts-* [Eigenschaften](/Property/de "Property/de"). Diese Ansichts-Eigenschaften stellen keine wesentlichen Informationen des Objekts dar, da sie nur Informationen zur Darstellung enthalten, wie Linienbreite, Linienfarbe, Flächenfarbe usw. Für eine reine Terminal-Sitzung wird der Viewprovider nicht geladen, da keine Schnittstelle zum Bearbeiten dieser sichtbaren Eigenschaften vorhanden ist.

Wie auch Daten-Eigenschaften sind die Ansichts-Eigenschaften durch den [Eigenschafteneditor](/Property_editor/de "Property editor/de") erreichbar.

## Python-Viewprovider

Die Klassen der Viewprovider haben normalerweise `ViewProvider` im Namen. Sie sind dem Attribut `ViewObject` des Basisobjekts zugeordnet.

In diesem Beispiel werden zwei Eigenschaften für den Viewprovider festgelegt und ihnen Werte zugewiesen, wenn sie nicht schon existieren. Außerdem wird die Methode `onChanged` erstellt, die jedesmal abläuft, wenn sich eine Eigenschaft ändert. Der Name der Eigenschaft muss überprüft werden und danach werden ein oder zwei Methoden aufgerufen, die die eigentliche Arbeit verrichten, das Aktualisieren der Muster oder die Aktualisierung seiner Größe.

```
# views/view_custom.py
class ViewProviderCustom:
    """Viewprovider of the custom object."""

    def __init__(self, vobj):
        self.Object = vobj.Object

        self._set_properties(vobj)
        vobj.Proxy = self

    def _set_properties(self, vobj):
        if not hasattr(vobj, "Pattern"):
            vobj.addProperty("App::PropertyEnumeration",
                             "Pattern",
                             "Custom",
                             "Defines a hatch pattern for this object.")
            vobj.Pattern = ["None", "diagonals", "cross", "brick"]

        if not hasattr(vobj, "PatternSize"):
            vobj.addProperty("App::PropertyFloat",
                             "PatternSize",
                             "Custom",
                             "Defines the size of the hatch pattern.")
            vobj.PatternSize = 1

    def onChanged(self, vobj, prop):
        if prop in "Pattern":
            self._set_pattern(vobj.Pattern)
        if prop in "PatternSize":
            self._set_size(vobj.PatternSize)

    def _set_pattern(self, pattern):
        ...

    def _set_size(self, size):
        ...

```

Der übliche Arbeitsablauf ist, zuerst eine Proxy-Klasse wie z.B. `CustomObject` hinzuzufügen und danach den Viewprovider z.B. `ViewProviderCustom`. Der Viewprovider kann nur zugeordnet werden, wenn sichergestellt ist, dass die grafische Benutzerschnittstelle zur Verfügung steht, andernfalls wird es kein Attribut `ViewObject` geben und es wäre ein Fehler dieses Element als Eingabe für diese Klasse zu verwenden.

```
import FreeCAD as App
import objects.custom as custom
import views.view_custom as view_custom

doc = App.newDocument()
obj = doc.addObject("Part::FeaturePython", "Custom")

custom.CustomObject(obj)

if App.GuiUp:
    view_custom.ViewProviderCustom(obj.ViewObject)

```

## Eigene Symbole

Wird die Methode `getIcon` angelegt, kann damit das Symbol festgelegt werden, das in der [Baumansicht](/Tree_view/de "Tree view/de") im oberen Teil der [Combo-Ansicht](/Combo_view/de "Combo view/de") angezeigt wird.

Der Rückgabewert kann der komplette Pfad zu einem Symbol sein.

```
import os
some_path = "/home/user/.FreeCAD/custom_icons"

class ViewProviderCustom:
    ...

    def getIcon(self):
        return os.path.join(some_path, "my_icon.svg")

```

Der relative Pfad zu einem Symbol innerhalb einer kompilierten Quelldatei.

```
import MyModule_rc.py

class ViewProviderCustom:
    ...

    def getIcon(self):
        return ":/icons/my_icon.svg"

```

Ein [XPM-Symbol](https://de.wikipedia.org/wiki/X_PixMap), das im Grunde ASCII-Kunst ist.

```
import MyModule_rc.py

class ViewProviderCustom:
    ...

    def getIcon(self):
        return """
               /* XPM */
               static char *Some_icon_xpm[] = {
               /* columns rows colors chars-per-pixel */
               "16 16 3 1 ",
               "  c None",
               ". c #D71414",
               "+ c #AA1919",
               /* pixels */
               "                ",
               "  +          +  ",
               " +.+        +.+ ",
               "  +.+      +.+  ",
               "   +        +   ",
               "      ++++      ",
               "     +....+     ",
               "     +...++     ",
               "     +..+++     ",
               "     +.++.+     ",
               "      ++++      ",
               "   +        +   ",
               "  +.+      +.+  ",
               " +.+        +.+ ",
               "  +          +  ",
               "                "
               };
               """

```

Siehe verschiedene Beispiele unter [Individuelles Symbol in der Baumansicht](/Custom_icon_in_tree_view/de "Custom icon in tree view/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Viewprovider/de&oldid=1230758>"