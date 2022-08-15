interface CONFIGI {
  colors: {
    [key: string]: string
  }
  font: {
    [key: string]: string
  }
}

const uiConfig: CONFIGI = {
  colors: {
    WHITE: '#ffffff',
    WHITE_1: 'rgba(255,255,255,0.15)',
    WHITE_2: 'rgba(255,255,255,0.25)',
    UI_GREEN: '#2c974b',
    LIGHT_GREEN: 'rgba(29, 161, 242, 0.2)',
    UI_RED: '#b23b3b',
    BLACK: '#000000',
    BLUEISH_GREY: '#46505A',
    SKY_BLUE: 'skyblue',
    VIOLET: '#993CF3',
  },
  font: {
    SIZE: '14',
    FAMILY: 'Roboto',
  },
}

export default uiConfig
