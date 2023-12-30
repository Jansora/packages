import React from "react";

import {commands as AtomicCommands} from '@uiw/react-md-editor';


const title1 = {
    name: 'title1',
    keyCommand: 'title1',
    shortcuts: 'ctrlcmd+1',
    prefix: '# ',
    suffix: '',
    buttonProps: { 'aria-label': 'Insert title1 (ctrl + 1)', title: 'Insert title1 (ctrl + 1)' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>
    ,
    execute: (state, api) => {
        let modifyText = `## ${state.selectedText}\n`;
        if (!state.selectedText) {
            modifyText = `## `;
        }
        api.replaceSelection(modifyText);
    },
};
const title2 = {
    name: 'title2',
    keyCommand: 'title2',
    render: (command, disabled, executeCommand) => {
        return (
            <button
                aria-label="Insert title2"
                disabled={disabled}
                onClick={(evn) => {
                    // evn.stopPropagation();
                    executeCommand(command, command.groupName)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heading-2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>            </button>
        )
    },
    execute: (state, api) => {
        let modifyText = `## ${state.selectedText}\n`;
        if (!state.selectedText) {
            modifyText = `## `;
        }
        api.replaceSelection(modifyText);
    },
}


const title3 = {
    name: 'title3',
    keyCommand: 'title3',
    buttonProps: { 'aria-label': 'Insert title3' },
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heading-3"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/></svg>    ),
    execute: (state, api) => {
        let modifyText = `### ${state.selectedText}\n`;
        if (!state.selectedText) {
            modifyText = `### `;
        }
        api.replaceSelection(modifyText);
    },
};


const bold = {
    name: 'bold',
    keyCommand: 'bold',
    shortcuts: 'ctrlcmd+b',
    prefix: '**',
    buttonProps: { 'aria-label': 'Add bold text (ctrl + b)', title: 'Add bold text (ctrl + b)' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bold"><path d="M14 12a4 4 0 0 0 0-8H6v8"/><path d="M15 20a4 4 0 0 0 0-8H6v8Z"/></svg>    ,
    execute: (state, api) => {
        let modifyText = `**${state.selectedText}**`;
        if (!state.selectedText) {
            modifyText = `**1**`;
        }
        api.replaceSelection(modifyText);
    },
};

const italic = {
    name: 'italic',
    keyCommand: 'italic',
    shortcuts: 'ctrlcmd+i',
    prefix: '*',
    buttonProps: { 'aria-label': 'Add italic text (ctrl + i)', title: 'Add italic text (ctrl + i)' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-italic"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
    ,
    execute: (state, api) => {
        let modifyText = `*${state.selectedText}*`;
        if (!state.selectedText) {
            modifyText = `*1*`;
        }
        api.replaceSelection(modifyText);
    },
};

const strikethrough = {
    name: 'strikethrough',
    keyCommand: 'strikethrough',
    shortcuts: 'ctrl+shift+x',
    buttonProps: {
        'aria-label': 'Add strikethrough text (ctrl + shift + x)',
        title: 'Add strikethrough text (ctrl + shift + x)',
    },
    prefix: '~~',
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-strikethrough"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" x2="20" y1="12" y2="12"/></svg>
    ,
    execute: (state, api) => {
        let modifyText = `~~${state.selectedText}~~`;
        if (!state.selectedText) {
            modifyText = `~~1~~`;
        }
        api.replaceSelection(modifyText);
        api.replaceSelection(modifyText);
    },
};

const hr = {
    name: 'hr',
    keyCommand: 'hr',
    shortcuts: 'ctrlcmd+h',
    prefix: '\n\n---\n',
    suffix: '',
    buttonProps: { 'aria-label': 'Insert HR (ctrl + h)', title: 'Insert HR (ctrl + h)' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
    ,
    execute: (state, api) => {
        let modifyText = `\n---\n${state.selectedText}`;
        if (!state.selectedText) {
            modifyText = `\n---\n`;
        }
        api.replaceSelection(modifyText);
    },
};


const quote = {
    name: 'quote',
    keyCommand: 'quote',
    shortcuts: 'ctrlcmd+q',
    prefix: '> ',
    buttonProps: { 'aria-label': 'Insert a quote (ctrl + q)', title: 'Insert a quote (ctrl + q)' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-quote"><path d="M17 6H3"/><path d="M21 12H8"/><path d="M21 18H8"/><path d="M3 12v6"/></svg>
    ,
    execute: (state, api) => {
        let modifyText = `\n> ${state.selectedText}\n`;
        if (!state.selectedText) {
            modifyText = `\n> 1\n`;
        }
        api.replaceSelection(modifyText);
    },
};

const code = {
    name: 'code',
    keyCommand: 'code',
    shortcuts: 'ctrlcmd+j',
    prefix: '`',
    buttonProps: { 'aria-label': 'Insert code (ctrl + j)', title: 'Insert code (ctrl + j)' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ,
    execute: (state, api) => {
        let modifyText = `\`${state.selectedText}\``;
        if (!state.selectedText) {
            modifyText = `\`1\``;
        }
        api.replaceSelection(modifyText);
    },
};

const codeBlock = {
    name: 'codeBlock',
    keyCommand: 'codeBlock',
    shortcuts: 'ctrlcmd+shift+j',
    prefix: '```',
    buttonProps: { 'aria-label': 'Insert Code Block (ctrl + shift + j)', title: 'Insert Code Block (ctrl + shift +j)' },

    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>    ,
    execute: (state, api) => {
        let modifyText = '\n```\n' + `${state.selectedText}` + '\n```\n';
        if (!state.selectedText) {
            modifyText = '\n```\n' + `` + '\n```\n';
        }
        api.replaceSelection(modifyText);
    },
};


const comment = {
    name: 'comment',
    keyCommand: 'comment',
    shortcuts: 'ctrlcmd+/',
    prefix: '<!-- ',
    suffix: ' -->',
    buttonProps: { 'aria-label': 'Insert comment (ctrl + /)', title: 'Insert comment (ctrl + /)' },

    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-code"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="m10 10-2 2 2 2"/><path d="m14 10 2 2-2 2"/></svg>
    ,
    execute: (state, api) => {
        let modifyText = `<!--${state.selectedText}-->`;
        if (!state.selectedText) {
            modifyText = `<!--1-->`;
        }
        api.replaceSelection(modifyText);
    },
};


const link = {
    name: 'link',
    keyCommand: 'link',
    shortcuts: 'ctrlcmd+l',
    prefix: '[',
    suffix: '](url)',
    buttonProps: { 'aria-label': 'Add a link (ctrl + l)', title: 'Add a link (ctrl + l)' },

    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>

    ,
    execute: (state, api) => {
        let modifyText = `[](${state.selectedText})`;
        if (!state.selectedText) {
            modifyText = `[]()`;
        }
        api.replaceSelection(modifyText);
    },
};


const image = {
    name: 'image',
    keyCommand: 'image',
    shortcuts: 'ctrlcmd+k',
    prefix: '![image](',
    suffix: ')',
    buttonProps: { 'aria-label': 'Add image (ctrl + k)', title: 'Add image (ctrl + k)' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>    ,
    execute: (state, api) => {
        let modifyText = `![](${state.selectedText})`;
        if (!state.selectedText) {
            modifyText = `![]()`;
        }
        api.replaceSelection(modifyText);
    },
};


const table = {
    name: 'table',
    keyCommand: 'table',
    prefix: '\n| Header | Header |\n|--------|--------|\n| Cell | Cell |\n| Cell | Cell |\n| Cell | Cell |\n\n',
    suffix: '',
    buttonProps: { 'aria-label': 'Add table', title: 'Add table' },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sheet"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/></svg>

    ,
    execute: (state, api) => {
        let modifyText = `${state.selectedText}\n| Header | Header |\n|--------|--------|\n| Cell | Cell |\n| Cell | Cell |\n| Cell | Cell |\n\n
        `;
        if (!state.selectedText) {
            modifyText = `\n| Header | Header |\n|--------|--------|\n| Cell | Cell |\n| Cell | Cell |\n| Cell | Cell |\n\n`;
        }
        api.replaceSelection(modifyText);
    },
};





const codePreview = {
    name: 'preview',
    keyCommand: 'preview',
    value: 'preview',
    shortcuts: 'ctrlcmd+9',
    buttonProps: { 'aria-label': 'Preview code (ctrl + 9)', title: 'Preview code (ctrl + 9)' },
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M6 8h2"/><path d="M6 12h2"/><path d="M16 8h2"/><path d="M16 12h2"/></svg>

    ),
    execute: (state, api, dispatch, executeCommandState, shortcuts,) => {
        api.textArea.focus();
        if (shortcuts && dispatch && executeCommandState) {
            dispatch({ preview: 'preview' });
        }
    },
};

const codeEdit = {
    name: 'edit',
    keyCommand: 'preview',
    value: 'edit',
    shortcuts: 'ctrlcmd+7',
    buttonProps: { 'aria-label': 'Edit code (ctrl + 7)', title: 'Edit code (ctrl + 7)' },
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-square"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>

    ),
    execute: (state, api, dispatch, executeCommandState, shortcuts,) => {
        api.textArea.focus();
        if (shortcuts && dispatch && executeCommandState) {
            dispatch({ preview: 'edit' });
        }
    },
};

const codeLive = {
    name: 'live',
    keyCommand: 'preview',
    value: 'live',
    shortcuts: 'ctrlcmd+8',
    buttonProps: { 'aria-label': 'Live code (ctrl + 8)', title: 'Live code (ctrl + 8)' },
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-columns"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="12" x2="12" y1="3" y2="21"/></svg>

    ),
    execute: (state, api, dispatch, executeCommandState, shortcuts,) => {
        api.textArea.focus();
        if (shortcuts && dispatch && executeCommandState) {
            dispatch({ preview: 'live' });
        }
    },
};

const help = {
    name: 'help',
    keyCommand: 'help',
    buttonProps: {
        'aria-label': 'Open help',
        title: 'Open help'
    },
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

    ),
    execute: () => {
        window.open('https://www.markdownguide.org/basic-syntax/', '_blank', 'noreferrer');
    }
};

const unorderedListCommand = {
    name: 'unordered-list',
    keyCommand: 'list',
    shortcuts: 'ctrl+shift+u',
    prefix: '- ',
    buttonProps: {
        'aria-label': 'Add unordered list (ctrl + shift + u)',
        title: 'Add unordered list (ctrl + shift + u)'
    },
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
    ),
    execute: (state, api) => {
        commands.makeList(state, api, '- ');
    }
};


const orderedListCommand = {
    name: 'ordered-list',
    keyCommand: 'list',
    shortcuts: 'ctrl+shift+o',
    prefix: '1. ',
    buttonProps: {
        'aria-label': 'Add ordered list (ctrl + shift + o)',
        title: 'Add ordered list (ctrl + shift + o)'
    },
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-ordered"><line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>

    ),
    execute: (state, api) => {
        commands.makeList(state, api, (item, index) => index + 1 + ". ");
    }
};

const checkedListCommand = {
    name: 'checked-list',
    keyCommand: 'list',
    shortcuts: 'ctrl+shift+c',
    prefix: '- [ ] ',
    buttonProps: {
        'aria-label': 'Add checked list (ctrl + shift + c)',
        title: 'Add checked list (ctrl + shift + c)'
    },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-todo"><rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>
    ,
    execute: (state, api) => {
        commands.makeList(state, api, (item, index) => "- [ ] ");
    }
};

const fullscreen = {
    name: 'fullscreen',
    keyCommand: 'fullscreen',
    shortcuts: 'ctrlcmd+0',
    value: 'fullscreen',
    buttonProps: {
        'aria-label': 'Toggle fullscreen (ctrl + 0)',
        title: 'Toggle fullscreen (ctrl+ 0)'
    },
    icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>    ,
    execute: (state, api, dispatch, executeCommandState, shortcuts,) => {
        api.textArea.focus();
        if (shortcuts && dispatch && executeCommandState) {
            dispatch({
                fullscreen: !executeCommandState.fullscreen
            });
        }
    }
};



export const commands = {
    ...AtomicCommands,
    title1: {
        ...AtomicCommands.title1 || {},
        ...title1,
    },
    title2: {
        ...AtomicCommands.title2 || {},
        ...title2,
    },
    title3: {
        ...AtomicCommands.title3 || {},
        ...title3,
    },
    bold: {
        ...AtomicCommands.bold || {},
        ...bold,
    },
    italic: {
        ...AtomicCommands.italic || {},
        ...italic,
    },
    strikethrough: {
        ...AtomicCommands.strikethrough || {},
        ...strikethrough,
    },
    hr: {
        ...AtomicCommands.hr || {},
        ...hr,
    },
    quote: {
        ...AtomicCommands.quote || {},
        ...quote,
    },
    code: {
        ...AtomicCommands.code || {},
        ...code,
    },
    codeBlock: {
        ...AtomicCommands.codeBlock || {},
        ...codeBlock,
    },
    table: {
        ...AtomicCommands.table || {},
        ...table,
    },
    orderedListCommand: {
        ...AtomicCommands.orderedListCommand || {},
        ...orderedListCommand,
    },
    unorderedListCommand: {
        ...AtomicCommands.unorderedListCommand || {},
        ...unorderedListCommand,
    },
    checkedListCommand: {
        ...AtomicCommands.checkedListCommand || {},
        ...checkedListCommand,
    },
    link: {
        ...AtomicCommands.link || {},
        ...link,
    },
    image: {
        ...AtomicCommands.image || {},
        ...image,
    },
    comment: {
        ...AtomicCommands.comment || {},
        ...comment,
    },
};
