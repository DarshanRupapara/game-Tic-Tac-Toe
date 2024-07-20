var i = 0
var a = 0;
var b = 0;
var countx = document.getElementById('a')
var counto = document.getElementById('b')

function game(id) {
    i++;
    var getcli = document.getElementById(id)

    if (i % 2 === 0 && i <= 9) {
        if (getcli.innerHTML == "") {
            getcli.innerHTML = 'X'
            a++;
            countx.innerHTML = "X total move is :  " + a
        }
        else {
            i--;

        }

    }
    else {

        if (getcli.innerHTML == "" && i <= 9) {
            getcli.innerHTML = 'O'
            b++;
            counto.innerHTML = "O total move is : " + b
        }
        else {
            i--;

        }
    }




    if (document.getElementById('1').innerHTML == "O" && document.getElementById('2').innerHTML == "O"
        && document.getElementById('3').innerHTML == "O"
        || document.getElementById('4').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
        && document.getElementById('6').innerHTML == "O"
        || document.getElementById('7').innerHTML == "O" && document.getElementById('8').innerHTML == "O"
        && document.getElementById('9').innerHTML == "O"
        || document.getElementById('1').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
        && document.getElementById('9').innerHTML == "O"
        || document.getElementById('3').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
        && document.getElementById('7').innerHTML == "O"
        || document.getElementById('1').innerHTML == "O" && document.getElementById('4').innerHTML == "O"
        && document.getElementById('7').innerHTML == "O"
        || document.getElementById('2').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
        && document.getElementById('8').innerHTML == "O"
        || document.getElementById('3').innerHTML == "O" && document.getElementById('6').innerHTML == "O"
        && document.getElementById('9').innerHTML == "O") {
        document.getElementById("win").innerHTML = 'O win'
        document.getElementById('b').style.color = 'red'


        if (document.getElementById('1').innerHTML == "O" && document.getElementById('2').innerHTML == "O"
            && document.getElementById('3').innerHTML == "O") {
            document.getElementById("bak-1").style.backgroundColor = 'red'
            document.getElementById("bak-2").style.backgroundColor = 'red'
            document.getElementById("bak-3").style.backgroundColor = 'red'
            document.getElementById("bak-1").style.color = 'white'
            document.getElementById("bak-2").style.color = 'white'
            document.getElementById("bak-3").style.color = 'white'

        }

        else if (document.getElementById('4').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
            && document.getElementById('6').innerHTML == "O") {
            document.getElementById("bak-4").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-6").style.backgroundColor = 'red'
            document.getElementById("bak-4").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-6").style.color = 'white'
        }

        else if (document.getElementById('7').innerHTML == "O" && document.getElementById('8').innerHTML == "O"
            && document.getElementById('9').innerHTML == "O") {
            document.getElementById("bak-7").style.backgroundColor = 'red'
            document.getElementById("bak-8").style.backgroundColor = 'red'
            document.getElementById("bak-9").style.backgroundColor = 'red'
            document.getElementById("bak-7").style.color = 'white'
            document.getElementById("bak-8").style.color = 'white'
            document.getElementById("bak-9").style.color = 'white'
        }

        else if (document.getElementById('1').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
            && document.getElementById('9').innerHTML == "O") {
            document.getElementById("bak-1").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-9").style.backgroundColor = 'red'
            document.getElementById("bak-1").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-9").style.color = 'white'
        }

        else if (document.getElementById('3').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
            && document.getElementById('7').innerHTML == "O") {
            document.getElementById("bak-3").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-7").style.backgroundColor = 'red'
            document.getElementById("bak-3").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-7").style.color = 'white'
        }

        else if (document.getElementById('1').innerHTML == "O" && document.getElementById('4').innerHTML == "O"
            && document.getElementById('7').innerHTML == "O") {
            document.getElementById("bak-1").style.backgroundColor = 'red'
            document.getElementById("bak-4").style.backgroundColor = 'red'
            document.getElementById("bak-7").style.backgroundColor = 'red'
            document.getElementById("bak-1").style.color = 'white'
            document.getElementById("bak-4").style.color = 'white'
            document.getElementById("bak-7").style.color = 'white'
        }

        else if (document.getElementById('2').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
            && document.getElementById('8').innerHTML == "O") {
            document.getElementById("bak-2").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-8").style.backgroundColor = 'red'
            document.getElementById("bak-2").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-8").style.color = 'white'
        }

        else if (document.getElementById('3').innerHTML == "O" && document.getElementById('6').innerHTML == "O"
            && document.getElementById('9').innerHTML == "O") {
            document.getElementById("bak-3").style.backgroundColor = 'red'
            document.getElementById("bak-6").style.backgroundColor = 'red'
            document.getElementById("bak-9").style.backgroundColor = 'red'
            document.getElementById("bak-3").style.color = 'white'
            document.getElementById("bak-6").style.color = 'white'
            document.getElementById("bak-9").style.color = 'white'
        }






        i = 10;
    }
    else if
        (document.getElementById('1').innerHTML == "X" && document.getElementById('2').innerHTML == "X"
        && document.getElementById('3').innerHTML == "X"
        || document.getElementById('4').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
        && document.getElementById('6').innerHTML == "X"
        || document.getElementById('7').innerHTML == "X" && document.getElementById('8').innerHTML == "X"
        && document.getElementById('9').innerHTML == "X"
        || document.getElementById('1').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
        && document.getElementById('9').innerHTML == "X"
        || document.getElementById('3').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
        && document.getElementById('7').innerHTML == "X"
        || document.getElementById('1').innerHTML == "X" && document.getElementById('4').innerHTML == "X"
        && document.getElementById('7').innerHTML == "X"
        || document.getElementById('2').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
        && document.getElementById('8').innerHTML == "X"
        || document.getElementById('3').innerHTML == "X" && document.getElementById('6').innerHTML == "X"
        && document.getElementById('9').innerHTML == "X") {
        document.getElementById("win").innerHTML = 'X win'
        document.getElementById('a').style.color = 'red'


        if (document.getElementById('1').innerHTML == "X" && document.getElementById('2').innerHTML == "X"
            && document.getElementById('3').innerHTML == "X") {
            document.getElementById("bak-1").style.backgroundColor = 'red'
            document.getElementById("bak-2").style.backgroundColor = 'red'
            document.getElementById("bak-3").style.backgroundColor = 'red'
            document.getElementById("bak-1").style.color = 'white'
            document.getElementById("bak-2").style.color = 'white'
            document.getElementById("bak-3").style.color = 'white'
        }

        else if (document.getElementById('4').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
            && document.getElementById('6').innerHTML == "X") {
            document.getElementById("bak-4").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-6").style.backgroundColor = 'red'
            document.getElementById("bak-4").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-6").style.color = 'white'
        }

        else if (document.getElementById('7').innerHTML == "X" && document.getElementById('8').innerHTML == "X"
            && document.getElementById('9').innerHTML == "X") {
            document.getElementById("bak-7").style.backgroundColor = 'red'
            document.getElementById("bak-8").style.backgroundColor = 'red'
            document.getElementById("bak-9").style.backgroundColor = 'red'
            document.getElementById("bak-7").style.color = 'white'
            document.getElementById("bak-8").style.color = 'white'
            document.getElementById("bak-9").style.color = 'white'
        }

        else if (document.getElementById('1').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
            && document.getElementById('9').innerHTML == "X") {
            document.getElementById("bak-1").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-9").style.backgroundColor = 'red'
            document.getElementById("bak-1").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-9").style.color = 'white'
        }

        else if (document.getElementById('3').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
            && document.getElementById('7').innerHTML == "X") {
            document.getElementById("bak-3").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-7").style.backgroundColor = 'red'
            document.getElementById("bak-3").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-7").style.color = 'white'
        }

        else if (document.getElementById('1').innerHTML == "X" && document.getElementById('4').innerHTML == "X"
            && document.getElementById('7').innerHTML == "X") {
            document.getElementById("bak-1").style.backgroundColor = 'red'
            document.getElementById("bak-4").style.backgroundColor = 'red'
            document.getElementById("bak-7").style.backgroundColor = 'red'
            document.getElementById("bak-1").style.color = 'white'
            document.getElementById("bak-4").style.color = 'white'
            document.getElementById("bak-7").style.color = 'white'
        }

        else if (document.getElementById('2').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
            && document.getElementById('8').innerHTML == "X") {
            document.getElementById("bak-2").style.backgroundColor = 'red'
            document.getElementById("bak-5").style.backgroundColor = 'red'
            document.getElementById("bak-8").style.backgroundColor = 'red'
            document.getElementById("bak-2").style.color = 'white'
            document.getElementById("bak-5").style.color = 'white'
            document.getElementById("bak-8").style.color = 'white'
        }

        else if (document.getElementById('3').innerHTML == "X" && document.getElementById('6').innerHTML == "X"
            && document.getElementById('9').innerHTML == "X") {
            document.getElementById("bak-3").style.backgroundColor = 'red'
            document.getElementById("bak-6").style.backgroundColor = 'red'
            document.getElementById("bak-9").style.backgroundColor = 'red'
            document.getElementById("bak-3").style.color = 'white'
            document.getElementById("bak-6").style.color = 'white'
            document.getElementById("bak-9").style.color = 'white'
        }



        i = 10;
    }
    else if (i === 9) {
        document.getElementById("bak-1").style.backgroundColor = 'black'
        document.getElementById("bak-2").style.backgroundColor = 'black'
        document.getElementById("bak-3").style.backgroundColor = 'black'
        document.getElementById("bak-4").style.backgroundColor = 'black'
        document.getElementById("bak-5").style.backgroundColor = 'black'
        document.getElementById("bak-6").style.backgroundColor = 'black'
        document.getElementById("bak-7").style.backgroundColor = 'black'
        document.getElementById("bak-8").style.backgroundColor = 'black'
        document.getElementById("bak-9").style.backgroundColor = 'black'
        document.getElementById("bak-1").style.color = 'red'
        document.getElementById("bak-2").style.color = 'red'
        document.getElementById("bak-3").style.color = 'red'
        document.getElementById("bak-4").style.color = 'red'
        document.getElementById("bak-5").style.color = 'red'
        document.getElementById("bak-6").style.color = 'red'
        document.getElementById("bak-7").style.color = 'red'
        document.getElementById("bak-8").style.color = 'red'
        document.getElementById("bak-9").style.color = 'red'





        document.getElementById("win").innerHTML = 'Oops No one win'
    }

}