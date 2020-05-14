const mag_pos_ary = [
  {
    file: "led.svg",
    left: "40%",
    top: "-13%",
    title: "Les LEDs rouge, verte et bleue",
    details:
      "Elles vous permettront de représenter un statut, d'attirer l’attention en clignotant, ou de transmettre des messages lumineux à un autre appareil et son capteur de lumière.",
  },
  {
    file: "magnetometer.svg",
    left: "61%",
    top: "-13%",
    title: "Le magnétomètre",
    details:
      "Il vous permettra de déterminer la direction (en 3D) du pôle nord, ou de détecter la proximité et les mouvements d'un aimant.",
  },
  {
    file: "light_sensor.svg",
    left: "71%",
    top: "-13%",
    title: "Le capteur de lumiere",
    details:
      "Il vous permettra de mesurer l’ensoleillement, ou de recevoir des messages lumineux envoyés par les LEDs d'un autre appareil.",
  },
  {
    file: "buzzer.svg",
    left: "79%",
    top: "3%",
    title: "Le buzzer",
    details:
      "Il vous permettra d’avertir l’utilisateur en programmant une petite alarme ou un réveil, de jouer des mélodies, ou d'utiliser le son pour communiquer avec un autre appareil.",
  },
  {
    file: "jack_port.svg",
    left: "87%",
    top: "18%",
    title: "Le port jack",
    details:
      "Il vous permettra de brancher des écouteurs pour jouer avec le son sans embêter votre entourage.",
  },
  {
    file: "microphone.svg",
    left: "79%",
    top: "25%",
    title: "Le micro",
    details:
      "Il vous permettra de détecter des bruits, et de recevoir des messages sonores émis par un autre carte par le son.",
  },
  {
    file: "button.svg",
    left: "69%",
    top: "40%",
    title: "Le bouton poussoir",
    details:
      "Il vous permettra de déclencher une action simple, et pourra être utilisé en combinaison avec la manette pour naviguer dans des menus, ou programmer de petis jeux.",
  },
  {
    file: "grove.svg",
    left: "30%",
    top: "60%",
    title: "Les 4 ports d'extension Grove",
    details:
      "Trois ports Grove numériques et un port Grove analogique vous permettront de brancher des capteurs et actionneurs supplémentaires de votre choix (non fournis) : servomoteur, sonde de température, capteur d’humidité, et bien plus.",
  },
  {
    file: "screen.svg",
    left: "26%",
    top: "10%",
    title: "Ecran OLED 128x32 pixels",
    details:
      "Au coeur de la carte, il vous permettra d’afficher des messages, de visualiser un menu, des courbes ou histogrammes, et de programmer toutes sortes de jeux. L’affichage est lisible même dans le noir.",
  },
  {
    file: "joystick.svg",
    left: "11%",
    top: "40%",
    title: "La manette",
    details:
      "Elle permet d’appuyer dans 5 directions : haut, droite, bas, gauche et centre, et de combiner plusieurs directions simultanément, par exemple haut-droite. En combinaison avec le bouton poussoir, vous pourrez l’utiliser pour naviguer dans un menu, ou programmer un petit jeu.",
  },
  {
    file: "infrared_emitter.svg",
    left: "-1%",
    top: "25%",
    title: "L'émetteur infrarouge",
    details:
      "Il vous permettra de transmettre de l’information discrètement à un autre appareil.",
  },
  {
    file: "infrared_receiver.svg",
    left: "0%",
    top: "5%",
    title: "Le récepteur infrarouge",
    details:
      "Il vous permettra de recevoir des messages infrarouge émis par un autre appareil, ou ceux d'une télécommande.",
  },
  {
    file: "accelerometer.svg",
    left: "8%",
    top: "-13%",
    title: "L'accéléromètre",
    details:
      "Il vous permettra de mesurer l’inclinaison de l’appareil, de détecter les retournements, les secousses, les chutes, et programmer toutes sortes de jeux d’équilibre.",
  },
  {
    file: "gyroscope.svg",
    left: "8%",
    top: "-13%",
    title: "Le gyroscope",
    details:
      "Il vous permettra de mesurer les changements d’orientation dans les trois dimensions.",
  },
  {
    file: "temperature-all.png",
    left: "8%",
    top: "-13%",
    title: "Le thermomètre",
    details:
      "Il mesure en permanence la température du composant. Il n'est pas très précis pour mesurer la température de la pièce, mais permet de détecter ses variations.",
  },
  {
    file: "distance.svg",
    left: "18%",
    top: "-13%",
    title: "Le capteur de distance",
    details:
      "Capable de détecter des objets jusqu’à 5m, il vous permettra de détecter lorsqu’une personne passe devant l’appareil, ou de contrôler une fonctionnalité en rapprochant ou éloignant sa main, par exemple pour programmer un instrument de musique qui joue une note plus ou moins aiguë selon la distance.",
  },
];

let mag_pos_idx = 0;

$("#menu").click(function () {
  if ($(window).width() <= 991.98) {
    $("#sidenav").css("width", "100%");
  } else {
    $("#sidenav").css("width", "50%");
  }
  $(".overlay").show();
});

$("#close-menu").click(function () {
  $("#sidenav").css("width", "0");
  $(".overlay").hide();
});

const setCurrentItem = (item) => {
  $("#mag").css("left", item.left);
  $("#mag").css("top", item.top);
  if ($(window).width() <= 991.98) {
    $("#mag_pos").css("left", `calc(${item.left} + 30px)`);
    $("#mag_pos").css("top", `calc(${item.top} - 5px)`);
  } else {
    $("#mag_pos").css("left", `calc(${item.left} + 60px)`);
    $("#mag_pos").css("top", `calc(${item.top} - 5px)`);
  }
  $("#mag_pos").text(mag_pos_idx + 1);
  $("#el-text").text(`${mag_pos_idx + 1}. ${item.title}`);
  $("#el-details").text(`${item.details}`);
  $("#el-image").attr("src", `assets/images/components/${item.file}`);
};

$("#prev").click(function () {
  mag_pos_idx = (mag_pos_idx - 1 + mag_pos_ary.length) % mag_pos_ary.length;

  setCurrentItem(mag_pos_ary[mag_pos_idx]);
});

$("#next").click(function () {
  mag_pos_idx = (mag_pos_idx + 1) % mag_pos_ary.length;

  setCurrentItem(mag_pos_ary[mag_pos_idx]);
});

$(document).mouseup(function (e) {
  if ($("#menu").is(e.target) || $("#menu").has(e.target).length > 0) {
    return;
  }

  var container = $("#sidenav");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $("#close-menu").click();
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $("#menu").addClass("bk-blue");
  } else {
    $("#menu").removeClass("bk-blue");
  }
});

$(function () {
  setCurrentItem(mag_pos_ary[0]);
});
