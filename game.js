/* ================================================================
   집착광공 탈출 – 390×844 모바일 최적화

   ★ 아래 CFG 블록에서 이름·거리·대사·선물 메시지를 수정하세요!
================================================================ */
const CFG = {
  // ── 이름 / 스토리 ─────────────────────────────────
  PLAYER_NAME: "준서",
  CHASER_NAME: "슬기",
  TOTAL_DIST: 2090, // 탈출 목표 거리 (m)
  // 선물 열었을 때 메시지
  GIFT_MSG:
    "오빠, 지금 나 보고 있는 거 맞지? 아니, 그냥 눈만 마주치는 거 말고 오빠가 생각하는 모든 게 나였으면 좋겠어. 오빠가 아침에 눈을 뜨자마자 제일 먼저 떠올리는 이름이 '나'였으면 좋겠고, 밤에 잠들기 직전 마지막으로 그리는 얼굴도 나였으면 좋겠어. 오빠가 꿈을 꿀 때조차 내가 나오지 않으면 난 너무 속상해서 잠도 못 잘 것 같아.\n\n세상에는 왜 이렇게 오빠를 방해하는 게 많을까? 친구들의 연락, 재미있는 영상들, 심지어 길가에 핀 꽃들까지... 오빠가 그것들에 시선을 뺏길 때마다 내 마음은 날카로운 가시로 찔리는 기분이야. 오빠가 나 이외의 것에 웃어주면, 그 웃음이 내 것이 아니라는 사실에 질투가 나서 견딜 수가 없어. 오빠가 느끼는 모든 기쁨과 슬픔의 원인이 오직 나 하나뿐이었으면 좋겠어. 내가 오빠를 울리고, 내가 오빠를 웃게 만들고 싶어.\n\n내 하루는 온통 오빠로 가득 차 있는데, 오빠의 하루는 나 말고도 다른 것들로 채워져 있다는 게 가끔은 너무 불공평하다고 느껴져. 오빠가 어디서 무얼 하는지, 누구와 어떤 대화를 나누는지 하나하나 다 내 머릿속에 저장하고 싶어. 오빠가 마시는 공기조차 내 사랑으로 필터링해서 주고 싶은 마음, 오빠는 이해할 수 있을까?\n\n오빠, 내가 이렇게 말하는 거 무서워? 아니지? 이건 다 오빠를 너무 사랑해서 그래. 오빠가 내 옆에 없으면 나는 숨 쉬는 법조차 잊어버릴 것 같단 말이야. 오빠가 나를 안 봐주면 나는 투명 인간이 된 것 같아서 심장이 쪼그라드는 것 같아. 오빠가 나를 쳐다봐 줄 때만 내 심장이 뛰는 것 같아.\n\n지금 이 순간에도 내 눈만 봐줘. 핸드폰도 보지 말고, 딴 생각도 하지 마. 오빠가 나만 바라보고, 나만 생각하고, 나만 사랑한다고 말해주는 그 순간만이 내 세상의 전부야. 오빠는 내 우주에서 유일하게 빛나는 별이니까, 그 빛을 나한테만 쏟아부어 줘. 응? 알았지? 오빠 입으로 직접 말해줘. 오빠 세상에는 나밖에 없다고.",

  // ── 장애물 맞을 때 동작 ────────────────────────────
  GAME_OVER_HIT: false, // true → 즉시 게임오버 / false → 속도 패널티

  // ── 추격자 대사 ────────────────────────────────────
  MSGS: [
    "너 뒤태가 참 예쁘다 😍",
    "어디가? 🥺",
    "나만 봐 ❤️",
    "지금 나랑 눈 마주쳤지?",
    "왜 도망가?",
    "넌 내꺼야 💕",
    "오빠~~~",
    "사랑해 사랑해 사랑해",
    "조금만 더 가까이 😊",
    "같이 있자 🥹",
    "도망쳐봤자야 😈",
    "너 냄새... 너무 좋아 👃",
    "도망치는 모습도 귀여워",
  ],

  // ── 캔버스 논리 해상도 (390×465, 세로형 모바일) ────
  W: 390,
  H: 465,
  GROUND_Y: 375, // 지면 Y (전체 H의 ~80%)

  // ── 물리 ────────────────────────────────────────────
  GRAVITY: 1500, // 중력 (px/s²)
  JUMP_F: -560, // 점프 초속도 — 점프 높이 ≈ 104px

  // ── 플레이어 (🦊) ────────────────────────────────
  PX: 150, // 화면 고정 X
  PSIZE: 34, // 이모지 크기
  PHW: 18, // hitbox 너비
  PHH: 28, // hitbox 높이

  // ── 추격자 (👩‍❤️‍🔥) ─────────────────────────────────
  CHASER_X0: 22, // 시작 X (왼쪽)
  CHASER_CREEP: 0.5, // 초당 자연 접근 (px/s) — 기본 긴장감
  CHASER_HIT: 28, // 장애물 맞을 때 추격자 순간 이동 (px)
  CHASER_SIZE: 32,

  // ── 게임 속도 ────────────────────────────────────────
  SPD_INIT: 195, // 시작 속도 (px/s)
  SPD_MAX: 380, // 최대 속도
  SPD_ACCEL: 5, // 초당 가속

  SPD_PENALTY: 0.45, // 패널티 시 속도 배율
  PENALTY_DUR: 0.4, // 패널티 지속 (초)

  // ── 장애물 스폰 간격 ─────────────────────────────────
  OBS_MIN: 1.3,
  OBS_MAX: 2.8,

  // ── 점수 변환 ────────────────────────────────────────
  SCORE_DIV: 10, // rawDist / SCORE_DIV = 표시 m

  // ── 배경 장식 ─────────────────────────────────────────
  BG_SPD: 0.25, // 배경 구름 속도 비율
  BG_CLOUD_N: 5, // 배경 구름 개수 (세로가 넓어 더 많이)

  // ── 구간 속도 부스트 ──────────────────────────────────
  MILESTONE_DIST: 700, // 부스트 발동 간격 (m)
  MILESTONE_BOOST: 28, // 부스트 속도 증가량 (px/s)
};

