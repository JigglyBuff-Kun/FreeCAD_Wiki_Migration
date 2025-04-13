---
title: ローカライゼーション
---
## 概要

**ローカライゼーション**とは、ソフトウェアのユーザーインターフェースを多言語で提供するプロセスのことを言います。FreeCADでは、**Edit → Preferences → General**でユーザーインターフェースの言語を設定できます。FreeCADは、[Qt](http://en.wikipedia.org/wiki/Qt_(toolkit) "wikipedia:Qt (toolkit)")の機能を使って多言語対応しています。Unix/Linuxシステム上では、デフォルトはシステムの現在のlocaleになります。

## FreeCADの翻訳を手伝う

FreeCADへの重要な貢献の一つが、（例えばプログラミングスキルがない場合でも）FreeCADの様々な部分（ソースコード、wiki、webサイト、ドキュメンテーション等々）を別の言語に翻訳することです。ここではその方法について説明します。

## FreeCADソースコードの翻訳

FreeCAD utilizes a third party collaborative on-line translation system called [Crowdin](https://crowdin.net).

![](/images/Logo-crowdin.png)

It is proprietary software but free to [FOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software) projects. Below are instructions on how to use it:

* Go to the [FreeCAD translation project page on Crowdin](http://crowdin.net/project/freecad)
* Login by creating a new profile, or using a third-party account (GitHub, GitLab, GMail etc...)
* Click on the language you wish to translate
* Start translating by clicking on the Translate button next to one of the files. For example, FreeCAD.ts contains the text strings for the FreeCAD main GUI.
* You can vote for existing translations, or you can create your own.

If you are actively taking part in translating FreeCAD and want to be informed before next release is ready to be launched, so there is time to review your translation, please subscribe to one of the Crowdin FreeCAD translation teams.

*Note:* Details on how to use crowdin can be found on the [Crowdin Administration](/Crowdin_Administration "Crowdin Administration") page.

## 外部ワークベンチの翻訳

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

## FreeCAD wikiの翻訳

このwikiには様々の情報があり、その多くはマニュアルを構成しています。ドキュメンテーションを[メインページ](/Main_Page/ja "Main Page/ja")から閲覧できます。また、ユーザーマニュアルの[オンラインヘルプ目次](/Online_Help_Toc/ja "Online Help Toc/ja")からも読めます。

Wikiを翻訳するには、編集権限が必要です。 [wikiの編集権限を取得する方法](/Frequently_asked_questions#How_can_I_get_edit_permission_on_the_wiki? "Frequently asked questions")を参照してください。

[Wikiページ](/WikiPages/ja "WikiPages/ja")に記載されているwikiマークアップおよびスタイルガイドラインを十分に理解する必要があります。

### Mediawiki翻訳拡張機能

SourceForgeからwikiを移行した際、[Yorik](/User:Yorik "User:Yorik")は、翻訳ページの管理をするための[MediaWiki翻訳拡張機能](http://www.mediawiki.org/wiki/Help:Extension:Translate/ja)をインストールしました。翻訳拡張機能の利点としては、ページタイトルを翻訳できること、翻訳の履歴を保存できること、元の言語のページが更新された時にそれを通知できること、元の英語版のページとの同期をとれること、などがあります。

翻訳拡張機能は[MediaWiki言語拡張機能バンドル](http://www.mediawiki.org/wiki/MediaWiki_Language_Extension_Bundle/ja)に含まれる機能で、[Help:Extension:Translate](http://www.mediawiki.org/wiki/Help:Extension:Translate/ja)に解説があります。

翻訳を始めるに際しては、まずは[ページ翻訳の例](http://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example/ja)を参照してください。翻訳機能を有効にするためには、以下のようにページ全体をタグで囲む必要があります。

```
<translate> ... </translate>

```

さらに、そのページを翻訳対象として指定する必要があります。

翻訳機能がどのように動作するのかを確認するために、[Main Page（英語）](/Main_Page "Main Page")をアクセスしてみてください。自動的に生成される言語バーが丈夫に表示されているはずです。[日本語](/Main_Page/ja "Main Page/ja")（Japanese）をクリックすると、[Main Page/ja](/Main_Page/ja "Main Page/ja")が表示されます。タイトル「メインページ（in English "Main Page"）の下に、*このページはページ Main Page を「翻訳」したものです。翻訳は XX% 完了しています。*と表示されているはずです。XXは現在の翻訳率です。上部の「翻訳」を押すと、翻訳のためのツールが起動し、翻訳、修正、レビューができます。

[メインページ](/Main_Page/ja "Main Page/ja")に行くと、[編集]タグをクリックして直接ページを編集することはできず、「編集」の代わりに、翻訳ツールを開く「翻訳」リンクが表示されているはずです。

新しいコンテンツを追加するときは、英語版を最初に作り、その後で別の言語に翻訳しなければなりません。もしあるページの内容を修正あるいは追記したい場合、英語版のページの修正を先に行わなければなりません。

翻訳をどう勧めたらいいのかわからないときは、躊躇せず、[FreeCADフォーラム](http://forum.freecadweb.org)の[Development → Wiki subforum](https://forum.freecadweb.org/viewforum.php?f=21)または[言語ごとのフォーラム](https://forum.freecadweb.org/viewforum.php?f=11)で質問してください。

### 重要な注意事項

「Editor」権限を持っているwikiユーザーは、翻訳ツールを起動して、翻訳を作成し、セーブし、査読することができます。

一方、あるページを翻訳対象に指定できるのは「Administrator」権限を持っているユーザーだけです。翻訳対象として指定されていないページは翻訳拡張機能を利用できず、英語版と正しく同期させることができません。

左のサイドバーも翻訳可能ですが、サイトのこの部分の変更は管理者のみが行えます。詳細は[サイドバーのローカライゼーション](/Localisation_Sidebar/ja "Localisation Sidebar/ja")を参照してください。

新しい翻訳システムにページを切り替えると、最初はすべての旧「手動」翻訳が失われます。翻訳を復元するには、切り替え前に旧テキストのオフラインコピーを保存しておく必要があります。その後、この古い翻訳テキストを新しいシステムの翻訳ユニットに入力できます。また、履歴から過去のバージョンを開き、この方法で古いテキストを取得することもできます。これは、翻訳されたページがあったすべての言語で行う必要があります。

### FreeCADドキュメンテーション

前提として、wikiの基準となるページは英語であり、英語のページを最初に作成しなければなりません。もしページの内容を変更したり追加したい場合、最初に英語のページを編集し、更新が完了した後に、変更点を翻訳ページに反映させてください。

### 旧翻訳手順

|  |
| --- |
| These instructions are for historical background only. Translations should use the new system with the [#Mediawiki Translation Extension](#Mediawiki_Translation_Extension) described above. |
| So the first step is to **check if the manual translation has already been started for your language** (look in the left sidebar, under "manual").  If not, head to the [forum](http://forum.freecadweb.org/) and say that you want to start a new translation, we'll create the basic setup for the language you want to work on.  You must then [gain wiki edit permission](/Frequently_asked_questions#How_can_I_get_edit_permission_on_the_wiki.3F "Frequently asked questions").  If your language is already listed, see what pages are still missing a translation (they will be listed in red). The technique is simple: **go into a red page, and copy/paste the contents of the corresponding English page, and start translating**.  Do not forget to include all the tags and templates from the original English page. Some of those templates will have an equivalent in your language (for example, there is a French Docnav template called Docnav/fr). You should use **a slash and your language code** in almost all the links. Look at other already translated pages to see how they did it.  Add a slash and your language code in the categories, like [[Category:Developer Documentation/fr]]   And if you are unsure, head to the forums and ask people to check what you did and tell you if it's right or not.  Four templates are commonly used in manual pages. These 4 templates have localized versions (Template:Docnav/fr, Template:fr, etc...)   * [Template:GuiCommand](/Template:GuiCommand "Template:GuiCommand") : is the Gui Command information block in upper-right of command documentation. * [Template:Docnav](/Template:Docnav "Template:Docnav") : it is the navigation bar at the bottom of the pages, showing previous and next pages. * [Template:Userdocnavi](/Template:Userdocnavi "Template:Userdocnavi") : gives direct links to the main base pages   **Page Naming Convention**   Please take note that, due to limitations in the Sourceforge implementation of the MediaWiki engine, we require that your pages all keep their original English counterpart's name, appending a slash and your language code. For example, the translated page for About FreeCAD should be About Freecad/es for Spanish, About FreeCAD/pl for polish, etc. The reason is simple: so that if translators go away, the wiki's administrators, who do not speak all languages, will know what these pages are for. This will facilitate maintenance and avoid lost pages.  If you want the Docnav template to show linked pages in your language, you can use **redirect pages**. They are basically shortcut links to the actual page. Here is an example with the French page for About FreeCAD.   * The page About FreeCAD/fr is the page with content * The page À propos de FreeCAD contains this code:  ``` #REDIRECT [[About_FreeCAD/fr]]  ```  * In the About FreeCAD/fr page, the Docnav code will look like this:  ``` {{docnav/fr|[[Online_Help_Startpage/fr|Bienvenue dans l'aide en ligne de FreeCAD]]|[[Feature_list/fr|Fonctionnalités]]}}  ```   The page "Bienvenue dans l'aide en ligne de FreeCAD" redirects to Online\_Help\_Startpage/fr, and the page "Fonctionnalités" redirects to Feature\_list/fr. |

## FreeCADウェブサイトの翻訳

FreeCADウェブサイトの翻訳は[Crowdin](https://crowdin.com/translate/freecad/561/en-en)で行うようになりました。ファイル名はhomepage.poです。

## Development - How to Add Localisation

This section is for developers who want to add localisation to their code.

### Preparing your FreeCAD/master modules for translation

These are the parts to the FreeCAD translation process:

* extract text strings from source code into \*.ts files
* load \*.ts files into [FreeCAD Crowdin](http://crowdin.net/project/freecad).
* translation of strings within Crowdin
* extract modified/new \*.ts files from Crowdin
* convert \*.ts files into \*.qm files and update each module's \*.qrc file
* update FreeCAD master

All of the above steps are performed by the "translation scripts" which are run by an administrator periodically.

Preparing your module for translation is quite easy. First, you need to ensure that you have a "translations" directory in myModule/Gui/Resources. Then open a terminal window (or Windows/OSX equivalent) in your "translations" directory and enter the following command:

```
lupdate -ts myModule.ts

```

This creates an empty translation file. Once this is done, you need to ensure that the translation scripts are updated as in this [pull request](https://github.com/FreeCAD/FreeCAD/pull/810).

Everything after this is automatic as far as a developer is concerned. The administrator will extract the text strings, the translators will translate them, then the administrator will extract the translations and update FreeCAD/master.

### Preparing your 3rd party module or macro for translation

3rd party modules or macros are translated in much the same fashion, except that you must do some of the work yourself.
This [forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=3&t=25180) describes the details.

Update: see [Translating an external workbench](/Translating_an_external_workbench "Translating an external workbench")

## Automating Crowdin Translation Updates

Currently FreeCAD maintainers use the Crowdin API via [Crowdin Scripts](/Crowdin_Scripts "Crowdin Scripts") to pull and push translations in to Crowdin and back in to the Github repo. The Crowdin API gives FreeCAD maintainers the ability to automate aspects of the project's translation workflow, for more info refer to the [Crowdin API documentation](https://support.crowdin.com/api/api-integration-setup/).

## Related Pages

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Localisation/ja&oldid=1540353>"