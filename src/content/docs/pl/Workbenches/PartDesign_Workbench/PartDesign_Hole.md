---
title: Projekt Części Otwór
---
|  |
| --- |
| Projekt Części: otwór |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Otwór |
| Środowisko pracy |
| [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") |
|  |

## Opis

Funkcja **Otwór** tworzy jeden lub więcej otworów z okręgów wybranego szkicu. Jeśli są obecne łuki, muszą one być częścią zamkniętych konturów. Wszystkie elementy nie będące łukami/kolami są ignorowane, ale nadal muszą tworzyć zamknięte kontury. Można ustawić wiele parametrów, takich jak gwintowanie i rozmiar, pasowanie, typ otworu *(pogłębienie stożkowe, pogłębienie walcowe, lub bez pogłębiania)* i inne.

Środki okręgów i łuków są używane do pozycjonowania otworów, ale należy pamiętać, że ich promienie nie są brane pod uwagę. Wygenerowane otwory będą identyczne, nawet jeśli promienie będą się różnić.

![](/images/Countersunk_and_counterbored_holes_cross-section1.png)

Otwory pogłębione stożkowo *(z lewej strony)* i otwory pogłębione walcowo *(z prawej strony)* przekrój podłużny.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_Hole.svg) **Otwór**.
2. Jeśli zostanie wykryty istniejący, nieużywany szkic, zostanie on automatycznie zastosowany. Jeśli zostanie znalezionych więcej niż jeden szkic, zostanie wyświetlony panel **Wybierz rysunek** umożliwiający dokonanie wyboru. Alternatywnie można wybrać szkic przed uruchomieniem polecenia Otwór.
3. Zdefiniuj parametry otworu, które są opisane w sekcji [Opcje](#Opcje).
4. Naciśnij przycisk OK.

## Opcje

![](/images/PartDesign_Hole_parameters.png)

W zależności od wybranych opcji, niektóre pola będą aktywne lub nieaktywne.

* **Profil**:

:   Jeśli ustawione na *Brak*, nie jest definiowana żadna informacja o gwincie, a średnicę należy ustawić ręcznie.
:   Gdy ustawione na obsługiwany [standard](https://en.wikipedia.org/wiki/List_of_thread_standards), średnica i inne parametry mogą być ustawione automatycznie.

* **Gwintowany**: *Dostępne tylko, jeśli Profil nie jest ustawiony na Brak*

:   Jeśli zaznaczone, podana średnica będzie zalecanym rozmiarem wiertła do postprocessingu przy użyciu [gwintownika](https://en.wikipedia.org/wiki/Tap_and_die).
:   Jeśli nie zaznaczone, średnica jest ustawiana zgodnie z *Luzem*, aby gwint mógł przechodzić bez kontaktu.

* **Modeluj gwint**: *Dostępne tylko, jeśli Gwintowany*

:   Jeśli zaznaczone, modelowany jest rzeczywisty gwint. Proces ten zużywa dużo mocy obliczeniowej i zazwyczaj nie jest stosowany w modelach, chyba że do celów wizualizacji lub czasami w druku 3D. Jeśli jest używany, zaleca się zaznaczenie tej opcji jako jednej z ostatnich operacji w modelu, ponieważ znacznie wydłuża czas przeliczania.

* **Kierunek**: *Dostępne tylko, jeśli Gwintowany*

:   Ustawia kierunek gwintu jako prawoskrętny lub lewoskrętny.

* **Rozmiar**: *Dostępne tylko, jeśli Gwintowany*

:   Ustawia rozmiar gwintu. Wymaga, aby *Profil* nie był ustawiony na *Brak*.

* **Prześwit**: *Dostępne tylko, jeśli nie Gwintowany*

:   Określa odległość od wierzchołka gwintu do ściany otworu. Można to rozumieć jako to, jak *ciasno* śruba będzie przechodzić przez otwór.
:   Dla gwintów ISO średnice są zgodne z normą ISO 273.
:   Dla gwintów UTS są obliczane na podstawie reguły praktycznej, ponieważ brak normy je definiującej.

* **Klasa**: Określa klasę tolerancji.
* **Średnica**: Określa średnicę otworu, jeśli *Profil* jest ustawiony na *Brak*.
* **Głębokość**: Głębokość otworu od płaszczyzny szkicu.

:   *Wymiar*: Umożliwia wprowadzenie wartości.
:   *Przelotowy*: Wytnie otwór przez cały obiekt.
:   Aby zmniejszyć rozmiar pliku, nie używaj opcji *Przelotowy*, jeśli zaznaczone jest *Modeluj gwint* – zamiast tego określ minimalną głębokość.

### Wycięcie otworu

* **Typ wycięcia otworu**: ustawia typ wycięcia otworu: *Brak* oznacza brak wycięcia, inne typy to różne normy dla śrub oraz dwa typy ogólne *pogłębienie stożkowe* i *pogłębienie walcowe* oraz *nawiercenie stożkowe* *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*. Modele ISO i DIN 7984 pojawiają się jeśli jako *Profil* ustawione jest ISO lub DIN.
* **Średnica**: ustawia górną średnicę *(na płaszczyźnie szkicu)* dla wyciętego otworu.
* **Głębokość**: Głębokość jest różnie definiowana w zależności od *Typu wycięcia otworu*:
  + W przypadku *pogłębienia walcowego* jest to głębokość wyciętego otworu, mierzona od płaszczyzny szkicu.
  + Dla "pogłębienia stożkowego" jest to głębokość wierzchołka łba śruby poniżej płaszczyzny szkicu.
  + Dla "nawiercenia stożkowego" jest to głębokość cylindrycznej części wyciętego otworu.
* **Kąt pogłębiania stożkowego**: kąt stożkowego wycięcia otworu. Dotyczy tylko pogłębienia stożkowego, nawiercenia stożkowego, profili ISO 2009, ISO7046, ISO 10642.

### Czubek wiertła

* **Punkt wiercenia**: definiuje zakończenie otworu, jeżeli *Głębokość* jest ustawiona na *Wymiar*,
  + **Płaski** tworzy płaskie dno,
  + **Kątowe** tworzy stożkowy punkt,

:   Opcja **Uwzględnia głębokość** odejmie wysokość stożka od *Wymiaru*. Zatem jeśli np. *Wymiar* wynosi 7.00 i opcja ta nie jest użyta, część cylindryczna otworu będzie miała wartość 7.00, a głębokość niezbędna dla części stożkowej zostanie dodana do głębokości otworu. Jeśli opcja ta zostanie użyta, całkowita głębokość otworu wraz z punktem stożkowym będzie wynosić 7.00.

### Różne

* **Stożkowy**: ustawia kąt stożka otworu. Wartość jest obliczana na podstawie płaszczyzny normalnej szkicu.

:   Wartość 90 stopni ustawia prosty otwór.
:   Wartość poniżej 90 generuje mniejszy promień otworu na końcu a większy na początku.
:   Wartość powyżej 90 generuje większy promień otworu na końcu a mniejszy na początku.

* **Odwrócony**: odwraca kierunek wyciskania otworu. Domyślnym kierunkiem jest kierunek odwzorowania szkicu otworu, na jego punkt zaczepienia.

## Właściwości

Duża część właściwości Danych jest taka sama jak te prezentowane w sekcji [Opcje](#Opcje).

* DANE**Etykieta**: nazwa nadana obiektowi, ta nazwa może być zmieniona dla wygody.
* DANE**Ulepsz** : przyjmuje wartość `true` lub `false`. Jeśli jest ustawiona na `true`, oczyszcza bryłę z resztek krawędzi pozostawionych przez cechy. Zobacz stronę ![](/images/Part_RefineShape.svg) [Część: udoskonalanie kształtu](/Part_RefineShape "Part RefineShape") aby uzyskać więcej szczegółów.

## Ograniczenia

* Domyślnie element otworu jest wysuwany poniżej płaszczyzny szkicu. Jeśli bryła leży na płaszczyźnie **XY**, a szkic otworu jest dołączony do płaszczyzny **XY**, to będzie on próbował wytłaczać się z dala od bryły i pozornie nie da żadnego rezultatu. W takim przypadku należy ustawić opcję *Odwrócony*; alternatywnie szkic można zmapować do dolnej powierzchni bryły.

## Definicje typów cięcia

Typy cięcia *(typy śrub)* są zdefiniowane w plikach [json](https://de.wikipedia.org/wiki/JavaScript_Object_Notation). Istnieje zestaw plików dystrybuowanych z programem FreeCAD, ale użytkownicy mogą tworzyć własne definicje. Pliki są wyszukiwane w `<UserAppDataDir>/PartDesign/Hole`. Folder `UserAppDataDir` można odnaleźć, wpisując ciąg `App.getUserAppDataDir()` w [konsoli Python](/Python_console/pl "Python console/pl").

Plik ten powinien zawierać:

* **nazwa**: Nazwa definicji. Musi być ona unikalna, ponieważ będzie używana jako identyfikator w interfejsie użytkownika FreeCAD, oraz jako wewnętrzny indeks.
* **typ\_cięcia**: Albo `pogłębienie stożkowe` lub `pogłębienie walcowe`.
* **typ\_gwintu**: Albo  `metryczny`  albo  `metryczny drobnozwojowy` ..
* **kąt**: Kąt pogłębiania (nie jest konieczny dla pogłębienia walcoweego).
* **dane**: Lista rozmiarowa, obejmująca:
  + **gwint**: Nazwa gwintu używana w programie FreeCAD.
  + **średnicę**: Średnica cięcia.
  + **głębokość**: Głębokość pogłębienia *(nie jest konieczna w przypadku pogłębiania stożkowego)*.

Przykład:

```
{
    "name": "DIN 7984",
    "cut_type": "counterbore",
    "thread_type": "metric",
    "data": [
        { "thread": "M2",   "diameter":  4.3, "depth":  1.6 },
        { "thread": "M2.5", "diameter":  5.0, "depth":  2.0 },
        …
    ]
}

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Hole/pl&oldid=1561340>"