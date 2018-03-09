module.exports = function getZerosCount(number, base) {

 //1 find prime numbers
  var primeNumbers = [];
  var arr2 = {};
  var n = 0;
    
  nextPrime:
  for (let i = 2; i <= base; i++) {
	  for (let j = 2; j < Math.round(Math.sqrt(i))+1; j++) {
		if (i % j == 0) {	 
		  continue nextPrime;
		}
  }
  primeNumbers[n] = i;// add the prime number to array
  n++;  
  }
	var L = primeNumbers.length;
	//2 factorization	
	var degr ={};
	var countDegr=0;
	var res = base; 
	for (let i = 0; i <= L; i++) {
		while (res%primeNumbers[i]==0) {
			countDegr++;
			degr[primeNumbers[i]] = countDegr;
			res = res/primeNumbers[i];
		}
		var countDegr=0;
		var res = base; 
	}
	
	//3 check on divide 2..number
	for (let key in degr){
			var qDegr=0;
			var q = 1;
			var res = number;
				
				while (number>=Math.pow(key,q)) {
				res=Math.floor(number/Math.pow(key,q));
				countDegr=countDegr+res;
				q++;	 
			  }		
	arr2[key] = countDegr;
	
	countDegr=0; 		
	}
		
//4. Definition Zero by min
	tmp=99999999;
	var k =0;
	for (let key in arr2) {		
		tmp=Math.min(tmp,Math.floor(arr2[key]/degr[key]));
		k++;		
	}

	return tmp;    
  
}
