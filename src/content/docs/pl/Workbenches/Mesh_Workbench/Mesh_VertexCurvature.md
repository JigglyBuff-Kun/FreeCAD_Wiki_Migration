---
title: Siatka Krzywizna siatki
---
|  |
| --- |
| Siatka: Krzywizna siatki |
| Lokalizacja w menu |
| Siatki → Wykres krzywizny |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Informacje o krzywiźnie](/Mesh_CurvatureInfo/pl "Mesh CurvatureInfo/pl") |
|  |

## Opis

Polecenie **Wykres krzywizny** tworzy obiekty krzywizny dla obiektów siatki. Obiekt krzywizny wyświetla krzywiznę siatki używając różnych kolorów dla części wypukłej, płaskiej i wklęsłej.

![](/images/Mesh_VertexCurvature_example.png)

Przykład obiektu krzywizny siatki

## Użycie

1. Wybierz jeden lub więcej obiektów siatki.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_VertexCurvature.svg) **Wykres krzywizny**.
   * Wybierz opcję z menu **Siatki → ![](/images/Mesh_VertexCurvature.svg) Wykres krzywizny**.
   * Wybierz opcję **![](/images/Mesh_VertexCurvature.svg) Wykres krzywizny** z menu podręcznego [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości

Dla obiektu krzywizny siatki następujące właściwości są dostępne w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Wybierz opcję **Pokaż ukryte** z menu kontekstowego Edytora właściwości, aby wyświetlić ukryte właściwości.

### Dane

Podstawa

* DANE**Etykieta** (`String`): edytowalna przez użytkownika nazwa obiektu, dowolny ciąg znaków UTF8.
* DANE**Pochodzenie** (`Link`): link do obiektu siatki.

#### Ukryte dane

Podstawa

* DANE**Curv Info** (`CurvatureList`): lista informacji o krzywiźnie.
* DANE**Expression Engine** (`ExpressionEngine`): lista wyrażeń.
* DANE**Label2** (`String`): opis obiektu edytowalny przez użytkownika, dowolny ciąg znaków UTF8, który może zawierać nowe linie.
* DANE**Visibility** (`Bool`): jeśli opcja jest ustawiona na wartość `PRAWDA`, obiekt pojawi się w oknie [widoku 3D](/3D_view/pl "3D view/pl").

### Widok

Podstawa

* WIDOK**Display Mode** (`Enumeration`): `Krzywizna bezwzględna` *(domyślnie)*, `Krzywizna średnia`, `Krzywizna Gaussa`, `Krzywizna maksymalna`, `Krzywizna minimalna`.
* WIDOK**On Top When Selected** (`Enumeration`): `Wyłączone` *(domyślnie)*, `Włączone`, `Objekt`, `Element`.
* WIDOK**Selection Style** (`Enumeration`): `Kształt`, `Ramka otaczająca` *(domyślnie)*.
* WIDOK**Show In Tree** (`Bool`): jeśli opcja jest ustawiona na wartość `PRAWDA`, obiekt pojawi się w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
* WIDOK**Visibility** (`Bool`): jeśli opcja jest ustawiona na wartość `PRAWDA`, obiekt pojawi się w oknie [Widoku 3D](/3D_view/pl "3D view/pl").

#### Wyświetl ukryte

Podstawa

* WIDOK**Texture Material** (`Material`): [Materiał](/index.php?title=App_Material/pl&action=edit&redlink=1 "App Material/pl (page does not exist)") związany z obiektem.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_VertexCurvature/pl&oldid=1560957>"