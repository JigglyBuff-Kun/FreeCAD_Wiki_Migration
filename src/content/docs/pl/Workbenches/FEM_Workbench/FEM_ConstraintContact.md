---
title: MES Kontakt
---

|                                                                                   |
| --------------------------------------------------------------------------------- |
| MES: Kontakt                                                                      |
| Lokalizacja w menu                                                                |
| Model → Warunki brzegowe i obciążenia mechaniczne → Kontakt                       |
| Środowisko pracy                                                                  |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                       |
| Domyślny skrót                                                                    |
| _brak_                                                                            |
| Wprowadzono w wersji                                                              |
| -                                                                                 |
| Zobacz także                                                                      |
| [Warunek brzegowy utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl") |
|                                                                                   |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Tworzy wiązanie kontaktowe między dwiema powierzchniami. W przeciwieństwie do [wiązania tie](/FEM_ConstraintTie/pl "FEM ConstraintTie/pl"), powierzchnie mogą się rozdzielać i ślizgać po sobie _(z tarciem lub bez)_ podczas analizy.

![](/images/FEM_Contact_dialog.PNG)

Panel zadań kontaktu

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintContact.svg) Kontakt.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintContact.svg) Kontakt** z menu.
2. Wybierz powierzchnię master. Wciśnij pierwszy przycisk Dodaj. Aby usunąć powierzchnię ze wskazania, kliknij na niej i wciśnij pierwszy przycisk Usuń.
3. Wybierz powierzchnię slave. Wciśnij drugi przycisk Dodaj. Aby usunąć powierzchnię ze wskazania, kliknij na niej i wciśnij drugi przycisk Usuń.
4. Opcjonalnie, wprowadź _Sztywność kontaktu_.
5. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Opcjonalnie, wprowadź _Tolerancję dociągania węzłów_. Wszystkie węzły powierzchni slave, których odległość od powierzchni master jest mniejsza lub równa tej liczbie, zostaną przesunięte tak, aby leżały na powierzchni master na początku analizy. To dociąganie nie powoduje żadnych odkształceń.
6. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Opcjonalnie, zaznacz pole _Uwzględnij tarcie_, aby określić współczynnik tarcia i wartość nachylenia krzywej zależności między naprężeniami stycznymi a przemieszczeniem stycznym.
7. Opcjonalnie, wprowadź _Współczynnik tarcia_. Domyślna wartość 0 oznacza kontakt bez tarcia.
8. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Opcjonalnie, wprowadź wartość _Nachylenia krzywej przylegania_ - krzywej opisującej zależność między naprężeniami stycznymi a przemieszczeniem stycznym w zakresie przylegania (przed wystąpieniem poślizgu). Jest to odpowiednik sztywności kontaktu dla zachowania w kierunku stycznym.

![](/images/FEM_contact_animation.gif)

Przykład użycia kontaktu - sztywny sześcian jest dociskany i przesuwany po deformowalnym prostopadłościanie. Bez definicji kontaktu te dwie części by się "nie widziały".

## Ograniczenia

- Kontakt może być zdefiniowany tylko dla 2 powierzchni, więc dla każdej pary powierzchni potrzebna jest osobna definicja kontaktu.
- Dyskusja o próbie implementacji wielu kontaktów jednocześnie: <https://forum.freecad.org/viewtopic.php?f=18&t=15699&start=130#p303275>
- Ponieważ nie ma obecnie wsparcia dla wielu siatek, kontakt musi być definiowany dla powierzchni, między którymi jest (co najmniej) niewielka przerwa. Gdyby powierzchnie się stykały (brak przerwy między nimi), rezultatem operacji boolowskiej (koniecznej do uniknięcia wielu siatek, co nie jest obecnie wspierane) byłaby ciągła siatka, więc nie byłoby sensu definiować kontakt. Więcej na ten temat można przeczytać w [wątku na forum](https://forum.freecad.org/viewtopic.php?f=18&t=62307).

## Uwagi

### Wskazówki do modelowania

- Źródło: <https://forum.freecad.org/viewtopic.php?f=18&p=340874#p340494>
- Zalecane jest używanie elementów liniowych. W innym wypadki, obliczenia mogą być czasochłonne.
- Przypisanie powierzchni master/slave:
  - Większa z dwóch powierzchni powinna być wybrana jako master.
  - Jeśli powierzchnie są zbliżonej wielkości, ta należąca do ciała o większej sztywności powinna być wybrana jako master.
  - Jeśli powierzchnie są zbliżonej wielkości i sztywności, ta o rzadszej siatce powinna być wybrana jako master.

### CalculiX

- Sztywność kontaktu można oszacować jako 5 do 50 razy moduł Younga materiału. Im wyższa sztywność kontaktu, tym twardszy kontakt między powierzchniami.
- Powierzchnia slave może przenikać powierzchnię master, a więc doświadczać większej deformacji.
- Do definiowania kontaktu w CalculiX używane jest słowo kluczowe \*CONTACT PAIR. W tym przypadku wykorzystywany jest kontakt typu ściana do ściany z funkcją kary (penalty). Sformułowanie kontaktu jest szczegółow opisane na stronie <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node112.html>
- Przegląd różnych typów kontaktu: <https://forum.freecad.org/viewtopic.php?f=18&t=15699&start=90#p188736>
- Więcej interesujących informacji:

  - <https://forum.freecad.org/viewtopic.php?f=18&t=23102#p180709> i kolejne posty !!!
  - <https://forum.freecad.org/viewtopic.php?f=18&t=20276>
  - <https://forum.freecad.org/viewtopic.php?f=18&t=21331>
  - <https://forum.freecad.org/viewtopic.php?f=18&t=15699> (pierwszy wątek o kontakcie)

- Bardzo szczegółowy przykład kontaktu w CalculiX. ([link](http://dip28p.web.fc2.com/calculix/netgen2calculix/index.html))

- Ciekawy przykład znaleziony na niemieckim forum programu FreeCAD. ([link](https://forum.freecad.org/viewtopic.php?f=13&t=39663&start=10#p337254))

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintContact/pl&oldid=1560080>"
