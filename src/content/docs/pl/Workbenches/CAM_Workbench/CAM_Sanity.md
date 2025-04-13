---
title: CAM Bezpieczeństwo
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Bezpieczeństwo |
| Lokalizacja w menu |
| CAM → Sprawdź zadanie ścieżki pod kątem typowych błędów |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| P S |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| *brak* |
|  |

## Opis

Wielu użytkowników środowiska pracy CAM to hobbyści i majsterkowicze. W związku z tym używają oni swoich maszyn CNC do uruchamiania G-kodu, który sami skonfigurowali i wygenerowali. Inaczej jest w przypadku większości profesjonalnych / komercyjnych użytkowników. W profesjonalnych warsztatach za tworzenie G-kodu odpowiadają *(programiści CNC)* inni ludzie, niż ci, którzy uruchamiają go na maszynach *(operator CNC)*.

Hobbyści zwykle uruchamiają G-kod zaledwie kilka minut po jego przetworzeniu i prawdopodobnie tylko raz lub dwa razy. W profesjonalnym warsztacie sprawdzony G-kod może być uruchamiany wiele razy przez miesiące lub lata po jego wygenerowaniu.

Jedną z kwestii, która pojawia się w profesjonalnym warsztacie CNC, jest to, że programista przyjmuje wiele założeń, które NIE są przekazywane w samym G-kodzie. Na przykład, G-kod może wywoływać narzędzie "T3", ale o ile nie jest to skomentowane, G-kod nie mówi, do jakiego rodzaju narzędzia odnosi się "T3". Zakłada się po prostu, że T3 w systemie CAM jest tym samym, co T3 na maszynie. Istnieje wiele takich założeń dotyczących konfiguracji maszyny, narzędzi, materiału, orientacji części itp. Nawet jeśli G-kod jest doskonały, jeśli operator nie skonfiguruje maszyny z tymi samymi założeniami, może dojść do awarii.

Komercyjne warsztaty często tworzą "książkę ustawień", która dokumentuje wszystkie te założenia i daje operatorom wszystko, czego potrzebują do skonfigurowania maszyny i wyprodukowania części.

![](/images/CAM_Sanity.svg) **Bezpieczeństwo** jest narzędziem w środowisku pracy CAM do generowania tego rodzaju informacji. Wynikiem tego polecenia jest samodzielny plik `.html` z osadzonymi obrazami.

![](/images/Sanity.jpg)

Powyżej: Przykład wygenerowanego raportu CAM Bezpieczeństwo

## Informacje o raporcie

O ile to możliwe, treść jest niezależna od programu FreeCAD. Operator CNC może nigdy nie używać FreeCAD, więc terminologia specyficzna dla FreeCAD / CAM jest myląca. Raport ma odrębne sekcje i jest sformatowany tak, aby wyszukiwanie było łatwe i przewidywalne.

## Informacje o detalu

Ta sekcja zawiera przegląd tego, co jest tworzone. Idealnie obraz powinien pokazywać obiekty bazowe. Jeśli istnieje wiele obiektów bazowych, obraz powinien pokazywać sposób ich zagnieżdżania.

### Podsumowanie procesu

Umożliwia szybki podgląd minimalnej i maksymalnej wysokości oraz czasu pracy.

### Surowe naddatki

Szczegóły obiektu naddatków z zadania. Jest to obszar, w którym środowisku CAM przydałaby się pewna poprawa. Przydałaby się tutaj podstawowa właściwość materiału dla naddatku, a także mogłaby zostać wykorzystana do sugerowania posuwów / prędkości.

### Dane narzędzi

Zawiera sekcje dla każdego numeru narzędzia używanego w zadaniu. Zawiera szczegółowe informacje na temat tego, co programista zakłada jako narzędzie i które operacje go używają. Ta sekcja działa tylko z nowym systemem magazynu [narzędzi](/CAM_ToolBit/pl "CAM ToolBit/pl"). Jest to kolejny obszar, w którym środowisko CAM wymaga poprawy. W szczególności zestawy narzędzi wymagają dodatkowych atrybutów dotyczących narzędzia, takich jak producent / url / numer części.

### Rezultat

Podaje szczegółowe informacje o tym, gdzie i kiedy G-kod został przetworzony. Pokazuje również, czy zadanie zawiera opcjonalne / obowiązkowe postoje, dzięki czemu operator wie, czy można bezpiecznie odejść od maszyny podczas pracy.

### Chłodzenie

Jaki rodzaj chłodziwa jest wymagany, jeżeli jest stosowane.

### Oprawki i uchwyty robocze

Wyświetla części w kontekście obszaru magazynowego, a także pokazuje pochodzenie części.

### Problemy

Ostrzeżenia i błędy wykryte przez funkcję **Bezpieczeństwo**. Mogą to być problemy lub nie, ale są one odnotowywane w celu zwrócenia dodatkowej uwagi. Na przykład, jeśli ten sam numer narzędzia jest używany dla różnych zestawów narzędzi, zostanie to wyświetlone jako błąd. Jeśli kontroler narzędzia nie ma skonfigurowanego posuwu/prędkości, zostanie to wyświetlone jako ostrzeżenie. Wykryje również i ostrzeże o nieużywanych kontrolerach narzędzi. Środowisko CAM skorzystałoby tutaj z możliwości dodawania dowolnych notatek lub ostrzeżeń.

## Użycie

1. Wybierz ![](/images/CAM_Job.svg) [Zadanie](/CAM_Job/pl "CAM Job/pl") w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/CAM_Sanity.svg) **Sprawdź zadanie ścieżki pod kątem typowych błędów**.
   * Wybierz z menu opcję **CAM → ![](/images/CAM_Sanity.svg) Sprawdź zadanie ścieżki pod kątem typowych błędów**.
   * Użyj skrótu klawiaturowego: P, a następnie S.
3. Odpowiednie informacje są gromadzone w słowniku Python, a następnie formatowane do formatu asciidoc.
4. Plik asciidoc jest zapisywany na dysku w tej samej lokalizacji, co plik, który zostanie przetworzony.
5. Zewnętrzny proces wywołuje asciidoctor, aby odczytać asciidoc i wygenerować plik w formacie `.html`.
6. Spowoduje to automatyczne uruchomienie systemowej przeglądarki internetowej w celu wyświetlenia wygenerowanego samodzielnego raportu HTML.

## Uwagi

* Asciidoc to lekki format znaczników do tworzenia notatek, artykułów, książek itp. Jest czytelny dla człowieka i łatwy do przetłumaczenia na inne formaty.

* Asciidoctor to szybki procesor tekstu o otwartym kodzie źródłowym do konwersji asciidoc na HTML, PDF lub inne formaty. Jest dostępny dla systemów Linux, Windows i MacOS. Asciidoctor nie jest instalowany z programem FreeCAD. Jeśli użyjesz **CAM Bezpieczeństwo** bez zainstalowania Asciidoctor, plik źródłowy asciidoc zostanie wygenerowany, ale wynikowy HTML nie zostanie wygenerowany. Zobacz informacje na stronie [domowej tego narzędzia](https://asciidoctor.org/).

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Sanity/pl&oldid=1388687>"