const {combineReducers} = require('redux')

const players = require('./players')
const round = require('./round')
const videos = require('./videos')
const currentPlayer = require('./currentplayer')
const playerScores = require('./playerScores')
const game = require('./game')
const winners = require('./winners')

export default combineReducers({
  players,
  round,
  videos,
  currentPlayer,
  playerScores,
  game,
  winners
})
