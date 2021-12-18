<template>
  <div>
    <div class="headerMobile">
      <div class="headerMobile__hamburger headerMobile__iconBox" @click="navOpen = !navOpen">
        <fa icon="bars" class="headerMobile__icon" v-show="!navOpen"></fa>
        <fa icon="times" class="headerMobile__icon" v-show="navOpen"></fa>
      </div>
      <div class="headerMobile__logo"
        @click="$router.push('/');tab = 0"
      ></div>
      <div class="headerMobile__iconBox">
        <!-- <fa icon="search" class="headerMobile__icon headerMobile__icon--search"></fa> -->
      </div>
    </div>
    <transition name="slide">
      <div class="navMobile" v-show="navOpen">
        <div class="navMobile__item" :class="{ 'navMobile__item--current': tab === item.id }" v-for="item in tabs" :key="item.id" @click="handleUpdateTab(item.id, item.route)">{{ item.name }}</div>
      </div>
    </transition>
    <transition name="fade">
      <div class="navMobile__mask" v-show="navOpen" @click="navOpen = !navOpen"></div>
    </transition>
    <div class="header__bg">
      <div class="container" v-if="headers.length">
        <div class="header">
          <div class="header__item" v-for="(item, index) in headers" :key="item.concat(index.toString())">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="container" v-else>
        <div class="header">
          <div class="header__item">
            THIS
          </div>
        </div>
      </div>
    </div>
    <div class="search__bg">
      <div class="search container">
        <div
          class="search__logo"
          @click="
            $router.push('/')
            tab = 0
          "
          :style="{ 'background-image': `url(${'logo.png'})`}"
        ></div>
        <div class="search__bar">
          <input
            type="text"
            placeholder="Search 2,962,567 items..."
            class="searchBar"
            v-model="query"
            @keydown.enter="handleSearch"
          />
          <div class="searchBar__btn" @click="handleSearch">
            <fa icon="search" class="searchBar__btnIcon"></fa>
          </div>
        </div>
        <div class="search__btnBox">
          <button class="btn btn--secondary btn--first" @click="handleExternalLink(0)">
            <fa :icon="['fab', 'github']" class="btn__icon--small"></fa>
            <div class="btn__text">Github</div>
          </button>
          <button class="btn btn--primary" @click="handleExternalLink(1)">
            <fa :icon="['fab', 'linkedin']" class="btn__icon--small"></fa>
            <div class="btn__text">LinkedIn</div>
          </button>
        </div>
        <div class="search__funcBox">
          <button class="link link--first" @click="handleToggleDropdown($event, 'about')">
            Version
            <div class="link__dropdown" v-show="dropdown.about" @click="$event.stopPropagation()">
              {{ 'v' + info.version || '1.0' }}- inspired by <a href="https://pornhub.com" target="_blank">Pornhub.com</a>
            </div>
          </button>
          <button class="link" @click="handleToggleDropdown($event, 'contact')">
            Contact
            <div class="link__dropdown" v-show="dropdown.contact" @click="$event.stopPropagation()">
              <div class="link__dropdownChild">
                Email:
                <a :href="`mailto:${info.email}?subject:work-inquiries&body=work-inquiries`">
                  {{ info.email }}
                </a>
              </div>
              <div class="link__dropdownChild--last">Phone: <a :href="`tel:${info.phone}`">{{ info.phone }}</a></div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="tabs__bg">
      <div class="tabs container" v-if="tabs.length">
        <div
          class="tabs__item"
          v-for="item in tabs"
          :key="item.id"
          :class="{ 'tabs__item--current': tab === item.id }"
          @click="handleUpdateTab(item.id, item.route)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="tabs container" v-else>
        <div
          class="tabs__item"
        >
          ABOUT
        </div>
      </div>
    </div>
    <div class="body__bg">
      <div class="container">
        <main class="body">
          <Nuxt />
        </main>
      </div>
      <div class="footer">
        <div class="footer__bgTop">
          <div class="footer__top">
            <div class="container">
              <div class="footer__topBarBox">
                <div class="footer__topBar">
                  <div class="footer__topBarTitle">Information</div>
                  <div class="footer__topBarList">
                    <div class="footer__topBarListItem" v-for="item in tabs" :key="item.id" @click="handleUpdateTab(item.id, item.route)">{{ item.name }}</div>
                  </div>
                </div>
                <div class="footer__topBar">
                  <div class="footer__topBarTitle">inquiries</div>
                  <div class="footer__topBarList">
                    <div class="footer__topBarListItem">
                      <a :href="`mailto:${info.email}?subject:work-inquiries&body=work-inquiries`">
                        Email
                      </a>
                    </div>
                    <div class="footer__topBarListItem">
                      <a class="link" :href="`tel:${info.phone}`">
                        Phone
                      </a>
                    </div>
                  </div>
                </div>
                <div class="footer__topBar">
                  <div class="footer__topBarTitle">About</div>
                  <div class="footer__topBarList">
                    <div class="footer__topBarListItem" @click="handleToggleDropdown($event, 'aboutFooter')">
                      {{ 'v' + info.version || '1.0' }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer__topBarLangBox">
                <div class="footer__topBarLang">
                  <div class="footer__topBarLangLabel">Language:</div>
                  <select name="" id="">
                    <option value="english">English</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="footer__bottom">
            <div class="footer__bottomLeft">
              <div @click="handleExternalLink(0)" class="footer__bottomLeftItem footer__bottomLeftItem--active">
                <fa :icon="['fab', 'github']" class="headerMobile__icon headerMobile__icon--search"></fa>
              </div>
              <div @click="handleExternalLink(1)" class="footer__bottomLeftItem footer__bottomLeftItem--active">
                <fa :icon="['fab', 'linkedin']" class="headerMobile__icon headerMobile__icon--search"></fa>
              </div>
              <div class="footer__bottomLeftItem">
                <fa :icon="['fas', 'star']" class="headerMobile__icon headerMobile__icon--search"></fa>
              </div>
              <div class="footer__bottomLeftItem">
                <fa :icon="['fas', 'star']" class="headerMobile__icon headerMobile__icon--search"></fa>
              </div>
              <div class="footer__bottomLeftItem">
                <fa :icon="['fas', 'star']" class="headerMobile__icon headerMobile__icon--search"></fa>
              </div>
            </div>
            <div class="footer__bottomRight">
              <div class="footer__bottomRightItem">
                &copy; IreneHub.com, 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { Card, Links, Tab, Settings, Info } from '~/types/index.ts'
import { $axios } from '~/utils/api.ts'
import { dataStore } from '~/store/index'

@Component({
  middleware: ['static']
})
export default class Default extends Vue {
  private navOpen: boolean = false

  private query: string = ''

  private tabShow: boolean = false

  private static tabInit: number = 999999999

  private tab: number = Default.tabInit

  @Watch('navOpen')
  onNavOpen(val: boolean) {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  private processTabChange(route: string): void {
    const tab: string | null = window.localStorage.getItem('tab')
    if (tab !== null) {
      this.tab = Number(tab)
      const routeObj = this.tabs.find((item: Tab) => Number(item.id) === Number(tab))
      if (routeObj) {
        this.$router.push(routeObj.route)
      }
    } else if (tab === null) {
      const path = this.$route.path
      const routeObj: Tab | undefined = this.tabs.find((item: Tab) => item.route === path)
      if (routeObj) {
        window.localStorage.setItem('tab', routeObj.id.toString())
        this.processTabChange(routeObj.route)
        this.$router.push(routeObj.route)
      }
    }
  }

  private handleUpdateTab(tab: number, route: string): void {
    this.tab = tab
    this.$router.push({ path: route })
    window.localStorage.setItem('tab', tab.toString())
    this.navOpen = false
    window.scrollTo(0, 0)
  }

  private handleExternalLink(id: number): void {
    window.open(this.externalLinkMap[id], '_blank')
  }

  // TODO
  private handleSearch(): void {}

  private dropdown: any = {
    about: false,
    contact: false,
    contactFooter: false,
    aboutFooter: false
  }

  private handleToggleDropdown($event: Event, name: string): void {
    $event.stopPropagation()
    Object.keys(this.dropdown).forEach((item: string) => {
      if (item !== name) {
        this.dropdown[item] = false
      }
    })
    this.dropdown[name] = !this.dropdown[name]
  }

  private get settings(): Settings {
    return dataStore.data.settings ? dataStore.data.settings : {}
  }

  private get headers(): Array<String> {
    return this.settings.headers ? this.settings.headers : []
  }

  private get tabs(): Array<Tab> {
    return this.settings.tabs ? this.settings.tabs : []
  }

  private get externalLinkMap(): Links {
    return this.settings.externalLinkMap ? this.settings.externalLinkMap : {}
  }

  private get info(): Info {
    return dataStore.data.info ? dataStore.data.info : {}
  }

  private timeout: any = null

  private get welcomeMsg(): string {
    return dataStore.data.settings ? dataStore.data.settings.welcomeMsg : 'Welcome...'
  }

  private initWelcomeMessage(): void {
    for(let i = 0; i < this.welcomeMsg.length; i++) {
      this.timeout = setTimeout(() => {
        this.timeout = setTimeout(() => {
          this.query += this.welcomeMsg[i]
        }, 500 * (i + 1))
      }, 1500)
    }
  }

  private reformatData(): any {
    let dataReformatted: any = {}
    Object.keys(dataStore.data).forEach((item: string) => {
      const target = dataStore.data[item]
      if(item === 'info' || item === 'settings') {
        dataReformatted[item] = { ...target }
      } else if(target instanceof Array) {
        dataReformatted[item] = [...target.map((card: Card) => {
          return { ...card, staticPath: dataStore.staticPrefix }
        })]
      } else if(target instanceof Object) {
        dataReformatted[item] = {}
        Object.keys(target).forEach((targetItem: string) => {
          const res = target[targetItem].map((card: Card) => {
            return { ...card, staticPath: dataStore.staticPrefix }
          })
          dataReformatted[item] = { ...dataReformatted[item], [targetItem]: res }
        })
      } else {
        dataReformatted[item] = target
      }
    })
    return dataReformatted
  }

  private mounted(): void {
    const route: string = this.$route.path
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await dataStore.sendGetExperienceRequest()
      dataStore.setData(this.reformatData())
      this.processTabChange(route)
      this.$nuxt.$loading.finish()
      this.initWelcomeMessage()
    })
  }

  private beforeDestroy(): void {
    this.timeout = null
  }
}
</script>
