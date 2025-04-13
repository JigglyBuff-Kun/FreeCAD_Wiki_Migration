---
title: FCSpring Helix Variable
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Makro FCSpring Helix Variable                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Opis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Stvara oprugu s varijablom heliksa. Otkriveni su: Površina (smjer lica), Cilindar (radijus), elipsa (MinorRadius), sfera (radijus), toroid (radijus1), ravnina (smjer), crta (slijedite smjer), točka (položaj vrha XYZ) Ako nije otkriven nijedan objekt (nije odabir), opruga se stvara u točki XYZ 0., 0., 0. See the [Primjeri](https://www.freecadweb.org/wiki/Macro_FCSpring_Helix_Variable/hr#Primjeri) Makronaredba verzije : 01.17 Datum zadnje izmjene : 2020/11/12 Verzija FreeCAD : 0.19 Preuzimanje datoteka : Download the [the Icons](https://forum.freecadweb.org/download/file.php?id=80844) in .zip file Autor : Mario52 |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Preuzimanje datoteka                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Download the [the Icons](https://forum.freecadweb.org/download/file.php?id=80844) in .zip file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Linkovi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Makro recepti](/index.php?title=Macros_recipes/hr&action=edit&redlink=1 "Macros recipes/hr (page does not exist)") [Kako instalirati makronaredbe](/How_to_install_macros/hr "How to install macros/hr") [Kako prilagoditi alatne trake](/Customize_Toolbars/hr "Customize Toolbars/hr")                                                                                                                                                                                                                                                                                                                                                  |
| Verzija                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 01.17                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Datum zadnje izmjene                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2020/11/12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Verzije FreeCAD-a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Zadani prečac                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Vidi također                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Description

## Opis

Ova makronaredba stvara proljeće s prilagodljivim, svaki okret može promijeniti proljetnu konfiguraciju koja se može spremiti u datoteku s ekstenzijom **.FCSpring**  
Otkriveni su: Površina (smjer lica), Cilindar (radijus), elipsa (MinorRadius), sfera (radijus), toroid (radijus1), ravnina (smjer), crta (slijedite smjer), točka (položaj vrha XYZ)  
 Ako nije otkriven nijedan objekt (nije odabir), opruga se stvara u točki XYZ 0., 0., 0.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro>">raw code</a>

![](/images/TruncateSpring00.png)

FCSpring Helix Variable

## Usage

## Upotreba

Ovaj odjeljak služi za konfiguraciju opruge

Shematski detalj konfiguracije opruga

![](/images/Macro_TruncateSpring_01.png)

#### **GUI**

![](/images/Macro_FCSpring_Helix_Variable_01.png)

#### Configuration

#### **Prvi dio, konfiguracija opruge**

- 10 coils ![](/images/SpinBox.svg) **Number of coil** : Ukupno zavojnice na oprugu. Zadano = 10
- 20,000 mm ![](/images/SpinBox.svg) **Radius of spring** : Radijus opruge. Zadano = 20.0
- 15,000 mm ![](/images/SpinBox.svg) **Pitch of spring** : Smjer opće opruge. Zadano = 15.0
- 5 ( 72 points ) ![](/images/SpinBox.svg) **Precision of turn** : Preciznost okretanja preciznost odgovara broju točaka za 1 okretanje zavojnice i izračunava se: preciznost (broj točaka) = (pitch / (360 / preciznost)). Zadano = 5 (72 boda)
- 20,000 mm ![](/images/SpinBox.svg) : A kúp nagy körének sugara (ellenőrizze a ![](/images/CheckBoxTrue.svg) Spring conical használatra)
- **Spring conical** : Dajte velikom promjeru konusa što će dimenzija uvijek biti veća od radijusa

* ![](/images/CheckBoxFalse.svg) Angles : Odabir potvrdnog okvira za aktiviranje funkcije Početak i kraj kuta zavojnice prema početnim postavkama nije  
  . Ako je funkcija označena, točnost se automatski postavlja na 1 (360 bodova po okretu 1 bod = 1 stupanj)

- 0 deg ![](/images/SpinBox.svg) **Begin** : Započnite kut prve zavojnice opruge.
- 360 deg ![](/images/SpinBox.svg) **End** : Završni kut posljednje zavojnice opruge.

![](/images/Macro_FCSpring_Helix_Variable_02.png)

#### Type line

#### **Drugi odjeljak, upišite redak**

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_BSpline.svg) Bspline **BSpline**: Upišite liniju BSpline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Wire.svg) Wire **Wire**: Upišite line Wire.
- ![](/images/CheckBoxFalse.svg) ![](/images/Draft_Point.svg) Points **Points**: Označite potvrdni okvir ako je potvrdni okvir aktiviran.
- ![](/images/CheckBoxFalse.svg) Reverse **Reverse**: Oznaka obrnuto ako je potvrdni okvir aktiviran, smjer proljeća mijenja

