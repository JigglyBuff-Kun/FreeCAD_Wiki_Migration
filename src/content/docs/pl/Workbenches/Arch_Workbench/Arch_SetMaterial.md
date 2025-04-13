---
title: Architektura Materiał
---
:::caution
TO NARZĘDZIE JEST PRZESTARZAŁENie będzie ono dostępne wwersja 1.0 i powyżej. Zamiast tego należy użyć narzędziaMateriał BIM.
:::

|  |
| --- |
| Architektura: Materiał |
| Lokalizacja w menu |
| Architektura → Narzędzia materiałowe → Materiał |
| Środowisko pracy |
| [Architektura](/Arch_Workbench/pl "Arch Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| M T |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Materiał wielowarstwowy](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl") |
|  |

## Opis

Narzędzie to pozwala dodać [materiały](/index.php?title=Material/pl&action=edit&redlink=1 "Material/pl (page does not exist)") do aktywnego dokumentu i przypisać materiał do obiektu [Architektury](/Arch_Workbench/pl "Arch Workbench/pl"). Materiał zawiera wszystkie właściwości danego materiału i kontroluje kolor obiektu, do którego jest dołączony. Materiały są przechowywane w folderze **Materials** w aktywnym dokumencie.

![](/images/Arch_materials_01.jpg)

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów, którym chcesz przypisać nowy materiał.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Arch_SetMaterial.svg) **Materiał** na pasku narzędzi.
   * Użyj skrótu klawiaturowego M, a następnie T.
   * Użyj opcji **Architektura → Narzędzia materiałowe → Materiał** z menu głównego.
3. Wczytaj wstępnie ustawiony materiał lub utwórz nowy, wypełniając pola.
4. Naciśnij OK.

## Opcje

* Po utworzeniu nowego materiału panel zadań umożliwia ustawienie różnych opcji:

![](/images/Arch_materials_02.jpg)

* **Użyj szablonu**: Wybierz jeden z wstępnie ustawionych materiałów, który będzie używany w obecnej postaci lub który można dostosować, modyfikując poniższe pola.
* **Nazwa**: Wybierz nazwę dla materiału.
* **Edytuj**: Otwiera bieżący materiał w edytorze FreeCAD [Material editor](/FEM_MaterialEditor/pl "FEM MaterialEditor/pl"), który pozwala edytować wiele dodatkowych właściwości i dodawać własne niestandardowe.
* **Opis**: Bardziej szczegółowy opis materiału.
* **Kolor**: Kolor wyświetlania materiału, który będzie stosowany do wszystkich obiektów używających tego materiału.
* **Kolor przekroju**: Kolor wyświetlania materiału, który zostanie zastosowany na stronach Rysunku technicznego, gdy obiekt z tym materiałem zostanie przecięty, a właściwość "Pokaż materiały" zawierająca płaszczyzny przekroju jest ustawiona na `Prawda`.
* **Kod**: Nazwa i numer referencyjny systemu specyfikacji, takiego jak [Masterformat](https://en.wikipedia.org/wiki/MasterFormat) lub [Omniclass](http://www.omniclass.org/).
* **Przycisk przeglądarki kodu**: Jeszcze nie zaimplementowany - pozwoli otworzyć odniesienie w przeglądarce internetowej.
* **URL**: Adres URL, pod którym można znaleźć więcej informacji o materiale.
* **Przycisk URL**: Otwiera adres URL w przeglądarce internetowej.

## Powiązania z IFC

Odpowiada to w przybliżeniu [IfcMaterial](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmaterial.htm).

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SetMaterial/pl&oldid=1468863>"