export function setupDir(element:HTMLButtonElement) {
  const defaultText = element.textContent;
  element.addEventListener('click', async ev => {
    try {
      const dirHandle = await window.showDirectoryPicker();
      /**
       * { name: 'src', kind: 'directory' }
       */
      element.textContent = dirHandle.name;
      console.log(dirHandle)
    } catch (error) {
      
    }
  }) 
}

export function setupFile(element:HTMLButtonElement) {
  const defaultText = element.textContent;
  element.addEventListener('click', async ev => {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      /**
       * { name: '.babelrc', kind: 'file' }
       */
      element.textContent = fileHandle.name;
      console.log(fileHandle)
    } catch (error) {
      
    }
  })
}