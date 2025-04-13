---
title: Wytyczne dotyczące grafiki
---
## Wprowadzenie

*Uwaga:* wszystkie ikony w drzewie źródłowym, zobacz na stronie [grafika](/Artwork/pl "Artwork/pl").

**Ikona** FreeCAD składa się z 6 elementów, które można zapamiętać za pomocą akronimu SALCHO: **S**troke, **A**lignment, **L**ighlighting, **C**olor, **H**ighlighting, **O**utline.

Oto konkretny, aczkolwiek dowolny przykład:

![](/images/FreeCAD_icon_example_details.svg)

|  |  |
| --- | --- |
| A | Kolor podświetlenia jest używany na całej powierzchni, aby wskazać światło padające z góry. |
| B | Obowiązkowy ciemny kontur otacza kształt ikony, aby zapewnić kontrast kształtu. |
| C | Obrys wewnątrz konturu *(kolor podświetlenia)* zapewnia kontrast na ciemnym tle. |
| D | Ta powierzchnia ma głównie kolor bazowy, ale jasny gradient od podświetlenia *(u góry po lewej)* do bazy *(u dołu po prawej)* sprawia wrażenie światła padającego z góry po lewej. |
| E | Podświetleniem jest tutaj kolor bazowy *(o jeden ton niższy)*, aby sprawić wrażenie, że jest to twarz najbardziej oddalona od światła. |
| F | Ta powierzchnia jest podobna do D, ale przechodzi od podstawy *(lewy górny róg)* do ciemności *(prawy dolny róg)*, aby wskazać, że jest to powierzchnia najbardziej oddalona od światła. |

Poniższe sekcje wyjaśniają te elementy bardziej szczegółowo.

Ikona ta jest wyświetlana w następujący sposób:

|  |  |
| --- | --- |
|  | 64 px, oryginalny rozmiar, duże przyciski. |
|  | 32 px, średni rozmiar, zwykłe przyciski. |
|  | 16 px, mały rozmiar, tak jak pojawia się w [widoku drzewa](/Tree_view "Tree view"). |

## Kolory

*Obowiązkowe*

FreeCAD używa palety zaadaptowanej z [palety Tango](https://web.archive.org/web/20190921043652/http://tango.freedesktop.org/tango_icon_theme_guidelines). Każdy główny kolor ma 4 odcienie: Podświetlenia, Bazy, Ciemnego i Konturu. Zauważ, że Kontur nie jest całkowicie czarny, ale jest bardzo ciemną odmianą Bazy.

| #fce94f   (252, 233, 79)   Butter 1 | #edd400   (237, 212, 0)   Butter 2 | #c4a000   (196, 160, 0)   Butter 3 | #302b00   (48, 43, 0)   Butter 4 |
| --- | --- | --- | --- |
| #8ae234   (138, 226, 52)   Chameleon 1 | #73d216   (115, 210, 22)   Chameleon 2 | #4e9a06   (78, 154, 6)   Chameleon 3 | #172a04   (23, 42, 4)   Chameleon 4 |
| #fcaf3e   (252, 175, 62)   Orange 1 | #f57900   (245, 121, 0)   Orange 2 | #ce5c00   (206, 92, 0)   Orange 3 | #321900   (50, 25, 0)   Orange 4 |
| #729fcf   (114, 159, 207)   Sky Blue 1 | #3465a4   (52, 101, 164)   Sky Blue 2 | #204a87   (32, 74, 135)   Sky Blue 3 | #0b1521   (11, 21, 33)   Sky Blue 4 |
| #ad7fa8   (173, 127, 168)   Plum 1 | #75507b   (117, 80, 123)   Plum 2 | #5c3566   (92, 53, 102)   Plum 3 | #171018   (23, 16, 24)   Plum 4 |
| #e9b96e   (233, 185, 110)   Chocolate 1 | #c17d11   (193, 125, 17)   Chocolate 2 | #8f5902   (143, 89, 2)   Chocolate 3 | #271903   (39, 25, 3)   Chocolate 4 |
| #ef2929   (239, 41, 41)   Scarlet Red 1 | #cc0000   (204, 0, 0)   Scarlet Red 2 | #a40000   (164, 0, 0)   Scarlet Red 3 | #280000   (40, 0, 0)   Scarlet Red 4 |
| #34e0e2   (52, 224, 226)   FreeTeal 1 | #16d0d2   (22, 208, 210)   FreeTeal 2 | #06989a   (6, 152, 154)   FreeTeal 3 | #042a2a   (4, 42, 42)   FreeTeal 4 |
| #ffffff   (255, 255, 255)   Snowy White | #eeeeec   (238, 238, 236)   Aluminium 1 | #d3d7cf   (211, 215, 207)   Aluminium 2 | #babdb6   (186, 189, 182)   Aluminium 3 |
| #888a85   (136, 138, 133)   Aluminium 4 | #555753   (85, 87, 83)   Aluminium 5 | #2e3436   (46, 52, 54)   Aluminium 6 | #000000   (0, 0, 0)   Jet Black |

Kompletna paleta

Wybór niektórych kluczowych kolorów.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  | Użyj żółtych odcieni dla narzędzi tworzących obiekty, np. zobacz środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl") i [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"). |
|  |  |  |  | Użyj niebieskich odcieni dla narzędzi modyfikujących obiekty, np. zobacz środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl") i [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"). |
|  |  |  |  | Użyj odcieni barwy morskiej dla narzędzi związanych z widokami, np. zobacz [Menu Widok](/Std_View_Menu/pl "Std View Menu/pl"). |
|  |  |  |  | Użyj czerwonych odcieni dla narzędzi związanych z wiązaniami, np. zobacz [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). |

