When you type inside the <textarea>, the character counter updates automatically. Explain why this happens.
  This happens because we have Vue reactivity implemented. When you type in the text area, v-model updates stickie.text, and Vue detects it and reloads the counter, thus updating it in real time.

Explain what deep: true does and what would stop working if we removed it.
  deep: true ensures that the watcher looks at every element of the stickies list instead of just stickies itself. If we removed it, our localStorage persistence would break
  because the watcher wouldn't look at the notes themselves, only at the stickies array, which wouldn't have changed.
  
What type of data does localStorage store? Why do we use JSON.stringify() when saving? What would happen if we forgot JSON.parse() when loading?
  localStorage stores key value pairs, but only as strings. Thus, we have to stringify our array so that it saves and can be reloaded correctly. If we forgot JSON.parse(),
  the string version of the array would be loaded, and the persistence would break. When tested, it appears to add empty notes on every refresh instead of reloading from storage.

What does .filter() return? Why assign the result back to this.stickies? Why !== and not ===?
  .filter() returns a copy of the passed in array with only the elements that match the given condition. We assign this back because it's only a shallow copy, and doesn't update this.stickies
  itself, so we have to update it ourselves. We use !== because we only want the elements that do NOT match the given ID to be put back into the list.

Why is saving implemented in a separate method ( saveToStorage ) instead of writing localStorage
code directly in the watcher?
  It's simply more efficient coding. If we were to add more features later on, it's much easier to call a function rather than hunt down the exact code we need and copy paste. Additionally,
  if we wanted to change the function in the future, it's a lot easier to change one function that gets called than a lot of identical lines of code.
