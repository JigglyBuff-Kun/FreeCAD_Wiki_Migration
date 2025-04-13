---
title: Draft StilFestlegen
---
|  |
| --- |
| Draft StilFestlegen |
| Menüeintrag |
| Dienstprogramme → Stil festlegen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| Draft: S S |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Draft AnmerkungsStilEditor](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de"), [Draft StilAnwenden](/Draft_ApplyStyle/de "Draft ApplyStyle/de") |
|  |

## Beschreibung

Der ![](/images/Draft_SetStyle.svg) **Draft StilFestlegen**-Befehl legt die Standardstilvorgaben für neue Objekte fest.

![](/images/Draft_SetStyle_Taskpanel_Tab_Shape.png) ![](/images/Draft_SetStyle_Taskpanel_Tab_Annotation.png)

Die beiden Reiter ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) der Aufgaben-Tafel Stileinstellungen

## Anwendung

1. Es gibt mehrere Wege, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_tray_button_style.png) in der [Draft Ablage](/Draft_Tray/de "Draft Tray/de"). Abhängig von den aktuellen Stileinstellungen kann diese Schaltfläche unterschiedlich aussehen.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Dienstprogramme → ![](/images/Draft_SetStyle.svg) Stil festlegen** auswählen oder die Menüoption im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Draft: Das Tastaturkürzel S dann S.
2. Der Aufgaben-Bereich **Stileinstellungen** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Wahlweise eine oder mehrere Einstellungen ändern.
4. Die Schaltfläche OK drücken, um die Einstellungen zu sichern.
5. Die Schaltfläche in der [Draft Ablage](/Draft_Tray/de "Draft Tray/de") wird aktualisiert.

## Optionen

* Aus der herunter geklappten Liste oben im Task Fenster kann ein vorhandener voreingestellter Stil ausgewählt werden.
* Drücke die ![](/images/Document-save.svg) Schaltfläche um die aktuellen Stil Einstellungen als Voreinstellung festzulegen.
* Im **Form** Reiter können die folgenden Einstellungen festgelegt werden:
  + **Erscheinungsbild der Form**
    - **Formfarbe**.
    - **Umgebungsfarbe**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Emmissionsfarbe**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Glanzfarbe**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Formtransparenz**.
    - **Glanzstärke**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  + **Andere**
    - **Linienfarbe**.
    - **Linienbreite**.
    - **Punktfarbe**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Punktgröße**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Darstellungsart**.
    - **Anzeigemodus**.
* Die Einstellungen im **Anmerkungen** Reiter wirken auf [Draft Texte](/Draft_Text/de "Draft Text/de"), [Draft Maße](/Draft_Dimension/de "Draft Dimension/de") and [Draft Hinweise](/Draft_Label/de "Draft Label/de"). Die folgenden Einstellungen können festgelegt werden (Details siehe [Draft Text](/Draft_Text/de#Ansicht "Draft Text/de") und [Draft Maße](/Draft_Dimension/de#Ansicht "Draft Dimension/de")):
  + **Texte**
    - **Schriftname**.
    - **Schriftgröße**. Das ist die Standard Linienhöhe, die Buchstaben sind kleiner.
    - **Faktor für den Zeilenabstand**. Wird bei Maßen nicht verwendet.
    - **Skalenfaktor**. Dies ist die Umkehrung des Maßstabes der in [Draft Beschriftungsmaßstab Widget](/Draft_annotation_scale_widget/de "Draft annotation scale widget/de") gesetzt ist. Wenn der Maßstab `1:100` ist, ist der Multiplizierer `100`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Textfarbe**.
  + **Linien und Pfeile**
    - **Linienbreite**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
    - **Pfeiltyp**.
    - **Pfeilgröße**.
    - **Linien- und Pfeilfarbe**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  + **Maße**
    - **Einheit anzeigen**.
    - **Einheit überschreiben**.
    - **Maßlinienüberstand**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
    - **Länge der Maßhilfslinie**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
    - **Maßhilfslinienüberstand**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
    - **Textabstand**.
* Drücke die ![](/images/Draft_SetStyle.svg) Ausgewählt Schaltfläche um die Festlegungen auf ausgewählte Objekte oder Gruppen zuzuweisen. Objekte können ausgewählt werden, so lange das Task Fenster offen ist.
* Drücke die ![](/images/Draft_Text.svg) Anmerkungen Schaltfläche um die Festlegungen auf alle [Draft Texte](/Draft_Text/de "Draft Text/de"), [Draft Maße](/Draft_Dimension/de "Draft Dimension/de") and [Draft Hinweise](/Draft_Label/de "Draft Label/de") im aktuellen Dokument anzuwenden. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Drücke die Abbrechen Schaltfläche um den Befehl ohne Speicherung der Einstellungen zu beenden.

## Hinweise

* Die Einstellungen im Reiter **Formen**, außer **Darstellungsart** und **Anzeigemodus**, werden nicht nur für Draft-Objekte verwendet, sondern auch für Objekte, die mit anderen Arbeitsbereiche erstellt werden.
* Alle Einstellungen, außer **Darstellungsart** und **Anzeigemodus**, können auch in den Voreinstellungen angepasst werden. Siehe [PartDesign-Einstellungen](/PartDesign_Preferences/de#Formdarstellung "PartDesign Preferences/de") und [Draft-Einstellungen](/Draft_Preferences/de#Texte_und_Bemaßungen "Draft Preferences/de").
* Stile werden in einer Datei mit festgelegtem Namen gespeichert: StylePresets.json, die im Draft-Verzeichnis des FreeCAD-Anwenders abgelegt ist:
  + Unter Linux ist es normalerweise /home/<username>/.local/share/FreeCAD/Draft/.
  + Unter Windows ist es %APPDATA%\FreeCAD\Draft\, normalerweise C:\Users\<username>\Appdata\Roaming\FreeCAD\Draft\.
  + Unter macOS ist es normalerweise /Users/<username>/Library/Preferences/FreeCAD/Draft/.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SetStyle/de&oldid=1513910>"