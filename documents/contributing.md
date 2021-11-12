## CSSの書き方
- scssを使います。scssの書き方は適当にググってください。
  - 特に、メディアクエリを書くときと、ネストしたクラス名を採用するときには便利な記法があるので、使うことを推奨します。
- グローバル変数は、``styles/vars.scss`` に置いてください。例えば、色の情報などです。
  - scssの「変数」概念がわからない場合もググってください。
- グローバル変数を使うために、↑のファイルを都度インポートしてください。例は``styles/pages/Home.module.scss``を参照してくれれば判ると思います（このファイルはそのうち削除しますが）
- それぞれのtsxファイルの中でimportしたうえで、適当にそれをモジュールとしてclassNameに突っ込みます。
```tsx
import styles from '../styles/pages/Home.module.scss';

<h1 className={styles.title}>Welcome to Komaba Festival exhibition by designing plus nine!</h1>
```


## code formatting

これについては、おおもとのREADMEをお読みください。

##
