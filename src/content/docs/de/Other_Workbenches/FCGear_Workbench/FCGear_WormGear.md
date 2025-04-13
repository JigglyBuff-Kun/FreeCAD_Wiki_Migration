---
title: FCGear Schneckenwelle
---
|  |
| --- |
| FCGear WormGear |
| Menüeintrag |
| Gear → Worm Gear |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| Kein |
| Eingeführt in Version |
| v0.16 |
| Siehe auch |
| [PartDesign Evolventenrad](/PartDesign_InvoluteGear/de "PartDesign InvoluteGear/de") |
|  |

## Beschreibung

Die Schneckenwelle kann als Spezialfall einer Schrägverzahnung angesehen werden. Man kann sie sich als Stirnrad mit nur einem Zahn vorstellen. Nun vergrößert man den Schrägungswinkel so sehr, dass sich der Zahn mehrmals um das Stirnrad windet, bevor es die gegenüberliegende Seite erreicht. Das Ergebnis wäre eine eingängige Schneckenwelle.

Eine eingängige Schneckenwelle bewegt das Schneckenrad mit jeder vollen Umdrehung (360°) um einen Zahn weiter. So ergibt sich mit einem Schneckenrad mit 24 Zähnen eine Untersetzung von 24:1. Für mehrgängige Schneckenwellen ergibt sich die Untersetzung aus der Anzahl der Zähne des Schneckenrades, geteilt durch die Anzahl der Gänge der Schneckenwelle.

Eine Schneckenwelle kann nur zusammen mit einem Schneckenrad verwendet werden. Dies wird Schneckenantrieb (oder Schneckengetriebe) genannt. Wie andere Zahnradanordnungen auch, kann ein Schneckengetriebe die Umlaufgeschwindigkeit verringern oder ein höheres Drehmoment übertragen. Ein Hauptvorteil von Schneckenantrieben ist, dass sie eine Bewegung um 90° umlenken können. Ein Schneckengetriebe ist auch selbsthemmend.

![](/images/Worm-Gear_example.png)

Dreigängige Schneckenwelle (3 Zähne)

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_WormGear.svg) Worm Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_WormGear.svg) Worm Gear** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

Ein FCGear-WormGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

base

* Daten**diameter** (`Length`): Default is `5 mm`. Pitch diameter.
* Daten**height** (`Length`): Default is `5 mm`. Value of the worm length.
* Daten**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
* Daten**reverse\_pitch** (`Bool`): Default is `false`, `true` changes the rotating direction from right to left.
* Daten**teeth** (`Integer`): Default is `3`. Number of teeth (see [Notes](#Notes)).

computed

* Daten**beta** (`Angle`): (read-only) Lead angle (see also the information in [Notes](#Notes) and [Useful formulas](#Useful_formulas)).

involute

* Daten**pressure\_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

tolerance

* Daten**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
* Daten**head** (`Float`): Default is `0`. This value is used to change the tooth height.

version

* Daten**version** (`String`):

## Hinweise

* *beta*: If the lead angle is less than 5°, it is a self-locking gear. A typical example are the tuning pegs on a guitar or ukulele.
* *clearance*: At a worm gearing, clearance is the distance between the tooth tip of the worm and the tooth root of the worm wheel.
* *module*: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth. If the module is changed, the lead angle also changes (*beta*).
* *teeth*: The number of teeth in a worm is called the number of threads. Correspondingly, one speaks of single, double or multiple thread worms. In general, mainly single worms are produced, but in special cases the number of starts can be up to four (sometimes also more). If the number of teeth is changed, *beta* also changes.
* *pressure\_parameter*: Only change the parameter, if sufficient knowledge of the gear geometry is available.

## Nützliche Formeln

* *beta (lead angle)* = arctan (*module* \* *teeth* : *pitchdiameter (diameter)*)
* *axial pitch* = *pi* \* *module* \* *teeth*
* *beta (lead angle)* = arctan (*axial pitch* : (*pitchdiameter (diameter)* \* *pi*))
* *worm length* = 4,5 \* *module* \* *pi*

## Schneckenrad

Das Schneckenrad muss von Hand erstellt werden. Ein [FCGear Evolventenrad](/FCGear_InvoluteGear/de "FCGear InvoluteGear/de") kann für eine vereinfachte Konstruktion verwendet werden. In jedem Falle wird dafür Fachwissen über Zahnräder benötigt.

![](/images/Worm-Gear_example3.png)

Schneckenwelle mit Schneckenrad

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_WormGear/de&oldid=1195239>"