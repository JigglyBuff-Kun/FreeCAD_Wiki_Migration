---
title: Środowisko pracy Elementy złączne
---

![](/images/Fasteners_workbench_icon.svg)

Ikonka FreeCAD dla środowiska pracy Elementy złączne

## Wprowadzenie

Środowisko pracy ![](/images/Fasteners_workbench_icon.svg) [Elementów złącznych](/Fasteners_Workbench "Fasteners Workbench") należy do [zewnętrznych środowisk pracy](/External_workbenches/pl "External workbenches/pl"). Jest ono przeznaczone do łatwego, szybkiego i wygodnego dodawania różnych elementów złącznych z częściami.

![](/images/Fasteners_Toolbars.png)

Opcjonalny układ pojedynczego paska narzędzi w środowisku pracy.  
Elementy złączne o wymiarach metrycznych mają pomarańczowe ikonki.  
Elementy złączne o wymiarach calowych mają zielone ikonki.

## Instalacja

1. Zainstaluj środowisko Elementów Złącznych poprzez ![](/images/AddonManager.svg) [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Informacje na temat instalacji ręcznej znajdują się na stronie [Instalacja większej ilości środowisk pracy](/Installing_more_workbenches/pl "Installing more workbenches/pl").
2. Wybierz środowisko ![](/images/Fasteners_workbench_icon.svg) Elementów Złącznych z [listy menu rozwijanego](/Std_Workbench/pl "Std Workbench/pl").
3. Opcjonalnie zmień układ paska narzędzi i menu:
   1. Przejdź do: **Edycja → Preferencje ... → Elementy złączne → Ustawienia ogólne → Grupowanie ikon śrub na pasku narzędzi**.
   2. Wybierz jedna z dostępnych opcji **Grupowanie ikon śrub na pasku narzędzi**:
      - **Brak**: Wszystkie elementy złączne są wyświetlane na jednym pasku narzędzi. Aby zobaczyć wszystkie dostępne przybory, użyj przycisku >>, aby rozwinąć ten pasek.
      - **Paski oddzielnie**: Elementy złączne są zgrupowane w kilku paskach narzędzi. Jest to układ domyślny.
      - **Przyciski rozwijane**: Elementy złączne są zgrupowane w paskach narzędziowych z wysuwanymi przyciskami.
   3. Opcjonalnie odznacz jedną lub więcej opcji **Standardy elementów złącznych wyświetlane na paskach narzędzi**. Odznaczone standardy są nadal dostępne z menu.
   4. Uruchom ponownie program FreeCAD.

## Użycie

Elementy złączne mogą być dołączone lub niedołączone. Dołączone elementy złączne mają DANE**Obiekt bazowy**, okrągłą krawędź, a ich DANE**Umiejscowienie** jest dynamicznie powiązane z tym obiektem. Polecenie ![](/images/Fasteners_Move.svg) [Przesuń element złączny](/Fasteners_Move/pl "Fasteners Move/pl") może być użyte do dołączenia lub odłączenia elementu złącznego.

### Rozłączone elementy złączne

1. Wybierz żądany łącznik, klikając jego przycisk lub wybierając go z menu.
2. Element złączny zostanie utworzony w punkcie początkowym.
3. Opcjonalnie można zmienić wymiary i inne właściwości łącznika:
   1. Wybierz element złączny.
   2. Przejdź do zakładki **Dane** [Edytora właściwości](/Property_editor/pl "Property editor/pl").
   3. Zmień wymagane właściwości.

### Złączone elementy złączne

![](/images/Fasteners_Attached_Selected.png) ![](/images/Fasteners_Attached_Created.png)

Po lewej stronie dwie wybrane okrągłe krawędzie. Po prawej stronie zamocowane elementy złączne.

1. Określ, czy wybrane otwory są otworami gwintowanymi ślepymi czy przelotowymi, wybierając ![](/images/Fasteners_MatchTypeInner.svg) [Dopasowanie otworu pod gwint](/Fasteners_MatchTypeInner/pl "Fasteners MatchTypeInner/pl") lub ![](/images/Fasteners_MatchTypeOuter.svg) [Dopasowanie otworu jako przelotowego](/Fasteners_MatchTypeOuter/pl "Fasteners MatchTypeOuter/pl") _(nie używane dla śrub z łbem stożkowym)_.
2. Wybierz jedną lub więcej okrągłych krawędzi i / lub powierzchni z okrągłymi krawędziami. W przypadku wkrętów z łbem stożkowym należy wybrać górną krawędź sfazowania otworu.
3. Wybierz żądany łącznik klikając jego przycisk lub wybierając go z menu.
4. Do każdej z wybranych krawędzi kołowych dołączany jest element złączny.
5. Domyślne wymiary każdego z łączników zależą od promienia okrągłej krawędzi, do której jest on przymocowany. Śruby z łbem stożkowym są dopasowywane według średnicy łba, inne elementy złączne są dopasowywane według średnicy trzonu.
6. Opcjonalnie można zmienić wymiary i inne właściwości elementów złącznych. Patrz wyżej.
7. Elementy złączne, które wyglądają na odwrócone do góry nogami, mogą być odwrócone za pomocą narzędzia ![](/images/Fasteners_Flip.svg) [Odwróć element złaczny](/Fasteners_Flip/pl "Fasteners Flip/pl") lub poprzez zmianę ich właściwości DANE**Odwróć**.
8. Opcjonalnie zmień właściwość DANE**Odsunięcie**, aby utworzyć przestrzeń między elementami złącznymi a krawędziami, do których są przymocowane.

## Uwagi

- Aby generować gwinty, właściwość DANE**Gwint** łącznika musi być zmieniona na wartość `PRAWDA`. Generowanie gwintów jest kosztowne. Przeliczenia trwają znacznie dłużej, jeśli w dokumencie jest wiele gwintowanych łączników.
- Właściwość DANE**Odwróć** i DANE**Odsunięcie** są ignorowane dla niezamocowanych elementów złącznych.

## Polecenia

- ![](/images/Fasteners_Flip.svg) [Odwróć](/Fasteners_Flip/pl "Fasteners Flip/pl"): odwrócenie orientacji dołączonego elementu złącznego.

- ![](/images/Fasteners_Move.svg) [Przesuń](/Fasteners_Move/pl "Fasteners Move/pl"): przesuń i przymocuj element złączny do okrągłej krawędzi. Może być również używany do odłączania elementu złącznego.

- ![](/images/Fasteners_Simplify.svg) [Uprość kształt](/Fasteners_Simplify/pl "Fasteners Simplify/pl"): tworzy nieparametryczne kopie elementów złącznych.

- ![](/images/Fasteners_MatchTypeInner.svg) [Dopasowanie otworu pod gwint](/Fasteners_MatchTypeInner/pl "Fasteners MatchTypeInner/pl"): okrągłe krawędzie należy traktować jako otwory gwintowane, gdy mocowane są do nich nowe elementy złączne.

- ![](/images/Fasteners_MatchTypeOuter.svg) [Dopasowanie otworu jako przelotowego](/Fasteners_MatchTypeOuter/pl "Fasteners MatchTypeOuter/pl"): okrągłe krawędzie należy traktować jako otwory przelotowe, gdy mocowane są do nich nowe elementy złączne.

- ![](/images/Fasteners_BOM.svg) [Utwórz zestawienie](/Fasteners_BOM/pl "Fasteners BOM/pl"): utwórz arkusz kalkulacyjny z zestawieniem materiałów dla elementów złącznych w dokumencie.

- ![](/images/Fasteners_ScrewCalculator.svg) [Kalkulator śrub](/Fasteners_ScrewCalculator/pl "Fasteners ScrewCalculator/pl"): pokaż kalkulator, aby określić wielkość otworu gwintowanego dla śrub.

- ![](/images/Fasteners_ChangeParameters.svg) [Zmień parametry](/Fasteners_ChangeParameters/pl "Fasteners ChangeParameters/pl"): umożliwia dokonanie zmian parametrów elementów złącznych.

## Elementy złączne

Elementy złączne o wymiarach metrycznych posiadają ikony w kolorze pomarańczowym. Elementy złączne o wymiarach calowych posiadają zielone ikony.

### Śruby i wkręty z łbem sześciokątnym

- ![](/images/Fasteners_ASMEB18.2.1.6.svg) **ASME B18.2.1.6** Śruba UNC z łbem sześciokątnym.

- ![](/images/Fasteners_ASMEB18.2.1.8.svg) **ASME B18.2.1.8** Śruba UNC z łbem sześciokątnym z kołnierzem.

- ![](/images/Fasteners_DIN571.svg) **DIN 571** Wkręt do drewna z łbem sześciokątnym.

- ![](/images/Fasteners_ISO4017.svg) **DIN 933** Śruba z łbem sześciokątnym.

- ![](/images/Fasteners_ISO4017.svg) **DIN 961** Śruba z łbem sześciokątnym.

- ![](/images/Fasteners_EN1662.svg) **EN 1662** Śruba z łbem sześciokątnym z kołnierzem, seria mała.

- ![](/images/Fasteners_EN1665.svg) **EN 1665** Śruba sześciokątna z kołnierzem, seria gruba.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4014** Śruba z łbem sześciokątnym. _Klasy produktów A i B_.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4015** Śruba z łbem sześciokątnym ze zredukowanym trzpieniem.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4016** Śruba z łbem sześciokątnym. _Klasa produktu C_.

- ![](/images/Fasteners_ISO4017.svg) **ISO 4017** Śruba z łbem sześciokątnym. _Klasy produktów A i B_.

- ![](/images/Fasteners_ISO4017.svg) **ISO 4018** Śruba z łbem sześciokątnym. _Klasa produktu C_.

- ![](/images/Fasteners_EN1662.svg) **ISO 4162** Śruba sześciokątna z kołnierzem, seria mała. _Produkt klasy A z właściwościami napędowymi klasy produktu B_.

- ![](/images/Fasteners_ISO4017.svg) **ISO 8676** Śruba z łbem sześciokątnym z gwintem o drobnym skoku. _Klasy produktów A i B_.

- ![](/images/Fasteners_ISO4014.svg) **ISO 8765** Śruba z łbem sześciokątnym z gwintem o drobnym skoku.

- ![](/images/Fasteners_EN1662.svg) **ISO 15071** Śruba sześciokątna z kołnierzem, seria mała. _Klasa produktu A._

- ![](/images/Fasteners_EN1662.svg) **ISO 15072** Śruba sześciokątna z kołnierzem i gwintem o drobnym skoku, seria mała. _Klasa produktu A_.

### Śruby z gniazdem sześciokątnym

- ![](/images/Fasteners_ASMEB18.3.1A.svg) **ASME B18.3.1A** Śruba UNC z łbem walcowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ASMEB18.3.1G.svg) **ASME B18.3.1G** Śruba UNC z łbem sześciokątnym niskim.

