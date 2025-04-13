---
title: FCTreeView
---

|                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro FCTreeView                                                                                                                                                                                                                                                                                                                                                                                                         |
| Opis                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Ova makronaredba prikazuje sve objekte projekta na jednom popisu s opcijama sortiranja pretraživanja po nazivu oznake ... Makronaredba verzije : 00.07 Datum zadnje izmjene : 2018-05-06 Verzija FreeCAD : 0.17 and below Preuzimanje datoteka : [Macro FCTreeView Icon package](https://forum.freecadweb.org/download/file.php?id=70498) unzip the .zip file and copy the icon in your macro directory. Autor : Mario52 |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                  |
| Preuzimanje datoteka                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Macro FCTreeView Icon package](https://forum.freecadweb.org/download/file.php?id=70498) unzip the .zip file and copy the icon in your macro directory.                                                                                                                                                                                                                                                                  |
| Linkovi                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Makro recepti](/index.php?title=Macros_recipes/hr&action=edit&redlink=1 "Macros recipes/hr (page does not exist)") [Kako instalirati makronaredbe](/How_to_install_macros/hr "How to install macros/hr") [Kako prilagoditi alatne trake](/Customize_Toolbars/hr "Customize Toolbars/hr")                                                                                                                                |
| Verzija                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 00.07                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Datum zadnje izmjene                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2018-05-06                                                                                                                                                                                                                                                                                                                                                                                                               |
| Verzije FreeCAD-a                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.17 and below                                                                                                                                                                                                                                                                                                                                                                                                           |
| Zadani prečac                                                                                                                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Vidi također                                                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Opis

Makro za popis svih objekata u projektu na jednom popisu bez hijerarhije, opcije sortiranja po imenu, oznaci, vidljivosti, grupi, po duljini opcije pretraživanja po nazivu, naljepnici .... bez velikih i malih slova ili s osjetljivim i velikim slovima i odabir svih objekata prikazanih u makro prozor.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro>">raw code</a>

## Kako koristiti

![Macro FCTreeView](/images/FCTreeView.gif)

Macro FCTreeView window

### Odjeljak **Window**

Naslov prikazuje opciju, broj i vrstu prikazanih objekata

- **O** = Objects
- **N** = Name
- **L** = Label
- **T** = Total
- **G** = Group
- **S** = Single
- **V** = Visible
- **H** = Hidden

Ako je odabran jedan objekt: prikazuje se baza položaja, rotacija i središte mase (ako je dostupno !)

![Icon used for the Name of object](/images/Macro_FCTreeView_00.png) Ikona koja se koristi za Naziv objekta (klizač je obojen u plavo)

![Ikona koja se koristi za oznaku objekta](/images/Macro_FCTreeView_05.png) Ikona koja se koristi za oznaku objekta (klizač je obojen plavom bojom)

[![Ikona koja se koristi za vizualizaciju ako je objekt status Vidljiv (klik mišem za skriven)](/images/Macro_FCTreeView_01.png)](/File:Macro_FCTreeView_01.png  "Ikona koja se koristi za vizualizaciju ako je objekt status Vidljiv (klik mišem za skriven)") Ikona koja se koristi za vizualizaciju ako je objekt status Vidljivo (klik mišem za Skriven) (klizač je obojen zeleno)

[![Ikona koja se koristi za vizualizaciju ako je objekt status Skriven (klik miša za vidljivi)](/images/Macro_FCTreeView_02.png)](/File:Macro_FCTreeView_02.png  "Ikona koja se koristi za vizualizaciju ako je objekt status Skriven (klik miša za vidljivi)") Ikona koja se koristi za vizualizaciju ako je objekt status Skriven (klik miša za Vidljivo) (klizač je obojen crvenom bojom)

[![Ikona koja se koristi za ime sadrži objekte (ili grupu mapa)](/images/Macro_FCTreeView_17.png)](/File:Macro_FCTreeView_17.png  "Ikona koja se koristi za ime sadrži objekte (ili grupu mapa)") Ikona koja se koristi za ime sadrži objekte (ili grupu mapa)

[![Ikona koja se koristi za ime sadrži objekte (ili grupu mapa)](/images/Macro_FCTreeView_03.png)](/File:Macro_FCTreeView_03.png  "Ikona koja se koristi za ime sadrži objekte (ili grupu mapa)") Ikona koja se koristi za ime sadrži objekte (ili grupu mapa)

