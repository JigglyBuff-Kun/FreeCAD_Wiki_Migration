---
title: WorkFeatures
---

|                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro WorkFeatures                                                                                                                                                                                                                                                                                          |
| Beschreibung                                                                                                                                                                                                                                                                                                |
| Werkzeug Hilfsprogramm zum Erstellen von Punkten, Achsen, Ebenen...und andere nützliche Funktionen. Versionsmakro : 05/2019 Datum der letzten Änderung : 01.05.2019 FreeCAD version : Alle Herunterladen : [Werkzeugleistensymbol](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png) Autor: rentlau_64 |
| Autor                                                                                                                                                                                                                                                                                                       |
| [rentlau_64](/index.php?title=User:Rentlau_64&action=edit&redlink=1 "User:Rentlau 64 (page does not exist)")                                                                                                                                                                                                |
| Herunterladen                                                                                                                                                                                                                                                                                               |
| [Werkzeugleistensymbol](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png)                                                                                                                                                                                                                              |
| Links                                                                                                                                                                                                                                                                                                       |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                |
| Macro-Version                                                                                                                                                                                                                                                                                               |
| 05/2019                                                                                                                                                                                                                                                                                                     |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                  |
| 01.05.2019                                                                                                                                                                                                                                                                                                  |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                          |
| Alle                                                                                                                                                                                                                                                                                                        |
| Standardverknüpfung                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                      |
| Siehe auch                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                             |

## Beschreibung

Werkzeug-Hilfsprogramm zum Erstellen von:

- Punkten (Mittelpunkte, Kreismittelpunkte, Mittelpunkte von Objekten...),
- Achsen (aus 2 Punkten, Normalen von Ebenen...),
- Ebenen (aus 3 Punkten, aus einer Achse und einem Punkt...)
- Und viele andere nützliche Funktionen, die dir die Erstellung deines Projekts erleichtern. Dieses Hilfsprogramm befindet sich in der Combo-Ansicht mit der Bezeichnung _Work Features_ (Deutsch: _ArbeitsFunktionen_).

![](/src/assets/images/WF.png)

WorkFeatures

## Anwendungen

**ArbeitsFunktionen**

- ![Nach dem Aktivieren von Work Features bewegt sich das Werkzeug im Combo Ansichtsfensters nach links.](/src/assets/images/Macro_WorkFeatures_01.png)

  Nach dem Aktivieren von Work Features bewegt sich das Werkzeug im Combo Ansichtsfensters nach links.

- ![Jede Verwendung und jedes Tag, das einer Funktionsgruppe entspricht, ist eine Gruppe, die im Namen des verwendeten Kennzeichens erstellt wurde. Der Ursprung von Achse, Punkt und Ebene wird direkt auf ausgeblendet gesetzt.](/src/assets/images/Macro_WorkFeatures_07.png)

  Jede Verwendung und jedes Tag, das einer Funktionsgruppe entspricht, ist eine Gruppe, die im Namen des verwendeten Kennzeichens erstellt wurde. Der Ursprung von Achse, Punkt und Ebene wird direkt auf ausgeblendet gesetzt.

- [![Du kannst allgemeine Befehle EINGEBEN UND VERWENDEN, um die erstellte Funktion sichtbar zu machen. Beispieltaste Space oder wähle dein Objekt aus und rechtsklicke mit der Maus und klicke auf "Auswahl ausblenden" oder "Auswahl anzeigen" .](/src/assets/images/Macro_WorkFeatures_08.png)](/File:Macro_WorkFeatures_08.png 'Du kannst allgemeine Befehle EINGEBEN UND VERWENDEN, um die erstellte Funktion sichtbar zu machen. Beispieltaste Space oder wähle dein Objekt aus und rechtsklicke mit der Maus und klicke auf "Auswahl ausblenden" oder "Auswahl anzeigen " .')

  Du kannst allgemeine Befehle EINGEBEN UND VERWENDEN, um die erstellte Funktion sichtbar zu machen.  
  Beispieltaste **Space** oder wähle dein Objekt aus und rechtsklicke mit der Maus und klicke auf "**Auswahl ausblenden**" oder "**Auswahl anzeigen**" .

**Ursprung Reiter**

|     |                                                                                                                                                                                                          |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Ursprung Reiter** _ Ursprung : Erzeuge im Ursprung: einen Punkt und eine X, Y und Z Achse sowie XZ, XY und YZ Ebenen. Die Achsen-, Punkt- und Ebenen Ursprünge sind direkt auf ausgeblendet gesetzt. |