- ![](/images/Fasteners_ASMEB18.3.2.svg) **ASME B18.3.2** Śruba UNC z łbem stożkowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ASMEB18.3.3A.svg) **ASME B18.3.3A** Śruba UNC z łbem kulistym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ASMEB18.3.3B.svg) **ASME B18.3.3B** Śruba UNC z łbem sześciokątnym z kołnierzem.

- ![](/images/Fasteners_ASMEB18.3.4.svg) **ASME B18.3.4** Śruba UNC z łbem walcowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_DIN6912.svg) **DIN 6912** Śruba z łbem o gnieździe sześciokątnym z niskim łbem i środkiem.

- ![](/images/Fasteners_DIN7984.svg) **DIN 7984** Śruba z gniazdem sześciokątnym z niskim łbem.

- ![](/images/Fasteners_ISO2936.svg) **ISO 2936** Klucz imbusowy do śruby sześciokątnej.

- ![](/images/Fasteners_ISO4762.svg) **ISO 4762** Śruba z łbem walcowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ISO7379.svg) **ISO 7379** Śruba z łbem walcowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ISO7380.svg) **ISO 7380-1** Śruba z łbem kulistym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ISO7380-2.svg) **ISO 7380-2** Śruba z łbem sześciokątnym z kołnierzem.

