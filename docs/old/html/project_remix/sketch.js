let sampler, synth; // Tone.js
let ansr;//y or n
let question;//current question
let ay;//vars in drawing
let by;
let clouds;
let count, happ, god, age, alive, hapdata, goddata;
//0 - 10
let questions = [[["If you found a dog, would you take it home?", 30, 20], ["If you could, would you eat cake for every meal?", 15, -20],
["Would you eat salad for every meal for a week?", -10, 20], ["Should you let cat steal some of your cake?", -20, 15],
["Would you stay up until 4 am playing a game", 30, -20], ["You drop your sandwich into the bin, do you still eat it?", -25, -15],
["you find 10 moneys, do you pick up?", 10, -10], ["Do you wear shorts in winter?", -20, 10],
["Do you read books regularly?", -10, 25], ["Do you watch television every day?", 10, -30],
["do you stay informed about the news?", -20, 15], ["Do you help others with school work?", -15, 20],
["If you saw someone drop a wrapped chocolate, would you eat it?", 30, 10], ["When spiders come into your house, do you squash them?", -15, -30],
["Do you drive over the speedlimit?", 20, -30], ["Would you ever re-gift something you dont like?", 20, -25]],
[["Would you fake your own death for the saftey of a friend?", 15, 15], ["If you were offered your dream job today, would you move across the country for it?", 20, -15],
["Would you take in a cat that you found on the side of the road", 10, 20], ["If given the opportunity would you prevent a crime but get blamed for a different one?", -25, 15],
["If your friend fell over do you laugh?", 15, -25], ["Would you run away from home?", -15, -25],
["Do you choose to exercise regularly?", -15, 15], ["Is your diet high in sugar?", 25, -15],
["Do you respond to a text with a phone call?", -25, -25], ["Do you have a smart phone?", 15, -25],
["a child gets splashed by a car driving through a puddle, do you laugh?", 15, -30], ["Would you get chickens?", 20, 20],
["would you help a stranger who fell over in public?", 10, 20], ["Hot weather is better than cold weather", -20, -20],
["Do you take more than 1 free sample?", 30, -20], ["Do you always keep others secrets to yourself?", 15, 25]],
[["Would you go to jail for 5 years to earn your family $500,000?", -25, 30], ["Would you sacrifice a family member to save 10 strangers", -25, 17],
["Would you foster cats and dogs if you had the chance?", 25, 25], ["Would you egg an enemys house?", 15, -10],
["Would you feel bad about accidentally stealing someones mail?", -25, -25], ["Would you hate a neighbor if their kid is too loud?", 10, -20],
["If you had the skills, would you build your own house?", -10, 25], ["Do you want to go camping?", 25, 10],
["Is your posture terrible?", -15, -25], ["Does your smart phone make you less smart?", -10, 25],
["Have you ever broken a bone?", -15, -15], ["Have you ever used roller blades?", 25, 15],
["Can you ride a bike?", -25, -10], ["Have you visited a country overseas?", 25, 15],
["Would you ever consider committing arson for personal gain?", 15, -30], ["Would you steal something little if there was no consequence?", 20, -30],
["are jorts an acceptable item of clothing?", 15, -40], ["Would you help a stranger with directions?", -15, 25],
["Would you be sad if you had to give up juice forever?", -20, -15], ["is culinary experimentation a useless hobby?", -20, -30],
["Do you snoop over people's shoulder's to see what they're doing on their phone?", -15, -30], ["If you find a missing lottery ticket that won, would you return it?", -20, 30]],
[["Would you starve if you were only allowed to eat animals?", -10, 20], ["Would you sacrifice your cat to save 2 of someone elses?", -25, 25],
["Would you take care of a freinds kids if their perants left forever?", 15, 25], ["Would you gamble away all of your families money for a chance to triple it?", 25, -25],
["Would you regret being nice to someone who grew up to be a bad person?", -25, -25], ["Would you sacrifice your most loved mug", -25, 5],
["Can you sail a boat?", 20, 15], ["Do you eat vegetables with every evening meal?", -25, 15],
["Is green a primary colour?", -25, -30], ["Have you ever made a Tic Tok?", 10, -25],
["Have you visited a zoo in the last 2 years?", 15, 15], ["Do you peel the skin on your apple before eating it?", -15, -25],
["Can you use chopsticks?", 15, 25], ["Can you drive a manual car?", -10, -15],
["Would you become a different person if it let you live longer?", -25, -10], ["would you pay more taxes for a better country?", -20, 25],
["Would you risk your career for love?", 30, 15], ["are you saddened by those that are less fortunate around the world?", -20, 20],
["Do you think you only live once?", -20, 25], ["Do you believe that the government watches us through bird drones", -20, 15],
["when all of your cells regenerate every 7 years, are you a different person?", 15, -15], ["Are you still you without physical body?", 20, 20]],
[["Do you want to be happy?", 35, -20], ["Do you want to be sad?", -35, 20],
["Do you want to be a good person?", -20, 35], ["Do you want to be a bad person?", 20, -35]]];
// for copy paste     ["question", -25,25]

