/* Scripts  */
    var fileName = "0", map = "0", matchID = 0, time = -1200, winner = "0", initTmp = 0, divState = 0; // Global Variables
    
    function initialize() {
        initialState1();
        initialState2();
        initialState2a();
        initialState3();
        initialState3h();
        sliderStore("0"); // Temp value on initiate
        document.getElementById("heatmapContainerWrapper2a").style.display = "none"; // Combined div initiate
        document.getElementById("myRange2a").style.display = "none"; // Combined range initiate
        document.getElementById("sliderNumbers2").style.display = "none"; // Combined slider initiate
    }
    function initialState1() {
        document.getElementById("heatmapContainerInit").style.display = "none";
        document.getElementById("heatmapContainer1").style.display = "none";
        document.getElementById("heatmapContainer2").style.display = "none";
        document.getElementById("heatmapContainer3").style.display = "none";
        document.getElementById("heatmapContainer4").style.display = "none";
        document.getElementById("heatmapContainer4Cover").style.display = "none";
        document.getElementById("heatmapContainer5").style.display = "none";
        document.getElementById("text01").style.display = "none";
        document.getElementById("text02").style.display = "none";
        document.getElementById("text03").style.display = "none";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("text5").style.display = "none";
    }
    function initialState2() {
        document.getElementById("heatmapContainerInitc").style.display = "none";
        document.getElementById("heatmapContainer1c").style.display = "none";
        document.getElementById("heatmapContainer2c").style.display = "none";
        document.getElementById("heatmapContainer3c").style.display = "none";
        document.getElementById("heatmapContainer4c").style.display = "none";
        document.getElementById("heatmapContainer4Coverc").style.display = "none";
        document.getElementById("heatmapContainer5c").style.display = "none";
        document.getElementById("text201").style.display = "none";
        document.getElementById("text202").style.display = "none";
        document.getElementById("text203").style.display = "none";
        document.getElementById("text0a").style.display = "none";
        document.getElementById("text1a").style.display = "none";
        document.getElementById("text2a").style.display = "none";
        document.getElementById("text3a").style.display = "none";
        document.getElementById("text4a").style.display = "none";
        document.getElementById("text5a").style.display = "none";
        document.getElementById("text0b").style.display = "none";
        document.getElementById("text1b").style.display = "none";
        document.getElementById("text2b").style.display = "none";
        document.getElementById("text3b").style.display = "none";
        document.getElementById("text4b").style.display = "none";
        document.getElementById("text5b").style.display = "none";
    }
    function initialState2corra() {
        if (divState == 0) {
            document.getElementById("text201").style.display = "block";
            document.getElementById("text202").style.display = "block";
            document.getElementById("text203").style.display = "block";
            document.getElementById("text0a").style.display = "none";
            document.getElementById("text1a").style.display = "none";
            document.getElementById("text2a").style.display = "none";
            document.getElementById("text3a").style.display = "none";
            document.getElementById("text4a").style.display = "none";
            document.getElementById("text5a").style.display = "none";
        }
    }
    function initialState2corrb() {
        var check = document.getElementById("lockBox").checked;
        var sliderState2 = document.getElementById("myRange2").value;
        if (divState == 0 && check == true) {
            document.getElementById("text201").style.display = "none";
            document.getElementById("text202").style.display = "none";
            document.getElementById("text203").style.display = "none";
            document.getElementById("text0b").style.display = "none";
            document.getElementById("text1b").style.display = "none";
            document.getElementById("text2b").style.display = "none";
            document.getElementById("text3b").style.display = "none";
            document.getElementById("text4b").style.display = "none";
            document.getElementById("text5b").style.display = "none";
        }
        if (divState == 1 && check == false) {
            document.getElementById("text201").style.display = "none";
            document.getElementById("text202").style.display = "none";
            document.getElementById("text203").style.display = "none";
            document.getElementById("text0a").style.display = "none";
            document.getElementById("text1b").style.display = "none";
            document.getElementById("text2b").style.display = "none";
            document.getElementById("text3b").style.display = "none";
            document.getElementById("text4b").style.display = "none";
            document.getElementById("text5b").style.display = "none";
        }
        if (divState == 1 && check == false && sliderState2 == 0) {
            document.getElementById("text0a").style.display = "block";
        }
    }
    function initialState2a() {
        document.getElementById("heatmapCombinedInit").style.display = "none";
        document.getElementById("heatmapCombined1").style.display = "none";
        document.getElementById("heatmapCombined2").style.display = "none";
        document.getElementById("heatmapCombined3").style.display = "none";
        document.getElementById("heatmapCombined4").style.display = "none";
        document.getElementById("heatmapCombined5").style.display = "none";    
    }
    function initialState3() {
        document.getElementById("text301").style.display = "none";
        document.getElementById("text311").style.display = "none";
        document.getElementById("text321").style.display = "none";
        document.getElementById("text331").style.display = "none";
        document.getElementById("text302").style.display = "none";
        document.getElementById("text312").style.display = "none";
        document.getElementById("text322").style.display = "none";
        document.getElementById("text332").style.display = "none";
        document.getElementById("text3000").style.display = "none";
        document.getElementById("text3001").style.display = "none";
        document.getElementById("text3002").style.display = "none";
        document.getElementById("map").innerHTML = map;
        document.getElementById("matchID").innerHTML = matchID;
        document.getElementById("timeEnd").innerHTML = parseInt(20+(time/60))+"minutes";
        document.getElementById("winner").innerHTML = winner;
    }
    function initialState3h() {
        document.getElementById("heatmapUpload0").style.display = "none";
        document.getElementById("heatmapUpload1").style.display = "none";
        document.getElementById("heatmapUpload2").style.display = "none";
        document.getElementById("heatmapUpload3").style.display = "none";
        document.getElementById("heatmapUpload4").style.display = "none";
    }
    
    function sliderStore(temp) {
        var tmp1, tmp2, tmp3;
        var check = document.getElementById("lockBox").checked;
        var sliderState1 = document.getElementById("myRange1").value;
        var sliderState2 = document.getElementById("myRange2").value;
        var sliderState2a = document.getElementById("myRange2a").value;
        var sliderState3 = document.getElementById("myRange3").value;
        
        if (initTmp == 0) {
            tmp1 = temp;
            tmp2 = temp;
            tmp3 = temp;
            initTmp = 1;
        }
        // Slider 1
        switch (true) {
            case ((sliderState1 == 0) || (tmp1 == 0)):
                initialState1();
                tmp = 1;
                document.getElementById("text01").style.display = "block";
                document.getElementById("text02").style.display = "block";
                document.getElementById("text03").style.display = "block";
                document.getElementById("heatmapContainerInit").style.display = "block";
                document.getElementById("heatmapContainerInit").style.opacity = "1";
                break;
            case (sliderState1 == 1):
                initialState1();
                document.getElementById("text1").style.display = "block";
                document.getElementById("heatmapContainer1").style.display = "block";
                document.getElementById("heatmapContainer1").style.opacity = "1";
                break;
            case (sliderState1 == 2):
                initialState1();
                document.getElementById("text2").style.display = "block";
                document.getElementById("heatmapContainer2").style.display = "block";
                document.getElementById("heatmapContainer2").style.opacity = "1";
                break;
            case (sliderState1 == 3):
                initialState1();
                document.getElementById("text3").style.display = "block";
                document.getElementById("heatmapContainer3").style.display = "block";
                document.getElementById("heatmapContainer3").style.opacity = "1";
                break;
            case (sliderState1 == 4):
                initialState1();
                document.getElementById("text4").style.display = "block";
                document.getElementById("heatmapContainer4").style.display = "block";
                document.getElementById("heatmapContainer4").style.opacity = "1";
                document.getElementById("heatmapContainer4Cover").style.display = "block";
                document.getElementById("heatmapContainer4Cover").style.opacity = "1";
                break;
            case (sliderState1 == 5):
                initialState1();
                document.getElementById("text5").style.display = "block";
                document.getElementById("heatmapContainer5").style.display = "block";
                document.getElementById("heatmapContainer5").style.opacity = "1";
                document.getElementById("heatmapContainer4Cover").style.display = "block";
                document.getElementById("heatmapContainer4Cover").style.opacity = "1";
                break;
        }
        
        // Slider 2
        switch (true) {
            case ((sliderState2 == 0) || (tmp2 == 0)):
                initialState2();initialState2a();
                tmp2 = 1;
                document.getElementById("text201").style.display = "block";
                document.getElementById("text202").style.display = "block";
                document.getElementById("text203").style.display = "block";
                document.getElementById("heatmapContainerInitc").style.display = "block";
                document.getElementById("heatmapContainerInitc").style.opacity = "1";
                document.getElementById("heatmapCombinedInit").style.display = "block";
                document.getElementById("heatmapCombinedInit").style.opacity = "0.5";
                initialState2corrb();initialState2corra();
                break;
            case (sliderState2 == 1):
                initialState2();initialState2a();
                document.getElementById("text1a").style.display = "block";
                document.getElementById("text1b").style.display = "block";
                document.getElementById("heatmapContainer1c").style.display = "block";
                document.getElementById("heatmapContainer1c").style.opacity = "1";
                document.getElementById("heatmapCombined1").style.display = "block";
                document.getElementById("heatmapCombined1").style.opacity = "0.63";
                initialState2corrb();initialState2corra();
                break;
            case (sliderState2 == 2):
                initialState2();initialState2a();
                document.getElementById("text2a").style.display = "block";
                document.getElementById("text2b").style.display = "block";
                document.getElementById("heatmapContainer2c").style.display = "block";
                document.getElementById("heatmapContainer2c").style.opacity = "1";
                document.getElementById("heatmapCombined2").style.display = "block";
                document.getElementById("heatmapCombined2").style.opacity = "0.63";
                initialState2corrb();initialState2corra();
                break;
            case (sliderState2 == 3):
                initialState2();initialState2a();
                document.getElementById("text3a").style.display = "block";
                document.getElementById("text3b").style.display = "block";
                document.getElementById("heatmapContainer3c").style.display = "block";
                document.getElementById("heatmapContainer3c").style.opacity = "1";
                document.getElementById("heatmapCombined3").style.display = "block";
                document.getElementById("heatmapCombined3").style.opacity = "0.63";
                initialState2corrb();initialState2corra();
                break;
            case (sliderState2 == 4):
                initialState2();initialState2a();
                document.getElementById("text4a").style.display = "block";
                document.getElementById("text4b").style.display = "block";
                document.getElementById("heatmapContainer4c").style.display = "block";
                document.getElementById("heatmapContainer4c").style.opacity = "1";
                document.getElementById("heatmapContainer4Coverc").style.display = "block";
                document.getElementById("heatmapContainer4Coverc").style.opacity = "1";
                document.getElementById("heatmapCombined4").style.display = "block";
                document.getElementById("heatmapCombined4").style.opacity = "0.63";
                initialState2corrb();initialState2corra();
                break;
            case (sliderState2 == 5):
                initialState2();initialState2a();
                document.getElementById("text5a").style.display = "block";
                document.getElementById("text5b").style.display = "block";
                document.getElementById("heatmapContainer5c").style.display = "block";
                document.getElementById("heatmapContainer5c").style.opacity = "1";
                document.getElementById("heatmapContainer4Coverc").style.display = "block";
                document.getElementById("heatmapContainer4Coverc").style.opacity = "1";
                document.getElementById("heatmapCombined5").style.display = "block";
                document.getElementById("heatmapCombined5").style.opacity = "0.63";
                initialState2corrb();initialState2corra();
                break;
        }
        if (check == false) {
            switch (true) {
                case (sliderState2a == 0):
                    initialState2a();initialState2corrb();
                    document.getElementById("text0b").style.display = "block";
                    document.getElementById("heatmapCombinedInit").style.display = "block";
                    document.getElementById("heatmapCombinedInit").style.opacity = "0.5";
                    break;
                case (sliderState2a == 1):
                    initialState2a();initialState2corrb();
                    document.getElementById("text1b").style.display = "block";
                    document.getElementById("heatmapCombined1").style.display = "block";
                    document.getElementById("heatmapCombined1").style.opacity = "0.5";
                    break;
                case (sliderState2a == 2):
                    initialState2a();initialState2corrb();
                    document.getElementById("text2b").style.display = "block";
                    document.getElementById("heatmapCombined2").style.display = "block";
                    document.getElementById("heatmapCombined2").style.opacity = "0.5";
                    break;
                case (sliderState2a == 3):
                    initialState2a();initialState2corrb();
                    document.getElementById("text3b").style.display = "block";
                    document.getElementById("heatmapCombined3").style.display = "block";
                    document.getElementById("heatmapCombined3").style.opacity = "0.5";
                    break;
                case (sliderState2a == 4):
                    initialState2a();initialState2corrb();
                    document.getElementById("text4b").style.display = "block";
                    document.getElementById("heatmapCombined4").style.display = "block";
                    document.getElementById("heatmapCombined4").style.opacity = "0.5";
                    break;
                case (sliderState2a == 5):
                    initialState2a();initialState2corrb();
                    document.getElementById("text5b").style.display = "block";
                    document.getElementById("heatmapCombined5").style.display = "block";
                    document.getElementById("heatmapCombined5").style.opacity = "0.5";
                    break;
            }
        }
        
        // Slider 3
        if ((fileName == "0") && (initTmp == 1)) {
            sliderState3 = 0;
            tmp3 = 0;
        }
        switch (true) {
            case ((sliderState3 == 0) && (tmp3 == 0)):
                initialState3();
                tmp3 = 1;
                document.getElementById("text3000").style.display = "block";
                document.getElementById("text3001").style.display = "block";
                document.getElementById("text3002").style.display = "block";
                break;
            case ((sliderState3 == 0) || (tmp3 == 1)):
                initialState3();
                document.getElementById("text301").style.display = "block";
                document.getElementById("text302").style.display = "block";
                break;
            case (sliderState3 == 1):
                initialState3();
                document.getElementById("text311").style.display = "block";
                document.getElementById("text312").style.display = "block";
                break;
            case (sliderState3 == 2):
                initialState3();
                document.getElementById("text321").style.display = "block";
                document.getElementById("text322").style.display = "block";
                break;
            case (sliderState3 == 3):
                initialState3();
                document.getElementById("text331").style.display = "block";
                document.getElementById("text332").style.display = "block";
                break;
        }
    }
    
    function fileNameParse() {
        document.getElementById("myRange3").value = 0;
        switch(fileName) {
            default:
                initialState3h();
                document.getElementById("text3000").style.display = "block";
                document.getElementById("text3001").style.display = "block";
                document.getElementById("text3002").style.display = "block";
                alert("File uploaded not recognized as PUBG csv file.");
                break;
            case "testUploadZero.csv":
                initialState3h();
                document.getElementById("heatmapUpload0").style.display = "block";
                document.getElementById("heatmapUpload0").style.opacity = "1";
                alert("Upload successful.");
                break;
            case "testUploadOne.csv":
                initialState3h();
                document.getElementById("heatmapUpload1").style.display = "block";
                document.getElementById("heatmapUpload1").style.opacity = "1";
                alert("Upload successful.");
                break;
            case "testUploadTwo.csv":
                initialState3h();
                document.getElementById("heatmapUpload2").style.display = "block";
                document.getElementById("heatmapUpload2").style.opacity = "1";
                alert("Upload successful.");
                break;
            case "testUploadThree.csv":
                initialState3h();
                document.getElementById("heatmapUpload3").style.display = "block";
                document.getElementById("heatmapUpload3").style.opacity = "1";
                alert("Upload successful.");
                break;
            case "testUploadFour.csv":
                initialState3h();
                document.getElementById("heatmapUpload4").style.display = "block";
                document.getElementById("heatmapUpload4").style.opacity = "1";
                alert("Upload successful.");
                break;
        }
    }
    
    function hideShow() {
        var check = document.getElementById("lockBox").checked;
        document.getElementById("myRange2").value = 0;
        document.getElementById("myRange2a").value = 0;
        if ((divState == 1) && (check == false)) {
            document.getElementById("heatmapContainerWrapper2a").style.display = "block";
            divState = 1;
            return;
        }
        if ((divState == 0) && (check == true)) {
            alert("Heatmap 2 of player eliminators is now being shown, select a game time.");
            document.getElementById("heatmapContainerWrapper2a").style.display = "block";
            divState = 1;
            return;
        }
        if (divState == 0) {
            document.getElementById("heatmapContainerWrapper2a").style.display = "block";
            divState = 1;
            return;
        }
        else if (divState == 1) {
            document.getElementById("heatmapContainerWrapper2a").style.display = "none";
            divState = 0;
            return;
        } 
    }
    
    function lock() {
        var check = document.getElementById("lockBox").checked;
        if (check == true) {
            initialState2();
            document.getElementById("myRange2").value = 0;
            document.getElementById("heatmapContainerInitc").style.display = "block";
            document.getElementById("sliderText2").style.color = "#F22121";
            document.getElementById("myRange2a").style.display = "none";
            document.getElementById("sliderNumbers2").style.display = "none";
            document.getElementById("text201").style.display = "block";
            document.getElementById("text202").style.display = "block";
            document.getElementById("text203").style.display = "block";
        }
        else if (check == false) {
            initialState2();
            document.getElementById("myRange2").value = 0;
            document.getElementById("heatmapContainerInitc").style.display = "block";
            document.getElementById("myRange2a").value = 0;
            document.getElementById("sliderText2").style.color = "#44ED47";
            document.getElementById("myRange2a").style.display = "block";
            document.getElementById("sliderNumbers2").style.display = "block";
            document.getElementById("text201").style.display = "none";
            document.getElementById("text202").style.display = "none";
            document.getElementById("text203").style.display = "none";
            document.getElementById("text0a").style.display = "block";
            document.getElementById("text0b").style.display = "block";
        }
        hideShow();
    }
    
    function handleFiles(files) {
        var filePath = document.getElementById("csvFileInput3").value;
        fileName = filePath.substring(filePath.lastIndexOf("\\")+1);
        // Check for the various File API support.
        if (window.FileReader) {
            // FileReader are supported.
            getAsText(files[0]);
        } else {
            alert('FileReader are not supported in this browser.');
        }
      }
      function getAsText(fileToRead) {
        var reader = new FileReader();
        // Read file into memory as UTF-8      
        reader.readAsText(fileToRead);
        // Handle errors load
        reader.onload = loadHandler;
        reader.onerror = errorHandler;
      }
      function loadHandler(event) {
        var csv = event.target.result;
        processData(csv);
      }
      function errorHandler(evt) {
        if(evt.target.error.name == "NotReadableError") {
            alert("Cannot read file!");
        }
      }
    function processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
            var tarr = [];
            for (var j=0; j<data.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
        /* Needed for heatmap creatability
        var heatmap = h337.create({container: document.getElementById("heatmapContainerTest")});
        window.h = heatmap;
        */
        var str = lines+'';
        var res = str.split(","); //res is the array
        //var scale = 500;
        // 5290077 4400355
        // 0123456 7890123
        // 1209 526111 8 432951 8
        // 0123 456789 0 123456 7
        if (fileName.includes("test") == true) {
            for (i = 11; i < 12 ; i++) {
                map = "Miramar";
                matchID = res[i].slice(0, 9);
                time = res[i].slice(9, 12);
                winner = res[i].slice(17, 19);      
                /* Needed for heatmap creatability
                    var xcoordconv = res[i].slice(13, 18);
                    var xcoord = parseInt((((xcoordconv/800000)*500)));
                    var ycoordconv = res[i].slice(20, 26)*4;
                    var ycoord = parseInt((((ycoordconv/800000)*500)));
                    var strength = 1;   
                if (((xcoord || ycoord) <= 0) || ((xcoord || ycoord) >= 500)) { //Skips bluezone kills
                    continue;
                }
                //h.addData({x: xcoord, y: ycoord, value: strength });
                //alert("x-coordinate is: "+xcoord+" which is: "+xcoordconv+"\n y-coordinate is: "+ycoord+" which is: "+ycoordconv);
                h.addData({x: 1000, y: 70*i, value: strength });
                
                if (time == 0 && greenLight == 0) { // 0 minutes
                }
                if (time <= 240 && time >= 0 && sliderState == 1) { // 0 to 4 minutes
                    h.addData({x: xcoord, y: ycoord, value: strength });
                }
                if (time <= 480 && time > 240 && sliderState == 2) { // 4 to 8 minutes
                    h.addData({x: xcoord, y: ycoord, value: strength });
                }
                if (time <= 720 && time > 480 && sliderState == 3) { // 8 to 12 minutes
                    h.addData({x: xcoord, y: ycoord, value: strength });
                }
                if (time <= 960 && time > 720 && sliderState == 4) { // 12 to 16 minutes
                    h.addData({x: xcoord, y: ycoord, value: strength });
                }
                if (time <= 1200 && time > 960 && sliderState == 5) { // 16 to 20 minutes
                    h.addData({x: xcoord, y: ycoord, value: strength });
                }
                */
            }
            sliderStore();fileNameParse();
        }
        else {
            initialState3();
            document.getElementById("text3000").style.display = "block";
            document.getElementById("text3001").style.display = "block";
            document.getElementById("text3002").style.display = "block";
            fileName = "0";
            initTmp = 1;
            sliderStore("0");fileNameParse();
        }
    }