const GOAL_RAW = CFG.TOTAL_DIST * CFG.SCORE_DIV; // = 15000 px

/* ── 잡혔을 때 집착 멘트 ── */
const CAUGHT_MSGS = [
  `드디어 잡았어... 이제 도망 못 가 💕`,
  `어딜 가려고~ 내가 다 보고 있었어 😍`,
  `도망치는 게 더 귀여워 ❤️‍🔥`,
  `이제 내 옆에서 영원히 있어야 해 🥹`,
  `${CFG.PLAYER_NAME}야, 나한테서 도망칠 수 없어 💗`,
  `잡혔지? 도망 안 가도 됐는데... 💓`,
  `이제 어디도 못 가~ 내 거야 😈`,
  `${CFG.PLAYER_NAME}는 언제나 내 옆에 있어야 해 ☺️`,
  `조금만 더 달리지... 잡히는 게 싫었어? 🥺`,
  `나한테 잡히는 게 운명이야 💘`,
];

/* ── 타이틀 동적 설정 ── */
const TITLE = `${CFG.PLAYER_NAME}의 집착광공 ${CFG.CHASER_NAME}탈출대작전!`;
document.getElementById("game-title").textContent = `🦊 ${TITLE}`;
document.getElementById("start-title").textContent =
  `🦊 ${CFG.PLAYER_NAME}, 탈출!`;
document.getElementById("start-sub").textContent =
  `${CFG.CHASER_NAME}의 집착에서 탈출하라! ${CFG.TOTAL_DIST}m를 달려!`;
document.getElementById("win-sub").textContent =
  `휴... 겨우 ${CFG.CHASER_NAME}에게서 탈출했네.`;
document.getElementById("dist-num").textContent = CFG.TOTAL_DIST;
document.title = TITLE;

/* ================================================================
   Canvas Setup – 390px 기준 반응형
================================================================ */
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let _scale = 1, _dpr = 1;