let title_text_img, instruction_text_img, personality_graph_img;
function preload() {//preload images (img3 is square for graph rest are text)
  title_text_img = loadImage('this-is-you.png');
  instruction_text_img = loadImage('press-y-or-n-to-answ.png');
  personality_graph_img = loadImage('squaree.png');
  img4 = loadImage('happi.png');
  img5 = loadImage('goodper.png');
  img6 = loadImage('goodnes.png');
  img7 = loadImage('age.png');
  img8 = loadImage('your-friends.png');
}

function Cloud(x, y) {
  this.x = x;
  this.y = y;
}

function draw_cloud(cloud) {//draw cloud function
  let xxx = cloud.x;
  let yyy = cloud.y;
  if (happ < 220) {//rain if sad
    stroke(90, 200, 250);
    line(xxx - 25, yyy, sin(frameCount) + xxx - 60, sin(frameCount) + yyy + 50);
    line(xxx - 5, yyy, sin(frameCount) + xxx - 40, cos(frameCount) + yyy + 54);
    line(xxx + 15, yyy, sin(frameCount) + xxx - 20, sin(frameCount) + yyy + 52);
    line(xxx + 35, yyy, sin(frameCount) + xxx, cos(frameCount) + yyy + 55);
    line(xxx + 55, yyy, sin(frameCount) + xxx + 20, sin(frameCount) + yyy + 53);
  }
  noStroke();//cloud part
  fill(227, 254, 255);
  ellipse(xxx, yyy, 73 + cos(frameCount / 2));
  ellipse(xxx - 35, yyy, 50 + sin(frameCount / 3));
  ellipse(xxx + 35, yyy, 50 + sin(frameCount / 3));
}

function crowd(xx, yy) {//draw friends function
  stroke(0);
  fill(255);
  quad(xx + 10, yy - 20, xx + 15, yy - 25, (xx - 20) - 3 * sin(frameCount), (yy - 65) + 3 * sin(frameCount), (xx - 25) - 3 * sin(frameCount), (yy - 60) + 3 * sin(frameCount));
  quad(xx + 45, yy - 20, xx + 40, yy - 25, (xx + 65) - 3 * sin(frameCount), (yy - 65) - 3 * sin(frameCount), (xx + 70) - 3 * sin(frameCount), (yy - 60) - 3 * sin(frameCount));
  fill(colo);
  quad(xx, yy, xx + 10, yy - 50, xx + 40, yy - 50, xx + 50, yy);
  fill(255);
  ellipse(xx + 25, yy - 60, 45);
  fill(0);
  ellipse(xx + 17, yy - 57, 3);
  ellipse(xx + 33, yy - 57, 3);
  noStroke();
  arc(xx + 25, yy - 51, 18, 18, 0, PI);
}

function sun(xxx, yyy) { //draw sun function
  noStroke();
  fill(255, 255, 160);
  ellipse(xxx, yyy, 45 + sin(frameCount));
  fill(255, 255, 160, 150);
  ellipse(xxx, yyy, 53 + cos(frameCount));
  fill(255, 255, 160, 60);
  ellipse(xxx, yyy, 70 + sin(frameCount - 2));
}

