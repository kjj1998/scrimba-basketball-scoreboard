let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let homeScore = 0
let awayScore = 0

function incrementHomeScore(value) {
    homeScore += value
    homeScoreEl.textContent = homeScore
}

function incrementAwayScore(value) {
    awayScore += value
    awayScoreEl.textContent = awayScore
}

