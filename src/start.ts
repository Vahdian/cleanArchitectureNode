import { RoutesApp } from './RoutesApp';

const handleError = (e: Error) => {
  console.log(e);
  process.exit(1);
};

try {
  new RoutesApp().start();
} catch (e) {
  handleError(e);
}

process.on('uncaughtException', (err) => {
  console.log('uncaughtException', err);
  process.exit(1);
});
