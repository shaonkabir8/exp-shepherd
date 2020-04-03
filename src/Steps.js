const steps = [
  {
    attachTo: {
      element: ".logo__img",
      on: "bottom"
    },
    beforeShowPromise: function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
    buttons: [
      {
        text: "Back",
        type: "back"
      },
      {
        text: "Next",
        type: "next"
      }
    ],
    highlightClass: 'highlight',
    scrollTo: true,
    showCancelLink: true,
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
    beforeShowPromise: function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
    buttons: [
      {
        text: "Back",
        type: "back"
      },
      {
        text: "Next",
        type: "next"
      }
    ],
    highlightClass: 'highlight',
    scrollTo: true,
    showCancelLink: true,
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
    beforeShowPromise: function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
    buttons: [
      {
        text: "Back",
        type: "back"
      },
      {
        text: "Next",
        type: "next"
      }
    ],
    highlightClass: 'highlight',
    scrollTo: true,
    showCancelLink: true,
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
    beforeShowPromise: function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
    buttons: [
      {
        text: "Back",
        type: "back"
      },
      {
        text: "Next",
        type: "next"
      }
    ],
    highlightClass: 'highlight',
    scrollTo: true,
    showCancelLink: true,
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
    beforeShowPromise: function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
    buttons: [
      {
        text: "Back",
        type: "back"
      },
      {
        text: "Next",
        type: "next"
      }
    ],
    highlightClass: 'highlight',
    scrollTo: true,
    showCancelLink: true,
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
    beforeShowPromise: function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
    buttons: [
      {
        text: "Back",
        type: "back"
      },
      {
        text: "Done !",
        type: "next"
      }
    ],
    highlightClass: 'highlight',
    scrollTo: true,
    showCancelLink: true,
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
