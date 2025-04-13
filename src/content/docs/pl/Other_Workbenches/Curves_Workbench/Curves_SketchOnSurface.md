---
title: Krzywe Szkic na powierzchni
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Szkic na powierzchni |
| Lokalizacja w menu |
| Surfaces → Sketch on Surface |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie to mapuje szkic na dowolną zakrzywioną powierzchnię, na przykład jak etykieta na butelce.
Szkic musi być faktycznie dołączony do powierzchni *(patrz Sketch.Support)*.
Tryb `Map` szkicu nie ma wpływu na wynik.

![](/images/Curves_SketchOnSurface_demo.png)

Powyżej: obiekt `Sketch_On_Surface` zastosowany do powierzchni walca *(po lewej)* i szkic źródłowy w trybie edycji *(po prawej)*.

## Użycie

1. Przełącz się do środowiska pracy ![](/images/Curves_workbench_icon.svg) [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") *(instalacja za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") jest konieczna, jeśli nie zainstalowano go wcześniej)*.
2. Istnieją 2 metody korzystania z narzędzia SketchOnSurface:

   Masz już szkic, który chcesz zmapować na powierzchnię

   1. Dołącz szkic do powierzchni docelowej:
      * W oknie dialogowym dołączania wybierz ścianę
      * Ustaw tryb na Deactivated, pozostawiając ścianę jako pierwsze odniesienie.
      * Zamknij okno dialogowe Dołączenie
      * Ustaw Placement.z=0
   2. Edytuj szkic i dodaj prostokąt konstrukcyjny (niebieski) wokół geometrii. Prostokąt ten będzie stanowił parametryczne granice powierzchni.
   3. Wyjdź z trybu edycji.
   4. Wybierz szkic.
   5. Aktywuj SketchOnSurface poprzez:
      * Naciśnięcie przycisku ![](/images/Curves_SketchOnSurface.svg)
      * Używając polecenia **Surfaces → Sketch on Surface** w menu Curves.

   Nie masz jeszcze szkicu do zmapowania

   1. Wybierz powierzchnię docelową w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   2. Aktywuj narzędzie SketchOnSurface poprzez:
      * Naciśnięcie przycisku ![](/images/Curves_SketchOnSurface.svg)
      * Używając polecenia z menu **Surfaces → Sketch on Surface**.
   3. Obiekt Sketch\_On\_Surface pojawi się w [Widoku drzewa](/Tree_view "Tree view").
   4. Rozwiń ten obiekt, aby Mapped\_Sketch pojawił się poniżej.
   5. Edytuj szkic i dodaj geometrie wewnątrz niebieskich granic konstrukcji.
   6. Obiekt SketchOnSurface zostanie utworzony na powierzchni obiektu na podstawie tego szkicu.

## Opcje

* Wypełnienie wyciągnięcia: Gdy wartość Grubość jest różna od zera, spowoduje to wygenerowanie płaszczyzn wyciągnięcia *(niebieskie płaszczyzny na powyższym zrzucie ekranu)*.
* Wypełnij powierzchnie: Wypełni wszystkie figury geometryczne zamknięte w ścianach *(czerwone ściany na powyższym zrzucie ekranu)*.
* Przesunięcie: Spowoduje to przesunięcie kształtów zmapowanych powyżej do ściany docelowej. Nie należy ustawiać przesunięcia większego niż grubość, ponieważ spowoduje to zniknięcie ściany od wewnątrz.
* Grubość: Jeśli nie ma wartości null, nada grubość powierzchniom utworzonym powyżej.

## Uwagi

Zakłada się, że cała geometria w szkicu jest zamknięta w niebieskiej ramce konstrukcyjnej. Obejmuje to całą inną geometrię konstrukcyjną, a także widoczną geometrię wewnętrzną złożonych krzywych *(Béziera, Elipsy)*. Jeśli tak nie jest, obwiednia szkicu będzie większa niż ramka konstrukcyjna, a ostateczne mapowanie zostanie odpowiednio zmniejszone. W razie potrzeby [ukryj geometrię wewnętrzną](/Sketcher_RestoreInternalAlignmentGeometry/pl "Sketcher RestoreInternalAlignmentGeometry/pl"), która nie znajduje się w całości wewnątrz ramki konstrukcyjnej.

## Właściwości

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SketchOnSurface/pl&oldid=1562203>"