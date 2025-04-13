---
title: Siatka Utwórz bryłę pierwotną
---
|  |
| --- |
| Siatka Utwórz bryłę pierwotną |
| Lokalizacja w menu |
| Siatki → Utwórz bryłę pierwotną ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Utwórz bryłę pierwotną** tworzy regularną parametryczną bryłę obiektu siatkowego.

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_BuildRegularSolid.svg) **Utwórz bryłę pierwotną**.
   * Wybierz z menu opcję **Siatki → ![](/images/Mesh_BuildRegularSolid.svg) Utwórz bryłę pierwotną ...**.
2. Otworzy się okno dialogowe **Bryła pierwotna**.
3. Najpierw wybierz typ obiektu siatkowego z listy rozwijanej:
   * **![](/images/Mesh_Cube.svg) Sześcian**
   * **![](/images/Mesh_Cylinder.svg) Walec**
   * **![](/images/Mesh_Cone.svg) Stożek**
   * **![](/images/Mesh_Sphere.svg) Sfera**
   * **![](/images/Mesh_Ellipsoid.svg) Elipsoida**
   * **![](/images/Mesh_Torus.svg) Torus**
4. Określ wymagane ustawienia. Dostępne ustawienia zależą od typu obiektu siatkowego. Zobacz [Właściwości](#W.C5.82a.C5.9Bciwo.C5.9Bci).
5. Dla siatek z zakrzywionymi powierzchniami: wyższa wartość **Próbkowania** skutkuje drobniejszą siatką.
6. Naciśnij przycisk Utwórz, aby utworzyć obiekt siatki.
7. Opcjonalnie utwórz więcej obiektów siatki.
8. Naciśnij przycisk Zamknij, aby zamknąć okno dialogowe i zakończyć polecenie.

## Uwagi

* Obiekty siatkowe utworzone za pomocą tego polecenia są parametryczne. Kiedykolwiek są one ponownie obliczane, na przykład po zmianie jednego z ich parametrów, ich siatka jest rekonstruowana. Oznacza to, że manipulowanie nimi za pomocą poleceń takich jak [Ulepsz przez Gmsh](/Mesh_RemeshGmsh/pl "Mesh RemeshGmsh/pl"), [Skaluj](/Mesh_Scale/pl "Mesh Scale/pl") itp. zwykle nie ma sensu.

## Właściwości

Obiekty siatkowe utworzone za pomocą tego polecenia dziedziczą wszystkie właściwości typu [Cecha siatki](/Mesh_Feature/pl "Mesh Feature/pl"). Dodatkowo każdy typ obiektu siatkowego posiada szereg właściwości pozwalających kontrolować jego parametryczne zachowanie:

### Sześcian

#### Dane

Sześcian

* DANE**Wysokość** (`FloatConstraint`): wysokość sześcianu.
* DANE**Długość** (`FloatConstraint`): długość sześcianu.
* DANE**Szerokość** (`FloatConstraint`): szerokość sześcianu.

### Walec

#### Dane

Podstawa

* DANE**Zamknięty** (`Bool`): jeśli ustawiono na wartość `false`, planarne końce walca pozostają otwarte.
* DANE**Długość krawędzi** (`FloatConstraint`): długość krawędzi ścian w siatce.
* DANE**Długość** (`FloatConstraint`): długość walca.
* DANE**Promień** (`FloatConstraint`): promień walca.
* DANE**Próbkowanie** (`IntegerConstraint`): liczba ścian wzdłuż zakrzywionej powierzchni.

### Stożek

#### Dane

Podstawa

* DANE**Zamknięty** (`Bool`): jeśli ustawiono na wartość `false`, planarny koniec *(końce)* stożka pozostają otwarte.
* DANE**Długość krawędzi** (`FloatConstraint`): długość krawędzi ścian w siatce.
* DANE**Długość** (`FloatConstraint`): długość stożka.
* DANE**Promień 1** (`FloatConstraint`): pierwszy promień stożka. Może przyjmować wartość `0`.
* DANE**Promień 2** (`FloatConstraint`): drugi promień stożka. Może przyjmować wartość `0`.
* DANE**Próbkowanie** (`IntegerConstraint`): liczba ścian wzdłuż zakrzywionej powierzchni.

### Sfera

#### Dane

Podstawa

* DANE**Promień** (`FloatConstraint`): promień kuli.
* DANE**Próbkowanie** (`IntegerConstraint`): liczba ścian wzdłuż obu kierunków zakrzywionej powierzchni.

### Ellipsoida

#### Dane

Podstawa

* DANE**Promień 1** (`FloatConstraint`): pierwszy promień elipsy.
* DANE**Promień 2** (`FloatConstraint`): drugi promień elipsy.
* DANE**Próbkowanie** (`IntegerConstraint`): liczba ścian wzdłuż obu kierunków zakrzywionej powierzchni.

### Torus

#### Dane

Podstawa

* DANE**Promień 1** (`FloatConstraint`): pierwszy *(główny)* promień torusa.
* DANE**Promień 2** (`FloatConstraint`): drugi promień torusa.
* DANE**Próbkowanie** (`IntegerConstraint`): liczba ścian wzdłuż obu kierunków zakrzywionej powierzchni.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/pl&oldid=1333145>"