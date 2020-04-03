const steps = [
  {
    attachTo: {
      element: ".logo__img",
      on: "bottom"
    },
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
    title: "Our coolest Logo",
    text: ["This is our logo for React-Shepherd. It's amazing. isn't it?"],
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
    attachTo: {
      element: ".nav__link",
      on: "bottom"
    },
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
    title: "Navigation Section",
    text: ["It's our cool navigation build with css flexbox."],
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
    attachTo: {
      element: ".hero__text",
      on: "top"
    },
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
    title: "Hero Title",
    text: ["This is our main Slogan to go ahead."],
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
    attachTo: {
      element: ".boxed-btn",
      on: "left"
    },
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
    title: "About Us!",
    text: ["Click here and learn more about us."],
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
    attachTo: {
      element: ".dummy .dummy__left .dummy__heading",
      on: "right"
    },
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
    title: "It's our services one",
    text: ["It's our awesome services one."],
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
    attachTo: {
      element: ".dummy .dummy__left .bordered-btn",
      on: "bottom"
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back"
      },
      {
        classes: "shepherd-button-primary",
        text: "Done !",
        type: "next"
      }
    ],
    title: "Explore more!",
    text: ["Click here to explore more about our services"],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      }
    }
  },
  
];

export default steps;
