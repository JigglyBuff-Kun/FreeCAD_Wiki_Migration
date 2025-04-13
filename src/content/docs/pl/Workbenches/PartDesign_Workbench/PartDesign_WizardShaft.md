---
title: Projekt Części Kreator projektowania wału
---
|  |
| --- |
| Projekt Części: Kreator projektowania wału |
| Lokalizacja w menu |
| Projekt Części → Kreator projektowania wału ... |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie to umożliwia utworzenie wału z tabeli wartości oraz analizę sił i momentów.

## Użycie

Kreator można uruchomić z menu **Projekt Części → ![](/images/PartDesign_WizardShaft.svg) Kreator projektowania wału ...**.

Kreator uruchomi się i wyświetli domyślną tabelę, odpowiednią część wału oraz wykresy siły / momentu.

![](/images/WizardShaft_Part.jpg)

Górną część okna zajmuje tabela. Jest ona podzielona na ponumerowane kolumny, które odpowiadają segmentom wału. Segment wału charakteryzuje się określoną długością i średnicą. Główne okno zawiera dwie zakładki. Jedną z nich jest sama część wału *(funkcja obrotu)*, pokazana na powyższym obrazku. Druga zakładka przedstawia wykresy sił tnących i momentów utworzonych przez obciążenia zdefiniowane w tabeli.

![](/images/Shaftwizard1.jpg)

## Wymagania wstępne

Kreator konstrukcji wału zależy od biblioteki [matplotlib](http://matplotlib.org/) do tworzenia i wyświetlania wykresów siły tnącej i momentu zginającego. W systemach opartych na Debianie / Ubuntu jest ona dostępna za pośrednictwem pakietu *python-matplotlib*.

## Parametry

Dla każdego segmentu wału można zdefiniować następujące parametry:

* Długość segmentu.
* Średnica segmentu.
* Typ obciążenia. Należy pamiętać, że należy kliknąć żądaną pozycję w menu po przewinięciu do niej, w przeciwnym razie nie zostanie ona wybrana!
  + Brak: Brak obciążenia.
  + Stałe: Koniec wału jest zamocowany *(np. przyspawany do innej części)*. Ten typ obciążenia można zdefiniować tylko dla pierwszego lub ostatniego segmentu.
  + Statyczne: Na tym segmencie wału występuje obciążenie statyczne.
* Obciążenie na segmencie wału.
* Miejsce przyłożenia obciążenia do segmentu. Lokalizacja jest liczona od lewej krawędzi segmentu.

*(Istnieją inne rzędy i typy obciążeń, ale funkcjonalność nie została jeszcze zaimplementowana)*.

### Menu

Aby dodać nowy segment wału, kliknij prawym przyciskiem myszki w puste miejsce po prawej stronie tabeli i wybierz opcję Dodaj kolumnę.

## Ograniczenia

* Nie jest możliwe, aby sąsiednie segmenty wału miały taką samą średnicę.

## Planowane funkcjonalności

* Fazowania i zaokrąglenia na krawędziach wału sterowane tabelą.
* Rozpoznawanie wcześniej utworzonej części kreatora wału i inicjowanie na jej podstawie wartości tabeli.
* Obliczanie naprężeń na wale.
* Wizualizacja obciążeń na wale *(może korzystać z tej samej funkcjonalności co moduł FEM)*.
* Definicja obciążeń jako obiekt dokumentu *(może korzystać z tej samej funkcjonalności co moduł FEM)*.
* Baza danych materiałów.
* Zezwalanie na obciążenia w kierunku Z i Y *(wymaga zdefiniowania obciążeń jako obiektu dokumentu, w przeciwnym razie tabela stanie się bardzo długa)*.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_WizardShaft/pl&oldid=1462310>"