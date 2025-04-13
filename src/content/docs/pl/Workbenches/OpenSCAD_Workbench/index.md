---
title: Środowisko pracy OpenSCAD
---

![](/images/Workbench_OpenSCAD.svg)

Ikonka FreeCAD dla środowiska pracy OpenSCAD

## Wprowadzenie

![](/images/Workbench_OpenSCAD.svg) Środowisko pracy OpenSCAD służy do zapewnienia interoperacyjności z oprogramowaniem [OpenSCAD](http://www.openscad.org/). Program ten nie jest częścią projektu FreeCAD i by zapewnić pełną funkcjonalność tego środowiska należy zainstalować go samodzielnie.

OpenSCAD nie powinien być mylony z [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl") będącym nierozłącznym komponentem FreeCAD odpowiedzialnym za opis geometrii. Instalacja oprogramowania OpenSCAD jest w pełni opcjonalna.

Zawiera importer formatu [CSG](/OpenSCAD_CSG/pl "OpenSCAD CSG/pl"), który otwiera pliki CSG z OpenSCAD, oraz eksporter, który tworzy drzewo oparte na CSG. Geometria, która nie jest oparta na operacjach CSG, zostanie wyeksportowana jako siatka.

To środowisko pracy zawiera funkcje do modyfikacji drzewa cech CSG i naprawy modeli. Zawiera także narzędzia ogólnego przeznaczenia, które nie wymagają instalacji OpenSCAD Mogą być one używane w połączeniu z innymi środowiskami pracy. Na przykład, środowiskiem [Projekt Siatki](/Mesh_Workbench/pl "Mesh Workbench/pl") wewnętrznie używa funkcji OpenSCAD do wykonywania operacji z [siatkami](/Mesh/pl "Mesh/pl"), ponieważ są one dość stabilne.

![](/images/OpenSCADexamaple1.png)

## Zależności

W wersji FreeCAD 0.19 moduł Ply _(Python-Lex-Yacc)_, który jest używany do importowania plików CSG, został usunięty z kodu źródłowego FreeCAD, ponieważ jest to biblioteka zewnętrzna, która nie została opracowana przez zespół FreeCAD. W rezultacie musisz teraz zainstalować Ply przed użyciem środowiska OpenSCAD. W przypadku używania wstępnie spakowanej, stabilnej wersji FreeCAD zależność ta powinna być zainstalowana automatycznie na wszystkich platformach; w innych przypadkach, na przykład podczas [kompilowania](/Compiling/pl "Compiling/pl") ze źródeł, może być konieczne zainstalowanie jej z repozytorium online.

W dystrybucjach opartych o openSUSE środowisko może zostać zainstalowane za pomocą:

```
sudo zypper install python3-ply

```

W dystrybucjach opartych o Debian / Ubuntu środowisko może zostać zainstalowane za pomocą:

```
sudo apt install python3-ply

```

Ogólna instalacja na wszystkich platformach może być wykonana z indeksu pakietów Pythona.

```
pip3 install --user ply

```

## Język OpenSCAD i format pliku

Język OpenSCAD pozwala na używanie zmiennych i pętli. Pozwala on na określenie modułów podrzędnych w celu ponownego użycia geometrii i kodu. Ten wysoki stopień elastyczności sprawia, że parsowanie kodu jest bardzo złożone. Obecnie środowisko OpenSCAD nie obsługuje natywnie języka OpenSCAD.
Zamiast tego, jeśli OpenSCAD jest zainstalowany, może być użyty do konwersji danych wejściowych do formatu CSG, który jest podzbiorem języka OpenSCAD i może być użyty jako dane wejściowe do OpenSCAD do dalszej obróbki.
Podczas konwersji wszystkie parametry są tracone, co oznacza, że wszystkie nazwy zmiennych są usuwane, pętle rozwijane, a wyrażenia matematyczne obliczane.

## Przybory

- ![](/images/OpenSCAD_ColorCodeShape.svg) [Oznacz kształt kolorem](/OpenSCAD_ColorCodeShape/pl "OpenSCAD ColorCodeShape/pl"): Zmienia kolor wybranych lub wszystkich kształtów na podstawie ich znaczenia.
- ![](/images/OpenSCAD_ReplaceObject.svg) [Zastąp obiekt](/OpenSCAD_ReplaceObject/pl "OpenSCAD ReplaceObject/pl"): Zastępuje obiekt w drzewie cech.
- ![](/images/OpenSCAD_RemoveSubtree.svg) [Usuń gałąź drzewa](/OpenSCAD_RemoveSubtree/pl "OpenSCAD RemoveSubtree/pl"): Usuwa wybrane obiekty i wszystkie elementy podrzędne, do których nie istnieją odniesienia z innych obiektów.
- ![](/images/OpenSCAD_RefineShapeFeature.svg) [Udoskonal siatkę](/OpenSCAD_RefineShapeFeature/pl "OpenSCAD RefineShapeFeature/pl"): Usuwa zbędne linie.
- ![](/images/OpenSCAD_MirrorMeshFeature.svg) [Odbicie lustrzane siatki](/OpenSCAD_MirrorMeshFeature/pl "OpenSCAD MirrorMeshFeature/pl"): Tworzy cechę odbicia lustrzanego dla siatki.
- ![](/images/OpenSCAD_ScaleMeshFeature.svg) [Skaluj cechę siatki](/OpenSCAD_ScaleMeshFeature/pl "OpenSCAD ScaleMeshFeature/pl"): Skaluje elementy siatki.
- ![](/images/OpenSCAD_ResizeMeshFeature.svg) [Zmień rozmiar cechy siatki](/OpenSCAD_ResizeMeshFeature/pl "OpenSCAD ResizeMeshFeature/pl"): Zmień rozmiar elementu siatki.
- ![](/images/OpenSCAD_IncreaseToleranceFeature.svg) [Zwiększ tolerancję cechy](/OpenSCAD_IncreaseToleranceFeature/pl "OpenSCAD IncreaseToleranceFeature/pl"): Zwiększa tolerancję krawędzi / powierzchni / wierzchołków wybranych obiektów..
- ![](/images/OpenSCAD_Edgestofaces.svg) [Przekształć krawędzie na ściany](/OpenSCAD_Edgestofaces/pl "OpenSCAD Edgestofaces/pl"): Przekształć krawędzie na powierzchnie. Przydatne do przygotowania importowanej geometrii DXF do wyciągnięcia.
- ![](/images/OpenSCAD_ExpandPlacements.svg) [Rozwiń umiejscowienia](/OpenSCAD_ExpandPlacements/pl "OpenSCAD ExpandPlacements/pl"): Rozwiń wszystkie umiejscowienia w dół drzewa cech.
- ![](/images/OpenSCAD_ExplodeGroup.svg) [Rozbij grupę](/OpenSCAD_ExplodeGroup/pl "OpenSCAD ExplodeGroup/pl"): Rozbija elementy pierwotne części scalonych.
- ![](/images/OpenSCAD_AddOpenSCADElement.svg) [Dodaj element OpenSCAD](/OpenSCAD_AddOpenSCADElement/pl "OpenSCAD AddOpenSCADElement/pl"): Dodaj element OpenSCAD, wprowadzając kod OpenSCAD do panelu zadań.
- ![](/images/OpenSCAD_MeshBoolean.svg) [Operacja logiczna na siatce](/OpenSCAD_MeshBoolean/pl "OpenSCAD MeshBoolean/pl"): Tworzy nowy obiekt siatki za pomocą operacji logicznej z kształtów.
- ![](/images/OpenSCAD_Hull.svg) [Hull](/OpenSCAD_Hull/pl "OpenSCAD Hull/pl"): Stosuje funkcję hull do wybranych kształtów.
- ![](/images/OpenSCAD_Minkowski.svg) [Minkowski](/OpenSCAD_Minkowski/pl "OpenSCAD Minkowski/pl"): Stosuje sumę minkowskiego do wybranych kształtów.

## Ustawienia

- ![](/images/Std_DlgPreferences.svg) [Preferencje](/OpenSCAD_Preferences/pl "OpenSCAD Preferences/pl"): ustawienia dostępne dla środowiska OpenSCAD.

## Ograniczenia

OpenSCAD tworzy konstrukcyjną geometrię bryłową, a także importuje pliki siatek i wytłacza geometrię 2D z plików [DXF](/DXF/pl "DXF/pl"). FreeCAD pozwala również na tworzenie formatu CSG za pomocą elementów pierwotnych. Jądro geometrii FreeCAD _(OCCT)_ działa w oparciu o reprezentację brzegową. Dlatego konwersja z CSG do BREP teoretycznie powinna być możliwa, natomiast konwersja z BREP do CSG zasadniczo nie jest.

OpenSCAD pracuje wewnętrznie na siatkach. Niektóre operacje, które są przydatne w przypadku siatek, nie mają znaczenia w modelu BREP i nie mogą być w pełni obsługiwane. Należą do nich m.in. kadłub wypukły, suma minkowskiego, przesuwanie i podział. Obecnie w celu wykonania operacji na kadłubie i sumie minkwoskiej uruchamiamy binarny program OpenSCAD i importujemy wynik. Oznacza to, że zaangażowana geometria zostanie poddana triangulacji. W OpenSCAD często stosuje się skalowanie niejednolite, co nie stwarza problemów przy korzystaniu z siatek. W naszym jądrze geometrii elementy pierwotne geometrii (linie, odcinki koliste itp.) są konwertowane na krzywe złożone przed wykonaniem takich deformacji. Te krzywe złożone są znane z tego, że powodują problemy w późniejszych operacjach logicznych. W chwili obecnej nie jest dostępne automatyczne rozwiązanie tego problemu. Jeśli napotkasz takie problemy, napisz o tym na forum. Często takie problemy można rozwiązać, przemodelowując małe części. Zniekształcenie walca można zastąpić wycięciem elipsy.

## Importowanie tekstu

Importowanie kodu OpenSCAD z tekstami wymaga, aby czcionki, które są używane, były poprawnie zainstalowane w systemie. Można to sprawdzić otwierając OpenSCAD jako samodzielne narzędzie i sprawdzając listę w **Pomoc → Font List**. Lista ta zawiera również prawidłowe nazwy czcionek. Jeżeli po zainstalowaniu czcionka nie pojawia się na liście, może być konieczne ręczne skopiowanie pliku z czcionką do odpowiedniego katalogu systemowego.

Importowanie tekstów jest stosunkowo powolne. Za kulisami FreeCAD korzysta z pliku DXF utworzonego przez OpenSCAD. Im więcej konturów, tym wolniejszy jest import.

Dobrym pomysłem może być zaimportowanie najpierw prostego przykładu testowego _(zamień `NameOfFont` na poprawną nazwę czcionki)_:

```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};

```

Parametr `script="Latn"` można tutaj pominąć, ale jest on wymagany, jeśli łańcuch tekstowy nie zawiera żadnych liter, a jedynie znaki interpunkcyjne i / lub cyfry.

Należy pamiętać, że deklaracje `use <FONT>;` w plikach źródłowych są ignorowane podczas importu w FreeCAD. W OpenSCAD efektem deklaracji `use` jest tymczasowe dodanie podanego pliku czcionki do listy znanych czcionek _(chociaż nawet tam deklaracja nie działa, gdy skrypt jest modyfikowany interaktywnie)_.

## Wskazówki

Podczas importowania plików w formacie [DXF](/DXF/pl "DXF/pl") ustaw precyzję szkicu na rozsądną wartość, ponieważ będzie to miało wpływ na wykrywanie połączonych krawędzi.

Jeśli program FreeCAD zawiesza się podczas importowania pliku CSG, zaleca się włączenie opcji "Automatycznie sprawdź model po operacji logicznej" w menu **Edycja → Preferencje ... → Projekt Części → Ogólne → Ustawienia modelu**.

## Poradniki

- [Importowanie kodu OpenSCAD](/Import_OpenSCAD_code/pl "Import OpenSCAD code/pl")

## Odnośniki internetowe

- Oficjalne repozytorium kodu źródłowego projektu OpenSCAD znajduje się na stronie [GitHub](https://github.com/openscad/openscad)
- Otwórz zgłoszenia oznaczone tagiem "OpenSCAD" na [FreeCAD Github issue tracker](https://github.com/FreeCAD/FreeCAD/labels/WB%20OpenSCAD). Istnieją również zgłoszenia na zarchiwizowanym już [mantis bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD).
- Modele oznaczone tagiem "OpenSCAD" w serwisie [Thingiverse](http://www.thingiverse.com/tag:openscad)

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Workbench/pl&oldid=1515638>"
