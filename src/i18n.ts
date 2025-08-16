import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      title: 'The Retro Revolution',
      subtitle: 'A digital revival of the retro computer era where nostalgia meets modern innovation.',
      noModelSelected: 'No Model Selected',
      selectModel: 'Please select a 3D model from the list to view',
      addModel: 'Add Model',
      deleteModel: 'Delete',
      loading: 'Loading 3D model...',
      modelList: 'Model List',
      viewer: '3D Viewer'
    }
  },
  zh: {
    translation: {
      title: '复古革命',
      subtitle: '怀旧与现代创新相遇的复古计算机时代数字复兴。',
      noModelSelected: '未选择模型',
      selectModel: '请从列表中选择一个3D模型进行查看',
      addModel: '添加模型',
      deleteModel: '删除',
      loading: '正在加载3D模型...',
      modelList: '模型列表',
      viewer: '3D查看器'
    }
  },
  ja: {
    translation: {
      title: 'レトロ革命',
      subtitle: 'ノスタルジアと現代のイノベーションが出会うレトロコンピュータ時代のデジタル復活。',
      noModelSelected: 'モデルが選択されていません',
      selectModel: 'リストから3Dモデルを選択して表示してください',
      addModel: 'モデルを追加',
      deleteModel: '削除',
      loading: '3Dモデルを読み込み中...',
      modelList: 'モデルリスト',
      viewer: '3Dビューア'
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n