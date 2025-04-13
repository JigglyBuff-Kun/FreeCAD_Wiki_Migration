---
title: PaginasWiki
---
Esta página é uma extensão da página [Help:Editing](/Special:MyLanguage/Help:Editing "Special:MyLanguage/Help:Editing") e dá orientações comuns para escrever e atualizar a documentação do wiki FreeCAD. Resume várias discussões e sessões de troca de ideias.

## Antes de começar

* Esta documentação wiki é baseada no [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), o mesmo ‘software’ que alimenta a [Wikipédia](https://pt.wikipedia.org/). Se você já contribuiu para a Wikipédia, a edição de páginas wiki FreeCAD deve ser fácil.
* Ao contrário da Wikipedia, o wiki FreeCAD está protegido contra ‘spam’. É necessário solicitar uma conta [no forum](http://forum.freecadweb.org/viewtopic.php?f=21&t=6830).
* Se nunca utilizou ‘software’ wiki antes, por favor leia [Help:Editing](/Special:MyLanguage/Help:Editing "Special:MyLanguage/Help:Editing") para se familiarizar com a marcação que é utilizada.
* Para o uso avançado do ‘software’ wiki, ver [MediaWiki Ajuda:Conteúdo](https://www.mediawiki.org/wiki/Help:Contents/pt-br). Nem todas as características do MediaWiki estão disponíveis neste wiki FreeCAD, mas muitas estão.
* Gostamos de manter a documentação de fácil leitura, por isso evite utilizar características complexas. Mantenha-a simples.
* Use uma sandbox para testar o seu código, por exemplo, [FreeCADDocu:Sandbox](/FreeCADDocu:Sandbox "FreeCADDocu:Sandbox") ou uma página específica com o seu nome [Sandbox:Yourname](/index.php?title=Sandbox:Yourname&action=edit&redlink=1 "Sandbox:Yourname (page does not exist)").
* Por favor, esteja atento às traduções. O wiki FreeCAD utiliza suporte de tradução automática para fornecer páginas em diversas línguas. Para cada página podem existir várias versões linguísticas. Em muitas páginas vê-se etiquetas como `<translate>...</translate>` e muitas etiquetas individuais como `<!--T:8-->`. Estas últimas são criadas pelo sistema de tradução. Elas ligam os títulos e parágrafos às suas versões traduzidas. Não devem ser alterados, já que isso destruiria essas ligações. No entanto, não há problema em mover parágrafos ou alterar a redação, desde que as etiquetas permaneçam com eles. Se remover um título ou um parágrafo, deve também remover a etiqueta correspondente. Tenha em conta que as alterações nos títulos e parágrafos existentes influenciam as traduções existentes. As suas modificações devem valer a pena. Não se preocupe quando adicionar novo material porque o sistema irá adicionar novas etiquetas automaticamente após as suas edições. Para mais informações ver [Localisation](/Special:MyLanguage/Localisation "Special:MyLanguage/Localisation") e a página original [Help:Extensão:Translate/Exemplo de tradução de página](https://www.mediawiki.org/wiki/Help:Extension:Translate/Page_translation_example/pt-br).

## Orientações gerais

### Descrições concisas

Ao descrever o FreeCAD tente ser conciso e direto e evite a repetição. Descrever o que o FreeCAD "faz", e não o que o FreeCAD "não faz". Evite também expressões coloquiais. Utilizar "alguns" quando se lida com um número indeterminado, ou especificar a quantidade correta.

Descrição ruim
:   [PartDesign Workbench](/Special:MyLanguage/PartDesign_Workbench "Special:MyLanguage/PartDesign Workbench") a PartDesign é uma bancada de trabalho para a concepção de peças que visa fornecer ferramentas para a modelação de peças sólidas complexas.

Boa descrição
:   [PartDesign Workbench](/Special:MyLanguage/PartDesign_Workbench "Special:MyLanguage/PartDesign Workbench") visa fornecer ferramentas para modelação de peças sólidas complexas.

### Informação centralizada

Evitar duplicar informações. Insira a informação numa nova página, e crie um link para esta, e utilize o quando precisar reutilizar informação.

Não utilizar a tranclusão de páginas ([Help:Editing#Modelos e paginas Transcluidas](/Special:MyLanguage/Help:Editing#Templates_and_transcluding_pages "Special:MyLanguage/Help:Editing")), visto que isto torna o wiki difícil de traduzir. Utilize apenas os modelos descritos abaixo em <#Modelos>.

### Estilo

Os modelos são usados para estilizar as páginas de ajuda. Eles dão à documentação uma aparência uniforme. Há um modelo para comandos de 'menu', Arquivo → Salvar, um modelo para mostrar as teclas a serem pressionadas, Shift, para mostrar um valor booleano, `true`, etc. Familiarize-se com a seção <#Modelos> antes de escrever páginas de ajuda.

### Sinalizadores temporários

Se estiver a trabalho numa página grande é aconselhável marcar a página como em construção ou como inacabada. Isto assegura que os administradores do wiki não marquem a sua página como pronta para tradução enquanto ainda está a alterá-la.

Para sinalizar uma página, adicionar `{{Page in progress}}` ou `{{UnfinishedDocu}}` na primeira linha. Com `{{UnfinishedDocu}}` convidará outros a juntarem-se a ti para terminar a página, enquanto `{{Page in progress}}` indica que tu realizarás o trabalho e que outros devem esperar o autor concluir.

Uma vez terminado o trabalho, por favor não se esqueça de retirar os sinalizadores!

## Exemplos

Para se familiarizar rapidamente com a estrutura e estilo do wiki FreeCAD veja a página modelo: [Modelo GuiCommand](/Special:MyLanguage/GuiCommand_model "Special:MyLanguage/GuiCommand model").

## Estrutura

A [Central do Usuário](/Special:MyLanguage/User_hub "Special:MyLanguage/User hub") fornece um [Índice 'On-line' de Ajuda](/Special:MyLanguage/Online_Help_Toc "Special:MyLanguage/Online Help Toc"). Este é usado como referência principal para compilar automaticamente a ajuda 'offline' que se encontra no FreeCAD, bem como a documentação PDF 'offline'.

O [Modelo:Docnav](/Template:Docnav "Template:Docnav") é utilizado para ligar páginas sequencialmente, seguindo a estrutura do [Índice 'On-line' de Ajuda](/Special:MyLanguage/Online_Help_Toc "Special:MyLanguage/Online Help Toc"). Veja <#Modelos> para uma lista de todos os Modelos.

### Nomes de página

Os nomes das páginas devem ser curtos, e eles devem utilizar o estilo capitular: todas as palavras, exceto a primeira e os nomes próprios, tem de estar em caixa baixa. Este é o [estilo adotado pela Wikipédia](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Capital_letters#Headings,_headers,_and_captions) para seus artigos.

Nome de página ruim
:   Construção de Aviões da AeroCompany

Bom nome de página
:   Construção de aviões da AeroCompany

Os nomes das páginas de bancada de trabalho de alto nível devem ter este formato: em inglês `XYZ Workbench` em ‎português do Brasil `Bancada de trabalho XYZ` onde XYZ é o nome da bancada de trabalho, por exemplo, [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"), [Bancada de trabalho PartDesign](/Special:MyLanguage/PartDesign_Workbench "Special:MyLanguage/PartDesign Workbench"). E os nomes das páginas que descrevem os comandos (ou ferramentas) pertencentes a um bancada de trabalho devem ter este formato: `XYZ Comando` por exemplo, [PartDesign Pad](/PartDesign_Pad/pt-br "PartDesign Pad/pt-br"). Note que deve-se usar o nome do comando como ele aparece no código fonte.

### Títulos

Tal como os nomes das páginas, os títulos dos parágrafos devem ser curtos e utilizar estilo capitular. Não deve utilizar H1 no título (`= Título =`) na sua marcação wiki, visto que o título da página é automaticamente adicionado como título principal `H1`.

### Links

Você deve usar o nome do link original para links sempre que possível. Isso esclarece a página referenciada na documentação impressa ou ‘offline’. Evite palavras sem sentido para o link.

Link ruim

:   Para obter mais informações sobre como desenhar objetos 2D, clique  [aqui](/Draft_Workbench/pt-br "Draft Workbench/pt-br").

Bom link
:   Para obter mais informações sobre o desenho de objetos 2D, consulte a  [Bancada de trabalho Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br").

O melhor formato para um link é:

`[[Name_of_page|name of page]]`

Traduzido:

`[[Name_of_page/pt-br|nome da pagina]]`

Note que o que vem antes de `|`, é o link real, isto é importante. Se o nome da sua página for `Nome_da_página`, o link falhará se você digitar `Nome_da_Página` (P em maiúsculo). Antes do caractere `|` todos os espaços devem ser substituídos por traço baixo (`_`). Isto é para ajudar os tradutores que utilizam programas de tradução, sem os sublinhados o link seria traduzido pelo ‘software’, o que é indesejável.

Para criar um link para um determinado parágrafo, adicione uma cerquilha `#` e o títulos a referenciar. Exemplo:

`[[WikiPages#Name|WikiPages]]`

Traduzido:

`[[WikiPages/pt-br#Nome|PaginasWiki]]`

Dentro da mesma página, você pode omitir o nome da página. Exemplo:

`[[#Nomes|Nomes]]`

Para criar um link para o topo da página você pode usar:

`</translate>{{Top}}<translate>`

Este link funcionará até mesmo se não houver parágrafo 'Topo' na página. Ele é especialmente útil para páginas longas, pois permite que o usuário volte rapidamente à lista de conteúdo. Você pode colocá-lo no final de cada parágrafo. Certifique-se de que haja uma linha vazia antes e depois do link.

Image link
:   [![Optional text that is shown when you hover the image](/images/Draft_Wire.svg)](/Draft_Wire "Optional text that is shown when you hover the image ")

To use an image as a link:

`[[Image:Draft_Wire.svg|24px|Optional text that is shown when you hover the image|link=Draft_Wire]]`

Image link + text link
:   ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire")

If you leave out the optional text the link itself will be shown when the image is hovered, which is preferable, and you should also add a text link after the image link:

`[[Image:Draft_Wire.svg|24px|link=Draft_Wire]] [[Draft_Wire|Draft Wire]]`

### Páginas do Workbench

Uma página de bancada de trabalho de alto nível deve começar com:

* Uma descrição de para que serve a bancada de trabalho.
* Uma imagem para ilustrar a descrição.

Consulte [#Captura de tela](#Captura_de_tela) para obter convenções sobre a inclusão de imagens.

### Páginas de comando

As páginas de comando que descrevem as ferramentas da bancada de trabalho não devem ser muito longas, elas devem apenas explicar o que um comando pode e o que não pode fazer, e como usá-lo. Você deve manter as imagens e os exemplos no mínimo possível. Tutoriais podem expandir os detalhes de como usar a ferramenta e fornecer detalhes passo a passo.

Consulte a página [Modelo GuiCommand](/GuiCommand_model/pt-br "GuiCommand model/pt-br") para obter mais detalhes.

### Tutoriais

Um tutorial bem escrito deve ensinar como alcançar determinados resultados práticos rapidamente. Não deve ser muito longo, mas deve incluir instruções e imagens passo-a-passo suficientes para guiar o usuário. Conforme o FreeCAD evolui, os tutoriais podem tornar-se obsoletos, por isso é importante mencionar a versão FreeCAD usada nele, ou necessária para realizar o tutorial.

Para obter exemplos, visite a página [Tutoriais](/Tutorials/pt-br "Tutorials/pt-br").

## Modelos

A estilização das páginas wiki do FreeCAD é conseguida através da utilização de modelos ([Help:Editing#Templates\_and\_transcluding\_pages](/Special:MyLanguage/Help:Editing#Templates_and_transcluding_pages "Special:MyLanguage/Help:Editing")). Garantem um aspecto e uma sensação padronizados em todas as páginas, e também tornam possível reestilizar o wiki. Para consultar a lista completa de modelos definidos, acesse [Todas as páginas com prefixo (Template:)](/Special:PrefixIndex/Template: "Special:PrefixIndex/Template:"). Mas, por favor, utilize apenas os modelos listados nas tabelas abaixo. Apenas em casos muito especiais deverá utilizar diretamente as marcações HTML.

Clique no link do modelo para ver as instruções de utilização de um modelo, e para ver a sua implementação. Os modelos são uma característica poderosa do ‘software’ MediaWiki. Deve ser um usuário wiki experiente se desejar propor adições e modificações aos modelos existentes. Se implementados de forma errada, os modelos dificultam a tradução de páginas para outras línguas, pelo que a sua utilização deve ser limitada à formatação de texto, a transclusão de páginas deve ser evitada. Veja [MediaWiki Help:Predefinições](https://www.mediawiki.org/wiki/Help:Templates/pt-br) para saber mais.

### Modelos simples

Estes modelos aceitam um parâmetro de texto simples, e o formatam com um estilo particular.

| Modelo | Aparência | Descrição |
| --- | --- | --- |
| [Top](/Template:Top "Template:Top") | [Top](#top) | Use it to add a link to the top of the page. |
| [Emphasis](/Template:Emphasis "Template:Emphasis") | *ênfase* | Utilize-o para enfatizar um pedaço do texto. |
| [KEY](/Template:KEY "Template:KEY") | Alt | Utilize-o para indicar a tecla que precisa ser pressionada. |
| [ASCII](/Template:ASCII "Template:ASCII") |  | Utilize-o para indicar uma tecla ascii com uma imagem (.svg) que precisa de ser pressionada. É necessário fornecer o carácter desejado ou o número do código ascii. |
| [Button](/Template:Button "Template:Button") | Cancelar | Utilize-o para indicar um botão na ‘interface’ gráfica do usuário que precisa de ser clicado. |
| [RadioButton](/Template:RadioButton "Template:RadioButton") | Opção | Utilize-o para inserir um botão de opção na ‘interface’ gráfica do usuário que pode de ser  Selecionado ou  Não Selecionado. |
| [CheckBox](/Template:CheckBox "Template:CheckBox") | Opção | Utilize-o para criar uma caixa de verificação na ‘interface’ gráfica do usuário que pode de ser  Checado ou  Não verificado. |
| [SpinBox](/Template:SpinBox "Template:SpinBox") | 1.50 | Utilize-o para inserir um botão giratório na ‘interface’ gráfica do usuário para ele possa ajustar um valor. |
| [ComboBox](/Template:ComboBox "Template:ComboBox") | Menu 1 | Utilize-o para indicar uma caixa de combinação na ‘interface’ gráfica do usuário que precisa de ser modificada. |
| [LineEdit](/Template:LineEdit "Template:LineEdit") | Metal Nickel (Ni) | Use it to indicate a LineEdit in the graphical user interface that needs to be modified. |
| [FALSE](/Template:FALSE "Template:FALSE"), [false](/Template:False "Template:False") | `false`, `false` | Use-o para indicar um valor booleano falso, por exemplo, como uma propriedade no [editor de propriedade](/Property_editor/pt-br "Property editor/pt-br"). Isto é um atalho. Como é um valor, prefira Modelo [Value](/Template:Value "Template:Value"). `false` |
| [TRUE](/Template:TRUE "Template:TRUE"), [true](/Template:True "Template:True") | `true`, `true` | Use-o para indicar um valor booleano verdadeiro, por exemplo, como uma propriedade no [editor de propriedade](/Property_editor/pt-br "Property editor/pt-br"). Isto é um atalho. Como é um valor, prefira Modelo [Value](/Template:Value "Template:Value"). `true` |
| [MenuCommand](/Template:MenuCommand "Template:MenuCommand") | **Arquivo → Salvar** | Utilize-a para indicar a localização de um comando dentro de um determinado menu. |
| [FileName](/Template:FileName "Template:FileName") | Nome do arquivo | Utilize-o para indicar um nome de um arquivo ou diretório. |
| [SystemInput](/Template:SystemInput "Template:SystemInput") | Digite este texto | Use-o para indicar o texto de entrada digitado pelo usuário. |
| [SystemOutput](/Template:SystemOutput "Template:SystemOutput") | Texto de saída | Use-o para indicar a saída de texto do sistema. |
| [Incode](/Template:Incode "Template:Incode") | `import FreeCAD` | Use-o para incluir o código-fonte em linha com uma fonte monoespaçada. Ele deve caber em uma linha. |
| [PropertyView](/Template:PropertyView "Template:PropertyView") | Vista**Cor** | Use-o para indicar uma propriedade de Visualização no [editor de propriedades](/Property_editor/pt-br "Property editor/pt-br"). Exemplos de propriedades de visualização incluem  *Cor da linha*,  *Largura da linha*,  *Cor do ponto*,  *Tamanho do ponto*, etc. |
| [PropertyData](/Template:PropertyData "Template:PropertyData") | Dados**Posição** | Use-o para indicar uma propriedade de Dados no [editor de propriedades](/Property_editor "Property editor"). As propriedades de dados diferem para diferentes tipos de objetos. |
| [Properties Title](/Template:Properties_Title "Template:Properties Title") / [TitleProperty](/Template:TitleProperty "Template:TitleProperty") | Base | Use-o para indicar o título de um grupo de propriedade no [editor de propriedades](/Property_editor "Property editor"). O título não será incluído no índice automático. |
| [Obsolete](/Template:Obsolete "Template:Obsolete") | [obsolete in 0.19](/Release_notes_0.19 "Release notes 0.19") | Use-o para indicar que uma característica se tornou obsoleta na versão FreeCAD especificada. |
| [VersionNoteObsolete](/Template:Obsolete "Template:Obsolete") | [obsolete in 0.19](/Release_notes_0.19 "Release notes 0.19") | Idem (superscript variant). |
| [Version](/Template:Version "Template:Version") | [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18") | Use-o para indicar que uma característica foi introduzida na versão FreeCAD especificada. |
| [VersionNote](/Template:Version "Template:Version") | [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18") | Idem (superscript variant). |
| [VersionMinus](/Template:VersionMinus "Template:VersionMinus") | 0.16 and below | Use-o para indicar que um recurso está disponível na versão FreeCAD especificada e nas versões anteriores. |
| [VersionNoteMinus](/Template:VersionMinus "Template:VersionMinus") | 0.16 and below | Idem (superscript variant). |
| [VersionPlus](/Template:VersionPlus "Template:VersionPlus") | 0.17 and above | Use-o para indicar que um recurso está disponível na versão FreeCAD especificada e nas versões posteriores. |
| [VersionNotePlus](/Template:VersionPlus "Template:VersionPlus") | 0.17 and above | Idem (superscript variant). |
| [ColoredText](/Template:ColoredText "Template:ColoredText") | Texto Colorido | Use este modelo para colorir o fundo, texto, ou fundo e texto. (Pagina [ColoredText](/Template:ColoredText "Template:ColoredText") para mais exemplos) |
| [ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") | Parágrafo Colorido | Use este modelo para colorir o fundo, texto ou fundo e o texto de um parágrafo inteiro. (Página [ColoredParagraph](/Template:ColoredParagraph "Template:ColoredParagraph") para mais exemplos) |

### Modelos complexos

Estes modelos requerem mais parâmetros de entrada, ou produzem um bloco de texto com um formato particular.

| Modelo | Aparência | Descrição |
| --- | --- | --- |
| [Prettytable](/Template:Prettytable "Template:Prettytable") | Esta tabela | Use-o para formatar tabelas como esta. Propriedades adicionais da tabela podem ser adicionadas. |
| [Caption](/Template:Caption "Template:Caption") | Algumas legendas para uma imagem | Use-o para adicionar uma explicação abaixo de uma imagem. Ela pode ser alinhada à esquerda ou alinhada ao centro. |
| [Clear](/Template:Clear "Template:Clear") |  | Use-o para limpar colunas. Siga a definição do modelo para uma explicação detalhada. Ele é freqüentemente usado para impedir o fluxo de texto ao lado de imagens não relacionadas. |
| [Code](/Template:Code "Template:Code") | ``` import FreeCAD  ``` | Use-o para incluir exemplos de códigos de várias linhas com uma fonte monoespaçada. O idioma padrão é Python, mas outros idiomas podem ser especificados. [Pythondeve](/Python/pt-br "Python/pt-br") aderir às recomendações gerais estabelecidas pelo [PEP8: Guia de estilo para código Python](https://www.python.org/dev/peps/pep-0008/). Em particular, os parênteses devem seguir imediatamente o nome da função, e um espaço deve seguir uma vírgula. Isto torna o código mais legível |
| [CodeDownload](/Template:CodeDownload "Template:CodeDownload") | [Some label](https://wiki.freecad.org/Main_Page) | Use it to create a link on a [macro](/Macros "Macros") page. |
| [Codeextralink](/Template:Codeextralink "Template:Codeextralink") | Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). *Link for optional manual installation: [Macro](https://wiki.freecad.org/Main_Page)*  ```   # This code is copied instead of the original macro code # to guide the user to the online download page. # Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki # or if the RAW code URL is somewhere else in the wiki.  from PySide import QtGui, QtCore  diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,     "Information",     "This macro must be downloaded from this link\n"     "\n"     "https://wiki.freecad.org/Main_Page" + "\n"     "\n"     "Quit this window to access the download page")  diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint) diag.setWindowModality(QtCore.Qt.ApplicationModal) diag.exec_()  import webbrowser  webbrowser.open("https://wiki.freecad.org/Main_Page")  ```  <class="rawcodeurl"><a href="<https://wiki.freecad.org/Main_Page>">raw code</a> | Use it if the code of a [macro](/Macros "Macros") is too large to be hosted on the Wiki. The code can then be hosted somewhere else, and the raw link to it specified with this template. The [Addon Manager](/Std_AddonMgr "Std AddonMgr") will use this link. |
| [Fake heading](/Template:Fake_heading "Template:Fake heading") | Titulo | Use-o para criar um título que não será automaticamente incluído no índice. |
| [GuiCommand](/Template:GuiCommand "Template:GuiCommand") | Veja [Modelo GuiCommand](/GuiCommand_model/pt-br "GuiCommand model/pt-br") | Use-o para criar uma caixa com informações úteis para documentar os comandos (ferramentas) da bancada de trabalho. |
| [TutorialInfo](/Template:TutorialInfo "Template:TutorialInfo") | Veja, por exemplo,[Tutorial básico de modelagem](/Basic_modeling_tutorial/pt-br "Basic modeling tutorial/pt-br") | Use-o para criar uma caixa com informações úteis para documentar [tutoriais](/Tutorials "Tutorials"). |
| [Macro](/Template:Macro "Template:Macro") | Veja, por exemplo, [Macro FlattenWire](/Macro_FlattenWire "Macro FlattenWire") | Utilize-o para criar uma caixa com informações úteis para documentar [macros](/Macros "Macros"). |
| [Docnav](/Template:Docnav "Template:Docnav") |  | Use-o para criar uma barra com as palavras "próximo", "anterior" e "índice", e os links apropriados, o que é útil para colocar as páginas em uma determinada sequência. |
| [VeryImportantMessage](/Template:VeryImportantMessage "Template:VeryImportantMessage") | :::caution Mensagem importante ::: | Use-o para criar uma caixa destacada com uma mensagem muito importante. Use com parcimônia, apenas para indicar problemas maiores na funcionalidade do software, descontinuação de ferramentas e similares. |
| [Page in progress](/Template:Page_in_progress "Template:Page in progress") | :::caution This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days. ::: | Use isto para páginas que ainda estão em andamento ou que estão sendo retrabalhadas no momento. Não se esqueça de remover isto quando a página estiver pronta. |
| [UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") | :::caution This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute. ::: | Use-o para criar uma caixa destacada indicando uma página de documentação inacabada. |
| [Softredirect](/Template:Softredirect "Template:Softredirect") |  | Use-o ao invés do redirecionamento normal, quando estiver redirecionando para uma página especial (como Mídia: ou Categoria:), casos em que o redirecionamento normal é desativado. |
| [Quote](/Template:Quote "Template:Quote") | Cry "Havoc" and let slip the dogs of war.  —William Shakespeare, *Julius Caesar*, act III, scene I | Use-o para criar uma caixa de texto com uma citação e referência literal. |
| [Userdocnavi](/Template:Userdocnavi "Template:Userdocnavi"), [Powerdocnavi](/Template:Powerdocnavi "Template:Powerdocnavi") |  | Use-os para criar caixas de navegação para a documentação do usuário, a documentação do usuário avançado e a documentação do desenvolvedor. Isto permite saltar rapidamente entre as diferentes seções da documentação. Eles também colocam a página correspondente na categoria apropriada. |

## Artes gráficas

Imagens e capturas de tela são necessárias para produzir uma documentação completa do FreeCAD. Elas são particularmente úteis para ilustrar exemplos e tutoriais. As imagens devem ser mostradas em seu tamanho original, para que apresentem detalhes suficientes e sejam legíveis se incluírem texto. As imagens [Bitmap](/Bitmap "Bitmap") não devem ser redimensionadas.

Evite imagens animadas (GIF) nas páginas de ajuda geral. Animações e vídeos devem ser reservados para tutoriais não destinados a serem usados como documentação PDF offline.

As imagens podem ser carregadas através da página [Enviar arquivo](/Special:Upload/pt-br "Special:Upload/pt-br").

### Nome

Dê nomes significativos às suas imagens. Se você tiver uma imagem que mostre as características de um determinado comando, você deve usar o nome desse comando com `_example` no final. Por exemplo, para o comando [Draft Offset](/Draft_Offset/pt-br "Draft Offset/pt-br"), a imagem deve ser chamada `Draft_Offset_example.jpg`.

### Captura de tela

Os tamanhos recomendados para as capturas de tela são:

* Nativo 400x200 (ou largura=400 e altura<=200), para páginas de[referência de comando](/GuiCommand_model/pt-br "GuiCommand model/pt-br"), para permitir que a imagem caiba na parte esquerda da página, e para outras fotos padrão.
* Nativo 600x400 (ou largura=600 e altura<=400), para páginas de[referência de comando](/GuiCommand_model "GuiCommand model"), quando você realmente precisa de uma imagem maior, e ainda permitir que a imagem caiba na parte esquerda da página, e para outras fotos padrão.
* Nativo 1024x768 (ou largura=1024 e altura<=768), apenas para imagens em tela cheia.
* Tamanhos menores são possíveis ao mostrar detalhes.
* Evite imagens com resoluções maiores, pois elas não serão muito portáteis para outros tipos de displays ou para a documentação PDF impressa.

Você não deve depender de uma configuração personalizada de sua área de trabalho ou sistema operacional quando criar capturas de tela e deve usar os padrões gráficos da plataforma do FreeCAD sempre que possível.

Para criar uma captura de tela você pode usar as opções fornecidas por seu sistema operacional, ou uma dessas macros: ![](/images/Snip.png) [Macro de Corte](/Macro_Snip/pt-br "Macro Snip/pt-br") e ![](/images/Macro_Screen_Wiki.png) [Macro de tela Wiki](/Macro_Screen_Wiki/pt-br "Macro Screen Wiki/pt-br").

### Texto

Para facilitar a tradução da documentação, tente evitar capturas de tela que contenham textos. Se você não puder evitar isto, considere tirar fotos separadas da ‘interface’ e da [vista 3D](/3D_view/pt-br "3D view/pt-br"). A imagem da visualização 3D pode ser reutilizada em cada tradução, enquanto um tradutor pode tirar uma captura de tela da ‘interface’ localizada, se necessário.

### Ícones e imagens

Consulte a página [Objetos gráficos](/Artwork "Artwork") para todas as ilustrações e ícones que foram criados para o FreeCAD, e que também podem ser utilizados em páginas de documentação. Se quiser contribuir com ícones, favor ler as [Diretrizes para trabalhos gráficos](/Artwork_Guidelines "Artwork Guidelines").

## Traduções

Por consenso, a página de referência no wiki é a página em inglês, que deve ser criada primeiro. Se quiser alterar ou adicionar conteúdo a uma página, deve fazê-lo primeiro à página inglesa, e só após concluída a atualização, deve ser feita a modificação na página traduzida.

O wiki FreeCAD utiliza uma extensão de tradução que permite gerir traduções entre páginas mais facilmente; para mais detalhes, ver [Localização Traduzir a wiki do FreeCAD](/Special:MyLanguage/Localisation#Translate_the_FreeCAD_wiki "Special:MyLanguage/Localisation").

Outros recursos úteis são:

* [código de idioma ISO](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) para identificar o código de duas letras para uma linguagem específica para a qual se pretende traduzir.
* [Google Tradutor](http://translate.google.com/) para ajuda com traduções.
* [Deepl Tradutor](https://www.deepl.com/translator) para ajuda com traduções.

## Algumas dicas para tradutores

### Traduzir GuiCommand

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

Traduzido:

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

### Traduzir navi

```
{{FEM_Tools_navi}}

```

Traduzido:

```
{{FEM_Tools_navi/fr}}

```

### Traduzir link

```
[[Part_Workbench|Part Workbench]]

```

Traduzido:

```
[[Part_Workbench/fr|Atelier Part]]

```

### Traduzir Docnav

```
{{Docnav
|[[About_FreeCAD|About FreeCAD]]
|[[Installing_on_Windows|Installing on Windows]]
}}

```

Traduzido:

```
{{Docnav/fr
|[[About_FreeCAD/fr|À propos de FreeCAD]]
|[[Installing_on_Windows/fr|Installation sous Windows]]
}}

```

Exemplo com ícones:

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

Traduzido:

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

## Renomeando e excluindo

### Create pages

Before creating a new page you should first check if a similar page already exists. If that is the case it is usually better to edit that existing page instead. When in doubt please open a topic in the [Wiki forum](https://forum.freecadweb.org/viewforum.php?f=21) first.

To create a new page do one of the following:

* Visit the URL with the desired page name, for example: `https://wiki.freecadweb.org/My_New_Page`, and click on 'create this page'.
* Do a wiki search for the page name, and click on the red text in 'Create the page "My New Page" on this wiki!'.

### Renomear páginas

Como o FreeCAD é um projeto em permanente desenvolvimento, é por vezes necessário rever o conteúdo do wiki. Se os nomes dos comandos forem alterados no código-fonte, as páginas wiki que os documentam têm de ser renomeadas também. Isto só pode ser feito pelos administradores do wiki. Para informar os administradores, abrir um tópico no [fórum Wiki](https://forum.freecadweb.org/viewforum.php?f=21) e listar a alteração de nome necessária nesta forma:

```
old name         new name
Old_page_name_1  New_page_name_1
Old_page_name_2  New_page_name_2
...

```

### Excluir arquivos e páginas

Caso precise apagar um arquivo, vá à sua página (`https://www.freecadweb.org/wiki/File:***.***`) e edite-o. Não importa se a página está em branco ou não, adicione isto como primeiro elemento: `{{Delete}}` e imediatamente abaixo descreva por que razão a página deve ser apagada. Além disso, abrir um tópico no [fórum Wiki](https://forum.freecadweb.org/viewforum.php?f=21).

Para páginas, o procedimento é o mesmo.

## Discussão

O [subforum Desenvolvimento/Wiki](http://forum.freecadweb.org/viewforum.php?f=21) no [fórum FreeCAD](https://forum.freecadweb.org) oferece um espaço dedicado à discussão de tópicos da wiki, a aparência da wiki e tudo o mais relacionado com a wiki. Coloque lá as suas perguntas e sugestões.

## Terminologia - política de nomenclatura

### Inglês

Consulte [Glossário](/Glossary "Glossary").

### Outros idiomas

* [Italiano](/Italian_Translation "Italian Translation")
* [Francês](/French_Translation "French Translation")
* [Alemão](/German_Translation "German Translation")
* [Polonês](/Polish_Translation "Polish Translation")

Retrieved from "<http://wiki.freecad.org/index.php?title=WikiPages/pt-br&oldid=1534296>"