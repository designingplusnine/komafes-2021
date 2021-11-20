export type ColourDatum = {
  title: string;
  category: '赤と青' | '派手と地味';
  description: string;
  before: string;
  after: string[];
};
export const colourData: ColourDatum[] = [
  {
    title: 'だるま',
    category: '赤と青',
    description:
      '鳥居に法被、お赤飯…日本では古来より、赤色は魔除けの色とされ、様々なものに使われてきました。\n だるまもご多分に洩れず赤い色をしています。だるまを青くしてみるとどうなるでしょうか？\n 確かに強さは減って見えますが、青くしたことで爽やかさを感じてこれはこれでアリな気もします。',
    before: 'img/colour/daruma-red.png',
    after: ['img/colour/daruma-red.png', 'img/colour/daruma-blue.png'],
  },
  {
    title: '自習室',
    category: '派手と地味',
    description:
      '皆さんがいつも利用している自習室の壁は何色ですか？白、という方が多いのではないでしょうか。\n 白色には、新しさ、清潔感、信頼感を与える効果があります。\n 模試の結果がよくなかった時も、自習室にいけば心機一転、目標に向かって再び気合を入れ直せる、そんな空間を作っているのには色の効果があるのです。\n もし自習室の壁の色が違ったら。ここで勉強する自分を想像してみてください…！',
    before: 'img/colour/class-before.png',
    after: [
      'img/colour/class-before.png',
      'img/colour/class-neon.png',
      'img/colour/class-black.png',
      'img/colour/class-white.png',
      'img/colour/class-red.png',
    ],
  },
  {
    title: '東京タワー',
    category: '赤と青',
    description:
      '最近はスカイツリーにお株を奪われつつあるとはいえ、東京のシンボルといえば今も変わらず東京タワーですよね。\n鮮やかな赤色が空の青といいコントラストをなすのが特徴です。\nではその東京タワーが青かったらどうでしょう…？\nこの写真では空が霞んでいる感じなのでコントラストの面ではそこまで気になりませんね。\nでも若干不気味かも。夜になったら妖しく東京の街を照らしてくれそうです。\n調べたところ「世界糖尿病デー」の時などに青くライトアップされているようですのでその時はぜひこの作品を思い出していただけたら嬉しいです！',
    before: 'img/colour/tower-red.png',
    after: ['img/colour/tower-red.png', 'img/colour/tower-blue.png'],
  },
  {
    title: 'シマウマ',
    category: '派手と地味',
    description:
      'シマウマの模様の由来にはいくつかの説がありますが、有力なものの一つに自然の風景に紛れ込めるからではないかというものがあります。\n実際に調べてみると、特に砂漠や岩肌にはぱっと見ではわからないほどにうまく紛れ込めているように見えます。\nですが、こちらのカラフルなシマウマにはそんなことはできそうにありません。\n自然食からは明らかに浮いてしまいますね。\n一方でアメリカの星条旗には上手く紛れることができそうです。\n現地の人に見せたらどういった反応になるか気になるところですね。',
    before: 'img/colour/zebra-before.png',
    after: ['img/colour/zebra-before.png', 'img/colour/zebra-colour.png'],
  },
  {
    title: 'Wi-Fi',
    category: '派手と地味',
    description:
      '電子機器に何かとお世話になっている今の時代、Wi-Fiのマークも毎日見かけるものになりましたよね。\nよく見かけるのは黒や青のマークですが、他の色だとどのような印象を受けるでしょうか？\n赤だとなんか接続不良が起きているような印象を受けますし、ピンクだとなんかWi-Fi以外にもなんか魔術に接続できそう（個人的な印象です）。\n水色や黄色は少し弱そうに見えるかもしれませんね。\nそれでも水色はスタイリッシュ感が伝わってきますし、黄色は灯台とかの光っぽく見えて良さそうな感じもします。\nこれは見る人によって意見が分かれるかもしれませんね。\n皆さんはどういう印象を抱いたでしょうか…？',
    before: 'img/colour/wifi6.jpeg',
    after: [
      'img/colour/wifi1.jpeg',
      'img/colour/wifi2.jpeg',
      'img/colour/wifi3.jpeg',
      'img/colour/wifi4.jpeg',
      'img/colour/wifi5.jpeg',
      'img/colour/wifi6.jpeg',
    ],
  },
  {
    title: '仮面ライダー',
    category: '派手と地味',
    description:
      '仮面ライダーといえば誰もが子供の頃には憧れるものです。\n憧れる要因の一つはそのカラフルさですね。\nではそれを少し地味にしてみるとどうでしょう？\n …思ったよりかっこいいですね。\n金や青なども渋くて伝統工芸品のような雰囲気すら感じます。\nこれなら子供だけでなくて大人にもウケそうです。\nいつかこういう仮面ライダーが登場する日がくるかも！？',
    before: 'img/colour/rider-colour.png',
    after: ['img/colour/rider-colour.png', 'img/colour/rider-mono.png'],
  },
  {
    title: 'サンタクロース',
    category: '赤と青',
    description:
      'あと一ヶ月でクリスマス！\nずいぶん冷え込んできましたが、サンタクロースがやってくることを想像するとワクワク心が温まる。\n今頃暖炉の前で今年一年良い子にしていた子へのプレゼントを用意しているのかな…\nえ、サンタクロースの服を青色に新調した！？\nトナカイの赤鼻とも合わないし、なんだか寒そう。\nやっぱりサンタクロースは赤がいいな。\n皆さんはどうですか？',
    before: 'img/colour/santa-red.png',
    after: ['img/colour/santa-red.png', 'img/colour/santa-blue.png'],
  },
  {
    title: 'お相撲さん',
    category: '派手と地味',
    description:
      '相撲は日本の国技であり、お相撲さんはいわば「和」の象徴です。\nお相撲さんが決して地味というわけではないのですが、お相撲さんが派手な姿をしているというのはあまりみたことないなという事で派手なお相撲さんを作ってみました。\n本当はしめ縄だけを派手にしたかったのですがそれだとちょっと目立たないということで思い切って全身を派手にしてみました。\n少し仮面ライダーみたいですね。\n依然として強そうですしこういう仮面ライダーも見てみたいかも。',
    before: 'img/colour/sumo-black.png',
    after: ['img/colour/sumo-black.png', 'img/colour/sumo-colour.png'],
  },
  {
    title: '冷却ジェルシート',
    category: '赤と青',
    description:
      '熱が出た時はおでこにジェルシートを貼ってひんやりしたい。\n冷却用のジェルシートや保冷剤などは、ほとんどが青色ですよね。\n青色には冷たさを連想させる効果や、鎮静効果があります。\nしかし、もしこのジェルシートが赤色だったらどうでしょう。\n熱が冷める気がしません…',
    before: 'img/colour/gel-blue.png',
    after: ['img/colour/gel-blue.png', 'img/colour/gel-red.png'],
  },
];
