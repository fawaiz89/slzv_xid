const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('Bzr9dlnBK7', uuidlib.v4());
	}

module.exports = generateId
