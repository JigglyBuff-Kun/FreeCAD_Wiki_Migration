---
title: Dokumentstruktur
---
![](/images/Screenshot_treeview.jpg)

Ein FreeCAD-Dokument enthält alle Objekte einer Arbeitsumgebung. Es kann Gruppen enthalten und Objekte, die in einem beliebigen Arbeitsbereich erstellt wurden. Daher kann man zwischen den Arbeitsbereichen wechseln und arbeitet immer noch in demselben Dokument. Es ist das Dokument, das auf einem Datenträger gesichert wird, wenn die Arbeit gespeichert wird. Es können auch mehrere Dokumente gleichzeitig in FreeCAD geöffnet sein und auch mehrere Ansichten desselben Dokuments.

Innerhalb des Dokuments können die Objekte in Gruppen geschoben werden und haben einen eindeutigen Namen. Das Verwalten von Gruppen, Objekten und Objektnamen wird vor allem in der [Baumansicht](/Tree_view/de "Tree view/de") erledigt. **Hinweis:** Es kann natürlich auch, wie alles in FreeCAD, über den [Python](/Python/de "Python/de")-Interpreter geschehen. In der [Baumansicht](/Tree_view/de "Tree view/de") können durch einen Rechtsklick in der [Baumansicht](/Tree_view/de "Tree view/de") ![](/images/Std_Group.svg) [Gruppen](/Std_Group/de "Std Group/de") erstellt, Objekte in Gruppen eingefügt, Objekte oder Gruppen gelöscht, oder bei einem Objekt durch einen Doppelklick auf dessen Namen, dieses umbenannt oder eventuell andere Operationen durchgeführt werden, abhängig vom aktiven Arbeitsbereich.

Die Objekte innerhalb eines FreeCAD-Dokuments können unterschiedlicher Art sein.
Jeder Arbeitsbereich kann seine eigene Art von Objekten erstellen, zum Beispiel erstellt der Arbeitsbereich ![](/images/Workbench_Mesh.svg)[Mesh](/Mesh_Workbench/de "Mesh Workbench/de") Netzobjekte (Mesh-Objekte), der Arbeitsbereich ![](/images/Workbench_Part.svg)[Part](/Part_Workbench/de "Part Workbench/de") erstellt Part-Objekte; der Arbeitsbereich ![](/images/Workbench_Draft.svg)[Draft](/Draft_Workbench/de "Draft Workbench/de") erstellt auch Part-Objekte, usw.

Wenn mindestens ein Dokument in FreeCAD geöffnet ist, gibt es immer nur genau ein aktives Dokument. Das ist das Dokument, das in der aktuellen 3D-Ansicht angezeigt wird, das Dokument, an dem gerade gearbeitet wird.

## Anwendung und Benutzeroberfläche

Wie fast alles andere in FreeCAD sind die Teilbereiche grafische Benutzeroberfläche (GUI) und Basisanwendung (App) voneinader getrennt. Dies gilt auch für Dokumente. Die Dokumente bestehen ebenfalls aus zwei Teilen: dem Anwendungsdokument (Application document), das unsere Objekte enthält, und dem Ansichtsdokument (View document), das die Darstellung unserer Objekte auf dem Bildschirm enthält.

Man kann es sich als zwei Räume vorstellen, in denen die Objekte definiert werden. Ihre konstruktiven Parameter (ist es ein Würfel? ein Kegel? welche Größe?) werden im Anwendungsdokument gespeichert, während ihre graphische Darstellung (wird sie mit schwarzen Linien gezeichnet? mit blauen Flächen?) im Ansichtsdokument gespeichert wird. Warum ist das so? Weil FreeCAD auch *ohne* graphische Oberfläche verwendet werden kann z.B. innerhalb anderer Programme und wir müssen unsere Objekte immer noch verändern können, auch wenn nichts auf dem Bildschirm dargestellt wird.

Eine andere Sache, die im Ansichtsdokument enthalten ist, sind 3D-Ansichten. In einem Dokument können mehrere Ansichten geöffnet sein, so dass das Dokument aus mehreren Blickwinkeln gleichzeitig betrachtet werden kann. Sollen vielleicht eine Draufsicht und eine Vorderansicht der Arbeit gleichzeitig betrachtet werden? Dann werden zwei Ansichten desselben Dokuments verwendet, die beide im Ansichtsdokument gespeichert werden. Das Erstellen neuer Ansichten oder das Schließen von Ansichten kann über das Menü Ansicht oder durch Rechtsklicken auf einen Ansichtsreiter erfolgen.

## Skripten

Dokumente können mit dem [Python](/Python/de "Python/de")-Interpreter einfach erstellt, aufgerufen und bearbeitet werden. Zum Beispiel:

```
FreeCAD.ActiveDocument

```

Gibt das aktuelle (aktive) Dokument zurück.

```
FreeCAD.ActiveDocument.Blob

```

Greift auf das Objekt namens "Blob" innerhalb des Dokuments zu.

```
FreeCADGui.ActiveDocument

```

Gibt das Ansichtsdokument zurück, das mit dem aktuellen Dokument verbunden ist.

```
FreeCADGui.ActiveDocument.Blob

```

Greift auf den Teilbereich der grafischen Darstellung (view) des Blob-Objekts zu.

```
FreeCADGui.ActiveDocument.ActiveView

```

Gibt die aktuelle Ansicht zurück.

Retrieved from "<http://wiki.freecad.org/index.php?title=Document_structure/de&oldid=1476659>"