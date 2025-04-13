---
title: FCGear Evolventenzahnrad
---
|  |
| --- |
| FCGear Evolventenzahnrad |
| Menüeintrag |
| Gear → Involute Gear |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| Kein |
| Eingeführt in Version |
| v0.16 |
| Siehe auch |
| [FCGear\_Zykloidenzahnrad](/FCGear_CycloidGear/de "FCGear CycloidGear/de") |
|  |

## Beschreibung

Dank des günstigen Eingriffverhältnisses und der relativ einfachen Herstellung, ist die Evolventenverzahnung die am weitesten verbreitete Zahnform in der mechanischen Konstruktion. Zahnräder findet man überall, wo Bewegung und Kraft von einem Bauteil auf ein anderes übertragen werden. Sie befinden sich z.B. in Maschinen, Autos, Uhren und Haushaltsgeräten. Die Bewegung wird oft direkt von einem Zahnrad auf ein anderes übertragen, aber manchmal auch über eine Kette. Außerdem kann die Drehrichtung geändert werden. Es ist auch möglich, mit Hilfe einer [Evolventenzahnstange](/FCGear_InvoluteRack/de "FCGear InvoluteRack/de"), eine Drehbewegung in eine lineare Bewegung umzuwandeln.

![](/images/Involute-Gear_example.png)

:   Von links nach rechts: Stirnräder mit Geradverzahnung, Schrägverzahnung, Pfeilverzahnung

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_InvoluteGear.svg) Involute Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_InvoluteGear.svg) Involute Gear** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

Ein FCGear-InvoluteGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

accuracy

* Daten-Eigenschaft**numpoints** (`Integer`): Standardwert `20`. Change of the involute profile. Das Ändern des Wertes kann zu unerwarteten Ergebnissen führen.
* Daten-Eigenschaft**simple** (`Bool`): Standardwert `false`, `true` erstellt eine vereinfachte Darstellung (ohne Zähne, nur ein Zylinder mit Teilkreisdurchmesser).

base

