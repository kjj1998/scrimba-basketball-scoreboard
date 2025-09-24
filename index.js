let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let homeBoardEl = document.getElementById("home-board")
let awayBoardEl = document.getElementById("away-board")
let homeScore = 0
let awayScore = 0

function incrementHomeScore(value) {
    homeScore += value
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function incrementAwayScore(value) {
    awayScore += value
    awayScoreEl.textContent = awayScore
    highlightLeader()
}

function resetScore() {
    homeScore = 0
    awayScore = 0
    homeScoreEl.textContent = homeScore
    awayScoreEl.textContent = awayScore
    highlightLeader()
}

// Make functions globally available
window.incrementHomeScore = incrementHomeScore
window.incrementAwayScore = incrementAwayScore
window.resetScore = resetScore

function highlightLeader() {
    homeBoardEl.style.border = '3px solid #080001';
    awayBoardEl.style.border = '3px solid #080001';

    if (homeScore > awayScore) {
        homeBoardEl.style.border = '3px solid gold';
    } else if (awayScore > homeScore) {
        awayBoardEl.style.border = '3px solid gold';
    }
}