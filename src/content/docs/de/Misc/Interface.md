---
title: Oberfläche
---
## Einleitung

Die FreeCAD-Oberfläche (auch als Benutzerschnittstelle bezeichnet) basiert auf Qt, einem bekannten Werkzeugsatz für grafische Benutzerschnittstellen (GUIs), der insbesondere unter Linux eingesetzt wird, aber auch unter Windows und MacOS zur Verfügung steht.

![](/images/FreeCAD_interface_base_divisions.png)

Standard-Oberfläche in Version 0.19.

Das Hauptfenster der Anwendung kann grob in 11 Bereiche unterteilt werden:

1. Der [Hauptansichtsbereich](/Main_view_area/de "Main view area/de"), der verschiedene Registerkartenfenster enthalten kann.
2. Die [3D-Ansicht](/3D_view/de "3D view/de"), normalerweise eingebettet in den [Hauptansichtsbereich](/Main_view_area/de "Main view area/de").
3. Der obere Teil der [Combo-Ansicht](/Combo_view/de "Combo view/de"), der die [Baumansicht](/Tree_view/de "Tree view/de") und den [Aufgaben-Bereich](/Task_panel/de "Task panel/de") beinhaltet.
4. Der untere Teil der [Combo-Ansicht](/Combo_view/de "Combo view/de"), der den [Eigenschafteneditor](/Property_editor/de "Property editor/de") beinhaltet.
5. Die [Auswahlansicht](/Selection_view/de "Selection view/de").
6. Das [Ausgabefenster](/Report_view/de "Report view/de").
7. Die [Python-Konsole](/Python_console/de "Python console/de").
8. Die [Statusleiste](/Status_bar/de "Status bar/de").
9. Der Symbolleistenbereich, siehe folgende Informationen zu den Symbolleisten.
10. Die Auswahlliste der [Arbeitsbereiche](/Std_Workbench/de "Std Workbench/de"), die selbst eine Symbolleiste ist.
11. Das [Standardmenü](/Standard_Menu/de "Standard Menu/de").

## Komponenten der Oberfläche

Wie viele andere Programme enthält FreeCAD eine Standardmenüleiste und eine Reihe von Symbolleisten und Fenster, in denen sich die Anwenderwerkzeuge befinden.

### Menüs

Das [Standardmenü](/Standard_Menu/de "Standard Menu/de") enthält: [**Datei**](/Std_File_Menu/de "Std File Menu/de"), [**Bearbeiten**](/Std_Edit_Menu/de "Std Edit Menu/de"), [**Ansicht**](/Std_View_Menu/de "Std View Menu/de"), [**Werkzeuge**](/Std_Tools_Menu/de "Std Tools Menu/de"), [**Makro**](/Std_Macro_Menu/de "Std Macro Menu/de"), [**Fenster**](/Std_Windows_Menu/de "Std Windows Menu/de"), [**Hilfe**](/Std_Help_Menu/de "Std Help Menu/de").

### Symbolleisten

Die Symbolleisten, die standardmäßig in der Oberfläche dargestellt werden, sind:

* Symbolleiste Datei: Werkzeuge zum Arbeiten mit Dateien, Öffnen von Dokumenten, Kopieren, Einfügen, Rückgängigmachen und Wiederherstellen von Aktionen.
* Symbolleiste [Arbeitsbereich](/Std_Workbench/de "Std Workbench/de"): Sie enthält ein einziges Widget zur Auswahl des aktiven [Arbeitsbereiches](/Workbenches/de "Workbenches/de").
* Symbolleiste Makro: Werkzeuge zum Aufzeichnen, Bearbeiten und Ausführen von [Makros](/Macros/de "Macros/de").
* Symbolleiste Ansicht: Werkzeuge zur Steuerung der Darstellung von Objekten in der [3D-Ansicht](/3D_view/de "3D view/de").
* Symbolleiste Struktur: Werkzeuge zum Ordnen von Objekten im Dokument und zum Erstellen von Verknüpfungen zu weiteren Dokumenten.

Diese können ein- und ausgeschaltet werden, durch Rechtsklick auf eine leere Stelle in einer der Symbolleisten und Auswahl des gewünschten Elements oder über das Menü **Ansicht → Symbolleisten**.

### Fenster

