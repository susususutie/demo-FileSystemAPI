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
      // TODO:
      // 1. 读取文件夹下的所有文件及目录层级
      // 2. 选取后读取其中某一文件, 展示文件内容
      // 3. 在页面上修改文件内容后, 写入本地
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

/**
 * ref:
 * https://juejin.cn/post/6991277058278047751#heading-6
 * https://developer.mozilla.org/zh-CN/docs/Web/API/FileSystem
 * https://www.qinwg.cn/n/fe/file-system-access-api.html
 * https://zhuanlan.zhihu.com/p/561155461
 * https://blog.meathill.com/js/use-file-system-access-api-to-handle-local-files.html
 * https://note.xianqiao.wang/post/file-system-access-api
 * https://www.developers.pub/article/1166915
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker
 */