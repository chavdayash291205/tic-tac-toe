let turn = 1;

$(document).ready(function () {
    $("#c10").hide();
    $("#c11").hide();
    $("#c12").hide();
    $('.cell').on('click', function() {
        let inputvalue = $(this).val();
        if (inputvalue == '') {
            if (turn == 1) {
                $(this).val("0");
                turn = 2;
            } else {
                $(this).val("X");
                turn = 1;
            }
            let checkwinning = checkwin();
            if (checkwinning == "0") {
                $("#c10").show();
                $('.cell').off('click');
            } else if (checkwinning == "X") {
                $("#c11").show();
                $('.cell').off('click');
            } else if (checkwinning == "Game Over") {
                $("#c12").show();

            } else {
                console.log("Game Continue");
            }
        }
    });

    $('#but').click(function () {
        $('#b1, #b2, #b3,#b4, #b5, #b6,#b7, #b8, #b9').val("");


        $("#c10").hide();
        $("#c11").hide();
        $("#c12").hide();

        $('.cell').on('click', function fetchboard() {
            let inputvalue = $(this).val();
            if (inputvalue == '') {
                if (turn == 1) {
                    $(this).val("0");
                    turn = 2;
                } else {
                    $(this).val("X");
                    turn = 1;
                }
                let checkwinning = checkwin();
                if (checkwinning == "0") {
                    $("#c10").show();
                    $('.cell').off('click');
                } else if (checkwinning == "X") {
                    $("#c11").show();
                    $('.cell').off('click');
                } else if (checkwinning == "Game Over") {
                    $("#c12").show();

                } else {
                    console.log("Game Continue");
                }
            }
        });
    });


    function checkwin() {

        let b1 = $('#b1').val();
        let b2 = $('#b2').val();
        let b3 = $('#b3').val();
        let b4 = $('#b4').val();
        let b5 = $('#b5').val();
        let b6 = $('#b6').val();
        let b7 = $('#b7').val();
        let b8 = $('#b8').val();
        let b9 = $('#b9').val();

        if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
            return "X";
        } else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
            return "X";
        } else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
            return "X";
        } else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
            return "X";
        } else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
            return "X";
        } else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
            return "X";
        } else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
            return "X";
        } else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
            return "X";
        }
        else if (b1 == '0' && b2 == '0' && b3 == '0') {
            return "0";
        }
        else if (b4 == '0' && b5 == '0' && b6 == '0') {
            return "0";
        }
        else if (b7 == '0' && b8 == '0' && b9 == '0') {
            return "0";
        }
        else if (b1 == '0' && b4 == '0' && b7 == '0') {
            return "0";
        } else if (b2 == '0' && b5 == '0' && b8 == '0') {
            return "0";
        } else if (b3 == '0' && b6 == '0' && b9 == '0') {
            return "0";
        } else if (b1 == '0' && b5 == '0' && b9 == '0') {
            return "0";
        } else if (b3 == '0' && b5 == '0' && b7 == '0') {
            return "0";
        } else if (b1 == '' || b2 == '' || b3 == '' || b4 == '' || b5 == '' || b6 == '' || b7 == '' || b8 == '' || b9 == '') {
            return "Game Continue";
        }
        else {

            return "Game Over";
        }


    }
});
