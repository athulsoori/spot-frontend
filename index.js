var request=  new superagent();
    var uploadButton=document.getElementById('uploadid1');
    var uploadButton2=document.getElementById('uploadid2');
    var fileupload2=document.getElementById('chooseid2');
    var fileupload=document.getElementById('chooseid1');
    var liveButton=document.getElementById('live');

window.addEventListener('load',function(){
//     navigator.getUserMedia = (navigator.getUserMedia ||
//                            navigator.webkitGetUserMedia ||
//                            navigator.mozGetUserMedia || 
//                            navigator.msGetUserMedia);


    //console.log(uploadButton)
    fileupload.addEventListener('change',function(){
        
//        console.log(this.files[0]);
    })
    uploadButton.addEventListener('click',function(){
        //alert("i was clicked");  
    
    var file = document.getElementById('chooseid1').files[0];
        console.log(file)
        superagent.post('http://localhost:5000/run')
        .attach('filename',file)
        .end(function(err,res){

//          var result=JSON.stringify(res)
          console.log(res)
         var faces=JSON.parse(res.text);
            console.log(faces)
//         console.log(faces['body']);
swal({
  title: "Uploaded",
  type: "success",
  showCancelButton: true,
  confirmButtonColor: "#52d3aa",
  confirmButtonText: "Count",
  closeOnConfirm: false,
},
function(){
  swal("Number of faces: "+faces.faces ,"", "success");
});

//         var element=document.getElementById('resultid');
//            element.innerHTML=num;
//            alert("No of faces: "+ num);
          
//            var e=JSON.stringify(res,null,2);
//           console.log(e)
//            var element=document.getElementById('resultid');
//            element.innerHTML=e;
//            var term = (Object.keys(e["faces"])[0])
//            console.log(e["faces"][term])
            
        })
});
    fileupload2.addEventListener('change',function(){
        console.log(this.files[0])
    })
    uploadButton2.addEventListener('click',function(){
        var file2=document.getElementById('chooseid2').files[0];
        console.log(file2);
        superagent.post('http://localhost:5000/runvideo')
        .attach('filename',file2)
        .end(function(err,res){
            var response=JSON.parse(res.text);
            console.log(response.faces);
            swal({
  title: "Uploaded",
  type: "success",
  showCancelButton: true,
  confirmButtonColor: "#52d3aa",
  confirmButtonText: "Count",
  closeOnConfirm: false,
},
function(){
  swal("Number of faces: "+response.faces ,"", "success");
});
        })
    });
    
    liveButton.addEventListener('click',function(){
        superagent.post('http://localhost:5000/live_video')
        .end(function(err,res){
            console.log(res.text)
        })
    })

})
   
// document.getElementById("live").addEventListener("click", function(){
//            console.log("hello")
//            if (navigator.getUserMedia) 
//            {
//  // Request the camera.
//                 navigator.getUserMedia(
//    // Constraints
//                {
//                    video: true
//                },
//
//    // Success Callback
//         function(localMediaStream) 
//                {
//                    var vid = document.getElementById('camera-stream');
//                    var link = window.URL.createObjectURL(localMediaStream);
//                    console.log(link);
//                },
//
//    // Error Callback
//            function(err) 
//            {
//      // Log the error to the console.
//                console.log('The following error occurred when trying to use getUserMedia: ' + err);
//            }
//            );
//
//        }
//         else 
//            {
//                alert('Sorry, your browser does not support getUserMedia');
//            }
//        });