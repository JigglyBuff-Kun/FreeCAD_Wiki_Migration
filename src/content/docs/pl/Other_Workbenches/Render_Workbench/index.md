---
title: Środowisko pracy Render
---
![](/images/Render_workbench_icon.svg)

Ikonka FreeCAD dla środowiska pracy Render

## Wprowadzenie

Środowisko pracy Render umożliwia tworzenie wysokiej jakości obrazów z modeli FreeCAD przy użyciu zewnętrznych silników renderujących o otwartym kodzie źródłowym.

* ![Pawilon Barcelona Zrzut ekranu](/images/Pabellon_de_Barcelona.png)

  Pawilon Barcelona  
  Zrzut ekranu
* ![Pawilon Barcelona Obraz renderowany przez Povray.](/images/Pabellon_de_Barcelona_Pov_large.png)

  Pawilon Barcelona  
  Obraz renderowany przez Povray.
* ![Barcelona pavilion Obraz renderowany przez Cycles.](/images/Pabellon_de_Barcelona_Cycles.png)

  Barcelona pavilion  
  Obraz renderowany przez Cycles.
* ![Asm V4 Zrzut ekranu](/images/Asm_V4.png)

  Asm V4  
  Zrzut ekranu
* ![Asm v4 Obraz renderowany przez LuxCore.](/images/Asm_V4_lux.png)

  Asm v4  
  Obraz renderowany przez LuxCore.
* ![Asm v4 Obraz renderowany przez Ospray.](/images/Asm_V4_ospray2.png)

  Asm v4  
  Obraz renderowany przez Ospray.
* ![Kościół światłości Zrzut ekranu](/images/Church_of_the_light.png)

  Kościół światłości  
  Zrzut ekranu
* ![Kościół światłości Obraz renderowany przez LuxCore.](/images/Church_of_the_light_lux2.png)

  Kościół światłości  
  Obraz renderowany przez LuxCore.
* ![Kościół światłości Obraz renderowany przez Cycles.](/images/Church_of_the_light_cycles.png)

  Kościół światłości  
  Obraz renderowany przez Cycles.
* ![Samochód Zrzut ekranu](/images/Car.png)

  Samochód  
  Zrzut ekranu
* ![Samochód Obraz renderowany przez Ospray.](/images/Car_ospray.png)

  Samochód  
  Obraz renderowany przez Ospray.
* ![Samochód Obraz renderowany przez LuxCore.](/images/Car_lux.png)

  Samochód  
  Obraz renderowany przez LuxCore.
* ![Zestaw klocków Zrzut ekranu](/images/Brick_assembly.png)

  Zestaw klocków  
  Zrzut ekranu
* ![Zestaw klocków Obraz renderowany przez Appleseed.](/images/Brick_assembly_appleseed.png)

  Zestaw klocków  
  Obraz renderowany przez Appleseed.
* ![Zestaw klocków Obraz renderowany przez Luxcore.](/images/Brick_assembly_luxcore.png)

  Zestaw klocków  
  Obraz renderowany przez Luxcore.
* ![Villa Savoye Zrzut ekranu](/images/VillaSavoye.png)

  Villa Savoye  
  Zrzut ekranu
* ![Villa Savoye Obraz renderowany przez Appleseed.](/images/VillaSavoye_appleseed.png)

  Villa Savoye  
  Obraz renderowany przez Appleseed.
* ![Villa Savoye Obraz renderowany przez Cycles.](/images/VillaSavoye_Cycles.png)

  Villa Savoye  
  Obraz renderowany przez Cycles.

Środowisko pracy Render, czysty Python, jest płynnie zintegrowane z FreeCAD: cała scena renderowania - obiekty, oświetlenie, materiały, kamera itp. - można opisać za pomocą obiektów FreeCAD, które można wyeksportować do zewnętrznych silników renderujących.

W porównaniu z innymi podejściami opartymi na aplikacjach graficznych trzeciej części, Render ma na celu:

* Uniknięcie konieczności uczenia się przez użytkownika innego oprogramowania 3D / grafiki komputerowej: wszystko, co trzeba wiedzieć, znajduje się we FreeCAD.
* Uproszczenie przepływu pracy renderowania i uwolnienie użytkownika od wszelkich pośrednich manipulacji plikami - takich jak import, eksport, retusz sceny itp.
* Utrwalenie konfiguracji sceny, a zwłaszcza zapobieganie przeróbkom w zewnętrznym narzędziu za każdym razem, gdy model został zmodyfikowany.

## Obsługiwane silniki renderujące

Obecnie obsługiwanych jest sześć silników renderujących:

* LuxCoreRender,
* Appleseed,
* Cycles *(wersja samodzielna)*,
* Pov-Ray,
* Intel Ospray Studio,
* Pbrt-v4 *(eksperymentalny)*.

## Użycie

W trybie szybkiego uruchamiania, po prawidłowym zainstalowaniu środowiska pracy, renderowanie modelu FreeCAD jest tylko 4-etapowym procesem:

1. **Utwórz projekt renderowania:** Naciśnij przycisk na pasku narzędzi odpowiadający twojemu rendererowi i wybierz szablon odpowiedni dla twojego renderera *(możesz zacząć od smaku "studio", takiego jak appleseed\_studio\_light.appleseed, cycles\_studio\_light.xml, luxcore\_studio\_light.cfg, povray\_studio\_light.pov itd.)*
2. **Dodawanie widoków obiektów do projektu renderowania:** Wybierz zarówno obiekty, jak i projekt, a następnie naciśnij przycisk Dodaj widok.
3. **Ustaw kierunek patrzenia:** [Nawiguj w oknie widoku 3D](/Manual:Navigating_in_the_3D_view/pl "Manual:Navigating in the 3D view/pl") do żądanej pozycji i przełącz widok na tryb [perspektywy](/Std_PerspectiveCamera/pl "Std PerspectiveCamera/pl").
4. **Renderowanie:** Wybierz projekt i naciśnij przycisk Renderuj na pasku narzędzi *(dostępny również z menu kontekstowego projektu)*.

**Teraz powinieneś otrzymać pierwszy render swojego modelu**.

Więcej instrukcji można znaleźć w repozytorium [GitHub](https://github.com/FreeCAD/FreeCAD-render) lub w pomocy online.

## Właściwości

Właściwości obejmują, ale nie ograniczają się do:

* Oświetlenie: światła punktowe, światła obszarowe, niebo słoneczne i wstępnie ustawione szablony oświetlenia.
* Kamery *(ujęcia widoku)*.
* Zarządzanie materiałami *(przy użyciu zwykłych shaderów: matowych, błyszczących, szklanych, pryncypialnych itp.)*
* Tryb wsadowy / tryb UI.
* Odszumianie.
* Warunek zatrzymania *(próbka na piksel)*.
* Kontrola siatki: ugięcia kątowe i liniowe, automatyczne wygładzanie.

## Odnośniki internetowe

Potrzebujesz więcej informacji? Wystarczy kliknąć: <https://github.com/FreeCAD/FreeCAD-render>

Retrieved from "<http://wiki.freecad.org/index.php?title=Render_Workbench/pl&oldid=1316534>"