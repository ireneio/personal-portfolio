import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { AxiosResponse } from 'axios'
import { $axios } from '~/utils/api'
import { determineStaticAssetsPath } from '~/utils/static'

@Module({
  name: 'data',
  stateFactory: true,
  namespaced: true
  // dynamic: true,
})
export default class DataModule extends VuexModule {
  public data: any = {}

  public staticPrefix: string = ''

  @Mutation
  public setData(payload: any) {
    this.data = payload
  }

  @Mutation
  public setStaticPrefix() {
    this.staticPrefix = determineStaticAssetsPath()
  }

  @Action({ commit: 'setData' })
  public async sendGetExperienceRequest(): Promise<any> {
    try {
      const res: AxiosResponse = await $axios.get('/data.json')
      console.log(res.data)
      return res.data
    } catch(e) {
      console.log('Error: ' + e.message)
      return []
    }
  }
}