[![Ikona korištena za prikaz pojedinačnog objekta (ne grupe)](/images/Macro_FCTreeView_04.png)](/File:Macro_FCTreeView_04.png  "Ikona korištena za prikaz pojedinačnog objekta (ne grupe)") Ikona korištena za prikaz pojedinačnog objekta (ne grupe)

### Odjeljak **Sort by :**

![](/images/Macro_FCTreeView_10.png) Name Ikona koja se koristi za flip/flop normalan/obrnuti unos podataka sortira po imenu

![](/images/Macro_FCTreeView_11.png) Label Ikona koja se koristi za flip/flop normalan/obrnuti unos podataka sortira prema oznaci

![](/images/Macro_FCTreeView_12.png) Visible Ikona koja se koristi za flip/flop normalan/obrnuti unos podataka sortirati prema Visibile/Hidden

![](/images/Macro_FCTreeView_13.png) Group Ikona koja se koristi za flip/flop normalan/obrnuti unos podataka sortira prema Group/Single object

![](/images/Macro_FCTreeView_19.png) Length Ako je potvrdni okvir označen, sortiranje se kreira prema duljini s gumbom na koji ste kliknuli (ime, oznaka ...)

### Odjeljak**Global**

![](/images/Macro_FCTreeView_21.png) Split flip/flop Podijeli popis imena

![](/images/Macro_FCTreeView_22.png) Split flip/flop Podijelite popis imena i oznaka

![](/images/Macro_FCTreeView_14.png) Expend flip/flop popis podataka Fold/Expend

![](/images/Macro_FCTreeView_15.png) Expend flip/flop popis podataka Expend/Fold

![](/images/Macro_FCTreeView_06.png) Visibility flip/flop normal/Vidljivost

![](/images/Macro_FCTreeView_07.png) Group flip/flop Normalan/Grupa

![](/images/Macro_FCTreeView_16.png) Reload ponovno učitati podatke u projektu

![](/images/Macro_FCTreeView_18.png) Original povratak u izvornu organizaciju nakon vidljivosti operacije/Skriven

![](/images/Macro_FCTreeView_01.png) All Visible vizualizirati je li objekt status Vidljiv

![](/images/Macro_FCTreeView_02.png) All Hidden vizualizirajte je li objekt skriven

### Odjeljak**Search**

![](/images/Macro_FCTreeView_20.png) Clear Izbrišite uređivanje retka pretraživanja

#### Mogućnosti radio gumba **Search**:

- **("NLwc")** : Pretraživanje po nazivu i oznaci **W**ithout respecting the sensitive **C**ase

- **("Nsc")** : Pretraživanje po nazivu i poštivanje **S**ensitive **C**ase

- **("Lwc")** : Search by Label **W**ithout poštujući osjetljivo **C**ase

- **("NLsc")** : Pretraživanje po nazivu i oznaci i poštivanje **S**ensitive **C**ase

- **("NLwsc")** : Search by Name and Label in Word and respecting the **S**ensitive **C**ase (isti izbor panela FreeCAD-a)

- **(Nu)**  : Pretraživanje po numeričkoj vrijednosti (radijus, duljina, kut .....) vidi odjeljak o verziji

![](/images/Macro_FCTreeView_23.png) Select flip/flop za odabrane sve objekte prikazane u prozoru

![](/images/Macro_FCTreeView_24.png) Unselected flip/flop Unselected svi objekti

![](/images/Macro_FCTreeView_25.png) S Sheet pristup u opcijama proračunske tablice

### Opcije raspoređivanja:

![Macro FCTreeView](/images/TreeView_SpeadSheet.gif)

![](/images/Macro_FCTreeView_001.png)

![](/images/Macro_FCTreeView_002.png)

- CheckBox opcije za odabir podataka za spremanje u proračunsku tablicu

![](/images/Macro_FCTreeView_28.png) Select : Odaberite sve opcije checkBox za spremanje

![](/images/Macro_FCTreeView_29.png) Select : unSelect sve checkBox opciju za spremanje

![](/images/Macro_FCTreeView_003.png)

- **Value** : samo se vrijednost sprema u ćeliju
  - Ex : 10.00 ![](/images/Macro_FCTreeView_30.png)
- **Val Gr** : vrijednost i jedinica spremaju se u jedinstvenu ćeliju
  - Ex : 10.00 mm ![](/images/Macro_FCTreeView_31.png)
- **Val Gr Ph** : vrijednost, jedinica i fizički podaci spremaju se u jedinstvenu ćeliju
  - Ex : 10.00 mm Length ![](/images/Macro_FCTreeView_32.png)