**Punkte Reiter**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Punkte Reiter** _ Objekt(e) Zentrum: Erzeugt einen Punkt an der Zentrumsposition aller ausgewählten Objekte. _ Linie(n) Zentrum : Erstelle einen Punkt an der Mittelpunktsposition jeder ausgewählten Linie(n). _ Line(s) Extrema : Erstelle Punkte am Start- und Endposition jeder ausgewählten Linie(n). _ Circle(s) Center : Create a Point at center location of each selected Circle(s) or Arc(s). _ Point along Line : Create a Point on a line at some distance of the extremity point selected. _ **SpinBox** : enter the displacement value _ Face(s) Center : Create a Point at center location of each selected Face(s). _ Point (Line,Face) : Create a point at the intersection of the Line and Plane selected. _ Point (Line,Point) : Create a projection Point of a Point onto a Line and symetric point. _ Point (Point,Face) : Create a projection Point of a Point onto a Face. _ Object(s) Base Point : Create Base Point of all selected Object(s). |

**Axis Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Axis Tab** _ Object(s) X, Y, Z Axes : Create 3 Axes at center location of all selected Object(s). _ Two Points Axis : Create an Axis crossing 2 Points. _ **SpinBox** : enter the displacement value _ Cylinder(s) Axis : Create the Axis of a Cylinder. _ Axis (Line,Line) : Create an Axis between 2 Axes. _ Plane(s) Axes : Create 2 Perpendicular Axes at center location of a Plane. _ Axis (Point,Axis) : Create an Axis parallel to an Axis and crossing a Point. _ Axis (Axis,Point) : Create an Axis perpendicular to an Axis and crossing a Point. _ **SpinBox** : enter the displacement value _ Axis (Plane,Axis) : Create an Axis on a Plane by projection from another Axis. _ Axis (Plane,Plane) : Create an Axis by intersect of 2 Planes. \* Object(s) Base Axis : Create 3 Axes at Base location of all selected Object(s). |

**Plane Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Plane Tab** _ Three Points Plane : Create a Plane crossing 3 Points. _ Plane (Point, Axis) : Create a plane crossing a Line and a Point. The point MUST not belongs to the Line ! _ Plane (Point, \_Axis) : Create a plane perpendicular to a Line and crossing a Point. _ Plane (Point, Plane) : Create a plane crossing a Point and parallel to a Plane. _ **SpinBox** : enter the displacement value _ Plane (Plane, Axis) : Create a Plane crossing a Line and perpendicular to a Plane. _ **SpinBox** : enter the displacement value \* Object(s) Center Planes : Create 3 Planes (XY, XZ and YZ) at center location of all selected Object(s). |

**Objects Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Objects Tab** _ Bounding Box(es) : Create bounding boxes around each of selected object(s). _ Bounding Box : Create one bounding box around all of selected object(s). _ Cylinder : First select an Axis and a Point. Define Diameter and Length if needed. Then Click the button... It will create a Cylinder aligned on the selected axis. with one of the extremities at point selected. \* Cube : First select an Axis and a Point. Define Dimensions if needed. Then Click the button... It will create a Cube aligned on the selected axis. with one of the extremities at point selected. |

**Views Tab**

|     |                                                                                                                                                                                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Views Tab** _ Align to ... : Set the current view perpendicular to the selected Face, or aligned to the selected Axis, or aligned on 2 Points. ReClick with same selection, will reverse the direction. |

**Modif. Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Modif. Cutting Tab** _ Select Object : After selected your object and, First, one Object to cut and click 'Select Object' button, + The name of the object selected are displayed _ Select Cut Line : Second, one cutting Line and click 'Select Cut Line' button, + The name of the line selected are displayed _ Select Ref. Plane : Last, a reference Plane and click 'Select Ref. Plane' button! + The name of the plane selected are displayed _ **Angle** : Angle for cut (Defaut : 0.0) _ **Thichness** : Thichness the cut (Defaut : 0.0) _ Reset : Reset the values _ Apply : Apply the values |

