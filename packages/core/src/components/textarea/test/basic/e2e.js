const { register, navigate } = require('../../../../../scripts/e2e');

describe('textarea: basic', () => {

  register('navigates', navigate('http://localhost:3333/src/components/textarea/test/basic'));

});