function player(xx, yy) {//draw player function
  let gree = god;//increase green with goodness
  let red = 500 - god;//decrease red with goodness
  if (age <= 10) { //circle baby
    fill(red, gree, 50);
    ellipse(xx, yy + 2 + age / 2, 14 + (age));
    fill(255);
    ellipse(xx, yy - 10 - age / 2, 20 + 2 * (age));
    fill(0);
    noStroke();
    ellipse(xx - 2.3 - age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
    ellipse(xx + 2.3 + age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
  } else if (age <= 25) { //dorito teen
    stroke(0);
    fill(red, gree, 50);
    quad(xx - 10 - 2 * (age / 4), windowHeight / 2, (xx + 10 + age / 4) + age / 4, windowHeight / 2,
      (xx + 10 + age / 4), 390 + age, xx - 10 - age / 4, 390 + age);
    fill(255);
    ellipse(xx, yy - 10 - age / 2, 20 + (2 * age));
    fill(0);
    noStroke();
    ellipse(xx - 3 - age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
    ellipse(xx + 3 + age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
  } else if (age <= 50) { //big foot triangle
    stroke(0);
    fill(red, gree, 50);
    quad(xx - 10 - 2 * (age / 4), windowHeight / 2, (xx + 10 + age / 4) + age / 4, windowHeight / 2,
      (xx + 25 + age / 2), 400 + age, xx - 25 - age / 2, 400 + age);
    fill(255);
    ellipse(xx, yy - 10 - age / 2, 20 + (2 * age));
    fill(0);
    noStroke();
    ellipse(xx - 3 - age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
    ellipse(xx + 3 + age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
  } else if (age <= 75) {//donut man that shrinks w age
    stroke(0);
    fill(red, gree, 50);
    ellipse(xx, yy - 10 - age / 2, 200 + cos(age / 2));
    fill(255);
    ellipse(xx, yy - 10 - age / 2, 20 + (2 * age));
    fill(0);
    noStroke();
    ellipse(xx - 3 - age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
    ellipse(xx + 3 + age / 3, yy - 10 - (age / 10), 2.5 + age / 5);
  } else { //too old so demon eyes
    stroke(0);
    fill(255);
    ellipse(xx, yy - 10 - age / 2, 20 + (2 * age));
    fill(red, gree, 50);
    ellipse(xx - 3 - age / 3, yy - 10 - (age / 10), age / 5);
    ellipse(xx + 3 + age / 3, yy - 10 - (age / 10), age / 5);
  }

}

function pointDraw(xxx, yyy) {//draw smiley on graph function
  noStroke();
  fill('black');
  ellipse(xxx, yyy, 23);
  fill(250, 230, 50);
  ellipse(xxx, yyy, 20);
  fill('black');
  ellipse(xxx - 5, yyy - 3, 3);
  ellipse(xxx + 5, yyy - 3, 3);
  //arc(xxx, yyy-2, 30,30, PI);
  arc(xxx, yyy + 1, 12, 12, 0, PI);
  stroke(0);
}
function setup() {//setup canvas and text perameters
  clouds = [
    new Cloud(120, 300),
    new Cloud(1200, 200),
    new Cloud(600, 530)
  ];

  count = 0;//timer
  happ = 250;//happiness
  god = 250;//goodness
  age = 0;//age
  alive = true;//contols death text
  hapdata = [];//place to collect data for end graph happiness
  goddata = [];//place to collect data for end graph goodness
  textFont('roboto');
  frameRate(10);
  createCanvas(displayWidth, displayHeight);
  background(165, 220, 245);
  fill(255);
  textSize(35);
  textAlign(CENTER);
  newQuestion();
  question = ["Remixed by lockness Ko 😎 - Optimized so it's milliseconds faster 🥹", 0, 0]
  //text("press SPACE to start the Tone.js music engine", 100, 100);
  //synth = new Tone.Synth().toDestination();
}

function death() {//when you die this happens
  alive = false;
  let len = hapdata.length;//array length for death graph length
  let goodness = (god / 5);//convert to percent
  let hapness = (happ / 5);//convert to percent
  //death text
  fill('#2978e6');
  text("you were, " + hapness + "% happy", windowWidth / 2, 50 + (windowHeight / 3));
  text("and " + goodness + "% a good person", windowWidth / 2, 100 + (windowHeight / 3));
  textSize(23);
  text("press 'r' to restart", windowWidth / 2, 25);
  textSize(35);
  for (let n = 1; n < len; n++) {
    if (n == 1) {//data to graphable line vars for death graph
      ay = 0;
      by = 0;
    } else {
      ay = hapdata[n - 2];
      by = goddata[n - 2];
    }
    //laybels on death graph
    textAlign(LEFT);
    fill('#3cbbfa');
    stroke(0);
    text("age:", 20, 640);
    text("25", 250, 650);
    text("50", 500, 650);
    text("75", 750, 650);
    text("100", 1000, 650);
    text("125", 1250, 650);
    //rect makeup and guide lines of death graph 
    noStroke();
    fill(155);
    rect(10, 100, 10, 500);
    rect(20, 600, windowWidth - 100, 10);
    fill(65, 185, 250, 3);
    rect(20, 340, (age * 10) + 10, 10);
    rect(20, 140, (age * 10) + 10, 10);
    rect(20, 540, (age * 10) + 10, 10);
    //lines for happiness and goodness on death graph
    stroke('yellow');
    line(n * 10, 600 - ay, (n + 1) * 10, 600 - hapdata[n - 1]);
    stroke('#f533c4');
    line(n * 10, 600 - by, (n + 1) * 10, 600 - goddata[n - 1]);
    fill(155);
  }
  //image laybels on death graph
  image(img4, 50, 50);//happiness
  image(img5, 50, 80);//goodperson ness
  alive = false; // hides gui
}

function draw_graph() {
  fill(70);
  rect(119, 109, 252, 252);
  rect(129, 99, 232, 1);
  rect(109, 116, 1, 232);
  triangle(360, 96, 360, 104, 367, 100.5);
  triangle(105, 345, 114, 345, 110, 355);
  //in game map
  image(personality_graph_img, 120, 110, 250, 250);
  pointDraw(120 + happ / 2, 110 + god / 2);
  fill(250, 230, 50);
  //goodness happiness age in game labels
  image(img4, 180, 70);
  image(img6, 80, 170);
  image(img7, 390, 70);
  image(img8, 50, 370);
}

function draw() {
  noCursor();
  background(165, 220, 245);//bg colour
  sun(mouseX, mouseY);//sun follow mouse

  clouds.forEach((cloud) => {
    draw_cloud(cloud);
  });
  textAlign(CENTER);

  if (alive == true && god > 150) {
    colo = ('#A6FF4D');
    crowd(80, 485);
    if (god > 250) {
      colo = ('#FF6699');
      crowd(180, 485);
      if (god > 350) {
        colo = ('#FFBB33');
        crowd(280, 485);
        if (god > 450) {
          colo = ('#33FFDD');
          crowd(380, 485);
        }
      }
    }
  } else if (alive == true) {
    stroke(0);
    textSize(23);
    fill('#2978e6');
    text("you're all alone :(", 150, 430);
    textSize(35);
  }
  if (age == 1) {//before game starts draw these pictures
    image(title_text_img, (windowWidth / 2) - 155, (windowHeight / 3), 300, 100);//this is you
    image(instruction_text_img, (windowWidth / 3) - 200, (windowHeight / 3) * 2);//y or n answer watch timer
  }
  fill('#2978e6');
  stroke(0);
  if (happ >= 500) {//death text diff based on how die
    text("You died of happiness at age " + age, windowWidth / 2, windowHeight / 3);
    death();
  } else if (0 >= happ) {
    text("You died of sadness at age " + age, windowWidth / 2, windowHeight / 3);
    death();
  } else if (0 >= god) {
    text("You died of being a terrible person at age " + age, windowWidth / 2, windowHeight / 3);
    death();
  } else if (god >= 500) {
    text("You died of being too good a person at age " + age, windowWidth / 2, windowHeight / 3);
    death();
  } else if (age > 1 && count >= 50) {//if timer runs out
    text("You died of indecision at age " + age, windowWidth / 2, windowHeight / 3);
    death();
  }

  count += 1;//timer up

  if (alive == true) { // show gui
    draw_graph();
    strokeWeight(2.5);
    stroke(0);
    if (age != 1) {//timer
      noStroke();
      fill(0);
      if ((0.1 + ((count) / 8)) < 6) {
        arc(9 * (windowWidth / 10), 110, 85, 85, 6.2, 0.1 + ((count) / 8));
      } else {
        ellipse(9 * (windowWidth / 10), 110, 85);
      }
      fill(250, 230, 50);
      arc(9 * (windowWidth / 10), 110, 80, 80, 0, (count) / 8);
      stroke(0);
    }
    //draw player
    player(windowWidth / 2, windowHeight / 2);
    stroke(0);
    //arrows on in game graph
    //age number
    fill('#3cbbfa');
    textAlign(LEFT);
    text(age, 450, 90);
    //write question
    textAlign(CENTER);
    text(question[0], windowWidth / 2, (windowHeight / 8) * 6.7);

  }
  if (!isKeyPressed) {
    switch (key) {
      case "y":
        if (alive == true && !isKeyPressed) {
          happ += question[1]; //affect happiness
          god += question[2]; //afect goodness
          newQuestion()
        }
        key = " "
        break
      case "n":
        if (alive == true && !isKeyPressed) {
          happ -= question[1]; //afect happiness
          god -= question[2]; //affect goodness
          newQuestion()
        }
        key = " "
        break
      case "r":
        setup()
        key = " "
        break
    }
  }
}

function newQuestion() {
  count = 0;//reset timer
  age += 1; //age increase
  hapdata.push(happ);//record new happ value
  goddata.push(god);//record new god value
  clouds = clouds.map((_) => { return new Cloud(random(0, windowWidth), random(0, windowWidth)) })

  let age_rank = round(map(age, 0, 100, 0, 2))
  question = random(questions[age_rank])
}
