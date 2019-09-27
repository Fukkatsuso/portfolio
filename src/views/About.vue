<template>
  <div>
    <SubTitle name="About me"/>
    <div>
      <div class="profile-table">
        <table>
          <tr v-for="item in profile">
            <th>{{ item.title }}</th>
            <td>{{ item.content }}</td>
          </tr>
        </table>
      </div>
      <div class="profile-link">
        <a href="https://github.com/Fukkatsuso" target="_blank"><font-awesome-icon class="profile-link-icon" :icon="githubIcon" /></a>
      </div>
    </div>

    <SubTitle name="Activity"/>
    <div class="profile-activity">
      <p>
        ロボコンサークルで大会に出場<br/>
        <ul>
          <li>NHK学生ロボコン2018ベスト4+アイデア賞</li>
          <li>NHK学生ロボコン2019ベスト4+デザイン賞</li>
          <li>キャチロボバトルコンテスト2019ベスト8+審査員特別賞</li>
        </ul>
      </p>
      <p>競技プログラミングのコンテスト(AtCoder)に個人参加中。Rating:600(茶色)</p>
    </div>

    <SubTitle name="Future"/>
    <div class="profile-future">
      <p>toC向けのWebサービス開発がしたい</p>
      <p>ビジネスの知識も持ったエンジニアになりたい</p>
      <p>個人でもチームでもたくさんのアプリ・サービスを開発したい</p>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'about',
  components: {
    SubTitle
  },
  data () {
    return {
      profile: [
        {title: 'Name',
        content: '無津呂 樹  (Mutsuro Tatsuki)'},
        {title: 'Age',
        content: '20'},
        {title: 'From',
        content: '福岡県'},
        {title: 'University',
        content: '九州大学 工学部 電気情報工学科 3年'},
        {title: 'Language',
        content: 'Ruby, C++, Japanese'},
        {title: 'Editor',
        content: 'VSCode'},
        {title: 'Favorite',
        content: 'MONKEY MAJIK, スピッツ'}
      ],
      githubIcon: faGithub
    }
  }
}
</script>

<style lang="scss">
.profile-card {
  width: 80%;
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
  padding: 1em 1.5em;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
}

.profile-table {
  @extend .profile-card;
  margin-bottom: 1em;
  text-align: left;
  table {
    width: 100%;
    margin: 0;
    padding: 0;
    tr {
      height: 2.5em;
      th {
        width: 25%;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
      }
      td {
        font-size: 1em;
        width: 75%;
      }
    }
  }
}

.profile-link {
  $sub-color: #4dd0e1;
  text-align: center;
  font-size: 2.5em;
  .profile-link-icon {
    background-color: #ffffff;
    color: $sub-color;
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  .profile-link-icon:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);    
  }
}

.profile-activity {
  @extend .profile-card;
  text-align: center;
  li {
    text-align: left;
  }
}

.profile-future {
  @extend .profile-card;
  text-align: center;
}
</style>