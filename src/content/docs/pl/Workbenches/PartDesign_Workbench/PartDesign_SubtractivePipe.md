---
title: Projekt Części Odejmowanie wyciągnięciem wzdłuż ścieżki
---
|  |
| --- |
| Projekt Części: Odejmowanie wyciągnięciem wzdłuż ścieżki |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Odejmowanie wyciągnięciem wzdłuż ścieżki |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Uzupełnianie wyciągnięciem wzdłuż ścieżki](/PartDesign_AdditivePipe/pl "PartDesign AdditivePipe/pl"), [Odejmowanie wyciągnięciem przez profile](/PartDesign_SubtractiveLoft/pl "PartDesign SubtractiveLoft/pl") |
|  |

## Opis

Funkcja **Odejmowanie wyciągnięciem wzdłuż ścieżki** tworzy bryłę odejmującą w aktywnej Zawartości poprzez przeciągnięcie jednego lub więcej szkiców *(zwanych również przekrojami)* wzdłuż otwartej lub zamkniętej ścieżki. Jej kształt jest następnie odejmowany od istniejącej bryły. Odejmowanie wyciągnięciem wzdłuż ścieżki jest często używane w połączeniu z funkcją [Helisy](/Part_Helix/pl "Part Helix/pl") środowiska Część i [Łącznik kształtu](/PartDesign_ShapeBinder "PartDesign ShapeBinder") w celu utworzenia gwintu. Zobacz stronę [Poradnik: Tworzenie gwintów](/Thread_for_Screw_Tutorial/pl "Thread for Screw Tutorial/pl") aby uzyskać szczegółowe informacje na ten temat.

## Użycie

