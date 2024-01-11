let canvas = document.getElementById('tetris')
let gameoverscreen = document.getElementById('gameoverscreen')
let resumescreen = document.getElementById('resumescreen')
let resume = document.getElementById('resume')
let startscreen = document.getElementById('startscreen')
let restart = document.getElementById('restart')
let pausebutton = document.getElementById('pause')
let body = document.getElementsByTagName('body')[0]
let ctx = canvas.getContext('2d')
let canvaswidth = canvas.width
let canvasheight = canvas.height
let leftmove = true
let rightmove = true
let downmove = true
let pause = true
let tetrismp3 = new Audio('./tetris.mp3')
let move = new Audio('./move.mp3')
let line = new Audio('./line.mp3')
let land = new Audio('./land.mp3')
let gover = new Audio('./clear.WAV')
tetrismp3.loop = true
tetrismp3.volume = 0.1
let clear = false
let left = document.getElementById('left')
let right = document.getElementById('right')
let down = document.getElementById('down')
let score = document.getElementsByClassName('score')[0]
let cscore = 0
score.innerHTML = cscore
// ctx scale is 30 means if i put 1 unit to be coloured black 30 unit of the canvas will be coloured black
ctx.scale(30, 30)


// all the shapes are here
let Ishape = [
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
  ],
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]
  ],
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
  ]

]
let Oshape = [
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 1],
    [1, 1]
  ]

]
let Tshape = [
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1]
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ],
  [
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0]
  ]

]
let Lshape = [
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0]
  ],
  [
    [0, 1, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
  ]
]
let Jshape = [
  [
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 1]
  ],
  [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 1]
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0]
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
  ]

]
let Zshape = [
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0]
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0]
  ]
]
let Sshape = [
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1]
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1]
  ]

]
// all the cords of four rotations of currently chosen shape will be stored in the fallingshape array one rotation in one array of fallingshape as array of object containg chords
let fallingshape = [
  [], [], [], []
]

//currentshape is randomly chosen shape, and rot =0 is the first rotation of currently chosen shape,currentshape[rot=1] is 2nd shape of chosen shape

// let shapes = [Ishape, Oshape]
let shapes = [Ishape, Oshape, Zshape, Sshape, Tshape, Lshape, Jshape]
let ran = Math.floor(Math.random() * shapes.length)
let currentshape = shapes[ran]
let rot = 0


// main function of whole script it will repeat the functions again and again like setinterval but better than setinterval,speed = 10 means it will repeat the functions 10 times in one second
let speed = 0
let s = 3
let falling = false
let lastRenderTime = 0
function main(currentTime) {
  window.requestAnimationFrame(main)
  const differncebtwneachrender = (currentTime - lastRenderTime) / 1000
  if (differncebtwneachrender < 1 / speed) return
  lastRenderTime = currentTime



  stop()

  rendershape()

}

window.requestAnimationFrame(main);

generatepiece()

