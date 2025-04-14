---
title: Solid Sweep
---

|                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solid Sweep                                                                                                                                                                                                                                                                |
| Beschreibung                                                                                                                                                                                                                                                               |
| Erzeugt einen Körper, indem ein Profil von einer Flugbahn gefegt wird. Versionsmakro : 1.0 Datum der letzten Änderung : 2011-12-03 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png) Autor: Normandc |
| Autor                                                                                                                                                                                                                                                                      |
| [Normandc](/User:Normandc "User:Normandc")                                                                                                                                                                                                                                 |
| Herunterladen                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png)                                                                                                                                                                                          |
| Links                                                                                                                                                                                                                                                                      |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                               |
| Macro-Version                                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                                        |
| Datum der letzten Änderung                                                                                                                                                                                                                                                 |
| 2011-12-03                                                                                                                                                                                                                                                                 |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                        |
| Standardverknüpfung                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                     |
| Siehe auch                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                            |

## Beschreibung

Dieses Makro erstellt einen Körper, indem ein 2D-Profil entlang einer zuvor in der 3D-Ansicht ausgewählten Trajektorie gefegt wird. Die 2D-Elemente können mit den normalen Werkzeugen in FreeCADs GUI erstellt werden.

Mělo by být poznamenáno, že výsledná pevná látka nebude **parametrická**. Pokud se rozhodnete změnit profil nebo trajektorii, budete muset znovu spustit makro.

![Einige Beispiele für das Fegen mit dem gleichen länglichen Abschnitt und drei Arten von Flugbahnen.](/images/Solid_sweep.png)

## Anwendung

1. Zwei 2D-Elemente der weiter unten gelisteten Arten erstellen, eins für den Querschnitt und eins für die Verschiebekurve.
2. Dafür wird entweder in der [Baumansicht](/Tree_view/de "Tree view/de") oder in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt (**Die Reihenfolge ist wichtig!**):
   1. Die Verschiebekurve (Pfad)
   2. Dann das Profil (Querschnitt)
3. Den [Makro-Manager](/Macros/de "Macros/de") öffnen.
4. Das Makro **Solid Sweep** auswählen.
5. Ausführen anklicken.

**Ergebnis:** Ein **Sweep**-Objekt wird im Projektbaum erstellt.

## Unterstützte 2D-Elemente

- Leitungen

* ![](/images/Sketcher_NewSketch.svg) [Sketches](/Sketcher_Workbench/de "Sketcher Workbench/de")
* ![](/images/Draft_BSpline.svg) [Entwurf BSpline](/Draft_BSpline/de "Draft BSpline/de")

- 2D Grundelemente aus dem _Part → ![](/images/Part_Primitives.svg) [Create Primitives](/Part_Primitives/de "Part Primitives/de") ..._ menu (circle, helix)

## Tipps

- Der Abschnitt muss ein geschlossenes Profil sein, oder das Ergebnis ist nicht solide.
- Der Abschnitt muss nicht auf der Flugbahn liegen, es ist jedoch vorzuziehen, dass er normal (senkrecht) zur Flugbahn ist.
- Die Flugbahn kann entweder ein offenes oder ein geschlossenes Profil sein (Kreis-, Linien- und Bogensegmente), aber alle Elemente müssen tangential sein, da sonst die Form unerwartet ist. Beispielsweise erzeugt eine Flugbahn mit geraden Ecken wie ein Rechteck keinen Volumenkörper.
- Wenn der Volumenkörper verdreht wird, bearbeiten Sie das Makro, um den Wert _isFrenet_ in 0 (Null) zu ändern, und versuchen Sie es erneut.
- Wenn Sie die Variable _makeSolid_ im Makro auf 0 (Null) setzen, werden mehrere Flächen mit offenen Enden erzeugt.

## Skript

ToolBar Icon ![](/images/Macro_Solid_Sweep.png)

**Macro_Solid_Sweep.FCMacro**

```
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
s = FreeCADGui.Selection.getSelection()
try:
     shape1=s[0].Shape
     shape2=s[1].Shape
except:
     print "Wrong selection"

traj = Part.Wire([shape1])
section = Part.Wire([shape2])

# create Part objec in the current document
myObject=App.ActiveDocument.addObject("Part::Feature","Sweep")

# variable makeSolid = 1 to create solid, 0 to create surfaces
makeSolid = True #1
isFrenet = True #1

# create a 3D shape and assigh it to the current document
Sweep = Part.Wire(traj).makePipeShell([section],makeSolid,isFrenet)
myObject.Shape = Sweep
```

## Credits

Vielen Dank an [Wmayer](/User:Wmayer "User:Wmayer") für seine Hilfe beim Schreiben dieses Skripts.

Zwei Anwendungsbeispiele finden Sie in [this forum topic](http://forum.freecadweb.org/viewtopic.php?f=8&t=1222&start=50#p11120), zusammen mit Download-Links zu den FCStd-Dateien. Bei Verwendung einer Helix als Flugbahn kann ein fester Durchlauf zum Erstellen eines Schraubengewindes verwendet werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Solid_Sweep/de&oldid=1274188>"
