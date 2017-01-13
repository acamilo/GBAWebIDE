var emulator = new V86Starter({
    memory_size: 256 * 1024 * 1024,
    screen_container: document.getElementById("screen_container"),
    bios: {
        url: "v86/bios/seabios.bin",
    },
    vga_bios: {
        url: "v86/bios/vgabios.bin",
    },
    hda: {
        url: "tinycore.raw",
    },
    initial_state: {
        url: "v86state.bin",
    },
    autostart: true,
});


function _base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

var base64 = "";
var title="";
var state="idle";

function handleFile(name,b64){
  console.log("Got a file: "+title);
  var ext = name.split('.').pop();
  switch(ext){
    case "gba":
      gba.reset();
      gba.setRom(_base64ToArrayBuffer(b64));
      gba.runStable();
    break;
  } 
}
    emulator.add_listener("serial0-output-char", function(char)
    {
          
      switch(state){
        case "idle":
        
        break;
        case "title":
          if (char!=')') title=title+char;
        break;
        case "base64":
          if (char!=']') base64=base64+char;
        break;
      }
      
      switch(char){
        case '(':
          title="";
          state="title";
          break;
        case ')':
          state="idle";
          break;
        case '[':
          base64="";
          state="base64";
          break;
        case ']':
          state="idle";
          handleFile(title,base64);
          break;
      }
    });
    
    
function saveState(){
  emulator.save_state(function(error, new_state)
        {
            if(error)
            {
                throw error;
            }
            var a = document.createElement("a");
            a.download = "v86state.bin";
            a.href = window.URL.createObjectURL(new Blob([new_state]));
            a.dataset.downloadurl = "application/octet-stream:" + a.download + ":" + a.href;
            a.click();
        });
}
