---
title: Środowisko pracy MES
---

![](/images/Workbench_FEM.svg)

Ikonka FreeCAD dla środowiska pracy MES

## Wprowadzenie

Środowisko pracy **MES** zapewnia nowoczesną [analizę metodą elementów skończonych](https://pl.wikipedia.org/wiki/Metoda_element%C3%B3w_sko%C5%84czonych) _(MES)_ dla FreeCAD. Głównie oznacza to, że wszystkie narzędzia do wykonania analizy są połączone w jeden graficzny interfejs użytkownika _(GUI)_.

![](/images/FemWorkbench.jpg)

## Przepływ pracy

Kroki przeprowadzania analizy metodą elementów skończonych:

1. Preprocessing: ustawienie zagadnienia analizy.
   1. Modelowanie geometrii: tworzenie geometrii za pomocą programu FreeCAD lub importowanie jej z innej aplikacji.
   2. Tworzenie analizy.
      1. Dodawanie do modelu geometrycznego uwarunkowań symulacyjnych, takich jak obciążenia i podpory stałe.
      2. Dodawanie materiałów do części poza modelem geometrycznym.
      3. Tworzenie siatki elementów skończonych dla modelu geometrycznego lub importowanie jej z innej aplikacji.
2. Rozwiązywanie: uruchamianie zewnętrznego solwera z poziomu FreeCAD.
3. Postprocessing: wizualizacja wyników analizy z poziomu FreeCAD lub eksportowanie wyników, aby można je było przetworzyć w innej aplikacji.

Środowisko pracy MES może być używane w systemach Linux, Windows i Mac OSX. Ponieważ korzysta z zewnętrznych solverów, zakres ręcznej konfiguracji zależy od systemu operacyjnego, z którego korzystasz. Instrukcje dotyczące konfiguracji zewnętrznych narzędzi znajdują się na stronie [Instalacja środowiska MES](/FEM_Install/pl "FEM Install/pl").

![](/images/FEM_Workbench_workflow.svg)

Przepływ pracy w środowisku MES. Środowisko to wywołuje dwa zewnętrzne środowiska w celu wykonania siatkowania obiektu bryłowego oraz rozwiązania problemu metodą elementów skończonych.

## Menu: Model

- ![](/images/FEM_Analysis.svg) [Analiza MES](/FEM_Analysis/pl "FEM Analysis/pl"): Tworzy nowy kontener dla analizy mechanicznej.

### Materiał

- ![](/images/FEM_MaterialSolid.svg) [Materiał dla bryły](/FEM_MaterialSolid/pl "FEM MaterialSolid/pl"): Pozwala wybrać materiał dla bryły z bazy danych.

- ![](/images/FEM_MaterialFluid.svg) [Materiał dla płynu](/FEM_MaterialFluid/pl "FEM MaterialFluid/pl"): Umożliwia wybór materiału dla płynu z bazy danych.

- ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Nieliniowy materiał mechaniczny](/FEM_MaterialMechanicalNonlinear/pl "FEM MaterialMechanicalNonlinear/pl"): Umożliwia dodanie nieliniowego modelu materiału mechanicznego.

- ![](/images/FEM_MaterialReinforced.svg) [Materiał zbrojony _(beton)_](/FEM_MaterialReinforced/pl "FEM MaterialReinforced/pl"): Pozwala wybrać z bazy danych materiały zbrojone składające się z osnowy i zbrojenia.

- ![](/images/FEM_MaterialEditor.svg) [Edytor materiału](/FEM_MaterialEditor/pl "FEM MaterialEditor/pl"): Pozwala otworzyć edytor materiałów, aby edytować materiały.

### Geometria elementu

- ![](/images/FEM_ElementGeometry1D.svg) [Przekrój poprzeczny belki](/FEM_ElementGeometry1D/pl "FEM ElementGeometry1D/pl"): Służy do definiowania przekrojów poprzecznych dla elementów belkowych.

- ![](/images/FEM_ElementRotation1D.svg) [Obrót belki](/FEM_ElementRotation1D/pl "FEM ElementRotation1D/pl"): Służy do obracania przekrojów poprzecznych elementów belkowych.

- ![](/images/FEM_ElementGeometry2D.svg) [Grubość powłoki](/FEM_ElementGeometry2D/pl "FEM ElementGeometry2D/pl"): Służy do określenia grubości powłoki elementu.

