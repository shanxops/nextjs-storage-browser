/**
 * This is a script that generates a constant, `VERSION` with the version
 * of the package. The version of a package will be used in logging and error messages.
 */
const path = require("path");
const fs = require("fs-extra");

const packages = ["@aws-amplify/ui-react-storage", "aws-amplify"];

packages.forEach((package) => {
  const { version } = require(`../node_modules/${package}/package.json`);

  fs.writeFileSync(
    path.resolve(
      `./app/version-${package.replace("@", "").replace("/", "-")}.ts`
    ),
    `export const VERSION = '${version}';\n`
  );
});
