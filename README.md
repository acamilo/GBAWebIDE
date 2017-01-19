# GBAWebIDE

<iframe width="854" height="480" src="https://www.youtube.com/embed/WXM6rbmudyM" frameborder="0" allowfullscreen></iframe>

Compile and test GBA games in a browser tab.

You'll have to reassemble and uncompress the VM.

in the project root.
`cat vmaa vmab > vm.tar.gz`
`tar -xvzf vm.tar.gz'


Due to XSS prevention you'll need to run a http server locally
in the project root run
`python -m SimpleHTTPServer`
