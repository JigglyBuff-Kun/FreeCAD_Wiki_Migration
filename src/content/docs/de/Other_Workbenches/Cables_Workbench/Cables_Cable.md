---
title: Cables Leitung
---
|  |
| --- |
| Cables Leitung |
| Menüeintrag |
| Leitungen → Leitung erstellen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables KabelProfile](/Cables_Profile/de "Cables Profile/de"), [Cables Linienzug](/Cables_WireFlex/de "Cables WireFlex/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_Cable.svg) Cables Leitung erstellt eine Leitung (Cable-Objekt) basierend auf dem ausgewählten [Cables Leitungsverlauf](/Cables_WireFlex/de "Cables WireFlex/de") und dem ausgewählten [Cables Leitungsprofil](/Cables_Profile/de "Cables Profile/de"). Das **Cable**-Objekt ist vollständig parametrisch; es wird von einem [Arch-Rohr](/Arch_Pipe/de "Arch Pipe/de") abgeleitet und erbt alle seine Eigenschaften. Einige Eigenschaften des Arch-Rohres werden ausgeblendet und nicht von dem **Cable**-Objekt verwendet.

Das **Cable**-Objekt erstellt automatisch einige Unterkomponenten, die auf einem vorgegebenen **Profile**-Objekt basieren. Diese sind:

* Zwei ![](/images/Draft_Clone.svg) [Draft-Klone](/Draft_Clone/de "Draft Clone/de") der Profilskizze (die Objekte **Cable\_A\_Profile** und **Cable\_B\_Profile**), die an beiden Enden des Linienzuges **Cable\_Base** positioniert und senkrecht zu dessen Endabschnitten ausgerichtet werden.
* An den A- und B-Profilen werden weitere **WireFlex**-Objekte (Aderverläufe) an den Mittelpunkten der Einzelleitungen (Adern) befestigt. Diese Aderverläufe werden der Eigenschaft **Sub Colors** (Aderfarben) entsprechend benannt.

**Cable**-Objekte (Leitungen) können eingefärbt werden, indem das gewünschte [Material](/Arch_SetMaterial/de "Arch SetMaterial/de") zur Eigenschaft **Material** hinzugefügt wird.

![](/images/Cables_Example1.png)

Beispiel für ein dreiadriges Flachkabel:  
Leitungsform aus mehreren Materialien und deren Basisleiter, dem Profil und Einzelleitern.

## Anwendung

1. Einen vorhandenen [Leitungsverlauf](/Cables_WireFlex/de "Cables WireFlex/de") in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Die Strg-Taste gedrückt halten und einen vorhandenen [Cable Leitungsquerschnitt](/Cables_Profile "Cables Profile") in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Eine Leitung mit einer der folgenden Methoden erstellen:
   * Die Schaltfläche ![](/images/Cables_Cable.svg) Cable drücken.
   * Den Menüeintrag **Cables → ![](/images/Cables_Cable.svg) Cable** auswählen.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Cables → ![](/images/Cables_Cable.svg) Cable** im Kontextmenü auswählen.

Sobald die Leitung erstellt wurde, verläuft sie dem ausgewählten **WireFlex**-Objekt (Leitungsverlauf) entsprechend im 3D-Raum.

## Hinweise

Alle Unterkomponenten der Leitung (Leitungsverlauf (base wire), Querschnittklone (subprofiles), Aderverläufe (subwires)) sind standardmäßig sichtbar. Sie können einfach ausgeblendet werden, indem die Eigenschaft **Show Sub Lines** eines **Cable**-Objekts (Leitung) geändert wird.

Der erste Abschnitt eines Aderverlaufs ist immer 5 mm lang (length = 5mm) ("hardcoded", kann nicht durch den Anwender geändert werden) und steht immer senkrecht auf dem befestigen Querschnittklon. Dies ist für die korrekte Erstellung der Aderverläufe erforderlich.

Verrundungen werden standardmäßig nicht hinzugefügt. Sie können in den Eigenschaften **Base Wire Fillet Radius** (Leitungsradius) und **Sub Wires Fillet Radius** (Aderradius) der Leitung geändert werden. Es wird empfohlen, dies als letzten Schritt zum Bearbeiten einer Leitung auszuführen.

## Eigenschaften

Eine Leitung (Cable-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

Ein **Cable**-Objekt wird von einem [Arch-Rohr](/Arch_Pipe/de "Arch Pipe/de") abgeleitet und erbt alle seine Eigenschaften. Einige besondere Eigenschaften für **Arch-Rohr**-Objekte sind ausgeblendet und werden werden von dem **Cable**-Objekt nicht verwendet.

### Daten

Component

* Daten-Eigenschaft**Base** (`Link`): Der grundlegende Verlauf (Linienzug) einer Leitung.

Für die anderen Eigenschaften in dieser Gruppe siehe [Arch Komponente](/Arch_Component/de#Eigenschaften "Arch Component/de").

Pipe

* Daten-Eigenschaft**Length** (`Length`): Zeigt die Gesamtlänge einer Leitung einschließlich der Aderenden an.

Cable

* Daten**Auto Label Sub Lines** (`Bool`): Wenn auf *true* gesetzt, wird der Name aller Unterelemente (Basisleiter, Unterprofile, Leitungen) automatisch ersetzt. Um die Namen zu aktualisieren, sollte die Eigenschaft zu **false** und anschließend zu **true** geändert werden. Die Enden der Leitungen werden als *A* und *B* bezeichnet. Die Suffixe der Leitern-Namen werden nach den Namen in der Eigenschaft **Sub Colors** benannt.
* Daten**Base Wire Fillet Radius** (`Length`): Legt den Radius der Verrundung an den Ecken des Basisleiters fest.
* Daten**Cable Rotation** (`Angle`): Legt den Drehwinkel des Unterprofils *A* fest. Die Drehung des Unterprofils *B* wird automatisch berechnet. Dieser Parameter ist für Flachkabel sinnvoll.
* Daten**Show Sub Lines** (`Bool`): Wenn auf *true* gesetzt, werden alle Unterelemente (Basisleiter, Unterprofile, Leitungen) in der 3D-Ansicht sichtbar.
* Daten**Stripped Wire Length** (`Length`): die Länge des abisolierten Leitungsdrahtes am Ende jeder Einzelleitung. Standardwert = 8mm.
* Daten**Sub Colors** (`StringList`): Verwendet als Farb-Rezept für die **Material**-Eigenschaft und Quelle des Namens der **Auto Label Sub Lines**-Eigenschaft. Sie enthält die Liste der Namen mit der folgenden Formel: *"Label:nr"*, wobei *Label* den Namen des Kabelmantels an gibt, Leiterisolation oder Leiter (Beispiele: *J, L1, N, PE, CU*) und *nr* zeigt Leiternummer (Spezialnummer: *0* - Kabelmantel, *-1* - alle anderen, mehrheitlich für die Beschriftung *CU*). Für Kabel mit 1-5 oder 8 Leitern werden hier die Standardwerte benutzt. Die Eigenschaft kann durch einen Klick auf ... neben dem Eigenschaftsnamen geändert werden.
* Daten**Sub Profiles** (`LinkList`): Liste der Verbindungen zu den Unterprofilen A und B. Sie werden bei der Erstellung des Kabels automatisch als Klone des Hauptprofils erstellt.
* Daten**Sub Wires** (`LinkList`): Liste der Verbindungen zu allen Leiter an beiden Enden einer Leitung (A und B). Alle Leiter werden automatisch bei der Leitungserzeugung erzeugt.
* Daten**Sub Wires Fillet Radius** (`Length`): Legt den Radius der Verrundungen an den Ecken aller Leiter fest.

## Typischer Arbeitsablauf

Die Erstellung einer gänzlich eingefärbten Leitung erfordert einige Schritte:

1. Eine Leitung erstellen, wie unter [Anwendung](#Anwendung/de) beschrieben.
2. Die Leitung wie gewünscht umbenennen. Wenn die Eigenschaft **Auto Label Sub Lines** aktiv ist, werden auch alle Unterkomponenten der Leitung entsprechend umbenannt. Die Suffixe der Adernamen entsprechen den Aderfarben in der Eigenschaft **Sub Colors**. Diese Bezeichnungen können auch nach Belieben angepasst werden.
3. Das Standard-Mehrfachmaterial erstellen, wie unter [Cables Material](/Cables_Material/de "Cables Material/de") beschrieben. Die Materialeinstellungen anpassen oder bei den Standardeinstellungen belassen.
4. Das ausgewählte Mehrfachmaterial der Eigenschaft **Material** einer Leitung zuweisen.
5. Sicherstellen, dass die Farbbezeichnungen in der Eigenschaft **Sub Colors** mit den Namen im ausgewählten Mehrfachmaterial übereinstimmen. Dies stellt die korrekten Farben der Leitung und ihrer Adern sicher.
6. Einzelne Aderverläufe können bearbeitet werden, wie ein [Leitungsverlauf](/Cables_WireFlex/de "Cables WireFlex/de"), z.B. zu einer [Leitungsverbindung](/Cables_CableConnector/de "Cables CableConnector/de"). Hinweis: Der erste Abschnitt eines Aderverlaufs ist immer 5 mm lang (length = 5mm) ("hardcoded", kann nicht durch den Anwender geändert werden) und steht immer senkrecht auf dem befestigen Querschnittklon. Dies ist für die korrekte Erstellung der Aderverläufe erforderlich.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Cable/de&oldid=1557622>"