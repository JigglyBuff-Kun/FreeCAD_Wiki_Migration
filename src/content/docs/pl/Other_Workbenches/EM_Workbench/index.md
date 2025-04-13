---
title: Środowisko pracy Elektromagnetyka
---

![](/images/EMWorkbench.svg)

Ikonka FreeCAD dla środowiska pracy EM

## Wprowadzenie

Środowisko pracy EM _(ElectroMagnetic)_ zapewnia interfejs CAD do niektórych darmowych solwerów open source. Obecnie obsługuje on solwer impedancji magnetokwazistatycznej 3D [FastHenry](https://www.fastfieldsolvers.com/software.htm#fasthenry2) _(tj. ekstrakcję indukcyjności i rezystancji przy "niskich" częstotliwościach)_. Trwają prace nad obsługą solwera pojemności elektrostatycznej 3D [FasterCap](https://www.fastfieldsolvers.com/software.htm#fastercap).

![](/images/Screenshot_EM_window.png)

## Instalacja

Środowisko pracy EM jest [zewnętrznym środowiskiem pracy](/External_workbenches/pl "External workbenches/pl"), które można zainstalować z poziomu ![](/images/AddonManager.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") FreeCAD. Można to zrobić przez menu **Przybory → Menadżer dodatków**.

Solwery elektromagnetyczne FastHenry2 i FasterCap muszą być zainstalowane oddzielnie. Ich kody binarne oraz źródła są dostępne bezpłatnie na stronie [FastFieldSolvers](https://www.fastfieldsolvers.com).

## Użycie

### FastHenry

FastHenry to oprogramowanie do obliczania zależnych od częstotliwości indukcyjności własnych i wzajemnych oraz rezystancji ogólnej trójwymiarowej struktury przewodzącej w przybliżeniu magnetoquasistatic. Może również generować kompatybilne ze Spice, wieloczęstotliwościowe modele obwodów zastępczych.

Znajomość FastHenry jest warunkiem wstępnym do biegłego korzystania ze środowiska ElectroMagnetic dla FastHenry. Sugerujemy zapoznanie się z oryginalną instrukcją [FastHenry User's manual](https://www.fastfieldsolvers.com/documentation.htm) i pobawienie się przykładowymi plikami, które są dostarczane wraz z instalacją.

### FasterCap

FasterCap to potężny program do ekstrakcji pojemności w trzech i dwóch wymiarach.

Znajomość FasterCap jest warunkiem wstępnym do biegłego korzystania ze środowiska ElectroMagnetic dla FasterCap. Sugerujemy zapoznanie się z oryginalną instrukcją [FasterCap help file](https://www.fastfieldsolvers.com/documentation.htm) i pobawienie się przykładowymi plikami, które są dostarczane wraz z instalacją.

## Narzędzia FastHenry

Są to narzędzia używane do łączenia się z FastHenry:

- ![](/images/EM_FHNode.svg) [FHNode](/EM_FHNode/pl "EM FHNode/pl"): Tworzy obiekt węzła FastHenry
- ![](/images/EM_FHSegment.svg) [FHSegment](/EM_FHSegment/pl "EM FHSegment/pl"): Tworzy obiekt segmentu FastHenry
- ![](/images/EM_FHPath.svg) [FHPath](/EM_FHPath/pl "EM FHPath/pl"): Tworzy obiekt ścieżki FastHenry
- ![](/images/EM_FHPlane.svg) [FHPlane](/EM_FHPlane/pl "EM FHPlane/pl"): Tworzy jednolity obiekt przewodzący płaszczyzny FastHenry
- ![](/images/EM_FHPlaneHole.svg) [FHPlaneHole](/EM_FHPlaneHole/pl "EM FHPlaneHole/pl"): Tworzy obiekt Otwór jednolitej płaszczyzny przewodzącej FastHenry
- ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole/pl "EM FHPlaneAddRemoveNodeHole/pl"): Dodaje lub usuwa węzeł lub otwór z / do płaszczyzny przewodzącej
- ![](/images/EM_FHEquiv.svg) [FHEquiv](/EM_FHEquiv/pl "EM FHEquiv/pl"): Tworzy obiekt równoważności węzła FastHenry
- ![](/images/EM_FHPort.svg) [FHPort](/EM_FHPort/pl "EM FHPort/pl"): Tworzy obiekt portu FastHenry
- ![](/images/EM_FHSolver.svg) [FHSolver](/EM_FHSolver/pl "EM FHSolver/pl"): Tworzy obiekt solwera FastHenry
- ![](/images/EM_FHInputFile.svg) [FHInputFIle](/EM_FHInputFile/pl "EM FHInputFile/pl"): Tworzy plik wejściowy FastHenry

## Narzędzia FasterCap

Obecnie FasterCap jest obsługiwany przez niektóre makra w pliku Export_mesh.py dostępnym w kodzie źródłowym [środowiska ElektroMagnetyka na GitHub](https://github.com/ediloren/EM-Workbench-for-FreeCAD).

## API

Narzędzia **EM** mogą być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

## Poradniki

Niektóre poradniki wideo są dostępne dla wersji beta środowiska EM:

- [Poradnik FreeCAD dla środowiska pracy ElektroMagnetyka - Pierwsze kroki](https://www.youtube.com/watch?v=h6Pp-_ovLZM)
- [Poradnik FreeCAD dla środowiska pracy ElektroMagnetyka: Tworzenie płaszczyzny przewodzącej, część 1](https://www.youtube.com/watch?v=5pSzPizw4e8)
- [Poradnik FreeCAD dla środowiska pracy ElektroMagnetyka: Tworzenie płaszczyzny przewodzącej, część 2](https://www.youtube.com/watch?v=BeBNtfH25rM)
- [Poradnik FreeCAD dla środowiska pracy ElektroMagnetyka: Tworzenie płaszczyzny przewodzącej, część 3](https://www.youtube.com/watch?v=BtgdJOf-ql0)
- [Poradnik FreeCAD dla środowiska pracy ElektroMagnetyka: Korzystanie z obiektu ścieżki, część 1](https://www.youtube.com/watch?v=CRqDuEtbdds)
- [Poradnik FreeCAD dla środowiska pracy ElektroMagnetyka: Korzystanie z obiektu ścieżki, część 2](https://www.youtube.com/watch?v=slsLdLoF2OI)

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_Workbench/pl&oldid=1316397>"
