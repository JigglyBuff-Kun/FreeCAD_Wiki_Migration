---
title: Bancada de trabalho Spreadsheet
---

![](/images/Workbench_Spreadsheet.svg)

ícone da bancada de trabalho Spreadsheet

## Introdução

A ![](/images/Workbench_Spreadsheet.svg) [bancada de trabalho Spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench") permite criar e editar planilhas, usar dados da planilha como parâmetros em um modelo, preencher a planilha com dados recuperados de um modelo, realizar cálculos e exportar os dados para outras aplicações de planilhas como o LibreOffice ou o Microsoft Excel.

![](/images/Spreadsheet_screenshot.jpg)

Uma planilha com determinadas células preenchidas com texto e quantidades

## Ferramentas

- ![](/images/Spreadsheet_CreateSheet.svg) [Criar planilha](/Spreadsheet_CreateSheet/pt-br "Spreadsheet CreateSheet/pt-br"): criar uma nova planilha de cálculo.

- ![](/images/Spreadsheet_Import.svg) [Importar](/Spreadsheet_Import "Spreadsheet Import"): importa um arquivo CSV para uma planilha.

- ![](/images/Spreadsheet_Export.svg) [Exportar](/Spreadsheet_Export "Spreadsheet Export"): exporta um arquivo CSV a partir de uma planilha.

- ![](/images/Spreadsheet_MergeCells.svg) [Junta células](/Spreadsheet_MergeCells "Spreadsheet MergeCells"): junta as células selecionadas.

- ![](/images/Spreadsheet_SplitCell.svg) [Dividir célula](/Spreadsheet_SplitCell "Spreadsheet SplitCell"): divide célula juntada anteriormente.

- ![](/images/Spreadsheet_AlignLeft.svg) [Alinhar à esquerda](/Spreadsheet_AlignLeft "Spreadsheet AlignLeft"): alinha o conteúdo das células selecionadas à esquerda.

- ![](/images/Spreadsheet_AlignCenter.svg) [Alinhar ao centro](/Spreadsheet_AlignCenter "Spreadsheet AlignCenter"): alinha o conteúdo das células selecionadas no centro, horizontalmente.

- ![](/images/Spreadsheet_AlignRight.svg) [Alinhar à direita](/Spreadsheet_AlignRight "Spreadsheet AlignRight"): alinha o conteúdo das células selecionadas à direita.

- ![](/images/Spreadsheet_AlignTop.svg) [Alinhar acima](/Spreadsheet_AlignTop "Spreadsheet AlignTop"): alinha o conteúdo das células selecionadas no topo.

- ![](/images/Spreadsheet_AlignVCenter.svg) [Alinhar no centro verticalmente](/Spreadsheet_AlignVCenter "Spreadsheet AlignVCenter"): alinha o conteúdo das células selecionadas ao centro, verticalmente.

- ![](/images/Spreadsheet_AlignBottom.svg) [Alinha abaixo](/Spreadsheet_AlignBottom "Spreadsheet AlignBottom"): alinha o conteúdo das células selecionadas abaixo.

- ![](/images/Spreadsheet_StyleBold.svg) [Negrito](/Spreadsheet_StyleBold "Spreadsheet StyleBold"): coloca o conteúdo das células selecionadas em negrito.

- ![](/images/Spreadsheet_StyleItalic.svg) [Itálico](/Spreadsheet_StyleItalic "Spreadsheet StyleItalic"): coloca o conteúdo das células selecionadas em itálico.

- ![](/images/Spreadsheet_StyleUnderline.svg) [Sublinhado](/Spreadsheet_StyleUnderline "Spreadsheet StyleUnderline"): coloca o conteúdo das células selecionadas sublinhado.

- ![](/images/Spreadsheet_SetAlias.svg) [Configurar nome alternativo](/Spreadsheet_SetAlias/pt-br "Spreadsheet SetAlias/pt-br"): define um outro nome para uma célula selecionada.

* Preto e Branco definem as cores do primeiro plano e de fundo das células selecionadas.

## Preferências

- ![](/images/Preferences-spreadsheet.svg) [Preferências](/Spreadsheet_Preferences "Spreadsheet Preferences"): preferências para a bancada Spreadsheet. [introduzido na versão 0.20](/Release_notes_0.20 "Release notes 0.20")

## Removing cells can be dangerous

Note que remover células com dados pode quebrar a planilha e seu modelo, se ele depender da planilha. Você não recebe um aviso prévio de que isso irá ocorrer.

## Inserir e remover linhas e colunas

Linhas e colunas podem ser inseridas ou removidas clicando com o botão direito do mouse no cabeçalho de uma linha ou coluna e selecionando a opção apropriada no menu de contexto. É possível selecionar várias linhas ou colunas primeiro, seja segurando a tecla Ctrl enquanto seleciona os cabeçalhos, ou segurando o botão esquerdo do mouse e arrastando.

## Edit cells

The content of a cell can be edited by selecting the cell and entering a value in the **Content** inputbox at the top of the window. To edit a cell in-place, select it and press F2, or double-click it.

## Delete cells

To delete one or more cells select them and press Del. This will delete their contents, their properties and their aliases. To only delete the content of a cell it should be edited instead.

## Recortar e copiar/colar células

Operações de recortar e copiar e colar podem ser usadas em células em planilhas do FreeCAD. Você pode usar os atalhos normais para essas operações: Ctrl+X, Ctrl+C e Ctrl+V, respectivamente. Para selecionar várias células, mantenha pressionada a tecla Ctrl enquanto seleciona, ou mantenha pressionado o botão esquerdo do mouse e arraste para selecionar um intervalo de células retangular.

As operações de recorte e cópia armazenam o conteúdo e as propriedades das células na Área de Transferência. A operação de colagem escreve os dados de tal maneira que o conteúdo da célula superior esquerda dos dados armazenados é inserido na célula ativa. Outros conteúdos armazenados são posicionados em relação a essa célula. As fórmulas são atualizadas de acordo.

## Propriedades das células

As propriedades de uma célula da planilha podem ser editadas clicando com o botão direito na célula e selecionando **Propriedades...** no menu de contexto. A seguinte caixa de diálogo aparece:

![](/images/SpreadsheetCellPropDialog.png)

Conforme indicado pelas abas, as seguintes propriedades podem ser alteradas:

- Cor: Cor do texto e cor de fundo
- Alinhamento: Alinhamento horizontal e vertical do texto
- Estilo: Estilo do texto: negrito, itálico, sublinhado
- Unidades: Unidades de exibição para esta célula. Por favor, leia a seção abaixo [Unidades](#Unidades).
- Pseudônimo: Defina um [pseudônimo](/Spreadsheet_SetAlias/pt-br "Spreadsheet SetAlias/pt-br") para esta célula. Este apelido pode ser usado em fórmulas celulares e também em [expressões](/Expressions/pt-br "Expressions/pt-br") gerais; veja a seção [Dados da planilha em expressões](#Dados_da_planilha_em_expressões) para mais informações.

## Expressões nas células

Uma célula de planilha pode conter um número, um texto ou uma expressão. Expressões devem começar com um sinal de igualdade '='.

As expressões celulares podem conter números, funções, referências a outras células e referências a propriedades do modelo (Mas veja [Limitações atuais](#Limitações_atuais) abaixo). As células podem ser referenciadas por seu endereço (letra maiúscula da coluna + número da linha, ex B4) ou por seu [pseudônimo](/Spreadsheet_SetAlias/pt-br "Spreadsheet SetAlias/pt-br").

Nota: As expressões das délulas são tratadas pelo FreeCAD como código de programação. Portanto, quando você edita uma célula, o conteúdo que você vê pode não estar de acordo com suas configurações de visualização:

- o separador decimal é sempre um ponto, mas vírgulas também podem ser usadas para inserir valores.
- o número de decimais exibidos pode diferir de suas [configurações de preferências](/Preferences_Editor/pt-br#Unidades "Preferences Editor/pt-br").

As referências a objetos no modelo são explicadas em [Referências a dados CAD](#References_to_CAD-data) abaixo. A utilização dos valores das células da planilha para definir as propriedades do modelo é explicada em [Dados da planilha em expressões](#Spreadsheet_data_in_expressions) abaixo. Para mais informações sobre as expressões e as funções disponíveis, veja [Expressões](/Expressions/pt-br "Expressions/pt-br").

## Interação entre as planilhas e o modelo CAD

Os dados nas células de uma planilha podem ser usados nas expressões de parâmetros do modelo CAD. Assim, uma planilha pode ser usada como fonte para valores de parâmetros utilizados em todo o modelo, reunindo efetivamente os valores em um só lugar. Quando os valores são alterados na planilha, eles são propagados ao longo do modelo.

Da mesma forma, as propriedades dos objetos do modelo CAD podem ser usadas em expressões em células de planilhas. Isto permite o uso de propriedades de objetos como volume ou área na planilha eletrônica. Se o nome de um objeto no modelo CAD for alterado, a alteração será automaticamente propagada para quaisquer referências nas expressões da planilha usando o nome que foi alterado.

Mais de uma planilha de cálculo pode ser usada em um documento. Uma planilha pode ser identificada usando seu nome ou sua etiqueta.

O FreeCAD atribuirá automaticamente um nome exclusivo a uma planilha de cálculo quando ela for criada. Estes nomes seguem o padrão `Spreadsheet`, `Spreadsheet001`, `Spreadsheet002` e assim por diante. O nome não pode ser alterado e não é visível nas propriedades da planilha. Ele pode ser usado para se referir à planilha em uma [Expressão](/Expressions/pt-br "Expressions/pt-br") (ver [Dados da planilha em expressões](#Dados_da_planilha_em_expressões) abaixo.)

O rótulo de uma planilha é automaticamente definido com o nome da planilha no momento da criação. Ao contrário do nome, a etiqueta pode ser alterada, por exemplo, no painel de propriedades ou usando a ação do menu de contexto Renomear. Por padrão o FreeCAD não aceita rótulos duplicados, mas existe uma [configuração](/Preferences_Editor/pt-br#Documento "Preferences Editor/pt-br") para permitir isso. Planilhas com rótulos duplicados no mesmo documento não podem ser referenciadas pelo rótulo.

O FreeCAD verifica dependências cíclicas. Veja em [Limitações atuais](#Limitações_atuais).

### Referências a dados CAD

Como indicado acima, é possível consultar os dados do modelo CAD em expressões de planilhas.

A tabela a seguir mostra alguns exemplos assumindo que o modelo tem uma característica chamada "MyCube":

| Dados CAD                                                         | Célula em Planilha             | Resultado                     |
| ----------------------------------------------------------------- | ------------------------------ | ----------------------------- |
| Comprimento paramétrico de um cubo de bancada de trabalho parcial | `=MyCube.Length`               | Comprimento com unidades mm   |
| Volume do Cubo                                                    | `=MyCube.Shape.Volume`         | Volume em mm³ sem unidades    |
| Tipo da forma do cubo                                             | `=MyCube.Shape.ShapeType`      | String: Solid                 |
| Rótulo do Cubo                                                    | `=MyCube.Label`                | String: MyCube                |
| x coordenada do centro de massa do Cubo                           | `=MyCube.Shape.CenterOfMass.x` | coordenada em mm sem unidades |

### Dados da planilha em expressões

Para usar os dados da planilha em outras partes do FreeCAD, você geralmente criará uma [Expressão](/Expressions "Expressions") que se refere à planilha e à célula que contém os dados que você deseja usar. Você pode identificar as planilhas por nome ou por etiqueta, e pode identificar as células por endereço ou por pseudônimo. O auto-completamento está disponível para todas as formas de referência.

|                       | Planilha por nome         | Planilha por Rótulo          |
| --------------------- | ------------------------- | ---------------------------- |
| Célula por endereço   | `=Spreadsheet042.B5`      | `=<<MySpreadsheet>>.B5`      |
| Célula por Pseudónimo | `=Spreadsheet042.MyAlias` | `=<<MySpreadsheet>>.MyAlias` |

A maneira recomendada de consultar os dados da planilha é usar a etiqueta da planilha e o nome da célula. Para uma explicação mais profunda dos prós e contras dos modos de referenciamento, veja a seção expandida abaixo.

O uso do rótulo da planilha tem a vantagem de poder ser livremente alterado para descrever o conteúdo da planilha. Também é mais fácil identificar a planilha que está sendo utilizada, já que o texto na expressão corresponde à etiqueta mostrada na visualização do modelo e das propriedades. Se você decidir mudar o rótulo de uma planilha, as referências existentes ao conteúdo da planilha serão atualizadas, para que você não quebre suas expressões ao renomear a planilha. O nome interno da planilha não está prontamente disponível em nenhum lugar, exceto dentro do editor de expressões, portanto, se você usar o nome interno e mais tarde decidir renomear as planilhas, você poderá ter dificuldade em rastrear seus dados de expressão de volta à sua fonte.

Esteja ciente de que quando você cria uma nova planilha, o nome e a etiqueta são os mesmos, por isso é fácil usar acidentalmente o nome da planilha em vez da etiqueta. Uma maneira simples de evitar isto é dar à planilha um nome significativo antes de começar a usá-la em expressões.

Embora você possa usar o número da linha e da coluna em uma expressão para referenciar uma célula, a melhor prática é atribuir um pseudônimo à célula e usar esse nome. Consulte [Propriedades da célula](#Propriedades_das_células) para saber como definir o pseudônimo. Por exemplo, se os dados na célula B1 contiverem o parâmetro de comprimento para um objeto, um apelido como `ComprimentoMeuObjeto` permitiria que o valor fosse referenciado como `<<MeusParâmetros>>.ComprimentoMeuObjeto` em vez de `Spreadsheet.B1`. Além de ser muito mais fácil de ler e entender, os apelidos/pseudônimos também são muito mais fáceis de alterar caso você decida ajustar a estrutura da sua planilha. Usar um apelido também tem a vantagem de tornar mais fácil ver quais células são usadas para controlar outras partes do documento. Note que o FreeCAD ajustará automaticamente as referências posicionais nas expressões se você inserir ou remover linhas e colunas na planilha. Portanto, mesmo se você usar números de linha e coluna em uma expressão, pode inserir linhas e colunas sem quebrar as referências às células circundantes.

### Modelos complexos e recompilações

A edição de uma planilha irá desencadear uma recomputação do modelo 3D, mesmo que as mudanças não afetem o modelo. Para um modelo complexo, uma recomputação pode levar muito tempo, e ter que esperar após cada edição é, naturalmente, bastante irritante.

Há três soluções para lidar com isso:

1. Pular temporariamente as recomputas:
   - Na [Vista em árvore](/Tree_view/pt-br "Tree view/pt-br") clique com o botão direito do mouse sobre o ![](/images/Document.svg) documento que contém a planilha de cálculo.
   - Selecione a opção **Skip recomputes** no menu de contexto.
   - Há uma grande desvantagem para esta solução. Os novos valores inseridos na planilha não serão exibidos até que o documento seja recalculado. Em vez disso `#PENDENTE` é mostrado.
   - Você pode recalcular manualmente, usando o comando [Atualização](/Std_Refresh "Std Refresh"), ou desabilitar a opção **Skip recomputes** quando você terminar de editar.
2. Use uma macro para saltar automaticamente as recomputas durante a edição de uma planilha:
   - Download e execução [skipSheet.FCMacro](https://forum.freecadweb.org/viewtopic.php?f=8&t=48600#p419301).
   - Esta solução economiza alguns passos em relação à primeira solução, mas também tem a desvantagem mencionada.
3. Colocar a planilha em um [arquivo FreeCAD](/File_Format_FCStd/pt-br "File Format FCStd/pt-br") separado:
   - Você pode consultar os dados de uma planilha de um arquivo .FCStd externo com esta sintaxe: `=NameOfFile#<<MySpreadsheet>>.MyAlias`.
   - A vantagem de ter a planilha em outro arquivo sobre o desligamento de recomputas é que a própria planilha é recalculada.
   - A desvantagem é que o modelo não será recalculado automaticamente após alterações na planilha.
   - No cenário onde você primeiro abre o arquivo 'planilha', altera um ou mais valores e depois abre o arquivo 'modelo', não haverá nenhuma indicação de que o modelo precisa ser recalculado. Mas se ambos os arquivos estiverem abertos, o ícone [Atualização](/Std_Refresh/pt-br "Std Refresh/pt-br") será atualizado corretamente para o arquivo 'modelo' após as mudanças no arquivo 'planilha'.

## Unidades

A Planilha tem uma noção de dimensão (unidades) associada aos valores das células. Um número inserido sem uma unidade associada não tem dimensão. A unidade deve ser inserida imediatamente após o valor do número, sem espaço interveniente. Se um número tiver uma unidade associada, essa unidade será usada em todos os cálculos. Por exemplo, a multiplicação de dois comprimentos com a unidade mm dá uma área com a unidade mm².

Se uma célula contém um valor que representa uma dimensão, ela deve ser inserida com sua unidade associada. Embora em muitos casos simples se possa sobreviver com um valor sem dimensão, é insensato não entrar com a unidade. Se um valor representando uma dimensão for inserido sem sua unidade associada, há algumas seqüências de operações que fazem com que o FreeCAD reclame de unidades incompatíveis em uma expressão quando ela aparece, a expressão deve ser válida.
(Isto pode ser melhor compreendido visualizando [este tópico](https://forum.freecadweb.org/viewtopic.php?f=3&t=34713&p=292455#p292438) nos fóruns do FreeCAD.)

Você pode mudar as unidades exibidas para um valor de célula usando o [diálogo de propriedades](#Propriedades_das_células). Isto não altera o valor contido na célula; ele apenas converte o valor existente para exibição. O valor utilizado para os cálculos não muda, e os resultados das fórmulas que utilizam o valor não mudam. Por exemplo, uma célula contendo o valor "5,08cm" pode ser exibida como "2in", alterando o valor da aba de unidades para "in".

Um número sem dimensão não pode ser alterado para um número com uma unidade pelo diálogo de propriedades da célula. Pode-se colocar uma cadeia de unidades, e essa cadeia será exibida; mas a célula ainda contém um número sem dimensões. Para mudar um valor sem dimensão para um valor com uma dimensão, o próprio valor deve ser reentrado com sua unidade associada.

Ocasionalmente, pode ser desejável se livrar de uma dimensão em uma expressão. Isto pode ser feito multiplicando por 1 com uma unidade recíproca.

## Importação e exportação

### Formato CSV

As planílhas do FreeCAD podem ser importadas e exportadas para o formato [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) que também pode ser lido e escrito pela maioria das outras aplicações de planilhas como o Microsoft Excel ou o LibreOffice Calc. Veja [Importar planilha](/Spreadsheet_Import/pt-br "Spreadsheet Import/pt-br") e [Exportar planilha](/Spreadsheet_Export/pt-br "Spreadsheet Export/pt-br") para mais informações.

### Formato XLSX

Planilhas em formato Excel XLSX podem ser importadas através do comando [Importar](/Std_Import/pt-br "Std Import/pt-br") ou do comando [Abrir](/Std_Open/pt-br "Std Open/pt-br"). As seguintes características são suportadas:

- Todas as funções que também estão disponíveis na planilha do FreeCAD. Outras funções dão um erro na célula correspondente após a importação.
- Nomes de células
- Mais de uma folha na planilha Excel-spreadsheet. Neste caso, uma planilha FreeCAD é criada para cada planilha do Excel.

Outras funcionalidades não são importadas para a planilha do FreeCAD.

## Imprimindo

Para lidar com a configuração da página necessária para impressão, as planilhas do FreeCAD são impressas inserindo-as em [Visualizar planilha do TechDraw](/TechDraw_SpreadsheetView/pt-br "TechDraw SpreadsheetView/pt-br").

## Limitações atuais

Verificações FreeCAD para dependências cíclicas quando recalcula os modelos. Isso foi projetado de modo que essa verificação pára no nível do objeto da planilha. Como conseqüência, não se deve ter uma planilha que contenha tanto células cujos valores são usados para especificar parâmetros para o modelo, quanto células cujos valores usam a saída do modelo. Por exemplo, você não pode ter células especificando o comprimento, largura e altura de um objeto, e outra célula que faz referência ao volume total da forma resultante. Esta restrição pode ser superada com duas planilhas: uma usada como fonte de dados para parâmetros de entrada no modelo e a outra usada para cálculos baseados nos dados geométricos resultantes.

## Vinculação de célula

[introduzido na versão 0.20](/Release_notes_0.20 "Release notes 0.20")

É possível vincular o conteúdo das células a outras células da planilha. Isso pode ser útil ao lidar com tabelas grandes ou para obter o conteúdo de uma célula de outra planilha.

### Criando o vínculo

Para vincular, por exemplo, o conjunto de células A3-C4 ao conjunto B1-D2:

1. Selecione o conjunto A3-C4.
2. Clique com o botão direito do mouse e selecione **Vincular...** no menu de contexto.
3. A janela de diálogo **Bind Spreadsheet Cells** se abre.
4. Defina o intervalo B1-D2 para as **To cells**:
   ![](/images/Spreadsheet_binding-dialog.png)
5. Aperte OK.
6. As células vinculadas têm uma borda azul para destacar a vinculação.
7. Se você inserir algo na célula C1 agora, o mesmo aparecerá imediatamente na célula B3.

![](/images/Spreadsheet_binding-result.png)

A planilha agora deve parecer assim

### Criando o vínculo

1. Clique com o botão direito em uma célula vinculada (não é necessário destacar todo o intervalo vinculado) e selecione **Vincular...** no menu de contexto.
2. A janela de diálogo **Vincular Células da Planilha** é aberta.
3. Altere uma ou mais opções. Observe que a opção **Vincular células**, o intervalo de células vinculadas, não pode ser alterada.
4. Pressione OK.

### Removendo o vínculo

1. Clique com o botão direito em uma célula vinculada (não é necessário destacar todo o intervalo vinculado) e selecione **Vincular...** no menu de contexto.
2. A janela de diálogo **Vincular Células da Planilha** é aberta.
3. Pressione Desvincular.

## Notas

- A opção **Ocultar dependência de vinculação** pode ser usada para evitar problemas com dependências cíclicas entre planilhas. É necessário elecioná-la quando, por exemplo, células na _Planilha A_ estão vinculadas à _Planilha B_, enquanto células na _Planilha B_, por sua vez, estão vinculadas a outras células na _Planilha A_. Essa opção deve ser usada com cautela:
  - Ocultar dependências pode ser perigoso, pois dependências quebradas podem danificar o arquivo do FreeCAD. Por exemplo, ao excluir uma planilha, você não será alertado sobre dependências ocultas.
  - Quando você abre um documento com uma planilha contendo uma dependência oculta, a planilha é marcada para ser recalculada. Isso ocorre porque uma dependência cíclica não pode ser recalculada automaticamente. Para recalcular, a ferramenta [Atualizar](/Std_Refresh/pt-br "Std Refresh/pt-br") deve ser usada.
- A vinculação da célula possui uma verificação de intervalo e avisa sobre intervalos incompatíveis. Por exemplo, vincular células 1x3 a células 3x2 não vai funcionar, pois não há como saber quais 3 células das 6 células originais devem ser usadas.
- Você não pode alterar o intervalo de células de uma vinculação existente. Você deve primeiro desvincular as células e depois criar uma nova vinculação.
- A cor da moldura que indica a vinculação ainda não pode ser alterada.

## Tabelas de configuração

[introduzido na versão 0.20](/Release_notes_0.20 "Release notes 0.20")

Você pode usar Planilhas para criar tabelas de configuração com conjuntos de parâmetros predefinidos para o seu modelo e, em seguida, alterar dinamicamente qual configuração usar. Consulte [esta postagem no Fórum](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183) se você deseja saber mais sobre o funcionamento interno desse recurso.

## Scripting

```
import Spreadsheet
sheet = App.ActiveDocument.addObject("Spreadsheet::Sheet", "MySpreadsheet")
sheet.Label = "Dimensions"

sheet.set("A1", "10mm")
sheet.recompute()
sheet.get("A1")

sheet.setAlias("B1", "Diameter")
sheet.set("Diameter", "20mm")
sheet.recompute()
sheet.get("Diameter")

# sheet.get() results in an error if the cell is empty.
# sheet.getContents() can be used to check the cell first.
if sheet.getContents("C1"):
    print(sheet.get("C1"))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_Workbench/pt-br&oldid=1506738>"
