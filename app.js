const STORAGE_KEY = "badminton-team-match-2606";

const DEFAULT_STATE = {
  teamNames: {
    A: "A팀",
    B: "B팀",
  },
  players: [
    { id: "a_m1", team: "A", name: "김기선", gender: "M" },
    { id: "a_m2", team: "A", name: "박장희", gender: "M" },
    { id: "a_m3", team: "A", name: "정해욱", gender: "M" },
    { id: "a_m4", team: "A", name: "손용배", gender: "M" },
    { id: "a_m5", team: "A", name: "김상래", gender: "M" },
    { id: "a_w1", team: "A", name: "박혜경", gender: "F" },
    { id: "a_w2", team: "A", name: "민진", gender: "F" },
    { id: "a_w3", team: "A", name: "임정애", gender: "F" },
    { id: "a_w4", team: "A", name: "최예성", gender: "F" },
    { id: "b_m1", team: "B", name: "이나선", gender: "M" },
    { id: "b_m2", team: "B", name: "이강영", gender: "M" },
    { id: "b_m3", team: "B", name: "이형섭", gender: "M" },
    { id: "b_m4", team: "B", name: "양기준", gender: "M" },
    { id: "b_m5", team: "B", name: "최종철", gender: "M" },
    { id: "b_w1", team: "B", name: "최봉주", gender: "F" },
    { id: "b_w2", team: "B", name: "박정연", gender: "F" },
    { id: "b_w3", team: "B", name: "장은혜", gender: "F" },
    { id: "b_w4", team: "B", name: "이금", gender: "F" },
  ],
  matches: [
    { id: 1, time: "09:30~09:45", court: 1, type: "여복", teamAPlayerIds: ["a_w4", "a_w1"], teamBPlayerIds: ["b_w4", "b_w2"], teamAScore: null, teamBScore: null },
    { id: 2, time: "09:30~09:45", court: 2, type: "남복", teamAPlayerIds: ["a_m1", "a_m5"], teamBPlayerIds: ["b_m1", "b_m4"], teamAScore: null, teamBScore: null },
    { id: 3, time: "09:45~10:00", court: 1, type: "여복", teamAPlayerIds: ["a_w3", "a_w2"], teamBPlayerIds: ["b_w2", "b_w1"], teamAScore: null, teamBScore: null },
    { id: 4, time: "09:45~10:00", court: 2, type: "남복", teamAPlayerIds: ["a_m4", "a_m2"], teamBPlayerIds: ["b_m3", "b_m5"], teamAScore: null, teamBScore: null },
    { id: 5, time: "10:00~10:15", court: 1, type: "혼복", teamAPlayerIds: ["a_w1", "a_m3"], teamBPlayerIds: ["b_w4", "b_m2"], teamAScore: null, teamBScore: null },
    { id: 6, time: "10:00~10:15", court: 2, type: "남복", teamAPlayerIds: ["a_m1", "a_m4"], teamBPlayerIds: ["b_m1", "b_m3"], teamAScore: null, teamBScore: null },
    { id: 7, time: "10:15~10:30", court: 1, type: "혼복", teamAPlayerIds: ["a_w2", "a_m2"], teamBPlayerIds: ["b_w1", "b_m3"], teamAScore: null, teamBScore: null },
    { id: 8, time: "10:15~10:30", court: 2, type: "혼복", teamAPlayerIds: ["a_w3", "a_m4"], teamBPlayerIds: ["b_w4", "b_m5"], teamAScore: null, teamBScore: null },
    { id: 9, time: "10:30~10:45", court: 1, type: "여복", teamAPlayerIds: ["a_w4", "a_w3"], teamBPlayerIds: ["b_w4", "b_w2"], teamAScore: null, teamBScore: null },
    { id: 10, time: "10:30~10:45", court: 2, type: "남복", teamAPlayerIds: ["a_m5", "a_m3"], teamBPlayerIds: ["b_m4", "b_m2"], teamAScore: null, teamBScore: null },
    { id: 11, time: "10:45~11:00", court: 1, type: "혼복", teamAPlayerIds: ["a_w4", "a_m1"], teamBPlayerIds: ["b_w4", "b_m1"], teamAScore: null, teamBScore: null },
    { id: 12, time: "10:45~11:00", court: 2, type: "혼복", teamAPlayerIds: ["a_w1", "a_m5"], teamBPlayerIds: ["b_w2", "b_m4"], teamAScore: null, teamBScore: null },
    { id: 13, time: "11:00~11:30", court: null, type: "단체전", title: "단체 게임", teamAPlayerIds: [], teamBPlayerIds: [], affectsPlayerStats: false, teamAScore: null, teamBScore: null },
    { id: 14, time: "11:30~11:45", court: 1, type: "혼복", teamAPlayerIds: ["a_w4", "a_m3"], teamBPlayerIds: ["b_w4", "b_m2"], teamAScore: null, teamBScore: null },
    { id: 15, time: "11:30~11:45", court: 2, type: "혼복", teamAPlayerIds: ["a_w2", "a_m5"], teamBPlayerIds: ["b_w1", "b_m4"], teamAScore: null, teamBScore: null },
    { id: 16, time: "11:45~12:00", court: 1, type: "혼복", teamAPlayerIds: ["a_w3", "a_m1"], teamBPlayerIds: ["b_w1", "b_m1"], teamAScore: null, teamBScore: null },
    { id: 17, time: "11:45~12:00", court: 2, type: "혼복", teamAPlayerIds: ["a_w1", "a_m4"], teamBPlayerIds: ["b_w2", "b_m3"], teamAScore: null, teamBScore: null },
    { id: 18, time: "12:00~12:15", court: 1, type: "여복", teamAPlayerIds: ["a_w4", "a_w2"], teamBPlayerIds: ["b_w4", "b_w1"], teamAScore: null, teamBScore: null },
    { id: 19, time: "12:00~12:15", court: 2, type: "남복", teamAPlayerIds: ["a_m2", "a_m3"], teamBPlayerIds: ["b_m5", "b_m2"], teamAScore: null, teamBScore: null },
    { id: 20, time: "12:15~12:30", court: 1, type: "여복", teamAPlayerIds: ["a_w1", "a_w3"], teamBPlayerIds: ["b_w2", "b_w1"], teamAScore: null, teamBScore: null },
    { id: 21, time: "12:15~12:30", court: 2, type: "남복", teamAPlayerIds: ["a_m5", "a_m2"], teamBPlayerIds: ["b_m4", "b_m5"], teamAScore: null, teamBScore: null },
  ],
};

