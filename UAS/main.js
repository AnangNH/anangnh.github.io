
function check(){

	var Pertanyaan1 = document.quiz.Pertanyaan1.value;
	var Pertanyaan2 = document.quiz.Pertanyaan2.value;
	var Pertanyaan3 = document.quiz.Pertanyaan3.value;
	var Pertanyaan4 = document.quiz.Pertanyaan4.value;
	var Pertanyaan5 = document.quiz.Pertanyaan5.value;
	var Pertanyaan6 = document.quiz.Pertanyaan6.value;
	var Pertanyaan7 = document.quiz.Pertanyaan7.value;
	var Pertanyaan8 = document.quiz.Pertanyaan8.value;
	var Pertanyaan9 = document.quiz.Pertanyaan9.value;

	var Pertanyaan10 = document.quiz.Pertanyaan10.value;
	var correct = 0;

	if (Pertanyaan1 == "3"){
		correct++
	}
	if (Pertanyaan2 == "9"){
		correct++
	}
	if (Pertanyaan3 == "2"){
		correct++
	}
	if (Pertanyaan4 == "13"){
		correct++
	}
	if (Pertanyaan5 == "3"){
		correct++
	}
	if (Pertanyaan6 == "29"){
		correct++
	}
	if (Pertanyaan7 == "90"){
		correct++
	}
	if (Pertanyaan8 == "12"){
		correct++
	}
	if (Pertanyaan9 == "9"){
		correct++
	}
	if (Pertanyaan10 == "46"){
		correct++
	}

	var messages = ["Belajar Lagi !!" , "Belajar Lebih Keras !" , "Bagus ,tingkat kan !!" , "Selamat !!"]

	var range ;

	if (correct < 1){
		range = 0
	}
	if (correct > 0 && correct < 6){
		range = 1
	}
	if (correct > 5 && correct < 10){
		range = 2
	}
	if (correct > 9){
		range = 3
	}


	document.getElementById('after_submit').style.visibility = "visible";


	document.getElementById('messages').innerHTML = messages[range];
	document.getElementById('number_correct').innerHTML = "kamu Menjawab " +correct+ " Soal Dengan Benar";
	

}