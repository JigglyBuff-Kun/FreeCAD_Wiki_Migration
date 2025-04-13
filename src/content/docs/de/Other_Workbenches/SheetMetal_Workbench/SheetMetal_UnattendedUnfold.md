---
title: SheetMetal AbwickelnOhneEingabe
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| SheetMetal AbwickelnOhneEingabe |
| Menüeintrag |
| Sheet Metal → Abwickeln ohne Eingaben |
| Arbeitsbereich |
| [SheetMetal](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel |
| U |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/SheetMetal_UnattendedUnfold.svg) SheetMetal AbwickelnOhneEingabe wickelt ein Blechobjekt ab.

Dieser Befehl steht nicht standardmäßig zur Verfügung, siehe [Hinweise](#Hinweise).

Wenn der Elternkörper einer ausgewählten ebenen Fläche schon zuvor von einer Abwicklung betroffen war, überspringt dieses Werkzeug das Menü im Aufgaben-Fenster. Andernfalls zeigt es eine Fehlermeldung, die auffordert einen K-Faktor anzugeben ("set a Manual K-factor") oder ein Materialdatenblatt zu verwenden ("use a Material Definition Sheet").

Mit der ersten Benutzung des Befehls ![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de") erhält das **Label** des übergeordneten Körpers einen Zusatz (wie z.B. *\_material\_0.5din*) und ist danach bereit für die Benutzung mit diesem Befehl.

## Anwendung

1. Eine ebene Fläche eines SheetMetal-Objekts auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/SheetMetal_UnattendedUnfold.svg) Abwickeln ohne Eingaben drücken.
   * Den Menüeintrag **Sheet Metal → ![](/images/SheetMetal_UnattendedUnfold.svg) Abwickeln ohne Eingaben** auswählen.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Sheet Metal → ![](/images/SheetMetal_UnattendedUnfold.svg) Abwickeln ohne Eingaben** im Kontextmenü auswählen.
   * Das Tastaturkürzel: U.
3. Ein **Unfold**-Objekt wird erstellt.
4. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

## Hinweise

Damit dieser Befehl zur Verfügung steht, muss zuerst der Engineering Mode in den Voreinstellungen aktiviert werden. Zu **Bearbeiten → Einstellungen... → SheetMetal → Allgemeine Einstellungen** wechseln und **Engineering UX Mode** auf `Enabled` setzen. Das Ändern dieser Voreinstellung erfordert einen Neustart von FreeCAD.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Das SheetMetal-**Unfold**-Objekt, wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Es hat keine zusätzlichen Eigenschaften.

## Einschränkungen

Siehe ![](/images/SheetMetal_Unfold.svg) [Abwicklung](/SheetMetal_Unfold/de "SheetMetal Unfold/de") für Einschränkungen.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_UnattendedUnfold/de&oldid=1544926>"