const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const target = args._.length ? args._[0] : '@tpf/components';
const formats = args.f;
const sourcemap = args.s;
console.log('args: ', target, formats, sourcemap);