function resizeCanvas() {
  const vw = Math.min(window.innerWidth, 390);

  // UI 요소 높이를 제외한 가용 높이 계산 (모바일 클리핑 방지)
  const titleH = document.getElementById("game-title").offsetHeight || 0;
  const progH  = document.getElementById("progress-wrap").offsetHeight || 0;
  const footH  = document.getElementById("footer").offsetHeight || 0;
  const availH = window.innerHeight - titleH - progH - footH - 8;

  const scaleW = vw / CFG.W;
  const scaleH = availH / CFG.H;
  const scale = Math.min(scaleW, scaleH); // 너비·높이 모두 맞도록

  const w = Math.round(CFG.W * scale);
  const h = Math.round(CFG.H * scale);

  // DPR 스케일 제거: iOS Safari에서 DPR×scale 합성 시 이모지가 단색 실루엣으로 렌더링되는 버그 수정
  _dpr = 1;
  _scale = scale;

  canvas.width = w;
  canvas.height = h;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  ctx.setTransform(_scale, 0, 0, _scale, 0, 0);

  document.getElementById("game-wrap").style.width = w + "px";
  document.getElementById("progress-wrap").style.width = w + "px";
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/* ================================================================
   gameState
================================================================ */
const gs = {
  status: "start", // 'start' | 'running' | 'caught' | 'win'
  rawDist: 0,
  score: 0,
  speed: CFG.SPD_INIT,
  lastTime: null,
  groundOff: 0,
  penaltyT: 0,
  hitFlash: 0,
  nextMilestone: CFG.MILESTONE_DIST, // 다음 속도 부스트 거리
  boostFlash: 0,  // 부스트 연출 타이머
};

/* ================================================================
   Player (🦊)
================================================================ */
const player = {
  x: CFG.PX,
  y: CFG.GROUND_Y - CFG.PSIZE,
  vy: 0,
  onGround: true,

  jump() {
    if (this.onGround) {
      this.vy = CFG.JUMP_F;
      this.onGround = false;
    }
  },

  update(dt) {
    if (!this.onGround) {
      this.vy += CFG.GRAVITY * dt;
      this.y += this.vy * dt;
    }
    const gl = CFG.GROUND_Y - CFG.PSIZE;
    if (this.y >= gl) {
      this.y = gl;
      this.vy = 0;
      this.onGround = true;
    }
  },

  hitbox() {
    return { x: this.x + 7, y: this.y + 4, w: CFG.PHW, h: CFG.PHH };
  },

  draw() {
    ctx.save();
    ctx.font = `${CFG.PSIZE}px serif`;
    ctx.textBaseline = "top";
    ctx.fillStyle = "black"; // iOS에서 이모지가 fillStyle 색으로 렌더링되는 버그 방지
    if (gs.hitFlash > 0)
      ctx.globalAlpha = Math.floor(gs.hitFlash * 12) % 2 ? 1 : 0.2;
    if (!this.onGround) {
      ctx.translate(this.x + CFG.PSIZE * 0.5, this.y + CFG.PSIZE * 0.5);
      ctx.rotate(-0.2);
      ctx.fillText("🦊", -CFG.PSIZE * 0.5, -CFG.PSIZE * 0.5);
    } else {
      ctx.fillText("🦊", this.x, this.y);
    }
    ctx.restore();
  },
};

/* ================================================================
   Chaser (👩‍❤️‍🔥) + 말풍선
================================================================ */
const chaser = {
  x: CFG.CHASER_X0,
  msgText: "",
  msgT: 0,
  nextMsg: 2.5,

  reset() {
    this.x = CFG.CHASER_X0;
    this.msgText = "";
    this.msgT = 0;
    this.nextMsg = 2.5;
  },

  update(dt) {
    this.nextMsg -= dt;
    if (this.nextMsg <= 0) {
      this.msgText = CFG.MSGS[Math.floor(Math.random() * CFG.MSGS.length)];
      this.msgT = 2.6;
      this.nextMsg = 2.8 + Math.random() * 3;
    }
    if (this.msgT > 0) this.msgT -= dt;
  },

  draw(time) {
    const bob = Math.sin(time * 2.8 * Math.PI * 2) * 3;
    const y = CFG.GROUND_Y - CFG.CHASER_SIZE + bob;
    ctx.save();
    ctx.font = `${CFG.CHASER_SIZE}px serif`;
    ctx.textBaseline = "top";
    ctx.fillStyle = "black"; // iOS 이모지 색상 버그 방지
    ctx.fillText("🧔‍♀️", this.x, y);
    // 머리 위 작은 하트
    ctx.font = `14px serif`;
    ctx.fillText("❤️", this.x - 1, y + CFG.CHASER_SIZE - 30);
    ctx.restore();
    if (this.msgT > 0 && this.msgText)
      this._bubble(this.x + CFG.CHASER_SIZE * 0.5, y - 3);
  },

  _bubble(cx, tipY) {
    ctx.save();
    ctx.font = "bold 9px sans-serif"; // 폰트 작게
    const tw = ctx.measureText(this.msgText).width;
    const pad = 6,
      bw = tw + pad * 2,
      bh = 18;
    let bx = cx - bw * 0.5;
    bx = Math.max(3, Math.min(bx, CFG.W - bw - 3));
    const by = tipY - bh - 8;

    // 배경
    ctx.fillStyle = "#fff0f8";
    ctx.strokeStyle = "#ff6b9d";
    ctx.lineWidth = 1.2;
    _rrect(ctx, bx, by, bw, bh, 5);
    ctx.fill();
    ctx.stroke();

    // 꼬리
    ctx.fillStyle = "#fff0f8";
    ctx.beginPath();
    ctx.moveTo(cx - 4, by + bh);
    ctx.lineTo(cx + 4, by + bh);
    ctx.lineTo(cx, tipY - 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#ff6b9d";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 4, by + bh);
    ctx.lineTo(cx, tipY - 2);
    ctx.moveTo(cx + 4, by + bh);
    ctx.lineTo(cx, tipY - 2);
    ctx.stroke();

    // 텍스트
    ctx.fillStyle = "#c0392b";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(this.msgText, bx + bw * 0.5, by + bh * 0.5);
    ctx.restore();
  },
};

function _rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/* ================================================================
   Obstacles
   지면 장애물: 🪨 돌, 📑 공부
   공중 장애물: 📱 카톡 (점프해서 넘거나 그냥 달리면 통과)

   ◇ 공중 장애물 Y 범위 계산 (GROUND_Y=375, PSIZE=34, PHH=28)
     플레이어 서있을 때 hitbox 상단: 375-34+4 = 345
     점프 정점 hitbox 상단:          345 - 104 = 241 → 하단: 269
     "점프로 넘기": obs_y > 269+6 = 275  → NAG_Y_MIN: 277
     "그냥 통과":   obs_y + h < 345      → obs_y < 319 (h=26 기준)
     → NAG_Y_MIN: 277, NAG_Y_MAX: 319
================================================================ */
const obstacles = [];
let nextObsT = 2.0;

const OBS_TYPES = [
  { emoji: "🪨", w: 26, h: 22, aerial: false },
  { emoji: "🪨", w: 34, h: 22, aerial: false }, // 큰 돌
  { emoji: "📑", w: 22, h: 30, aerial: false }, // 공부
  { emoji: "📱", w: 22, h: 26, aerial: true }, // 카톡 (공중)
];

function spawnObs() {
  const t = OBS_TYPES[Math.floor(Math.random() * OBS_TYPES.length)];
  const y = t.aerial
    ? 277 + Math.random() * (319 - 277) // 공중 Y 범위
    : CFG.GROUND_Y - t.h; // 지면
  obstacles.push({ ...t, x: CFG.W + 10, y });
  nextObsT = CFG.OBS_MIN + Math.random() * (CFG.OBS_MAX - CFG.OBS_MIN);
}

function updateObs(dt) {
  nextObsT -= dt;
  if (nextObsT <= 0) spawnObs();
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].x -= gs.speed * dt;
    if (obstacles[i].x + obstacles[i].w < 0) obstacles.splice(i, 1);
  }
}