- ![](/images/FEM_ElementFluid1D.svg) [Przekrój dla przepływu 1D](/FEM_ElementFluid1D/pl "FEM ElementFluid1D/pl"): Służy do tworzenia elementu przekroju cieczy dla instalacji pneumatycznych i hydraulicznych.

### Elektromagnetyczne warunki brzegowe

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Warunek brzegowy potencjału elektrostatycznego](/FEM_ConstraintElectrostaticPotential/pl "FEM ConstraintElectrostaticPotential/pl"): Służy do definiowania potencjału elektrostatycznego.

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Warunek brzegowy gęstości prądu](/FEM_ConstraintCurrentDensity/pl "FEM ConstraintCurrentDensity/pl"): Służy do określenia gęstości prądu. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/FEM_ConstraintMagnetization.svg) [Warunek brzegowy magnetyzacji](/FEM_ConstraintMagnetization/pl "FEM ConstraintMagnetization/pl"): Służy do określenia magnetyzacji. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Gęstość ładunku elektrycznego](/FEM_ElectricChargeDensity/pl "FEM ElectricChargeDensity/pl"): Używane do zdefiniowania obciążenia gęstością ładunku elektrycznego. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

### Warunki brzegowe płynu

- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Warunek początkowy prędkości przepływu](/FEM_ConstraintInitialFlowVelocity/pl "FEM ConstraintInitialFlowVelocity/pl"): Służy do określenia początkowej prędkości przepływu dla ciała _(objętości)_.

- ![](/images/FEM_ConstraintInitialPressure.svg) [Warunek początkowy ciśnienia](/FEM_ConstraintInitialPressure/pl "FEM ConstraintInitialPressure/pl"): Służy do określenia ciśnienia początkowego dla danego ciała _(objętości)_. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Warunek brzegowy prędkości przepływu](/FEM_ConstraintFlowVelocity/pl "FEM ConstraintFlowVelocity/pl"): Służy do określenia prędkości przepływu jako warunku brzegowego na krawędzi _(2D)_ lub ścianie _(3D)_.

### Funkcje analizy geometrycznej

- ![](/images/FEM_ConstraintPlaneRotation.svg) [Wiązanie MPC typu płaszczyzna](/FEM_ConstraintPlaneRotation/pl "FEM ConstraintPlaneRotation/pl"): Służy do definiowania wiązania utrzymującego węzły na płaskiej powierzchni w tej samej płaszczyźnie.

- ![](/images/FEM_ConstraintSectionPrint.svg) [Funkcja zapisu wyników z przekroju](/FEM_ConstraintSectionPrint/pl "FEM ConstraintSectionPrint/pl"): Służy do drukowania predefiniowanych zmiennych wyjściowych ścian _(sił i momentów)_ do pliku danych.

- ![](/images/FEM_ConstraintTransform.svg) [Lokalny układ współrzędnych](/FEM_ConstraintTransform/pl "FEM ConstraintTransform/pl"): Służy do zdefiniowania lokalnego układu współrzędnych dla ściany.

### Mechaniczne warunki brzegowe i obciążenia

- ![](/images/FEM_ConstraintFixed.svg) [Warunek brzegowy utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl"): Służy do definiowania warunku brzegowego utwierdzenia punktu / krawędzi / powierzchni.

- ![](/images/FEM_ConstraintRigidBody.svg) [Wiązanie ciała sztywnego](/FEM_ConstraintRigidBody/pl "FEM ConstraintRigidBody/pl"): Służy do definiowania wiązania ciała sztywnego solvera CalculiX, które wiąże ruch węzłów wybranego obiektu geometrycznego z ruchem punktu referencyjnego o pozycji określonej przez użytkownika. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/FEM_ConstraintDisplacement.svg) [Warunek brzegowy przemieszczenia](/FEM_ConstraintDisplacement/pl "FEM ConstraintDisplacement/pl"): Służy do definiowania warunku brzegowego przemieszczenia dla punktów / krawędzi / powierzchni.

- ![](/images/FEM_ConstraintContact.svg) [Kontakt](/FEM_ConstraintContact/pl "FEM ConstraintContact/pl"): Służy do definiowania kontaktu między 2 powierzchniami.

