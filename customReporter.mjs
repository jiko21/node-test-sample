import { Transform } from 'node:stream';

const customReporter = new Transform({
  writableObjectMode: true,
  transform(event, encoding, callback) {
    const nest = event.data.nesting;
    const nestSpace = ' '.repeat(nest * 2);
    switch (event.type) {
      case 'test:start':
        callback(null, `\x1b[39m${nestSpace}test ${event.data.name} started\n`);
        break;
      case 'test:pass':
        callback(null, `\x1b[32m${nestSpace}test ${event.data.name} passed\n`);
        break;
      case 'test:fail':
        callback(null, `\x1b[31m${nestSpace}test ${event.data.name} failed\n`);
        break;
      case 'test:plan':
        callback(null, `\x1b[39m${nestSpace}test plan\n`);
        break;
      case 'test:diagnostic':
        callback(null, `\x1b[39m${nestSpace}${event.data.message}\n`);
        break;
      case 'test:coverage': {
        const { totalLineCount } = event.data.summary.totals;
        callback(null, `\x1b[39m${nestSpace}total line count: ${totalLineCount}\n`);
        break;
      }
    }
  },
});

export default customReporter;
