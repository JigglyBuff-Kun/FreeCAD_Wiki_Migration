---
title: Centrum programisty
---

![](/images/Crystal_Clear_app_tutorials.png)

---

To jest miejsce, które należy odwiedzić, jeśli chcesz przyczynić się do rozwoju programu FreeCAD.

Te strony są we wczesnej fazie rozwoju. Jeśli nie możesz znaleźć informacji, której szukasz, lub znalazłeś przydatne informacje gdzieś, gdzie nie zamieściliśmy linków, zostaw komentarz na [forum](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff), a ktoś się tym zajmie _(lub jeśli jesteś odważny, dlaczego nie edytować tej strony bezpośrednio!)_.

## Dokumentacja programisty

Dokumentacja dla programisty składa się z następujących części:

### Kompilacja programu FreeCAD

- [repozytorium GitHub](https://github.com/FreeCAD/FreeCAD). Jeśli jesteś nowy w git, przeczytaj [Zarządzanie kodem źródłowym](/Source_code_management/pl "Source code management/pl")
- [kompilacja z użyciem Docker](/Compile_on_Docker/pl "Compile on Docker/pl")
- [kompilacja w systemie Linux](/Compile_on_Linux/pl "Compile on Linux/pl")
- [Kompilacja w systemie MacOS](/Compile_on_MacOS/pl "Compile on MacOS/pl")
- [kompilacja w systemie Windows](/Compile_on_Windows/pl "Compile on Windows/pl")
- [Szczegóły licencji](/License/pl "License/pl") o licencjach programu FreeCAD.
- [Biblioteki zewnętrzne](/Third_Party_Libraries/pl "Third Party Libraries/pl")
- [Narzędzia zewnętrzne](/Third_Party_Tools/pl "Third Party Tools/pl")
- [Uruchomienie i konfiguracja](/Start_up_and_Configuration/pl "Start up and Configuration/pl")
- [Dokumentacja źródłowa](/Source_documentation/pl "Source documentation/pl")
- Użyj [bug tracker](/Tracker/pl "Tracker/pl"), gdy masz problem lub myślisz, że mogłeś znaleźć błąd

### Przygotowanie pakietów

[Paczkowanie](/Packaging/pl "Packaging/pl") polega na pobraniu skompilowanych binariów i plików źródłowych Python programu FreeCAD i rozpowszechnieniu ich w celu wykorzystania w konkretnym systemie.

- [Paczkowanie w Linux OS](/Linux_packaging/pl "Linux packaging/pl")
  - [Debian development](/Debian_development/pl "Debian development/pl")
  - [Debian Unstable](/Debian_Unstable/pl "Debian Unstable/pl")
  - [Git buildpackage](/Git_buildpackage/pl "Git buildpackage/pl")
- [MacOS packaging](/MacOS_packaging "MacOS packaging")
- [Windows packaging](/Windows_packaging/pl "Windows packaging/pl")

### Narzędzia wspomagające tworzenie wydania

- [FreeCAD Narzędzie do kompilacji](/FreeCAD_Build_Tool/pl "FreeCAD Build Tool/pl").
  - [Tworzenie Środowiska pracy](/Workbench_creation/pl "Workbench creation/pl") dla programu FreeCAD.
- [Debugowanie](/Debugging/pl "Debugging/pl") FreeCAD.
- [Testowanie](/Testing/pl "Testing/pl") FreeCAD.
- [Kompilacja (przyspieszamy)](</Compiling_(Speeding_up)/pl> "Compiling (Speeding up)/pl") FreeCAD.
- [Ciągła integracja](/Continuous_Integration/pl "Continuous Integration/pl").

### Modyfikacja programu FreeCAD

- Zrozumienie [kodu źródłowego FreeCAD](/The_FreeCAD_source_code/pl "The FreeCAD source code/pl").
- [Przesyłanie łatek](/Tracker/pl#Przesyłanie_łatek "Tracker/pl").
- Dodawanie [funkcjonalności](/Gui_Command/pl "Gui Command/pl") do programu FreeCAD lub środowiska pracy.
- [FreeCAD jako produkt obcej marki](/Branding/pl "Branding/pl") czyli _jak nadać programowi FreeCAD unikalny wygląd_.
- [Opracowanie graficzne](/Artwork/pl "Artwork/pl"), które wykonaliśmy dla programu FreeCAD, a które możesz dowolnie wykorzystać.
- [Wytyczne dotyczące grafiki](/Artwork_Guidelines/pl "Artwork Guidelines/pl") standardy dla ikon.
- [Tłumaczenia dla FreeCAD](/Localisation/pl "Localisation/pl").
- [Dodatkowe moduły Python](/Extra_python_modules/pl "Extra python modules/pl"), czyli _jak rozszerzyć funkcjonalność pythona w ramach FreeCADa_.
- [Google Summer of Code](/Google_Summer_of_Code_2023 "Google Summer of Code 2023") zaangażuj się poprzez program wsparcia studentów Google.
- [Dostrajanie parametrów](/Fine-tuning/pl "Fine-tuning/pl") pokazuje różne opcje i przełączniki parametrów, które mogą pokonać problemy
- [Zawijanie klasy Cplusplus w środowisku Python](/Wrapping_a_Cplusplus_class_in_Python/pl "Wrapping a Cplusplus class in Python/pl") pokazuje, jak stworzyć w Pythonie wrapper dla klasy C++
- [Lista kontrolna dodawania funkcji do środowiska pracy w języku C++](/NewFeatureCheckList_C%2B%2B "NewFeatureCheckList C++") stanowi pomoc dla współtwórców.

- [Tłumaczenie interfejsu zewnętrznych środowisk pracy](/Translating_an_external_workbench/pl "Translating an external workbench/pl").

### Przewodnik dla twórców modułów

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): To jest ebook w trakcie pisania na platformie GitHub, proszę rozwidlić i wysłać pull request, aby wnieść swój wkład.

Rozdziały:

- Przegląd i architektura oprogramowania.
- Struktura kodu źródłowego.
- Baza i moduł App.
- Moduł GUI.
- Paczkowanie w Pythonie.
- Modułowa konstrukcja.
- Analiza źródeł modułu MES _(mieszane C++ i Python)_.
- Rozwój modułu CFD _(czysty Python)_.
- Testowanie i debugowanie modułu.
- Współtworzenie kodu za pomocą git.

Najnowszy PDF może być pobrany z [tego repo git](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf).

### Wewnętrzne

#### Dokumentacja OpenCascade

OpenCascade to platforma programistyczna do modelowania powierzchniowego i bryłowego 3D, wymiany danych CAD oraz wizualizacji, głównie w postaci bibliotek C++.

- [Poradniki Romana Lygina](http://opencascade.wikidot.com/romansarticles).
- [Pełna dokumentacja online](https://dev.opencascade.org/cdoc/overview/html/index.html).
- [Podręcznik referencyjny](https://dev.opencascade.org/doc/refman/html/index.html).
- [Wiki dla openCascade](http://opencascade.wikidot.com) _(obecnie zawiera ?chiński spam)_.

#### Format plików

[Format pliku FCStd](/File_Format_FCStd/pl "File Format FCStd/pl"). Pliki tworzone za pomocą FreeCAD to pliki `.zip`, które zawierają geometrię [BREP](https://en.wikipedia.org/wiki/Boundary_representation), a także dane XML opisujące dokument.

#### Solver szkicownika

- [Broszura dotycząca architektury solvera szkicownika](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) _(wątek na forum)_, [źródło](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) w serwisie GuitHub.
- [Solver PlaneGCS](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) w kodzie źródłowym FreeCAD; ważne pliki to [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) i [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp)
- [Kilka ostatnich ulepszeń szkicownika](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

Solwer szkicownika nie jest doskonały, ponieważ istnieją pewne problemy z precyzją numeryczną podczas używania dużych wartości, zobacz wątek na forum [Przygoda z naprawianiem solvera szkicownika dla dużych szkiców](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

Opracowanie nowej architektury solvera mogłoby poprawić sposób jego wykorzystania zarówno w środowisku pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), jak i przy składaniu brył 3D. Zobacz stronę [Reimplementacja wiązań solvera](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Plan rozwoju

FreeCAD, choć użyteczny w pewnych obszarach, jest na początku długiej drogi do głównego nurtu CAD. Jest jeszcze wiele do zrobienia
aby osiągnąć stan, w którym będziemy mogli konkurować z oprogramowaniem komercyjnym.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Społeczność

- [IRC channel](ircs://irc.libera.chat:6697/freecad) ,zsynchronizowany z [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Forum programistów](https://forum.freecad.org/viewforum.php?f=6)

- [Plan rozwoju](/Development_roadmap/pl "Development roadmap/pl")

- Uznanie
  - [Współpracownicy](/Contributors "Contributors")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/pl&oldid=1394078>"
