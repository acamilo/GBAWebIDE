var gba;
var debug = null;

 try {
        gba = new GameBoyAdvance();
        gba.keypad.eatInput = true;
        gba.setLogger(function(level, error) {
                console.log(error);
                gba.pause();
        });
        var canvas = document.getElementById('screen');
        gba.setCanvas(canvas);
        loadRom('gbajs/resources/bios.bin', function(bios) {gba.setBios(bios);});
  } catch (exception) {
        gba = null;
  }
  
  
             
function run(file) {
  gba.loadRomFromFile(file, function(result) {
		if (result) {
			gba.runStable();
		} });}
		
		