function drawObs() {
  for (const o of obstacles) {
    ctx.save();
    ctx.font = `${o.h}px serif`;
    ctx.textBaseline = "top";
    ctx.fillStyle = "black"; // iOS 이모지 색상 버그 방지
    ctx.fillText(o.emoji, o.x, o.y);
    ctx.restore();
  }
}

function obsHB(o) {
  return { x: o.x + 4, y: o.y + 4, w: o.w - 8, h: o.h - 5 };
}

/* ================================================================
   Background – 분홍빛 하늘 + 지면 (세로가 넓어 구름 더 많이)
================================================================ */
const bgClouds = [];

function initBg() {
  bgClouds.length = 0;
  for (let i = 0; i < CFG.BG_CLOUD_N; i++) {
    bgClouds.push({
      x: Math.random() * CFG.W,
      y: 10 + Math.random() * (CFG.GROUND_Y * 0.65), // 하늘 전체에 분포
      w: 44 + Math.random() * 48,
      a: 0.25 + Math.random() * 0.35,
    });
  }
}

function updateBg(dt) {
  const spd = gs.speed * CFG.BG_SPD;
  for (const c of bgClouds) {
    c.x -= spd * dt;
    if (c.x + c.w < 0) {
      c.x = CFG.W + 10;
      c.y = 10 + Math.random() * (CFG.GROUND_Y * 0.65);
    }
  }
}

