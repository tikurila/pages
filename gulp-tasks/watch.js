const { watch, series } = require("gulp");
const { style } = require("./style.js");
const { scripts } = require("./script.js");
const { browsersync } = require("./serv.js");

const watchTask = () => {
   watch("./*.html").on("change", browsersync.reload);

   watch("./src/styles/*.scss").on("change", series(style, browsersync.reload));
   watch("./src/scripts/*.js").on(
      "change",
      series(scripts, browsersync.reload)
   );
};

exports.watch = watchTask;
