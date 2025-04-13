---
title: Makrodefinicja Skrzydło samolotu
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro AeroFoil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Opis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Makrodefinicja Skrzydło samolotu tworzy krzywe i powierzchnie profilu lotniczego używając predefiniowanych modeli, funkcji algebraicznych oraz plików DAT lub CSV. Macro version: 2.0.1 Last modified: 2021-03-10 FreeCAD version: 0.17 and above Download: [AeroFoil.zip](https://github.com/melwyncarlo/AeroFoil/blob/main/AeroFoil.zip?raw=true) Autor: Melwyncarlo                                                                                                                                                                                                                                                                                                    |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Melwyncarlo](/index.php?title=User:Melwyncarlo&action=edit&redlink=1 "User:Melwyncarlo (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Do pobrania                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [AeroFoil.zip](https://github.com/melwyncarlo/AeroFoil/blob/main/AeroFoil.zip?raw=true)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Odnośniki                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Personal Github - AeroFoil](https://github.com/melwyncarlo/AeroFoil) [AeroFoil.zip](https://github.com/melwyncarlo/AeroFoil/blob/main/AeroFoil.zip?raw=true) [forum FreeCAD - AeroFoil](https://forum.freecadweb.org/viewtopic.php?f=22&t=56162) [FC Github - AeroFoil](https://github.com/FreeCAD/FreeCAD-macros/tree/master/ObjectCreation) [FC Forum - AeroFoil](https://forum.freecadweb.org/viewtopic.php?f=22&t=56162) [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl") |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.0.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Data zmian                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2021-03-10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.17 and above                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Domyślny skrót                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _Brak_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Zobacz również                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _-_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Opis

**Skrzydło samolotu** jest narzędziem utworzonym przez użytkownika, które może być używane w aplikacji FreeCAD. Skrzydło samolotu tworzy krzywe i powierzchnie profilu lotniczego używając predefiniowanych modeli, funkcji algebraicznych, jak również importowanych plików DAT lub CSV.

![](/images/AeroFoil-reduced.png)    Ikonka makrodefinicji **Skrzydło samolotu**.

Makro Skrzydło samolotu można pobrać za pomocą wbudowany w program FreeCAD [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

#### Główne cechy

- Dopracowanie punktów profilu lotniczego.
- Generowanie wielu kopii profilu lotniczego.
- Wyjście dla krzywych 2D i powierzchni płaskich.
- Wyjście dla DWire/PolyLine i BSpline.
- Wyjście dla środowisk pracy Szkicownik i Rysunek Roboczy.
- W pełni związane szkice w środowisku pracy Szkicownik.
- Generowanie krzywych dzielonych _(górnych i dolnych)_ dla profilu lotniczego.
- Gotowe solwery NACA 4 i 5 cyfr.
- Parser funkcji krzywych symetrycznych i asymetrycznych.
- Parser danych z plików tekstowych DAT i arkuszy kalkulacyjnych CSV.
- Wprowadzanie długości cięciwy w mm, cm, m, in, ft i yards.

<span id="Additional\_Features\_0.19 and above">

#### Dodatkowe właściwości wersja 0.19 i powyżej

Właściwości obiektu Skrzydło samolotu *(tylko do odczytu)* :

Podstawowe

- DANE**Typ Skrzydła samolotu**
- DANE**Długość cięciwy płata**
- DANE**Typ krzywej projektowej**
- DANE**Liczba punktów**

[![AeroFoil-output-types.gif](/images/9/94/AeroFoil-output-types.gif)](/File:AeroFoil-output-types.gif)

**Opis : Typy danych wyjściowych makrodefinicji Skrzydło samolotu**

[![AeroFoil-input-types.gif](/images/0/0a/AeroFoil-input-types.gif)](/File:AeroFoil-input-types.gif)

**Opis : Typy danych wejściowych makrodefinicji Skrzydło samolotu**

## Instalacja

#### Linux

"Skrzydło samolotu" można zainstalować ręcznie, podobnie jak w przypadku instalacji w systemie Windows, lub za pomocą terminala i odpowiednich poleceń wymienionych w pliku [INSTALL](https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/INSTALL.sh).

Domyślnie terminal poleceń systemu Linux może być uruchomiony przez jednoczesne naciśnięcie następujących klawiszy:

`Control + Alt + T`

#### Windows

"Skrzydło samolotu" można zainstalować za pomocą następujących dwóch kroków:

1. Pobierz plik [AeroFoil.zip](https://github.com/melwyncarlo/AeroFoil/blob/main/AeroFoil.zip?raw=true).
2. Wypakuj zawartość pliku ZIP do katalogu _Macro_ użytkownika programu FreeCAD.

Domyślnie, katalog Makro użytkownika FreeCAD powinien znajdować się w lokalizacji:

`C:/Users/User_Name/AppData/Roaming/FreeCAD/Macro`

## Użycie

"Skrzydło samolotu" można załadować, wykonując następujące czynności:

1. Uruchom aplikację **FreeCAD**.
2. Przejdź do menu **Makrodefinicje → Makrodefinicje ...**.
3. Kliknij na zakładkę **Makra użytkownika** w wyskakującym oknie dialogowym.
4. Wybierz AeroFoil.FCMacro.
5. Kliknij na przycisk Wykonaj makro.

Po załadowaniu makra Skrzydło samolotu postępuj zgodnie z instrukcjami w poszczególnych oknach dialogowych, uzupełnij odpowiednie dane wejściowe i wykonaj odpowiednią nawigację. W przypadku wystąpienia błędu lub ostrzeżenia, zostaniesz automatycznie poinformowany o tym fakcie. Jeżeli zostaniesz powiadomiony o nieoczekiwanym błędzie, poinformuj o nim, podając wersję programu FreeCAD, opisując podjęte kroki i informując, czy _(i w jakim stopniu)_ został wygenerowany jakikolwiek wynik.

#### Uwagi

|       |                                                                                                                                                                                                  |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _(1)_ | Wykonanie operacji makro z punktami niestandardowymi i udoskonaleniem nie powoduje żadnych widocznych zmian.                                                                                     |
| _(2)_ | Właściwości obiektu AeroFoil są widoczne tylko w wersji programu FreeCAD 0.19. W starszych wersjach pojawi się ostrzeżenie na konsoli. Ostrzeżenie to nie będzie miało wpływu na dane wyjściowe. |

#### Wskazówki, o których należy pamiętać podczas pracy:

1. Dla profili NACA, dwie ostatnie cyfry _(łącznie)_ nie mogą mieć wartości zero; grubość nie może być wartością zerową.
2. Pięciocyfrowe profile NACA są ograniczone do następujących modeli _("XX" oznacza dwie ostatnie cyfry, grubość, profilu lotniczego)_:
   - 210XX
   - 220XX
   - 221XX
   - 230XX
   - 231XX
   - 240XX
   - 241XX
   - 250XX
   - 251XX
3. Dla funkcji krzywych, używaj tylko zestawów znaków i funkcji.
4. W przypadku funkcji krzywej,

   2
   ∗
   x
   {\displaystyle 2\*x}
   ![{\displaystyle 2*x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e74f26f80a2da37d8165a158a50adb9d6f932913) jest poprawne, podczas gdy

   2
   x
   {\displaystyle 2x}
   ![{\displaystyle 2x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e50b849d3a7cd902f0ae3fa6ad6d1cad49987c39) jest niepoprawne.

5. Dla funkcji krzywej,

   # y

   f
   (
   x
   )
   {\displaystyle y=f(x)}
   ![{\displaystyle y=f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2311a6a75c54b0ea085a381ba472c31d59321514) zawiera się w przedziale od **0** do **1**, w obu przypadkach.

6. Dla funkcji krzywej, trygonometryczna _theta_ jest w stopniach _(**θ °**)_.
7. Dla funkcji krzywych, trygonometryczna _theta_ obejmuje zakres od **0°** do **360°**, z zastrzeżeniem ograniczeń obliczeniowych.
8. Krzywe lub punkty, które przecinają się między **0** i **1**, zarówno jedno jak i drugie wykluczające się, zwrócą błąd.
9. Krzywe lub punkty, które zawierają dane dolnego profilu nie mogą być odzwierciedlone.
10. W przypadku importu plików sugeruje się pozostawienie domyślnych wartości numerów wierszy, rzędów i kolumn, chyba że jest się dobrze poinformowanym.
11. Zwiększanie parametrów **refine** i **quantity'** zwiększa czas obliczeń i zasoby.
12. Bezwzględna długość cięciwy, w milimetrach, nie może być mniejsza niż **1mm**.

[![AeroFoil-preset-functions.png](/images/a/a4/AeroFoil-preset-functions.png)](/File:AeroFoil-preset-functions.png)

**Podpis: Wstępnie zdefiniowane znaki i funkcje**

## Tworzenie skryptów

```
__Title__         = "AeroFoil"
__Author__        = "Melwyncarlo"
__Version__       = "2.0.0"
__Date__          = "2021-03-09"
__Comment__       = "AeroFoil creates airfoil curves and faces using pre-defined models, algebraic functions, and DAT or CSV Files"
__Web__           = "https://github.com/melwyncarlo/AeroFoil"
__Wiki__          = "http://www.freecadweb.org/wiki/index.php?title=Macro_AeroFoil"
__Icon__          = "https://wiki.freecad.org/images/5/59/AeroFoil-reduced.png"
__Help__          = "Click on the AeroFoil button/macro, and follow the instructions in the subsequent dialog boxes."
__Status__        = "stable"
__Requires__      = "Freecad >= v0.17"
__Communication__ = "https://github.com/melwyncarlo/AeroFoil/issues"
__Files__         = "AeroFoil_UI_Files/AeroFoil_Initial_Dialog.ui, AeroFoil_UI_Files/AeroFoil_NACA4Digit_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_NACA5Digit_Dialog.ui, AeroFoil_UI_Files/AeroFoil_CurvesInput_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_PointsInput_Dialog.ui, AeroFoil_UI_Files/AeroFoil_DATInput_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_CSVInput_Dialog.ui, AeroFoil_UI_Files/AeroFoil_FileLoad_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_Final_Dialog.ui, AeroFoil_UI_Files/AeroFoil_Math_Functions_Box.ui, \
AeroFoil_UI_Files/AeroFoil_mfb_img.gif, AeroFoil_UI_Files/AeroFoil.svg"

#  OS: Ubuntu 18.04.5 LTS
#  Word size of OS: 64-bit
#  Word size of FreeCAD: 64-bit
#  Version: 0.18.4.
#  Build type: Release
#  Python version: 3.6.8
#  Qt version: 5.9.5
#  Coin version: 4.0.0a
#  OCC version: 7.3.0
#  Locale: English/UnitedKingdom (en_GB)

#  OS: Ubuntu 18.04.5 LTS (LXDE/Lubuntu)
#  Word size of OS	: 64-bit
#  Word size of FreeCAD: 64-bit
#  Version: 0.19
#  Build type: Release
#  Branch: unknown
#  Hash: 32200b604d421c4dad527fe587a7d047cf953b4f
#  Python version: 3.6.9
#  Qt version: 5.9.5
#  Coin versio: 4.0.0a
#  OCC version: 7.3.0
#  Locale: English/UnitedKingdom (en_GB)
```

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro)_

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
    "https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro>">raw code</a>

## Odnośniki internetowe

[1] [repozytorium Github dla AeroFoil](https://github.com/melwyncarlo/AeroFoil)

[2] [FreeCAD Macros Github Repository - AeroFoil](https://github.com/FreeCAD/FreeCAD-macros/tree/master/ObjectCreation)

[3] [dyskusja na forum FreeCAD, o - AeroFoil](https://forum.freecadweb.org/viewtopic.php?f=22&t=56162)

[4] [Airfoil Tools](http://airfoiltools.com/) zawiera około 1638 różnych profili lotniczych.

[5] [Baza danych współrzędnych profili lotniczych UIUC](https://m-selig.ae.illinois.edu/ads/coord_database.html) zawiera około 1600 różnych profili lotniczych.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_AeroFoil/pl&oldid=1344880>"