const state = loadState();
let activeHourFilters = new Set(["all"]);
let rankingSort = "wins";

const els = {
  teamAName: document.querySelector("#teamAName"),
  teamBName: document.querySelector("#teamBName"),
  teamAScore: document.querySelector("#teamAScore"),
  teamBScore: document.querySelector("#teamBScore"),
  teamARecord: document.querySelector("#teamARecord"),
  teamBRecord: document.querySelector("#teamBRecord"),
  leaderText: document.querySelector("#leaderText"),
  completedText: document.querySelector("#completedText"),
  doublesText: document.querySelector("#doublesText"),
  teamGameText: document.querySelector("#teamGameText"),
  topWinnerText: document.querySelector("#topWinnerText"),
  topWinnerDetail: document.querySelector("#topWinnerDetail"),
  matchList: document.querySelector("#matchList"),
  playerRanking: document.querySelector("#playerRanking"),
  playerEditor: document.querySelector("#playerEditor"),
  timeFilter: document.querySelector("#timeFilter"),
  playerSearch: document.querySelector("#playerSearch"),
  hideCompleted: document.querySelector("#hideCompleted"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  resetButton: document.querySelector("#resetButton"),
  actionsMenuButton: document.querySelector("#actionsMenuButton"),
  actionsMenu: document.querySelector("#actionsMenu"),
  matchTemplate: document.querySelector("#matchTemplate"),
  modalButtons: document.querySelectorAll("[data-modal-target]"),
  modals: document.querySelectorAll(".modal-backdrop"),
  rankingSortButtons: document.querySelectorAll("[data-rank-sort]"),
  addMatchForm: document.querySelector("#addMatchForm"),
  newMatchStartHour: document.querySelector("#newMatchStartHour"),
  newMatchStartMinute: document.querySelector("#newMatchStartMinute"),
  newMatchDuration: document.querySelector("#newMatchDuration"),
  newMatchKind: document.querySelector("#newMatchKind"),
  newMatchCourt: document.querySelector("#newMatchCourt"),
  newMatchCourtWrap: document.querySelector("#newMatchCourtWrap"),
  newMatchType: document.querySelector("#newMatchType"),
  newMatchPlayers: document.querySelector("#newMatchPlayers"),
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(DEFAULT_STATE);

  try {
    const parsed = JSON.parse(saved);
    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed,
      teamNames: { ...DEFAULT_STATE.teamNames, ...parsed.teamNames },
    };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getPlayer(id) {
  return state.players.find((player) => player.id === id);
}

function teamName(team) {
  return state.teamNames[team] || `${team}팀`;
}

function parseScore(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  if (!Number.isInteger(number) || number < 0) return null;
  return number;
}

function getWinner(match) {
  if (match.teamAScore === null || match.teamBScore === null) return null;
  if (match.teamAScore > match.teamBScore) return "A";
  if (match.teamBScore > match.teamAScore) return "B";
  return null;
}

function getMatchStatus(match) {
  const hasA = match.teamAScore !== null;
  const hasB = match.teamBScore !== null;
  const winner = getWinner(match);

  if (winner) return { label: "완료", className: "done" };
  if (hasA && hasB && match.teamAScore === match.teamBScore) {
    return { label: "동점 확인", className: "tie" };
  }
  if (hasA || hasB) return { label: "입력중", className: "" };
  return { label: "예정", className: "" };
}

function buildOption(player, selectedId) {
  const option = document.createElement("option");
  option.value = player.id;
  option.textContent = player.name;
  option.selected = player.id === selectedId;
  return option;
}

function buildPlaceholderOption(selectedId) {
  const option = document.createElement("option");
  option.value = "";
  option.textContent = "선수 선택";
  option.selected = !selectedId;
  return option;
}

function allowedPlayers(team, type, slotIndex) {
  const teamPlayers = state.players.filter((player) => player.team === team);
  if (type === "남복") return teamPlayers.filter((player) => player.gender === "M");
  if (type === "여복") return teamPlayers.filter((player) => player.gender === "F");
  if (type === "혼복") {
    return teamPlayers.filter((player) => player.gender === (slotIndex === 0 ? "F" : "M"));
  }
  return teamPlayers;
}

function renderPlayerSelects(container, match, team) {
  const key = team === "A" ? "teamAPlayerIds" : "teamBPlayerIds";
  container.innerHTML = "";

  if (match.type === "단체전") {
    container.classList.add("empty");
    container.textContent = "개인 기록 제외";
    return;
  }

  container.classList.remove("empty");
  match[key].forEach((selectedId, index) => {
    const select = document.createElement("select");
    select.setAttribute("aria-label", `${teamName(team)} ${index + 1}번 선수`);
    const candidates = allowedPlayers(team, match.type, index);
    const selectedPlayer = getPlayer(selectedId);
    select.append(buildPlaceholderOption(selectedId));
    if (selectedPlayer && !candidates.some((player) => player.id === selectedId)) {
      select.append(buildOption({ ...selectedPlayer, name: `${selectedPlayer.name} (조건 확인)` }, selectedId));
    }
    candidates.forEach((player) => {
      select.append(buildOption(player, selectedId));
    });
    select.addEventListener("change", () => {
      match[key][index] = select.value;
      saveAndRender();
    });
    container.append(select);
  });
}

function renderMatches() {
  els.matchList.innerHTML = "";
  const visibleMatches = getSortedMatches().filter((match) => {
    if (activeHourFilters.has("all")) return true;
    return activeHourFilters.has(String(getMatchStartHour(match)));
  }).filter((match) => {
    return matchesPlayerSearch(match);
  }).filter((match) => {
    if (!els.hideCompleted.checked) return true;
    return getMatchStatus(match).label !== "완료";
  });

  const groups = visibleMatches.reduce((acc, match) => {
    if (!acc.has(match.time)) acc.set(match.time, []);
    acc.get(match.time).push(match);
    return acc;
  }, new Map());

  groups.forEach((matches, time) => {
    const group = document.createElement("section");
    group.className = "time-group";

    const heading = document.createElement("div");
    heading.className = "time-heading";
    const [startTime, endTime] = splitMatchTime(time);
    heading.innerHTML = `
      <span class="time-start">${startTime}</span>
      <span class="time-separator">~</span>
      <span class="time-end">${endTime}</span>
    `;
    group.append(heading);

    const grid = document.createElement("div");
    grid.className = "court-grid";
    const orderedMatches = [...matches].sort((a, b) => (a.court ?? 99) - (b.court ?? 99));

    const courtOneSlot = createCourtSlot(1);
    const courtTwoSlot = createCourtSlot(2);

    orderedMatches.filter((match) => match.court === 1).forEach((match) => {
      courtOneSlot.append(createMatchCard(match));
    });
    orderedMatches.filter((match) => match.court === 2).forEach((match) => {
      courtTwoSlot.append(createMatchCard(match));
    });

    grid.append(courtOneSlot, courtTwoSlot);

    orderedMatches.filter((match) => match.type === "단체전").forEach((match) => {
      const card = createMatchCard(match);
      card.classList.add("span-courts");
      grid.append(card);
    });

    group.append(grid);
    els.matchList.append(group);
  });
}

function splitMatchTime(time) {
  const [startTime, endTime] = String(time).split("~");
  return [startTime || time, endTime || ""];
}

function createCourtSlot(court) {
  const slot = document.createElement("div");
  slot.className = "court-slot";
  slot.dataset.court = String(court);
  return slot;
}

function getSortedMatches() {
  return [...state.matches].sort((a, b) => {
    const timeCompare = timeToMinutes(a.time) - timeToMinutes(b.time);
    if (timeCompare !== 0) return timeCompare;
    return (a.court ?? 99) - (b.court ?? 99);
  });
}

function timeToMinutes(time) {
  const match = String(time).match(/(\d{1,2}):(\d{2})/);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return Number(match[1]) * 60 + Number(match[2]);
}

function getMatchStartHour(match) {
  const minutes = timeToMinutes(match.time);
  if (!Number.isFinite(minutes) || minutes === Number.MAX_SAFE_INTEGER) return "";
  return Math.floor(minutes / 60);
}

function matchesPlayerSearch(match) {
  const query = els.playerSearch.value.trim().toLowerCase();
  if (!query) return true;

  const names = [...match.teamAPlayerIds, ...match.teamBPlayerIds]
    .map((id) => getPlayer(id)?.name || "")
    .join(" ")
    .toLowerCase();

  return names.includes(query);
}

function createMatchCard(match) {
    const fragment = els.matchTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".match-card");
    const winner = getWinner(match);
    const status = getMatchStatus(match);

    if (winner === "A") card.classList.add("winner-a");
    if (winner === "B") card.classList.add("winner-b");

    fragment.querySelector(".match-id").textContent = match.court ? `${match.court}코트` : "공통";
    fragment.querySelector(".match-time").textContent = `${match.id}. ${match.time}`;
    fragment.querySelector(".match-type").textContent = match.title || match.type;

    const statusEl = fragment.querySelector(".match-status");
    statusEl.textContent = status.label;
    if (status.className) statusEl.classList.add(status.className);

    const deleteButton = fragment.querySelector(".match-delete-button");
    deleteButton.addEventListener("click", () => {
      const courtName = match.court ? `${match.court}코트` : "공통";
      if (!confirm(`${match.id}. ${match.time} ${courtName} 경기를 삭제할까요?`)) return;
      deleteMatch(match.id);
      saveAndRender();
    });

    fragment.querySelector(".team-a-side .team-label").textContent = teamName("A");
    fragment.querySelector(".team-b-side .team-label").textContent = teamName("B");

    renderPlayerSelects(fragment.querySelector(".team-a-side .player-selects"), match, "A");
    renderPlayerSelects(fragment.querySelector(".team-b-side .player-selects"), match, "B");

    const scoreA = fragment.querySelector(".team-a-side .score-input");
    const scoreB = fragment.querySelector(".team-b-side .score-input");
    scoreA.value = match.teamAScore ?? "";
    scoreB.value = match.teamBScore ?? "";

    scoreA.addEventListener("change", () => {
      match.teamAScore = parseScore(scoreA.value);
      saveAndRender();
    });
    scoreB.addEventListener("change", () => {
      match.teamBScore = parseScore(scoreB.value);
      saveAndRender();
    });

    const result = fragment.querySelector(".match-result");
    if (winner) {
      result.textContent = `${teamName(winner)} 승리, 승점 1점`;
    } else if (match.teamAScore !== null && match.teamBScore !== null) {
      result.textContent = "동점입니다. 최종 점수를 확인하세요.";
    } else {
      result.textContent = "점수를 입력하면 승리 팀이 자동 계산됩니다.";
    }

    return card;
}

function deleteMatch(matchId) {
  state.matches = state.matches.filter((match) => match.id !== matchId);
}

function calculateStats() {
  const teamStats = {
    A: { wins: 0, losses: 0, doublesWins: 0, teamWins: 0 },
    B: { wins: 0, losses: 0, doublesWins: 0, teamWins: 0 },
  };
  const playerStats = Object.fromEntries(
    state.players.map((player) => [
      player.id,
      { player, played: 0, wins: 0, losses: 0 },
    ]),
  );

  state.matches.forEach((match) => {
    const winner = getWinner(match);
    if (!winner) return;

    const loser = winner === "A" ? "B" : "A";
    teamStats[winner].wins += 1;
    teamStats[loser].losses += 1;
    if (match.type === "단체전") {
      teamStats[winner].teamWins += 1;
    } else {
      teamStats[winner].doublesWins += 1;
    }

    if (match.affectsPlayerStats === false) return;

    const winnerIds = winner === "A" ? match.teamAPlayerIds : match.teamBPlayerIds;
    const loserIds = winner === "A" ? match.teamBPlayerIds : match.teamAPlayerIds;

    winnerIds.filter(Boolean).forEach((id) => {
      if (!playerStats[id]) return;
      playerStats[id].played += 1;
      playerStats[id].wins += 1;
    });
    loserIds.filter(Boolean).forEach((id) => {
      if (!playerStats[id]) return;
      playerStats[id].played += 1;
      playerStats[id].losses += 1;
    });
  });

  return { teamStats, playerStats: Object.values(playerStats) };
}

function renderSummaryAndRanking() {
  const { teamStats, playerStats } = calculateStats();
  const completedCount = state.matches.filter((match) => getWinner(match)).length;

  els.teamAScore.textContent = `${teamStats.A.wins}점`;
  els.teamBScore.textContent = `${teamStats.B.wins}점`;
  els.teamARecord.textContent = `${teamStats.A.wins}승 ${teamStats.A.losses}패`;
  els.teamBRecord.textContent = `${teamStats.B.wins}승 ${teamStats.B.losses}패`;
  els.completedText.textContent = `완료 ${completedCount}/${state.matches.length}`;
  els.doublesText.textContent = `복식 ${teamName("A")} ${teamStats.A.doublesWins}:${teamStats.B.doublesWins} ${teamName("B")}`;
  els.teamGameText.textContent = `단체전 ${teamName("A")} ${teamStats.A.teamWins}:${teamStats.B.teamWins} ${teamName("B")}`;

  if (teamStats.A.wins > teamStats.B.wins) {
    els.leaderText.textContent = teamName("A");
  } else if (teamStats.B.wins > teamStats.A.wins) {
    els.leaderText.textContent = teamName("B");
  } else {
    els.leaderText.textContent = "동률";
  }

  const ranking = playerStats.sort(compareRanking);

  const topWins = ranking[0]?.wins ?? 0;
  const topPlayers = topWins > 0 ? ranking.filter((item) => item.wins === topWins) : [];
  els.topWinnerText.textContent = topPlayers.length
    ? topPlayers.map((item) => item.player.name).join(", ")
    : "-";
  els.topWinnerDetail.textContent = topPlayers.length
    ? `${topWins}승 공동 ${topPlayers.length}명`
    : "아직 완료된 경기가 없습니다";

  els.playerRanking.innerHTML = "";
  ranking.forEach((item, index) => {
    const row = document.createElement("tr");
    const winRate = item.played ? `${Math.round((item.wins / item.played) * 100)}%` : "-";
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.player.name}</td>
      <td>${teamName(item.player.team)}</td>
      <td>${item.played}</td>
      <td>${item.wins}</td>
      <td>${item.losses}</td>
      <td>${winRate}</td>
    `;
    els.playerRanking.append(row);
  });

  els.rankingSortButtons.forEach((button) => {
    const isActive = button.dataset.rankSort === rankingSort;
    button.classList.toggle("active", isActive);
  });
}

function compareRanking(a, b) {
  if (rankingSort === "name") {
    return a.player.name.localeCompare(b.player.name, "ko");
  }

  if (rankingSort === "losses") {
    if (b.losses !== a.losses) return b.losses - a.losses;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return a.player.name.localeCompare(b.player.name, "ko");
  }

  if (rankingSort === "played") {
    if (b.played !== a.played) return b.played - a.played;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return a.player.name.localeCompare(b.player.name, "ko");
  }

  if (b.wins !== a.wins) return b.wins - a.wins;
  if (b.played !== a.played) return b.played - a.played;
  return a.player.name.localeCompare(b.player.name, "ko");
}

function renderPlayerEditor() {
  els.playerEditor.innerHTML = "";
  const playersByTeam = {
    A: state.players.filter((player) => player.team === "A"),
    B: state.players.filter((player) => player.team === "B"),
  };
  const maxRows = Math.max(playersByTeam.A.length, playersByTeam.B.length);

  const heading = document.createElement("div");
  heading.className = "player-editor-heading";
  heading.innerHTML = `
    <h3>${teamName("A")}</h3>
    <h3>${teamName("B")}</h3>
    <span></span>
  `;

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "round-action-button";
  addButton.textContent = "+";
  addButton.setAttribute("aria-label", "양팀 선수 추가");
  addButton.addEventListener("click", () => {
    addPlayerPair();
    saveAndRender();
  });
  heading.lastElementChild.append(addButton);
  els.playerEditor.append(heading);

  for (let index = 0; index < maxRows; index += 1) {
    const row = document.createElement("div");
    row.className = "player-pair-row";
    const playerA = playersByTeam.A[index];
    const playerB = playersByTeam.B[index];

    row.append(renderPlayerControl(playerA, "A"), renderPlayerControl(playerB, "B"));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "round-action-button delete";
    deleteButton.textContent = "-";
    deleteButton.setAttribute("aria-label", `${index + 1}번 행 양팀 선수 삭제`);
    deleteButton.addEventListener("click", () => {
      const names = [playerA?.name, playerB?.name].filter(Boolean).join(", ");
      if (!confirm(`${names || `${index + 1}번 행`} 선수를 양팀에서 삭제할까요? 대진표에 배정된 자리는 비워집니다.`)) return;
      deletePlayerPair([playerA?.id, playerB?.id].filter(Boolean));
      saveAndRender();
    });
    row.append(deleteButton);

    els.playerEditor.append(row);
  }
}

function renderPlayerControl(player, team) {
  const control = document.createElement("div");
  control.className = "player-control";

  if (!player) {
    control.classList.add("empty");
    control.textContent = `${teamName(team)} 선수 없음`;
    return control;
  }

  const input = document.createElement("input");
  input.className = "player-name-input";
  input.value = player.name;
  input.addEventListener("change", () => {
    player.name = input.value.trim() || player.name;
    saveAndRender();
  });

  const genderGroup = document.createElement("div");
  genderGroup.className = "gender-radio-group";
  ["M", "F"].forEach((gender) => {
    const label = document.createElement("label");
    label.className = "gender-radio";
    label.classList.toggle("checked", player.gender === gender);
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `gender-${player.id}`;
    radio.value = gender;
    radio.checked = player.gender === gender;
    radio.addEventListener("change", () => {
      player.gender = gender;
      saveAndRender();
    });
    const text = document.createElement("span");
    text.textContent = gender === "M" ? "남" : "여";
    label.append(radio, text);
    genderGroup.append(label);
  });

  control.append(input, genderGroup);
  return control;
}

function createPlayerId(team, gender) {
  const prefix = `${team.toLowerCase()}_${gender === "M" ? "m" : "w"}`;
  const usedNumbers = state.players
    .map((player) => player.id.match(new RegExp(`^${prefix}(\\d+)$`)))
    .filter(Boolean)
    .map((match) => Number(match[1]));
  const next = usedNumbers.length ? Math.max(...usedNumbers) + 1 : 1;
  return `${prefix}${next}`;
}

function addPlayer(team, name = "새 선수", gender = "M") {
  state.players.push({
    id: createPlayerId(team, gender),
    team,
    name,
    gender,
  });
}

function addPlayerPair() {
  addPlayer("A", "새 선수", "M");
  addPlayer("B", "새 선수", "M");
}

function deletePlayerPair(playerIds) {
  const deleteSet = new Set(playerIds);
  state.players = state.players.filter((player) => !deleteSet.has(player.id));
  state.matches.forEach((match) => {
    match.teamAPlayerIds = match.teamAPlayerIds.map((id) => (deleteSet.has(id) ? "" : id));
    match.teamBPlayerIds = match.teamBPlayerIds.map((id) => (deleteSet.has(id) ? "" : id));
  });
}

function render() {
  els.teamAName.value = state.teamNames.A;
  els.teamBName.value = state.teamNames.B;
  renderMatches();
  renderSummaryAndRanking();
  renderPlayerEditor();
}

function saveAndRender() {
  saveState();
  render();
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  if (id === "addMatchModal") renderAddMatchPlayers();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-backdrop.open")) {
    document.body.style.overflow = "";
  }
}

function closeAllModals() {
  els.modals.forEach(closeModal);
}

function updateTimeFilterStyles() {
  els.timeFilter.querySelectorAll(".time-filter-chip").forEach((label) => {
    const input = label.querySelector("input[type='checkbox']");
    label.classList.toggle("checked", Boolean(input?.checked));
  });
}

function closeActionsMenu() {
  els.actionsMenu.classList.remove("open");
  els.actionsMenuButton.setAttribute("aria-expanded", "false");
}

function toggleActionsMenu() {
  const isOpen = els.actionsMenu.classList.toggle("open");
  els.actionsMenuButton.setAttribute("aria-expanded", String(isOpen));
}

function renderAddMatchPlayers() {
  const isTeamGame = els.newMatchKind.value === "team";
  els.newMatchCourtWrap.hidden = isTeamGame;
  els.newMatchType.disabled = isTeamGame;
  els.newMatchPlayers.innerHTML = "";

  if (isTeamGame) {
    els.newMatchPlayers.textContent = "단체전은 개인 기록에 반영하지 않습니다.";
    return;
  }

  ["A", "B"].forEach((team) => {
    const group = document.createElement("div");
    group.className = "new-match-player-group";
    const title = document.createElement("strong");
    title.textContent = teamName(team);
    group.append(title);

    [0, 1].forEach((slotIndex) => {
      const select = document.createElement("select");
      select.name = `team${team}Player${slotIndex}`;
      select.required = true;
      select.append(buildPlaceholderOption(""));
      allowedPlayers(team, els.newMatchType.value, slotIndex).forEach((player) => {
        select.append(buildOption(player, ""));
      });
      group.append(select);
    });

    els.newMatchPlayers.append(group);
  });
}

function nextMatchId() {
  return state.matches.reduce((max, match) => Math.max(max, match.id), 0) + 1;
}

function setupTimeSelects() {
  for (let hour = 9; hour <= 15; hour += 1) {
    const option = document.createElement("option");
    option.value = String(hour);
    option.textContent = `${String(hour).padStart(2, "0")}시`;
    els.newMatchStartHour.append(option);
  }

  for (let minute = 0; minute < 60; minute += 5) {
    const option = document.createElement("option");
    option.value = String(minute);
    option.textContent = `${String(minute).padStart(2, "0")}분`;
    els.newMatchStartMinute.append(option);
  }

  els.newMatchStartHour.value = "12";
  els.newMatchStartMinute.value = "30";
}

function resetAddMatchFormDefaults() {
  els.newMatchStartHour.value = "12";
  els.newMatchStartMinute.value = "30";
  els.newMatchDuration.value = els.newMatchKind.value === "team" ? "30" : "15";
}

function formatTime(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function buildMatchTime() {
  const start = Number(els.newMatchStartHour.value) * 60 + Number(els.newMatchStartMinute.value);
  const end = start + Number(els.newMatchDuration.value);
  return `${formatTime(start)}~${formatTime(end)}`;
}

function addMatchFromForm() {
  const isTeamGame = els.newMatchKind.value === "team";
  const time = buildMatchTime();

  const match = {
    id: nextMatchId(),
    time,
    court: isTeamGame ? null : Number(els.newMatchCourt.value),
    type: isTeamGame ? "단체전" : els.newMatchType.value,
    title: isTeamGame ? "단체 게임" : undefined,
    teamAPlayerIds: [],
    teamBPlayerIds: [],
    affectsPlayerStats: isTeamGame ? false : undefined,
    teamAScore: null,
    teamBScore: null,
  };

  if (!isTeamGame) {
    match.teamAPlayerIds = [
      els.addMatchForm.elements.teamAPlayer0.value,
      els.addMatchForm.elements.teamAPlayer1.value,
    ];
    match.teamBPlayerIds = [
      els.addMatchForm.elements.teamBPlayer0.value,
      els.addMatchForm.elements.teamBPlayer1.value,
    ];
  }

  state.matches.push(match);
  state.matches = getSortedMatches();
  saveAndRender();
}

els.teamAName.addEventListener("change", () => {
  state.teamNames.A = els.teamAName.value.trim() || "A팀";
  saveAndRender();
});

els.teamBName.addEventListener("change", () => {
  state.teamNames.B = els.teamBName.value.trim() || "B팀";
  saveAndRender();
});

els.timeFilter.addEventListener("change", (event) => {
  const checkbox = event.target.closest("input[type='checkbox']");
  if (!checkbox) return;

  const checkboxes = [...els.timeFilter.querySelectorAll("input[type='checkbox']")];
  const allCheckbox = checkboxes.find((item) => item.value === "all");
  const hourCheckboxes = checkboxes.filter((item) => item.value !== "all");

  if (checkbox.value === "all" && checkbox.checked) {
    hourCheckboxes.forEach((item) => {
      item.checked = false;
    });
    activeHourFilters = new Set(["all"]);
  } else {
    allCheckbox.checked = false;
    const selectedHours = hourCheckboxes.filter((item) => item.checked).map((item) => item.value);

    if (selectedHours.length === 0) {
      allCheckbox.checked = true;
      activeHourFilters = new Set(["all"]);
    } else {
      activeHourFilters = new Set(selectedHours);
    }
  }

  updateTimeFilterStyles();
  renderMatches();
});

els.hideCompleted.addEventListener("change", renderMatches);
els.playerSearch.addEventListener("input", renderMatches);

els.modalButtons.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.modalTarget));
});

els.modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-modal-close]")) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();
    closeActionsMenu();
  }
});

els.actionsMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleActionsMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-actions")) closeActionsMenu();
});

els.rankingSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rankingSort = button.dataset.rankSort;
    renderSummaryAndRanking();
  });
});

els.newMatchKind.addEventListener("change", () => {
  els.newMatchDuration.value = els.newMatchKind.value === "team" ? "30" : "15";
  renderAddMatchPlayers();
});
els.newMatchType.addEventListener("change", renderAddMatchPlayers);

els.addMatchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addMatchFromForm();
  els.addMatchForm.reset();
  resetAddMatchFormDefaults();
  renderAddMatchPlayers();
  closeModal(document.querySelector("#addMatchModal"));
});

els.exportButton.addEventListener("click", () => {
  closeActionsMenu();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "badminton-team-match-backup.json";
  link.click();
  URL.revokeObjectURL(url);
});

els.importInput.addEventListener("change", async () => {
  closeActionsMenu();
  const [file] = els.importInput.files;
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.players) || !Array.isArray(imported.matches)) {
      throw new Error("Invalid backup");
    }
    Object.assign(state, imported);
    saveAndRender();
  } catch {
    alert("복원 파일을 읽을 수 없습니다.");
  } finally {
    els.importInput.value = "";
  }
});

els.resetButton.addEventListener("click", () => {
  closeActionsMenu();
  if (!confirm("모든 점수, 이름 변경, 팀명 변경을 초기 상태로 되돌릴까요?")) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, structuredClone(DEFAULT_STATE));
  render();
});

setupTimeSelects();
renderAddMatchPlayers();
updateTimeFilterStyles();
render();