**Check. Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Check. Tab** _ are Parallel ? : Check if two faces or two Edges are Parallel: + Select the 2 faces/planes or 2 Edges/Lines and Click this button _ are Perpendicular ? : Check if two faces or two Edges are Perpendicular: + Select the 2 faces/planes or 2 Edges/Lines and Click this button _ are Coplanar ? : Check if two faces or two Edges are Coplanar: + Select the 2 faces/planes or 2 Edges/Lines and Click this button _ Distance Clearance ? : Check for two Objects Clearance distance: + Quick measurements between parallel faces and similarly placed objects Select the 2 Objects and Click this button _ Angle ? : Calculate angle from 2 objects: + Angle measurement between two Edges or two Planes + Select the 2 Edges and Click this button + or : Select the 2 Planes and Click this button + or : Select one Edge and one Plane and Click this button _ Distance ? : Check for two Points distance: + Distances measurement and Delta values (on main Axes) between two Points + Select the 2 Points and Click this button _ Length ? : Check for Line Length: + Length measurement and Delta values (on main Axes) for a Line + Select the Line and Click this button _ Area ? : Check for surface Area: + Area measurement for a Plane or a set of Planes. + Select One or several Planes and Click this button _ View : Detect the position of the camera. The returned value is the value provided by the function getCameraOrientation(). |

## Skript

Nach dem Herunterladen der komprimierten Datei, hier

Werkzeugleistensymbol ![](/src/assets/images/WF_wf.png)

