---
title: Projekt Części Uzupełnianie wyciągnięciem przez profile
---
|  |
| --- |
| Projekt Części: Uzupełnianie wyciągnięciem przez profile |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez dodanie → Uzupełnianie wyciągnięciem przez profile |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Uzupełnianie wyciągnięciem po ścieżce](/PartDesign_AdditivePipe/pl "PartDesign AdditivePipe/pl"), [Odejmowanie wyciągnięciem przez profile](/PartDesign_SubtractiveLoft/pl "PartDesign SubtractiveLoft/pl") |
|  |

## Opis

**Uzupełnianie wyciągnięciem przez profile** tworzy bryłę w aktywnej Zawartości poprzez wykonanie przejścia pomiędzy dwoma lub więcej szkicami *(zwanymi również przekrojami poprzecznymi)*. Jeżeli Zawartość zawiera już elementy, to wyciągnięcie zostanie z nimi połączone.

![](/images/PartDesign_AddLoft_example.png)

Po lewej: przekroje *(A)*, *(B)* i *(C)*
Po prawej: utworzone wyciągnięcie.

## Użycie

### Przepływ pracy na podstawie okienka dialogowego

1. Naciśnij przycisk ![](/images/PartDesign_AdditiveLoft.svg) Uzupełnianie wyciągnięciem przez profile.
2. W oknie dialogowym **Wybierz cechę** wybierz szkic, który ma być użyty jako obiekt profilu bazowego i kliknij OK.
   * Alternatywnie, przed naciśnięciem przycisku Uzupełnianie wyciągnięciem przez profile można wybrać pojedynczy szkic lub ścianę obiektu 3D *([dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"))*.
3. W **Parametrach wyciągnięcia przez profile** naciśnij przycisk Dodaj sekcję profilu
4. Wybierz następny szkic w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Powtórz powyższe czynności, aby wybrać więcej szkiców w kolejności, w jakiej chcesz, aby były poddawane wyciągnięciu. *(Możesz zmienić kolejność sekcji w dowolnym momencie później w oknie dialogowym wyciągnięcia, przeciągając sekcje na liście do pożądanej pozycji.*
5. Ustaw opcje w razie potrzeby i kliknij OK.

### Przepływ pracy oparty na wyborze

1. Wybierz kilka szkiców. Ważne jest, w jakiej kolejności je wybierzesz:
   * Szkic wybrany jako pierwszy stanie się obiektem profilu bazowego w następnym kroku
   * Szkice wybrane po pierwszym staną się sekcjami wyciągnięcia. Również tutaj ważna jest kolejność wyboru: szkic wybrany jako drugi stanie się pierwszą sekcją wyciągnięcia, szkic wybrany jako trzeci stanie się drugą sekcją i tak dalej. *(Możesz zmienić kolejność sekcji w dowolnym momencie później w oknie dialogowym wyciągnięcia, przeciągając sekcje na liście na żądaną pozycję.*
   * Pierwszy lub ostatni wybór może być również ścianą obiektu 3D *([dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"))*
2. Naciśnij przycisk ![](/images/PartDesign_AdditiveLoft.svg) Uzupełnianie wyciągnięciem przez profile.
3. Ustaw opcje, jeśli to konieczne i kliknij OK.

## Opcje

* **Powierzchnia prostokreślna**: tworzy proste przejścia między przekrojami poprzecznymi. Nie ma zastosowania dla wyciągnięcia z dwoma przekrojami. Jeśli opcja nie jest zaznaczona, przejścia będą gładkie.
* **Zamknięty**: powoduje przejście z ostatniego przekroju do pierwszego, tworząc pętlę. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## Właściwości

* DANE**Etykieta**: nazwa nadana operacji, nazwa ta może być zmieniona w dogodnym momencie.
* DANE**Sections**: zawiera listę użytych sekcji.
* DANE**Ruled**: zobacz akapit [Opcje](#Opcje).
* DANE**Closed**: zobacz akapit [Opcje](#Opcje).
* DANE**Ulepsz**: przyjmuje wartości `Prawda` lub `Fałsz`. Jeżeli ustawimy na wartość prawda, to funkcja wyczyści bryłę z resztek krawędzi pozostawionych przez cechy. Zobacz [Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl") aby uzyskać więcej szczegółów.
* DANE**Profile**: obiekt profilu bazowego patrz wyciągnięcie.
* DANE**Midplane**: nie ma zastosowania.
* DANE**Odwrócony**: nie ma zastosowania.
* DANE**Up To Face**: nie ma zastosowania.
* DANE**Allow Multi Face**: nie ma zastosowania.

## Uwagi

* Aby lepiej kontrolować kształt wyciągnięcia, zaleca się, aby wszystkie przekroje miały taką samą liczbę segmentów. Na przykład, dla przejścia pomiędzy prostokątem a okręgiem, okrąg powinien być rozbity na cztery połączone łuki.
* Możesz wykonać wyciągnięcie z lub w kierunku pojedynczego [wierzchołka](/Glossary#V "Glossary") ze szkicu lub bryły. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
* [Wierzchołki](/Glossary#V "Glossary") mogą być tylko początkiem lub końcem wyciągnięcia. W przeciwnym razie bryła poddasza składałaby się z dwóch brył połączonych w jednym punkcie. Naruszałoby to definicję obiektu 3D zawartą w jądrze CAD.
* Profil nie może znajdować się na tej samej płaszczyźnie co profil bezpośrednio go poprzedzający.
* Jeśli szkic ma geometrię wewnętrzną, czyli wyciągnięcie ma mieć otwór, to kolejność tworzenia geometrii szkicu, powinna być taka sama dla wszystkich profili: Albo zacznij pracę z wszystkimi profilami geometrii wewnętrznej, albo zewnętrznej. W przeciwnym razie może powstać nieprawidłowe wyciągnięcie, w którym krzyżują się ściany wewnętrzne i zewnętrzne.
* Nie jest możliwe wyciąganie pętli rozłącznych lub krzyżujących się.
* Niektóre tryby awarii spowodują, że część będzie wyświetlona w kolorze czarnym.

## Odnośniki internetowe

* Artykuł [Szczegóły techniczne wyciągnięcia przez profile](/Part_Loft_Technical_Details/pl "Part Loft Technical Details/pl") wyjaśnia jak jest tworzone [Odejmowanie wyciągnięciem przez profile](/Part_Loft/pl "Part Loft/pl") środowiska Część. Znaczna część jego zawartości dotyczy również funkcji Uzupełnianie wyciągnięciem przez profile.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveLoft/pl&oldid=1296520>"