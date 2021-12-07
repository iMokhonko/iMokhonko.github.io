<template>
  <div :class="classList">
    <div class="test-page__inner">
   
    <transition name="fade" appear>
      <div class="test-page__overlay" v-if="!started">
        <div class="avatar">
          <img src="https://i.pinimg.com/originals/c1/14/12/c114123eb48fc0712b2482264414d9d7.gif">
        </div>
        <el-button type="primary" @click="started = true" round>Начать тест на сашульку</el-button>

        <div class="overlay-footer">
          <img src="https://logos-download.com/wp-content/uploads/2016/02/world-of-tanks.png" >
          <img src="https://ru.wargaming.net/clans/media/clans/emblems/cl_636/480636/emblem_195x195.png">
        </div>
        <span>Generan (c) 2004 - 2021</span>
      </div>
    </transition>


    <transition name="fade" appear>
      <div v-if="started" class="test-container">

      <div :class="['test-container__progress', { 'test-container__progress--hidden': progress === 100 }]">
        <el-progress :percentage="progress"></el-progress>
      </div>

      <div class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide 1">
            <h1>В какой клан вы бы пошли?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>[GAYC] Gay Crew</el-button>
              <el-button type="primary" @click="answer(2)" round>[4YHAN] Построй свой завод Балтика 9</el-button>
              <el-button type="primary" @click="answer(3)" round>[GNRAN] Generan army</el-button>
              <el-button type="primary" @click="answer(4)" round>[RUSIA] RUSSKIYE NE ZDAYUTSA! SMERT AMERIKE</el-button>
            </div>
          </div>

          <div class="swiper-slide 2">
            <h1>Ваш любимый танковый блогер?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>ХРЮША ВОЛД ОФ ТЕНКС</el-button>
              <el-button type="primary" @click="answer(2)" round>ДОРБЕН КАЛОС</el-button>
              <el-button type="primary" @click="answer(3)" round>САНЯ СИБИРКИН</el-button>
              <el-button type="primary" @click="answer(4)" round>ЛЮБЛЮ МАМУ</el-button>
            </div>
          </div>

          <div class="swiper-slide 3">
            <h1>ВАШ ЛЮБИМЫЙ ТАНК ДЛЯ НАСВЕТА?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>ЕБЛИК</el-button>
              <el-button type="primary" @click="answer(2)" round>ТЭВЭПЭ</el-button>
              <el-button type="primary" @click="answer(3)" round>НЕ ИГРАЮ В ТАНКИ</el-button>
              <el-button type="primary" @click="answer(4)" round>ЛЮБЛЮ КАКАТЬ</el-button>
            </div>
          </div>

          <div class="swiper-slide 4">
            <h1>НАСКОЛЬКО СИЛЬНО ВЫ УВАЖАЕТЕ СОЮЗНИКОВ?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>Пытаюсь уважать всех, ведь помимо меня эти люди тоже личности</el-button>
              <el-button type="primary" @click="answer(2)" round>Если союзник рак, то напишу в чате плохие слова в его сторону</el-button>
              <el-button type="primary" @click="answer(3)" round>Буду прояснять всем за их 2к на топах имея 3100 на чифтейне</el-button>
              <el-button type="primary" @click="answer(4)" round>ЭЖЖИ МАМУ ИХ ЕБАЛ</el-button>
            </div>
          </div>

          <div class="swiper-slide 5">
            <h1>ЕСЛИ БЫ ВЫ ПРОДАЛИ СВОЙ АККАУНТ, ТО НА ЧТО ПОТРАТИЛИ БЫ ДЕНЬГИ?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>Вложу в бизнес и открою ларек с шавурмой</el-button>
              <el-button type="primary" @click="answer(2)" round>Заведу твинк и сделаю 3500 на чифтейне</el-button>
              <el-button type="primary" @click="answer(3)" round>Отдам деньги маме</el-button>
              <el-button type="primary" @click="answer(4)" round>Куплю новые туфли</el-button>
            </div>
          </div>

          <div class="swiper-slide 6">
            <h1>ЕСЛИ БЫ ВЫ СЫГРАЛИ КРУТОЙ БОЙ ТО КАКОЕ НАЗВАНИЕ БЫ ЕМУ ДАЛИ?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>Лээ,куда прешь.(Колобанов )</el-button>
              <el-button type="primary" @click="answer(2)" round>КЫК БЫК СПОРт</el-button>
              <el-button type="primary" @click="answer(3)" round>- тупые дефки упоранты</el-button>
              <el-button type="primary" @click="answer(4)" round>Псина приехала после учебы и решила катнуть</el-button>
            </div>
          </div>

          <div class="swiper-slide 7">
            <h1>КАКОЙ ДЕВОЧКЕ ВЫ БЫ ПОСВЯТИЛИ СВОЙ ЛУТШЫЦ БОЙ НА 4К УРОНА?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>Маринке</el-button>
              <el-button type="primary" @click="answer(2)" round>АНЕЧЬКЕ</el-button>
              <el-button type="primary" @click="answer(3)" round>ЗОРЕЧКЕ</el-button>
              <el-button type="primary" @click="answer(4)" round>ИВАНУ МОШОНКЕ</el-button>
            </div>
          </div>

          <div class="swiper-slide 8">
            <h1>ЕСЛИ БЫ ВЫ ПРИДУМЫВАЛИ НИК ТО КАКОЙ БЫ ОН БЫЛ?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>LiquidatorBaltiki</el-button>
              <el-button type="primary" @click="answer(2)" round>E6Y_RUSSKIX</el-button>
              <el-button type="primary" @click="answer(3)" round>GENERAN_DEPYTAT</el-button>
              <el-button type="primary" @click="answer(4)" round>GENERAL_SOSALOV</el-button>
            </div>
          </div>

          <div class="swiper-slide 9">
            <h1>КАКИЕ БЫ МОДЫ ВЫ ПОСТАВИЛИ?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>Однозначо моды от ЮШЫ</el-button>
              <el-button type="primary" @click="answer(2)" round>МОДЫ ОТ ПАПКИ ДЖОВА</el-button>
              <el-button type="primary" @click="answer(3)" round>ТОЛЬКО МОДЕФИКАЦИИ ОТ КОРБЕНА ДЛЯ ЗАГЛУШКИ ФУГАСОВ</el-button>
              <el-button type="primary" @click="answer(4)" round>Играю без модов и маркер хп в процентах! 👍</el-button>
            </div>
          </div>

          <div class="swiper-slide 10">
            <h1>И ПОСЛЕДНИЙ ВОПРОС, ЧТО БЫ ВЫ ПОЖЕЛАЛИ САНЕ ШАБЛОЛДЕ НА ДЕНЬ РАШТЕНИЕ?</h1>

            <div class="answer-container">
              <el-button type="primary" @click="answer(1)" round>ЗДОРОВЬЯ И УДАЧИ НА ПОЛЯХ СРАЖЕНИЙ</el-button>
              <el-button type="primary" @click="answer(2)" round>ОТСУТСВИЯ КАМНЕЙ В ПОЧКАХ</el-button>
              <el-button type="primary" @click="answer(3)" round>ТРЕХ ОТМЕТОК НА АРТЕ</el-button>
              <el-button type="primary" @click="answer(4)" round>ЧТО БЫ НЕ КИДАЛИ НА ДЕНЬГИ ЗА БУСТ АКАВУНТА</el-button>
            </div>
          </div>

          <div class="swiper-slide result">
            <center><h1>ПОЗДРАВЛЯЕМ 👍</h1></center>
            
            <div class="avatar" style="margin-top: 0;">
              <img :src="result.image">
            </div>

            <h3>{{ result.label }}</h3>

            <h4>{{ result.description }}</h4>

          </div>

        </div>
      </div>

      </div>
    </transition>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