![](/images/Macro_FCSpring_Helix_Variable_03.png)

#### Options

#### **Treći odjeljak, odabir**

Ovaj je odjeljak prikazan ako je odabran objekt. Objekt tipa je prikazan u uređivaču teksta

Objekt može biti linija, 2 boda, krug, žica ... jedna osa se automatski stvara duljina opruge

Otkrivanje: cilindar (radijus), sfera (radijus), toroid (radijus), konus (mali radijus), krug (radijus), luk (radijus), elipsa (mali radijus)

- Normal Norm.: Ako je odabran jedan krug **Norm** ne mijenja radijus kruga (zadano)
  - Adapt Rad.: Ha megnyomja a Normal 'gombot, akkor a gomb Adapt Rad. Értékre vált. A rugót az érzékelt sugarahoz igazítják (Ha egy sugarat érzékelnek)
- Point Mouse: Ako je miš na jednom licu, proljeće je na ovoj točki (zadano)
  - Center Face: Ha megnyomja a Point Mouse gombot, akkor a gomb Center Face értékre változik, és a rugó a kiválasztott középső felületre jön létre.

* ![](/images/CheckBoxFalse.svg) Position **Položaj**: Ako se odaberu dva objekta (prva os, drugo proljeće), ovaj checkBox je omogućen i možete izmijeniti objekt 2 položaja (opruga) duž objekta 1 (os)

- Circle : Ako su tri točke kliknute mišem, gumb Circle je omogućen i moguće je stvoriti krug koji može poslužiti kao baza za proljeće

![](/images/Macro_FCSpring_Helix_Variable_02_1.png)

#### Position (0)(xx)

#### Position (0)(xx)

(0)(xx) : Odabir broja, duljina u mm stvorene osi x 10, tj. Broj točaka za pomicanje opruge osi

- Begin/End: Postavite oprugu na početnu, srednju i krajnju os
- Reverse Spr.: Okrenite oprugu osi
- 0,1 mm ![](/images/SpinBox.svg): Pomicanje opruge s preciznošću (0,1 mm) duž svoje osi
- Reverse Count.: Obrnuti brojač ex: Početak 0 do 10 .. ili Kraj 0 do 10 ..
- **Slider**: Postavite oprugu na njegovu os

![](/images/Macro_FCSpring_Helix_Variable_02_2.png)

#### Coil special dimension

#### Četiri dijela, zavojnica posebne duljine

- Num: 2 ![](/images/SpinBox.svg) **Numbering of coil** : Numeriranje zavojnice za izmjenu. (Zadano : none)

* ![](/images/CheckBoxFalse.svg) Smoothing **Smoothing** Ovaj checkBox otkriva jedan spinBox za određivanje stupnja izglađivanja maksimalna vrijednost je vrijednost preciznosti -1 (ova opcija je još uvijek u fazi prototipa i rezultat može biti zadovoljavajući ili potpuno pogrešan)

- 0,000 mm ![](/images/SpinBox.svg) **Pitch of coil** : Smjestite zavojnicu za izmjenu. (Defaut: nitko)
- 15.0 mm : Ako se pritisne tipka, na vrijednost "Pitch of string" utječe "Pitch of coil" (ova vrijednost se automatski poravnava s vrijednošću Pitch stringa)
- 0,000 mm ![](/images/SpinBox.svg) **Radius of coil** : Radijus izmjenjivača zavojnice. (Zadano : none)
- 20.0 mm : Ako se pritisne tipka, na "Radius of coil" utječe vrijednost "Radius string" (ova vrijednost se automatski poravnava s vrijednošću Radius stringa)

* ![](/images/FCSpring_Helix_Variable_Icon_01.png) Accept the value modified : Gumb za prihvaćanje modifikacije nakon odabira numeracije svitka i izmjena visine zavojnice.

- **Text edit** : Ovaj prozor prikazuje sve izmijenjene zavojnice.
- Clear : Očistite uređivač teksta
- Zoom : Gumb "Zoom" povećava tekstualni prozor

![](/images/Macro_FCSpring_Helix_Variable_04.png)

#### Command

#### Naredbe