- ![](/images/Fasteners_ISO10642.svg) **ISO 10642** Śruba z łbem stożkowym z gniazdem sześciokątnym.

### Śruby z gniazdem sześciokątnym, gwiazdowym (torx)

- ![](/images/Fasteners_ISO14579.svg) **ISO 14579** Śruba z łbem walcowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ISO14580.svg) **ISO 14580** Śruba z łbem walcowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ISO14581.svg) **ISO 14581** Śruba z łbem stożkowym płaskim z gniazdem sześciokątnym.

- ![](/images/Fasteners_ISO14582.svg) **ISO 14582** Śruba z łbem stożkowym z gniazdem sześciokątnym, wysoki łeb.

- ![](/images/Fasteners_ISO14583.svg) **ISO 14583** Śruba z łbem walcowym z gniazdem sześciokątnym.

- ![](/images/Fasteners_ISO14584.svg) **ISO 14584** Śruba z łbem stożkowym z gniazdem sześciokątnym.

### Śruby z łbem z nacięciem prostym

- ![](/images/Fasteners_ASMEB18.6.1.2.svg) **ASME B18.6.1.2** Wkręt do drewna z płaskim łbem stożkowym, z rowkiem.

- ![](/images/Fasteners_ASMEB18.6.1.4.svg) **ASME B18.6.1.4** Wkręt do drewna z owalnym łbem stożkowym z rowkiem.

- ![](/images/Fasteners_ASMEB18.6.3.1A.svg) **ASME B18.6.3.1A** Śruba UNC z stożkowym łbem płaskim z rowkiem.

- ![](/images/Fasteners_ASMEB18.6.3.4A.svg) **ASME B18.6.3.4A** Śruba UNC z łbem stożkowym owalnym.

- ![](/images/Fasteners_ASMEB18.6.3.9A.svg) **ASME B18.6.3.9A** Śruba UNC z łbem płaskim.

- ![](/images/Fasteners_ASMEB18.6.3.10A.svg) **ASME B18.6.3.10A** Śruba UNC z łbem walcowo soczewkowym z rowkiem.

- ![](/images/Fasteners_ASMEB18.6.3.12A.svg) **ASME B18.6.3.12A** Śruba UNC z łbem trójlistkowym i rowkiem.

