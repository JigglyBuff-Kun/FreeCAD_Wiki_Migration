---
title: Prvi koraci
---
## Predgovor

FreeCAD je CAD/CAE [aplikacija parametarskog modeliranja](/About_FreeCAD/hr "About FreeCAD/hr").Prvenstveno je napravljen za dizajn mehanike, ali podržava sve druge primjene gdje je potrebno 3D modeliranje objekata sa velikom preciznošću i kontrolom zabilješki modeliranja.

FreeCAD je u razvoju od 2002. godine i nudi veliki popis [features](/Feature_list/hr "Feature list/hr"). Neke mogućnosti još nedostaju, ali dovoljno je moćan za hobi upotrebu i male radionice. Postoji brzorastuća zajednica korisnika koji sudjeluju na [FreeCAD forumu](http://forum.freecadweb.org/index.php), a možete pronaći [?f=24 mnogo primjera](https://forum.freecadweb.org/viewforum.php) kvalitetnih projekata razvijenih sa FreeCAD-om.

Kao svaki slobodni softver projekt, FreeCAD je ovisan o zajednici da bi mogao rasti, dobiti nove funkcije ili ispraviti pogreške u programu. Zato nemojte to zaboraviti dok koristite FreeCAD ; ako vam se sviđa, i vi možete direktno utjecati na program i pomoći [donate](/Donate "Donate") i [help FreeCAD](/Help_FreeCAD "Help FreeCAD") učestvovati u razvoju kao npr. pisati dokumentaciju i prevoiti.

See also:

* [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
* [Which workbench should I choose?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Tutorials](/Tutorials "Tutorials")
* [Video tutorials](/Video_tutorials "Video tutorials")

## Instalacija

Prvo preuzmite i instalirajte FreeCAD. Pogledaj [Preuzimanja](/Download/hr "Download/hr") stranicu za informacije o preuzimanju, trenutnoj verziji programa, i o nadopunama, i instrukcije [Instalacija](/Installing/hr "Installing/hr") za vaš operacijski sustav ([Windows](/Installing_on_Windows/hr "Installing on Windows/hr"), [Linux](/Installing_on_Linux/hr "Installing on Linux/hr") or [Mac](/Installing_on_Mac/hr "Installing on Mac/hr")).
Postoje spremni instalacijski paketi za Windows (.msi), Debian i Ubuntu (.deb), openSUSE (.rpm) i Mac OSX. FreeCAD je dostupan od upravitelja paketa mnogih drugih distribucija Linuxa. Dostupna je i samostalna izvršna datoteka [AppImage](/index.php?title=AppImage/hr&action=edit&redlink=1 "AppImage/hr (page does not exist)") koja će se izvoditi na najnovijim 64-bitnim Linux sustavima. Budući da je FreeCAD otvorenog koda, također možete preuzeti izvorni kod i [kompilirati](/Compiling/hr "Compiling/hr") ga sami.

## Istraživanje sučelja

![](/images/FreeCAD_interface_base_divisions.svg)

Standardno FreeCAD sučelje

*pogledaj obašnjenje u [Sučelje](/Interface/hr "Interface/hr").*

:   1. [glavni pogled](/Main_view_area "Main view area"), koji mogu sadržavati različite prozore s karticama, uglavnom[3D pogled](/index.php?title=3D_view/hr&action=edit&redlink=1 "3D view/hr (page does not exist)").
:   2. [3D pogled](/index.php?title=3D_view/hr&action=edit&redlink=1 "3D view/hr (page does not exist)"), prikazuje geometrijske objekte u dokumentu
:   3. [Pregled grananja](/index.php?title=Tree_view/hr&action=edit&redlink=1 "Tree view/hr (page does not exist)"), (dio od [combo view](/index.php?title=Combo_view/hr&action=edit&redlink=1 "Combo view/hr (page does not exist)")) prikazuje hijerarhiju i povijest izrade svih objekata u vašem dokumentu; takođe može prikazati [task panel](/index.php?title=Task_panel/hr&action=edit&redlink=1 "Task panel/hr (page does not exist)") za aktivne naredbe..
:   4. [Uređivač osobina](/Property_editor/hr "Property editor/hr"), (dio od [combo view](/index.php?title=Combo_view/hr&action=edit&redlink=1 "Combo view/hr (page does not exist)"))koji omogućava da vidite i promijenite osobine odabranih objekata.
:   5. [Prozor odabira](/index.php?title=Selection_view/hr&action=edit&redlink=1 "Selection view/hr (page does not exist)"), ukazuje na odabrane objekte ili pod-elemente objekata (vrhove, rubove, lica).
:   6. [Izvještaj](/index.php?title=Report_view/hr&action=edit&redlink=1 "Report view/hr (page does not exist)") (ili prozor izlaza), u kojem FreeCAD ispisuje poruke, upozorenja i greške
:   7. [Python Konzola](/index.php?title=Python_console/hr&action=edit&redlink=1 "Python console/hr (page does not exist)"), gdje se ispisuju sve naredbe koje se izvršavaju u FreeCAD-u, i gdje možete upisati [Python](/Python "Python") izvršni kod
:   8. [status bar](/index.php?title=Status_bar/hr&action=edit&redlink=1 "Status bar/hr (page does not exist)"), ovdje se pojavljuju poruke i pomoćni opisi.
:   9. Područje pomoćnih opisa , gdje su pomoćni opisi usidreni.
:   10. [radno okruženjegdje](/Std_Workbench "Std Workbench") odaberete aktivne[Radne ploče](/Workbenches/hr "Workbenches/hr").
:   11. [Standardni izbornik](/index.php?title=Standard_Menu/hr&action=edit&redlink=1 "Standard Menu/hr (page does not exist)"), koji sadrži osnovne operacije programa.

Osnovni koncept FreeCAD sučelja je taj da je podijeljen na [Radne plovršine](/Workbenches/hr "Workbenches/hr"). Radna površina je kolekcija alata za specifičnu namjenu, kao rad sa [Poligonalna mreža radna površina](/Mesh_Workbench/hr "Mesh Workbench/hr"),[Crtanje 2D radna površina](/Draft_Workbench/hr "Draft Workbench/hr"), ili [Skiciraj radna površina](/Sketcher_Workbench/hr "Sketcher Workbench/hr"). Možete odabrati aktivnu Radnu površinu sa izbornikom (6). Možete prilagoditi [Postavke sučelja](/Interface_Customization/hr "Interface Customization/hr") uključene u Radnu površinu, dodati alate iz druge Radne površine ili osobno kreiranih alata, koje mi zovemo [Makronaredbe](/index.php?title=Macros/hr&action=edit&redlink=1 "Macros/hr (page does not exist)"). Obično se počinje sa Radnim površinama [Oblikovanje Tijela radna površina](/PartDesign_Workbench/hr "PartDesign Workbench/hr") i [Jednostavno tijelo radna površina](/Part_Workbench/hr "Part Workbench/hr").

Kada otvorite FreeCAD prvi puta otvorit če se Start stranica
Ovdje je izgled od verzije 0.18:

![](/images/Start_center_0.18_screenshot.jpg)

Start stranica omogućuje brzi prijelaz na uobičajene radne ploče, otvara uobičajeni dokument ili pregled zadnjih vijesti iz FreeCAD svijeta. Vi možete promijeniti početnu radnu ploču u [Uređivač postavki](/Preferences_Editor/hr "Preferences Editor/hr").

## Navigacija u 3D prostoru

FreeCAD ima na raspolaganju nekoliko različitih [navigacijski načini](/Mouse_navigation "Mouse navigation") koji mijenjaju način na koji miš koristi za interakciju s objektima u 3D prikazu i samom prikazu. Jedan od njih posebno je izrađen za [touchpads](/Mouse_navigation#Touchpad_Navigation "Mouse navigation"), gdje se ne koristi srednja tipka miša. Sljedeća tablica opisuje zadani način rada, nazvan  *'CAD Navigation'*  (trenutni način navigacije možete brzo promijeniti desnim klikom na prazno područje 3D prikaza):

Vi imate nekoliko pogleda koji su predefinirani (pogled odozgo, pogled sprijeda itd.) koji se nalaze u izborniku pregleda, a imate i brojevne prečice (1, 2, itd...). Sa klikom na objekt ili prazno područje sa desnom tipkom miša možete dobiti brzi pristup nekim osnovnim operacijama kao postavljanje pogleda, ili položaj objekta u stablu pregleda.

## Prvi koraci sa FreeCAD-om

Fokus FreeCAD-a vam je omogućiti izradu 3D preciznih 3D modela, strogu kontrolu nad tim modelima (mogućnost vraćanja u povijest modeliranja i izmjenu parametara) i na kraju izradu tih modela (putem 3D ispisa, CNC obrade ili čak gradilišta). Stoga se vrlo razlikuje od nekih drugih 3D aplikacija napravljenih u druge svrhe, poput animacijskog filma ili igranja. Njegova krivulja učenja može biti strma, posebno ako je ovo vaš prvi kontakt s 3D modeliranjem. Ako u nekom trenutku imate poteškoće, nemojte zaboraviti da će vas prijateljska zajednica korisnika na [FreeCAD forumu](http://forum.freecadweb.org/index.php) uspjeti pomoći u bilo kojem trenutku.

Radna ploča koju ćete početi koristiti u FreeCAD-u ovisi o vrsti posla koji trebate obaviti: Ako radite na mehaničkim modelima ili općenito nekim objektima manjeg opsega, vjerojatno ćete željeti isprobati [Dizajniranje dijelova radna ploča](/PartDesign_Workbench/hr "PartDesign Workbench/hr"). Ako radite u 2D-u, prebacite se na  [Nacrt radna ploča](/Draft_Workbench/hr "Draft Workbench/hr") ili na [Skiciraj radna ploča](/Sketcher_Workbench/hr "Sketcher Workbench/hr") ako su vam potrebna ograničenja. Ako želite učiniti BIM, pokrenite [Arhitekt radna ploča](/Arch_Workbench/hr "Arch Workbench/hr"). Ako radite s dizajnom brodova, za vas postoji poseban [Brod radna ploča](/Ship_Workbench/hr "Ship Workbench/hr"). A ako stižete iz svijeta OpenSCAD, pokušajte [OpenSCAD radna ploča](/OpenSCAD_Workbench/hr "OpenSCAD Workbench/hr").

Radne ploče možete prebaciti u bilo koje vrijeme i također [Prilagodba sučelja](/Interface_Customization/hr "Interface Customization/hr") svoju omiljenu radnu ploču koristiti za dodavanje alata s drugih radnih ploča.

## Rad sa radnim pločama Dizajniranje dijelova i Skiciraj

[Dizajniranje dijelova radna ploča](/PartDesign_Workbench/hr "PartDesign Workbench/hr") izrađen je za izgradnju složenih objekata, počevši od jednostavnih oblika, dodajući ili uklanjajući dijelove (zvane "značajke"), sve dok ne dođete do vašeg konačnog objekta. Sve značajke koje ste primijenili tijekom postupka modeliranja pohranjuju se u zasebnom prikazu pod nazivom [Prikaz stabla](/Document_structure/hr "Document structure/hr"), koji sadrži i ostale objekte u vašem dokumentu. Objekt PartDesign (Dizajniranje dijelova) možete smatrati dodavanjem operacija, a svaka se primjenjuje na rezultat prethodnog, tvoreći jedan veliki lanac. U prikazu stabla vidite svoj konačni objekt, ali možete ga proširiti i dohvatiti sva prethodna stanja te promijeniti bilo koji njihov parametar, koji automatski ažurira konačni objekt.

Radna ploča PartDesign (Dizajniranje dijelova) uvelike koristi druge radne ploče, [Skiciraj radna ploča](/Sketcher_Workbench/hr "Sketcher Workbench/hr"). Skica omogućuje crtanje dvodimenzionalnih oblika koji su definirani primjenom ograničenja na 2D oblik. Na primjer, možete nacrtati pravokutnik i postaviti veličinu stranice primjenjujući ograničenje duljine na jednu od strana. Ta se strana tada više ne može promijeniti (osim ako se ne promijeni ograničenje).

Ti 2D oblici napravljeni pomoću Skiciraj puno se koriste na radnoj ploči PartDesign-a, na primjer za stvaranje 3D volumena ili za crtanje područja na licima vašeg objekta koja će se nakon toga izdubiti iz glavnog volumena. Ovo je tipičan PartDesign (Dizajniranje dijelova) tijek rada:

1. Stvori novu skicu
2. Nacrtaj zatvoreni oblik (budite sigurni da su sve točke spojene)
3. Zatvori skicu
4. Izvuci skicu u 3D tijelo pomoću alata (pad) podmetanje
5. Odaberite jedno lice na tijelu
6. Stvorite drugu skicu (ovaj put će biti nacrtana na odabranom licu)
7. Nacrtaj zatvoreni oblik
8. Zatvori skicu
9. Na prvom objektu napravite džep iz druge skice

Što vam daje ovakav predmet:

![](/images/Partdesign_example.jpg)

U bilo kojem trenutku možete odabrati originalne skice i modificirati ih ili promijeniti parametre ekstruzije padova ili džepnih operacija, što će ažurirati konačni objekt.

## Rad s radnim pločama Nacrt i Arhitekt

[Nacrt](/Draft_Workbench/hr "Draft Workbench/hr") i [Arhitekt](/Arch_Workbench/hr "Arch Workbench/hr") ponašaju se malo drugačije od ostalih radnih radnih ploča gore, iako slijede ista pravila, koja su zajednička svima FreeCAD-u. Ukratko, dok su Sketcher (Skiciraj) i PartDesign (Dizajniranje dijelova) primarno dizajnirani za pojedinačne komade, Nacrt i Arhitekt su napravljeni da olakšaju vaš rad kada radite s nekoliko jednostavnijih objekata.

[Nacrt radna ploča](/Draft_Workbench/hr "Draft Workbench/hr") nudi vam 2D alate pomalo slične onima koje možete pronaći u tradicionalnim 2D CAD aplikacijama, poput [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). No, 2D nacrt je daleko od dosega FreeCAD-a, nemojte očekivati da će te tamo naći čitav niz alata koje nude ove posvećene aplikacije. Većina alata za nacrte djeluje ne samo u 2D ravnini, već i u cijelom 3D prostoru, a imaju koristi od posebnih pomoćnih sustava kao što su [Označi plohu nacrta](/Draft_SelectPlane "Draft SelectPlane") i [Privuci objekt](/index.php?title=Draft_Snap/hr&action=edit&redlink=1 "Draft Snap/hr (page does not exist)").

[Arhitekt](/Arch_Workbench/hr "Arch Workbench/hr") dodaje [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) alate FreeCAD, omogućujući vam izgradnju arhitektonskih modela s parametarskim objektima. Arhitekt radna ploča se uvelike oslanja na druge module kao što su Nacrt i Skiciraj. Svi alati za crtanje su također prisutni na Arhitekt radnoj ploči, a većina Arhitekt alata koristi nacrte za pomoćne sustave.

Tipičan tijek rada s Arch ( Arhitekt) i Drafts (Nacrt)radnim pločama može biti:

1. Nacrtajte nekoliko linija pomoću alata Nacrtaj liniju
2. Odaberite svaku liniju i pritisnite Zid alat da na svakom od njih izgradite zid
3. Pridružite zidove tako da ih odaberete i pritisnete alat Arch Add (Arhitekt Dodaj)
4. Napravite podni objekt i pomičite zidove u njemu s pogleda na Drvo
5. Napravite građevinski objekt i pomaknite kat u njemu sa stabla
6. Stvorite prozor klikom na alat Prozor, odaberite postavku na njenoj ploči, a zatim kliknite lice zida
7. Dodajte dimenzije prvo postavite radnu ravninu ako je potrebno, a zatim pomoću alata Draft Dimension (dimenzija nacrta)

Što vam daje ovo:

![](/images/Arch_workflow_example.jpg)

Više informacija na stranici [Vježbe](/Tutorials/hr "Tutorials/hr").

## Dodatci, Makronaredbe i Vanjske radne ploče

Princip [Dodatci](/index.php?title=Addon/hr&action=edit&redlink=1 "Addon/hr (page does not exist)") temelji se na razvoju dopuna radne površine. Bilo koji korisnik može razviti funkciju za koju smatra da nedostaje za vlastite potrebe ili, u konačnici, za zajednicu.
Pomoću foruma korisnik može zatražiti mišljenje, pomoć na forumu. Može dijeliti, ili ne, objekt svog razvoja prema pravilima o autorskim pravima koje treba definirati. Besplatno njoj / njemu.
Kako bi se razvio, korisnik ima na raspolaganju [skripti](/Scripting/hr "Scripting/hr") funkcije.

Postoje dvije vrste dodataka:

1. [Makronaredbe](/index.php?title=Macros/hr&action=edit&redlink=1 "Macros/hr (page does not exist)"): kratki isječci Python koda koji pružaju novi alat ili funkcionalnost. Makronaredbe obično počinju kao način pojednostavljenja ili automatizacije zadatka crtanja ili uređivanja određenog objekta. Ako se mnogo makronaredbi sakuplja unutar mape, cijeli se direktorij može distribuirati kao nova radna ploča.
2. [Vanjskie radne ploče](/index.php?title=External_workbenches/hr&action=edit&redlink=1 "External workbenches/hr (page does not exist)"): zbirka alata programiranih u Pythonu ili C ++ koji na važan način proširuju FreeCAD. Ako je radna ploča dovoljno razvijena i dobro je dokumentirana, može biti uključena kao jedana od osnovnih radnih ploča u FreeCAD. Pod  [Vanjske radne ploče](/index.php?title=External_workbenches/hr&action=edit&redlink=1 "External workbenches/hr (page does not exist)") naći ćete principe i popis postojeće knjižnice.

## Skriptiranje

I na kraju, jedna od najmoćnijih značajki FreeCAD-a je [skriptiranje](/Scripting/hr "Scripting/hr") okruženje. Iz integrirane python konzole (ili iz bilo koje druge vanjske Python skripte) možete dobiti pristup gotovo bilo kojem dijelu FreeCAD-a, stvoriti ili izmijeniti geometriju, modificirati reprezentaciju tih objekata na 3D sceni ili pristupiti i izmijeniti FreeCAD sučelje. Python skripti mogu se koristiti i u [makronaredbe](/index.php?title=Macros/hr&action=edit&redlink=1 "Macros/hr (page does not exist)"), koje pružaju jednostavan način stvaranja prilagođenih naredbi.

## Šta ima novoga

* Pogledajte [Bilješke distribucije](/Feature_list/hr#Release_notes "Feature list/hr") za detaljnu listu značajki.

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/hr&oldid=1480487>"