export default {
  name: 'Home',

  components: {
    HelloWorld
  },

  data() {
    return {
      started: false,
      swiper: null,
      progress: 0,
      points: 0
    }
  },

  watch: {
    async started(nv) {
      await this.$nextTick();

    this.swiper = new Swiper(this.$refs.swiper, {
      allowTouchMove: false
    });
    }
  },

  computed: {
    classList() {
      return [
        'test-page',
        {
          [`test-page--${this.result.type}`]: this.progress === 100
        }
      ];
    },

    result() {
      if(this.points <= 15)
        return {
          label: 'ВЫ САШУЛЬКА ЧИПИЗДРЮЧЕНКО 👍',
          description: 'ВЫ ПРОСТО ТАНКОВЫЙ ТОКСИК, ТАКИХ КАК ВЫ ЛЕХИ ЕБУТ ФУГАСАМИ',
          image: require('../assets/3.jpg'),
          type: 'red'
        }

      if(this.points <= 25)
        return {
          label: 'ВЫ САШУЛЬКА СКВИРТЛОВ 👍',
          description: 'ВЫ ЧИТАЕТЕ ТАНКАВЫЕ НОВОСТИ И ВЕЖЛИВО ИГРАЕТЕ В ИГРУ! ',
          image: require('../assets/1.jpg'),
          type: 'orange'
        }

      if(this.points <= 30)
        return {
          label: 'ВЫ САШУЛЬКА ЧИПИЗДРЮЧЕНКО 👍',
          description: 'ВЫ ПРОСТО ТАНКОВЫЙ ТОКСИК, ТАКИХ КАК ВЫ ЛЕХИ ЕБУТ ФУГАСАМИ',
          image: require('../assets/3.jpg'),
          type: 'yellow'
        }

      if(this.points <= 35)
        return {
          label: 'ВЫ САШУЛЬКА СПЕРМОБАКОВ 👍',
          description: 'ВЫ ПРОСТО ЛЮБИТЕ БАХНУТ БАЛТИКИ И ОТДОХНУТЬ НА ДЖОЙСТИКЕ СВОЕГО ДРУГА',
          image: require('../assets/5.jpg'),
          type: 'blue'
        }

      if(this.points <= 40)
        return {
          label: 'ВЫ САШУЛЬКА БЕБРОНЮХ 👍',
          description: 'ВЫ СИДИТЕ В КУСТАХ ЗА СПИНАМИ СОЮЗНИКОВ И ПРОСТО НЮХАЕТЕ БЕБРУ',
          image: require('../assets/4.jpg'),
          type: 'violet'
        }
    }
  },

  methods: {
    answer(points) {
      this.swiper.slideNext();
      this.progress += 10;

      this.points += points;
    }
  }
}
</script>