- ![](/images/FEM_ConstraintTie.svg) [Wiązanie tie](/FEM_ConstraintTie/pl "FEM ConstraintTie/pl"): Służy do definiowania wiązania tie _("kontakt wiązany")_ między 2 powierzchniami lub, [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"), symetrią cykliczną.

- ![](/images/FEM_ConstraintSpring.svg) [Sprężyna](/FEM_ConstraintSpring/pl "FEM ConstraintSpring/pl"): Służy do definiowania sprężyny. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

- ![](/images/FEM_ConstraintForce.svg) [Obciążenie siłą](/FEM_ConstraintForce/pl "FEM ConstraintForce/pl"): Służy do definiowania siły w [N] rozłożonej równomiernie na wybranej ścianie w określonym kierunku.

- ![](/images/FEM_ConstraintPressure.svg) [Obciążenie ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl"): Służy do definiowania obciążenia powierzchni ciśnieniem.

- ![](/images/FEM_ConstraintCentrif.svg) [Obciążenie siłą odśrodkową](/FEM_ConstraintCentrif/pl "FEM ConstraintCentrif/pl"): Służy do definiowania obciążenia ciała siłą odśrodkową. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

- ![](/images/FEM_ConstraintSelfWeight.svg) [Obciążenie grawitacją](/FEM_ConstraintSelfWeight/pl "FEM ConstraintSelfWeight/pl"): Służy do definiowania przyspieszenia grawitacyjnego działającego na model.

### Termiczne warunki brzegowe i obciążenia

- ![](/images/FEM_ConstraintInitialTemperature.svg) [Temperatura początkowa](/FEM_ConstraintInitialTemperature/pl "FEM ConstraintInitialTemperature/pl"): Służy do definiowania początkowej temperatury ciała.

- ![](/images/FEM_ConstraintHeatflux.svg) [Obciążenie strumieniem ciepła](/FEM_ConstraintHeatflux/pl "FEM ConstraintHeatflux/pl"): Służy do definiowania obciążenia powierzchni strumieniem ciepła.

- ![](/images/FEM_ConstraintTemperature.svg) [Warunek brzegowy temperatury](/FEM_ConstraintTemperature/pl "FEM ConstraintTemperature/pl"): Służy do definiowania warunku brzegowego temperatury dla punktu / krawędzi / ściany.

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Objętościowe źródło ciepła](/FEM_ConstraintBodyHeatSource/pl "FEM ConstraintBodyHeatSource/pl"): Służy do definiowania ciepła generowanego w ciele.

### Nadpisywanie wiązań

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Zdefiniuj przenikalność elektryczną próżni](/FEM_ConstantVacuumPermittivity/pl "FEM ConstantVacuumPermittivity/pl"): Służy do nadpisywania [przenikalności elektrycznej próżni](https://en.wikipedia.org/wiki/Vacuum_permittivity) dowolną wartością.

## Menu: Siatka

- ![](/images/FEM_MeshNetgenFromShape.svg) [Siatka MES z kształtu przy pomocy generatora Netgen](/FEM_MeshNetgenFromShape/pl "FEM MeshNetgenFromShape/pl"): Generuje siatkę MES dla modelu przy pomocy generatora Netgen.

- ![](/images/FEM_MeshGmshFromShape.svg) [Siatka MES z kształtu przy pomocy generatora Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl"): Tworzy siatkę MES dla modelu przy pomocy generatora Gmsh.

- ![](/images/FEM_MeshBoundaryLayer.svg) [Warstwa graniczna siatki](/FEM_MeshBoundaryLayer/pl "FEM MeshBoundaryLayer/pl"): Tworzy anizotropowe siatki dla dokładnych obliczeń przy brzegach.

- ![](/images/FEM_MeshRegion.svg) [Obszar siatki](/FEM_MeshRegion/pl "FEM MeshRegion/pl"): Tworzy zlokalizowane obszary do generowania siatki, aby zoptymalizować czas obliczeń.

- ![](/images/FEM_MeshGroup.svg) [Grupa siatki](/FEM_MeshGroup/pl "FEM MeshGroup/pl"): Grupuje i oznacza elementy siatki _(wierzchołek, krawędź, powierzchnia)_ razem - przydatne do eksportowania siatki do zewnętrznych solverów.

- ![](/images/FEM_CreateElementsSet.svg) [Usuń elementy](/FEM_CreateElementsSet/pl "FEM CreateElementsSet/pl"): Ukrywa elementy wskazane wielokątem z siatki. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/FEM_FemMesh2Mesh.svg) [Siatka MES na obiekt środowiska Siatka](/FEM_FemMesh2Mesh/pl "FEM FemMesh2Mesh/pl"): Konwertuje powierzchnie elementów 3D lub całe elementy 2D wybranej siatki MES na siatkę powierzchniową.

## Menu: Rozwiąż

- ![](/images/FEM_SolverCalculixCxxtools.svg) [Narzędzia CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl"): Tworzy kontroler solvera dla CalculiX.

- ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl"): Tworzy kontroler solvera dla Elmer.

- ![](/images/FEM_SolverMystran.svg) [Solver Mystran](/FEM_SolverMystran/pl "FEM SolverMystran/pl"): Tworzy kontroler solvera dla Mystran. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

- ![](/images/FEM_SolverZ88.svg) [Solver Z88](/FEM_SolverZ88/pl "FEM SolverZ88/pl"): Tworzy kontroler solvera dla Z88.

### Równania mechaniczne

- ![](/images/FEM_EquationElasticity.svg) [Równanie elastyczności](/FEM_EquationElasticity/pl "FEM EquationElasticity/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do liniowych analiz mechanicznych.

- ![](/images/FEM_EquationDeformation.svg) [Równanie deformacji](/FEM_EquationDeformation/pl "FEM EquationDeformation/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do nieliniowych analiz mechanicznych. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

### Równania elektromagnetyczne

- ![](/images/FEM_EquationElectrostatic.svg) [Równanie elektrostatyczne](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do analiz elektrostatycznych.

- ![](/images/FEM_EquationElectricforce.svg) [Równanie siły elektrostatycznej](/FEM_EquationElectricforce/pl "FEM EquationElectricforce/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do obliczania sił elektrycznych na powierzchni.

- ![](/images/FEM_EquationMagnetodynamic.svg) [Równanie magnetodynamiczne](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do analiz magnetodynamicznych. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Równanie magnetodynamiczne 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do analiz magnetodynamicznych 2D. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/FEM_EquationStaticCurrent.svg) [Równanie przepływu prądu stałego](/FEM_EquationStaticCurrent/pl "FEM EquationStaticCurrent/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do obliczeń przepływu prądu stałego. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

- ![](/images/FEM_EquationFlow.svg) [Równanie przepływu](/FEM_EquationFlow/pl "FEM EquationFlow/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do analiz przepływów.

- ![](/images/FEM_EquationFlux.svg) [Równanie strumienia](/FEM_EquationFlux/pl "FEM EquationFlux/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do analiz strumieni.

- ![](/images/FEM_EquationHeat.svg) [Równanie ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl"): Równanie dla ![](/images/FEM_SolverElmer.svg) [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") do analiz przepływu ciepła.

- ![](/images/FEM_SolverControl.svg) [Kontrola pracy solvera](/FEM_SolverControl/pl "FEM SolverControl/pl"): Otwiera menu do ustawiania i uruchamiania wybranego solvera.

- ![](/images/FEM_SolverRun.svg) [Uruchom solver](/FEM_SolverRun/pl "FEM SolverRun/pl"): Uruchamia wybrany solver w aktywnej analizie.

## Menu: Wyniki

- ![](/images/FEM_ResultsPurge.svg) [Usuń wyniki](/FEM_ResultsPurge/pl "FEM ResultsPurge/pl"): Kasuje wyniki aktywnej analizy.

- ![](/images/FEM_ResultShow.svg) [Pokaż wynik](/FEM_ResultShow/pl "FEM ResultShow/pl"): Służy do wyświetlania wyniku analizy. To okno dialogowe nie jest dostępne dla [Solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl"), ponieważ ten solver wizualizuje tylko przy użyciu obiektu [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl").

- ![](/images/FEM_PostApplyChanges.svg) [Zastosuj zmiany](/FEM_PostApplyChanges/pl "FEM PostApplyChanges/pl"): Przełącza, czy zmiany w potokach i filtrach są stosowane natychmiast.

- ![](/images/FEM_PostPipelineFromResult.svg) [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"): Służy do dodania nowej graficznej reprezentacji wyników analizy MES _(skala kolorów i więcej opcji wyświetlania)_.

- ![](/images/FEM_PostFilterWarp.svg) [Filtr wizualizacji deformacji](/FEM_PostFilterWarp/pl "FEM PostFilterWarp/pl"): Służy do wizualizacji skalowanego zdeformowanego kształtu modelu.

- ![](/images/FEM_PostFilterClipScalar.svg) [Filtr przycinania skalarnego](/FEM_PostFilterClipScalar/pl "FEM PostFilterClipScalar/pl"): Służy do przycinania pola wybraną wartością skalarną.

- ![](/images/FEM_PostFilterCutFunction.svg) [Filtr cięcia funkcją](/FEM_PostFilterCutFunction/pl "FEM PostFilterCutFunction/pl"): Służy do wyświetlania wyników na kuli lub płaszczyźnie przecinającej model.

- ![](/images/FEM_PostFilterClipRegion.svg) [Filtr przycięcia obszaru](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl"): Służy do przycinania pola kulą lub płaszczyzną przechodzącą przez model.

- ![](/images/FEM_PostFilterContours.svg) [Filtr konturów](/FEM_PostFilterContours/pl "FEM PostFilterContours/pl"): Służy do wyświetlania izolinii _(w 2D)_ i izokonturów. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Filtr przycięcia linią](/FEM_PostFilterDataAlongLine/pl "FEM PostFilterDataAlongLine/pl"): Służy do wyświetlania wartości pola wzdłuż wskazanej linii.

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Wykres linearyzacji naprężeń](/FEM_PostFilterLinearizedStresses/pl "FEM PostFilterLinearizedStresses/pl"): Tworzy wykres linearyzacji naprężeń.

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Filtr danych w punkcie](/FEM_PostFilterDataAtPoint/pl "FEM PostFilterDataAtPoint/pl"): Służy do wyświetlania wartości wybranego pola we wskazanym punkcie.

### Funkcje filtrowania

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Utwórz funkcję płaszczyzny](/FEM_PostCreateFunctionPlane/pl "FEM PostCreateFunctionPlane/pl"): Przecina siatkę wynikową płaszczyzną.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Utwórz funkcję sfery](/FEM_PostCreateFunctionSphere/pl "FEM PostCreateFunctionSphere/pl"): Przecina siatkę wynikową kulą.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Utwórz funkcję walca](/FEM_PostCreateFunctionCylinder/pl "FEM PostCreateFunctionCylinder/pl"): Przecina siatkę wynikową walcem. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Utwórz funkcję prostopadłościanu](/FEM_PostCreateFunctionBox/pl "FEM PostCreateFunctionBox/pl"): Przecina siatkę wynikową prostopadłościanem. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## Menu: Narzędzia

- ![](/images/FEM_ClippingPlaneAdd.svg) [Płaszczyzna cięcia na ścianie](/FEM_ClippingPlaneAdd/pl "FEM ClippingPlaneAdd/pl"): Dodaje płaszczyznę przycinania dla całego widoku modelu.

- ![](/images/FEM_ClippingPlaneRemoveAll.svg) [Usuń wszystkie płaszczyzny cięcia](/FEM_ClippingPlaneRemoveAll/pl "FEM ClippingPlaneRemoveAll/pl"): Usuwa wszystkie istniejące [płaszczyzny cięcia](/FEM_ClippingPlaneAdd/pl "FEM ClippingPlaneAdd/pl").

- ![](/images/FEM_Examples.svg) [Otwórz przykłady](/FEM_Examples/pl "FEM Examples/pl"): Otwórz GUI, aby uzyskać dostęp do przykładów MES.

## Menu podręczne

- ![](/images/FEM_MeshClear.svg) [Wyczyść dane siatki MES](/FEM_MeshClear/pl "FEM MeshClear/pl"): Usuwa plik siatki z pliku FreeCAD. Przydatne, aby uczynić plik FreeCAD lżejszym.

- ![](/images/FEM_MeshDisplayInfo.svg) [Wyświetl informacje o siatce MES](/FEM_MeshDisplayInfo/pl "FEM MeshDisplayInfo/pl"): Wyświetla podstawowe statystyki istniejącej siatki - ilość węzłów i elementów każdego typu.

## Narzędzia przestarzałe

- ![](/images/FEM_ConstraintFluidBoundary.svg) [Zdefiniuj przepływ graniczny](/FEM_ConstraintFluidBoundary/pl "FEM ConstraintFluidBoundary/pl"): Służy do definiowania warunku brzegowego płynu. Niewspierane przez żaden solver, niedostępne w wersja 1.0 i powyżej.

- ![](/images/FEM_ConstraintBearing.svg) [Wiązanie łożyska](/FEM_ConstraintBearing/pl "FEM ConstraintBearing/pl"): Służy do definiowania wiązania łożyska. Niewspierane przez żaden solver, niedostępne w wersja 1.0 i powyżej.

- ![](/images/FEM_ConstraintGear.svg) [Wiązanie koła zębatego](/FEM_ConstraintGear/pl "FEM ConstraintGear/pl"): Służy do definiowania wiązania koła zębatego. Niewspierane przez żaden solver, niedostępne w wersja 1.0 i powyżej.

- ![](/images/FEM_ConstraintPulley.svg) [Constraint pulley](/FEM_ConstraintPulley/pl "FEM ConstraintPulley/pl"): Służy do definiowania wiązania koła pasowego. Niewspierane przez żaden solver, niedostępne w wersja 1.0 i powyżej.

- ![](/images/FEM_SolverCalculiX.svg) [Solver CalculiX](/FEM_SolverCalculiX/pl "FEM SolverCalculiX/pl"): To samo co ![](/images/FEM_SolverCalculixCxxtools.svg) [Narzędzia CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl") z dodatkowymi sprawdzeniami. Narzędzie niedokończone, niedostępne w wersja 1.0 i powyżej.

- ![](/images/FEM_CreateNodesSet.svg) [Utwórz zestaw węzłów](/FEM_CreateNodesSet/pl "FEM CreateNodesSet/pl"): Tworzy zestaw węzłów z siatki MES.

Narzędzie było niedokończone i nie można było go użyć. Niedostępne w wersja 1.0 i powyżej.

## Ustawienia

- ![](/images/Std_DlgPreferences.svg) [Preferencje ...](/FEM_Preferences/pl "FEM Preferences/pl"): Ustawienia dostępne dla narzędzi środowiska MES w menu Edycja.

## Informacje dodatkowe

Na kolejnych stronach znajdują się objaśnienia poszczególnych tematów związanych z środowiskiem pracy MES.

[Instalacja środowiska MES](/FEM_Install/pl "FEM Install/pl"): szczegółowy opis jak skonfigurować zewnętrzne programy używane w środowisku pracy.

[Przygotowanie geometrii i siatki MES](/FEM_Geometry_Preparation_and_Meshing/pl "FEM Geometry Preparation and Meshing/pl"): wskazówki dotyczące przygotowania geometrii dla MES i siatki.

[MES: Siatka](/FEM_Mesh/pl "FEM Mesh/pl"): dalsze informacje na temat uzyskiwania siatki do analizy metodą elementów skończonych.

[MES: Solver](/FEM_Solver/pl "FEM Solver/pl"): dalsze informacje na temat różnych solverów dostępnych w środowisku pracy oraz tych, które mogą być używane w przyszłości.

[MES: CalculiX](/FEM_CalculiX/pl "FEM CalculiX/pl"): dalsze informacje na temat CalculiX, domyślnego solvera używanego w środowisku pracy do analizy strukturalnej.

[MES: Beton](/FEM_Concrete/pl "FEM Concrete/pl"): ciekawe informacje na temat symulacji konstrukcji betonowych.

## Poradniki

Poradnik 1: [MES CalculiX wspornik 3D](/FEM_CalculiX_Cantilever_3D/pl "FEM CalculiX Cantilever 3D/pl"), podstawowa analiza belki swobodnie podpartej.

Poradnik 2: [Poradnik dla środowiska pracy MES](/FEM_tutorial/pl "FEM tutorial/pl"), prosta analiza naprężenia konstrukcji.

Poradnik 3: [Skrypty w środowisku MES](/FEM_Tutorial_Python/pl "FEM Tutorial Python/pl"), skonfiguruj przykład wspornika całkowicie poprzez skrypty w środowisku Python, w tym siatkę.

Poradnik 4: [Ścinanie bloku kompozytowego](/FEM_Shear_of_a_Composite_Block/pl "FEM Shear of a Composite Block/pl"), obserwuj deformację bloku, który składa się z dwóch materiałów.

Poradnik 5: [Analiza MES w stanie przejściowym](/Transient_FEM_analysis/pl "Transient FEM analysis/pl").

Poradnik 6: [Post-Processing wyników MES za pomocą Paraview](/Post-Processing_of_FEM_Results_with_Paraview/pl "Post-Processing of FEM Results with Paraview/pl").

Poradnik 7: [Przykład pojemność dwóch kul](/FEM_Example_Capacitance_Two_Balls/pl "FEM Example Capacitance Two Balls/pl"), Elmer's GUI poradnik 6 "Elektrostatyka Pojemność Dwóch Kul" z wykorzystaniem przykładów FEM.

Sprzężona analiza termiczno-mechaniczna poradnik [openSIM](https://opensimsa.github.io/training.html).

Wideo poradnik 1: [MES wideo dla początkujących](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) _(w tym link do YouTube)_.

Wideo poradnik 2: [MES wideo dla początkujących](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) _(w tym link do YouTube)_.

Wiele poradników w formie wideo: [anisim Open Source Engineering Software](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw), _(w języku niemieckim)_.

## Rozszerzenie środowiska pracy MES

Środowisko pracy MES jest w ciągłym rozwoju. Celem projektu jest znalezienie sposobu na łatwą interakcję z różnymi solverami MES, tak aby użytkownik końcowy mógł usprawnić proces tworzenia, generowania siatki, symulacji i optymalizacji problemu projektowego, wszystko w ramach programu FreeCAD.

Poniższe informacje są skierowane do użytkowników i programistów, którzy chcą rozszerzyć środowisko MES na różne sposoby. Oczekiwana jest znajomość C++ i środowiska Python, a także pewna znajomość systemu "document object" używanego w FreeCAD. Informacje te są dostępne na stronach [Centrum Power użytkowników](/Power_users_hub/pl "Power users hub/pl") i [Centrum programisty](/Developer_hub/pl "Developer hub/pl"). Proszę zauważyć, że ponieważ FreeCAD jest w trakcie aktywnego rozwoju, niektóre artykuły mogą być zbyt stare, a więc przestarzałe. Najbardziej aktualne informacje są omawiane na [forum FreeCAD](https://forum.freecadweb.org/index.php), w sekcji Development. W przypadku dyskusji na temat MES, porad lub pomocy w rozszerzeniu środowiska pracy, czytelnik powinien odnieść się do [forum MES](https://forum.freecadweb.org/viewforum.php?f=18).

Poniższe artykuły wyjaśniają, jak można rozszerzyć środowisko pracy, np. poprzez dodanie nowych typów warunków brzegowych _(wiązań)_, czy równań.

- [Rozszerzenie modułu MES](/Extend_FEM_Module/pl "Extend FEM Module/pl")
- [Wprowadzenie do MES dla programistów](/Onboarding_FEM_Devs/pl "Onboarding FEM Devs/pl") próbuje zorientować nowych twórców, w jaki sposób mogą przyczynić się do rozwoju środowiska pracy MES.
- [Dodawanie wiązań w środowisku MES](/Add_FEM_Constraint_Tutorial/pl "Add FEM Constraint Tutorial/pl")
- [Dodawanie równań w środowisku MES](/Add_FEM_Equation_Tutorial/pl "Add FEM Equation Tutorial/pl")

Przewodnik programisty został napisany, aby pomóc użytkownikom w zrozumieniu złożonej bazy kodowej FreeCAD i interakcji między podstawowymi elementami i poszczególnymi środowiskami pracy. Książka jest umieszczona w serwisie Github, więc wielu użytkowników może ją współtworzyć i aktualizować.

- [Wczesny podgląd ebooka: Przewodnik programisty modułów po źródłach FreeCAD](https://forum.freecadweb.org/viewtopic.php?t=17581) wątek na forum.
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) repozytorium Github.

## Rozszerzenie dokumentacji środowiska pracy MES

- Więcej informacji dotyczących rozszerzenia lub braku dokumentacji dla MES można znaleźć na forum, w temacie: [Brak dokumentacji MES na Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/pl&oldid=1568332>"
