---
title: MES Siatka MES z kształtu generowana przez Gmsh
---

|                                                      |
| ---------------------------------------------------- |
| MES: Siatka MES z kształtu generowana przez Gmsh     |
| Lokalizacja w menu                                   |
| Siatka → Siatka MES z kształtu generowana przez Gmsh |
| Środowisko pracy                                     |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")          |
| Domyślny skrót                                       |
| _brak_                                               |
| Wprowadzono w wersji                                 |
| -                                                    |
| Zobacz także                                         |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")   |
|                                                      |

| Solvery   |
| --------- |
| Wszystkie |

## Opis

Geometria do analizy metodą elementów skończonych musi być poddana dyskretyzacji do [siatki MES](/FEM_Mesh/pl "FEM Mesh/pl"). To narzędzie korzysta z programu [Gmsh](https://en.wikipedia.org/wiki/Gmsh) (który musi być zainstalowany w systemie) do generowania siatki.

W zależności od Twojego systemu operacyjnego i pakietu instalacyjnego, Gmsh może być dołączony do programu FreeCAD lub nie. Więcej informacji można znaleźć na stronie [Instalacja środowiska MES](/FEM_Install/pl#Generator_siatki_MES "FEM Install/pl").

## Użycie

1. Wybierz kształt, który chcesz analizować. Dla objętości musi to być bryła pojedyncza lub złożona. Bryła złożona jest konieczna jeśli część jest wykonana z wielu materiałów _(bryłę złożoną można utworzyć przy pomocy narzędzia [Fragmentacja funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl"))_.
2. Aktywuj narzędzie na jeden z następujących sposobów:
   - Wciśnij przycisk ![](/images/FEM_MeshGmshFromShape.svg) **Siatka MES z kształtu generowana przez Gmsh**.
   - Wybierz opcję **Siatka → ![](/images/FEM_MeshGmshFromShape.svg) Siatka MES z kształtu generowana przez Gmsh** z menu.
3. Opcjonalnie, edytuj minimalny i maksymalny rozmiar elementu _(domyślne ustawienie często tworzy zbyt rzadkie siatki)_. Możesz też zmienić przestrzeń elementów (ale domyślne ustawienie _From shape_ zwykle wystarczy) i ich rząd.
4. Wciśnij przycisk Zastosuj i poczekaj aż zakończy się generowanie siatki. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Opcjonalnie, wciśnij przycisk Anuluj aby zatrzymać generowanie siatki.
5. Wciśnij przycisk OK aby zamknąć okno dialogowe. Powinieneś widzieć nowy obiekt FEMMeshGmsh dodany do aktywnego kontenera analizy. Możesz też kliknąć Anuluj aby anulować zmiany bądź tworzenie obiektu siatki.

Po utworzeniu siatki można zmienić jej właściwości używając [edytora właściwości](/Property_editor/pl "Property editor/pl"). Po zmianie właściwości należy ponownie otworzyć okno dialogowe narzędzia i wcisnąć przycisk Zastosuj _(można zostawić okno dialogowe otwarte podczas zmieniania właściwości)_.

Przycisk Wersja Gmsh pozwala sprawdzić szczegóły dotyczące aktualnie używanego pliku wykonywalnego Gmsh.

## Właściwości

- DANE**Algorithm2D**: Algorytm do tworzenia siatek 2D. Dostępne algorytmy są opisane [na stronie projektu GMSH](https://gmsh.info/doc/texinfo/gmsh.html#Choosing-the-right-unstructured-algorithm). Dla Delaunay zobacz stronę [triangulacja Delone](https://pl.wikipedia.org/wiki/Triangulacja_Delone).
- DANE**Algorithm3D**: Algorytm do tworzenia siatek 3D. Dostępne algorytmy są opisane [na stronie projektu GMSH](https://gmsh.info/doc/texinfo/gmsh.html#Choosing-the-right-unstructured-algorithm).
- DANE**Characteristic Length Max**: Maksymalny rozmiar elementów. Jeśli ustawione jest _0.0_ to rozmiar zostanie dobrany automatycznie. Ta właściwość może być również zmieniona w oknie dialogowym narzędzia w polu **Maksymalny rozmiar elementu**.
- DANE**Characteristic Length Min**: Minimalny rozmiar elementów. Jeśli ustawione jest `0.0` to rozmiar zostanie dobrany automatycznie. Ta właściwość może być również zmieniona w oknie dialogowym narzędzia w polu **Minimalny rozmiar elementu**.
- DANE**Coherence Mesh**:
  - `Prawda` _(domyślne)_ zduplikowane węzły siatki zostaną usunięte
  - `Fałsz`
- DANE**Element Dimension**: Przestrzeń elementów siatki. Ta właściwość może być również zmieniona w oknie dialogowym narzędzia w polu **Wymiar elementu**.
  - From Shape _(domyślne)_ przestrzeń zostanie określona na podstawie przestrzeni obiektu, dla którego siatka jest generowana
  - 1D
  - 2D
  - 3D
- DANE**Element Order**: [Rząd elementów](https://www.comsol.de/support/knowledgebase/1270). Ta właściwość może być również zmieniona w oknie dialogowym narzędzia w polu **Kolejność elementów**. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
  - 1st
  - 2nd _(domyślne)_  
    **Uwaga:** Jeśli korzystasz z solvera [Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl"), możesz trafić na ten błąd: _ERROR:: GetEdgeBasis: Can't handle but linear elements, sorry._ To oznacza, że dane równanie _(typ analizy)_ nie wspiera siatek drugiego rzędu. W takim wypadku użyj siatki pierwszego rzędu lub sprawdź stronę wiki danego równania żeby znaleźć ewentualne możliwości używania siatek drugiego rzędu.
- DANE**Geometrical Tolerance**: Tolerancja geometryczna dla dopasowania siatki do krawędzi obiektu. Domyślne ustawienie _0.0_ oznacza, że Gmsh skorzysta z wartości 1e-8.
- DANE**Groups Of Nodes**: Wszystkie węzły a nie tylko elementy zostaną zapisane dla każdej fizycznej grupy siatki. Fizyczne grupy siatki to zbiory obiektów siatki _(punktów, krawędzi, powierzchni i objętości)_. Są one identyfikowane za pomocą przestrzeni i indywidualnego oznaczenia. Przykładowo, siatka tego samego obszaru obiektu jest wewnętrznie oznaczana tak samo. Więc wszystkie powierzchnie tego obszaru będą tworzyły jedną grupę fizyczną.
- DANE**High Order Optimize**: Czy i jak siatki z właściwością DANE**Element Order** = _2nd_ są optymalizowane. Optymalizacja odbywa się poprzez deformację krawędzi elementu.  
  [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") Gmsh wspiera różne algorytmy optymalizacji. **Elastic** to algorytm, w którym elementy siatki są traktowane jako kolekcja deformowalnych ciał lepkosprężystych. Siatki pierwszego rzędu nie mogą być optymalizowane, ponieważ ich krawędzie są liniowe i nie można ich deformować.
- DANE**Mesh Size From Curvature** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): Liczba elementów siatki na

  2
  π
  {\displaystyle 2\pi }
  ![{\displaystyle 2\pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/73efd1f6493490b058097060a572606d2c550a06) razy promień krzywizny. Aby uzyskać gęstszą siatkę dla małych wierzchołków lub otworów, należ zwiększyć tą wartość dla lepszych wyników.

![](/images/FEM_Gmsh-MeshSizeFromCurvature.png)

Efekt właściwości _Mesh Size From Curvature'_. Po lewej: ustawionej na 12. Po prawej: dezaktywowanej.

- DANE**Optimize Netgen**: Czy siatka będzie optymalizowana przy pomocy generatora siatki 3D [Netgen](https://github.com/NGSolve/netgen) aby poprawić jakość elementów czworościennych. **Uwaga:** ponieważ Netgen może tworzyć tylko elementy czworościenne, ta opcja jest ignorowana dla siatek, których właściwość DANE**Element Dimension** nie jest ustawiona na _3D_.
- DANE**Recombination Algorithm** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): Algorytm używany przez DANE**Recombine 3D All** i przez DANE**Recombine All**. Więcej informacji można znaleźć w sekcji [Rekombinacja elementów](#Rekombinacja_elementów) a szczegóły technicznej znajdują się w [dokumentacji Gmsh](https://www.gmsh.info/doc/texinfo/gmsh.html#t11).
- DANE**Recombine 3D All** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): Stosuje algorytm rekombinacji 3D dla wszystkich objętości. Czworościany będą przekształcone w pięciościany, prostopadłościany lub piramidki gdzie będzie to możliwe.
- DANE**Recombine All**: Stosuje algorytm rekombinacji dla wszystkich powierzchni. Trójkąty będą przekształcone w czworokąty gdzie będzie to możliwe a recombination algorithm to all surfaces.
- DANE**Optimize Std** Optymalizuje siatkę aby zwiększyć jakość elementów czworościennych.
- DANE**Second Order Linear**: Czy węzły elementów drugiego rzędu _(jeśli wlaściwość DANE**Element Order** jest ustawiona **2nd**)_ i / lub punkty zagęszczania siatki są tworzone przez interpolację liniową.
  - `Prawda` używana jest interpolacja liniowa.
  - `Fałsz` _(domyślne)_ używana jest interpolacja krzywoliniowa.
- DANE**Algorytm podziału**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): umożliwia tworzenie elementów czworościennych i sześciościennych przez podział.
  - Brak: nie używa żadnego algorytmu podziału.
  - Wszystkie czworokąty: tworzy elementy czworokątne poprzez podział.
  - Wszystkie heksaedry: tworzy elementy heksaedralne poprzez podział.
  - Barocentryczny: tworzy elementy trójkątne poprzez podział barycentryczny.

## Uwagi

### Ujemne jakobiany

Jeśli pojawia się błąd o ujemnych jakobianach, można wypróbować następujące podejściaː

- Ustawić właściwość DANE**Second Order Linear** na `Prawda`, ale zostawić DANE**Element Order** na _2nd_.
- Ustawić DANE**Element Order** na _1st_.
- Zmniejszyć rozmiar elementów siatki poprzez redukcję DANE**Characteristic Length Max**.
- Jeśli używany jest solver ccxtools i przycisk uruchamiania _(nie panel zadań)_ to węzły elementów z ujemnymi jakobianami będą zaznaczone na zielono.

### Wzrost siatki

Na krawędziach i małych obiektach geometrycznych siatka musi być mniejsza niż w obszarach z dala od krawędzi. Więc rozmiar elementu rośnie w oddaleniu od krawędzi. Strategia wzrostu siatki w Gmsh to wzrost między krawędziami o różnych rozmiarach. Więc wzrost zawodzi jeśli obszar ma krawędzie o tych samych rozmiarach jak w poniższym przykładzieː

![](/images/FEM_Gmsh-MeshGrowth-failing.png)

Wzrost siatki zawodzi, ponieważ obszar cylindryczny jest otoczony takimi samymi krawędziami.

Aby umożliwić rozsądny wzrost siatki, należy w takim przypadku dodać krawędź do tego obszaru. W tym przykładzie byłby to okrąg w środku walca. Okrąg jest dodany jako część bryły złożonej z [fragmentacji funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl"), zobacz [plik projektu](https://forum.freecadweb.org/download/file.php?id=146255) tego przykładu.

![](/images/FEM_Gmsh-MeshGrowth-success.png)

Rozsądny wzrost siatki dzięki dodatkowej krawędzi w środku cylindrycznego obszaru.

### Rekombinacja elementów

Elementy mogą być rekombinowane na dwa sposoby, na powierzchni obiektów tak, że trójkąty są przekształcane w czworoboki jeśli to możliwe i w objętości obiektów tak, że czworościany są przekształcane w pięciościany, prostopadłościany lub piramidki jeśli to możliwe. Oczywiste jest, iż wynik rekombinacji silnie zależy od geometrii obiektu i że rekombinacja obiektu 3D tylko na powierzchni zwykle prowadzi do niepożądanych rezultatów.

Zostało to przedstawione na rysunku poniżej. Siatka dla prostopadłościanu jest tworzona ze standardowymi ustawieniami _(czworościany drugiego rzędu)_ To rysunek w lewym górnym rogu. Rysunek w prawym górnym rogu pokazuje wynik gdy dodatkowo elementy są rekombinowane tylko na powierzchni obiektu. Wynik jest zły, ponieważ zmienione elementy na powierzchni nie pasują do niezmienionych elementów w objętości. Więc sama właściwość DANE**Recombine All** zwykle ma sens tylko dla siatek 2D.  
Jeśli używana jest dodatkowo właściwość DANE**Recombine 3D All**, wynik jest lepszy _(lewy dolny rysunek)_. Jednak wynik nie odbiega znacząco od siatki bez rekombinacji. Ponieważ obiekt jest prostopadłościanem, rozsądne jest użycie algorytmu rekombinacji, który próbuje też utworzyć prostopadłościany. Taki wynik jest pokazany na prawym dolnym rysunku.

Algorytm rekombinacji _Simple_ zostawi pewną liczbę trójkątów w siatce jeśli rekombinacja prowadzi do złej jakości czworoboków. W takich przypadkach należy użyć algorytmu _full-quad_, który automatycznie tworzy rzadszą siatkę a następnie dokonuje rekombinacji, wygłaszania i podziału. Więcej informacji można znaleźć [w tym wątku na forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=20351#p520392).

![](/images/FEM_Gmsh-Recombination.png)

Efekt rekombinacji elementów siatki.  
Górny lewy róg: standardowa siatka.  
Górny prawy róg: rekombinacja tylko na powierzchni przy pomocy algorytmu **Simple**.  
Dolny lewy róg: rekombinacja na powierzchni i w objętości przy pomocy algorytmu **Simple**.  
Dolny prawy róg: rekombinacja na powierzchni i w objętości przy pomocy algorytmu **Simple full-quad**

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshGmshFromShape/pl&oldid=1542241>"
