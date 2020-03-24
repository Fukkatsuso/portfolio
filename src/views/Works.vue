<template>
  <div>
    <SubTitle name="Works"/>
    <div class="works-flex-container">
      <WorkCard 
        v-for="work in works" 
        v-bind:key="work.name"
        v-bind:name="work.name"
        v-bind:timing="work.timing"
        v-bind:content="work.content"
        v-bind:tech="work.tech"
        v-bind:link="work.link" />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import WorkCard from '@/components/WorkCard.vue'

export default {
  name: 'works',
  components: {
    SubTitle,
    WorkCard
  },
  data () {
    return {
      works: [
        {
          name: '飲食店検索LINEbot',
          timing: '2020.03',
          content: '位置情報から周辺の飲食店を検索できるLINEbotです。\
                    遠征先での食事処選びにいつも困っていたので、即決できるようなアプリ等が欲しいと思い作りました。\
                    元々Sinatra + ホットペッパーAPI + Herokuで作っていたものを、Go + GooglePlacesAPI + GAEに置き換えているところです。',
          tech: 'Go, Docker, GAE',
          link: 'https://line.me/R/ti/p/%40438ryinm'
        },
        {
          name: 'portfolio',
          timing: '2019.09',
          content: 'このポートフォリオサイトです。\
                    Vue.jsでSPAとして作成しています。\
                    マテリアルデザインを意識して仕上げました。\
                    個性がなさすぎるので面白いポイントを1つ作れないかと画策中です。',
          tech: 'HTML, CSS, Vue.js, Docker',
          link: 'https://github.com/Fukkatsuso/portfolio'
        },
        {
          name: 'stoch',
          timing: '2019.08',
          content: 'GA technologiesさんのハッカソンイベントで3人+メンター1人で制作したWebアプリです。\
                    商品名で在庫のある近くの店が検索でき、欲しい商品に最短距離でたどり着けるというものです。\
                    発案やルーティングやフロントエンド(一部)を担当しました。',
          tech: 'Rails'
        },
        { 
          name: '数独アプリ',
          timing: '2019.06',
          content: '好きな数独をテーマに、Railsアプリ制作の練習で作りました。\
                    数独パズルの選択・解答・答え合わせのみ実装済です。\
                    現在開発はストップしていますが、近頃(2020.03)数独問題生成&ソルバーを作ったので余力があればアプリに組み込んでみたいと思っています。',
          tech: 'Rails',
          link: 'https://sudoku-rails-app.herokuapp.com/'
        },
        { 
          name: '4足歩行ロボット制御',
          timing: '2018.09-2019.04',
          content: 'NHK学生ロボコン2019に向け制作した4足歩行ロボットで、歩行プログラムを担当しました。\
                    春休み中悩み抜いたのが記憶に色濃く残っています。\
                    これに比べるとWeb関連の制作物の苦労度合いが低すぎるのでアピールに困っています。',
          tech: 'C++, 気合',
          link: 'https://drive.google.com/open?id=1yeCTWXlxsmA1EgzNQnJ2zXAiVHBXivDq'
        },
        {
          name: '競技プログラミング',
          timing: '2017.04-',
          content: 'AtCoderというサイトで開かれているコンテストに参加しています。\
                    現在のレート帯は緑です。\
                    学生のうちに水色になりたいです。',
          tech: 'C/C++ -> Ruby -> Go',
          link: 'https://atcoder.jp/users/mutsuro_626'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.works-flex-container {
  width: 80%;
  margin-left: 10%;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-left: 5%;
  }
}

.works-flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: flex-start;
}
</style>