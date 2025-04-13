---
title: Material Bearbeiten
---
|  |
| --- |
| Material Bearbeiten |
| Menüeintrag |
| Materialien → Bearbeiten... Model → Materials → Material editor |
| Arbeitsbereich |
| [Material](/Material_Workbench/de "Material Workbench/de"), [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [FEM MaterialEditor](/FEM_MaterialEditor/de "FEM MaterialEditor/de") |
|  |

## Beschreibung

Das Werkzeug **Material Bearbeiten** ermöglicht den Zugang zum Material-Editor, der Teil von FreeCADs [Material](/index.php?title=Material/de&action=edit&redlink=1 "Material/de (page does not exist)")-System ist. Das Material-System kann von allen Arbeitsbereichen verwendet werden. Es verwaltet die Materialeigenschaften und auch die Darstellungseigenschaften von Objekten.

![](/images/Material_Edit_Dialog.png)

## Anwendung

1. Es gibt verschiedene Wege den Editor aufzurufen:
   * [Arbeitsbereich Material](/Material_Workbench/de "Material Workbench/de"):
     + Drücke den Knopf ![](/images/Material_Edit.svg) Bearbeiten....
     + Wähle die Option **Materialien → ![](/images/Material_Edit.svg) Bearbeiten...** aus dem Menü.
   * [Arbeitsbereich FEM](/FEM_Workbench/de "FEM Workbench/de"):
     + Drücke den Knopf ![](/images/FEM_MaterialEditor.svg) [Material-Editor](/FEM_MaterialEditor/de "FEM MaterialEditor/de").
     + Wähle die Option **Modell → Materialien → ![](/images/FEM_MaterialEditor.svg) Material-Editor** aus dem Menü.
   * Alle Arbeitsbereiche:
     1. Wähle ein Object.
     2. Führen Sie einen der folgenden Schritte aus:
        + Wähle die Option **Ansicht → ![](/images/Material_Edit.svg) Material...** aus dem Menü.
        + Wähle die Option **![](/images/Material_Edit.svg) Material...** aus der [Baumansicht](/Tree_view/de "Tree view/de") oder dem Kontext-Menü der [3D-Ansicht](/3D_view "3D view").
     3. Das **Material**-Aufgabenfenster wird geöffnet.
     4. Drücke den KnopfEditor aufrufen.
2. Wähle ein Material aus der mehrstufigen Liste in der linken Leiste. Die folgenden Kategorien sind verfügbar:
   * Favoriten
   * Kürzlich verwendet
   * System
     + Appearance
     + Fluid
     + Machining
     + Patterns
     + Standard
     + Test
   * User
3. Verwenden Sie die drei Registerkarten im rechten Bereich des Editors, um die Eigenschaften des ausgewählten Materials zu bearbeiten:
   * General:
     + Name
     + Author
     + License
     + Parent
     + Source URL
     + Source Reference
     + Tags
     + Description
   * Physical - various physical properties
   * Appearance:
     + Basic Rendering:
       - Ambient Color
       - Diffuse Color
       - Emissive Color
       - Shininess
       - Specular Color
       - Transparency
4. Alternativ können auch die Knöpfe im Tab Allgemein benutzt werden:
   * Drücke den Knopf Neu um ein neues Material mit leeren Eigenschaften zu erzeugen.
   * Drücke den Knopf Neu vererben um ein neues Material mit kopierten Eigenschaften des ausgewählten Materials zu erzeugen.
   * Drücke den Knopf \* um das ausgewählte Material zu den Favoriten hinzuzufügen.
5. Wenn Materialeigenschaften geändert wurden: Drücke den Knopf Save um sie zu speichern.
6. Führen Sie einen der folgenden Schritte aus:
   * Drücke den Knopf OK um die Materialauswahl zu bestätigen und den Editor zu schließen.
   * Drücke den Knopf Cancel um die Materialauswahl abzubrechen und den Editor zu schließen. Bereits gespeicherte Änderungen an den Materialeigenschaften werden dadurch nicht aufgehoben.
7. Wenn das **Material**-Aufgabenfenster offen ist: drücke den Knopf Schließen zum schließen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Material_Edit/de&oldid=1549448>"