- ![](/images/FCSpring_Helix_Variable_Icon_02.png) Load : Gumb Čitanje otvara dijaloški okvir za čitanje datoteke **.FCSpring**.
- ![](/images/FCSpring_Helix_Variable_Icon_03.png) Save : Gumb Spremi otvara dijaloški okvir za spremanje datoteke **.FCSpring** s modificiranom proljetnom konfiguracijom ili ne.
- ![](/images/FCSpring_Helix_Variable_Icon_02b.png) Load Coordinates : Otvorite dijaloški okvir da biste pročitali datoteku **.FCSpringCoor** (sve koordinate točaka proljeća).
- ![](/images/FCSpring_Helix_Variable_Icon_02b.png) Load Coordinates : Otvorite dijaloški okvir da biste spremili datoteku **.FCSpringCoor** (sve koordinate točaka proljeća).
- ![](/images/FCSpring_Helix_Variable_Icon_04.png) Quit : Zatvorite makronaredbu.
- ![](/images/FCSpring_Helix_Variable_Icon_05.png) Reset : Ponovno postavite makronaredbu na zadanu konfiguraciju.
- ![](/images/FCSpring_Helix_Variable_Icon_06.png) Launch : Pokrenite makronaredbu i stvorite konfigurirano proljeće.

* Help : Ez a gomb megjeleníti a wiki oldalt a FreeCAD böngészőben.

![](/images/Macro_FCSpring_Helix_Variable_05.png)

## Report view

## Prikaz izvješća

Prikaz izvješća prozora prikazao je svu izmijenjenu vrijednost.

![](/images/Macro_FCSpring_Helix_Variable_06.png)

## Example spring

## Primjer proljeće

Primjer za modificirano proljeće

![](/images/Macro_FCSpring_Helix_Variable_07.png)

## Example Report view

## Primjer prikaza izvješća

Kada se makro pokrene, u tabličnom se obliku prikazuje cijeli popis skretanja.

Ovdje su podaci o izvoru iznad i prikazani u prikazu izvješća
![](/images/Macro_FCSpring_Helix_Variable_08.png)

## Icon

## Ikona

Preuzmite sliku i kopirajte datoteku u svoj makro repertoar.

Kliknite sliku, u novom prozoru postavite pokazivač miša iznad slike, kliknite desnu tipku miša i učinite "Spremi cilj kao ..."

Gumb alatne trake ![Button](/images/FCSpring_Helix_Variable.png)

Button

Ikone makronaredbi

Macro icons

![](/images/FCSpring_Helix_Variable_Icon_01.png) ![](/images/FCSpring_Helix_Variable_Icon_02.png) ![](/images/FCSpring_Helix_Variable_Icon_02b.png) ![](/images/FCSpring_Helix_Variable_Icon_03.png) ![](/images/FCSpring_Helix_Variable_Icon_03b.png) ![](/images/FCSpring_Helix_Variable_Icon_04.png) ![](/images/FCSpring_Helix_Variable_Icon_05.png) ![](/images/FCSpring_Helix_Variable_Icon_06.png)

## Skripta

## Script

**Macro_FCSpring_Helix_Variable.FCMacro**