- **Split** : ako je označena Split checkBox, podaci se spremaju u zasebnu ćeliju
  - Ex : 10.00 | mm | length ![](/images/Macro_FCTreeView_33.png)

![](/images/Macro_FCTreeView_004.png)

- Combobox **mm** : odaberite željenu duljinu jedinice. Vrijednost se pretvara u odabranu jedinicu. Dostupne su jedinice:
  - km, hm, dam, m, dm, cm, **mm**, um, nm, pm, fm, in, lk, ft, yd, rd, ch, fur, mi, lea, nmi
- Combobox **gram** : odaberite željenu težinu jedinice. Vrijednost se pretvara u odabranu jedinicu. Težine jedinica dostupne su:
  - t, q, kg, hg, dag, **g**, dg, cg, mg, µg, ng, pg, fg, gr, dr, oz, oz t, lb, t lb, st, qtr, cwt, tonneau fr, ct
- Spinbox **Densite** : dati gustoću od dm3 upotrijebljenog materijala (Zadano : 1.0000)
- Spinbox **Round** : dati željenu vrijednost zaokruživanja (Zadano : 3)

![](/images/Macro_FCTreeView_005.png)

- Combobox **Name spreadSheet** : Navedite proračunsku tablicu u dokumentu
- Line edit **Name spreadSheet** : Prikažite stvarnu proračunsku tablicu ili navedite naziv nove proračunske tablice

![](/images/Macro_FCTreeView_006.png)

![](/images/Macro_FCTreeView_28.png) Select odaberite sve opcije potvrdnog okvira

![](/images/Macro_FCTreeView_29.png) Unselect isključili sve mogućnosti potvrdnog okvira

![](/images/Macro_FCTreeView_27.png) Save spremite podatke u prikazanu tablicu. ako proračunska tablica nije aktivna, proračunska tablica s nazivom **FCSpreadSheet** je stvoren

![](/images/Macro_FCTreeView_26.png) Quit zatvorite opcije proračunske tablice

### Ikone

Ikona mora biti kopirana u isti direktorij kao i makronaredba

