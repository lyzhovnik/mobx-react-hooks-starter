import history from '../../../history';
import logger from './Logger';

const ie10SupportError = { name: '', message: '', stack: '' };

window.addEventListener('error', event => {
  const error = event.error || ie10SupportError;
  logger.error(error, 'Unhandled window error global handler.');
  history.push('/error');
  event.preventDefault();
});

window.addEventListener('unhandledrejection', event => {
  const error = event.reason || ie10SupportError;
  logger.error(error, 'Unhandled rejection global handler.');
  history.push('/error');
  event.preventDefault();
});

export {};
