const steps = [
  {
    attachTo: ".logo__img bottom",
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back"
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next"
      }
    ],
    title: "lsdjflasjflasfjdldsjfldaj",
    text: [
      "React-Shepherd is a JavaScript library for guiding users through your React app."
    ],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      }
    }
  },

  {
    attachTo: ".nav__link bottom",

    buttons: [
      {
        classes: "shepherd-button-secondary",
        text: "Exit",
        type: "cancel"
      },
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back"
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next"
      }
    ],
    title: "Welcome to React-Shepherd!",
    text: [
      "React-Shepherd is a JavaScript library for guiding users through your React app."
    ],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      }
    }
  }
];

export default steps;
