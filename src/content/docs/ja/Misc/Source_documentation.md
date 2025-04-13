---
title: Source documentation/ja
---
FreeCADのソースコードは、[Doxygen](http://www.doxygen.org)を使ってHTMLドキュメントを自動生成するようにコメントされています。これは、FreeCADソースコードのC ++部分とPython部分の両方に当てはまります。

オンラインのソースドキュメントはhttp://www.freecadweb.org/api/にあります。

Compiling the API documentation follows the same general steps as compiling the FreeCAD executable, as indicated in the [Compile on Linux](/Compile_on_Linux "Compile on Linux") page.

![](/images/FreeCAD_documentation_compilation_workflow.svg)

General workflow to compile FreeCAD's programming documentation. The Doxygen and Graphviz packages must be in the system, as well as the FreeCAD source code itself. CMake configures the system so that with a single make instruction the documentation for the the entire project is compiled into many HTML files with diagrams.

#### ソースドキュメントのビルド

### Complete documentation

Doxygenをインストールしてあればドキュメントのビルドは非常に簡単です。FreeCADビルド用のディレクトリに移動してCMakeでソースを設定した上で次のコマンドを実行します：

```
sudo apt install doxygen graphviz

```

Then follow the same steps you would do to compile FreeCAD, as described on the [compile on Linux](/Compile_on_Linux "Compile on Linux") page, and summarized here for convenience.

* Get the source code of FreeCAD and place it in its own directory `freecad-source`.
* Create another directory `freecad-build` in which you will compile FreeCAD and its documentation.
* Configure the sources with `cmake`, making sure you indicate the source directory, and specify the required options for your build.
* Trigger the creation of the documentation using `make`.

```
git clone https://github.com/FreeCAD/FreeCAD.git freecad-source
mkdir freecad-build
cd freecad-build
cmake -DBUILD_QT5=ON -DPYTHON_EXECUTABLE=/usr/bin/python3 ../freecad-source

```

While you are inside the build directory issue the following instruction to create only the documentation.

```
make -j$(nproc --ignore=2) DevDoc

```

その後でDoc/SourceDocu/html/index.htmlから始まる結果のhtmlファイルを調べてください。

```
freecad-build/doc/SourceDocu/html/

```

The point of entrance to the documentation is the `index.html` file, which you can open with a web browser:

```
xdg-open freecad-build/doc/SourceDocu/html/index.html

```

（注意：DevDocターゲットは自動ツールビルドでは有効になっていません）その性質上、ソースドキュメントは常に作業進行中状態にあります。よく起きることですが必要がある時にはためらわずに再ビルドを行なってください。
それはhttp://www.freecadweb.org/api/で使用されているバージョンも代わりに発行することによって生成することができます：

### Reduced documentation

The complete documentation uses around 3Gb of disk space. An alternative, smaller version of the documentation which takes only around 600 MB can be generated with a different target. This is the version displayed on the [FreeCAD API website](https://freecad.github.io/SourceDoc/).

```
make -j$(nproc --ignore=2) WebDoc

```

The documentation on the [FreeCAD API website](https://freecad.github.io/SourceDoc/) is produced automatically from <https://github.com/FreeCAD/SourceDoc> . Anyone can rebuild it and submit a pull request:

* Fork the repo at <https://github.com/FreeCAD/SourceDoc>
* on your machine: clone the FreeCAD code (if you haven't yet), create a build dir for the doc, and clone the above SourceDoc repo inside. That SourceDoc will be updated when you rebuild the doc, and you'll be able to commit & push the results afterwards:

```
git clone https://github.com/FreeCAD/FreeCAD
cd FreeCAD
mkdir build
cd build
mkdir -p doc/SourceDocu/html
cd doc/SourceDocu/html
git clone your-fork-url
cd ../../..
cmake -DBUILD_QT5=ON -DPYTHON_EXECUTABLE=/usr/bin/python3 ..
make WebDoc
cd doc/SourceDocu/html
git commit
git push

```

* Go to your fork online, and create a pull request.

またこれとは別にこのドキュメントは折を見て生成されては、sourceforgeの[ここ](http://free-cad.sf.net/SrcDocu/index.html)でアクセス可能な状態で置かれています。

#### Coin3Dドキュメントの統合

UNIX系ではCoin3DのソースドキュメントをFreeCADのものとリンクすることが可能です。
これを行うと移動が楽になり、またCoin派生クラスの継承ダイアグラムを作成できます。

* Debianとそこから派生したシステムの場合：

:   - パッケージlibcoin60-docをインストール
:   - ファイル /usr/share/doc/libcoin60-doc/html/coin.tag.gzを展開
:   - ソースドキュメントを再生成
:   オフラインでのブラウジングができます。

* もしCoinのドキュメントパッケージをインストールしたくない/できない場合、設定時(wget)にDoxygenタグファイルがダウンロード可能であればdoc.coin3D.orgにあるオンラインのCoinドキュメントへのリンクが生成されます。

## Using Doxygen

See the [Doxygen](/Doxygen "Doxygen") page for an extensive explanation on how to comment C++ and Python source code so that it can be processed by Doxygen to automatically create the documentation.

Essentially, a comment block, starting with `/**` or `///` for C++, or `##` for Python, needs to appear before every class or function definition, so that it is picked up by Doxygen. Many [special commands](/Doxygen#Doxygen_markup "Doxygen"), which start with `\` or `@`, can be used to define parts of the code and format the output. [Markdown syntax](/Doxygen#Markdown_support "Doxygen") is also understood within the comment block, which makes it convenient to emphasize certain parts of the documentation.

```
/**
 * Returns the name of the workbench object.
 */
std::string name() const;

/**
 * Set the name to the workbench object.
 */
void setName(const std::string&);

/// remove the added TaskWatcher
void removeTaskWatcher(void);

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Source_documentation/ja&oldid=1072418>"