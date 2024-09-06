/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '1xl': '1281px'
      },
      colors: {
        "header-start": "#474747",
        "header-end": "#161616",
        'test': "green",
        'chat-red-side': '#FF2F2F',
        'chat-before-fight': '#59D841',
        'chat': "#171E28",
        "message": "#0C0F14",
        "chat-border": "#33446F",
        "refresh-start": "#65FD7F",
        "refresh-end": "#53E513",
        "refresh-shadown": "#1D9511",
        "red-side-start": "#FD716F",
        "red-side-end": "#EB2A2B",
        "red-side-shadow": "#9B0C0B",
        "blue-side-start": "#5DABFE",
        "blue-side-end": "#1274DF",
        "blue-side-shadow": "#0530A9",
        "vs-start": "#494949",
        "vs-end": "#000",
        "all-start": "#284C88",
        "all-end": "#112849",
        "btn-action-start": "#82BFFE",
        "btn-action-end": "#12A8FD",
        "btn-action-border": "#0D71AF",
        "round": "#132D3C",
        "round-active": "#02A2FF",
        "on-red-side": "#79292A",
        "red-side-process": "#FDA4A0",
        "on-blue-side": "#244368",
        "blue-side-process": "#97CAFF",
        "equal-start": "#B68B15",
        "equal-middle": "#FDECBA",
        "equal-end": "#DEAD39",
        "btn-equal-start": "#e4a531",
        "btn-equal-start": "#e4a531",
        "btn-equal-middle": "#f4cd58",
        "btn-equal-end": "#f1b731",
        "btn-muaystep-start": "#D2222C",
        "btn-muaystep-end": "#4B0C0D",
        "btn-event-start": "#04A29E",
        "btn-event-end": "#0A5369",
        "btn-reward-start": "#269BDE",
        "btn-reward-end": "#162C61",
        "btn-rule-start": "#FEBD17",
        "btn-rule-end": "#D9652B",
        "btn-result-start": "#FB8DBB",
        "btn-result-end": "#CF3F8D",
        "btn-history-start": "#94D5EB",
        "btn-history-end": "#0A7AB2",
        "fighter-title": "#C34434",
        "container-content": "#222b38",
        "on-container-content": "#222b38",
      },
      boxShadow: {
        'button': '0px 4px',
        'button-sm': '0px 2px',
        'only-shadow': '0 30px 40px',
      },
      fontFamily: {
        'prompt': 'Prompt'
      },
      animation: {
        'marquee': 'marquee 10s linear infinite'
      },
      keyframes: {
        'marquee': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '80%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-10%)',
          },
        }
      }
    },
  },
}