<style lang="scss">
@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


.test-page {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  transition: all 0.3s ease-out;

  &__inner {
    box-sizing: border-box;
    width: 100%;
    max-width: 680px;
    height: 100vh;
    max-height: 100vh;
    margin: 0 auto;
    padding: 16px;
    position: relative;
  }

  &--violet {
    background-color: #e056fd;
    color: #fff;
  }

  &--red {
    background-color: red;
    color: #fff;
  }

  &--yellow {
    background-color: yellow;
    color: #000;
  }

  &--blue {
    background-color: blue;
    color: #fff;
  }

  &--orange {
    background-color: orange;
    color: #000;
  }

  &__overlay {
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .avatar {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 56px;
    margin-top: auto;
    justify-content: center;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  .overlay-footer {
    display: flex;
    margin-top: auto;
    margin-bottom: 24px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    img {
      height: 100px;
    }
  }

  span {
    margin-bottom: 24px;
    font-weight: bold;
  }

  .test-container {
    .el-progress__text {
      display: none;
    }

    .el-progress-bar {
      margin-right: 0;
      padding-right: 0;
    }

    &__progress {
      margin-bottom: 24px;
      transition: all 0.3s ease-out;

      &--hidden {
        opacity: 0;
      }
    }

    .swiper-wrapper {
      height: calc(100vh - 10vh);
    }

    .swiper-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      flex-grow: 1;

      .answer-container {
        width: 100%;
        margin-top: auto;

        .el-button {
          width: calc(100% - 32px);
          margin-bottom: 16px;
          margin-left: 0;
          height: 50px;
          margin-left: 16px;
          margin-right: 16px;
        }
      }

      h1 {
        font-weight: bold;
        margin-bottom: 48px;
      }

      &.result {
        // color: #fff;
      }
    }
  }
}
</style>
