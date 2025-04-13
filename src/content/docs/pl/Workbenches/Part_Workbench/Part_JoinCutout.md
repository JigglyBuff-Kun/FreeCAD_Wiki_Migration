---
title: Część Wycięcie dla obiektu
---
|  |
| --- |
| Część: Wycięcie dla obiektu |
| Lokalizacja w menu |
| Part → Join → Wycięcie dla obiektu |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.16 |
| Zobacz także |
| [Połącz obiekty](/Part_JoinConnect/pl "Part JoinConnect/pl"), [Osadź obiekty](/Part_JoinEmbed/pl "Part JoinEmbed/pl"), [Operacja logiczna](/Part_Boolean/pl "Part Boolean/pl"), [Grubość](/Part_Thickness/pl "Part Thickness/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_JoinCutout.svg) **Wycięcie dla obiektu** tworzy wycięcie w obiekcie ze ściankami *(np. rurze)*, aby dopasować je do innego obiektu ze ściankami.

![](/images/JoinFeatures_Cutout.png)

## Użycie

1. Najpierw wybierz obiekt bazowy, a następnie obiekt do zdefiniowania wycięcia. Kolejność wyboru jest ważna. Wystarczy wybrać jeden kształt podrzędny każdego obiektu *(np. ściany)*.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Part_JoinCutout.svg) Wycięcie dla obiektu.
   * Wybierz opcję **Część → Połącz → Wycięcie dla obiektu** z menu.
3. Utworzony zostanie obiekt JoinFeature z trybem ustawionym na 'Wycięcie'. Oryginalne obiekty zostaną ukryte a wynik cięcia będzie pokazany w [widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości

Podstawa

* DANE**Baza**: Odniesienie do obiektu bazowego (tego, w którym ma zostać wykonane wycięcie). Obiekt powinien być pojedynczą bryłą.
* DANE**Narzędzie**: Odniesienie do obiektu narzędzia *(obiektu, który ma pasować do wycięcia)*. Obiekt może być pojedynczą bryłą lub [prawidłowym złożeniem](/Part_Compound "Part Compound") brył.
* DANE**Tryb**: Tryb działania, równy *Wycięcie* *(Zmiana, która przekształci narzędzie w inne Part\_JoinXXX)*. Wartość "Obejdź" może być użyta do tymczasowego wyłączenia długich obliczeń *(zostanie utworzone złożenie bazy i narzędzia, co jest szybką operacją)*.
* DANE**Ulepsz**: Określa, czy zastosować operację [ulepszenia](/Part_RefineShape/pl "Part RefineShape/pl") do ostatecznego kształtu. wobec ostatecznego kształtu. Wartość domyślna jest określona przez pole wyboru "Automatycznie udoskonal model po wykonaniu operacji logicznej" w [Preferencjach środowiska Projekt Części](/PartDesign_Preferences/pl "PartDesign Preferences/pl"). Gdy właściwość **Tryb** ma wartość **Obejdź**, Ulepszanie jest ignorowane *(nigdy nie jest stosowane)*.

## Przykład

1. Utwórz rurę, stosując narzędzie [grubość](/Part_Thickness/pl "Part Thickness/pl") do [cylindra](/Part_Cylinder/pl "Part Cylinder/pl"):

![](/images/JoinFeatures_Example_step1.png)

1. Utwórz kolejną rurę o mniejszej średnicy i [umieść](/Placement/pl "Placement/pl") ją tak, aby przebiła ścianę pierwszej rury:

![](/images/JoinFeatures_Example_step2.png)

1. Zaznacz pierwszą rurę, a następnie drugą rurę *(kolejność zaznaczania jest ważna)* i kliknij opcję "Wycięcie dla obiektu" na rozwijanym pasku narzędzi **Połącz obiekty**.

![](/images/JoinFeatures_Example_step3_Cutout.png)

## Sposób działania

Algorytmy stojące za narzędziami Połącz są dość proste, a ich zrozumienie jest ważne dla prawidłowego korzystania z narzędzi.

1. Obiekt bazowy jest [wycięty logicznie](/Part_Cut/pl "Part Cut/pl") za pomocą obiektu narzędzia. Wynikowy kształt jest zestawem *([złożeń](/Part_Compound/pl "Part Compound/pl"))* nieprzecinających się brył *(zazwyczaj dwóch)*.

2. Uzyskane złożenie jest kolejnie filtrowane, przy czym zachowywana jest tylko największa bryła.

4. Jeśli właściwość Ulepsz ma wartość `Prawda`, wynikowy kształt to obiekt funkcji [Ulepsz](/Part_RefineShape "Part RefineShape").
  
  
![](/images/JoinFeatures-Algo-Cutout.png)

### Uwagi

* Jeśli po kroku 1 obiekt pozostaje w jednym kawałku, wynik operacji Wycięcie będzie równoważny logicznej operacji[Wytnij](/Part_Fuse/pl "Part Fuse/pl") bazy i narzędzia.
* Obecnie narzędzie wygeneruje nieoczekiwany wynik, jeśli jako baza zostanie użyte złożenie. *(Może to zostać zmienione w przyszłości.)*
* Ponieważ największy element jest określany przez porównanie objętości elementów, narzędzie może działać tylko z bryłami. *(Może to zostać zmienione w przyszłości.)*

## Tworzenie skryptów

Narzędzie Osadź może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout')

```

* Tworzy pusty element Wycięcia *(lub inną cechę dołączania, w zależności od przekazanego trybu)*. Następnie należy jawnie przypisać właściwości Baza i Narzędzie.
* Zwraca nowo utworzony obiekt.

Przykład:

```
import JoinFeatures
j = JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout' )
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tool = FreeCADGui.Selection.getSelection()[1]

```

Samo narzędzie jest zaimplementowane w środowisku Python, patrz /Mod/Part/JoinFeatures.py ([Link do Github](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/JoinFeatures.py)) w miejscu, w którym zainstalowany jest FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinCutout/pl&oldid=1497000>"