---
title: Poradnik Tworzenie gwintów
---

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                                                          |
| Temat                                                                                                                                              |
| Projektowanie wyrobu                                                                                                                               |
| Poziom trudności                                                                                                                                   |
| Zaawansowany                                                                                                                                       |
| Czas wykonania                                                                                                                                     |
| 60 minut                                                                                                                                           |
| Autorzy                                                                                                                                            |
| [DeepSOIC](/User:DeepSOIC "User:DeepSOIC"), [Murdic](/index.php?title=User:Murdic&action=edit&redlink=1 "User:Murdic (page does not exist)"), vocx |
| Wersja FreeCAD                                                                                                                                     |
| 0.19                                                                                                                                               |
| Pliki z przykładami                                                                                                                                |
| [Aktualizacja - Przewodnik: Tworzenie gwintów.](https://forum.freecad.org/viewtopic.php?f=36&t=44668)                                              |
| Zobacz również                                                                                                                                     |
| _-_                                                                                                                                                |
|                                                                                                                                                    |

## Wprowadzenie

Ten poradnik jest zbiorem technik modelowania gwintów śrubowych w programie FreeCAD. Został on zaktualizowany dla wersji **0.19**, chociaż ogólny proces jest zasadniczo taki sam od v0.14, kiedy to poradnik ten został pierwotnie napisany. Zaktualizowana zawartość skupia się na użyciu środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), aby utworzyć gwint, ale nie używa narzędzia ![](/images/PartDesign_AdditiveHelix.svg) [Addytywna helisa](/PartDesign_AdditiveHelix/pl "PartDesign AdditiveHelix/pl") środowiska Projekt Części, ponieważ zostało ono wprowadzone później.

W tradycyjnych systemach CAD modelowanie gwintów śrubowych jest odradzane, ponieważ stanowi duże obciążenie dla jądra modelowania, jak również podczas renderowania kształtów. W tradycyjnych systemach gwint nie musi być przedstawiany bezpośrednio w przestrzeni 3D, ponieważ można go wskazać z jego wymaganą charakterystyką na rysunku technicznym, który jest wysyłany do produkcji. Jednakże, wraz z popularyzacją produkcji dodatków _(druk 3D)_, istnieje obecnie realna potrzeba modelowania gwintów przestrzennych, aby wydrukować je dokładnie tak, jak zostały zaprojektowane. I właśnie dlatego powstał ten poradnik.

Wiele z prezentowanych tu technik zostało zebranych z różnych wątków forum:

