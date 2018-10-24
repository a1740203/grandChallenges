/* Scripts  */

<!--
    initialState1();
    initialState3();
    uploadState();
    sliderStore();
    
    function initialState1() {
        document.getElementById("heatmapContainerInit").style.display = "none";
        document.getElementById("heatmapContainer1").style.display = "none";
        document.getElementById("heatmapContainer2").style.display = "none";
        document.getElementById("heatmapContainer3").style.display = "none";
        document.getElementById("heatmapContainer4").style.display = "none";
        document.getElementById("heatmapContainer4Cover").style.display = "none";
        document.getElementById("heatmapContainer5").style.display = "none";
        document.getElementById("heatmapUpload0").style.display = "none";
        document.getElementById("heatmapUpload1").style.display = "none";
        document.getElementById("heatmapUpload2").style.display = "none";
        document.getElementById("heatmapUpload3").style.display = "none";
        document.getElementById("heatmapUpload4").style.display = "none";
        document.getElementById("text01").style.display = "none";
        document.getElementById("text02").style.display = "none";
        document.getElementById("text03").style.display = "none";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("text5").style.display = "none";
        document.getElementById("text301").style.display = "none";
        document.getElementById("text311").style.display = "none";
        document.getElementById("text321").style.display = "none";
        document.getElementById("text331").style.display = "none";
        document.getElementById("text302").style.display = "none";
        document.getElementById("text312").style.display = "none";
        document.getElementById("text322").style.display = "none";
        document.getElementById("text332").style.display = "none";
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
    }
    function uploadState() {
        initialState3();
        document.getElementById("text301").style.display = "block";
        document.getElementById("text302").style.display = "block";
        document.getElementById("heatmapUpload0").style.display = "none";
        document.getElementById("heatmapUpload1").style.display = "none";
        document.getElementById("heatmapUpload2").style.display = "none";
        document.getElementById("heatmapUpload3").style.display = "none";
        document.getElementById("heatmapUpload4").style.display = "none";
        document.getElementById("map").innerHTML = map;
        document.getElementById("matchID").innerHTML = matchID;
        document.getElementById("timeEnd").innerHTML = parseInt(20+(time/60))+"minutes";
        document.getElementById("winner").innerHTML = winner;
    }
    
    function sliderStore(temp) {
        var tmp = temp;
        var sliderState1 = document.getElementById("myRange1").value;
        var sliderState2 = document.getElementById("myRange2").value;
        var sliderState3 = document.getElementById("myRange3").value;
        
        switch (true) {
            case (sliderState1 == 0), (tmp == 0):
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
            case (sliderState3 == 0):
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
                uploadState();
                initialState3();
                document.getElementById("map").innerHTML = "";
                document.getElementById("matchID").innerHTML = "";
                document.getElementById("timeEnd").innerHTML = "";
                document.getElementById("winner").innerHTML = "";
                document.getElementById("text3000").style.display = "block";
                document.getElementById("text3001").style.display = "block";
                document.getElementById("text3002").style.display = "block";
                alert("File uploaded not recognized as PUBG csv file.");
                break;
            case "testUploadZero.csv":
                uploadState();
                document.getElementById("heatmapUpload0").style.display = "block";
                document.getElementById("heatmapUpload0").style.opacity = "1";
                break;
            case "testUploadOne.csv":
                uploadState();
                document.getElementById("heatmapUpload1").style.display = "block";
                document.getElementById("heatmapUpload1").style.opacity = "1";
                break;
            case "testUploadTwo.csv":
                uploadState();
                document.getElementById("heatmapUpload2").style.display = "block";
                document.getElementById("heatmapUpload2").style.opacity = "1";
                break;
            case "testUploadThree.csv":
                uploadState();
                document.getElementById("heatmapUpload3").style.display = "block";
                document.getElementById("heatmapUpload3").style.opacity = "1";
                break;
            case "testUploadFour.csv":
                uploadState();
                document.getElementById("heatmapUpload4").style.display = "block";
                document.getElementById("heatmapUpload4").style.opacity = "1";
                break;
        }
    }
    
    function handleFiles(files) {
        var filePath = document.getElementById("csvFileInput").value;
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
        fileNameParse();
    }
    
-->