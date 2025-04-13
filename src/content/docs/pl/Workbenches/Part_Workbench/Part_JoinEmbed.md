---
title: Część Osadź obiekt
---
|  |
| --- |
| Część: Osadź obiekt |
| Lokalizacja w menu |
| Część → Połącz → Osadź obiekt |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.16 |
| Zobacz także |
| [Połącz obiekty](/Part_JoinConnect/pl "Part JoinConnect/pl"), [Wycięcie dla obiektu](/Part_JoinCutout/pl "Part JoinCutout/pl"), [Operacja logiczna](/Part_Boolean/pl "Part Boolean/pl"), [Grubość](/Part_Thickness/pl "Part Thickness/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_JoinEmbed.svg) **Osadź** umożliwia umieszczenie obiektu ze ściankami *(np. rury)* w innym obiekcie ze ściankami.

![](/images/JoinFeatures_Embed.png)

## Użycie

1. Wybierz najpierw obiekt bazowy, a następnie obiekt, który ma zostać osadzony. Kolejność wyboru jest ważna. Wystarczy wybrać jeden kształt podrzędny każdego obiektu *(np. ściany)*.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Part_JoinEmbed.svg) Osadź obiekt.
   * Wybierz opcję **Część → Połącz → ![](/images/Part_JoinEmbed.svg) Osadź obiekt** z menu.
3. Zostanie utworzony obiekt Part JoinFeature z trybem ustawionym na 'Osadź'. Oryginalne obiekty zostaną ukryte a wynik osadzania będzie pokazany w [widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości

Podstawa

* DANE**Baza**: Odniesienie do obiektu bazowego *(tego, w którym ma zostać osadzony inny obiekt)*. Obiekt powinien być pojedynczą bryłą.
* DANE**Narzędzie**: Odniesienie do obiektu narzędzia (obiektu, który ma zostać osadzony). Obiekt może być pojedynczą bryłą lub [prawidłowym złożeniem](/Part_Compound "Part Compound") brył.
* DANE**Tryb**: Tryb działania, równy **Osadź** *(Zmiana, która przekształci narzędzie w inne Part\_JoinXXX)*. Wartość **obejdź** może być użyta do tymczasowego wyłączenia długich obliczeń (zostanie utworzone połączenie bazy i narzędzia, co jest szybką operacją).
* DANE**Ulepsz**: Określa, czy zastosować operację [ulepszania](/Part_RefineShape/pl "Part RefineShape/pl") wobec ostatecznego kształtu. Wartość domyślna jest określona przez pole wyboru "Automatycznie udoskonal model po wykonaniu operacji logicznej" w [Preferencjach środowiska Projekt Części](/PartDesign_Preferences/pl "PartDesign Preferences/pl"). Gdy właściwość **Tryb** ma wartość **Obejdź**, Ulepszanie jest ignorowane *(nigdy nie jest stosowane)*.

## Przykład

1. Utwórz rurę, stosując narzędzie [grubość](/Part_Thickness/pl "Part Thickness/pl") do bryły [cylindra](/Part_Cylinder/pl "Part Cylinder/pl"):

![](/images/JoinFeatures_Example_step1.png)

1. Utwórz kolejną rurę o mniejszej średnicy i [umieść](/Placement/pl "Placement/pl") ją tak, aby przebiła ścianę pierwszej rury:

![](/images/JoinFeatures_Example_step2.png)

1. Wybierz pierwszą rurę, a następnie drugą rurę (kolejność wyboru jest ważna) i kliknij opcję "Osadź obiekt" na rozwijanym pasku narzędzi Dołącz.

![](/images/JoinFeatures_Example_step3_Embed.png)

1. Zastosuj narzędzie przekroju *([Przełącz płaszczyznę tnącą](/Std_ToggleClipPlane/pl "Std ToggleClipPlane/pl"), [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska Architektura, [Płaszczyzna cięcia](/Arch_CutPlane/pl "Arch CutPlane/pl") środowiska Architektura)*, aby odsłonić elementy wewnętrzne. Na poniższym obrazku użyto narzędzia Płaszczyzna przekroju środowiska Architektura.

![](/images/JoinFeatures_Example_step4_Embed.png)

## Sposób działania

Algorytmy stojące za narzędziami Połącz są dość proste, a ich zrozumienie jest ważne dla prawidłowego korzystania z narzędzi.

1. Obiekt bazowy jest [wycięty logicznie](/Part_Cut/pl "Part Cut/pl") za pomocą obiektu narzędzia. Wynikowy kształt jest zestawem *([złożeń](/Part_Compound/pl "Part Compound/pl"))* nieprzecinających się brył *(zazwyczaj dwóch)*.

2. Uzyskane złożenie jest kolejnie filtrowane, przy czym zachowywana jest tylko największa bryła.

3. Ta największa bryła jest [logicznym połączeniem](/Part_Fuse/pl "Part Fuse/pl") z obiektem narzędzia.

4. Jeśli właściwość Ulepsz ma wartość `Prawda`, wynikowy kształt to obiekt funkcji [Ulepsz](/Part_RefineShape "Part RefineShape").
  
  
![](/images/JoinFeatures-Algo-Embed.png)

### Uwagi

* Jeśli po kroku 1 obiekt pozostaje w jednym kawałku, wynik operacji Osadź będzie równoważny [połączeniu](/Part_Fuse/pl "Part Fuse/pl") bazy i narzędzia, ale jego obliczenie zajmie więcej czasu.
* Obecnie narzędzie wygeneruje nieoczekiwany wynik, jeśli jako baza zostanie użyte złożenie. *(Może to zostać zmienione w przyszłości.)*
* Ponieważ największy element jest określany przez porównanie objętości elementów, narzędzie może działać tylko z bryłami. *(Może to zostać zmienione w przyszłości.)*

## Tworzenie skryptów

Narzędzie Osadź może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
JoinFeatures.makePartJoinFeature(name = 'Embed', mode = 'Embed')

```

* Tworzy pusty element osadzania *(lub inny element dołączania, w zależności od przekazanego trybu)*. Następnie należy jawnie przypisać właściwości Baza i Narzędzie.
* Zwraca nowo utworzony obiekt.

Przykład:

```
import JoinFeatures
j = JoinFeatures.makePartJoinFeature(name = 'Embed', mode = 'Embed' )
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tool = FreeCADGui.Selection.getSelection()[1]

```

Samo narzędzie jest zaimplementowane w środowisku Python, patrz /Mod/Part/JoinFeatures.py ([Link do Github](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/JoinFeatures.py)) w miejscu, w którym zainstalowany jest FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinEmbed/pl&oldid=1496996>"