**[Herunterladen der neusten Version auf GitHub](https://github.com/Rentlau/WorkFeature)** ,
musst du die zip Datei entpacken und alle Dateien in dein Makroverzeichnis kopieren.

**PS: Dieses Makro befindet sich noch in der Entwicklung. Bitte besuche diese Seite, um sicher zu sein, dass du die neueste Version hast.**

![Herunterladen in GitHub klicke auf die Download ZIP Schaltfläche](/src/assets/images/Macro_Work_Features_GitHub_00.png)

Herunterladen in GitHub klicke auf die Download ZIP Schaltfläche

Verwende den ![](/src/assets/images/AddonManager.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") **Menü → Werkzeuge → Addon-Manager** zur einfachen Installation von WorkFeatures und anderen interessanten Makros

Hier geht es zur ausführlichen [Anleitung zur Installation von Makros](/How_to_install_macros/de "How to install macros/de").

## Beispiele

### Schneidwerkzeuge

**Einstellung der Schneidwerkzeuge:** Wähle ein zu schneidendes Objekt, eine Schnittlinie und eine Referenzebene.
Winkel ist ein Winkel zwischen der Schneidebene und der Referenzebene.
Dicke ist die Breite der Schnittebene.

- ![](/src/assets/images/CuttingSettings.jpg)
- ![](/src/assets/images/CuttingResult.jpg)

**Execute practical example**

- ![Select the Tab Plane](/src/assets/images/Macro_Work_Features_Cutting_01.png)

  Select the **Tab Plane**

- [![and click the Plane button (you can change the dimensions of the plane (Default: 10 x 10)).](/src/assets/images/Macro_Work_Features_Cutting_02.png)](/File:Macro_Work_Features_Cutting_02.png "and click the Plane button (you can change the dimensions of the plane (Default: 10 x 10)).")

  and click the Plane button  
   (you can change the dimensions of the plane (**Default: 10 x 10**)).

- [![click you work object. The plane is created tangent of the object (here a cylinder)](/src/assets/images/Macro_Work_Features_Cutting_03.png)](/File:Macro_Work_Features_Cutting_03.png "click you work object. The plane is created tangent of the object (here a cylinder)")

  click you work object. The plane is created tangent of the object (here a cylinder)

- [![click the Tab Modif, and 1 : click your object for cutting 2 : click the Select object button (here the cylinder and then name is displayed)](/src/assets/images/Macro_Work_Features_Cutting_04.png)](/File:Macro_Work_Features_Cutting_04.png "click the Tab Modif, and 1 : click your object for cutting 2 : click the Select object button (here the cylinder and then name is displayed)")

  click the Tab Modif, and  
  **1 :** click your object for cutting  
  **2 :** click the Select object button (here the cylinder and then name is displayed)

- [![3 : click your line for cutting your cylinder 4 : click the Select Cut Line (then name is displayed)](/src/assets/images/Macro_Work_Features_Cutting_05.png)](/File:Macro_Work_Features_Cutting_05.png "3 : click your line for cutting your cylinder 4 : click the Select Cut Line (then name is displayed)")

  **3 :** click your line for cutting your cylinder  
  **4 :** click the Select Cut Line (then name is displayed)

- [![5 : click the work plane 6 : click the Select Ref. Plane button (then name is displayed)](/src/assets/images/Macro_Work_Features_Cutting_06.png)](/File:Macro_Work_Features_Cutting_06.png "5 : click the work plane 6 : click the Select Ref. Plane button (then name is displayed)")

  **5 :** click the work plane  
  **6 :** click the Select Ref. Plane button (then name is displayed)

- ![click the Apply button](/src/assets/images/Macro_Work_Features_Cutting_07.png)

  click the Apply button

- ![The operation is completed and all operations are preserved.](/src/assets/images/Macro_Work_Features_Cutting_08.png)

  The operation is completed and all operations are preserved.

- ![du kannst auch Winkel und Dicke für deinen Schnitt angeben.](/src/assets/images/Macro_Work_Features_Cutting_09.png)

  du kannst auch Winkel und Dicke für deinen Schnitt angeben.

### Konzentrische Beschränkung zwischen zwei nicht zylindrischen Teilen

- ![](/src/assets/images/Concentric_Constraint_Between_two_non_cylindrical_parts.gif)

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wie eine Beschränkung zwischen zwei nicht zylindrischen Teilen herstellen. **1 :** Das zu ändernde Originalobjekt. **2 :** Zielmitte zweier Vierkantrohre. **3 :** Wähle das erste Objekt und klicke im Menü **Achse 1/2** auf "Objekt(e)" X, Y, Z Axes. **4 :** Gleiche Vorgehensweise für das zweite Objekt. **5 :** Klicke auf Schaltfläche **Draw style** und auf "Wireframe", **6 :** zur Verdeutlichung der Ansicht. **7 :** Wähle das zu zentrierende Objekt und seine erstellte Achse. **8 :** Klicke die Schaltfläche **Draft Move** **9 :** und wähle die erste Achse, die auf der zweiten Achse verschoben werden soll. **10 :** Normalansicht mit der Taste **Zeichenstil** und auf **Original**wiederherstellen. **11 :** Klicke das erste verschobene Objekt und korrigiere die Position mit "Comboansicht > Daten > Positionierung". **12 :** Wähle das von WorkFeature erstellte Objekt (Contener Achse) aus und lösche es. **13 :** Das Objekt verschwindet. **14 :** Das Ergebnis. |

### Rotationsobjekt

- ![Click the image for see the animation.](/src/assets/images/WorkFeature_Rotation_Object.gif)

  Click the image for see the animation.

### Ebene auf Flächentangente

- ![Click the image for see the animation. Click the object, click the Face tangent button, click the point on face for create the plane.](/src/assets/images/Macro_Work_Features_PlaneFaceTangent.gif)

  Click the image for see the animation.  
  Click the object, click the Face tangent button, click the point on face for create the plane.

## Verweise

Die Forumsdiskussion [MACRO:Work Feature 2014_12](http://forum.freecadweb.org/viewtopic.php?f=22&t=9056)

## Externe Arbeitsbereiche

FreeCAD Arbeitsbereiche sind einfach in [Python](/Python/de "Python/de") zu programmieren, daher gibt es viele Leute, die zusätzliche Arbeitsbereiche außerhalb der FreeCAD Hauptentwickler entwickeln.

Die [Externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") Seite enthält einige Informationen und Tutorien zu einigen von ihnen, und das [FreeCAD Erweiterungen](https://github.com/FreeCAD/FreeCAD-addons/) Projekt zielt darauf ab, sie zu sammeln und einfach aus FreeCAD heraus zu installieren.

Neue Arbeitsbereiche sind in der Entwicklung, bleib dran!

## Neueste Version

**Symbole :**

![](/src/assets/images/WF_wf.png)

![](/src/assets/images/WF_centerObjectsPlanes.png)

**Quellen :**

Auf github : [/github.com/Rentlau/WorkFeature-WB.git](https://github.com/Rentlau/WorkFeature-WB.git)

Datum 2019-05-01 (YYYY-MM-DD)

20/01/2019

08/03/2015 : [WF_2015_03_08](http://github.com/Rentlau/WorkFeature.git)

- Kreisschnitt hinzugefügt
- Sind parallel, Sind senkrecht, Sind koplanar hinzugefügt

17/02/2015 : [WF_2015_02_17](https://github.com/Rentlau/WorkFeature.git)

- Reiter Kreis und Ellipse hinzugefügt
- Reiter Schneiden hinzugefügt

25/01/2015 : [WF_2015_01_25.zip](http://forum.freecadweb.org/download/file.php?id=10937&sid=b770dec5362ae499adb4173547ef445f) Objekt Zylinder Würfel hinzugefügt

18/01/2015 : [WF_2015_01_18.tar.gz](http://forum.freecadweb.org/download/file.php?id=10799) Ebene und Fläche zur Ansicht hinzufügen

28/12/2014 : [WorkFeatures_2014_12_28.zip](http://forum.freecadweb.org/download/file.php?id=10347)

27/12/2014 : [WF_2014_12_27.zip](http://forum.freecadweb.org/download/file.php?id=10325)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_WorkFeatures/de&oldid=1256220>"
