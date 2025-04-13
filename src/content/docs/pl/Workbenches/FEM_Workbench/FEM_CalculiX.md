---
title: MES CalculiX
---

## Wprowadzenie

Ta strona zbiera informacje o solverze MES [CalculiX](http://www.calculix.de/), który stanowi domyślny solver w ![](/images/Workbench_FEM.svg) [środowisku pracy MES](/FEM_Workbench/pl "FEM Workbench/pl") do analiz mechanicznych i termo-mechanicznych. W zależności od systemu operacyjnego, może być konieczność zainstalowania tego solvera przed uruchomieniem pierwszej symulacji w nim. Zobacz stronę [Instalacja środowiska MES](/FEM_Install/pl "FEM Install/pl").

Ten solver nadaje się do symulacji liniowych i nieliniowych zagadnień statycznych, dynamicznych i termicznych. Operuje on na plikach (`.inp`) bazujących na oprogramowaniu Abaqus, co oznacza, że może być używany z różnymi preprocessorami, które wspierają ten format. Posiada on własny preprocessor graficzny, który nie jest jednak używany we FreeCAD (zaimplementowany jest sam solver).

CalculiX jest stworzony do pracy na platformach Unixowych jak Linux i Irix, ale też MS-Windows. Został opracowany przez inżynierów z MTU Aero Engines w Munich (Niemcy) do wspomagania projektowania części maszyn takich jak turbiny silników odrzutowych. CalculiX jest obecnie udostępniany publicznie na zasadach licencji GPLv2.

## Integracja z FreeCAD

Interakcja między [środowiskiem pracy MES](/FEM_Workbench/pl "FEM Workbench/pl") a solverem CalculiX odbywa się poprzez zapis i odczyt plików tekstowych. Sekwencja operacji jest następująca:

1. Tworzony jest plik wejściowy solvera CalculiX zawierający dane potrzebne do uruchomienia symulacji
2. CalculiX jest uruchamiany z tym plikiem wejściowym
3. Wyniki z solvera są zapisywane
4. Pliki wyjściowe z solvera są odczytywane, jeśli są dostępne

Narzędzie [MES: Kontrola pracy solvera](/FEM_SolverControl/pl "FEM SolverControl/pl") zarządza całym procesem. Możliwa jest interakcja użytkownika w procesie.

## Interfejs do preprocessingu

Plik wejściowy, którego CalculiX używa może być przygotowany i edytowany przed uruchomieniem solvera. Jednostki używane w pliku wejściowym są niezależne od jednostek ustawionych w programie FreeCAD - zawsze są to milimetry (mm) i Newtony (N).

_(Do zrobienia: sprawdzić to. Co się stanie z siatką jeśli we FreeCAD używane będą cale? Po wprowadzeniu gęstości, mamy kg i s, ale już nie N? Co z tym?ǃ)_

Interfejs solvera CalculiX wspiera następujące obiekty:

### Elementy skończone

- Tet4 i Tet10
- S3 i S6
- B31 i B32
- i te opisane na stronie [MES: Siatka CalculiX](/FEM_Mesh_CalculiX/pl "FEM Mesh CalculiX/pl")

### Analizy

- Liniowe i nieliniowe analizy statyczne
- Analizy modalne (częstotliwości drgań własnych)
- Liniowe analizy wyboczeniowe
- Sprzężone analizy termo-mechaniczne

### Materiały

- Materiały liniowo sprężyste izotropowe (jednorodne we wszystkich kierunkach)
- Plastyczność ze wzmocnieniem izotropowym

## Interfejs do postprocessingu

Środowisko pracy MES wczytuje wyniki z solvera CalculiX do [obiektu wyników](/FEM_ResultShow/pl "FEM ResultShow/pl"), który zawiera:

- Przemieszczenia
- Naprężenia
- Odkształcenia
- Ekwiwalentne odkształcenia plastyczne (PEEQ) – jeśli używany był nieliniowy materiał
- Temperatury – dla analiz termomechanicznych

FreeCAD odczytuje wyniki z pliku \*.frd utworzonego przez CalculiX. Jeśli te wyniki zawierają wiele przyrostów czasowych, każdy przyrost jest importowany do FreeCAD jako nowy obiekt wyników. To samo zachowanie dotyczy analiz modalnych i wyboczeniowych z wieloma wartościami własnymi.

Siły reakcji można odczytać z pliku _ccx_dat_file_, który zawiera ich składowe _(fx, fy, fz)_ dla każdego warunku brzegowego utwierdzenia lub przemieszczenia, który blokuje translacyjne stopnie swobody.

## Powiązane

- Strona [MES: Siatka CalculiX](/FEM_Mesh_CalculiX/pl "FEM Mesh CalculiX/pl")
- Okno dialogowe [preferencje CalculiX](/FEM_Preferences/pl#CalculiX "FEM Preferences/pl") w menu preferencji środowiska pracy MES

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX/pl&oldid=1479490>"