Die Hauptfenster, die das Arbeiten mit Objekten ermöglichen, sind:

* [3D-Ansicht](/3D_view/de "3D view/de"): Der Bereich, in dem 2D- und 3D-Geometrie gezeichnet wird.
* [Combo-Ansicht](/Combo_view/de "Combo view/de"): Das Fenster, das die [Baumansicht](/Tree_view/de "Tree view/de"), den [Aufgaben-Bereich](/Task_panel/de "Task panel/de") und den [Eigenschafteneditor](/Property_editor/de "Property editor/de") enthält.
* [Baumansicht](/Tree_view/de "Tree view/de"): Das Element, das alle Objekte im Dokument und ihre parametrische Historie anzeigt.
* [Aufgaben-Bereich](/Task_panel/de "Task panel/de"): Das Fenster, das je nach ausgewähltem Zeichenwerkzeug verschiedene Aktionen und Optionen anzeigt.
* [Eigenschafteneditor](/Property_editor/de "Property editor/de"): Der Bereich, in dem Objekteigenschaften geändert werden.
* [Auswahlansicht](/Selection_view/de "Selection view/de"): Das Fenster, das die aktuell ausgewählten Elemente anzeigt.
* [Ausgabefenster](/Report_view/de "Report view/de"): Das Textfeld, in dem verschiedene Meldungen der Anwendung und ihrer Werkzeuge angezeigt werden.
* [Python-Konsole](/Python_console/de "Python console/de"): Der Editor, der ermöglicht, [Python](/Python/de "Python/de")-Code interaktiv auszuführen, um die Ergebnisse in der [3D-Ansicht](/3D_view/de "3D view/de") anzusehen.
* [Statusleiste](/Status_bar/de "Status bar/de"): Die Leiste, die bestimmte Nachrichten der Anwendung anzeigt und ein Schaltfläche zur Auswahl der [Mausnavigation](/Mouse_navigation/de "Mouse navigation/de") enthält.
* [DAG-Ansicht](/DAG_view/de "DAG view/de"): Eine Alternative zur [Baumansicht](/Tree_view/de "Tree view/de"), die die Beziehungen zwischen verschiedenen Objekten in einem Diagramm anzeigt.

Mit Ausnahme der 3D-Ansicht können alle Fenster ein- und ausgeschaltet werden, indem man mit der rechten Maustaste auf einen leeren Bereich in einer der oberen Symbolleisten klickt und das gewünschte Element auswählt oder im Menü **Ansicht → Fenster**.

Zum Aktivieren und Deaktivieren der Statusleiste wird im Menü **Ansicht → Statusleiste** ausgewählt.

### Andere

Weitere nützliche Oberflächen und Fenster enthalten:

* [Scene-Inspector](/Std_SceneInspector/de "Std SceneInspector/de"): Ein Fenster, das die Coin3D-Knoten anzeigt, aus denen sich der [Szenengraph](/Scenegraph/de "Scenegraph/de") zusammensetzt. Erfahrenen Anwendern und Entwicklern kann es bei der Fehlerbeseitigung helfen, in Vorgängen, die die Szene direkt manipulieren und in Objekten, die in der [3D-Ansicht](/3D_view/de "3D view/de") erstellt wurden.
* [Abhängigkeitsdiagramm](/Std_DependencyGraph/de "Std DependencyGraph/de"): Ein Fenster, das das Abhängigkeitsdiagramm aller Objekte im Dokument anzeigt, das mit dem Hilfsprogramm [Graphviz](https://graphviz.org/) erstellt wird. Es unterstützt dabei, Probleme bei der Erstellung von Objekten zu erkennen, wie z.B. zirkuläre Abhängigkeiten, die aus der [Baumansicht](/Tree_view/de "Tree view/de") oder der [DAG-Ansicht](/DAG_view/de "DAG view/de") nicht ganz ersichtlich sind.

### Anpassung

Symbolleisten können unterschiedlich viele Schaltflächen enthalten; selbsterstellte Symbolleisten können mit einer Mischung aus verschiedenen Werkzeugen zusammengestellt werden und Makros enthalten.

Diese Optionen befinden sich im Menü unter **Werkzeuge → Benutzerdefiniert**. Siehe [Anpassen der Oberfläche](/Interface_Customization/de "Interface Customization/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface/de&oldid=1479908>"