function drawBg() {
  // 하늘
  const sg = ctx.createLinearGradient(0, 0, 0, CFG.GROUND_Y);
  sg.addColorStop(0, "#fce4f8");
  sg.addColorStop(1, "#fdf0fb");
  ctx.fillStyle = sg;
  ctx.fillRect(0, 0, CFG.W, CFG.GROUND_Y);

  // 배경 구름
  ctx.save();
  for (const c of bgClouds) {
    ctx.globalAlpha = c.a;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(c.x + c.w * 0.28, c.y + 9, 9, 0, Math.PI * 2);
    ctx.arc(c.x + c.w * 0.52, c.y + 4, 13, 0, Math.PI * 2);
    ctx.arc(c.x + c.w * 0.76, c.y + 9, 9, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.restore();

  // 지면
  const gg = ctx.createLinearGradient(0, CFG.GROUND_Y, 0, CFG.H);
  gg.addColorStop(0, "#a8d8a8");
  gg.addColorStop(0.5, "#5aaf5a");
  gg.addColorStop(1, "#3a7a3a");
  ctx.fillStyle = gg;
  ctx.fillRect(0, CFG.GROUND_Y, CFG.W, CFG.H - CFG.GROUND_Y);

  // 지면 선
  ctx.strokeStyle = "#4aaf4a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, CFG.GROUND_Y);
  ctx.lineTo(CFG.W, CFG.GROUND_Y);
  ctx.stroke();

  // 줄무늬 (속도감)
  const off = gs.groundOff % 72;
  ctx.strokeStyle = "rgba(0,0,0,0.06)";
  ctx.lineWidth = 1;
  for (let x = -off; x < CFG.W; x += 72) {
    ctx.beginPath();
    ctx.moveTo(x, CFG.GROUND_Y + 5);
    ctx.lineTo(x + 30, CFG.GROUND_Y + 5);
    ctx.stroke();
  }
}

/* ================================================================
   Danger Overlay
================================================================ */
function drawDanger() {
  const gap = player.x - chaser.x;
  const maxGap = CFG.PX - CFG.CHASER_X0; // 128
  const danger = Math.max(0, 1 - gap / maxGap);

  if (danger > 0.25) {
    ctx.fillStyle = `rgba(220,0,80,${(danger - 0.25) * 0.45})`;
    ctx.fillRect(0, 0, CFG.W, CFG.H);
  }
  if (danger > 0.72) {
    ctx.save();
    ctx.font = `bold ${Math.round(12 + danger * 3)}px sans-serif`; // 작게
    ctx.fillStyle = `rgba(255,50,100,${(danger - 0.72) * 2.2})`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("⚠️ 잡힌다!!!", CFG.W * 0.5, CFG.GROUND_Y + 4);
    ctx.restore();
  }
}

/* ================================================================
   Collision (AABB)
================================================================ */
function aabb(a, b) {
  return (
    a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
  );
}

function checkCol() {
  const ph = player.hitbox();
  for (let i = obstacles.length - 1; i >= 0; i--) {
    if (aabb(ph, obsHB(obstacles[i]))) {
      obstacles.splice(i, 1);
      if (CFG.GAME_OVER_HIT) {
        triggerCaught("장애물에 걸려 잡혔어!");
      } else {
        gs.penaltyT = CFG.PENALTY_DUR;
        gs.hitFlash = 0.7;
        chaser.x += CFG.CHASER_HIT;
      }
      return;
    }
  }
}

/* ================================================================
   Progress Bar (DOM)
================================================================ */
function updateProgressDOM() {
  const pct = Math.min(gs.rawDist / GOAL_RAW, 1) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-icon").style.left = pct + "%";
  document.getElementById("dist-num").textContent = Math.max(
    0,
    CFG.TOTAL_DIST - gs.score,
  );
}

/* ================================================================
   Game Loop
================================================================ */
function update(dt) {
  if (gs.status !== "running") return;

  if (gs.penaltyT > 0) gs.penaltyT = Math.max(0, gs.penaltyT - dt);
  if (gs.hitFlash > 0) gs.hitFlash = Math.max(0, gs.hitFlash - dt);
  if (gs.boostFlash > 0) gs.boostFlash = Math.max(0, gs.boostFlash - dt);

  gs.speed = Math.min(CFG.SPD_MAX, gs.speed + CFG.SPD_ACCEL * dt);

  // 700m마다 속도 부스트
  if (gs.score >= gs.nextMilestone && gs.nextMilestone < CFG.TOTAL_DIST) {
    gs.speed = Math.min(CFG.SPD_MAX, gs.speed + CFG.MILESTONE_BOOST);
    gs.boostFlash = 1.0;
    gs.nextMilestone += CFG.MILESTONE_DIST;
  }

  player.update(dt);
  chaser.update(dt);
  updateObs(dt);
  updateBg(dt);
  gs.groundOff += gs.speed * dt;

  gs.rawDist += gs.speed * dt;
  gs.score = Math.floor(gs.rawDist / CFG.SCORE_DIV);
  updateProgressDOM();

  if (gs.rawDist >= GOAL_RAW) {
    triggerWin();
    return;
  }
  if (chaser.x >= player.x - 10) {
    triggerCaught();
    return;
  }
  checkCol();
}

function drawBoost() {
  if (gs.boostFlash <= 0) return;
  const t = gs.boostFlash; // 1.0 → 0
  const alpha = t > 0.6 ? (t - 0.6) / 0.4 : t / 0.6; // fade in then out
  ctx.save();
  ctx.globalAlpha = alpha * 0.88;
  ctx.fillStyle = "#ffe066";
  ctx.fillRect(0, 0, CFG.W, CFG.H);
  ctx.globalAlpha = alpha;
  ctx.font = `bold ${Math.round(18 + (1 - t) * 4)}px sans-serif`;
  ctx.fillStyle = "#d97000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("⚡ SPEED UP!", CFG.W * 0.5, CFG.H * 0.38);
  ctx.restore();
}

function draw(ts) {
  ctx.setTransform(_dpr * _scale, 0, 0, _dpr * _scale, 0, 0); // 매 프레임 변환 재적용
  ctx.clearRect(0, 0, CFG.W, CFG.H);
  drawBg();
  drawObs();
  chaser.draw(ts / 1000);
  player.draw();
  drawDanger();
  drawBoost();
  if (gs.status !== "running" && gs.status !== "start") {
    ctx.fillStyle = "rgba(0,0,0,0.28)";
    ctx.fillRect(0, 0, CFG.W, CFG.H);
  }
}

function loop(ts) {
  if (gs.lastTime === null) gs.lastTime = ts;
  const dt = Math.min((ts - gs.lastTime) / 1000, 0.1);
  gs.lastTime = ts;
  update(dt);
  draw(ts);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

/* ================================================================
   Input
================================================================ */
function jump() {
  if (gs.status === "running") player.jump();
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.key === " " || e.code === "ArrowUp") {
    e.preventDefault();
    jump();
  }
});
canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  jump();
});
canvas.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault();
    jump();
  },
  { passive: false },
);

