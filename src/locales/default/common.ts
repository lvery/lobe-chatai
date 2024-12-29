export default {
  about: '关于',
  advanceSettings: '高级设置',
  alert: {
    cloud: {
      action: '立即体验',
      desc: '我们为所有注册用户提供了免费的 {{credit}} 额度计算积分，无需复杂配置开箱即用, 支持全局云同步与进阶联网查询，更多高级特性等你探索。',
      descOnMobile:
        '我们为所有注册用户提供了免费的 {{credit}} 额度计算积分，无需复杂配置开箱即用。',
      title: '{{name}} 开始公测',
    },
  },
  appLoading: {
    appIdle: '准备启动',
    appInitializing: '应用启动中...',
    failed: '很抱歉，应用初始化失败，请查看详情进行排查',
    finished: '数据库初始化完成',
    goToChat: '对话页面加载中...',
    initAuth: '鉴权服务初始化...',
    initUser: '用户状态初始化...',
    initializing: 'PGlite 数据库初始化...',
    loadingDependencies: '初始化依赖...',
    loadingWasm: '加载 WASM 模块...',
    migrating: '执行数据表迁移...',
    ready: '数据库已就绪',
    showDetail: '查看详情',
  },
  autoGenerate: '自动补全',
  autoGenerateTooltip: '基于提示词自动补全助手描述',
  autoGenerateTooltipDisabled: '请填写提示词后使用自动补全功能',
  back: '返回',
  batchDelete: '批量删除',
  blog: '产品博客',
  branching: '创建子话题',
  branchingDisable:
    '「子话题」功能在当前模式下不可用，如需该功能，请切换到 Postgres/Pglite DB 模式或使用 LobeChat Cloud',
  cancel: '取消',
  changelog: '更新日志',
  clientDB: {
    autoInit: {
      title: '初始化 PGlite 数据库',
    },
    error: {
      desc: '非常抱歉，Pglite 数据库初始化过程发生异常。请点击按钮重试。如多次重试后仍重复出错，请 <1>提交问题</1> ，我们将会第一时间帮你排查',
      detail: '错误原因：[{{type}}] {{message}}，明细如下：',
      retry: '重试',
      title: '数据库初始化失败',
    },
    initing: {
      error: '数据库初始化出错，点击查看详情',
      idle: '等待初始化...',
      initializing: '正在初始化...',
      loadingDependencies: '加载依赖中...',
      loadingWasmModule: '加载 WASM 模块中...',
      migrating: '执行数据表迁移...',
      ready: '数据库已就绪',
    },
    modal: {
      desc: '立即启用下一代客户端数据库。在你的浏览器中持久存储聊天数据，并使用知识库等进阶特性。',
      enable: '立即启用',
      features: {
        knowledgeBase: {
          desc: '沉淀你的个人知识库，并与你的助手轻松开启知识库对话（即将上线）',
          title: '支持知识库对话，开启第二大脑',
        },
        localFirst: {
          desc: '聊天数据完全存储在浏览器中，你的数据始终在你的掌握。',
          title: '本地优先，隐私至上',
        },
        pglite: {
          desc: '基于 PGlite 构建，原生支持 AI Native 高阶特性（向量检索）',
          title: '新一代客户端存储架构',
        },
      },
      init: {
        desc: '正在初始化数据库，视网络差异可能会用时 5~30 秒不等',
        title: '正在初始化 PGlite 数据库',
      },
      title: '开启客户端数据库',
    },
    ready: {
      button: '立即使用',
      desc: '立即想用',
      title: 'PGlite 数据库已就绪',
    },
  },
  close: '关闭',
  contact: '联系我们',
  copy: '复制',
  copyFail: '复制失败',
  copySuccess: '复制成功',
  dataStatistics: {
    messages: '消息',
    sessions: '助手',
    today: '今日新增',
    topics: '话题',
  },
  defaultAgent: '自定义助手',
  defaultSession: '自定义助手',
  delete: '删除',
  document: '使用文档',
  download: '下载',
  duplicate: '创建副本',
  edit: '编辑',
  export: '导出配置',
  exportType: {
    agent: '导出助手设定',
    agentWithMessage: '导出助手和消息',
    all: '导出全局设置和所有助手数据',
    allAgent: '导出所有助手设定',
    allAgentWithMessage: '导出所有助手和消息',
    globalSetting: '导出全局设置',
  },
  feedback: '反馈与建议',
  follow: '在 {{name}} 上关注我们',
  footer: {
    action: {
      feedback: '分享您宝贵的建议',
      star: '在 GitHub 给添加星标',
    },
    and: '并',
    feedback: {
      action: '分享反馈',
      desc: '您的每一个想法和建议对我们来说都弥足珍贵，我们迫不及待地想知道您的看法！欢迎联系我们提供产品功能和使用体验反馈，帮助我们将 {{appName}} 建设得更好。',
      title: '在 GitHub 分享您宝贵的反馈',
    },
    later: '稍后',
    star: {
      action: '点亮星标',
      desc: '如果您喜爱我们的产品，并希望支持我们，可以去 GitHub 给我们点一颗星吗？这个小小的动作对我们来说意义重大，能激励我们为您持续提供特性体验。',
      title: '在 GitHub 为我们点亮星标',
    },
    title: '喜欢我们的产品？',
  },
  fullscreen: '全屏模式',
  historyRange: '历史范围',
  import: '导入配置',
  importModal: {
    error: {
      desc: '非常抱歉，数据导入过程发生异常。请尝试重新导入，或 <1>提交问题</1>，我们将会第一时间帮你排查问题。',
      title: '数据导入失败',
    },
    finish: {
      onlySettings: '系统设置导入成功',
      start: '开始使用',
      subTitle: '数据导入成功，耗时 {{duration}} 秒。导入明细如下：',
      title: '数据导入完成',
    },
    loading: '数据导入中，请耐心等待...',
    preparing: '数据导入模块准备中...',
    result: {
      added: '导入成功',
      errors: '导入出错',
      messages: '消息',
      sessionGroups: '分组',
      sessions: '助手',
      skips: '重复跳过',
      topics: '话题',
      type: '数据类型',
    },
    title: '导入数据',
    uploading: {
      desc: '当前文件较大，正在努力上传中...',
      restTime: '剩余时间',
      speed: '上传速度',
    },
  },
  information: '社区与资讯',
  installPWA: '安装浏览器应用 (PWA)',
  lang: {
    'ar': '阿拉伯语',
    'bg-BG': '保加利亚语',
    'bn': '孟加拉语',
    'cs-CZ': '捷克语',
    'da-DK': '丹麦语',
    'de-DE': '德语',
    'el-GR': '希腊语',
    'en': '英语',
    'en-US': '英语',
    'es-ES': '西班牙语',
    'fa-IR': '波斯语',
    'fi-FI': '芬兰语',
    'fr-FR': '法语',
    'hi-IN': '印地语',
    'hu-HU': '匈牙利语',
    'id-ID': '印尼语',
    'it-IT': '意大利语',
    'ja-JP': '日语',
    'ko-KR': '韩语',
    'nl-NL': '荷兰语',
    'no-NO': '挪威语',
    'pl-PL': '波兰语',
    'pt-BR': '葡萄牙语',
    'pt-PT': '葡萄牙语',
    'ro-RO': '罗马尼亚语',
    'ru-RU': '俄语',
    'sk-SK': '斯洛伐克语',
    'sr-RS': '塞尔维亚语',
    'sv-SE': '瑞典语',
    'th-TH': '泰语',
    'tr-TR': '土耳其语',
    'uk-UA': '乌克兰语',
    'vi-VN': '越南语',
    'zh': '简体中文',
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
  },
  layoutInitializing: '正在加载布局...',
  legal: '法律声明',
  loading: '加载中...',
  mail: {
    business: '商务合作',
    support: '邮件支持',
  },
  oauth: 'SSO 登录',
  officialSite: '官方网站',
  ok: '确定',
  password: '密码',
  pin: '置顶',
  pinOff: '取消置顶',
  privacy: '隐私政策',
  regenerate: '重新生成',
  releaseNotes: '版本详情',
  rename: '重命名',
  reset: '重置',
  retry: '重试',
  send: '发送',
  setting: '设置',
  share: '分享',
  stop: '停止',
  sync: {
    actions: { settings: '同步设置', sync: '立即同步' },
    awareness: {
      current: '当前设备',
    },
    channel: '频道',
    disabled: {
      actions: { enable: '开启云端同步', settings: '配置同步参数' },
      desc: '当前会话数据仅存储于此浏览器中。如果你需要在多个设备间同步数据，请配置并开启云端同步。',
      title: '数据同步未开启',
    },
    enabled: {
      title: '数据同步',
    },
    status: {
      connecting: '连接中',
      disabled: '同步未开启',
      ready: '已连接',
      synced: '已同步',
      syncing: '同步中',
      unconnected: '连接失败',
    },
    title: '同步状态',
    unconnected: { tip: '信令服务器连接失败，将无法建立点对点通信频道，请检查网络后重试' },
  },
  tab: {
    chat: '会话',
    discover: '发现',
    files: '文件',
    me: '我',
    setting: '设置',
  },
  telemetry: {
    allow: '允许',
    deny: '拒绝',
    desc: '我们希望匿名获取你的使用信息，进而帮助我们改进 {{appName}}，并为你提供更好的产品体验。你可以在「设置」 - 「关于」随时关闭。',
    learnMore: '了解更多',
    title: '帮助 {{appName}} 做得更好',
  },
  temp: '临时',
  terms: '服务条款',
  updateAgent: '更新助理信息',
  upgradeVersion: {
    action: '升级',
    hasNew: '有可用更新',
    newVersion: '有新版本可用：{{version}}',
  },
  userPanel: {
    anonymousNickName: '匿名用户',
    billing: '账单管理',
    cloud: '体验 {{name}}',
    data: '数据存储',
    defaultNickname: '社区版用户',
    discord: '社区支持',
    docs: '使用文档',
    email: '邮件支持',
    feedback: '反馈与建议',
    help: '帮助中心',
    moveGuide: '设置按钮搬到这里啦',
    plans: '订阅方案',
    preview: '预览版',
    profile: '账户管理',
    setting: '应用设置',
    usages: '用量统计',
  },
  version: '版本',
};