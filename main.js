import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

const editor = new EditorJs({
    holderId: 'editorjs',
    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link'],
        },
        list: {
            class: List,
            inlineToolbar: ['link', 'bold']
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        }
    }
});

let savebtn = document.querySelector('button');
savebtn.addEventListener('click', function () {
    editor.save().then(outputdata => {
        console.log(outputdata)
    })
})