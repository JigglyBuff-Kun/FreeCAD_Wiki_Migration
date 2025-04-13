---
title: Localisation/Traducere, Adaptare, Localizare
---
**Localizarea** este, în general, procesul de furnizare a unui Software cu o interfață de utilizare în mai multe limbi. În FreeCAD puteți seta limba interfeței de utilizator sub  *Editare → Preferințe → Aplicație* . FreeCAD utilizează  [Qt](http://en.wikipedia.org/wiki/Qt_(toolkit) "wikipedia:Qt (toolkit)") pentru a activa suportul pentru mai multe limbi. Pe sistemele Unix / Linux, FreeCAD utilizează implicit setările locale locale ale sistemului.

**Localisation** is in general the process of providing a Software with a multiple language user interface. In FreeCAD you can set the language of the user interface under **Edit → Preferences → General**. FreeCAD uses [Qt](http://en.wikipedia.org/wiki/Qt_(toolkit) "wikipedia:Qt (toolkit)") to enable multiple language support. On Unix/Linux systems, FreeCAD uses the current locale settings of your system by default.

## Ajutor în traducere FreeCAD

Unul dintre lucrurile foarte importante pe care utilizatorii le poate contribui la FreeCAD (dacă, de exemplu, nu au abilități de programare) este de a ajuta la traducerea diferitelor sale aspecte (cod sursă, wiki, site web, documentație etc.) într-o altă limbă. Iată modalitățile de a face acest lucru

## Traduceți codul sursă al FreeCAD

 FreeCAD folosește un sistem de traducere on-line, bazat pe colaborare, numit [Crowdin](https://crowdin.net). Este software proprietate, dar gratuit pentru proiectele FOSS. Mai jos sunt instrucțiuni despre modul de utilizare:

FreeCAD utilizes a third party collaborative on-line translation system called [Crowdin](https://crowdin.net).

![](/images/Logo-crowdin.png)

It is proprietary software but free to [FOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software) projects. Below are instructions on how to use it:

* Du-te la [FreeCAD translation project page on Crowdin](http://crowdin.net/project/freecad)
* Conectați-vă prin crearea unui nou profil sau utilizând un cont terță parte ca adresa dvs. (GitHub, GitLab, GMail etc...)
* Faceți clic pe limba pe care doriți să o traduceți;
* Începeți traducerea făcând clic pe butonul Traducere de lângă unul dintre fișiere. De exemplu,  *FreeCAD.ts*  conține șiruri de text pentru GUI-ul principal al FreeCAD.
* Puteți să votați pentru traducerile existente sau puteți crea propriile dvs. traduceri ..

```
Dacă participați în mod activ la traducerea FreeCAD și doriți să fiți informat înainte de lansarea următoarei versiuni, atunci când este gata să fie lansată, deci este timpul să vă revizuiți traducerea, vă rugăm să vă abonați la una dintre echipele de traducere Crowdin FreeCAD.

```

*Note:* Details on how to use crowdin can be found on the [Crowdin Administration](/Crowdin_Administration "Crowdin Administration") page.

## Translating external workbenches

Visit [Translating an external workbench](/Translating_an_external_workbench "Translating an external workbench").

## FreeCAD Preferences for Translators

Starting with FreeCAD 0.20, the following variables can be manually added to the BaseApp/Preferences/General section of the user.cfg file to assist with the development of new translations:

**AdditionalLanguageDomainEntries** - to add entirely new languages to FreeCAD that are not currently supported by the source code, you can use this user preference to add to the list of available languages. The format of the languages is "Language Name"="code"; for example:

```
<FCText Name="AdditionalLanguageDomainEntries">"Esperanto"="eo";"French"="fr";</FCText>

```

**AdditionalTranslationsDirectory** - add an additional directory for FreeCAD to search for \*.qm files. This location will take precedence over $userAppDataDir/translations and $resourceDir/translations. For example:

```
<FCText Name="AdditionalTranslationsDirectory">C:/Users/FreeCADUser/TestTranslations</FCText>

```

## Tranducere FreeCAD wiki

Acest wiki găzduiește o multitudine de conținuturi, majoritatea cărora construiesc manualul. Puteți căuta documentația pornind de la [Main Page](/Main_Page "Main Page"), or have a look at the User's manual [Online Help Toc](/Online_Help_Toc "Online Help Toc").

Pentru a traduce în wiki, trebuie să aveți permisiunea [Cum pot obține permisiunea de a edita pe wiki?](/FAQ#How_can_I_get_edit_permission_on_the_wiki? "FAQ").

Ar trebui să aveți, de asemenea, suficiente cunoștințe despre marcajul wiki și să urmați liniile generale de orientare descrise în [WikiPages](/WikiPages "WikiPages").

### Mediawiki Translation Extension

Când wiki-ul s-a mutat de la SourceForge,  [Yorik](/User:Yorik "User:Yorik") a instalat extensia de traducere a [MediaWiki's Translation extension](http://www.mediawiki.org/wiki/Help:Extension:Translate) care facilitează traducerea paginilor. Avantajele extensiei de traducere sunt că titlul paginii poate fi acum tradus, se ține evidența traducerilor, se notifică dacă pagina inițială a fost actualizată și se mențin traducerile sincronizate cu pagina originală în limba engleză.

Instrumentul este documentat în [Help:Extension:Translate](http://www.mediawiki.org/wiki/Help:Extension:Translate), și este partea a [MediaWiki Language Extension Bundle](http://www.mediawiki.org/wiki/MediaWiki_Language_Extension_Bundle).

Pentru a începe rapid să pregătiți o pagină pentru traducere, citiți textul[Page translation example](http://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example). Essentially, a pair of

```
<translate> ... </translate>

```

etichetele trebuie să înconjoară întreaga pagină pentru a activa sistemul de traducere, iar pagina trebuie marcată pentru traducere.

Pentru a vedea un exemplu de funcționare a instrumentului de traducere odată ce plugin-ul de traducere este activat pe o pagină, accdesați [Main Page](/Main_Page "Main Page").Veți vedea o bară de limbă generată automat în partea de sus. Faceți clic pe [Deutsch](/Main_Page/de "Main Page/de") (germană), vă va duce la [Main Page/de](/Main_Page/de "Main Page/de"). În dreptul titlului, puteți citi "Această pagină este o versiune tradusă a Paginii Principale a paginii și traducerea este XX% completă", XX fiind procentul efectiv al traducerii. Faceți clic pe "Traduceți" în partea de sus a paginii pentru a porni utilitarul de traducere pentru a actualiza, corecta și revizui traducerea existentă.

Dacă mergeți la [Main Page/de](/Main_Page/de "Main Page/de"), veți observa că nu mai puteți edita direct pagina făcând clic pe etichetele [Editare], iar linkul de sus "Editare" a fost înlocuit cu linkul "Traduceți" care deschide utilitarul de traducere.

Când se adaugă conținut nou, pagina de engleză trebuie creată mai întâi, apoi tradusă în altă limbă. Dacă cineva dorește să schimbe sau să adauge conținut într-o pagină, pagina în limba Engleză ar trebui să fie prima modificată.

Dacă nu sunteți siguri cum să continuați cu traducerile, nu ezitați să cereți ajutor în subforumul Develpment/Wiki sau în subforumuol specific al limbii în [FreeCAD forum](http://forum.freecadweb.org).

### Note Importante

Fiecare utilizator wiki care are permisiuni "Editor" este capabil să lanseze utilitatea de traducere și să scrie, să salveze și să revizuiască traducerile.

Cu toate acestea, numai utilizatorii cu permisiuni "Administrator" pot marca paginile pentru traducere. O pagină care nu este marcată pentru traducere nu va utiliza extensia de traducere și nu va fi sincronizată corect cu informațiile din limba engleză.

Bara laterală din stânga este, de asemenea, translatabilă, dar numai administratorii pot modifica acest element al site-ului. Urmați instrucțiunile dedicate din pagina[Localisation Sidebar](/Localisation_Sidebar "Localisation Sidebar") .

Prima dată când comutați o pagină în noul sistem de traducere, aceasta își pierde toate vechile traduceri "manuale". Pentru a recupera o traducere, ar trebui să salvați o copie offline a vechiului text înainte de comutatore. Apoi puteți utiliza acest vechi text tradus pentru a completa unitățile de traducere în noul sistem. De asemenea, puteți deschide o versiune anterioară din istoric și puteți obține vechiul text în acest fel. Acest lucru trebuie făcut pentru fiecare limbă care a avut o pagină tradusă.

## Traducerea documentației FreeCAD

As per general consensus, the reference page in the wiki is the English page, which should be created first. If you want to change or add content to a page, you should do it to the English page first, and only once the update is completed, port the modification to the translated page.

### Instrucțiuni pentru Vechile traduceri

Aceste instrucțiuni sunt doar pentru istoricul istoric. Traducerile ar trebui să utilizeze noul sistem cu extensia [#Translation extension](#Translation_extension)
descrisă mai sus.

|  |
| --- |
| Deci, primul pas este **să verificați dacă traducerea manuală a fost deja pornită pentru limba dvs.**  (vedeți în bara laterală stângă, sub "manual").   Dacă nu, mergeți la [forum](http://forum.freecadweb.org/) și spuneți că doriți să începeți o nouă traducere, vom crea setările de bază pentru limba în care doriți să lucrați.   Trebuie apoi să obțineți  [gain wiki permission edit](/FAQ#_How_can_I_get_edit_permission_on_the_wiki.3F "FAQ").   Dacă limba dvs. este deja listată, vedeți în ce pagini încă lipsește o traducere (acestea vor fi listate în roșu). Tehnica este simplă: **intrați într-o pagină roșie și copiați / inserați conținutul paginii engleză corespunzătoare și începeți să traduceți**.  Nu uitați să includeți toate etichetele și șabloanele din pagina engleză originală. Unele dintre aceste șabloane vor avea un echivalent în limba dvs. (de exemplu, există un șablon French Docnav numit Docnav/fr). Ar trebui să utilizați un **slash și codul limbii dvs**  în toate link-urile. Uitați-vă la alte pagini deja traduse pentru a vedea cum au făcut-o.   Adăugați un slash și codul de limbă în categorii, cum ar fi [[Category: Documentation Developer / fr]]   Și dacă nu sunteți sigur, mergeți la forumuri și cereți-le oamenilor să verifice ceea ce ați făcut și să vă spun dacă este corect sau nu.   Patru șabloane sunt utilizate frecvent în paginile manuale. Aceste 4 șabloane au versiuni localizate (Template: Docnav/fr, Template:fr, etc ...)   * [Template:GuiCommand](/Template:GuiCommand "Template:GuiCommand"): este blocul de informații Gui Command în partea dreaptă sus a documentației de comandă. * [Template: Docnav](/Template:Docnav "Template:Docnav"): este bara de navigare din partea de jos a paginilor, care afișează paginile anterioare și următoare.   **Pagina de numire a Convenției**   Vă rugăm să rețineți că, datorită limitărilor din implementarea Sourceforge a motorului MediaWiki, solicităm ca toate paginile dvs. să păstreze numele original al omologului său, adăugând un slash și codul dvs. de limbă. De exemplu, pagina tradusă pentru About FreeCAD ar trebui să fie Despre Freecad/es pentru spaniolă, Despre FreeCAD/pl pentru poloneză, etc. Motivul este simplu: pentru ca dacă traducătorii să dispară, administratorii wiki, care nu vorbesc toate limbile, vor ști ce sunt aceste pagini. Acest lucru va facilita întreținerea și va evita paginile pierdute.   Dacă doriți ca șablonul Docnav să afișeze pagini legate în limba dvs., puteți utiliza **paginile de redirecționare** . Ele sunt linkuri rapide la pagina actuală. Iată un exemplu cu pagina franceză Despre FreeCAD.   * Pagina About FreeCAD/fr este pagina cu conținut * Pagina À propos de FreeCAD conține acest cod:  ``` #REDIRECT  [[About FreeCAD/fr]]   ```  * În pagina About FreeCAD/fr, codul Docnav va arăta astfel:  ```  {{docnav/fr|Bienvenue sur l'aide en ligne|Fonctionnalités}}  ```   Pagina "Bienvenue sur l'aide en ligne" se redirecționează către pagina Online Help Startpage/fr, iar pagina "Fonctionalités" redirecționează către Feature list/fr. |

## Traduceți site-ul FreeCAD

Traducerea site-ului FreeCAD se face acum prin intermediul
[Crowdin](https://crowdin.com/translate/freecad/561/en-en). Fișierul este denumit **homepage.po**.

Translation of the FreeCAD website is now done through [Crowdin](https://crowdin.com/translate/freecad/561/en-en). The file is named homepage.po.

## Dezvoltare - Cum se adaugă Localizarea

Această secțiune este destinată dezvoltatorilor care doresc să adauge localizare codului lor.

This section is for developers who want to add localisation to their code.

### Pregătirea modulelor FreeCAD / master pentru traducere

Acestea sunt părțile la procesul de traducere a FreeCAD:

* extrageți șiruri de text din codul sursă în fișiere \*.ts
* încărcați fișierele .ts în [FreeCAD Crowdin](http://crowdin.net/project/freecad).
* traducerea șirurilor în Crowdin
* extrage fișiere modificate/noi \*.ts de la Crowdin
* convertește fișierele \*.ts în fișiere \*.qm și actualizează fișierul \*.qrc al fiecărui modul
* Actualizați masterul FreeCAD

These are the parts to the FreeCAD translation process:

* extract text strings from source code into \*.ts files
* load \*.ts files into [FreeCAD Crowdin](http://crowdin.net/project/freecad).
* translation of strings within Crowdin
* extract modified/new \*.ts files from Crowdin
* convert \*.ts files into \*.qm files and update each module's \*.qrc file
* update FreeCAD master

Toți pașii de mai sus sunt realizați prin "scripturile de traducere", care sunt gestionate periodic de un administrator.

Pregătirea modulului dvs. pentru traducere este destul de ușoară. În primul rând, trebuie să vă asigurați că aveți un director de "traduceri" în MyModule / Gui / Resources. Apoi deschideți o fereastră terminală (sau echivalent Windows / OSX) în directorul "traduceri" și introduceți următoarea comandă:

```
lupdate -ts myModule.ts

```

Aceasta creează un fișier de traducere gol. Odată ce acest lucru este făcut, trebuie să vă asigurați că scripturile de traducere sunt actualizate ca în acesta [pull request](https://github.com/FreeCAD/FreeCAD/pull/810).

Totul după acest lucru este automat în ceea ce privește un dezvoltator. Administratorul va extrage șirurile de text, traducătorii îi vor traduce, apoi administratorul va extrage traducerile și va actualiza FreeCAD / master.

### Pregătirea modulului de la o terță parte sau a unei macro pentru traducere

Modulele sau macro-urile de la terțe părți sunt traduse în aceeași manieră, cu excepția faptului că trebuie să faceți o parte din munca dumneavoastră.
Această adresă [forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=3&t=25180) descrie detaliile.

3rd party modules or macros are translated in much the same fashion, except that you must do some of the work yourself.
This [forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=3&t=25180) describes the details.

Update: see [Translating an external workbench](/Translating_an_external_workbench "Translating an external workbench")

## Automatizarea actualizărilor traducerii Crowdin

În prezent, administratorii FreeCAD utilizează API-ul Crowdin prin [Crowdin Scripts](/Crowdin_Scripts "Crowdin Scripts") pentru a trage și împinge traducerile în Crowdin și înapoi la repo Github. API-ul Crowdin oferă administratorilor FreeCAD capacitatea de a automatiza aspectele fluxului de lucru al proiectului, pentru mai multe informații, consultați documentația [Crowdin API](https://support.crowdin.com/api/api-integration-setup/).

Currently FreeCAD maintainers use the Crowdin API via [Crowdin Scripts](/Crowdin_Scripts "Crowdin Scripts") to pull and push translations in to Crowdin and back in to the Github repo. The Crowdin API gives FreeCAD maintainers the ability to automate aspects of the project's translation workflow, for more info refer to the [Crowdin API documentation](https://support.crowdin.com/api/api-integration-setup/).

## Related Pages

* [Crowdin Administration](/Crowdin_Administration "Crowdin Administration")
* [Crowdin Scripts](/Crowdin_Scripts "Crowdin Scripts")

* [Crowdin Administration](/Crowdin_Administration "Crowdin Administration")
* [Crowdin Scripts](/Crowdin_Scripts "Crowdin Scripts")

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To get a dictionary with the languages the FreeCAD interface supports, use the `supportedLocales` method of the `FreeCADGui` module.

```
locales = FreeCADGui.supportedLocales()

```

After execution `locales` will contain:

```
{'English': 'en', 'Afrikaans': 'af', 'Arabic': 'ar', 'Basque': 'eu', 'Catalan': 'ca', 'Chinese Simplified': 'zh-CN', 'Chinese Traditional': 'zh-TW', 'Croatian': 'hr', 'Czech': 'cs', 'Dutch': 'nl', 'Filipino': 'fil', 'Finnish': 'fi', 'French': 'fr', 'Galician': 'gl', 'German': 'de', 'Hungarian': 'hu', 'Indonesian': 'id', 'Italian': 'it', 'Japanese': 'ja', 'Kabyle': 'kab', 'Korean': 'ko', 'Lithuanian': 'lt', 'Norwegian': 'no', 'Polish': 'pl', 'Portuguese': 'pt-PT', 'Portuguese, Brazilian': 'pt-BR', 'Romanian': 'ro', 'Russian': 'ru', 'Slovak': 'sk', 'Slovenian': 'sl', 'Spanish': 'es-ES', 'Swedish': 'sv-SE', 'Turkish': 'tr', 'Ukrainian': 'uk', 'Valencian': 'val-ES', 'Vietnamese': 'vi'}

```

To get the current interface language use the `getLocale` method of the same module:

```
locale = FreeCADGui.getLocale()

```

If the current language is English `locale` will contain:

```
'English'

```

To get the corresponding [language code](https://support.crowdin.com/api/language-codes/) you can use use:

```
locale = FreeCADGui.supportedLocales()[Gui.getLocale()]

```

If the current language is English the result will be:

```
'en'

```

To set the current interface language use the `setLocale` method of the same module. You can specify the language or the language code:

```
FreeCADGui.setLocale('Russian')
FreeCADGui.setLocale('ru')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Localisation/ro&oldid=1494355>"