Preuzmite makronaredbu u Gist [Macro_FCSpring_Helix_Variable](https://gist.github.com/mario52a/68c81c32a0727a693d3a)

## Installation

## Installation

A fenti fájl egy makró GitHub kód formájában. Töltse le a Zip fájlt a GitHub-on, majd kövesse a próbabábut makrók telepítésére vonatkozó útmutatásait, amely a következő webhelyen látható: [installing FreeCAD macros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## Primjeri

- ![Valves Assembly IN EX with permit and created by r.tec see Inlet & Exhaust Valves Assembly and Spiralfeder thanks r.tec](/images/Valves_Assembly_IN_EX.png)

  Valves Assembly IN EX with permit and created by r.tec see [Inlet & Exhaust Valves Assembly](http://forum.freecadweb.org/viewtopic.php?f=24&t=14183) and [Spiralfeder](http://forum.freecadweb.org/viewtopic.php?f=13&t=14143) thanks r.tec

* ![](/images/Macro_FCSpring_Helix_Variable_12.png)
* ![](/images/Macro_FCSpring_Helix_Variable_13.png)

* ![](/images/Macro_FCSpring_Helix_Variable_14.png)
* ![](/images/Macro_FCSpring_Helix_Variable_15.png)

* ![](/images/Macro_FCSpring_Helix_Variable_16.png)
* ![](/images/Macro_FCSpring_Helix_Variable_17.png)

* ![](/images/Macro_FCSpring_Helix_Variable_18.png)

- [![Difference between Smooth (here 71 with precision 5 (72 points)) and normal](/images/Macro_FCSpring_Helix_Variable_19.png)](/File:Macro_FCSpring_Helix_Variable_19.png  "Difference between Smooth (here 71 with precision 5 (72 points)) and normal")

  Difference between Smooth (here 71 with precision 5 (72 points)) and normal

- ![Example](/images/Macro_FCSpring_Helix_Variable.gif)

  Example

- ![Example create conical spring](/images/Macro_FCSpringHelixVariable_Example_02.gif)

  Example create conical spring

- ![Primjer stvaranja opruge na krugu](/images/Macro_FCSpringHelixVariable_Spring_On_Circle.gif)

  Primjer stvaranja opruge na krugu

- ![Pomaknite se duž osi](/images/Macro_FCSpringHelixVarable_Spring_Along_Axis.gif)

  Pomaknite se duž osi

## Links

## Linkovi

Rasprava na forumu [Try to do a Spring](http://forum.freecadweb.org/viewtopic.php?f=3&t=8313&p=68161#p68161)

## Projekt

opružna opruga

omekšati priključke :done

promijenite promjer na bilo koju zavojnicu :done

## Verzija

11/07/2024 version 01.19 delete **"import WebGui"** replaced by **"import webbrowser"** and optimise filter for **OS Linux Mint**

2023/09/01 Version 0.18c adding **FreeCAD.activeDocument().recompute(None,True,True)\***Texte en italique\* "bug" fixed by **Syres** thanks
[How to draw polygonal spirals in Freecad?](https://forum.freecad.org/viewtopic.php?p=703568#p703568)

2023/09/01 Version 0.18b correct (adapt) the code :

```
self.PB_Adapt_Radius.setStyleSheet("background-color: QPalette.Base")

```

to

```
self.PB_Adapt_Radius.setStyleSheet("QPushButton {background-color: QPalette.Base}")

```

2022/03/16 Version 0.18 : adding scrollBar, possibility docking Left or Right, restore the chrono _(time.time())_, memorise the last FilePath

```
####chrono################
import time
global depart ; depart  = 0.0
global arrivee; arrivee = 0.0
def chrono(switch):    # 0=depart autre=stop
#time.strftime('%X %x %Z')#'15:44:07 12/14/19 Paris, Madrid'
    global depart
    global arrivee
    try:
        if switch == 0:
            depart = time.time()#time.clock()
            App.Console.PrintMessage("Chrono begin   : "+str(time.strftime('%X'))+"\n")
        else:
            arrivee = time.time()#time.clock()
            App.Console.PrintMessage("Chrono end     : "+str(time.strftime('%X'))+"\n")
            parcouru = ((arrivee - depart)/60.0)
            App.Console.PrintError("Time execution : "+str("%.3f" % parcouru)+" min"+"\n\n")
        return parcouru
        FreeCADGui.updateGui()
    except Exception: None
####chrono################

```

2020/11/12 Version=01.17 : suppress the timer chrono !!

2020/10/18 Ver 00.16b : i suppress the test on FC 18 line 56, i suppress the timer chrono and i wait one little

2020/05/01 Ver 00.16: correction error file (save and load) cause "label_11_Name" suppressed...

2020/04/11 Ver 01.15: layout and little presentation

2019/05/03 Ver 01.14: compatible FreeCAD 0.19.16523 (Git)

03/04/2017: ver 01.12: correction bug line 2314 add "global ui"

03/04/2017: ver 01.12: correction bug line 2314 add "global ui"

11/12/2016: ver 01.11: Adding Position of the spring on a selected object

10/09/2016: ver 01.10: Adding Button "Zoom" enlarge the textedit window

04/09/2016: ver 01.09: add smoothing

16/03/2016: ver 01.08 : correct and add "int()" to debutAngle and finAngle (read file)

02/03/2016: ver 01.07 : add option reverse spring

08/02/2016: ver 01.06 : correct bug angle cause "modifyAngle = int(file.readline().rstrip('\n\r')) # 9" modifyAngle is int() not char

07/01/2015: ver 01.05 : adding "Try ...Except" (data cone) for compatibility with old version

07/01/2015: ver 01.04 : adding spring conical and modify the path to "UserAppData" and adding the icone.

07/12/2014: ver 01.03 : new version with radius coil adjustable

17/11/2014: ver 1.02 : new version with GUI and modification any coil and save or load the data to disk.

10/11/2014: (23h20) correction of the modification

```
ligne.Placement = App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

10/11/2014: modify line 44 :

```
a = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

to

```
ligne = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

6/11/2014 : adding "makeBSpline" and configuration

## Ograničenja

Za vrijeme testova su ovdje greške koje sam dobio!

- ![For the moment the macro is not adapted for the square, rectangle... Only circle work well](/images/Macro_FCSpring_Helix_Variable_20.png)

  For the moment the macro is not adapted for the square, rectangle...  
  Only circle work well

- ![ACCESS VIOLATION](/images/Macro_FCSpring_Helix_Variable_09.png)

  ACCESS VIOLATION

- ![TCollection_IndexedDataMap](/images/Macro_FCSpring_Helix_Variable_10.png)

  TCollection_IndexedDataMap

- ![Wrong usage of punctual sections](/images/Macro_FCSpring_Helix_Variable_11.png)

  Wrong usage of punctual sections

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCSpring_Helix_Variable/hr&oldid=1450789>"
