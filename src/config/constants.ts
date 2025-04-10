interface Config {
  host: string
  apiPath: string
}

const prodConfig: Config = {
  host: 'https://hanzc.fun',
  apiPath: '/api/v1',
}

const devConfig: Config = {
  // host: 'http://localhost:3232',
  host: 'https://hanzc.fun',
  apiPath: '/api/v1',
}

const mode = import.meta.env.MODE

export const config: Config = mode === 'development' ? devConfig : prodConfig