/* ================================================================
   State Transitions
================================================================ */
function startGame() {
  gs.status = "running";
  gs.rawDist = 0;
  gs.score = 0;
  gs.speed = CFG.SPD_INIT;
  gs.lastTime = null;
  gs.groundOff = 0;
  gs.penaltyT = 0;
  gs.hitFlash = 0;
  gs.nextMilestone = CFG.MILESTONE_DIST;
  gs.boostFlash = 0;

  player.y = CFG.GROUND_Y - CFG.PSIZE;
  player.vy = 0;
  player.onGround = true;

  chaser.reset();
  obstacles.length = 0;
  nextObsT = 2.0;
  initBg();
  updateProgressDOM();

  document.getElementById("gift-box").style.display = "none";
  _hide("start-screen");
  _hide("caught-screen");
  _hide("win-screen");
}

function triggerCaught(msg) {
  gs.status = "caught";
  const randomMsg = CAUGHT_MSGS[Math.floor(Math.random() * CAUGHT_MSGS.length)];
  document.getElementById("caught-msg").textContent = msg || randomMsg;
  document.getElementById("caught-dist").textContent = gs.score;
  setTimeout(() => {
    if (gs.status === "caught") _show("caught-screen");
  }, 400);
}

function triggerWin() {
  gs.status = "win";
  gs.rawDist = GOAL_RAW;
  gs.score = CFG.TOTAL_DIST;
  updateProgressDOM();
  setTimeout(() => {
    if (gs.status === "win") _show("win-screen");
  }, 700);
}

function _show(id) {
  document.getElementById(id).style.display = "flex";
}
function _hide(id) {
  document.getElementById(id).style.display = "none";
}

document.getElementById("gift-btn").addEventListener("click", () => {
  const box = document.getElementById("gift-box");
  box.style.display = "block";
  box.textContent = CFG.GIFT_MSG;
});

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("retry-btn").addEventListener("click", startGame);
