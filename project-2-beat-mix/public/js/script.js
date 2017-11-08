// Drum Arrays
let kicks = [false,false,false,false,
false,false,false,false,
false,false,false,false,
false,false,false,false];

let snares = [false,false,false,false,
false,false,false,false,
false,false,false,false,
false,false,false,false];

let hiHats = [false,false,false,false,
false,false,false,false,
false,false,false,false,
false,false,false,false];

let rideCymbals =[false,false,false,false,
false,false,false,false,
false,false,false,false,
false,false,false,false];

//used to convert the string name of an array into the actual array
function getDrumArray(drumArrayName){
	switch (drumArrayName) {
		case 'kicks':
			return kicks;
		case 'snares':
			return snares;
		case 'hiHats':
			return hiHats;
		case 'rideCymbals':
			return rideCymbals;
		default:
			return;
	}
}

function toggleDrum(drumType, drumIndex){
	let drum = getDrumArray(drumType);

	if(!drum){
		return;
	}

	if(drumIndex > 15 || drumIndex < 0){
		return;
	}

	drum[drumIndex] = !drum[drumIndex];
}

function clear(drumType){
	let drum = getDrumArray(drumType);
	if(!drum){
		return;
	}

	drum.fill(false);
	
}

function invert(drumType){
	let drum = getDrumArray(drumType);
	if(!drum){
		return;
	}

	for(let i = 0; i < drum.length; i++){
		drum[i] = !drum[i];
	}
}

function getNeighborPads(x,y,size){
	let neighborPads = [];

	if(x >= size || y >= size || x < 0 || y < 0 || size < 1){
		return neighborPads;
	}

	neighborPads.push([x-1, y]);
	neighborPads.push([x+1, y]);
	neighborPads.push([x, y-1]);
	neighborPads.push([x, y+1]);

	return neighborPads.filter(function(neighbor){
		return neighbor.every(function(coord){
			if (coord >= 0 && coord < size){
				return true; 
			}
		})
	})
	
}