- ![](/images/Fasteners_ASMEB18.6.3.16A.svg) **ASME B18.6.3.16A** Śruba UNC z łbem stożkowym z rowkiem.

- ![](/images/Fasteners_ISO1207.svg) **DIN 84 (zastąpiony przez ISO 1207)**. Śruba z łbem walcowym z rowkiem. _Klasa produktu A._

- ![](/images/Fasteners_DIN96.svg) **DIN 96** Wkręt do drewna z rowkiem i półokrągłym łbem.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-1** Wkręt do drewna z rowkiem i półokrągłym łbem.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-2** Wkręt do drewna z rowkiem i półokrągłym łbem.

- ![](/images/Fasteners_ISO1207.svg) **ISO 1207** Śruba z łbem serowym z rowkiem. _Produkt klasy A_.

- ![](/images/Fasteners_ISO1580.svg) **ISO 1580** Śruba z łbem walcowym z rowkiem. _Klasa produktu A_.

- ![](/images/Fasteners_ISO2009.svg) **ISO 2009** Śruba z łbem płaskim z rowkiem stożkowym. _Klasa produktu A_.

- ![](/images/Fasteners_ISO2010.svg) **ISO 2010** Śruba z łbem wpuszczanym z podwyższonym rowkiem. _Klasa produktu A_.

### Śruby z łbem z nacięciem krzyżowym typu H

- ![](/images/Fasteners_ASMEB18.6.1.3.svg) **ASME B18.6.1.3** "ASME B18.6.1.3" Wkręt do drewna z płaskim łbem z wcięciem.

- ![](/images/Fasteners_ASMEB18.6.1.5.svg) **ASME B18.6.1.5**

```
Wkręt do drewna z łbem stożkowym owalnym.

```

- ![](/images/Fasteners_ASMEB18.6.3.1B.svg) **ASME B18.6.3.1B** Śruba UNC z łbem stożkowym płaskim.

- ![](/images/Fasteners_ASMEB18.6.3.4B.svg) **ASME B18.6.3.4B** Śruba UNC z łbem stożkowym owalnym.

- ![](/images/Fasteners_ASMEB18.6.3.9B.svg) **ASME B18.6.3.9B** Śruba UNC Śruba z łbem cylindrycznym.

- ![](/images/Fasteners_ASMEB18.6.3.10B.svg) **ASME B18.6.3.10B** Śruba UNC z łbem walcowym.

- ![](/images/Fasteners_ASMEB18.6.3.12C.svg) **ASME B18.6.3.12C** Śruba UNC z łbem grzybkowym.

- ![](/images/Fasteners_ASMEB18.6.3.16B.svg) **ASME B18.6.3.16B** Śruba UNC z łbem okrągłym.

- ![](/images/Fasteners_DIN967.svg) **DIN 967** Śruba z łbem kulistym i kołnierzem.

- ![](/images/Fasteners_DIN7996.svg) **DIN 7996** Wkręt do drewna z łbem kulistym.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-3** Wkręt do drewna łbem kulistym.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-4** Wkręt do drewna łbem kulistym.

- ![](/images/Fasteners_ISO7045.svg) **ISO 7045** Śruba z łbem płaskim, stożkowym. _Klasa produktu A_.

- ![](/images/Fasteners_ISO7046.svg) **ISO 7046** Śruba z łbem płaskim, stożkowym. _Klasa produktu A_.

- ![](/images/Fasteners_ISO7047.svg) **ISO 7047** Śruba z łbem stożkowym podniesionym. _Klasa produktu A_.

- ![](/images/Fasteners_ISO7048.svg) **ISO 7048** Śruba z łbem płaskim.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-C** Śruba samogwintująca z łbem cylindrycznym z klinowym końcem.

- ![](/images/Fasteners_ISO7049-F.svg) **ISO 7049-F** Śruba samogwintująca z łbem cylindrycznym z płaskim końcem.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-R** Śruba samogwintująca z łbem cylindrycznym z zaokrąglonym końcem.

### Inne śruby z łbami

- ![](/images/Fasteners_ASMEB18.2.1.1.svg) **ASME B18.2.1.1** Śruba UNC z łbem kwadratowym.

- ![](/images/Fasteners_ASMEB18.5.2.svg) **ASME B18.5** Śruba UNC z okrągłym łbem i kwadratową szyjką.

- ![](/images/Fasteners_DIN478.svg) **DIN 478** Śruba z kwadratowym łbem z kołnierzem.

- ![](/images/Fasteners_DIN603.svg) **DIN 603** Śruba z okrągłym łbem i kwadratową szyjką.

- ![](/images/Fasteners_ISO2342.svg) **ISO 2342** Śruba bez łba z trzpieniem.

### Wkręty dociskowe

- ![](/images/Fasteners_ASMEB18.3.5A.svg) **ASME B18.3.5A** Wkręty UNC dociskowe z gniazdem na imbus i płaskim końcem.

