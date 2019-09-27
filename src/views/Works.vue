<template>
  <div>
    <SubTitle name="Works"/>
    <div class="works-flex-container">
      <WorkCard 
        v-for="work in works" 
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
          name: 'portfolio',
          timing: '2019.09',
          content: 'このポートフォリオサイトです。\
                    Vue.jsでSPAとして作成しています。\
                    マテリアルデザインを意識して仕上げました。',
          tech: 'HTML, CSS, Vue.js',
          link: 'https://github.com/Fukkatsuso/portfolio'
        },
        {
          name: 'stoch',
          timing: '2019.08',
          content: 'GA technologiesさんのハッカソンイベントで3人+メンター1人で制作したWebアプリです。\
                    商品名で近くの店が検索でき、欲しい商品に最短距離でたどり着けるというコンセプトです。\
                    ルーティングやフロントエンド(一部)を担当しました。',
          tech: 'Rails'
        },
        { 
          name: '数独アプリ',
          timing: '2019.06',
          content: 'Railsアプリ制作の練習に作りました。\
                    数独パズルの選択・解答・答え合わせのみ実装済です。',
          tech: 'Rails',
          link: 'https://sudoku-rails-app.herokuapp.com/'
        },
        { 
          name: '4足歩行ロボット制御',
          timing: '2018.09-2019.04',
          content: 'NHK学生ロボコン2019に向け制作した4足歩行ロボットで、歩行プログラムを担当しました。',
          tech: 'C++, 気合',
          link: 'https://drive.google.com/open?id=1yeCTWXlxsmA1EgzNQnJ2zXAiVHBXivDq'
        },
        {
          name: '競技プログラミング',
          timing: '2017.04-',
          content: 'AtCoderというサイトで開かれているコンテストに参加しています。',
          tech: 'Ruby',
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: flex-start;
}
</style>