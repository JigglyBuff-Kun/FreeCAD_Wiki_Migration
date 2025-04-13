---
title: Formato de texto
---
|  |
| --- |
| Draft ShapeString |
| Menu location |
| Drafting → Forma a partir de texto Anotação → Forma a partir de texto |
| Workbenches |
| [Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br"), [BIM](/BIM_Workbench/pt-br "BIM Workbench/pt-br") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.14 |
| See also |
| [Draft Text](/Draft_Text/pt-br "Draft Text/pt-br"), [Draft Label](/Draft_Label/pt-br "Draft Label/pt-br"), [Part Extrude](/Part_Extrude/pt-br "Part Extrude/pt-br") |
|  |

## Descrição

O comando ![](/images/Draft_ShapeString.svg) **Draft ShapeString** gera uma forma composta baseada em uma sequência de texto. Essa forma pode ser utilizada para criar letras em 3D utilizando o comando [Part Extrude](/Part_Extrude/pt-br "Part Extrude/pt-br").

O comando Draft ShapeString não é adequado para criar anotações de texto padrão. Para essa finalidade, utilize os comandos [Draft Text](/Draft_Text/pt-br "Draft Text/pt-br") ou [Draft Label](/Draft_Label/pt-br "Draft Label/pt-br").

![](/images/Draft_ShapeString_Example400.png)

Um único ponto é necessário para posicionar o ShapeString

## Utilização

Para usuários do Windows: por favor, leia primeiro o parágrafo [Seleção de arquivos de fonte no Windows](#Font_file_selection_on_Windows/pt-br).

1. Existem várias maneiras de invocar o comando:
   * Pressione o ![](/images/Draft_ShapeString.svg) Forma a partir de texto botão.
   * [Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br"): Selecione a opção **Desenho → ![](/images/Draft_ShapeString.svg) Forma a partir de texto** no menu.
   * [BIM](/BIM_Workbench/pt-br "BIM Workbench/pt-br"): Selecione a opção **Anotação → ![](/images/Draft_ShapeString.svg) Forma a partir de texto** no menu.
2. O painel **ShapeString** será aberto.
3. Clique em um ponto na [vista 3D](/3D_view/pt-br "3D view/pt-br") ou insira as coordenadas.
4. Opcionalmente, pressione o Redefinir Ponto botão para redefinir o ponto para a origem.
5. Insira uma **String** (texto).
6. Especifique a **Altura**.
7. Para selecionar uma fonte, escolha uma das opções:
   * Insira um caminho de arquivo no campo **Arquivo de fonte**.
   * Pressione o ... botão e selecione um arquivo.
8. Pressione o OK botão para finalizar o comando.
9. Opcionalmente, altere a Dados**Justificação** do ShapeString. Consulte [Propriedades](#Properties/pt-br).

## Opções

1. * Pressione a tecla Esc ou o botão Cancelar para abortar o comando.

## Caminho relativo da fonte

[introduzido na versão 1.1](/Release_notes_1.1 "Release notes 1.1")

É possível especificar um caminho relativo para o arquivo de fonte. Para isso, o documento do FreeCAD deve ter sido salvo pelo menos uma vez.

Alguns exemplos:

* ./SomeFont.ttf: O arquivo de fonte está no mesmo diretório que o documento.
* ./MyDirectory/SomeFont.ttf: O arquivo de fonte está no subdiretório MyDirectory dentro do diretório do documento.
* ../SomeFont.ttf: O arquivo de fonte está no diretório pai do diretório do documento.

## Seleção de arquivo de fonte no Windows

No Windows, o acesso à pasta padrão de fontes é restrito. Isso afeta a seleção de arquivos de fonte para ShapeStrings. Há três casos no FreeCAD em que é possível especificar um arquivo de fonte para ShapeStrings: no painel de tarefas ShapeString, ao alterar a propriedade Dados**Arquivo de Fonte** de um ShapeString e ao especificar o arquivo de fonte padrão nas [Preferências da Bancada Draft](/Draft_Preferences/pt-br#Texts_and_dimensions "Draft Preferences/pt-br").

1. Pressionar o botão ... e selecionar um arquivo da pasta padrão de fontes do Windows não é possível ao usar a caixa de diálogo de arquivo nativa. Existem algumas soluções alternativas:
   * Certifique-se de que **DontUseNativeFontDialog** está configurado como `true`, que é o valor padrão para essa preferência. Isso abrirá uma caixa de diálogo de arquivo não nativa ao pressionar o botão ... no painel de tarefas ShapeString. Com essa caixa de diálogo, é possível acessar a pasta padrão de fontes do Windows.
   * Altere **DontUseNativeDialog** para `true`. Isso instruirá o FreeCAD a sempre usar a caixa de diálogo de arquivo não nativa.
   * Especifique o arquivo de fonte diretamente no campo de entrada. Você pode digitar o caminho completo ou copiar e colar o caminho do Explorador de Arquivos do Windows. Outra opção é inserir `C:\`; uma lista suspensa aparecerá. Selecione `Windows` da lista, adicione `\F`, selecione `Fonts` da nova lista suspensa, adicione `\` e insira as primeiras letras do arquivo de fonte para selecioná-lo na lista suspensa.
   * Crie uma pasta personalizada para seus arquivos de fonte.

Consulte o parágrafo [Preferências](#Preferences/pt-br) abaixo para localizar as preferências mencionadas.

## Notas

1. * Um Draft ShapeString pode ser editado clicando duas vezes nele na [Vista em Árvore](/Tree_view/pt-br "Tree view/pt-br").
   * As fontes suportadas incluem TrueType (.ttf), OpenType (.otf) e Type 1 (.pfb).
   * O comando é restrito a textos da esquerda para a direita. Textos da direita para a esquerda e de cima para baixo não são suportados.
   * Alturas de texto muito pequenas podem resultar em formas de caracteres deformadas devido à perda de detalhes no escalonamento.
   * Fontes podem gerar geometria problemática, pois os contornos das fontes podem se sobrepor ou apresentar pequenos espaços. Essas condições são consideradas erros em fios usados para definir faces.
   * Draft ShapeStrings também podem ser criados com a [Macro Fonts Win10 PYMP](/index.php?title=Macro_Fonts_Win10_PYMP/pt-br&action=edit&redlink=1 "Macro Fonts Win10 PYMP/pt-br (page does not exist)").
   * Para criar Draft ShapeStrings dispostos em um formato circular, utilize a [Macro FCCircularText](/index.php?title=Macro_FCCircularText/pt-br&action=edit&redlink=1 "Macro FCCircularText/pt-br (page does not exist)").

## Tutoriais

1. [Tutorial de Draft ShapeString](/index.php?title=Draft_ShapeString_tutorial/pt-br&action=edit&redlink=1 "Draft ShapeString tutorial/pt-br (page does not exist)"): extruda um ShapeString, posicione-o no espaço 3D e crie uma gravação em outro corpo.
2. [Como usar ShapeStrings no PartDesign](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623)

## Preferências

1. Veja também: [Editor de Preferências](/Preferences_Editor/pt-br "Preferences Editor/pt-br"), [Preferências da Bancada Draft](/Draft_Preferences/pt-br "Draft Preferences/pt-br") e [Parâmetro de Diálogo Padrão](/Std_DlgParameter/pt-br "Std DlgParameter/pt-br").

* O arquivo de fonte padrão pode ser alterado nas preferências: **Editar → Preferências... → Draft → Textos e dimensões → Arquivo de fonte padrão para ShapeString**.
* Para usuários do Windows:

```
 ** Defina Ferramentas → Editar parâmetros... → BaseApp → Preferences → Dialog → DontUseNativeFontDialog como true para usar o seletor de arquivos não nativo ao escolher um arquivo de fonte no painel de tarefas do ShapeString.  
 ** Alternativamente, defina Ferramentas → Editar parâmetros... → BaseApp → Preferences → Dialog → DontUseNativeDialog como true para sempre usar o seletor de arquivos não nativo.

```

## Propriedades

Veja também: [Editor de Propriedades](/Property_editor/pt-br "Property editor/pt-br").

1. Um objeto Draft ShapeString é derivado de um [Part Part2DObject](/Part_Part2DObject/pt-br "Part Part2DObject/pt-br") e herda todas as suas propriedades. Ele também possui as seguintes propriedades adicionais:

### Data

Draft

* Dados**Font File** (`File`): Nome do arquivo da fonte.
* Dados**Fuse** (`Bool`): Funde as faces caso haja sobreposição entre elas, geralmente não é necessário (pode ser muito lento). Ignorado se Dados**Make Face** estiver `false`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Dados**Justification** (`Enumeration`): Alinhamento horizontal e vertical. Opções: `Top-Left`, `Top-Center`, `Top-Right`, `Middle-Left`, `Middle-Center`, `Middle-Right`, `Bottom-Left`, `Bottom-Center`, `Bottom-Right`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Dados**Justification Reference** (`Enumeration`): Referência de altura usada para o alinhamento. Opções: `Cap Height`, `Shape Height`. A altura da forma depende dos caracteres no Dados**String**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Dados**Keep Left Margin** (`Bool`): Mantém a margem esquerda e os espaços em branco iniciais quando o alinhamento é à esquerda. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Dados**Make Face** (`Bool`): Preenche as letras com faces.
* Dados**Oblique Angle** (`Angle`): Ângulo de inclinação. Deve estar no intervalo de -80° a +80°. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Dados**Scale To Size** (`Bool`): Ajusta para garantir que a altura do topo das letras seja igual ao tamanho definido. Se configurado como `false`, dependendo da fonte, a altura do topo das letras pode não corresponder exatamente ao Dados**Size**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Dados**Size** (`Length`): Altura do texto.
* Dados**String** (`String`): Sequência de texto. Um ShapeString só pode exibir uma única linha de texto.
* Dados**Tracking** (`Distance`): Espaçamento entre caracteres. O tipo dessa propriedade foi atualizado ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")).

![](/images/Draft_ShapeString_Justification.png)

A altura do retângulo vermelho (linha contínua) é igual à altura do topo das letras (cap height).  
A altura do retângulo verde (linha tracejada) é igual à altura da forma (shape height).  
Os cantos, os pontos médios das bordas e o centro dos retângulos  
correspondem às 9 opções de alinhamento: de Superior-Esquerdo a Inferior-Direito.

## Scripting

Veja também: [Documentação de API Gerada Automaticamente](https://freecad.github.io/SourceDoc/) e [Noções Básicas de Script no FreeCAD](/FreeCAD_Scripting_Basics/pt-br "FreeCAD Scripting Basics/pt-br").

Para criar um \*\*Draft ShapeString\*\*, utilize o método `make_shapestring` ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) do módulo \*\*Draft\*\*. Este método substitui o método obsoleto `makeShapeString`.

```
shapestring = make_shapestring(String, FontFile, Size=100, Tracking=0)

```

* Cria uma forma composta `shapestring` usando a `String` especificada e o caminho completo de um `FontFile` compatível.
* `Size` é a altura do texto resultante em milímetros.
* `Tracking` é o espaçamento entre os caracteres em milímetros.

A posição do \*\*ShapeString\*\* pode ser alterada sobrescrevendo seu atributo `Placement`, ou individualmente sobrescrevendo os atributos `Placement.Base` e `Placement.Rotation`.

Exemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

font1 = "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf"
font2 = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
font3 = "/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf"

S1 = Draft.make_shapestring("This is a sample text", font1, 200)

S2 = Draft.make_shapestring("Inclined text", font2, 200, 10)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(-1000, 500, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 45))
S2.Placement = place2

S3 = Draft.make_shapestring("Upside-down text", font3, 200, 10)
S3.Placement.Base = App.Vector(0, -1000, 0)
S3.Placement.Rotation = App.Rotation(zaxis, 180)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString/pt-br&oldid=1529242>"