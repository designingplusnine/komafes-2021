# dp9 | Komaba Festival 2021 (72nd)
## Getting Started

まず、依存関係をインストールします。このとき、 **npmは使用しないこと！**

```bash
yarn
```

次に、開発用サーバーを起動します。

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) をブラウザ（Chrome推奨）で開くと、開発用にビルドされたサイトを閲覧できるはずです。

## Code formatting

このプロジェクトでは、Prettier、ESLint、Stylelint を用いてコードをフォーマットします。
VSCodeの拡張機能として上記3つをインストールした上で、``.vscode/settings.json``を作成し、以下を記述すると良いでしょう（Stylelint、stylelintという名前の拡張機能があるが、前者が正しいと思います）。

```json
{
  "editor.formatOnSave": false,
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "files.insertFinalNewline": true,
  "files.eol": "\n",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}
```

コマンドラインで ``yarn lint --fix``を走らせるとコードを自動フォーマットしますが、現実的にはこのコマンドに頼るばかりでは捗りません。上記のように適切にsettingsを記述し、VSCode（など）の自動フォーマッティング機能を用いることを推奨します。

[contributing](documents/contributing.md)も参照してください。

## directories

- components
  - コンポーネントファイルを格納します。基本的にはこのディレクトリの中を書くと考えて差し支えないでしょう。
  - CSSも各子ディレクトリ内に格納してください。
- documents
  - contributing.mdを格納しています。
- pages
  - 各ページの定義ファイルを格納しています。
  - 基本的には、コンポーネントベースで開発し、ここにあるファイルは極力シンプルに保つように心がけてください。
- public
  - 画像ファイルなどを格納する場所です。
  - このディレクトリ内部に格納されたファイルは、``basepath/hogehoge``の形でアクセスできます。
- styles
  - ページに適用するCSSファイルを格納していますが、基本的には書き換えないものと考えてください。
  - 繰り返しになりますが、各コンポーネントに適用するCSSは、componentsディレクトリの下に置いてください。

## contributors

- [Hiroki_Kobayashi](https://github.com/khsacc)
- [Yokoi Sotaro](https://github.com/sotaro-ha)
- [Hikaru Kobayashi](https://github.com/eyesightiii)
- [Nagi Masuda](https://github.com/NagiMasuda)
- [Eriko Yamada](https://github.com/Eyamada3)