// function to generate a random shape and it will push the chords of all rotations of currently chosen shape in fallingshape array
function generatepiece() {
  rot = 0
  leftmove = true
  rightmove = true
  ran = Math.floor(Math.random() * shapes.length)
  currentshape = shapes[ran]
  x = 4
  y = -4
  // it will push the 1st rotation of chosen shape in fallingshape array same goes to second in below for loop
  for (i = 0; i < currentshape[0].length; i++) {
    for (j = 0; j < currentshape[0][i].length; j++) {
      if (currentshape[0][i][j] != 0) {
        fallingshape[0].push({ x: x + j, y: y + i })
      }
    }
  }
  //2nd rotation
  for (i = 0; i < currentshape[1].length; i++) {
    for (j = 0; j < currentshape[1][i].length; j++) {
      if (currentshape[1][i][j] != 0) {
        fallingshape[1].push({ x: x + j, y: y + i })
      }
    }
  }
  //3rd rotation
  for (i = 0; i < currentshape[2].length; i++) {
    for (j = 0; j < currentshape[2][i].length; j++) {
      if (currentshape[2][i][j] != 0) {
        fallingshape[2].push({ x: x + j, y: y + i })
      }
    }
  }
  //4th rotation
  for (i = 0; i < currentshape[3].length; i++) {
    for (j = 0; j < currentshape[3][i].length; j++) {
      if (currentshape[3][i][j] != 0) {
        fallingshape[3].push({ x: x + j, y: y + i })
      }
    }
  }

}
// it will fill black color to the currently chosen shape of chosen rotation
function rendershape() {

  for (i = 0; i < fallingshape[rot].length; i++) {
    ctx.fillStyle = 'black'
    ctx.fillRect(fallingshape[rot][i].x, fallingshape[rot][i].y, 1, 1)
    ctx.strokeStyle = '#eeecec'
    ctx.lineWidth = 0.01;
    ctx.strokeRect(fallingshape[rot][i].x, fallingshape[rot][i].y, 1, 1)
  }
}
// will increase the cords y by 1 so the new renderd shape will appear a block below
function movedown() {
  for (i = 0; i < fallingshape.length; i++) {

    for (t = 0; t < fallingshape[i].length; t++) {
      fallingshape[i][t].y += 1
    }
  }
}
// will erase the previous positioned shape so that the shape at new cords appear
function erase() {

  for (j = 0; j < fallingshape[rot].length; j++) {
    ctx.fillStyle = '#eeecec'
    ctx.fillRect(fallingshape[rot][j].x, fallingshape[rot][j].y, 1, 1)
  }

}
rendershape()
// function to change value of rot , which will rsult in rendering alternate rotatio of currently chosen shape
function rotate() {
  erase()
  rot += 1
  if (rot == 4) {
    rot = 0
  }
  //after rotation shapes sometimes get inside the freezed shapes to prevent that the code is , if x cord of the diffused block's next block is greater than x cord of diffused block whole shape will move 1 xcord forward
  for (t = 0; t < fallingshape[rot].length; t++) {
    if (freezedxy.some(e => e.x == fallingshape[rot][t].x && e.y == fallingshape[rot][t].y)) {
      try {

        if (fallingshape[rot][t + 1].x > fallingshape[rot][t].x || fallingshape[rot][t + 2].x > fallingshape[rot][t].x) {
          for (j = 0; j < fallingshape[rot].length; j++) {
            fallingshape[rot][j].x += 1
          }
          erase()
          rendershape()
        }
      }
      catch (err) {
        console.log('lol')
      }
    }
  }
  for (t = 0; t < fallingshape[rot].length; t++) {
    if (freezedxy.some(e => e.x == fallingshape[rot][t].x && e.y == fallingshape[rot][t].y)) {
      try {
        if (fallingshape[rot][t - 1].x < fallingshape[rot][t].x || fallingshape[rot][t - 2].x < fallingshape[rot][t].x) {
          for (j = 0; j < fallingshape[rot].length; j++) {
            fallingshape[rot][j].x -= 1
          }
          erase()
          rendershape()
        }
      }
      catch (err) {
        console.log('lol')
      }
    }
  }
  // after rotation if the shape is outside of the canvas it will inc or decrease x cord of all blocks
  for (i = 0; i < fallingshape[rot].length; i++) {

    if (fallingshape[rot][i].x == -2) {
      for (j = 0; j < fallingshape[rot].length; j++) {
        fallingshape[rot][j].x += 2
      }
      erase()
      rendershape()
      break
    }
    else if (fallingshape[rot][i].x == -1) {
      for (j = 0; j < fallingshape[rot].length; j++) {
        fallingshape[rot][j].x += 1
      }
      erase()
      rendershape()
      break
    }
  }
  for (i = fallingshape[rot].length - 1; i >= 0; i--) {


    if (fallingshape[rot][i].x == 12) {
      for (j = 0; j < fallingshape[rot].length; j++) {
        fallingshape[rot][j].x -= 3

      }
      erase()
      rendershape()
      break
    }
    else if (fallingshape[rot][i].x == 11) {
      for (j = 0; j < fallingshape[rot].length; j++) {
        fallingshape[rot][j].x -= 2

      }
      erase()
      rendershape()
      break
    }

    else if (fallingshape[rot][i].x == 10) {
      for (j = 0; j < fallingshape[rot].length; j++) {
        fallingshape[rot][j].x -= 1
      }
      erase()
      rendershape()
      break
    }

  }

}

