# Rippload
Chrome extension to allow "ripple loading" bookmarks from a folder.

"Ripple loading" is a term I made up. What it means is that the URLs in question are loaded in one at a time, and that successive URLs will not start to load until the previous URLs have finished.

The way you work it is, when you load the extension, there's an "R" logo to the right of the omnibox in Chrome, and when you click on that you see two buttons, labelled *Start* and *Resume*.  

When you click *Start*, the extension searches your bookmarks for a folder named "Ripples", and makes a list of all its children. It then starts to load them into background tabs, in order one at a time.

You can stop the loading sequence by closing the currently-loading tab before it has fully loaded.  If you do that, the extension's background page will maintain state, and if you subsequently open the extension pop-up and hit *Resume*, it will pick up where it left off.  If you subsequently hit *Start*, it will rescan the bookmarks for the "Ripples" folder and start from the beginning.

To install the extension, download the files, go to "chrome://extensions", enable developer mode, click on "load unpacked extension", and navigate to the "extensions" directory, and open it.

I use this to pre-load tons of webcomics over a crappy DSL connection.

You may use it however you like.


