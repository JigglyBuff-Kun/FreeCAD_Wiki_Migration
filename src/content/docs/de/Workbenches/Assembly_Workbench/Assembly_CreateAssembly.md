---
title: Assembly BaugruppeErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly BaugruppeErstellen |
| Menüeintrag |
| Assembly → Baugruppe erstellen |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| A |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Assembly_CreateAssembly.svg) Assembly BaugruppeErstellen erstellt eine Hauptbaugruppe (Assembly-Objekt) im aktuellen Dokument oder eine Unterbaugruppe in einer schon vorhandenen aktiven Baugruppe. Ein Dokument kann nur eine Hauptbaugruppe enthalten.

Jedes Assembly-Objekt wird standardmäßig mit einem [Ursprung](/App_OriginGroupExtension/de "App OriginGroupExtension/de") (Origin-Objekt) und einem leeren Behälter zur Aufnahme der Verbindungen (Joints container) erstellt.

## Anwendung

1. Wenn das Dokument schon eine oder mehrere Baugruppen enthält: Eine Baugruppe aktivieren.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_CreateAssembly.svg) Baugruppe erstellen drücken.
   * Den Menüeintrag **Assembly → ![](/images/Assembly_CreateAssembly.svg) Baugruppe erstellen** auswählen.
   * Das Tastaturkürzel A.
3. Ein neues Assembly-Objekt wird erstellt, entweder im Dokument oder in der aktivierten Baugruppe.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Assembly**-Objekt, oder formal ein `Assembly::AssemblyObject` besitzt die folgenden Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft**Type** (`String`):
* Daten-Eigenschaft**Material** (`Link`):
* Daten-Eigenschaft (versteckt)**Meta** (`Map`):
* Daten-Eigenschaft**Id** (`String`):
* Daten-Eigenschaft (versteckt)**Uid** (`UUID`):
* Daten-Eigenschaft**License** (`String`):
* Daten-Eigenschaft**License URL** (`String`):
* Daten-Eigenschaft**Color** (`Color`):
* Daten-Eigenschaft**Placement** (`Placement`):
* Daten-Eigenschaft**Label** (`String`):
* Daten-Eigenschaft (versteckt)**Label2** (`String`):
* Daten-Eigenschaft (versteckt)**Expression Engine** (`ExpressionEngine`):
* Daten-Eigenschaft (versteckt)**Visibility** (`Bool`):
* Daten-Eigenschaft (versteckt)**Origin** (`Link`):
* Daten-Eigenschaft**Group** (`LinkList`):
* Daten-Eigenschaft (versteckt)**\_ Group Touched** (`Bool`):

### Ansicht

Display Options

* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): `Group` (bisher die einzige Option).
* Ansicht-Eigenschaft**Show In Tree** (`Bool`): Standardwert `true`.
* Ansicht-Eigenschaft**Visibility** (`Bool`): Standardwert `true`.

Selection

* Ansicht-Eigenschaft**On Top When Selected** (`Enumeration`):
* Ansicht-Eigenschaft**Selection Style** (`Enumeration`):

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateAssembly/de&oldid=1428843>"