---
title: Projekt Części Subtraktywna helisa
---
|  |
| --- |
| Projekt Części: Subtraktywna helisa |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Subtraktywna helisa |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Addytywna helisa](/PartDesign_AdditiveHelix/pl "PartDesign AdditiveHelix/pl") |
|  |

## Opis

Narzędzie **Subtraktywna helisa** modyfikuje bryłę poprzez przesuwanie wybranego szkicu lub obiektu 2D po ścieżce spiralnej wycinającej materiał.

![](/images/PartDesign_SubtractiveHelix_example_overview.png)

*Profil (B) jest przesuwany wokół osi (A) w celu wytworzenia spiralnego rowka (C) w istniejącym wcześniej elemencie obrabianym*.

## Użycie

1. Wybierz szkic, który ma zostać przekształcony w helisę. Alternatywnie można użyć ściany na istniejącej bryle.
2. Naciśnij przycisk ![](/images/PartDesign_SubtractiveHelix.svg) **Subtraktywna helisa**.
3. Ustaw parametry helisy *(patrz następna sekcja)*.
4. Sprawdź helisę w oknie widoku, aby upewnić się, że parametry nie powodują samo przecinającej się helisy.
5. Naciśnij OK.

## Opcje

Podczas tworzenia helisy okno dialogowe **Parametry helisy** oferuje kilka różnych właściwości określających sposób przeciągnięcia szkicu.

![](/images/PartDesign_SubtractiveHelix_taskpanel.png)

### Oś

Ta opcja określa oś, wokół której szkic ma być obracany.

* **Oś normalna do szkicu**: wybiera normalną szkicu, która przechodzi przez początek szkicu jako oś. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl").
* **Pionowa oś szkicu**: wybiera pionową oś szkicu.
* **Pozioma oś szkicu**: wybiera poziomą oś szkicu.
* **Linia konstrukcyjna**: wybiera linię konstrukcyjną zawartą w szkicu używanym przez helisę. Lista rozwijana będzie zawierać pozycję dla każdej linii konstrukcyjnej. Pierwsza linia konstrukcyjna utworzona w szkicu będzie oznaczona jako *Linia konstrukcyjna 1*.
* **Oś bazowa (X/Y/Z)**: wybiera oś X, Y lub Z punktu położenia odniesienia bryły.
* **Wybierz odniesienie ...**: umożliwia wybór w oknie widoku 3D krawędzi na bryle lub [linii odniesienia](/PartDesign_Line/pl "PartDesign Line/pl").

### Tryb

Określa, jakie parametry zostaną użyte do zdefiniowania helisy. Dostępne opcje to:

* **Skok - wysokość - kąt**: definicja poprzez wysokość na obrót i wysokość całkowitą.
* **Skok - liczba obrotów - kąt**: definicja poprzez wysokość na obrót i liczbę obrotów
* **Wysokość - liczba obrotów - kąt**: definicja poprzez wysokość całkowitą i liczbę obrotów
* **Wysokość - liczba obrotów - przyrost** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): definicja poprzez całkowitą wysokość, liczbę zakrętów i przyrost promienia spirali. Wysokość równa zero prowadzi do ścieżki w formie spirali. Wysokość i przyrost równe zero prowadzą do ścieżki w kształcie okręgu.

### Skok

Odległość między zwojami w spirali.

### Wysokość

Wysokość spirali *(środek-środek)*.

### Obroty

Liczba zwojów w spirali. Definiowana jako wysokość / skok

### Kąt stożka

Kąt stożka tworzącego kształt spirali Dopuszczalny zakres: [-89°, +89°].

### Lewostronnie

Jeśli opcja zostanie zaznaczona, kierunek tworzenia helisy ulegnie odwróceniu z domyślnego zgodnego z ruchem wskazówek zegara na przeciwny.

### Odwrócony

Jeżeli opcja ta jest zaznaczona, kierunek osi helisy jest odwrócony w stosunku do domyślnego.

### Usuń za obrębem profilu

Jeśli opcja ta jest zaznaczona, wynikiem będzie punkt przecięcia przeciągniętego profilu i istniejącej Zawartości.

### Aktualizuj widok

Jeśli opcja ta jest zaznaczona, helisa będzie wyświetlana w oknie widoku w trakcie tworzenia i automatycznie aktualizowana przy każdej zmianie parametrów.

## Ustawienia

* Helisa subtraktywna, która nie przecina bryły, będzie widoczna w podglądzie, jeśli parametr **Przybory → Edycja parameterów... → BaseApp → Preferencje → Mod → PartDesign → SubtractiveHelixPreview** jest ustawiony na `PRAWDA`. Domyślną wartością dla tej preferencji jest `PRAWDA`. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl").

## Właściwości

* DANE**Skok**: Odległość osiowa między dwoma zwojami.
* DANE**Wysokość**: Całkowita długość spirali *(bez uwzględnienia zasięgu profilu)*.
* DANE**Obroty**: Liczba obrotów *(nie musi być liczbą całkowitą)*.
* DANE**Lewostronnie**: Zobacz akapit [Lewostronnie](#Lewostronnie).
* DANE**Odwrócony**: Zobacz akapit [Odwrócony](#Odwrócony).
* DANE**Kąt**: Szybkość, z jaką promień spirali zwiększa się wzdłuż osi. Dozwolony zakres: [-89°, +89°].
* DANE**Oś odniesienia**: Oś helisy.
* DANE**Tryb**: Tryb wejściowy helisy *(skok-wysokość, skok-obrót, obrót-wysokość)*.
* DANE**Zewnętrzny**: Jeżeli parametr ma wartość true, wynikiem będzie przecięcie profilu przeciągniętego i istniejącej wcześniej bryły.
* DANE**Został edytowany**: Jeśli wartość tego parametru to `Fałsz`, narzędzie zaproponuje początkową wartość nachylenia w oparciu o obwiednię profilu, aby uniknąć samoczynnego przecięcia.
* DANE**Ulepsz**: Przyjmuje wartość `Prawda` lub `Fałsz`. Jeśli ustawiona jest wartość true, czyści bryłę z resztkowych krawędzi pozostawionych przez elementy. Zobacz stronę [Część: Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl") aby uzyskać więcej szczegółów.
* DANE**Profil**: Albo szkic zawierający zamknięty kontur, albo ściana.
* DANE**Płaszczyzna środkowa**: Nieużywane.
* DANE**Aż do ściany**: Nieużywane.
* DANE**Zezwalaj na wiele ścian**: Nieużywane.

## Uwagi

* Narzędzie ![](/images/PartDesign_ShapeBinder.svg) [Łącznik kształtu](/PartDesign_ShapeBinder/pl "PartDesign ShapeBinder/pl") nie może być użyte dla profilu.
* Podczas korzystania z narzędzia ![](/images/PartDesign_SubShapeBinder.svg) [Łącznik kształtów podrzędnych](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl") dla profilu, wybranie spoiwa w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") nie powiedzie się, zamiast tego powierzchnia wiążąca musi zostać wybrana w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveHelix/pl&oldid=1425246>"