<template>
  <div>
    <SubTitle name="Works" />
    <div class="works-flex-container">
      <WorkCard 
        v-for="work in works" 
        :key="work.name"
        :name="work.name"
        :timing="work.timing"
        :content="work.content"
        :tech="work.tech"
        :link="work.link"
      />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import WorkCard from '@/components/WorkCard.vue'

export default {
  name: 'Works',
  components: {
    SubTitle,
    WorkCard,
  },
  data () {
    return {
      works: [
        {
          name: 'twego',
          timing: '2022.04',
          content: 'リアルタイムに呟かれたツイートをターミナルから見ることができるCLIツールです。\
                    スポーツ観戦や音楽ライブ鑑賞のお供として気軽に利用できることを目標に制作しました。\
                    cobraというフレームワークを使っています。',
          tech: 'Go, Docker',
          link: 'https://github.com/Fukkatsuso/twego',
        },
        {
          name: '仮想通貨取引bot',
          timing: '2021.04-2021.09',
          content: '仮想通貨を自動取引するbotを開発しました。\
                    デプロイ・テスト・本番DBのマイグレーションを自動化するなど、お金を扱うにあたって属人的なミスを排除することにこだわりました。\
                    テストしやすいコードにするために、レイヤードアーキテクチャを導入しています。\
                    結局利益は出ずランニングコストだけがかかっていたため、現在はbotを止めており、リンクから見れるダッシュボードだけを残している状態です。',
          tech: 'Go, Vue.js, MySQL, Docker, GCP',
          link: 'https://dashboard-qboqrrfuaq-an.a.run.app',
        },
        {
          name: 'オータムハッカソン@DeNA',
          timing: '2021.09',
          content: 'コロナ禍で孤独な時間が増え寂しい思いをしている人に向けた、誕生日を祝ってもらうサービスを4人チームで開発しました。\
                    チームとしては「リアルに匹敵するほどの強い思い出を残す」を軸に、UI/UXにこだわったり、OGP画像でお祝いを演出したりと工夫しました。\
                    2日間のハッカソンで、自身はサーバーサイド（Go）とEC2へのデプロイなどを担当しました。',
          tech: 'Go, Docker(, Next.js)',
          link: 'https://github.com/ryoSSS/2021_DeNA_hackathon',
        },
        {
          name: 'インターン@株式会社AIoT',
          timing: '2020.11-2021.09',
          content: '主に企業の業務用システムを一次請けで開発している、正社員・インターン合わせて20人弱の滋賀県にある会社です。\
                    言語やフレームワークの垣根なく、バックエンドもフロントエンドも経験させてもらいました。。\
                    役割としては、月40〜50時間ほど、機能追加やエラー対応のタスクに取り組みました。',
          tech: 'Go, NestJS, etc.',
        },
        {
          name: 'ブログ',
          timing: '2020.08',
          content: 'GoogleAppEngineでホスティングしている技術ブログです。\
                    Markdownで書いた記事をもとにHugoで静的サイトを生成しています。\
                    GitHubにpushするとMarkdownのLintからGAEへのデプロイまで自動でやってくれるワークフローを作り、運用を楽にしました。',
          tech: 'Hugo, Docker, GAE',
          link: 'https://blog.fukkatsuso.com'
        },
        {
          name: '数独ソルバー',
          timing: '2020.07',
          content: 'ユーザが数独パズルをテーブルに入力し、それをソルバーが解いてくれるWebアプリです。\
                    大抵の問題は1,2秒以内に答えが出ると思います。\
                    画像処理やOCRの技術を使って、数独の画像から数字を読み取ってテーブルに書き起こしてくれる機能も作りました（精度は保証できません）。',
          tech: 'Go, Vue.js, Docker',
          link: 'https://sudoku-solver-3fhwuagqeq-an.a.run.app'
        },
        {
          name: '飲食店検索LINEbot',
          timing: '2020.03',
          content: '位置情報から周辺の飲食店を検索できるLINEbotです。\
                    遠征先での食事処選びにいつも困っていたので、即決できるようなアプリが欲しいと思い作りました。\
                    元々Sinatra + ホットペッパーAPI + Herokuで作っていたものを、Go + GooglePlacesAPI + CloudRunに置き換えています。',
          tech: 'Go, Docker, CloudRun',
          link: 'https://line.me/R/ti/p/%40438ryinm'
        },
        {
          name: 'portfolio',
          timing: '2019.09',
          content: 'このポートフォリオサイトです。\
                    Vue.jsでSPAとして作成しています。\
                    マテリアルデザインを意識して仕上げました。\
                    自分なりにわかりやすさと見やすさには配慮しましたが、個性がなさすぎるので面白いポイントを1つ作れないかと画策中です。',
          tech: 'HTML, CSS, Vue.js, Docker',
          link: 'https://github.com/Fukkatsuso/portfolio'
        },
        {
          name: 'stoch',
          timing: '2019.08',
          content: 'GA technologiesさんのハッカソンイベントで3人+メンター1人で制作したWebアプリです。\
                    商品名で検索すると、在庫のある近くの店がマップで示され、店を転々とすることなく欲しい商品に最短距離でたどり着けるというアプリです。\
                    当時は特に力不足すぎてあまり貢献できませんでしたが、発案、開発の一部を担当しました。',
          tech: 'Rails'
        },
        {
          name: '数独アプリ',
          timing: '2019.06',
          content: '自分の好きな数独をテーマに、Railsアプリ制作の練習で作りました。\
                    あらかじめ用意した数独問題のリスト表示、ユーザの解答画面、パズルの答え合わせ機能を実装しました。\
                    このアプリの開発は現在ストップしていますが、その後「数独問題生成&ソルバープログラム」や上記の「数独ソルバー」を作る土台になりました。',
          tech: 'Rails',
        },
        {
          name: '4足歩行ロボット制御',
          timing: '2018.09-2019.04',
          content: 'NHK学生ロボコン2019に向けて制作した4足歩行ロボットです。\
                    マシン担当1人と制御担当2人で開発し、自分は歩行制御のプログラムを担当しました。\
                    ロボットの自動制御が初めてだったのに加え、4足歩行の仕組みを論文や動画で調べたり、実際に動かしてみて思い通りにならなさすぎたりと非常に苦労しました。',
          tech: 'C++, 気合',
          link: 'https://drive.google.com/open?id=1yeCTWXlxsmA1EgzNQnJ2zXAiVHBXivDq'
        },
        {
          name: '競技プログラミング',
          timing: '2017.04-',
          content: 'AtCoderというサイトで開かれているコンテストに参加しています。\
                    現在のレート帯は緑です。\
                    学生のうちに水色になりたいです。\
                    第3回PAST(Practical Algorithm Skill Test)の成績は中級(64点)でした。',
          tech: 'C/C++ -> Ruby -> Go',
          link: 'https://atcoder.jp/users/mutsuro_626'
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.works-flex-container {
  width: 90%;
  margin-left: 5%;
}

.works-flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: flex-start;
}
</style>