- ![](/images/Fasteners_ASMEB18.3.5B.svg) **ASME B18.3.5B** Wkręty UNC dociskowe z gniazdem na imbus i końcówką stożkową.

- ![](/images/Fasteners_ASMEB18.3.5C.svg) **ASME B18.3.5C** Wkręty UNC dociskowe z gniazdem na imbus z końcówką zaczepową.

- ![](/images/Fasteners_ASMEB18.3.5D.svg) **ASME B18.3.5D** Wkręty UNC dociskowe z gniazdem na imbus i końcówką kielichową.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4026** Wkręt dociskowy z gniazdem na imbus i płaskim końcem.

- ![](/images/Fasteners_ISO4027.svg) **ISO 4027** Wkręt dociskowy z gniazdem na imbus i końcówką stożkową.

- ![](/images/Fasteners_ISO4028.svg) **ISO 4028** Wkręt dociskowy z gniazdem na imbus z końcówką kłową.

- ![](/images/Fasteners_ISO4029.svg) **ISO 4029** Wkręt dociskowy z gniazdem na imbus i końcówką kielichową.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4766** Wkręt z łbem walcowym z wgłębieniem krzyżowym.

- ![](/images/Fasteners_ISO4027.svg) **ISO 7434** Wkręt dociskowy z gniazdem rowkowym i stożkiem.

- ![](/images/Fasteners_ISO4028.svg) **ISO 7435** Wrkęt dociskowy z rowkiem i długim ząbkowanym czubkiem.

- ![](/images/Fasteners_ISO4029.svg) **ISO 7436** Wkręt dociskowy z rowkiem z łbem walcowym z końcówką kielichową.

### Śruby z łbem motylkowym

- ![](/images/Fasteners_DIN464.svg) **DIN 464** Śruba radełkowana, typ wysoki.

- ![](/images/Fasteners_DIN465.svg) **DIN 465** Śruba radełkowana z rowkiem, typ wysoki.

- ![](/images/Fasteners_DIN653.svg) **DIN 653** Śruba radełkowana, typ niski.

### Śruby do gruntu

- ![](/images/Fasteners_GroundScrew.svg) **Śruba do gruntu** Śruba do gruntu z okrągłą płytą.

### Nakrętki

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.1A** Nakrętka sześciokątna UNC do śrub maszynowych.

- ![](/images/Fasteners_ASMEB18.2.2.1B.svg) **ASME B18.2.2.1B** Kwadratowa nakrętka UNC do śrub maszynowych.

- ![](/images/Fasteners_ASMEB18.2.2.2.svg) **ASME 18.2.2** Nakrętka UNC kwadratowa.

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.4A** Nakrętka UNC sześciokątna.

- ![](/images/Fasteners_ASMEB18.2.2.4B.svg) **ASME B18.2.2.4B** Nakrętka UNC sześciokątna cienka.

- ![](/images/Fasteners_ASMEB18.2.2.5.svg) **ASME 18.2.2.5** Nakrętka UNC sześciokątna zamkowa.

- ![](/images/Fasteners_ASMEB18.2.2.12.svg) **ASME 18.2.2.12** Nakrętka UNC sześciokątna z kołnierzem.

- ![](/images/Fasteners_ASMEB18.2.2.13.svg) **ASME 18.2.2.13** Nakrętka UNC sześciokątna sprzęgająca.

- ![](/images/Fasteners_ASMEB18.6.9A.svg) **ASME 18.6.9A** Nakrętka motylkowa, typ A.

- ![](/images/Fasteners_DIN315.svg) **DIN 315** Nakrętka motylkowa.

- ![](/images/Fasteners_DIN557.svg) **DIN 557** Nakrętka kwadratowa.

- ![](/images/Fasteners_DIN562.svg) **DIN 562** Nakrętka kwadratowa.

- ![](/images/Fasteners_DIN917.svg) **DIN 917** Nakrętka kołpakowa, niska.

- ![](/images/Fasteners_DIN928.svg) **DIN 928** Nakrętka kwadratowa do spawania.

- ![](/images/Fasteners_DIN929.svg) **DIN 929** Nakrętka sześciokątna do spawania.

- ![](/images/Fasteners_ISO4032.svg) **DIN 934 (zastąpiona przez ISO 4035 i ISO 8673)** Nakrętka sześciokątna cienka, fazowana. _Klasy produktów A i B_.

- ![](/images/Fasteners_DIN935.svg) **DIN 935** Nakrętka sześciokątna zamkowa.

- ![](/images/Fasteners_DIN985.svg) **DIN 985** Nakrętka Nyloc.

- ![](/images/Fasteners_DIN1587.svg) **DIN 1587** Nakrętka kołpakowa.

- ![](/images/Fasteners_DIN6330.svg) **DIN 6330** Nakrętka sześciokątna, wysokości 1,5d.

