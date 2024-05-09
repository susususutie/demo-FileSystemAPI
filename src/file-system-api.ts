async function getDirTree(dirHandle: FileSystemDirectoryHandle, depth = 3) {
  const children: { name: string; kind: "file" | "directory"; ellipsis?: boolean }[] = [];
  for await (const handle of dirHandle.values()) {
    if (handle.kind === "file") {
      children.push({
        name: handle.name,
        kind: handle.kind,
      });
    } else if (handle.kind === "directory") {
      if (depth <= 1) {
        children.push({
          name: handle.name,
          kind: handle.kind,
          ellipsis: true,
        });
      } else {
        children.push(await getDirTree(handle, depth - 1));
      }
    }
  }

  return {
    name: dirHandle.name,
    kind: dirHandle.kind,
    children,
  };
}

export function setupDir(element: HTMLButtonElement) {
  const defaultText = element.textContent;

  element.addEventListener("click", async () => {
    try {
      const dirHandle = await window.showDirectoryPicker();
      element.textContent = dirHandle.name;
      console.log(dirHandle);
      // TODO:
      // 1. 读取文件夹下的所有文件及目录层级
      const dir = await getDirTree(dirHandle);
      console.log(dir);

      // 2. 选取后读取其中某一文件, 展示文件内容
   

      const textarea = document.querySelector("textarea")!;
      textarea.textContent = JSON.stringify(dir, null, 2);
    } catch (error) {
      // console.error(error);
      element.textContent = defaultText;
    }
  });
}

export function setupFile(element: HTMLButtonElement) {
  const defaultText = element.textContent;
  element.addEventListener("click", async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      element.textContent = fileHandle.name;
      const file = await fileHandle.getFile();
      const fileContent = await file.text();

      const textarea = document.querySelector("textarea")!;
      textarea.textContent = fileContent;
      document.querySelector<HTMLButtonElement>("#confirm")!.onclick = async () => {
        const writable = await fileHandle.createWritable();
        await writable.write(textarea.value);
        await writable.close();
      };
    } catch (error) {
      element.textContent = defaultText;
    }
  });
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
