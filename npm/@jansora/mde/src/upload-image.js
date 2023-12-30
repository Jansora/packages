"use client"

export const onImagePasted = async (dataTransfer, uploadFn, setMarkdown, id) => {
    const files = [];
    for (let index = 0; index < dataTransfer.items.length; index += 1) {
        const file = dataTransfer.files.item(index);
        // console.log("kind", file)
        // // if (item.kind === 'file') {
        // //     console.log('粘贴的内容是文件');
        // //     // 这里可以处理文件内容，例如上传文件等
        // // }
        if (file && !!file.name && !!file.lastModified) {
            files.push(file);
        }
    }
    if (files.length === 0) {
        return;
    }
    const result = await uploadFn(files);
    const textarea = document.getElementById(id).querySelector('textarea');
    result.map(
         (r) => {
            const insertedMarkdown = insertToTextArea(`\n![${r.filename}](${r.url})\n`, textarea);
            if (!insertedMarkdown) {
                return;
            }
            setMarkdown(insertedMarkdown);
        }
    )
};
export const insertToTextArea = (intsertString, textarea) => {
    // const textarea = document.querySelector('textarea');
    if (!textarea) {
        return null;
    }

    let sentence = textarea.value;
    const len = sentence.length;
    const pos = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const front = sentence.slice(0, pos);
    const back = sentence.slice(pos, len);

    sentence = front + intsertString + back;

    textarea.value = sentence;
    textarea.selectionEnd = end + intsertString.length;

    return sentence;
};
