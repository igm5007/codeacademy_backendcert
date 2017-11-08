// Use this presets array inside your presetHandler
const presets = require('./presets');



// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
	if(method === 'GET'){
		if(presets[index]){
			return [200, presets[index]];
		} else {
			return [404];
		}
	} else if(method === 'PUT'){
		presets[index] = newPresetArray
		if(presets[index]){
			return [200, presets[index]];
		} else{
			return [404];
		}
	} else {
		return [400];
	}
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
