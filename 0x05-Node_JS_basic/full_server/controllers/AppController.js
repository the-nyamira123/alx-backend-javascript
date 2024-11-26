/**
 * Contains the miscellaneous route handlers.
 * @author Nyamira Nathan Orangi <https://github.com/the-nyamira123>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
