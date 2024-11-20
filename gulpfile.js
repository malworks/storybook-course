
import uswds from '@uswds/compile';

// const uswds = require("@uswds/compile"); // require is used for node and import is used w/ js

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = "./assets/css";
uswds.paths.dist.theme = "./sass";

/**
 * Exports
 * Add as many as you need
 */

export const init = uswds.init;
export const compile = uswds.compile; // we changed from node style import/export to ES6 Modules style imports

// 2 ways to import import from 'file' and import {init} from 'gulpfile...'
// New software should use ES 6 modules, unless require is already used in existing
// if run into "type doesnt exist, try @types/packageName" however for uswds that doesnt exist