- ![](/images/Fasteners_DIN6331.svg) **DIN 6331** Nakrętka sześciokątna z kołnierzem o wysokości 1,5d.

- ![](/images/Fasteners_DIN6334.svg) **DIN 6334** Nakrętka sześciokątna sprzęgająca.

- ![](/images/Fasteners_DIN7967.svg) **DIN 7967** Samozabezpieczająca przeciwnakrętka.

- ![](/images/Fasteners_EN1661.svg) **EN 1661** Nakrętka sześciokątna z kołnierzem.

- ![](/images/Fasteners_DIN1587.svg) **GOST 11860-1** Nakrętka kołpakowa.

- ![](/images/Fasteners_ISO4032.svg) **ISO 4032** Nakrętka sześciokątna, styl 1. _Klasy produktów A i B._.

- ![](/images/Fasteners_ISO4033.svg) **ISO 4033** Nakrętka sześciokątna wysoka, typ 2. _Klasy produktów A i B._

- ![](/images/Fasteners_ISO4034.svg) **ISO 4034** Nakrętka sześciokątna typ 1.

- ![](/images/Fasteners_ISO4035.svg) **ISO 4035** Nakrętka sześciokątna cienka, fazowana, typ 0. _Klasy produktów A i B._

- ![](/images/Fasteners_EN1661.svg) **ISO 4161** Nakrętka sześciokątna z kołnierzem.

- ![](/images/Fasteners_DIN985.svg) **ISO 7040** Nakrętka sześciokątna samohamowna _(z wkładką niemetalową)_.

- ![](/images/Fasteners_DIN985.svg) **ISO 7041** Nakrętka sześciokątna samohamowna _(z wkładką niemetalową)_, styl 2.

- ![](/images/Fasteners_ISO7043.svg) **ISO 7043** Nakrętka sześciokątna samohamowna z kołnierzem _(z wkładką niemetalową)_.

- ![](/images/Fasteners_ISO7044.svg) **ISO 7044** Nakrętka sześciokątna, samohamowna z kołnierzem wykonana w całości z metalu.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7719** Nakrętka sześciokątna, samohamowna wykonana w całości z metalu.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7720** Nakrętka sześciokątna,samohamowna typu 2, wykonana w całości z metalu.

- ![](/images/Fasteners_ISO8673.svg) **ISO 8673** Nakrętka sześciokątna z gwintem o drobnym skoku, typ 1. _Klasy produktów A i B._

- ![](/images/Fasteners_ISO8674.svg) **ISO 8674** Nakrętka sześciokątna z gwintem o drobnym skoku, typ 2. _Klasy produktów A i B._

- ![](/images/Fasteners_ISO8675.svg) **ISO 8675** Nakrętka sześciokątna cienka z gwintem o drobnym skoku, styl 0. _Klasa produktu A i B._

- ![](/images/Fasteners_DIN985.svg) **ISO 10511** Nakrętka sześciokątna, samohamowna cienka _(z wkładką niemetalową)_.

- ![](/images/Fasteners_DIN985.svg) **ISO 10512** Nakrętka sześciokątna, samohamowna z gwintem o drobnym skoku _(z wkładką niemetalową)_.

- ![](/images/Fasteners_ISO7719.svg) **ISO 10513** Nakrętka sześciokątna, samohamowna z gwintem o drobnym skoku, wykonana w całości z metalu.

- ![](/images/Fasteners_EN1661.svg) **ISO 10663** Nakrętka sześciokątna z kołnierzem i gwintem o drobnym skoku.

- ![](/images/Fasteners_ISO7043.svg) **ISO 12125** Nakrętka sześciokątna. samohamowna z kołnierzem i gwintem o drobnym skoku _(z wkładką niemetalową)_.

- ![](/images/Fasteners_ISO7044.svg) **ISO 12126** Nakrętka sześciokątna, samohamowna z kołnierzem i gwintem o drobnym skoku.

- ![](/images/Fasteners_ISO21670.svg) **ISO 21670** Nakrętka sześciokątna, do spawania z kołnierzem.

- ![](/images/Fasteners_SAEJ483a1.svg) **SAE J483a 1** Nakrętka niska kołpakowa.

- ![](/images/Fasteners_SAEJ483a2.svg) **SAE J483a 2** Wysoka nakrętka kołpakowa.

### Łączniki z rowkiem teowym

- ![](/images/Fasteners_DIN508.svg) **DIN 508** Nakrętka młoteczkowa, do rowka T.

- ![](/images/Fasteners_GN505.svg) **GN 505** Nakrętka ząbkowana ćwierćobrotowa do rowka T.

- ![](/images/Fasteners_GN505.4.svg) **GN 505.4** Śruba ząbkowana do rowka T.

- ![](/images/Fasteners_GN506.svg) **GN 506** Nakrętka do rowków T z możliwością obracania.

- ![](/images/Fasteners_GN507.svg) **GN 507** Nakrętka przesuwna do rowków teowych.

