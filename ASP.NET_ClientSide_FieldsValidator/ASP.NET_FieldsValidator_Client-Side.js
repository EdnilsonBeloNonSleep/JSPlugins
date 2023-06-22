function validateFields(arr, serverSideBtn) {

        var length = arr.length;//THE LENGTH OF THE ARRAY CONTAINIG THE TEXT FILEDS ID TO BE VALIDATED

        var iValidateCounter = 0;

        var btnServerSide = document.getElementById(serverSideBtn);//MY SERVER-SIDE BUTTON A SHOULD CLICK IF ALL FIELDS ARE VALIDATED

        for (var i = 0; i < length; i++) {//RUN through ALL INPUTS TO VALIDATE ITS VALUES

            var input = document.getElementById(arr[i]);

            if (input.value == "") {
                input.style.border = "1px solid red";
            }
            else {
                input.style.border = "1px solid #DDDDDD";
                iValidateCounter++;
            }
        }

        if (iValidateCounter == arr.length) { //CHECK IF ALL FIELDS ARE VALIDATED
            alert("ALL FIELDS VALIDATES SUCCESSFULLY! :)");
            //btnServerSide.click();
        }
        else {
            return false;
        }

    }