let rota = true
document.body.onkeyup = function(e) {
  if (e.keyCode == 32 && !pause) {

    if (rota) { rotate() }
    else { console.log(2) }


  }
}
body.addEventListener('click', function() {
  if (!pause) {
    if (rota) { rotate() }
    else { console.log(2) }

  }

})
// all the cords of shapes which are the bottom stopped will be stored in this array freezedxy
let freezedxy = []

// function to stop the shape if it reaches the lowest position or if it is above another shape
function stop() {

  for (i = 0; i < fallingshape[rot].length; i++) {

    if (fallingshape[rot][i].y == 19) {
      rendershape()
      land.play()
      for (k = 0; k < fallingshape[rot].length; k++) {
        freezedxy.push({ x: (fallingshape[rot][k].x), y: (fallingshape[rot][k].y) })
      }

      removeline()
      fallingshape = [
        [], [], [], []
      ]
      generatepiece()
    }
    else {
      for (l = 0; l < freezedxy.length; l++) {
        if (fallingshape[rot][i].x == freezedxy[l].x && fallingshape[rot][i].y + 1 == freezedxy[l].y) {
          rendershape()
          land.play()
          for (k = 0; k < fallingshape[rot].length; k++) {
            freezedxy.push({ x: (fallingshape[rot][k].x), y: (fallingshape[rot][k].y) })
          }


          removeline()

          gameover()
          fallingshape = [
            [], [], [], []
          ]
          generatepiece()
        }
      }
    }
  }


}

// function to change the shapes position in left right down bu changing the cords of fallingshape
//left

function blockmoveleft() {
  // if any freezed block is in left side of falling block then lmove will be false and so leftmove,but if there is not block on left after clickung left arrow then lmove will remain true as it was from start and hence leftmove will be true
  let lmove = true
  for (i = 0; i < fallingshape[rot].length; i++) {
    for (j = 0; j < freezedxy.length; j++) {
      if (fallingshape[rot][i].x == freezedxy[j].x + 1 && fallingshape[rot][i].y == freezedxy[j].y) {
        lmove = false

      }

    }
  }
  if (lmove == true) {
    leftmove = lmove
  }
  else { leftmove = false }
  for (i = 0; i < fallingshape[rot].length; i++) {
    if (fallingshape[rot][i].x <= 0) {
      leftmove = false
    }
  }

  if (leftmove && !pause) {
    erase()
    move.play()
    for (i = 0; i < fallingshape.length; i++) {
      for (t = 0; t < fallingshape[i].length; t++) {
        fallingshape[i][t].x -= 1
      }

    }
    rightmove = true
  }
}
//right
function blockmoveright() {
  let rmove = true
  for (i = 0; i < fallingshape[rot].length; i++) {
    for (j = 0; j < freezedxy.length; j++) {
      if (fallingshape[rot][i].x + 1 == freezedxy[j].x && fallingshape[rot][i].y == freezedxy[j].y) {
        rmove = false
      }

    }
  }
  if (rmove == true) {
    rightmove = rmove
  }
  else { rightmove = false }
  for (i = 0; i < fallingshape[rot].length; i++) {
    if (fallingshape[rot][i].x >= 9) {
      rightmove = false
    }
  }

  if (rightmove && !pause) {
    erase()
    move.play()
    for (i = 0; i < fallingshape.length; i++) {
      for (t = 0; t < fallingshape[i].length; t++) {
        fallingshape[i][t].x += 1
      }
    }
    leftmove = true
  }
}
//down
function blockmovedown() {
  let dmove = true
  for (i = 0; i < fallingshape[rot].length; i++) {
    for (j = 0; j < freezedxy.length; j++) {
      if (fallingshape[rot][i].x == freezedxy[j].x && fallingshape[rot][i].y + 2 == freezedxy[j].y) {
        dmove = false
      }

    }
  }
  if (dmove == true) {
    downmove = dmove
  }
  else { downmove = false }
  for (i = 0; i < fallingshape[rot].length; i++) {
    if (fallingshape[rot][i].y >= 18) {
      downmove = false
    }
  }

  if (downmove && !pause) {
    erase()
    move.play()
    for (i = 0; i < fallingshape.length; i++) {
      for (t = 0; t < fallingshape[i].length; t++) {
        fallingshape[i][t].y += 1
      }
    }
  }
}

