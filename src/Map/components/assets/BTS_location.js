import { MRT_PURPLE, MRT_PURPLE_COLOR } from './line/Purple'
import { MRT_BLUE, MRT_BLUE_COLOR } from './line/Blue'
import { MRT_GREY, MRT_GREY_COLOR } from './line/Grey'
import { MRT_YELLOW, MRT_YELLOW_COLOR } from './line/YELLOW'
import { MRT_ARL, MRT_ARL_COLOR } from './line/ARL'
import { MRT_ORANGE, MRT_ORANGE_COLOR } from './line/ORANGE'
import { MRT_CYAN, MRT_CYAN_COLOR } from './line/CYAN'
import { MRT_BROWN, MRT_BROWN_COLOR } from './line/BROWN'
import { MRT_PINK, MRT_PINK_COLOR } from './line/PINK'
//
import { SARL_WEST, SARL_WEST_COLOR } from './line/SARL_WEST'
import { SARL_NORTH, SARL_NORTH_COLOR } from './line/SARL_NORTH'
import {
  SARL_TRANSIT_ORANGE,
  SARL_TRANSIT_ORANGE_COLOR
} from './line/SARL_TRANSIT_ORANGE'
import {
  SARL_TRANSIT_MAKKASAN,
  SARL_TRANSIT_MAKKASAN_COLOR
} from './line/SARL_TRANSIT_MAKKASAN'
//
import { BTS_NORTH, BTS_NORTH_COLOR } from './line/BTS_NORTH'
import { BTS_SOUTH, BTS_SOUTH_COLOR } from './line/BTS_SOUTH'
import { BTS_EAST, BTS_EAST_COLOR } from './line/BTS_EAST'
import { BRT, BRT_COLOR } from './line/BRT'

export const BTSLocationSet = {
  center: { lat: 13.72906, lng: 100.53616 },
  markerColor: {
    ...BRT_COLOR,
    ...MRT_BLUE_COLOR,
    ...MRT_GREY_COLOR,
    ...MRT_PURPLE_COLOR,
    ...MRT_YELLOW_COLOR,
    ...MRT_ARL_COLOR,
    ...MRT_ORANGE_COLOR,
    ...MRT_CYAN_COLOR,
    ...MRT_BROWN_COLOR,
    ...MRT_PINK_COLOR,
    ...SARL_WEST_COLOR,
    ...SARL_NORTH_COLOR,
    ...SARL_TRANSIT_ORANGE_COLOR,
    ...SARL_TRANSIT_MAKKASAN_COLOR,
    ...BTS_NORTH_COLOR,
    ...BTS_SOUTH_COLOR,
    ...BTS_EAST_COLOR
  },
  marker: {
    ...BRT,
    ...MRT_PURPLE,
    ...MRT_BLUE,
    ...MRT_GREY,
    ...MRT_YELLOW,
    ...MRT_ARL,
    ...MRT_ORANGE,
    ...MRT_CYAN,
    ...MRT_BROWN,
    ...MRT_PINK,
    ...SARL_WEST,
    ...SARL_NORTH,
    ...SARL_TRANSIT_ORANGE,
    ...SARL_TRANSIT_MAKKASAN,
    ...BTS_NORTH,
    ...BTS_SOUTH,
    ...BTS_EAST
  }
}