1. Istnieje kilka sposobów wywołania narzędzia:
2. Naciśnij przycisk ![](/images/PartDesign_SubtractivePipe.svg) **Odejmowanie wyciągnięciem wzdłuż ścieżki**.
   * Wybierz opcję z menu **Projekt Części → Utwórz cechę przez dodanie → ![](/images/PartDesign_SubtractivePipe.svg) Subtractive pipe**.
   * W oknie dialogowym **Wybierz cechę** wybierz szkic, który ma zostać użyty jako pierwszy przekrój i kliknij przycisk OK.
   * Alternatywnie, szkic lub ścianę obiektu 3D *([dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"))* można wybrać przed naciśnięciem przycisku Odejmowanie wyciągnięciem wzdłuż ścieżki.
3. W oknie **Parametrach wyciągnięcia** w sekcji *Profil* naciśnij przycisk Obiekt.
4. Wybierz szkic, który ma zostać użyty jako ścieżka w oknie widoku 3D:
   * Alternatywnie, przed uruchomieniem narzędzia można wybrać szkic lub twarz obiektu 3D ([dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")). Wówczas nie pojawi się to okno dialogowe.
5. Aby użyć więcej niż jednego przekroju, w sekcji *Przekształcenie sekcji* ustaw tryb przekształcenia na *Przekrój wielokrotny*. Naciśnij Dodaj sekcję, a następnie wybierz szkic w oknie widoku 3D. Powtórz dla każdego dodatkowego przekroju.
6. W razie potrzeby ustaw opcje i kliknij OK.

## Opcje

**Przekształcenie sekcji**:

* Wybierz **Stały**, aby użyć pojedynczego profilu
* Wybierz **Sekcja wielokrotna**, aby użyć wielu profili

**Orientacja przekroju**:

* Standardowy
  + Utrzymuje kształt przekroju prostopadle do ścieżki. Jest to ustawienie domyślne.
* Stały
  + Orientacja ustalona przez pierwszy profil pozostaje stała przez cały czas. Wyłącza to wyrównanie do wektora normalnego ścieżki. Oznacza to, że kształt przekroju nie będzie obracał się wraz ze ścieżką. Przeciągnij wzdłuż okręgu, aby zobaczyć efekt.
* Freneta.
  + Stwórz możliwie najmniejsze skręcenie profilu. Więcej informacji można znaleźć na stronie [Wzory Freneta-Serreta](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas).
* Pomocniczy
  + Określ ścieżkę pomocniczą do prowadzenia profilu.
  + Dla każdego punktu *P* wzdłuż ścieżki przeciągania, będzie odpowiadał punkt *Q* na ścieżce pomocniczej.
  + W miarę przeciągania profilu zostanie on przekształcony w taki sposób, że linia *PQ* będzie normalną ścieżki przeciągania.
  + Jeśli ustawiona jest opcja *Krzywoliniowość*, punkty *Q* są skalowane proporcjonalnie wzdłuż ścieżki przeciągania, niezależnie od jej długości.
* Binormalny
  + Określ wektor binormalny w X, Y i Z.

**Przejście narożnika**

* Przekształcony
* Ostry narożnik
* Zaokrąglenie

## Właściwości

* DANE**Etykieta**: nazwa nadana operacji, nazwa ta może być dowolnie zmieniana.
* DANE**Ulepsz**: przyjmuje wartość `Prawda` lub `Fałsz`. Jeśli jest ustawiona na `Prawda`, czyści bryłę z resztkowych krawędzi pozostawionych przez elementy. Zobacz stronę [Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl") aby uzyskać więcej szczegółów.
* DANE**Sekcja**: lista użytych przekrojów.
* DANE**Styczna łuku**: przyjmuje wartość `Prawda` lub `Fałsz` *(domyślnie)*. Wartość `Prawda` rozszerza ścieżkę o krawędzie styczne.
* DANE**Pomocnicza styczna łuku**: przyjmuje wartość `Prawda` lub `Fałsz` *(domyślnie)*. Wartość true rozszerza ścieżkę pomocniczą o krawędzie styczne.
* DANE**Pomocnicza krzywoliniowa**: przyjmuje wartość `Prawda` lub `Fałsz` *(domyślnie)*. Wartość `Prawda` oblicza normalną między jednakowo odległymi punktami na obu grzbietach.
* DANE**Tryb**: tryb profilu. Zobacz [Opcje](#Opcje).
* DANE**Binormal**: wektor binormalny dla odpowiedniego trybu orientacji.
* DANE**Przejście**: tryb przejścia. Dostępne opcje to *Przekształcony*, *Ostry narożnik* lub *Zaokrąglenie*.
* DANE**Przekształcenie**: *Stały* używa pojedynczego przekroju. *Sekcja wielokrotna* wykorzystuje dwa lub więcej przekrojów. *Liniowy*, *Kształt litery S* i *Interpolacja* obecnie nie działają.

## Uwagi

* Aby lepiej kontrolować kształt obiektu wyciągnięcia, zaleca się, aby wszystkie przekroje miały taką samą liczbę segmentów. Na przykład, dla przejścia pomiędzy prostokątem i okręgiem, okrąg powinien być podzielony na 4 połączone łuki.
* Można tworzyć przejście od lub w kierunku pojedynczego [wierzchołka](/Glossary#V "Glossary") ze szkicu lub bryły. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20").
* Po wybraniu [wierzchołka](/Glossary#V "Glossary") jako sekcji, w większości przypadków musi to być ostatnia sekcja przejścia. Kolejność sekcji można zmienić, przeciągając je na liście.
* Ścieżka może pochodzić tylko z jednego szkicu, elementu lub Łącznika kształtu. Jeśli chcesz przeciągnąć wzdłuż kilku krawędzi z różnych szkiców, użyj narzędzia ![](/images/PartDesign_SubShapeBinder.svg). [Łącznik kształtów podrzędnych](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl").
* Ścieżka nie może zawierać rozgałęzień, trójników itp. Pętle są dozwolone.
* Może to prowadzić do problemów, jeśli przekrój nie jest prostopadły do ścieżki w przestrzeni 3D.
* Przekrój nie może leżeć na tej samej płaszczyźnie, co przekrój bezpośrednio go poprzedzający.
* Przekroje nie mogą zawierać rozłącznych lub przecinających się pętli.
* Jeśli szkic ma geometrię wewnętrzną, kolejność tworzenia geometrii szkicu powinna być taka sama dla wszystkich sekcji. Należy rozpocząć wszystkie sekcje od geometrii wewnętrznej lub od zewnętrznej. W przeciwnym razie zostanie utworzona nieprawidłowa rura w miejscu przecięcia ścian wewnętrznych i zewnętrznych.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePipe/pl&oldid=1364502>"