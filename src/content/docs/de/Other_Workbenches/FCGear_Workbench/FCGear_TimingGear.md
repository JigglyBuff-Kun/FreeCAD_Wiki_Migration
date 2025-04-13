---
title: FCGear Zahnriemenscheibe
---
|  |
| --- |
| FCGear Zahnriemenscheibe |
| Menüeintrag |
| Gear → Timing Gear |
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

Ein Zweck von Zahnriemen ist die Synchronisation von Kurbelwelle und Nockenwelle eines Verbrennungsmotors. Die Kurbelwelle dreht sich, um die Kolben in den Zylindern auf und ab zu bewegen. Die Nockenwelle bewirkt das Öfnen und Schließen der Ein- und Auslassventile der Zylinder. Diese Komponenten (eines Zahnriemenantriebs) sind wichtig für einen korrekten Ablauf aller Bewegungen eines Motors.

Zahnriemenscheiben werden mit einem Zahnriemen (Steueriemen) verbunden. (engl. timing gear kann auch (Steuer-) Kettenantrieb bedeuten)

![](/images/Timing-Gear_example.png)

Oben: Zahnriemenscheibe

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_TimingGear.svg) Timing Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_TimingGear.svg) Timing Gear** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

Ein FCGear-TimingGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten**height** (`Length`): Voreingestellt ist `5 mm`. Wert der Zahnbreite.
* Daten**teeth** (`Integer`): Voreingestellt ist `15`. Anzahl der Zähne.
* Daten**type** (`Enumeration`): Voreingestellt ist `gt2`. Art des Zahnriemens – Teilung des Zahnriemens (siehe [Hinweise](#Hinweise)).

computed

* Daten**h** (`Length`): (nur Lesezugriff) Radiale Zahnhöhe.
* Daten**offset** (`Length`): (nur Lesezugriff) X-Versatz des zweiten Bogenmittelpunktes.
* Daten**pitch** (`Length`): (nur Lesezugriff) Zahnteilung.
* Daten**r0** (`Length`): (nur Lesezugriff) Radius des ersten Bogens.
* Daten**r1** (`Length`): (nur Lesezugriff) Radius des zweiten Bogens.
* Daten**rs** (`Length`): (nur Lesezugriff) Radius des dritten Bogens.
* Daten**u** (`Length`): (nur Lesezugriff) Radialer Unterschied zwischen Teilkreisdurchmesser und Kopfkreisdurchmesser.

version

* Daten-Eigenschaft**version** (`String`):

## Hinweise

* *type*: Bestimmt die Teilung der Zahnriemen (Abstand von Zahnmitte zu Zahnmitte aufeinanderfolgender Zähne). GT2 steht für eine Teilung von 2 mm, GT3 für eine von 3 mm, GT5 für eine von 5 mm usw..

## Nützliche Formeln

* *Kopfkreisdurchmesser* = *Teilkreisdurchmesser* + 2 \* *Modul*
* *Riemenlänge* = 2 \* *Achsabstand* + *Zahnriementeilung* : 2 \* *(Zähne 1 + 2)* + *Zahnriementeilung²* : 4 \* pi² \* *Achsabstand* \* *(Zähne 1 - 2)²*
* *Achsabstand* = *Riemenlänge* : 4 - *Zahnriementeilung* : 8 \* *(Zähne 1+2)* + ¼ \* sqrt [*Riemenlänge* - ½ \* *Zahnriementeilung* \* *(Zähne 1+2)²* - 2 \* *Zahnriementeilung²* \* *(Zähne 1+2)²* : pi²]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_TimingGear/de&oldid=1551297>"