- ![](/images/Fasteners_DIN508.svg) **ISO 299** Nakrętka do rowka T.

### Podkładki

- ![](/images/Fasteners_ASMEB18.21.1.12A.svg) **ASME B18.21.1.12A** Podkładka UN, seria wąska.

- ![](/images/Fasteners_ASMEB18.21.1.12B.svg) **ASME B18.21.1.12B** Podkładka UN, seria regularna.

- ![](/images/Fasteners_ASMEB18.21.1.12C.svg) **ASME B18.21.1.12C** Podkładka UN, seria szeroka.

- ![](/images/Fasteners_DIN6319C.svg) **DIN 6319C** Podkładka sferyczna.

- ![](/images/Fasteners_DIN6319D.svg) **DIN 6319D** Podkładka z gniazdem stożkowym.

- ![](/images/Fasteners_DIN6319G.svg) **DIN 6319G** Podkładka z gniazdem stożkowym.

- ![](/images/Fasteners_DIN6340.svg) **DIN 6340** Podkładka do urządzeń zaciskowych.

- ![](/images/Fasteners_ISO7089.svg) **ISO 7089** Podkładka ślizgowa, seria normalna. _Klasa produktu A._

- ![](/images/Fasteners_ISO7090.svg) **ISO 7090** Podkładka ślizgowa fazowana, seria normalna. _Klasa produktu A_.

- ![](/images/Fasteners_ISO7092.svg) **ISO 7092** Podkładka zwykła, seria mała. _Klasa produktu A_.

- ![](/images/Fasteners_ISO7093-1.svg) **ISO 7093-1** Podkładka ślizgowa, seria duża. _Klasa produktu A._

- ![](/images/Fasteners_ISO7094.svg) **ISO 7094** Podkładka zwykła, seria ekstra duża. _Klasa produktu C_.

- ![](/images/Fasteners_ISO8738.svg) **ISO 8738** Zwykła podkładka pod sworzeń widełkowy.

- ![](/images/Fasteners_NFE27-619.svg) **NFE27-619** Podkładka stożkowa.

### Pręty, gwintowniki i matryce

- ![](/images/Fasteners_ScrewTapInch.svg) Pręt gwintowany calowy do nacinania otworów.

- ![](/images/Fasteners_ScrewDieInch.svg) Narzędzie do cięcia zewnętrznych gwintów calowych.

- ![](/images/Fasteners_ThreadedRodInch.svg) **DIN 975** Pręt gwintowany calowy UNC.

- ![](/images/Fasteners_ThreadedRod.svg) **DIN 975** Pręt gwintowany metryczny.

- ![](/images/Fasteners_ScrewTap.svg) Pręt gwintowany metryczny do nacinania otworów.

- ![](/images/Fasteners_ScrewDie.svg) Narzędzie do nacinania zewnętrznych gwintów metrycznych.

#### Wkładki

- ![](/images/Fasteners_IUTHeatInsert.svg) Wkładka metryczna mocowana na gorąco.

- ![](/images/Fasteners_PEMPressNut.svg) Nakrętka samokontrująca PEM.

- ![](/images/Fasteners_PEMStandoff.svg) Dystans samokontrujący PEM.

- ![](/images/Fasteners_PEMStud.svg) Kołek samozaciskowy PEM.

- ![](/images/Fasteners_PCBSpacer.svg) Podkładka dystansowa **PCB** żeńska / żeńska.

- ![](/images/Fasteners_PCBStandoff.svg) Element dystansowy **PCB** męski / żeński.

- ![](/images/Fasteners_4PWTI.svg) Wkładka gwintowana do drewna z czterema ząbkami _(nakrętki typu T DIN 1624)_.

### Pierścienie osadcze

- ![](/images/Fasteners_DIN471.svg) **DIN 471** Zewnętrzny metryczny pierścień Segera.

- ![](/images/Fasteners_DIN472.svg) **DIN 472** Wewnętrzny metryczny pierścień Segera.

- ![](/images/Fasteners_DIN6799.svg) **DIN 6799** Płytka osadcza metryczna E-clip.

### Gwoździe

- ![](/images/Fasteners_DIN1143.svg) **DIN 1143** Gwóźdź z okrągłym łbem do stosowania w automatach gwoździarskich.

- ![](/images/Fasteners_DIN1144-A.svg) **DIN 1144-A** Gwóźdź do montażu płyt kompozytowych z wełny drzewnej, łeb okrągły 20 mm.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1151-A** Okrągły gładki gwoźdź o płaskiej główce.

- ![](/images/Fasteners_DIN1151-B.svg) **DIN 1151-B** Okrągły gładki gwoźdź o wpuszczanej główce.

- ![](/images/Fasteners_DIN1152.svg) **DIN 1152** Gwóźdź z okrągłym łbem.