[Macro_FCTreeView_Icon](https://forum.freecadweb.org/download/file.php?id=70498)

![Icon used for the Name of object](/images/Macro_FCTreeView_00.png) [![Icon used for visualise if the object is status Visible (mouse click for Hidden)](/images/Macro_FCTreeView_01.png)](/File:Macro_FCTreeView_01.png  "Icon used for visualise if the object is status Visible (mouse click for Hidden)")
[![Icon used for visualise if the object is status Hidden (mouse click for Visible)](/images/Macro_FCTreeView_02.png)](/File:Macro_FCTreeView_02.png  "Icon used for visualise if the object is status Hidden (mouse click for Visible)")
![Icon used for inform the object in a group the number objects is displayed in top group](/images/Macro_FCTreeView_03.png)
[![Icon used for displayed the single object (not group)](/images/Macro_FCTreeView_04.png)](/File:Macro_FCTreeView_04.png  "Icon used for displayed the single object (not group)")
![Icon used for the Label of object](/images/Macro_FCTreeView_05.png)
![Icon used for flip/flop normal/Visibility](/images/Macro_FCTreeView_06.png)
![Icon used for flip/flop normal/Group](/images/Macro_FCTreeView_07.png)
[![Icon used for Reverse the data listing (momentarily not used)](/images/Macro_FCTreeView_08.png)](/File:Macro_FCTreeView_08.png  "Icon used for Reverse the data listing (momentarily not used)")
[![Icon used for quit Macro FCTreeView (momentarily not used)](/images/Macro_FCTreeView_09.png)](/File:Macro_FCTreeView_09.png  "Icon used for quit Macro FCTreeView (momentarily not used)")
![Icon used for flip/flop normal/reverse the data listing sort by Name](/images/Macro_FCTreeView_10.png)
![Icon used for flip/flop normal/reverse the data listing sort by Label](/images/Macro_FCTreeView_11.png)
![Icon used for flip/flop normal/reverse the data listing sort by Visibility/Hidden](/images/Macro_FCTreeView_12.png)
![Icon used for flip/flop normal/reverse the data listing sort by Grout/Single object](/images/Macro_FCTreeView_13.png)
![Icon used for flip/flop the data listing Fold/Expend](/images/Macro_FCTreeView_14.png)
![Icon used for flip/flop the data listing Expend/Fold](/images/Macro_FCTreeView_15.png)
![Icon used for reload the data in the project](/images/Macro_FCTreeView_16.png)
[![Icon used for the Name contains objects (or folder Group)](/images/Macro_FCTreeView_17.png)](/File:Macro_FCTreeView_17.png  "Icon used for the Name contains objects (or folder Group)")
![Icon used for return in original organisation after operation visibility/Hidden](/images/Macro_FCTreeView_18.png)
[![If this check Box is checked the sort is created by length with the button clicked (Name, Label ...)](/images/Macro_FCTreeView_19.png)](/File:Macro_FCTreeView_19.png  "If this check Box is checked the sort is created by length with the button clicked (Name, Label ...)")
![Icon used for Clear the search line edit](/images/Macro_FCTreeView_20.png)
![Icon used for flip/flop Split the Name list](/images/Macro_FCTreeView_21.png)
![Icon used for flip/flop Split the Name and Label list](/images/Macro_FCTreeView_22.png)
[![Icon used for Selected all object(s) displayed in the window](/images/Macro_FCTreeView_23.png)](/File:Macro_FCTreeView_23.png  "Icon used for Selected all object(s) displayed in the window")
[![Icon used for Unselected all object(s)](/images/Macro_FCTreeView_24.png)](/File:Macro_FCTreeView_24.png  "Icon used for Unselected all object(s)")
![Icon used for access in Spreadsheet options](/images/Macro_FCTreeView_25.png)
![Icon used for quit the Spreadsheet options](/images/Macro_FCTreeView_26.png)
![Icon used for save the data in Spreadsheet](/images/Macro_FCTreeView_27.png)
![Icon used for select all checkbox options](/images/Macro_FCTreeView_28.png)
![Icon used for unselected all checkbox options](/images/Macro_FCTreeView_29.png)
![Icon used for save the value data in Spreadsheet](/images/Macro_FCTreeView_30.png)
![Icon used for save the value and Unit data in Spreadsheet](/images/Macro_FCTreeView_31.png)
![Icon used for save the value, Unit and type data in Spreadsheet](/images/Macro_FCTreeView_32.png)
![Icon used for split the value, Unit and type in cell separate in Spreadsheet](/images/Macro_FCTreeView_33.png)

## Skripta

Za sprečavanje mnogih primjera klik na gumb alatne trake je efekt flip/flop (sakrij/vidljivo)

Makronaredba se nalazi u desnom pristaništu za promjenu mijenja broj retka vrijednosti133 **testing = 0** (ili ga promijenite mišem kao widget normalno)

The toolbar icon ![Macro FCTreeView](/images/Macro_FCTreeView.png)

**Macro_FCTreeView.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mario52a/67517ef758ff20005d0a6adcfd8c9190)

[Macro_FCTreeView.FCMacro](https://gist.github.com/mario52a/67517ef758ff20005d0a6adcfd8c9190)

## Za napraviti

Docked the macro

## Verzija

ver 00.07 (06/05/2018) : modify procedure for search the last cell used

ver 00.09 (2020-09-24) : correct the "**freeze**" macro after call the **assembly4 workbench** i try activate "**Class SelObserver**" and it work ???

```
class SelObserver:
    def addSelection(self, document, object, element, position):  # Selection
        global sourisPass
        global listeSorted
        global ui

        None

```

ver 00.08 (2020-02-25) : upgrade with Layout

ver 00.07 (06/05/2018) : modify procedure for search the last cell used

ver 00.06 (13/12/2017) : correct little bug line del line num 1881 "del listeSortedBis[doublon][4:] # supprime le fond inutile" thanks renatorivo

ver 00.05 (27/11/2017) : add creation spreadsheet and many option for him

ver 00.04 (29-09-2017) : add search by numeric value (length, radius....)

values researched :

```
global impost                 ; impost = ["Angle","Angle0","Angle1","Angle2","Angle3","ChamferSize","Circumradius","Columns","Degree",
                                          "FilletRadius","FirstAngle","Growth","Height","LastAngle","Length","Length2","MajorRadius",
                                          "MinorRadius","Pitch","Polygon","Radius","Radius1","Radius2","Radius3","Rows","Size","Width",
                                          "X","X1","X2","Xmax","Xmin","X2max","X2min",
                                          "Y","Y1","Y2","Ymax","Ymin","Y2max","Y2min",
                                          "Z","Z1","Z2","Zmax","Zmin","Z2max","Z2min"]

```

ver 00.03 (23/09/2017) : add search by type object

ver 00.02 (11/09/2017) : modify for docked and prevent many instance the clic on button are effect flip/flop (macro hide/visible)

ver 00.01 (08/09/2017)  :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCTreeView/hr&oldid=1345636>"
