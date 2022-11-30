let data ={
	name: 'Vova'
};

// export function getData(){
// 	return data;
// }
// export function setName(name){
// 	 data.name = name;
// }
const symbol =Symbol();
class User{
	constructor(fistName){
		this[symbol] = fistName;
	}

	getFirstName(){
		return this[symbol];
	}
}