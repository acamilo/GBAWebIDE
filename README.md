# GBAWebIDE
Compile and test GBA games in a browser tab.

You'll have to reassemble and uncompress the VM.

in the project root.
`cat vmaa vmab > vm.tar.gz`
`tar -xvzf vm.tar.gz'


Due to XSS prevention you'll need to run a http server locally
in the project root run
`python -m SimpleHTTPServer`
