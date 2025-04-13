---
title: Strona Wiki FreeCAD
---
Ta strona jest rozszerzeniem strony [Pomoc: Edycja](/Help:Editing "Help:Editing") i podaje wspólne wytyczne dotyczące pisania i aktualizowania dokumentacji wiki FreeCAD. Podsumowuje kilka dyskusji i sesji burzy mózgów.

## Zanim rozpoczniesz pracę

* Ta dokumentacja wiki jest oparta na [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), tym samym oprogramowaniu, które zasila [Wikipedię](https://en.wikipedia.org/wiki/Main_Page). Jeśli już wcześniej brałeś udział w Wikipedii, edycja stron wiki FreeCAD powinna być łatwa.
* W przeciwieństwie do Wikipedii, wiki FreeCAD jest zabezpieczona przed pisaniem, aby uniknąć spamu. Musisz poprosić o utworzenie konta na [forum](http://forum.freecadweb.org/viewtopic.php?f=21&t=6830).
* Jeśli nigdy wcześniej nie korzystałeś z oprogramowania wiki, przejdź do [Help:Editing](/Help:Editing "Help:Editing"), aby zapoznać się z znacznikami stosowanymi do edycji stron.
* Informacje na temat zaawansowanego korzystania z oprogramowania Wiki można znaleźć w [MediaWiki Help:Contents](https://www.mediawiki.org/wiki/Help:Contents). Nie wszystkie funkcje MediaWiki są dostępne w Wiki FreeCAD, ale wiele z nich jest dostępnych.
* Chcemy, aby dokumentacja była przejrzysta i łatwa do odczytania, więc unikaj używania skomplikowanych funkcji. Utrzymuj ją w formie prostej.
* Użyj piaskownicy do przetestowania swojego kodu, na przykład [FreeCADDocu:Sandbox](/FreeCADDocu:Sandbox "FreeCADDocu:Sandbox") lub konkretnej strony o nazwie [Sandbox:Yourname](/index.php?title=Sandbox:Yourname&action=edit&redlink=1 "Sandbox:Yourname (page does not exist)").

Strony Piaskownicy muszą być umieszczone w kategorii Piaskownica. Robi się to poprzez dodanie składni `[[Category:Sandbox]]` na dole kodu wiki.

* Proszę zwrócić uwagę na tłumaczenia. Wiki FreeCAD używa automatycznej obsługi tłumaczeń, aby dostarczać strony w wielu językach. Dla każdej strony może istnieć wiele wersji językowych. Na wielu stronach zobaczysz znaczniki takie jak `<translate>...</translate>` oraz wiele pojedynczych znaczników takich jak `<!--T:8-->`. Te ostatnie oznaczają tzw. jednostki tłumaczeniowe i są tworzone przez system tłumaczeń, nigdy nie należy ich tworzyć ręcznie. Łączą one nagłówki i akapity z ich przetłumaczonymi wersjami. Nie powinieneś ich zmieniać, ponieważ zniszczyłoby to te linki. Można jednak przenosić akapity lub zmieniać ich brzmienie, o ile znaczniki pozostaną z nimi. Jeśli usuwasz nagłówek lub akapit, powinieneś również usunąć należący do niego znacznik. Należy pamiętać, że zmiany w istniejących nagłówkach i akapitach wpływają na aktualne tłumaczenia. Twoje zmiany powinny być tego warte. Nie musisz się martwić o dodawanie nowych materiałów, ponieważ system automatycznie doda nowe tagi po Twoich zmianach. Więcej informacji można znaleźć na stronie [Lokalizacja](/Localisation/pl "Localisation/pl") oraz na oryginalnej stronie [Mediawiki:Extension:Translate](https://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example).

## Wytyczne ogólne

### Dokładne opisy

Opisując FreeCAD staraj się być zwięzły i konkretny oraz unikaj powtórzeń. Opisuj co FreeCAD *robi*, a nie czego FreeCAD *nie robi*. Unikaj również kolokwialnych wyrażeń takich jak *parę*. Używaj słowa *kilka*, gdy masz do czynienia z nieokreśloną liczbą, lub określ prawidłową ilość.

Opis niewłaściwy
:   [PartDesign](/PartDesign_Workbench/pl "PartDesign Workbench/pl"): Środowisko pracy PartDesign jest stołem roboczym do projektowania części, którego celem jest dostarczenie narzędzi do modelowania złożonych brył części.

Opis dobry
:   [PartDesign](/PartDesign_Workbench/pl "PartDesign Workbench/pl"): ma na celu dostarczenie narzędzi do modelowania złożonych brył części.

### Scentralizowane informacje

Należy unikać powielania tych samych informacji w różnych miejscach. Umieść informacje na nowej stronie i łącze do tej strony z innych stron, które wymagają tych informacji.

Nie używaj funkcji przechodzenia stron *([Pomoc:Edycja#Szablony i transkluzja stron](/Help:Editing#Templates_and_transcluding_pages "Help:Editing"))*, ponieważ utrudnia to tłumaczenie wiki. Używaj tylko szablonów opisanych poniżej w sekcji <#Szablony>.

### Stylizacja

Szablony są używane do stylizacji stron pomocy. Nadają one dokumentacji spójny wygląd i sposób działania. Istnieje szablon dla poleceń menu, **Plik → Zapisz**, szablon dla klawiszy, które mają być wciśnięte, Shift, dla wyświetlania wartości logicznej, `true`, itd. Proszę zapoznać się z sekcją <#Szablony> przed rozpoczęciem pisania stron pomocy.

### Flagi tymczasowe

Jeśli pracujesz nad dużą stroną, zaleca się zaznaczenie jej albo jako praca w toku, albo jako niedokończona. Gwarantuje to, że administratorzy Wiki nie zaznaczą twojej strony jako gotowej do tłumaczenia, podczas gdy ty wciąż często ją zmieniasz.

Aby oznaczyć stronę, po prostu dodaj albo **{{Page in progress}}** lub **`{{UnfinishedDocu}}`** jako pierwszą linię do strony. Z **`{{UnfinishedDocu}}`** zapraszasz wszystkich do przyłączenia się i ukończenia strony, podczas gdy z **{{Page in progress}}** możesz wykonać pracę, a inni powinni dać ci trochę czasu.

Po zakończeniu pracy, proszę nie zapomnieć o usunięciu flag!

## Przykłady

Aby szybko zapoznać się ze strukturą i stylem Wiki dla FreeCAD zajrzyj na stronę modelu:
[GuiCommand model](/GuiCommand_model/pl "GuiCommand model/pl").

## Struktura

[Centrum użytkownika](/User_hub/pl "User hub/pl") zapewnia [Spis treści](/Online_Help_Toc/pl "Online Help Toc/pl"). Jest on używany jako główny punkt odniesienia do automatycznego budowania pomocy offline, do której można dotrzeć z programu FreeCAD, jak również dokumentacji offline PDF.

Szablon [Template:Docnav](/Template:Docnav "Template:Docnav") jest używany do sekwencyjnego linkowania stron, zgodnie ze strukturą [Spisu treści pomocy online](/Online_Help_Toc/pl "Online Help Toc/pl").
Lista wszystkich szablonów znajduje się w sekcji [Szablony](#Szablony).

### Nazwy stron

Nazwy stron powinny być krótkie, a w tytułach należy stosować wielką literę: każdy wyraz powinien zaczynać się wielką literą, chyba że są to przedimki, przyimki, spójniki lub inne formy gramatyczne *(np. "of", "on", "in", "a", "an", "and")*.

Niewłaściwa nazwa strony
:   Budowa samolotów AeroCompany

Prawidłowa nazwa strony
:   Budowa Samolotów AeroCompany

Nazwy stron środowisk pracy o najwyższym poziomie muszą mieć taki format: `XYZ Workbench`, gdzie `XYZ` jest nazwą środowiska, na przykład [PartDesign Workbench](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). A nazwy stron opisujących polecenia *(lub narzędzia)* należące do danego środowiska muszą mieć taki format: `XYZ Command`, na przykład [PartDesign Pad](/PartDesign_Pad/pl "PartDesign Pad/pl"). Zwróć uwagę, że powinieneś używać nazwy polecenia tak, jak występuje ona w kodzie źródłowym.

### Nagłówki

Nagłówki akapitów powinny być krótkie i zawierać wielkie litery: wszystkie wyrazy, z wyjątkiem pierwszego i nazw własnych, powinny być pisane małymi literami. Nie należy używać nagłówków `H1` (`= Heading =`) w znacznikach Wiki, ponieważ tytuł strony jest automatycznie dodawany jako główny nagłówek `H1`.

### Odnośniki internetowe

Jeśli to możliwe, powinieneś używać oryginalnej nazwy linku dla linków. Dzięki temu w dokumentacji drukowanej lub offline łatwiej jest znaleźć stronę, do której zastosowano odniesienie. Proszę unikać nieistotnych słów dla linku.

Nieprawidłowy link
:   Aby uzyskać więcej informacji na temat rysowania obiektów 2D kliknij [tutaj](/Draft_Workbench/pl "Draft Workbench/pl").

Prawidłowy link
:   Więcej informacji na temat rysowania obiektów 2D można znaleźć w Środowisku pracy [Rysunek roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

Preferowany format linku to:

`[[Name_of_Page|Name of Page]]`

przetłumaczone:

`[[Nazwa_Strony/pl|Nazwa Strony]]`

Zauważ, że w przypadku części przed znakiem `|`  istotny jest faktyczny link, wielkość liter. Jeśli nazwa Twojej strony to `Name_of_page` , link nie powiedzie się, jeśli wpiszesz `Name_of_Page`  *(wielka litera P)*. Przed znakiem `|`  wszystkie spacje należy zastąpić podkreśleniami ( `_` ). Ma to na celu pomoc tłumaczom korzystającym z oprogramowania tłumaczącego, bez podkreślników link zostałby przetłumaczony przez oprogramowanie, co jest niepożądane.

Aby połączyć się z konkretnym akapitem, dodaj do nazwy strony znak `#` i jego nagłówek. Przykład:

`[[WikiPages#Links|WikiPages]]`

przetłumaczone:

`[[WikiPages/pl#Odnośniki|Strona Wiki]]`

W obrębie tej samej strony możesz pominąć nazwę strony. Przykład:

`[[#Links|Links]]`

Aby przejść do górnej części strony możesz użyć:

`</translate>{{Top}}<translate>`

Szablon ten powinien automatycznie wyświetlać poprawny tekst w zależności od tego w jakim języku dana strona jest napisana. Link do góry strony jest szczególnie przydatny w przypadku długich stron, ponieważ pozwala użytkownikowi szybko przeskoczyć z powrotem do spisu treści. Możesz go umieścić na końcu każdego akapitu. Upewnij się, że przed i po szablonie znajduje się pusta linia.

Link do obrazu
:   [![Opcjonalny tekst, który jest wyświetlany po najechaniu kursorem na obszar obrazka](/images/Draft_Wire.svg)](/Draft_Wire/pl "Opcjonalny tekst, który jest wyświetlany po najechaniu kursorem na obszar obrazka ").

Aby użyć obrazka jako odsyłacza:

`[[Image:Draft_Wire.svg|24px|Opcjonalny tekst, który jest wyświetlany po najechaniu kursorem na obszar obrazka|link=Draft_Wire/pl]]`

Link do obrazu + link tekstowy
:   ![](/images/Draft_Wire.svg) [Polilinia](/Draft_Wire/pl "Draft Wire/pl")

Jeśli pominiesz opcjonalny tekst, sam link zostanie wyświetlony po najechaniu kursorem myszki na obraz, co jest lepszym rozwiązaniem, a także powinieneś dodać link tekstowy po linku do obrazka:

`[[Image:Draft_Wire.svg|24px|link=Draft_Wire/pl]] [[Draft_Wire/pl|Polilinia]]`

### Strony Środowisk pracy

Strona najwyższego poziomu powinna zaczynać się od:

* Opisu do czego służy dane środowisko pracy.
* Obrazka ilustrującego opis.

Zobacz sekcję [#Zrzut ekranu](#Zrzut_ekranu) dla rozwiązań dotyczących dołączania obrazów.

### Strony poleceń

Strony komend opisujące narzędzia środowiska pracy nie powinny być zbyt długie, powinny jedynie wyjaśniać, co dana komenda może zrobić, a czego nie, oraz jak jej użyć. Obrazki i przykłady należy ograniczyć do minimum. Poradniki mogą wyjaśniać jak używać danego narzędzia i podawać szczegóły krok po kroku.

Proszę odnieść się do strony [GuiCommand model](/GuiCommand_model/pl "GuiCommand model/pl") po więcej szczegółów.

### Poradniki

Dobrze napisany poradnik powinien uczyć, jak szybko osiągnąć pewne praktyczne rezultaty. Nie powinien być zbyt długi, ale powinien zawierać wystarczającą ilość instrukcji krok po kroku i obrazów, aby poprowadzić użytkownika. W miarę rozwoju programu FreeCAD, samouczki mogą stać się nieaktualne, dlatego ważne jest, aby wspomnieć o wersji FreeCAD użytej w poradniku lub wymaganej do jego napisania.

Przykłady można znaleźć na stronie [Poradniki](/Tutorials/pl "Tutorials/pl").

## Szablony

Stylizacja stron Wiki FreeCAD jest osiągana poprzez użycie ([szablonów i stron pośrednich](/Help:Editing#Templates_and_transcluding_pages "Help:Editing")). Zapewniają one standardowy wygląd i sposób działania wszystkich stron, a także umożliwiają zmianę stylu wiki. Możesz zobaczyć pełną listę zdefiniowanych szablonów wchodząc na stronę [Special:PrefixIndex/Template:](/Special:PrefixIndex/Template: "Special:PrefixIndex/Template:"). Ale proszę używaj tylko szablonów wymienionych w tabelach poniżej. Tylko w bardzo szczególnych przypadkach powinieneś używać bezpośrednio znaczników HTML.

Kliknij na link do szablonu, aby zobaczyć instrukcje użycia szablonu oraz jego implementację. Szablony są potężną funkcją oprogramowania MediaWiki. Powinieneś być doświadczonym użytkownikiem wiki, jeśli chcesz proponować dodatki i modyfikacje do istniejących szablonów. Nieprawidłowo zaimplementowane szablony utrudniają tłumaczenie stron na inne języki, dlatego ich użycie powinno być ograniczone do formatowania tekstu, należy unikać dołączania stron. Zobacz [Pomoc MediaWiki:Szablony](https://www.mediawiki.org/wiki/Help:Templates/pl) aby dowiedzieć się więcej.

### Proste szablony

Szablony te przyjmują prosty parametr tekstowy i formatują go za pomocą określonego stylu.

| Szablon | Wygląd | Opis |
| --- | --- | --- |
| [Top](/Template:Top "Template:Top") | [Przewiń na górę strony](#top) | Użyj go, aby dodać link na początek strony. |
| [Emphasis](/Template:Emphasis "Template:Emphasis") | *zaakcentowanie* | Użyj go do zaakcentowania fragmentu tekstu. |
| [KEY](/Template:KEY "Template:KEY") | Alt | Użyj go do wskazania klawisza klawiatury, który należy nacisnąć. |
| [ASCII](/Template:ASCII "Template:ASCII") |  | Użyj go do wskazania klawisza ascii w obrazie *(.svg)*, który musi zostać naciśnięty. Należy wprowadzić żądany znak lub numer kodu ascii tego znaku. |
| [Button](/Template:Button "Template:Button") | Anuluj | Użyj go do wskazania przycisku w graficznym interfejsie użytkownika, który należy nacisnąć. |
| [RadioButton](/Template:RadioButton "Template:RadioButton") | Opcja | Użyj go, aby wskazać przycisk wyboru w graficznym interfejsie użytkownika, który należy  Zaznaczyć lub  Nie. |
| [CheckBox](/Template:CheckBox "Template:CheckBox") | Opcja | Użyj go, aby wskazać pole wyboru w graficznym interfejsie użytkownika, które należy  wybrać lub  Nie. |
| [SpinBox](/Template:SpinBox "Template:SpinBox") | 1.50 | Użyj go do wskazania pola wyboru w graficznym interfejsie użytkownika, które ma zostać zmodyfikowane. |
| [ComboBox](/Template:ComboBox "Template:ComboBox") | Menu 1 | Użyj go do wskazania pola listy wyboru w graficznym interfejsie użytkownika, które należy zmienić. |
| [LineEdit](/Template:LineEdit "Template:LineEdit") | Metal Nikiel *(Ni)* | Służy do wskazywania Linii Edycji w graficznym interfejsie użytkownika, która wymaga modyfikacji. |
| [FALSE](/Template:FALSE "Template:FALSE"), [False](/Template:False "Template:False") | `FAŁSZ`, `Fałsz` | Użyj go, aby wskazać wartość logiczną False, na przykład, jako właściwość w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"). To jest skrót. Ponieważ jest to wartość, wywołanego szablonu [Value](/Template:Value "Template:Value"). `False` |
| [TRUE](/Template:TRUE "Template:TRUE"), [True](/Template:True "Template:True") | `PRAWDA`, `Prawda` | Użyj go, aby wskazać wartość logiczną True, na przykład, jako właściwość w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"). To jest skrót. Ponieważ jest to wartość, wywołanego szablonu [Value](/Template:Value "Template:Value"). `true` |
| [MenuCommand](/Template:MenuCommand "Template:MenuCommand") | **Plik → Zapisz** | Użyj go do wskazania lokalizacji polecenia wewnątrz danego menu. |
| [FileName](/Template:FileName "Template:FileName") | Nazwa pliku | Użyj go do wskazania nazwy pliku lub katalogu. |
| [SystemInput](/Template:SystemInput "Template:SystemInput") | Wprowadź ten tekst | Użyj go do wprowadzenia tekstu wejściowego, wprowadzonego przez użytkownika. |
| [SystemOutput](/Template:SystemOutput "Template:SystemOutput") | Tekst wyjściowy | Użyj go do wskazania tekstu wychodzącego z systemu. |
| [Incode](/Template:Incode "Template:Incode") | `import FreeCAD` | Użyj go, aby dołączyć kod źródłowy w wierszu z czcionką o stałej szerokości. Powinien zmieścić się w jednej linii. |
| [PropertyView](/Template:PropertyView "Template:PropertyView") | WIDOK**Kolor** | Użyj go, aby wskazać właściwość widoku w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"). Przykłady właściwości widoku to *Kolor linii*, *Szerokość linii*, *Kolor punktu*, *Rozmiar punktu*, itd. |
| [PropertyData](/Template:PropertyData "Template:PropertyData") | DANE**Pozycja** | Użyj go, aby wskazać właściwość Data w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"). Właściwości danych są różne dla różnych typów obiektów. |
| [Properties Title](/Template:Properties_Title "Template:Properties Title") / [TitleProperty](/Template:TitleProperty "Template:TitleProperty") | Podstawowe | Użyj go, aby wskazać nazwę grupy właściwości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"). Nazwa nie zostanie uwzględniona w automatycznym spisie treści. |
| [Obsolete](/Template:Obsolete "Template:Obsolete") | [przestarzałe w wersji 0.19](/Release_notes_0.19 "Release notes 0.19") | Użyj go, aby wskazać, że cecha stała się przestarzała w określonej wersji FreeCAD. |
| [VersionNoteObsolete](/Template:Obsolete "Template:Obsolete") | [Template:VersionNoteObsolete/pl](/index.php?title=Template:VersionNoteObsolete/pl&action=edit&redlink=1 "Template:VersionNoteObsolete/pl (page does not exist)") | To samo (wersja w postaci indeksu górnego). |
| [Version](/Template:Version "Template:Version") | [dostępne w wersji 0.18](/Release_notes_0.18/pl "Release notes 0.18/pl") | Użyj go, aby wskazać, że cecha została wprowadzona w określonej wersji FreeCAD. |
| [VersionNote](/Template:Version "Template:Version") | [Template:VersionNote/pl](/index.php?title=Template:VersionNote/pl&action=edit&redlink=1 "Template:VersionNote/pl (page does not exist)") | To samo (wersja w postaci indeksu górnego). |
| [VersionMinus](/Template:VersionMinus "Template:VersionMinus") | wersja 0.16 i poniżej | Użyj go, aby wskazać, że cecha jest dostępna w określonej wersji FreeCAD i wcześniejszych wersjach. |
| [VersionNoteMinus](/Template:VersionMinus "Template:VersionMinus") | [Template:VersionNoteMinus/pl](/index.php?title=Template:VersionNoteMinus/pl&action=edit&redlink=1 "Template:VersionNoteMinus/pl (page does not exist)") | To samo (wersja w postaci indeksu górnego). |
| [VersionPlus](/Template:VersionPlus "Template:VersionPlus") | wersja 0.17 i powyżej | Użyj go, aby wskazać, że cecha jest dostępna w określonej wersji FreeCAD i nowszych wersjach. |
| [VersionNotePlus](/Template:VersionPlus "Template:VersionPlus") | [Template:VersionNotePlus/pl](/index.php?title=Template:VersionNotePlus/pl&action=edit&redlink=1 "Template:VersionNotePlus/pl (page does not exist)") | To samo (wersja w postaci indeksu górnego). |
| [ColoredText](/Template:ColoredText "Template:ColoredText") | Kolorowy tekst | Użyj tego szablonu do pokolorowania tła, tekstu lub tła i tekstu. *([ColoredText](/Template:ColoredText "Template:ColoredText") - strona zawierająca więcej przykładów)*. |
| [ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") | Kolorowy akapit | Użyj tego szablonu do pokolorowania tła, tekstu lub tła i tekstu całego akapitu. *([ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") strona dla więcej przykładów)* |

### Złożone szablony

Szablony te wymagają większej ilości parametrów wejściowych, lub generują blok tekstu o określonym formacie.

| Szablon | Wygląd | Opis |
| --- | --- | --- |
| [Prettytable](/Template:Prettytable "Template:Prettytable") | Ta oto tabela | Użyj go do formatowania tabel, takich jak ta. Można dodać dodatkowe właściwości tabeli. |
| [Caption](/Template:Caption "Template:Caption") | Jakiś podpis do obrazka | Użyj go, aby dodać wyjaśnienie pod obrazem. Możesz ustawić wyrównanie do lewej lub do środka. |
| [Clear](/Template:Clear "Template:Clear") |  | Użyj go do wyczyszczenia kolumn. Aby uzyskać szczegółowe wyjaśnienie, postępuj zgodnie z definicją szablonu. Jest on często używany do zatrzymania przepływu tekstu obok niepowiązanych obrazów. |
| [Code](/Template:Code "Template:Code") | ``` import FreeCAD  ``` | Użyj go, aby dołączyć wielowierszowe przykłady kodu z czcionką monospace. Domyślnym językiem jest Python, ale można podać inne języki. Użyty kod [Python](/Python/pl "Python/pl") powinien stosować się do ogólnych zaleceń ustanowionych przez [PEP8: Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/). W szczególności, nawiasy powinny następować bezpośrednio po nazwie funkcji, a spacja powinna następować po przecinku. Dzięki temu kod jest bardziej czytelny. |
| [CodeDownload](/Template:CodeDownload "Template:CodeDownload") | [Niektóre oznaczenia](https://wiki.freecad.org/Main_Page) | Użyj go, aby utworzyć link na stronie [makrodefinicji](/Macros/pl "Macros/pl"). |
| [Codeextralink](/Template:Codeextralink "Template:Codeextralink") | Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). *Link for optional manual installation: [Macro](https://wiki.freecad.org/Main_Page)*  ```   # This code is copied instead of the original macro code # to guide the user to the online download page. # Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki # or if the RAW code URL is somewhere else in the wiki.  from PySide import QtGui, QtCore  diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,     "Information",     "This macro must be downloaded from this link\n"     "\n"     "https://wiki.freecad.org/Main_Page" + "\n"     "\n"     "Quit this window to access the download page")  diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint) diag.setWindowModality(QtCore.Qt.ApplicationModal) diag.exec_()  import webbrowser  webbrowser.open("https://wiki.freecad.org/Main_Page")  ```  <class="rawcodeurl"><a href="<https://wiki.freecad.org/Main_Page>">raw code</a> | Użyj go, jeśli kod [makrodefinicji](/Macros/pl "Macros/pl") jest zbyt duży, by umieścić go na Wiki. Kod może być hostowany gdzie indziej, a surowy link do niego może być określony za pomocą tego szablonu. [Menedżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") użyje tego linku. |
| [Fake heading](/Template:Fake_heading "Template:Fake heading") | Nagłówek | Użyj go, aby utworzyć nagłówek, który nie będzie automatycznie umieszczany w spisie treści. |
| [GuiCommand](/Template:GuiCommand "Template:GuiCommand") | Zobacz [Model polecenia GUI](/GuiCommand_model/pl "GuiCommand model/pl") | Za jego pomocą można utworzyć pole z przydatnymi informacjami do dokumentowania poleceń *(narzędzi)* środowiska pracy. |
| [TutorialInfo](/Template:TutorialInfo "Template:TutorialInfo") | Zobacz przykład [Poradnik: Podstawy modelowania](/Basic_modeling_tutorial/pl "Basic modeling tutorial/pl") | Użyj go do stworzenia ramki z przydatnymi informacjami, aby udokumentować [Poradniki](/Tutorials/pl "Tutorials/pl"). |
| [Macro](/Template:Macro "Template:Macro") | Zobacz przykład [Macro FlattenWire](/Macro_FlattenWire "Macro FlattenWire") | Użyj go do stworzenia ramki z przydatnymi informacjami, aby udokumentować [makrodefinicje](/Macros/pl "Macros/pl"). |
| [Docnav](/Template:Docnav "Template:Docnav") |  | Użyj go, aby utworzyć pasek ze strzałkami i odpowiednimi linkami, który jest przydatny do umieszczania stron w określonej kolejności. |
| [VeryImportantMessage](/Template:VeryImportantMessage "Template:VeryImportantMessage") | :::caution Ważny komunikat ::: | Użyj go, aby utworzyć wyróżnione pole z bardzo ważną wiadomością. Używaj rzadko, tylko do wskazania poważnych problemów w funkcjonalności oprogramowania, zaprzestania używania narzędzi itp. |
| [Page in progress](/Template:Page_in_progress "Template:Page in progress") | :::caution This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days. ::: | Użyj tego dla stron, które są w trakcie tworzenia lub które są obecnie przerabiane. Nie zapomnij usunąć tej opcji, gdy strona będzie gotowa. |
| [UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") | :::caution This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute. ::: | Użyj go, aby utworzyć podświetlone pole wskazujące niedokończoną stronę dokumentacji. |
| [Softredirect](/Template:Softredirect "Template:Softredirect") |  | Użyj go zamiast normalnego przekierowania, gdy przekierowujesz na specjalną stronę *(taką jak Media: lub Kategoria:)*, w których to przypadkach normalne przekierowanie jest wyłączone. |
| [Quote](/Template:Quote "Template:Quote") | Krzyknij "Havoc" i wypuść psy wojny.  —William Shakespeare, *Juliusz Cezar*, akt III, scena I | Użyj go, aby utworzyć pole tekstu z dosłownym cytatem i odniesieniem. |
| [Userdocnavi](/Template:Userdocnavi "Template:Userdocnavi"), [Powerdocnavi](/Template:Powerdocnavi "Template:Powerdocnavi") |  | Użyj ich do stworzenia okien nawigacyjnych dla dokumentacji użytkownika, dokumentacji użytkownika zaawansowanych funkcji oraz dokumentacji programisty. Pozwala to na szybkie przeskakiwanie pomiędzy różnymi sekcjami dokumentacji. Umieszczają one również odpowiednią stronę we właściwej kategorii. |

## Grafika

Obrazy i zrzuty ekranu są niezbędne do stworzenia kompletnej dokumentacji programu FreeCAD. Są one szczególnie przydatne do ilustrowania przykładów i samouczków. Obrazy powinny być wyświetlane w ich oryginalnym rozmiarze, tak aby prezentowały wystarczającą ilość szczegółów i były czytelne, jeśli zawierają tekst. Obrazy w formacie [Bitmap](/Bitmap/pl "Bitmap/pl") nie powinny być zmieniane.

Unikaj animowanych obrazów *(GIF)* na ogólnych stronach pomocy. Animacje i filmy powinny być zarezerwowane dla samouczków, które nie są przeznaczone do użycia jako dokumentacja PDF offline.

Pliki graficzne mogą być załadowane poprzez stronę [Special:Upload](/Special:Upload "Special:Upload").

### Nazwa

Nadawaj obrazkom znaczące nazwy. Jeśli masz obrazek, który pokazuje charakterystykę konkretnego polecenia, powinieneś użyć nazwy tego polecenia z `_example` na końcu. Na przykład dla polecenia [Draft Offset](/Draft_Offset/pl "Draft Offset/pl") obrazek powinien mieć nazwę `Draft_Offset_example.png`.

### Zrzut ekranu

Zalecane rozmiary dla zrzutów ekranu to:

* Natywny 400x200 *(lub szerokość=400 i wysokość<=200)*, dla stron [command reference](/GuiCommand_model "GuiCommand model"), aby obrazek zmieścił się w lewej części strony, oraz dla innych standardowych zrzutów.
* Natywny 600x400 *(lub szerokość=600 i wysokość<=400)*, dla stron [command reference](/GuiCommand_model "GuiCommand model"), kiedy naprawdę potrzebujesz większego obrazka, i nadal pozwalasz obrazkowi zmieścić się w lewej części strony, oraz dla innych standardowych zrzutów.
* Natywny rozmiar 1024x768 *(lub szerokość=1024 i wysokość<=768)*, tylko dla obrazów pełnoekranowych.
* Mniejsze rozmiary są możliwe przy wyświetlaniu szczegółów.
* Unikaj obrazów o większych rozdzielczościach, ponieważ nie będą one wystarczająco dopasowane do innych rodzajów wyświetlaczy lub drukowanej dokumentacji PDF.

Nie powinieneś polegać na niestandardowej konfiguracji pulpitu lub systemu operacyjnego podczas tworzenia zrzutów ekranu i powinieneś używać domyślnych ustawień wizualnych interfejsu FreeCAD, kiedy tylko jest to możliwe.

Aby utworzyć zrzuty ekranu, możesz użyć opcji dostarczonych przez system operacyjny lub jednej z tych makroinstrukcji: ![](/images/Snip.png) [Macro Snip](/Macro_Snip "Macro Snip") lub ![](/images/Macro_Screen_Wiki.png) [Macro Screen Wiki](/Macro_Screen_Wiki "Macro Screen Wiki").

### Treść

Aby ułatwić tłumaczenie dokumentacji, staraj się unikać zrzutów ekranu, które zawierają teksty. Jeśli nie możesz tego uniknąć, rozważ zrobienie osobnych zrzutów ekranu interfejsu i okna [widoku 3D](/3D_view/pl "3D view/pl"). Obraz widoku 3D może być ponownie użyty w każdym tłumaczeniu, podczas gdy tłumacz może w razie potrzeby wykonać zrzut ekranu zlokalizowanego interfejsu.

### Ikonki i grafika

Odnieś się do strony [Artykuły](/Artwork/pl "Artwork/pl"), aby zobaczyć wszystkie grafiki i ikony, które zostały stworzone dla FreeCAD, a które mogą być również użyte na stronach dokumentacji. Jeśli chciałbyś dodać ikony, proszę przeczytaj [Artwork Guidelines](/Artwork_Guidelines "Artwork Guidelines").

## Tłumaczenia

Zgodnie z ogólnym konsensusem, strona referencyjna w Wiki jest stroną angielską, która powinna być utworzona jako pierwsza. Jeśli chcesz zmienić lub dodać treść do strony, powinieneś zrobić to najpierw na angielskiej stronie, a dopiero po zakończeniu aktualizacji przenieść modyfikację na przetłumaczoną stronę.

FreeCAD Wiki wspiera rozszerzenie tłumaczenia, które pozwala na łatwiejsze zarządzanie tłumaczeniami między stronami; szczegóły w [Tłumaczenie dokumentacji Wiki dla FreeCAD](/Localisation/pl#T.C5.82umaczenie_dokumentacji_Wiki_dla_FreeCAD "Localisation/pl").

Inne przydatne zasoby to:

* [Kody ISO języków](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) aby określić dwuliterowy kod dla danego języka, na który chcesz tłumaczyć.
* [Google Translate](http://translate.google.com/) do pomocy przy tłumaczeniach.
* [tłumacz Deepl](https://www.deepl.com/translator) do pomocy przy tłumaczeniach.

## Kilka wskazówek dla tłumaczy

### Tłumaczenie komend Gui

```
{{GuiCommand
|Name=FEM EquationFlux
|MenuLocation=Solve → Flux equation
|Workbenches=[[FEM_Workbench|FEM]]
|Shortcut={{KEY|F}} {{KEY|S}}
|Version=0.17
|SeeAlso=[[FEM_tutorial|FEM tutorial]]
}}

```

przetłumaczone:

```
{{GuiCommand/fr
|Name=FEM EquationFlux
|Name/fr=FEM Équation d'écoulement
|MenuLocation=Solveur → Équation de flux
|Workbenches=[[FEM_Workbench/fr|Atelier FEM]]
|Shortcut={{KEY|F}} {{KEY|S}}
|Version=0.17
|SeeAlso=[[FEM_tutorial/fr|FEM Tutoriel]]
}}

```

### Ustawienia szablonu

```
{{FEM_Tools_navi}}

```

przetłumaczone:

```
{{FEM_Tools_navi/fr}}

```

### Tłumaczenie odnośnika

```
[[Part_Workbench|Part Workbench]]

```

przetłumaczone:

```
[[Part_Workbench/fr|Atelier Part]]

```

### Tłumaczenie Docnav

```
{{Docnav
|[[About_FreeCAD|About FreeCAD]]
|[[Installing_on_Windows|Installing on Windows]]
}}

```

przetłumaczone:

```
{{Docnav/fr
|[[About_FreeCAD/fr|À propos de FreeCAD]]
|[[Installing_on_Windows/fr|Installation sous Windows]]
}}

```

Przykład z ikonami:

```
{{Docnav
|[[Std_Save|Save]]
|[[Std_SaveCopy|SaveCopy]]
|[[Std_File_Menu|Std File Menu]]
|IconL=Std_Save.svg
|IconR=Std_SaveCopy.svg
|IconC=Freecad.svg
}}

```

przetłumaczone:

```
{{Docnav/fr
|[[Std_Save/fr|Enregistrer]]
|[[Std_SaveCopy/fr|Enregistrer une copie]]
|[[Std_File_Menu/fr|Menu fichier]]
|IconL=Std_Save.svg
|IconR=Std_SaveCopy.svg
|IconC=Freecad.svg
}}

```

## Tworzenie, zmiana nazwy i usuwanie strony

### Tworzenie stron

Przed utworzeniem nowej strony powinieneś najpierw sprawdzić, czy podobna strona już istnieje. Jeśli tak, to zazwyczaj lepiej jest edytować istniejącą stronę. W razie wątpliwości najpierw otwórz temat na forum w dziale [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21).

Aby utworzyć nową stronę wykonaj jedną z poniższych czynności:

* Odwiedź adres URL z żądaną nazwą strony, na przykład: `https://wiki.freecadweb.org/Moja_Nowa_Strona`, i kliknij na przycisk *utwórz tą stronę*.
* Wyszukaj w Wiki nazwę strony i kliknij na czerwony tekst w *Utwórz stronę **Moja Nowa Strona** w tej Wiki!'.*

### Zmiana nazwy stron

Ponieważ FreeCAD jest projektem w ciągłym rozwoju, czasami jest konieczne zrewidowanie zawartości Wiki. Jeśli nazwy poleceń są zmieniane w kodzie źródłowym, strony wiki je dokumentujące również muszą być zmieniane. To może być zrobione tylko przez administratorów Wiki. Aby ich o tym poinformować, otwórz temat na forum [forum Wiki](https://forum.freecadweb.org/viewforum.php?f=21) i w tym formularzu opisz konieczną operację zmiany nazwy:

```
old name         new name
Old_page_name_1  New_page_name_1
Old_page_name_2  New_page_name_2
...

```

### Usuwanie plików i stron

W przypadku, gdy chcesz usunąć plik, przejdź na jego stronę (`https://www.freecadweb.org/wiki/File:***.***`) i edytuj ją. Nie ważne czy strona jest pusta czy nie, dodaj to jako pierwszy element: `{{Delete}}` i bezpośrednio pod nim opisać, dlaczego strona powinna zostać usunięta. Dodatkowo, otwórz temat w dziale [forum Wiki](https://forum.freecadweb.org/viewforum.php?f=21).

Dla stron procedura jest taka sama.

## Dyskusja

Subforum [Development/Wiki](http://forum.freecadweb.org/viewforum.php?f=21) w [FreeCAD forum](https://forum.freecadweb.org) zapewnia dedykowaną przestrzeń do dyskusji na tematy Wiki, wygląd i wszystko inne związane z Wiki. Kieruj tam swoje pytania i sugestie.

## Terminologia - Zasady nazewnictwa

### Angielski

Zobacz [Słownik](/Glossary "Glossary")

### Inne języki

* [włoski](/Italian_Translation "Italian Translation")
* [francuski](/French_Translation "French Translation")
* [niemiecki](/German_Translation "German Translation")
* [polski](/Polish_Translation "Polish Translation")
* [hiszpański](/Spanish_Translation "Spanish Translation")
* [japoński](/Japanese_Translation "Japanese Translation")

Retrieved from "<http://wiki.freecad.org/index.php?title=WikiPages/pl&oldid=1540494>"