* Daten-Eigenschaft**height** (`Length`): Standardwert `5 mm`. Zahnbreite.
* Daten-Eigenschaft**module** (`Length`): Standardwert `1 mm`. Der Modul ist das Verhältnis des Teilkreisdurchmessers zur Zähnezahl (siehe [Hinweise](#Hinweise)).
* Daten-Eigenschaft**num\_teeth** (`Integer`): Standardwert `15`. Zähnezahl (siehe [Hinweise](#Hinweise)).

computed

* Daten-Eigenschaft**addendum\_diameter** (`Length`): Standardwert `17 mm`. Kopfkreisdurchmesser, am Zahnkopf gemessen (Außendurchmesser).
* Daten-Eigenschaft**angular\_backlash** (`Angle`): (Schreibgeschützt) Zahnspiel (-winkel), der Winkel, um den sich dieses Zahnrad drehen kann, ohne das andere Zahnrad der Paarung zu bewegen.
* Daten-Eigenschaft**pitch\_diameter** (`Length`): Standardwert `15 mm`. Der Teilkreisdurchmesser (Wälzkreisdurchmesser).
* Daten-Eigenschaft**root\_diameter** (`Length`): (Schreibgeschützt) Fußkreisdurchmesser, am Zahnlückengrund gemessen.
* Daten-Eigenschaft**transverse\_pitch** (`Length`): Standardwert `3.14 mm`. The transverse pitch.
* Daten-Eigenschaft**traverse\_module** (`Length`): Standardwert `1 mm`. The traverse module of the generated gear.

fillets

* Daten-Eigenschaft**head\_fillet** (`Float`): Standardwert `0 mm`. Kopfrundung
* Daten-Eigenschaft**root\_fillet** (`Float`): Standardwert `0 mm`. Fußrundung
* Daten-Eigenschaft**undercut** (`Bool`): Standardwert `false`, `true` ändert das Profil des Zahnlückengrundes (siehe [Hinweise](#Hinweise)).

helical

* Daten-Eigenschaft**double\_helix** (`Bool`): Standardwert `false`, `true` erstellt ein pfeilverzahntes Stirnrad (siehe [Hinweise](#Hinweise)).
* Daten-Eigenschaft**helix\_angle** (`Angle`): Standardwert `0 °`. Mit dem Schrägungswinkel β wird ein schrägverzahtes Stirnrad (Schrägstirnrad) erstellt – positiver Wert → Drehrichtung nach rechts, negativer Wert → Drehrichtung nach links (siehe [Hinweise](#Hinweise)).
* Daten-Eigenschaft**properties\_from\_tool** (`Bool`): Standardwert `false`. Wenn `true` und die Daten-Eigenschaft**helix\_angle** ist nicht Null, werden die Parameter intern für das umgedrehte Zahnrad berechnet.

hole

* Daten-Eigenschaft**Axle\_hole** (`Bool`): Standardwert `false`. `true` aktiviert eine Bohrung in der Mitte zum Verbinden mit einer Welle.
* Daten-Eigenschaft**Axle\_holesize** (`Length`): Standardwert `10 mm`. Durchmesser der Wellenbohrung.
* Daten-Eigenschaft**offset\_hole** (`Bool`): Standardwert `false`, `true` aktiviert eine versetzte Bohrung.
* Daten-Eigenschaft**offset\_holeoffset** (`Length`): Standardwert `10 mm`. Der Versatz der versetzten Bohrung.
* Daten-Eigenschaft**offset\_holesize** (`Length`): Standardwert `10 mm`. Der Durchmesser der versetzten Bohrung.

involute

* Daten-Eigenschaft**pressure\_angle** (`Angle`): Standardwert `20 °`, Eingriffwinkel (siehe [Hinweise](#Hinweise)).
* Daten-Eigenschaft**shift** (`Float`): Standardwert `0`. Erstellt eine positive oder negative Profilverschiebung (siehe [Hinweise](#Hinweise)).

tolerance

* Daten**backlash** (`Length`): Default is `0`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.
* Daten**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
* Daten**head** (`Float`): Default is `0`. This value is used to change the tooth height.
* Daten**reversed\_backlash** (`Bool`): `true` backlash decrease or `false` (default) backlash increase see [Notes](#Notes)).

version

* Daten-Eigenschaft**version** (`String`):

## Hinweise

* *beta*: When *beta* is changed, *pitch diameter* also changes. The following formula illustrates how the parameters interact: d = m \* Z / cos beta (Z = number of teeth, d = pitch diameter, m = module). This means for the spur gear: cos beta = 0 and for the helical gear: cos beta > 0. However, a helix angle of less than 10° has hardly any advantages over straight teeth.
* *clearance*: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
* *double\_gear*: To use the double helical gearing the helix angle β (*beta*) for the helical gearing must first be entered.
* *module*: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.
* *shift*: Profile shift is not merely used to prevent undercut. It can be used to adjust center distance between two gears. If a positive correction is applied, such as to prevent undercut in a pinion, the tooth thickness at top is thinner.
* *teeth*: If the number of teeth is changed, the pitch diameter also changes (*dw*).
* *undercut*: Undercut is used when the number of teeth of a gear is too small. Otherwise the mating gear will cut into the tooth root. The undercut not only weakens the tooth with a wasp-like waist, but also removes some of the useful involute adjacent to the base circle.
* *pressure\_angle*: 20° is a standard value here. The pressure angle is defined as the angle between the line-of-action (common tangent to the base circles) and a perpendicular to the line-of-centers. Thus, for standard gears, 14.5° pressure angle gears have base circles much nearer to the roots of teeth than 20° gears. It is for this reason that 14.5° gears encounter greater undercutting problems than 20° gears. Important. the pressure angle changes with a profile shift. Only change the parameter, if sufficient knowledge of the gear geometry is available.
* *reversed\_backlash*: If there are several gears, pay attention to which gear the parameter is set for.

## Begrenzungen

Ein 2D-Zahnprofil, erstellt mit der auf null gesetzten Daten-Eigenschaft**height**, kann nicht mit Elementen verwendet werden, die eine 2D-Form erfordern. Zum Beispiel akzeptieren [PartDesign Pad](/PartDesign_Pad/de "PartDesign Pad/de") und [PartDesign Wendel](/PartDesign_AdditiveHelix/de "PartDesign AdditiveHelix/de") solche Profile nicht als Basis. Technische Details (engl.) findet man unter: [issue on GitHub](https://github.com/looooo/freecad.gears/issues/97).

## Nützliche Formeln

### Standard-Stirnräder

Hier bezieht sich “standard” auf Stirnräder ohne Profilverschiebungsbeiwert (

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4)).

Grundlegende Formeln für sowohl Innenräder als auch Stirnräder

| Symbol | Begriff | Formel | FCGear-Parameter |
| --- | --- | --- | --- |
| m {\displaystyle m} {\displaystyle m} | (der) *Modul* | - | module {\displaystyle {\texttt {module}}} {\displaystyle {\texttt {module}}} |
| z {\displaystyle z} {\displaystyle z} | *Zähnezahl* | - | teeth {\displaystyle {\texttt {teeth}}} {\displaystyle {\texttt {teeth}}} |
| α {\displaystyle \alpha } {\displaystyle \alpha } | *Eingriffwinkel* | Üblicherweise     α =  20  ∘ {\displaystyle \alpha =20^{\circ }} {\displaystyle \alpha =20^{\circ }} | pressure  \_   angle {\displaystyle {\texttt {pressure}}{\\_}{\texttt {angle}}} {\displaystyle {\texttt {pressure}}{\_}{\texttt {angle}}} |
| d {\displaystyle d} {\displaystyle d} | *Teilkreisdurchmesser* oder *Wälzkreisdurchmesser* | z ⋅ m {\displaystyle z\cdot m} {\displaystyle z\cdot m} | dw {\displaystyle {\texttt {dw}}} {\displaystyle {\texttt {dw}}} |
| h  a  ∗ {\displaystyle h\_{a}^{\*}} {\displaystyle h_{a}^{*}} | *Addendum Coefficient* | Üblicherweise      h  a  ∗ = 1 {\displaystyle h\_{a}^{\*}=1} {\displaystyle h_{a}^{*}=1} | h  a  ∗ = 1 +   head {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}} {\displaystyle h_{a}^{*}=1+{\texttt {head}}} |
| h  f  ∗ {\displaystyle h\_{f}^{\*}} {\displaystyle h_{f}^{*}} | *Dedendum Coefficient* | Üblicherweise      h  f  ∗ = 1.25 {\displaystyle h\_{f}^{\*}=1.25} {\displaystyle h_{f}^{*}=1.25} | h  f  ∗ = 1 +   clearance {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}} {\displaystyle h_{f}^{*}=1+{\texttt {clearance}}} |
| h  a {\displaystyle h\_{a}} {\displaystyle h_{a}} | *Kopfhöhe* | h  a =  h  a  ∗ ⋅ m {\displaystyle h\_{a}=h\_{a}^{\*}\cdot m} {\displaystyle h_{a}=h_{a}^{*}\cdot m} | - |
| h  f {\displaystyle h\_{f}} {\displaystyle h_{f}} | *Fußhöhe* | h  f =  h  f  ∗ ⋅ m {\displaystyle h\_{f}=h\_{f}^{\*}\cdot m} {\displaystyle h_{f}=h_{f}^{*}\cdot m} | - |
| h {\displaystyle h} {\displaystyle h} | *Zahnhöhe* | h =  h  a +  h  f {\displaystyle h=h\_{a}+h\_{f}} {\displaystyle h=h_{a}+h_{f}}   Üblicherweise     h = 2.25 ⋅ m {\displaystyle h=2.25\cdot m} {\displaystyle h=2.25\cdot m} | - |
| x {\displaystyle x} {\displaystyle x} | *Profilverschiebungsfaktor* | Für Standard-Stirnräder,     x = 0 {\displaystyle x=0} {\displaystyle x=0} | shift {\displaystyle {\texttt {shift}}} {\displaystyle {\texttt {shift}}} |

Grundlegende Formeln für Standard-Stirnräder

| Symbol | Begriff | Formel |
| --- | --- | --- |
| d  a {\displaystyle d\_{a}} {\displaystyle d_{a}} | *Kopfkreisdurchmesser* | d  a = d + 2 ⋅  h  a {\displaystyle d\_{a}=d+2\cdot h\_{a}} {\displaystyle d_{a}=d+2\cdot h_{a}}   Üblicherweise      d  a = ( z + 2 ) ⋅ m {\displaystyle d\_{a}=(z+2)\cdot m} {\displaystyle d_{a}=(z+2)\cdot m} |
| d  f {\displaystyle d\_{f}} {\displaystyle d_{f}} | *Fußkreisdurchmesser* | d  f = d − 2 ⋅  h  f {\displaystyle d\_{f}=d-2\cdot h\_{f}} {\displaystyle d_{f}=d-2\cdot h_{f}}   Üblicherweise      d  f = ( z − 2.5 ) ⋅ m {\displaystyle d\_{f}=(z-2.5)\cdot m} {\displaystyle d_{f}=(z-2.5)\cdot m} |

Grundlegende Formeln für Standard-Innenräder

| Symbol | Begriff | Formel |
| --- | --- | --- |
| d  a {\displaystyle d\_{a}} {\displaystyle d_{a}} | *Kopfkreisdurchmesser* | d  a = d − 2 ⋅  h  a {\displaystyle d\_{a}=d-2\cdot h\_{a}} {\displaystyle d_{a}=d-2\cdot h_{a}}   Üblicherweise      d  a = ( z − 2 ) ⋅ m {\displaystyle d\_{a}=(z-2)\cdot m} {\displaystyle d_{a}=(z-2)\cdot m} |
| d  f {\displaystyle d\_{f}} {\displaystyle d_{f}} | *Fußkreisdurchmesser* | d  f = d + 2 ⋅  h  f {\displaystyle d\_{f}=d+2\cdot h\_{f}} {\displaystyle d_{f}=d+2\cdot h_{f}}   Üblicherweise      d  f = ( z + 2.5 ) ⋅ m {\displaystyle d\_{f}=(z+2.5)\cdot m} {\displaystyle d_{f}=(z+2.5)\cdot m} |

Grundlegende Formeln für eine Standard-Stirnradpaarung

| Symbol | Begriff | Formel |
| --- | --- | --- |
| a {\displaystyle a} {\displaystyle a} | *Achsabstand* | a =     d  1 +  d  2 2 {\displaystyle a={\frac {d\_{1}+d\_{2}}{2}}} {\displaystyle a={\frac {d_{1}+d_{2}}{2}}} |
| c {\displaystyle c} {\displaystyle c} | *Kopfspiel* | c  1 =  h  f 2 −  h  a 1 {\displaystyle c\_{1}=h\_{f2}-h\_{a1}} {\displaystyle c_{1}=h_{f2}-h_{a1}}   c  2 =  h  f 1 −  h  a 2 {\displaystyle c\_{2}=h\_{f1}-h\_{a2}} {\displaystyle c_{2}=h_{f1}-h_{a2}}   Üblicherweise     c = 0.25 ⋅ m {\displaystyle c=0.25\cdot m} {\displaystyle c=0.25\cdot m} |

* **Schrägverzahnung und Pfeilverzahnung**
  + *Teilkreisdurchmesser (dw)* = *Modul* \* *Zähnezahl* : *cos beta*
  + *Achsabstand* = *(Teilkreisdurchmesser (dw) 1 + Teilkreisdurchmesser (dw) 2)* : 2
  + *Kopfkreisdurchmesser* = *Teilkreisdurchmesser (dw)* + 2 \* *Modul*
  + *Modul* = *Teilkreisdurchmesser (dw)* \* *cos beta* : *Zähnezahl*

## Skripten

Die Macht von Python man nutzen muss, Zahnräder zu modellieren automatisch:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteGear.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteGear/de&oldid=1529369>"