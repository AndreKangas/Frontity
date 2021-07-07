const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org",

          //  to use custom post types
          //  property takes an array of objects as it's value, with each object in the array defining a distinct post type
          "postTypes": [
            {

              //  add one object to the array
              //  the CPT name, defined by the WordPress function register_post_type()
              type: "destinations",

              //  same as type unless the args array passed to register_post_type() specifies something different
              endpoint: "destinations",

              //  to list all the posts of that post type,
              //  args array passed to register_post_type() must include 'has_archive' => true
              archive: "/destinations"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