window.addEventListener('keydown', e => {

  switch (e.key) {

    case "ArrowDown":
      blockmovedown()

      break;
    case "ArrowLeft":
      blockmoveleft()

      break;
    case "ArrowRight":
      blockmoveright()

      break;

  }
})


left.onclick = function() {
  blockmoveleft()
  event.stopPropagation();
}
down.onclick = function() {
  blockmovedown()
  event.stopPropagation();
}
right.onclick = function() {
  blockmoveright()
  event.stopPropagation();
}
setInterval(function() {
  if (falling) {
    erase()
    movedown()
    checkrotation()

  }
}, 1000 / s)
//function to check if the shape should be rotated or not that is if the falling shape is between freezed blocks and dont have space for the new rotated shape
function checkrotation() {
  for (p = fallingshape[rot].length - 1; p >= 0; p--) {
    if ((fallingshape[rot][p].x == 8 || fallingshape[rot][p].x == 9) && ran != 0) {
      if (freezedxy.some(e => (e.x == 7 || e.x == 8) && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1))) {
        rota = false
        break
      }
      else {
        rota = true
      }
    }

    else if ((fallingshape[rot][p].x == 9 || fallingshape[rot][p].x == 8 || fallingshape[rot][p].x == 7) && ran == 0) {
      if (freezedxy.some(e => (e.x == 8 || e.x == 7 || e.x == 6) && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1))) {
        rota = false
        break
      }
      else {
        rota = true
      }
    }

    else {
      rota = true
      break
    }
  }
  for (p = fallingshape[rot].length - 1; p >= 0; p--) {
    if ((fallingshape[rot][p].x == 0 || fallingshape[rot][p].x == 1) && ran != 0) {
      if (freezedxy.some(e => (e.x == 1 || e.x == 2) && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1))) {
        rota = false
        break
      }
      else {
        rota = true
      }
    }

    else if ((fallingshape[rot][p].x == 0 || fallingshape[rot][p].x == 1 || fallingshape[rot][p].x == 2) && ran == 0) {
      if (freezedxy.some(e => (e.x == 1 || e.x == 2 || e.x == 3) && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1))) {
        rota = false
        break
      }
      else {
        rota = true
      }
    }

    else {
      rota = true
      break
    }
  }
  for (p = fallingshape[rot].length - 1; p >= 0; p--) {

    if (freezedxy.some(e => e.x == fallingshape[rot][p].x - 1 && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) &&
      freezedxy.some(e => e.x == fallingshape[rot][p].x + 2 && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) && ran != 0) {
      rota = false
      break
    }
    else if (freezedxy.some(e => e.x == fallingshape[rot][p].x - 1 && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) &&
      freezedxy.some(e => (e.x == fallingshape[rot][p].x + 3 || e.x == fallingshape[rot][p].x + 2 || e.x == fallingshape[rot][p].x + 1) && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) && ran == 0) {
      rota = false
      break
    }
    else if (freezedxy.some(e => e.x == fallingshape[rot][p].x + 1 && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) &&
      freezedxy.some(e => (e.x == fallingshape[rot][p].x - 3 || e.x == fallingshape[rot][p].x - 2) && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) && ran == 0) {
      rota = false
      break
    }
    else if (freezedxy.some(e => e.x == fallingshape[rot][p].x + 2 && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) &&
      freezedxy.some(e => (e.x == fallingshape[rot][p].x - 2) && (e.y == fallingshape[rot][p].y || e.y == fallingshape[rot][p].y + 1)) && ran == 0) {
      rota = false
      break
    }
    else {
      rota = true

    }


  }

}

