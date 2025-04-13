---
title: Comando Importar
---
|  |
| --- |
| Importar |
| Menu location |
| Arquivo → Importar... |
| Workbenches |
| Todas |
| Default shortcut |
| Ctrl+I |
| Introduced in version |
| - |
| See also |
| [Abrir](/Std_Open "Std Open"), [Importar Exportar](/Import_Export/pt-br "Import Export/pt-br"), [Preferências de Importação Exportação](/Import_Export_Preferences "Import Export Preferences") |
|  |

## Descrição

O comando **Importar** importa geometria de arquivos de formatos diferentes para o documento ativo. Muitos formatos de arquivos são suportados e para alguns formatos existem múltiplas opções de importação. Veja [Importar Exportar](/Import_Export/pt-br "Import Export/pt-br") para maiores informações.

[introduzido na versão 0.21](/Release_notes_0.21 "Release notes 0.21"): Se for selecionado um formato de imagem, o comando criará um [Plano de Imagem](#Image_Plane/pt-br).

## Uso

1. Existem várias maneiras de invocar o comando:
   * Selecione a opção **Arquivo → ![](/images/Std_Import.svg) Importar...** no menu.
   * Use o atalho do teclado: Ctrl+I.
2. Opcionalmente, selecione o formato de arquivo correto na caixa de diálogo.
3. Selecione um arquivo.
4. Pressione o botão Abrir.

## Opções

* Pressione Esc ou o botão Cancelar para abortar o comando.

## Notas

* Para converter um objeto de [malha](/Mesh_Workbench/pt-br "Mesh Workbench/pt-br") importado em um sólido, consulte o tutorial [Importar de STL ou OBJ](/Import_from_STL_or_OBJ/pt-br "Import from STL or OBJ/pt-br").
* Para importar em um novo documento, você pode usar o comando [Abrir](/Std_Open/pt-br "Std Open/pt-br").
* Algumas bancadas de trabalho possuem comandos de importação adicionais. Veja em: [Importar Exportar](/Import_Export/pt-br "Import Export/pt-br").

## Preferências

* Veja: [Preferências de Importação e Exportação](/Import_Export_Preferences/pt-br "Import Export Preferences/pt-br").
* A última localização de arquivo usada é armazenada em: **Ferramentas → Editar parâmetros... → BaseApp → Preferences → General → FileOpenSavePath**.
* O último filtro de importação usado é armazenado em: **Ferramentas → Editar parâmetros... → BaseApp → Preferences → General → FileImportFilter**.

## Plano da Imagem

Um Plano de Imagem é uma representação plana de uma imagem na [Vista 3D](/3D_view/pt-br "3D view/pt-br"). Ele pode ser usado, por exemplo, ao criar um modelo com base em fotografias de um objeto existente.

Por padrão, um Plano de Imagem é colocado no plano global XY. O tamanho inicial de um Plano de Imagem é calculado usando uma resolução de 96 pixels por polegada.

### Edição

1. Para editar um Plano de Imagem, use das seguintes opções:
   * Dê um duplo clique no Plano de Imagem na [Vista em árvore](/Tree_view/pt-br "Tree view/pt-br").
   * Clique com o botão direito no Plano de Imagem na Vista em árvore e selecione **![](/images/Image-scaling.svg) Alterar imagem...** no menu de contexto.
2. Se o Plano de Imagem não estiver paralelo ao plano XY, XZ ou YZ do sistema de coordenadas global, ele será realinhado para ficar paralelo ao plano XY.
3. O painel de tarefas **Configurações do plano de imagem** é aberto.
4. Opcionalmente, selecione o **Plano XY**, o **Plano XZ** ou o **Plano YZ** do sistema de coordenadas global.
5. Marque **Inverter direção** para girar o Plano de Imagem em 180°. O eixo de rotação depende do plano selecionado. Para o plano XY, é o eixo X global. Para os planos XZ e YZ, é o eixo Z global.
6. O **Offset**, **Distância X** e **Distância Y** são relativos ao sistema de coordenadas do Plano de Imagem. Um pequeno deslocamento (offset) negativo pode ser útil ao emparelhar a imagem com uma geometria [esboço (sketch)](/Sketcher_Workbench "Sketcher Workbench") ou [Draft](/Draft_Workbench "Draft Workbench").
7. Opcionalmente, altere a **Transparência**.
8. Opções de **Tamanho da imagem**:
   * Escala por entrada numérica:
     1. Opcionalmente, desmarque **Manter proporção** para escalas desiguais.
     2. Insira uma **Largura** e/ou **Altura**.
   * Escala por seleção de pontos:
     1. Pressione o botão Calibrar.
     2. Selecione dois pontos dentro da imagem.
     3. Uma linha de dimensão é exibida.
     4. Insira a dimensão desejada.
     5. Pressione Enter ou o botão Aplicar.
9. Pressione o botão OK para confirmar as alterações e fechar o painel de tarefas.

### Propriedades

Veja também: [Editor de Propriedades](/Property_editor/pt-br "Property editor/pt-br").

Um objeto Plano de Imagem é derivado de um objeto [App GeoFeature](/App_GeoFeature/pt-br "App GeoFeature/pt-br") e herda todas as suas propriedades. Ele também possui as seguintes propriedades adicionais:

#### Dados

Plano de Imagem

* Dados**Image File** (`FileIncluded`): O arquivo de imagem usado para o Plano de Imagem. Este arquivo é armazenado no arquivo .FCStd.
* Dados**XSize** (`Length`): A largura do Plano de Imagem.
* Dados**YSize** (`Length`): A altura do Plano de Imagem.

### Vista

Object Style

* Vista**Lighting** (`Enumeration`): How the Image Plane is illuminated in the [3D view](/3D_view "3D view"). Can be `Two side` or `One side`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Import/pt-br&oldid=1506714>"