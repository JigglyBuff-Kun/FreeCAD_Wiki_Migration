---
title: Projekt Części Kieszeń
---
|  |
| --- |
| Projekt Części: Kiezeń |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Kieszeń |
| Środowisko pracy |
| [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") |
|  |

## Opis

Narzędzie **Kieszeń** wycina bryły poprzez wyciągnięcie szkicu lub ściany bryły wzdłuż prostej ścieżki.

![](/images/PartDesign_Pocket_example.svg)

*Profil szkicu (A) został odwzorowany na górnej ścianie bryły bazowej (B). Wynik po przebiciu kieszeni po prawej stronie.*

## Użycie

1. Wybierz pojedynczy szkic lub jedną lub więcej ścian.
2. Naciśnij przycisk ![](/images/PartDesign_Pocket.svg) **Kieszeń**.
3. Ustaw parametry kieszeni, patrz [Opcje](#Opcje) poniżej.
4. Kliknij OK.

## Opcje

Podczas tworzenia kieszeni lub po dwukrotnym kliknięciu istniejącej kieszeni w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl"), wyświetlany jest panel zadań **Parametry kieszeni**. Zawiera on następujące ustawienia:

![](/images/PartDesign_Pocket_Taskpanel.png)

### Typ

Opcja Typ oferuje pięć różnych sposobów określania długości, na jaką kieszeń będzie wytłaczana:

#### Wymiar

Wprowadź wartość liczbową dla **Długości** kieszeni. Dzięki opcji **Symetryczny do płaszczyzny**, kieszeń zostanie rozszerzony o połowę podanej długości na obie strony względem szkicu lub powierzchni.

#### Przez wszystkie

Kieszeń będzie rozciągać się do ostatniej powierzchni podpory, którą napotka w swoim kierunku. Z opcją **Symetryczna do płaszczyzny** kieszeń przetnie cały materiał w obu kierunkach. Należy pamiętać, że ze względów technicznych opcja **Przez wszystko** jest w rzeczywistości kieszenią o głębokości 10 metrów. Jeśli potrzebujesz głębszych kieszeni, użyj typu **Wymiar**.

#### Do pierwszego

Kieszeń będzie sięgać do pierwszej powierzchni podpory, którą napotka w swoim kierunku.

#### Do ściany

Kieszeń rozszerzy się do powierzchni. Naciśnij przycisk Wybierz ścianę i wybierz ścianę lub [płaszczyznę odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl") z bryły.

#### Dwa wymiary

Pozwala to na wprowadzenie drugiej długości, w której kieszeń powinna rozciągać się w przeciwnym kierunku. Parametr może zostać ponownie modyfikowany gdy zaznaczysz opcję **Odwrócony**.

#### Do kształtu

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kieszeń będzie utworzona aż do wskazanego kształtu. Opcjonalnie, wciśnij przycisk Wybierz kształt i wskaż kształt. Pozostaw pole Zaznacz wszystkie ściany włączone lub wyłącz je, wciśnij przycisk Wybierz i wskaż ściany, do których ma być utworzona kieszeń.

### Odsunięcie od ściany

Odsunięcie od powierzchni, na której ma się kończyć kieszeń. Opcja ta jest dostępna tylko gdy **Typ** jest ustawiony na **Przez wszystkie**, **Do pierwszego** lub **Do ściany**.

### Długość

Określa długość kieszeni. Opcja ta jest dostępna tylko wtedy, gdy opcja **Typ** ma wartość **Wymiar** lub **Dwa wymiary**.
Długość jest mierzona wzdłuż wektora kierunku lub wzdłuż normalnej do szkicu lub powierzchni. Wartości ujemne nie są możliwe. Zamiast tego użyj opcji **Odwrócony**.

### Druga długość

Określa długość kieszeni w przeciwnym kierunku wycinania. Można użyć wielu jednostek niezależnie od preferencji użytkownika dotyczących jednostek *(m, cm, mm, nm, ft lub ', in lub ")*. Opcja ta jest dostępna tylko gdy **Typ** jest ustawiony na **Dwa wymiary**.

### Symetrycznie do płaszczyzny

Zaznacz tę opcję, aby rozszerzyć kieszeń o połowę podanego kąta po obu stronach szkicu lub powierzchni, jeśli **Typ** to **Wymiar**, lub **Przez wszystkie**, jeśli taki jest **Typ**.

### Odwrócony

Odwraca kierunek wykonania kieszeni.

### Kierunek

#### Kierunek / krawędź

Można wybrać kierunek wyciągania:

* **Normalna szkicu** lub **Normalna ściany:** Szkic lub powierzchnia jest wyciągana w kierunku swojej normalnej. Jeśli wybrano kilka szkiców lub powierzchni do wyciągnięcia, użyta zostanie normalna pierwszego z nich.
* **Wybierz odniesienie ...:** Szkic lub powierzchnia jest wyciągana w kierunku prostej krawędzi lub [linii odniesienia](/PartDesign_Line/pl "PartDesign Line/pl") wybranej z bryły.
* **Kierunek niestandardowy:** Szkic lub powierzchnia jest wyciągana w kierunku określonego wektora.

#### Pokaż kierunek

Jeśli opcja jest zaznaczona, kierunek kieszeni zostanie wyświetlony. W przypadku, gdy kieszeń używa **Niestandardowego kierunku**, można go zmienić.

#### Długość wzdłuż wektora normalnego szkicu

Jeśli opcja jest zaznaczona, długość kieszeni jest mierzona wzdłuż kierunku wektora normalnego szkicu lub ściany, w przeciwnym razie wzdłuż kierunku niestandardowego.

### Kąt zwężenia

Przechyla kieszeń w kierunku wytłaczania o podany kąt. Kąt dodatni oznacza, że zewnętrzny brzeg kieszeni się rozszerza. Należy zauważyć, że wewnętrzne struktury otrzymują przeciwny kąt przechylenia. Ma to ułatwić projektowanie form i odlewów. Ta opcja jest dostępna tylko wtedy, gdy **Typ** jest ustawiony na **Wymiar** lub **Dwa wymiary**.

### Kąt drugiego zwężenia

Pochyla kieszeń w przeciwnym kierunku wyciągania o podany kąt. Patrz: **Kąt pochylenia**. Ta opcja jest dostępna tylko w przypadku gdy **Typ** to **Dwa wymiary**.

## Właściwości

### Dane

Projekt Części

* DANE**Udoskonal**: `Prawda` lub `Fałsz`. Czyści resztkowe krawędzie pozostawione po operacji. Ta właściwość jest początkowo ustawiana zgodnie z ustawieniami użytkownika *(znajduje się w **Preferencje → Projekt Części → Ogólne → Ustawienia modelu**)*.

Kieszeń

* DANE**Typ** (`Enumeration`): Określa w jaki sposób kieszeń będzie wytłaczana, patrz sekcja [Opcje](#Opcje).
* DANE**Długość** (`Length`): Określa długość kieszeni, patrz [Opcje](#Opcje).
* DANE**Długość2** (`Length`): Druga długość kieszeni w przypadku, gdy DANE**Typ** ma wartość **Dwa wymiary**, patrz [Opcje](#Opcje).
* DANE**Kierunek niestandardowy** (`Bool`): [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"). Jeśli opcja jest zaznaczona, kierunek kieszeni nie będzie wektorem normalnym szkicu, ale wektorem wskazanym, patrz sekcja [Opcje](#Opcje).
* DANE**Kierunek** (`Vector`): [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"). Wektor kierunku kieszeni, jeśli użyto DANE**Kierunek niestandardowy**.
* DANE**Oś odniesienia** (`LinkSub`)
* DANE**Wzdłuż normalnej szkicu** (`Bool`): [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"). Jeśli wartość ta zostanie ustawiona na `Prawda`, długość kieszeni będzie mierzona wzdłuż normalnej szkicu. W przeciwnym razie i jeśli użyto DANE**Kierunek niestandardowy**, jest ona mierzona wzdłuż niestandardowego kierunku.
* DANE**Do ściany** (`LinkSub`): Ściana, do której kieszeń będzie wytłaczana, patrz [Opcje](#Opcje).
* DANE**Odsunięcie** (`Length`)
* DANE**Kąt nachylenia** (`Angle`)
* DANE**Kąt nachylenia2** (`Angle`)

Szkic bazowy

* DANE**Profil** (`LinkSub`)
* DANE**Płaszczyzna pośrednia** (`Bool`)
* DANE**Odwrócony** (`Bool`)
* DANE**Zezwalaj na wiele ścian** (`Bool`)

## Ograniczenia

* Używaj typu **Wymiar** lub **Przez wszystkie**, gdy tylko jest to możliwe, ponieważ inne typy czasami sprawiają problemy, gdy są modelowane.
* W przeciwnym razie cecha kieszeni ma takie same [ograniczenia](/PartDesign_Pad/pl#Ograniczenia "PartDesign Pad/pl") jak cecha Wyciągnięcie.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pocket/pl&oldid=1526878>"