let removingline;
// remove the lines which are filled
function removeline() {


  for (n = 19; n > 0; n--) {
    if (freezedxy.filter(e => e.y == n).length == 10) {
      removingline = n
      cscore += 10
      score.innerHTML = cscore
      freezedxy = freezedxy.filter(obj => obj.y != n)
      setTimeout(function() {

        line.play()
        ctx.fillStyle = '#eeecec'
        ctx.fillRect(0, removingline, 10, 1)
        movefreezedblocksdown()


      }, 180)
      break
    }

  }


}
// decrease y lvl of remaining lines by 1
function movefreezedblocksdown() {
  setTimeout(function() {
    for (c = 0; c < freezedxy.length; c++) {
      ctx.fillStyle = '#eeecec'
      ctx.fillRect(freezedxy[c].x, freezedxy[c].y, 1, 1)
    }
    for (s = 0; s < freezedxy.length; s++) {
      if (freezedxy[s].y < removingline) {
        freezedxy[s].y += 1
      }
    }
    for (c = 0; c < freezedxy.length; c++) {
      ctx.fillStyle = 'black'
      ctx.fillRect(freezedxy[c].x, freezedxy[c].y, 1, 1)
      ctx.strokeStyle = '#eeecec'
      ctx.lineWidth = 0.01;
      ctx.strokeRect(freezedxy[c].x, freezedxy[c].y, 1, 1)
    }
    removeline()
  }, 100)

}


// to check shapes have filled to top y lvl
function gameover() {
  for (z = 0; z < freezedxy.length; z++) {
    if (freezedxy[z].y == 0) {
      falling = false
      speed = 0
      pause = true
      clear = true
      tetrismp3.pause()
      tetrismp3.currentTime = 0
      gover.play()
    }
  }
  if (clear) {
    for (j = 0; j < freezedxy.length; j++) {
      ctx.fillStyle = 'black'
      ctx.fillRect(freezedxy[j].x, freezedxy[j].y, 1, 1)
      ctx.strokeStyle = '#eeecec'
      ctx.lineWidth = 0.01;
      ctx.strokeRect(freezedxy[j].x, freezedxy[j].y, 1, 1)
    }
    //rendershape()
    gameoverscreen.classList.add('popup')

  }
}
//start game
startscreen.onclick = function() {
  startscreen.classList.add('gamestartted')
  speed = 10
  falling = true
  pause = false
  tetrismp3.play()
}

//restart game after clicking restart
restart.onclick = function() {
  gameoverscreen.classList.remove('popup')
  clear = false
  setTimeout(function() {
    for (j = 0; j < freezedxy.length; j++) {
      ctx.fillStyle = '#eeecec'
      ctx.fillRect(freezedxy[j].x, freezedxy[j].y, 1, 1)
    }
    falling = true
    speed = 10
    pause = false
    tetrismp3.play()
    freezedxy = []
    cscore = 0
    score.innerHTML = cscore
  }, 200)
}
pausebutton.onclick = e => {
  pauseGame()
  e.stopPropagation();
}


function pauseGame() {
  if (!pause) {
    speed = 0
    falling = false
    pausebutton.innerHTML = `<i class="fa fa-play-circle" aria-hidden="true"></i>`
    tetrismp3.pause()
    rendershape()
    pause = true
    resumescreen.classList.add('popup')
  }
  else {
    speed = 10
    falling = true
    pausebutton.innerHTML = ` <i class="fa fa-pause-circle" aria-hidden="true"></i>`
    tetrismp3.play()
    pause = false
    resumescreen.classList.remove('popup')
  }

}

// to pause game when tab is switched
window.addEventListener("blur", e => {
  if (!pause) {

    speed = 0
    falling = false
    pausebutton.innerHTML = `<i class="fa fa-play-circle" aria-hidden="true"></i>`
    tetrismp3.pause()
    rendershape()
    pause = true
    resumescreen.classList.add('popup')
  }
})
window.addEventListener("focus", e => {
  if (!pause) {

    speed = 10
    falling = true
    pausebutton.innerHTML = ` <i class="fa fa-pause-circle" aria-hidden="true"></i>`
    tetrismp3.play()
    pause = false
  }
})

resume.onclick = e => {
  resumescreen.classList.remove('popup')
  speed = 10
  falling = true
  pausebutton.innerHTML = ` <i class="fa fa-pause-circle" aria-hidden="true"></i>`
  tetrismp3.play()
  pause = false
  e.stopPropagation();
}