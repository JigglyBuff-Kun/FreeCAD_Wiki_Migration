---
title: FCGear Triebstockrad
---
|  |
| --- |
| FCGear Triebstockrad |
| Menüeintrag |
| Gear → Lantern Gear |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| Keine |
| Eingeführt in Version |
| v0.16 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Die Triebstockverzahnung ist eine Sonderform der Zykloidenverzahnung, bei der Wälzkreis und Teilkreis gleich groß sind. Außerdem werden die Zähne des größeren Rades in einem Getriebe durch Zylinder ersetzt. Das kleine Rad erhält eine Zykloidenverzahnung. Daraus ergibt sich eine einseitige Punktverzahnung. Triebstockverzahnungen können nur gerade verzahnt sein.

Da sie sehr einfach aufgebaut sind, gehören sie zu den ältesten Formen von Getrieben. Triebstockgetriebe werden eingesetzt, wenn große Übersetzungsverhältnisse erforderlich sind, z. B. in Drehwerken von Mühlen oder Holzumschlagskränen.

Triebstockräder mit Rollenketten sind eine kostengünstige und robuste Alternative zu Zahnstangen- und Ritzelantrieben. Durch die tangentiale Führung der gespannten Triebstockkette entlang des Triebstocks wird eine lineare Bewegung der Kette in eine Drehbewegung des Rades umgesetzt. Umgekehrt kann eine lineare Bewegung der Kette auch durch die Drehbewegung des Triebstockrades (Motorrad/Fahrrad) erreicht werden.

![](/images/Lantern-Gear_example.png)

:   Oben: Triebstockrad

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_LanternGear.svg) Lantern Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_LanternGear.svg) Lantern Gear** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

### Daten

Ein FCGear-LanternGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

accuracy

* Daten-Eigenschaft**num\_profiles** (`Integer`): Voreingestellt ist `10`. Der Wert muss normalerweise nicht geändert werden.

Basis

* Daten-Eigenschaft**bolt\_radius** (`Length`): Voreingestellt ist `1 mm`. Durchmesser des Zylinders auf der drehenden Scheibe, die das zweites "Zahnrad" darstellt.
* Daten-Eigenschaft**height** (`Length`): Voreingestellt ist `5 mm`. Wert der Zahnbreite.
* Daten-Eigenschaft**module** (`Length`): Voreingestellt ist `1 mm`. (Der) Modul, das Verhältnis von Teilkreisdurchmesser des Zahnrades zur Anzahl der Zähne (siehe [Hinweise](#Hinweise)).

gear\_parameter

* Daten-Eigenschaft**teeth** (`Integer`): Voreingestellt ist `15`. Anzahl der Zähne.

tolerance

* Daten-Eigenschaft**head** (`Float`): Voreingestellt ist `0`.

version

* Daten-Eigenschaft**version** (`String`):

## Hinweise

* *Modul*: Nach den Regeln der ISO (International Organization for Standardization) ist der Modul das (ganzzahlige) Verhältnis von Teilkreisdurchmesser zur Anzahl der Zähne. Multipliziert man den Modul (m) mit Pi, erhält man die (Zahn-)Teilung (p) (engl. pitch). Moduln (mit zugehörigen Teilungswerten): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Die Teilung ist der Abstand zwischen zwei entsprechenden Punkten (auf dem Teilkreis) zweier benachbarter Zähne.

## Nützliche Formeln

* *Kopfkreisdurchmesser* = *Modul* \* *(Anzahl der Zähne +2)*
* *Teilkreisdurchmesser* = *Modul* \* *Anzahl der Zähne*
* *Achsabstand* = (*Teilkreisdurchmesser1 (Zahnrad1)* + *Teilkreisdurchmesser2 (Zahnrad 2)*) / 2

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_LanternGear/de&oldid=1551295>"