import axios from 'axios';

/**
 * Logger for handling all errors in app, show them and send them to server.
 */
class Logger {
  /**
   * Prints error/warning to console
   *
   * @param functionality
   * @param error
   * @param type
   */
  private printToConsole(functionality: string, error: Error, type: 'warn' | 'error') {
    // eslint-disable-next-line no-console
    console[type](`Functionality: ${functionality} \n`, error.message, '\n', error.stack);
  }

  /**
   * Converts production error into human readable with nodejs.
   *
   * @param error
   * @param _functionality
   */
  private sendError(error: Error, _functionality: string) {
    return Promise.resolve({ data: error });
  }

  // TODO: uncomment if there is necessary for sending error to server side (kibana)
  private sendErrorTODO(error: Error, functionality: string) {
    return axios.post('/client-errors', {
      name: error.name || '',
      message: error.message || '',
      stack: error.stack || '',
      functionality: functionality || '',
      browserInfo: window.navigator.userAgent,
    });
  }
  /**
   * Gets error and functionality name then converts production stack trace into
   * human readable and send to the server.
   *
   * @param error
   * @param functionality
   */
  public async error(error: Error, functionality: string) {
    let convertedError: Error;

    try {
      const { data } = await this.sendError(error, functionality);
      convertedError = data;
    } catch (e) {
      convertedError = error;
    }

    this.printToConsole(functionality, convertedError, 'error');
  }

  /**
   * Displays warning
   *
   * @param error
   * @param functionality
   */
  public warn(error: Error, functionality: string) {
    this.printToConsole(functionality, error, 'warn');
  }
}

export default new Logger();