|  |  |
| --- | --- |
| Dlaczego ograniczać się do tych kolorów? | Ograniczenie kolorów do określonej palety pomaga uniknąć niejednorodnej ikonografii i poprawia czytelność w przypadku wielu ikon. |
| Jak używać palety FreeCAD? | Instalacja [palety](https://gist.github.com/GAZ082/724d2092b2986e3b17b9663f34093cf5) jest tak prosta, jak [skopiowanie jej do folderu palety Inkscape](https://inkscape.org/en/learn/faq/#how-install-new-extensions-palettes-document-templates-symbol-sets-icon-sets-etc). |

## Szerokość siatki i obrysu

*Obowiązkowe*

Ikony FreeCAD mają nominalny rozmiar 64 pikseli zarówno w szerokości, jak i wysokości. Podczas tworzenia lub edycji ikony należy upewnić się, że rozmiar dokumentu wynosi 64 x 64, a jednostkami są piksele (px). Pozostawienie wewnętrznego marginesu 2px pustej przestrzeni wokół obszaru dokumentu jest przydatne, ponieważ zapobiega efektom takim jak antyaliasing (rozmycie krawędzi). Oznacza to, że przestrzeń użytkowa dla ikony powinna wynosić 60 x 60, a krawędzie powinny pozostać puste.

![](/images/FreeCAD_icon_size.svg)

Narysuj ikonę wewnątrz niebieskiego obszaru, a wszystko będzie działać poprawnie.

Zdecydowanie zaleca się również użycie siatki wizualnej, która ma mniejszą linię siatki co piksel i główną linię siatki co 2 piksele. Obrysy ikony powinny być wyrównane wzdłuż przecięć siatki pomocniczej.

Obrysy nie powinny być *cieńsze* niż 2px, z zaokrąglonymi nakładkami i narożnikami w większości przypadków. Obrysy mogą być *grubsze*, ale powinny być wielokrotnością 2 pikseli, aby zminimalizować rozmycie skalowania.

![](/images/FreeCAD_icon_stroke_2px.svg)

Siatka z obrysami będącymi wielokrotnością 2px.

|  |  |
| --- | --- |
| Dlaczego używana jest ta siatka i rozmiar obrysu? | Ze względów historycznych FreeCAD używa ikony 64x64, która jest następnie skalowana w dół. Nie jest to idealne rozwiązanie, ale dodaje charakteru. W rezultacie utrzymywanie rzeczy wyrównanych do siatki potęgi dwójki i grubości będących potęgami dwójki pomaga uniknąć lub przynajmniej złagodzić problemy z antyaliasingiem podczas ponownego skalowania. |
| Jak mogę się do tego zastosować? | Jeśli używasz Inkscape, przejdź do **File → Document Properties** i potwierdź, że szerokość, wysokość i jednostki strony są prawidłowe. Następnie przejdź do zakładki **Grids**, kliknij New, ustaw jednostki na `px`, `Spacing X` i `Spacing Y` na 1 oraz `Major grid line every` na 2. |

## Kontur

*Obowiązkowe*

Opierając się na głównym kolorze ikony, upewnij się, że istnieje ciemny kontur 2px, jak wspomniano wcześniej. Działa to w połączeniu z podświetleniem, aby zapewnić dobry kontrast formy na wielu odcieniach tła.

![](/images/Draft_Point.svg) ![](/images/Draft_Point_backgrounds.svg)

Ciemna krawędź ikony to kontur.

|  |  |
| --- | --- |
| Dlaczego kontur jest potrzebny? | Kontur jest szkieletem, na którym wszystko inne wisi, dodając kontrast formy. Użycie koloru konturu lub ciemnego koloru zależy od sytuacji, ale bez tej linii zakres tła, na którym ikona jest widoczna, zostaje drastycznie ograniczony |
| Jak mogę się do tego zastosować? | Wystarczy dodać obrys 2px wokół każdej części ikony, która będzie przylegać do koloru tła, czyli kontur jest dla obrysów zewnętrznych. W przypadku kształtów, które mają otwór w środku, na przykład oponka pączek, kontur należy również dodać do wewnętrznego otworu. Przyciągaj węzły ścieżki do siatki, gdy tylko jest to możliwe, celując w mniejsze przecięcia siatki. |

## Podświetlenie

*Zdecydowanie zalecane*

Używając koloru podświetlenia, dodaj wewnętrzny obrys o wielkości 2 pikseli, aby kontur był bardziej widoczny. Na ciemnych tłach to właśnie to podświetlenie będzie stanowić formę ikony.

![](/images/Draft_Move.svg) ![](/images/Draft_Move_backgrounds.svg)

Jasne podświetlenie jest pomocne na ciemnym tle.

|  |  |
| --- | --- |
| Dlaczego warto używać podświetlenia? | Podświetlenie działa w połączeniu z konturem, aby poprawić kontrast formy, szczególnie na ciemnych tłach. Nigdy nie jest to zły pomysł, ale jeśli nie masz miejsca, na przykład masz bardzo cienką linię, możesz z niego zrezygnować, pod warunkiem, że zapewniłeś wystarczający kontrast między głównym kolorem a konturem. |
| Jak mogę się do tego zastosować? | Podobnie jak w przypadku obrysu, po prostu narysuj kontur o szerokości 2 pikseli wokół wewnętrznej strony obrysu, przyciągając węzły do siatki, jeśli to możliwe, celując w mniejsze przecięcia siatki. |

## Podświetlenie

*Opcjonalne*

Zgodnie z wytycznymi Tango, jeśli dodajesz efekt oświetlenia gradientowego, postaraj się, aby wyglądało na to, że światło pochodzi z lewego górnego rogu. Odbywa się to poprzez dodanie koloru podświetlenia w lewym górnym rogu i koloru bazowego lub ciemnego w prawym dolnym rogu. Zauważ, że używane są tylko kolory z palety.

![](/images/Draft_Clone.svg) ![](/images/Draft_Clone_backgrounds.svg)

Subtelny efekt podświetlenia od lewego górnego rogu.

|  |  |
| --- | --- |
| Dlaczego warto używać oświetlenia? | Oświetlenie to tylko kolejny sposób na powiązanie ikon i zapewnienie różnych poziomów ["wartości"](https://en.wikipedia.org/wiki/Lightness) w celu poprawy ich czytelności. Pod warunkiem jednak, że kontur i podświetlenie są obecne, można je uznać za opcjonalne |
| Jak mogę się do tego zastosować? | Ustaw wypełnienie jako gradient liniowy lub radialny. W Inkscape jest to dostępne w ustawieniach obrysu i wypełnienia; za pomocą "F2" można przesuwać węzły gradientu, aby upewnić się, że są pod odpowiednim kątem. |

## Zalecany format zapisu

Wszystkie ikony powinny być tworzone w formacie [SVG](/SVG/pl "SVG/pl") za pomocą aplikacji do tworzenia obrazów wektorowych, takiej jak [Inkscape](http://inkscape.org).
Ułatwia to wprowadzanie zmian i tworzenie dodatkowych ikon w tej samej przestrzeni aplikacji.

Podczas zapisywania ikon, które mają być używane bezpośrednio przez FreeCAD *(w pliku \*.qrc)*, należy zapisać je jako "Plain SVG". Zmniejszy to rozmiar ikony i zaoszczędzi miejsce na dysku i w pamięci.

## Uwagi końcowe

Pamiętaj: **SALCHO**, *(**S**troke, **A**lignment, **L**ighting, **C**olor, **H**ighlight, **O**utline)* Obrys, Wyrównanie, Oświetlenie, Kolor, Podświetlenie, Kontur

Oto kilka wskazówek, jak sprawdzić swoją pracę.

### Sprawdzanie rozmiaru

Inkscape posiada przydatne narzędzie do sprawdzania ikon w różnych rozmiarach. Przejdź do **View → Icon Preview...**, by zobaczyć podgląd ikony w rozmiarze 16, 24, 32 i 64 pikseli.

### Sprawdzanie konturu

1. Umieść ikonę na dużym prostokącie, który ma ten sam kolor co najciemniejszy kolor ikony.
2. Nadal wygląda OK? Świetnie. Przejdź do następnego kroku. Jeśli nie, dostosuj podświetlenie.
3. Zrób to samo, ale tym razem używając najjaśniejszego koloru.
4. Nadal wygląda dobrze? Świetnie. Kontury i podświetlenia zostały użyte prawidłowo. W przeciwnym razie dostosuj kontur.

![](/images/Draft_Move_backgrounds_outline.svg)

Testowanie ikony na tle najciemniejszego i najjaśniejszego koloru.

|  |  |
| --- | --- |
| Moja ikona jest ledwo widoczna. | Masz słaby kontrast kształtu. Dokładnie sprawdź kontur i podświetlenie, prawdopodobnie brakuje jednego z nich lub są one nieprawidłowo zastosowane. |

### Sprawdzanie kontrastu

1. Wyeksportuj ikonę z SVG do formatu bitmapy, takiego jak `.png` lub `.jpg`.
2. Załaduj bitmapę do programu graficznego i przekształć ją do odcieni szarości. Na przykład, w programie GIMP należy przejść do **Image → Mode → Grayscale**.
3. Inkscape pozwala na bezpośrednią konwersję SVG do skali szarości za pomocą **Extensions → Color → Grayscale**.
4. Czy nadal wyraźnie widać wewnętrzne szczegóły? Świetnie. Kontrast jest dobry.

Obraz w skali szarości pozwala łatwiej zidentyfikować problemy z kontrastem, ponieważ obecna jest tylko mieszanka czerni i bieli. Testowanie obrazów w skali szarości jest również dobre dla użytkowników niewidzących kolorów. Jeśli widzą oni szczegóły na obrazie w skali szarości, to kontrast w pełni kolorowego obrazu jest prawdopodobnie również dobry.

![](/images/Draft_Move_contrast_grayscale.svg)

Testowanie kontrastu ikony w skali szarości.

|  |  |
| --- | --- |
| Nie jestem w stanie rozróżnić wszystkich szczegółów. | Wybrane kolory mają słaby kontrast wartości. Spróbuj użyć kolorów, które są bardziej oddalone od siebie w palecie 4 tonów, to znaczy, że podświetlona zieleń obok podświetlonej żółci będzie trudna do zobaczenia, obniż jeden z tych kolorów do poziomu podstawowego lub ciemnego. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Artwork_Guidelines/pl&oldid=1494651>"