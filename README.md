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

このプロジェクトでは、Prettier および ESLint を用いてコードをフォーマットします。
VSCodeの拡張機能として上記二つをインストールした上で、``.vscode/settings.json``を作成し、以下を記述すると良いでしょう。

```json
{
  "editor.formatOnSave": true,
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "files.insertFinalNewline": true,
  "files.eol": "\n",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}

```

コマンドラインで ``yarn lint --fix``を走らせるとコードを自動フォーマットしますが、現実的にはこのコマンドに頼るばかりでは捗りません。上記のように適切にsettingsを記述し、VSCode（など）の自動フォーマッティング機能を用いることを推奨します。

[contributing](documents/contributing.md)も参照してください。
