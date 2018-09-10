import style from "./lib/style";
import { version, name } from "../package.json";

export default {
  name: name,
  version: version,
  hooks: {
    preRender: function(next) {
      this.attributes.add("freesewing:plugin-title", version);
      this.style += style;
      next();
    }
  },
  macros: {
    title: function(so) {
      let overwrite = true;
      if (so.append) overwrite = false;
      let prefix = "";
      if (so.prefix) prefix = so.prefix;
      this.points[`_${prefix}_titleNr`] = so.at
        .attr("data-text", so.nr, overwrite)
        .attr("data-text-class", "title-nr note fill-note");
      let shift = 10;
      if (so.title && so.title !== "") {
        this.points[`_${prefix}_titleName`] = so.at
          .shift(-90, 13)
          .attr("data-text", so.title)
          .attr("data-text-class", "title-name");
        shift += 10;
      }
      this.points[`_${prefix}_titlePattern`] = so.at
        .shift(-90, shift)
        .attr("data-text", this.context.config.name)
        .attr("data-text", "v" + this.context.config.version)
        .attr("data-text-class", "title-pattern fill-note");
    }
  }
};