**DIN 1160-A** Gwoźdź ciesielski lub dachowy.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-B** Gwoźdź ciesielski lub dachowy z szeroką główką.

### Szpilki

- ![](/images/Fasteners_ISO1234.svg) **ISO 1234** Zawleczka.

- ![](/images/Fasteners_ISO2338.svg) **ISO 2338** Sworzeń równoległy.

- ![](/images/Fasteners_ISO2339.svg) **ISO 2339** Sworzeń stożkowy.

- ![](/images/Fasteners_ISO2340A.svg) **ISO 2340A** Sworzeń widełkowy.

- ![](/images/Fasteners_ISO2340B.svg) **ISO 2340B** Sworzeń widełkowy bez główki _(z otworami na zawleczkę)_.

- ![](/images/Fasteners_ISO2341A.svg) **ISO 2341A** Sworzeń rozporowy z główką.

- ![](/images/Fasteners_ISO2341B.svg) **ISO 2341B** Sworzeń widełkowy z główką _(z otworem na zawleczkę)_.

- ![](/images/Fasteners_ISO8733.svg) **ISO 8733** Sworzeń cylindryczny z wewnętrznym gwintem, niehartowany.

- ![](/images/Fasteners_ISO8734.svg) **ISO 8734** Sworzeń dociskowy.

- ![](/images/Fasteners_ISO8735.svg) **ISO 8735** Sworzeń z gwintem wewnętrznym, hartowany.

- ![](/images/Fasteners_ISO8736.svg) **ISO 8736** Sworzeń stożkowy z gwintem wewnętrznym, niehartowany.

- ![](/images/Fasteners_ISO8737.svg) **ISO 8737** Sworzeń stożkowy z gwintem zewnętrznym, niehartowany.

- ![](/images/Fasteners_ISO8739.svg) **ISO 8739** Sworzeń żłobiony na całej długości z prowadnicą.

- ![](/images/Fasteners_ISO8740.svg) **ISO 8740** Sworzeń żłobiony na całej długości z fazą.

- ![](/images/Fasteners_ISO8741.svg) **ISO 8741** Sworzeń stożkowy żłobiony w odwrotnym kierunku, na połowie długości.

- ![](/images/Fasteners_ISO8742.svg) **ISO 8742** "ISO 8742" Sworzeń z wgłębieniem środkowym na długości jednej trzeciej.

- ![](/images/Fasteners_ISO8743.svg) **ISO 8743** "ISO 8743" Sworzeń z wgłębieniem środkowym na połowie długości.

- ![](/images/Fasteners_ISO8744.svg) **ISO 8744** Sworzeń z wgłębieniem stożkowym na całej długości.

- ![](/images/Fasteners_ISO8745.svg) **ISO 8745** Sworzeń z wgłębieniem stożkowym na połowie długości.

- ![](/images/Fasteners_ISO8746.svg) **ISO 8746** Sworzeń z rowkiem i zaokrągloną główką.

- ![](/images/Fasteners_ISO8747.svg) **ISO 8747** Sworzeń z rowkiem z łbem stożkowym.

- ![](/images/Fasteners_ISO8748.svg) **ISO 8748** Sworzeń sprężynowy zwojowy, o wzmocnionej konstrukcji.

- ![](/images/Fasteners_ISO8750.svg) **ISO 8750** **ISO 8750** Sworzeń sprężynowy zwojowy, standardowej wytrzymałości.

- ![](/images/Fasteners_ISO8751.svg) **ISO 8751** Sworzeń sprężynowy zwojowy, do lekkich obciążeń.

- ![](/images/Fasteners_ISO8752.svg) **ISO 8752** Sworzeń sprężynujący z rowkiem, do dużych obciążeń.

- ![](/images/Fasteners_ISO13337.svg) **ISO 13337** **ISO 8752** Sworzeń sprężynujący z rowkiem, do lekkich obciążeń.

## Przestarzałe

- ![](/images/Fasteners_ChamferHole.svg) [Utwórz pogłębienie stożkowe](/Fasteners_ChamferHole/pl "Fasteners ChamferHole/pl"): sfazowanie otworów pod wkręty z łbem stożkowym. Niedostępne w wersja 0.5.13 i powyżej.

## Bibliografia

- Autor: [shaise](http://theseger.com/projects/author/shaise/),
  - ScrewMaker: Ulrich Brammer,
  - Workbench wrapper: Shai Seger,
- Kod źródłowy: <https://github.com/shaise/FreeCAD_FastenersWB>,
- Zgłoszenia błędów i prośby o nowe funkcje: <https://github.com/shaise/FreeCAD_FastenersWB/issues>,
- Tematy na forum: <https://forum.freecadweb.org/viewtopic.php?t=11429>.

## Odnośniki internetowe

- [ŚRUBY](https://github.com/jreinhardt/BOLTS): Otwarta biblioteka dla specyfikacji technicznych

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_Workbench/pl&oldid=1567706>"
