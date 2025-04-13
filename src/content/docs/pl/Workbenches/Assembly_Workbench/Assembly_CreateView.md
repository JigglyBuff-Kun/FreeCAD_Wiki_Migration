---
title: Złożenie Utwórz widok rozłożenia
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Utwórz widok rozłożenia |
| Lokalizacja w menu |
| Złożenie → Utwórz widok rozłożenia |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| V |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_CreateView.svg) Utwórz widok rozłożenia tworzy kontener widoku rozłożonego (obiekt Exploded\_Views) w aktywnym złożeniu, zawierający jeden (domyślnie) lub więcej widoków rozłożonych (obiekty Exploded\_View). Złożenie może mieć tylko jeden kontener widoków rozłożonych.

Widok rozłożony zbiera ruchy (obiekty Move) używane do przemieszczenia części ze złożonych pozycji do rozłożonych pozycji. Zmienione pozycje złożonych części i reprezentacje ruchów są widoczne tylko gdy widok rozłożony jest edytowany i w widokach środowiska Rysunek Techniczny utworzonych z widoku rozłożonego.

## Użycie

1. Upewnij się, że złożenie jest aktywne.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_CreateView.svg) Utwórz widok rozłożenia.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_CreateView.svg) Utwórz widok rozłożenia** z menu.
   * Użyj skrótu: E.
3. Jeśli nie ma wcześniej utworzonych obiektów Exploded\_Views: kontener Exploded\_Views zostanie dodany do aktywnego złożenia.
4. Obiekt Exploded\_View zostanie dodany do kontenera Exploded\_Views.
5. Okno dialogowe **Utwórz widok rozłożenia** zostanie otwarte w [panelu zadań](/Task_panel/pl "Task panel/pl").
6. Opcjonalnie zaznacz opcję **Części jako pojedyncza bryła** aby...
7. Opcjonalnie wybierz jeden sposób dodania przemieszczenia:
   * Rozłóż promieniowo:
     1. Wciśnij przycisk Rozłóż promieniowo
     2. Wszystkie części zostaną wybrane i pojawi się manipulator (zobacz [Uwagi](#Notes/pl)).
     3. Opcjonalnie przesuń manipulator wybierając jedną z opcji z listy rozwijanej **Wyrównanie przeciągania do...**.
        + Wyrównanie przeciągania do...
          1. Wybierz krawędź lub ścianę dowolnej części aby wyrównać manipulator.
        + Wyrównaj do środka części.
          1. Manipulator zostanie wyrównany do środka zakotwionej części.
        + Wyrównaj do początku układu współrzędnych części.
          1. Manipulator zostanie wyrównany do początku układu współrzędnych części.
     4. Przesuń manipulator jedną lub większą liczbą następujących opcji (tylko odsunięcie od punktu początkowego się liczy, każdy kierunek części jest liczony osobno):
        + Wciśnij i przytrzymaj lewy przycisk myszy na strzałce osi i przeciągnij aby przesunąć obiekt wzdłuż tej osi.
        + Wciśnij i przytrzymaj lewy przycisk myszy na płaszczyźnie i przeciągnij aby przesunąć obiekt wzdłuż płaszczyzny.
        + Wciśnij i przytrzymaj lewy przycisk myszy na kuli i przeciągnij aby obrócić obiekt wokół danej osi.
     5. Obiekt Move (zobacz [Uwagi](#Notes/pl)) zostanie dodany po puszczeniu lewego przycisku myszy.
   * Rozłóż wzdłuż oddzielnych przemieszczeń:
     1. Wybierz jedną lub więcej części.
     2. Pojawi się manipulator.
     3. Opcjonalnie wyrównaj manipulator (zobacz powyżej).
     4. Przesuń manipulator jak opisano wyżej (kierunki zgodne z uchwytami manipulatora są brane pod uwagę).
     5. Obiekt Move zostanie dodany po puszczeniu lewego przycisku myszy.
     6. Opcjonalnie zaznacz/odznacz części i/lub potwórz przeciąganie aby dodać więcej przemieszczeń.
8. Wykonaj jedną z poniższych czynności:
   * Wciśnij przycisk OK aby zatwierdzić i zakończyć używanie narzędzia.
   * Wciśnij przycisk Anuluj aby wycofać wszystkie zmiany i zakończyć używanie narzędzia.
9. Wszystkie części zostanie przesunięte z powrotem do ich złożonych pozycji a linie łączące zostaną schowane.

## Uwagi

* Manipulator jest narzędziem podobnym do (![](/images/Std_TransformManip.svg) [Std\_TransformManip](/Std_TransformManip/pl "Std TransformManip/pl")), ale bez opcji **Przyrosty** w panelu zadań.
* Obiekt Move w [widoku drzewa](/Tree_view/pl "Tree view/pl") jest reprezentowany przez czerwoną linię przerywaną dla każdej części wchodzącej w skład danego przemieszczenia. Te linie łączące są widoczne tylko gdy narzędzie jest włączona lub w widoku środowiska Rysunek Techniczny utworzonym z obiektu Exploded\_View.
* Aby dodać widok rozłożony do strony Rysunku technicznego: przejdź do środowiska pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), dodaj stronę, wybierz obiekt widoku rozłożonego w drzewie i kliknij [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Kontenery Exploded\_Views to obiekty `Assembly::ViewGroup`. Obiekty Exploded\_View wywodzą się z klasy `ExplodedView`, zaś obiekty Move z klasy `ExplodedViewStep`.

### Assembly::ViewGroup

#### Dane

Base

* DANE**Label** (`String`):
* DANE (Hidden)**Label2** (`String`):
* DANE (Hidden)**Expression Engine** (`ExpressionEngine`):
* DANE (Hidden)**Visibility** (`Bool`):
* DANE**Group** (`LinkList`):
* DANE (Hidden)**\_ Group Touched** (`Bool`):

#### Widok

Display Options

* WIDOK**Display Mode** (`Enumeration`):
* WIDOK**Show In Tree** (`Bool`):
* WIDOK**Visibility** (`Bool`):

Selection

* WIDOK**On Top When Selected** (`Enumeration`):
* WIDOK**Selection Style** (`Enumeration`):

### ExplodedView

Obiekt **ExplodedView** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

#### Dane

Exploded View

* DANE**Moves** (`LinkList`): Lista obiektów Move widoku rozłożenia.

### ExplodedViewStep

Obiekt **ExplodedViewStep** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

#### Dane

Exploded Move

* DANE**Move Type** (`Enumeration`): Typ przemieszczenia. (`Normal`, `Radial`).
* DANE**Movement Transform** (`Placement`): Wartość przemieszczenia.

  :   Końcowe położenie jest wynikiem początkowego położenia \* to położenie.
* DANE**Obj Names** (`StringList`): Przemieszczanie obiekty.
* DANE**Parts** (`LinkList`): Części zawierające przemieszczane obiekty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateView/pl&oldid=1515642>"