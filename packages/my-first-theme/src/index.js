import Root from "./components"

//  <html2react> replaces any <a href="..."> links in content with the <Link> component
import link from "@frontity/html2react/processors/link";

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {

      //  option to show/hide the URL that sits just under main heading
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {

      //  toggle the value of isUrlVisible between true and false
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default myFirstTheme