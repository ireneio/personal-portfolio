import { i18nData } from '~/types/index'
import { $axios } from '~/utils/api'

class I18n {
  private i18nData: any = {}

  private i18nDataOriginal: Array<i18nData> = []

  public i18nTarget(key: string): string {
    return this.i18nData[key]
  }

  public get getI18nData(): any {
    return this.i18nData
  }

  public get getI18nDataOriginal(): any {
    return this.i18nDataOriginal
  }

  private setI18nData(payload: Array<i18nData> | any): void {
    const { Results }: Array<i18nData> | any = payload.data
    const map: any = {}
    Results.forEach((item: i18nData) => {
      const key = item.Key.split('{')[1].split('}')[0]
      map[key] = item.Value
    })
    this.i18nData = map
    this.i18nDataOriginal = [ ...Results ]
  }

  private async sendGetI18nRequest(): Promise<any> {
    const requestBody = {
      Conditions: [
        {
            ParameterType: 'Platform',
            TypeCode: 'I18N'
        }
      ]
    }
    try {
      const result = await $axios.post('/Utility/QueryParameters', requestBody)
      this.setI18nData(result)
    } catch(e) {
      console.log((e as Error).message)
    }
  }

  public async init() {
    await this.sendGetI18nRequest()
  }
}

export const I18nFactory = new I18n()

