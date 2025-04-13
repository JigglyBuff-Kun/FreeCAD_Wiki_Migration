---
title: FCGear Kegelrad
---
|  |
| --- |
| FCGear Kegelrad |
| Menüeintrag |
| Gear → Bevel Gear |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| v0.16 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/FCGear_BevelGear.svg) FCGear Kegelrad erstellt die Basis eines Kegelrades, ein Festkörperobjekt, das durch nachfolgende Schritte in die korrekte endgültige Form gebracht werden muss.

Unter anderem wegen der Geräuschentwicklung werden Kegelzahnräder nicht so häufig eingesetzt wie andere Getriebearten. Sie werden aber immer noch in bestimmten Bereichen eingesetzt, z. B. bei Nahrungsmittelverpackung und Lebensmittelkonserven, Grünflächen- und Gartengeräten, Maschinen wie Bohrmaschinen und Fräsen, Verdichtersysteme für den Gas- und Ölmarkt und Durchflußregelventilen.

Spiralförmige Kegelräder haben gekrümmte Zähne, die im Vergleich zu geraden Kegelrädern einen weicheren Eingriff und einen größeren Zahn zu Zahn Kontakt ermöglichen. Dadurch werden Vibrationen und Geräusche reduziert. Sie können bei hohen Geschwindigkeiten eingesetzt werden und werden normalerweise in Motorrad- und Fahrradgetrieben verwendet.

![](/images/Bevel-Gear_example.png)

Von links nach rechts: Geradverzahnung, Spiralverzahnung

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_BevelGear.svg) Bevel Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_BevelGear.svg) Bevel Gear** auswählen.
3. Ein Kegelrad (BevelGear-Objekt) wird den Standardeinstellungen entsprechend erstellt.
4. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein FCGear-BevelGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

base

* Daten-Eigenschaft**height** (`Length`): Standardwert `5`. Zahnbreite, vom Teilkreis aus gemessen.
* Daten-Eigenschaft**module** (`Length`): Standardwert `1`. Der Modul ist das Verhältnis des Teilkreis-Durchmessers zur Zähnezahl (siehe [Hinweise](#Hinweise)).
* Daten-Eigenschaft**reset\_origin** (`Bool`): Wenn `true` (Standardwert), liegt der Ursprung des Zahnrades im Mittelpunkt des Teilkreises (Zahnradboden) (siehe [Hinweise](#Hinweise)).

  :   Wenn `false`, liegt der Ursprung des Zahnrades in der Spitze des Kopfkegels.
* Daten-Eigenschaft**teeth** (`Integer`): Standardwert `15`. Zähnezahl.

computed

* Daten-Eigenschaft**angular\_backlash** (`Angle`): (schreibgeschützt) Zahnspiel (Winkel)
* Daten-Eigenschaft**dw** (`Length`): (schreibgeschützt) wirksamer Teilkreis-Durchmesser.

helical

* Daten**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical bevel gear is created – positive value → rotation direction right, negative value → rotation direction left.

involute

* Daten-Eigenschaft**pitch\_angle** (`Angle`): Standardwert `45 °`. Kopfkegelwinkel.

involute\_parameter

* Daten-Eigenschaft**pressure\_angle** (`Angle`): Standardwert `20 °`. Eingriffwinkel (siehe [Hinweise](#Hinweise)).

precision

* Daten-Eigenschaft**numpoints** (`Integer`): Standardwert `6`. Ändert das Evolventenprofil. Das Ändern des Wertes kann zu unerwarteten Ergebnissen führen.

tolerance

* Daten-Eigenschaft**backlash** (`Length`): Standardwert `0`. Zahnspiel, der Abstand zwischen den Zähnen einer Zahnpaarung.
* Daten-Eigenschaft**clearance** (`Float`): Standardwert `0.1`. Kopfspiel (siehe [Hinweise](#Hinweise)).

version

* Daten-Eigenschaft**version** (`String`):

## Hinweise

* Kegelräder sind ziemlich komplizierte Zahnräder, da ihre Eigenschaften nicht nur vom Übersetzungsverhältnis abhängen, sondern auch von dem Winkel zwischen den Zahnradachsen (Achsenwinkel). Ein Standard-Kegelrad wird für rechtwinklige Achsen mit einem Übersetzungsverhältnis von 1:1 ausgelegt.
* *pitch angle*: Der Kopfkegelwinkel entspricht dem halben Achsenwinkel bei einem Übersetzungsverhältnis von 1:1, also 45° für rechtwinklige Achsen. Kopfkegelwinkel für andere Übersetzungsverhältnisse und Achsenwinkel können in einer [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") geometrisch ermittelt werden.
* *clearance*: Für eine Zahnradpaarung ist das Kopfspiel der Abstand der Zahnspitze (Kopfkreis) des ersten Zahnrades zum Zahnlückengrund (Fußkreis) des zweiten Zahnrades.
* *module*: Den Normen der ISO (International Organization for Standardization) entsprechend bezeichnet (der) Modul die Zahngröße eines Zahnrades. Mit Pi multipliziert ergibt der Modul (m) die Teilung (p); diese ist der Abstand der entsprechenden Punkte zweier aufeinander folgenden Zähne auf dem Teilkreis (Bogenlänge): m = 1 mm (p = 3.1416), m = 2 mm (p = 6.2832), m = 4 mm (p = 12.566).
* *pressure\_angle*: Eingriffwinkel. Dieser Parameter sollte dann geändert werden, wenn ausreichendes Wissen bezüglich Zahnradgeometrie vorliegt.
* *reset\_origin*: Es wird empfohlen, den Parameter auf *false* zu setzen, um den Ursprung in die Spitze des Kopfkegels zu legen. Auf diese Weise kann das Kegelrad durch Ändern der Eigenschaft "module" über die Teilkreisebene hinaus verlängert werden.
* Die Schwachstelle dieses Werkzeuges ist, dass es die Geometrie vom Teilkreisdurchmesser in Richtung Spitze aufbaut und die Tatsache ignoriert, dass sich auch in der Gegenrichtung Geometrie befindet. Daher müssen wir die Ebene des Teilkreises ermitteln, der zum gewählten Modul gehört, um Geometrie festzulegen, die dann von dem erweitertem Kegelrad (von der Spitze aus skaliert) abgezogen wird. (siehe vorher *reset origin*)

## Nützliche Formeln

* *Teilkreisdurchmesser* = *Modul* \* *Zähnezahl*
* *Kopfkreisdurchmesser* = *Teilkreisdurchmesser* + 2 \* *Modul* \* *cos Kopfkegelwinkel*
* *Kopfwinkel 1* = *(Zähnezahl 1 + 2)* \* *(cos Kopfkegelwinkel 1)* : *(Zähnezahl 2 - 2)* \* *(sin Kopfkegelwinkel 1)*
* *Kopfwinkel 2* = *(Zähnezahl 2 + 2)* \* *(cos Kopfkegelwinkel 2)* : *(Zähnezahl 1 - 2)* \* *(sin Kopfkegelwinkel 2)*
* *Referenz-Kopfkegelwinkel 1* = *(Zähnezahl 1)* : *(Zähnezahl 2)*
* *Kopfkegelwinkel 2* = *(Zähnezahl 2)* : *(Zähnezahl 1)*
* *Achsenwinkel* = *Kopfkegelwinkel 1* + *Kopfkegelwinkel 2*

Substantiv Referenz-Kegelwinkel [TECH.]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_BevelGear/de&oldid=1543149>"