- [Techniki modelowania gwintu](https://forum.freecad.org/viewtopic.php?f=3&t=12593)
- [Tworzenie gwintu: Nieoczekiwane rezultaty](https://forum.freecad.org/viewtopic.php?f=3&t=6506)

Zobacz też pomocne filmy:

- [Wprowadzenie strategii projektowania śruby bez powszechnie spotykanych problemów.](https://forum.freecad.org/viewtopic.php?f=8&t=44259)

Należy pamiętać, że kształty gwintów zajmują dużo pamięci, a posiadanie tylko jednego gwintu w dokumencie może znacznie zwiększyć rozmiar pliku, dlatego zaleca się tworzenie gwintów tylko wtedy, gdy jest to absolutnie konieczne.

### Metoda 1. Używanie narzędzi i części ze stanowisk pracy

Korzystanie z narzędzi i części, które opracowały inne osoby, jest wygodne i pozwala zaoszczędzić wiele czasu. Zapoznaj się z stroną zawierającą informacje o [zewnętrznych Środowiskach pracy](/External_workbenches/pl "External workbenches/pl").

W szczególności polecane są trzy zasoby, które mogą być zainstalowane z narzędzia [Addon Manager](/Std_AddonMgr "Std AddonMgr"):

- Środowisko pracy [Elementy Złączne](/Fasteners_Workbench/pl "Fasteners Workbench/pl"), aby dodawać i mocować różne elementy złączne do części. Śruby i nakrętki domyślnie nie pokazują gwintu, ale można to kontrolować za pomocą opcji.
- Środowisko pracy [BOLTSFC](/BOLTSFC_Workbench/pl "BOLTSFC Workbench/pl"), do umieszczania elementów złącznych z biblioteki BOLTS.
- Środowisko pracy [ThreadProfile](/ThreadProfile_Workbench/pl "ThreadProfile Workbench/pl"), do tworzenia wspólnych gwintów.

![](/images/T13_00_Threads_fasteners.png)

Różne standardowe wkręty osadzone w Środowisku pracy Elementy Złączne _(Fasteners)_. Istnieje możliwość kontroli, czy obiekt przedstawia prawdziwy gwint, czy tylko zwyczajny cylinder.

## Metoda 2. Używanie makrodefinicji (przestarzałe)

- W przeszłości, do wstawiania części z biblioteki BOLTS używano [Makra BOLTS](/Macro_BOLTS "Macro BOLTS"). Teraz jest już ono nieaktualne. Zamiast tego należy użyć Środowiska pracy [BOLTSFC](/BOLTSFC_Workbench/pl "BOLTSFC Workbench/pl").

Znany jest skrypt [Screw Maker](/Macro_screw_maker1_2/pl "Macro screw maker1 2/pl") autorstwa ulrich1a, został użyty do stworzenia pojedynczych śrub, wkrętów i podkładek. Obecnie jest to już przestarzałe rozwiązanie. Środowisko pracy [Fasteners](/Fasteners_Workbench/pl "Fasteners Workbench/pl") autorstwa shaise, zawiera kompletne makro do tworzenia śrub, wraz z GUI do wyboru odpowiedniego elementu.

## Metoda 3. Imitacja przez ułożenie stosu krążków.

w wielu przypadkach nie potrzebujemy rzeczywistych gwintów, potrzebujemy tylko wizualnej wskazówki, że gwinty tam będą.

Fałszywy gwint możemy utworzyć za pomocą ścieżki bez spirali, np. obracając profil piły lub układając w stosy tarcze o stożkowych krawędziach. Tego rodzaju sztuczny gwint jest trudny do rozpoznania obok prawdziwie ślimakowego poprzez zwykłą obserwację. Ta metoda jest dobra do wizualizacji obiektu przypominającego gwint, ale nie jest przydatna, jeśli musimy wydrukować rzeczywisty gwint techniką 3D.

![](/images/T13_01_Threads_comparison_fake_real.png)

Po lewej: prosta śruba ze sztucznym, nie spiralnym gwintem. Z prawej: zwykła śruba z prawdziwym gwintem spiralnym. Gdy druk 3D nie jest potrzebny, do wizualizacji często wystarcza symulowany gwint.

### Obrotowy profil piły zębatej

1. Kliknij w przycisk ![](/images/PartDesign_Body.svg) [PatrDesign: Stwórz zawartość](/PartDesign_Body "PartDesign Body").
2. Kliknij w przycisk ![](/images/PartDesign_NewSketch.svg) [PatrDesign: Utwórz nowy szkic](/PartDesign_NewSketch "PartDesign NewSketch"). Wybierz `Płaszczyznę XZ`.
3. Narysuj szkic zamknięty z odpowiednią średnicą wewnętrzną `10mm`, zewnętrzna średnica wokół `12.6mm`, gęstość `3mm`, liczba ząbków `8`, oraz wysokość całkowita `30mm`.
4. Wybierz narysowany szkic, a następnie kliknij na przycisk ![](/images/PartDesign_Revolution.svg) [PatrDesign: Wyciągnij przez obrót](/PartDesign_Revolution "PartDesign Revolution"). Wybierz `Pionowa oś szkicu`, i kliknij w OK.

![](/images/T13_02_Threads_Sawtooth_sketch_profile.png)

Profil używany do stworzenia wyciągnięcia przez obrót, który będzie symulować gwint.

![](/images/T13_03_Threads_Sawtooth_revolution_1.png) ![](/images/T13_04_Threads_Sawtooth_revolution_2.png)

Widok przekroju powstałego gwintu nie spiralnego poprzez obracanie profilu piły wokół osi pionowej.

### Krążki ułożone w stosy

1. Powtarzamy dwa pierwsze kroki z poprzedniej sekcji.
2. Narysuj szkic zamknięty z wymaganą średnicą wewnętrzną `10mm`, średnicą zewnętrzną wokół `12,6mm`, i podziałką `3mm`, ale narysuj tylko jeden ząb piły.
3. Wybierz narysowany szkic, a następnie kliknij na przycisk ![](/images/PartDesign_Revolution.svg) [PatrDesign: Wyciągnij przez obrót](/PartDesign_Revolution "PartDesign Revolution"). Wybierz `Pionowa oś szkicu`, i kliknij w OK.
4. Wybierz obiekt wyjściowy `Wyciągnięcia przez obrót`, kolejnie kliknij w ![](/images/PartDesign_LinearPattern.svg) [PartDesign: Utwórz szyk liniowy](/PartDesign_LinearPattern "PartDesign LinearPattern"). Wybierz `Oś pionową szkicu`. Dla imitacji gwintu z podziałką `3mm`, ustaw **Długość** na `3`, oraz wartość **Wystąpienia** na `2`, następnie naciśnij przycisk OK. W ten sposób powstaną dwa kolejne krążki, jeden na drugim.
5. Możesz dodać więcej krążków, zwiększając wartość **Wystąpienia** w formacji liniowej oraz zwiększając **Długośc**, która jest całkowitą długością imitowanego gwintu.

Opcje **Długośc** oraz **Wystąpienia** są powiązane ze sobą. Jeśli długość jest zbyt duża, ale liczba wystąpień nie jest wystarczająco duża, nastąpi rozdzielenie krążków, a obliczenie bryły zakończy się niepowodzeniem, ponieważ obiektem wynikowym musi być zawsze [jedna zwarta bryła](/PartDesign_Body/pl "PartDesign Body/pl"). Na przykład, aby uzyskać całkowitą wysokość `30mm`, ustaw wartość **Długość** na `27mm` i **Wystąpienia** na wartość `10`.

Jeśli chcesz, możesz dodać ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign: Dodatkowy cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder") o średnicy równej wewnętrznej średnicy krążków i o całkowitej wysokości gwintu. Dzięki temu wszystkie krążki zostaną połączone w jedną bryłę, co gwarantuje, że nie zostaną rozłączone.

![](/images/T13_05_Threads_Stacked_discs_sketch.png)

Profil używany do tworzenia obrotowego krążka, który będzie używany do imitowania gwintu.

![](/images/T13_06_Threads_Stacked_discs_1.png) ![](/images/T13_07_Threads_Stacked_discs_2.png)

Po lewej: pojedynczy krążek stworzony przez wyciągnięcie przez obrót. Po prawej: wiele krążków umieszczonych w formacji liniowej w kierunku osi Z, imitującej gwint spiralny.

## Metoda 4. Modyfikacja _owinięciem_ profilu pionowego.

### Środowisko pracy Part Design

Prawdziwy gwint składa się z zamkniętego profilu prowadzącego bryłę wzdłuż spiralnej ścieżki.

1. Znajdując się w środowisku pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl"), kliknij w przycisk ![](/images/Part_Primitives.svg) [Part: Bryły pierwotne](/Part_Primitives/pl "Part Primitives/pl") aby utworzyć ![](/images/Part_Helix.svg) [Part: Helisę](/Part_Helix/pl "Part Helix/pl"). Podaj odpowiednie wartości dla parametrów **Gęstość** `3mm`, **Wysokość** `23mm`, oraz **Promień** `10mm`.
2. Przejdź do środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), i kliknij na przycisk ![](/images/PartDesign_Body.svg) [Projekt Części: Utwórz zawartość](/PartDesign_Body/pl "PartDesign Body/pl").
3. Kliknij w przycisk ![](/images/PartDesign_NewSketch.svg) [Projekt Części: Utwórz nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"). Wybierz `płaszczyznę XZ`.
4. Narysuj zamknięty szkic z wymaganym profilem zębów gwintu, zwykle w kształcie trójkąta. W tym przypadku użyjemy wysokości `2,9 mm`, która jest nieco mniejsza niż skok `3,0 mm` stosowany dla ścieżki spirali. Profil nie może tworzyć samoprzecięć przy przesuwaniu się wzdłuż helisy, ani między zakrętami, ani na środku, dlatego nie można użyć szkicu przedstawionego dla układania krążków w stos.
5. Wybierz utworzony szkic, a następnie kliknij na przycisk ![](/images/PartDesign_AdditivePipe.svg) [Projekt Części: Rozciągnij wybrany rysunek wzdłuż ścieżki ...](/PartDesign_AdditivePipe/pl "PartDesign AdditivePipe/pl"). W polu **Ścieżka do wyciągnięcia**, kliknij w pole **Obiekt**, i wybierz wcześniej utworzony obiekt helisy. Następnie zmień **Rodzaj orientacji** to `Wektor Freneta` tak aby profil przebiegał po ścieżce bez skręcania, następnie naciśnij przycisk OK.
6. Gdy okno dialogowe prosi o odnośnik, wybierz `Twórz odniesienie`.
7. Tworzona jest cewka spiralna, ale nie ma centralnego korpusu ani wału.
8. Kliknij w przycisk ![](/images/PartDesign_AdditiveCylinder.svg) [Projekt Części: Dodatkowy cylinder](/PartDesign_AdditiveCylinder/pl "PartDesign AdditiveCylinder/pl") z odpowiednimi wartościami dla **Promień** `10mm` oraz **Wysokość** `29.9mm` aby dotknąć reszty gwintu spiralnego i automatycznie się z nim połączyć.
9. Dodatkowe operacje logiczne są potrzebne, aby ukształtować ostre końce cewki. Na przykład, można użyć funkcji dodawania, aby dodać łeb do śruby i czubek.

![](/images/T13_08_Threads_Helical_thread_profile.png) ![](/images/T13_09_Threads_Helical_thread_path.png)

Z lewej: profil dla gwintu spiralnego.  
Z prawej: ścieżka spiralna, która zostanie użyta do wyciągnięcia.

![](/images/T13_10_Threads_Helical_thread_coil.png) ![](/images/T13_11_Threads_Helical_thread_coil_sliced.png)

Z lewej: spirala wynikająca z operacji przeciągnięcia profilu zamkniętego wzdłuż ścieżki spiralnej.  
Po prawej: widok przekroju zwoju powstałego w wyniku operacji przeciągania.

![](/images/T13_12_Threads_Helical_thread_cylinder.png) ![](/images/T13_13_Threads_Helical_thread_finished.png)

Z lewej: spirala śrubowa połączona z centralnym cylindrem w celu utworzenia korpusu śruby.  
Po prawej: więcej elementów, łeb i czubek, dodane w celu poprawienia kształtu śruby.

### Środowisko pracy Part

Proces ten można również wykonać za pomocą narzędzi środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl").

1. Znajdując się w środowisku pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") kliknij w przycisk ![](/images/Part_Primitives.svg) [Tworzenie brył parametrycznych](/Part_Primitives/pl "Part Primitives/pl") aby utworzyć ![](/images/Part_Helix.svg) [Część: Helisa](/Part_Helix/pl "Part Helix/pl"). Podaj odpowiednie wartości dla parametrów **Gęstość** `3mm`, **Wysokość** `23mm` i **Promień** `10mm`.

Teraz możesz przystąpić do dodawania innych elementów pierwotnych, takich jak ![](/images/Part_Cylinder.svg) [Część: Cylinder](/Part_Cylinder/pl "Part Cylinder/pl") , lub innych kształtów, aby posłużyć się funkcją ![](/images/Part_Fuse.svg) [Część: Suma](/Part_Fuse/pl "Part Fuse/pl") lub ![](/images/Part_Cut.svg) [Część: Wytnij](/Part_Cut "Part Cut").

![](/images/T13_14_Threads_components.png)

Tworzenie zwoju gwintu poprzez przesuwanie pionowego profilu, _(1)_ the [szkic profilu](/Sketch/pl "Sketch/pl"), _(2)_ [helical](/Part_Helix/pl "Part Helix/pl") ścieżka przeciągania, oraz _(3)_ wynik [przeciągnięcia](/Part_Sweep/pl "Part Sweep/pl").

### Sztuczki wzmagające sukces

- _Reguła 1._

Wyciągnięty wzdłuż spirali profil nie może zawierać krawędzi, które się przecinają lub stykają, ponieważ utworzy nieprawidłową bryłę. Dotyczy to zarówno profilu poruszającego się wzdłuż elementu spiralnego, jak i przecięć w jego środku. Próby wykonania z użyciem tego elementu operacji logicznych (bezpiecznik lub przecięcie) najprawdopodobniej się nie powiodą. Należy sprawdzić jakość wykonania cewki za pomocą funkcji ![](/images/Part_CheckGeometry.svg) [Part: Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl"). Jeśli będą zgłaszane samoprzecięcia, musisz zwiększyć skok spirali.

![](/images/T13_15_Threads_self_intersection.png) ![](/images/T13_16_Threads_no_self_intersections_OK.png)

Po lewej: nieprawidłowy przebieg wygenerowany przez zastosowanie bardzo małego skoku helisy w stosunku do wysokości profilu trójkątnego.  
Po prawej: skok, który jest wystarczająco duży i nie powoduje samoistnych przecięć.

- _Reguła 2._ Gdy cylinder jest dodawany do cewki w celu utworzenia głównego trzonu śruby, nie może być styczny z profilem cewki. Oznacza to, że cylinder nie może mieć tego samego promienia jak wewnętrzny promień gwintu, ponieważ jest bardzo prawdopodobne, że nie powiedzie się operacja fuse. Ogólnie rzecz biorąc, należy unikać geometrii stycznych do elementów przeciągnięcia, takich jak ściany styczne lub krawędzie styczne do ścian, z którymi nie są połączone. Aby uzyskać dobre połączenie logiczne, wyciągnięta cewka oraz cylinder muszą się przecinać.

Sprawdź jakość połączenia za pomocą funkcji ![](/images/Part_CheckGeometry.svg) [Part: Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl"), jeśli zgłaszane są powierzchnie współpłaszczyznowe, zwiększ promień cylindra o niewielką wartość.

- Jeśli cewka i cylinder są ze sobą styczne, to jeśli nawet pierwsza operacja połączenia się powiedzie, to może się nie powieść w kolejnych krokach z trzecią bryłą.
- Jest to ograniczenie jądra technologii OpenCASCADE _(OCCT)_, na ogół nie radzi sobie dobrze z operacjami między powierzchniami współpłaszczyznowymi.

![](/images/T13_17_Threads_tangent_faces.png) ![](/images/T13_18_Threads_no_tangent_faces_OK.png)

Po lewej: bryła cylindra jest styczna do wewnętrznego promienia gwintu, może to spowodować nieprawidłowe połączenie funkcja logiczną.  
Po prawej: cylinder ma nieco większy promień, więc dwa elementy brył przecinają się, wówczas połączenie funkcją logiczną będzie prawidłowe.

- _Reguła 3._ Wewnętrzny cylinder posiada linię szwu. Należy unikać umieszczania początku spirali wzdłuż tego szwu. Należy obrócić spiralę lub cylinder o kilka stopni.

- _Wskazówka nr 1._ Promień spirali nie ma znaczenia, chyba że spirala jest stożkowa. Liczy się tylko gęstość zwojów (pitch) i wysokość spirali. Oznacza to, że możesz użyć jednej ![](/images/Part_Helix.svg) [Part: Helisy](/Part_Helix "Part Helix") _(spirali)_ do wygenerowania określonej liczby zwojów gwintu o jednakowym skoku. To, co decyduje o pozycji powstałej cewki, to pozycja profilu [Szkicu](/Sketch/pl "Sketch/pl").

- _Wskazówka 2._ Zadbaj o to, aby model gwintu był krótki, posiadał małą liczbę obrotów. Długie gwinty mają tendencję do generowania nieudanych operacji logicznych. Rozważ możliwość układanie długich gwintów z krótkich elementów za pomocą funkcji ![](/images/Draft_OrthoArray.svg) [Draft: OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), w przypadku gdy długi gwint okaże się problematyczny.

- _Wskazówka 3._ W przypadku wizualizacji 3D i drukowania 3D może być w porządku pozostawienie cylindra i gwintu niezwiązanego, to znaczy z przecięciami między dwoma bryłami. Zmniejszenie ilości operacji logicznych skutkuje mniejszym zużyciem pamięci i mniejszymi plikami wynikowymi.

### Zalety i wady

- ![](/images/Edit_OK.svg) Koncepcja budowy modelu łatwa do zrozumienia.
- ![](/images/Edit_OK.svg) Bardzo naturalny sposób definiowania profilu gwintu.
- ![](/images/Edit_OK.svg) Brak problemów z zazębieniem się powstałego obiektu, w odróżnieniu od metody 5.

- ![](/images/Edit_Cancel.svg) Z powodu zawodności samoczynnie przecinających się kształtów wyciągnięć, prawie niemożliwe jest wygenerowanie gwintu bez szczelin, to znaczy bez powierzchni płaskich na wewnętrznej powierzchni gwintu.
- ![](/images/Edit_Cancel.svg) Operacje logiczne są wymagane do uzyskania pojedynczej zwartej bryły. Obliczenia operacji logicznych zajmują stosunkowo dużo czasu i często kończą się niepowodzeniem.
- ![](/images/Edit_Cancel.svg) Gwinty o dużej liczbie zwojów są problematyczne.

## Metoda 5. Wyciągnięcie profilu poziomego

### Informacje ogólne

Koncepcja polega na wyciągnięciu poziomego przekroju gwintu wzdłuż spirali. Głównym problemem jest tutaj ustalenie, jakiego profilu użyć, aby uzyskać określony gwint.

![](/images/Thread-by-horz-profile.png)

Jeśli użyjemy okręgu jako profilu poziomego, profil gwintu będzie sinusoidalny (środek okręgu musi być umieszczony poza punktem początku, przesunięcie to określa głębokość gwintu).

Aby otrzymać standardowy profil zęba piły, para lustrzanych odbić spirali łukowych musi zostać połączona w jedną ścieżką.
W rezultacie tej operacji otrzymamy kształt serca, który staje się ledwie odróżnialny od okręgu, w przypadku gdy głębokość gwintu jest niewielka w zestawieniu z jego średnicą (to dlatego taki "gruby" gwint pokazano na powyższym rysunku).

### Generowanie kształtu

Nie jest łatwo określić, jak przygotować profil poziomy, aby uzyskać określony kształt pionowy.
W sytuacjach nieskomplikowanych, dotyczących kształtu trójkątnego lub trapezowego, profil może być wykonany ręcznie. Alternatywnie można go skonstruować, tworząc krótki gwint metodą 4 i pobierając jego kawałek poprzez wykonanie funkcji [common](/Part_Common/pl "Part Common/pl") pomiędzy płaszczyzną poziomą a gwintem.

#### Kształt dla gwintu trójkątnego

1. stwórz spiralę łukową (archimedian) w płaszczyźnie XY,
   1. ustaw liczbę zwojów na 0.5,
   2. wartość promienia zdefiniuje wewnętrzny promień gwintu _(promień zewnętrzny będzie powiększony o głębokość nacięcia)_,
   3. oraz wysokość, by podwoić głębokość nacięcia gwintu.
2. [Część: Mirror](/Part_Mirror/pl "Part Mirror/pl") spirala na przeciw płaszczyzny XY.
3. [Część: Suma](/Part_Fuse/pl "Part Fuse/pl") spirala i jej odbicie lustrzane w celu uzyskania zamkniętego odcinka w kształcie serca.

#### Kształt dla dowolnego przekroju

![](/images/Thread-by-horz-profile-profileMake.png)

1. Stwórz pionowy zarys cięcia; upewnij się, że wysokość szkicu odpowiada skokowi potrzebnego gwintu,
2. Stwórz spiralę 1 o wysokości równej skokowi gwintu, oraz o promieniu spirali równym 0,42 średnicy nominalnej gwintu,
3. Wyciągnij profil cięcia wzdłuż spirali 1; zaznacz opcje ![](/images/CheckBoxTrue.svg) Utwórz bryłę i ![](/images/CheckBoxTrue.svg) wektor Freneta,
4. Wykreśl okrąg o wymiarze promienia równym wymiarowi nominalnego promienia gwintu w płaszczyźnie XY,
5. Przekształć okrąg w płaszczyznę. Można to zrobić funkcją ![](/images/Part_Builder.svg) [Part: Konstruktor kształtów Builder](/Part_Builder/pl "Part Builder/pl") lub ![](/images/Draft_Upgrade.svg) [Draft: Upgrade](/Draft_Upgrade "Draft Upgrade"), następnie ustaw wartość DANE**MakeFace** na `true`.
6. Wytnij ścianę przy pomocy profilu wyciągnięcia.
7. Wykonaj kopię opcją ![](/images/Draft_Clone.svg) [Draft: Klon](/Draft_Clone "Draft Clone") z wyciętego kawałka.
8. Użyj funkcji ![](/images/Draft_Downgrade.svg) [Draft: Downgrade](/Draft_Downgrade/pl "Draft Downgrade/pl") na klonie, by otrzymać linię łamaną. Utworzy ona poziomy profil potrzebny do tej metody.
9. Wykonaj spiralę o wymiarze promienia równym wymiarowi nominalnemu promienia gwintu i skoku gwintu, oraz potrzebnej wysokości gwintu.
10. Wyciągnij odcinek wzdłuż spirali; zaznacz opcje ![](/images/CheckBoxTrue.svg) Utwórz bryłę i ![](/images/CheckBoxTrue.svg) wektor Freneta,
11. To wszystko.

Przewodnik krok po kroku od [forum, post Ulrich1a](http://forum.freecad.org/viewtopic.php?f=3&t=6506#p52558) _(Tworzenie gwintu: Nieoczekiwane wyniki)_, nieznacznie zmodyfikowane.

Drogę postępowania zaprezentował Gaurav Prabhudesai w przygotowanym przez siebie [filmie instruktażowym](http://www.youtube.com/watch?v=fxKxSOGbDYs) ("FreeCAD: Jak tworzyć gwinty").

### Zalety i wady

- ![](/images/Edit_OK.svg) gotowy do użycia kształt bryły z gwintem na rdzeniu jest tworzony bezpośrednio przez wyciągnięcie.
- ![](/images/Edit_OK.svg) wymagana jest mniejsza liczba operacji logicznych lub nawet ich brak, więc prędkość generowania jest bardzo wysoka w porównaniu z metodą 4.
- ![](/images/Edit_OK.svg) końce gwintów są ładnie przycięte natychmiastowo.
- ![](/images/Edit_OK.svg) długie gwinty nie stanowią problemu, chyba że konieczne jest przeprowadzenie operacji logicznych. W przeciwnym razie nie będzie ona dużo lepsza niż Metoda 4.
- ![](/images/Edit_OK.svg) gwinty bez przerwy nie stanowią problemu.

- ![](/images/Edit_Cancel.svg) zdefiniowanie kształtu gwintu jest skomplikowane.
- ![](/images/Edit_Cancel.svg) Użycie standardowej siatki z tak stworzonym gwintem generuje brzydkie oczka, co może prowadzić do problemów. Inne siatki są lepsze, na przykład Mefisto wydaje się dawać najlepsze rezultaty.
- ![](/images/Edit_Cancel.svg) duża ilość pamięci według [Techniki modelowania gwintu](http://forum.freecad.org/viewtopic.php?f=3&t=12593&start=10#p101197).

## Metoda 6. Wyciąganie pomiędzy wytłaczanymi ścianami ślimakowymi

### Informacje ogólne

Spiralne wypusty będą wyciskać współosiowe powierzchnie, które mogą być poddane wyciąganiu, podczas gdy spirala parametryczna FreeCAD nie będzie miała takiej możliwości.
Do zdefiniowania gwintu potrzebne są dwa spiralne wypusty (helical splines).
Te dwa wypusty mogą być skalowane z biblioteki, a następnie odpowiednio rozmieszczone i wytłoczone, w celu uzyskania właściwego kształtu bryły.

Parametryczne spirale FreeCAD tak naprawdę nie są spiralne, ale spiralne b-splines nie są trudne do rozmieszczenia.
Jedną z dostępnych metod jest układanie dwunastokątów o promieniu 5 mm w odstępach Z 1/12 mm (0.08333 mm) i ścieżkami Spline od wierzchołka do wierzchołka w porządku rosnącym i obrotowym, oraz aby rozważyć zrobienie tego raz, z powiedzmy, 10 obrotami, tak aby Spline mógł być ponownie użyty jako plik biblioteczny do importu i ponownego użycia.
Dla ułatwienia skalowania wygodnie jest używać średnicy 10 mm i rastra 1 mm. Jeśli robisz to ręcznie, narysowanie Dwire, a następnie przekształcenie go w b-spline jest łatwiejsze niż narysowanie Spline. Odcinki Dwire nie mają obliczonej krzywizny podczas rysowania, więc podążają za kursorem i zatrzaskują się bardziej posłusznie.

Po przeskalowaniu Spline do odpowiedniej wielkości i umieszczeniu ich w taki sposób, że wyciągnięcie będzie miało odpowiedni kąt zawarty pomiędzy boczkami gwintu, są one wytłaczane wzdłuż ich osi, długość skoku jest odpowiednia dla Spline wewnętrznego, skok zewnętrzny/8.

![](/images/Splineextrudeloft.png)

ISO i inne gwinty zostały uelastycznione, czyli płaskie, wewnętrzne i zewnętrzne krawędzie, zamiast ostrrych, co odpowiada użytkownikom FreeCAD w tej metodzie, ponieważ możemy wyciągnąć do spiralnej powierzchni czołowej przy nominalnym rozmiarze połączenia, podczas gdy powierzchnia wewnętrzna nie może być wyciągnięta do zewnętrznej krawędzi Spline, ponieważ powierzchnia czołowa jest profilem zamkniętym, Spline jest otwarty.

![761PX](/images/Threadform.PNG)

Ta metoda produkuje wysoce stabilne bryły, które prawidłowo działają z funkcjami logicznymi.
Chociaż nie wytwarza ona "parametrycznych" gwintów śrubowych w standardowych rozmiarach w sensie prostego dostępu do kształtu poprzez rozmiar łącznika, jest to łatwy sposób na stworzenie wiarygodnej biblioteki do ponownego użycia. Modele o specjalnych kształtach, takich jak ACME czy śruby z serii Archimedian, są również nieskomplikowane do modelowania jako rozwiązania jednorazowe.

Retrieved from "<http://wiki.freecad.org/index.php?title=Thread_for_Screw_Tutorial/pl&oldid=1355810>"
